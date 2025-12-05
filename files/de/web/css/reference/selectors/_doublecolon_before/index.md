---
title: ::before
slug: Web/CSS/Reference/Selectors/::before
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Im CSS erzeugt **`::before`** ein [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), das das erste Kind des ausgewählten Elements ist. Es wird häufig verwendet, um einem Element mit der {{cssxref("content")}}-Eigenschaft kosmetische Inhalte hinzuzufügen. Standardmäßig ist es inline.

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

Das `::before`-Pseudo-Element ist ein Inline-Block, der als unmittelbares Kind des Elements generiert wird, mit dem es verbunden ist, oder des "auslösenden Elements". Es wird oft verwendet, um einem Element über die {{CSSxRef("content")}}-Eigenschaft kosmetische Inhalte hinzuzufügen, wie z. B. Symbole, Anführungszeichen oder andere Verzierungen.

`::before`-Pseudo-Elemente können nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ wie {{htmlelement("img")}} angewendet werden, deren Inhalt durch externe Ressourcen bestimmt wird und nicht durch die Styles des aktuellen Dokuments beeinflusst wird.

Ein `::before`-Pseudo-Element mit einem {{cssxref("display")}}-Wert von `list-item` verhält sich wie ein Listenelement und kann daher ein {{cssxref("::marker")}}-Pseudo-Element genauso generieren wie ein {{htmlelement("li")}}-Element.

Wenn die {{cssxref("content")}}-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, wird das `::before`-Pseudo-Element nicht dargestellt. Es verhält sich, als wäre `display: none` gesetzt.

> [!NOTE]
> Die [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content)-Spezifikation führte die Doppelpunkt-Notation `::before` ein, um [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die in CSS2 eingeführte Einfachpunkt-Notation `:before`.

Standardmäßig teilen `::before` und `::after`-Pseudo-Elemente denselben Stapelkontext wie ihr übergeordnetes Element. Wenn kein {{cssxref("z-index")}} explizit gesetzt ist, erscheint der vom `::after`-Pseudo-Element generierte Inhalt über dem vom `::before`-Pseudo-Element generierten, da `::after` später im DOM-Fluss gerendert wird.

## Barrierefreiheit

Die Verwendung eines `::before`-Pseudo-Elements zur Hinzufügung von Inhalten wird nicht empfohlen, da es für Screenreader nicht zuverlässig zugänglich ist.

## Beispiele

### Anführungszeichen

Ein Beispiel für die Verwendung von `::before`-Pseudo-Elementen ist das Einfügen von Anführungszeichen. Hier verwenden wir sowohl `::before` als auch {{Cssxref("::after")}}, um Anführungszeichen einzufügen.

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

{{EmbedLiveSample('Adding_quotation_marks', '500', '50')}}

### Dekoratives Beispiel

Wir können Text oder Bilder in der {{cssxref("content")}}-Eigenschaft nahezu beliebig gestalten.

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

In diesem Beispiel erstellen wir eine Aufgabenliste mit Pseudo-Elementen. Diese Methode kann oft verwendet werden, um der Benutzeroberfläche kleine Details hinzuzufügen und die Benutzererfahrung zu verbessern.

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

Hier läuft das obige Codebeispiel live. Beachten Sie, dass keine Symbole verwendet werden und das Häkchen tatsächlich das `::before` ist, das in CSS gestaltet wurde. Legen Sie los und erledigen Sie einige Aufgaben.

#### Ergebnis

{{EmbedLiveSample('To-do_list', 400, 300)}}

### Unicode-Escape-Sequenzen

Da generierte Inhalte CSS und keine HTML sind, können Sie **keine** Markup-Entitäten in den Inhaltswerten verwenden. Wenn Sie ein Sonderzeichen verwenden müssen und es nicht direkt in Ihren CSS-Inhaltsstring eingeben können, verwenden Sie eine Unicode-Escape-Sequenz. Diese besteht aus einem Backslash, gefolgt vom hexadezimalen Unicode-Wert des Zeichens.

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

{{EmbedLiveSample('Special_characters', 400, 200)}}

### `::before::marker` geschachtelte Pseudo-Elemente

Das `::before::marker` [geschachtelte Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#nesting_pseudo-elements) wählt das Listen-{{CSSxRef("::marker")}} eines `::before`-Pseudo-Elements aus, das selbst ein Listenelement ist, d.h. es hat seine {{CSSxRef("display")}}-Eigenschaft auf `list-item` gesetzt.

In dieser Demo generieren wir zusätzliche [Listenelemente](/de/docs/Web/HTML/Reference/Elements/li) vor und nach einem Navigationsmenü mit `::before` und `::after` (indem wir sie auf `display: list-item` setzen, damit sie sich wie Listenpunkte verhalten). Wir verwenden dann `ul::before::marker` und `ul::after::marker`, um ihren Listenmarkierungen eine andere Farbe zu geben.

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

Während die Listenpunkte der drei Navigationselemente generiert werden, weil sie `<li>`-Elemente sind, wurden "Start" und "Ende" über Pseudo-Elemente eingefügt und `::marker` wird verwendet, um ihre Aufzählungszeichen zu gestalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
