---
title: "SVGScriptElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGScriptElement/href
l10n:
  sourceCommit: a809326f55025ca710b11e6c46414d73d031bf2b
---

{{APIRef("SVG")}}

> [!WARNING]
> Die [`href.baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal) Eigenschaft repräsentiert die URL eines externen Skripts, das in das SVG-Skript-Element geladen wird.
> Solche APIs sind als [Injection Sinks](/de/docs/Web/API/Trusted_Types_API#concepts_and_usage) bekannt und stellen potenziell einen Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe dar.
>
> Sie können dieses Risiko mindern, indem Sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) verwenden, die die Orte einschränkt, von denen Skripts geladen werden können. Verwenden Sie außerdem immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen und [erzwingen Sie vertrauenswürdige Typen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types).
> Siehe [Sicherheitsüberlegungen](#sicherheitsüberlegungen) für weitere Informationen.

Die **`href`**-Eigenschaft der [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) Schnittstelle gibt das Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} des angegebenen {{SVGElement("script")}}-Elements wieder.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beschreibung

Die **`href`**-Eigenschaft gibt das Attribut {{SVGAttr("href")}} oder {{SVGAttr("xlink:href")}} {{deprecated_inline}} des angegebenen {{SVGElement("script")}}-Elements wieder.
Das Attribut kann geändert werden, indem [`href.baseVal`](/de/docs/Web/API/SVGAnimatedString/baseVal) festgelegt wird (`href.animVal` ist schreibgeschützt und spiegelt den Wert von `baseVal` wider).

### Sicherheitsüberlegungen

Die `href.baseVal`-Eigenschaft wird verwendet, um externe Skripte zu laden und auszuführen.
Wenn das SVG inline deklariert ist, wird das abgerufene Skript im Kontext der aktuellen Seite ausgeführt und kann daher alles tun, was Ihr eigener Website-Code tun kann (selbst wenn die URL nicht aus derselben Herkunft wie Ihre Site stammt).
Wenn die Eingabe von einem Benutzer bereitgestellt wird, ist dies ein möglicher Vektor für [Cross-Site-Scripting (XSS)](/de/docs/Web/Security/Attacks/XSS)-Angriffe.

Es ist äußerst riskant, willkürliche URLs von nicht vertrauenswürdigen Ursprüngen zu akzeptieren und auszuführen.
Eine Website sollte kontrollieren, welche Skripte ausgeführt werden dürfen, indem sie eine [Content Security Policy (CSP)](/de/docs/Web/HTTP/Guides/CSP) mit der [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)-Direktive (oder einem Rückfall definiert in [`default-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src)) verwendet.
Dies kann Skripte auf diejenigen vom aktuellen Ursprung oder einer spezifischen Menge von Ursprüngen oder sogar bestimmten Dateien beschränken.

Wenn Sie diese Eigenschaft verwenden und [vertrauenswürdige Typen erzwingen](/de/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types) (unter Verwendung der [`require-trusted-types-for`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) CSP-Direktive), müssen Sie immer [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Objekte anstelle von Zeichenfolgen zuweisen.
Dies stellt sicher, dass die Eingabe durch eine Transformationsfunktion geleitet wird, die die Möglichkeit hat, die URL abzulehnen oder zu ändern, bevor die Ressource abgerufen wird.

## Beispiele

### Zugriff auf die `href`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="myScript" href="script.js"></script>
</svg>
```

```js
const scriptElement = document.getElementById("myScript");

// Access the href property
console.log(scriptElement.href.baseVal); // Output: "script.js"
```

### Festlegen der `href.baseVal`-Eigenschaft

Um das Risiko von XSS zu mindern, sollten wir immer `TrustedScriptURL`-Instanzen der `baseVal`-Eigenschaft zuweisen.
Wir müssen dies auch tun, wenn wir vertrauenswürdige Typen aus anderen Gründen erzwingen und wir einige Skriptquellen zulassen möchten, die erlaubt wurden (von `CSP: script-src`).

Vertrauenswürdige Typen werden noch nicht von allen Browsern unterstützt, daher definieren wir zuerst den [trusted types tinyfill](/de/docs/Web/API/Trusted_Types_API#trusted_types_tinyfill).
Dies dient als transparenter Ersatz für die JavaScript-API für vertrauenswürdige Typen:

```js
if (typeof trustedTypes === "undefined")
  trustedTypes = { createPolicy: (n, rules) => rules };
```

Als Nächstes erstellen wir eine [`TrustedTypePolicy`](/de/docs/Web/API/TrustedTypePolicy), die eine [`createScriptURL()`](/de/docs/Web/API/TrustedTypePolicy/createScriptURL)-Methode definiert, um Eingabezeichenfolgen in [`TrustedScriptURL`](/de/docs/Web/API/TrustedScriptURL)-Instanzen zu transformieren.

Für den Zweck dieses Beispiels nehmen wir an, dass wir eine vordefinierte Menge von URLs im `scriptAllowList` Array zulassen möchten und alle anderen Skripte protokollieren.

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

Als Nächstes definieren wir ein ähnliches SVG und Skript-Element wie im vorherigen Beispiel und erhalten das Element, in das wir die URL injizieren wollen.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <script id="aScriptElement" href="example.js"></script>
</svg>
```

```js
// Get the script element we're injecting the URL into
const scriptElement = document.getElementById("aScriptElement");
```

Dann verwenden wir das `policy`-Objekt, um ein `trustedScriptURL`-Objekt aus der potenziell unsicheren Eingabezeichenfolge zu erstellen und das Ergebnis der `href.baseVal`-Eigenschaft des Elements zuzuweisen:

```js
// The potentially malicious string
// We won't be including untrustedScript in our scriptAllowList array
const untrustedScriptURL = "https://evil.example.com/naughty.js";

// Create a TrustedScriptURL instance using the policy
const trustedScriptURL = policy.createScriptURL(untrustedScriptURL);

// Inject the TrustedScriptURL (which contains a trusted URL)
scriptElement.href.baseVal = trustedScriptURL;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
