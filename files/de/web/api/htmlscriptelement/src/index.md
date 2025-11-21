---
title: "HTMLScriptElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert die URI eines externen Skripts, das in das Skriptelement geladen wird und ausführbar sein kann, abhängig vom Skript-`type` [/de/docs/Web/API/HTMLScriptElement/type).
> Solche APIs sind bekannt als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) und sind potenziell ein Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die die Orte einschränkt, von denen Skripte geladen werden können, und indem Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL) Objekte statt Strings zuweisen und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`src`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement) Schnittstelle ist ein String, der die URL eines externen Skripts repräsentiert; dies kann als Alternative zum direkten Einbetten eines Skripts innerhalb eines Dokuments verwendet werden.

Sie spiegelt das [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Beim Abrufen der Eigenschaft wird ein String zurückgegeben, der die Skript-URI des Elements enthält.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder ein String akzeptiert.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft mit einem String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) von einer CSP durchgesetzt werden und keine Standardrichtlinie definiert ist.
    Dies wird auch ausgelöst, wenn die abgerufene URL nicht erfolgreich als ihr angegebenes Typ, wie ein Modul oder Importmap, geparst werden kann.

## Beschreibung

Die **`src`**-Eigenschaft repräsentiert die URL eines externen Skripts.
Wenn gesetzt, werden Skripte über die Texteigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) oder [`innerText`](/de/docs/Web/API/HTMLScriptElement/textContent) ignoriert.

### Sicherheitsüberlegungen

Die `src`-Eigenschaft wird verwendet, um externe Skripte zu laden und auszuführen.
Das abgerufene Skript wird im Kontext der aktuellen Seite ausgeführt und kann somit alles tun, was Ihr eigener Website-Code tun kann (selbst wenn die URL nicht von derselben Herkunft wie Ihre Seite stammt).
Wenn der Input von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS) Angriffe.

Es ist extrem riskant, willkürliche URLs von nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive steuern, welche Skripte ausgeführt werden dürfen (oder ein Fallback, das in [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) definiert ist).
Dies kann Skripte auf diejenigen von der aktuellen Herkunft oder einer bestimmten Gruppe von Herkünften oder sogar bestimmte Dateien einschränken.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte zuweisen, anstelle von Strings.
Dies stellt sicher, dass der Input durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die URL abzulehnen oder zu ändern, bevor sie eingefügt wird.

Selbst wenn die Ressource von Ihrer Website als sicher betrachtet wird, kann sie immer noch in einem [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks) kompromittiert werden.
Um gegen diese Art von Angriff zu schützen, sollten Sie das [Subresource Integrity](/de/docs/Web/Security/Attacks/Supply_chain_attacks#using_subresource_integrity)-Feature verwenden.

## Beispiele

### Verwendung von TrustedScriptURL

Um das Risiko von XSS zu mindern, sollten Sie immer `TrustedScriptURL`-Instanzen der `src`-Eigenschaft zuweisen.
Wir müssen dies auch tun, wenn wir Trusted Types aus anderen Gründen durchsetzen und einige Skriptquellen zulassen möchten, die erlaubt wurden (durch `CSP: script-src`).

Trusted Types werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst das [Trusted Types Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die Trusted Types JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode zur Transformation von Eingabestrings in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen definiert.

Für das Beispiel nehmen wir an, dass wir eine vordefinierte Liste von URLs im `scriptAllowList`-Array zulassen und alle anderen Skripte protokollieren möchten.

```js
const scriptAllowList = [
  /*Some list of allowed URLs */
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

Als nächstes erstellen wir das Skriptelement, dem wir den Wert zuweisen und erhalten einen Zugriff auf das Element.

```html
<script id="el" type="text/javascript"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Dann verwenden wir das `policy`-Objekt, um ein `trustedScript`-Objekt aus dem potenziell unsicheren Eingabestring zu erstellen, und weisen das Ergebnis dem Element zu:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScript = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScript);

// Inject the TrustedScriptURL (which contains a trusted URL)
el.src = trustedScriptURL;
```

### Auslesen der `src`-Eigenschaft

Dieses Beispiel zeigt, wie Sie die `src`-Eigenschaft für die beiden unten stehenden Skriptelemente auslesen können, vorausgesetzt, die Seiten-URL ist `https://example.com`.

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

Der Code liest jedes der Skriptelemente und protokolliert die Ausgabe der `src`-Eigenschaft.

```js
const scriptWithSrc = document.getElementById("script-with-src");
console.log(scriptWithSrc.src); // Output: "https://example.com/main.js"
const scriptWithoutSrc = document.getElementById("script-without-src");
console.log(scriptWithoutSrc.src); // Output: ""
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
