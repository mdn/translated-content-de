---
title: orientation
slug: Web/CSS/Reference/At-rules/@media/orientation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`orientation`** [CSS](/de/docs/Web/CSS) [Media-Abfrage](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Ausrichtung des {{Glossary("viewport", "Viewports")}} (oder des Seitenbereichs bei [gedruckten Medien](/de/docs/Web/CSS/Guides/Paged_media)) zu testen.

> [!NOTE]
> Diese Funktion entspricht nicht der Ausrichtung des _Geräts_. Das Öffnen der virtuellen Tastatur auf vielen Geräten im Hochformat führt dazu, dass der Viewport breiter als hoch wird, wodurch der Browser anstatt Hochformat-Stile die Querformat-Stile verwendet.

## Syntax

Das `orientation`-Feature wird als Schlüsselwort angegeben, das aus der untenstehenden Liste ausgewählt wird.

### Schlüsselwort-Werte

- `portrait`
  - : Der Viewport ist in Hochformat-Ausrichtung, d.h. die Höhe ist größer oder gleich der Breite.
- `landscape`
  - : Der Viewport ist in Querformat-Ausrichtung, d.h. die Breite ist größer als die Höhe.

## Beispiele

### Hochformat-Ausrichtung

In diesem Beispiel haben wir drei Boxen im HTML und verwenden das `orientation`-Media-Feature, um zwischen einem Reihenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

Der Beispielausgabe ist in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe größer als seine Breite ist, sodass die Boxen ein Spaltenlayout erhalten.

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

### Querformat-Ausrichtung

Dieses Beispiel hat genau denselben Code wie das vorherige Beispiel: Es hat drei Boxen im HTML und verwendet das `orientation`-Media-Feature, um zwischen einem Reihenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

In diesem Beispiel ist die Beispielausgabe jedoch in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe kleiner als seine Breite ist, sodass die Boxen ein Reihenlayout erhalten.

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
