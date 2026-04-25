---
title: "`:-moz-window-inactive` CSS-Pseudoklasse"
short-title: :-moz-window-inactive
slug: Web/CSS/Reference/Selectors/:-moz-window-inactive
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element erkennt, während es in einem inaktiven Fenster ist.

`:-moz-window-inactive` funktioniert auch in HTML-Inhaltsdokumenten.

> [!NOTE]
> Vor der Einführung dieser Pseudoklasse wurde das Geben unterschiedlicher Stile für Hintergrundfenster durch Setzen eines Attributs (`active="true"`) im obersten XUL-Chromfenster erreicht. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel ändert das Aussehen des Hintergrunds eines Kastens je nachdem, ob sein Fenster aktiv oder nicht aktiv ist.

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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- Verwandte CSS-Selektoren:
  - {{cssxref(":active")}}

- Die [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)-Eigenschaft für reguläre DOMs und die [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement)-Eigenschaft für [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Wurzeln.
