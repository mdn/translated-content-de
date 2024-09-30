---
title: <set>
slug: Web/SVG/Element/set
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das SVG-Element **`<set>`** bietet ein einfaches Mittel, um den Wert eines Attributs für eine festgelegte Dauer zu setzen.

Es unterstützt alle Attributtypen, einschließlich derjenigen, die nicht sinnvoll interpoliert werden können, wie String- und boolesche Werte. Für Attribute, die sinnvoll interpoliert werden können, wird normalerweise das {{SVGElement('animate')}} bevorzugt.

> [!NOTE]
> Das `<set>`-Element ist nicht additiv. Die Attribute {{SVGAttr('additive')}} und {{SVGAttr('accumulate')}} sind nicht erlaubt und werden ignoriert, wenn sie angegeben sind.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect {
      cursor: pointer;
    }
    .round {
      rx: 5px;
      fill: green;
    }
  </style>

  <rect id="me" width="10" height="10">
    <set attributeName="class" to="round" begin="me.click" dur="2s" />
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Attribute

- {{SVGAttr("to")}}
  - : Dieses Attribut definiert den Wert, der für die Dauer der Animation auf das Zielattribut angewendet werden soll. Der Wert muss den Anforderungen des Zielattributs entsprechen.
    _Wertetyp_: [**\<anything>**](/de/docs/Web/SVG/Content_type#anything); _Standardwert_: keiner; _Animierbar_: **nein**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("attributeName")}}-Attribut
- [Animationstiming-Attribute](/de/docs/Web/SVG/Attribute#animation_timing_attributes), einschließlich {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, und {{SVGAttr("fill")}}.
- {{SVGElement("animate")}}
