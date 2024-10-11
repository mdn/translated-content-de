---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (d.h. Objekte, die Elemente repräsentieren) in einem [`Document`](/de/docs/Web/API/Document) erben. Sie besitzt nur Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist die [`HTMLElement`](/de/docs/Web/API/HTMLElement) Schnittstelle die Basisschnittstelle für HTML-Elemente. Ähnlich ist die [`SVGElement`](/de/docs/Web/API/SVGElement) Schnittstelle die Grundlage für alle SVG-Elemente, und die [`MathMLElement`](/de/docs/Web/API/MathMLElement) Schnittstelle ist die Basisschnittstelle für MathML-Elemente. Der größte Teil der Funktionalitäten wird weiter unten in der Klassenhierarchie spezifiziert.

Sprachen, die außerhalb der Webplattform liegen, wie XUL durch die `XULElement`-Schnittstelle, implementieren ebenfalls `Element`.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`Element` erbt Eigenschaften von seiner Elternschnittstelle [`Node`](/de/docs/Web/API/Node), und von dessen Elternschnittstelle [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.assignedSlot`](/de/docs/Web/API/Element/assignedSlot) {{ReadOnlyInline}}
  - : Gibt ein [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement) zurück, das den {{htmlelement("slot")}} repräsentiert, in den der Knoten eingesetzt wird.
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
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1.0, wenn das Element nicht gerendert wird.
- [`Element.elementTiming`](/de/docs/Web/API/Element/elementTiming) {{Experimental_Inline}}
  - : Ein String, der das [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) Attribut widerspiegelt, welches ein Element zur Beobachtung in der [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming) API markiert.
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

    > [!NOTE]
    > In Firefox 3.5 und früher befinden sich HTML-Elemente in keinem Namespace. In späteren Versionen befinden sich HTML-Elemente sowohl in HTML- als auch XML-Bäumen im [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/) Namespace.

- [`Element.nextElementSibling`](/de/docs/Web/API/Element/nextElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das Element, das unmittelbar auf das gegebene im Baum folgt, oder `null`, wenn es keinen Geschwisterknoten gibt.
- [`Element.outerHTML`](/de/docs/Web/API/Element/outerHTML)
  - : Ein String, der das Markup des Elements einschließlich seines Inhalts repräsentiert. Wenn es als Setter verwendet wird, ersetzt es das Element mit Knoten, die aus dem gegebenen String geparst werden.
- [`Element.part`](/de/docs/Web/API/Element/part)
  - : Repräsentiert den Part-Identifier des Elements (d.h. festgelegt mit dem `part` Attribut), zurückgegeben als [`DOMTokenList`](/de/docs/Web/API/DOMTokenList).
- [`Element.prefix`](/de/docs/Web/API/Element/prefix) {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Präfix des Elements repräsentiert, oder `null`, wenn kein Präfix angegeben ist.
- [`Element.previousElementSibling`](/de/docs/Web/API/Element/previousElementSibling) {{ReadOnlyInline}}
  - : Ein `Element`, das unmittelbar dem gegebenen im Baum vorangeht, oder `null`, wenn es kein Geschwisterelement gibt.
- [`Element.scrollHeight`](/de/docs/Web/API/Element/scrollHeight) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtshöhe eines Elements darstellt.
- [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
  - : Eine Zahl, die den linken Scrollversatz des Elements darstellt.
- [`Element.scrollLeftMax`](/de/docs/Web/API/Element/scrollLeftMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen linken Scrollversatz beschreibt, der für das Element möglich ist.
- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop)
  - : Eine Zahl, die die Anzahl der Pixel angibt, die der obere Teil des Elements vertikal gescrollt ist.
- [`Element.scrollTopMax`](/de/docs/Web/API/Element/scrollTopMax) {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen oberen Scrollversatz beschreibt, der für das Element möglich ist.
- [`Element.scrollWidth`](/de/docs/Web/API/Element/scrollWidth) {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtsbreite des Elements darstellt.
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) {{ReadOnlyInline}}
  - : Gibt den offenen Schatten-Wurzelknoten zurück, der durch das Element gehostet wird, oder null, wenn kein offener Schatten-Wurzelknoten vorhanden ist.
- [`Element.slot`](/de/docs/Web/API/Element/slot)
  - : Gibt den Namen des Schatten-DOM-Slots zurück, in den das Element eingefügt wird.
- [`Element.tagName`](/de/docs/Web/API/Element/tagName) {{ReadOnlyInline}}
  - : Gibt einen String mit dem Namen des Tags für das gegebene Element zurück.

### Instanz-Eigenschaften enthalten von ARIA

_Die `Element`-Schnittstelle enthält auch die folgenden Eigenschaften._

- [`Element.ariaAtomic`](/de/docs/Web/API/Element/ariaAtomic)
  - : Ein String, der das [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) Attribut widerspiegelt, welches angibt, ob unterstützende Technologien die gesamten Änderungsregion anzeigen oder nur Teile davon basierend auf den Änderungsbenachrichtigungen, die durch das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Attribut definiert sind.
- [`Element.ariaAutoComplete`](/de/docs/Web/API/Element/ariaAutoComplete)
  - : Ein String, der das [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) Attribut widerspiegelt, welches angibt, ob das Eingeben von Text eine oder mehrere Vorhersagen des beabsichtigten Wertes eines Benutzers für ein Kombinationsfeld, Suchfeld oder Textfeld auslösen könnte und spezifiziert, wie diese Vorhersagen dargestellt würden, wenn sie gemacht würden.
- [`Element.ariaBrailleLabel`](/de/docs/Web/API/Element/ariaBrailleLabel)
  - : Ein String, der das [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) Attribut widerspiegelt, das die Braille-Bezeichnung des Elements definiert.
- [`Element.ariaBrailleRoleDescription`](/de/docs/Web/API/Element/ariaBrailleRoleDescription)
  - : Ein String, der das [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) Attribut widerspiegelt, welches die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- [`Element.ariaBusy`](/de/docs/Web/API/Element/ariaBusy)
  - : Ein String, der das [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) Attribut widerspiegelt, welches angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Änderungen abgeschlossen sind, bevor sie dem Benutzer zur Verfügung gestellt werden.
- [`Element.ariaChecked`](/de/docs/Web/API/Element/ariaChecked)
  - : Ein String, der das [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) Attribut widerspiegelt, welches den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- [`Element.ariaColCount`](/de/docs/Web/API/Element/ariaColCount)
  - : Ein String, der das [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) Attribut widerspiegelt, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder Baumraster definiert.
- [`Element.ariaColIndex`](/de/docs/Web/API/Element/ariaColIndex)
  - : Ein String, der das [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) Attribut widerspiegelt, das den Spaltenindex oder die Position eines Elements in Bezug auf die Gesamtzahl der Spalten innerhalb einer Tabelle, eines Rasters oder Baumraster definiert.
- [`Element.ariaColIndexText`](/de/docs/Web/API/Element/ariaColIndexText)
  - : Ein String, der das [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) Attribut widerspiegelt, das einen menschenlesbaren Textalternative zu aria-colindex definiert.
- [`Element.ariaColSpan`](/de/docs/Web/API/Element/ariaColSpan)
  - : Ein String, der das [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) Attribut widerspiegelt, welches die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder Baumrasters überspannten Spalten definiert.
- [`Element.ariaCurrent`](/de/docs/Web/API/Element/ariaCurrent)
  - : Ein String, der das [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) Attribut widerspiegelt, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Gruppe von verwandten Elementen darstellt.
- [`Element.ariaDescription`](/de/docs/Web/API/Element/ariaDescription)
  - : Ein String, der das [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) Attribut widerspiegelt, welches einen Stringwert definiert, der das aktuelle Element beschreibt oder annotiert.
- [`Element.ariaDisabled`](/de/docs/Web/API/Element/ariaDisabled)
  - : Ein String, der das [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) Attribut widerspiegelt, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist, sodass es nicht bearbeitet oder anderweitig bedienbar ist.
- [`Element.ariaExpanded`](/de/docs/Web/API/Element/ariaExpanded)
  - : Ein String, der das [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) Attribut widerspiegelt, welches angibt, ob ein Gruppierungselement, das von diesem Element besessen oder kontrolliert wird, erweitert oder zusammengeklappt ist.
- [`Element.ariaHasPopup`](/de/docs/Web/API/Element/ariaHasPopup)
  - : Ein String, der das [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) Attribut widerspiegelt, welches die Verfügbarkeit und den Typ des interaktiven Popup-Elements, wie Menü oder Dialog, angibt, das durch ein Element ausgelöst werden kann.
- [`Element.ariaHidden`](/de/docs/Web/API/Element/ariaHidden)
  - : Ein String, der das [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) Attribut widerspiegelt, welches angibt, ob das Element einer Zugänglichkeitsschnittstelle ausgesetzt ist.
- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Ein String, der das [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) Attribut widerspiegelt, welches die Tastenkombinationen angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.
- [`Element.ariaLabel`](/de/docs/Web/API/Element/ariaLabel)
  - : Ein String, der das [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) Attribut widerspiegelt, welches einen Stringwert definiert, der das aktuelle Element bezeichnet.
- [`Element.ariaLevel`](/de/docs/Web/API/Element/ariaLevel)
  - : Ein String, der das [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) Attribut widerspiegelt, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- [`Element.ariaLive`](/de/docs/Web/API/Element/ariaLive)
  - : Ein String, der das [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) Attribut widerspiegelt, welches angibt, dass ein Element aktualisiert wird, und beschreibt die Arten von Aktualisierungen, die die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können.
- [`Element.ariaModal`](/de/docs/Web/API/Element/ariaModal)
  - : Ein String, der das [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) Attribut widerspiegelt, welches angibt, ob ein Element modal ist, wenn es angezeigt wird.
- [`Element.ariaMultiline`](/de/docs/Web/API/Element/ariaMultiline)
  - : Ein String, der das [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) Attribut widerspiegelt, welches angibt, ob ein Textfeld mehrere Eingabezeilen akzeptiert oder nur eine einzelne Zeile.
- [`Element.ariaMultiSelectable`](/de/docs/Web/API/Element/ariaMultiSelectable)
  - : Ein String, der das [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) Attribut widerspiegelt, welches angibt, dass der Benutzer mehr als ein Element aus den aktuellen auswählbaren Nachkommen auswählen kann.
- [`Element.ariaOrientation`](/de/docs/Web/API/Element/ariaOrientation)
  - : Ein String, der das [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) Attribut widerspiegelt, welches angibt, ob die Orientierung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- [`Element.ariaPlaceholder`](/de/docs/Web/API/Element/ariaPlaceholder)
  - : Ein String, der das [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) Attribut widerspiegelt, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerelement keinen Wert hat.
- [`Element.ariaPosInSet`](/de/docs/Web/API/Element/ariaPosInSet)
  - : Ein String, der das [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) Attribut widerspiegelt, welches die Nummer oder Position des Elements im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`Element.ariaPressed`](/de/docs/Web/API/Element/ariaPressed)
  - : Ein String, der das [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) Attribut widerspiegelt, welches den aktuellen "gedrückten" Zustand von Umschaltknöpfen angibt.
- [`Element.ariaReadOnly`](/de/docs/Web/API/Element/ariaReadOnly)
  - : Ein String, der das [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) Attribut widerspiegelt, welches angibt, dass das Element nicht bearbeitbar, aber anderweitig bedienbar ist.
- [`Element.ariaRelevant`](/de/docs/Web/API/Element/ariaRelevant) {{Non-standard_Inline}}
  - : Ein String, der das [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) Attribut widerspiegelt, welches angibt, welche Benachrichtigungen der Benutzeragent auslöst, wenn der Zugänglichkeitsbaum innerhalb einer Live-Region geändert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.
- [`Element.ariaRequired`](/de/docs/Web/API/Element/ariaRequired)
  - : Ein String, der das [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) Attribut widerspiegelt, welches angibt, dass Benutzereingaben erforderlich sind, bevor ein Formular eingereicht werden kann.
- [`Element.ariaRoleDescription`](/de/docs/Web/API/Element/ariaRoleDescription)
  - : Ein String, der das [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) Attribut widerspiegelt, welches eine menschenlesbare, vom Autor lokalisierte Beschreibung für die Rolle eines Elements definiert.
- [`Element.ariaRowCount`](/de/docs/Web/API/Element/ariaRowCount)
  - : Ein String, der das [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) Attribut widerspiegelt, welches die Gesamtanzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster definiert.
- [`Element.ariaRowIndex`](/de/docs/Web/API/Element/ariaRowIndex)
  - : Ein String, der das [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) Attribut widerspiegelt, welches den Zeilenindex oder die Position eines Elements in Bezug auf die Gesamtanzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- [`Element.ariaRowIndexText`](/de/docs/Web/API/Element/ariaRowIndexText)
  - : Ein String, der das [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) Attribut widerspiegelt, das eine menschenlesbare Textalternative zu aria-rowindex definiert.
- [`Element.ariaRowSpan`](/de/docs/Web/API/Element/ariaRowSpan)
  - : Ein String, der das [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) Attribut widerspiegelt, welches die Anzahl der von einer Zelle oder Rasterzelle innerhalb einer Tabelle, eines Rasters oder Baumrasters überspannten Zeilen definiert.
- [`Element.ariaSelected`](/de/docs/Web/API/Element/ariaSelected)
  - : Ein String, der das [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) Attribut widerspiegelt, welches den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- [`Element.ariaSetSize`](/de/docs/Web/API/Element/ariaSetSize)
  - : Ein String, der das [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) Attribut widerspiegelt, welches die Anzahl der Elemente im aktuellen Satz von Listenelementen oder Baumelementen definiert.
- [`Element.ariaSort`](/de/docs/Web/API/Element/ariaSort)
  - : Ein String, der das [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) Attribut widerspiegelt, welches angibt, ob die Elemente in einer Tabelle oder einem Raster in aufsteigender oder absteigender Reihenfolge sortiert sind.
- [`Element.ariaValueMax`](/de/docs/Web/API/Element/ariaValueMax)
  - : Ein String, der das [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) Attribut widerspiegelt, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueMin`](/de/docs/Web/API/Element/ariaValueMin)
  - : Ein String, der das [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) Attribut widerspiegelt, welches den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueNow`](/de/docs/Web/API/Element/ariaValueNow)
  - : Ein String, der das [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) Attribut widerspiegelt, welches den aktuellen Wert für ein Bereichs-Widget definiert.
- [`Element.ariaValueText`](/de/docs/Web/API/Element/ariaValueText)
  - : Ein String, der das [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) Attribut widerspiegelt, welches die menschenlesbare Textalternative zu aria-valuenow für ein Bereichs-Widget definiert.

## Instanz-Methoden

_`Element` erbt Methoden von seinen Eltern, [`Node`](/de/docs/Web/API/Node), und dem eigenen Eltern, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Element.after()`](/de/docs/Web/API/Element/after)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kind-Liste des Elternteils des `Element` ein, direkt nach dem `Element`.
- [`Element.animate()`](/de/docs/Web/API/Element/animate)
  - : Eine Kurzform-Methode, um eine Animation auf ein Element zu erstellen und auszuführen. Gibt das erstellte Animation-Objekt-Instanz zurück.
