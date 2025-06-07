---
title: <defs>
slug: Web/SVG/Reference/Element/defs
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<defs>`**-Element [SVG](/de/docs/Web/SVG) wird verwendet, um grafische Objekte zu speichern, die zu einem späteren Zeitpunkt genutzt werden. Objekte, die innerhalb eines `<defs>`-Elements erstellt werden, werden nicht direkt gerendert. Um sie anzuzeigen, müssen Sie diese referenzieren (zum Beispiel mit einem {{SVGElement("use")}}-Element).

Grafische Objekte können von überall referenziert werden. Die Definition dieser Objekte innerhalb eines `<defs>`-Elements fördert jedoch das Verständnis des SVG-Inhalts und ist vorteilhaft für die allgemeine Zugänglichkeit des Dokuments.

## Verwendungskontext

{{svginfo}}

## Attribute

Dieses Element enthält nur globale Attribute.

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGDefsElement`](/de/docs/Web/API/SVGDefsElement)-Schnittstelle.

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
  <!-- Some graphical objects to use -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- using my graphical objects -->
  <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
