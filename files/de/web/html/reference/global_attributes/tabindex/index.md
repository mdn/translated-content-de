---
title: HTML tabindex globales Attribut
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, sie sequentiell fokussierbar zu machen oder dies zu verhindern (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Fokusnavigation festzulegen.

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

Es akzeptiert einen ganzzahligen Wert, mit unterschiedlichen Ergebnissen abhängig vom Wert dieser Zahl:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem gültigen ganzzahligen Wert besitzt, kann das Element mit JavaScript fokussiert werden (durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus. Der spezifische `tabindex`-Wert bestimmt, ob das Element `tabbable` ist (d.h. über eine sequentielle Tastaturnavigation erreichbar, normalerweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert spielt keine Rolle, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über eine sequentielle Tastaturnavigation erreichbar ist.

  > [!NOTE] > `tabindex="-1"` kann nützlich sein für Elemente, die nicht direkt mit der <kbd>Tab</kbd>-Taste angesteuert werden sollen, aber den Tastaturfokus benötigen. Beispiele umfassen ein außerhalb des Bildschirms befindliches modales Fenster, das beim Anzeigen fokussiert werden soll, oder eine Fehlermeldung bei der Formularübermittlung, die beim Auftreten eines fehlerhaften Formulars sofort fokussiert werden soll.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, nach allen positiven `tabindex`-Werten. Die Fokussierungsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentenquelltext definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, wobei seine Reihenfolge durch den Zahlenwert definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert teilen, folgt ihre Reihenfolge relativ zueinander ihrer Position im Dokumentenquelltext. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne Wert gesetzt ist, entscheidet der Benutzeragent, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie es, `tabindex`-Werte größer als `0` und CSS-Eigenschaften, die die Reihenfolge fokussierbarer HTML-Elemente ändern können ([Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dies erschwert es Menschen, die auf die Navigation mit der Tastatur oder unterstützende Technologien angewiesen sind, die Seiteninhalte zu navigieren und zu bedienen. Stattdessen sollte das Dokument in einer logischen Reihenfolge der Elemente geschrieben werden.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "Benutzeragent")}} gesetzt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und das SVG-{{SVGElement("a")}}-Element oder ein {{HTMLElement("summary")}}-Element, das die Zusammenfassung für ein {{HTMLElement("details")}}-Element bereitstellt. Entwickler sollten das `tabindex`-Attribut zu diesen Elementen nicht hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel wird ein negativer Wert die Elemente aus der Fokussierungsreihenfolge entfernen).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Barrierefreiheitsbedenken

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das interaktiv sein soll, über Tastatureingaben fokussierbar zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements, um eine Schaltfläche zu beschreiben, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, sind im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) nicht aufgeführt. Dies verhindert, dass unterstützende Technologien auf diese Komponenten zugreifen und interagieren können. Der Inhalt sollte semantisch unter Verwendung interaktiver Elemente ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} usw.) beschrieben werden. Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheitsunterstützung kommunizieren, was ansonsten von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
- {{Glossary("Reading_order", "Lesereihenfolge")}}
