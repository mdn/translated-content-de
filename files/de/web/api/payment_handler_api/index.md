---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Payment Handler API bietet eine standardisierte Funktionalität für Webanwendungen, um Zahlungen direkt zu bearbeiten, anstatt auf eine separate Seite für die Zahlungsabwicklung umgeleitet werden zu müssen.

Wenn eine Händler-Website über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) eine Zahlung initiiert, übernimmt die Payment Handler API die Erkennung der anwendbaren Zahlungs-Apps, stellt sie dem Nutzer zur Auswahl, öffnet ein Zahlungsfenster nach der Auswahl, um dem Nutzer die Eingabe der Zahlungsdetails zu ermöglichen, und bearbeitet die Zahlungstransaktion mit der Zahlungs-App.

Die Kommunikation mit den Zahlungs-Apps (Autorisierung, Weitergabe von Zahlungsdaten) erfolgt über Service Workers.

## Konzepte und Verwendung

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

Die `supportedMethods`-Eigenschaft gibt eine URL an, die die vom Händler unterstützte Zahlungsmethode repräsentiert. Um mehr als eine Zahlungsmethode zu verwenden, würden Sie sie in einem Array von Objekten angeben, wie hier gezeigt:

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

### Bereitstellung von Zahlungs-Apps

In unterstützten Browsern beginnt der Prozess mit der Anforderung einer Zahlungsweisen-Manifestdatei von jeder URL. Ein Zahlungsweisen-Manifest wird typischerweise payments-manifest.json genannt (der genaue Name kann beliebig gewählt werden) und sollte wie folgt strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Bei einem Zahlungsweisen-Identifikator wie `https://bobbucks.dev/pay`:

1. beginnt der Browser, `https://bobbucks.dev/pay` zu laden und prüft dessen HTTP-Header.
   1. Wird ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` gefunden, lädt er stattdessen das Zahlungsweisen-Manifest an diesem Ort herunter (siehe [Optional: Leiten Sie den Browser zu einem anderen Ort für das Zahlungsweisen-Manifest](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für Details).
   2. Anderenfalls wird der Antworttext von `https://bobbucks.dev/pay` als Zahlungsweisen-Manifest geparst.
2. Der heruntergeladene Inhalt wird als JSON mit den Elementen `default_applications` und `supported_origins` geparst.

Diese Elemente haben folgende Zwecke:

- `default_applications` teilt dem Browser mit, wo die Standard-Zahlungs-App zu finden ist, die die BobBucks-Zahlungsmethode verwenden kann, wenn noch keine installiert ist.
- `supported_origins` teilt dem Browser mit, welche anderen Zahlungs-Apps berechtigt sind, die BobBucks-Zahlung zu bearbeiten, falls erforderlich. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsoptionen neben der Standardanwendung präsentiert.

Aus dem Zahlungsweisen-Manifest erhält der Browser die URL der [Web-App-Manifest](/de/docs/Web/Manifest)-Dateien der Standard-Zahlungs-App, die beliebig benannt werden können und in etwa so aussehen:

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

Wenn die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode von der Händler-App als Reaktion auf eine Benutzergeste aufgerufen wird, verwendet der Browser die in jedem Manifest enthaltenen [`name`](/de/docs/Web/Manifest/name)- und [`icons`](/de/docs/Web/Manifest/icons)-Informationen, um dem Nutzer die Zahlungs-Apps in der vom Browser bereitgestellten Payment-Request-UI zu präsentieren.