- [`Element.append()`](/de/docs/Web/API/Element/append)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings nach dem letzten Kind des Elements hinzu.
- [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
  - : Fügt dem angegebenen Element einen Schattenbaum hinzu und gibt eine Referenz auf deren [`ShadowRoot`](/de/docs/Web/API/ShadowRoot) zurück.
- [`Element.before()`](/de/docs/Web/API/Element/before)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings in die Kind-Liste des Elternteils des `Element` ein, direkt vor dem `Element`.
- [`Element.checkVisibility()`](/de/docs/Web/API/Element/checkVisibility)
  - : Gibt zurück, ob ein Element basierend auf konfigurierbaren Prüfungen voraussichtlich sichtbar ist oder nicht.
- [`Element.closest()`](/de/docs/Web/API/Element/closest)
  - : Gibt das `Element` zurück, welches der nächste Vorfahre des aktuellen Elements (oder das aktuelle Element selbst) ist, das die in Parameter gegebenen Selektoren erfüllt.
- [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap)
  - : Gibt eine [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, welche eine Alternative zu [`CSSStyleDeclaration`](/de/docs/Web/API/CSSStyleDeclaration) ist.
- [`Element.getAnimations()`](/de/docs/Web/API/Element/getAnimations)
  - : Gibt ein Array von Animation-Objekten zurück, die derzeit auf dem Element aktiv sind.
- [`Element.getAttribute()`](/de/docs/Web/API/Element/getAttribute)
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getAttributeNames()`](/de/docs/Web/API/Element/getAttributeNames)
  - : Gibt ein Array von Attributnamen des aktuellen Elements zurück.
- [`Element.getAttributeNode()`](/de/docs/Web/API/Element/getAttributeNode)
  - : Ruft die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNodeNS()`](/de/docs/Web/API/Element/getAttributeNodeNS)
  - : Ruft die Knotenrepräsentation des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten ab und gibt es als [`Attr`](/de/docs/Web/API/Attr) zurück.
- [`Element.getAttributeNS()`](/de/docs/Web/API/Element/getAttributeNS)
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Namen vom aktuellen Knoten ab und gibt ihn als String zurück.
- [`Element.getBoundingClientRect()`](/de/docs/Web/API/Element/getBoundingClientRect)
  - : Gibt die Größe eines Elements und seine Position relativ zur Ansicht zurück.
- [`Element.getBoxQuads()`](/de/docs/Web/API/Element/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad) Objekten zurück, die die CSS-Fragmente des Knotens darstellen.
- [`Element.getClientRects()`](/de/docs/Web/API/Element/getClientRects)
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Textzeile in einem Client anzeigen.
- [`Element.getElementsByClassName()`](/de/docs/Web/API/Element/getElementsByClassName)
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommen des aktuellen Elements enthält, die die in dem Parameter angegebene Liste von Klassen besitzen.
- [`Element.getElementsByTagName()`](/de/docs/Web/API/Element/getElementsByTagName)
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommenelemente mit einem bestimmten Tag-Namen des aktuellen Elements enthält.
- [`Element.getElementsByTagNameNS()`](/de/docs/Web/API/Element/getElementsByTagNameNS)
  - : Gibt eine Live-[`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück, die alle Nachkommenelemente mit einem bestimmten Tag-Namen und Namespace des aktuellen Elements enthält.
- [`Element.getHTML()`](/de/docs/Web/API/Element/getHTML)
  - : Gibt den DOM-Inhalt des Elements als HTML-String zurück, optional mit einbezogenem Schatten-DOM.
- [`Element.hasAttribute()`](/de/docs/Web/API/Element/hasAttribute)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut hat oder nicht.
- [`Element.hasAttributeNS()`](/de/docs/Web/API/Element/hasAttributeNS)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut im angegebenen Namespace hat oder nicht.
- [`Element.hasAttributes()`](/de/docs/Web/API/Element/hasAttributes)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das Element ein oder mehrere HTML-Attribute aufweist.
- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, Pointer-Capture für den durch die gegebene Pointer-ID identifizierten Zeiger besitzt.
- [`Element.insertAdjacentElement()`](/de/docs/Web/API/Element/insertAdjacentElement)
  - : Fügt ein gegebenes Elementknoten an einer bestimmten Position relativ zum Element ein, auf dem es aufgerufen wird.
- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
  - : Parst den Text als HTML oder XML und fügt die resultierenden Knoten in der angegebenen Position in den Baum ein.
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
  - : Fügt einen gegebenen Textknoten an einer bestimmten Position relativ zum Element ein, auf dem es aufgerufen wird.
- [`Element.matches()`](/de/docs/Web/API/Element/matches)
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das Element durch die angegebene Selektorenkette ausgewählt würde oder nicht.
- [`Element.prepend()`](/de/docs/Web/API/Element/prepend)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings vor dem ersten Kind des Elements hinzu.
- [`Element.querySelector()`](/de/docs/Web/API/Element/querySelector)
  - : Gibt den ersten [`Node`](/de/docs/Web/API/Node) zurück, der die angegebene Selektorenkette relativ zum Element erfüllt.
- [`Element.querySelectorAll()`](/de/docs/Web/API/Element/querySelectorAll)
  - : Gibt eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten zurück, die die angegebene Selektorenkette relativ zum Element erfüllen.
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
  - : Gibt Pointer-Capture frei (stoppt), die zuvor für ein bestimmtes [`PointerEvent`](/de/docs/Web/API/PointerEvent) gesetzt wurde.
- [`Element.remove()`](/de/docs/Web/API/Element/remove)
  - : Entfernt das Element aus der Kind-Liste seines Elternteils.
- [`Element.removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- [`Element.removeAttributeNode()`](/de/docs/Web/API/Element/removeAttributeNode)
  - : Entfernt die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten.
- [`Element.removeAttributeNS()`](/de/docs/Web/API/Element/removeAttributeNS)
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.replaceChildren()`](/de/docs/Web/API/Element/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines [`Node`](/de/docs/Web/API/Node) durch einen angegebenen neuen Satz von Kindern.
- [`Element.replaceWith()`](/de/docs/Web/API/Element/replaceWith)
  - : Ersetzt das Element in der Kind-Liste seines Elternteils durch eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings.
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
  - : Erlaubt es, den Browser asynchron zu bitten, das Element im Vollbildmodus anzuzeigen.
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
  - : Erlaubt es, asynchron um Sperrung des Zeigers auf dem angegebenen Element zu bitten.
- [`Element.scroll()`](/de/docs/Web/API/Element/scroll)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.scrollBy()`](/de/docs/Web/API/Element/scrollBy)
  - : Scrollt ein Element um den gegebenen Betrag.
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)
  - : Scrollt die Seite, bis das Element in den Sichtbereich kommt.
