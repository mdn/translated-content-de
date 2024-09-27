---
title: counter-set
slug: Web/CSS/counter-set
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

{{CSSRef}}

Die **`counter-set`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) auf dem Element auf die angegebenen Werte.

Falls die Zähler nicht existieren, erstellt die `counter-set`-Eigenschaft einen neuen Zähler für jeden benannten Zähler in der Liste der durch Leerzeichen getrennten Zähler- und Wertpaare. Es wird jedoch empfohlen, für das Erstellen eines neuen Zählers die {{cssxref("counter-reset")}} CSS-Eigenschaft zu verwenden.

Wenn bei einem benannten Zähler in der Liste ein Wert fehlt, wird der Zählerwert auf `0` gesetzt.

{{EmbedInteractiveExample("pages/css/counter-set.html")}}

> [!NOTE]
> Der Zählerwert kann mit der CSS-Eigenschaft {{cssxref("counter-increment")}} erhöht oder verringert werden.

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

- Ein `<custom-ident>` benannt den Zähler, gefolgt optional von einem `<integer>`. Sie können so viele Zähler zum Zurücksetzen angeben, wie Sie möchten, wobei jedes Name- oder Namens-Zahlenpaar durch ein Leerzeichen getrennt ist.
- Der Schlüsselwortwert `none`.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des zu setzenden Zählers.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Vorkommen des Elements gesetzt wird. Standardmäßig `0`, wenn nicht angegeben. Wenn derzeit kein Zähler mit dem angegebenen Namen auf dem Element existiert, erstellt das Element einen neuen Zähler mit dem angegebenen Namen und einem Startwert von `0` (obwohl dieser Wert dann möglicherweise sofort anders gesetzt oder erhöht wird).
- `none`
  - : Es wird kein Zähler gesetzt. Dies kann verwendet werden, um ein `counter-set` zu überschreiben, das in einer weniger spezifischen Regel definiert ist.

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
