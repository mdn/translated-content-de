---
title: "ServiceWorkerContainer: Methode register()"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Geltungsbereich (scope).
Bei Erfolg verknüpft die Registrierung die angegebene Skript-URL mit einem _Geltungsbereich_, der anschließend zur Zuordnung von Dokumenten zu einem bestimmten Service-Worker verwendet wird.

Für jeden eindeutigen Geltungsbereich wird eine einzelne Registrierung erstellt.
Wenn `register()` für einen Geltungsbereich aufgerufen wird, der bereits eine bestehende Registrierung hat, wird diese mit allen Änderungen an der `scriptURL` oder den Optionen aktualisiert.
Wenn es keine Änderungen gibt, wird die bestehende Registrierung zurückgegeben.
Beachten Sie, dass das Aufrufen von `register()` mit demselben Geltungsbereich und `scriptURL` den Installationsprozess nicht neu startet.
Daher können Sie diese Methode bedingungslos von einer kontrollierten Seite aus aufrufen: Sie müssen nicht zuerst prüfen, ob bereits eine aktive Registrierung oder ein Service-Worker vorhanden ist.

Ein Dokument kann potenziell im Geltungsbereich mehrerer Registrierungen mit unterschiedlichen Service-Workern und Optionen liegen.
Der Browser wird das Dokument mit der entsprechenden Registrierung verknüpfen, die den spezifischsten Geltungsbereich hat.
Dies stellt sicher, dass für jedes Dokument nur ein Service-Worker ausgeführt wird.

