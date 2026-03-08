---
title: Web-based Payment Handler API
slug: Web/API/Web-Based_Payment_Handler_API
l10n:
  sourceCommit: 73ca80b86a348f88f51fdb8f9441c114b76e94f1
---

{{DefaultAPISidebar("Web-Based Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Web-basierte Payment Handler API bietet eine standardisierte Funktionalität für Webanwendungen zur direkten Abwicklung von Zahlungen, anstatt zu einer separaten Website zur Zahlungsabwicklung umgeleitet werden zu müssen.

Wenn eine Händler-Website die Zahlung über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) initiiert, übernimmt die Web-basierte Payment Handler API die Entdeckung der anwendbaren Zahlungsanwendungen, präsentiert sie als Auswahlmöglichkeiten für den Benutzer, öffnet ein Payment-Handler-Fenster, sobald eine Wahl getroffen wurde, um dem Benutzer die Eingabe seiner Zahlungsdaten zu ermöglichen, und wickelt die Zahlungstransaktion mit der Zahlungsanwendung ab.

Die Kommunikation mit Zahlungsanwendungen (Autorisierung, Übermittlung von Zahlungsdaten) erfolgt über Service Worker.

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

Die `supportedMethods`-Eigenschaft gibt eine URL an, die die vom Händler unterstützte Zahlungsmethode repräsentiert. Um mehr als eine Zahlungsmethode zu verwenden, würden Sie sie in einem Array von Objekten angeben, wie folgt:

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

### Zahlungsanwendungen verfügbar machen

In unterstützenden Browsern beginnt der Prozess mit der Anforderung einer Zahlungsanwendungsmethodendatei von jeder URL. Ein Zahlungsanwendungsmethodenmanifest wird typischerweise als `payment-manifest.json` bezeichnet (der genaue Name kann beliebig sein) und sollte wie folgt strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Bei einer Zahlungsanwendungskennung wie `https://bobbucks.dev/pay` lädt der Browser:

1. Beginnt mit dem Laden von `https://bobbucks.dev/pay` und prüft seine HTTP-Header.
   1. Wenn ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` gefunden wird, lädt er stattdessen das Zahlungsanwendungsmethodenmanifest an diesem Ort herunter (siehe [Route den Browser optional, um das Zahlungsanwendungsmethodenmanifest an einem anderen Ort zu finden](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für Details).
   2. Andernfalls wird der Antwortinhalt von `https://bobbucks.dev/pay` als Zahlungsanwendungsmethodenmanifest analysiert.
2. Analysiert den heruntergeladenen Inhalt als JSON mit `default_applications` und `supported_origins`-Elementen.

Diese Elemente haben die folgenden Zwecke:

- `default_applications` teilt dem Browser mit, wo er die Standard-Zahlungsanwendung finden kann, die die BobBucks-Zahlungsmethode verwenden kann, wenn noch keine installiert ist.
- `supported_origins` teilt dem Browser mit, welche anderen Zahlungsanwendungen berechtigt sind, die BobBucks-Bezahlung bei Bedarf abzuwickeln. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsoptionen neben der Standardanwendung präsentiert.

Aus dem Zahlungsanwendungsmethodenmanifest erhält der Browser die URL der Web-App-Manifestdateien der Standard-Zahlungsanwendungen, die beliebig benannt sein können und etwa so aussehen:

```json
{
  "name": "Pay with BobBucks",
  "short_name": "BobBucks",
  "description": "This is an example of the Web-based Payment Handler API.",
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

Wenn die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode von der Händleranwendung als Antwort auf eine Benutzeraktion aufgerufen wird, verwendet der Browser die [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)- und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)-Informationen, die in jedem Manifest gefunden wurden, um die Zahlungsanwendungen in der browserbasierten Payment Request-Benutzeroberfläche dem Benutzer zu präsentieren.

- Wenn es mehrere Zahlungsanwendungsoptionen gibt, wird dem Benutzer eine Liste von Optionen zur Auswahl präsentiert. Die Auswahl einer Zahlungsanwendung startet den Zahlungsablauf, der den Browser bei Bedarf veranlasst, die Web-App "Just-In-Time" (JIT) zu installieren, wobei der im [`serviceworker`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/serviceworker)-Element angegebene Service Worker registriert wird, damit er die Bezahlung abwickeln kann.
- Wenn es nur eine Zahlungsanwendungsoption gibt, wird die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode den Zahlungsablauf mit dieser Zahlungsanwendung starten, sie bei Bedarf JIT installieren, wie oben beschrieben. Dies ist eine Optimierung, um dem Benutzer keine Liste zu präsentieren, die nur eine Zahlungsanwendungswahl enthält.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) auf `true` im Zahlungsanwendungsmanifest gesetzt ist, wird der Browser die plattformspezifische Zahlungsanwendung, die in [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) angegeben ist, zur Abwicklung der Zahlung starten (wenn verfügbar), anstatt der Web-Zahlungsanwendung.

Siehe [Dienen eines Web-App-Manifests](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest) für weitere Details.

### Überprüfen, ob die Zahlungsanwendung zahlungsbereit ist

Die [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment)-Methode der Payment Request API gibt `true` zurück, wenn eine Zahlungsanwendung auf dem Gerät des Kunden verfügbar ist, d.h. dass eine die Zahlungsmethode unterstützende Zahlungsanwendung entdeckt wurde und die plattformspezifische Zahlungsanwendung installiert ist oder die webbasierte Zahlungsanwendung bereit ist, registriert zu werden.

```js
async function checkCanMakePayment() {
  // …

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die Web-basierte Payment Handler API fügt einen zusätzlichen Mechanismus hinzu zur Vorbereitung der Zahlungsabwicklung. Das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis wird im Service Worker einer Zahlungsanwendung ausgelöst, um zu überprüfen, ob sie bereit ist, eine Bezahlung zu bearbeiten. Es wird speziell ausgelöst, wenn die Händlerwebsite den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft. Der Service Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um entsprechend zu antworten:

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

Das von `respondWith()` zurückgegebene Promise löst sich mit einem booleschen Wert auf, um anzuzeigen, dass es bereit ist, eine Zahlungsanfrage zu bearbeiten (`true`) oder nicht (`false`).

### Zahlungsabwicklung

Nachdem die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode aufgerufen wurde, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis im Service Worker der Zahlungsanwendung ausgelöst. Auf dieses Ereignis wird innerhalb des Service Workers der Zahlungsanwendung gehört, um den nächsten Schritt im Zahlungsprozess zu starten.

```js
let paymentRequestEvent;
let resolver;
let client;

// `self` is the global object in service worker
self.addEventListener("paymentrequest", async (e) => {
  if (paymentRequestEvent) {
    // If there's an ongoing payment transaction, reject it.
    resolver.reject();
  }
  // Preserve the event for future use
  paymentRequestEvent = e;

  // …
});
```

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungsanwendung ein Payment-Handler-Fenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Payment-Handler-Fenster wird den Kunden eine Schnittstelle der Zahlungsanwendung anbieten, in der sie die Zahlung authentifizieren, eine Versandadresse und Optionen wählen und die Zahlung autorisieren können.

Wenn die Zahlung abgewickelt wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händlerwebsite zurückzugeben.

Siehe [Erhalte ein Zahlungsanfrage-Ereignis vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu diesem Schritt.

### Verwaltung der Funktionalität von Zahlungsanwendungen

Sobald ein Service Worker einer Zahlungsanwendung registriert ist, können Sie die [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz des Service Workers (zugänglich über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)) verwenden, um verschiedene Aspekte der Funktionalität der Zahlungsanwendung zu verwalten.

Zum Beispiel:

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Card number should be 16 digits";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // …
    });

  // …
});
```

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um einen Hinweis für den Browser bereitzustellen, der zusammen mit dem Namen und Symbol der Zahlungsanwendung in der Web-basierte Payment Handler-Benutzeroberfläche angezeigt wird.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungsanwendung zu delegieren, anstatt sie über den Browser zu sammeln (zum Beispiel über Autofill).

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignisobjekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis, das im Service Worker einer Zahlungsanwendung ausgelöst wird, wenn sie erfolgreich registriert wurde, um anzuzeigen, dass sie zahlungsbereit ist.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird verwendet, um verschiedene Aspekte der Funktionalität von Zahlungsanwendungen zu verwalten. Zugriff über die [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)-Eigenschaft.
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignisobjekt für das [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis, das im Service Worker einer Zahlungsanwendung ausgelöst wird, wenn ein Zahlungsablauf auf der Händler-Website über die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode initiiert wurde.

## Erweiterungen zu anderen Schnittstellen

- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis
  - : Wird im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungsanwendung ausgelöst, wenn sie erfolgreich registriert wurde, um anzuzeigen, dass sie zahlungsbereit ist.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis
  - : Wird im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungsanwendung ausgelöst, wenn ein Zahlungsablauf auf der Händler-Website über die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode initiiert wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt eine [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz einer Zahlungsanwendung zurück, die verwendet wird, um verschiedene Zahlungsanwendungsfunktionen zu verwalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks Beispiel-Zahlungsanwendung](https://bobbucks.dev/)
- [Übersicht über webbasierte Zahlungsanwendungen](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Leben einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
