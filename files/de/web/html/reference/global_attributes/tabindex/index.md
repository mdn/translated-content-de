---
title: HTML tabindex globales Attribut
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, sie sequenziell fokussierbar zu machen oder zu verhindern (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und deren relative Reihenfolge für die sequentielle Fokusnavigation festzulegen.

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

Es akzeptiert einen ganzzahligen Wert, wobei die unterschiedlichen Ergebnisse von dem Wert der Ganzzahl abhängen:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und ein `tabindex`-Attribut mit einem gültigen Ganzzahlwert hat, kann das Element entweder mit JavaScript fokussiert werden (indem die Methode [`focus()`](/de/docs/Web/API/HTMLElement/focus) aufgerufen wird) oder visuell durch Klicken mit der Maus. Der spezielle `tabindex`-Wert steuert, ob das Element `fokussierbar` ist (d.h. über die sequentielle Tastaturnavigation, normalerweise mit der <kbd>Tab</kbd>-Taste, erreichbar ist).

- Ein _negativer Wert_ (der genaue negative Wert spielt eigentlich keine Rolle, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über die sequentielle Tastaturnavigation erreichbar ist.

  > [!NOTE] > `tabindex="-1"` kann für Elemente nützlich sein, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollen, aber den Tastaturfokus erhalten müssen. Beispiele hierfür sind ein modales Fenster außerhalb des Bildschirms, das fokussiert werden soll, wenn es sichtbar wird, oder eine Fehlermeldung zur Formularübermittlung, die sofort fokussiert werden soll, wenn ein fehlerhaftes Formular übermittelt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, nach allen positiven `tabindex`-Werten. Die Fokus-Navigationsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentenquelltext definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, wobei die Reihenfolge durch den Zahlenwert des Werts definiert wird. Das bedeutet, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert haben, folgt ihre Reihenfolge relativ zueinander ihrer Position im Dokumentenquelltext. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne festgelegten Wert enthalten ist, bestimmt der Benutzeragent, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten größer als `0` und CSS-Eigenschaften, die die Reihenfolge fokussierbarer HTML-Elemente ändern können ([Ordnen von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)). Dies erschwert es Menschen, die auf die Navigation über die Tastatur oder unterstützende Technologie angewiesen sind, die Inhalte der Seite zu navigieren und zu bedienen. Stattdessen sollten Sie das Dokument mit den Elementen in einer logischen Reihenfolge schreiben.

Einige fokussierbare HTML-Elemente haben einen standardmäßigen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "Benutzeragenten")}} festgelegt wird. Zu diesen Elementen gehören ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und das SVG-Element {{SVGElement("a")}}, oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bietet. Entwickler sollten das `tabindex`-Attribut zu diesen Elementen nicht hinzufügen, es sei denn, es ändert das Standardverhalten (z.B. führt die Angabe eines negativen Wertes dazu, dass das Element aus der Fokus-Navigationsreihenfolge entfernt wird).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Barrierefreiheit

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das als interaktiv gedacht ist, fokussierbar durch Tastatureingabe zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung einer Schaltfläche statt des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht interaktiven Elementen erstellt werden, sind nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dies verhindert, dass unterstützende Technologien zu diesen Komponenten navigieren und diese manipulieren können. Der Inhalt sollte semantisch mit interaktiven Elementen beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, usw.). Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren, der sonst durch [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Die Verwendung des tabindex-Attributs | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Zugänglichkeitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
- {{Glossary("Reading_order", "Lesereihenfolge")}}
