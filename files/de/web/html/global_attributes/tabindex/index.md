---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
l10n:
  sourceCommit: 8b02826c79b090b5af0d68ae1ef39f932a66a7f1
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, und sie sequenziell fokussierbar zu machen oder dies zu verhindern (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Fokusnavigation festzulegen.

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

Es akzeptiert einen ganzzahligen Wert, mit unterschiedlichen Ergebnissen, abhängig vom Wert der Ganzzahl:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und ein `tabindex`-Attribut mit einem gültigen ganzzahligen Wert besitzt, kann das Element entweder mit JavaScript (durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode) oder visuell durch Klicken mit der Maus fokussiert werden. Der spezifische `tabindex`-Wert steuert, ob das Element `tabbable` (d. h. erreichbar über sequentielle Tastaturnavigation, normalerweise mit der <kbd>Tab</kbd>-Taste) ist.

- Ein _negativer Wert_ (der genaue negative Wert ist eigentlich egal, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über sequenzielle Tastaturnavigation erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann für Elemente nützlich sein, die nicht direkt über die <kbd>Tab</kbd>-Taste angesprungen werden sollen, jedoch den Tastaturfokus erhalten müssen. Beispiele sind ein außerhalb des Bildschirms befindliches modales Fenster, das fokussiert werden soll, wenn es in den Blickpunkt kommt, oder eine Fehlermeldung bei der Formularübermittlung, die sofort fokussiert werden sollte, wenn ein fehlerhaftes Formular übermittelt wird.

- `tabindex="0"` bedeutet, dass das Element fokussierbar in der sequentiellen Tastaturnavigation sein sollte, nach allen positiven `tabindex`-Werten. Die Fokusnavigationsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentquelle definiert.
- Ein _positiver Wert_ bedeutet, dass das Element fokussierbar in der sequentiellen Tastaturnavigation sein sollte, mit seiner Reihenfolge definiert durch den Wert der Nummer. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, jedoch nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert teilen, folgt ihre relative Reihenfolge zueinander ihrer Position in der Dokumentquelle. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne einen festgelegten Wert enthalten ist, wird die Fokussierbarkeit des Elements durch den User-Agent bestimmt.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie `tabindex`-Werte, die größer als `0` sind und CSS-Eigenschaften, die die Reihenfolge fokussierbarer HTML-Elemente ändern können ([Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dies erschwert Personen, die auf die Navigation mit der Tastatur oder unterstützende Technologien angewiesen sind, die Navigation und Bedienung der Seiteninhalte. Schreiben Sie das Dokument stattdessen in einer logischen Sequenz der Elemente.

Einige fokussierbare HTML-Elemente haben einen Standardwert von `0` für `tabindex`, der vom {{Glossary("User_agent", "User-Agent")}} gesetzt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und SVG {{SVGElement("a")}}-Element oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bereitstellt. Entwickler sollten das `tabindex`-Attribut diesen Elementen nicht hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel wird bei Einfügen eines negativen Wertes das Element aus der Fokusnavigationsreihenfolge entfernt).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf das {{HTMLElement("dialog")}}-Element angewendet werden.

## Barrierefreiheitsbedenken

Vermeiden Sie es, das `tabindex`-Attribut mit nicht-[interaktivem Inhalt](/de/docs/Web/HTML/Content_categories#interactive_content) zu verwenden, um etwas, das interaktiv sein soll, fokussierbar mittels Tastatureingabe zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements, um eine Schaltfläche zu beschreiben, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, werden nicht im [Zugänglichkeit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dies verhindert, dass unterstützende Technologie diese Komponenten navigieren und manipulieren kann. Der Inhalt sollte semantisch mit interaktiven Elementen beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, usw.). Diese Elemente haben integrierte Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren, der ansonsten von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
