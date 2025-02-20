---
title: CSS-Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

CSS-Selektoren werden verwendet, um ein Muster der Elemente zu definieren, die Sie auswählen möchten, um eine Gruppe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Mithilfe verschiedener Selektoren und Kombinatoren können Sie gezielt Elemente basierend auf ihrem Typ, Attributen, Zustand oder ihrer Beziehung zu anderen Elementen auswählen und stylen.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können in die folgenden Kategorien gruppiert werden, basierend auf dem Typ der Elemente, die sie auswählen können.

### Basis-Selektoren

Der [Typ-Selektor](/de/docs/Web/CSS/Type_selectors) wählt alle Elemente aus, die den angegebenen Knoten-Namen aufweisen. Zum Beispiel wird `div` alle {{HTMLElement("div")}}-Elemente und `input` jedes {{HTMLElement("input")}}-Element auswählen. Der [universelle Selektor](/de/docs/Web/CSS/Universal_selectors), gekennzeichnet durch ein Sternchen (`*`), ist ein spezieller Typ-Selektor, der alle Elemente auswählt.

Der [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut besitzen, gekennzeichnet durch den Klassennamen mit einem vorangestellten Punkt (`.`). Zum Beispiel wird `.index` jedes Element auswählen, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor wird durch das `id` mit einem vorangestellten "Nummernzeichen" (U+0023, `#`) angegeben. Zum Beispiel wird `#toc` das Element auswählen, welches `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einem bestimmten `id` in einem Dokument geben; wenn es jedoch mehr als eines gibt, wird der ID-Selektor alle Elemente mit diesem `id` auswählen.

Wenn ein Typ- oder universeller Selektor mit einem Klassen- oder ID-Selektor kombiniert wird, um einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder universelle Selektor dem Klassen- oder ID-Selektor vorausgehen.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) mithilfe der vier Arten von Basis-Selektoren, wie oben beschrieben.

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

Mithilfe von CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb des Dokumentknotenbaums auszuwählen. Diese Kombination von Selektoren mit Kombinatoren erzeugt [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahren-Kombinator

Der [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator), gekennzeichnet durch eines oder mehrere Leerzeichen, wählt Knoten aus, die Nachfahren des ersten Elements sind. Zum Beispiel wird `div span` alle {{HTMLElement("span")}}-Elemente auswählen, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Child_combinator) ist spezifischer als der Nachfahren-Kombinator. Mit dem Größer-als-Zeichen (`>`), wählt der Kind-Kombinator Knoten aus, die direkte Kinder des ersten Elements sind. Im Vergleich zu unserem vorherigen Beispiel wird `div > span` nur die {{HTMLElement("span")}}-Elemente auswählen, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgender-Geschwister-Kombinator

Zusätzlich zu Nachfahren-Selektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Subsequent-sibling_combinator), gekennzeichnet durch eine Tilde (`~`), wählt Geschwister aus. Bei `A ~ B` werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorangegangen werden, vorausgesetzt, dass beide das gleiche Elternteil haben. Zum Beispiel wird `h2 ~ p` alle {{HTMLElement("p")}}-Elemente auswählen, die einem {{HTMLElement("Heading_Elements", "h2")}} folgen, direkt oder nicht.

### Direkt-nachfolgender-Geschwister-Kombinator

Der [direkt-nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator), gekennzeichnet durch das Pluszeichen (`+`), ähnelt dem nachfolgenden-Geschwister-Kombinator. Jedoch wird bei `A + B` nur `B` ausgewählt, wenn `B` direkt von `A` vorangegangen wird und beide dasselbe Elternteil haben. In Bezug auf unser vorheriges Beispiel wird `h2 + p` nur das `<p>`-Element auswählen, das _direkt_ einem `<h2>`-Element folgt.

### Spalten-Kombinator

Es gibt auch einen [Spalten-Kombinator](/de/docs/Web/CSS/Column_combinator), gekennzeichnet durch doppelte senkrechte Striche (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel wird `col || td` alle {{HTMLElement("td")}}-Elemente auswählen, die zum Kontext des {{HTMLElement("col")}} gehören.

### Namensraum-Trennzeichen

Das [Namensraum-Trennzeichen](/de/docs/Web/CSS/Namespace_separator) ist ein weiteres Kombinator, das allgemein in Verbindung mit der {{CSSXref("@namespace")}}-Regel verwendet wird. Es wird durch ein einzelnes senkrechtes Strich-Zeichen (`|`) dargestellt. Es ermöglicht die Einschränkung von [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) und des [universellen Selektors](/de/docs/Web/CSS/Universal_selectors) auf einen spezifischen Namensraum. Zum Beispiel, wenn ein Namensraum wie `@namespace SVG url('http://www.w3.org/2000/svg');` definiert wurde, kann man Selektoren erstellen, die nur auf Elemente im SVG-Namensraum abzielen. Die Deklaration `SVG|a` würde Links innerhalb von SVGs auswählen, aber nicht die im Rest des Dokuments. Namespaces können nützlich sein, um MathML-, SVG- oder andere XML-basierte Inhalte innerhalb von HTML gezielt anzusprechen.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector), indem wir [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) mit Kombinatoren kombinieren.

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

### Erstellen komplexer Selektoren mit CSS-Nesting

Die oben genannten komplexen Selektoren können auch mit einfachen Selektoren, Kombinatoren und [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) mit oder ohne den [`&`-Nesting Selektor](/de/docs/Web/CSS/Nesting_selector) definiert werden.

#### CSS

In diesem Beispiel replizieren wir die gleichen fünf relativen Selektoren unter Verwendung einfacher Selektoren kombiniert mit Kombinatoren, dieses Mal jedoch mit CSS-Nesting.

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

[Attribut-Selektoren](/de/docs/Web/CSS/Attribute_selectors) wählen alle Elemente aus, die ein bestimmtes Attribut haben oder deren Attributwert mit einem gegebenen Substring übereinstimmt, je nachdem, wie der Selektor geschrieben ist. Zum Beispiel wird `[type]` alle Elemente auswählen, die das `type`-Attribut gesetzt haben (auf jeden beliebigen Wert), und `[type="submit"]` wird sowohl `<input type="submit">` als auch `<button type="submit">` oder jedes Element mit `type="submit"` auswählen, obwohl dieses Attribut-Wert-Paar nur bei {{HTMLElement("input")}}- und {{HTMLElement("button")}}-Elementen unterstützt wird. Der Abgleich ist nicht scharf auf Groß-/Kleinschreibung.

Die Groß-/Kleinschreibung eines Attributs hängt von der Sprache ab. Im Allgemeinen ist in HTML, wenn ein Attribut {{Glossary("enumerated", "enumeriert")}} ist, der Wert im Selektor nicht Groß-/Kleinschreibungs-sensitiv, selbst wenn der Wert keiner der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht-enumerierte Attribute wie `class`, `id` oder `data-*`-Attribute oder für nicht-HTML-Attribute wie `role` oder `aria-*`-Attribute ist der Wertevergleich Groß-/Kleinschreibungs-sensitiv; der Abgleich kann durch einen Groß-/Kleinschreibung-ignorierenden Modifikator (`i`) nicht Groß-/Kleinschreibungs-sensitiv gemacht werden.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)-Modul definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) versehen sind und die Auswahl von Elementen basierend auf Zustandsinformationen ermöglichen, die nicht im Dokumentbaum enthalten sind. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen.
Zum Beispiel selektiert der {{cssxref(":target")}}-einfache Selektor das Element einer URL mit einem Fragmentbezeichner, und der [`a:visited`](/de/docs/Web/CSS/:visited) [zusammengesetzte Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) wählt alle {{HTMLElement("a")}}-Elemente aus, die von einem Benutzer besucht wurden.

Pseudo-Klassen können kategorisiert werden als [Anzeigestatus des Elements](/de/docs/Web/CSS/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe-Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes#input_pseudo-classes), [linguistische](/de/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [Lokationsbezogene](/de/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [Ressourcenstatus](/de/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [zeitdimensional](/de/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [baumstrukturell](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), [Nutzeraktion](/de/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Pseudo-classes#functional_pseudo-classes).

Es können mehrere Pseudo-Klassen kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Wenn eine Pseudo-Klasse in einen zusammengesetzten Selektor mit einem Typ- oder universellen Selektor kombiniert wird, muss die Pseudo-Klasse dem Typ- oder universellen Selektor folgen, falls vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektoren-Modul](/de/docs/Web/CSS) definiert. CSS-Pseudo-Element-Selektoren sind im [CSS-Pseudo-Elemente-Modul](/de/docs/Web/CSS/CSS_pseudo-elements) definiert.

CSS-[Pseudo-Elemente](/de/docs/Web/CSS/Pseudo-elements), die mit zwei Doppelpunkten (`::`) beginnen, repräsentieren Entitäten, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}}-Selektor Aufzählungszeichen und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/::first-line) die erste Zeile aller {{HTMLElement("p")}}-Elemente aus.

## Spezifikationen

{{Specifications}}

Details zu Pseudo-Klassen und Pseudo-Elementen finden Sie in den [Pseudo-Klassen-Spezifikationen](/de/docs/Web/CSS/Pseudo-classes#specifications) und [Pseudo-Element-Spezifikationen](/de/docs/Web/CSS/Pseudo-elements#specifications).

## Siehe auch

- [Selektorenliste](/de/docs/Web/CSS/Selector_list)
- [CSS-Selektorstruktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