- Wenn es mehrere Zahlungs-App-Optionen gibt, wird dem Nutzer eine Liste von Optionen zur Auswahl angeboten. Die Auswahl einer Zahlungs-App startet den Zahlungsfluss, wodurch der Browser gegebenenfalls die Web-App Just-In-Time (JIT) installiert und den in der [`serviceworker`](/de/docs/Web/Manifest/serviceworker)-Eigenschaft angegebenen Service Worker registriert, damit er die Zahlung bearbeiten kann.
- Wenn es nur eine Zahlungs-App-Option gibt, startet die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode den Zahlungsfluss mit dieser Zahlungs-App, indem sie gegebenenfalls JIT installiert wird, wie oben beschrieben. Dies ist eine Optimierung, um zu vermeiden, dass dem Nutzer eine Liste angezeigt wird, die nur eine Zahlungs-App-Wahl enthält.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) im Zahlungs-App-Manifest auf `true` gesetzt ist, wird der Browser die plattformspezifische Zahlungs-App starten, die in [`related_applications`](/de/docs/Web/Manifest/related_applications) angegeben ist, um die Zahlung zu bearbeiten (falls verfügbar), anstelle der webbasierten Zahlungs-App.

Siehe [Bereitstellung eines Web-App-Manifests](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest) für weitere Details.

### Überprüfen, ob die Zahlungs-App bereit ist

Die Methode [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) der Payment Request API gibt `true` zurück, wenn auf dem Gerät des Kunden eine Zahlungs-App verfügbar ist, was bedeutet, dass eine Zahlungs-App, die die Zahlungsmethode unterstützt, entdeckt wird, und dass die plattformspezifische Zahlungs-App installiert ist oder die webbasierte Zahlungs-App bereit ist, registriert zu werden.

```js
async function checkCanMakePayment() {
  // ...

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die Payment Handler API fügt einen zusätzlichen Mechanismus hinzu, um sich auf die Bearbeitung einer Zahlung vorzubereiten. Das Ereignis [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) wird auf dem Service Worker einer Zahlungs-App ausgelöst, um zu überprüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Dies geschieht insbesondere, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft. Der Service Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um entsprechend zu antworten:

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

Das Promise, das von `respondWith()` zurückgegeben wird, wird mit einem booleschen Wert aufgelöst, der signalisiert, dass es bereit ist, eine Zahlungsanfrage zu bearbeiten (`true`), oder nicht (`false`).

### Bearbeitung der Zahlung

Nachdem die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode aufgerufen wurde, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis auf dem Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service Worker der Zahlungs-App abgehört, um die nächste Phase des Zahlungsprozesses zu beginnen.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungsfenster bietet den Kunden eine Benutzeroberfläche zur Zahlungs-App, in der sie sich authentifizieren, die Versandadresse und -optionen auswählen und die Zahlung autorisieren können.

Nach der Bearbeitung der Zahlung wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzugeben.

Siehe [Erhalt eines Zahlungsanforderungs-Ereignisses vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu diesem Stadium.

### Verwaltung der Zahlungs-App-Funktionalität

Sobald ein Zahlungs-App-Service-Worker registriert ist, können Sie die [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz des Service Workers (zugänglich über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)) verwenden, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten.

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

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um einen Hinweis bereitzustellen, den der Browser zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler UI anzeigt.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen auf die Zahlungs-App zu übertragen, anstatt sie vom Browser zu sammeln (z.B. über Autofill).

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignisobjekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis, das auf dem Service Worker einer Zahlungs-App ausgelöst wird, wenn sie erfolgreich registriert wurde, um zu signalisieren, dass sie bereit ist, Zahlungen zu bearbeiten.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird verwendet, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten. Zugriff über die Eigenschaft [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager).
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignisobjekt für das [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis, das auf dem Service Worker einer Zahlungs-App ausgelöst wird, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.

## Erweiterungen für andere Schnittstellen

- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis
  - : Wird auf der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn sie erfolgreich registriert wurde, um zu signalisieren, dass sie bereit ist, Zahlungen zu bearbeiten.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis
  - : Wird auf der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt die [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz einer Zahlungs-App zurück, die verwendet wird, um verschiedene Funktionen der Zahlungs-App zu verwalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks Beispiel-Zahlungs-App](https://bobbucks.dev/)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichten einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Das Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
