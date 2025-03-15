---
title: ::before
slug: Web/CSS/::before
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Im CSS erzeugt **`::before`** ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), das das erste Kind des ausgewählten Elements ist. Es wird häufig verwendet, um mit der {{cssxref("content")}}-Eigenschaft ein kosmetisches Element hinzuzufügen. Standardmäßig ist es inline.

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
> Die durch `::before` und `::after` erzeugten Pseudoelemente sind Boxen, die erzeugt werden, als ob sie unmittelbare Kinder des Elements wären, auf dem sie angewendet werden, oder des "ursprünglichen Elements", und können daher nicht auf _{{Glossary("replaced_elements", "ersetzte Elemente")}}_ wie {{htmlelement("img")}} angewendet werden, deren Inhalt außerhalb des CSS-Formatierungsmodells liegt.

## Syntax

```css-nolint
::before {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht spezifiziert ist, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, wird das `::before`-Pseudoelement nicht gerendert. Es verhält sich, als ob `display: none` gesetzt wäre.

> **Hinweis:** [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) führte die Doppelpunkt-Notation `::before` ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die Einfache-Doppelpunkt-Notation `:before`, die in CSS2 eingeführt wurde.

## Barrierefreiheit

Die Verwendung eines `::before`-Pseudoelements zur Hinzufügung von Inhalten wird nicht empfohlen, da es für Bildschirmleser nicht zuverlässig zugänglich ist.

## Beispiele

### Hinzufügen von Anführungszeichen

Ein Beispiel für die Verwendung von `::before`-Pseudoelementen ist das Bereitstellen von Anführungszeichen. Hier verwenden wir sowohl `::before` als auch {{Cssxref("::after")}}, um Anführungszeichen einzufügen.

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

Wir können Text oder Bilder in der {{cssxref("content")}}-Eigenschaft auf fast jede gewünschte Art und Weise gestalten.

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

### To-Do-Liste

In diesem Beispiel erstellen wir eine To-Do-Liste mit Pseudoelementen. Diese Methode kann häufig verwendet werden, um kleine Anpassungen an der Benutzeroberfläche vorzunehmen und die Benutzererfahrung zu verbessern.

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

Hier ist das obige Codebeispiel in Echtzeit. Beachten Sie, dass keine Symbole verwendet wurden und dass das Häkchen tatsächlich das `::before` ist, das in CSS gestaltet wurde. Gehen Sie weiter und erledigen Sie ein paar Dinge.

#### Ergebnis

{{EmbedLiveSample('To-do_list', 400, 300)}}

### Sonderzeichen

Da es sich um CSS handelt, nicht um HTML, können Sie in Content-Werten **keine** Markup-Entitäten verwenden. Wenn Sie ein Sonderzeichen verwenden müssen und es nicht direkt in Ihren CSS-Inhaltsstring eingeben können, verwenden Sie eine Unicode-Escape-Sequenz, die aus einem umgekehrten Schrägstrich gefolgt vom hexadezimalen Unicode-Wert besteht.

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
