---
title: CSS-Selektoren und Kombinatoren
short-title: Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

CSS-Selektoren werden verwendet, um ein Muster von Elementen zu definieren, die Sie auswählen möchten, um eine Reihe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Durch die Verwendung verschiedener Selektoren und Kombinatoren können Sie die gewünschten Elemente genau auswählen und stilisieren, basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können in die folgenden Kategorien gruppiert werden, basierend auf der Art der Elemente, die sie auswählen können.

### Grundlegende Selektoren

Der [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) wählt alle Elemente aus, die den gegebenen Knotennamen haben. Zum Beispiel wird `div` alle {{HTMLElement("div")}}-Elemente auswählen und `input` wird mit jedem {{HTMLElement("input")}}-Element übereinstimmen. Der [Universalselektor](/de/docs/Web/CSS/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typselektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Class_selectors) wählt alle Elemente aus, die das gegebene `class`-Attribut haben, dargestellt durch den Klassennamen, der einem Punkt (`.`) vorangestellt ist. Zum Beispiel wird `.index` mit jedem Element übereinstimmen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id`, die mit einem "Nummernzeichen" (U+0023, `#`) vorangestellt ist. Zum Beispiel wird `#toc` das Element auswählen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer gegebenen `id` in einem Dokument geben; aber wenn es mehr als eines gibt, wird der ID-Selektor alle Elemente mit dieser `id` übereinstimmen.

Wenn ein Typ- oder Universalselektor mit einem Klassen- oder ID-Selektor kombiniert wird, um einen [Zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder Universalselektor dem Klassen- oder ID-Selektor vorausgehen.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) unter Verwendung der vier grundlegenden Selektortypen, wie oben beschrieben.

```css
* {
  font-style: italic;
}
p {
  color: red;
}
.myClass {
  text-decoration: underline;
}
#myId {
  font-family: monospace;
}
p.myClass#myId {
  font-size: 1.5rem;
}
```

#### HTML

```html
<p class="myClass" id="myId">I match everything.</p>
<p>I match the universal and type selectors only.</p>
```

#### Ergebnis

{{EmbedLiveSample("Basic selectors", "100%", 120)}}

## Kombinatoren

Mithilfe von CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb des Dokument-Knotenbaums auszuwählen. Diese Kombination von Selektoren mit Kombinatoren erstellt [komplizierte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahren-Kombinator

Der [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator), dargestellt durch ein oder mehrere Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) ist spezifischer als der Nachfahren-Kombinator. Dargestellt durch das Größer-als-Zeichen (`>`), wählt der Kind-Kombinator Knoten aus, die direkte Kinder des ersten Elements sind. Verglichen mit unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Subsequent-Sibling-Kombinator

Neben Nachfahren-Selektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [Subsequent-Sibling-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), dargestellt durch eine Tilde (`~`), wählt Geschwister aus. Gegeben `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorausgegangen werden, wobei `A` und `B` denselben Elternteil teilen. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die einem {{HTMLElement("Heading_Elements", "h2")}} folgen, unmittelbar oder nicht.

### Next-Sibling-Kombinator

Der [Next-Sibling-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator), dargestellt durch das Pluszeichen (`+`), ist dem Subsequent-Sibling-Kombinator ähnlich. Jedoch, gegeben `A + B`, stimmt es nur mit `B` überein, wenn `B` unmittelbar von `A` vorausgegangen wird, wobei beide denselben Elternteil teilen. Gemäß unserem vorherigen Beispiel wird `h2 + p` nur das einzelne `<p>`-Element auswählen, das _unmittelbar_ einem `<h2>`-Element folgt.

### Spalten-Kombinator

Es gibt auch einen [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator), dargestellt durch zwei vertikale Balken (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente auswählen, die zum Bereich eines {{HTMLElement("col")}} gehören.

### Namensraum-Trenner

Der [Namensraum-Trenner](/de/docs/Web/CSS/Namespace_separator) ist ein weiterer Kombinator, der in der Regel in Verbindung mit der {{CSSXref("@namespace")}}-At-Regel verwendet wird. Dieser Kombinator wird durch ein einzelnes vertikales Zeichen (`|`) dargestellt. Er ermöglicht es, [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) und den [Universalselektor](/de/docs/Web/CSS/Universal_selectors) auf einen bestimmten Namensraum zu beschränken. Zum Beispiel, wenn ein Namensraum wie `@namespace SVG url('http://www.w3.org/2000/svg');` definiert wird, können Sie Selektoren einbeziehen, die nur Elemente im SVG-Namensraum ansprechen. Die Deklarierung `SVG|a` würde Links innerhalb von SVGs auswählen und nicht diejenigen im Rest des Dokuments. Die Verwendung von Namespaces kann nützlich sein, um MathML, SVG oder andere XML-basierte Inhalte innerhalb Ihres HTML anzuvisieren.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) unter Verwendung von [einfachen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) kombiniert mit Kombinatoren.

```css
h2 + p ~ p {
  font-style: italic;
}
h2 + p + p {
  color: red;
}
.myClass + p {
  text-decoration: underline;
}
#myId > .myClass {
  outline: 3px dashed red;
}
* > p {
  font-size: 1.1rem;
}
```

#### HTML

```html
<h2 class="myClass" id="myId">
  No selectors match. <span class="myClass">This span has an outline</span> as
  it is both myClass and a child of #myId.
