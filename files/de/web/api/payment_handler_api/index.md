---
title: Payment Handler API
slug: Web/API/Payment_Handler_API
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Payment Handler API")}}{{securecontext_header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Payment Handler API bietet eine standardisierte Funktionalität für Webanwendungen, um Zahlungen direkt zu bearbeiten, anstatt zu einer separaten Seite für die Zahlungsabwicklung weitergeleitet zu werden.

Wenn eine Händler-Website eine Zahlung über die {{domxref("Payment Request API", "Payment Request API", "", "nocode")}} initiiert, übernimmt die Payment Handler API die Entdeckung der anwendbaren Zahlungs-Apps, präsentiert diese dem Benutzer als Auswahl, öffnet ein Zahlungsfenster, sobald eine Auswahl getroffen wurde, um dem Benutzer die Eingabe seiner Zahlungsdaten zu ermöglichen, und bearbeitet die Zahlungstransaktion mit der Zahlungs-App.

Die Kommunikation mit Zahlungs-Apps (Autorisierung, Übermittlung von Zahlungsdaten) erfolgt über Service Workers.

## Konzepte und Nutzung

Auf einer Händler-Website wird eine Zahlungsanforderung durch die Erstellung eines neuen {{domxref("PaymentRequest")}}-Objekts initiiert:

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

Die Eigenschaft `supportedMethods` gibt eine URL an, die die vom Händler unterstützte Zahlungsmethode darstellt. Um mehr als eine Zahlungsmethode zu verwenden, würden Sie diese in einem Array von Objekten angeben, wie folgt:

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

In unterstützenden Browsern beginnt der Prozess mit der Anforderung einer Zahlungsmanifestdatei von jeder URL. Ein Zahlungsmanifest wird typischerweise als `payment-manifest.json` bezeichnet (der genaue Name kann frei gewählt werden) und sollte folgendermaßen strukturiert sein:

```json
{
  "default_applications": ["https://bobbucks.dev/manifest.json"],
  "supported_origins": ["https://alicepay.friendsofalice.example"]
}
```

Angenommen, es gibt einen Zahlungskennzeichner wie `https://bobbucks.dev/pay`, dann:

