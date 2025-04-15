---
title: <animateMotion>
slug: Web/SVG/Reference/Element/animateMotion
l10n:
  sourceCommit: 34c204f8f6c3f7ac60ebb23fca9798680aee9956
---

Das **`<animateMotion>`** [SVG](/de/docs/Web/SVG)-Element bietet eine Möglichkeit, zu definieren, wie sich ein Element entlang eines Bewegungspfades bewegt.

> [!NOTE]
> Um einen vorhandenen Pfad erneut zu verwenden, ist es notwendig, ein {{SVGElement("mpath")}}-Element innerhalb des `<animateMotion>`-Elements anstelle des {{SVGAttr("path")}}-Attributs zu verwenden.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
  display: block;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("keyPoints")}}
  - : Dieses Attribut gibt im Bereich \[0,1] an, wie weit das Objekt entlang des Pfades für jeden mit {{SVGAttr("keyTimes")}} verbundenen Wert fortgeschritten ist.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number)\*; _Standardwert_: keiner; _Animierbar_: **nein**
- {{SVGAttr("path")}}
  - : Dieses Attribut definiert den Pfad der Bewegung und verwendet die gleiche Syntax wie das {{SVGAttr('d')}}-Attribut.
    _Wertetyp_: **\<string>**; _Standardwert_: keiner; _Animierbar_: **nein**
- {{SVGAttr("rotate")}}
  - : Dieses Attribut definiert eine Drehung, die auf das entlang eines Pfades animierte Element angewendet wird, normalerweise, um es in Richtung der Animation zeigen zu lassen.
    _Wertetyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number) | `auto` | `auto-reverse`; _Standardwert_: `0`; _Animierbar_: **nein**

> [!NOTE]
> Für `<animateMotion>` ist der Standardwert für das {{SVGAttr("calcMode")}}-Attribut `paced`.

### Animationsattribute

- [Animationszeit-Attribute](/de/docs/Web/SVG/Reference/Attribute#animation_timing_attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [Animationswert-Attribute](/de/docs/Web/SVG/Reference/Attribute#animation_value_attributes)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [Andere Animationsattribute](/de/docs/Web/SVG/Reference/Attribute#animation_attributes)
  - : Besonders bemerkenswert: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [Animationsevent-Attribute](/de/docs/Web/SVG/Reference/Attribute#event_attributes)
  - : Besonders bemerkenswert: `onbegin`, `onend`, `onrepeat`

## Verwendungshinweise

Dieses Element implementiert die [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement)-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("mpath")}}
