---
title: "ServiceWorkerContainer: register() Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 5d29bef0815f8cc4b5b152b9ee1ab53f002ee617
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den gegebenen Scope. Bei Erfolg assoziiert die Registrierung die bereitgestellte Skript-URL mit einem _Scope_, der anschließend verwendet wird, um Dokumente einem bestimmten Service Worker zuzuordnen.

Für jeden einzigartigen Scope wird eine einzelne Registrierung erstellt. Wenn `register()` für einen Scope aufgerufen wird, der bereits eine vorhandene Registrierung hat, wird die Registrierung mit etwaigen Änderungen an der `scriptURL` oder den Optionen aktualisiert. Wenn es keine Änderungen gibt, wird die vorhandene Registrierung zurückgegeben. Beachten Sie, dass durch Aufrufen von `register()` mit demselben Scope und `scriptURL` der Installationsprozess nicht neu gestartet wird. Sie können diese Methode daher bedingungslos von einer kontrollierten Seite aufrufen: Es ist nicht erforderlich, zuerst zu prüfen, ob es eine aktive Registrierung oder einen Service Worker gibt.

Ein Dokument kann potenziell innerhalb des Scopes mehrerer Registrierungen mit verschiedenen Service Workern und Optionen liegen. Der Browser wird das Dokument mit der passenden Registrierung assoziieren, die den spezifischsten Scope hat. Dies stellt sicher, dass für jedes Dokument nur ein Service Worker ausgeführt wird.

