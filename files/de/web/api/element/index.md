---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (d.h. Objekte, die Elemente darstellen) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie verfügt nur über Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface die Basisschnittstelle für HTML-Elemente. Ähnlich ist das [`SVGElement`](/de/docs/Web/API/SVGElement) Interface die Grundlage für alle SVG-Elemente, und das [`MathMLElement`](/de/docs/Web/API/MathMLElement) Interface ist die Basisschnittstelle für MathML-Elemente. Die meisten Funktionalitäten sind weiter in der Klassenhierarchie spezifiziert.

Sprachen außerhalb des Bereichs der Webplattform, wie XUL über das `XULElement` Interface, implementieren ebenfalls `Element`.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`Element` erbt Eigenschaften von seiner Elternschnittstelle [`Node`](/de/docs/Web/API/Node) und durch Erweiterung von der Elternschnittstelle dieser Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das das {{htmlelement("slot")}} repräsentiert, in das der Knoten eingefügt wird.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Objekt zurück, das die zugeordneten Attribute des entsprechenden HTML-Elements enthält.
- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kind-Elemente dieses Elements zurück.
- [`Element.children`](/de/docs/Web/API/Element/children) {{ReadOnlyInline}}
  - : Gibt die Kind-Elemente dieses Elements zurück.
- [`Element.classList`](/de/docs/Web/API/Element/classList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die Liste der Klassenattribute enthält.
- [`Element.className`](/de/docs/Web/API/Element/className)
  - : Ein String, der die Klasse des Elements repräsentiert.
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die innere Höhe des Elements darstellt.
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die Breite des linken Rahmens des Elements darstellt.
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die Breite des oberen Rahmens des Elements darstellt.
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die innere Breite des Elements darstellt.
- [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) {{ReadOnlyInline}}
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt oder 1.0, wenn das Element nicht gerendert wird.
- [`Element.customElementRegistry`](/de/docs/Web/API/Element/customElementRegistry) {{ReadOnlyInline}}
  - : Das [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry) Objekt, das mit diesem Element verbunden ist, oder `null`, wenn keines gesetzt wurde.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Ein String, der das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut widerspiegelt, das ein Element für die Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API markiert.
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kind-Element dieses Elements zurück.
- [`Element.id`](/de/docs/Web/API/Element/id)
  - : Ein String, der die ID des Elements repräsentiert.
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
  - : Ein String, der das Markup des Inhalts des Elements repräsentiert.
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kind-Element dieses Elements zurück.
- [`Element.localName`](/de/docs/Web/API/Element/localName) {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Elements repräsentiert.
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) {{ReadOnlyInline}}
  - : Der Namensraum-URI des Elements oder `null`, wenn es keinen Namensraum gibt.
- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar dem gegebenen in der Struktur folgt, oder `null`, wenn es keinen Geschwisterknoten gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Ein String, der das Markup des Elements einschließlich seines Inhalts repräsentiert. Wird es als Setter verwendet, ersetzt es das Element mit Knoten, die aus dem gegebenen String geparst werden.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert die Teil-Identifikatoren des Elements (d.h. gesetzt mit dem `part` Attribut), zurückgegeben als eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namensraumprefix des Elements repräsentiert, oder `null`, wenn kein Prefix spezifiziert ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar vor dem gegebenen in der Struktur kommt, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die Scrollansicht-Höhe eines Elements darstellt.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Nummer, die den linken Scrollversatz des Elements darstellt.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die den maximal möglichen linken Scrollversatz für das Element darstellt.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Nummer, die die Anzahl der Pixel darstellt, um die der obere Rand des Elements vertikal gescrollt ist.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die den maximal möglichen oberen Scrollversatz für das Element darstellt.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Nummer zurück, die die Scrollansicht-Breite des Elements darstellt.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt die offene Shadow-Root zurück, die durch das Element gehostet wird, oder null, wenn keine offene Shadow-Root vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingefügt ist.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Tags für das gegebene Element zurück.

### Instanzeigenschaften, die von ARIA enthalten sind

_Das `Element` Interface enthält auch die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Attribut widerspiegelt, das angibt, ob unterstützende Technologien alle oder nur Teile der geänderten Region präsentieren werden, basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut definiert werden.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut widerspiegelt, das angibt, ob das Eingeben von Text die Anzeige von einer oder mehreren Vorhersagen des vom Benutzer beabsichtigten Werts für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte und wie Vorhersagen präsentiert würden, wenn sie getroffen würden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) Attribut widerspiegelt, das das Braille-Label des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) Attribut widerspiegelt, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) Attribut widerspiegelt, das angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten wollen, bis die Modifikationen abgeschlossen sind, bevor sie dem Benutzer exponiert werden.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut widerspiegelt, das den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut widerspiegelt, das den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) Attribut widerspiegelt, das eine menschengerechte Textalternative des aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) Attribut widerspiegelt, das die Anzahl der durch eine Zelle oder ein Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Spalten definiert.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) Attribut widerspiegelt, das das Element angibt, das das aktuelle Element innerhalb eines Containers oder Satzes verwandter Elemente repräsentiert.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) Attribut widerspiegelt, das einen String-Wert definiert, der das aktuelle Element beschreibt oder kommentiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Attribut widerspiegelt, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, so dass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut widerspiegelt, das angibt, ob ein durch dieses Element besessener oder gesteuerter Gruppierungselement erweitert oder zusammengeklappt ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut widerspiegelt, das die Verfügbarkeit und den Typ von interaktiven Popup-Elementen angibt, wie zum Beispiel Menü oder Dialog, die durch ein Element ausgelöst werden können.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut widerspiegelt, das angibt, ob das Element für eine Zugänglichkeits-API exponiert ist.
- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Ein String, der das [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) Attribut widerspiegelt, das angibt, dass der eingegebene Wert nicht dem vom Anwendungsprogramm erwarteten Format entspricht.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) Attribut widerspiegelt, das Tastaturkürzel angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu legen.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut widerspiegelt, das einen String-Wert definiert, der das aktuelle Element bezeichnet.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribut widerspiegelt, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribut widerspiegelt, das angibt, dass ein Element aktualisiert wird, und die Art der Updates beschreibt, die die Benutzeragenten, unterstützende Technologien und der Benutzer vom Live-Bereich erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) Attribut widerspiegelt, das angibt, ob ein Element im angezeigten Zustand modal ist.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut widerspiegelt, das angibt, ob ein Textfeld mehrere Zeilen der Eingabe akzeptiert oder nur eine einzelne Zeile.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) Attribut widerspiegelt, das angibt, dass der Benutzer mehr als ein Element aus den aktuellen wählbaren Nachkommen auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Attribut widerspiegelt, das angibt, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut widerspiegelt, das einen kurzen Hinweis definiert, um dem Benutzer bei der Dateneingabe zu helfen, wenn das Steuerelement keinen Wert hat.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) Attribut widerspiegelt, das die Nummer oder Position eines Elements im aktuellen Satz von Listenelementen oder Baumsten definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut widerspiegelt, das den aktuellen "gedrückten" Zustand von Umschaltknöpfen angibt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut widerspiegelt, das angibt, dass das Element nicht bearbeitbar, aber dennoch bedienbar ist.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut widerspiegelt, das angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugänglichkeitsbaum innerhalb eines Live-Bereichs geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einem `aria-live` Bereich relevant sind und angekündigt werden sollten.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut widerspiegelt, das angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular übermittelt werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) Attribut widerspiegelt, das eine menschenlesbare, vom Autor lokalisierte Beschreibung der Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) Attribut widerspiegelt, das die Gesamtzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut widerspiegelt, das den Zeilenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) Attribut widerspiegelt, das eine menschlich lesbare Textalternative des aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) Attribut widerspiegelt, das die Anzahl der durch eine Zelle oder ein Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Zeilen definiert.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut widerspiegelt, das den aktuellen "ausgewählten" Zustand von Elementen, die einen ausgewählten Zustand haben, angibt.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) Attribut widerspiegelt, das die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumsteindefiniert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Attribut widerspiegelt, das angibt, ob Elemente in einer Tabelle oder in einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Ein String, der das [`aria-valuemax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Attribut widerspiegelt, das den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Ein String, der das [`aria-valuemin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) Attribut widerspiegelt, das den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Ein String, der das [`aria-valuenow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) Attribut widerspiegelt, das den aktuellen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) Attribut widerspiegelt, das die menschenlesbare Textalternative der `aria-valuenow` für ein Bereichs-Widget definiert.
- [`Element.role`](/de/docs/Web/API/Element/role)
  - : Ein String, der das explizit gesetzte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribut widerspiegelt, das die semantische Rolle des Elements angibt.

#### Instanzeigenschaften, die von ARIA-Elementreferenzen reflektiert werden

Die Eigenschaften spiegeln die durch `id`-Referenz in den entsprechenden Attributen angegebenen Elemente wider, allerdings mit einigen Vorbehalten. Siehe [Reflektierte Elementreferenzen](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_ Leitfaden für weitere Informationen.

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Ein Element, das das aktuell aktive Element darstellt, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Spiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut wider.
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalt oder Vorhandensein von dem Element gesteuert wird, auf das es angewendet wird.
    Spiegelt das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut wider.
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Ein Array von Elementen, das die zugängliche Beschreibung für das Element enthält, auf das es angewendet wird.
    Spiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut wider.
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Ein Array von Elementen, das zugängliche Details für das Element bereitstellt, auf das es angewendet wird.
    Spiegelt das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) Attribut wider.
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Ein Array von Elementen, das eine Fehlermeldung für das Element bereitstellt, auf das es angewendet wird.
    Spiegelt das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) Attribut wider.
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Ein Array von Elementen, das das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge des Inhalts identifiziert und damit die allgemeine Standardlesereihenfolge nach Ermessen des Benutzers außer Kraft setzt.
    Spiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) Attribut wider.
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Ein Array von Elementen, das den zugänglichen Namen für das Element bereitstellt, auf das es angewendet wird.
    Spiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut wider.
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Ein Array von Elementen, die von dem Element, auf das dies angewendet wird, besitzt werden.
    Dies wird verwendet, um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem Eltern- und seinen Kind-Elementen zu definieren, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
    Spiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut wider.

## Instanzmethoden

_`Element` erbt Methoden von seinen Eltern [`Node`](/de/docs/Web/API/Node) und seinem eigenen Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, knapp nach dem `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Schnellmethode, um eine Animation auf einem Element zu erstellen und auszuführen. Gibt die erstellte Instanz des Animation-Objekts zurück.
- [`Element.ariaNotify()`](/de/docs/Web/API/Element/ariaNotify)
  - : Gibt an, dass ein bestimmter Text von einem Bildschirmlesegerät angekündigt werden soll.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Hängt einen Shadow-DOM-Baum an das spezifizierte Element an und gibt eine Referenz auf seine [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, knapp vor dem `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt zurück, ob ein Element voraussichtlich sichtbar ist oder nicht, basierend auf konfigurierbaren Überprüfungen.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, das der nächstgelegene Vorfahre des aktuellen Elements (oder das aktuelle Element selbst) ist, das die im Parameter angegebenen Selektoren erfüllt.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, was eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) ist.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von derzeit auf dem Element aktiven Animation-Objekten zurück.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen des aktuellen Elements zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten ab und gibt sie als ein [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knotenrepräsentation des Attributs mit dem spezifizierten Namen und Namensraum vom aktuellen Knoten ab und gibt sie als ein [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem spezifizierten Namensraum und Namen vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Ansichtsfenster zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad) Objekten zurück, die die CSS-Fragmenten des Knotens repräsentieren.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client angeben.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)` zurück, die alle Nachfahren des aktuellen Elements enthält, die die im Parameter angegebene Klassenliste besitzen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)` zurück, die alle Nachfahr-Elemente eines bestimmten Tag-Namens vom aktuellen Element enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)` zurück, die alle Nachfahr-Elemente eines bestimmten Tag-Namens und Namensraums vom aktuellen Element enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als einen HTML-String zurück, optional einschließlich eines Shadow-DOMs.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das spezifizierte Attribut hat oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das spezifizierte Attribut im angegebenen Namensraum hat oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element eines oder mehrere HTML-Attribute vorliegen hat.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, die Zeigererfassung für den durch die gegebene Zeiger-ID identifizierten Zeiger besitzt.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt einen gegebenen Elementknoten an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Parst den Text als HTML oder XML und fügt die resultierenden Knoten in die Struktur an der angegebenen Position ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen gegebenen Textknoten an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element durch den angegebenen Selektor-String ausgewählt werden würde oder nicht.
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore)
  - : Verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kind vor einen gegebenen Referenzknoten, ohne den Knoten zu entfernen und dann wieder einzufügen.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings vor dem ersten Kind des Elements ein.