- [`Element.scrollIntoViewIfNeeded()`](/de/docs/Web/API/Element/scrollIntoViewIfNeeded) {{Non-standard_Inline}}
  - : Scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich nicht bereits innerhalb des sichtbaren Bereichs des Browserfensters befindet. **Verwenden Sie stattdessen die Standardmethode [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView).**
- [`Element.scrollTo()`](/de/docs/Web/API/Element/scrollTo)
  - : Scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.
- [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute)
  - : Setzt den Wert eines benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNode()`](/de/docs/Web/API/Element/setAttributeNode)
  - : Setzt die Knotenrepräsentation des benannten Attributs des aktuellen Knotens.
- [`Element.setAttributeNodeNS()`](/de/docs/Web/API/Element/setAttributeNodeNS)
  - : Setzt die Knotenrepräsentation des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.setAttributeNS()`](/de/docs/Web/API/Element/setAttributeNS)
  - : Setzt den Wert des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- [`Element.setCapture()`](/de/docs/Web/API/Element/setCapture) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Erfassung von Mausereignissen ein und leitet alle Mausereignisse an dieses Element weiter.
- [`Element.setHTMLUnsafe()`](/de/docs/Web/API/Element/setHTMLUnsafe)
  - : Parst einen String von HTML in ein Dokumentfragment, ohne Bereinigung, das dann das ursprüngliche Unterbaumodell des Elements im DOM ersetzt. Der HTML-String kann deklarative Schattenwurzeln enthalten, die als Vorlagelemente geparst würden, wenn das HTML mit [`Element.innerHTML`](#element.innerhtml) gesetzt würde.
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
  - : Bezeichnet ein bestimmtes Element als Ziel für zukünftige [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- [`Element.toggleAttribute()`](/de/docs/Web/API/Element/toggleAttribute)
  - : Schaltet ein boolesches Attribut um, indem es entfernt wird, wenn es vorhanden ist, und hinzugefügt wird, wenn es nicht vorhanden ist, auf dem angegebenen Element.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle:

- [`afterscriptexecute`](/de/docs/Web/API/Element/afterscriptexecute_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Skript ausgeführt wurde.
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
  - : Ausgelöst, wenn der Wert eines Eingabeelements kurz davor steht, geändert zu werden.
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event) {{Experimental_Inline}}
  - : Wird auf einem Element, das sich im [verborgenen Zustand bis gefunden](/de/docs/Web/HTML/Global_attributes/hidden) befindet, ausgelöst, wenn der Browser kurz davor steht, den Inhalt zu enthüllen, weil der Benutzer den Inhalt durch die "Finden auf Seite"-Funktion oder durch Fragmentnavigation gefunden hat.
- [`beforescriptexecute`](/de/docs/Web/API/Element/beforescriptexecute_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Skript kurz davor steht, ausgeführt zu werden.
- [`beforexrselect`](/de/docs/Web/API/Element/beforexrselect_event) {{Experimental_Inline}}
  - : Ausgelöst vor WebXR-Auswahlereignissen ([`select`](/de/docs/Web/API/XRSession/select_event), [`selectstart`](/de/docs/Web/API/XRSession/selectstart_event), [`selectend`](/de/docs/Web/API/XRSession/selectend_event)).
- [`contentvisibilityautostatechange`](/de/docs/Web/API/Element/contentvisibilityautostatechange_event)
  - : Wird auf einem beliebigen Element mit {{cssxref("content-visibility", "content-visibility: auto")}} ausgelöst, wenn es beginnt oder aufhört, [für den Benutzer relevant](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) zu sein und [seine Inhalte überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
  - : Ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- [`wheel`](/de/docs/Web/API/Element/wheel_event)
  - : Ausgelöst, wenn der Benutzer einen Radknopf an einem Zeigegerät (typischerweise einer Maus) dreht.

### Animationsereignisse

- [`animationcancel`](/de/docs/Web/API/Element/animationcancel_event)
  - : Ausgelöst, wenn eine Animation unerwartet abbricht.
- [`animationend`](/de/docs/Web/API/Element/animationend_event)
  - : Ausgelöst, wenn eine Animation normal abgeschlossen ist.
- [`animationiteration`](/de/docs/Web/API/Element/animationiteration_event)
  - : Ausgelöst, wenn eine Animationsiteration abgeschlossen ist.
- [`animationstart`](/de/docs/Web/API/Element/animationstart_event)
  - : Ausgelöst, wenn eine Animation beginnt.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Element/copy_event)
  - : Ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Element/cut_event)
  - : Ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Element/paste_event)
  - : Ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Kompositionsereignisse

- [`compositionend`](/de/docs/Web/API/Element/compositionend_event)
  - : Ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} die aktuelle Kompositionssitzung abschließt oder abbricht.
