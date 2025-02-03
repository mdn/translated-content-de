---
title: "SVGAElement: href-Eigenschaft"
short-title: href
slug: Web/API/SVGAElement/href
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

Die **`href`**-Eigenschaft, die schreibgeschützt ist, des [`SVGAElement`](/de/docs/Web/API/SVGAElement) gibt ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt zurück, das den Wert des href-Attributs widerspiegelt und in bestimmten Fällen das {{SVGAttr("xlink:href")}}-Attribut {{deprecated_inline}}. Es gibt das Ziel-URI an, das mit dem Link verknüpft ist.

Diese Eigenschaft ermöglicht den Zugriff auf das URI, das für einen Link innerhalb eines SVG-Dokuments festgelegt wurde.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString), das den Wert des href-Attributs angibt. Darüber hinaus spiegelt es für Elemente, die dies unterstützen, den Wert des {{SVGAttr("xlink:href")}}-Attributs {{deprecated_inline}} wider, wenn das href-Attribut nicht gesetzt ist.

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
