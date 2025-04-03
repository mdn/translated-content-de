---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, erlaubt oder verhindert, dass sie sequentiell fokussierbar sind (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und bestimmt ihre relative Reihenfolge für die sequentielle Fokussierungsnavigation.

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

Es akzeptiert einen Integer als Wert, mit unterschiedlichen Ergebnissen je nach Wert des Integers:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem beliebigen gültigen Integerwert versehen ist, kann das Element mit JavaScript fokussiert werden (durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus. Der spezifische `tabindex`-Wert steuert, ob das Element `tabbable` ist (d.h. erreichbar durch sequentielle Tastaturnavigation, üblicherweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert spielt eigentlich keine Rolle, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über die sequentielle Tastaturnavigation erreichbar ist.

  > **Note:** `tabindex="-1"` kann nützlich sein für Elemente, die nicht direkt über die <kbd>Tab</kbd>-Taste navigiert werden sollen, aber dennoch Tastaturfokus erhalten müssen. Beispiele umfassen ein aus dem Bildschirm verschobenes modales Fenster, das fokussiert werden soll, wenn es angezeigt wird, oder eine Fehlermeldung bei der Formularübertragung, die sofort fokussiert werden soll, wenn ein fehlerhaftes Formular abgeschickt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Reihenfolge der Fokussierungsnavigation dieser Elemente wird durch ihre Reihenfolge im Dokumentenquelltext definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, wobei seine Reihenfolge durch den Wert der Zahl definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert teilen, folgt ihre Reihenfolge zueinander ihrer Position im Dokumentenquelltext. Der Höchstwert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne Wert angegeben ist, wird bestimmt, ob das Element fokussierbar ist, durch den Benutzeragenten.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten größer als `0` und CSS-Eigenschaften, die die Reihenfolge der fokussierbaren HTML-Elemente ändern können ([Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dies erschwert Nutzern, die auf die Tastaturnavigation oder unterstützende Technologien angewiesen sind, die Navigation und die Bedienung von Seiteninhalten. Schreiben Sie stattdessen das Dokument in einer logischen Reihenfolge.

Einige fokussierbare HTML-Elemente haben einen standardmäßigen `tabindex`-Wert von `0`, der durch den {{Glossary("User_agent", "Benutzeragenten")}} festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und SVG {{SVGElement("a")}}-Element oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bereitstellt. Entwickler sollten das `tabindex`-Attribut diesen Elementen nicht hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel wird durch Einschließen eines negativen Wertes das Element aus der Fokussierungsreihenfolge entfernt).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Barrierefreiheitsbedenken

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Content_categories#interactive_content), um etwas als interaktiv zu kennzeichnen, das über Tastatureingaben fokussierbar ist. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung einer Schaltfläche anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, sind im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) nicht aufgeführt. Dies verhindert, dass unterstützende Technologien auf diese Komponenten zugreifen und sie manipulieren können. Der Inhalt sollte semantisch mit interaktiven Elementen beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, usw.). Diese Elemente haben integrierte Rollen und Zustände, die den Status für die Barrierefreiheit kommunizieren würden, welche andernfalls durch [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müssten.

- [Using the tabindex Attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