- [`compositionstart`](/de/docs/Web/API/Element/compositionstart_event)
  - : Ausgelöst, wenn ein Textkompositionssystem wie ein {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} eine neue Kompositionssitzung beginnt.
- [`compositionupdate`](/de/docs/Web/API/Element/compositionupdate_event)
  - : Ausgelöst, wenn ein neues Zeichen im Kontext einer Textkompositionssitzung empfangen wird, die von einem Textkompositionssystem wie einem {{Glossary("input_method_editor", "Eingabemethoden-Editor")}} gesteuert wird.

### Fokusereignisse

- [`blur`](/de/docs/Web/API/Element/blur_event)
  - : Ausgelöst, wenn ein Element den Fokus verloren hat.
- [`focus`](/de/docs/Web/API/Element/focus_event)
  - : Ausgelöst, wenn ein Element den Fokus erhalten hat.
- [`focusin`](/de/docs/Web/API/Element/focusin_event)
  - : Ausgelöst, wenn ein Element den Fokus erhalten hat, nach dem [`focus`](/de/docs/Web/API/Element/focus_event).
- [`focusout`](/de/docs/Web/API/Element/focusout_event)
  - : Ausgelöst, wenn ein Element den Fokus verloren hat, nach dem [`blur`](/de/docs/Web/API/Element/blur_event).

