---
title: <defs>
slug: Web/SVG/Reference/Element/defs
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<defs>`** [SVG](/de/docs/Web/SVG)-Element wird verwendet, um grafische Objekte zu speichern, die später verwendet werden sollen. Objekte, die innerhalb eines `<defs>`-Elements erstellt werden, werden nicht direkt dargestellt. Um sie anzuzeigen, müssen Sie sie referenzieren (zum Beispiel mit einem {{SVGElement("use")}}-Element).

Grafische Objekte können von überall referenziert werden, aber das Definieren dieser Objekte innerhalb eines `<defs>`-Elements fördert die Verständlichkeit des SVG-Inhalts und ist für die Zugänglichkeit des Dokuments insgesamt vorteilhaft.

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

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
