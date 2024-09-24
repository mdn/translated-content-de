---
title: counter-reset
slug: Web/CSS/counter-reset
l10n:
  sourceCommit: cdc0015b727804fa293bb33e5abcefce688729ab
---

{{CSSRef}}

Die **`counter-reset`** [CSS](/de/docs/Web/CSS) Eigenschaft erzeugt benannte [CSS-Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) und initialisiert sie auf einen bestimmten Wert. Sie unterstützt die Erstellung von Zählern, die von eins auf die Anzahl der Elemente hochzählen, sowie solchen, die von der Anzahl der Elemente auf eins herunterzählen.

{{EmbedInteractiveExample("pages/css/counter-reset.html")}}

## Syntax

```css
/* Erstellen Sie einen Zähler mit dem anfänglichen Standardwert 0 */
counter-reset: my-counter;

/* Erstellen Sie einen Zähler und initialisieren Sie mit "-3" */
counter-reset: my-counter -3;

/* Erstellen Sie einen umgekehrten Zähler mit dem anfänglichen Standardwert */
counter-reset: reversed(my-counter);

/* Erstellen Sie einen umgekehrten Zähler und initialisieren Sie mit "-1" */
counter-reset: reversed(my-counter) -1;

/* Erstellen Sie gleichzeitig umgekehrte und reguläre Zähler */
counter-reset: reversed(pages) 10 items 1 reversed(sections) 4;

/* Entfernen Sie alle counter-reset-Deklarationen in weniger spezifischen Regeln */
counter-reset: none;

/* Globale Werte */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Werte

Die `counter-reset` Eigenschaft akzeptiert eine Liste von einem oder mehreren durch Leerzeichen getrennten Zählernamen oder das Schlüsselwort `none`. Für Zählernamen verwenden reguläre Zähler das Format `<counter-name>`, und umgekehrte Zähler verwenden `reversed(<counter-name>)`, wobei `<counter-name>` ein {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} oder `list-item` für den eingebauten {{HTMLElement("ol")}} Zähler ist. Optional kann jedem Zählernamen ein `<integer>` folgen, um seinen Anfangswert festzulegen.

- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : Gibt den Namen des zu erstellenden und zu initialisierenden Zählers im {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} Format an. Die funktionale Notation `reversed()` kann verwendet werden, um den Zähler umzukehren.
- {{cssxref("&lt;integer&gt;")}}
  - : Der Anfangswert, der auf den neu erstellten Zähler gesetzt wird.
    Standardmäßig ist dieser `0`, wenn nicht anders angegeben.
- `none`
  - : Gibt an, dass keine Zählerinitialisierung erfolgen soll.
    Dieser Wert ist nützlich, um `counter-reset` Werte in weniger spezifischen Regeln zu überschreiben.

## Beschreibung

Die `counter-reset` Eigenschaft kann sowohl reguläre als auch, in unterstützenden Browsern, umgekehrte Zähler erstellen. Sie können mehrere reguläre und umgekehrte Zähler erstellen, die jeweils durch ein Leerzeichen getrennt sind. Zähler können einen eigenständigen Namen oder ein leerzeichengetrenntes Name-Werte-Paar haben.

> [!WARNING]
> Es gibt [einen Unterschied zwischen den Eigenschaften `counter-reset` und `counter-set`](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters#difference_between_counter-set_and_counter-reset). Nachdem ein Zähler mit `counter-reset` erstellt wurde, können Sie seinen Wert mit der {{cssxref("counter-set")}} Eigenschaft anpassen. Das ist kontraintuitiv, da trotz seines Namens die `counter-reset` Eigenschaft zum Erstellen und Initialisieren von Zählern verwendet wird, während die `counter-set` Eigenschaft verwendet wird, um den Wert eines bestehenden Zählers zurückzusetzen.

Das Setzen von `counter-increment: none` auf einem Selektor mit höherer Spezifität überschreibt die Erstellung des benannten Zählers, der auf Selektoren mit niedrigerer Spezifität gesetzt ist.

### Standard Initialwerte

Die Standard Startwerte von sowohl regulären als auch umgekehrten Zählern machen es einfach, die zwei gebräuchlichsten Nummerierungsmuster zu implementieren: Zählen von eins auf die Anzahl der Elemente aufwärts und Abwärtszählen von der Anzahl der Elemente auf eins. Durch das Einfügen eines Zählerwertes für einen benannten Zähler kann der Zähler aufwärts oder abwärts zählen, beginnend bei einem Ganzzahlenwert.

Reguläre Zähler haben standardmäßig `0`, wenn kein Rückstellwert angegeben ist. Standardmäßig erhöhen sich reguläre Zähler um eins, was mit der {{cssxref("counter-increment")}} Eigenschaft angepasst werden kann.

```css
h1 {
  /* Erstellen Sie die Zähler "chapter" und "page" und setzen Sie sie auf den anfänglichen Standardwert.
     Erstellen Sie den Zähler "section" und setzen Sie ihn auf "4". */
  counter-reset: chapter section 4 page;
}
```

### Umgekehrte Zähler

Beim Erstellen umgekehrter Zähler ohne Wert beginnt der Zähler mit dem Wert, der der Anzahl der Elemente im Satz entspricht, und zählt so herunter, dass das letzte Element im Satz `1` ist. Standardmäßig vermindern sich Umkehrzähler um eins; dies kann auch mit der `counter-increment` Eigenschaft geändert werden.

```css
h1 {
  /* Erstellen Sie umgekehrte Zähler "chapter" und "section".
      Setzen Sie "chapter" als die Anzahl der Elemente und "section" als "10".
      Erstellen Sie den Zähler "pages" mit dem anfänglichen Standardwert. */
  counter-reset: reversed(chapter) reversed(section) 10 pages;
}
```

### Eingebauter `list-item` Zähler

Geordnete Listen ({{HTMLElement("ol")}}) haben eingebaute `list-item` Zähler, die ihre Nummerierung steuern. Diese Zähler erhöhen oder vermindern sich automatisch um eins mit jedem Listenelement. Die `counter-reset` Eigenschaft kann verwendet werden, um die `list-item` Zähler zurückzusetzen. Wie bei anderen Zählern können Sie den Standarderhöhungswert für `list-item` Zähler mit der {{cssxref("counter-increment")}} Eigenschaft überschreiben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Überschreiben des `list-item` Zählers

In diesem Beispiel wird die `counter-reset` Eigenschaft verwendet, um einen Anfangswert für einen impliziten `list-item` Zähler festzulegen.

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

Mit `counter-reset` setzen wir den impliziten `list-item` Zähler auf einen anderen Startwert als den Standardwert `1`:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Ergebnis

{{EmbedLiveSample("Overriding the list-item counter", 140, 300)}}

Mit `counter-reset` setzen wir den impliziten `list-item` Zähler so, dass das Zählen bei `3` für jedes `ol` beginnt. Dann würde das erste Element mit 4 nummeriert, das zweite mit 5, usw., ähnlich dem Effekt von [`<ol start="4">`](/de/docs/Web/HTML/Element/ol#start) im HTML.

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

Im Ergebnis werden die Elemente in umgekehrter Reihenfolge von 5 bis 1 nummeriert. Beachten Sie im Code, dass wir den anfänglichen Wert des Zählers nicht spezifiziert haben. Der Browser berechnet den Startwert automatisch zur Layoutzeit unter Verwendung des Zählererhöhungswerts.

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
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
