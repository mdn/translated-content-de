---
title: "ServiceWorkerContainer: register() Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`register()`** Methode der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den gegebenen Geltungsbereich.
Wenn erfolgreich, verknüpft die Registrierung die bereitgestellte Skript-URL mit einem _Scope_, welches anschließend verwendet wird, um Dokumente einem bestimmten Service Worker zuzuordnen.

Es wird eine einzelne Registrierung für jeden eindeutigen Geltungsbereich erstellt.
Wenn `register()` für einen Bereich aufgerufen wird, der bereits eine bestehende Registrierung hat, wird die Registrierung mit Änderungen an der `scriptURL` oder den Optionen aktualisiert.
Wenn es keine Änderungen gibt, wird die bestehende Registrierung zurückgegeben.
Beachten Sie, dass ein Aufruf von `register()` mit dem gleichen Geltungsbereich und `scriptURL` den Installationsprozess nicht neu startet.
Sie können diese Methode daher bedingungslos von einer kontrollierten Seite aufrufen: Es ist nicht erforderlich, zuerst zu prüfen, ob eine aktive Registrierung oder ein Service Worker vorhanden ist.

Ein Dokument kann potenziell innerhalb des Geltungsbereichs mehrerer Registrierungen mit unterschiedlichen Service Workern und Optionen liegen.
Der Browser wird das Dokument der übereinstimmenden Registrierung zuordnen, die den spezifischsten Geltungsbereich hat.
Dies stellt sicher, dass nur ein Service Worker für jedes Dokument ausgeführt wird.

> [!NOTE]
> Es ist im Allgemeinen sicherer, keine Registrierungen mit sich überschneidenden Geltungsbereichen zu definieren.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Die URL des Service Worker Skripts.
    Die registrierte Service Worker Datei muss einen gültigen [JavaScript MIME-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) haben.
