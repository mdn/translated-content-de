---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Payment Handler API bietet einen standardisierten Satz von Funktionen für Webanwendungen, um Zahlungen direkt zu bearbeiten, anstatt auf eine separate Website für die Zahlungsabwicklung umgeleitet zu werden.

Wenn eine Händler-Website eine Zahlung über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) initiiert, übernimmt die Payment Handler API die Entdeckung der anwendbaren Zahlungs-Apps und präsentiert sie dem Benutzer als Auswahl. Nachdem eine Auswahl getroffen wurde, wird ein Fenster des Zahlungshandlers geöffnet, um dem Benutzer die Eingabe seiner Zahlungsdaten zu ermöglichen und die Zahlungstransaktion mit der Zahlungs-App abzuwickeln.

Die Kommunikation mit Zahlungs-Apps (Autorisierung, Übermittlung von Zahlungsdaten) erfolgt über Service Worker.

## Konzepte und Nutzung

Auf einer Händler-Website wird eine Zahlungsanforderung durch die Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts initiiert:

```js
const request = new PaymentRequest(
  [
    {
      supportedMethods: "https://bobbucks.dev/pay",
    },
  ],
  {
    total: {
      label: "total",
      amount: { value: "10", currency: "USD" },
    },
  },
);
```

Die Eigenschaft `supportedMethods` gibt eine URL an, die die vom Händler unterstützte Zahlungsmethode repräsentiert. Um mehr als eine Zahlungsmethode zu verwenden, würden Sie sie in einem Array von Objekten angeben, so:

```js
const request = new PaymentRequest(
  [
    {
      supportedMethods: "https://alicebucks.dev/pay",
    },
    {
      supportedMethods: "https://bobbucks.dev/pay",
    },
  ],
  {
    total: {
      label: "total",
      amount: { value: "10", currency: "USD" },
    },
  },
);
```

### Zahlungs-Apps verfügbar machen

In unterstützten Browsern beginnt der Prozess mit der Anforderung einer Zahlungs-Methode-Manifestdatei von jeder URL. Ein Zahlungs-Methode-Manifest wird typischerweise als `payment-manifest.json` bezeichnet (der genaue Name kann beliebig sein) und sollte wie folgt strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Angenommen, ein Zahlungs-Methode-Identifikator wie `https://bobbucks.dev/pay` ist gegeben, der Browser:

1. Beginnt mit dem Laden von `https://bobbucks.dev/pay` und überprüft dessen HTTP-Header.
   1. Wenn ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` gefunden wird, wird das Zahlungs-Methode-Manifest an diesem Ort stattdessen heruntergeladen (siehe [Optionen, den Browser zu einem anderen Speicherort des Zahlungs-Methode-Manifests zu leiten](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für Details).
   2. Andernfalls wird der Antwortkörper von `https://bobbucks.dev/pay` als Zahlungs-Methode-Manifest analysiert.
2. Analysiert den heruntergeladenen Inhalt als JSON mit den Mitgliedern `default_applications` und `supported_origins`.

Diese Mitglieder haben folgende Zwecke:

- `default_applications` teilt dem Browser mit, wo die Standard-Zahlungs-App zu finden ist, die die BobBucks-Zahlungsmethode verwenden kann, falls noch keine installiert ist.
- `supported_origins` teilt dem Browser mit, welche anderen Zahlungs-Apps berechtigt sind, die BobBucks-Zahlung zu bearbeiten, falls erforderlich. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsoptionen neben der Standard-Anwendung präsentiert.

Aus dem Zahlungs-Methode-Manifest erhält der Browser die URL der Web-App-Manifestdateien der Standard-Zahlungs-Apps, die beliebig bezeichnet werden können und etwa so aussehen:

```json
{
  "name": "Pay with BobBucks",
  "short_name": "BobBucks",
  "description": "This is an example of the Payment Handler API.",
  "icons": [
    {
      "src": "images/manifest/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "images/manifest/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "serviceworker": {
    "src": "service-worker.js",
    "scope": "/",
    "use_cache": false
  },
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#3f51b5",
  "background_color": "#3f51b5",
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.android.samplepay",
      "min_version": "1",
      "fingerprints": [
        {
          "type": "sha256_cert",
          "value": "4C:FC:14:C6:97:DE:66:4E:66:97:50:C0:24:CE:5F:27:00:92:EE:F3:7F:18:B3:DA:77:66:84:CD:9D:E9:D2:CB"
        }
      ]
    }
  ]
}
```

Wenn die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode durch die Händler-App als Reaktion auf eine Benutzeraktion aufgerufen wird, verwendet der Browser die im Manifest gefundenen Informationen zu [`name`](/de/docs/Web/Manifest/name) und [`icons`](/de/docs/Web/Manifest/icons), um dem Benutzer die Zahlungs-Apps in der von ihm bereitgestellten Payment Request UI anzuzeigen.

