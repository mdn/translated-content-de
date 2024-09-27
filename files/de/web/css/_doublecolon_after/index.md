---
title: "::after"
slug: Web/CSS/::after
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

In CSS erzeugt **`::after`** ein [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements), das das letzte Kind des ausgewählten Elements ist. Es wird häufig verwendet, um einem Element mit der {{CSSxRef("content")}}-Eigenschaft kosmetischen Inhalt hinzuzufügen. Standardmäßig ist es inline.

{{EmbedInteractiveExample("pages/tabbed/pseudo-element-after.html", "tabbed-standard")}}

> [!NOTE]
> Die durch `::before` und `::after` generierten Pseudo-Elemente sind Inline-Boxen, die so generiert werden, als wären sie unmittelbare Kinder des Elements, auf dem sie angewendet werden, oder des "ursprünglichen Elements", und können daher nicht auf _[ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)_ angewendet werden, wie z.B. {{htmlelement("img")}}, deren Inhalte ersetzt werden und nicht von den Stilen des aktuellen Dokuments beeinflusst werden.

## Syntax

```css-nolint
::after {
  content: /* value */;
  /* properties */
}
```

Wenn die [`content`](/de/docs/Web/CSS/content)-Eigenschaft nicht angegeben ist, einen ungültigen Wert hat oder den Wert `normal` oder `none` hat, wird das `::after`-Pseudo-Element nicht gerendert. Es verhält sich so, als ob `display: none` gesetzt wäre.

> [!NOTE]
> CSS führte die `::after`-Notation (mit zwei Doppelpunkten) ein, um [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) zu unterscheiden. Zur Rückwärtskompatibilität akzeptieren Browser auch `:after`, das früher eingeführt wurde.

## Zugänglichkeit

Die Verwendung eines `::after`-Pseudo-Elements zum Hinzufügen von Inhalten wird nicht empfohlen, da es nicht zuverlässig für Screenreader zugänglich ist.

## Beispiele

### Einfache Verwendung

Erstellen wir zwei Klassen: eine für langweilige Absätze und eine für spannende. Wir können diese Klassen verwenden, um Pseudo-Elemente am Ende von Absätzen hinzuzufügen.

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

Dieses Beispiel verwendet `::after` in Verbindung mit dem [`attr()`](/de/docs/Web/CSS/attr)-CSS-Ausdruck und einem `data-descr` [benutzerdefiniertem Datensatzattribut](/de/docs/Web/HTML/Global_attributes/data-*), um Tooltips zu erstellen. Es wird kein JavaScript benötigt!

Wir können auch Tastaturbenutzer mit dieser Technik unterstützen, indem wir einen `tabindex` von `0` hinzufügen, damit jedes `span` über die Tastatur fokussierbar ist, und indem wir einen CSS-`:focus`-Selektor verwenden. Dies zeigt, wie flexibel `::before` und `::after` sein können, obwohl für die zugänglichste Erfahrung ein semantisches Offenlegungs-Widget, das auf andere Weise erstellt wurde (zum Beispiel mit [details und summary](/de/docs/Web/HTML/Element/details)-Elementen), wahrscheinlich angemessener wäre.

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
