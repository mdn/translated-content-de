---
title: "`counter-reset` CSS property"
short-title: counter-reset
slug: Web/CSS/Reference/Properties/counter-reset
l10n:
  sourceCommit: a326384789bf2f13f96506d4e2fdb4688d873cd0
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`counter-reset`** erstellt benannte [CSS-Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) und initialisiert ihre Werte. Sie kann sowohl reguläre als auch rückwärts zählende Zähler erstellen.

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
/* Keyword value */
counter-reset: none;

/* Regular counters with default initial values */
counter-reset: my-counter;
counter-reset: another-counter;

/* Regular counters with an initial value */
counter-reset: my-counter -3;
counter-reset: another-counter 15;

/* Reversed counters */
counter-reset: reversed(my-counter);
counter-reset: reversed(my-counter) 3;
counter-reset: reversed(another-counter) 15;

/* Multiple counters */
counter-reset: my-counter -3 another-counter 15;
counter-reset: reversed(pages) items 1 reversed(sections) 4;

/* Global values */
counter-reset: inherit;
counter-reset: initial;
counter-reset: revert;
counter-reset: revert-layer;
counter-reset: unset;
```

### Werte

Diese Eigenschaft wird als durch Leerzeichen getrennte Liste von Namen regulärer oder rückwärts zählender Zähler angegeben. Auf jeden Namen kann optional ein `<integer>` folgen. Alternativ kann das Schlüsselwort `none` angegeben werden:

- {{cssxref("&lt;custom-ident&gt;")}}
  - : Gibt den Namen des Zählers an, der erstellt und initialisiert werden soll. Mit der Funktionsnotation `reversed()` kann ein rückwärts zählender Zähler erstellt werden.
- {{cssxref("&lt;integer&gt;")}}
  - : Gibt den Anfangswert des neu erstellten Zählers an.
    Wenn kein Wert angegeben wird, beträgt der Standardwert für reguläre Zähler `0`. Der Anfangswert rückwärts zählender Zähler wird automatisch berechnet.
- `none`
  - : Gibt an, dass keine Zähler erstellt werden.

## Beschreibung

Mit der Eigenschaft `counter-reset` können benannte [Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) oder rückwärts zählende Zähler erstellt und initialisiert werden, um Elemente aufsteigend oder absteigend zu nummerieren.

Mit dem Wert `none` lässt sich eine `counter-reset`-Deklaration in einer Regel mit geringerer Spezifität überschreiben.

> [!WARNING]
> Zwischen den Eigenschaften `counter-reset` und `counter-set` [besteht ein Unterschied](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters#difference_between_counter-set_and_counter-reset). Nachdem Sie mit `counter-reset` einen Zähler erstellt haben, können Sie dessen Wert mit der Eigenschaft {{cssxref("counter-set")}} anpassen. Das ist nicht unmittelbar einleuchtend: Trotz ihres Namens erstellt und initialisiert die Eigenschaft `counter-reset` Zähler, während die Eigenschaft `counter-set` den Wert bestehender Zähler zurücksetzt.

Trennen Sie mehrere Zählernamen oder Name-Wert-Paare durch Leerzeichen. Für reguläre Zähler gilt das Format `<counter-name>`, für rückwärts zählende Zähler das Format `reversed(<counter-name>)`. Dabei ist `<counter-name>` ein {{cssxref("custom-ident", "&lt;custom-ident&gt;")}} oder `list-item` für den integrierten Zähler von {{HTMLElement("ol")}}.

### Standardanfangswerte

Wenn Sie reguläre und rückwärts zählende Zähler ohne Ganzzahl deklarieren, können Sie die beiden häufigsten Nummerierungsmuster umsetzen: aufsteigendes Zählen von `1` bis zur Anzahl der Elemente und absteigendes Zählen von der Anzahl der Elemente bis `1`, jeweils in Schritten von `1`. Indem Sie für einen benannten Zähler einen Anfangswert angeben, können Sie seinen Startwert ändern. Die Schrittweite beim Erhöhen oder Verringern lässt sich mit der Eigenschaft {{cssxref("counter-increment")}} anpassen.

Das folgende Beispiel erstellt drei Zähler. Die Zähler `chapter` und `page` erhalten den Standardanfangswert `0`, während `section` auf `4` gesetzt wird:

```css
h1 {
  counter-reset: chapter section 4 page;
}
```

Rückwärts zählende Zähler, die ohne `<integer>` erstellt werden, erhalten einen automatisch berechneten Anfangswert. Der Browser zählt die Elemente der Gruppe und berechnet den Anfangswert so, dass der Zähler beim letzten Element der Gruppe den Wert `1` hat, wenn `counter-increment` auf `-1` gesetzt ist und der benannte Zähler somit für jedes Element um `1` verringert wird.

Das folgende Beispiel erstellt zwei rückwärts zählende Zähler, `chapter` und `section`, sowie einen regulären Zähler, `pages`. Der Zähler `section` beginnt bei `10`, und `pages` verwendet den Standardanfangswert `0`. Der Anfangswert des Zählers `chapter` wird automatisch berechnet. Der Zähler wird bei jedem `<h2>` um `1` verringert, sodass sein Wert beim letzten `<h2>` `1` beträgt.

```css
h1 {
  counter-reset: reversed(chapter) reversed(section) 10 pages;
}
h2 {
  counter-increment: chapter -1;
}
```

### Integrierter Zähler `list-item`

Geordnete Listen ({{HTMLElement("ol")}}) verfügen über integrierte `list-item`-Zähler, die ihre Nummerierung steuern. Diese Zähler erhöhen oder verringern sich bei jedem Listenelement automatisch um eins. Mit der Eigenschaft `counter-reset` können Sie die `list-item`-Zähler zurücksetzen. Wie bei anderen Zählern können Sie den standardmäßigen Wert für die Erhöhung von `list-item`-Zählern mit der Eigenschaft {{cssxref("counter-increment")}} überschreiben.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Zähler `list-item` überschreiben

In diesem Beispiel wird mit der Eigenschaft `counter-reset` ein Startwert für einen impliziten `list-item`-Zähler festgelegt.

#### HTML

Wir verwenden eine geordnete Liste ({{htmlelement("ol")}}) mit fünf Listenelementen ({{htmlelement("li")}}).

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

Mit `counter-reset` legen wir fest, dass der implizite `list-item`-Zähler mit einem anderen Wert als dem Standardwert `1` beginnt:

```css
ol {
  counter-reset: list-item 3;
}
```

#### Ergebnis

{{EmbedLiveSample("Overriding the list-item counter", 140, 200)}}

Das erste Element trägt die Nummer `4`. Dies entspricht ungefähr der Wirkung von [`<ol start="4">`](/de/docs/Web/HTML/Reference/Elements/ol#start) in HTML.

### Einen rückwärts zählenden Zähler verwenden

In diesem Beispiel wird mit der Funktion `reversed()` ein rückwärts zählender Zähler namens `priority` erstellt, der fünf Aufgaben nummeriert.

#### HTML

Wir verwenden eine ungeordnete Liste ({{htmlelement("ul")}}) mit fünf Listenelementen ({{htmlelement("li")}}).

```html
<ul class="stack">
  <li>Task A</li>
  <li>Task B</li>
  <li>Task C</li>
  <li>Task D</li>
  <li>Task E</li>
