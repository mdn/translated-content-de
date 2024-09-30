---
title: counter-set
slug: Web/CSS/counter-set
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

{{CSSRef}}

Die **`counter-set`** [CSS](/de/docs/Web/CSS)-Eigenschaft setzt [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) am Element auf die angegebenen Werte.

Wenn die Zähler nicht existieren, erstellt die `counter-set`-Eigenschaft einen neuen Zähler für jeden benannten Zähler in der Liste der durch Leerzeichen getrennten Zähler und Wert-Paare. Es wird jedoch empfohlen, die {{cssxref("counter-reset")}}-CSS-Eigenschaft zu verwenden, um einen neuen Zähler zu erstellen.

Wenn ein benannter Zähler in der Liste keinen Wert hat, wird der Wert des Zählers auf `0` gesetzt.

{{EmbedInteractiveExample("pages/css/counter-set.html")}}

> [!NOTE]
> Der Wert des Zählers kann mithilfe der {{cssxref("counter-increment")}}-CSS-Eigenschaft erhöht oder verringert werden.

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

Die `counter-set`-Eigenschaft wird wie folgt angegeben:

- Ein `<custom-ident>`, der den Zähler benennt, optional gefolgt von einem `<integer>`. Sie können so viele Zähler zurücksetzen, wie Sie möchten, wobei jedes Name- oder Name-Zahl-Paar durch ein Leerzeichen getrennt ist.
- Der Schlüsselwortwert `none`.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des zu setzenden Zählers.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Vorkommen des Elements gesetzt wird. Standardmäßig `0`, wenn nicht angegeben. Wenn es derzeit keinen Zähler des gegebenen Namens auf dem Element gibt, wird das Element einen neuen Zähler des angegebenen Namens mit einem Startwert von `0` erstellen (obwohl dieser dann sofort auf einen anderen Wert gesetzt oder erhöht werden kann).
- `none`
  - : Es soll kein Zähler gesetzt werden. Dies kann verwendet werden, um eine `counter-set`-Anweisung in einer weniger spezifischen Regel zu überschreiben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen benannter Zähler

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

- [CSS-Zähler verwenden](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} und {{cssxref("counters", "counters()")}} Funktionen
- {{cssxref("content")}}-Eigenschaft
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstil](/de/docs/Web/CSS/CSS_counter_styles) Modul