- [`Element.pseudo()`](/de/docs/Web/API/Element/pseudo) {{experimental_inline}}
  - : Gibt ein [`CSSPseudoElement`](/de/docs/Web/API/CSSPseudoElement) Objekt zurück, das das [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) des spezifizierten Typs, das dem Element zugeordnet ist, darstellt.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, der dem angegebenen Selektor-String relativ zum Element entspricht.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die dem angegebenen Selektor-String relativ zum Element entsprechen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Befreit (stoppt) die Zeigererfassung, die zuvor für ein spezifisches [`PointerEvent`](/de/docs/Web/API/PointerEvent) festgelegt wurde.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem spezifizierten Namen und Namensraum vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) durch einen angegebenen neuen Satz von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kinderliste seines Elternteils durch einen Satz von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fragt den Browser asynchron, ob das Element im Vollbildmodus angezeigt werden kann.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Ermöglicht es, asynchron zu fragen, dass der Zeiger auf das gegebene Element gesperrt wird.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in die Ansicht gelangt.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich nicht bereits im sichtbaren Bereich des Browserfensters befindet. **Verwenden Sie stattdessen den Standard [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Setzt den Wert eines benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knotenrepräsentation des Attributs mit dem spezifizierten Namen und Namensraum vom aktuellen Knoten.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Setzt den Wert des Attributs mit dem spezifizierten Namen und Namensraum vom aktuellen Knoten.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Mauserfassung ein, indem alle Mausereignisse auf dieses Element umgeleitet werden.
- [`Element.setHTML()`](/de/docs/Web/API/Element/setHTML) {{SecureContext_Inline}}
  - : Parst und [saniert](/de/docs/Web/API/HTML_Sanitizer_API) einen HTML-String in ein Dokumentfragment, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen HTML-String in ein Dokumentfragment, ohne Sanitization, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt. Der HTML-String kann deklarative Shadow-Roots enthalten, die als Template-Elemente geparst würden, falls das HTML mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) gesetzt würde.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bezeichnet ein spezifisches Element als das Erfassungsziel zukünftiger [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Schaltet ein boolesches Attribut um, entfernt es, wenn es vorhanden ist, und fügt es hinzu, wenn es nicht vorhanden ist, auf dem angegebenen Element.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Gefeuert, wenn ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Gefeuert, wenn der Wert eines Eingabeelements verändert werden soll.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
  - : Wird auf einem Element ausgelöst, das sich im [„hidden until found“](/de/docs/Web/HTML/Reference/Global_attributes/hidden) Zustand befindet, wenn der Browser kurz davor ist, seinen Inhalt zu enthüllen, weil der Benutzer den Inhalt durch die Funktion „Auf Seite suchen“ oder durch Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Gefeuert, wenn ein Skript kurz vor der Ausführung steht.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) verteilt werden.
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird auf jedem Element ausgelöst, das {{cssxref("content-visibility", "content-visibility: auto")}} gesetzt hat, wenn es anfängt oder aufhört [für den Benutzer relevant](/de/docs/Web/CSS/Guides/Containment/Using#relevant_to_the_user) zu sein und [seine Inhalte überspringt](/de/docs/Web/CSS/Guides/Containment/Using#skips_its_contents).
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Wird ausgelöst, wenn der Wert eines Elements als direktes Ergebnis einer Benutzeraktion geändert wird.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn gegen eine [Content-Security-Policy](/de/docs/Web/HTTP/Guides/CSP) verstoßen wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Wird ausgelöst, wenn der Benutzer ein Radtaste auf einem Zeigegerät (typischerweise eine Maus) dreht.

### Animationsereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Wird ausgelöst, wenn eine Animation unerwartet abbricht.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Wird ausgelöst, wenn eine Animation normal abgeschlossen wurde.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Wird ausgelöst, wenn eine Animationsiteration abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Wird ausgelöst, wenn eine Animation beginnt.

### Zwischenablagenereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Kompositionsereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Wird ausgelöst, wenn ein Textzusammensetzungssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Wird ausgelöst, wenn ein Textzusammensetzungssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Kompositionssitzung startet.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Wird ausgelöst, wenn ein neues Zeichen im Kontext einer von einem Textzusammensetzungssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuerten Textkompositionssitzung empfangen wird.

### Fokuseereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhalten hat, nach [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verliert, nach [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbildereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein `Element` gesendet, wenn es in den Vollbildmodus [Fullscreen](/de/docs/Web/API/Fullscreen_API/Guide) wechselt oder diesen verlässt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu schalten.

### Tastatureignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Wird ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn eine Taste, die einen Zeichenwert erzeugt, heruntergedrückt wird.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Wird ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn eine nicht primäre Taste eines Zeigegeräts (z.B. jede Maustaste außer der linken Taste) auf einem Element gedrückt und losgelassen wird.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z.B. die primäre Taste einer Maus) auf einem einzelnen Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z.B. die primäre Taste einer Maus) zweimal auf einem einzelnen Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, zum Beispiel durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn ein Mausrad oder ein ähnliches Gerät bedient wird und der angesammelte Bildlaufwert seit dem letzten Ereignis über 1 Zeile oder 1 Seite liegt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über das Element bewegt wird, an das der Listener angehängt ist.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Wird ausgelöst, wenn der Zeiger eines Zeigegeräts (normalerweise einer Maus) aus einem Element herausbewegt wird, an das der Listener angehängt ist.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) bewegt wird, während es über einem Element ist.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) von dem Element, an das der Listener angehängt ist, oder von einem seiner Kinder herausbewegt wird.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Wird ausgelöst, wenn ein Zeigegerät in das Element bewegt wird, an das der Listener angehängt ist, oder in eines seiner Kinder.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät bedient wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät bedient wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf der Trackpad-Touch-Oberfläche ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird nach dem `mousedown`-Ereignis ausgelöst, sobald ausreichend Druck ausgeübt wird, um als "Force Click" zu qualifizieren.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird nach dem [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event)-Ereignis ausgelöst, sobald der Druck ausreichend verringert wurde, um den "Force Click" zu beenden.

### Zeigerereignisse

- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Wird ausgelöst, wenn ein Element einen Zeiger mit [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) erfasst.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Wird ausgelöst, wenn ein [erfasster Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Wird ausgelöst, wenn ein Zeigerereignis abgebrochen wird.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Wird ausgelöst, wenn ein Zeiger aktiv wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Wird ausgelöst, wenn ein Zeiger in die Hittest-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Zeiger aus den Hittest-Grenzen eines Elements heraus bewegt wird.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn sich die Koordinaten eines Zeigers ändern.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird ausgelöst, wenn ein Zeiger aus den _Hittest_ Grenzen eines Elements (unter anderem aus Gründen) heraus bewegt wird.
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Zeiger in die Hittest-Grenzen eines Elements hinein bewegt wird.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - : Wird ausgelöst, wenn ein Zeiger eine der Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Scroll-Ereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn die Dokumentansicht das Scrollen abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Snap-Ziel aussteht, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Berührungsereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich die Finger während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn keine Finger mehr die Touch-Oberfläche berühren, wodurch die Geste endet.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn mehrere Finger die Touch-Oberfläche berühren und damit eine neue Geste beginnt.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementationsspezifische Weise gestört wurden (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Touch-Oberfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte entlang der Touch-Oberfläche bewegt werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf die Touch-Oberfläche gesetzt werden.

### Übergangsereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) abgelaufen ist.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) erstellt wird (d.h. wenn er in einen Satz laufender Übergänge hinzugefügt wird), obwohl er nicht notwendigerweise gestartet ist.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/Guides/Transitions) begonnen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
