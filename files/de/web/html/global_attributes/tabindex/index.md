---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
l10n:
  sourceCommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{HTMLSidebar("Global_attributes")}}

Das **`tabindex`** [globale Attribut](/de/docs/Web/HTML/Global_attributes) ermöglicht es Entwicklern, HTML-Elemente fokussierbar zu machen, sie sequentiell fokussierbar zu machen oder dies zu verhindern (normalerweise mit der <kbd>Tab</kbd>-Taste, daher der Name) und ihre relative Reihenfolge für die sequentielle Fokussierung zu bestimmen.

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

Es akzeptiert einen ganzzahligen Wert, wobei unterschiedliche Ergebnisse je nach Wert erzielt werden:

> [!NOTE]
> Wenn ein HTML-Element gerendert wird und das `tabindex`-Attribut mit einem beliebigen gültigen ganzzahligen Wert versehen ist, kann das Element mit JavaScript fokussiert werden (durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode) oder visuell durch Klicken mit der Maus. Der spezifische `tabindex`-Wert bestimmt, ob das Element `tabbable` ist (d.h. über sequentielle Tastaturnavigation erreichbar, normalerweise mit der <kbd>Tab</kbd>-Taste).

- Ein _negativer Wert_ (der genaue negative Wert spielt keine Rolle, normalerweise `tabindex="-1"`) bedeutet, dass das Element nicht über sequentielle Tastaturnavigation erreichbar ist.

  > **Hinweis:** `tabindex="-1"` kann für Elemente nützlich sein, die nicht direkt mit der <kbd>Tab</kbd>-Taste navigiert werden sollten, aber den Tastaturfokus auf sie setzen müssen. Beispiele sind ein Off-Screen-Modalfenster, das fokussiert werden soll, wenn es sichtbar wird, oder eine Fehlermeldung für das Absenden eines Formulars, die sofort fokussiert werden soll, wenn ein fehlerhaftes Formular eingereicht wird.

- `tabindex="0"` bedeutet, dass das Element bei sequentieller Tastaturnavigation fokussierbar sein sollte, nach allen positiven `tabindex`-Werten. Die Fokussierungsreihenfolge dieser Elemente wird durch ihre Reihenfolge im Dokumenten-Quellcode definiert.
- Ein _positiver Wert_ bedeutet, dass das Element bei sequentieller Tastaturnavigation fokussierbar sein soll, wobei seine Reihenfolge durch den Wert der Zahl definiert wird. Das bedeutet, `tabindex="4"` wird vor `tabindex="5"` und `tabindex="0"`, aber nach `tabindex="3"` fokussiert. Wenn mehrere Elemente denselben positiven `tabindex`-Wert haben, folgt ihre relative Reihenfolge der Position im Dokumenten-Quellcode. Der maximale Wert für `tabindex` ist 32767.
- Wenn das `tabindex`-Attribut ohne Wert angegeben wird, wird vom Benutzeragenten bestimmt, ob das Element fokussierbar ist.

  > [!WARNING]
  > Es wird empfohlen, nur `0` und `-1` als `tabindex`-Werte zu verwenden. Vermeiden Sie die Verwendung von `tabindex`-Werten größer als `0` und CSS-Eigenschaften, die die Reihenfolge der fokussierbaren HTML-Elemente ändern können ([Reihenfolge von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Ordering_flex_items)). Andernfalls können Personen, die auf die Navigation oder Bedienung von Seiteninhalten mit Tastatur oder assistiven Technologien angewiesen sind, Schwierigkeiten haben. Schreiben Sie stattdessen das Dokument in einer logischen Reihenfolge.

Einige fokussierbare HTML-Elemente haben standardmäßig den `tabindex`-Wert `0`, der vom [Benutzeragenten](/de/docs/Glossary/User_agent) festgelegt wird. Diese Elemente sind ein {{HTMLElement("a")}} oder {{HTMLElement("area")}} mit `href`-Attribut, {{HTMLElement("button")}}, {{HTMLElement("frame")}} {{deprecated_inline}}, {{HTMLElement("iframe")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, und das SVG-Element {{SVGElement("a")}}, oder ein {{HTMLElement("summary")}}-Element, das eine Zusammenfassung für ein {{HTMLElement("details")}}-Element bereitstellt. Entwickler sollten das `tabindex`-Attribut diesen Elementen nicht hinzufügen, außer um das Standardverhalten zu ändern (zum Beispiel wird ein negativer Wert das Element aus der Fokussierungsreihenfolge entfernen).

> [!WARNING]
> Das tabindex-Attribut darf nicht auf das {{HTMLElement("dialog")}}-Element angewendet werden.

## Barrierefreiheit

Vermeiden Sie die Verwendung des `tabindex`-Attributs in Verbindung mit nicht-[interaktiven Inhalten](/de/docs/Web/HTML/Content_categories#interactive_content), um etwas, das interaktiv sein soll, auf Tastatureingaben fokussierbar zu machen. Ein Beispiel dafür wäre die Verwendung eines {{HTMLElement("div")}}-Elements zur Beschreibung eines Buttons, anstelle des {{HTMLElement("button")}}-Elements.

Interaktive Komponenten, die unter Verwendung nicht-interaktiver Elemente erstellt wurden, sind nicht im [Barrierefreiheitsbaum](/de/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis) aufgeführt. Dies verhindert, dass assistive Technologien auf diese Komponenten zugreifen und sie manipulieren können. Der Inhalt sollte semantisch unter Verwendung interaktiver Elemente beschrieben werden ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.). Diese Elemente haben eingebaute Rollen und Zustände, die den Status der Barrierefreiheit kommunizieren, der ansonsten von [ARIA](/de/docs/Web/Accessibility/ARIA) verwaltet werden müsste.

- [Using the tabindex attribute | The Paciello Group](https://www.tpgi.com/using-the-tabindex-attribute/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Alle [globalen Attribute](/de/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.tabIndex")}}, das dieses Attribut widerspiegelt
- Barrierefreiheitsprobleme mit `tabindex`: siehe [Don't Use Tabindex Greater than 0](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) von Adrian Roselli
