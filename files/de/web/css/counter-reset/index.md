---
title: counter-reset
slug: Web/CSS/counter-reset
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

{{CSSRef}}

Die **`counter-reset`** [CSS](/de/docs/Web/CSS) Eigenschaft erstellt benannte [CSS-Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und initialisiert sie auf einen bestimmten Wert. Sie unterstützt das Erstellen von Counter, die von eins bis zur Anzahl der Elemente hochzählen, sowie solche, die von der Anzahl der Elemente bis eins herunterzählen.

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

## Syntax

```css
/* Create a counter with initial default value 0 */
counter-reset: my-counter;

/* Create a counter and initialize as "-3" */
counter-reset: my-counter -3;

/* Create a reversed counter with initial default value */
counter-reset: reversed(my-counter);

/* Create a reversed counter and initialize as "-1" */
counter-reset: reversed(my-counter) -1;

/* Create reversed and regular counters at the same time */
counter-reset: reversed(pages) 10 items 1 reversed(sections) 4;

/* Remove all counter-reset declarations in less specific rules */
counter-reset: none;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Werte

Die `counter-reset` Eigenschaft akzeptiert eine Liste von einem oder mehreren durch Leerzeichen getrennten Counternamen oder das Schlüsselwort `none`. Für Counternamen verwenden reguläre Counter das Format `<counter-name>`, und umgekehrte Counter verwenden `reversed(<counter-name>)`, wobei `<counter-name>` ein {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} oder `list-item` für den eingebauten {{HTMLElement("ol")}} Counter ist. Optional kann jedem Counternamen ein `<integer>` folgen, um seinen Anfangswert festzulegen.

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt den zu erstellenden und initialisierenden Counternamen im {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}-Format an. Die `reversed()`-Funktionsnotation kann verwendet werden, um den Counter als umgekehrt zu markieren.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Anfangswert, der für den neu erstellten Counter festgelegt werden soll.
    Standardmäßig `0`, wenn nicht angegeben.
- `none`
  - : Gibt an, dass keine Counter-Initialisierung erfolgen soll.
    Dieser Wert ist nützlich, um `counter-reset` Werte in weniger spezifischen Regeln zu überschreiben.

## Beschreibung

Die `counter-reset` Eigenschaft kann sowohl reguläre als auch, in unterstützenden Browsern, umgekehrte Counter erstellen. Sie können mehrere reguläre und umgekehrte Counter erstellen, die jeweils durch ein Leerzeichen getrennt sind. Counter können ein eigenständiger Name oder ein leerzeichengetrenntes Name-Wert-Paar sein.

> [!WARNING]
> Es gibt [einen Unterschied zwischen den Eigenschaften `counter-reset` und `counter-set`](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters#difference_between_counter-set_and_counter-reset). Nach dem Erstellen eines Counters mit `counter-reset` können Sie dessen Wert mit der {{cssxref("counter-set")}} Eigenschaft anpassen. Dies ist kontraintuitiv, da die `counter-reset` Eigenschaft trotz ihres Namens zum Erstellen und Initialisieren von Countern verwendet wird, während die `counter-set` Eigenschaft verwendet wird, um den Wert eines vorhandenen Counters zurückzusetzen.

Das Setzen von `counter-increment: none` auf einem Selektor mit höherer Spezifität überschreibt die Erstellung des benannten Counters, der auf Selektoren mit geringerer Spezifität festgelegt ist.

### Standard-Anfangswerte

Die Standard-Anfangswerte sowohl der regulären als auch der umgekehrten Counter machen es einfach, die beiden gängigsten Nummerierungsmuster zu implementieren: das Hochzählen von eins bis zur Anzahl der Elemente und das Herunterzählen von der Anzahl der Elemente bis eins. Indem Sie einen Counter-Wert für einen benannten Counter einschließen, kann Ihr Counter ab einem ganzzahligen Wert hoch- oder herunterzählen.

Regelmäßige Counter haben standardmäßig `0`, wenn kein Zurücksetzungswert angegeben wird. Standardmäßig erhöhen sich reguläre Counter um eins, was mit der {{cssxref("counter-increment")}} Eigenschaft angepasst werden kann.

```css
h1 {
  /* Create the counters "chapter" and "page" and set to initial default value.
     Create the counter "section" and set to "4". */
  counter-reset: chapter section 4 page;
}
```

### Umgekehrte Counter

Beim Erstellen umgekehrter Counter ohne Wert beginnt der Counter mit einem Wert, der der Anzahl der Elemente im Satz entspricht, und zählt herunter, sodass das letzte Element im Satz `1` ist. Standardmäßig verringern sich umgekehrte Counter um eins; dies kann ebenfalls mit der `counter-increment` Eigenschaft geändert werden.

```css
h1 {
  /* Create reversed counters "chapter" and "section".
      Set "chapter" as the number of elements and "section" as "10".
      Create the counter "pages" with the initial default value. */
  counter-reset: reversed(chapter) reversed(section) 10 pages;
}
```

### Eingebauter `list-item` Counter

Geordnete Listen ({{HTMLElement("ol")}}) verfügen über eingebaute `list-item` Counter, die ihre Nummerierung steuern. Diese Counter erhöhen oder verringern sich automatisch um eins mit jedem Listenelement. Die `counter-reset` Eigenschaft kann verwendet werden, um die `list-item` Counter zurückzusetzen. Wie bei anderen Countern können Sie den Standarderhöhungswert für `list-item` Counter mit der {{cssxref("counter-increment")}} Eigenschaft überschreiben.

## Formelle Definition

{{cssinfo}}

## Formelle Syntax

{{csssyntax}}

## Beispiele

### Überschreiben des `list-item` Counters

In diesem Beispiel wird die `counter-reset` Eigenschaft verwendet, um einen Startwert für einen impliziten `list-item` Counter festzulegen.

#### HTML

```html
<ol>
  <li>First</li>
  <li>Second</li>
  <li>Third</li>
  <li>Fourth</li>
  <li>Fifth</li>
</ol>
```

#### CSS

Mithilfe von `counter-reset` setzen wir den impliziten `list-item` Counter auf einen anderen Wert als den Standardwert `1`:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Ergebnis

{{EmbedLiveSample("Overriding the list-item counter", 140, 300)}}

Mit `counter-reset` setzen wir den impliziten `list-item` Counter so, dass jedes `ol` bei `3` zu zählen beginnt. Das erste Element würde dann mit 4 nummeriert, das zweite mit 5, etc., ähnlich der Wirkung von [`<ol start="4">`](/de/docs/Web/HTML/Element/ol#start) in HTML.

### Verwendung eines umgekehrten Counters

Im folgenden Beispiel haben wir einen umgekehrten Counter namens 'priority' deklariert. Der Counter wird verwendet, um fünf Aufgaben zu nummerieren.

```html
<ul class="stack">
  <li>Task A</li>
  <li>Task B</li>
  <li>Task C</li>
  <li>Task D</li>
  <li>Task E</li>
</ul>
```

```css hidden
@supports not (counter-reset: reversed(priority)) {
  .stack {
    display: none;
  }
  body::after {
    content: "Your browser doesn't support the reversed counters yet.";
  }
}
```

```css
li::before {
  content: counter(priority) ". ";
  counter-increment: priority -1;
}

.stack {
  counter-reset: reversed(priority);
  list-style: none;
}
```

{{EmbedLiveSample("Using a reverse counter", 140, 150)}}

Im Ausgabeergebnis werden die Elemente in umgekehrter Reihenfolge von 5 bis 1 nummeriert. Beachten Sie im Code, dass wir den Anfangswert des Counters nicht angegeben haben. Der Browser berechnet den Anfangswert zur Layout-Zeit automatisch anhand des Counter-Increment-Werts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Countern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("@counter-style")}} At-Regel
- {{cssxref("counter", "counter()")}} und {{cssxref("counters", "counters()")}} Funktionen
- {{cssxref("content")}} Eigenschaft
- {{cssxref("::marker")}} Pseudo-Klasse
- [CSS-Listen und Counter](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Counterstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
