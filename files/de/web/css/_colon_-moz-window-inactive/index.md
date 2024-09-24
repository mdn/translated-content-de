---
title: ":-moz-window-inactive"
slug: Web/CSS/:-moz-window-inactive
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die mit jedem Element übereinstimmt, während es sich in einem inaktiven Fenster befindet.

`:-moz-window-inactive` funktioniert auch in Inhalts-HTML-Dokumenten.

> [!NOTE]
> Vor der Einführung dieser Pseudoklasse wurde das Geben von unterschiedlichen Stilen für Hintergrundfenster durch Setzen eines Attributs (`active="true"`) auf dem obersten XUL-Chrome-Fenster erreicht. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel ändert das Erscheinungsbild des Hintergrunds einer Box, je nachdem, ob ihr Fenster aktiv ist oder nicht.

### HTML

```html
<div id="mybox">
  <p>This is a box!</p>
</div>
```

### CSS

```css
#mybox {
  background: linear-gradient(to bottom, yellow, cyan);
  width: 200px;
  height: 200px;
}

#mybox:-moz-window-inactive {
  background: cyan;
}
```

### Ergebnis

Das Ergebnis dieses Codes wird unten gezeigt. Sie können dies auch als {{LiveSampleLink('Examples', 'separate page')}} anzeigen.

{{EmbedLiveSample('Examples', 220, 220)}}

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- Verwandte CSS-Selektoren:

  - [`:active`](/de/docs/Web/CSS/:active)

- Die {{domxref("Document.activeElement")}} Eigenschaft für reguläre DOMs und die {{domxref("ShadowRoot.activeElement")}} Eigenschaft für [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) Wurzeln.
