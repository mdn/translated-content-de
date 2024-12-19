---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, zuzulassen oder zu verhindern, dass sie sequentiell fokussierbar sind (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Fokussierungsnavigation zu bestimmen.

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

Es akzeptiert eine ganze Zahl als Wert, mit unterschiedlichen Ergebnissen je nach Wert der Zahl:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem gültigen ganzzahligen Wert hat, kann das Element mit JavaScript (durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus fokussiert werden. Der spezielle `tabindex`-Wert bestimmt, ob das Element `tabbable` ist (d. h. über sequentielle Tastaturnavigation erreichbar, normalerweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert spielt keine Rolle, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über sequentielle Tastaturnavigation erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann für Elemente nützlich sein, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollten, aber eine Tastaturfokussierung auf sie gesetzt werden soll. Beispiele sind ein Off-Screen-Modal-Fenster, das fokussiert werden sollte, wenn es ins Blickfeld kommt, oder eine Fehlermeldung bei der Formularübermittlung, die sofort fokussiert werden sollte, wenn ein fehlerhaftes Formular abgeschickt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Fokussierungsnavigationsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumentquellcode definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, wobei seine Reihenfolge durch den Wert der Zahl definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert haben, folgt ihre Reihenfolge relativ zueinander ihrer Position im Dokumentquellcode. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut enthalten ist, ohne dass ein Wert festgelegt ist, bestimmt der Nutzeragent, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie `tabindex`-Werte größer als `0` und CSS-Eigenschaften, die die Reihenfolge der fokussierbaren HTML-Elemente ändern können ([Bestellung von flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dadurch wird es für Personen, die auf die Navigation mit der Tastatur oder assistive Technologien angewiesen sind, schwierig, Inhalte der Seite zu navigieren und zu bedienen. Schreiben Sie stattdessen das Dokument mit den Elementen in einer logischen Reihenfolge.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom {{Glossary("User_agent", "Nutzeragent")}} gesetzt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und das SVG {{SVGElement("a")}}-Element oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bietet. Entwickler sollten diesen Elementen das `tabindex`-Attribut nicht hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel entfernt ein negativer Wert das Element aus der Fokussierungsnavigationsreihenfolge).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf dem {{HTMLElement("dialog")}}-Element verwendet werden.

## Barrierefreiheitsbedenken

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Content_categories#interactive_content), um etwas, das als interaktiv gedacht ist, über Tastatureingaben fokussierbar zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements, um eine Schaltfläche zu beschreiben, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, werden nicht im [Barrierefreiheitsbaum](/de/docs/Learn_web_development/Core/Accessibility/What_is_accessibility#accessibility_apis) aufgelistet. Dies verhindert, dass assistierende Technologien in der Lage sind, auf diese Komponenten zuzugreifen und sie zu manipulieren. Der Inhalt sollte semantisch durch interaktive Elemente beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.). Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren, der ansonsten von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Verwendung des tabindex-Attributs | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Verwenden Sie keinen Tabindex größer als 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
