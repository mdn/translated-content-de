---
title: "ServiceWorkerContainer: Methode register()"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

> [!WARNING]
> Der an diese Methode übergebene Parameter `scriptURL` bezeichnet die URL eines externen Skripts, das in einen Service Worker geladen wird.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die einschränkt, von welchen Orten Skripte geladen werden dürfen, und indem Sie stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zuweisen und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die Methode **`register()`** der Schnittstelle [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Geltungsbereich.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz oder eine Zeichenfolge, die die URL des Service-Worker-Skripts angibt.
    Die registrierte Service-Worker-Datei muss mit einem gültigen [JavaScript-Medientyp](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) ausgeliefert werden.
- `options` {{optional_inline}}
  - : Ein Objekt mit Registrierungsoptionen. Derzeit sind folgende Optionen verfügbar:
    - `scope`
      - : Eine Zeichenfolge, die eine URL für den Geltungsbereich der Service-Worker-Registrierung angibt, also den Bereich von URLs, den ein Service Worker kontrollieren kann.

        Üblicherweise wird hierfür eine URL angegeben, die relativ zur Basis-URL der Website ist (z. B. `/some/path/`). So ist der resultierende Geltungsbereich unabhängig davon, von welcher Seite aus der Registrierungscode aufgerufen wird.
        Der Standardwert für `scope` bei einer Service-Worker-Registrierung ist das Verzeichnis, in dem sich das Service-Worker-Skript befindet (ermittelt durch Auflösen von `./` relativ zu `scriptURL`).

        Der Geltungsbereich sollte Dokumente umfassen, die sich im selben Verzeichnis wie der Service Worker oder in tiefer verschachtelten Verzeichnissen befinden.
        Wenn Sie einen größeren Geltungsbereich benötigen, kann dieser über den HTTP-Header {{HTTPHeader("Service-Worker-Allowed")}} erlaubt werden.
        Informationen dazu, wie Sie den standardmäßigen Geltungsbereich eines Service Workers erweitern, finden Sie im Abschnitt [Beispiele](#beispiele).

    - `type`
      - : Eine Zeichenfolge, die den Typ des zu erstellenden Workers angibt.
        Gültige Werte sind:
        - `'classic'`
          - : Der geladene Service Worker liegt als herkömmliches Skript vor.
            Dies ist der Standardwert.
        - `'module'`
          - : Der geladene Service Worker liegt als [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) vor, und die Import-Anweisung ist in Worker-Kontexten verfügbar.
            Informationen zur Kompatibilität mit ES-Modulen finden Sie in der [Browser-Kompatibilitätstabelle für die Schnittstelle `ServiceWorker`](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`
      - : Eine Zeichenfolge, die angibt, wie der HTTP-Cache bei Aktualisierungen für Ressourcen von Service-Worker-Skripten verwendet wird.
        Hinweis: Dies betrifft nur das Service-Worker-Skript und dessen Importe, nicht andere Ressourcen, die von diesen Skripten abgerufen werden.
        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn im HTTP-Cache kein aktueller Eintrag gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, das Hauptskript wird jedoch immer aus dem Netzwerk aktualisiert. Wenn für die Importe im HTTP-Cache kein aktueller Eintrag gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Ressourcen der Service-Worker-Skripte werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Die `scriptURL` oder die `scope URL` ist ungültig.
    Dies kann passieren, wenn die URL nicht zu einer gültigen URL aufgelöst werden kann oder ein anderes Schema als `http:` oder `https` verwendet.
    Es kann auch passieren, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist, obwohl die [Trusted-Types-Richtlinie](/de/docs/Web/API/Trusted_Types_API) der Website dies verlangt.

    Die Ausnahme wird auch ausgelöst, wenn der Pfad von `scriptURL` oder `scope URL` die ASCII-Zeichenfolge „%2F“ (`/`) oder „%5C“ (`\`) enthält, unabhängig von der Groß- und Kleinschreibung.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` hat keinen potenziell vertrauenswürdigen Ursprung, etwa `localhost` oder eine `https`-URL.
    Die `scriptURL` und der Geltungsbereich haben nicht denselben Ursprung wie die registrierende Seite.

## Beschreibung

Die Methode **`register()`** erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Geltungsbereich.
Bei Erfolg verknüpft die Registrierung die angegebene Skript-URL mit einem _Geltungsbereich_, der anschließend verwendet wird, um Dokumente einem bestimmten Service Worker zuzuordnen.

Für jeden eindeutigen Geltungsbereich wird eine einzige Registrierung erstellt.
Wird `register()` für einen Geltungsbereich aufgerufen, für den bereits eine Registrierung besteht, wird die Registrierung entsprechend den Änderungen an `scriptURL` oder den Optionen aktualisiert.
Wenn es keine Änderungen gibt, wird die bestehende Registrierung zurückgegeben.
Ein Aufruf von `register()` mit demselben Geltungsbereich und derselben `scriptURL` startet den Installationsprozess nicht neu. Daher kann diese Methode im Allgemeinen ohne vorherige Prüfung von einer kontrollierten Seite aus aufgerufen werden.
Allerdings wird dabei eine Netzwerkanfrage für das Service-Worker-Skript gesendet, was den Server zusätzlich belasten kann.
Falls dies problematisch ist, können Sie zunächst mit [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration) prüfen, ob bereits eine Registrierung besteht.

Ein Dokument kann potenziell in den Geltungsbereich mehrerer Registrierungen mit unterschiedlichen Service Workern und Optionen fallen.
Der Browser ordnet das Dokument der passenden Registrierung mit dem spezifischsten Geltungsbereich zu.
Dadurch wird sichergestellt, dass für jedes Dokument nur ein Service Worker ausgeführt wird.

> [!NOTE]
> Im Allgemeinen ist es sicherer, keine Registrierungen mit überlappenden Geltungsbereichen zu definieren.

### Sicherheitsaspekte

Der Parameter `scriptURL` gibt das Skript für den Service Worker an. Dieser kann Netzwerkanfragen für Seiten innerhalb seines Geltungsbereichs abfangen und Antworten zurückgeben, die aktuell, zwischengespeichert, neu oder verändert sind.
Wenn die Eingabe von einem Benutzer stammt, kann dies ein Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) sein.

Es ist äußerst riskant, beliebige URLs aus nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte mithilfe einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der Direktive [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) festlegen, welche Skripte ausgeführt werden dürfen (oder mithilfe eines Fallbacks, der in [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) definiert ist).
Dadurch lassen sich Skripte auf solche vom aktuellen Ursprung, von einer bestimmten Gruppe von Ursprüngen oder sogar auf bestimmte Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)), müssen Sie stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zuweisen.
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die die URL zurückweisen oder ändern kann, bevor sie eingefügt wird.

