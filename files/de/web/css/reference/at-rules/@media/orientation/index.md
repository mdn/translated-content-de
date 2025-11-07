---
title: orientation
slug: Web/CSS/Reference/At-rules/@media/orientation
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`orientation`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) kann verwendet werden, um die Ausrichtung des {{Glossary("viewport", "Viewports")}} (oder des Seitenbereichs für [Seitenmedien](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

> [!NOTE]
> Diese Funktion entspricht nicht der _Geräte_-Ausrichtung. Das Öffnen der Soft-Tastatur auf vielen Geräten im Hochformat führt dazu, dass der Viewport breiter als hoch wird, was dazu führt, dass der Browser Landschaftsstile anstelle von Hochformatstilen verwendet.

## Syntax

Die `orientation`-Funktion wird als ein Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

### Schlüsselwortwerte

- `portrait`
  - : Der Viewport ist im Hochformat, d. h. die Höhe ist größer als oder gleich der Breite.
- `landscape`
  - : Der Viewport ist im Querformat, d. h. die Breite ist größer als die Höhe.

## Beispiele

### Hochformatausrichtung

In diesem Beispiel haben wir drei Boxen im HTML und verwenden die `orientation`-Medienfunktion, um zwischen einem Reihenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

Der Beispieloutput ist in einem {{HTMLElement("iframe")}} eingebettet, dessen Höhe größer ist als dessen Breite, so dass die Boxen ein Spaltenlayout erhalten.

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

### Querformatausrichtung

Dieses Beispiel hat genau denselben Code wie das vorherige Beispiel: Es hat drei Boxen im HTML und verwendet die `orientation`-Medienfunktion, um zwischen einem Reihenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

In diesem Beispiel jedoch, ist der Beispieloutput in einem {{HTMLElement("iframe")}} eingebettet, dessen Höhe kleiner ist als dessen Breite, so dass die Boxen ein Reihenlayout erhalten.

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
