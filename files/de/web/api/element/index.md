---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: a61be259435257328a25c462cb0f42bc91981a6f
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (d.h. Objekte, die Elemente darstellen) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie verfügt nur über Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interface die Basis für HTML-Elemente. Ähnlich ist das [`SVGElement`](/de/docs/Web/API/SVGElement)-Interface die Basis für alle SVG-Elemente und das [`MathMLElement`](/de/docs/Web/API/MathMLElement)-Interface bildet die Basis für MathML-Elemente. Die meisten Funktionen sind weiter unten in der Klassenhierarchie spezifiziert.

Sprachen außerhalb der Webplattform, wie XUL durch das `XULElement`-Interface, implementieren ebenfalls `Element`.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`Element` erbt Eigenschaften von seinem übergeordneten Interface, [`Node`](/de/docs/Web/API/Node), und damit indirekt auch von dem übergeordneten Interface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das den {{htmlelement("slot")}} repräsentiert, in den der Knoten eingefügt ist.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap)-Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kinderelemente dieses Elements zurück.
- [`Element.children`](/de/docs/Web/API/Element/children) {{ReadOnlyInline}}
  - : Gibt die Kinderelemente dieses Elements zurück.
- [`Element.classList`](/de/docs/Web/API/Element/classList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die Liste der Klassenattribute enthält.
- [`Element.className`](/de/docs/Web/API/Element/className)
  - : Ein String, der die Klasse des Elements repräsentiert.
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Höhe des Elements repräsentiert.
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des linken Rahmens des Elements repräsentiert.
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des oberen Rahmens des Elements repräsentiert.
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Breite des Elements repräsentiert.
- [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) {{ReadOnlyInline}}
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1,0, wenn das Element nicht gerendert wird.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Ein String, der das [`elementtiming`](/de/docs/Web/HTML/Reference/Attributes/elementtiming)-Attribut widerspiegelt, welches ein Element zur Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-API markiert.
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kinderelement dieses Elements zurück.
- [`Element.id`](/de/docs/Web/API/Element/id)
  - : Ein String, der die ID des Elements repräsentiert.
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
  - : Ein String, der das Markup des Inhalts des Elements repräsentiert.
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kinderelement dieses Elements zurück.
- [`Element.localName`](/de/docs/Web/API/Element/localName) {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Elements repräsentiert.
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) {{ReadOnlyInline}}
  - : Der Namespace-URI des Elements oder `null`, wenn kein Namespace vorhanden ist.
- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das direkt auf das gegebene im Baum folgt, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Ein String, der das Markup des Elements einschließlich seiner Inhalte repräsentiert. Wenn als Setter verwendet, ersetzt er das Element mit den aus dem gegebenen String geparsten Knoten.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert die Teilkennung(en) des Elements (d.h. mit dem `part`-Attribut festgelegt), zurückgegeben als [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Elements repräsentiert, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das direkt vor dem gegebenen im Baum steht, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtshöhe eines Elements repräsentiert.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den linken Scroll-Offset des Elements repräsentiert.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen linken Scroll-Offset darstellt, der für das Element möglich ist.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die angibt, um wie viele Pixel die Oberseite des Elements vertikal gescrollt ist.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen oberen Scroll-Offset darstellt, der für das Element möglich ist.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtbreite des Elements repräsentiert.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt das offene Shadow-Root zurück, das vom Element gehostet wird, oder null, wenn kein offenes Shadow-Root vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingefügt ist.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Tags für das gegebene Element zurück.

### Instanz-Eigenschaften, die von ARIA enthalten sind

_Das `Element`-Interface beinhaltet auch die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)-Attribut widerspiegelt, welches angibt, ob unterstützende Technologien alle oder nur Teile des geänderten Bereichs basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut definiert sind, präsentieren werden.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-autocomplete)-Attribut widerspiegelt, welches angibt, ob die Texteingabe die Anzeige einer oder mehrerer Vorhersagen des beabsichtigten Werts des Benutzers für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte und wie Vorhersagen präsentiert würden, wenn sie gemacht würden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-braillelabel)-Attribut widerspiegelt, das das Braille-Label des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription)-Attribut widerspiegelt, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)-Attribut widerspiegelt, welches angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise abwarten möchten, bis die Modifikationen abgeschlossen sind, bevor sie dem Benutzer präsentiert werden.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)-Attribut widerspiegelt, welches den aktuellen "gecheckten" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)-Attribut widerspiegelt, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)-Attribut widerspiegelt, welches den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext)-Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colspan)-Attribut widerspiegelt, welches die Anzahl der Spalten definiert, die von einer Zelle oder einer Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannt werden.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-current)-Attribut widerspiegelt, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente repräsentiert.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description)-Attribut widerspiegelt, welches einen Stringwert definiert, der das aktuelle Element beschreibt oder annotiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)-Attribut widerspiegelt, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht editierbar oder anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)-Attribut widerspiegelt, welches angibt, ob ein Gruppierungselement, das von diesem Element verwaltet oder kontrolliert wird, erweitert oder eingeklappt ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)-Attribut widerspiegelt, welches die Verfügbarkeit und den Typ eines interaktiven Popup-Elements wie Menü oder Dialog, das durch ein Element ausgelöst werden kann, angibt.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-hidden)-Attribut widerspiegelt, welches angibt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- [`Element.ariaInvalid`](/de/docs/Web/API/Element/ariaInvalid)
  - : Ein String, der das [`aria-invalid`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-invalid)-Attribut widerspiegelt, welches angibt, dass der eingegebene Wert nicht dem vom Antrag erwarteten Format entspricht.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)-Attribut widerspiegelt, welches Tastenkombinationen angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)-Attribut widerspiegelt, welches einen Stringwert definiert, der das aktuelle Element beschreibt.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)-Attribut widerspiegelt, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)-Attribut widerspiegelt, welches angibt, dass ein Element aktualisiert wird und die Arten von Updates beschreibt, die zu erwarten sind.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)-Attribut widerspiegelt, welches angibt, ob ein Element beim Anzeigen modal ist.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiLine)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiline)-Attribut widerspiegelt, welches angibt, ob ein Textfeld die Eingabe mehrerer Zeilen akzeptiert oder nur eine einzelne Zeile.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-multiselectable)-Attribut widerspiegelt, welches angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-orientation)-Attribut widerspiegelt, welches angibt, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-placeholder)-Attribut widerspiegelt, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe hilft, wenn die Steuerung keinen Wert hat.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset)-Attribut widerspiegelt, welches die Zahl oder Position eines Elements im aktuellen Satz von Listeneinträgen oder Baumeinträgen definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)-Attribut widerspiegelt, welches den aktuellen "gedrückten" Zustand von Umschaltschaltern angibt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-readonly)-Attribut widerspiegelt, welches angibt, dass das Element nicht editierbar, aber anderweitig bedienbar ist.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)-Attribut widerspiegelt, welches angibt, welche Benachrichtigungen ausgelöst werden, wenn der Zugänglichkeitsbaum innerhalb einer Live-Region modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-required)-Attribut widerspiegelt, welches angibt, dass eine Benutzereingabe auf dem Element erforderlich ist, bevor ein Formular übermittelt werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)-Attribut widerspiegelt, welches eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowcount)-Attribut widerspiegelt, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindex)-Attribut widerspiegelt, welches den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)-Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowspan)-Attribut widerspiegelt, welches die Anzahl der Zeilen definiert, die von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder eines Baumrasters überspannt werden.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-selected)-Attribut widerspiegelt, welches den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize)-Attribut widerspiegelt, welches die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort)-Attribut widerspiegelt, welches angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemax)-Attribut widerspiegelt, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuemin)-Attribut widerspiegelt, welches den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuenow)-Attribut widerspiegelt, welches den aktuellen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-valuetext)-Attribut widerspiegelt, welches die menschenlesbare Textalternative von `aria-valuenow` für ein Bereichs-Widget definiert.
