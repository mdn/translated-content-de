---
title: :-moz-window-inactive
slug: Web/CSS/:-moz-window-inactive
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die auf jedes Element angewendet werden kann, während es sich in einem inaktiven Fenster befindet.

`:-moz-window-inactive` funktioniert auch in HTML-Dokumenten.

> [!NOTE]
> Vor der Einführung dieser Pseudoklasse war es möglich, verschiedenen Hintergrundfenstern unterschiedliche Stile zu geben, indem ein Attribut (`active="true"`) auf das oberste XUL-Chrome-Fenster gesetzt wurde. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

In diesem Beispiel wird das Aussehen des Hintergrunds einer Box je nach Aktivität des Fensters geändert.

### HTML

```html
<div id="my-box">
  <p>This is a box!</p>
</div>
```

### CSS

```css
#my-box {
  background: linear-gradient(to bottom, yellow, cyan);
  width: 200px;
  height: 200px;
}

#my-box:-moz-window-inactive {
  background: cyan;
}
```

### Ergebnis

Das Ergebnis dieses Codes wird unten gezeigt. Sie können dies auch als {{LiveSampleLink('Examples', 'separate page')}} ansehen.

{{EmbedLiveSample('Examples', 220, 220)}}

## Spezifikationen

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- Verwandte CSS-Selektoren:

  - [`:active`](/de/docs/Web/CSS/:active)

- Die [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) Eigenschaft für das reguläre DOM und die [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) Eigenschaft für [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Wurzeln.
