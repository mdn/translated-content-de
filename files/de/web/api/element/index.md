---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: c15dc43c147bba7bdbaf2754831c59e5f44b98d2
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Element-Objekte (d.h. Objekte, die Elemente repräsentieren) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie enthält nur Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das [`HTMLElement`](/de/docs/Web/API/HTMLElement) Interface die Basis für HTML-Elemente. Ähnlich ist das [`SVGElement`](/de/docs/Web/API/SVGElement) Interface die Grundlage für alle SVG-Elemente und das [`MathMLElement`](/de/docs/Web/API/MathMLElement) Interface ist die Basis für MathML-Elemente. Die meiste Funktionalität wird weiter unten in der Klassenhierarchie spezifiziert.

Sprachen außerhalb der Web-Plattform, wie XUL über das `XULElement` Interface, implementieren ebenfalls `Element`.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`Element` erbt Eigenschaften von seiner Eltern-Schnittstelle, [`Node`](/de/docs/Web/API/Node), und in Erweiterung von der Eltern-Schnittstelle dieser, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das den {{htmlelement("slot")}} repräsentiert, in den der Knoten eingefügt wird.
- [`Element.attributes`](/de/docs/Web/API/Element/attributes) {{ReadOnlyInline}}
  - : Gibt ein [`NamedNodeMap`](/de/docs/Web/API/NamedNodeMap) Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
- [`Element.childElementCount`](/de/docs/Web/API/Element/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kind-Elemente dieses Elements zurück.
- [`Element.children`](/de/docs/Web/API/Element/children) {{ReadOnlyInline}}
  - : Gibt die Kind-Elemente dieses Elements zurück.
- [`Element.classList`](/de/docs/Web/API/Element/classList) {{ReadOnlyInline}}
  - : Gibt eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList) zurück, die die Liste der Klassenattribute enthält.
- [`Element.className`](/de/docs/Web/API/Element/className)
  - : Ein String, der die Klasse des Elements darstellt.
