---
title: CSS-Selektoren und Kombinatoren
short-title: Selektoren und Kombinatoren
slug: Web/CSS/CSS_selectors/Selectors_and_combinators
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

CSS-Selektoren werden verwendet, um ein Muster der Elemente zu definieren, die Sie auswählen möchten, um eine Reihe von CSS-Regeln auf die ausgewählten Elemente anzuwenden. Kombinatoren definieren die Beziehung zwischen den Selektoren. Durch die Verwendung verschiedener Selektoren und Kombinatoren können Sie präzise die gewünschten Elemente basierend auf ihrem Typ, ihren Attributen, ihrem Zustand oder ihrer Beziehung zu anderen Elementen auswählen und stylen.

## Arten von Selektoren

Es gibt über 80 Selektoren und Kombinatoren. CSS-Selektoren können basierend auf dem Typ der Elemente, die sie auswählen können, in die folgenden Kategorien gruppiert werden.

### Grundlegende Selektoren

Der [Typselektor](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) wählt alle Elemente aus, die den angegebenen Knotennamen haben. Zum Beispiel wählt `div` alle {{HTMLElement("div")}}-Elemente aus und `input` jedes {{HTMLElement("input")}}-Element. Der [universelle Selektor](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors), dargestellt durch ein Sternchen (`*`), ist ein spezieller Typselektor, der alle Elemente auswählt.

Der [Klassenselektor](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) wählt alle Elemente aus, die das angegebene `class`-Attribut haben, das durch den Klassennamen präfixiert mit einem Punkt (`.`) dargestellt wird. Zum Beispiel stimmt `.index` mit jedem Element überein, das `class="index"` hat. Der [ID-Selektor](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) wählt ein Element basierend auf dem Wert seines `id`-Attributs aus. Der Selektor ist die `id` präfixiert mit einem „Nummernzeichen“ (U+0023, `#`). Zum Beispiel stimmt `#toc` mit dem Element überein, das `id="toc"` hat. Sowohl [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) als auch [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) sind globale Attribute. Es sollte nur ein Element mit einer gegebenen `id` in einem Dokument geben; aber wenn es mehr als eins gibt, wird der ID-Selektor alle Elemente mit dieser `id` auswählen.

Beim Kombinieren eines Typ- oder universellen Selektors mit einem Klassen- oder ID-Selektor, um einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen, muss der Typ- oder universelle Selektor dem Klassen- oder ID-Selektor vorausgehen.

#### CSS

In diesem Beispiel deklarieren wir vier [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) und einen [zusammengesetzten Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) unter Verwendung der oben beschriebenen vier grundlegenden Selektortypen.

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

Durch die Verwendung von CSS-Kombinatoren können wir Selektoren kombinieren, um DOM-Knoten basierend auf ihrer Beziehung zu anderen Elementen innerhalb der Dokument-Baumstruktur auszuwählen. Dieses Kombinieren von Selektoren mit Kombinatoren erstellt [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector).

### Nachfahr-Kombinator

Der [Nachfahr-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), dargestellt durch ein oder mehrere Leerzeichen, wählt Knoten aus, die Nachkommen des ersten Elements sind. Zum Beispiel stimmt `div span` mit allen {{HTMLElement("span")}}-Elementen überein, die sich innerhalb eines {{HTMLElement("div")}}-Elements befinden.

### Kind-Kombinator

Der [Kind-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Child_combinator) ist spezifischer als der Nachfahr-Kombinator. Dargestellt durch das Größer-als-Zeichen (`>`), wählt der Kind-Kombinator Knoten aus, die direkte Kinder des ersten Elements sind. Verglichen mit unserem vorherigen Beispiel stimmt `div > span` nur mit den {{HTMLElement("span")}}-Elementen überein, die direkte Kinder eines {{HTMLElement("div")}}-Elements sind.

### Nachfolgender-Geschwister-Kombinator

