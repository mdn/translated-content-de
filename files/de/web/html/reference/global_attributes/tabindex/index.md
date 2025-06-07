---
title: HTML tabindex globales Attribut
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 7885271e36e9d2744296c01f400653f63caa6f75
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, sie in der sequentiellen Fokussierung (in der Regel mit der <kbd>Tab</kbd>-Taste, daher der Name) zuzulassen oder zu verhindern, und bestimmt deren relative Reihenfolge für die sequentielle Fokusnavigation.

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

Es akzeptiert einen ganzzahligen Wert, mit unterschiedlichen Ergebnissen in Abhängigkeit vom Wert der ganzen Zahl:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex` Attribut mit einem beliebigen gültigen Ganzzahlwert versehen ist, kann das Element mit JavaScript fokussiert werden (durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus) Methode) oder visuell durch Klicken mit der Maus. Der spezifische `tabindex` Wert steuert, ob das Element `tabbable` ist (d.h. über sequentielle Tastaturnavigation erreichbar, üblicherweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert spielt tatsächlich keine Rolle, normalerweise `tabindex="-1"`) bedeutet, dass das Element über die sequentielle Tastaturnavigation nicht erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann nützlich sein für Elemente, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollen, aber die Tastaturfokussierung darauf gesetzt werden muss. Beispiele sind ein ausgeblendetes modales Fenster, das fokussiert werden soll, wenn es angezeigt wird, oder eine Fehlermeldung bei der Formularübermittlung, die sofort fokussiert werden soll, wenn ein fehlerhaftes Formular abgeschickt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, nach allen positiven `tabindex` Werten. Die Fokussier-Reihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentquelltext definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, mit seiner Reihenfolge definiert durch den Wert der Zahl. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"`, aber nach `tabindex="3"` fokussiert. Wenn mehrere Elemente denselben positiven `tabindex` Wert haben, folgt ihre relative Reihenfolge zueinander ihrer Position im Dokumentquelltext. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex` Attribut ohne gesetzten Wert eingeschlossen ist, wird bestimmt, ob das Element fokussierbar ist, durch den User-Agent.

  > [!WARNING]
  > Es wird empfohlen, nur die Werte `0` und `-1` als `tabindex` Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex` Werten größer als `0` und CSS-Eigenschaften, die die Reihenfolge fokussierbarer HTML-Elemente ändern können ([Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Andernfalls wird es für Personen, die auf die Navigation mit der Tastatur oder assistive Technologien angewiesen sind, schwierig, Seiteninhalte zu navigieren und zu bedienen. Stattdessen sollten Sie das Dokument mit den Elementen in einer logischen Reihenfolge schreiben.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "User-Agent")}} festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href` Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und das SVG {{SVGElement("a")}} Element, oder ein {{HTMLElement("summary")}} Element, das eine Zusammenfassung für ein {{HTMLElement("details")}} Element liefert. Entwickler sollten diesen Elementen kein `tabindex` Attribut hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel wird das Element durch das Einschließen eines negativen Wertes aus der Fokusnavigationsreihenfolge entfernt).

> [!WARNING]
> Das tabindex Attribut darf nicht auf dem {{HTMLElement("dialog")}} Element verwendet werden.

## Barrierefreiheit

Vermeiden Sie die Verwendung des `tabindex` Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das als interaktiv gedacht ist, durch Tastatureingabe fokussierbar zu machen. Ein Beispiel dafür wäre die Verwendung eines {{HTMLElement("div")}} Elements zur Beschreibung eines Buttons, anstelle des {{HTMLElement("button")}} Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, sind nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dies verhindert, dass assistive Technologien diese Komponenten navigieren und manipulieren können. Der Inhalt sollte semantisch mit interaktiven Elementen ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.) beschrieben werden. Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren würden, der ansonsten durch [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Verwendung des tabindex Attributs | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Tabindex größer als 0 nicht verwenden](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
- {{Glossary("Reading_order", "Lesereihenfolge")}}
