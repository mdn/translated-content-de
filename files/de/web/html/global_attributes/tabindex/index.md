---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) erlaubt Entwicklern, HTML-Elemente fokussierbar zu machen, ihnen zu erlauben oder zu verhindern, dass sie sequentiell fokussierbar sind (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Fokusnavigation zu bestimmen.

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

Es akzeptiert einen ganzzahligen Wert, mit unterschiedlichen Ergebnissen je nach Wert:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das Attribut `tabindex` mit einem gültigen ganzzahligen Wert hat, kann das Element mit JavaScript (durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus fokussiert werden. Der spezielle `tabindex`-Wert steuert, ob das Element `tabbable` ist (d.h. über die sequentielle Tastaturnavigation erreichbar, normalerweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert ist tatsächlich irrelevant, normalerweise `tabindex="-1"`) bedeutet, dass das Element über die sequentielle Tastaturnavigation nicht erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann für Elemente nützlich sein, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollen, aber trotzdem den Tastaturfokus erhalten müssen. Beispiele hierfür sind ein Modal-Fenster außerhalb des Bildschirms, das fokussiert werden soll, wenn es sichtbar wird, oder eine Fehlermeldung bei der Formularübermittlung, die unmittelbar fokussiert werden soll, wenn ein fehlerhaftes Formular abgeschickt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Navigationsreihenfolge von diesen Elementen wird durch ihre Reihenfolge im Dokumentenquellcode definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, wobei seine Reihenfolge durch den Zahlenwert definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"`, aber nach `tabindex="3"` fokussiert. Wenn mehrere Elemente denselben positiven `tabindex`-Wert haben, folgt ihre relative Reihenfolge zueinander ihrer Position im Dokumentenquellcode. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne gesetzten Wert einbezogen wird, wird durch den Benutzeragenten bestimmt, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten größer als `0` und CSS-Eigenschaften, die die Reihenfolge fokussierbarer HTML-Elemente ändern können ([Ordering flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Solche Praktiken erschweren es Menschen, die auf die Tastaturnavigation oder Hilfstechnologie angewiesen sind, den Seiteninhalt zu navigieren und zu bedienen. Stattdessen sollten Sie das Dokument mit den Elementen in einer logischen Reihenfolge schreiben.

Einige fokussierbare HTML-Elemente haben standardmäßig einen `tabindex`-Wert von `0`, der vom [Benutzeragenten](/de/docs/Glossary/User_agent) hinter den Kulissen gesetzt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit dem `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und das SVG-Element {{SVGElement("a")}}, oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bietet. Entwickler sollten das `tabindex`-Attribut zu diesen Elementen nicht hinzufügen, es sei denn, es ändert das Standardverhalten (z.B. das Hinzufügen eines negativen Wertes wird das Element aus der Fokus-Navigationsreihenfolge entfernen).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf das {{HTMLElement("dialog")}}-Element angewendet werden.

## Barrierefreiheit

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktivem Inhalt](/de/docs/Web/HTML/Content_categories#interactive_content), um etwas, das interaktiv sein soll, mittels Tastatureingabe fokussierbar zu machen. Ein Beispiel hierfür wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung eines Buttons, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, sind nicht im [Zugänglichkeitstree](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dies verhindert, dass Hilfstechnologie in der Lage ist, auf diese Komponenten zuzugreifen und sie zu manipulieren. Der Inhalt sollte semantisch mit interaktiven Elementen ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.) beschrieben werden. Diese Elemente haben eingebaute Rollen und Zustände, die den Status zur Barrierefreiheit kommunizieren, der sonst mit [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), welches dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
