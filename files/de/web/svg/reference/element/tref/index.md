---
title: <tref>
slug: Web/SVG/Reference/Element/tref
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{deprecated_header}}

Der Textinhalt eines {{SVGElement("text")}} [SVG](/de/docs/Web/SVG)-Elements kann entweder als Zeichenfolge direkt innerhalb des {{SVGElement("text")}}-Elements eingebettet sein oder als Zeichenfolgeninhalt eines referenzierten Elements, wobei die Referenzierung mit einem **`<tref>`**-Element angegeben wird.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("xlink:href")}} {{deprecated_inline}}

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement)-Schnittstelle.

## Beispiel

```xml
<svg width="100%" height="100%" viewBox="0 0 1000 300"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <text id="ReferencedText">
      Referenced character data
    </text>
  </defs>

  <text x="100" y="100" font-size="45" >
    Inline character data
  </text>

  <text x="100" y="200" font-size="45" fill="red" >
    <tref xlink:href="#ReferencedText"/>
  </text>

  <!-- Show outline of canvas using 'rect' element -->
  <rect x="1" y="1" width="998" height="298"
        fill="none" stroke-width="2" />
</svg>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("text")}}
