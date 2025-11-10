---
title: "ServiceWorkerContainer: register()-Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 062225f8d144f36d01d794ab8dc619598db78488
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Geltungsbereich (scope).
Wenn sie erfolgreich ist, verknüpft die Registrierung die bereitgestellte Skript-URL mit einem _Geltungsbereich_, der anschließend verwendet wird, um Dokumente einem bestimmten Servicearbeiter zuzuordnen.

Für jeden eindeutigen Geltungsbereich wird eine einzelne Registrierung erstellt.
Wenn `register()` für einen Geltungsbereich aufgerufen wird, für den bereits eine Registrierung besteht, wird die Registrierung mit allen Änderungen an der `scriptURL` oder den Optionen aktualisiert.
Wenn es keine Änderungen gibt, wird die bestehende Registrierung zurückgegeben.
Das Aufrufen von `register()` mit demselben Geltungsbereich und derselben `scriptURL` startet den Installationsprozess nicht neu, daher ist es im Allgemeinen sicher, diese Methode bedingungslos von einer kontrollierten Seite aus aufzurufen.
Es wird jedoch eine Netzwerkanfrage für das Servicearbeiter-Skript gesendet, die den Server stärker belasten kann.
Wenn dies ein Problem darstellt, können Sie zuerst mit [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration) nach einer vorhandenen Registrierung suchen.

Ein Dokument kann potenziell innerhalb des Geltungsbereichs mehrerer Registrierungen mit unterschiedlichen Servicearbeitern und Optionen liegen.
Der Browser wird das Dokument mit der übereinstimmenden Registrierung verknüpfen, die den spezifischsten Geltungsbereich hat.
Dies stellt sicher, dass für jedes Dokument nur ein Servicearbeiter ausgeführt wird.

