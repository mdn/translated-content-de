---
title: "ServiceWorkerContainer: register()-Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 3cb8c590ddc700407ac4295ca4d3191ac10ddc8e
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`**-Methode der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Geltungsbereich.
Bei Erfolg verknüpft die Registrierung die bereitgestellte Script-URL mit einem _scope_, der anschließend zum Abgleichen von Dokumenten mit einem bestimmten Service Worker verwendet wird.

Für jeden eindeutigen Geltungsbereich wird eine einzelne Registrierung erstellt.
Wenn `register()` für einen Geltungsbereich aufgerufen wird, der bereits eine Registrierung hat, wird die Registrierung mit Änderungen an der scriptURL oder den Optionen aktualisiert.
Wenn keine Änderungen vorhanden sind, wird die bestehende Registrierung zurückgegeben.
Beachten Sie, dass das Aufrufen von `register()` mit demselben Geltungsbereich und `scriptURL` den Installationsprozess nicht neu startet.
Sie können diese Methode daher bedingungslos von einer kontrollierten Seite aus aufrufen: Sie müssen nicht zuerst prüfen, ob eine aktive Registrierung oder ein Service Worker vorhanden ist.

Ein Dokument kann potenziell im Geltungsbereich mehrerer Registrierungen mit unterschiedlichen Service Workern und Optionen liegen.
Der Browser verknüpft das Dokument mit der passenden Registrierung, die den spezifischsten Geltungsbereich hat.
Dies gewährleistet, dass jeweils nur ein Service Worker für jedes Dokument ausgeführt wird.

> [!NOTE]
> Es ist im Allgemeinen sicherer, keine Registrierungen mit überlappenden Geltungsbereichen zu definieren.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service Worker-Skripts.
    Die registrierte Service Worker-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:

    - `scope`

      - : Ein String, der eine URL darstellt und den Registrierungsbereich eines Service Workers definiert; das heißt, welchen Bereich von URLs ein Service Worker kontrollieren kann.

        Dies wird normalerweise als URL angegeben, die relativ zur Basis-URL der Seite ist (z.B. `/some/path/`), sodass der aufgelöste Geltungsbereich unabhängig davon gleich ist, von welcher Seite aus der Registrierungscode aufgerufen wird.
        Der Standard-`scope` für eine Service Worker-Registrierung ist das Verzeichnis, in dem sich das Service Worker-Skript befindet (Lösung von `./` gegenüber `scriptURL`).

        Der Geltungsbereich sollte verwendet werden, um Dokumente zu spezifizieren, die sich im selben Verzeichnis befinden oder tiefer verschachtelt sind als der Service Worker.
        Wenn Sie einen breiteren Geltungsbereich benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header erlaubt werden.
        Weitere Informationen zum Erweitern des Standard-Geltungsbereichs eines Service Workers finden Sie im Abschnitt [Beispiele](#beispiele).

    - `type`

      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem standardmäßigen Skript.
            Dies ist der Standard.
        - `'module'`
          - : Der geladene Service Worker befindet sich in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und die `import`-Anweisung ist in Worker-Kontexten verfügbar.
            Weitere Informationen zur ES-Modul-Kompatibilität finden Sie in der [Browser-Kompatibilitätsdatentabelle für die `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Ein String, der angibt, wie der HTTP-Cache für Ressourcen von Service Worker-Skripten während Aktualisierungen verwendet wird.
        Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und seine Importe, nicht auf andere von diesen Skripten abgerufene Ressourcen.

        - `'all'`
          - : Der HTTP-Cache wird nach dem Hauptskript und allen importierten Skripten abgefragt. Wenn kein frischer Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird für das Hauptskript oder seine Importe nicht verwendet. Alle Service Worker-Skriptressourcen werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`

  - : Die `scriptURL` oder `scope URL` ist ein Fehler.
    Dies kann passieren, wenn die URL nicht in eine gültige URL aufgelöst werden kann oder ein Schema verwendet, das nicht `http:` oder `https` ist.
    Dies kann auch auftreten, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und dies eine Anforderung der [Trusted Types Policy](/de/docs/Web/API/Trusted_Types_API) der Seite ist.

    Die Ausnahme tritt auch auf, wenn der Pfad der `scriptURL` oder `scope URL` das ASCII-fallunempfindliche "%2f" (`*`) oder "%5c" (`=`) enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` ist keine potenziell vertrauenswürdige Herkunft, wie `localhost` oder eine `https`-URL.
    Die `scriptURL` und der Geltungsbereich sind nicht gleichherkunftlich mit der registrierenden Seite.

