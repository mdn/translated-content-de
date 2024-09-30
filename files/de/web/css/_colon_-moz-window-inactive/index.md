---
title: ":-moz-window-inactive"
slug: Web/CSS/:-moz-window-inactive
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-window-inactive`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element abgleicht, während es sich in einem inaktiven Fenster befindet.

`:-moz-window-inactive` funktioniert auch in Inhalt-HTML-Dokumenten.

> [!NOTE]
> Vor der Hinzufügung dieser Pseudoklasse wurde das Vergeben unterschiedlicher Stile an Hintergrundfenster durch das Setzen eines Attributs (`active="true"`) auf dem obersten XUL-Chrome-Fenster erreicht. Dieses Attribut wird nicht mehr verwendet.

## Syntax

```css
:-moz-window-inactive {
  /* ... */
}
```

## Beispiele

Dieses Beispiel ändert das Aussehen des Hintergrunds einer Box, abhängig davon, ob ihr Fenster aktiv oder inaktiv ist.

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

Das Ergebnis dieses Codes wird unten angezeigt. Sie können dies auch als {{LiveSampleLink('Examples', 'separate page')}} betrachten.

{{EmbedLiveSample('Examples', 220, 220)}}

## Spezifikationen

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- Verwandte CSS-Selektoren:

  - [`:active`](/de/docs/Web/CSS/:active)

- Die Eigenschaft [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) für reguläre DOMs und die Eigenschaft [`ShadowRoot.activeElement`](/de/docs/Web/API/ShadowRoot/activeElement) für Wurzeln des [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM).
