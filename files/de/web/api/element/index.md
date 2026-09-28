---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: 50269fbebe683be12c76678bf11d03126c7610a4
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (also Objekte, die Elemente repräsentieren) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie verfügt nur über Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) ist beispielsweise die Basisschnittstelle für HTML-Elemente. Ebenso bildet die Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement) die Grundlage für alle SVG-Elemente und die Schnittstelle [`MathMLElement`](/de/docs/Web/API/MathMLElement) die Basisschnittstelle für MathML-Elemente. Die meisten Funktionen sind weiter unten in der Klassenhierarchie definiert.

Auch Sprachen außerhalb der Webplattform, etwa XUL über die Schnittstelle `XULElement`, implementieren `Element`.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`Element` erbt Eigenschaften von seiner übergeordneten Schnittstelle [`Node`](/de/docs/Web/API/Node) und damit auch von deren übergeordneter Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.activeViewTransition`](/de/docs/Web/API/Element/activeViewTransition) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die den derzeit auf einem Element aktiven [View-Übergang](/de/docs/Web/API/View_Transition_API) repräsentiert.
- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das den {{htmlelement("slot")}} repräsentiert, in den der Knoten eingefügt wurde.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente dieses Elements zurück.
- [`Element.children`](/de/docs/Web/API/Element/children) {{ReadOnlyInline}}
  - : Gibt die Kindelemente dieses Elements zurück.
- [`Element.classList`](/de/docs/Web/API/Element/classList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) mit der Liste der Klassenattribute zurück.
- [`Element.className`](/de/docs/Web/API/Element/className)
  - : Eine Zeichenfolge, die die Klasse des Elements repräsentiert.
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Höhe des Elements repräsentiert.
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des linken Rahmens des Elements repräsentiert.
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des oberen Rahmens des Elements repräsentiert.
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Breite des Elements repräsentiert.
- [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) {{ReadOnlyInline}}
  - : Eine Zahl, die den effektiven Zoomfaktor des Elements angibt, oder 1.0, wenn das Element nicht gerendert wird.
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry) {{ReadOnlyInline}}
  - : Das diesem Element zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`, wenn keines festgelegt wurde.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Eine Zeichenfolge, die das Attribut [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) widerspiegelt, das ein Element für die Beobachtung durch die [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API markiert.
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kindelement dieses Elements zurück.
- [`Element.id`](/de/docs/Web/API/Element/id)
  - : Eine Zeichenfolge, die die ID des Elements repräsentiert.
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
  - : Eine Zeichenfolge, die das Markup des Elementinhalts repräsentiert.
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement dieses Elements zurück.
- [`Element.localName`](/de/docs/Web/API/Element/localName) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den lokalen Teil des qualifizierten Namens des Elements repräsentiert.
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) {{ReadOnlyInline}}
  - : Die Namespace-URI des Elements oder `null`, wenn es keinem Namespace angehört.
- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das im Baum unmittelbar auf das angegebene Element folgt, oder `null`, wenn kein Geschwisterknoten vorhanden ist.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Eine Zeichenfolge, die das Markup des Elements einschließlich seines Inhalts repräsentiert. Bei Verwendung als Setter wird das Element durch Knoten ersetzt, die aus der angegebenen Zeichenfolge geparst werden.
- [`Element.part`](/de/docs/Web/API/Element/part) {{ReadOnlyInline}}
  - : Repräsentiert die Part-Bezeichner des Elements (die mit dem Attribut `part` festgelegt werden) und wird als [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurückgegeben.
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das Namespace-Präfix des Elements repräsentiert, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das im Baum unmittelbar vor dem angegebenen Element steht, oder `null`, wenn kein Geschwisterelement vorhanden ist.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Höhe des scrollbaren Inhaltsbereichs eines Elements repräsentiert.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den horizontalen Scroll-Versatz des Elements von links repräsentiert.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen horizontalen Scroll-Versatz des Elements von links repräsentiert.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die angibt, um wie viele Pixel das Element vertikal von oben gescrollt wurde.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen vertikalen Scroll-Versatz des Elements von oben repräsentiert.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des scrollbaren Inhaltsbereichs des Elements repräsentiert.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt die offene Shadow-Root zurück, deren Host das Element ist, oder null, wenn keine offene Shadow-Root vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingefügt wurde.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge mit dem Tag-Namen des angegebenen Elements zurück.

### Aus ARIA übernommene Instanzeigenschaften

_Die Schnittstelle `Element` umfasst außerdem die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Eine Zeichenfolge, die das Attribut [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) widerspiegelt. Dieses gibt an, ob assistive Technologien aufgrund der durch das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) definierten Änderungsbenachrichtigungen den gesamten geänderten Bereich oder nur Teile davon ausgeben.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Eine Zeichenfolge, die das Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) widerspiegelt. Dieses gibt an, ob die Texteingabe die Anzeige einer oder mehrerer Vorhersagen für den vom Benutzer beabsichtigten Wert einer Combobox, eines Suchfelds oder eines Textfelds auslösen kann, und legt fest, wie solche Vorhersagen dargestellt werden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Eine Zeichenfolge, die das Attribut [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) widerspiegelt, das die Braille-Beschriftung des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Eine Zeichenfolge, die das Attribut [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) widerspiegelt, das die ARIA-Rollenbeschreibung des Elements in Braille definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Eine Zeichenfolge, die das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) widerspiegelt. Dieses gibt an, ob ein Element gerade geändert wird, da assistive Technologien möglicherweise warten sollen, bis die Änderungen abgeschlossen sind, bevor sie sie dem Benutzer zugänglich machen.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Eine Zeichenfolge, die das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) widerspiegelt. Dieses gibt den aktuellen Auswahlzustand von Kontrollkästchen, Optionsfeldern und anderen Widgets mit einem solchen Zustand an.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Eine Zeichenfolge, die das Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Grid oder einem Treegrid definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Eine Zeichenfolge, die das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) widerspiegelt. Dieses definiert den Spaltenindex beziehungsweise die Position eines Elements bezogen auf die Gesamtzahl der Spalten in einer Tabelle, einem Grid oder einem Treegrid.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Eine Zeichenfolge, die das Attribut [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) widerspiegelt, das eine menschenlesbare Textalternative für aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Eine Zeichenfolge, die das Attribut [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) widerspiegelt. Dieses definiert die Anzahl der Spalten, über die sich eine Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Grids oder eines Treegrids erstreckt.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Eine Zeichenfolge, die das Attribut [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) widerspiegelt. Dieses kennzeichnet das Element, das den aktuellen Eintrag innerhalb eines Containers oder einer Gruppe zusammengehöriger Elemente repräsentiert.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Eine Zeichenfolge, die das Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) widerspiegelt. Dieses definiert einen Zeichenfolgenwert, der das aktuelle Element beschreibt oder mit einer Anmerkung versieht.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Eine Zeichenfolge, die das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) widerspiegelt. Dieses gibt an, dass das Element wahrnehmbar, aber deaktiviert und daher weder bearbeitbar noch anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Eine Zeichenfolge, die das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) widerspiegelt. Dieses gibt an, ob ein Gruppierungselement, das diesem Element gehört oder von ihm gesteuert wird, aufgeklappt oder eingeklappt ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Eine Zeichenfolge, die das Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) widerspiegelt. Dieses gibt die Verfügbarkeit und den Typ eines interaktiven Popup-Elements an, beispielsweise eines Menüs oder Dialogs, das durch ein Element ausgelöst werden kann.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Eine Zeichenfolge, die das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) widerspiegelt. Dieses gibt an, ob das Element einer Barrierefreiheits-API zugänglich gemacht wird.
- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Eine Zeichenfolge, die das Attribut [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) widerspiegelt. Dieses gibt an, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Eine Zeichenfolge, die das Attribut [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) widerspiegelt. Dieses gibt Tastenkombinationen an, die ein Autor implementiert hat, um ein Element zu aktivieren oder ihm den Fokus zu geben.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Eine Zeichenfolge, die das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) widerspiegelt, das eine Beschriftung für das aktuelle Element definiert.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Eine Zeichenfolge, die das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) widerspiegelt, das die Hierarchieebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Eine Zeichenfolge, die das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) widerspiegelt. Dieses gibt an, dass ein Element aktualisiert wird, und beschreibt, welche Arten von Aktualisierungen Benutzeragenten, assistive Technologien und Benutzer von der Live-Region erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Eine Zeichenfolge, die das Attribut [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) widerspiegelt. Dieses gibt an, ob ein Element bei seiner Anzeige modal ist.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Eine Zeichenfolge, die das Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) widerspiegelt. Dieses gibt an, ob ein Textfeld mehrere Eingabezeilen oder nur eine einzelne Zeile akzeptiert.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Eine Zeichenfolge, die das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) widerspiegelt. Dieses gibt an, dass der Benutzer mehr als einen Eintrag aus den aktuell auswählbaren Nachkommen auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Eine Zeichenfolge, die das Attribut [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) widerspiegelt. Dieses gibt an, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt beziehungsweise mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Eine Zeichenfolge, die das Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) widerspiegelt. Dieses definiert einen kurzen Hinweis, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerelement keinen Wert hat.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Eine Zeichenfolge, die das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) widerspiegelt. Dieses definiert die Nummer oder Position eines Elements innerhalb der aktuellen Gruppe von Listeneinträgen oder Baumknoten.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Eine Zeichenfolge, die das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) widerspiegelt. Dieses gibt den aktuellen gedrückten Zustand von Umschaltflächen an.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Eine Zeichenfolge, die das Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) widerspiegelt. Dieses gibt an, dass das Element nicht bearbeitbar, ansonsten aber bedienbar ist.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Eine Zeichenfolge, die das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) widerspiegelt. Dieses gibt an, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Barrierefreiheitsbaum innerhalb einer Live-Region geändert wird. Damit wird beschrieben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollen.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Eine Zeichenfolge, die das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) widerspiegelt. Dieses gibt an, dass für das Element eine Benutzereingabe erforderlich ist, bevor ein Formular abgesendet werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Eine Zeichenfolge, die das Attribut [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) widerspiegelt. Dieses definiert eine vom Autor lokalisierte, menschenlesbare Beschreibung der Rolle eines Elements.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) widerspiegelt, das die Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) widerspiegelt. Dieses definiert den Zeilenindex beziehungsweise die Position eines Elements bezogen auf die Gesamtzahl der Zeilen in einer Tabelle, einem Grid oder einem Treegrid.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) widerspiegelt, das eine menschenlesbare Textalternative für aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Eine Zeichenfolge, die das Attribut [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) widerspiegelt. Dieses definiert die Anzahl der Zeilen, über die sich eine Zelle oder Grid-Zelle innerhalb einer Tabelle, eines Grids oder eines Treegrids erstreckt.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Eine Zeichenfolge, die das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) widerspiegelt. Dieses gibt den aktuellen Auswahlzustand von Elementen an, die einen solchen Zustand besitzen.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Eine Zeichenfolge, die das Attribut [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) widerspiegelt, das die Anzahl der Einträge in der aktuellen Gruppe von Listeneinträgen oder Baumknoten definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Eine Zeichenfolge, die das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) widerspiegelt. Dieses gibt an, ob Einträge in einer Tabelle oder einem Grid aufsteigend oder absteigend sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Eine Zeichenfolge, die das Attribut [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) widerspiegelt, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Eine Zeichenfolge, die das Attribut [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) widerspiegelt, das den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Eine Zeichenfolge, die das Attribut [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) widerspiegelt, das den aktuellen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Eine Zeichenfolge, die das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) widerspiegelt. Dieses definiert eine menschenlesbare Textalternative zu `aria-valuenow` für ein Bereichs-Widget.
- [`Element.role`](/de/docs/Web/API/Element/role)
  - : Eine Zeichenfolge, die das explizit festgelegte Attribut [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) widerspiegelt, das die semantische Rolle des Elements angibt.

