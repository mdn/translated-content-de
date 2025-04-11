---
title: counter-reset
slug: Web/CSS/counter-reset
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`counter-reset`** [CSS](/de/docs/Web/CSS) Eigenschaft erstellt benannte [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und initialisiert diese auf einen bestimmten Wert. Sie unterstützt die Erstellung von Zählern, die von eins bis zur Anzahl der Elemente zählen, sowie solche, die von der Anzahl der Elemente bis eins herunterzählen.

{{InteractiveExample("CSS Demo: counter-reset")}}

```css interactive-example-choice
counter-reset: none;
```

```css interactive-example-choice
counter-reset: chapter-count 0;
```

```css interactive-example-choice
counter-reset: chapter-count;
```

```css interactive-example-choice
counter-reset: chapter-count 5;
```

```css interactive-example-choice
counter-reset: chapter-count -5;
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
  counter-reset: chapter-count;
}

#example-element {
  background-color: lightblue;
  color: black;
}

h2 {
  counter-increment: chapter-count;
  font-size: 1em;
}

h2::before {
  content: "Chapter " counters(chapter-count, ".") ": ";
}
```

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

Die `counter-reset` Eigenschaft akzeptiert eine Liste von einem oder mehreren durch Leerzeichen getrennten Zählernamen oder das Schlüsselwort `none`. Für Zählernamen verwenden reguläre Zähler das Format `<counter-name>`, und umgekehrte Zähler verwenden `reversed(<counter-name>)`, wobei `<counter-name>` ein {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} oder `list-item` für den integrierten {{HTMLElement("ol")}} Zähler ist. Optional kann jedem Zählernamen ein `<integer>` folgen, um seinen Anfangswert festzulegen.

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Spezifiziert den zu erstellenden und zu initialisierenden Zählernamen im {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} Format. Die `reversed()` Funktionsnotation kann verwendet werden, um den Zähler als umgekehrt zu kennzeichnen.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Anfangswert, der dem neu erstellten Zähler zugewiesen wird.
    Standardmäßig `0`, wenn nicht angegeben.
- `none`
  - : Gibt an, dass keine Zählerinitialisierung erfolgen soll.
    Dieser Wert ist nützlich, um `counter-reset` Werte in weniger spezifischen Regeln zu überschreiben.

## Beschreibung

Die `counter-reset` Eigenschaft kann sowohl reguläre als auch, in Browsern, die diese unterstützen, umgekehrte Zähler erstellen. Sie können mehrere reguläre und umgekehrte Zähler erstellen, die jeweils durch ein Leerzeichen getrennt sind. Zähler können ein eigenständiger Name oder ein durch Leerzeichen getrenntes Name-Wert-Paar sein.

> [!WARNING]
> Es gibt [einen Unterschied zwischen den Eigenschaften `counter-reset` und `counter-set`](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters#difference_between_counter-set_and_counter-reset). Nachdem ein Zähler mit `counter-reset` erstellt wurde, können Sie seinen Wert mit der {{cssxref("counter-set")}} Eigenschaft anpassen. Dies ist kontraintuitiv, da die `counter-reset` Eigenschaft trotz ihres Namens für das Erstellen und Initialisieren von Zählern verwendet wird, während die `counter-set` Eigenschaft zum Zurücksetzen des Wertes eines existierenden Zählers verwendet wird.

Das Setzen von `counter-increment: none` auf einen Selektor mit höherer Spezifität überschreibt die Erstellung des benannten Zählers, der auf Selektoren mit niedrigerer Spezifität festgelegt ist.

### Standardanfangswerte

Die Standardanfangswerte sowohl für reguläre als auch für umgekehrte Zähler erleichtern die Umsetzung der beiden gängigsten Nummerierungsmuster: Zählen von eins bis zur Anzahl der Elemente und Herunterzählen von der Anzahl der Elemente bis eins. Durch die Angabe eines Zählerwertes für einen benannten Zähler kann Ihr Zähler aufwärts oder abwärts zählen, beginnend bei einem ganzzahligen Wert.

Reguläre Zähler haben standardmäßig den Wert `0`, wenn kein Rücksetz-Wert angegeben wird. Standardmäßig inkrementieren reguläre Zähler um eins, was mit der {{cssxref("counter-increment")}} Eigenschaft angepasst werden kann.

```css
h1 {
  /* Create the counters "chapter" and "page" and set to initial default value.
     Create the counter "section" and set to "4". */
  counter-reset: chapter section 4 page;
}
```

### Umgekehrte Zähler

Wenn umgekehrte Zähler ohne Wert erstellt werden, startet der Zähler mit dem Wert, der der Anzahl der Elemente im Set entspricht, und zählt so herunter, dass das letzte Element im Set `1` ist. Standardmäßig dekrementieren umgekehrte Zähler um eins; dies kann ebenfalls mit der `counter-increment` Eigenschaft geändert werden.

```css
h1 {
  /* Create reversed counters "chapter" and "section".
      Set "chapter" as the number of elements and "section" as "10".
      Create the counter "pages" with the initial default value. */
  counter-reset: reversed(chapter) reversed(section) 10 pages;
}
```

### Eingebauter `list-item` Zähler

Geordnete Listen ({{HTMLElement("ol")}}) verfügen über eingebaute `list-item` Zähler, die deren Nummerierung steuern. Diese Zähler erhöhen oder verringern sich automatisch um eins bei jedem Listenelement. Die `counter-reset` Eigenschaft kann verwendet werden, um die `list-item` Zähler zurückzusetzen. Wie bei anderen Zählern können Sie den Standardinkrementwert für `list-item` Zähler durch die Verwendung der {{cssxref("counter-increment")}} Eigenschaft überschreiben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben des `list-item` Zählers

In diesem Beispiel wird die `counter-reset` Eigenschaft verwendet, um einen Startwert für einen impliziten `list-item` Zähler festzulegen.

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

Mit `counter-reset` setzen wir den impliziten `list-item` Zähler, um mit einem anderen Wert als dem Standardwert `1` zu beginnen:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Ergebnis

{{EmbedLiveSample("Overriding the list-item counter", 140, 300)}}

Mit `counter-reset` setzen wir den impliziten `list-item` Zähler so, dass in jedem `ol` ab `3` gezählt wird. Dann würde das erste Element mit 4 nummeriert, das zweite mit 5 usw., ähnlich dem Effekt von [`<ol start="4">`](/de/docs/Web/HTML/Reference/Elements/ol#start) im HTML.

### Verwendung eines umgekehrten Zählers

Im folgenden Beispiel haben wir einen umgekehrten Zähler namens 'priority' deklariert. Der Zähler wird verwendet, um fünf Aufgaben zu nummerieren.

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

Im Ergebnis werden die Elemente in umgekehrter Reihenfolge von 5 bis 1 nummeriert. Beachten Sie, dass wir im Code keinen Anfangswert des Zählers angegeben haben. Der Browser berechnet den Anfangswert automatisch zur Laufzeit unter Verwendung des Zählerinkrementwertes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) Leitfaden
- {{cssxref("counter-increment")}} Eigenschaft
- {{cssxref("counter-set")}} Eigenschaft
- {{cssxref("@counter-style")}} At-Regel
- {{cssxref("counter", "counter()")}} und {{cssxref("counters", "counters()")}} Funktionen
- {{cssxref("content")}} Eigenschaft
- {{cssxref("::marker")}} Pseudo-Klasse
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