- [`Element.role`](/de/docs/Web/API/Element/role)
  - : Ein String, der das explizit gesetzte [`role`](/de/docs/Web/Accessibility/ARIA/Reference/Roles)-Attribut widerspiegelt, welches die semantische Rolle des Elements bereitstellt.

#### Instanz-Eigenschaften, die von ARIA-Element-Referenzen widergespiegelt werden

Die Eigenschaften spiegeln die durch `id`-Referenz in den entsprechenden Attributen angegebenen Elemente wider, jedoch mit einigen Vorbehalten. Siehe [Reflected element references](/de/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) im _Reflected attributes_ Leitfaden für mehr Informationen.

- [`Element.ariaActiveDescendantElement`](/de/docs/Web/API/Element/ariaActiveDescendantElement)
  - : Ein Element, das das aktuelle aktive Element darstellt, wenn der Fokus auf einem [`composite`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role)-Widget, [`combobox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/group_role) oder einer [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role) liegt.
    Widerspiegelt das [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)-Attribut.
- [`Element.ariaControlsElements`](/de/docs/Web/API/Element/ariaControlsElements)
  - : Ein Array von Elementen, deren Inhalt oder Vorhandensein vom Element, auf das es angewendet wird, gesteuert wird.
    Widerspiegelt das [`aria-controls`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)-Attribut.
- [`Element.ariaDescribedByElements`](/de/docs/Web/API/Element/ariaDescribedByElements)
  - : Ein Array von Elementen, die die zugängliche Beschreibung für das Element enthalten, auf das es angewendet wird.
    Widerspiegelt das [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)-Attribut.
- [`Element.ariaDetailsElements`](/de/docs/Web/API/Element/ariaDetailsElements)
  - : Ein Array von Elementen, die zugängliche Details für das Element bereitstellen, auf das es angewendet wird.
    Widerspiegelt das [`aria-details`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)-Attribut.
- [`Element.ariaErrorMessageElements`](/de/docs/Web/API/Element/ariaErrorMessageElements)
  - : Ein Array von Elementen, die eine Fehlermeldung für das Element bereitstellen, auf das es angewendet wird.
    Widerspiegelt das [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)-Attribut.
- [`Element.ariaFlowToElements`](/de/docs/Web/API/Element/ariaFlowToElements)
  - : Ein Array von Elementen, die das nächste Element (oder die nächsten Elemente) in einer alternativen Leseordnung des Inhalts identifizieren und die allgemeine Standardleseordnung nach dem Ermessen des Benutzers überschreiben.
    Widerspiegelt das [`aria-flowto`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)-Attribut.
- [`Element.ariaLabelledByElements`](/de/docs/Web/API/Element/ariaLabelledByElements)
  - : Ein Array von Elementen, die den zugänglichen Namen für das Element bereitstellen, auf das es angewendet wird.
    Widerspiegelt das [`aria-labelledby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)-Attribut.
