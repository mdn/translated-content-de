---
title: text-wrap-mode
slug: Web/CSS/text-wrap-mode
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS) Eigenschaft steuert, ob der Text innerhalb eines Elements umbrochen wird. Die verschiedenen Werte bieten alternative Möglichkeiten, den Inhalt eines Blockelements zu umbrechen. Diese Eigenschaft kann auch mit der {{CSSXRef("text-wrap")}} oder {{CSSXRef("white-space")}} Kurzform gesetzt und zurückgesetzt werden.

> [!NOTE]
> Die Eigenschaften {{CSSxRef("white-space-collapse")}} und `text-wrap-mode` können gemeinsam mit der {{CSSxRef("white-space")}} Kurzform-Eigenschaft deklariert werden.

> [!NOTE]
> Der Name dieser Eigenschaft ist ein Platzhalter, da die CSSWG einen besseren Namen sucht.

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

Diese Eigenschaft gibt an, ob Zeilen an nicht erzwungenen weichen Umbruchmöglichkeiten umbrechen dürfen. Mögliche Werte:

- `wrap`
  - : Der Text wird an geeigneten Zeichen (z. B. Leerzeichen, in Sprachen wie Englisch, die Leerzeichentrenner verwenden) umbrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Der Text wird nicht über Zeilen umbrochen. Er wird das enthaltende Element überlaufen, anstatt in eine neue Zeile zu wechseln.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Inhalt umbrechen

Die Standardeinstellung ist, den Inhalt umzubrechen, sodass die `text-wrap-mode`-Eigenschaft nicht notwendig ist. In diesem Beispiel fließt der Inhalt so über in die nächste Zeile, dass er in das Feld passt; die letzte Zeile ist länger als das enthaltende Feld und läuft über.

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

In diesem Beispiel wird der Inhalt **nicht** in die nächste Zeile umbrochen, sodass er in das Feld passt, da dem Inhalt ausdrücklich mitgeteilt wurde, nicht mit `text-wrap-mode: nowrap;` umbrochen zu werden. Der Inhalt ist länger als das enthaltende Feld und läuft über.

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