Zusätzlich zu den Nachfahrselektoren ermöglicht CSS auch die Auswahl von Elementen basierend auf ihren Geschwistern. Der [nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator), dargestellt mit einer Tilde (`~`), wählt Geschwister aus. Gegeben `A ~ B`, werden alle Elemente, die `B` entsprechen, ausgewählt, wenn sie von `A` vorangegangen werden, vorausgesetzt, beide teilen sich denselben Elternteil. Zum Beispiel stimmt `h2 ~ p` mit allen {{HTMLElement("p")}}-Elementen überein, die auf ein {{HTMLElement("Heading_Elements", "h2")}} folgen, sei es unmittelbar oder nicht.

### Direkt-Nachfolgender-Geschwister-Kombinator

Der [direkt-nachfolgende-Geschwister-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator), dargestellt durch das Pluszeichen (`+`), ähnelt dem nachfolgenden-Geschwister-Kombinator. Jedoch, gegeben `A + B`, stimmt er nur mit `B` überein, wenn `B` unmittelbar von `A` vorangegangen wird und beide denselben Elternteil teilen. In Bezug auf unser vorheriges Beispiel stimmt `h2 + p` nur mit dem einzelnen `<p>`-Element überein, das _unmittelbar_ auf ein `<h2>`-Element folgt.

### Spalten-Kombinator

Es gibt auch einen [Spalten-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Column_combinator), dargestellt durch zwei Rohrzeichen (`||`), der, wenn unterstützt, Knoten auswählt, die zu einer Spalte gehören. Zum Beispiel stimmt `col || td` mit allen {{HTMLElement("td")}}-Elementen überein, die zum Bereich des {{HTMLElement("col")}} gehören.

### Namespace-Trennzeichen

Der [Namespace-Trennzeichen](/de/docs/Web/CSS/Reference/Selectors/Namespace_separator) ist ein weiterer Kombinator, der im Allgemeinen in Verbindung mit der {{CSSXref("@namespace")}} at-rule verwendet wird. Dieser Kombinator wird durch ein einzelnes Rohrzeichen (`|`) dargestellt. Er ermöglicht das Einschränken von [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) und des [universellen Selektors](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors) auf einen bestimmten Namespace. Beispielsweise, indem Sie einen Namespace wie `@namespace SVG url('http://www.w3.org/2000/svg');` definieren, können Sie Selektoren einfügen, die nur Elemente im SVG-Namespace anvisieren. Das Deklarieren von `SVG|a` würde Links innerhalb von SVGs anvisieren und nicht die im Rest des Dokuments. Namespacing kann nützlich sein, um MathML, SVG oder andere XML-basierte Inhalte innerhalb Ihres HTML zu anvisieren.

#### CSS

