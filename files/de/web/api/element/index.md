---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: d105060fc9f3269c6559e55c4fcd5cea27f065fa
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (d.h. Objekte, die Elemente repräsentieren) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie verfügt nur über Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface die Basis für HTML-Elemente. Ebenso ist das [`SVGElement`](/de/docs/Web/API/SVGElement)-Interface die Grundlage für alle SVG-Elemente, und das [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Interface ist die Basis für MathML-Elemente. Die meisten Funktionalitäten werden weiter unten in der Klassenerbfolge spezifiziert.

Auch außerhalb der Webplattform angesiedelte Sprachen, wie XUL durch das `XULElement`-Interface, implementieren `Element`.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`Element` erbt Eigenschaften von seinem Eltern-Interface, [`Node`](/de/docs/Web/API/Node), und dessen Eltern-Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das den {{htmlelement("slot")}} repräsentiert, in den der Knoten eingefügt ist.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente dieses Elements zurück.
- [`Element.children`](/de/docs/Web/API/Element/children) {{ReadOnlyInline}}
  - : Gibt die Kindelemente dieses Elements zurück.
- [`Element.classList`](/de/docs/Web/API/Element/classList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die Liste der Klassenattribute enthält.
- [`Element.className`](/de/docs/Web/API/Element/className)
  - : Ein String, der die Klasse des Elements repräsentiert.
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Höhe des Elements darstellt.
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des linken Rahmens des Elements darstellt.
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des oberen Rahmens des Elements darstellt.
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Breite des Elements darstellt.
- [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) {{ReadOnlyInline}}
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1.0, wenn das Element nicht gerendert ist.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Ein String, der das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut widerspiegelt, welches ein Element für die Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API markiert.
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kindelement dieses Elements zurück.
- [`Element.id`](/de/docs/Web/API/Element/id)
  - : Ein String, der die ID des Elements repräsentiert.
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
  - : Ein String, der das Markup des Inhalts des Elements repräsentiert.
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement dieses Elements zurück.
- [`Element.localName`](/de/docs/Web/API/Element/localName) {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Elements repräsentiert.
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) {{ReadOnlyInline}}
  - : Der Namespace-URI des Elements oder `null`, wenn es keinen Namespace gibt.
- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar auf das gegebene im Baum folgt, oder `null`, wenn es keinen Geschwisterknoten gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Ein String, der das Markup des Elements inklusive seines Inhalts repräsentiert. Wenn als Setter verwendet, ersetzt er das Element durch Knoten, die aus dem gegebenen String analysiert werden.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert die Part-Kennung(en) des Elements (d.h. mit dem `part`-Attribut gesetzt), zurückgegeben als [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Elements repräsentiert, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar dem gegebenen im Baum vorausgeht, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scroll-Höhe eines Elements darstellt.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den linken Scroll-Offset des Elements repräsentiert.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen linken Scroll-Offset für das Element darstellt.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die die Anzahl der Pixel repräsentiert, um die das obere Ende des Elements vertikal gescrollt ist.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen oberen Scroll-Offset für das Element darstellt.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scroll-Breite des Elements darstellt.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt die offene Schattenwurzel zurück, die von dem Element gehostet wird, oder null, wenn keine offene Schattenwurzel vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Shadow DOM-Slots zurück, in den das Element eingefügt ist.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Tags für das gegebene Element zurück.

### In ARIA enthaltene Instanzeigenschaften

_Das `Element`-Interface beinhaltet auch die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Attribut widerspiegelt, das angibt, ob unterstützende Technologien alle oder nur Teile der geänderten Region basierend auf den Änderungsbenachrichtigungen anzeigen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut definiert sind.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut widerspiegelt, welches angibt, ob das Eingeben von Text die Anzeige von einer oder mehreren Vorhersagen des beabsichtigten Werts des Benutzers für eine Kombinationsbox, Suchbox oder Textbox auslösen könnte, und wie Vorhersagen präsentiert würden, wenn sie gemacht werden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) Attribut widerspiegelt, welches die Braille-Beschriftung des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) Attribut widerspiegelt, welches die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) Attribut widerspiegelt, welches angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut widerspiegelt, welches den aktuellen "geprüften" Status von Kontrollkästchen, Optionsfelder und anderen Widgets angibt, die einen geprüften Status haben.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut widerspiegelt, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut widerspiegelt, welches den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) Attribut widerspiegelt, welches einen menschenlesbaren Textalternative zu aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) Attribut widerspiegelt, welches die Anzahl der durch eine Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Spalten definiert.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) Attribut widerspiegelt, welches das Element angibt, das das aktuelle Element in einem Container oder einer Menge verwandter Elemente repräsentiert.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) Attribut widerspiegelt, welches einen String-Wert definiert, der das aktuelle Element beschreibt oder kommentiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Attribut widerspiegelt, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut widerspiegelt, welches angibt, ob ein von diesem Element besessenes oder kontrolliertes Gruppierungselement erweitert oder eingeklappt ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut widerspiegelt, welches die Verfügbarkeit und den Typ des interaktiven Popupelements angibt, wie Menü oder Dialog, das durch ein Element ausgelöst werden kann.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut widerspiegelt, welches angibt, ob das Element einer Barrierefreiheits-API zugänglich ist.
- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Ein String, der das [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) Attribut widerspiegelt, welches angibt, dass der eingegebene Wert nicht dem vom Antrag erwarteten Format entspricht.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) Attribut widerspiegelt, welches Tastaturkürzel angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder ihm den Fokus zu geben.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut widerspiegelt, welches einen String-Wert definiert, der das aktuelle Element beschriftet.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribut widerspiegelt, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribut widerspiegelt, welches angibt, dass ein Element aktualisiert wird, und die Arten von Updates beschreibt, die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) Attribut widerspiegelt, welches angibt, ob ein Element modal ist, wenn es angezeigt wird.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut widerspiegelt, welches angibt, ob eine Textbox mehrere Zeilen Eingaben oder nur eine einzelne Zeile akzeptiert.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) Attribut widerspiegelt, welches angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Attribut widerspiegelt, welches angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut widerspiegelt, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn die Steuerung keinen Wert hat.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) Attribut widerspiegelt, welches die Nummer oder Position eines Elements in der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut widerspiegelt, welches den aktuellen "gedrückten" Status von Umschaltknöpfen angibt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut widerspiegelt, welches angibt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut widerspiegelt, welches angibt, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Barrierefreiheitsbaum innerhalb einer Live-Region verändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut widerspiegelt, welches angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular abgeschickt werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) Attribut widerspiegelt, welches eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) Attribut widerspiegelt, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut widerspiegelt, welches den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) Attribut widerspiegelt, welches eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) Attribut widerspiegelt, welches die Anzahl der durch eine Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Zeilen definiert.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut widerspiegelt, welches den aktuellen "ausgewählten" Status von Elementen angibt, die einen ausgewählten Status haben.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) Attribut widerspiegelt, welches die Anzahl der Elemente in der aktuellen Gruppe von Listenelementen oder Baumelementen definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Attribut widerspiegelt, welches angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Attribut widerspiegelt, welches den maximal zulässigen Wert für ein Bereich-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) Attribut widerspiegelt, welches den minimal zulässigen Wert für ein Bereich-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) Attribut widerspiegelt, welches den aktuellen Wert für ein Bereich-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) Attribut widerspiegelt, welches die menschenlesbare Textalternative zu `aria-valuenow` für ein Bereich-Widget definiert.
- [`Element.role`](/de/docs/Web/API/Element/role)
  - : Ein String, der das explizit gesetzte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribut widerspiegelt, welches die semantische Rolle des Elements angibt.