> [!NOTE]
> Es ist im Allgemeinen sicherer, keine Registrierungen mit überlappenden Scopes zu definieren.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service Worker-Skripts. Die registrierte Service Worker-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:

    - `scope`

      - : Ein String, der eine URL darstellt, die den Registrierungs-Scope eines Service Workers definiert; das heißt, welchen Bereich von URLs ein Service Worker kontrollieren kann.

        Dies wird üblicherweise als URL angegeben, die relativ zur Basis-URL der Seite ist (z. B. `/some/path/`), sodass der aufgelöste Scope unabhängig davon, von welcher Seite der Registrierungscode ausgeführt wird, derselbe ist. Standardmäßig wird der `scope`-Wert einer Service Worker-Registrierung auf das Verzeichnis gesetzt, in dem sich das Service Worker-Skript befindet (durch Auflösen von `./` gegen `scriptURL`).

        Der Scope muss Dokumente spezifizieren, die sich im selben Verzeichnis oder tiefer verschachtelt als der Service Worker befinden (wenn Sie einen größeren Scope benötigen, kann dies über den HTTP-Header `Service-Worker-Allowed` erlaubt werden).

        Siehe den Abschnitt [Beispiele](#beispiele) für weitere Informationen darüber, wie es funktioniert.

    - `type`

      - : Ein String, der den zu erstellenden Worker-Typ angibt. Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript. Dies ist der Standard.
        - `'module'`
          - : Der geladene Service Worker befindet sich in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und der Import-Befehl ist in Worker-Kontexten verfügbar. Für Informationen zur ES-Modul-Kompatibilität siehe die [Tabelle zur Browser-Kompatibilität für das `ServiceWorker`-Interface](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Ein String, der angibt, wie der HTTP-Cache für Ressourcen von Service Worker-Skripten während Updates verwendet wird. Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und seine Importe, nicht auf andere Ressourcen, die von diesen Skripten abgerufen werden.

        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn kein frischer Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Ressourcen des Service Worker-Skripts werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`

  - : Die `scriptURL` oder `scope URL` ist ein Fehler. Dies kann passieren, wenn die URL nicht auf eine gültige URL aufgelöst werden kann oder ein Schema verwendet, das nicht `http:` oder `https` ist. Es kann auch passieren, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist, und dies eine Anforderung der [Trusted Types Policy](/de/docs/Web/API/Trusted_Types_API) der Seite ist.

    Die Ausnahme wird auch ausgelöst, wenn der Pfad der `scriptURL` oder `scope URL` das fallunempfindliche ASCII "%2f" (`*`) oder "%5c" (`=`) enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` ist keine potenziell vertrauenswürdige Herkunft, wie `localhost` oder eine `https`-URL. Die `scriptURL` und der Scope sind nicht selben Ursprungs wie die registrierende Seite.

## Beispiele

Die hier beschriebenen Beispiele sollten zusammen betrachtet werden, um ein besseres Verständnis davon zu erhalten, wie der Scope von Service Workern auf eine Seite angewendet wird.

### Service Worker mit Standardscope registrieren

Das folgende Beispiel verwendet den Standardwert von `scope` (indem es weggelassen wird), der ihn auf denselben Ort wie die Skript-URL setzt.

Angenommen, der Service Worker-Code befindet sich unter `example.com/sw.js`, und der Registrierungscode unter `example.com/index.html`. Der Service Worker-Code wird `example.com/index.html` sowie Seiten darunter, wie `example.com/product/description.html`, kontrollieren.

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

Beachten Sie, dass wir die `scriptURL` relativ zum Stammpfad der Seite und nicht zur aktuellen Seite registriert haben. Dies ermöglicht es, denselben Registrierungscode von jeder Seite aus zu verwenden.

### Service Worker mit explizitem Standardscope registrieren

Der folgende Code ist fast identisch, außer dass wir den Scope explizit mit `{ scope: "/" }` angegeben haben. Wiederum haben wir den Scope als site-relativ spezifiziert, damit derselbe Registrierungscode von überall auf der Seite verwendet werden kann.

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

Dieser Scope ist zufällig derselbe wie der Standardscope, sodass die Registrierung auf genau dieselben Seiten wie im obigen Beispiel angewendet wird. Beachten Sie, dass, wenn wir diesen Code nach dem vorherigen Beispiel ausführen würden, die Browser erkennen sollten, dass wir eine vorhandene Registrierung aktualisieren, anstatt eine neue zu erstellen.

### Service Worker mit seitenrelativen URLs registrieren

Es gibt nichts, das Sie daran hindert, seitenrelative URLs zu verwenden, außer dass dies es schwieriger macht, Ihre Seiten zu verschieben und es leicht ist, versehentlich unerwünschte Registrierungen zu erstellen.

In diesem Beispiel befindet sich der Service Worker-Code unter `example.com/product/sw.js`, und der Registrierungscode unter `example.com/product/description.html`. Wir verwenden URLs, die relativ zum aktuellen Verzeichnis für die `scriptURL` und den Scope sind, wobei das aktuelle Verzeichnis die Basis-URL der Seite ist, die `register()` aufruft (`example.com/product/`). Der Service Worker wird auf Ressourcen unter `example.com/product/` angewendet.

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

### Verwenden von Service-Worker-Allowed zur Erhöhung des Service Worker-Scopes

Es besteht häufig Verwirrung über die Bedeutung und Verwendung des _Scope_. Ein Service Worker kann keinen breiteren Scope als seinen eigenen Standort haben, es sei denn, der Server gibt im Header [Service-Worker-Allowed](https://w3c.github.io/ServiceWorker/#service-worker-allowed) einen breiteren maximalen Scope auf dem Service Worker-Skript an. Daher sollten Sie die `scope`-Option verwenden, wenn Sie einen _engeren_ Scope als den Standard benötigen.

Der folgende Code würde, wenn er auf `example.com/index.html`, im Stammverzeichnis einer Website, enthalten ist, nur auf Ressourcen unter `example.com/product` angewendet werden.

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

Wie oben erwähnt, können Server den Standard-maximalen Scope ändern, indem sie den `Service-Worker-Allowed`-Header auf dem Service Worker-Skript setzen. In diesem Fall sollte die `scope`-Option einen engeren Scope als den Headerwert angeben, aber potenziell größer sein als der Standort des Service Workers.

Der folgende Code würde, wenn er in `example.com/product/index.html` enthalten ist, auf alle Ressourcen unter `example.com` angewendet werden, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` setzt, wenn `sw.js` bereitgestellt wird. Wenn der Server den Header nicht setzt, schlägt die Service Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

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
- [Service Worker-API](/de/docs/Web/API/Service_Worker_API)
- [Verwenden von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
