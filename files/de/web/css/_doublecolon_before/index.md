---
title: "::before"
slug: Web/CSS/::before
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

In CSS erzeugt **`::before`** ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), das das erste Kind des ausgewählten Elements ist. Es wird häufig verwendet, um einem Element mit der {{cssxref("content")}}-Eigenschaft kosmetische Inhalte hinzuzufügen. Es ist standardmäßig inline.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-before.html", "tabbed-standard")}}

> [!NOTE]
> Die durch `::before` und `::after` generierten Pseudoelemente sind Boxen, die so erzeugt werden, als wären sie unmittelbare Kinder des Elements, auf das sie angewendet werden, oder des "ursprünglichen Elements", und können daher nicht auf _[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)_ wie {{htmlelement("img")}} angewendet werden, deren Inhalt außerhalb des Geltungsbereichs des CSS-Formatierungsmodells liegt.

## Syntax

```css-nolint
::before {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, wird das `::before` Pseudoelement nicht gerendert. Es verhält sich, als ob `display: none` gesetzt wäre.

> **Hinweis:** [Selectors Level 3](https://drafts.csswg.org/selectors-3/#gen-content) führte die Doppelpunktnotation `::before` ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Browser akzeptieren auch die in CSS2 eingeführte Einzelpunktnotation `:before`.

## Barrierefreiheit

Die Verwendung eines `::before` Pseudoelements zum Hinzufügen von Inhalten wird nicht empfohlen, da es für Bildschirmlesegeräte nicht zuverlässig zugänglich ist.

## Beispiele

### Hinzufügen von Anführungszeichen

Ein einfaches Beispiel für die Verwendung von `::before` Pseudoelementen ist das Hinzufügen von Anführungszeichen. Hier verwenden wir sowohl `::before` als auch {{Cssxref("::after")}}, um Anführungszeichen einzufügen.

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

Wir können Text oder Bilder in der {{cssxref("content")}}-Eigenschaft fast nach Belieben gestalten.

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

In diesem Beispiel erstellen wir eine einfache Aufgabenliste mit Pseudoelementen. Diese Methode kann oft verwendet werden, um kleine Akzente zur Benutzeroberfläche hinzuzufügen und die Benutzererfahrung zu verbessern.

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

Hier läuft das obige Codebeispiel live. Beachten Sie, dass keine Icons verwendet werden und das Häkchen tatsächlich das `::before` ist, das in CSS gestaltet wurde. Machen Sie sich bereit, einige Aufgaben zu erledigen.

#### Ergebnis

{{EmbedLiveSample('To-do_list', 400, 300)}}

### Sonderzeichen

Da dies CSS ist, nicht HTML, können Sie in Inhaltswerten **keine** Markup-Entitäten verwenden. Wenn Sie ein Sonderzeichen verwenden müssen und es nicht direkt in Ihre CSS-Inhaltszeichenfolge eingeben können, verwenden Sie eine Unicode-Escape-Sequenz, bestehend aus einem Backslash, gefolgt vom hexadezimalen Unicode-Wert.

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
