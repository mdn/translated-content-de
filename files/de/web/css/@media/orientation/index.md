---
title: orientation
slug: Web/CSS/@media/orientation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`orientation`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Ausrichtung des {{Glossary("viewport", "Viewports")}} (oder des Seitenkastens für [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

> [!NOTE]
> Diese Funktion entspricht nicht der _Geräte_-Ausrichtung. Das Öffnen der virtuellen Tastatur auf vielen Geräten im Hochformat verursacht, dass der Viewport breiter als hoch wird, wodurch der Browser Landschafts-Stile anstelle von Hochformat-Stilen verwendet.

## Syntax

Das `orientation` Merkmal wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

### Schlüsselwortwerte

- `portrait`
  - : Der Viewport befindet sich im Hochformat, d.h. die Höhe ist größer als oder gleich der Breite.
- `landscape`
  - : Der Viewport befindet sich im Querformat, d.h. die Breite ist größer als die Höhe.

## Beispiele

### Hochformat

In diesem Beispiel haben wir drei Kästchen im HTML und verwenden das `orientation` Medienmerkmal, um zwischen einem Zeilen-Layout (im Querformat) und einem Spalten-Layout (im Hochformat) zu wechseln.

Die Beispielausgabe ist in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe größer als seine Breite ist, sodass die Kästchen ein Spalten-Layout erhalten.

#### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Portrait orientation", "", "800")}}

### Querformat

Dieses Beispiel hat genau denselben Code wie das vorherige Beispiel: Es hat drei Kästchen im HTML und verwendet das `orientation` Medienmerkmal, um zwischen einem Zeilen-Layout (im Querformat) und einem Spalten-Layout (im Hochformat) zu wechseln.

In diesem Beispiel jedoch ist die Beispielausgabe in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe kleiner als seine Breite ist, sodass die Kästchen ein Zeilen-Layout erhalten.

#### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

#### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  padding: 0.5rem;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

{{EmbedLiveSample("Landscape orientation", "", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
