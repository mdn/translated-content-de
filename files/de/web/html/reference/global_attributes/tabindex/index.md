---
title: "`tabindex` HTML Globales Attribut"
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) erlaubt Entwicklern, HTML-Elemente fokusierbar zu machen, sie sequentiell fokusierbar zu machen oder zu verhindern (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Fokus-Navigation zu bestimmen.

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
> Wenn ein HTML-Element gerendert wird und ein `tabindex`-Attribut mit einem beliebigen gültigen Ganzzahlenwert hat, kann das Element mit JavaScript (durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus fokussiert werden. Der spezifische `tabindex`-Wert steuert, ob das Element `tabbable` ist (d.h. über die sequentielle Tastaturnavigation, normalerweise mit der <kbd>Tab</kbd>-Taste, erreichbar ist).

- Ein _negativer Wert_ (der genaue negative Wert ist eigentlich egal, normalerweise `tabindex="-1"`) bedeutet, dass das Element über die sequentielle Tastaturnavigation nicht erreichbar ist.

  > [!NOTE]
  > `tabindex="-1"` kann nützlich für Elemente sein, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollen, aber deren Tastaturfokus gesetzt werden muss. Beispiele umfassen ein außerhalb des Bildschirms liegendes modales Fenster, das fokussiert werden sollte, wenn es angezeigt wird, oder eine Fehlermeldung bei der Formularübermittlung, die unmittelbar fokussiert werden sollte, wenn ein fehlerhaftes Formular übermittelt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation nach allen positiven `tabindex`-Werten fokussierbar sein sollte. Die Fokus-Navigationsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentenquelltext definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, wobei seine Reihenfolge durch den Wert der Zahl bestimmt wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert teilen, folgt ihre Reihenfolge relativ zueinander ihrer Position im Dokumentenquelltext. Der maximale Wert für `tabindex` beträgt 32767.
- Wenn das `tabindex`-Attribut ohne gesetzten Wert enthalten ist, bestimmt der Benutzeragent, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten größer als `0` und von CSS-Eigenschaften, die die Reihenfolge der fokussierbaren HTML-Elemente ändern können ([Anordnung von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)). Andernfalls wird es schwierig für Personen, die auf die Verwendung der Tastatur für die Navigation oder unterstützende Technologie angewiesen sind, Seiteninhalte zu navigieren und zu bedienen. Schreiben Sie stattdessen das Dokument in einer logischen Sequenz.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "Benutzeragenten")}} festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und SVG {{SVGElement("a")}} Element oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bietet. Entwickler sollten das `tabindex`-Attribut zu diesen Elementen nicht hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel, das Einschließen eines negativen Wertes wird das Element aus der Fokus-Navigationsreihenfolge entfernen).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Barrierefreiheitsbedenken

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das als interaktiv gedacht ist, über Tastatureingaben fokussierbar zu machen. Ein Beispiel dafür wäre die Verwendung eines {{HTMLElement("div")}}-Elements, um eine Schaltfläche zu beschreiben, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, sind nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dies verhindert, dass unterstützende Technologie zu diesen Komponenten navigieren und sie manipulieren kann. Der Inhalt sollte semantisch mit interaktiven Elementen beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} usw.). Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheit mitteilen, was sonst von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Using the tabindex attribute | Vispero](https://vispero.com/resources/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
- {{Glossary("Reading_order", "Lesereihenfolge")}}
