---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: 85d5b8d224843c37974318ff04fbcc1ab69ef95d
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeine Basisklasse, von der alle Element-Objekte (d.h. Objekte, die Elemente repräsentieren) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie verfügt nur über Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface das Basis-Interface für HTML-Elemente. Ebenso ist das [`SVGElement`](/de/docs/Web/API/SVGElement) Interface die Grundlage für alle SVG-Elemente, und das [`MathMLElement`](/de/docs/Web/API/MathMLElement) Interface ist das Basis-Interface für MathML-Elemente. Die meisten Funktionen sind weiter unten in der Klassenehierarchie spezifiziert.

Sprachen außerhalb der Webplattform wie XUL über das `XULElement` Interface implementieren ebenfalls `Element`.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`Element` erbt Eigenschaften von seinem übergeordneten Interface [`Node`](/de/docs/Web/API/Node) und in der Erweiterung dieses übergeordneten Interfaces [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das das {{htmlelement("slot")}} darstellt, in das der Knoten eingefügt ist.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
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
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1,0, wenn das Element nicht gerendert wird.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Ein String, der das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming) Attribut widerspiegelt, das ein Element zur Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API markiert.
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
  - : Der Namespace URI des Elements, oder `null`, wenn es keinen Namespace gibt.
- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar auf das gegebene im Baum folgt, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Ein String, der das Markup des Elements einschließlich seines Inhalts repräsentiert. Wenn es als Setter verwendet wird, ersetzt es das Element mit Knoten, die aus dem angegebenen String analysiert wurden.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert die Teil-Identifikatoren des Elements (d.h. festgelegt mit dem `part` Attribut), zurückgegeben als [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Elements repräsentiert, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar vor dem gegebenen im Baum steht, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scroll-Ansichtshöhe eines Elements darstellt.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den linken Scroll-Versatz des Elements repräsentiert.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen linken Scroll-Versatz repräsentiert, der für das Element möglich ist.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die die Anzahl der Pixel repräsentiert, die die Oberseite des Elements vertikal gescrollt ist.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen oberen Scroll-Versatz repräsentiert, der für das Element möglich ist.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scroll-Ansichtbreite des Elements darstellt.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt den offenen Shadow-Root zurück, der von dem Element gehostet wird, oder null, wenn kein offener Shadow-Root vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingefügt wird.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Tags für das gegebene Element zurück.

### Eingeschlossene Instanzeigenschaften von ARIA

_Das `Element` Interface umfasst auch die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) Attribut widerspiegelt, das angibt, ob unterstützende Technologien alle oder nur Teile des geänderten Bereichs basierend auf den durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut definierten Änderungsbenachrichtigungen präsentieren werden.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete) Attribut widerspiegelt, das angibt, ob die Eingabe von Text das Anzeigen einer oder mehrerer Vorhersagen des beabsichtigten Werts für ein Combobox, Suchfeld oder Textfeld auslösen könnte und wie Vorhersagen präsentiert würden, wenn sie gemacht werden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel) Attribut widerspiegelt, das die Braille-Beschriftung des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) Attribut widerspiegelt, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) Attribut widerspiegelt, das angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Modifikationen abgeschlossen sind, bevor sie dem Benutzer angezeigt werden.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) Attribut widerspiegelt, das den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) Attribut widerspiegelt, das die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) Attribut widerspiegelt, das die Spaltenindex oder Position eines Elements im Verhältnis zur Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext) Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan) Attribut widerspiegelt, das die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannten Spalten definiert.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current) Attribut widerspiegelt, das das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe verwandter Elemente repräsentiert.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description) Attribut widerspiegelt, das einen String-Wert definiert, der das aktuelle Element beschreibt oder kommentiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled) Attribut widerspiegelt, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, so dass es nicht bearbeitet oder in anderer Weise bedient werden kann.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) Attribut widerspiegelt, das angibt, ob ein Gruppierungselement, das von diesem Element besessen oder kontrolliert wird, erweitert oder eingeklappt ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup) Attribut widerspiegelt, das die Verfügbarkeit und den Typ eines interaktiven Popup-Elements angibt, wie z. B. ein Menü oder ein Dialog, das durch ein Element ausgelöst werden kann.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden) Attribut widerspiegelt, das angibt, ob das Element einer Zugangs-API ausgesetzt ist.
- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Ein String, der das [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid) Attribut widerspiegelt, das angibt, dass der eingegebene Wert nicht dem von der Anwendung erwarteten Format entspricht.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts) Attribut widerspiegelt, das Tastenkombinationen angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder ihm den Fokus zu geben.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) Attribut widerspiegelt, das einen String-Wert definiert, der das aktuelle Element beschriftet.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level) Attribut widerspiegelt, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) Attribut widerspiegelt, das angibt, dass ein Element aktualisiert wird, und die Arten von Updates beschreibt, die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal) Attribut widerspiegelt, das angibt, ob ein Element beim Anzeigen modal ist.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline) Attribut widerspiegelt, das angibt, ob ein Textfeld mehrere Zeilen Eingabedaten oder nur eine einzelne Zeile akzeptiert.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable) Attribut widerspiegelt, das angibt, dass der Benutzer mehr als ein Element aus den aktuell auswählbaren Nachfahren auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation) Attribut widerspiegelt, das angibt, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder) Attribut widerspiegelt, das einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerelement keinen Wert hat.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) Attribut widerspiegelt, das die Nummer oder Position eines Elements im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed) Attribut widerspiegelt, das den aktuellen "gedrückten" Zustand von Umschalttasten angibt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly) Attribut widerspiegelt, das angibt, dass das Element nicht bearbeitbar ist, aber dennoch bedient werden kann.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant) Attribut widerspiegelt, das angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Barrierefreiheitsbaum innerhalb einer Live-Region geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live` Region relevant sind und angekündigt werden sollten.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required) Attribut widerspiegelt, das angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular eingereicht werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription) Attribut widerspiegelt, das eine menschenlesbare, autorenlokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount) Attribut widerspiegelt, das die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex) Attribut widerspiegelt, das den Zeilenindex oder die Position eines Elements im Verhältnis zur Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext) Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan) Attribut widerspiegelt, das die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannten Zeilen definiert.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected) Attribut widerspiegelt, das den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) Attribut widerspiegelt, das die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort) Attribut widerspiegelt, das angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax) Attribut widerspiegelt, das den maximal zulässigen Wert für ein Wertebereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin) Attribut widerspiegelt, das den minimal zulässigen Wert für ein Wertebereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow) Attribut widerspiegelt, das den aktuellen Wert für ein Wertebereich-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext) Attribut widerspiegelt, das die menschenlesbare Textalternative von `aria-valuenow` für ein Wertebereich-Widget definiert.
- [`Element.role`](/de/docs/Web/API/Element/role)
  - : Ein String, der das explizit festgelegte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles) Attribut widerspiegelt, das die semantische Rolle des Elements bereitstellt.

#### Instanzeigenschaften, die von ARIA Element-Referenzen zurückgegeben werden

Die Eigenschaften spiegeln die durch `id`-Referenz im entsprechenden Attribut spezifizierten Elemente wider, jedoch mit einigen Vorbehalten. Weitere Informationen finden Sie unter [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_ Leitfaden.

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Ein Element, das das aktuelle aktive Element darstellt, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role) Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), oder [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt. Reflektiert das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) Attribut.
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalte oder Anwesenheit vom Element, auf das es angewendet wird, kontrolliert werden. Reflektiert das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) Attribut.
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Ein Array von Elementen, die die zugängliche Beschreibung für das Element, auf das es angewendet wird, enthalten. Reflektiert das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) Attribut.
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Ein Array von Elementen, die für das Element, auf das es angewendet wird, zugängliche Details bereitstellen. Reflektiert das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) Attribut.
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das Element, auf das es angewendet wird, bereitstellen. Reflektiert das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage) Attribut.
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Ein Array von Elementen, die das nächste Element (oder die nächsten Elemente) in einer alternativen Lesereihenfolge von Inhalten identifizieren und damit die allgemeine Standardlesereihenfolge nach Ermessen des Benutzers überschreiben. Reflektiert das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) Attribut.
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Ein Array von Elementen, die den zugänglichen Namen für das Element, auf das es angewendet wird, bereitstellen. Reflektiert das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) Attribut.
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Ein Array von Elementen, die von dem Element, auf das sie angewendet werden, besessen werden. Dies wird verwendet, um eine visuelle, funktionale oder kontextuale Beziehung zwischen einem übergeordneten Element und seinen Kind-Elementen zu definieren, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen. Reflektiert das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) Attribut.

## Instanzmethoden

_`Element` erbt Methoden von seinen übergeordneten Interfaces [`Node`](/de/docs/Web/API/Node) und seinem eigenen übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt nach dem `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode, um eine Animation auf einem Element zu erstellen und auszuführen. Gibt die erstellte Animation-Objektinstanz zurück.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Befestigt einen Shadow-DOM-Baum am angegebenen Element und gibt eine Referenz zu seinem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt vor dem `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt zurück, ob ein Element voraussichtlich sichtbar ist oder nicht, basierend auf konfigurierbaren Überprüfungen.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, das der nächste Vorfahr des aktuellen Elements (oder das aktuelle Element selbst) ist, das den in Parameter angegebenen Selektoren entspricht.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) ist.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von Animationsobjekten zurück, die derzeit auf dem Element aktiv sind.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen des aktuellen Elements zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knoten-Darstellung des benannten Attributs vom aktuellen Knoten ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knoten-Darstellung des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten ab und gibt sie als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Namen vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Ansichtsfenster zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad) Objekten zurück, die die CSS-Fragmente des Knotens darstellen.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client anzeigen.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)` zurück, die alle Nachfahren des aktuellen Elements enthält, die über die in Parameter angegebenen Klassenlisten verfügen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)` zurück, die alle Nachfahrenelemente eines bestimmten Tag-Namens im aktuellen Element enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine Live-`[`HTMLCollection`](/de/docs/Web/API/HTMLCollection)` zurück, die alle Nachfahrenelemente eines bestimmten Tag-Namens und Namespace im aktuellen Element enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-String zurück, einschließlich des optionalen Shadow-DOMs.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element über das angegebene Attribut verfügt oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element über das angegebene Attribut, im angegebenen Namespace, verfügt oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element eines oder mehrere HTML-Attribute enthält.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, Zeigererfassung für den durch die angegebene Zeiger-ID identifizierten Zeiger hat.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt einen gegebenen Elemente-Knoten an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Analysiert den Text als HTML oder XML und fügt die resultierenden Knoten an der angegebenen Position in den Baum ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen gegebenen Textknoten an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element durch den angegebenen Selektor-String ausgewählt würde oder nicht.
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) {{Experimental_Inline}}
  - : Bewegt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knoten als direktes Kind, vor einem gegebenen Referenzknoten, ohne den Knoten zu entfernen und dann einzufügen.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings vor dem ersten Kind des Elements ein.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, der dem angegebenen Selektor-String relativ zu dem Element entspricht.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die dem angegebenen Selektor-String relativ zu dem Element entsprechen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Löst (stoppt) die Zeigererfassung auf, die vorher für ein spezifisches [`PointerEvent`](/de/docs/Web/API/PointerEvent) eingestellt wurde.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knoten-Darstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) durch einen angegebenen neuen Satz von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kinderliste seines Elternteils durch eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fordert asynchron den Browser auf, das Element im Vollbildmodus anzuzeigen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Ermöglicht eine asynchrone Anfrage, um den Zeiger auf dem gegebenen Element zu sperren.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in den Ansichtsbereich gelangt.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browser-Fensters, wenn es sich nicht bereits im sichtbaren Bereich des Browser-Fensters befindet. **Verwenden Sie stattdessen den Standard [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Setzt den Wert eines benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knoten-Darstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knoten-Darstellung des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Setzt den Wert des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Erfassung von Mausereignissen ein und leitet alle Mausereignisse auf dieses Element um.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Analysiert eine HTML-Zeichenfolge in ein Dokumentfragment, ohne eine Bereinigung vorzunehmen, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt. Die HTML-Zeichenfolge kann deklarative Shadow-Roots enthalten, die als Template-Elemente analysiert würden, wenn das HTML mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) gesetzt würde.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bestimmt ein spezifisches Element als das Ziel für die Erfassung zukünftiger [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Wechselt ein boolesches Attribut, entfernt es, wenn es vorhanden ist, und fügt es hinzu, wenn es nicht vorhanden ist, an dem angegebenen Element.

## Ereignisse

Hören Sie auf diese Ereignisse, indem Sie `addEventListener()` verwenden oder einen Ereignis-Listener der `oneventname` Eigenschaft dieses Interfaces zuweisen.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Ausgelöst, wenn ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Ausgelöst, wenn der Wert eines Eingabeelements kurz vor der Änderung steht.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event) {{Experimental_Inline}}
  - : Wird auf einem Element ausgelöst, das sich im Zustand [_hidden until found_](/de/docs/Web/HTML/Reference/Global_attributes/hidden) befindet, wenn der Browser kurz davor steht, seinen Inhalt anzuzeigen, weil der Benutzer den Inhalt über die Funktion "In Seite suchen" oder durch Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Ausgelöst, wenn ein Skript kurz vor der Ausführung steht.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Ausgelöst vor den WebXR-Auswahlereignissen ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)).
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird auf jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}} ausgelöst, wenn es anfängt oder aufhört, [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) zu sein und [seinen Inhalt zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Wird ausgelöst, wenn der Wert eines Elements als direkte Folge einer Benutzeraktion geändert wird.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Ausgelöst, wenn der Benutzer ein Radknopf auf einem Zeigergerät (typischerweise eine Maus) dreht.

### Animationsereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Ausgelöst, wenn eine Animation unerwartet abgebrochen wird.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Ausgelöst, wenn eine Animation normal abgeschlossen wird.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Ausgelöst, wenn eine Animationsiteration abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Ausgelöst, wenn eine Animation beginnt.

### Zwischenereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Ausgelöst, wenn der Benutzer eine Kopieren-Aktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Ausgelöst, wenn der Benutzer eine Ausschneiden-Aktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Ausgelöst, wenn der Benutzer eine Einfügen-Aktion über die Benutzeroberfläche des Browsers initiiert.

### Zusammensetzungserignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Kompositionssitzung startet.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Ausgelöst, wenn ein neues Zeichen im Kontext einer Textkompositionssitzung empfangen wird, die von einem Textkompositionssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuert wird.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Ausgelöst, wenn ein Element den Fokus verliert.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Ausgelöst, wenn ein Element den Fokus erhält.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Ausgelöst, wenn ein Element den Fokus erhält, nach [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Ausgelöst, wenn ein Element den Fokus verliert, nach [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbild-Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : An ein `Element` gesendet, wenn es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : An ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln.

### Tastaturereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Ausgelöst, wenn eine Taste, die einen Zeichenwert erzeugt, gedrückt wird.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Ausgelöst, wenn ein nicht primärer Zeigergerätknopf (z. B. jede andere Maustaste als die linke Taste) auf ein Element gedrückt und wieder losgelassen wird.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Ausgelöst, wenn ein Zeigergerätknopf (z. B. die Haupttaste einer Maus) auf ein einzelnes Element gedrückt und wieder losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Ausgelöst, wenn ein Zeigergerätknopf (z.B. die Haupttaste einer Maus) zweimal auf ein einzelnes Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, zum Beispiel durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn ein Mausrad oder ähnliches Gerät betrieben wird und die akkumulierte Scroll-Menge seit dem letzten Ereignis mehr als eine Zeile oder eine Seite beträgt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Ausgelöst, wenn ein Zeigergerätknopf auf ein Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Ausgelöst, wenn ein Zeigergerät (normalerweise eine Maus) über das Element bewegt wird, an dem der Listener befestigt ist.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Ausgelöst, wenn der Zeiger eines Zeigergeräts (normalerweise eine Maus) aus einem Element bewegt wird, an dem der Listener befestigt ist.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Ausgelöst, wenn ein Zeigergerät (normalerweise eine Maus) über ein Element bewegt wird.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Ausgelöst, wenn ein Zeigergerät (normalerweise eine Maus) von dem Element bewegt wird, an dem der Listener befestigt ist, oder von einem seiner Kinder.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Ausgelöst, wenn ein Zeigergerät auf das Element bewegt wird, an dem der Listener befestigt ist, oder auf eines seiner Kinder.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Ausgelöst, wenn ein Zeigergerätknopf auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Mausrad oder ähnliches Gerät betrieben wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Mausrad oder ähnliches Gerät betrieben wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad-Berührungsbildschirm ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird nach dem mousedown-Ereignis ausgelöst, sobald genügend Druck ausgeübt wurde, um als "Force Click" zu gelten.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Ereignis ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird nach dem [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) Ereignis ausgelöst, sobald der Druck genügend reduziert wurde, um den "Force Click" zu beenden.

### Zeigerereignisse

- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Ausgelöst, wenn ein Element einen Zeiger mit [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) erfasst.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Ausgelöst, wenn ein [erfasster Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ausgelöst, wenn ein Zeigereignis abgebrochen wird.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Ausgelöst, wenn ein Zeiger aktiv wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Ausgelöst, wenn ein Zeiger in die Treffer-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Ausgelöst, wenn ein Zeiger aus den Treffer-Test-Grenzen eines Elements bewegt wird.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Ausgelöst, wenn sich ein Zeiger von Koordinaten ändert.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Ausgelöst, wenn ein Zeiger aus den _Treffer-Test_-Grenzen eines Elements bewegt wird (aus verschiedenen Gründen).
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Ausgelöst, wenn ein Zeiger in die Treffer-Test-Grenzen eines Elements bewegt wird.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{Experimental_Inline}}
  - : Ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Bildlaufereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn die Dokumentansicht das Scrollen abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende einer Scroll-Operation ausgelöst, wenn ein neuer Scroll-Snap-Zielpunkt ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ansteht, d.h. dass es ausgewählt wird, wenn die aktuelle Scroll-Geste endet.

### Berührungsereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn sich die Finger während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn keine Finger mehr die Berührungsoberfläche berühren und damit die Geste beendet wird.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn mehrere Finger die Berührungsoberfläche berühren und damit eine neue Geste beginnen.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Ausgelöst, wenn ein oder mehrere Berührungspunkte in einer implementierungsspezifischen Weise gestört wurden (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Ausgelöst, wenn sich ein oder mehrere Berührungspunkte entlang der Berührungsoberfläche bewegen.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Ausgelöst, wenn ein oder mehrere Berührungspunkte auf die Berührungsoberfläche gelegt werden.

### Übergangsereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wird.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) das Abspielen abgeschlossen hat.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h. wenn es zu einer Gruppe laufender Übergänge hinzugefügt wird), aber nicht unbedingt gestartet wird.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) zu übergehen beginnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
