---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Payment Handler API bietet eine standardisierte Funktionalität, mit der Webanwendungen Zahlungen direkt abwickeln können, ohne dass sie zu einer separaten Seite für die Zahlungsabwicklung weitergeleitet werden müssen.

Wenn eine Händler-Website über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) eine Zahlung initiiert, kümmert sich die Payment Handler API um das Auffinden geeigneter Zahlungs-Apps. Diese werden dem Benutzer als Auswahl präsentiert. Nachdem der Benutzer eine Auswahl getroffen hat, wird ein Zahlungsfenster geöffnet, in dem er seine Zahlungsdetails eingeben kann, und die Zahlungstransaktion wird mit der Zahlungs-App abgewickelt.

Die Kommunikation mit Zahlungs-Apps (Autorisierung, Übergabe von Zahlungsdaten) erfolgt über Service Worker.

## Konzepte und Nutzung

Auf einer Händler-Website wird eine Zahlungsanfrage durch die Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts initiiert:

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

Die Eigenschaft `supportedMethods` spezifiziert eine URL, die die vom Händler unterstützte Zahlungsmethode darstellt. Wenn Sie mehr als eine Zahlungsmethode verwenden möchten, geben Sie diese in einem Array von Objekten an, wie folgt:

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

### Verfügbarmachen von Zahlungs-Apps

In unterstützten Browsern beginnt der Prozess mit dem Anfordern einer Manifestdatei der Zahlungsmethode von jeder URL. Ein Manifest für Zahlungsmethoden wird typischerweise `payment-manifest.json` genannt (der genaue Name kann beliebig gewählt werden) und sollte folgendermaßen strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Angesichts einer Zahlungsmethodenkennung wie `https://bobbucks.dev/pay`, führt der Browser folgende Schritte aus:

1. Er beginnt mit dem Laden von `https://bobbucks.dev/pay` und überprüft dessen HTTP-Header.
   1. Wird ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` gefunden, lädt er stattdessen das Manifest der Zahlungsmethode von diesem Ort herunter (siehe [Optional, den Browser anderswo das Manifest der Zahlungsmethode finden lassen](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für Details).
   2. Andernfalls wird der Antwortinhalt von `https://bobbucks.dev/pay` als Manifest der Zahlungsmethode analysiert.
2. Der heruntergeladene Inhalt wird als JSON mit den Mitgliedern `default_applications` und `supported_origins` geparst.

Diese Mitglieder haben folgende Zwecke:

- `default_applications` gibt dem Browser an, wo die Standard-Zahlungs-App zu finden ist, die die BobBucks-Zahlungsmethode verwenden kann, falls keine installiert ist.
- `supported_origins` gibt dem Browser an, welche anderen Zahlungs-Apps die BobBucks-Zahlung abwickeln dürfen, wenn nötig. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsmöglichkeiten neben der Standardanwendung präsentiert.

Aus dem Manifest der Zahlungsmethode erhält der Browser die URL der Web-App-Manifeste der Standard-Zahlungs-Apps, die beliebig benannt sein können und folgendermaßen aussehen:

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

Wenn die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) von der Händleranwendung als Reaktion auf eine Benutzeraktion aufgerufen wird, verwendet der Browser die Informationen [`name`](/de/docs/Web/Manifest/Reference/name) und [`icons`](/de/docs/Web/Manifest/Reference/icons) aus jedem Manifest, um dem Benutzer die Zahlungs-Apps in der vom Browser bereitgestellten Payment Request UI zu präsentieren.

