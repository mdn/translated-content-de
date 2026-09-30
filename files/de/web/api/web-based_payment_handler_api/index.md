---
title: Web-based Payment Handler API
slug: Web/API/Web-Based_Payment_Handler_API
l10n:
  sourceCommit: b60c5dad8cf10d8492f2aff491abb40bf1851b03
---

{{DefaultAPISidebar("Web-Based Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die webbasierte Payment Handler API stellt standardisierte Funktionen bereit, mit denen Webanwendungen Zahlungen direkt abwickeln können, anstatt Benutzer zur Zahlungsabwicklung auf eine separate Website umzuleiten.

Wenn eine Händlerwebsite über die [Payment Request API](/de/docs/Web/API/Payment_Request_API) eine Zahlung einleitet, ermittelt die webbasierte Payment Handler API geeignete Zahlungs-Apps, zeigt sie dem Benutzer zur Auswahl an und öffnet nach der Auswahl ein Fenster zur Eingabe der Zahlungsdaten. Anschließend wickelt sie die Transaktion mit der Zahlungs-App ab.

Die Kommunikation mit Zahlungs-Apps, etwa zur Autorisierung und zur Übermittlung von Zahlungsinformationen, erfolgt über Service Worker.

## Konzepte und Verwendung

Auf einer Händlerwebsite wird eine Zahlungsanfrage durch Erstellen eines neuen [`PaymentRequest`](/de/docs/Web/API/PaymentRequest)-Objekts eingeleitet:

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

Die Eigenschaft `supportedMethods` gibt eine URL an, die für die vom Händler unterstützte Zahlungsmethode steht. Wenn Sie mehrere Zahlungsmethoden verwenden möchten, geben Sie diese als Array von Objekten an:

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

In Browsern, die die API unterstützen, beginnt der Vorgang damit, dass von jeder URL eine Manifestdatei für die Zahlungsmethode angefordert wird. Ein solches Manifest heißt häufig `payment-manifest.json` (der genaue Name ist frei wählbar) und sollte etwa so aufgebaut sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Bei einer Zahlungsmethodenkennung wie `https://bobbucks.dev/pay` geht der Browser wie folgt vor:

1. Er beginnt, `https://bobbucks.dev/pay` zu laden, und prüft die HTTP-Header.
   1. Wenn ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` vorhanden ist, lädt er stattdessen das Manifest für die Zahlungsmethode vom dort angegebenen Speicherort herunter. Weitere Informationen finden Sie unter [Den Browser bei Bedarf zu einem anderen Speicherort des Zahlungsmethoden-Manifests leiten](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location).
   2. Andernfalls interpretiert er den Antworttext von `https://bobbucks.dev/pay` als Manifest für die Zahlungsmethode.
2. Er parst den heruntergeladenen Inhalt als JSON mit den Einträgen `default_applications` und `supported_origins`.

Diese Einträge haben folgende Aufgaben:

- `default_applications` teilt dem Browser mit, wo er die Standard-Zahlungs-App für die BobBucks-Zahlungsmethode findet, falls noch keine entsprechende App installiert ist.
- `supported_origins` teilt dem Browser mit, welche anderen Zahlungs-Apps bei Bedarf eine BobBucks-Zahlung abwickeln dürfen. Sind diese bereits auf dem Gerät installiert, werden sie dem Benutzer neben der Standardanwendung als alternative Zahlungsoptionen angezeigt.

Aus dem Zahlungsmethoden-Manifest entnimmt der Browser die URLs der [Web-App-Manifestdateien](/de/docs/Web/Progressive_web_apps/Manifest) der Standard-Zahlungs-Apps. Die Dateien können beliebig benannt sein und etwa so aussehen:

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

Wenn die Händleranwendung als Reaktion auf eine Benutzeraktion die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) aufruft, verwendet der Browser die Angaben zu [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name) und [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons) aus den Manifesten, um dem Benutzer die Zahlungs-Apps in der vom Browser bereitgestellten Payment-Request-Oberfläche anzuzeigen.

- Stehen mehrere Zahlungs-Apps zur Verfügung, wird dem Benutzer eine Auswahlliste angezeigt. Mit der Auswahl einer App beginnt der Zahlungsvorgang. Falls erforderlich, installiert der Browser die Web-App dabei Just-in-Time (JIT) und registriert den im Eintrag [`serviceworker`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/serviceworker) angegebenen Service Worker, damit dieser die Zahlung abwickeln kann.
- Steht nur eine Zahlungs-App zur Verfügung, startet [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) den Zahlungsvorgang direkt mit dieser App und installiert sie bei Bedarf wie oben beschrieben Just-in-Time. So wird vermieden, dem Benutzer eine Liste mit nur einer Auswahlmöglichkeit anzuzeigen.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) im Manifest der Zahlungs-App auf `true` gesetzt ist, startet der Browser zur Zahlungsabwicklung die unter [`related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/related_applications) angegebene plattformspezifische Zahlungs-App statt der webbasierten Zahlungs-App, sofern sie verfügbar ist.

Weitere Informationen finden Sie unter [Ein Web-App-Manifest bereitstellen](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest).

### Prüfen, ob die Zahlungs-App zahlungsbereit ist

Die Methode [`PaymentRequest.canMakePayment()`](/de/docs/Web/API/PaymentRequest/canMakePayment) der Payment Request API gibt `true` zurück, wenn auf dem Gerät des Kunden eine Zahlungs-App verfügbar ist. Das bedeutet, dass eine App gefunden wurde, die die Zahlungsmethode unterstützt, und dass entweder die plattformspezifische Zahlungs-App installiert ist oder die webbasierte Zahlungs-App registriert werden kann.

```js
async function checkCanMakePayment() {
  // …

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback to other means of payment or hide the button.
  }
}
```

Die webbasierte Payment Handler API bietet einen zusätzlichen Mechanismus zur Vorbereitung der Zahlungsabwicklung. Das Ereignis [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) wird im Service Worker einer Zahlungs-App ausgelöst, um zu prüfen, ob sie zur Abwicklung einer Zahlung bereit ist. Konkret geschieht dies, wenn die Händlerwebsite den Konstruktor [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) aufruft. Der Service Worker kann dann mit der Methode [`CanMakePaymentEvent.respondWith()`](/de/docs/Web/API/CanMakePaymentEvent/respondWith) antworten:

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

Das von `respondWith()` zurückgegebene Promise wird mit einem booleschen Wert erfüllt, der angibt, ob die App bereit ist, eine Zahlungsanfrage abzuwickeln (`true`), oder nicht (`false`).

### Die Zahlung abwickeln

Nach dem Aufruf von [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) wird im Service Worker der Zahlungs-App ein [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)-Ereignis ausgelöst. Der Service Worker der Zahlungs-App überwacht dieses Ereignis, um die nächste Phase des Zahlungsvorgangs einzuleiten.

```js
let paymentRequestEvent;
const resolver = Promise.withResolvers();
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

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App durch Aufruf von [`PaymentRequestEvent.openWindow()`](/de/docs/Web/API/PaymentRequestEvent/openWindow) ein Fenster zur Zahlungsabwicklung öffnen. Darin wird den Kunden eine Oberfläche der Zahlungs-App angezeigt, über die sie sich authentifizieren, eine Lieferadresse und Versandoptionen auswählen und die Zahlung autorisieren können.

Nach der Abwicklung der Zahlung wird [`PaymentRequestEvent.respondWith()`](/de/docs/Web/API/PaymentRequestEvent/respondWith) verwendet, um das Zahlungsergebnis an die Händlerwebsite zurückzugeben.

Weitere Informationen zu dieser Phase finden Sie unter [Eine Zahlungsanfrage vom Händler empfangen](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event).

### Funktionen der Zahlungs-App verwalten

Sobald der Service Worker einer Zahlungs-App registriert ist, können Sie über dessen [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz (zugänglich über [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)) verschiedene Funktionen der Zahlungs-App verwalten.

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

- [`PaymentManager.userHint`](/de/docs/Web/API/PaymentManager/userHint) stellt einen Hinweis bereit, den der Browser in der Oberfläche des webbasierten Payment Handlers zusammen mit dem Namen und dem Symbol der Zahlungs-App anzeigen kann.
- [`PaymentManager.enableDelegations()`](/de/docs/Web/API/PaymentManager/enableDelegations) überträgt der Zahlungs-App die Verantwortung, verschiedene Teile der benötigten Zahlungsinformationen bereitzustellen, anstatt sie vom Browser erfassen zu lassen, beispielsweise durch automatisches Ausfüllen.

## Schnittstellen

- [`CanMakePaymentEvent`](/de/docs/Web/API/CanMakePaymentEvent)
  - : Das Ereignisobjekt für das Ereignis [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event). Es wird im Service Worker einer Zahlungs-App ausgelöst, nachdem dieser erfolgreich registriert wurde, um zu signalisieren, dass die App zur Abwicklung von Zahlungen bereit ist.
- [`PaymentManager`](/de/docs/Web/API/PaymentManager)
  - : Wird zur Verwaltung verschiedener Funktionen einer Zahlungs-App verwendet. Der Zugriff erfolgt über die Eigenschaft [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager).
- [`PaymentRequestEvent`](/de/docs/Web/API/PaymentRequestEvent) {{Experimental_Inline}}
  - : Das Ereignisobjekt für das Ereignis [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event). Es wird im Service Worker einer Zahlungs-App ausgelöst, wenn auf der Händlerwebsite über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) ein Zahlungsvorgang eingeleitet wurde.

## Erweiterungen anderer Schnittstellen

- Ereignis [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)
  - : Wird im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, nachdem diese erfolgreich registriert wurde, um zu signalisieren, dass sie zur Abwicklung von Zahlungen bereit ist.
- Ereignis [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event)
  - : Wird im [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) einer Zahlungs-App ausgelöst, wenn auf der Händlerwebsite über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) ein Zahlungsvorgang eingeleitet wurde.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager)
  - : Gibt die [`PaymentManager`](/de/docs/Web/API/PaymentManager)-Instanz einer Zahlungs-App zurück, mit der verschiedene Funktionen der App verwaltet werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [BobBucks-Beispiel für eine Zahlungs-App](https://bobbucks.dev/)
- [Überblick über webbasierte Zahlungs-Apps](https://web.dev/articles/web-based-payment-apps-overview)
- [Eine Zahlungsmethode einrichten](https://web.dev/articles/setting-up-a-payment-method)
- [Ablauf einer Zahlungstransaktion](https://web.dev/articles/life-of-a-payment-transaction)
- [Die Payment Request API verwenden](/de/docs/Web/API/Payment_Request_API/Using_the_Payment_Request_API)
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