- [`Element.clientHeight`](/de/docs/Web/API/Element/clientHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Höhe des Elements darstellt.
- [`Element.clientLeft`](/de/docs/Web/API/Element/clientLeft) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite der linken Rahmenlinie des Elements darstellt.
- [`Element.clientTop`](/de/docs/Web/API/Element/clientTop) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite der oberen Rahmenlinie des Elements darstellt.
- [`Element.clientWidth`](/de/docs/Web/API/Element/clientWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Breite des Elements darstellt.
- [`Element.currentCSSZoom`](/de/docs/Web/API/Element/currentCSSZoom) {{ReadOnlyInline}}
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1.0, wenn das Element nicht gerendert wird.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Ein String, der das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut reflektiert, welches ein Element zur Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API markiert.
- [`Element.firstElementChild`](/de/docs/Web/API/Element/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kind-Element dieses Elements zurück.
- [`Element.id`](/de/docs/Web/API/Element/id)
  - : Ein String, der die ID des Elements darstellt.
- [`Element.innerHTML`](/de/docs/Web/API/Element/innerHTML)
  - : Ein String, der das Markup des Inhalts des Elements darstellt.
- [`Element.lastElementChild`](/de/docs/Web/API/Element/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kind-Element dieses Elements zurück.
- [`Element.localName`](/de/docs/Web/API/Element/localName) {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Elements darstellt.
- [`Element.namespaceURI`](/de/docs/Web/API/Element/namespaceURI) {{ReadOnlyInline}}

  - : Der Namespace-URI des Elements, oder `null`, wenn es keinen Namespace hat.

    > [!NOTE]
    > In Firefox 3.5 und früher sind HTML-Elemente in keinem Namespace. In späteren Versionen sind HTML-Elemente in dem Namespace [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/) sowohl in HTML- als auch in XML-Bäumen.

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das unmittelbar folgende Element im Baum, oder `null`, wenn es keinen Geschwisterknoten gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Ein String, der das Markup des Elements einschließlich seines Inhalts darstellt. Wenn als Setter verwendet, ersetzt es das Element mit aus dem gegebenen String geparsten Knoten.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert die Teile-Identifikation(en) des Elements (das heißt, wie im `part` Attribut festgelegt), zurückgegeben als eine [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namensraum-Präfix des Elements darstellt, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das unmittelbar vorhergehende Element im Baum, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtshöhe eines Elements darstellt.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den linken Scroll-Offset des Elements darstellt.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen möglichen linken Scroll-Offset für das Element darstellt.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die die Anzahl der Pixel darstellt, die das obere Ende des Elements vertikal gescrollt ist.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen oberen Scroll-Offset für das Element darstellt.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtsbreite des Elements darstellt.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt die offene Schattenwurzel zurück, die vom Element gehostet wird, oder null, wenn keine offene Schattenwurzel vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Schatten-DOM-Slots zurück, in den das Element eingefügt wird.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Tags für das gegebene Element zurück.

### Eingebundene ARIA-Eigenschaften

_Das `Element`-Interface enthält auch folgende Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut reflektiert und angibt, ob assistierende Technologien alle oder nur Teile des geänderten Bereichs basierend auf den Änderungsbenachrichtigungen, die durch das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) definiert sind, präsentieren werden.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut reflektiert und angibt, ob Texteingaben die Anzeige einer oder mehrerer Vorhersagen des vom Benutzer beabsichtigten Wertes für ein Kombinationsfeld, ein Suchfeld oder ein Textfeld auslösen könnten und wie die Vorhersagen präsentiert würden, wenn sie gemacht würden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) Attribut reflektiert, das die Braille-Beschriftung des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) Attribut reflektiert, das die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) Attribut reflektiert und angibt, ob ein Element modifiziert wird, da assistierende Technologien eventuell warten möchten, bis die Modifikationen abgeschlossen sind, bevor sie diese dem Benutzer anzeigen.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut reflektiert, das den aktuellen "aktiviert"-Zustand von Kontrollkästchen, Radio-Buttons und anderen Widgets anzeigt, die einen Aktiviert-Zustand haben.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut reflektiert, das die Anzahl der Spalten in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut reflektiert, das den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Spalten innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) Attribut reflektiert, das eine menschenlesbare Textalternative zu aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) Attribut reflektiert, das die Anzahl der von einer Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Spalten definiert.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) Attribut reflektiert, das das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe von verwandten Elementen darstellt.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) Attribut reflektiert, das eine String-Ausgabe definiert, die das aktuelle Element beschreibt oder kommentiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Attribut reflektiert, das angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitbar oder anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut reflektiert, das angibt, ob ein durch dieses Element besitzendes oder kontrolliertes Gruppierungselement erweitert oder reduziert ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Attribut reflektiert, das die Verfügbarkeit und den Typ von interaktiven Pop-up-Elementen wie Menüs oder Dialogen angibt, die von einem Element ausgelöst werden können.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) Attribut reflektiert, das angibt, ob das Element einer Zugänglichkeits-API ausgestellt ist.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) Attribut reflektiert, das angibt, welche Tastenkombinationen ein Autor implementiert hat, um ein Element zu aktivieren oder in den Fokus zu bringen.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut reflektiert, das eine String-Ausgabe definiert, die das aktuelle Element kennzeichnet.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) Attribut reflektiert, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Attribut reflektiert, das angibt, dass ein Element aktualisiert wird, und beschreibt, welche Arten von Updates die Benutzeragenten, assistierende Technologien und Benutzer von der Live-Region erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) Attribut reflektiert, das angibt, ob ein Element modal ist, wenn es angezeigt wird.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiline)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) Attribut reflektiert, das angibt, ob ein Textfeld mehrere Zeilen der Eingabe akzeptiert oder nur eine einzelne Zeile.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) Attribut reflektiert, das angibt, dass der Benutzer mehr als ein Element aus den aktuell auswählbaren Nachkommen auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Attribut reflektiert, das angibt, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) Attribut reflektiert, das einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn die Steuerung keinen Wert hat.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attribut reflektiert, das die Nummer oder Position eines Elements im aktuellen Satz von Listeneinträgen oder Baumobjekten definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) Attribut reflektiert, das den aktuellen "gedrückt"-Zustand von Umschalttasten anzeigt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut reflektiert, das angibt, dass das Element nicht bearbeitbar ist, aber dennoch bedienbar.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Attribut reflektiert, das angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugriffsbaum innerhalb einer Live-Region geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut reflektiert, das angibt, dass Benutzereingaben erforderlich sind, bevor ein Formular gesendet werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) Attribut reflektiert, das eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Attribut reflektiert, das die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder einem Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut reflektiert, das den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder eines Baumrasters definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) Attribut reflektiert, das eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) Attribut reflektiert, das die Anzahl der von einer Zelle oder Rasterzelle in einer Tabelle, einem Raster oder einem Baumraster überspannten Zeilen definiert.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut reflektiert, das den aktuellen "ausgewählt"-Zustand von Elementen anzeigt, die einen ausgewählten Zustand haben.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) Attribut reflektiert, das die Anzahl der Elemente im aktuellen Satz von Listeneinträgen oder Baumobjekten definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Attribut reflektiert, das angibt, ob Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) Attribut reflektiert, das den maximal erlaubten Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) Attribut reflektiert, das den minimal erlaubten Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) Attribut reflektiert, das den aktuellen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) Attribut reflektiert, das die menschenlesbare Textalternative von aria-valuenow für ein Bereichs-Widget definiert.

## Instanzmethoden

