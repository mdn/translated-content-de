---
title: :-moz-window-inactive
slug: Web/CSS/:-moz-window-inactive
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element anspricht, während es in einem inaktiven Fenster ist.

`:-moz-window-inactive` funktioniert auch in HTML-Dokumenten im Inhalt.

> [!NOTE]
> Vor der Hinzufügung dieser Pseudoklasse wurde das Geben unterschiedlicher Stile für Hintergrundfenster erreicht, indem ein Attribut (`active="true"`) auf dem obersten XUL-Chrome-Fenster gesetzt wurde. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel verändert das Erscheinungsbild des Hintergrunds eines Kastens, abhängig davon, ob sein Fenster aktiv ist oder nicht.

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- Verwandte CSS-Selektoren:
  - [`:active`](/de/docs/Web/CSS/:active)

- Die [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) Eigenschaft für regulären DOM und die [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) Eigenschaft für [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Wurzeln.
