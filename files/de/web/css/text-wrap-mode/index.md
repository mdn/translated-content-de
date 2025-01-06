---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
l10n:
  sourceCommit: 4809e8217288dc7e1372d5c74140ca6661673206
---

{{CSSRef}}

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Es kann auch über die {{CSSXRef("text-wrap")}}-Kurzform oder die {{CSSXRef("white-space")}}-Kurzform festgelegt und zurückgesetzt werden.

> [!NOTE]
> Die Eigenschaften {{CSSxRef("white-space-collapse")}} und `text-wrap-mode` können gemeinsam mit der {{CSSxRef("white-space")}}-Kurzformeigenschaft deklariert werden.

> [!NOTE]
> Der Name dieser Eigenschaft ist ein Platzhalter, bis die CSSWG einen besseren Namen findet.

{{EmbedInteractiveExample("pages/css/text-wrap-mode.html")}}

## Syntax

```css
/* Keyword values */
text-wrap-mode: wrap;
text-wrap-mode: nowrap;

/* Global values */
text-wrap-mode: inherit;
text-wrap-mode: initial;
text-wrap-mode: revert;
text-wrap-mode: revert-layer;
text-wrap-mode: unset;
```

## Werte

Diese Eigenschaft gibt an, ob Zeilen bei unbedingten weichen Umbruchmöglichkeiten umbrochen werden dürfen. Mögliche Werte:

- `wrap`
  - : Text wird bei geeigneten Zeichen (zum Beispiel Leerzeichen in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden) umgebrochen, um Überflüssiges zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen umgebrochen. Er wird über das enthaltene Element hinausgehen, anstatt in eine neue Zeile umzubrechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Inhalt umbrechen

Die Standardeinstellung ist, den Inhalt umzubrechen, sodass die `text-wrap-mode`-Eigenschaft nicht notwendig ist. In diesem Beispiel wird der Inhalt auf die nächste Zeile übergehen, sodass er in das Kästchen passt. Die letzte Zeile ist länger als das enthaltene Kästchen und überläuft daher.

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

In diesem Beispiel wird der Inhalt **nicht** auf die nächste Zeile übergehen, damit er in das Kästchen passt, da dem Inhalt ausdrücklich mitgeteilt wurde, dass er nicht umbrochen werden soll mit `text-wrap-mode: nowrap;`, der Inhalt ist länger als das enthaltene Kästchen und läuft daher über.

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