## Beispiele

Die folgenden Beispiele sollten zusammen betrachtet werden, um zu verstehen, wie sich der Geltungsbereich eines Service Workers auf eine Seite auswirkt.

Das erste Beispiel zeigt, wie die Methode mit Trusted Types verwendet wird.
In den übrigen Beispielen wird dieser Schritt der Kürze halber ausgelassen.

### TrustedScriptURL verwenden

Um das XSS-Risiko zu verringern, sollten wir dem Parameter `scriptURL` stets `TrustedScriptURL`-Instanzen zuweisen.
Dies ist auch erforderlich, wenn wir Trusted Types aus anderen Gründen erzwingen und bestimmte Skriptquellen zulassen möchten, die durch `CSP: worker-src` erlaubt wurden.

Trusted Types werden noch nicht von allen Browsern unterstützt. Deshalb definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Er dient als transparenter Ersatz für die JavaScript-API für Trusted Types:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen umzuwandeln.

Für dieses Beispiel nehmen wir an, dass wir eine vordefinierte Gruppe von URLs im Array `scriptAllowList` zulassen und alle anderen Skripte protokollieren möchten.

```js
const scriptAllowList = [
  // Some list of allowed URLs
];
const policy = trustedTypes.createPolicy("script-url-policy", {
  createScriptURL(input) {
    if (scriptAllowList.includes(input)) {
      return input; // allow the script
    }
    console.log(`Script not in scriptAllowList: ${input}`);
    return ""; // Block the script
  },
});
```