#### Von ARIA-Elementreferenzen reflektierte Instanzeigenschaften

Die Eigenschaften spiegeln die durch `ID`-Referenzen in den entsprechenden Attributen angegebenen Elemente wider, jedoch mit einigen Einschränkungen. Weitere Informationen finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_ Leitfaden.

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Ein Element, das das aktuell aktive Element repräsentiert, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Widerspiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut.
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalte oder Präsenz durch das Element, auf das es angewendet wird, gesteuert werden.
    Widerspiegelt das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut.
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Ein Array von Elementen, die die barrierefreie Beschreibung für das Element, auf das es angewendet wird, enthalten.
    Widerspiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut.
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Ein Array von Elementen, die barrierefreie Details für das Element, auf das es angewendet wird, bereitstellen.
    Widerspiegelt das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) Attribut.
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das Element, auf das es angewendet wird, bereitstellen.
    Widerspiegelt das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) Attribut.
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Ein Array von Elementen, die das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts identifizieren, indem sie die allgemeine Standard-Lesereihenfolge nach Ermessen des Benutzers außer Kraft setzen.
    Widerspiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) Attribut.
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Ein Array von Elementen, die den barrierefreien Namen für das Element, auf das es angewendet wird, bereitstellen.
    Widerspiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut.
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Ein Array von Elementen, die durch das Element, auf das dies angewendet wird, besessen werden.
    Dies wird verwendet, um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element und seinen untergeordneten Elementen zu definieren, wenn die DOM-Hierarchie nicht zur Darstellung der Beziehung verwendet werden kann.
    Widerspiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut.

