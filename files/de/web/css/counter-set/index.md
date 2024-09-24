---
title: counter-set
slug: Web/CSS/counter-set
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

{{CSSRef}}

Die **`counter-set`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt [CSS Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) auf dem Element auf die angegebenen Werte.

Falls die Zähler nicht existieren, erstellt die `counter-set` Eigenschaft einen neuen Zähler für jeden benannten Zähler in der Liste der durch Leerzeichen getrennten Zähler- und Wertpaare. Es wird jedoch empfohlen, eine neue Zählvariable mit der {{cssxref("counter-reset")}} CSS-Eigenschaft zu erstellen.

Wenn ein benannter Zähler in der Liste keinen Wert hat, wird der Wert des Zählers auf `0` gesetzt.

{{EmbedInteractiveExample("pages/css/counter-set.html")}}

> [!NOTE]
> Der Wert des Zählers kann unter Verwendung der {{cssxref("counter-increment")}} CSS-Eigenschaft erhöht oder verringert werden.

## Syntax

```css
/* Setzt "my-counter" auf 0 */
counter-set: my-counter;

/* Setzt "my-counter" auf -1 */
counter-set: my-counter -1;

/* Setzt "counter1" auf 1 und "counter2" auf 4 */
counter-set: counter1 1 counter2 4;

/* Hebt jeden Zähler auf, der in weniger spezifischen Regeln gesetzt sein könnte */
counter-set: none;

/* Globale Werte */
counter-set: inherit;
counter-set: initial;
counter-set: revert;
counter-set: revert-layer;
counter-set: unset;
```

Die `counter-set` Eigenschaft wird als einer der folgenden Werte angegeben:

- Ein `<custom-ident>`, das den Zähler benennt und optional von einem `<integer>` gefolgt wird. Sie können so viele Zähler zurücksetzen, wie Sie möchten, wobei jeder Name oder jedes Name-Zahlen-Paar durch ein Leerzeichen getrennt wird.
- Der Schlüsselwort-Wert `none`.

### Werte

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Der Name des zu setzenden Zählers.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Wert, auf den der Zähler bei jedem Vorkommen des Elements gesetzt wird. Standardmäßig `0` falls nicht angegeben. Falls es derzeit keinen Zähler mit dem gegebenen Namen auf dem Element gibt, erstellt das Element einen neuen Zähler des gegebenen Namens mit einem Startwert von `0` (obwohl dieser dann sofort auf einen anderen Wert gesetzt oder erhöht werden kann).
- `none`
  - : Es soll kein Zähler gesetzt werden. Dies kann verwendet werden, um eine in einer weniger spezifischen Regel definierte `counter-set` zu überschreiben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Benannte Zähler setzen

```css
h1 {
  counter-set: chapter section 1 page;
  /* Setzt die Zähler für Kapitel und Seite auf 0,
     und den Zähler für Abschnitt auf 1 */
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Using CSS Counters](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-increment")}}
- {{cssxref("counter-reset")}}
- {{cssxref("@counter-style")}}
- {{cssxref("counter", "counter()")}} und {{cssxref("counters", "counters()")}} Funktionen
- {{cssxref("content")}} Eigenschaft
- [CSS Lists and Counters](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
