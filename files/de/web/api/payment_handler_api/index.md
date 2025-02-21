---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Payment Handler API bietet eine standardisierte Funktionalität für Webanwendungen, Zahlungen direkt abzuwickeln, anstatt auf eine separate Website umgeleitet zu werden.

Wenn eine Händler-Website eine Zahlung über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) initiiert, übernimmt die Payment Handler API die Erkennung geeigneter Zahlungs-Apps, präsentiert sie dem Benutzer zur Auswahl, öffnet ein Zahlungsfenster, sobald eine Auswahl getroffen wurde, um dem Benutzer die Eingabe seiner Zahlungsdaten zu ermöglichen, und wickelt die Zahlungstransaktion mit der Zahlungs-App ab.

Die Kommunikation mit Zahlungs-Apps (Autorisierung, Übermittlung von Zahlungsdaten) wird über Service Workers abgewickelt.

## Konzepte und Verwendung

Auf einer Händler-Website wird eine Zahlungsanforderung durch die Konstruktion eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts initiiert:

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

Die Eigenschaft `supportedMethods` gibt eine URL an, die die vom Händler unterstützte Zahlungsmethode repräsentiert. Um mehr als eine Zahlungsmethode zu verwenden, würden Sie diese in einem Array von Objekten angeben, wie folgt:

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

In unterstützenden Browsern beginnt der Prozess mit der Anforderung einer Payment Method Manifest-Datei von jeder URL. Ein Payment Method Manifest wird typischerweise als `payment-manifest.json` bezeichnet (der genaue Name kann beliebig gewählt werden) und sollte folgendermaßen strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Bei einem Bezahlmethoden-Identifikator wie `https://bobbucks.dev/pay` führt der Browser folgende Schritte aus:

1. Er beginnt, `https://bobbucks.dev/pay` zu laden und überprüft dessen HTTP-Header.
   1. Wird ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` gefunden, wird das Payment Method Manifest stattdessen von diesem Ort heruntergeladen (siehe [Optionally route the browser to find the payment method manifest in another location](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für weitere Details).
   2. Ansonsten wird der Antwortinhalt von `https://bobbucks.dev/pay` als Payment Method Manifest geparst.
2. Der heruntergeladene Inhalt wird als JSON mit den Mitgliedern `default_applications` und `supported_origins` analysiert.

Diese Mitglieder haben folgende Zwecke:

- `default_applications` gibt dem Browser an, wo die Standard-Zahlungs-App zu finden ist, die die BobBucks-Zahlungsmethode verwenden kann, falls sie nicht bereits installiert ist.
- `supported_origins` gibt dem Browser an, welche anderen Zahlungs-Apps berechtigt sind, die BobBucks-Zahlung bei Bedarf zu handhaben. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsoptionen neben der Standardanwendung präsentiert.

Aus dem Payment Method Manifest erhält der Browser die URL der Web-App-Manifestdateien der Standard-Zahlungs-Apps, die beliebig benannt werden können und etwa so aussehen:

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

Wenn die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) von der Händler-App als Reaktion auf eine Benutzeraktion aufgerufen wird, verwendet der Browser die in jedem Manifest gefundenen Informationen [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons), um die Zahlungs-Apps dem Benutzer in der vom Browser bereitgestellten Payment Request-Benutzeroberfläche zu präsentieren.

- Wenn mehrere Zahlungs-App-Optionen verfügbar sind, wird dem Benutzer eine Liste von Optionen angezeigt, aus denen er wählen kann. Die Auswahl einer Zahlungs-App startet den Zahlungsprozess, was dazu führt, dass der Browser die Web-App bei Bedarf Just-In-Time (JIT) installiert und den in dem Mitglied [`serviceworker`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/serviceworker) angegebenen Service Worker registriert, damit er die Zahlung abwickeln kann.
- Wenn es nur eine Zahlungs-App-Option gibt, beginnt die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) den Zahlungsprozess mit dieser Zahlungs-App und installiert sie bei Bedarf JIT, wie oben beschrieben. Dies ist eine Optimierung, um dem Benutzer eine Liste zu ersparen, die nur eine Zahlungs-App-Auswahl enthält.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) im Zahlungs-App-Manifest auf `true` gesetzt ist, startet der Browser die plattformspezifische Zahlungs-App, die in [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) angegeben ist, um die Zahlung abzuwickeln (falls verfügbar) anstelle der Web-Zahlungs-App.

Siehe [Serve a web app manifest](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest) für weitere Details.

### Überprüfung, ob die Zahlungs-App bereit ist für Zahlungen

Die Methode [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) der Payment Request API gibt `true` zurück, wenn eine Zahlungs-App auf dem Gerät des Kunden verfügbar ist, was bedeutet, dass eine Zahlungs-App, die die Zahlungsmethode unterstützt, entdeckt wurde, und dass die plattformspezifische Zahlungs-App installiert ist oder die webbasierte Zahlungs-App bereit ist, registriert zu werden.

```js
async function checkCanMakePayment() {
  // ...

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die Payment Handler API fügt einen zusätzlichen Mechanismus hinzu, um sich auf die Zahlungsabwicklung vorzubereiten. Das Ereignis [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) wird auf einem Service Worker der Zahlungs-App ausgelöst, um zu überprüfen, ob es bereit ist, eine Zahlung zu verarbeiten. Insbesondere wird es ausgelöst, wenn die Händler-Website den Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) aufruft. Der Service Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um entsprechend zu antworten:

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

Das von `respondWith()` zurückgegebene Versprechen löst sich mit einem Boolean auf, um anzuzeigen, dass es bereit ist, eine Zahlungsanforderung zu bearbeiten (`true`) oder nicht (`false`).

### Abwicklung der Zahlung

Nachdem die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufgerufen wurde, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis auf dem Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird innerhalb des Service Workers der Zahlungs-App überwacht, um den nächsten Schritt im Zahlungsprozess zu beginnen.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungsfenster bietet den Kunden eine Benutzeroberfläche der Zahlungs-App, in der sie sich authentifizieren, die Versandadresse und Optionen auswählen und die Zahlung autorisieren können.

Wenn die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzugeben.

Siehe [Receive a payment request event from the merchant](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu diesem Schritt.

### Verwaltung der Zahlungs-App-Funktionalität

Sobald ein Zahlungs-App-Service Worker registriert ist, können Sie die Instanz [`PaymentManager`](/de/docs/Web/API/PaymentManager) des Service Workers (zugänglich über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)) verwenden, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten.

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

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um dem Browser einen Hinweis anzuzeigen, zusammen mit dem Namen und dem Icon der Zahlungs-App in der Payment Handler-Benutzeroberfläche.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für das Bereitstellen verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, anstatt sie vom Browser zu erfassen (zum Beispiel über Autofill).

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignisobjekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis, das auf einem Service Worker der Zahlungs-App ausgelöst wird, wenn es erfolgreich registriert wurde, um anzuzeigen, dass es bereit ist, Zahlungen zu bearbeiten.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird verwendet, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten. Zugriff über die Eigenschaft [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager).
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignisobjekt für das [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis, das auf einem Service Worker der Zahlungs-App ausgelöst wird, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.

## Erweiterungen zu anderen Schnittstellen

- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn es erfolgreich registriert wurde, um anzuzeigen, dass es bereit ist, Zahlungen zu bearbeiten.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt die [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz einer Zahlungs-App zurück, die zur Verwaltung verschiedener Funktionen der Zahlungs-App verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks Sample Payment App](https://bobbucks.dev/)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
