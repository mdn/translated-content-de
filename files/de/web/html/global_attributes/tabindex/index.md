---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen. Es erlaubt oder verhindert, dass sie sequentiell fokussierbar sind (in der Regel mit der <kbd>Tab</kbd>-Taste, daher der Name) und bestimmt ihre relative Reihenfolge für die sequentielle Fokuss-Navigation.

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

Es akzeptiert einen ganzzahligen Wert, mit unterschiedlichen Ergebnissen je nach Wert der Ganzzahl:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem gültigen ganzzahligen Wert hat, kann das Element mit JavaScript (durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus fokussiert werden. Der spezifische `tabindex`-Wert steuert, ob das Element `tabbable` ist (d.h. über sequentielle Tastaturnavigation erreichbar, üblicherweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert spielt keine Rolle, meist `tabindex="-1"`) bedeutet, dass das Element nicht über sequentielle Tastaturnavigation erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann nützlich sein für Elemente, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollen, aber dennoch eine Tastaturfokussierung benötigen. Beispiele umfassen ein Off-Screen-Modalfenster, das fokussiert werden soll, wenn es in den Blick kommt, oder eine Fehlermeldung bei der Formularübermittlung, die sofort fokussiert werden soll, wenn ein fehlerhaftes Formular übermittelt wird.

- `tabindex="0"` bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Fokus-Navigationsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokument-Quelltext definiert.
- Ein _positiver Wert_ bedeutet, dass das Element in der sequentiellen Tastaturnavigation fokussierbar sein sollte, wobei seine Reihenfolge durch den Zahlenwert definiert wird. Das heißt, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"` fokussiert, aber nach `tabindex="3"`. Wenn mehrere Elemente denselben positiven `tabindex`-Wert teilen, folgt ihre Reihenfolge relativ zueinander ihrer Position im Dokument-Quelltext. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne festgelegten Wert enthalten ist, wird die Fokussierbarkeit des Elements vom Benutzeragenten bestimmt.

  > [!WARNING]
  > Es wird empfohlen, nur die Werte `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten, die größer als `0` sind, und von CSS-Eigenschaften, die die Reihenfolge von fokussierbaren HTML-Elementen ändern können ([Anordnung von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Dies erschwert es Menschen, die auf die Verwendung der Tastatur zur Navigation oder assistive Technologien angewiesen sind, Seiteninhalte zu navigieren und zu bedienen. Stattdessen sollten Sie das Dokument in einer logischen Reihenfolge schreiben.

Einige fokussierbare HTML-Elemente haben einen Standard-`tabindex`-Wert von `0`, der vom [Benutzeragenten](/de/docs/Glossary/User_agent) standardmäßig festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}}- oder {{HTMLElement("area")}}-Element mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} und SVG {{SVGElement("a")}} oder ein {{HTMLElement("summary")}}, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bietet. Entwickler sollten diesen Elementen nicht das `tabindex`-Attribut hinzufügen, es sei denn, es ändert das Standardverhalten (zum Beispiel wird ein negativer Wert das Element aus der Fokus-Navigationsreihenfolge entfernen).

> [!WARNING]
> Das `tabindex`-Attribut darf nicht auf das {{HTMLElement("dialog")}}-Element angewendet werden.

## Zugänglichkeitsaspekte

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Content_categories#interactive_content), um etwas, das interaktiv sein soll, per Tastatureingabe fokussierbar zu machen. Ein Beispiel dafür wäre die Verwendung eines {{HTMLElement("div")}}-Elements, um eine Schaltfläche zu beschreiben, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die mit nicht-interaktiven Elementen erstellt wurden, werden nicht im [Zugänglichkeitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dies verhindert, dass assistive Technologien auf diese Komponenten zugreifen und sie manipulieren können. Die Inhalte sollten semantisch mit interaktiven Elementen beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} usw.). Diese Elemente haben eingebaute Rollen und Zustände, die den Status an die Barrierefreiheit kommunizieren, die ansonsten von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müssten.

- [Verwendung des tabindex-Attributs | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- [`HTMLElement.tabIndex`](/de/docs/Web/API/HTMLElement/tabIndex), das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
