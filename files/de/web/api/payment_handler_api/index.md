---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Payment Handler API bietet eine standardisierte Funktionalität für Webanwendungen, um Zahlungen direkt abzuwickeln, anstatt auf eine separate Website zur Zahlungsabwicklung umgeleitet zu werden.

Wenn eine Händler-Website die Zahlung über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) initiiert, übernimmt die Payment Handler API die Erkennung passender Zahlungs-Apps, präsentiert sie als Auswahlmöglichkeiten für den Benutzer, öffnet ein Zahlungsfenster, sobald eine Auswahl getroffen wurde, damit der Benutzer seine Zahlungsinformationen eingeben kann, und bearbeitet die Zahlungstransaktion mit der Zahlungs-App.

Die Kommunikation mit Zahlungs-Apps (Autorisierung, Übermittlung von Zahlungsdaten) erfolgt über Service Workers.

## Konzepte und Nutzung

Auf einer Händler-Website wird eine Zahlungsanfrage durch die Erstellung eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest) Objekts initiiert:

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

Die Eigenschaft `supportedMethods` gibt eine URL an, die die vom Händler unterstützte Zahlungsmethode darstellt. Um mehr als eine Zahlungsmethode zu verwenden, würde man sie in einem Array von Objekten angeben, wie folgt:

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

In unterstützenden Browsern beginnt der Prozess mit der Anforderung einer Zahlungsmanifestdatei von jeder URL. Ein Zahlungsmanifest wird typischerweise als `payment-manifest.json` bezeichnet (der genaue Name kann beliebig sein) und sollte so strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Angenommen, man hat einen Zahlungsidentifikator wie `https://bobbucks.dev/pay`, dann:

1. Beginnt der Browser mit dem Laden von `https://bobbucks.dev/pay` und prüft seine HTTP-Header.
   1. Wird ein {{httpheader("Link")}} Header mit `rel="payment-method-manifest"` gefunden, wird das Zahlungsmanifest an dieser Stelle heruntergeladen (siehe [Optionales Routing des Browsers, um das Zahlungsmanifest an einem anderen Ort zu finden](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für Details).
   2. Andernfalls wird der Antwortkörper von `https://bobbucks.dev/pay` als Zahlungsmanifest geparst.
2. Der heruntergeladene Inhalt wird als JSON mit den Mitgliedern `default_applications` und `supported_origins` geparst.

Diese Mitglieder haben die folgenden Zwecke:

- `default_applications` teilt dem Browser mit, wo er die Standard-Zahlungs-App finden kann, die die BobBucks-Zahlungsmethode verwenden kann, falls diese nicht bereits installiert ist.
- `supported_origins` teilt dem Browser mit, welche anderen Zahlungs-Apps berechtigt sind, die BobBucks-Zahlung zu bearbeiten, falls erforderlich. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsoptionen neben der Standardanwendung präsentiert.

Aus dem Zahlungsmanifest erhält der Browser die URL der Web-App-Manifestdateien der Standard-Zahlungs-Apps, die beliebig genannt werden können und etwa so aussehen:

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

Wenn die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode durch die Händler-App als Reaktion auf eine Benutzerinteraktion aufgerufen wird, verwendet der Browser die in jedem Manifest gefundenen [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) Informationen, um die Zahlungs-Apps dem Benutzer im browserbasierten Payment Request UI zu präsentieren.

- Gibt es mehrere Zahlungs-App-Optionen, wird dem Benutzer eine Liste von Optionen präsentiert, aus denen er wählen kann. Die Auswahl einer Zahlungs-App startet den Zahlungsprozess, bei dem der Browser die Web-App bei Bedarf Just-In-Time (JIT) installiert und den im [`serviceworker`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/serviceworker) Mitglied angegebenen Service Worker registriert, damit er die Zahlung handhaben kann.
- Gibt es nur eine Zahlungs-App-Option, wird die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode den Zahlungsprozess mit dieser Zahlungs-App starten, sie bei Bedarf JIT-installieren, wie oben beschrieben. Dies ist eine Optimierung, um dem Benutzer eine Liste zu ersparen, die nur eine Zahlungs-App-Option enthält.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) auf `true` im Zahlungs-App-Manifests gesetzt ist, wird der Browser die plattformspezifische Zahlungs-App, die in [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) angegeben ist, starten (falls verfügbar), anstatt die Web-Zahlungs-App aufzurufen.