### Vollbildereignisse

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
  - : Wird an ein `Element` gesendet, wenn es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln.

### Tastaturereignisse

- [`keydown`](/de/docs/Web/API/Element/keydown_event)
  - : Ausgelöst, wenn eine Taste gedrückt wird.
- [`keypress`](/de/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
  - : Ausgelöst, wenn eine Taste gedrückt wird, die einen Zeichenwert erzeugt.
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
  - : Ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
  - : Ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (z.B. jede Maustaste außer der linken) auf einem Element gedrückt und losgelassen wird.
- [`click`](/de/docs/Web/API/Element/click_event)
  - : Ausgelöst, wenn eine Zeigegerätetaste (z.B. die primäre Maustaste) auf einem einzelnen Element gedrückt und losgelassen wird.
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
  - : Ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
  - : Ausgelöst, wenn eine Zeigegerätetaste (z.B. die primäre Maustaste) zweimal auf einem einzelnen Element geklickt wird.
- [`DOMActivate`](/de/docs/Web/API/Element/DOMActivate_event) {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, beispielsweise durch einen Mausklick oder einen Tastendruck.
- [`DOMMouseScroll`](/de/docs/Web/API/Element/DOMMouseScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn ein Mausrad oder ähnliches Gerät bedient wird und der akkumulierte Scrollbetrag seit dem letzten Ereignis mehr als eine Linie oder Seite beträgt.
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
  - : Ausgelöst, wenn eine Zeigegerätetaste auf einem Element gedrückt wird.
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
  - : Ausgelöst, wenn ein Zeigegerät (in der Regel eine Maus) über das Element bewegt wird, an dem der Listener angehängt ist.
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
  - : Ausgelöst, wenn der Zeiger eines Zeigegeräts (in der Regel eine Maus) aus einem Element heraus bewegt wird, an dem der Listener angehängt ist.
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
  - : Ausgelöst, wenn ein Zeigegerät (in der Regel eine Maus) über ein Element bewegt wird.
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
  - : Ausgelöst, wenn ein Zeigegerät (in der Regel eine Maus) aus dem Element bewegt wird, an dem der Listener angehängt ist, oder aus einem seiner Kinder.
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
  - : Ausgelöst, wenn ein Zeigegerät auf das Element bewegt wird, an dem der Listener angehängt ist, oder auf eines seiner Kinder.
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
  - : Ausgelöst, wenn eine Zeigegerätetaste auf einem Element losgelassen wird.
- [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Mausrad oder ähnliches Gerät bedient wird.
- [`MozMousePixelScroll`](/de/docs/Web/API/Element/MozMousePixelScroll_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Ausgelöst, wenn ein Mausrad oder ähnliches Gerät bedient wird.
- [`webkitmouseforcechanged`](/de/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der Druck auf dem Trackpad ändert.
- [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
  - : Wird nach dem Mousedown-Ereignis ausgelöst, sobald ausreichend Druck ausgeübt wurde, um als "force click" zu gelten.
- [`webkitmouseforcewillbegin`](/de/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
  - : Wird vor dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Ereignis ausgelöst.
- [`webkitmouseforceup`](/de/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
  - : Wird nach dem [`webkitmouseforcedown`](/de/docs/Web/API/Element/webkitmouseforcedown_event) Ereignis ausgelöst, sobald der Druck ausreichend reduziert wurde, um den "force click" zu beenden.

### Zeigerereignisse

- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Ausgelöst, wenn ein Element einen Zeiger mit [`setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture) erfasst.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Ausgelöst, wenn ein [erfasster Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ausgelöst, wenn ein Zeigerereignis abgebrochen wird.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Ausgelöst, wenn ein Zeiger aktiv wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Ausgelöst, wenn ein Zeiger in die Treffertest-Grenzen eines Elements oder eines seiner Nachkommen eintritt.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Ausgelöst, wenn ein Zeiger die Treffertest-Grenzen eines Elements verlässt.
- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Ausgelöst, wenn ein Zeiger die Koordinaten ändert.
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Ausgelöst, wenn ein Zeiger die _Treffertest_-Grenzen eines Elements verlässt (unter anderem).
- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Ausgelöst, wenn ein Zeiger in die Treffertest-Grenzen eines Elements eintritt.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Zeiger irgendwelche Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Scroll-Ereignisse

- [`scroll`](/de/docs/Web/API/Element/scroll_event)
  - : Ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
  - : Wird ausgelöst, wenn die Sicht der Dokumentansicht den Bildlauf abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Element/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Bildlauf-Container am Ende des Bildlaufs ausgelöst, wenn ein neues Bildschnapper-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Element/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Bildlauf-Container ausgelöst, wenn der Browser feststellt, dass ein neuer Bildverschlussleck-Ziel ansteht, d. h. es wird ausgewählt, wenn die aktuelle Bildlaufgeste endet.

### Berührungsereignisse

- [`gesturechange`](/de/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn sich die Finger während einer Berührungsgeste bewegen.
- [`gestureend`](/de/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn nicht mehr mehrere Finger den Berührungsbildschirm berühren und die Geste endet.
- [`gesturestart`](/de/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
  - : Ausgelöst, wenn mehrere Finger den Berührungsbildschirm berühren und eine neue Geste beginnt.
- [`touchcancel`](/de/docs/Web/API/Element/touchcancel_event)
  - : Ausgelöst, wenn einer oder mehrere Berührungspunkte auf eine implementierungsspezifische Weise gestört wurden (zum Beispiel, wenn zu viele Berührungspunkte erzeugt werden).
- [`touchend`](/de/docs/Web/API/Element/touchend_event)
  - : Ausgelöst, wenn einer oder mehrere Berührungspunkte vom Berührungsbildschirm entfernt werden.
- [`touchmove`](/de/docs/Web/API/Element/touchmove_event)
  - : Ausgelöst, wenn einer oder mehrere Berührungspunkte über den Berührungsbildschirm bewegt werden.
- [`touchstart`](/de/docs/Web/API/Element/touchstart_event)
  - : Ausgelöst, wenn einer oder mehrere Berührungspunkte auf den Berührungsbildschirm gesetzt werden.

### Übergangsereignisse

- [`transitioncancel`](/de/docs/Web/API/Element/transitioncancel_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- [`transitionend`](/de/docs/Web/API/Element/transitionend_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) das Abspielen beendet hat.
- [`transitionrun`](/de/docs/Web/API/Element/transitionrun_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h. wenn er zu einem Satz von laufenden Übergängen hinzugefügt wird), jedoch nicht unbedingt gestartet hat.
- [`transitionstart`](/de/docs/Web/API/Element/transitionstart_event)
  - : Ein [`Event`](/de/docs/Web/API/Event), das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) begonnen hat.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
