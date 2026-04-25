---
title: "`orientation` CSS-Media-Feature"
short-title: orientation
slug: Web/CSS/Reference/At-rules/@media/orientation
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Die **`orientation`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Ausrichtung des {{Glossary("viewport", "Viewports")}} (oder der Seitenbox bei [seitengesteuerten Medien](/de/docs/Web/CSS/Guides/Paged_media)) zu testen.

> [!NOTE]
> Diese Funktion entspricht nicht der _Geräte_-Ausrichtung. Das Öffnen der Soft-Tastatur auf vielen Geräten im Hochformat führt dazu, dass der Viewport breiter wird als hoch, wodurch der Browser Landschaftsstile anstelle von Hochformat verwendet.

## Syntax

Die `orientation`-Feature wird als ein Schlüsselwortwert angegeben, der aus der untenstehenden Liste ausgewählt wird.

### Schlüsselwortwerte

- `portrait`
  - : Der Viewport ist im Hochformat, das heißt, die Höhe ist größer oder gleich der Breite.
- `landscape`
  - : Der Viewport ist im Querformat, das heißt, die Breite ist größer als die Höhe.

## Beispiele

### Hochformat

In diesem Beispiel haben wir drei Boxen im HTML und verwenden die `orientation`-Media-Feature, um zwischen einer Zeilenanordnung (im Querformat) und einer Spaltenanordnung (im Hochformat) zu wechseln.

Die Beispielausgabe ist in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe größer ist als seine Breite, sodass die Boxen eine Spaltenanordnung erhalten.

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

Dieses Beispiel hat exakt den gleichen Code wie das vorherige Beispiel: Es hat drei Boxen im HTML und verwendet die `orientation`-Media-Feature, um zwischen einer Zeilenanordnung (im Querformat) und einer Spaltenanordnung (im Hochformat) zu wechseln.

In diesem Beispiel ist die Beispielausgabe jedoch in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe kleiner ist als seine Breite, sodass die Boxen eine Zeilenanordnung erhalten.

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