#### Aus ARIA-Elementreferenzen übernommene Instanzeigenschaften

Die Eigenschaften spiegeln die Elemente wider, die in den entsprechenden Attributen über `id` referenziert werden, allerdings mit einigen Einschränkungen. Weitere Informationen finden Sie unter [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im Leitfaden zu _reflektierten Attributen_.

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Ein Element, das das aktuell aktive Element repräsentiert, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)-Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Spiegelt das Attribut [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wider.
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalt oder Vorhandensein durch das Element gesteuert wird, auf das diese Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) wider.
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Ein Array von Elementen, die die zugängliche Beschreibung für das Element enthalten, auf das diese Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) wider.
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Ein Array von Elementen, die zugängliche Details für das Element bereitstellen, auf das diese Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) wider.
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das Element bereitstellen, auf das diese Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) wider.
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Ein Array von Elementen, die das nächste Element oder die nächsten Elemente in einer alternativen Lesereihenfolge des Inhalts angeben und damit nach Ermessen des Benutzers die allgemeine Standardlesereihenfolge außer Kraft setzen.
    Spiegelt das Attribut [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) wider.
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Ein Array von Elementen, die den zugänglichen Namen für das Element bereitstellen, auf das diese Eigenschaft angewendet wird.
    Spiegelt das Attribut [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) wider.
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Ein Array von Elementen, die dem Element gehören, auf das diese Eigenschaft angewendet wird.
    Damit wird eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem Elternelement und seinen Kindelementen definiert, wenn sich diese Beziehung nicht durch die DOM-Hierarchie darstellen lässt.
    Spiegelt das Attribut [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) wider.

