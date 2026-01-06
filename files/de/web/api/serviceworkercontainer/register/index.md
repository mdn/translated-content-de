---
title: "ServiceWorkerContainer: register() method"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: 7cee13e07d0274353935b23fd806db657cdf4b96
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

> [!WARNING]
> Der `scriptURL`-Parameter, der an diese Methode übergeben wird, repräsentiert die URL eines externen Skripts, das in einen Service Worker geladen wird.
> APIs wie diese sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) haben, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen verwenden und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`register()`** Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Bereich.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Eine Instanz von [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder eine Zeichenfolge, die die URL des Service-Worker-Skripts definiert.
    Die registrierte Service-Worker-Datei muss mit einem gültigen [JavaScript-Medientyp](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) bereitgestellt werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:
    - `scope`
      - : Eine Zeichenfolge, die eine URL darstellt und den Registrierungsbereich eines Service Workers definiert; das heißt, welchen Bereich von URLs ein Service Worker kontrollieren kann.

        Dies wird normalerweise als eine URL angegeben, die relativ zur Basis-URL der Seite ist (z.B. `/some/path/`), sodass der aufgelöste Bereich unabhängig davon gleich ist, von welcher Seite der Registrierungscode aufgerufen wird.
        Der Standard-`scope` für eine Service-Worker-Registrierung ist das Verzeichnis, in dem sich das Service-Worker-Skript befindet (Lösung von `./` gegen `scriptURL`).

        Der Bereich sollte verwendet werden, um Dokumente zu spezifizieren, die sich im gleichen Verzeichnis oder tiefer verschachtelt als der Service Worker befinden.
        Wenn Sie einen breiteren Bereich benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header erlaubt werden.
        Weitere Informationen zum Erweitern des Standardbereichs eines Service Workers finden Sie in der [Beispielsektion](#beispiele).

    - `type`
      - : Eine Zeichenfolge, die den zu erstellenden Worker-Typ spezifiziert.
        Gültige Werte sind:
        - `'classic'`
          - : Der geladene Service Worker ist in einem Standardskript.
            Dies ist der Standardwert.
        - `'module'`
          - : Der geladene Service Worker ist in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und die Import-Anweisung ist in Worker-Kontexten verfügbar.
            Informationen zur ES-Modulkompatibilität finden Sie in der [Browser-Kompatibilitätsdatentabelle für die `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`
      - : Eine Zeichenfolge, die angibt, wie der HTTP-Cache für Service-Worker-Skript-Ressourcen während Updates verwendet wird.
        Hinweis: Dies bezieht sich nur auf das Service-Worker-Skript und seine Importe, nicht auf andere von diesen Skripten abgerufene Ressourcen.
        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn kein frischer Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch seine Importe verwendet. Alle Service-Worker-Skript-Ressourcen werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`
  - : Der `scriptURL` oder `scope URL` ist ein Fehler.
    Dies kann passieren, wenn die URL nicht in eine gültige URL aufgelöst werden kann oder ein Protokoll verwendet, das nicht `http:` oder `https:` ist.
    Es kann auch passieren, wenn `scriptURL` nicht ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und dies eine Anforderung der [Trusted Types-Policy](/de/docs/Web/API/Trusted_Types_API) der Seite ist.

    Die Ausnahme wird auch ausgelöst, wenn der `scriptURL` oder `scope URL`-Pfad das ASCII-Zeichen "%2f" (`*`) oder "%5c" (`=`) enthält, ohne Berücksichtigung der Groß-/Kleinschreibung.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der `scriptURL` ist kein potenziell vertrauenswürdiger Ursprung, wie `localhost` oder eine `https`-URL.
    Der `scriptURL` und der Bereich sind nicht gleichursprünglich mit der registrierenden Seite.

## Beschreibung

Die **`register()`** Methode erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Bereich.
Wenn erfolgreich, assoziiert die Registrierung die bereitgestellte Skript-URL mit einem _Bereich_, der anschließend verwendet wird, um Dokumente einem bestimmten Service Worker zuzuordnen.

Für jeden eindeutigen Bereich wird eine einzige Registrierung erstellt.
Wenn `register()` für einen Bereich aufgerufen wird, der bereits eine bestehende Registrierung hat, wird die Registrierung mit Änderungen an `scriptURL` oder Optionen aktualisiert.
Wenn es keine Änderungen gibt, wird die bestehende Registrierung zurückgegeben.
Ein Aufruf von `register()` mit demselben Bereich und `scriptURL` startet den Installationsprozess nicht neu, daher ist es im Allgemeinen sicher, diese Methode bedingungslos von einer kontrollierten Seite aus aufzurufen.
Es sendet jedoch eine Netzwerk-Anfrage für das Service-Worker-Skript, was die Serverlast erhöhen kann.
Wenn dies ein Problem ist, können Sie zuerst mit [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration) eine bestehende Registrierung prüfen.

Ein Dokument kann potenziell innerhalb des Bereichs mehrerer Registrierungen mit unterschiedlichen Service Workers und Optionen sein.
Der Browser wird das Dokument mit der Registriereung abgleichen, die den spezifischsten Bereich hat.
Dies stellt sicher, dass nur ein Service Worker für jedes Dokument ausgeführt wird.

> [!NOTE]
> Es ist im Allgemeinen sicherer, keine Registrierungen zu definieren, die sich überlappende Bereiche haben.

### Sicherheitsüberlegungen

Der `scriptURL`-Parameter spezifiziert das Skript für den Service Worker, welches Netzwerk-Anfragen für Seiten innerhalb seines Bereichs abfangen und Antworten zurückgeben kann, die frisch, zwischengespeichert, neu oder modifiziert sind.
Wenn der Eingabe-Wert von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Es ist äußerst riskant, beliebige URLs von nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte kontrollieren, welche Skripte ausgeführt werden dürfen, indem sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src)-Direktive (oder einem Fallback definiert in [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) verwendet.
Dies kann die Skripte auf diejenigen vom aktuellen Ursprung oder einer bestimmten Gruppe von Ursprüngen oder sogar auf bestimmte Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dies stellt sicher, dass der Eingabewert durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die URL abzulehnen oder zu modifizieren, bevor sie eingespeist wird.

## Beispiele

Die folgenden Beispiele sollten zusammen gelesen werden, um zu verstehen, wie sich der Service-Worker-Bereich auf eine Seite auswirkt.

Beachten Sie, dass das erste Beispiel zeigt, wie die Methode mit vertrauenswürdigen Typen verwendet wird.
Die anderen Beispiele lassen diesen Schritt der Kürze halber aus.

### Verwendung von TrustedScriptURL

Um das Risiko von XSS zu mindern, sollten immer `TrustedScriptURL`-Instanzen an den `scriptURL`-Parameter zugewiesen werden.
Wir müssen dies ebenfalls tun, wenn wir vertrauenswürdige Typen aus anderen Gründen erzwingen und einige erlaubte Skriptquellen (durch `CSP: worker-src`) erlauben möchten.

Vertrauenswürdige Typen werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die vertrauenswürdige Typen JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode definiert, um Eingabe-Zeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels nehmen wir an, dass wir eine vordefinierte Gruppe von URLs im `scriptAllowList`-Array erlauben und alle anderen Skripte protokollieren möchten.

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

Dann verwenden wir das `policy`-Objekt, um ein `TrustedScriptURL`-Objekt aus einer potenziell unsicheren Eingabe-Zeichenkette zu erstellen:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/service_worker.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

Wir können nun das `TrustedScriptURL`-Objekt in `register()` übergeben:

```js
navigator.serviceWorker.register(trustedScriptURL).
```

### Registrierung eines Service Workers mit Standardbereich

Das folgende Beispiel verwendet den Standardwert von `scope` durch dessen Auslassung, was ihn auf denselben Ort wie die Skript-URL setzt.

Angenommen, der Service-Worker-Code befindet sich bei `example.com/sw.js`, und der Registrierungscode bei `example.com/index.html`.
Der Service-Worker-Code wird `example.com/index.html` sowie untergeordnete Seiten wie `example.com/product/description.html` kontrollieren.

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

Beachten Sie, dass wir die `scriptURL` relativ zur Site-Root anstatt zur aktuellen Seite registriert haben.
Dies erlaubt es, denselben Registrierungscode von jeder Seite aus zu verwenden.

### Registrierung eines Service Workers mit explizitem Standardbereich

Der folgende Code ist fast identisch, außer dass wir den Bereich explizit mit `{ scope: "/" }` angegeben haben.
Wir haben den Bereich als site-relative spezifiziert, sodass derselbe Registrierungscode von überall auf der Seite verwendet werden kann.

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

Dieser Bereich ist derselbe wie der Standardbereich, sodass die Registrierung auf genau dieselben Seiten wie das vorherige Beispiel angewendet wird.
Beachten Sie, dass, wenn wir diesen Code nach dem vorherigen Beispiel ausführen, Browser erkennen sollten, dass wir eine bestehende Registrierung aktualisieren anstatt eine neue zu erstellen.

### Registrierung eines Service Workers mit seitenrelativen URLs

Es gibt nichts, was Sie davon abhält, seitenrelative URLs zu verwenden, außer dass dies es erschwert, Ihre Seiten zu verschieben, und es leicht ist, unbeabsichtigt unerwünschte Registrierungen zu erstellen, wenn Sie dies tun.

In diesem Beispiel befindet sich der Service-Worker-Code bei `example.com/product/sw.js`, und der Registrierungscode bei `example.com/product/description.html`.
Wir verwenden URLs, die relativ zum aktuellen Verzeichnis für die `scriptURL` und den `scope` sind, wobei das aktuelle Verzeichnis die Basis-URL der Seite ist, die `register()` aufruft (`example.com/product/`).
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

### Verwendung von Service-Worker-Allowed zur Erhöhung des Service-Worker-Bereichs

Ein Service Worker kann keinen breiteren Bereich als seinen eigenen Ort haben, es sei denn, der Server gibt in einem {{HTTPHeader("Service-Worker-Allowed")}}-Header auf dem Service-Worker-Skript einen breiteren maximalen Bereich an.
Verwenden Sie die `scope`-Option, wenn Sie einen _engeren_ Bereich als den Standard-Bereich benötigen.

Der folgende Code, wenn er in `example.com/index.html`, an der Basis einer Seite enthalten ist, würde nur für Ressourcen unter `example.com/product` gelten.

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

Wie oben erwähnt, können Server den Standardbereich ändern, indem sie den `Service-Worker-Allowed`-Header auf dem Service-Worker-Skript setzen.
Dies erlaubt es, die `scope`-Option außerhalb des durch den Standort des Service Workers definierten Pfades festzulegen.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet werden, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` setzen würde, wenn `sw.js` bereitgestellt wird. Wenn der Server den Header nicht setzt, schlägt die Service-Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

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
- [Verwendung von Service Worker](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{HTTPHeader("Service-Worker-Allowed")}} HTTP-Header
