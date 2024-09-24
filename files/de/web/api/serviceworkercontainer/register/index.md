---
title: "ServiceWorkerContainer: register()-Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`**-Methode der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.

Bei Erfolg verbindet eine Service Worker-Registrierung die bereitgestellte Skript-URL mit einem _scope_, der anschließend für die Navigation verwendet wird. Sie können diese Methode bedingungslos von der kontrollierten Seite aufrufen. Das heißt, Sie müssen nicht zuerst prüfen, ob eine aktive Registrierung vorhanden ist.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service Worker-Skripts. Die registrierte Service Worker-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt mit Registrierungsoptionen. Derzeit verfügbare Optionen sind:

    - `scope`
      - : Ein String, der eine URL repräsentiert, die den Registrierungsbereich eines Service Workers definiert, also welchen URL-Bereich ein Service Worker kontrollieren kann. Dies ist normalerweise eine relative URL. Es ist relativ zur Basis-URL der Anwendung. Standardmäßig ist der `scope`-Wert für eine Service Worker-Registrierung auf das Verzeichnis festgelegt, in dem sich das Service Worker-Skript befindet (durch Auflösung von `./` gegen `scriptURL`). Weitere Informationen darüber, wie es funktioniert, finden Sie im Abschnitt [Beispiele](#beispiele).
    - `type`

      - : Ein String, der den Typ des zu erstellenden Workers angibt. Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript. Dies ist die Standardeinstellung.
        - `'module'`
          - : Der geladene Service Worker befindet sich in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und der Importbefehl ist in Worker-Kontexten verfügbar. Weitere Informationen zur ES-Modul-Kompatibilität finden Sie in der [Browser-Kompatibilitätsdatentabelle für die `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Ein String, der angibt, wie der HTTP-Cache für Ressourcen von Service Worker-Skripten während Updates verwendet wird. Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und seine Importe, nicht auf andere Ressourcen, die von diesen Skripten abgerufen werden.

        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn im HTTP-Cache kein aktueller Eintrag gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn im HTTP-Cache kein aktueller Eintrag für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Ressourcen des Service Worker-Skripts werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

## Beispiele

Die hier beschriebenen Beispiele sollten zusammen betrachtet werden, um ein besseres Verständnis dafür zu bekommen, wie der Scope von Service Workern auf eine Seite angewendet wird.

Das folgende Beispiel verwendet den Standardwert von `scope` (indem es ihn weglässt). Angenommen, der Service Worker-Code befindet sich unter `example.com/sw.js`, und der Registrierungscode unter `example.com/index.html`. Der Service Worker-Code wird `example.com/index.html` sowie darunter liegende Seiten wie `example.com/product/description.html` kontrollieren.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register("./sw.js").then(
    (registration) => {
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

Der folgende Code, mit alledem Code am selben Ort, würde exakt auf dieselben Seiten angewendet wie das obige Beispiel. Alternativ, wenn sich der Service Worker-Code unter `example.com/product/sw.js` befindet und der Registrierungscode unter `example.com/product/description.html`, dann würde der Service Worker nur auf Ressourcen unter `example.com/product` angewendet. Denken Sie daran, dass der Scope, wenn er enthalten ist, den Ort der Seite als Basis verwendet.

```js
if ("serviceWorker" in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(
    (registration) => {
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

Es gibt häufig Verwirrung über die Bedeutung und Verwendung von _scope_. Ein Service Worker kann keinen breiteren Scope haben als seinen eigenen Standort, es sei denn, der Server gibt einen breiteren maximalen Scope in einem [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed)-Header auf dem Service Worker-Skript an. Daher sollten Sie die `scope`-Option verwenden, wenn Sie einen _schmaleren_ Scope als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html` an der Wurzel einer Seite enthalten ist, würde nur auf Ressourcen unter `example.com/product` angewendet.

```js
if ("serviceWorker" in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register("./sw.js", { scope: "/product/" }).then(
    (registration) => {
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

Wie oben erwähnt, können Server den Standard-Maximalbereich ändern, indem sie den `Service-Worker-Allowed`-Header auf dem Service Worker-Skript festlegen. In diesem Fall sollte die `scope`-Option einen schmaleren Bereich als der Header-Wert, aber potenziell größer als der Standort des Service Workers angeben.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` setzt, wenn `sw.js` ausgeliefert wird. Wenn der Server den Header nicht setzt, schlägt die Service Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

```js
if ("serviceWorker" in navigator) {
  // Declaring a broadened scope
  navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
    (registration) => {
      // The registration succeeded because the Service-Worker-Allowed header
      // had set a broadened maximum scope for the service worker script
      console.log("Service worker registration succeeded:", registration);
    },
    (error) => {
      // This happens if the Service-Worker-Allowed header doesn't broaden the scope
      console.error(`Service worker registration failed: ${error}`);
    },
  );
} else {
  console.error("Service workers are not supported.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorkerRegistration: `unregister()`-Methode](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