> [!NOTE]
> Es ist im Allgemeinen sicherer, keine Registrierungen zu definieren, die sich überlappende Geltungsbereiche haben.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Servicearbeiter-Skripts.
    Die registrierte Servicearbeiter-Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}
  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:
    - `scope`
      - : Ein String, der eine URL darstellt, die den Registrierungsbereich (scope) eines Servicearbeiters definiert, d.h. welchen Bereich von URLs ein Servicearbeiter kontrollieren kann.

        Dies wird normalerweise als URL angegeben, die relativ zur Basis-URL der Website ist (z. B. `/some/path/`), sodass der aufgelöste Geltungsbereich unabhängig davon, von welcher Seite der Registrierungscode aufgerufen wird, derselbe ist.
        Der Standard-`scope` für eine Servicearbeiter-Registrierung ist das Verzeichnis, in dem sich das Servicearbeiter-Skript befindet (resolving `./` gegen `scriptURL`).

        Der Geltungsbereich sollte genutzt werden, um Dokumente zu spezifizieren, die sich im selben Verzeichnis oder tiefer verschachtelt als der Servicearbeiter befinden.
        Wenn Sie einen breiteren Geltungsbereich benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header gestattet werden.
        Siehe den Abschnitt [Beispiele](#beispiele) für Informationen zur Erweiterung des Standard-Geltungsbereichs eines Servicearbeiters.

    - `type`
      - : Ein String, der den Typ des zu erstellenden Arbeiters angibt.
        Gültige Werte sind:
        - `'classic'`
          - : Der geladene Servicearbeiter ist in einem Standardskript.
            Dies ist der Standard.
        - `'module'`
          - : Der geladene Servicearbeiter ist in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und die Import-Anweisung ist in Arbeiter-Kontexten verfügbar.
            Für Informationen zur ES-Modul-Kompatibilität siehe die [Tabelle zur Browser-Kompatibilität für das `ServiceWorker`-Interface](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`
      - : Ein String, der angibt, wie der HTTP-Cache für Servicearbeiter-Skriptressourcen während der Aktualisierungen verwendet wird.
        Hinweis: Dies bezieht sich nur auf das Servicearbeiter-Skript und seine Importe, nicht auf andere von diesen Skripten abgerufene Ressourcen.
        - `'all'`
          - : Der HTTP-Cache wird sowohl für das Hauptskript als auch für alle importierten Skripte abgefragt. Wenn im HTTP-Cache kein aktueller Eintrag gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe genutzt. Alle Servicearbeiter-Skriptressourcen werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`
  - : Die `scriptURL` oder `scope URL` schlägt fehl.
    Dies kann passieren, wenn die URL nicht in eine gültige URL aufgelöst werden kann oder ein Schema verwendet, das nicht `http:` oder `https` ist.
    Es kann auch passieren, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist, und dies eine Anforderung der [Trusted Types Policy](/de/docs/Web/API/Trusted_Types_API) der Seite ist.

    Die Ausnahme wird auch ausgelöst, wenn der `scriptURL`- oder `scope URL`-Pfad die ASCII-Zeichenfolge "%2f" (`*`) oder "%5c" (`=`) case-insensitive enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` stammt nicht aus einer potenziell vertrauenswürdigen Quelle, wie z. B. `localhost` oder eine `https`-URL.
    Die `scriptURL` und der Geltungsbereich sind nicht gleichursprungsberechtigt mit der registrierenden Seite.

## Beispiele

Die folgenden Beispiele sollten zusammen gelesen werden, um zu verstehen, wie der Geltungsbereich eines Servicearbeiters auf eine Seite angewendet wird.

### Registrierung eines Servicearbeiters mit Standard-Geltungsbereich

Das folgende Beispiel verwendet den Standardwert für `scope`, indem es ihn weglässt, wodurch er auf denselben Ort wie die Skript-URL gesetzt wird.

Angenommen, der Servicearbeiter-Code befindet sich bei `example.com/sw.js` und der Registrierungscode bei `example.com/index.html`.
Der Servicearbeiter-Code wird `example.com/index.html` kontrollieren sowie Seiten darunter, wie `example.com/product/description.html`.

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

Beachten Sie, dass wir die `scriptURL` relativ zum Wurzelverzeichnis der Website und nicht zur aktuellen Seite registriert haben.
Dies ermöglicht es, denselben Registrierungscode von jeder Seite aus zu verwenden.

### Registrierung eines Servicearbeiters mit explizitem Standard-Geltungsbereich

Der untenstehende Code ist fast identisch, außer dass wir den Geltungsbereich explizit mit `{ scope: "/" }` angegeben haben.
Wir haben den Geltungsbereich relativ zur Website angegeben, sodass derselbe Registrierungscode von überall auf der Website aus verwendet werden kann.

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

Dieser Geltungsbereich ist derselbe wie der Standard-Geltungsbereich, sodass die Registrierung auf genau dieselben Seiten wie im vorherigen Beispiel zutrifft.
Beachten Sie, dass, wenn wir diesen Code nach dem vorherigen Beispiel ausführen würden, Browser erkennen sollten, dass wir eine bestehende Registrierung aktualisieren und nicht eine neue erstellen.

### Registrierung eines Servicearbeiters mit seitenrelativen URLs

Es gibt nichts, was Sie daran hindert, seitenrelative URLs zu verwenden, außer dass dies das Verschieben Ihrer Seiten erschwert, und es ist leicht, versehentlich unerwünschte Registrierungen zu erstellen, wenn Sie dies tun.

In diesem Beispiel befindet sich der Servicearbeiter-Code unter `example.com/product/sw.js` und der Registrierungscode bei `example.com/product/description.html`.
Wir verwenden URLs, die relativ zum aktuellen Verzeichnis sind, für die `scriptURL` und den `scope`, wobei das aktuelle Verzeichnis die Basis-URL der Seite ist, die `register()` aufruft (`example.com/product/`).
Der Servicearbeiter gilt für Ressourcen unter `example.com/product/`.

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

### Verwendung von Service-Worker-Allowed zur Erhöhung des Servicearbeiter-Geltungsbereichs

Ein Servicearbeiter kann keinen breiteren Geltungsbereich als seinen eigenen Standort haben, es sei denn, der Server legt in einem {{HTTPHeader("Service-Worker-Allowed")}}-Header auf dem Servicearbeiter-Skript einen breiteren maximalen Geltungsbereich fest.
Verwenden Sie die `scope`-Option, wenn Sie einen _enger_ Geltungsbereich als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html` am Wurzelverzeichnis einer Website enthalten ist, würde nur auf Ressourcen unter `example.com/product` zutreffen.

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

Wie oben erwähnt, können Server den Standard-Geltungsbereich ändern, indem sie den `Service-Worker-Allowed`-Header auf dem Servicearbeiter-Skript setzen.
Dies ermöglicht es, die `scope`-Option außerhalb des durch den Standort des Servicearbeiters definierten Pfades zu setzen.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` zutreffen, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` setzt, wenn `sw.js` bereitgestellt wird.
Wenn der Server diesen Header nicht setzt, schlägt die Registrierung des Servicearbeiters fehl, da der angeforderte `scope` zu breit ist.

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
- [Verwendung von Servicearbeitern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