Anschließend verwenden wir das Objekt `policy`, um aus einer potenziell unsicheren Eingabezeichenfolge ein `TrustedScriptURL`-Objekt zu erstellen:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/service_worker.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

Nun können wir das `TrustedScriptURL`-Objekt an `register()` übergeben:

```js
navigator.serviceWorker.register(trustedScriptURL);
```

### Einen Service Worker mit dem standardmäßigen Geltungsbereich registrieren

Das folgende Beispiel verwendet den Standardwert von `scope`, indem die Option weggelassen wird. Dadurch entspricht der Geltungsbereich dem Speicherort der Skript-URL.

Angenommen, der Service-Worker-Code befindet sich unter `example.com/sw.js` und der Registrierungscode unter `example.com/index.html`.
Der Service-Worker-Code kontrolliert `example.com/index.html` sowie darunterliegende Seiten wie `example.com/product/description.html`.

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

Beachten Sie, dass wir `scriptURL` relativ zum Stammverzeichnis der Website und nicht relativ zur aktuellen Seite angegeben haben.
Dadurch kann derselbe Registrierungscode auf jeder Seite verwendet werden.

### Einen Service Worker mit explizit angegebenem standardmäßigem Geltungsbereich registrieren

Der folgende Code ist nahezu identisch, allerdings geben wir den Geltungsbereich mit `{ scope: "/" }` ausdrücklich an.
Wir haben den Geltungsbereich relativ zur Website angegeben, damit derselbe Registrierungscode überall auf der Website verwendet werden kann.

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

Dieser Geltungsbereich entspricht dem standardmäßigen Geltungsbereich. Die Registrierung gilt daher für genau dieselben Seiten wie im vorherigen Beispiel.
Wenn wir diesen Code nach dem vorherigen Beispiel ausführen, sollten Browser erkennen, dass eine bestehende Registrierung aktualisiert und keine neue erstellt wird.

### Einen Service Worker mit seitenrelativen URLs registrieren

Sie können auch seitenrelative URLs verwenden. Allerdings erschwert dies das Verschieben Ihrer Seiten, und es können dabei leicht versehentlich unerwünschte Registrierungen entstehen.

In diesem Beispiel befindet sich der Service-Worker-Code unter `example.com/product/sw.js` und der Registrierungscode unter `example.com/product/description.html`.
Für `scriptURL` und `scope` verwenden wir URLs relativ zum aktuellen Verzeichnis. Dieses Verzeichnis ist die Basis-URL der Seite, die `register()` aufruft (`example.com/product/`).
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

### Den Geltungsbereich eines Service Workers mit Service-Worker-Allowed erweitern

Der Geltungsbereich eines Service Workers kann nicht über seinen eigenen Speicherort hinausgehen, es sei denn, der Server gibt im Header {{HTTPHeader("Service-Worker-Allowed")}} des Service-Worker-Skripts einen größeren maximalen Geltungsbereich an.
Verwenden Sie die Option `scope`, wenn Sie einen _kleineren_ Geltungsbereich als den standardmäßigen benötigen.

Der folgende Code würde, wenn er in `example.com/index.html` im Stammverzeichnis einer Website enthalten wäre, nur für Ressourcen unter `example.com/product` gelten.

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

Wie oben erwähnt, können Server den standardmäßigen Geltungsbereich ändern, indem sie beim Ausliefern des Service-Worker-Skripts den Header `Service-Worker-Allowed` setzen.
Dadurch kann die Option `scope` auf einen Bereich außerhalb des Pfads gesetzt werden, der durch den Speicherort des Service Workers vorgegeben ist.

Der folgende Code würde, wenn er in `example.com/product/index.html` enthalten wäre, für alle Ressourcen unter `example.com` gelten, sofern der Server beim Ausliefern von `sw.js` den Header `Service-Worker-Allowed` auf `/` oder `https://example.com/` setzt. Wenn der Server den Header nicht setzt, schlägt die Service-Worker-Registrierung fehl, weil der angeforderte `scope` zu groß ist.

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
- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- HTTP-Header {{HTTPHeader("Service-Worker-Allowed")}}
