---
title: "ServiceWorkerContainer: register()-Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Bereich. Bei Erfolg wird das bereitgestellte Skript-URL einem _scope_ zugeordnet, der anschließend verwendet wird, um Dokumente einem bestimmten Service Worker zuzuordnen.

Für jeden eindeutigen Bereich wird eine einzelne Registrierung erstellt. Wenn `register()` für einen Bereich aufgerufen wird, der bereits eine Registrierung hat, wird die Registrierung mit Änderungen an `scriptURL` oder Optionen aktualisiert. Wenn es keine Änderungen gibt, wird die bestehende Registrierung zurückgegeben. Beachten Sie, dass ein Aufruf von `register()` mit demselben scope und `scriptURL` den Installationsprozess nicht erneut startet. Sie können diese Methode daher bedingungslos von einer kontrollierten Seite aus aufrufen: Es ist nicht nötig, zuerst zu prüfen, ob es bereits eine aktive Registrierung oder einen Service Worker gibt.

Ein Dokument kann sich möglicherweise im Bereich mehrerer Registrierungen mit unterschiedlichen Service Workern und Optionen befinden. Der Browser wird das Dokument der passenden Registrierung mit dem spezifischsten Bereich zuordnen. Dies stellt sicher, dass für jedes Dokument nur ein Service Worker ausgeführt wird.

> [!NOTE]
> Es ist in der Regel sicherer, keine Registrierungen zu definieren, die sich überschneidende Bereiche haben.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service Worker-Skripts. Die registrierte Service Worker-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:

    - `scope`

      - : Ein String, der eine URL darstellt, die den Registrierungsbereich eines Service Workers definiert; das heißt, welchen Bereich von URLs ein Service Worker steuern kann.

        Dies wird normalerweise als URL angegeben, die relativ zur Basis-URL der Seite ist (z.B. `/some/path/`), sodass der aufgelöste Bereich derselbe ist, unabhängig davon, von welcher Seite der Registrierungscode aufgerufen wird. Der Standard-`scope` für eine Service Worker-Registrierung ist das Verzeichnis, in dem sich das Service Worker-Skript befindet (wird relativ zu `scriptURL` aufgelöst).

        Der Bereich sollte verwendet werden, um Dokumente anzugeben, die sich im selben Verzeichnis oder tiefer verschachtelt befinden als der Service Worker. Wenn Sie einen breiteren Bereich benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header zugelassen werden. Weitere Informationen zum Erweitern des Standardbereichs eines Service Workers finden Sie im Abschnitt [Beispiele](#beispiele).

    - `type`

      - : Ein String, der den Typ des zu erstellenden Workers angibt. Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript. Dies ist der Standard.
        - `'module'`
          - : Der geladene Service Worker ist in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und der `import`-Befehl ist in Worker-Kontexten verfügbar. Informationen zur Kompatibilität von ES-Modulen finden Sie in der [Tabelle zur Browser-Kompatibilität für das `ServiceWorker`-Interface](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Ein String, der angibt, wie der HTTP-Cache für Service Worker-Skriptressourcen bei Aktualisierungen verwendet wird. Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und seine Importe, nicht auf andere von diesen Skripten abgerufene Ressourcen.

        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn im HTTP-Cache kein aktueller Eintrag gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn im HTTP-Cache kein aktueller Eintrag für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für seine Importe verwendet. Alle Service Worker-Skriptressourcen werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt auflöst.

### Ausnahmen

- `TypeError`

  - : Die `scriptURL` oder die `scope URL` ist ein Fehler. Dies kann passieren, wenn die URL nicht in eine gültige URL aufgelöst werden kann oder ein Schema verwendet, das nicht `http:` oder `https:` ist. Es kann auch passieren, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist, und dies eine Anforderung der [Trusted Types Policy](/de/docs/Web/API/Trusted_Types_API) der Seite ist.

    Die Ausnahme wird auch ausgelöst, wenn der `scriptURL`- oder `scope URL`-Pfad das unempfindliche ASCII "%2f" (`*`) oder "%5c" (`=`) enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` ist keine potenziell vertrauenswürdige Quelle, wie `localhost` oder eine `https`-URL. Die `scriptURL` und der Bereich sind nicht gleichermassen Herkunft mit der registrierenden Seite.

## Beispiele

Die folgenden Beispiele sollten zusammen gelesen werden, um zu verstehen, wie der Service Worker-Bereich auf eine Seite angewendet wird.

### Registrieren eines Service Workers mit Standardbereich

Das folgende Beispiel verwendet den Standardwert von `scope`, indem es ihn weglässt, was ihn auf denselben Standort wie die Skript-URL setzt.

Angenommen, der Service Worker-Code befindet sich unter `example.com/sw.js`, und der Registrierungscode bei `example.com/index.html`. Der Service Worker-Code wird `example.com/index.html` sowie Seiten darunter, wie `example.com/product/description.html`, steuern.

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

Beachten Sie, dass wir die `scriptURL` relativ zum Website-Stamm und nicht zur aktuellen Seite registriert haben. Dies ermöglicht es, denselben Registrierungscode von jeder Seite aus zu verwenden.

### Registrieren eines Service Workers mit einem expliziten Standardbereich

Der untenstehende Code ist fast identisch, außer dass wir den Bereich explizit mit `{ scope: "/" }` festgelegt haben. Wir haben den Bereich als site-relativ angegeben, damit derselbe Registrierungscode von überall auf der Website verwendet werden kann.

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

Dieser Bereich ist derselbe wie der Standardbereich, daher gilt die Registrierung für genau die gleichen Seiten wie das vorherige Beispiel. Beachten Sie, dass, wenn wir diesen Code nach dem vorherigen Beispiel ausführen würden, die Browser erkennen sollten, dass wir eine bestehende Registrierung aktualisieren und keine neue erstellen.

### Registrieren eines Service Workers unter Verwendung seitenrelativer URLs

Es gibt nichts, was Sie daran hindert, seitenrelative URLs zu verwenden, außer dass es schwieriger wird, Ihre Seiten zu verschieben, und es leicht ist, versehentlich unerwünschte Registrierungen zu erstellen.

In diesem Beispiel befindet sich der Service Worker-Code unter `example.com/product/sw.js`, und der Registrierungscode bei `example.com/product/description.html`. Wir verwenden URLs, die relativ zum aktuellen Verzeichnis für die `scriptURL` und den `scope` sind, wo das aktuelle Verzeichnis die Basis-URL der Seite ist, die `register()` aufruft (`example.com/product/`). Der Service Worker gilt für Ressourcen unter `example.com/product/`.

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

### Verwenden von Service-Worker-Allowed, um den Service Worker-Bereich zu vergrößern

Ein Service Worker kann keinen breiteren Bereich haben als seinen eigenen Standort, es sei denn, der Server gibt einen breiteren maximalen Bereich im {{HTTPHeader("Service-Worker-Allowed")}}-Header auf dem Service Worker-Skript an. Verwenden Sie die `scope`-Option, wenn Sie einen _engeren_ Bereich als den Standard benötigen.

Der folgende Code würde, wenn er in `example.com/index.html`, dem Stamm einer Website, enthalten ist, nur auf Ressourcen unter `example.com/product` zutreffen.

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

Wie oben erwähnt, können Server den Standardbereich ändern, indem sie den `Service-Worker-Allowed`-Header auf dem Service Worker-Skript setzen. Dies ermöglicht es, die `scope`-Option außerhalb des Pfades festzulegen, der durch den Standort des Service Workers definiert wird.

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

- [ServiceWorkerRegistration: `unregister()`-Methode](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
