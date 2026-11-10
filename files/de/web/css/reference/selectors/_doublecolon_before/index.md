---
title: "`::before` CSS pseudo-element"
short-title: ::before
slug: Web/CSS/Reference/Selectors/::before
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

In CSS erzeugt **`::before`** ein [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), das das erste Kindelement des ausgewählten Elements ist. Es wird häufig verwendet, um einem Element mithilfe der Eigenschaft {{cssxref("content")}} dekorativen Inhalt hinzuzufügen. Standardmäßig ist es ein Inline-Element.

{{InteractiveExample("CSS Demo: ::before", "tabbed-standard")}}

```css interactive-example
a {
  color: blue;
  text-decoration: none;
}

a::before {
  content: "🔗";
}

.local-link::before {
  content: url("/shared-assets/images/examples/firefox-logo.svg");
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
```

```html interactive-example
<p>
  Learning resources for web developers can be found all over the internet. Try
  out
  <a href="https://web.dev/">web.dev</a>,
  <a href="https://www.w3schools.com/">w3schools.com</a> or our
  <a href="https://developer.mozilla.org/" class="local-link">MDN web docs</a>.
</p>
```

## Syntax

```css-nolint
::before {
  content: /* value */;
  /* properties */
}
```

## Beschreibung

Das Pseudoelement `::before` ist eine Inline-Box, die als unmittelbares Kindelement des Elements erzeugt wird, dem es zugeordnet ist – des sogenannten „Ursprungselements“. Es wird häufig verwendet, um einem Element über die Eigenschaft {{CSSxRef("content")}} dekorativen Inhalt wie Symbole, Anführungszeichen oder andere Verzierungen hinzuzufügen.

`::before`-Pseudoelemente können nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ wie {{htmlelement("img")}} angewendet werden, deren Inhalt durch externe Ressourcen bestimmt wird und nicht von den Stilen des aktuellen Dokuments beeinflusst wird.

Ein `::before`-Pseudoelement mit dem Wert `list-item` für {{cssxref("display")}} verhält sich wie ein Listenelement und kann daher ebenso wie ein {{htmlelement("li")}}-Element ein {{cssxref("::marker")}}-Pseudoelement erzeugen.

Wenn die Eigenschaft {{cssxref("content")}} nicht angegeben ist, einen ungültigen Wert hat oder den Wert `normal` oder `none` besitzt, wird das `::before`-Pseudoelement nicht gerendert. Es verhält sich dann so, als wäre `display: none` gesetzt.

