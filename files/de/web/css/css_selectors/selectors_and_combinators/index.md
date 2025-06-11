---
title: CSS-Selektoren und Kombinatoren
short-title: Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

CSS-Selektoren werden verwendet, um ein Muster der Elemente zu definieren, die Sie auswählen möchten, um eine Gruppe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Mit verschiedenen Selektoren und Kombinatoren können Sie gezielt die gewünschten Elemente nach ihrem Typ, Attributen, Status oder ihrer Beziehung zu anderen Elementen auswählen und gestalten.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können basierend auf der Art der Elemente, die sie auswählen können, in die folgenden Kategorien gruppiert werden.

### Grundlegende Selektoren

Der [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Zum Beispiel wählt `div` alle {{HTMLElement("div")}}-Elemente aus und `input` wird auf jedes {{HTMLElement("input")}}-Element zutreffen. Der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typ-Selektor, der alle Elemente auswählt.

Der [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, das durch den Klassenname mit einem Punkt (`.`) vorangestellt ist. Zum Beispiel wird `.index` auf jedes Element zutreffen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id` mit einem "Nummernzeichen" (U+0023, `#`) vorangestellt. Zum Beispiel wird `#toc` das Element auswählen, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer gegebenen `id` in einem Dokument existieren; aber wenn es mehr als eines gibt, wird der ID-Selektor alle Elemente mit dieser `id` auswählen.

Wenn ein Typ- oder universeller Selektor mit einem Klassen- oder ID-Selektor kombiniert wird, um einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder universelle Selektor dem Klassen- oder ID-Selektor vorausgehen.

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

Mit CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen im Knotenbaum des Dokuments auszuwählen. Diese Kombination von Selektoren mit Kombinatoren erstellt [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahr-Kombinator

Der [Nachfahr-Kombinator](/de/docs/Web/CSS/Descendant_combinator), dargestellt durch eines oder mehrere Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) ist spezifischer als der Nachfahr-Kombinator. Dargestellt durch das Größer-als-Zeichen (`>`), wählt der Kind-Kombinator Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgender-Geschwister-Kombinator

Zusätzlich zu Nachfahrselektionen ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [Nachfolgender-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), dargestellt durch eine Tilde (`~`), wählt Geschwister aus. Gegeben `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorausgegangen sind, vorausgesetzt, sowohl `A` als auch `B` teilen denselben Elternelement. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die einem {{HTMLElement("Heading_Elements", "h2")}}, unmittelbar oder nicht, folgen.

### Nächster-Geschwister-Kombinator

Der [nächster-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator), dargestellt durch das Plus-Symbol (`+`), ist ähnlich wie der Nachfolgender-Geschwister-Kombinator. Jedoch, gegeben `A + B`, entspricht es nur `B`, wenn `B` unmittelbar von `A` vorausgegangen wird, wobei beide denselben Elternelement teilen. Zu unserem vorherigen Beispiel hinzugefügt, wird `h2 + p` nur das einzelne `<p>`-Element auswählen, das _unmittelbar_ einem `<h2>`-Element folgt.

### Spalten-Kombinator

Es gibt auch einen [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator), dargestellt durch zwei senkrechte Striche (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente auswählen, die zum Bereich der {{HTMLElement("col")}} gehören.

### Namensraum-Trennzeichen

Der [Namensraum-Trennzeichen](/de/docs/Web/CSS/Namespace_separator) ist ein weiterer Kombinator, der allgemein in Verbindung mit der {{CSSXref("@namespace")}} at-Regel verwendet wird. Dieser Kombinator wird durch ein einzelnes senkrechtes Zeichen (`|`) dargestellt. Er ermöglicht die Einschränkung von [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) und dem [universellen Selektor](/de/docs/Web/CSS/Universal_selectors) auf einen bestimmten Namensraum. Zum Beispiel, durch die Definition eines Namensraums wie `@namespace SVG url('http://www.w3.org/2000/svg');`, können Sie Selektoren einbeziehen, die nur auf im SVG-Namensraum verschachtelte Elemente abzielen. Die Deklaration `SVG|a` würde Links innerhalb von SVGs und nicht jene im Rest des Dokuments treffen. Die Namensraum-Unterteilung kann nützlich sein, um MathML, SVG, oder andere XML-basierte Inhalte innerhalb Ihres HTMLs anzuvisieren.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) mit [einfachen Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit Kombinatoren kombiniert werden.

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

### Erstellen von komplexen Selektoren mit CSS-Nesting

Die oben genannten komplexen Selektoren können auch mit einfachen Selektoren, Kombinatoren und [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) definiert werden, mit oder ohne den [`&` Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector).

#### CSS

In diesem Beispiel wiederholen wir dieselben fünf relativen Selektoren, indem wir einfache Selektoren kombiniert mit Kombinatoren verwenden, aber diesmal mit CSS-Nesting.

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

[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) wählen alle Elemente aus, die, abhängig davon, wie der Selektor geschrieben ist, entweder das angegebene Attribut haben oder das angegebene Attribut mit einem Teilstring-Wert entsprechen. Zum Beispiel wird `[type]` alle Elemente auswählen, die das Attribut `type` gesetzt haben (auf beliebigen Wert), und `[type="submit"]` wird `<input type="submit">` und `<button type="submit">` oder jedes Element mit `type="submit"` entsprechen, obwohl dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}} und {{HTMLElement("button")}}-Elementen unterstützt wird. Die Übereinstimmung ist nicht groß-/kleinschreibungsempfindlich.

Die Groß-/Kleinschreibungsempfindlichkeit des Attributs hängt von der Sprache ab. Generell, in HTML, wenn ein Attribut {{Glossary("enumerated", "aufgezählt")}} ist, ist der Wert im Selektor nicht groß-/kleinschreibungsempfindlich, selbst wenn der Wert nicht einer der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht aufgezählte Attribute wie `class`, `id`, oder jedes `data-*` Attribut oder für nicht-HTML Attribute, wie `role` oder `aria-*` Attribute, ist die Wertübereinstimmung groß-/kleinschreibungsempfindlich; die Übereinstimmung kann mit einem groß-/kleinschreibungunempfindlichen Modifikator (`i`) nicht groß-/kleinschreibungsempfindlich gemacht werden.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) vorangestellt sind, die die Auswahl von Elementen basierend auf Informationszuständen ermöglichen, die nicht im Dokumentbaum enthalten sind. {{CSSxRef("pseudo-classes")}} kann verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen. Zum Beispiel zielt der einfache Selektor {{cssxref(":target")}} auf das Element einer URL, die eine Fragmentkennung enthält, und der [`a:visited`](/de/docs/Web/CSS/:visited) [zusammengesetzte Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) trifft auf alle {{HTMLElement("a")}}-Elemente zu, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können in Kategorien wie [Elementanzeigezustand](/de/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [linguistisch](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [Ort](/de/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [Zeitdimension](/de/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [Baumstruktur](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes), und [funktional](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes) eingeteilt werden.

Mehrere Pseudo-Klassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Wenn eine Pseudo-Klasse zu einem zusammengesetzten Selektor mit einem Typ- oder universellen Selektor hinzugefügt wird, muss die Pseudo-Klasse dem Typ- oder universellen Selektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektoren-Modul](/de/docs/Web/CSS) definiert. CSS-Pseudoelement-Selektoren sind im [CSS-Pseudoelemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul definiert.

CSS [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements), die mit zwei Doppelpunkten (`::`) vorangestellt sind, repräsentieren Entitäten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}} Selektor Listenpunkte aus, und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/::first-line) trifft auf die erste Zeile aller {{HTMLElement("p")}}-Elemente zu.

## Spezifikationen

{{Specifications}}

Siehe die [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#specifications) und [Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements#specifications) Spezifikationstabellen für Details dazu.

## Siehe auch

- [Selektorliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektorenstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
