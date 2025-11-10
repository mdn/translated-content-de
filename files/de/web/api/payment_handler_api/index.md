---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Payment Handler API bietet einen standardisierten Funktionsumfang, damit Webanwendungen Zahlungen direkt abwickeln können, ohne auf eine separate Seite zur Zahlungsabwicklung umgeleitet werden zu müssen.

Wenn eine Händler-Website eine Zahlung über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) initiiert, übernimmt die Payment Handler API die Erkennung der anwendbaren Zahlungs-Apps, präsentiert sie dem Benutzer zur Auswahl, öffnet ein Zahlungsfenster, sobald eine Auswahl getroffen wurde, um dem Benutzer die Eingabe seiner Zahlungsdetails zu ermöglichen, und wickelt die Zahlungstransaktion mit der Zahlungs-App ab.

Die Kommunikation mit Zahlungs-Apps (Autorisierung, Übermittlung von Zahlungsdaten) erfolgt über Service Worker.

## Konzepte und Nutzung

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

Die Eigenschaft `supportedMethods` gibt eine URL an, die die vom Händler unterstützte Zahlungsmethode repräsentiert. Um mehr als eine Zahlungsmethode zu verwenden, würden Sie sie in einem Array von Objekten angeben, wie folgt:

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

In unterstützten Browsern beginnt der Prozess mit der Anforderung einer Zahlungskontomanifestdatei von jeder URL. Ein Zahlungsmethodenmanifest wird typischerweise `payment-manifest.json` genannt (der genaue Name kann beliebig sein) und sollte folgendermaßen strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Mit einem Zahlungsmethoden-Bezeichner wie `https://bobbucks.dev/pay`, wird der Browser:

1. Beginnt, `https://bobbucks.dev/pay` zu laden und überprüft dessen HTTP-Header.
   1. Wenn ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` gefunden wird, wird das Zahlungsmethodenmanifest an diesem Ort heruntergeladen (siehe [Optional kann der Browser angewiesen werden, das Zahlungsmethodenmanifest an einem anderen Ort zu finden](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für Details).
   2. Andernfalls wird der Antwortkörper von `https://bobbucks.dev/pay` als Zahlungsmethodenmanifest geparst.
2. Die heruntergeladenen Inhalte werden als JSON mit den Mitgliedern `default_applications` und `supported_origins` geparst.

Diese Mitglieder dienen folgenden Zwecken:

- `default_applications` gibt dem Browser an, wo er die Standardzahlungs-App finden kann, die die BobBucks-Zahlungsmethode verwenden kann, falls noch keine installiert ist.
- `supported_origins` gibt dem Browser an, welche anderen Zahlungs-Apps berechtigt sind, die BobBucks-Zahlung bei Bedarf abzuwickeln. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsoptionen neben der Standardanwendung präsentiert.

Aus dem Zahlungsmethodenmanifest erhält der Browser die URL der Web-App-Manifestdateien der Standardzahlungs-Apps, die beliebig benannt werden können und folgendermaßen aussehen:

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

Wenn die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) von der Händleranwendung als Reaktion auf eine Benutzeraktion aufgerufen wird, verwendet der Browser die Informationen [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons), die in jedem Manifest gefunden werden, um die Zahlungs-Apps im browsergesteuerten Zahlungsabfrage-UI dem Benutzer zu präsentieren.

- Wenn es mehrere Zahlungs-App-Optionen gibt, wird dem Benutzer eine Liste von Optionen zur Auswahl präsentiert. Die Auswahl einer Zahlungs-App startet den Zahlungsfluss, wodurch der Browser die Web-App bei Bedarf Just-In-Time (JIT) installiert und den im Mitglied [`serviceworker`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/serviceworker) angegebenen Service Worker registriert, damit er die Zahlung abwickeln kann.
- Wenn es nur eine Zahlungs-App-Option gibt, startet die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) den Zahlungsfluss mit dieser Zahlungs-App und installiert sie bei Bedarf JIT, wie oben beschrieben. Dies ist eine Optimierung, um zu vermeiden, dem Benutzer eine Liste zu präsentieren, die nur eine Zahlungs-App-Option enthält.

