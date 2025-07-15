---
title: counter-set
slug: Web/CSS/counter-set
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`counter-set`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) auf dem Element auf die angegebenen Werte.

Wenn die Zähler nicht existieren, erstellt die `counter-set` Eigenschaft einen neuen Zähler für jeden benannten Zähler in der Liste der durch Leerzeichen getrennten Zähler- und Wertpaare. Um jedoch einen neuen Zähler zu erstellen, wird empfohlen, die {{cssxref("counter-reset")}} CSS-Eigenschaft zu verwenden.

Wenn einem benannten Zähler in der Liste ein Wert fehlt, wird der Wert des Zählers auf `0` gesetzt.

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
> Der Wert des Zählers kann mit der {{cssxref("counter-increment")}} CSS-Eigenschaft erhöht oder verringert werden.

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

Die `counter-set` Eigenschaft wird wie folgt angegeben:

- Ein `<custom-ident>`, das den Zähler benannt, gefolgt optional von einem `<integer>`. Sie können so viele Zähler zum Zurücksetzen angeben, wie Sie möchten, wobei jedes Namen- oder Namensnummernpaar durch ein Leerzeichen getrennt ist.
- Der Schlüsselwortwert `none`.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des Zählers, der festgelegt werden soll.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Auftreten des Elements gesetzt wird. Standardmäßig `0`, wenn nicht spezifiziert. Wenn es derzeit keinen Zähler mit dem angegebenen Namen auf dem Element gibt, wird das Element einen neuen Zähler mit dem angegebenen Namen und einem Startwert von `0` erstellen (obwohl dieser dann möglicherweise sofort auf einen anderen Wert gesetzt oder erhöht wird).
- `none`
  - : Es soll kein Zähler-Set durchgeführt werden. Dies kann verwendet werden, um ein `counter-set` in einer weniger spezifischen Regel zu überschreiben.

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

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} und {{cssxref("counters", "counters()")}} Funktionen
- {{cssxref("content")}} Eigenschaft
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
