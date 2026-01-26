---
title: "HTMLScriptElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: a809326f55025ca710b11e6c46414d73d031bf2b
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert die URI eines externen Skripts, das in das Skriptelement geladen wird. Abhängig vom Skript kann dies ausführbar sein [`type`](/de/docs/Web/API/HTMLScriptElement/type).
> Solche APIs werden als [Injection-Senken](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) implementieren, die die Standorte einschränkt, von denen Skripte geladen werden können, und indem Sie stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Strings zuweisen und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`src`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle ist ein String, der die URL eines externen Skripts repräsentiert; dies kann als Alternative zur direkten Einbettung eines Skripts in ein Dokument verwendet werden.

Sie spiegelt das [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Das Abrufen der Eigenschaft gibt einen String zurück, der die URI des Skript-Elements enthält.

Das Setzen der Eigenschaft akzeptiert entweder ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder einen String.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn die Eigenschaft mit einem String gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP durchgesetzt werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Dies wird auch ausgelöst, wenn die abgerufene URL nicht erfolgreich als ihr angegebener Typ, wie ein Modul oder Importmap, geparst werden kann.

## Beschreibung

Die **`src`**-Eigenschaft repräsentiert die URL eines externen Skripts.
Wenn gesetzt, werden Skripte, die über die Texteigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) oder [`innerText`](/de/docs/Web/API/HTMLScriptElement/textContent) bereitgestellt werden, ignoriert.

### Sicherheitsüberlegungen

Die `src`-Eigenschaft wird verwendet, um externe Skripte zu laden und auszuführen.
Das abgerufene Skript wird im Kontext der aktuellen Seite ausgeführt und kann daher alles tun, was auch der eigene Website-Code tun kann (selbst wenn die URL nicht von derselben Origin wie Ihre Seite stammt).
Wenn die Eingabe von einem Benutzer bereitgestellt wird, ist dies ein potenzieller Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Es ist äußerst riskant, willkürliche URLs von nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte kontrollieren, welche Skripte mit einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive (oder einem Fallback, das in [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) definiert ist) ausgeführt werden dürfen.
Dies kann Skripte auf solche vom aktuellen Ursprung oder einen spezifischen Satz von Ursprüngen oder sogar auf bestimmte Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [vertrauenswürdige Typen durchsetzen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)-CSP-Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Strings zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Gelegenheit hat, die URL abzulehnen oder zu ändern, bevor sie injiziert wird.

Selbst wenn die Ressource von Ihrer Website vertrauenswürdig ist, kann sie in einem [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks) kompromittiert werden.
Um sich gegen diese Art von Angriffen zu schützen, sollten Sie die [Subresource Integrity](/de/docs/Web/Security/Attacks/Supply_chain_attacks#using_subresource_integrity) verwenden.

## Beispiele

### Verwendung von TrustedScriptURL

Um das Risiko von XSS zu mindern, sollten Sie immer `TrustedScriptURL`-Instanzen der `src`-Eigenschaft zuweisen.
Wir müssen dies auch tun, wenn wir aus anderen Gründen vertrauenswürdige Typen durchsetzen und einige Skriptquellen zulassen möchten, die erlaubt wurden (durch `CSP: script-src`).

Vertrauenswürdige Typen werden noch nicht in allen Browsern unterstützt, daher definieren wir zuerst das [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies fungiert als transparenter Ersatz für die JavaScript-API der vertrauenswürdigen Typen:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode definiert, um Eingabestrings in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels nehmen wir an, dass wir eine vordefinierte Menge von URLs im `scriptAllowList`-Array zulassen und alle anderen Skripte protokollieren möchten.

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

Als Nächstes erstellen wir das Skriptelement, dem wir den Wert zuweisen werden, und erhalten einen Zugriff auf das Element.

```html
<script id="el"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Dann verwenden wir das `policy`-Objekt, um eine `trustedScriptURL`-Instanz aus dem potenziell unsicheren Eingabestring zu erstellen und das Ergebnis dem Element zuzuweisen:

```js
// The potentially malicious string
// We won't be including untrustedScriptURL in our scriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Inject the TrustedScriptURL (which contains a trusted URL)
el.src = trustedScriptURL;
```

### Lesen der `src`-Eigenschaft

Dieses Beispiel zeigt, wie Sie die `src`-Eigenschaft für die beiden unten stehenden Skriptelemente lesen können, wobei angenommen wird, dass die Seiten-URL `https://example.com` lautet.

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