</h2>
<p>The first paragraph is underlined. All the paragraphs are 1.1rem.</p>
<p>
  The second paragraph is red. This and the following paragraphs are italic.
</p>
<p>The third paragraph is NOT red. It is italic and 1.1rem.</p>
<p class="myClass">
  Does not have an outline; this is a sibling of H2, not a child. It is italic
  and 1.1rem.
</p>
```

#### Ergebnis

{{EmbedLiveSample("Combinators", "100%", 500)}}

### Erstellen komplexer Selektoren mit CSS-Verschachtelung

Die oben genannten komplexen Selektoren können auch mit einfachen Selektoren, Kombinatoren und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting), mit oder ohne den [`&` Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector), definiert werden.

#### CSS

In diesem Beispiel replizieren wir dieselben fünf relativen Selektoren, indem wir einfache Selektoren kombiniert mit Kombinatoren verwenden, dieses Mal jedoch mit CSS-Verschachtelung.

```css
h2 {
  & + p {
    & ~ p {
      font-style: italic;
    }
    & + p {
      color: red;
    }
  }
}
.myClass {
  & + p {
    text-decoration: underline;
  }
}
#myId {
  & > .myClass {
    outline: 3px dashed red;
  }
}
* {
  & > p {
    font-size: 1.1rem;
  }
}
```

#### HTML

```html
<h2 class="myClass" id="myId">
  No selectors match. <span class="myClass">This span has an outline</span> as
  it is both myClass and a child of #myId.
</h2>
<p>The first paragraph is underlined. All the paragraphs are 1.1rem.</p>
<p>
  The second paragraph is red. This and the following paragraphs are italic.
</p>
<p>The third paragraph is NOT red. It is italic and 1.1rem.</p>
<p class="myClass">
  Does not have an outline; this is a sibling of H2, not a child. It is italic
  and 1.1rem.
</p>
```

#### Ergebnis

{{EmbedLiveSample("creating_complex_selectors_with_css_nesting", "100%", 300)}}

## Attribut-Selektoren

[Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) wählen alle Elemente aus, die, je nachdem, wie der Selektor geschrieben ist, entweder das gegebene Attribut haben oder das gegebene Attribut mit einer Teilzeichenfolgenwertübereinstimmung haben.
Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut gesetzt haben (auf jeden Wert), und `[type="submit"]` wird `<input type="submit">` und `<button type="submit">` sowie jedes Element mit `type="submit"` gesetzt auswählen, auch wenn dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}}- und {{HTMLElement("button")}}-Elementen unterstützt wird. Die Übereinstimmung ist nicht fallabhängig.

Die Groß-/Kleinschreibung des Attributs hängt von der Sprache ab. Im Allgemeinen, in HTML, wenn ein Attribut {{Glossary("enumerated", "aufgezählt")}} wird, ist der Wert im Selektor nicht fallabhängig, auch wenn der Wert nicht einer der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht aufgezählte Attribute, wie `class`, `id` oder jedes `data-*`-Attribut, oder für nicht HTML-Attribute, wie `role` oder `aria-*`-Attribute, ist die Wertübereinstimmung kleinschreibungsabhängig; die Übereinstimmung kann mit einem nicht fallabhängigen Modifikator (`i`) fallunabhängig gemacht werden.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), denen ein Doppelpunkt (`:`) vorangestellt ist, die es ermöglichen, Elemente basierend auf Zustandsinformationen auszuwählen, die nicht im Dokumentbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stilisieren.
Zum Beispiel zielt der einfache Selektor {{cssxref(":target")}} auf ein Element einer URL, die einen Fragmentbezeichner enthält, und der [`a:visited`](/de/docs/Web/CSS/:visited) [zusammengesetzte Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) stimmt mit allen {{HTMLElement("a")}}-Elementen überein, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können in Kategorien wie [Elementanzeigezustand](/de/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [sprachlich](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [Ort](/de/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [zeitlich-dimensional](/de/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [Baum-strukturell](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) kategorisiert werden.

Mehrere Pseudo-Klassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Wenn eine Pseudo-Klasse in einen zusammengesetzten Selektor mit einem Typ- oder Universalselektor kombiniert wird, muss die Pseudo-Klasse dem Typselektor oder Universalselektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektoren-Modul](/de/docs/Web/CSS) definiert. CSS Pseudo-Element-Selektoren sind im [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements)-Modul definiert.

CSS [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit zwei Doppelpunkten (`::`) vorangestellt sind, repräsentieren Entitäten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache Selektor {{cssxref("::marker")}} Aufzählungszeichen von Listenelementen aus, und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/::first-line) stimmt mit der ersten Zeile aller {{HTMLElement("p")}}-Elemente überein.

## Spezifikationen

{{Specifications}}

Siehe die Spezifikationstabellen für [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements#specifications) für Details zu diesen.

## Siehe auch

- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektor-Struktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