- [`Element.ariaOwnsElements`](/de/docs/Web/API/Element/ariaOwnsElements)
  - : Ein Array von Elementen, die von dem Element, auf das dies angewendet wird, besessen werden.
    Dies wird verwendet, um eine visuelle, funktionale oder kontextuelle Beziehung zwischen einem übergeordneten Element und seinen untergeordneten Elementen zu definieren, wenn die DOM-Hierarchie nicht verwendet werden kann, um die Beziehung darzustellen.
    Widerspiegelt das [`aria-owns`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns)-Attribut.

## Instanz-Methoden

_`Element` erbt Methoden von seinen Eltern [`Node`](/de/docs/Web/API/Node) und dessen eigener Elternklasse [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kindliste des Elternteils des `Element`-Objekts ein, direkt nach dem `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Abkürzungsmethode, um eine Animation auf einem Element zu erstellen und auszuführen. Gibt das erstellte Animation-Objekt zurück.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Hängt einen Shadow-DOM-Baum an das angegebene Element und gibt eine Referenz zu seinem [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings in die Kindliste des Elternteils des `Element`-Objekts ein, direkt vor dem `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt zurück, ob ein Element voraussichtlich sichtbar ist oder nicht, basierend auf konfigurierbaren Überprüfungen.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, welches der nächste Vorfahre des aktuellen Elements ist (oder das aktuelle Element selbst), das dem in der Parameterliste angegebenen Selektor entspricht.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Interface zurück, welches eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet und eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) ist.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von Animation-Objekten zurück, die aktuell auf dem Element aktiv sind.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des angegebenen Attributs des aktuellen Knotens ab und gibt ihn als String zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen des aktuellen Elements zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knoten-Darstellung des benannten Attributs des aktuellen Knotens ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knoten-Darstellung des Attributs mit dem angegebenen Namen und Namespace des aktuellen Knotens ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Namen des aktuellen Knotens ab und gibt ihn als String zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Ansichtsfenster zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekten zurück, die die CSS-Fragmente des Knotens repräsentieren.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client anzeigt.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine Live-`HTMLCollection` zurück, die alle Nachkommen des aktuellen Elements enthält, die die in der Parameterliste angegebenen Klassen enthalten.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine Live-`HTMLCollection` zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens aus dem aktuellen Element enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine Live-`HTMLCollection` zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens und Namespace aus dem aktuellen Element enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-String zurück, optional einschließlich jedes Shadow-DOMs.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut hat oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut im angegebenen Namespace hat oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element eines oder mehrere HTML-Attribute enthält.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, den Zeiger für die durch die angegebene Zeiger-ID identifizierte Zeigererfassung besitzt.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt ein gegebenes Knoten-Element an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Parst den Text als HTML oder XML und fügt die resultierenden Knoten an den im Baum angegebenen Positionen ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen angegebenen Textknoten an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element durch die angegebene Selektor-Zeichenkette ausgewählt werden würde oder nicht.
- [`Element.moveBefore()`](/de/docs/Web/API/Element/moveBefore) {{Experimental_Inline}}
  - : Verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des aufrufenden Knotens als direktes Kind vor einen angegebenen Referenzknoten, ohne den Knoten zu entfernen und dann einzufügen.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings vor dem ersten Kind des Elements ein.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, der der angegebenen Selektor-Zeichenkette relativ zum Element entspricht.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die der angegebenen Selektor-Zeichenkette relativ zum Element entsprechen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt die (beendet) Zeigererfassung frei, die zuvor für ein bestimmtes [`PointerEvent`](/de/docs/Web/API/PointerEvent) festgelegt wurde.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knoten-Darstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) mit einem angegebenen neuen Satz von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kinderliste seines Elternteils mit einer Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Strings.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Bittet den Browser asynchron, das Element im Vollbild darzustellen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Erlaubt es asynchron, den Zeiger auf dem angegebenen Element zu sperren.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in den Sichtbereich gelangt.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich nicht bereits im sichtbaren Bereich des Browserfensters befindet. **Verwenden Sie stattdessen die Standardfunktion [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
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
  - : Richtet die Mausereigniserfassung ein und leitet alle Mausereignisse an dieses Element um.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen HTML-String in ein Dokumentfragment, ohne das dieses bereinigt wird, das dann den ursprünglichen Unterbaum des Elements im DOM ersetzt. Der HTML-String kann deklarative Shadow-Roots enthalten, die als Template-Elemente geparst würden, wenn das HTML mit [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML) gesetzt würde.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Designiert ein spezifisches Element als Erfassungsziel zukünftiger [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Schaltet ein boolesches Attribut um und entfernt es, wenn es vorhanden ist, und fügt es hinzu, wenn es nicht vorhanden ist, auf dem angegebenen Element.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder indem Sie einen Event-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Wird ausgelöst, wenn der Wert eines Eingabeelements kurz vor der Änderung steht.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
  - : Wird auf einem Element ausgelöst, das sich im Zustand [_hidden until found_](/de/docs/Web/HTML/Reference/Global_attributes/hidden) befindet, wenn der Browser kurz davor ist, seinen Inhalt zu enthüllen, weil der Benutzer den Inhalt über die "Seite durchsuchen"-Funktion oder durch Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Skript kurz vor der Ausführung steht.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Wird ausgelöst, bevor WebXR-Auswahlereignisse ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) gesendet werden.
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird auf jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}} ausgelöst, wenn es anfängt oder aufhört, [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) zu sein und [seinen Inhalt zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Wird ausgelöst, wenn sich der Wert eines Elements als direktes Ergebnis einer Benutzeraktion ändert.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Wird ausgelöst, wenn der Benutzer ein Rad eines Zeigegeräts (typischerweise eine Maus) dreht.

### Animationsereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Wird ausgelöst, wenn eine Animation unerwartet abbricht.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Wird ausgelöst, wenn eine Animation normal abgeschlossen ist.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Wird ausgelöst, wenn eine Animationsiteration abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Wird ausgelöst, wenn eine Animation startet.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion durch die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion durch die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion durch die Benutzeroberfläche des Browsers initiiert.

### Kompositionsereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem, wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}}, die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem, wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}}, eine neue Kompositionssitzung beginnt.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Wird ausgelöst, wenn ein neues Zeichen im Kontext einer Textkompositionssitzung empfangen wird, die von einem Textkompositionssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuert wird.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verliert.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhält.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Wird ausgelöst, wenn ein Element den Fokus erhält, nach [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Wird ausgelöst, wenn ein Element den Fokus verliert, nach [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbildereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein `Element` gesendet, wenn es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu schalten.

### Tastaturereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Wird ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn eine Taste, die einen Zeichenswert erzeugt, niedergehalten wird.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Wird ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (z. B. jede andere Taste als die linke Maustaste) auf einem Element gedrückt und losgelassen wurde.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z. B. die Haupttaste einer Maus) gedrückt und auf einem Einzelelelement losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z. B. die Haupttaste einer Maus) zweimal auf einem Einzelelelement geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, beispielsweise durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn das Mausrad oder ein ähnliches Gerät bedient wird und sich die gesammelte Bildlaufmenge seit dem letzten Ereignis über 1 Linie oder 1 Seite bewegt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über das Element bewegt wird, das den Listener angehängt hat.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Wird ausgelöst, wenn der Zeiger eines Zeigegeräts (normalerweise eine Maus) aus einem Element entfernt wird, das den Listener angehängt hat.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über ein Element bewegt wird.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) aus dem Element entfernt wird, an das der Listener angehängt ist, oder von einem seiner Kinder.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Wird ausgelöst, wenn ein Zeigegerät auf das Element bewegt wird, an das der Listener angehängt ist, oder zu einem seiner Kinder.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät bedient wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät bedient wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad-Touchscreen ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird nach dem mousedown-Ereignis ausgelöst, sobald genügend Druck ausgeübt wurde, um als "Force Click" zu qualifizieren.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignis ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird nach dem [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event)-Ereignis ausgelöst, sobald der Druck ausreichend reduziert wurde, um den "Force Click" zu beenden.

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
  - : Wird ausgelöst, wenn ein Zeiger in die Hit-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Zeiger aus den Hit-Test-Grenzen eines Elements bewegt wird.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn sich die Koordinaten eines Zeigers ändern.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird ausgelöst, wenn ein Zeiger aus den _Hit-Test_-Grenzen eines Elements bewegt wird (unter anderem).
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Zeiger in die WinkTest-Grenzen eines Elements bewegt wird.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisse auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Scrollereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn die Dokumentansicht das Scrollen vollständig beendet hat.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container am Ende einer Scroll-Operation ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel ausstehend ist, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Berührungserereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich Ziffern während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn kein Finger mehr die Berührungsoberfläche berührt, was das Ende der Geste anzeigt.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn mehrere Finger die Berührungsoberfläche berühren, was den Beginn einer neuen Geste anzeigt.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementationsspezifische Weise unterbrochen wurden (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte entlang der Berührungsoberfläche bewegt werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf der Berührungsoberfläche platziert werden.

### Übergangserereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wird.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) das Spielen abgeschlossen hat.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wurde (d.h. wenn er zu einem Satz laufender Übergänge hinzugefügt wird), obwohl er nicht unbedingt gestartet wird.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) beginnt zu übergehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