> [!NOTE]
> Die Spezifikation [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) führte die Schreibweise mit doppeltem Doppelpunkt `::before` ein, um [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die mit CSS2 eingeführte Schreibweise mit einfachem Doppelpunkt `:before`.

Standardmäßig teilen sich die Pseudoelemente `::before` und `::after` denselben Stapelkontext wie ihr Elternelement. Wenn kein {{cssxref("z-index")}} ausdrücklich festgelegt ist, erscheint der erzeugte Inhalt des Pseudoelements `::after` über dem erzeugten Inhalt des Pseudoelements `::before`, da `::after` im DOM-Ablauf später gerendert wird.

## Barrierefreiheit

Es wird davon abgeraten, Inhalte mit einem `::before`-Pseudoelement hinzuzufügen, da diese für Screenreader nicht zuverlässig zugänglich sind.

## Beispiele

### Anführungszeichen

Eine Möglichkeit, `::before`-Pseudoelemente zu verwenden, besteht darin, Anführungszeichen bereitzustellen. Hier verwenden wir sowohl `::before` als auch {{Cssxref("::after")}}, um Anführungszeichen einzufügen.

#### HTML

```html
<q>Some quotes</q>, he said, <q>are better than none.</q>
```

#### CSS

```css
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('quotation_marks', '500', '50')}}

### Dekoratives Beispiel

Text oder Bilder in der Eigenschaft {{cssxref("content")}} können wir nahezu beliebig gestalten.

#### HTML

```html
<span class="ribbon">Notice where the orange box is.</span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::before {
  content: "Look at this orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Ergebnis

{{EmbedLiveSample('Decorative_example', 450, 60)}}

### Aufgabenliste

In diesem Beispiel erstellen wir mithilfe von Pseudoelementen eine Aufgabenliste. Mit dieser Methode lassen sich häufig kleine Details zur Benutzeroberfläche hinzufügen und die Benutzererfahrung verbessern.

#### HTML

```html
<ul>
  <li>Buy milk</li>
  <li>Take the dog for a walk</li>
  <li>Exercise</li>
  <li>Write code</li>
  <li>Play music</li>
  <li>Relax</li>
</ul>
```

#### CSS

```css
li {
  list-style-type: none;
  position: relative;
  margin: 2px;
  padding: 0.5em 0.5em 0.5em 2em;
  background: lightgrey;
  font-family: sans-serif;
}

li.done {
  background: #ccff99;
}

li.done::before {
  content: "";
  position: absolute;
  border-color: #009933;
  border-style: solid;
  border-width: 0 0.3em 0.25em 0;
  height: 1em;
  top: 1.3em;
  left: 0.6em;
  margin-top: -1em;
  transform: rotate(45deg);
  width: 0.5em;
}
```

#### JavaScript

```js
const list = document.querySelector("ul");
list.addEventListener("click", (ev) => {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("done");
  }
});
```

Hier sehen Sie das obige Codebeispiel in Aktion. Beachten Sie, dass keine Symbole verwendet werden: Das Häkchen ist tatsächlich ein mit CSS gestaltetes `::before`-Pseudoelement. Probieren Sie es aus und erledigen Sie ein paar Aufgaben.

#### Ergebnis

{{EmbedLiveSample('To-do_list', 400, 300)}}

### Unicode-Escapesequenzen

Da erzeugter Inhalt CSS und nicht HTML ist, können Sie in Werten von `content` **keine** HTML-Entities verwenden. Wenn Sie ein Sonderzeichen benötigen und es nicht direkt in die CSS-Zeichenfolge eingeben können, verwenden Sie eine Unicode-Escapesequenz. Diese besteht aus einem umgekehrten Schrägstrich, gefolgt vom hexadezimalen Unicode-Wert des Zeichens.

#### HTML

```html
<ol>
  <li>Crack Eggs into bowl</li>
  <li>Add Milk</li>
  <li>Add Flour</li>
  <li aria-current="step">Mix thoroughly into a smooth batter</li>
  <li>Pour a ladleful of batter onto a hot, greased, flat frying pan</li>
  <li>Fry until the top of the pancake loses its gloss</li>
  <li>Flip it over and fry for a couple more minutes</li>
  <li>serve with your favorite topping</li>
</ol>
```

#### CSS

```css
li {
  padding: 0.5em;
}

li[aria-current="step"] {
  font-weight: bold;
}

li[aria-current="step"]::before {
  content: "\21E8 "; /* Unicode escape sequence for "Rightwards White Arrow" */
  display: inline;
}
```

#### Ergebnis

{{EmbedLiveSample('unicode_escape_sequences', 400, 200)}}

### Verschachtelte Pseudoelemente mit `::before::marker`

Das [verschachtelte Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) `::before::marker` wählt den Listenmarker {{CSSxRef("::marker")}} eines `::before`-Pseudoelements aus, das selbst ein Listenelement ist, dessen Eigenschaft {{CSSxRef("display")}} also auf `list-item` gesetzt ist.

In dieser Demo erzeugen wir mit `::before` und `::after` zusätzliche [Listenelemente](/de/docs/Web/HTML/Reference/Elements/li) vor und nach einem Navigationsmenü in Listenform. Dazu setzen wir sie auf `display: list-item`, damit sie sich wie Listenelemente verhalten. Anschließend verwenden wir `ul::before::marker` und `ul::after::marker`, um ihren Listenmarkern eine andere Farbe zu geben.

#### HTML

```html
<ul>
  <li><a href="#">Introduction</a></li>
  <li><a href="#">Getting started</a></li>
  <li><a href="#">Understanding the basics</a></li>
</ul>
```

#### CSS

```css
ul {
  font-size: 1.5rem;
  font-family: "Helvetica", "Arial", sans-serif;
}

ul::before,
ul::after {
  display: list-item;
  color: orange;
}

ul::before {
  content: "Start";
}

ul::after {
  content: "End";
}

ul::before::marker,
ul::after::marker {
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('`::before::marker` nested pseudo-elements', 450, 200)}}

Die Listenpunkte der drei Navigationseinträge werden erzeugt, weil es sich um `<li>`-Elemente handelt. „Start“ und „End“ wurden dagegen über Pseudoelemente eingefügt; ihre Listenpunkte werden mit `::marker` gestaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
