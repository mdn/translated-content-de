---
title: <set>
slug: Web/SVG/Reference/Element/set
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<set>`** [SVG](/de/docs/Web/SVG)-Element bietet eine Methode, um den Wert eines Attributs für eine bestimmte Dauer festzulegen.

Es unterstützt alle Attributtypen, einschließlich solcher, die nicht sinnvoll interpoliert werden können, wie String- und Boolean-Werte. Für Attribute, die sinnvoll interpoliert werden können, wird normalerweise das {{SVGElement('animate')}} bevorzugt.

> [!NOTE]
> Das `<set>`-Element ist nicht additiv. Die Attribute {{SVGAttr('additive')}} und {{SVGAttr('accumulate')}} sind nicht erlaubt und werden ignoriert, falls sie angegeben werden.

## Nutzungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("to")}}
  - : Dieses Attribut definiert den Wert, der auf das Zielattribut für die Dauer der Animation angewendet werden soll. Der Wert muss den Anforderungen des Zielattributs entsprechen.
    _Wertetyp_: [**\<anything>**](/de/docs/Web/SVG/Guides/Content_type#anything); _Standardwert_: keiner; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGSetElement`](/de/docs/Web/API/SVGSetElement)-Schnittstelle.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("attributeName")}}-Attribut
- [Animationstiming-Attribute](/de/docs/Web/SVG/Reference/Attribute#animation_timing_attributes), einschließlich {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, und {{SVGAttr("fill")}}.
- {{SVGElement("animate")}}
