---
title: orientation
slug: Web/CSS/@media/orientation
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`orientation`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Orientierung des [Viewports](/de/docs/Glossary/viewport) (oder des Seitenkastens bei [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

> [!NOTE]
> Diese Funktion entspricht nicht der _Geräte_-Orientierung. Das Öffnen der Soft-Tastatur auf vielen Geräten im Hochformat wird dazu führen, dass der Viewport breiter als hoch wird, wodurch der Browser Landschaftsstile anstelle von Hochformat verwendet.

## Syntax

Das `orientation`-Feature wird als Schlüsselwortwert aus der unten stehenden Liste spezifiziert.

### Schlüsselwortwerte

- `portrait`
  - : Der Viewport befindet sich in einer Hochformat-Orientierung, d. h. die Höhe ist größer oder gleich der Breite.
- `landscape`
  - : Der Viewport befindet sich in einer Querformat-Orientierung, d. h. die Breite ist größer als die Höhe.

## Beispiele

### Hochformat

In diesem Beispiel haben wir drei Boxen im HTML und verwenden das `orientation`-Media-Feature, um zwischen einem Reihenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

Der Beispielsoutput ist in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe größer als seine Breite ist, sodass die Boxen ein Spaltenlayout erhalten.

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

Dieses Beispiel hat genau denselben Code wie das vorherige Beispiel: Es hat drei Boxen im HTML und verwendet das `orientation`-Media-Feature, um zwischen einem Reihenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

In diesem Beispiel ist jedoch der Beispielsoutput in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe kleiner ist als seine Breite, sodass die Boxen ein Reihenlayout erhalten.

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