- Wenn mehrere Zahlungs-App-Optionen verfügbar sind, wird dem Benutzer eine Liste von Optionen präsentiert, aus der er wählen kann. Die Auswahl einer Zahlungs-App startet den Zahlungsfluss, wodurch der Browser Just-In-Time (JIT) die Web-App installiert, wenn nötig, und den im [`serviceworker`](/de/docs/Web/Manifest/serviceworker) Mitglied festgelegten Service Worker registriert, damit er die Zahlung abwickeln kann.
- Wenn es nur eine Zahlungs-App-Option gibt, wird die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode den Zahlungsfluss mit dieser Zahlungs-App starten, sie JIT-installieren, wenn nötig, wie oben beschrieben. Dies ist eine Optimierung, um zu vermeiden, dem Benutzer eine Liste zu präsentieren, die nur eine Zahlungs-App-Auswahl enthält.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) im Zahlungs-App-Manifest auf `true` gesetzt ist, wird der Browser die plattformspezifische Zahlungs-App starten, die in [`related_applications`](/de/docs/Web/Manifest/related_applications) angegeben ist, um die Zahlung abzuwickeln (falls verfügbar), anstatt die Web-Zahlungs-App zu verwenden.

Weitere Details finden Sie unter [Web-App-Manifest bereitstellen](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest).

### Überprüfen, ob die Zahlungs-App zahlungsbereit ist

Die Methode [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) der Payment Request API gibt `true` zurück, wenn eine Zahlungs-App auf dem Gerät des Kunden verfügbar ist, was bedeutet, dass eine Zahlungs-App, die die Zahlungsmethode unterstützt, entdeckt wurde und dass die plattformspezifische Zahlungs-App installiert oder die webbasierten Zahlungs-App bereit ist, registriert zu werden.

```js
async function checkCanMakePayment() {
  // ...

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die Payment Handler API fügt einen zusätzlichen Mechanismus hinzu, um sich auf die Abwicklung einer Zahlung vorzubereiten. Das Ereignis [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) wird auf dem Service Worker einer Zahlungs-App ausgelöst, um zu überprüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Insbesondere wird es ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft. Der Service Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um entsprechend zu antworten:

```js
self.addEventListener("canmakepayment", (e) => {
  e.respondWith(
    new Promise((resolve, reject) => {
      someAppSpecificLogic()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    }),
  );
});
```

Das Versprechen, das von `respondWith()` zurückgegeben wird, wird mit einem Boolean-Wert aufgelöst, um zu signalisieren, dass es bereit ist, eine Zahlungsanforderung zu bearbeiten (`true`) oder nicht (`false`).

### Abwicklung der Zahlung

Nachdem die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufgerufen wurde, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis auf dem Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird innerhalb des Service Workers der Zahlungs-App abgehört, um die nächste Phase des Zahlungsprozesses zu beginnen.

```js
let payment_request_event;
let resolver;
let client;

// `self` is the global object in service worker
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  payment_request_event = e;

  // ...
});
```

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungs-Handler-Fenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungs-Handler-Fenster präsentiert den Kunden eine Benutzeroberfläche der Zahlungs-App, in der sie sich authentifizieren, die Versandadresse und Optionen auswählen und die Zahlung autorisieren können.

Nachdem die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzugeben.

Siehe [Empfangen eines Zahlungsanfrageereignisses vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für mehr Details zu dieser Phase.

### Verwaltung der Zahlungs-App-Funktionalität

Sobald ein Service Worker einer Zahlungs-App registriert ist, können Sie die Instanz des `PaymentManager` des Service Workers (zugänglich über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)) verwenden, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten.

Zum Beispiel:

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // ...
    });

  // ...
});
```

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um dem Browser einen Hinweis anzuzeigen, zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler UI.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, statt sie vom Browser zu sammeln (zum Beispiel über Autofill).

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignisobjekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis, das ausgelöst wird, wenn eine Zahlungs-App über einen Service Worker erfolgreich registriert wurde, um zu signalisieren, dass sie bereit ist, Zahlungen zu bearbeiten.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird verwendet, um verschiedene Aspekte der Funktionalität von Zahlungs-Apps zu verwalten. Zugriff über die Eigenschaft [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager).
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignisobjekt für das [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis, das auf einem Service Worker einer Zahlungs-App ausgelöst wird, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) eingeleitet wurde.

## Erweiterungen zu anderen Schnittstellen

- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn sie erfolgreich registriert wurde, um zu signalisieren, dass sie bereit ist, Zahlungen zu verarbeiten.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) eingeleitet wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt die Instanz des [`PaymentManager`](/de/docs/Web/API/PaymentManager) einer Zahlungs-App zurück, die verwendet wird, um verschiedene Funktionen der Zahlungs-App zu verwalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks Beispiel Zahlungs-App](https://bobbucks.dev/)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