> [!NOTE]
> Es ist im Allgemeinen sicherer, Registrierungen zu vermeiden, die sich überschneidende Geltungsbereiche haben.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service-Worker-Skripts.
    Die registrierte Service-Worker-Datei muss einen gültigen [JavaScript-MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:

    - `scope`

      - : Ein String, der eine URL darstellt, die den Registrierungsbereich eines Service-Workers definiert; also welchen Bereich von URLs ein Service-Worker kontrollieren kann.

        Dies wird normalerweise als URL angegeben, die relativ zur Basis-URL der Website ist (z. B. `/some/path/`), sodass der aufgelöste Geltungsbereich unabhängig von der Seite, von der der Registrierungscode aufgerufen wird, derselbe ist.
        Der Standard-`scope` für eine Service-Worker-Registrierung ist das Verzeichnis, in dem sich das Service-Worker-Skript befindet (Auflösung von `./` gegen `scriptURL`).

        Der Geltungsbereich sollte verwendet werden, um Dokumente anzugeben, die sich im selben Verzeichnis oder tiefer verschachtelt befinden als der Service-Worker.
        Wenn Sie einen breiteren Geltungsbereich benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header erlaubt werden.
        Siehe den Abschnitt [Beispiele](#beispiele) für Informationen zum Erweitern des Standard-Geltungsbereichs eines Service-Workers.

    - `type`

      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Gültige Werte sind:
        - `'classic'`
          - : Der geladene Service-Worker befindet sich in einem Standardskript.
            Dies ist der Standard.
        - `'module'`
          - : Der geladene Service-Worker befindet sich in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules), und die Importanweisung ist in Worker-Kontexten verfügbar.
            Für Informationen zur ES-Modul-Kompatibilität siehe die [Tabelle zur Browser-Kompatibilitätsdaten der `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`
      - : Ein String, der angibt, wie der HTTP-Cache für Ressourcen von Service-Worker-Skripten während Updates verwendet wird.
        Hinweis: Dies bezieht sich nur auf das Service-Worker-Skript und seine Importe, nicht auf andere Ressourcen, die von diesen Skripten abgerufen werden.
        - `'all'`
          - : Der HTTP-Cache wird sowohl für das Hauptskript als auch für alle importierten Skripte abgefragt. Wenn im HTTP-Cache kein aktueller Eintrag gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn im HTTP-Cache kein aktueller Eintrag für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Ressourcen des Service-Worker-Skripts werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`

  - : Die `scriptURL` oder `scope URL` ist fehlgeschlagen.
    Dies kann passieren, wenn die URL nicht zu einer gültigen URL aufgelöst werden kann oder ein Schema verwendet, das nicht `http:` oder `https:` ist.
    Dies kann auch passieren, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und dies eine Anforderung der [Trusted Types Policy der Website](/de/docs/Web/API/Trusted_Types_API) ist.

    Die Ausnahme wird auch ausgelöst, wenn der `scriptURL` oder `scope URL`-Pfad die ASCII-Zeichen in Kleinbuchstaben "%2f" (`*`) oder "%5c" (`=\`) enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` ist kein potenziell vertrauenswürdiger Ursprung, wie `localhost` oder eine `https`-URL.
    Die `scriptURL` und der Geltungsbereich sind nicht gleichursprünglich mit der registrierenden Seite.

## Beispiele

Die unten stehenden Beispiele sollten zusammen gelesen werden, um zu verstehen, wie der Geltungsbereich eines Service-Workers auf eine Seite angewendet wird.

### Einen Service-Worker mit dem Standard-Geltungsbereich registrieren

Das folgende Beispiel verwendet den Standardwert von `scope`, indem es weggelassen wird, was ihn auf denselben Standort wie die Skript-URL festlegt.

Angenommen, der Service-Worker-Code befindet sich unter `example.com/sw.js`, und der Registrierungscode bei `example.com/index.html`.
Der Service-Worker-Code wird `example.com/index.html` sowie darunter liegende Seiten wie `example.com/product/description.html` kontrollieren.

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

Beachten Sie, dass wir die `scriptURL` relativ zur Site-Wurzel und nicht zur aktuellen Seite registriert haben.
Dies ermöglicht es, denselben Registrierungscode von jeder Seite aus zu verwenden.

### Einen Service-Worker mit einem expliziten Standard-Geltungsbereich registrieren

Der folgende Code ist fast identisch, außer dass wir den Geltungsbereich explizit mit `{ scope: "/" }` angegeben haben.
Wir haben den Geltungsbereich als relativ zur Website angegeben, sodass derselbe Registrierungscode von überall auf der Website aus verwendet werden kann.

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

Dieser Geltungsbereich ist derselbe wie der Standard-Geltungsbereich, sodass die Registrierung auf genau dieselben Seiten wie das vorherige Beispiel angewendet wird.
Beachten Sie, dass wenn wir diesen Code nach dem vorherigen Beispiel ausführen, Browser erkennen sollten, dass wir eine bestehende Registrierung aktualisieren und nicht eine neue erstellen.

### Einen Service-Worker mithilfe von seitenrelativen URLs registrieren

Es gibt nichts, was Sie daran hindert, seitenrelative URLs zu verwenden, außer dass dies das Verschieben Ihrer Seiten erschwert, und es ist einfach, ungewollte Registrierungen versehentlich zu erstellen, wenn Sie dies tun.

In diesem Beispiel befindet sich der Service-Worker-Code unter `example.com/product/sw.js`, und der Registrierungscode bei `example.com/product/description.html`.
Wir verwenden URLs, die relativ zum aktuellen Verzeichnis für die `scriptURL` und den `scope` sind, wobei das aktuelle Verzeichnis die Basis-URL der Seite ist, die `register()` aufruft (`example.com/product/`).
Der Service-Worker bezieht sich auf Ressourcen unter `example.com/product/`.

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

### Service-Worker-Allowed verwenden, um den Geltungsbereich des Service-Workers zu erweitern

Ein Service-Worker kann keinen breiteren Geltungsbereich als seinen eigenen Standort haben, es sei denn, der Server gibt einen breiteren maximalen Geltungsbereich in einem {{HTTPHeader("Service-Worker-Allowed")}}-Header im Service-Worker-Skript an.
Verwenden Sie die `scope`-Option, wenn Sie einen _engeren_ Geltungsbereich als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html` am Stamm einer Seite enthalten ist, würde nur auf Ressourcen unter `example.com/product` angewendet.

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

Wie oben erwähnt, können Server den Standard-Geltungsbereich ändern, indem sie den `Service-Worker-Allowed`-Header im Service-Worker-Skript setzen.
Dies ermöglicht es, die `scope`-Option außerhalb des durch den Standort des Service-Workers definierten Pfads zu setzen.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` setzt, wenn `sw.js` bereitgestellt wird. Wenn der Server den Header nicht setzt, schlägt die Service-Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

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

- [ServiceWorkerRegistration: Methode `unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
