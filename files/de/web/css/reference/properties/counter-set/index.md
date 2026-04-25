---
title: "`counter-set` CSS property"
short-title: counter-set
slug: Web/CSS/Reference/Properties/counter-set
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`counter-set`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) auf dem Element auf die angegebenen Werte.

Wenn die Zähler nicht existieren, erstellt die Eigenschaft `counter-set` einen neuen Zähler für jeden benannten Zähler in der Liste der durch Leerzeichen getrennten Zähler- und Wertpaare. Es wird jedoch empfohlen, die CSS-Eigenschaft {{cssxref("counter-reset")}} zu verwenden, um einen neuen Zähler zu erstellen.

Fehlt einem benannten Zähler in der Liste ein Wert, wird der Wert des Zählers auf `0` gesetzt.

> [!NOTE]
> Der Wert des Zählers kann mithilfe der CSS-Eigenschaft {{cssxref("counter-increment")}} inkrementiert oder dekrementiert werden.

{{InteractiveExample("CSS Demo: counter-set")}}

```css interactive-example-choice
counter-set: none;
```

```css interactive-example-choice
counter-set: chapter-count 0;
```

```css interactive-example-choice
counter-set: chapter-count;
```

```css interactive-example-choice
counter-set: chapter-count 5;
```

```css interactive-example-choice
counter-set: chapter-count -5;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="chapters">
    <h1>Alice's Adventures in Wonderland</h1>
    <h2>Down the Rabbit-Hole</h2>
    <h2 id="example-element">The Pool of Tears</h2>
    <h2>A Caucus-Race and a Long Tale</h2>
    <h2>The Rabbit Sends in a Little Bill</h2>
  </div>
</section>
```

```css interactive-example
#default-example {
  text-align: left;
  counter-set: chapter-count;
}

#example-element {
  background-color: #37077c;
  color: white;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapter " counter(chapter-count) ": ";
}
```

## Syntax

```css
/* Set "my-counter" to 0 */
counter-set: my-counter;

/* Set "my-counter" to -1 */
counter-set: my-counter -1;

/* Set "counter1" to 1, and "counter2" to 4 */
counter-set: counter1 1 counter2 4;

/* Cancel any counter that could have been set in less specific rules */
counter-set: none;

/* Global values */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: revert-layer;
counter-set: unset;
```

Die `counter-set`-Eigenschaft wird wie folgt spezifiziert:

- Ein `<custom-ident>`, das den Zähler benennt, gefolgt von einem optionalen `<integer>`. Sie können so viele Zähler zurücksetzen wie gewünscht, wobei jeder Name oder jedes Namen-Zahl-Paar durch ein Leerzeichen getrennt wird.
- Der Schlüsselwortwert `none`.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des zu setzenden Zählers.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Vorkommen des Elements gesetzt werden soll. Standardmäßig `0`, wenn nicht angegeben. Wenn es derzeit keinen Zähler mit dem angegebenen Namen auf dem Element gibt, erstellt das Element einen neuen Zähler mit dem angegebenen Namen und einem Startwert von `0` (dieser Wert kann jedoch sofort auf einen anderen Wert gesetzt oder inkrementiert werden).
- `none`
  - : Es soll kein Zähler gesetzt werden. Dies kann verwendet werden, um eine weniger spezifische `counter-set`-Regel zu überschreiben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benannte Zähler setzen

```css
h1 {
  counter-set: chapter section 1 page;
  /* Sets the chapter and page counters to 0,
     and the section counter to 1 */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter()")}} und {{cssxref("counters()")}} Funktionen
- {{cssxref("content")}} Eigenschaft
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
