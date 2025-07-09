---
title: HTML tabindex globales Attribut
short-title: tabindex
slug: Web/HTML/Reference/Global_attributes/tabindex
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Reference/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, sie in die sequenzielle Fokussierung (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) einzubeziehen oder auszuschließen und ihre relative Reihenfolge für die sequenzielle Fokusnavigation zu bestimmen.

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

Es akzeptiert einen ganzzahligen Wert, wobei je nach Wert unterschiedliche Ergebnisse erzielt werden:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem gültigen ganzzahligen Wert gesetzt ist, kann das Element mit JavaScript (durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch einen Mausklick fokussiert werden. Der spezifische `tabindex`-Wert steuert, ob das Element `tabbable` ist (d.h. mit der sequenziellen Tastaturnavigation, normalerweise mit der <kbd>Tab</kbd>-Taste, erreichbar ist).

- Ein _negativer Wert_ (der genaue negative Wert ist eigentlich egal, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über die sequenzielle Tastaturnavigation erreichbar ist.

  > [!NOTE]
  > `tabindex="-1"` kann nützlich für Elemente sein, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollen, aber dennoch eine Tastaturfokussierung benötigen. Beispiele sind ein außerhalb des Bildschirms befindliches modales Fenster, das fokussiert werden soll, wenn es sichtbar wird, oder eine Fehlermeldung bei der Formularübermittlung, die sofort fokussiert werden soll, wenn ein fehlerhaftes Formular übermittelt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Fokusnavigationsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentquelltext definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein soll, wobei die Reihenfolge durch den Zahlenwert definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, jedoch nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert haben, folgt ihre Reihenfolge relativ zueinander ihrer Position im Dokumentquelltext. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne Wert gesetzt ist, wird durch den Benutzeragenten bestimmt, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten größer als `0` und CSS-Eigenschaften, die die Reihenfolge der fokussierbaren HTML-Elemente ändern können ([Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dadurch wird es für Personen, die auf die Tastaturnavigation oder unterstützende Technologien angewiesen sind, schwierig, die Seite zu navigieren und zu bedienen. Schreiben Sie stattdessen das Dokument in einer logischen Reihenfolge der Elemente.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "Benutzeragenten")}} festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und SVG {{SVGElement("a")}}-Element oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element darstellt. Entwickler sollten diesen Elementen das `tabindex`-Attribut nicht hinzufügen, es sei denn, sie ändern das Standardverhalten (zum Beispiel wird durch Einschließen eines negativen Wertes das Element aus der Fokusnavigationsreihenfolge entfernt).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Barrierefreiheitshinweise

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Guides/Content_categories#interactive_content), um etwas, das interaktiv sein soll, durch Tastatureingaben fokussierbar zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung eines Buttons anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, werden nicht im [Barrierefreiheit-Baum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dadurch wird es unterstützenden Technologien unmöglich, auf diese Komponenten zu navigieren und sie zu manipulieren. Der Inhalt sollte semantisch mit interaktiven Elementen beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} usw.). Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren, der ansonsten von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Reference/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barriereprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
- {{Glossary("Reading_order", "Lesereihenfolge")}}