</ul>
```

#### CSS

Wir erstellen für `<ul>` einen rückwärts zählenden Zähler namens `priority` und entfernen die standardmäßigen Aufzählungszeichen. Bei jedem `<li>` verringern wir den Zähler um `1`. Anschließend verwenden wir generierten Inhalt, um den Zählerwert vor dem Inhalt jedes Listenelements anzuzeigen.

```css
.stack {
  counter-reset: reversed(priority);
  list-style: none;
}
li {
  counter-increment: priority -1;
}
li::before {
  content: counter(priority) ". ";
}
```

```css hidden
@supports not (counter-reset: reversed(priority)) {
  body::before {
    content: "Your browser doesn't support the reversed() function.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Using a reverse counter", 140, 150)}}

Die Elemente sind rückwärts von `5` bis `1` nummeriert. Beachten Sie, dass wir keinen Anfangswert für den Zähler angegeben haben. Der Browser berechnet ihn automatisch beim Layout.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden [CSS-Zähler verwenden](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- Eigenschaft {{cssxref("counter-increment")}}
- Eigenschaft {{cssxref("counter-set")}}
- At-Regel {{cssxref("@counter-style")}}
- Funktionen {{cssxref("counter()")}} und {{cssxref("counters()")}}
- Eigenschaft {{cssxref("content")}}
- Pseudoelement {{cssxref("::marker")}}
- Modul [CSS-Listen und -Zähler](/de/docs/Web/CSS/Guides/Lists)
- Modul [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles)
