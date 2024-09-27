---
title: counter-reset
slug: Web/CSS/counter-reset
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

{{CSSRef}}

Die **`counter-reset`** [CSS](/de/docs/Web/CSS) Eigenschaft erstellt benannte [CSS Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und initialisiert sie mit einem bestimmten Wert. Sie unterstützt das Erstellen von Zählern, die von eins bis zur Anzahl der Elemente hochzählen, sowie solche, die von der Anzahl der Elemente bis eins herunterzählen.

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

Die `counter-reset` Eigenschaft akzeptiert eine Liste von einem oder mehreren durch Leerzeichen getrennten Zählernamen oder das Schlüsselwort `none`. Für Zählernamen verwenden reguläre Zähler das Format `<counter-name>`, und umgekehrte Zähler verwenden `reversed(<counter-name>)`, wobei `<counter-name>` eine {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} oder `list-item` für den eingebauten {{HTMLElement("ol")}} Zähler ist. Optional kann jeder Zählername von einem `<integer>` gefolgt werden, um dessen Anfangswert festzulegen.

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erstellt und unter Verwendung des Formats {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} initialisiert werden soll. Die `reversed()` Funktionsnotation kann verwendet werden, um den Zähler als umgekehrt zu kennzeichnen.
- {{cssxref("&lt;integer&gt;")}}
  - : Der anfängliche Wert, der auf den neu erstellten Zähler gesetzt werden soll.
    Der Standardwert ist `0`, wenn nicht angegeben.
- `none`
  - : Gibt an, dass keine Zählerinitialisierung erfolgen soll.
    Dieser Wert ist nützlich, um `counter-reset` Werte in weniger spezifischen Regeln zu überschreiben.

## Beschreibung

Die `counter-reset` Eigenschaft kann sowohl reguläre als auch, in Browsern, die sie unterstützen, umgekehrte Zähler erstellen. Sie können mehrere reguläre und umgekehrte Zähler erstellen, die jeweils durch ein Leerzeichen getrennt sind. Zähler können ein eigenständiger Name oder ein durch Leerzeichen getrenntes Name-Wert-Paar sein.

> [!WARNING]
> Es gibt [einen Unterschied zwischen den Eigenschaften `counter-reset` und `counter-set`](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters#difference_between_counter-set_and_counter-reset). Nach der Erstellung eines Zählers mit `counter-reset` können Sie dessen Wert mit der {{cssxref("counter-set")}} Eigenschaft anpassen. Dies ist kontraintuitiv, da, trotz seines Namens, die `counter-reset` Eigenschaft zum Erstellen und Initialisieren von Zählern verwendet wird, während die `counter-set` Eigenschaft zum Zurücksetzen des Wertes eines vorhandenen Zählers genutzt wird.

Das Setzen von `counter-increment: none` auf einem Selektor mit größerer Spezifität überschreibt die Erstellung des benannten Zählers, der bei Selektoren mit niedrigerer Spezifität gesetzt ist.

### Standardanfangswerte

Die Standardanfangswerte sowohl regulärer als auch umgekehrter Zähler erleichtern die Implementierung der beiden häufigsten Nummerierungsmuster: das Hochzählen von eins bis zur Anzahl der Elemente und das Herunterzählen von der Anzahl der Elemente bis eins. Indem Sie einen Zählerwert für einen benannten Zähler einschließen, kann Ihr Zähler vorwärts oder rückwärts zählen, beginnend mit einem ganzzahligen Wert.

Reguläre Zähler haben den Standardwert `0`, wenn kein Rücksetzungswert angegeben wird. Standardmäßig erhöhen sich reguläre Zähler um eins, was durch die {{cssxref("counter-increment")}} Eigenschaft angepasst werden kann.

```css
h1 {
  /* Create the counters "chapter" and "page" and set to initial default value.
     Create the counter "section" and set to "4". */
  counter-reset: chapter section 4 page;
}
```

### Umgekehrte Zähler

Beim Erstellen umgekehrter Zähler ohne Wert beginnt der Zähler mit dem Wert entsprechend der Anzahl der Elemente im Set, wobei er herunterzählt, sodass das letzte Element im Set `1` ist. Standardmäßig dekrementieren sich umgekehrte Zähler um eins; dies kann ebenfalls durch die `counter-increment` Eigenschaft geändert werden.

```css
h1 {
  /* Create reversed counters "chapter" and "section".
      Set "chapter" as the number of elements and "section" as "10".
      Create the counter "pages" with the initial default value. */
  counter-reset: reversed(chapter) reversed(section) 10 pages;
}
```

### Eingebauter `list-item` Zähler

Geordnete Listen ({{HTMLElement("ol")}}) haben eingebaute `list-item` Zähler, die deren Nummerierung steuern. Diese Zähler erhöhen oder verringern sich automatisch um eins mit jedem Listeneintrag. Die `counter-reset` Eigenschaft kann verwendet werden, um die `list-item` Zähler zurückzusetzen. Wie bei anderen Zählern können Sie den Standardinkrementwert für `list-item` Zähler durch die {{cssxref("counter-increment")}} Eigenschaft überschreiben.

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

Mithilfe von `counter-reset` setzen wir den impliziten `list-item` Zähler auf einen anderen Anfangswert als den Standardwert `1`:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Ergebnis

{{EmbedLiveSample("Überschreiben des list-item Zählers", 140, 300)}}

Mit `counter-reset` setzen wir den impliziten `list-item` Zähler so, dass er bei `3` für jeden `ol` zu zählen beginnt. Dann würde das erste Element mit 4 nummeriert, das zweite mit 5, usw.; ähnlich dem Effekt des Schreibens von [`<ol start="4">`](/de/docs/Web/HTML/Element/ol#start) in HTML.

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

{{EmbedLiveSample("Verwendung eines umgekehrten Zählers", 140, 150)}}

Im Ergebnis werden die Elemente in umgekehrter Reihenfolge von 5 bis 1 nummeriert. Beachten Sie, dass wir im Code keinen Anfangswert für den Zähler angegeben haben. Der Browser berechnet den Anfangswert während der Layout-Zeit automatisch anhand des Zählererhöhungswertes.

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
- {{cssxref("::marker")}} Pseudoklasse
- [CSS-Listen und -Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
