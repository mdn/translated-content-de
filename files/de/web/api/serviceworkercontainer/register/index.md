---
title: "ServiceWorkerContainer: register() Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 39ef2b1a33330cbcc1189513640f2152e82397ed
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`** Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Interfaces erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.

Wenn erfolgreich, verbindet eine Service Worker-Registrierung die bereitgestellte Skript-URL mit einem _Scope_, der anschließend für die Navigationszuordnung verwendet wird. Sie können diese Methode bedingungslos von der kontrollierten Seite aus aufrufen. Das heißt, Sie müssen nicht zuerst überprüfen, ob es eine aktive Registrierung gibt.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service Worker-Skripts. Die registrierte Service Worker-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:

    - `scope`
      - : Eine Zeichenfolge, die eine URL darstellt, die den Registrierungsbereich eines Service Workers definiert; das heißt, welchen Bereich von URLs ein Service Worker kontrollieren kann. Dies ist normalerweise eine relative URL. Sie ist relativ zur Basis-URL der Anwendung. Standardmäßig wird der `scope`-Wert für eine Service Worker-Registrierung auf das Verzeichnis gesetzt, in dem sich das Service Worker-Skript befindet (durch Auflösen von `./` gegen `scriptURL`). Weitere Informationen zur Funktionsweise finden Sie im Abschnitt [Beispiele](#beispiele).
    - `type`

      - : Eine Zeichenkette, die den zu erstellenden Worker-Typ angibt. Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript. Dies ist der Standard.
        - `'module'`
          - : Der geladene Service Worker befindet sich in einem
            [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules)
            und die Import-Anweisung ist in Worker-Kontexten verfügbar. Für Informationen zur ES-Modul-Kompatibilität siehe die [Browser-Kompatibilitätsdatentabelle für das `ServiceWorker`-Interface](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Eine Zeichenkette, die angibt, wie der HTTP-Cache bei Updates für Service Worker-Skript-Ressourcen verwendet wird. Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und dessen Importe, nicht auf andere von diesen Skripten abgefragte Ressourcen.

        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn kein frischer Eintrag im HTTP-Cache gefunden wird, werden die Skripte von Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer vom Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie vom Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Service Worker-Skript-Ressourcen werden vom Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)
Objekt aufgelöst wird.

## Beispiele

Die hier beschriebenen Beispiele sollten zusammen betrachtet werden, um ein besseres Verständnis dafür zu bekommen, wie der Scope von Service Workern auf eine Seite angewendet wird.

Das folgende Beispiel verwendet den Standardwert für `scope` (indem es ihn auslässt). Angenommen, der Service Worker-Code befindet sich unter `example.com/sw.js`, und der Registrierungscode unter `example.com/index.html`. Der Service Worker-Code wird `example.com/index.html` sowie darunter liegende Seiten wie `example.com/product/description.html` kontrollieren.

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

Der folgende Code würde, wenn sich sämtliche Codes an demselben Ort befinden, auf genau dieselben Seiten angewendet werden wie im obigen Beispiel. Alternativ, wenn der Service Worker-Code unter `example.com/product/sw.js` und der Registrierungscode unter `example.com/product/description.html` ist, dann würde der Service Worker nur auf Ressourcen unter `example.com/product` angewendet werden. Denken Sie daran, dass der Scope, wenn er enthalten ist, die Standortbasis der Seite verwendet.

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

Es gibt häufig Verwirrung über die Bedeutung und Verwendung des _Scope_. Ein Service Worker kann keinen breiteren Scope als seinen eigenen Standort haben, es sei denn, der Server gibt einen breiteren maximalen Scope in einem [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed) Header im Service Worker-Skript an. Daher sollten Sie die `scope`-Option verwenden, wenn Sie einen _engeren_ Scope als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html` an der Wurzel einer Seite enthalten ist, würde nur auf Ressourcen unter `example.com/product` angewendet werden.

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

Wie oben angemerkt, können Server den Standard-Maximalbereich ändern, indem sie den `Service-Worker-Allowed` Header im Service Worker-Skript setzen. In diesem Fall sollte die `scope`-Option einen engeren Bereich als den Header-Wert angeben, aber potenziell größer als der Standort des Service Workers sein.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet werden, wenn der Server den `Service-Worker-Allowed` Header auf `/` oder `https://example.com/` beim Bereitstellen von `sw.js` gesetzt hat. Wenn der Server den Header nicht setzt, schlägt die Service Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

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

- [ServiceWorkerRegistration: `unregister()` Methode](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
