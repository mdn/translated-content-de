---
title: <defs>
slug: Web/SVG/Element/defs
l10n:
  sourceCommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

{{SVGRef}}

Das **`<defs>`**-Element wird verwendet, um grafische Objekte zu speichern, die zu einem späteren Zeitpunkt verwendet werden. Objekte, die innerhalb eines `<defs>`-Elements erstellt werden, werden nicht direkt gerendert. Um sie anzuzeigen, müssen Sie auf sie verweisen (z.B. mit einem {{SVGElement("use")}}-Element).

Grafische Objekte können von überall aus referenziert werden. Dennoch fördert die Definition dieser Objekte innerhalb eines `<defs>`-Elements das Verständnis des SVG-Inhalts und ist vorteilhaft für die allgemeine Zugänglichkeit des Dokuments.

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
  <!-- Einige grafische Objekte zum Verwenden -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- Verwendung meiner grafischen Objekte -->
  <use x="5" y="5" href="#myCircle" fill="url('#myGradient')" />
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
