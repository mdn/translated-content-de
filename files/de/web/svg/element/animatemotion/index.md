---
title: <animateMotion>
slug: Web/SVG/Element/animateMotion
l10n:
  sourceCommit: b64f587034fbb610fe12ad819b0384f4f4ce1d4f
---

{{SVGRef}}

Das SVG-Element **`<animateMotion>`** bietet eine Möglichkeit, zu definieren, wie sich ein Element entlang eines Bewegungswegs bewegt.

> [!NOTE]
> Um einen vorhandenen Pfad wiederzuverwenden, muss ein {{SVGElement("mpath")}}-Element innerhalb des `<animateMotion>`-Elements verwendet werden, anstelle des {{SVGAttr("path")}}-Attributs.

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
  - : Dieses Attribut gibt an, im Bereich \[0,1], wie weit das Objekt entlang des Pfades für jeden mit {{SVGAttr("keyTimes")}} verbundenen Wertepunkt ist.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number)\*; _Standardwert_: keine; _Animierbar_: **nein**
- {{SVGAttr("path")}}
  - : Dieses Attribut definiert den Bewegungsweg, unter Verwendung derselben Syntax wie das {{SVGAttr('d')}}-Attribut.
    _Werttyp_: **\<string>**; _Standardwert_: keine; _Animierbar_: **nein**
- {{SVGAttr("rotate")}}
  - : Dieses Attribut definiert eine Rotation, die auf das entlang eines Pfades animierte Element angewendet wird, normalerweise um es in die Animationsrichtung zeigen zu lassen.
    _Werttyp_: [**\<number>**](/de/docs/Web/SVG/Content_type#number)|`auto`|`auto-reverse`; _Standardwert_: `0`; _Animierbar_: **nein**

> [!NOTE]
> Für `<animateMotion>` ist der Standardwert für das {{SVGAttr("calcMode")}}-Attribut `paced`.

### Animationsattribute

- [Animation Timing-Attribute](/de/docs/Web/SVG/Attribute#animation_timing_attributes)
  - : {{SVGAttr("begin")}}, {{SVGAttr("dur")}}, {{SVGAttr("end")}}, {{SVGAttr("min")}}, {{SVGAttr("max")}}, {{SVGAttr("restart")}}, {{SVGAttr("repeatCount")}}, {{SVGAttr("repeatDur")}}, {{SVGAttr("fill")}}
- [Animationswert-Attribute](/de/docs/Web/SVG/Attribute#animation_value_attributes)
  - : {{SVGAttr("calcMode")}}, {{SVGAttr("values")}}, {{SVGAttr("keyTimes")}}, {{SVGAttr("keySplines")}}, {{SVGAttr("from")}}, {{SVGAttr("to")}}, {{SVGAttr("by")}}
- [Andere Animationsattribute](/de/docs/Web/SVG/Attribute#animation_attributes)
  - : Besonders erwähnenswert: {{SVGAttr("attributeName")}}, {{SVGAttr("additive")}}, {{SVGAttr("accumulate")}}
- [Animationsereignis-Attribute](/de/docs/Web/SVG/Attribute#event_attributes)
  - : Besonders erwähnenswert: `onbegin`, `onend`, `onrepeat`

## Verwendungsnotizen

Dieses Element implementiert die {{domxref("SVGAnimateMotionElement")}}-Schnittstelle.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGElement("mpath")}}
