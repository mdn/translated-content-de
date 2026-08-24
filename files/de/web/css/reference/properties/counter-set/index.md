---
title: "`counter-set` CSS property"
short-title: counter-set
slug: Web/CSS/Reference/Properties/counter-set
l10n:
  sourceCommit: 737b931225e92e0cba47e57a150878b1a78ee45a
---

Die **`counter-set`** [CSS](/de/docs/Web/CSS) Eigenschaft legt [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) auf dem Element auf die angegebenen Werte fest.

Wenn die Zähler nicht existieren, erstellt die `counter-set`-Eigenschaft für jeden benannten Zähler in der Liste von durch Leerzeichen getrennten Zähler- und Wertpaaren einen neuen Zähler. Um jedoch einen neuen Zähler zu erstellen, wird empfohlen, die {{cssxref("counter-reset")}} CSS-Eigenschaft zu verwenden.

Falls einem benannten Zähler in der Liste ein Wert fehlt, wird der Wert des Zählers auf `0` gesetzt.

> [!NOTE]
> Der Wert des Zählers kann mit der {{cssxref("counter-increment")}} CSS-Eigenschaft erhöht oder verringert werden.

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

### Werte

Diese Eigenschaft wird entweder als eine Liste von `<custom-ident>`-Werten, jeweils optional gefolgt von einem `<integer>`, oder dem Schlüsselwort `none` angegeben:

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des Zählers, der gesetzt werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Auftreten des Elements gesetzt wird. Standardmäßig `0`, falls nicht angegeben. Existiert aktuell kein Zähler mit dem angegebenen Namen auf dem Element, wird das Element einen neuen Zähler mit dem angegebenen Namen und einem Startwert von `0` erstellen (obwohl er diesen Wert dann möglicherweise sofort auf etwas anderes setzen oder erhöhen kann).
- `none`
  - : Es wird kein Zähler gesetzt. Dies kann verwendet werden, um ein in einer weniger spezifischen Regel definiertes `counter-set` zu überschreiben.

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
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