Siehe [Ein Web-App-Manifest bereitstellen](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest) für weitere Informationen.

### Prüfung, ob die Zahlungs-App bereit ist, zu zahlen

Die Methode [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) der Payment Request API gibt `true` zurück, wenn eine Zahlungs-App auf dem Gerät des Kunden verfügbar ist, was bedeutet, dass eine Zahlungs-App, die die Zahlungsmethode unterstützt, gefunden wurde und dass die plattformspezifische Zahlungs-App installiert ist oder die webbasierte Zahlungs-App bereit ist, registriert zu werden.

```js
async function checkCanMakePayment() {
  // …

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die Payment Handler API fügt einen zusätzlichen Mechanismus hinzu, um sich auf die Zahlungsabwicklung vorzubereiten. Das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis wird auf einem Service Worker der Zahlungs-App ausgelöst, um zu prüfen, ob sie bereit ist, eine Zahlung zu handhaben. Konkret wird es ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufruft. Der Service Worker kann dann die [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) Methode verwenden, um angemessen zu antworten:

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

Das von `respondWith()` zurückgegebene Versprechen löst sich mit einem booleschen Wert auf, der signalisiert, dass es bereit ist, eine Zahlungsanfrage zu bearbeiten (`true`) oder nicht (`false`).

### Abwicklung der Zahlung

Nachdem die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode aufgerufen wurde, wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis im Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird innerhalb des Service Workers der Zahlungs-App beobachtet, um den nächsten Schritt des Zahlungsprozesses zu beginnen.

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

  // …
});
```

Wenn ein `paymentrequest` Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungsfenster stellt dem Kunden eine Benutzeroberfläche der Zahlungs-App zur Verfügung, in der er sich authentifizieren, die Lieferadresse und Optionen auswählen und die Zahlung autorisieren kann.

Wenn die Zahlung bearbeitet wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzuübermitteln.

Weitere Informationen zu diesem Schritt finden Sie unter [Ein Zahlungsergeignis von der Händler-Website empfangen](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event).

### Verwaltung der Funktionalität der Zahlungs-App

Sobald ein Service Worker für die Zahlungs-App registriert ist, können Sie die [`PaymentManager`](/de/docs/Web/API/PaymentManager) Instanz des Service Workers (erreichbar über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)) verwenden, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten.

Beispielsweise:

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

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um einen Hinweis für den Browser bereitzustellen, der zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler UI angezeigt wird.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, anstatt sie über den Browser (z. B. über die automatische Vervollständigung) zu sammeln.

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignisobjekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis, das auf einem Service Worker der Zahlungs-App ausgelöst wird, wenn es erfolgreich registriert wurde, um zu signalisieren, dass es bereit ist, Zahlungen abzuwickeln.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird verwendet, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten. Erreichbar über die [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager) Eigenschaft.
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignisobjekt für das [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis, das auf einem Service Worker der Zahlungs-App ausgelöst wird, wenn ein Zahlungsfluss auf der Händler-Website über die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode initiiert wurde.

## Erweiterungen zu anderen Schnittstellen

- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn es erfolgreich registriert wurde, um zu signalisieren, dass es bereit ist, Zahlungen abzuwickeln.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn ein Zahlungsfluss auf der Händler-Website über die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode initiiert wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt die [`PaymentManager`](/de/docs/Web/API/PaymentManager) Instanz einer Zahlungs-App zurück, die zum Verwalten verschiedener Funktionen der Zahlungs-App verwendet wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks Beispiel-Zahlungs-App](https://bobbucks.dev/)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte zur Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
