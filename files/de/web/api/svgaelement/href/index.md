---
title: "SVGAElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGAElement/href
l10n:
  sourceCommit: 7a67708cef97b5b290acc362b95093eb9a7540c7
---

{{APIRef("SVG")}}

Die **`href`** schreibgeschützte Eigenschaft des [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString) Objekt zurück, das den Wert des href-Attributs widerspiegelt und in bestimmten Fällen das {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attribut. Es gibt das Ziel-URI an, das mit dem Link verbunden ist.

Diese Eigenschaft ermöglicht den Zugriff auf das URI, das für einen Link innerhalb eines SVG-Dokuments festgelegt ist.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des href-Attributs angibt. Zusätzlich spiegelt es bei Elementen, die es unterstützen, den Wert des {{SVGAttr("xlink:href")}} {{deprecated_inline}} Attributs wider, wenn das href-Attribut nicht gesetzt ist.

## Beispiele

```js
// Select an SVG <a> element
const svgLink = document.querySelector("a");

// Access the href property
console.log(svgLink.href.baseVal); // Logs the base URI
console.log(svgLink.href.animVal); // Logs the animated URI if applicable

// Example: Reflecting xlink:href
const deprecatedLink = document.querySelector("a");
console.log(deprecatedLink.href.baseVal); // Reflects 'xlink:href' if 'href' is not set
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ SVGAttr("href") }}
