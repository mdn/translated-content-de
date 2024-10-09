---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements zu umbrechen. Sie kann auch mit der {{CSSXRef("text-wrap")}}-Kurzschreibweise gesetzt und zurückgesetzt werden.

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

Diese Eigenschaft legt fest, ob Zeilen bei ungezungenen weichen Umbruchmöglichkeiten umgebrochen werden dürfen. Mögliche Werte:

- `wrap`
  - : Text wird bei geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden) über Zeilen hinweg umbrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umbrochen. Er wird über sein enthaltendes Element hinaus fließen, anstatt auf eine neue Zeile zu brechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

> [!NOTE]
> Überprüfen Sie die Browser-Kompatibilität für diese Eigenschaft.

### Inhalt umbrechen

Die Standardeinstellung ist, den Inhalt umzubrechen, daher ist die `text-wrap-mode`-Eigenschaft nicht notwendig. In diesem Beispiel fließt der Inhalt zur nächsten Zeile über, damit er in die Box passt, die letzte Zeile ist länger als die enthaltende Box, sodass sie überläuft.

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

### Inhalt nicht umbrechen

In diesem Beispiel fließt der Inhalt **nicht** zur nächsten Zeile über, sodass er in die Box passt, da dem Inhalt ausdrücklich gesagt wurde, nicht mit `text-wrap-mode: nowrap;` umgebrochen zu werden, der Inhalt ist länger als die enthaltende Box, sodass er überläuft.

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

{{EmbedLiveSample("not_wrapping_content", "100%",100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