## Beispiele

Die folgenden Beispiele sollten zusammen gelesen werden, um zu verstehen, wie der Geltungsbereich von Service Workern auf eine Seite angewendet wird.

### Registrierung eines Service Workers mit dem Standard-Geltungsbereich

Das folgende Beispiel verwendet den Standardwert von `scope`, indem es diesen weglässt, wodurch dieser auf denselben Speicherort wie die Skript-URL gesetzt wird.

Nehmen wir an, der Service Worker-Code befindet sich bei `example.com/sw.js` und der Registrierungscode bei `example.com/index.html`.
Der Service Worker-Code wird `example.com/index.html` sowie Seiten darunter wie `example.com/product/description.html` kontrollieren.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker.register("/sw.js").then(
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

Beachten Sie, dass wir die `scriptURL` relativ zum Site-Stammverzeichnis und nicht zur aktuellen Seite registriert haben.
Dies ermöglicht die Verwendung desselben Registrierungscodes von jeder Seite aus.

### Registrierung eines Service Workers mit einem expliziten Standard-Geltungsbereich

Der folgende Code ist nahezu identisch, außer dass wir den Geltungsbereich explizit mit `{ scope: "/" }` angegeben haben.
Wir haben den Geltungsbereich als Seiten-relativ angegeben, sodass derselbe Registrierungscode überall auf der Site verwendet werden kann.

```js
if ("serviceWorker" in navigator) {
  // declaring scope manually
  navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(
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

Dieser Geltungsbereich ist derselbe wie der Standard-Geltungsbereich, sodass die Registrierung für genau dieselben Seiten gilt wie im vorherigen Beispiel.
Beachten Sie, dass, wenn wir diesen Code nach dem vorherigen Beispiel ausführen würden, Browser erkennen sollten, dass wir eine vorhandene Registrierung aktualisieren und keine neue erstellen.

### Registrierung eines Service Workers mit seitenrelativen URLs

Es gibt nichts, das Sie daran hindert, seitenrelative URLs zu verwenden, außer dass dies das Verschieben Ihrer Seiten erschwert, und es ist leicht, unbeabsichtigte Registrierungen zu erstellen, wenn Sie so vorgehen.

In diesem Beispiel befindet sich der Service Worker-Code bei `example.com/product/sw.js` und der Registrierungscode bei `example.com/product/description.html`.
Wir verwenden URLs, die relativ zum aktuellen Verzeichnis für `scriptURL` und `scope` sind, wobei das aktuelle Verzeichnis die Basis-URL der Seite ist, die `register()` (`example.com/product/`) aufruft.
Der Service Worker gilt für Ressourcen unter `example.com/product/`.

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

### Verwendung von Service-Worker-Allowed zur Erhöhung des Service Worker-Geltungsbereichs

Ein Service Worker kann keinen breiteren Geltungsbereich haben als seinen eigenen Standort, es sei denn, der Server gibt einen breiteren maximalen Geltungsbereich in einem {{HTTPHeader("Service-Worker-Allowed")}}-Header im Service Worker-Skript an.
Verwenden Sie die `scope`-Option, wenn Sie einen _enger_ Geltungsbereich als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html`, der Wurzel einer Seite, enthalten ist, würde nur für Ressourcen unter `example.com/product` gelten.

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

Wie oben erwähnt, können Server den Standard-Geltungsbereich ändern, indem sie den `Service-Worker-Allowed`-Header im Service Worker-Skript festlegen.
Dies ermöglicht es, die `scope`-Option außerhalb des Pfades zu setzen, den der Standort des Service Workers definiert.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde für alle Ressourcen unter `example.com` gelten, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` setzt, wenn `sw.js` bedient wird. Wenn der Server den Header nicht setzt, schlägt die Service Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

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
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