1. Beginnt der Browser mit dem Laden von `https://bobbucks.dev/pay` und überprüft dessen HTTP-Header.
   1. Wenn ein {{httpheader("Link")}}-Header mit `rel="payment-method-manifest"` gefunden wird, wird das Zahlungsmanifest von diesem Ort heruntergeladen (siehe [Optionales Routing des Browsers, um das Zahlungsmanifest an einem anderen Ort zu finden](https://web.dev/articles/setting-up-a-payment-method#optionally_route_the_browser_to_find_the_payment_method_manifest_in_another_location) für Details).
   2. Andernfalls wird der Antwortinhalt von `https://bobbucks.dev/pay` als Zahlungsmanifest analysiert.
2. Der heruntergeladene Inhalt wird als JSON mit den Mitgliedern `default_applications` und `supported_origins` geparst.

Diese Mitglieder haben folgende Zwecke:

- `default_applications` gibt dem Browser an, wo die Standard-Zahlungs-App zu finden ist, die die BobBucks-Zahlungsmethode verwenden kann, falls sie nicht schon installiert ist.
- `supported_origins` gibt dem Browser an, welche anderen Zahlungs-Apps bei Bedarf zur Bearbeitung der BobBucks-Zahlung berechtigt sind. Wenn sie bereits auf dem Gerät installiert sind, werden sie dem Benutzer als alternative Zahlungsoptionen neben der Standard-Anwendung präsentiert.

Aus dem Zahlungsmanifest erhält der Browser die URL der Web-App-Manifestdateien der Standard-Zahlungs-Apps, die beliebig benannt sein können und in etwa folgendermaßen aussehen:

```json
{
  "name": "Pay with BobBucks",
  "short_name": "BobBucks",
  "description": "Dies ist ein Beispiel für die Payment Handler API.",
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

Wenn die {{domxref("PaymentRequest.show()")}}-Methode von der Händler-App als Reaktion auf eine Benutzeraktion aufgerufen wird, verwendet der Browser die Informationen aus jedem Manifest, wie den [`name`](/de/docs/Web/Manifest/name) und die [`icons`](/de/docs/Web/Manifest/icons), um dem Benutzer die Zahlungs-Apps in der vom Browser bereitgestellten Payment Request UI zu präsentieren.

- Wenn es mehrere Zahlungs-App-Optionen gibt, wird dem Benutzer eine Liste mit Auswahlmöglichkeiten angezeigt, aus denen er wählen kann. Durch das Auswählen einer Zahlungs-App wird der Zahlungsablauf gestartet, was den Browser dazu veranlasst, die Web-App bei Bedarf Just-In-Time (JIT) zu installieren und den im [`serviceworker`](/de/docs/Web/Manifest/serviceworker)-Mitglied angegebenen Service Worker zu registrieren, damit er die Zahlung bearbeiten kann.
- Wenn es nur eine Zahlungs-App-Option gibt, startet die {{domxref("PaymentRequest.show()")}}-Methode den Zahlungsablauf mit dieser Zahlungs-App, wobei sie bei Bedarf JIT installiert wird, wie oben beschrieben. Dies ist eine Optimierung, um dem Benutzer eine Liste zu ersparen, die nur eine Zahlungs-App-Auswahl enthält.

> [!NOTE]
> Wenn [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) auf `true` im Zahlungs-App-Manifest gesetzt ist, wird der Browser die plattformspezifische Zahlungs-App starten, die in [`related_applications`](/de/docs/Web/Manifest/related_applications) angegeben ist, um die Zahlung zu bearbeiten (falls sie verfügbar ist), anstatt die Web-Zahlungs-App.

Siehe [Bereitstellung eines Web-App-Manifests](https://web.dev/articles/setting-up-a-payment-method#step_3_serve_a_web_app_manifest) für weitere Details.

### Überprüfen, ob die Zahlungs-App zahlungsbereit ist

Die Methode {{domxref("PaymentRequest.canMakePayment()")}} der Payment Request API gibt `true` zurück, wenn eine Zahlungs-App auf dem Gerät des Kunden verfügbar ist, was bedeutet, dass eine Zahlungs-App, die die Zahlungsmethode unterstützt, entdeckt wurde und dass die plattformspezifische Zahlungs-App installiert oder die webbasierte Zahlungs-App bereit zur Registrierung ist.

```js
async function checkCanMakePayment() {
  // ...

  const canMakePayment = await request.canMakePayment();
  if (!canMakePayment) {
    // Fallback auf andere Zahlungsmethoden oder Ausblenden des Buttons.
  }
}
```

Die Payment Handler API fügt einen zusätzlichen Mechanismus hinzu, um sich auf die Bearbeitung einer Zahlung vorzubereiten. Das {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}}-Ereignis wird auf einem Service Worker der Zahlungs-App ausgelöst, um zu prüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Genauer gesagt, wird es ausgelöst, wenn die Händler-Website den {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}}-Konstruktor aufruft. Der Service Worker kann dann die Methode {{domxref("CanMakePaymentEvent.respondWith()")}} verwenden, um entsprechend zu antworten:

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

Das von `respondWith()` zurückgegebene Versprechen löst sich mit einem booleschen Wert auf, um zu signalisieren, dass es bereit ist, eine Zahlungsanfrage zu bearbeiten (`true`) oder nicht (`false`).

### Bearbeiten der Zahlung

Nach dem Aufruf der {{domxref("PaymentRequest.show()")}}-Methode wird ein {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}}-Ereignis auf dem Service Worker der Zahlungs-App ausgelöst. Dieses Ereignis wird im Service Worker der Zahlungs-App überwacht, um den nächsten Schritt des Zahlungsvorgangs zu beginnen.

```js
let payment_request_event;
let resolver;
let client;

// `self` ist das globale Objekt im Service Worker
self.addEventListener("paymentrequest", async (e) => {
  if (payment_request_event) {
    // Wenn es eine laufende Zahlungstransaktion gibt, diese ablehnen.
    resolver.reject();
  }
  // Ereignis für zukünftige Verwendung aufbewahren
  payment_request_event = e;

  // ...
});
```

Wenn ein `paymentrequest`-Ereignis empfangen wird, kann die Zahlungs-App ein Zahlungsfenster öffnen, indem sie {{domxref("PaymentRequestEvent.openWindow()")}} aufruft. Das Zahlungsfenster präsentiert den Kunden eine Oberfläche der Zahlungs-App, in der sie sich authentifizieren, die Lieferadresse und Optionen auswählen und die Zahlung autorisieren können.

Wenn die Zahlung bearbeitet wurde, wird {{domxref("PaymentRequestEvent.respondWith()")}} verwendet, um das Zahlungsergebnis an die Händler-Website zurückzumelden.

Siehe [Empfangen eines Zahlungserforderungsereignisses vom Händler](https://web.dev/articles/orchestrating-payment-transactions#receive-payment-request-event) für weitere Details zu dieser Phase.

### Verwaltung der Zahlungs-App-Funktionalität

Sobald ein Service Worker einer Zahlungs-App registriert ist, können Sie die {{domxref("PaymentManager")}}-Instanz des Service Workers (zugänglich über {{domxref("ServiceWorkerRegistration.paymentManager")}}) verwenden, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten.

Zum Beispiel:

```js
navigator.serviceWorker.register("serviceworker.js").then((registration) => {
  registration.paymentManager.userHint = "Kartennummer sollte 16 Ziffern haben";

  registration.paymentManager
    .enableDelegations(["shippingAddress", "payerName"])
    .then(() => {
      // ...
    });

  // ...
});
```

- {{domxref("PaymentManager.userHint")}} wird verwendet, um einen Hinweis anzuzeigen, der zusammen mit dem Namen und dem Symbol der Zahlungs-App in der Payment Handler UI des Browsers angezeigt wird.
- {{domxref("PaymentManager.enableDelegations()")}} wird verwendet, um die Verantwortung für die Bereitstellung verschiedener Teile der erforderlichen Zahlungsinformationen an die Zahlungs-App zu delegieren, anstatt sie vom Browser zu sammeln (zum Beispiel über Autofill).

## Schnittstellen

- {{domxref("CanMakePaymentEvent")}}
  - : Das Ereignisobjekt für das {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}}-Ereignis, das ausgelöst wird, wenn ein Service Worker einer Zahlungs-App erfolgreich registriert wurde, um zu signalisieren, dass es bereit ist, Zahlungen zu bearbeiten.
- {{domxref("PaymentManager")}}
  - : Wird verwendet, um verschiedene Aspekte der Funktionalität der Zahlungs-App zu verwalten. Zugriff über die {{domxref("ServiceWorkerRegistration.paymentManager")}}-Eigenschaft.
- {{domxref("PaymentRequestEvent")}} {{Experimental_Inline}}
  - : Das Ereignisobjekt für das {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}}-Ereignis, das auf einem Service Worker einer Zahlungs-App ausgelöst wird, wenn ein Zahlungsablauf auf der Händler-Website über die {{domxref("PaymentRequest.show()")}}-Methode initiiert wurde.

## Erweiterungen für andere Schnittstellen

- {{domxref("ServiceWorkerGlobalScope.canmakepayment_event", "canmakepayment")}}-Ereignis
  - : Wird auf einem {{domxref("ServiceWorkerGlobalScope")}} einer Zahlungs-App ausgelöst, wenn sie erfolgreich registriert wurde, um zu signalisieren, dass sie bereit ist, Zahlungen zu bearbeiten.
- {{domxref("ServiceWorkerGlobalScope.paymentrequest_event", "paymentrequest")}}-Ereignis
  - : Wird auf einem {{domxref("ServiceWorkerGlobalScope")}} einer Zahlungs-App ausgelöst, wenn ein Zahlungsablauf auf der Händler-Website über die {{domxref("PaymentRequest.show()")}}-Methode initiiert wurde.
- {{domxref("ServiceWorkerRegistration.paymentManager")}}
  - : Gibt eine {{domxref("PaymentManager")}}-Instanz der Zahlungs-App zurück, die zur Verwaltung verschiedener Zahlungs-App-Funktionalitäten verwendet wird.

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
- [Konzepte der Zahlungsabwicklung](/de/docs/Web/API/Payment_Request_API/Concepts)
