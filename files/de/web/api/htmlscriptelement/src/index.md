---
title: "HTMLScriptElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLScriptElement/src
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Diese Eigenschaft repräsentiert die URI eines externen Skripts, das in das script-Element geladen wird und je nach [`type`](/de/docs/Web/API/HTMLScriptElement/type) des Skripts ausführbar sein kann.
> APIs wie diese werden als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bezeichnet und können einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.
>
> Sie können dieses Risiko verringern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die einschränkt, von welchen Orten Skripte geladen werden dürfen. Weisen Sie außerdem stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zu und [erzwingen Sie Trusted Types](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Weitere Informationen finden Sie unter [Sicherheitsaspekte](#sicherheitsaspekte).

Die **`src`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle ist eine Zeichenfolge, die die URL eines externen Skripts repräsentiert. Sie kann als Alternative dazu verwendet werden, ein Skript direkt in ein Dokument einzubetten.

Sie spiegelt das [`src`](/de/docs/Web/HTML/Reference/Elements/script#src)-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Beim Lesen der Eigenschaft wird eine Zeichenfolge zurückgegeben, die die Skript-URI des Elements enthält.

Beim Setzen der Eigenschaft wird entweder ein [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekt oder eine Zeichenfolge akzeptiert.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaft mit einer Zeichenfolge gesetzt wird, während [Trusted Types](/de/docs/Web/API/Trusted_Types_API) [durch eine CSP erzwungen werden](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) und keine Standardrichtlinie definiert ist.
    Dieser Fehler wird auch ausgelöst, wenn die abgerufene URL nicht erfolgreich als der angegebene Typ, beispielsweise als Modul oder Importmap, geparst werden kann.

## Beschreibung

Die **`src`**-Eigenschaft repräsentiert die URL eines externen Skripts.
Wenn sie gesetzt ist, werden Skripte ignoriert, die über die Texteigenschaften [`text`](/de/docs/Web/API/HTMLScriptElement/text), [`textContent`](/de/docs/Web/API/HTMLScriptElement/textContent) oder [`innerText`](/de/docs/Web/API/HTMLScriptElement/textContent) bereitgestellt werden.

### Sicherheitsaspekte

Die `src`-Eigenschaft wird verwendet, um externe Skripte zu laden und auszuführen.
Das abgerufene Skript wird im Kontext der aktuellen Seite ausgeführt und kann daher alles tun, was auch der Code Ihrer eigenen Website tun kann (selbst wenn die URL nicht denselben Ursprung wie Ihre Website hat).
Wenn die Eingabe von einem Benutzer stammt, kann dies einen Angriffsvektor für [Cross-Site-Scripting-Angriffe (XSS)](/de/docs/Web/Security/Attacks/XSS) darstellen.

Es ist äußerst riskant, beliebige URLs aus nicht vertrauenswürdigen Quellen zu akzeptieren und auszuführen.
Eine Website sollte mithilfe einer [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der Direktive [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) (oder einer in [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) definierten Ausweichregel) festlegen, welche Skripte ausgeführt werden dürfen.
Dadurch können Skripte auf solche vom aktuellen Ursprung, auf eine bestimmte Menge von Ursprüngen oder sogar auf einzelne Dateien beschränkt werden.

Wenn Sie diese Eigenschaft verwenden und [Trusted Types erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (mithilfe der CSP-Direktive [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for)), müssen Sie stets [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte statt Zeichenfolgen zuweisen.
Dadurch wird sichergestellt, dass die Eingabe eine Transformationsfunktion durchläuft, die die URL ablehnen oder ändern kann, bevor sie eingefügt wird.

Selbst wenn Ihre Website der Ressource vertraut, kann diese durch einen [Angriff auf die Lieferkette](/de/docs/Web/Security/Attacks/Supply_chain_attacks) kompromittiert sein.
Um diese Art von Angriff abzuschwächen, sollten Sie die Funktion [Subresource Integrity](/de/docs/Web/Security/Attacks/Supply_chain_attacks#using_subresource_integrity) verwenden.

## Beispiele

### TrustedScriptURL verwenden

Um das XSS-Risiko zu verringern, sollten wir der `src`-Eigenschaft stets `TrustedScriptURL`-Instanzen zuweisen.
Das ist auch erforderlich, wenn wir Trusted Types aus anderen Gründen erzwingen und bestimmte Skriptquellen zulassen möchten, die durch `CSP: script-src` erlaubt wurden.

Trusted Types werden noch nicht von allen Browsern unterstützt. Deshalb definieren wir zunächst den [Trusted-Types-Tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dieser dient als transparenter Ersatz für die Trusted-Types-JavaScript-API:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine Methode [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL) definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen umzuwandeln.

Für dieses Beispiel nehmen wir an, dass wir eine vordefinierte Menge von URLs im Array `scriptAllowList` zulassen und alle anderen Skripte protokollieren möchten.

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

Als Nächstes erstellen wir das script-Element, dem wir den Wert zuweisen werden, und speichern eine Referenz auf das Element.

```html
<script id="el"></script>
```

```js
// Get the script element we're injecting the code into
const el = document.getElementById("el");
```

Dann verwenden wir das Objekt `policy`, um aus der potenziell unsicheren Eingabezeichenfolge eine `trustedScriptURL`-Instanz zu erstellen, und weisen das Ergebnis dem Element zu:

```js
// The potentially malicious string
// We won't be including untrustedScriptURL in our scriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Inject the TrustedScriptURL (which contains a trusted URL)
el.src = trustedScriptURL;
```

### Die `src`-Eigenschaft lesen

Dieses Beispiel zeigt, wie Sie die `src`-Eigenschaft der beiden folgenden script-Elemente lesen können, wenn die Seiten-URL `https://example.com` lautet.

```html
<script id="script-with-src" type="module" src="/main.js"></script>
<script id="script-without-src" type="module"></script>
```

Der Code liest jedes der script-Elemente aus und protokolliert den Wert der `src`-Eigenschaft.

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