> [!NOTE]
> Wenn in dem Zahlungs-App-Manifest [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) auf `true` gesetzt ist, wird der browser die plattform-spezifische Zahlungs-App, die in [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) angegeben ist, starten, um die Zahlung abzuwickeln (falls verfügbar), anstatt die Web-Zahlungsanwendung.

Weitere Einzelheiten finden Sie unter [Bereitstellen eines Web-App-Manifests](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest).

### Überprüfen, ob die Zahlungs-App bereit ist, Zahlungen zu verarbeiten

Die Methode [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) der Payment Request API gibt `true` zurück, wenn eine Zahlungs-App auf dem Gerät des Kunden verfügbar ist. Das bedeutet, dass eine Zahlungs-App, die die Zahlungsmethode unterstützt, erkannt wird und dass die plattformspezifische Zahlungs-App installiert ist oder die webbasierte Zahlungs-App bereit ist, registriert zu werden.

```js
async function checkCanMakePayment() {
  // …

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die Payment Handler API fügt einen zusätzlichen Mechanismus hinzu, um sich auf das Handling einer Zahlung vorzubereiten. Das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis wird auf dem Service Worker einer Zahlungs-App ausgelöst, um zu überprüfen, ob sie bereit ist, eine Zahlung abzuwickeln. Es wird speziell ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft. Der Service Worker kann dann die Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) verwenden, um entsprechend zu antworten:

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

Das von `respondWith()` zurückgegebene Versprechen wird mit einem booleschen Wert aufgelöst, um anzugeben, dass es bereit ist, eine Zahlungsanfrage zu bearbeiten (`true`), oder nicht (`false`).

### Verarbeitung der Zahlung

Nach dem Aufruf der Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) wird ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis auf dem Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service Worker der Zahlungs-App überwacht, um den nächsten Schritt im Zahlungsprozess zu starten.

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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster öffnen, indem sie [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) aufruft. Das Zahlungsfenster bietet den Kunden eine Schnittstelle, in der sie sich authentifizieren, die Lieferadresse und -optionen auswählen und die Zahlung autorisieren können.

Sobald die Zahlung bearbeitet wurde, wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händler-Website zurückzugeben.

Für weitere Details zu dieser Phase siehe [Empfange ein Zahlungsanforderungsevent vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event).

### Verwaltung der Funktionen von Zahlungs-Apps

Sobald ein Service Worker einer Zahlungs-App registriert ist, können Sie die [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz des Service Workers nutzen (zugänglich über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)), um verschiedene Aspekte der Funktionen der Zahlungs-App zu verwalten.

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

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) wird verwendet, um dem Browser einen Hinweis zu geben, der zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler-Benutzeroberfläche angezeigt wird.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, anstatt sie vom Browser zu sammeln (zum Beispiel über die automatische Ausfüllfunktion).

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignis-Objekt für das [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)-Ereignis, das auf dem Service Worker einer Zahlungs-App ausgelöst wird, wenn es erfolgreich registriert wurde, um anzuzeigen, dass es bereit ist, Zahlungen zu bearbeiten.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird verwendet, um verschiedene Aspekte der Funktionen von Zahlungs-Apps zu verwalten. Zugänglich über die Eigenschaft [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager).
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignis-Objekt für das [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis, das auf dem Service Worker einer Zahlungs-App ausgelöst wird, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.

## Erweiterungen auf andere Schnittstellen

- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn sie erfolgreich registriert wurde, um anzuzeigen, dass sie bereit ist, Zahlungen zu bearbeiten.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) Ereignis
  - : Wird auf dem [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt eine [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz einer Zahlungs-App zurück, die verwendet wird, um verschiedene Funktionen der Zahlungs-App zu verwalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks Beispiel-Zahlungs-App](https://bobbucks.dev/)
- [Übersicht über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Einrichtung einer Zahlungsmethode](https://web.dev/articles/setting-up-a-payment-method)
- [Der Lebenszyklus einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Verwendung der Payment Request API](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
