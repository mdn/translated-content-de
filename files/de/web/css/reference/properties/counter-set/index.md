---
title: counter-set
slug: Web/CSS/Reference/Properties/counter-set
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die CSS-Eigenschaft **`counter-set`** setzt [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) auf dem Element auf die angegebenen Werte.

Wenn die Zähler nicht existieren, erstellt die `counter-set`-Eigenschaft einen neuen Zähler für jeden benannten Zähler in der Liste der durch Leerzeichen getrennten Zähler- und Wertepaaren. Es wird jedoch empfohlen, zur Erstellung eines neuen Zählers die CSS-Eigenschaft {{cssxref("counter-reset")}} zu verwenden.

Wenn einem benannten Zähler in der Liste ein Wert fehlt, wird der Wert des Zählers auf `0` gesetzt.

> [!NOTE]
> Der Wert des Zählers kann mit der CSS-Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden.

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

Die `counter-set`-Eigenschaft wird auf eine der folgenden Arten angegeben:

- Ein `<custom-ident>`, der den Zähler benennt, optional gefolgt von einem `<integer>`. Sie können so viele Zähler zurücksetzen, wie Sie möchten, wobei jeder Name oder jedes Name-Zahl-Paar durch ein Leerzeichen getrennt ist.
- Der Schlüsselwortwert `none`.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des Zählers, der festgelegt werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Vorkommen des Elements gesetzt wird. Standardmäßig `0`, wenn nicht angegeben. Wenn derzeit kein Zähler mit dem angegebenen Namen auf dem Element vorhanden ist, erstellt das Element einen neuen Zähler mit dem angegebenen Namen und einem Startwert von `0` (obwohl dieser dann möglicherweise sofort auf einen anderen Wert gesetzt oder erhöht wird).
- `none`
  - : Es soll kein Zähler-Set durchgeführt werden. Dies kann verwendet werden, um ein in einer weniger spezifischen Regel definiertes `counter-set` zu überschreiben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benannte Zähler einstellen

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
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
