---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
l10n:
  sourceCommit: fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{CSSRef}}

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Text innerhalb eines Elements umgebrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch mit der {{CSSXRef("text-wrap")}} Kurzform gesetzt und zurückgesetzt werden.

> [!NOTE]
> Der Name dieser Eigenschaft ist ein Platzhalter, bis die CSSWG einen besseren Namen findet.

{{EmbedInteractiveExample("pages/css/text-wrap-mode.html")}}

## Syntax

```css
/* Keyword values */
text-wrap-style: wrap;
text-wrap-style: nowrap;

/* Global values */
text-wrap-style: inherit;
text-wrap-style: initial;
text-wrap-style: revert;
text-wrap-style: revert-layer;
text-wrap-style: unset;
```

## Werte

Diese Eigenschaft gibt an, ob Zeilen bei nicht erzwungenen weichen Umbruchmöglichkeiten umgebrochen werden dürfen. Mögliche Werte:

- `wrap`
  - : Der Text wird an geeigneten Stellen (zum Beispiel an Leerzeichen in Sprachen wie Englisch, die Leerzeichentrenner verwenden) umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Der Text wird nicht über Zeilen umgebrochen. Er wird sein beinhaltendes Element überlaufen, anstatt auf eine neue Zeile zu brechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

> [!NOTE]
> Überprüfen Sie die Browser-Unterstützung für diese Eigenschaft.

### Inhalt umbrechen

Die Standardeinstellung ist, den Inhalt umzubrechen, daher ist die `text-wrap-mode` Eigenschaft nicht notwendig. In diesem Beispiel läuft der Inhalt auf die nächste Zeile über, sodass er in das Kästchen passt. Die letzte Zeile ist länger als das befindliche Kästchen, sodass sie überläuft.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: wrap;
}
```

#### Ergebnis

{{EmbedLiveSample("wrapping_content", "100%", 250)}}

### Kein Umbruch des Inhalts

In diesem Beispiel wird der Inhalt **nicht** auf die nächste Zeile übergehen, sodass er in das Kästchen passt, da dem Inhalt ausdrücklich gesagt wurde, nicht mit `text-wrap-mode: nowrap;` umgebrochen zu werden. Der Inhalt ist länger als das beinhaltende Kästchen, sodass er überläuft.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 64px;
  box-sizing: border-box;
  border: 4px solid black;
  padding: 0px 3px;
  width: 223px;
  text-wrap-mode: nowrap;
}
```

#### Ergebnis

{{EmbedLiveSample("nowrapping_content", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
