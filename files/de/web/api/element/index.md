---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (z. B. Objekte, die Elemente repräsentieren) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie hat nur Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface das Basisinterface für HTML-Elemente. In ähnlicher Weise ist das [`SVGElement`](/de/docs/Web/API/SVGElement) Interface die Grundlage für alle SVG-Elemente, und das [`MathMLElement`](/de/docs/Web/API/MathMLElement) Interface das Basisinterface für MathML-Elemente. Die meiste Funktionalität wird weiter unten in der Klassenhierarchie spezifiziert.

Sprachen außerhalb der Webplattform, wie XUL über das `XULElement` Interface, implementieren ebenfalls `Element`.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`Element` erbt Eigenschaften von seinem übergeordneten Interface, [`Node`](/de/docs/Web/API/Node), und damit von dessen übergeordnetem Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das das {{htmlelement("slot")}} repräsentiert, in das der Knoten eingefügt ist.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente dieses Elements zurück.
- [`Element.children`](/de/docs/Web/API/Element/children) {{ReadOnlyInline}}
  - : Gibt die Kindelemente dieses Elements zurück.
- [`Element.classList`](/de/docs/Web/API/Element/classList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die Liste der Klassenattribute enthält.
- [`Element.className`](/de/docs/Web/API/Element/className)
  - : Ein String, der die Klasse des Elements darstellt.
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Höhe des Elements darstellt.
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des linken Rahmens des Elements darstellt.
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des oberen Rahmens des Elements darstellt.
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Breite des Elements darstellt.
- [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) {{ReadOnlyInline}}
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1.0, wenn das Element nicht gerendert wird.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Ein String, der das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut widerspiegelt, das ein Element zur Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API markiert.
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kindelement dieses Elements zurück.
- [`Element.id`](/de/docs/Web/API/Element/id)
  - : Ein String, der die ID des Elements darstellt.
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
  - : Ein String, der das Markup des Inhalts des Elements darstellt.
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement dieses Elements zurück.
- [`Element.localName`](/de/docs/Web/API/Element/localName) {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Elements darstellt.
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) {{ReadOnlyInline}}
  - : Der Namespace-URI des Elements, oder `null`, wenn kein Namespace vorhanden ist.
- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar dem gegebenen in der Baumstruktur folgt, oder `null`, wenn es kein Geschwisterknoten gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Ein String, der das Markup des Elements einschließlich dessen Inhalt darstellt. Wenn er als Setter verwendet wird, ersetzt er das Element durch Knoten, die aus dem angegebenen String geparst werden.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert die Teil-Kennungen des Elements (d.h. gesetzt durch das `part` Attribut), zurückgegeben als [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Elements darstellt, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das unmittelbar vorangehende Element des gegebenen in der Baumstruktur, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansicht-Höhe eines Elements darstellt.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den linken Bildlauf-Versatz des Elements darstellt.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen linken Bildlauf-Versatz für das Element darstellt.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die die Anzahl der Pixel darstellt, um die das obere Ende des Elements vertikal gescrollt ist.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen oberen Bildlauf-Versatz für das Element darstellt.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansicht-Breite des Elements darstellt.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt den offenen Shadow Root zurück, der durch das Element gehostet wird, oder null, wenn kein offener Shadow Root vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingesetzt wird.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Tags für das gegebene Element zurück.

### Instanzeigenschaften aus ARIA

_Die `Element` Schnittstelle umfasst auch die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Attribut widerspiegelt, das angibt, ob unterstützende Technologien alle oder nur Teile des geänderten Bereichs basierend auf den durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut definierten Änderungsbenachrichtigungen präsentieren.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut widerspiegelt, das angibt, ob die Eingabe von Text eine oder mehrere Vorhersagen des vom Benutzer beabsichtigten Wertes für eine Combobox, Suchbox oder Textbox auslösen könnte und wie diese Vorhersagen präsentiert würden, falls sie gemacht werden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) Attribut widerspiegelt, das das Braille-Label des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) Attribut widerspiegelt, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) Attribut widerspiegelt, das angibt, ob ein Element geändert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut widerspiegelt, das den aktuellen "gecheckten" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets mit einem überprüften Zustand anzeigt.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut widerspiegelt, das den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) Attribut widerspiegelt, das einen menschenlesbaren textuellen Ersatz für aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) Attribut widerspiegelt, das die Anzahl der durch eine Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannten Spalten definiert.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) Attribut widerspiegelt, das das Element anzeigt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente darstellt.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) Attribut widerspiegelt, das einen Zeichenfolgenwert definiert, der das aktuelle Element beschreibt oder kommentiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Attribut widerspiegelt, das anzeigt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut widerspiegelt, das angibt, ob ein von diesem Element besessener oder kontrollierter Gruppierungselement erweitert oder zusammengeklappt ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut widerspiegelt, das die Verfügbarkeit und den Typ eines interaktiven Popupelements anzeigt, wie z. B. Menü oder Dialog, das durch ein Element ausgelöst werden kann.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut widerspiegelt, das angibt, ob das Element einer Barrierefreiheits-API ausgesetzt ist.
- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Ein String, der das [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) Attribut widerspiegelt, das anzeigt, dass der eingegebene Wert nicht dem vom Programm erwarteten Format entspricht.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) Attribut widerspiegelt, das Tastenkombinationen angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut widerspiegelt, das einen Zeichenfolgenwert definiert, der das aktuelle Element bezeichnet.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribut widerspiegelt, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribut widerspiegelt, das anzeigt, dass ein Element aktualisiert wird und die Arten von Aktualisierungen beschreibt, die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) Attribut widerspiegelt, das angibt, ob ein Element bei Anzeige modal ist.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut widerspiegelt, das angibt, ob ein Textfeld mehrere Zeilen Eingaben oder nur eine einzelne Zeile akzeptiert.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) Attribut widerspiegelt, das angibt, dass der Benutzer mehr als ein Element von den aktuell auswählbaren Nachfahren auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Attribut widerspiegelt, das angibt, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut widerspiegelt, das einen kurzen Hinweis definiert, um dem Benutzer bei der Dateneingabe zu helfen, wenn das Steuerelement keinen Wert enthält.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) Attribut widerspiegelt, das die Nummer oder Position eines Elements im aktuellen Satz von Listitems oder Treeitems definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut widerspiegelt, das den aktuellen "gedrückten" Zustand von Umschaltknöpfen anzeigt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut widerspiegelt, das angibt, dass das Element nicht bearbeitbar ist, aber dennoch bedienbar ist.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut widerspiegelt, das angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Barrierefreiheitsbaum innerhalb einer Live-Region geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live` Region relevant sind und angekündigt werden sollten.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut widerspiegelt, das angibt, dass Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular eingereicht werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) Attribut widerspiegelt, das eine menschenlesbare, vom Autor lokalisierte Beschreibung der Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) Attribut widerspiegelt, das die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut widerspiegelt, das den Zeilenindex oder die Position eines Elements im Verhältnis zur Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) Attribut widerspiegelt, das einen menschenlesbaren textuellen Ersatz für aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) Attribut widerspiegelt, das die Anzahl der durch eine Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannten Zeilen definiert.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut widerspiegelt, das den aktuellen "ausgewählten" Zustand von Elementen anzeigt, die einen ausgewählten Zustand haben.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) Attribut widerspiegelt, das die Anzahl der Elemente im aktuellen Satz von Listitems oder Treeitems definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Attribut widerspiegelt, das angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Attribut widerspiegelt, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) Attribut widerspiegelt, das den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) Attribut widerspiegelt, das den aktuellen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) Attribut widerspiegelt, das den menschenlesbaren textuellen Ersatz von `aria-valuenow` für ein Bereichs-Widget definiert.
- [`Element.role`](/de/docs/Web/API/Element/role)
  - : Ein String, der das explizit festgelegte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribut widerspiegelt, das die semantische Rolle des Elements bereitstellt.

#### Instanzeigenschaften, die von ARIA-Elementreferenzen widergespiegelt werden

Die Eigenschaften spiegeln die Elemente wider, die durch `id` Referenz in den entsprechenden Attributen angegeben sind, jedoch mit einigen Ausnahmen. Siehe [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflektierte Attribute_ Leitfaden für weitere Informationen.

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Ein Element, das das derzeit aktive Element repräsentiert, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, einer [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), einer [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), einer [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Widerspiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut.
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalte oder Anwesenheit durch das Element, auf das es angewendet wird, kontrolliert werden.
    Widerspiegelt das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut.
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Ein Array von Elementen, die die barrierefreie Beschreibung für das Element bereitstellen, auf das es angewendet wird.
    Widerspiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut.
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Ein Array von Elementen, die barrierefreie Details für das Element bereitstellen, auf das es angewendet wird.
    Widerspiegelt das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) Attribut.
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das Element bereitstellen, auf das es angewendet wird.
    Widerspiegelt das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) Attribut.
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Ein Array von Elementen, das das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts identifiziert und die allgemeine Standardlesereihenfolge nach Ermessen des Benutzers außer Kraft setzt.
    Widerspiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) Attribut.
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Ein Array von Elementen, die den barrierefreien Namen für das Element bereitstellen, auf das es angewendet wird.
    Widerspiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut.
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Ein Array von Elementen, das von dem Element, auf das dies angewendet wird, besessen wird.
    Dies wird verwendet, um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten und seinen Kindelementen zu definieren, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
    Widerspiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut.

## Instanzmethoden

_`Element` erbt Methoden von seinen übergeordneten [`Node`](/de/docs/Web/API/Node) und seinem eigenen übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt nach dem `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode, um eine Animation auf einem Element zu erstellen und auszuführen. Gibt das erstellte Animation Objekt zurück.
- [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt an, dass ein gegebener Text von einem Bildschirmlesegerät angekündigt werden sollte.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Bindet einen Shadow-DOM-Baum an das spezifizierte Element und gibt eine Referenz zu dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt vor dem `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt zurück, ob ein Element voraussichtlich sichtbar ist oder nicht, basierend auf konfigurierbaren Überprüfungen.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, das der nächste Vorgänger des aktuellen Elements ist (oder das aktuelle Element selbst), welches die gegebenen Selektoren im Parameter erfüllt.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, welcher eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von Animation Objekten zurück, die derzeit auf dem Element aktiv sind.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen vom aktuellen Element zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knotenrepräsentation des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Namen vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Ansichtsfenster zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad) Objekten zurück, die die CSS-Fragmentierungen des Knotens repräsentieren.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client anzeigt.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine Echtzeit-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen des aktuellen Elements enthält, die die im Parameter angegebene Liste von Klassen besitzen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine Echtzeit-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen eines bestimmten Tag-Namens des aktuellen Elements umfasst.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine Echtzeit-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen eines bestimmten Tag-Namens und Namespace des aktuellen Elements umfasst.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-String zurück, optional einschließlich eines Shadow-DOM.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das spezifizierte Attribut hat oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das spezifizierte Attribut im angegebenen Namespace hat oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute hat.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wurde, Zeigererfassung für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt ein gegebenes Elementknot an einer angegebenen Position relativ zu dem Element ein, auf das es aufgerufen wurde.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Parst den Text als HTML oder XML und fügt die resultierenden Knoten in der angegebenen Position in den Baum ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen gegebenen Textknoten an einer angegebenen Position relativ zu dem Element ein, auf das es aufgerufen wurde.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element durch den angegebenen Selektorstring ausgewählt werden würde oder nicht.
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
  - : Verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kind vor einen gegebenen Referenzknoten, ohne den Knoten zu entfernen und dann wieder einzufügen.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings vor dem ersten Kind des Elements ein.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, der dem spezifizierten Selektorstring relativ zu dem Element entspricht.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die dem spezifizierten Selektorstring relativ zu dem Element entsprechen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Hebt die Zeigererfassung auf (hört auf), die zuvor für ein spezifisches [`PointerEvent`](/de/docs/Web/API/PointerEvent) gesetzt wurde.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die bestehenden Kinder eines [`Node`](/de/docs/Web/API/Node) durch eine spezifizierte neue Menge von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kinderliste seines Elternteils mit einer Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fragt den Browser asynchron an, das Element im Vollbildmodus anzuzeigen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Ermöglicht es, asynchron die Zeigererfassung für das gegebene Element anzufordern.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Koordinatensatz innerhalb eines gegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in den Blick gerät.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, falls es sich nicht bereits dort befindet. **Verwenden Sie stattdessen die Standardmethode [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt zu einem bestimmten Koordinatensatz innerhalb eines gegebenen Elements.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Setzt den Wert eines benannten Attributes des aktuellen Knotens.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knotenrepräsentation des Attributs mit dem spezifizierten Namen und Namespace vom aktuellen Knoten.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Setzt den Wert des Attributs mit dem spezifizierten Namen und Namespace vom aktuellen Knoten.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Mausereigniserfassung ein, um alle Mausereignisse an dieses Element umzuleiten.
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) {{SecureContext_Inline}} {{experimental_inline}}
  - : Parst und [desinfiziert](/de/docs/Web/API/HTML_Sanitizer_API) einen HTML-String in ein Dokumentfragment, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen HTML-String in ein Dokumentfragment, ohne Desinfizierung, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt. Der HTML-String kann deklarative Shadow-Roots enthalten, die als Vorlagenelemente geparst würden, wenn das HTML mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) gesetzt würde.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein spezifisches Element als das Ziel für die zukünftige Erfassung von [Zeigerereignissen](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Wechselt ein boolesches Attribut, indem es entfernt wird, falls es vorhanden ist, und hinzugefügt wird, falls es nicht vorhanden ist, auf dem spezifizierten Element.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder indem Sie einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Wird ausgelöst, wenn der Wert eines Eingabeelements kurz davor ist, geändert zu werden.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
  - : Wird auf einem Element ausgelöst, das sich im Zustand [_versteckt, bis gefunden_](/de/docs/Web/HTML/Reference/Global_attributes/hidden) befindet, wenn der Browser dabei ist, seinen Inhalt anzuzeigen, weil der Benutzer den Inhalt über die "Seite durchsuchen"-Funktion oder durch Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Skript kurz vor der Ausführung steht.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Wird vor den WebXR-Auswahlevents ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) ausgelöst.
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird auf jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}} gesetzt, wenn es anfängt oder aufhört, [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) zu sein, und [seinen Inhalt zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Wird ausgelöst, wenn sich der Wert eines Elements als direktes Ergebnis einer Benutzeraktion ändert.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Wird ausgelöst, wenn der Benutzer ein Rad an einem Zeigegerät (typischerweise einer Maus) dreht.

### Animation Ereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Wird ausgelöst, wenn eine Animation unerwartet abbricht.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Wird ausgelöst, wenn eine Animation normal abgeschlossen ist.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Wird ausgelöst, wenn eine Wiederholung einer Animation abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Wird ausgelöst, wenn eine Animation startet.

### Zwischenablage Ereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Kompositionsereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Wird ausgelöst, wenn ein Textzusammensetzungssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} die aktuelle Zusammensetzungs-Session abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Wird ausgelöst, wenn ein Textzusammensetzungssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Zusammensetzungs-Session startet.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Wird ausgelöst, wenn im Kontext einer Textzusammensetzungs-Session, die durch ein Textzusammensetzungssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuert wird, ein neues Zeichen empfangen wird.

### Fokus Ereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erlangt hat.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erlangt hat, nach [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat, nach [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbild Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein `Element` gesendet, wenn es in oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln.

### Tastaturereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Wird ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn eine Taste gedrückt wird, die einen Zeichenwert erzeugt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Wird ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (z. B. eine andere Maustaste als die linke Taste) auf einem Element gedrückt und losgelassen wird.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z. B. die Haupttaste einer Maus) auf einem einzelnen Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z. B. die Haupttaste einer Maus) zweimal auf einem einzelnen Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, z. B. durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn das Mausrad oder ein ähnliches Gerät betätigt wird und die akkumulierte Scrollmenge seit dem letzten Ereignis über 1 Linie oder 1 Seite beträgt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über das Element bewegt wird, an das der Listener angehängt ist.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Wird ausgelöst, wenn der Zeiger eines Zeigegeräts (normalerweise einer Maus) aus einem Element bewegt wird, an das der Listener angehängt ist.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über ein Element bewegt wird.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) aus dem Element, an das der Listener angehängt ist, oder aus einem seiner Kinder bewegt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Wird ausgelöst, wenn ein Zeigegerät über das Element, an das der Listener angehängt ist, oder eines seiner Kinder bewegt wird.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad-Display ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird nach dem `mousedown` Ereignis ausgelöst, sobald ausreichend Druck angewendet wurde, um als "druckklick" zu qualifizieren.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Ereignis ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird nach dem [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) Ereignis ausgelöst, sobald der Druck ausreichend reduziert wurde, um den "kraftklick" zu beenden.

### Zeigerereignisse

- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Wird ausgelöst, wenn ein Element einen Zeiger mithilfe von [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) erfasst.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Wird ausgelöst, wenn ein erfasster [Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Wird ausgelöst, wenn ein Zeigereignis abgebrochen wird.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Wird ausgelöst, wenn ein Zeiger aktiv wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Wird ausgelöst, wenn ein Zeiger in die Treffergrenzen eines Elements oder eines seiner Nachkommen bewegt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Zeiger die Treffergrenzen eines Elements verlässt.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn ein Zeiger seine Koordinaten ändert.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird ausgelöst, wenn ein Zeiger aus den _Treffer-Test_ Grenzen eines Elements bewegt wird (unter anderem aus Gründen).
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Zeiger in die Treffer-Test Grenzen eines Elements bewegt wird.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - : Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Scrollereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Wird ausgelöst, wenn das Dokumentfenster oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn das Dokumentfenster den Scrollvorgang abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel aussteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Berührungsereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich die Finger während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn nicht mehr mehrere Finger die Berührungsfläche berühren und die Geste somit beendet wird.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn mehrere Finger die Berührungsfläche berühren und somit eine neue Geste gestartet wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf spezifische Weise unterbrochen wurden (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte entlang der Berührungsoberfläche bewegt werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf die Berührungsoberfläche gesetzt werden.

### Übergangsereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wird.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgeschlossen ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h. wenn er zu einer Menge laufender Übergänge hinzugefügt wird), obwohl er möglicherweise noch nicht gestartet ist.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) zu Übergangsveränderungen startet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
