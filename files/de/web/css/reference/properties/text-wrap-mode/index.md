---
title: "`text-wrap-mode` CSS property"
short-title: text-wrap-mode
slug: Web/CSS/Reference/Properties/text-wrap-mode
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements umzubrechen. Sie kann auch mit der Kurzschreibweise {{CSSXRef("text-wrap")}} oder {{CSSXRef("white-space")}} gesetzt und zurückgesetzt werden.

> [!NOTE]
> Die Eigenschaften {{CSSxRef("white-space-collapse")}} und `text-wrap-mode` können gemeinsam mit der Kurzschreibweise {{CSSxRef("white-space")}} deklariert werden.

> [!NOTE]
> Der Name dieser Eigenschaft ist ein Platzhalter, bis die CSSWG einen besseren Namen findet.

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
      <p contenteditable>
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

Diese Eigenschaft gibt an, ob Zeilen bei ungezogenen weichen Umbrüchen umgebrochen werden können. Mögliche Werte:

- `wrap`
  - : Text wird bei geeigneten Zeichen (beispielsweise Leerzeichen in Sprachen wie Englisch, die Leerzeichentrennung verwenden) umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen umgebrochen. Er wird das enthaltene Element überlaufen, anstatt in eine neue Zeile zu brechen.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Inhalt umbrechen

Die Standardeinstellung ist, den Inhalt umzubrechen, sodass die `text-wrap-mode`-Eigenschaft nicht notwendig ist. In diesem Beispiel wird der Inhalt in die nächste Zeile übergehen, damit er in das Kästchen passt. Die letzte Zeile ist länger als das umgebende Kästchen und läuft über.

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

### Inhalt nicht umbrechen

In diesem Beispiel wird der Inhalt **nicht** in die nächste Zeile übergehen, damit er in das Kästchen passt, da der Inhalt explizit angewiesen wurde, nicht mit `text-wrap-mode: nowrap;` umzubrechen. Der Inhalt ist länger als das umgebende Kästchen und läuft über.

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

{{EmbedLiveSample("not_wrapping_content", "100%", 100)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
