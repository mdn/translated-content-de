---
title: "ServiceWorkerContainer: register()-Methode"
short-title: register()
slug: Web/API/ServiceWorkerContainer/register
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

> [!WARNING]
> Der `scriptURL`-Parameter, der an diese Methode übergeben wird, repräsentiert die URL eines externen Skripts, das in einen Service Worker geladen wird.
> Solche APIs sind als [Injection-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und können potenziell eine Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe darstellen.
>
> Sie können dieses Risiko verringern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die einschränkt, von welchen Orten Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen und [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsüberlegungen](#sicherheitsüberlegungen).

Die **`register()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces erstellt oder aktualisiert ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Geltungsbereich.

## Syntax

```js-nolint
register(scriptURL)
register(scriptURL, options)
```

### Parameter

- `scriptURL`
  - : Eine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanz oder eine Zeichenfolge, die die URL des Service Worker-Skripts definiert.
    Die registrierte Service Worker-Datei muss mit einem gültigen [JavaScript-Medientyp](/de/docs/Web/HTTP/Guides/MIME_types#textjavascript) bereitgestellt werden.
- `options` {{optional_inline}}
  - : Ein Objekt, das Registrierungsoptionen enthält. Derzeit verfügbare Optionen sind:
    - `scope`
      - : Eine Zeichenfolge, die eine URL repräsentiert und den Registrierungsbereich eines Service Workers definiert; das heißt, welchen Bereich von URLs ein Service Worker steuern kann.

        Dies wird in der Regel als URL angegeben, die relativ zur Basis-URL der Website ist (z.B. `/some/path/`), sodass der aufgelöste Bereich unabhängig davon, von welcher Seite der Registrierungscode aufgerufen wird, gleich ist.
        Der Standardwert für `scope` einer Service Worker-Registrierung ist das Verzeichnis, in dem sich das Service Worker-Skript befindet (Auflösen von `./` gegenüber `scriptURL`).

        Der Geltungsbereich sollte verwendet werden, um Dokumente anzugeben, die sich im selben Verzeichnis oder tiefer verschachtelt als der Service Worker befinden.
        Wenn Sie einen breiteren Geltungsbereich benötigen, kann dies über den HTTP-{{HTTPHeader("Service-Worker-Allowed")}}-Header ermöglicht werden.
        Siehe den Abschnitt [Beispiele](#beispiele) für Informationen zur Erweiterung des Standardbereichs eines Service Workers.

    - `type`
      - : Eine Zeichenfolge, die den Typ des zu erstellenden Workers angibt.
        Gültige Werte sind:
        - `'classic'`
          - : Der geladene Service Worker ist in einem Standardskript.
            Dies ist der Standard.
        - `'module'`
          - : Der geladene Service Worker ist in einem [ES-Modul](/de/docs/Web/JavaScript/Guide/Modules) und der Import-Befehl ist in Worker-Kontexten verfügbar.
            Für Informationen zur ES-Modulkompatibilität siehe die [Datentabelle zur Browser-Kompatibilität für die `ServiceWorker`-Schnittstelle](/de/docs/Web/API/ServiceWorker#browser_compatibility).

    - `updateViaCache`
      - : Eine Zeichenfolge, die angibt, wie der HTTP-Cache für Service Worker-Skriptressourcen während Updates verwendet wird.
        Hinweis: Dies bezieht sich nur auf das Service Worker-Skript und dessen Importe, nicht auf andere von diesen Skripten abgerufene Ressourcen.
        - `'all'`
          - : Der HTTP-Cache wird sowohl für das Hauptskript als auch für alle importierten Skripte abgefragt. Wenn kein frischer Eintrag im HTTP-Cache gefunden wird, werden die Skripte aus dem Netzwerk abgerufen.
        - `'imports'`
          - : Der HTTP-Cache wird für Importe abgefragt, aber das Hauptskript wird immer aus dem Netzwerk aktualisiert. Wenn kein frischer Eintrag im HTTP-Cache für die Importe gefunden wird, werden sie aus dem Netzwerk abgerufen.
        - `'none'`
          - : Der HTTP-Cache wird weder für das Hauptskript noch für dessen Importe verwendet. Alle Ressourcen des Service Worker-Skripts werden aus dem Netzwerk aktualisiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

### Ausnahmen

- `TypeError`
  - : Die `scriptURL` oder `scope URL` ist ein Fehler.
    Dies kann passieren, wenn die URL nicht zu einer gültigen URL aufgelöst werden kann oder ein Schema verwendet, das weder `http:` noch `https:` ist.
    Es kann auch passieren, wenn `scriptURL` keine [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) ist und dies eine Anforderung der vertrauenswürdigen Typenrichtlinie der Website ist.

    Die Ausnahme wird auch ausgelöst, wenn der `scriptURL` oder `scope URL`-Pfad die ASCII-Zeichenkette "%2f" (`*`) oder "%5c" (`=`) in nicht unterscheidender Groß- und Kleinschreibung enthält.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die `scriptURL` ist kein potenziell vertrauenswürdiger Ursprung, wie `localhost` oder eine `https`-URL.
    Die `scriptURL` und der Geltungsbereich sind nicht gleichen Ursprungs wie die registrierende Seite.

## Beschreibung

Die **`register()`**-Methode erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für den angegebenen Geltungsbereich.
Wenn sie erfolgreich ist, verbindet die Registrierung die angegebene Skript-URL mit einem _Scope_, welches anschließend verwendet wird, um Dokumente einem bestimmten Service Worker zuzuordnen.

Für jeden eindeutigen Scope wird eine einzelne Registrierung erstellt.
Wenn `register()` für einen Scope aufgerufen wird, der bereits eine bestehende Registrierung hat, wird die Registrierung mit Änderungen an `scriptURL` oder Optionen aktualisiert.
Wenn keine Änderungen vorliegen, wird die bestehende Registrierung zurückgegeben.
Der Aufruf von `register()` mit demselben Scope und `scriptURL` startet den Installationsprozess nicht neu, daher ist es im Allgemeinen sicher, diese Methode bedingungslos von einer kontrollierten Seite aus aufzurufen.
Es wird jedoch eine Netzwerkabfrage für das Service Worker-Skript gesendet, was die Serverlast erhöhen könnte.
Wenn dies ein Problem ist, können Sie zuerst eine bestehende Registrierung mithilfe von [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration) überprüfen.

Ein Dokument kann potenziell im Geltungsbereich mehrerer Registrierungen mit unterschiedlichen Service Workern und Optionen liegen.
Der Browser wird das Dokument derjenigen Registrierung zuordnen, die den spezifischsten Scope hat.
Dies stellt sicher, dass für jedes Dokument nur ein Service Worker aktiv ist.

> [!NOTE]
> Im Allgemeinen ist es sicherer, keine Registrierungen zu definieren, die sich überlappende Scopes haben.

### Sicherheitsüberlegungen

Der Parameter `scriptURL` spezifiziert das Skript für den Service Worker, welches Netzwerkabfragen für Seiten innerhalb seines Scope abfangen und damit frische, zwischengespeicherte, neue oder modifizierte Antworten liefern kann.
Wenn die Eingabe von einem Benutzer bereitgestellt wird, stellt dies eine potenzielle Angriffsfläche für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.

Es ist äußerst riskant, willkürliche URLs von nicht vertrauenswürdigen Ursprüngen anzunehmen und auszuführen.
Eine Website sollte kontrollieren, welche Skripte erlaubt sind zu laufen, indem eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der Direktive [`worker-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/worker-src) (oder ein Fallback definiert in [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) oder [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) verwendet wird.
Dies kann Skripte auf jene vom aktuellen Ursprung beschränken, einem spezifischen Satz von Ursprüngen oder sogar auf bestimmte Dateien.

Wenn Sie diese Eigenschaft verwenden und [trusted types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dies stellt sicher, dass die Eingabe über eine Transformationsfunktion durchläuft, die die Möglichkeit hat, die URL abzulehnen oder zu modifizieren, bevor sie injiziert wird.

## Beispiele

Die folgenden Beispiele sollten zusammen gelesen werden, um zu verstehen, wie der Service Worker Scope auf eine Seite angewendet wird.

Beachten Sie, dass das erste Beispiel zeigt, wie die Methode mit trusted types verwendet wird.
Die anderen Beispiele lassen diesen Schritt zur Kürze weg.

### Verwendung von TrustedScriptURL

Um das Risiko von XSS zu minimieren, sollten wir immer `TrustedScriptURL`-Instanzen für den `scriptURL`-Parameter zuweisen.
Wir müssen dies auch tun, wenn wir aus anderen Gründen trusted types durchsetzen und einige Skriptquellen erlauben möchten, die durch `CSP: worker-src` gestattet wurden.

Trusted types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparente Ersatz für die trusted types JavaScript API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen umzuwandeln.

Für dieses Beispiel nehmen wir an, dass wir einen vordefinierten Satz von URLs im Array `scriptAllowList` zulassen und alle anderen Skripte protokollieren möchten.

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

Dann verwenden wir das `policy`-Objekt, um aus einer potenziell unsicheren Eingabezeichenfolge ein `TrustedScriptURL`-Objekt zu erstellen:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/service_worker.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);
```

Nun können wir das `TrustedScriptURL`-Objekt in `register()` übergeben:

```js
navigator.serviceWorker.register(trustedScriptURL);
```

### Registrierung eines Service Workers mit Standardbereich

Das folgende Beispiel verwendet den Standardwert für `scope`, indem es diesen weglässt, was ihn auf denselben Ort wie die Skript-URL festlegt.

Angenommen, der Service Worker-Code befindet sich unter `example.com/sw.js`, und der Registrierungscode unter `example.com/index.html`.
Der Service Worker-Code steuert `example.com/index.html` sowie Seiten darunter, wie `example.com/product/description.html`.

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

Beachten Sie, dass wir die `scriptURL` relativ zur Site-Root anstelle der aktuellen Seite registriert haben.
Dies ermöglicht es, denselben Registrierungscode von jeder Seite aus zu verwenden.

### Registrierung eines Service Workers mit einem expliziten Standardbereich

Der unten gezeigte Code ist fast identisch, außer dass wir den Bereich explizit mit `{ scope: "/" }` angegeben haben.
Wir haben den Bereich site-relativ festgelegt, sodass derselbe Registrierungscode von überall auf der Website aus verwendet werden kann.

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

Dieser Bereich ist derselbe wie der Standardbereich, sodass die Registrierung für genau dieselben Seiten wie im vorherigen Beispiel gilt.
Wenn wir diesen Code nach dem vorherigen Beispiel ausführen würden, sollten Browser erkennen, dass wir eine bestehende Registrierung aktualisieren und nicht eine neue erstellen.

### Registrierung eines Service Workers mit Seiten-relativen URLs

Es gibt nichts, das Sie davon abhält, Seiten-relative URLs zu verwenden, außer dass dies es schwieriger macht, Ihre Seiten zu verschieben, und es leicht möglich ist, versehentlich unerwünschte Registrierungen zu erstellen.

In diesem Beispiel befindet sich der Service Worker-Code unter `example.com/product/sw.js`, und der Registrierungscode unter `example.com/product/description.html`.
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

### Verwendung von Service-Worker-Allowed zur Erweiterung des Service Worker-Geltungsbereichs

Ein Service Worker kann keinen breiteren Geltungsbereich als seinen eigenen Standort haben, es sei denn, der Server gibt einen breiteren maximalen Geltungsbereich in einem {{HTTPHeader("Service-Worker-Allowed")}}-Header auf dem Service Worker-Skript an.
Verwenden Sie die `scope`-Option, wenn Sie einen _engeren_ Geltungsbereich als den Standard benötigen.

Der folgende Code, wenn er in `example.com/index.html` enthalten ist, am Root einer Site, würde nur für Ressourcen unter `example.com/product` gelten.

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

Wie oben erwähnt, können Server den Standard-Geltungsbereich ändern, indem sie den `Service-Worker-Allowed`-Header auf dem Service Worker-Skript festlegen.
Dadurch kann die `scope`-Option außerhalb des Pfades festgelegt werden, der durch den Standort des Service Workers definiert ist.

Der folgende Code, wenn er in `example.com/product/index.html` enthalten ist, würde für alle Ressourcen unter `example.com` gelten, wenn der Server den `Service-Worker-Allowed`-Header auf `/` oder `https://example.com/` festgelegt hat, während `sw.js` bereitgestellt wird. Wenn der Server den Header nicht setzt, schlägt die Service Worker-Registrierung fehl, da der angeforderte `scope` zu breit ist.

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
