---
title: :-moz-window-inactive
slug: Web/CSS/Reference/Selectors/:-moz-window-inactive
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element anspricht, während es sich in einem inaktiven Fenster befindet.

`:-moz-window-inactive` funktioniert auch in HTML-Dokumenten.

> [!NOTE]
> Vor der Einführung dieser Pseudoklasse wurde das Anwenden unterschiedlicher Stile für Hintergrundfenster erreicht, indem ein Attribut (`active="true"`) am obersten XUL-Chrome-Fenster gesetzt wurde. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel ändert das Aussehen des Hintergrunds eines Kastens abhängig davon, ob sein Fenster aktiv ist oder nicht.

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

Das Ergebnis dieses Codes wird unten gezeigt. Sie können dies auch als {{LiveSampleLink('Beispiele', 'separate Seite')}} ansehen.

{{EmbedLiveSample('Beispiele', 220, 220)}}

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- Verwandte CSS-Selektoren:
  - [`:active`](/de/docs/Web/CSS/Reference/Selectors/:active)

- Die [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)-Eigenschaft für reguläre DOMs und die [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement)-Eigenschaft für [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Wurzeln.
