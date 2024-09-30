---
title: "::after"
slug: Web/CSS/::after
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Im CSS erzeugt **`::after`** ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird oft verwendet, um kosmetische Inhalte zu einem Element mit der {{CSSxRef("content")}}-Eigenschaft hinzuzufügen. Standardmäßig ist es inline.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-after.html", "tabbed-standard")}}

> [!NOTE]
> Die durch `::before` und `::after` erzeugten Pseudoelemente sind Inline-Boxen, die erzeugt werden, als wären sie unmittelbare Kinder des Elements, auf das sie angewendet werden, oder des "ursprünglichen Elements", und können daher nicht auf _[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)_, wie z.B. {{htmlelement("img")}}, angewendet werden, deren Inhalte ersetzt werden und nicht von den Stilregeln des aktuellen Dokuments beeinflusst werden.

## Syntax

```css-nolint
::after {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder `normal` oder `none` als Wert hat, wird das `::after` Pseudoelement nicht dargestellt. Es verhält sich, als wäre `display: none` gesetzt.

> [!NOTE]
> CSS führte die `::after`-Notation (mit zwei Doppelpunkten) ein, um [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Aus Gründen der Abwärtskompatibilität akzeptieren Browser auch `:after`, das früher eingeführt wurde.

## Barrierefreiheit

Die Verwendung eines `::after` Pseudoelements zur Hinzufügung von Inhalten wird nicht empfohlen, da es nicht zuverlässig für Bildschirmleser zugänglich ist.

## Beispiele

### Einfache Verwendung

Erstellen wir zwei Klassen: eine für langweilige Absätze und eine für aufregende. Wir können diese Klassen verwenden, um Pseudoelemente am Ende von Absätzen hinzuzufügen.

#### HTML

```html
<p class="boring-text">Here is some plain old boring text.</p>
<p>Here is some normal text that is neither boring nor exciting.</p>
<p class="exciting-text">Contributing to MDN is easy and fun.</p>
```

#### CSS

```css
.exciting-text::after {
  content: " <- EXCITING!";
  color: green;
}

.boring-text::after {
  content: " <- BORING";
  color: red;
}
```

#### Ergebnis

{{EmbedLiveSample('Simple_usage', 500, 150)}}

### Dekoratives Beispiel

Wir können Text oder Bilder in der {{CSSxRef("content")}}-Eigenschaft fast beliebig gestalten.

#### HTML

```html
<span class="ribbon">Look at the orange box after this text. </span>
```

#### CSS

```css
.ribbon {
  background-color: #5bc8f7;
}

.ribbon::after {
  content: "This is a fancy orange box.";
  background-color: #ffba10;
  border-color: black;
  border-style: dotted;
}
```

#### Ergebnis

{{EmbedLiveSample('Decorative_example', 450, 20)}}

### Tooltips

Dieses Beispiel verwendet `::after` in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/attr) CSS-Ausdruck und einem `data-descr` [benutzerdefinierten Datensatzattribut](/de/docs/Web/HTML/Global_attributes/data-*), um Tooltips zu erstellen. Kein JavaScript erforderlich!

Mit dieser Technik können wir auch Tastaturnutzer unterstützen, indem wir einen `tabindex` von `0` hinzufügen, um jedes `span` mit der Tastatur ansprechbar zu machen und einen CSS-`:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für die am besten zugängliche Erfahrung ein semantisches Offenlegungs-Widget, das auf andere Weise erstellt wurde (zum Beispiel mit [Details- und Summary-Elementen](/de/docs/Web/HTML/Element/details)), wahrscheinlich geeigneter ist.

#### HTML

```html
<p>
  Here we have some
  <span tabindex="0" data-descr="collection of words and punctuation">
    text
  </span>
  with a few
  <span tabindex="0" data-descr="small popups that appear when hovering">
    tooltips</span
  >.
</p>
```

#### CSS

```css
span[data-descr] {
  position: relative;
  text-decoration: underline;
  color: #00f;
  cursor: help;
}

span[data-descr]:hover::after,
span[data-descr]:focus::after {
  content: attr(data-descr);
  position: absolute;
  left: 0;
  top: 24px;
  min-width: 200px;
  border: 1px #aaaaaa solid;
  border-radius: 10px;
  background-color: #ffffcc;
  padding: 12px;
  color: #000000;
  font-size: 14px;
  z-index: 1;
}
```

#### Ergebnis

{{EmbedLiveSample('Tooltips', 450, 120)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("::before")}}
- {{CSSxRef("content")}}
