---
title: HTML tabindex Globalattribut
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

Das **`tabindex`** [Globalattribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, erlaubt oder verhindert, dass sie sequenziell fokussiert werden können (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und bestimmt ihre relative Reihenfolge für die sequenzielle Fokusnavigation.

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

Es akzeptiert einen Ganzzahlwert, wobei unterschiedliche Werte zu unterschiedlichen Ergebnissen führen:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem gültigen Ganzzahlwert hat, kann das Element mit JavaScript (durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus fokussiert werden. Der spezifische `tabindex`-Wert bestimmt, ob das Element `tabbable` ist (d.h. erreichbar über sequenzielle Tastaturnavigation, normalerweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert ist tatsächlich nicht wichtig, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über sequenzielle Tastaturnavigation erreichbar ist.

  > [!NOTE]
  > `tabindex="-1"` kann nützlich sein für Elemente, die nicht direkt über die <kbd>Tab</kbd>-Taste navigiert werden sollen, jedoch den Tastaturfokus erhalten müssen. Beispiele sind ein außermittiges modales Fenster, das fokussiert werden soll, wenn es sichtbar wird, oder eine Fehlermeldung bei der Formularübermittlung, die sofort fokussiert werden sollte, wenn ein fehlerhaftes Formular gesendet wird.

- `tabindex="0"` bedeutet, dass das Element in der sequenziellen Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Fokusnavigationsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentenquellcode definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequenziellen Tastaturnavigation fokussierbar sein sollte, wobei seine Reihenfolge durch den Wert der Zahl definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert haben, folgt ihre Reihenfolge relativ zueinander ihrer Position im Dokumentquellcode. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne festgelegten Wert enthalten ist, bestimmt der Benutzeragent, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie `tabindex`-Werte größer als `0` sowie CSS-Eigenschaften, die die Reihenfolge fokussierbarer HTML-Elemente ändern können ([Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)). Dies erschwert es Personen, die auf Tastaturnavigation oder unterstützende Technologien angewiesen sind, die Seiteninhalte zu navigieren und zu bedienen. Stattdessen sollten die Dokumente mit den Elementen in logischer Reihenfolge erstellt werden.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "Benutzeragenten")}} festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und das SVG-{{SVGElement("a")}}-Element oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bietet. Entwickler sollten diesen Elementen kein `tabindex`-Attribut hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel entfernt ein negativer Wert das Element aus der Fokusnavigationsreihenfolge).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Zugänglichkeitsaspekte

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das interaktiv sein sollte, durch Tastatureingaben fokussierbar zu machen. Ein Beispiel wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung einer Schaltfläche anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die unter Verwendung nicht interaktiver Elemente erstellt wurden, werden nicht im [Zugänglichkeit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgelistet. Dies hindert unterstützende Technologien daran, zu diesen Komponenten zu navigieren und sie zu manipulieren. Der Inhalt sollte semantisch mit interaktiven Elementen beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} usw.). Diese Elemente haben integrierte Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren, der sonst durch [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Verwendung des tabindex-Attributs | Vispero](https://vispero.com/resources/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [Globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
- {{Glossary("Reading_order", "Lesereihenfolge")}}
