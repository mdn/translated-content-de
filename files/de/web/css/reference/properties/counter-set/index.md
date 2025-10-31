---
title: counter-set
slug: Web/CSS/Reference/Properties/counter-set
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`counter-set`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt [CSS Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) auf dem Element auf die angegebenen Werte.

Wenn die Zähler nicht existieren, erstellt die `counter-set` Eigenschaft einen neuen Zähler für jeden benannten Zähler in der Liste von durch Leerzeichen getrennten Zähler- und Wertpaaren. Um jedoch einen neuen Zähler zu erstellen, wird empfohlen, die {{cssxref("counter-reset")}} CSS-Eigenschaft zu verwenden.

Wenn in der Liste einem benannten Zähler ein Wert fehlt, wird der Wert des Zählers auf `0` gesetzt.

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

> [!NOTE]
> Der Zählerwert kann mithilfe der {{cssxref("counter-increment")}} CSS-Eigenschaft erhöht oder verringert werden.

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

Die `counter-set` Eigenschaft wird entweder als eines der folgenden angegeben:

- Ein `<custom-ident>`, der den Zähler benennt, gefolgt optional von einem `<integer>`. Sie können beliebig viele Zähler angeben, die zurückgesetzt werden sollen, wobei jedes Name- oder Name-Wert-Paar durch ein Leerzeichen getrennt ist.
- Der Schlüsselwortwert `none`.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des zu setzenden Zählers.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Auftreten des Elements gesetzt wird. Standardmäßig `0`, wenn nicht angegeben. Wenn derzeit kein Zähler mit dem angegebenen Namen auf dem Element existiert, erstellt das Element einen neuen Zähler mit dem angegebenen Namen und einem Startwert von `0` (obwohl dieser Wert dann sofort auf einen anderen Wert gesetzt oder erhöht werden kann).
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

- [Verwendung von CSS Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} und {{cssxref("counters", "counters()")}} Funktionen
- {{cssxref("content")}} Eigenschaft
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