_`Element` erbt Methoden von seinen Eltern [`Node`](/de/docs/Web/API/Node) und seinem eigenen Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kinderliste des Elternteils des `Element` ein, direkt nach dem `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Verknüpfungsmethode, um eine Animation auf einem Element zu erstellen und auszuführen. Gibt die erstellte Animationsobjektinstanz zurück.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen nach dem letzten Kind des Elements ein.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Fügt einem angegebenen Element einen Schatten-DOM-Baum hinzu und gibt eine Referenz auf dessen [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen in die Kinderliste des Elternteils des `Element` ein, direkt vor dem `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt zurück, ob ein Element basierend auf konfigurierbaren Prüfungen voraussichtlich sichtbar ist oder nicht.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, das der nächste Vorfahre des aktuellen Elements (oder das aktuelle Element selbst) ist, der die im Parameter angegebenen Selektoren erfüllt.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt ein [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) Interface zurück, das eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, der eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) darstellt.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von momentan auf dem Element aktiven Animation-Objekten zurück.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen des aktuellen Elements zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knoten-Darstellung des benannten Attributs vom aktuellen Knoten ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knoten-Darstellung des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Namen vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zum Ansichtsfenster zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekten zurück, die die CSS-Fragmente des Knotens darstellen.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client angeben.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine Live-`HTMLCollection` zurück, die alle Nachkommen des aktuellen Elements enthält, die die im Parameter angegebene Liste von Klassen besitzen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine Live-`HTMLCollection` zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens vom aktuellen Element enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine Live-`HTMLCollection` zurück, die alle Nachkommenelemente eines bestimmten Tag-Namens und Namespace vom aktuellen Element enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-String zurück, optional einschließlich eines Schatten-DOMs.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element das angegebene Attribut hat oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element das angegebene Attribut im angegebenen Namespace hat oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element ein oder mehrere HTML-Attribute aufweist.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf das die Methode aufgerufen wird, einen Pointer Capture für den durch die gegebene Pointer-ID identifizierten Zeiger hat.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt einen gegebenen Elementknoten an einer gegebenen Position relativ zu dem Element ein, auf das es aufgerufen wird.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Analysiert den Text als HTML oder XML und fügt die resultierenden Knoten an der angegebenen Position in den Baum ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen gegebenen Textknoten an einer gegebenen Position relativ zu dem Element ein, auf das es aufgerufen wird.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element durch den angegebenen Selektor-String ausgewählt würde.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kind des Elements ein.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, der mit dem angegebenen Selektor-String relativ zu dem Element übereinstimmt.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die mit dem angegebenen Selektor-String relativ zu dem Element übereinstimmen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt den (Stop) Pointer Capture frei, der zuvor für ein bestimmtes [`PointerEvent`](/de/docs/Web/API/PointerEvent) eingestellt wurde.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knoten-Darstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die bestehenden Kinder eines [`Node`](/de/docs/Web/API/Node) durch einen angegebenen neuen Satz von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kinderliste seines Elternteils durch eine Reihe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Fragt den Browser asynchron, das Element im Vollbild anzuzeigen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Ermöglicht es, asynchron zu verlangen, dass der Zeiger auf das gegebene Element gesperrt wird.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den angegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in die Ansicht gelangt.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es nicht bereits innerhalb des sichtbaren Bereichs des Browserfensters ist. **Verwenden Sie stattdessen die Standardmethode [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Legt den Wert eines benannten Attributs des aktuellen Knotens fest.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knoten-Darstellung des benannten Attributs vom aktuellen Knoten.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knoten-Darstellung des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Legt den Wert des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten fest.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Erfassung von Mausereignissen ein, indem alle Mausereignisse an dieses Element umgeleitet werden.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Analysiert einen HTML-String in ein Dokument-Fragment, ohne Sanitierung, das dann den ursprünglichen Subtree des Elements im DOM ersetzt. Der HTML-String kann deklarative Schattenwurzeln enthalten, die als Vorlagenelemente geparst würden, wenn das HTML mit [`Element.innerHTML`](#element.innerhtml) gesetzt wurde.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bezeichnet ein bestimmtes Element als Ziel für die Erfassung zukünftiger [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Schaltet ein boolesches Attribut um, indem es entfernt wird, wenn es vorhanden ist, oder hinzugefügt wird, wenn es nicht vorhanden ist, für das angegebene Element.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisung eines Ereignislisteners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Script ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Wird ausgelöst, wenn der Wert eines Eingabeelements geändert werden soll.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event) {{Experimental_Inline}}
  - : Wird auf einem Element ausgelöst, das sich im Zustand [_versteckt bis gefunden_](/de/docs/Web/HTML/Global_attributes/hidden) befindet, wenn der Browser kurz davor steht, seinen Inhalt zu offenbaren, weil der Benutzer den Inhalt über die "Im-Seite-suchen"-Funktion oder durch Fragment-Navigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein Script kurz vor der Ausführung steht.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Wird vor WebXR-Auswahlevents ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)) ausgelöst.
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird auf jedem Element mit {{cssxref("content-visibility", "content-visibility: auto")}} ausgelöst, wenn es beginnt oder aufhört, [für den Benutzer relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [seinen Inhalt zu überspringen](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- [`input`](/de/docs/Web/API/Element/input_event)
  - : Wird ausgelöst, wenn der Wert eines Elements als direktes Ergebnis einer Benutzeraktion geändert wird.
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Wird ausgelöst, wenn der Benutzer ein Rad an einem Zeigegerät (typischerweise eine Maus) dreht.

### Animationsereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Wird ausgelöst, wenn eine Animation unerwartet abbricht.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Wird ausgelöst, wenn eine Animation normal abgeschlossen ist.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Wird ausgelöst, wenn eine Animationsiteration abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Wird ausgelöst, wenn eine Animation beginnt.

### Zwischenablageereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Kompositionsereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Kompositionssitzung startet.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Wird ausgelöst, wenn ein neues Zeichen im Zusammenhang mit einer von einem Textkompositionssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuerten Textkompositionssitzung empfangen wird.

### Fokus-Ereignisse

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
  - : Wird an ein `Element` gesendet, wenn es in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt oder diesen verlässt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln oder daraus heraus.

### Tastatur-Ereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Wird ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn eine Taste, die einen Zeichenwert erzeugt, heruntergedrückt wird.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Wird ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Wird ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (z.B. eine andere Maus-Taste als die linke) auf einem Element gedrückt und losgelassen wurde.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Wird ausgelöst, wenn eine Zeigegerätetaste (z.B. die Primärtaste einer Maus) auf einem einzelnen Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Wird ausgelöst, wenn eine Zeigegerätetaste (z.B. die Primärtaste einer Maus) zweimal auf einem einzigen Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, zum Beispiel durch einen Mausklick oder Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn ein Mausrad oder ähnliches Gerät betrieben wird und der angesammelte Scrollbetrag seit dem letzten Ereignis über 1 Linie oder 1 Seite liegt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Wird ausgelöst, wenn eine Zeigegerätetaste auf einem Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über das Element bewegt wird, das den Listener angehängt hat.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Wird ausgelöst, wenn der Zeiger eines Zeigegeräts (normalerweise eine Maus) aus einem Element heraus bewegt wird, das den Listener angehängt hat.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) bewegt wird, während es über einem Element ist.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) aus dem Element bewegt wird, an das der Listener angehängt ist, oder aus einem seiner Kinder.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Wird ausgelöst, wenn ein Zeigegerät auf das Element bewegt wird, an das der Listener angehängt ist, oder auf eines seiner Kinder.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Wird ausgelöst, wenn eine Zeigegerätetaste auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ähnliches Gerät betrieben wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ähnliches Gerät betrieben wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Touchscreen ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird nach dem `mousedown`-Ereignis ausgelöst, sobald ausreichend Druck ausgeübt wurde, um als "Kraftklick" zu qualifizieren.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Ereignis ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird nach dem [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) Ereignis ausgelöst, sobald der Druck ausreichend reduziert wurde, um den "Kraftklick" zu beenden.

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
  - : Wird ausgelöst, wenn ein Zeiger in die Grenzen eines Elements oder eines seiner Nachkommen gelangt.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Wird ausgelöst, wenn ein Zeiger die Grenzen eines Elements verlässt.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Wird ausgelöst, wenn ein Zeiger die _Trefferzonen_ eines Elements verlässt (aus anderen Gründen).
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Wird ausgelöst, wenn ein Zeiger in die Grenzen eines Elements gelangt.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Scrollereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn das Dokumentansicht das Scrollen abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird auf dem Scroll-Container ausgelöst, wenn der Browser bestimmt, dass ein neues Scroll-Snap-Ziel in Bearbeitung ist, d.h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Berührungsereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich Finger während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn keine mehreren Finger mehr die Berührungsfläche berühren, wodurch die Geste endet.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn mehrere Finger die Berührungsfläche berühren und damit eine neue Geste gestartet wird.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte auf eine implementierungsspezifische Weise gestört wurden (zum Beispiel, wenn zu viele Berührungspunkte erstellt werden).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte von der Berührungsfläche entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte entlang der Berührungsfläche verschoben werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Wird ausgelöst, wenn einer oder mehrere Berührungspunkte auf die Berührungsfläche gelegt werden.

### Übergangsereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) zu Ende gespielt hat.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h. wenn er einer Gruppe von laufenden Übergängen hinzugefügt wird), aber nicht unbedingt gestartet wird.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) zu überblenden begonnen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