## Instanzmethoden

_`Element` erbt Methoden von seiner übergeordneten Schnittstelle [`Node`](/de/docs/Web/API/Node) und deren übergeordneter Schnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Liste der Kindelemente des Elternelements von `Element` ein, unmittelbar nach `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Kurzform zum Erstellen und Ausführen einer Animation auf einem Element. Gibt die Instanz des erstellten Animation-Objekts zurück.
- [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
  - : Legt fest, dass eine angegebene Textzeichenfolge von einem Screenreader angesagt werden soll.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Hängt einen Shadow-DOM-Baum an das angegebene Element an und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Liste der Kindelemente des Elternelements von `Element` ein, unmittelbar vor `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt anhand konfigurierbarer Prüfungen zurück, ob ein Element voraussichtlich sichtbar ist.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, das der nächste Vorfahr des aktuellen Elements ist (oder das aktuelle Element selbst), auf das die als Parameter angegebenen Selektoren zutreffen.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks als Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) bereitstellt.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von Animation-Objekten zurück, die derzeit auf dem Element aktiv sind.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs des aktuellen Knotens ab und gibt ihn als Zeichenfolge zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array mit den Attributnamen des aktuellen Elements zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knotendarstellung des benannten Attributs des aktuellen Knotens ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knotendarstellung des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Namen vom aktuellen Knoten ab und gibt ihn als Zeichenfolge zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Viewport zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekten zurück, die die CSS-Fragmente des Knotens repräsentieren.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client angeben.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine live aktualisierte [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen des aktuellen Elements enthält, die die als Parameter angegebene Liste von Klassen besitzen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine live aktualisierte [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen des aktuellen Elements mit einem bestimmten Tag-Namen enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine live aktualisierte [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen des aktuellen Elements mit einem bestimmten Tag-Namen und Namespace enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-Zeichenfolge zurück, optional einschließlich des Shadow-DOM.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut besitzt.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut im angegebenen Namespace besitzt.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute besitzt.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem die Methode aufgerufen wird, den durch die angegebene Pointer-ID identifizierten Zeiger erfasst hat.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt einen angegebenen Elementknoten an einer angegebenen Position relativ zu dem Element ein, auf dem die Methode aufgerufen wird.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Parst den Text als HTML oder XML und fügt die daraus entstehenden Knoten an der angegebenen Position in den Baum ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen angegebenen Textknoten an einer angegebenen Position relativ zu dem Element ein, auf dem die Methode aufgerufen wird.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element von der angegebenen Selektorzeichenfolge ausgewählt würde.
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
  - : Verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) als direktes Kind in den aufrufenden Knoten, vor einen angegebenen Referenzknoten, ohne den Knoten zu entfernen und anschließend wieder einzufügen.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Elements ein.
- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo) {{experimental_inline}}
  - : Gibt ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement)-Objekt zurück, das das dem Element zugeordnete [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) des angegebenen Typs repräsentiert.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, auf den die angegebene Selektorzeichenfolge relativ zum Element zutrifft.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) mit Knoten zurück, auf die die angegebene Selektorzeichenfolge relativ zum Element zutrifft.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Beendet die zuvor für ein bestimmtes [`PointerEvent`](/de/docs/Web/API/PointerEvent) festgelegte Zeigererfassung.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Liste der Kinder seines Elternelements.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knotendarstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) durch eine angegebene neue Gruppe von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Liste der Kinder seines Elternelements durch eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert den Browser asynchron auf, das Element im Vollbildmodus darzustellen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Ermöglicht es Ihnen, asynchron die Sperrung des Zeigers auf dem angegebenen Element anzufordern.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt innerhalb eines angegebenen Elements zu bestimmten Koordinaten.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element sichtbar ist.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich noch nicht darin befindet. **Verwenden Sie stattdessen die standardisierte Methode [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt innerhalb eines angegebenen Elements zu bestimmten Koordinaten.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Setzt den Wert eines benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knotendarstellung des benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knotendarstellung des Attributs mit dem angegebenen Namen und Namespace des aktuellen Knotens.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Setzt den Wert des Attributs mit dem angegebenen Namen und Namespace des aktuellen Knotens.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Erfassung von Mausereignissen ein, sodass alle Mausereignisse an dieses Element umgeleitet werden.
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) {{SecureContext_Inline}}
  - : Parst und [bereinigt](/de/docs/Web/API/HTML_Sanitizer_API) eine HTML-Zeichenfolge zu einem Dokumentfragment, das anschließend den ursprünglichen Teilbaum des Elements im DOM ersetzt.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst eine HTML-Zeichenfolge ohne Bereinigung zu einem Dokumentfragment, das anschließend den ursprünglichen Teilbaum des Elements im DOM ersetzt. Die HTML-Zeichenfolge kann deklarative Shadow-Roots enthalten, die beim Setzen des HTML über [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) als Template-Elemente geparst würden.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein bestimmtes Element als Erfassungsziel für zukünftige [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.startViewTransition()`](/de/docs/Web/API/Element/startViewTransition) {{experimental_inline}}
  - : Startet einen neuen, auf ein [Element beschränkten](/de/docs/Web/API/View_Transition_API/Using_element-scoped) [View-Übergang](/de/docs/Web/API/View_Transition_API) innerhalb desselben Dokuments (SPA) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das ihn repräsentiert.
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Schaltet ein boolesches Attribut des angegebenen Elements um: Ist es vorhanden, wird es entfernt; andernfalls wird es hinzugefügt.

## Ereignisse

Sie können auf diese Ereignisse mit `addEventListener()` reagieren oder indem Sie der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, nachdem ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Wird ausgelöst, bevor der Wert eines Eingabeelements geändert wird.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
  - : Wird für ein Element im Zustand [_hidden until found_](/de/docs/Web/HTML/Reference/Global_attributes/hidden) ausgelöst, wenn der Browser dessen Inhalt einblenden wird, weil der Benutzer ihn über die Funktion „Auf Seite suchen“ oder über eine Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, bevor ein Skript ausgeführt wird.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) versendet werden.
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird für jedes Element ausgelöst, für das {{cssxref("content-visibility", "content-visibility: auto")}} festgelegt ist, wenn es beginnt oder aufhört, [für den Benutzer relevant](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) zu sein und [sein Inhalt übersprungen wird](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents).
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Wird ausgelöst, wenn sich der Wert eines Elements als direkte Folge einer Benutzeraktion ändert.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Wird ausgelöst, wenn der Benutzer ein Rad an einem Zeigegerät (in der Regel einer Maus) dreht.

### Animationsereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Wird ausgelöst, wenn eine Animation unerwartet abgebrochen wird.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Wird ausgelöst, wenn eine Animation regulär abgeschlossen wurde.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Wird ausgelöst, wenn ein Durchlauf einer Animation abgeschlossen wurde.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Wird ausgelöst, wenn eine Animation beginnt.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers einen Kopiervorgang startet.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers einen Ausschneidevorgang startet.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers einen Einfügevorgang startet.

### Kompositionsereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Kompositionssitzung beginnt.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Wird ausgelöst, wenn im Rahmen einer Kompositionssitzung, die von einem Textkompositionssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuert wird, ein neues Zeichen empfangen wird.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat, nach [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat, nach [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbildereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein `Element` gesendet, wenn es in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt oder ihn verlässt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn beim Versuch, es in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu versetzen oder diesen zu verlassen, ein Fehler auftritt.

### Tastaturereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Wird ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn eine Taste gedrückt wird, die einen Zeichenwert erzeugt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Wird ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn eine nicht primäre Taste eines Zeigegeräts (beispielsweise eine andere Maustaste als die linke) auf einem Element gedrückt und losgelassen wurde.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (beispielsweise die primäre Maustaste) auf demselben Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Wird ausgelöst, wenn mit einer Taste eines Zeigegeräts (beispielsweise der primären Maustaste) zweimal auf dasselbe Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, beispielsweise durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird und der seit dem letzten Ereignis aufgelaufene Scroll-Betrag eine Zeile oder eine Seite überschreitet.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (meist eine Maus) über das Element bewegt wird, an dem der Listener registriert ist.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Wird ausgelöst, wenn der Zeiger eines Zeigegeräts (meist einer Maus) aus einem Element herausbewegt wird, an dem der Listener registriert ist.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (meist eine Maus) bewegt wird, während sich sein Zeiger über einem Element befindet.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (meist eine Maus) von dem Element, an dem der Listener registriert ist, oder von einem seiner Kinder wegbewegt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Wird ausgelöst, wenn ein Zeigegerät über das Element, an dem der Listener registriert ist, oder über eines seiner Kinder bewegt wird.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad-Touchscreen ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird nach dem mousedown-Ereignis ausgelöst, sobald genügend Druck ausgeübt wird, um als „Force Click“ zu gelten.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem Ereignis [`mousedown`](/de/docs/Web/API/Element/mousedown_event) ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird nach dem Ereignis [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) ausgelöst, sobald der Druck ausreichend nachgelassen hat, um den „Force Click“ zu beenden.

### Zeigerereignisse

- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Wird ausgelöst, wenn ein Element mit [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) einen Zeiger erfasst.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Wird ausgelöst, wenn ein [erfasster Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Wird ausgelöst, wenn ein Zeigerereignis abgebrochen wird.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Wird ausgelöst, wenn ein Zeiger aktiv wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Wird ausgelöst, wenn ein Zeiger in den Trefferbereich eines Elements oder eines seiner Nachkommen bewegt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Zeiger aus dem Trefferbereich eines Elements herausbewegt wird.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn sich die Koordinaten eines Zeigers ändern.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird unter anderem ausgelöst, wenn ein Zeiger aus dem _Trefferbereich_ eines Elements herausbewegt wird.
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Zeiger in den Trefferbereich eines Elements bewegt wird.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - : Wird ausgelöst, wenn sich Eigenschaften eines Zeigers ändern, die keine Ereignisse vom Typ [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Scroll-Ereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn das Scrollen der Dokumentansicht abgeschlossen ist.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, das heißt, dass es ausgewählt wird, sobald die aktuelle Scroll-Geste endet.

### Touch-Ereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich Finger während einer Touch-Geste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn nicht mehr mehrere Finger die Touch-Oberfläche berühren und die Geste damit endet.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn mehrere Finger die Touch-Oberfläche berühren und damit eine neue Geste beginnen.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf implementierungsspezifische Weise unterbrochen werden (beispielsweise weil zu viele Berührungspunkte entstehen).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Touch-Oberfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte über die Touch-Oberfläche bewegt werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf der Touch-Oberfläche entstehen.

### Übergangsereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) abgeschlossen wurde.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) erstellt wird (also zur Menge laufender Übergänge hinzugefügt wird), auch wenn er noch nicht begonnen hat.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) begonnen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