- `options` {{optional_inline}}

  - : Ein Objekt, das Registrierungsmöglichkeiten enthält. Derzeit verfügbare Optionen sind:

    - `scope`

      - : Ein String, der eine URL repräsentiert, die den Registrierungsbereich eines Service Workers definiert; d.h. welchen Bereich von URLs ein Service Worker kontrollieren kann.

        Dies wird normalerweise als eine URL angegeben, die relativ zur Basis-URL der Website ist (z. B. `/some/path/`), sodass der aufgelöste Bereich derselbe ist, unabhängig davon, von welcher Seite aus der Registrierungscode aufgerufen wird.
        Der Standard-`Geltungsbereich` für eine Service-Worker-Registrierung ist das Verzeichnis, in dem sich das Service-Worker-Skript befindet (`./` gegen `scriptURL` aufgelöst).

        Der Bereich sollte verwendet werden, um Dokumente zu spezifizieren, die sich im gleichen Verzeichnis oder tiefer als der Service Worker befinden.
        Wenn Sie einen breiteren Bereich benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header erlaubt werden.
        Siehe den Abschnitt [Beispiele](#beispiele) für Informationen zur Erweiterung des Standardbereichs eines Service Workers.

    - `type`

      - : Ein String, der den Typ des zu erstellenden Workers angibt.
        Gültige Werte sind:

        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript.
            Dies ist der Standard.
        - `'module'`
          - : Der geladene Service Worker ist in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules), und der Importbefehl ist im Worker-Kontext verfügbar.
            Für Informationen zur ES-Modul-Kompatibilität siehe die [Browser-Kompatibilitätsdatentabelle für die `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`

      - : Ein String, der angibt, wie der HTTP-Cache für Ressourcen des Service Worker-Skripts während Updates verwendet wird.
        Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und seine Importe, nicht auf andere Ressourcen, die von diesen Skripten abgerufen werden.

        - `'all'`
          - : Der HTTP-Cache wird sowohl für das Hauptskript als auch für alle importierten Skripte abgefragt. Wenn kein aktueller Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden diese aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Ressourcen des Service Worker-Skripts werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`

  - : Die `scriptURL` oder `scope URL` ist fehlgeschlagen.
    Dies kann passieren, wenn die URL nicht in eine gültige URL aufgelöst werden kann oder ein Schema verwendet, das nicht `http:` oder `https:` ist.
    Es kann auch passieren, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und dies eine Anforderung der [Trusted Types Richtlinie](/de/docs/Web/API/Trusted_Types_API) der Website ist.

    Die Ausnahme wird auch ausgelöst, wenn der `scriptURL`- oder `scope URL`-Pfad das insensitiv großgeschriebene ASCII "%2f" (`*`) oder "%5c" (`=`) enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` ist kein potenziell vertrauenswürdiger Ursprung, wie `localhost` oder eine `https`-URL.
    Die `scriptURL` und der Geltungsbereich sind nicht gleich-origin wie die registrierende Seite.

## Beispiele

Die nachstehenden Beispiele sollten gemeinsam gelesen werden, um zu verstehen, wie der Umfang des Service Worker auf eine Seite angewendet wird.

### Registrieren eines Service Workers mit Standardumfang

Das folgende Beispiel verwendet den Standardwert von `scope`, indem es ihn weglässt, wodurch er auf den gleichen Ort wie die Skript-URL gesetzt wird.

Angenommen, der Service Worker-Code befindet sich unter `example.com/sw.js`, und der Registrierungscode unter `example.com/index.html`.
Der Service Worker-Code wird `example.com/index.html` kontrollieren, sowie Seiten darunter, wie `example.com/product/description.html`.

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

Beachten Sie, dass wir die `scriptURL` relativ zum Site-Root und nicht zur aktuellen Seite registriert haben.
Dies ermöglicht es, dass derselbe Registrierungscode von jeder Seite aus verwendet werden kann.

### Registrieren eines Service Workers mit explizitem Standardumfang

Der folgende Code ist fast identisch, außer dass wir den Geltungsbereich explizit mit `{ scope: "/" }` angegeben haben.
Wir haben den Geltungsbereich als sitzungsrelativ angegeben, sodass derselbe Registrierungscode von überall auf der Website verwendet werden kann.

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

Dieser Geltungsbereich ist derselbe wie der Standardbereich, daher gilt die Registrierung für genau dieselben Seiten wie das vorherige Beispiel.
Beachten Sie, dass, wenn wir diesen Code nach dem vorherigen Beispiel ausführen, die Browser erkennen sollten, dass wir eine bestehende Registrierung aktualisieren, anstatt eine neue zu erstellen.

### Registrieren eines Service Workers unter Verwendung seitenrelativer URLs

Nichts hindert Sie daran, seitenrelative URLs zu verwenden, außer dass dies es schwieriger macht, Ihre Seiten zu verschieben. Es ist leicht, unbeabsichtigte Registrierungen zu erstellen, wenn Sie dies tun.

In diesem Beispiel befindet sich der Service Worker-Code unter `example.com/product/sw.js`, und der Registrierungscode unter `example.com/product/description.html`.
Wir verwenden URLs, die relativ zu dem aktuellen Verzeichnis für die `scriptURL` und den `scope` sind, wobei das aktuelle Verzeichnis die Basis-URL der Seite ist, die `register()` aufruft (`example.com/product/`).
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

### Verwendung von Service-Worker-Allowed zur Erhöhung des Service Worker Umfangs

Ein Service Worker kann keinen größeren Umfang haben als seinen eigenen Standort, es sei denn, der Server gibt einen größeren maximalen Umfang in einem {{HTTPHeader("Service-Worker-Allowed")}} Header auf dem Service Worker Skript an.
Verwenden Sie die `scope` Option, wenn Sie einen _schmaleren_ Bereich als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html` am Root der Seite enthalten ist, würde nur auf Ressourcen unter `example.com/product` angewendet.

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

Wie oben erwähnt, können Server den Standardumfang ändern, indem sie den `Service-Worker-Allowed` Header auf dem Service Worker Skript setzen.
Dies ermöglicht es, dass die `scope` Option außerhalb des Pfads gesetzt wird, der durch den Standort des Service Workers definiert ist.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet, wenn der Server den `Service-Worker-Allowed` Header auf `/` oder `https://example.com/` beim Bereitstellen von `sw.js` setzt. Setzt der Server den Header nicht, schlägt die Service Worker Registrierung fehl, da der angeforderte `scope` zu breit ist.

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
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP Header
