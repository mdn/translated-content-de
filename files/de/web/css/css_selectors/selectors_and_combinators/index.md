---
title: CSS-Selektoren und Kombinatoren
short-title: Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

CSS-Selektoren werden verwendet, um ein Muster von Elementen zu definieren, die Sie auswählen möchten, um eine Gruppe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Mithilfe verschiedener Selektoren und Kombinatoren können Sie gezielt die gewünschten Elemente basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen auswählen und gestalten.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können basierend auf dem Typ der Elemente, die sie auswählen können, in folgende Kategorien gruppiert werden.

### Basisselektoren

Der [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Zum Beispiel wählt `div` alle {{HTMLElement("div")}}-Elemente aus und `input` jedes {{HTMLElement("input")}}-Element. Der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typselektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, dargestellt durch den Klassennamen, der mit einem Punkt (`.`) vorangestellt ist. Zum Beispiel wird `.index` jedes Element auswählen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id`, die mit einem "number sign" (U+0023, `#`) vorangestellt ist. Zum Beispiel wird `#toc` das Element auswählen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer gegebenen `id` in einem Dokument geben; aber wenn es mehr als eines gibt, wird der ID-Selektor alle Elemente mit dieser `id` auswählen.

Wenn Sie einen Typ- oder universellen Selektor mit einem Klassen- oder ID-Selektor kombinieren, um einen [zusammengesetzten Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder universelle Selektor der Klasse oder ID vorangestellt werden.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) unter Verwendung der vier grundlegenden Selektortypen, wie oben beschrieben.

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

Mithilfe von CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb des Dokumentknotenhierarchiebaums auszuwählen. Diese Kombination von Selektoren mit Kombinatoren erzeugt [komplexe Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector).

### Nachfahrenselektor

Der [Nachfahrenselektor](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), dargestellt durch ein oder mehrere Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kindkombinator

Der [Kindkombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) ist spezifischer als der Nachfahrenselektor. Dargestellt durch das Größer-als-Zeichen (`>`), wählt der Kindkombinator Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgenden-Geschwister-Kombinator

Zusätzlich zu Nachfahrenselektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [Nachfolgenden-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), dargestellt durch eine Tilde (`~`), wählt Geschwister aus. Gegeben `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorangegangen werden, vorausgesetzt, sowohl `A` als auch `B` haben denselben Elternknoten. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die auf ein {{HTMLElement("Heading_Elements", "h2")}} folgen, unmittelbar oder nicht.

### Nächstes-Geschwister-Kombinator

Der [Nächstes-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator), dargestellt durch das Plus-Symbol (`+`), ähnelt dem nachfolgenden Geschwister. Allerdings, gegeben `A + B`, wird `B` nur ausgewählt, wenn `B` unmittelbar von `A` vorangegangen wird, wobei beide denselben Elternknoten haben. Anpassend an unser vorheriges Beispiel, `h2 + p`, wird nur das einzelne `<p>`-Element ausgewählt, das _unmittelbar_ auf ein `<h2>`-Element folgt.

### Spaltenkombinator

Es gibt auch einen [Spaltenkombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator), dargestellt durch zwei senkrechte Striche (`||`), der, wenn er unterstützt wird, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente auswählen, die zum Geltungsbereich der {{HTMLElement("col")}} gehören.

### Namespace-Trenner

Der [Namespace-Trenner](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator) ist ein weiterer Kombinator, der im Allgemeinen in Verbindung mit der {{CSSXref("@namespace")}} At-Regel verwendet wird. Dieser Kombinator wird durch einen einzelnen senkrechten Strich (`|`) dargestellt. Er ermöglicht die Begrenzung von [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und des [universellen Selektors](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) auf einen bestimmten Namespace. Zum Beispiel, durch die Definition eines Namespace wie `@namespace SVG url('http://www.w3.org/2000/svg');`, können Sie Selektoren einfügen, die nur auf Elemente innerhalb eines SVG-Namespaces abzielen. Die Deklaration `SVG|a` würde Links innerhalb von SVGs auswählen, nicht jedoch die im Rest des Dokuments. Namespacing kann nützlich sein, um MathML-, SVG- oder andere XML-basierte Inhalte innerhalb Ihres HTMLs anzusprechen.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#relative_selector) unter Verwendung von [einfachen Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector), kombiniert mit Kombinatoren.

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

### Erstellung komplexer Selektoren mit CSS-Nesting

Die oben genannten komplexen Selektoren können auch unter Verwendung einfacher Selektoren, Kombinatoren und [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) definiert werden, mit oder ohne den [`&`-Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector).

#### CSS

In diesem Beispiel replizieren wir die gleichen fünf relativen Selektoren, indem wir einfache Selektoren mit Kombinatoren kombinieren, diesmal jedoch mit CSS-Nesting.

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

## Attributselektoren

[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) auswählen alle Elemente, die je nach Schreibweise des Selektors entweder das gegebene Attribut haben oder das gegebene Attribut mit einem Teilstringwert-Abgleich. Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut gesetzt haben (auf jeden Wert), und `[type="submit"]` wird `<input type="submit">` und `<button type="submit">` auswählen oder jedes Element mit `type="submit"` gesetzt, auch wenn dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}}- und {{HTMLElement("button")}}-Elementen unterstützt wird. Der Abgleich ist nicht case-sensitiv.

Die Groß- und Kleinschreibung des Attributs hängt von der Sprache ab. Im Allgemeinen, in HTML, wenn ein Attribut {{Glossary("enumerated", "aufgezählt")}} ist, ist der Wert im Selektor case-insensitiv, selbst wenn der Wert nicht einer der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Bei nicht aufgezählten Attributen, wie `class`, `id` oder jedem `data-*`-Attribut, oder bei nicht-HTML-Attributen, wie `role` oder `aria-*`-Attributen, ist der Wertvergleich case-sensitiv; der Vergleich kann mit einem case-insensitiven Modifikator (`i`) case-insensitiv gemacht werden.

## Pseudo-Klassen-Selektoren

Das Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors) definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) versehen sind und die Auswahl von Elementen basierend auf Statusinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen. Zum Beispiel zielt der einfache {{cssxref(":target")}}-Selektor auf ein Element einer URL, die einen Fragmentkennzeichner enthält, und der [`a:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) [zusammengesetzter Selektor](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) wählt alle {{HTMLElement("a")}}-Elemente aus, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können als [Elementanzeigezustand](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes), [linguistisch](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes), [Standort](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#resource_state_pseudo-classes), [zeitdimensional](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#time-dimensional_pseudo-classes), [baumstrukturell](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes) kategorisiert werden.

Mehrere Pseudo-Klassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) zu erstellen. Bei der Kombination einer Pseudo-Klasse in einen zusammengesetzten Selektor mit einem Typ- oder universellen Selektor muss die Pseudo-Klasse dem Typselektor oder universellen Selektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektormodul](/de/docs/Web/CSS) definiert. CSS-Pseudo-Element-Selektoren sind im [CSS-Pseudo-Elemente](/de/docs/Web/CSS/Guides/Pseudo-elements) Modul definiert.

CSS [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), die mit zwei Doppelpunkten (`::`) versehen sind, stellen Entitäten dar, die nicht im HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}}-Selektor Listenelement-Bullets aus, und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/Reference/Selectors/::first-line) wählt die erste Zeile aller {{HTMLElement("p")}}-Elemente aus.

## Spezifikationen

{{Specifications}}

Siehe die Spezifikationstabellen für [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#specifications) für Details dazu.

## Siehe auch

- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/Guides/Selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/Guides/Nesting)
