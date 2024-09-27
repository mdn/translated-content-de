---
title: ":-moz-window-inactive"
slug: Web/CSS/:-moz-window-inactive
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die auf jedes Element zutrifft, während es sich in einem inaktiven Fenster befindet.

`:-moz-window-inactive` funktioniert auch in HTML-Dokumenten.

> [!NOTE]
> Vor der Einführung dieser Pseudoklasse wurde das Anpassen von Stilen für Hintergrundfenster erreicht, indem ein Attribut (`active="true"`) auf dem obersten Ebene des XUL-Chromfensters gesetzt wurde. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel ändert das Aussehen des Hintergrunds einer Box, je nachdem, ob ihr Fenster aktiv ist oder nicht.

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

Das Ergebnis dieses Codes wird unten gezeigt. Sie können dies auch als {{LiveSampleLink('Examples', 'separate page')}} ansehen.

{{EmbedLiveSample('Examples', 220, 220)}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- Verwandte CSS-Selektoren:

  - [`:active`](/de/docs/Web/CSS/:active)

- Die [`Document.activeElement`](/de/docs/Web/API/Document/activeElement)-Eigenschaft für reguläre DOMs und die [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement)-Eigenschaft für [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)-Wurzeln.
