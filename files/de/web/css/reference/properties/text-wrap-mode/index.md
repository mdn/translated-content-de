---
title: "`text-wrap-mode` CSS property"
short-title: text-wrap-mode
slug: Web/CSS/Reference/Properties/text-wrap-mode
l10n:
  sourceCommit: 7d82de65fb43700d2053f13d8344ec4a78759b2c
---

Die **`text-wrap-mode`** [CSS](/de/docs/Web/CSS)-Eigenschaft steuert, ob der Text innerhalb eines Elements umbrochen wird.

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
        You can edit this lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatem aut cum eum id quos est text.
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

Die `text-wrap-mode`-Eigenschaft wird als einer der folgenden Schlüsselwortwerte angegeben:

- `wrap`
  - : Text wird bei geeigneten Zeichen (zum Beispiel Leerzeichen, in Sprachen wie Englisch, die Leerzeichentrenner verwenden) umgebrochen, um Überlauf zu minimieren. Dies ist der Standardwert.
- `nowrap`
  - : Text wird nicht über Zeilen hinweg umgebrochen. Er wird die umgebende Box überschreiten, anstatt in eine neue Zeile zu brechen.

## Beschreibung

Die `text-wrap-mode`-Eigenschaft kann verwendet werden, um den Textumbruch innerhalb eines Elements zu steuern. Die verschiedenen Werte bieten alternative Möglichkeiten zum Umbruch des Inhalts eines Blockelements, indem spezifiziert wird, ob Zeilen bei unerzwungenen weichen Umbruchmöglichkeiten (`wrap`) oder nicht (`nowrap`) umbrochen werden dürfen.

Wenn auf `nowrap` gesetzt, wird Text überlaufen, anstatt auf mehrere Zeilen zu brechen. Da die {{cssxref("overflow")}}-Eigenschaft standardmäßig auf `visible` gesetzt ist, wird, wenn der Inhalt größer als die Inline-Größe des Containers ist, in die Inline-Richtung überfließen. Um stattdessen ein Scrollen in die Inline-Richtung zu ermöglichen, setzen Sie die {{cssxref("overflow-inline")}}-Eigenschaft auf `auto` oder `scroll`. Um sicherzustellen, dass der Container mindestens so breit wie das längste Wort ist, setzen Sie die {{cssxref("min-inline-size")}} auf {{cssxref("min-content")}}.

Wenn auf `wrap` gesetzt, fließt der Inhalt bei Bedarf auf neue Zeilen über, indem bei Worttrennstellen wie {{htmlelement("wbr")}}, Bindestrichen und anderen sprachspezifischen weichen Umbruchmöglichkeiten umbrochen wird. Die Eigenschaft verhindert nicht, dass nicht unterbrechbare Inhalte in die Inline-Richtung überlaufen, wenn sie größer als die Inline-Größe des Containers sind.

Der `text-wrap-mode` ist Teil von zwei Kurzschreibweisen. Der `text-wrap-mode`, zusammen mit der {{CSSxRef("white-space-collapse")}}-Eigenschaft, kann unter Verwendung der {{CSSxRef("white-space")}}-Kurzschreibweise deklariert werden. Er kann auch zusammen mit der {{CSSXRef("text-wrap-style")}}-Eigenschaft unter Verwendung der {{CSSXRef("text-wrap")}}-Kurzschreibweise gesetzt und zurückgesetzt werden.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel vergleichen wir die Wirkung der beiden Werte der `text-wrap-mode`-Eigenschaft.

#### HTML

Wir fügen zwei {{htmlelement("div")}}-Elemente hinzu, die bis auf ihre Klassennamen gleich sind.

```html
<div class="wrap">CSS IS AWESOME</div>
<div class="nowrap">CSS IS AWESOME</div>
```

#### CSS

Wir setzen dieselben Stile auf beide Container, um ihre Breite zu beschränken.

```css
div {
  font-family: "Arial", sans-serif;
  font-weight: bold;
  font-size: 4rem;
  box-sizing: border-box;
  border: 0.25rem solid black;
  padding: 0 4px;
  width: 14rem;
  margin: 1rem;
}
```

Wir geben den Beispielen unterschiedliche `text-wrap-mode`-Werte:

```css
.wrap {
  text-wrap-mode: wrap;
}
.nowrap {
  text-wrap-mode: nowrap;
}
```

#### Ergebnis

{{EmbedLiveSample("basic usage", "100%", 360)}}

Im `wrap`-Beispiel fließt der Inhalt in die nächste Zeile über, damit er in den Rahmen passt. "Awesome" ist breiter als die umgebende Box und enthält keine weichen Umbruchmöglichkeiten, daher läuft es über.

Im `nowrap`-Beispiel fließt der Inhalt **nicht** in die nächste Zeile über, da der Inhalt speziell eingestellt wurde, um nicht umbrochen zu werden, sodass er auf einer Linie bleibt und der Container überläuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("text-wrap")}}
- {{CSSxRef("text-wrap-style")}}
- {{CSSxRef("hyphens")}}
- {{CSSxRef("white-space")}}
- {{CSSxRef("overflow")}}
- [CSS Text](/de/docs/Web/CSS/Guides/Text)-Modul
- [CSS Überlauf](/de/docs/Web/CSS/Guides/Overflow)-Modul