## Instanzmethoden

_`Element` erbt Methoden von seinen Eltern [`Node`](/de/docs/Web/API/Node) und seinem eigenen Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt nach dem `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode, um eine Animation auf einem Element zu erstellen und auszuführen. Gibt das erstellte Animation-Objekt zurück.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Fügt einem angegebenen Element einen Schatten-DOM-Baum hinzu und gibt eine Referenz zu dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt vor dem `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt zurück, ob ein Element voraussichtlich sichtbar ist oder nicht, basierend auf konfigurierbaren Prüfungen.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, das der nächste Vorfahre des aktuellen Elements (oder das aktuelle Element selbst) ist, das die im Parameter angegebenen Selektoren erfüllt.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) ist.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von Animation-Objekten zurück, die derzeit auf dem Element aktiv sind.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen des aktuellen Elements zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knotendarstellung des benannten Attributs vom aktuellen Knoten ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knotendarstellung des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Namen vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Ansichtsfenster zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekten zurück, die die CSS-Fragmente des Knotens repräsentieren.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client angeben.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen des aktuellen Elements enthält, die die im Parameter angegebene Liste von Klassen besitzen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens vom aktuellen Element enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens und Namespaces vom aktuellen Element enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-String zurück, optional inklusive des Shadow DOM.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut hat oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut im angegebenen Namespace hat oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute aufweist.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, Pointer-Capture für den durch die gegebene Pointer-ID identifizierten Zeiger hat.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt einen gegebenen Elementknoten an einer bestimmten Position relativ zu dem Element, auf das es angewendet wird, ein.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Analysiert den Text als HTML oder XML und fügt die resultierenden Knoten in das Baum an der angegebenen Position ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen gegebenen Textknoten an einer bestimmten Position relativ zu dem Element, auf dem es aufgerufen wird, ein.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element durch den angegebenen Selektor-String ausgewählt würde oder nicht.
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) {{Experimental_Inline}}
  - : Verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kind vor einen gegebenen Referenzknoten, ohne den Knoten zu entfernen und dann einzufügen.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings vor das erste Kind des Elements ein.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, der dem angegebenen Selektor-String relativ zu dem Element entspricht.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die dem angegebenen Selektor-String relativ zu dem Element entsprechen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt die zuvor für ein bestimmtes [`PointerEvent`](/de/docs/Web/API/PointerEvent) gesetzte Pointer-Capture frei (stoppt sie).
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knotendarstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) durch einen angegebenen neuen Satz von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kinderliste seines Elternteils durch eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fragt asynchron den Browser, das Element im Vollbildmodus anzuzeigen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Ermöglicht es, asynchron die Zeigersperre für das gegebene Element anzufordern.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Koordinatensatz innerhalb eines angegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in den sichtbaren Bereich gelangt.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es nicht bereits im sichtbaren Bereich ist. **Verwenden Sie die Standardmethode [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) stattdessen.**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt zu einem bestimmten Koordinatensatz innerhalb eines angegebenen Elements.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Setzt den Wert eines benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knotendarstellung des benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knotendarstellung des Attributs mit dem angegebenen Namen und Namespace des aktuellen Knotens.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Setzt den Wert des Attributs mit dem angegebenen Namen und Namespace des aktuellen Knotens.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet das Mouse-Event-Capture ein, um alle Mausereignisse zu diesem Element umzuleiten.
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) {{SecureContext_Inline}} {{experimental_inline}}
  - : Analysiert und [bereinigt](/de/docs/Web/API/HTML_Sanitizer_API) einen HTML-String in ein Dokumentfragment, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Analysiert einen HTML-String in ein Dokumentfragment, ohne ihn zu bereinigen, der dann den ursprünglichen Unterbaum des Elements im DOM ersetzt. Der HTML-String kann deklarative Schattenwurzeln enthalten, die als Template-Elemente analysiert würden, wenn das HTML mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) gesetzt wurde.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bezeichnet ein spezifisches Element als Ziel für zukünftige [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Schaltet ein boolesches Attribut um, indem es entfernt wird, wenn es vorhanden ist, und hinzugefügt wird, wenn es nicht vorhanden ist, für das angegebene Element.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignislisteners zur `oneventname` Eigenschaft dieses Interfaces an.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Ausgelöst, wenn ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Ausgelöst, wenn der Wert eines Eingabeelements geändert werden soll.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
  - : Feuert auf einem Element, das sich im [versteckt bis gefunden](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Zustand befindet, wenn der Browser im Begriff ist, dessen Inhalt zu enthüllen, weil der Benutzer den Inhalt über die "Seite durchsuchen"-Funktion oder durch Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Ausgelöst, wenn ein Skript ausgeführt werden soll.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) verteilt werden.
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Feuert auf jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}}, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [seine Inhalte zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Feuert, wenn der Wert eines Elements direkt durch eine Benutzeraktion geändert wird.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Ausgelöst, wenn der Benutzer eine Radtaste auf einem Zeigegerät (typischerweise einer Maus) dreht.

### Animationsereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Ausgelöst, wenn eine Animation unerwartet abbricht.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Ausgelöst, wenn eine Animation normal abgeschlossen ist.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Ausgelöst, wenn eine Animationsiteration abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Ausgelöst, wenn eine Animation startet.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Ausschneideaktion initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Einfügeaktion initiiert.

### Kompositionsereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Ausgelöscht, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Ausgelöscht, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Kompositionssitzung startet.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Ausgelöscht, wenn ein neues Zeichen im Kontext einer von einem Textkompositionssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuerten Textkompositionssitzung empfangen wird.

### Fokussierungsereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Ausgelöst, wenn ein Element den Fokus verliert.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Ausgelöst, wenn ein Element den Fokus erlangt.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Ausgelöst, wenn ein Element den Fokus erlangt, nachdem [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Ausgelöst, wenn ein Element den Fokus verliert, nachdem [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbildereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein `Element` gesendet, wenn es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu schalten.

### Tastenereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Ausgelöst, wenn eine Taste, die Zeichenwerte erzeugt, niedergedrückt wird.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Ausgelöst, wenn eine nicht-primäre Zeigergerättaste (z. B. jede Maustaste außer der linken Taste) auf einem Element gedrückt und losgelassen wird.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Ausgelöst, wenn eine Zeigergerättaste (z. B. die primäre Taste einer Maus) auf einem einzelnen Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Ausgelöst, wenn eine Zeigergerättaste (z. B. die primäre Taste einer Maus) zweimal auf einem einzigen Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, z. B. durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn das Maus-Scrollrad oder ein ähnliches Gerät betrieben wird und die akkumulierte Scrollmenge über 1 Zeile oder 1 Seite seit dem letzten Ereignis liegt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Ausgelöst, wenn eine Zeigergerättaste auf einem Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Ausgelöst, wenn ein Zeigergerät (normalerweise eine Maus) über das Element bewegt wird, an dem der Listener angebracht ist.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Ausgelöst, wenn der Zeiger eines Zeigergeräts (normalerweise einer Maus) aus einem Element bewegt wird, an dem der Listener angebracht ist.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Ausgelöst, wenn ein Zeigergerät (normalerweise eine Maus) über ein Element bewegt wird.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Ausgelöst, wenn ein Zeigergerät (normalerweise eine Maus) vom Element bewegt wird, an dem der Listener angebracht ist, oder von einem seiner Kinder.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Ausgelöst, wenn ein Zeigergerät über das Element bewegt wird, an dem der Listener angebracht ist, oder über eins seiner Kinder.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Ausgelöst, wenn eine Zeigergerättaste auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Maus-Scrollrad oder ein ähnliches Gerät verwendet wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Maus-Scrollrad oder ein ähnliches Gerät verwendet wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad-Touchscreen ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Ausgelöst nach dem mousedown-Ereignis, sobald ausreichend Druck angewendet wurde, um als "Force-Klick" zu qualifizieren.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Ausgelöst vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Ereignis.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Ausgelöscht, nachdem das Ereignis [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) ausgelöst wurde, sobald der Druck ausreichend reduziert wurde, um den "Force-Klick" zu beenden.

### Zeigerereignisse

- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Ausgelöst, wenn ein Element einen Zeiger durch [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) erfasst.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Ausgelöst, wenn ein [erfasster Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ausgelöst, wenn ein Zeigerereignis abgebrochen wird.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Ausgelöst, wenn ein Zeiger aktiv wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Ausgelöst, wenn ein Zeiger in die Treffererkennungsgrenzen eines Elements oder eines seiner Nachkommen bewegt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Ausgelöst, wenn ein Zeiger aus den Treffererkennungsgrenzen eines Elements bewegt wird.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Ausgelöst, wenn ein Zeiger seine Koordinaten ändert.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Ausgelöscht, wenn ein Zeiger aus den _Treffererkennungs_ Grenzen eines Elements (aus verschiedenen Gründen) bewegt wird.
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Ausgelöst, wenn ein Zeiger in die Treffererkennungsgrenzen eines Elements bewegt wird.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - : Ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Scroll-Ereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wird.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn das Scrollen der Dokumentansicht abgeschlossen ist.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, d.h. es wird ausgewählt, wenn die aktuelle Scrollgeste endet.

### Touchereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn sich die Finger während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Ausgelöscht, wenn keine weiteren Finger mehr die Berührungsoberfläche berühren und damit die Geste endet.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn mehrere Finger die Berührungsoberfläche berühren und damit eine neue Geste beginnen.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Ausgelöst, wenn eine oder mehrere Berührungspunkte in einer implementierungsspezifischen Weise gestört wurden (z. B. werden zu viele Berührungspunkte erstellt).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Ausgelöst, wenn eine oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Ausgelöst, wenn eine oder mehrere Berührungspunkte entlang der Berührungsoberfläche bewegt werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Ausgelöst, wenn eine oder mehr Berührungspunkte auf der Berührungsoberfläche platziert werden.

### Übergangsereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgespielt wurde.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h. wenn er zu einer Menge von laufenden Übergängen hinzugefügt wird), jedoch nicht notwendigerweise begonnen hat.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), ausgelöst, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) zu übertragen beginnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
