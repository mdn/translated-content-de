---
title: "ServiceWorkerContainer: register()-Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 39ef2b1a33330cbcc1189513640f2152e82397ed
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`**-Methode der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.

Bei Erfolg verknüpft eine Service-Worker-Registrierung die bereitgestellte Skript-URL mit einem _Scope_, welcher anschließend für die Navigationsübereinstimmung verwendet wird. Sie können diese Methode bedingungslos von der gesteuerten Seite aus aufrufen. D.h., Sie müssen nicht zuerst überprüfen, ob es eine aktive Registrierung gibt.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service-Worker-Skripts. Die registrierte Service-Worker-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt mit Registrierungsoptionen. Derzeit verfügbare Optionen sind:

    - `scope`
      - : Ein String, der eine URL darstellt, die den Registrierungsbereich eines Service Workers definiert; also welchen URL-Bereich ein Service Worker steuern kann. Dies ist normalerweise eine relative URL. Sie ist relativ zur Basis-URL der Anwendung. Standardmäßig wird der `scope`-Wert für eine Service-Worker-Registrierung auf das Verzeichnis gesetzt, in dem sich das Service-Worker-Skript befindet (indem `./` gegen `scriptURL` aufgelöst wird). Weitere Informationen darüber, wie dies funktioniert, finden Sie im Abschnitt [Beispiele](#beispiele).
    - `type`

      - : Ein String, der den zu erstellenden Workertyp angibt. Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript. Dies ist die Standardeinstellung.
        - `'module'`
          - : Der geladene Service Worker befindet sich in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und die Import-Anweisung ist in Worker-Kontexten verfügbar. Informationen zur ES-Modul-Kompatibilität finden Sie in der [Tabelle zur Browser-Kompatibilität für die `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Ein String, der angibt, wie der HTTP-Cache für die Ressourcen von Service-Worker-Skripten während der Updates verwendet wird. Hinweis: Dies bezieht sich nur auf das Service-Worker-Skript und seine Importe, nicht auf andere Ressourcen, die von diesen Skripten abgerufen werden.

        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn kein aktueller Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Ressourcen des Service-Worker-Skripts werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

## Beispiele

Die hier beschriebenen Beispiele sollten zusammen betrachtet werden, um ein besseres Verständnis dafür zu bekommen, wie Service-Worker-Scope auf eine Seite angewendet wird.

Das folgende Beispiel verwendet den Standardwert von `scope` (indem es weggelassen wird). Angenommen, der Service-Worker-Code befindet sich unter `example.com/sw.js` und der Registrierungscode unter `example.com/index.html`. Der Service-Worker-Code wird sowohl `example.com/index.html` als auch darunter liegende Seiten wie `example.com/product/description.html` steuern.

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

Der folgende Code, bei dem sich der gesamte Code am selben Ort befindet, würde auf genau dieselben Seiten wie das obige Beispiel angewendet werden. Alternativ, wenn sich der Service-Worker-Code unter `example.com/product/sw.js` und der Registrierungscode unter `example.com/product/description.html` befindet, würde der Service Worker nur auf Ressourcen unter `example.com/product` angewendet werden. Denken Sie daran, dass der Scope, wenn er enthalten ist, den Standort der Seite als Basis verwendet.

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

Es herrscht häufig Verwirrung über die Bedeutung und Verwendung von _Scope_. Ein Service Worker kann keinen breiteren Scope als seinen eigenen Standort haben, es sei denn, der Server legt in einem [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed)-Header auf dem Service-Worker-Skript einen breiteren maximalen Scope fest. Daher sollten Sie die `scope`-Option verwenden, wenn Sie einen _schmaleren_ Bereich als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html` an der Wurzel einer Site enthalten ist, würde nur auf Ressourcen unter `example.com/product` angewendet werden.

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

Wie oben erwähnt, können Server den standardmäßigen maximalen Scope ändern, indem sie den `Service-Worker-Allowed`-Header auf dem Service-Worker-Skript festlegen. In diesem Fall sollte die `scope`-Option einen schmaleren Bereich als der Header-Wert angeben, aber potenziell größer als der Standort des Service Workers.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` festlegt, wenn `sw.js` bereitgestellt wird. Wenn der Server den Header nicht festlegt, schlägt die Service-Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

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
- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
