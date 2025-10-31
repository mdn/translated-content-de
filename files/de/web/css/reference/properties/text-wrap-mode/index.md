---
title: text-wrap-mode
slug: Web/CSS/Reference/Properties/text-wrap-mode
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch mithilfe der Kurzschrift {{CSSXRef("text-wrap")}} oder der Kurzschrift {{CSSXRef("white-space")}} gesetzt und zurückgesetzt werden.

> [!NOTE]
> Die Eigenschaften {{CSSxRef("white-space-collapse")}} und `text-wrap-mode` können zusammen mithilfe der Kurzschrift-Eigenschaft {{CSSxRef("white-space")}} deklariert werden.

> [!NOTE]
> Der Name dieser Eigenschaft ist ein Platzhalter, bis die CSSWG einen besseren Namen gefunden hat.

{{InteractiveExample("CSS Demo: text-wrap-mode")}}

```css interactive-example-choice
text-wrap-mode: wrap;
```

```css interactive-example-choice
text-wrap-mode: nowrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Edit the text in the box:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

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

Diese Eigenschaft gibt an, ob Zeilen bei ungewollten weichen Umbruchmöglichkeiten umgebrochen werden können. Mögliche Werte:

- `wrap`
  - : Text wird bei geeigneten Zeichen (zum Beispiel Leerzeichen, in Sprachen wie Englisch, die Leerzeichen als Trennzeichen verwenden) über Zeilen hinweg umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umgebrochen. Er wird das enthaltende Element überlaufen, anstatt auf einer neuen Zeile zu brechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Umbruch des Inhalts

Die Standardeinstellung ist, den Inhalt so umzubrechen, dass die `text-wrap-mode` Eigenschaft nicht notwendig ist. In diesem Beispiel wird der Inhalt zur nächsten Zeile übergehen, damit er in das Kästchen passt. Die letzte Zeile ist länger als das enthaltende Kästchen, daher gibt es einen Überlauf.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: "Arial", sans-serif;
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

In diesem Beispiel wird der Inhalt **nicht** zur nächsten Zeile übergehen, so dass er in das Kästchen passt, da der Inhalt explizit angewiesen wurde, nicht mit `text-wrap-mode: nowrap;` umgebrochen zu werden. Der Inhalt ist länger als das enthaltende Kästchen und überläuft daher.

#### HTML

```html
<div class="box">CSS IS AWESOME</div>
```

#### CSS

```css
.box {
  font-family: "Arial", sans-serif;
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
