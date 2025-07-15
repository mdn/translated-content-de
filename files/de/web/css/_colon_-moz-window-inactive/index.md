---
title: :-moz-window-inactive
slug: Web/CSS/:-moz-window-inactive
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die jedes Element abgleicht, während es sich in einem inaktiven Fenster befindet.

`:-moz-window-inactive` funktioniert auch in HTML-Dokumenten.

> [!NOTE]
> Vor der Einführung dieser Pseudoklasse wurden unterschiedliche Stile für Hintergrundfenster erreicht, indem ein Attribut (`active="true"`) auf das XUL-Chromfenster der obersten Ebene gesetzt wurde. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel ändert das Erscheinungsbild des Hintergrundes einer Box, abhängig davon, ob das Fenster aktiv ist oder nicht.

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

Das Ergebnis dieses Codes wird unten gezeigt. Sie können dies auch als {{LiveSampleLink('Examples', 'separate page')}} betrachten.

{{EmbedLiveSample('Examples', 220, 220)}}

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- Verwandte CSS-Selektoren:
  - [`:active`](/de/docs/Web/CSS/:active)

- Die [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)-Eigenschaft für reguläre DOMs und die [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement)-Eigenschaft für [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Wurzeln.