- Wenn es mehrere Zahlungs-App-Optionen gibt, wird dem Benutzer eine Liste mit Optionen präsentiert, aus denen er wählen kann. Die Auswahl einer Zahlungs-App startet den Zahlungsprozess, was dazu führt, dass der Browser die Web-App bei Bedarf Just-In-Time (JIT) installiert und den im [`serviceworker`](/de/docs/Web/Manifest/Reference/serviceworker)-Mitglied spezifizierten Service Worker registriert, damit er die Zahlung abwickeln kann.
- Wenn es nur eine Zahlungs-App-Option gibt, wird die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) den Zahlungsprozess mit dieser Zahlungs-App starten und sie bei Bedarf wie oben beschrieben JIT-installieren. Dies ist eine Optimierung, um dem Benutzer das Präsentieren einer Liste mit nur einer Zahlungs-App-Auswahl zu ersparen.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Manifest/Reference/prefer_related_applications) im Zahlungs-App-Manifest auf `true` gesetzt ist, wird der Browser die plattformspezifische Zahlungs-App, die in [`related_applications`](/de/docs/Web/Manifest/Reference/related_applications) spezifiziert ist, starten, um die Zahlung abzuwickeln (sofern verfügbar), anstatt der Web-Zahlungs-App.

Siehe [Ein Web-App-Manifest bereitstellen](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest) für weitere Details.

### Prüfen, ob die Zahlungs-App bereit ist zu zahlen

Die Methode [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) der Payment Request API gibt `true` zurück, wenn eine Zahlungs-App auf dem Gerät des Kunden verfügbar ist, was bedeutet, dass eine Zahlungs-App, die die Zahlungsmethode unterstützt, entdeckt wurde und dass die plattformspezifische Zahlungs-App installiert oder die webbasierte Zahlungs-App bereit zur Registrierung ist.

```js
async function checkCanMakePayment() {
  // ...

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die Payment Handler API fügt einen zusätzlichen Mechanismus hinzu, um die Zahlungsabwicklung vorzubereiten. Das Ereignis [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) wird im Service Worker einer Zahlungs-App ausgelöst, um zu prüfen, ob es bereit ist, eine Zahlung zu bearbeiten. Insbesondere wird es ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft. Der Service Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um angemessen zu reagieren:

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

Das von `respondWith()` zurückgegebene Promise löst sich mit einem Booleschen Wert auf, der signalisiert, ob es bereit ist, eine Zahlungsanfrage zu bearbeiten (`true`) oder nicht (`false`).

### Abwickeln der Zahlung

Nachdem die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufgerufen wurde, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis im Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird innerhalb des Service Workers der Zahlungs-App überwacht, um die nächste Phase des Zahlungsprozesses zu beginnen.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungsfenster präsentiert den Kunden eine Benutzeroberfläche der Zahlungs-App, in der sie sich authentifizieren, die Versandadresse und Optionen auswählen und die Zahlung autorisieren können.

Nach der Abwicklung der Zahlung wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzugeben.

Siehe [Ein Zahlungsanfrageereignis vom Händler empfangen](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu dieser Phase.

### Verwaltung der Zahlungs-App-Funktionalität

Sobald ein Service Worker für die Zahlungs-App registriert ist, können Sie die Instanz des [`PaymentManager`](/de/docs/Web/API/PaymentManager) des Service Workers (zugänglich über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)) verwenden, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten.

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

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um einen Hinweis zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler-Benutzeroberfläche anzuzeigen.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für das Bereitstellen verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, anstatt sie vom Browser zu sammeln (zum Beispiel über Autofill).

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignisobjekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis, das im Service Worker einer Zahlungs-App ausgelöst wird, wenn es erfolgreich registriert wurde, um zu signalisieren, dass es bereit ist, Zahlungen zu bearbeiten.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird verwendet, um verschiedene Aspekte der Funktionalität einer Zahlungs-App zu verwalten. Zugänglich über die Eigenschaft [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager).
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignisobjekt für das [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis, das im Service Worker einer Zahlungs-App ausgelöst wird, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.

## Erweiterungen zu anderen Schnittstellen

- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis
  - : Ausgelöst im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App, wenn es erfolgreich registriert wurde, um zu signalisieren, dass es bereit ist, Zahlungen zu bearbeiten.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis
  - : Ausgelöst im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt die Instanz des [`PaymentManager`](/de/docs/Web/API/PaymentManager) einer Zahlungs-App zurück, die zur Verwaltung verschiedener Zahlungs-App-Funktionalität verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks Beispiel-Zahlungs-App](https://bobbucks.dev/)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
