---
title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, sie sequentiell fokussierbar zu erlauben oder zu verhindern (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Fokusnavigation zu bestimmen.

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

Es akzeptiert einen ganzzahligen Wert, mit unterschiedlichen Ergebnissen je nach Wert der Ganzzahl:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem beliebigen gültigen Ganzzahlwert besitzt, kann das Element mit JavaScript (durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus fokussiert werden. Der spezifische `tabindex`-Wert steuert, ob das Element `tabbable` ist (d.h. über sequentielle Tastaturnavigation erreichbar, normalerweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der exakte negative Wert spielt eigentlich keine Rolle, üblicherweise `tabindex="-1"`) bedeutet, dass das Element über die sequentielle Tastaturnavigation nicht erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann nützlich sein für Elemente, die nicht direkt über die <kbd>Tab</kbd>-Taste navigiert werden sollen, aber dennoch den Tastaturfokus erhalten müssen. Beispiele umfassen ein Off-Screen-Modalfenster, das fokussiert werden sollte, wenn es sichtbar wird, oder eine Fehlermeldung beim Formularversand, die sofort fokussiert werden sollte, wenn ein fehlerhaftes Formular übermittelt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Reihenfolge der Fokussierung dieser Elemente wird durch ihre Reihenfolge in der Dokumentquelle definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, wobei seine Reihenfolge durch den Zahlenwert definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert teilen, folgt ihre Reihenfolge relativ zueinander ihrer Position in der Dokumentquelle. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne gesetzten Wert enthalten ist, wird die Fokussierbarkeit des Elements durch den Benutzeragenten bestimmt.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten größer als `0` und CSS-Eigenschaften, die die Reihenfolge der fokussierbaren HTML-Elemente ändern können ([Reihenfolge von Flex-Items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dies erschwert es Personen, die auf die Verwendung der Tastatur zur Navigation oder auf assistive Technologien angewiesen sind, die Seitenelemente zu navigieren und zu bedienen. Stattdessen sollten Sie das Dokument in einer logischen Reihenfolge verfassen.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "Benutzeragenten")}} festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und das SVG {{SVGElement("a")}}-Element, oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bietet. Entwickler sollten das `tabindex`-Attribut diesen Elementen nicht hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel, ein negativer Wert entfernt das Element aus der Fokussierreihenfolge).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Barrierefreiheitsaspekte

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das als interaktiv gedacht ist, per Tastatureingabe fokussierbar zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung einer Schaltfläche, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, sind nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgelistet. Dies verhindert, dass assistive Technologien zu diesen Komponenten navigieren und diese manipulieren können. Der Inhalt sollte stattdessen semantisch unter Verwendung interaktiver Elemente ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.) beschrieben werden. Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren, der sonst durch [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
