---
title: "::before"
slug: Web/CSS/::before
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Im CSS erzeugt **`::before`** ein [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements), das das erste Kind des ausgewählten Elements ist. Es wird oft verwendet, um einem Element mit der Eigenschaft {{cssxref("content")}} kosmetischen Inhalt hinzuzufügen. Es ist standardmäßig inline.

{{InteractiveExample("CSS Demo: ::before", "tabbed-standard")}}

```css interactive-example
a {
  color: #0000ff;
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

> [!NOTE]
> Die durch `::before` und `::after` erzeugten Pseudo-Elemente sind Boxen, die so erzeugt werden, als wären sie unmittelbare Kinder des Elements, auf das sie angewendet werden, oder des "ursprünglichen Elements", und können daher nicht auf _[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)_ angewendet werden, wie z.B. {{htmlelement("img")}}, deren Inhalt außerhalb des Rahmens des CSS-Formatierungsmodells liegt.

## Syntax

```css-nolint
::before {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, dann wird das `::before` Pseudo-Element nicht angezeigt. Es verhält sich, als ob `display: none` gesetzt wäre.

> **Hinweis:** [Selektoren Level 3](https://drafts.csswg.org/selectors-3/#gen-content) führte die Doppelpunkt-Notation `::before` ein, um [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die Einzelpunktnotation `:before`, die in CSS2 eingeführt wurde.

## Barrierefreiheit

Die Verwendung eines `::before` Pseudo-Elements zur Hinzufügung von Inhalten wird nicht empfohlen, da es für Bildschirmleser nicht zuverlässig zugänglich ist.

## Beispiele

### Anführungszeichen hinzufügen

Ein Beispiel für die Verwendung von `::before` Pseudo-Elementen besteht darin, Anführungszeichen hinzuzufügen. Hier verwenden wir sowohl `::before` als auch {{Cssxref("::after")}}, um Anführungszeichen einzufügen.

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

Wir können Text oder Bilder in der {{cssxref("content")}}-Eigenschaft fast beliebig stylen.

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

### To-do-Liste

In diesem Beispiel erstellen wir eine To-do-Liste mit Pseudo-Elementen. Diese Methode kann oft verwendet werden, um der Benutzeroberfläche kleine Details hinzuzufügen und die Benutzererfahrung zu verbessern.

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
list.addEventListener(
  "click",
  (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("done");
    }
  },
  false,
);
```

Hier ist das obige Codebeispiel live in Aktion. Beachten Sie, dass keine Symbole verwendet werden und dass das Häkchen tatsächlich das `::before` ist, das in CSS gestylt wurde. Legen Sie los und erledigen Sie ein paar Aufgaben.

#### Ergebnis

{{EmbedLiveSample('To-do_list', 400, 300)}}

### Sonderzeichen

Da dies CSS und nicht HTML ist, können Sie **nicht** Markup-Entitäten in Inhaltswerten verwenden. Wenn Sie ein Sonderzeichen verwenden müssen und es nicht direkt in Ihre CSS-Inhaltszeichenfolge eingeben können, verwenden Sie eine Unicode-Escape-Sequenz, bestehend aus einem Backslash gefolgt vom hexadezimalen Unicode-Wert.

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

li[aria-current="step"]::after {
  content: " \21E6"; /* Hexadecimal for Unicode Leftwards white arrow*/
  display: inline;
}
```

#### Ergebnis

{{EmbedLiveSample('Special_characters', 400, 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref("::after")}}
- {{Cssxref("content")}}
