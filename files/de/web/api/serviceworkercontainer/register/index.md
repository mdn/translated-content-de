---
title: "ServiceWorkerContainer: register()-Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: f97112a7e593ef7f9597cde85fa02bc321fa01a7
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

> [!WARNING]
> Der `scriptURL`-Parameter, der an diese Methode übergeben wird, repräsentiert die URL eines externen Skripts, das in einen Service Worker geladen wird.
> Solche APIs sind als [Injection-Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) implementieren, die die Standorte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`register()`**-Methode der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Scope.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Eine Instanz von [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) oder eine Zeichenfolge, die die URL des Service Worker-Skripts definiert.
    Die registrierte Service Worker-Datei muss mit einem gültigen [JavaScript-Medien-Typ](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) geliefert werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:
    - `scope`
      - : Eine Zeichenfolge, die eine URL repräsentiert, die den Registrierungsbereich eines Service Workers definiert; also welchen Bereich von URLs ein Service Worker steuern kann.

        Dies wird normalerweise als URL angegeben, die relativ zur Basis-URL der Seite ist (z. B. `/some/path/`), sodass der aufgelöste Scope unabhängig davon gleich ist, von welcher Seite der Registrierungscode aufgerufen wird.
        Der Standard-`scope` für eine Service Worker-Registrierung ist das Verzeichnis, in dem sich das Service Worker-Skript befindet (das `./` gegen `scriptURL` auflöst).

        Der Scope sollte verwendet werden, um Dokumente anzugeben, die sich im gleichen Verzeichnis oder tiefer verschachtelt befinden als der Service Worker.
        Wenn Sie einen breiteren Scope benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header erlaubt werden.
        Siehe den Abschnitt [Beispiele](#beispiele) für Informationen zur Erweiterung des Standard-Scopes eines Service Workers.

    - `type`
      - : Eine Zeichenfolge zur Spezifizierung des Typs des zu erstellenden Workers.
        Gültige Werte sind:
        - `'classic'`
          - : Der geladene Service Worker befindet sich in einem Standardskript.
            Dies ist der Standardwert.
        - `'module'`
          - : Der geladene Service Worker befindet sich in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und der Importbefehl ist im Worker-Kontext verfügbar.
            Für Informationen zur ES-Modul-Kompatibilität siehe die [Browser-Kompatibilitätsdatentabelle für die `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`
      - : Eine Zeichenfolge, die angibt, wie der HTTP-Cache für Service Worker-Skriptressourcen während Updates genutzt wird.
        Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und dessen Importe, nicht auf andere von diesen Skripten abgerufene Ressourcen.
        - `'all'`
          - : Der HTTP-Cache wird für das Hauptskript und alle importierten Skripte abgefragt. Wenn kein aktueller Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer vom Netzwerk abgerufen. Wenn kein aktueller Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Service Worker-Skriptressourcen werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`
  - : Die `scriptURL` oder `scope URL` ist ein Fehler.
    Dies kann passieren, wenn die URL nicht zu einer gültigen URL aufgelöst werden kann oder ein Schema verwendet, das nicht `http:` oder `https` ist.
    Es kann auch passieren, wenn `scriptURL` nicht eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und dies eine Anforderung der [Trusted Types Policy](/de/docs/Web/API/Trusted_Types_API) der Website ist.

    Die Ausnahme wird auch ausgelöst, wenn der `scriptURL`- oder `scope URL`-Pfad das case-insensitive ASCII "%2F" (`/`) oder "%5C" (`\`) enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` ist kein potenziell vertrauenswürdiger Ursprung, wie etwa `localhost` oder eine `https`-URL.
    Die `scriptURL` und der Scope stammen nicht vom gleichen Ursprung wie die registrierende Seite.

## Beschreibung

Die **`register()`**-Methode erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Scope.
Wenn erfolgreich, wird die angegebene Skript-URL einem _Scope_ zugeordnet, der anschließend zum Zuordnen von Dokumenten zu einem bestimmten Service Worker verwendet wird.

Für jeden eindeutigen Scope wird eine einzelne Registrierung erstellt.
Wenn `register()` für einen Scope aufgerufen wird, der bereits eine bestehende Registrierung hat, wird die Registrierung mit allen Änderungen am `scriptURL` oder den Optionen aktualisiert.
Wenn es keine Änderungen gibt, wird die bestehende Registrierung zurückgegeben.
Der Aufruf von `register()` mit dem gleichen Scope und `scriptURL` startet den Installationsprozess nicht neu, daher ist es im Allgemeinen sicher, diese Methode bedingungslos von einer kontrollierten Seite aus aufzurufen.
Es wird jedoch eine Netzwerk-Anfrage für das Service Worker-Skript gesendet, was die Serverbelastung erhöhen kann.
Wenn dies ein Anliegen ist, können Sie zunächst nach einer bestehenden Registrierung mit [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration) suchen.

Ein Dokument kann potenziell innerhalb des Scopes mehrerer Registrierungen mit unterschiedlichen Service Workern und Optionen liegen.
Der Browser wird das Dokument mit der passenden Registrierung assoziieren, die den spezifischsten Scope hat.
Dies stellt sicher, dass nur ein Service Worker für jedes Dokument läuft.

> [!NOTE]
> Es ist im Allgemeinen sicherer, keine Registrierungen zu definieren, die sich überlappende Scopes haben.

### Sicherheitsüberlegungen

Der `scriptURL`-Parameter spezifiziert das Skript für den Service Worker, der Netzwerk-Anfragen für Seiten innerhalb seines Scopes abfangen und Antworten liefern kann, die frisch, zwischengespeichert, neu oder modifiziert sind.
Wenn die Eingabe von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Es ist äußerst riskant, beliebige URLs von unzuverlässigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte kontrollieren, welche Skripte ausgeführt werden dürfen, indem sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src)-Direktive (oder einem in [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) definierten Fallback) einsetzt.
Dies kann Skripte auf diejenigen vom aktuellen Ursprung oder einem spezifischen Satz von Ursprüngen oder sogar bestimmten Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die URL vor der Injektion abzulehnen oder zu modifizieren.

## Beispiele

Die folgenden Beispiele sollten zusammen gelesen werden, um zu verstehen, wie der Scope des Service Workers auf eine Seite angewendet wird.

Beachten Sie, dass das erste Beispiel zeigt, wie die Methode mit vertrauenswürdigen Typen verwendet wird.
Die anderen Beispiele lassen diesen Schritt der Kürze halber aus.

### Verwendung von `TrustedScriptURL`

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScriptURL`-Instanzen an den `scriptURL`-Parameter zuweisen.
Wir müssen dies auch tun, wenn wir aus anderen Gründen vertrauenswürdige Typen erzwingen und einige Skriptquellen, die erlaubt sind, zulassen wollen (durch `CSP: worker-src`).

Vertrauenswürdige Typen werden noch nicht in allen Browsern unterstützt, also definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparente Ersatzfunktion für die JavaScript-API der vertrauenswürdigen Typen:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für dieses Beispiel gehen wir davon aus, dass wir eine vordefinierte Menge von URLs im Array `scriptAllowList` zulassen wollen und alle anderen Skripte protokollieren.

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

Dann verwenden wir das `policy`-Objekt, um ein `TrustedScriptURL`-Objekt aus einer potenziell unsicheren Eingabe-Zeichenfolge zu erstellen:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/service_worker.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

Wir können jetzt das `TrustedScriptURL`-Objekt in `register()` übergeben:

```js
navigator.serviceWorker.register(trustedScriptURL);
```

### Registrierung eines Service Workers mit Standard- Scope

Das folgende Beispiel verwendet den Standardwert von `scope`, indem es weggelassen wird, was ihn auf den gleichen Ort wie die Skript-URL setzt.

Angenommen, der Service Worker-Code befindet sich auf `example.com/sw.js` und der Registrierungscode auf `example.com/index.html`.
Der Service Worker-Code wird `example.com/index.html` sowie darunter liegende Seiten wie `example.com/product/description.html` steuern.

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

Beachten Sie, dass wir die `scriptURL` relativ zum Seitenstamm und nicht zur aktuellen Seite registriert haben.
Dies ermöglicht die gleiche Registrierung von jeder Seite aus zu verwenden.

### Registrierung eines Service Workers mit explizitem Standard- Scope

Der untenstehende Code ist fast identisch, außer dass wir den Scope explizit als `{ scope: "/" }` angegeben haben.
Wir haben den Scope als site-relativ angegeben, sodass der gleiche Registrierungscode von überall in der Website verwendet werden kann.

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

Dieser Scope ist der gleiche wie der Standard- Scope, sodass die Registrierung auf genau die gleichen Seiten wie im vorherigen Beispiel angewendet wird.
Beachten Sie, dass, wenn wir diesen Code nach dem vorherigen Beispiel ausführen würden, Browser erkennen sollten, dass wir eine bestehende Registrierung aktualisieren anstatt eine neue vorzunehmen.

### Registrierung eines Service Workers mit seitenrelativen URLs

Es gibt nichts, das Sie daran hindert, seitenrelative URLs zu verwenden, außer dass dies es schwieriger macht, Ihre Seiten zu verschieben, und es leicht ist, versehentlich unerwünschte Registrierungen zu erstellen, wenn Sie dies tun.

In diesem Beispiel befindet sich der Service Worker-Code auf `example.com/product/sw.js` und der Registrierungscode auf `example.com/product/description.html`.
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

### Verwenden von `Service-Worker-Allowed`, um den Service Worker-Scope zu erhöhen

Ein Service Worker kann keinen breiteren Scope haben als seine eigene Position, es sei denn, der Server legt einen breiteren maximalen Scope im {{HTTPHeader("Service-Worker-Allowed")}}-Header auf das Service Worker-Skript fest.
Verwenden Sie die `scope`-Option, wenn Sie einen _schmaleren_ Scope als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html`, an der Wurzel einer Seite, enthalten ist, würde nur auf Ressourcen unter `example.com/product` angewendet.

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

Wie oben angemerkt, können Server den Standard-Scope ändern, indem sie den `Service-Worker-Allowed`-Header auf das Service Worker-Skript setzen.
Dies ermöglicht es, die `scope`-Option außerhalb des durch die Position des Service Workers definierten Pfades zu setzen.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde auf alle Ressourcen unter `example.com` angewendet, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` setzt, wenn er `sw.js` bereitstellt. Wenn der Server den Header nicht setzt, schlägt die Registrierung des Service Workers fehl, da der angeforderte `scope` zu breit ist.

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