In diesem Beispiel deklarieren wir fünf [relative Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#relative_selector) unter Verwendung [einfacher Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector) kombiniert mit Kombinatoren.

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

Die oben genannten komplexen Selektoren können auch unter Verwendung einfacher Selektoren, Kombinatoren und [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting), mit oder ohne den [`&`-Nesting-Selektor](/de/docs/Web/CSS/Reference/Selectors/Nesting_selector), definiert werden.

#### CSS

In diesem Beispiel replizieren wir dieselben fünf relativen Selektoren unter Verwendung einfacher Selektoren kombiniert mit Kombinatoren, aber diesmal mit CSS-Nesting.

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

[Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) wählen alle Elemente aus, die abhängig davon, wie der Selektor geschrieben ist, entweder das gegebene Attribut haben oder das gegebene Attribut mit einem Teilstring-Wertübereinstimmung haben.
Zum Beispiel stimmt `[type]` mit allen Elementen überein, die das `type`-Attribut gesetzt haben (auf jeden beliebigen Wert), und `[type="submit"]` wird mit `<input type="submit">` und `<button type="submit">` übereinstimmen oder jedes Element mit `type="submit"` gesetzt, auch wenn dieses Attribut-Wert-Paar nur auf {{HTMLElement("input")}} und {{HTMLElement("button")}}-Elementen unterstützt wird. Die Übereinstimmung ist groß- und kleinschreibungsunabhängig.

Die Großschreibungsempfindlichkeit des Attributs hängt von der Sprache ab. Allgemein in HTML, wenn ein Attribut {{Glossary("enumerated", "aufzählbar")}} ist, ist der Wert im Selektor nicht groß- und kleinschreibungsempfindlich, selbst wenn der Wert keiner der aufgezählten Werte ist oder wenn das Attribut kein gültiger Wert für das Element ist, auf dem es gesetzt ist. Für nicht-aufzählbare Attribute, wie `class`, `id` oder jedes `data-*` Attribut, oder für nicht-HTML Attribute, wie `role` oder `aria-*` Attribute, ist die Wertübereinstimmung groß- und kleinschreibungsempfindlich; die Übereinstimmung kann mit einem groß- und kleinschreibungsempfindlichen Modifikator (`i`) nicht groß- und kleinschreibungsempfindlich gemacht werden.

## Pseudo-Klassen-Selektoren

Das [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul definiert über 60 [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes). Pseudo-Klassen sind [einfache Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#simple_selector), die mit einem Doppelpunkt (`:`) präfixiert sind und die Auswahl von Elementen basierend auf Zustandsinformationen, die nicht im Dokumentbaum enthalten sind, ermöglichen. {{CSSxRef("pseudo-classes")}} können verwendet werden, um ein Element basierend auf seinem _Zustand_ zu stylen.
Zum Beispiel zielt der einfache {{cssxref(":target")}} Selektor Elemente einer URL mit einem Fragmentbezeichner an, und der [`a:visited`](/de/docs/Web/CSS/Reference/Selectors/:visited) [zusammengesetzter Selektor](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) stimmt mit allen {{HTMLElement("a")}}-Elementen überein, die von einem Benutzer besucht wurden.

Die Pseudo-Klassen können kategorisiert werden als [Elementanzeigestatus](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#element_display_state_pseudo-classes), [Eingabe](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#input_pseudo-classes), [linguistisch](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#linguistic_pseudo-classes), [Verortung](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#location_pseudo-classes), [Ressourcenzustand](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#resource_state_pseudo-classes), [zeitdimensional](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#time-dimensional_pseudo-classes), [strukturell im Baum](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), [Benutzeraktion](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#user_action_pseudo-classes) und [funktional](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#functional_pseudo-classes).

Mehrere Pseudo-Klassen können kombiniert werden, um [zusammengesetzte Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) zu erstellen. Wenn eine Pseudo-Klasse in einen zusammengesetzten Selektor mit einem Typ- oder universellen Selektor integriert wird, muss die Pseudo-Klasse dem Typselektor oder dem universellen Selektor folgen, sofern vorhanden.

## Pseudo-Element-Selektoren

Nicht alle CSS-Selektoren sind im [CSS-Selektoren-Modul](/de/docs/Web/CSS) definiert. CSS Pseudo-Element-Selektoren sind im [CSS-Pseudo-Elemente](/de/docs/Web/CSS/CSS_pseudo-elements) Modul definiert.

CSS [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements), mit zwei Doppelpunkten (`::`) präfixiert, stellen Entitäten dar, die nicht in HTML enthalten sind. Zum Beispiel wählt der einfache {{cssxref("::marker")}} Selektor Listenpunkte aus, und der zusammengesetzte Selektor [`p::first-line`](/de/docs/Web/CSS/Reference/Selectors/::first-line) stimmt mit der ersten Zeile aller {{HTMLElement("p")}}-Elemente überein.

## Spezifikationen

{{Specifications}}

Sehen Sie sich die [Pseudo-Klassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#specifications) und [Pseudo-Elemente](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#specifications) Spezifikationstabellen für Details dazu an.

## Siehe auch

- [Selektorliste](/de/docs/Web/CSS/Reference/Selectors/Selector_list)
- [CSS-Selektor-Struktur](/de/docs/Web/CSS/CSS_selectors/Selector_structure)
- [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
