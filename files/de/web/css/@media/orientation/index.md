---
title: Orientierung
slug: Web/CSS/@media/orientation
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`orientation`** [CSS](/de/docs/Web/CSS)-[Medienfunktion](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Ausrichtung des {{glossary("viewport")}} (oder des Seitenkastens für [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

> [!NOTE]
> Diese Funktion entspricht nicht der _Geräte_-Ausrichtung. Das Öffnen der virtuellen Tastatur auf vielen Geräten in Hochformat-Ausrichtung kann dazu führen, dass das Viewport breiter wird als es hoch ist, wodurch der Browser anstelle von Hochformat-Styles, Querformat-Styles verwendet.

## Syntax

Die `orientation`-Funktion wird als Schlüsselwortwert angegeben, der aus der unten stehenden Liste ausgewählt wird.

### Schlüsselwortwerte

- `portrait`
  - : Das Viewport ist im Hochformat, d. h., die Höhe ist größer als oder gleich der Breite.
- `landscape`
  - : Das Viewport ist im Querformat, d. h., die Breite ist größer als die Höhe.

## Beispiele

### Hochformat-Ausrichtung

In diesem Beispiel haben wir drei Boxen im HTML und verwenden die `orientation`-Medienfunktion, um zwischen einem Zeilenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

Die Beispielausgabe ist in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe größer ist als seine Breite, sodass die Boxen ein Spaltenlayout erhalten.

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

Dieses Beispiel hat genau denselben Code wie das vorherige Beispiel: Es hat drei Boxen im HTML und verwendet die `orientation`-Medienfunktion, um zwischen einem Zeilenlayout (im Querformat) und einem Spaltenlayout (im Hochformat) zu wechseln.

In diesem Beispiel ist die Beispielausgabe jedoch in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe kleiner ist als seine Breite, sodass die Boxen ein Zeilenlayout erhalten.

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

## Kompatibilität der Browser

{{Compat}}
