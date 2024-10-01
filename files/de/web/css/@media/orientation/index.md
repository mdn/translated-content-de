---
title: orientation
slug: Web/CSS/@media/orientation
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`orientation`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) kann verwendet werden, um die Ausrichtung des {{Glossary("viewport", "Viewports")}} (oder des Seitenrahmens bei [paged media](/de/docs/Web/CSS/CSS_paged_media)) zu testen.

> [!NOTE]
> Diese Funktion entspricht nicht der _Geräte_-Ausrichtung. Das Öffnen der Soft-Tastatur auf vielen Geräten im Hochformat führt dazu, dass der Viewport breiter als hoch wird, wodurch der Browser Landschaftsstile anstelle von Hochformat verwendet.

## Syntax

Das Feature `orientation` wird als Schlüsselwortwert, ausgewählt aus der folgenden Liste, angegeben.

### Schlüsselwortwerte

- `portrait`
  - : Der Viewport befindet sich in Hochformat-Ausrichtung, d.h. die Höhe ist größer oder gleich der Breite.
- `landscape`
  - : Der Viewport befindet sich in Querformat-Ausrichtung, d.h. die Breite ist größer als die Höhe.

## Beispiele

### Hochformat-Ausrichtung

In diesem Beispiel haben wir drei Boxen im HTML und verwenden das `orientation` Media-Feature, um zwischen einer Zeilen-Layout (im Querformat) und einem Spalten-Layout (im Hochformat) zu wechseln.

Die Beispielausgabe ist in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe größer als seine Breite ist, sodass die Boxen ein Spalten-Layout erhalten.

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

Dieses Beispiel hat genau denselben Code wie das vorherige Beispiel: Es hat drei Boxen im HTML und verwendet das `orientation` Media-Feature, um zwischen einer Zeilen-Layout (im Querformat) und einem Spalten-Layout (im Hochformat) zu wechseln.

Allerdings ist in diesem Beispiel die Beispielausgabe in ein {{HTMLElement("iframe")}} eingebettet, dessen Höhe kleiner als seine Breite ist, sodass die Boxen ein Zeilen-Layout erhalten.

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
