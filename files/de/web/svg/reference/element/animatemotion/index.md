---
title: <animateMotion>
slug: Web/SVG/Reference/Element/animateMotion
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<animateMotion>`** [SVG](/de/docs/Web/SVG)-Element bietet eine Möglichkeit, zu definieren, wie sich ein Element entlang eines Bewegungswegs bewegt.

> [!NOTE]
> Um einen vorhandenen Pfad erneut zu verwenden, ist es notwendig, ein {{SVGElement("mpath")}}-Element innerhalb des `<animateMotion>`-Elements zu verwenden, anstelle des {{SVGAttr("path")}}-Attributs.

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
  - : Dieses Attribut gibt im Bereich \[0,1] an, wie weit das Objekt entlang des Pfades für jeden mit {{SVGAttr("keyTimes")}} assoziierten Wert ist.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number)\*; _Standardwert_: keiner; _Animierbar_: **nein**
- {{SVGAttr("path")}}
  - : Dieses Attribut definiert den Pfad der Bewegung, unter Verwendung der gleichen Syntax wie das {{SVGAttr('d')}}-Attribut.
    _Werttyp_: **\<string>**; _Standardwert_: keiner; _Animierbar_: **nein**
- {{SVGAttr("rotate")}}
  - : Dieses Attribut definiert eine Drehung, die auf das entlang eines Pfades animierte Element angewendet wird, normalerweise um es in die Richtung der Animation zu zeigen.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Guides/Content_type#number)|`auto`|`auto-reverse`; _Standardwert_: `0`; _Animierbar_: **nein**

> [!NOTE]
> Für `<animateMotion>` ist der Standardwert für das {{SVGAttr("calcMode")}}-Attribut `paced`.

### Animationsattribute

- [Animation timing attributes](/de/docs/Web/SVG/Reference/Attribute#animation_timing_attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [Animation value attributes](/de/docs/Web/SVG/Reference/Attribute#animation_value_attributes)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [Andere Animationsattribute](/de/docs/Web/SVG/Reference/Attribute#animation_attributes)
  - : Insbesondere: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [Attributanimationen Ereignisse](/de/docs/Web/SVG/Reference/Attribute#event_attributes)
  - : Insbesondere: `onbegin`, `onend`, `onrepeat`

## Verwendungshinweise

Dieses Element implementiert das [`SVGAnimateMotionElement`](/de/docs/Web/API/SVGAnimateMotionElement)-Interface.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("mpath")}}
