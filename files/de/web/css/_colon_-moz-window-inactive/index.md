---
title: ":-moz-window-inactive"
slug: Web/CSS/:-moz-window-inactive
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS)-[Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die jedes Element auswählt, während es sich in einem inaktiven Fenster befindet.

`:-moz-window-inactive` funktioniert auch in HTML-Dokumenten.

> [!NOTE]
> Vor der Einführung dieser Pseudo-Klasse wurde das Anwenden verschiedener Stile für Hintergrundfenster durch das Setzen eines Attributs (`active="true"`) im obersten XUL-Chrom-Fenster erreicht. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel ändert das Erscheinungsbild des Hintergrunds einer Box, abhängig davon, ob sich ihr Fenster aktiv oder inaktiv befindet.

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

Das Ergebnis dieses Codes wird unten gezeigt. Sie können dies auch auf einer {{LiveSampleLink('Examples', 'separate page')}} ansehen.

{{EmbedLiveSample('Examples', 220, 220)}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- Verwandte CSS-Selektoren:

  - [`:active`](/de/docs/Web/CSS/:active)

- Die [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)-Eigenschaft für regulären DOM und die [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement)-Eigenschaft für [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Root-Elemente.
