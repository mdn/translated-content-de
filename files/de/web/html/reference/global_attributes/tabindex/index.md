---
title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 7dda25db814fed5ae7498baaee80009b3569a8dc
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globales Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, sie start- oder ausschließbar in der sequentiellen Fokussierung zu machen (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Navigationsfokussierung zu bestimmen.

{{InteractiveExample("HTML Demo: tabindex", "tabbed-standard")}}

```html interactive-example
<p>Click anywhere in this pane, then try tabbing through the elements.</p>

<label>First in tab order:<input type="text" /></label>

<div tabindex="0">Tabbable due to tabindex.</div>

<div>Not tabbable: no tabindex.</div>

<label>Third in tab order:<input type="text" /></label>
```

```css interactive-example
p {
  font-style: italic;
  font-weight: bold;
}

div,
label {
  display: block;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
}

div:focus {
  font-weight: bold;
}
```

Es akzeptiert einen ganzzahligen Wert, mit unterschiedlichen Ergebnissen, abhängig vom Wert der Zahl:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem beliebigen gültigen ganzzahligen Wert besitzt, kann das Element mit JavaScript fokussiert werden (indem die Methode [`focus()`](/de/docs/Web/API/HTMLElement/focus) aufgerufen wird) oder visuell durch Klicken mit der Maus. Der spezifische `tabindex`-Wert steuert, ob das Element `tabbable` ist (d.h. über die sequentielle Tastaturnavigation, normalerweise mit der <kbd>Tab</kbd>-Taste, erreichbar ist).

- Ein _negativer Wert_ (der genaue negative Wert spielt tatsächlich keine Rolle, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über die sequentielle Tastaturnavigation erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann nützlich für Elemente sein, die nicht direkt über die <kbd>Tab</kbd>-Taste angesteuert werden sollen, aber dennoch die Tastaturfokussierung auf sie gesetzt werden muss. Beispiele sind ein außerhalb des Bildschirms liegendes modales Fenster, das fokussiert werden soll, wenn es sichtbar wird, oder eine Formularfehlermeldung, die sofort fokussiert werden soll, wenn ein fehlerhaftes Formular übermittelt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, nach allen positiven `tabindex`-Werten. Die Fokussierungsreihenfolge dieser Elemente richtet sich nach ihrer Reihenfolge im Dokumentenquelltext.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, wobei seine Reihenfolge durch den Wert der Zahl definiert ist. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert teilen, folgt ihre relative Reihenfolge zueinander ihrer Position im Dokumentenquelltext. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne gesetzten Wert enthalten ist, wird durch den Benutzeragenten bestimmt, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, ausschließlich `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie `tabindex`-Werte größer als `0` und CSS-Eigenschaften, die die Reihenfolge fokussierbarer HTML-Elemente ändern können ([Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dies erschwert es Menschen, die auf die Tastaturnavigation oder assistive Technologien angewiesen sind, die Seiteninhalte zu navigieren und zu bedienen. Stattdessen sollten Sie das Dokument in einer logischen Reihenfolge verfassen.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der durch den {{Glossary("User_agent", "Benutzeragenten")}} gesetzt wird. Zu diesen Elementen gehören ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und SVG {{SVGElement("a")}}-Elemente oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bereitstellt. Entwickler sollten das `tabindex`-Attribut nicht zu diesen Elementen hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel, indem ein negativer Wert hinzugefügt wird, wird das Element aus der Fokussierungsreihenfolge entfernt).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf das {{HTMLElement("dialog")}}-Element angewendet werden.

## Barrierefreiheitsbedenken

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das interaktiv sein soll, per Tastatureingabe fokussierbar zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung eines Buttons anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mithilfe nicht-interaktiver Elemente erstellt werden, sind nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) gelistet. Das verhindert, dass assistive Technologien diese Komponenten navigieren und manipulieren können. Die Inhalte sollten semantisch mithilfe interaktiver Elemente ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, usw.) beschrieben werden. Diese Elemente haben eine eingebaute Rolle und Zustände, die den Status für die Barrierefreiheit kommunizieren, die anderweitig von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müssten.

- [Verwendung des tabindex-Attributs | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
- {{Glossary("Reading_order", "Lesereihenfolge")}}
