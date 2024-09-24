---
title: Element
slug: Web/API/Element
l10n:
  sourceCommit: c640274a19227cd5790912ea76841732baa6731f
---

{{APIRef("DOM")}}

**`Element`** ist die allgemeinste Basisklasse, von der alle Elementobjekte (d.h. Objekte, die Elemente repräsentieren) in einem {{DOMxRef("Document")}} erben. Sie besitzt nur Methoden und Eigenschaften, die allen Arten von Elementen gemeinsam sind. Spezifischere Klassen erben von `Element`.

Zum Beispiel ist das {{DOMxRef("HTMLElement")}}-Interface das Basisinterface für HTML-Elemente. Ähnlich ist das {{DOMxRef("SVGElement")}}-Interface die Grundlage für alle SVG-Elemente und das {{DOMxRef("MathMLElement")}}-Interface das Basisinterface für MathML-Elemente. Die meisten Funktionalitäten sind weiter unten in der Klassenhierarchie spezifiziert.

Sprachen außerhalb des Bereichs der Webplattform, wie XUL durch das `XULElement`-Interface, implementieren ebenfalls `Element`.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`Element` erbt Eigenschaften von seinem Eltern-Interface, {{DOMxRef("Node")}}, und damit von dem Eltern-Interface dieses Interfaces, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Element.assignedSlot")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("HTMLSlotElement")}} zurück, das den {{htmlelement("slot")}} repräsentiert, in dem der Knoten eingefügt ist.
- {{DOMxRef("Element.attributes")}} {{ReadOnlyInline}}
  - : Gibt ein {{DOMxRef("NamedNodeMap")}}-Objekt zurück, das die zugewiesenen Attribute des entsprechenden HTML-Elements enthält.
- {{domxref("Element.childElementCount")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kind-Elemente dieses Elements zurück.
- {{domxref("Element.children")}} {{ReadOnlyInline}}
  - : Gibt die Kind-Elemente dieses Elements zurück.
- {{DOMxRef("Element.classList")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("DOMTokenList")}} zurück, die die Liste der Klasseneigenschaften enthält.
- {{DOMxRef("Element.className")}}
  - : Ein String, der die Klasse des Elements repräsentiert.
- {{DOMxRef("Element.clientHeight")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Höhe des Elements repräsentiert.
- {{DOMxRef("Element.clientLeft")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des linken Randes des Elements repräsentiert.
- {{DOMxRef("Element.clientTop")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Breite des oberen Randes des Elements repräsentiert.
- {{DOMxRef("Element.clientWidth")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die innere Breite des Elements repräsentiert.
- {{DOMxRef("Element.currentCSSZoom")}} {{ReadOnlyInline}}
  - : Eine Zahl, die die effektive Zoomgröße des Elements angibt, oder 1.0, wenn das Element nicht gerendert wird.
- {{DOMxRef("Element.elementTiming")}} {{Experimental_Inline}}
  - : Ein String, der das Attribut [`elementtiming`](/de/docs/Web/HTML/Attributes/elementtiming) widerspiegelt, welches ein Element zur Beobachtung in der {{domxref("PerformanceElementTiming")}}-API markiert.
- {{domxref("Element.firstElementChild")}} {{ReadOnlyInline}}
  - : Gibt das erste Kind-Element dieses Elements zurück.
- {{DOMxRef("Element.id")}}
  - : Ein String, der die ID des Elements repräsentiert.
- {{DOMxRef("Element.innerHTML")}}
  - : Ein String, der das Markup des Inhalts des Elements repräsentiert.
- {{domxref("Element.lastElementChild")}} {{ReadOnlyInline}}
  - : Gibt das letzte Kind-Element dieses Elements zurück.
- {{DOMxRef("Element.localName")}} {{ReadOnlyInline}}
  - : Ein String, der den lokalen Teil des qualifizierten Namens des Elements repräsentiert.
- {{DOMxRef("Element.namespaceURI")}} {{ReadOnlyInline}}

  - : Der Namensraum-URI des Elements oder `null`, wenn es keinen Namensraum gibt.

    > [!NOTE]
    > In Firefox 3.5 und früher sind HTML-Elemente in keinem Namensraum. In späteren Versionen befinden sich HTML-Elemente im [`http://www.w3.org/1999/xhtml`](https://www.w3.org/1999/xhtml/)-Namensraum sowohl in HTML- als auch in XML-Bäumen.

- {{DOMxRef("Element.nextElementSibling")}} {{ReadOnlyInline}}
  - : Ein `Element`, das Element unmittelbar hinter dem angegebenen im Baum, oder `null`, wenn es keinen Geschwisterknoten gibt.
- {{DOMxRef("Element.outerHTML")}}
  - : Ein String, der das Markup des Elements einschließlich seines Inhalts repräsentiert. Wird es als Setter verwendet, ersetzt es das Element durch Knoten, die aus dem übergebenen String geparst wurden.
- {{DOMxRef("Element.part")}}
  - : Repräsentiert die Part-Identifier des Elements (d.h. mit dem `part`-Attribut gesetzt), die als {{domxref("DOMTokenList")}} zurückgegeben werden.
- {{DOMxRef("Element.prefix")}} {{ReadOnlyInline}}
  - : Ein String, der das Namespace-Prefix des Elements repräsentiert, oder `null`, wenn kein Prefix angegeben ist.
- {{DOMxRef("Element.previousElementSibling")}} {{ReadOnlyInline}}
  - : Ein `Element`, das Element unmittelbar vor dem angegebenen im Baum, oder `null`, wenn es kein Geschwister-Element gibt.
- {{DOMxRef("Element.scrollHeight")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtshöhe eines Elements repräsentiert.
- {{DOMxRef("Element.scrollLeft")}}
  - : Eine Zahl, die den linken Scroll-Offset des Elements repräsentiert.
- {{DOMxRef("Element.scrollLeftMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximal möglichen linken Scroll-Offset des Elements repräsentiert.
- {{DOMxRef("Element.scrollTop")}}
  - : Eine Zahl, die die Anzahl der Pixel repräsentiert, um die der obere Teil des Elements vertikal gescrollt wird.
- {{DOMxRef("Element.scrollTopMax")}} {{Non-standard_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die den maximalen oberen Scroll-Offset des Elements repräsentiert.
- {{DOMxRef("Element.scrollWidth")}} {{ReadOnlyInline}}
  - : Gibt eine Zahl zurück, die die Scrollansichtsbreite eines Elements repräsentiert.
- {{DOMxRef("Element.shadowRoot")}} {{ReadOnlyInline}}
  - : Gibt das offene Shadow-Root zurück, das von dem Element gehostet wird, oder null, wenn kein offenes Shadow-Root vorhanden ist.
- {{DOMxRef("Element.slot")}}
  - : Gibt den Namen des Shadow-DOM-Slots zurück, in den das Element eingefügt ist.
- {{DOMxRef("Element.tagName")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der den Namen des Tags für das angegebene Element enthält.

### Instanz-Eigenschaften enthalten von ARIA

_Das `Element`-Interface enthält auch die folgenden Eigenschaften._

- {{domxref("Element.ariaAtomic")}}
  - : Ein String, der das Attribut [`aria-atomic`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) widerspiegelt, welches angibt, ob unterstützende Technologien alle oder nur Teile der geänderten Region basierend auf den Änderungsbenachrichtigungen, die durch das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) definiert sind, präsentieren.
- {{domxref("Element.ariaAutoComplete")}}
  - : Ein String, der das Attribut [`aria-autocomplete`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-autocomplete) widerspiegelt, welches angibt, ob die Eingabe von Text die Anzeige von einer oder mehreren Vorhersagen des vom Benutzer beabsichtigten Werts für eine Kombinationsbox, Suchfeld oder Textbox auslösen könnte und wie Vorhersagen präsentiert würden, falls sie gemacht wurden.
- {{domxref("Element.ariaBrailleLabel")}}
  - : Ein String, der das Attribut [`aria-braillelabel`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-braillelabel) widerspiegelt, welches das Braille-Label des Elements definiert.
- {{domxref("Element.ariaBrailleRoleDescription")}}
  - : Ein String, der das Attribut [`aria-brailleroledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-brailleroledescription) widerspiegelt, welches die ARIA-Braille-Rollenbeschreibung des Elements definiert.
- {{domxref("Element.ariaBusy")}}
  - : Ein String, der das Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-busy) widerspiegelt, welches angibt, ob ein Element modifiziert wird, da unterstützende Technologien möglicherweise warten möchten, bis die Modifikationen abgeschlossen sind, bevor sie dem Benutzer offengelegt werden.
- {{domxref("Element.ariaChecked")}}
  - : Ein String, der das Attribut [`aria-checked`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-checked) widerspiegelt, welches den aktuellen "geprüften" Zustand von Kontrollkästchen, Optionsfeldern und anderen Widgets angibt, die einen geprüften Zustand haben.
- {{domxref("Element.ariaColCount")}}
  - : Ein String, der das Attribut [`aria-colcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colcount) widerspiegelt, welches die Anzahl der Spalten in einer Tabelle, einem Raster oder Baumraster definiert.
- {{domxref("Element.ariaColIndex")}}
  - : Ein String, der das Attribut [`aria-colindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindex) widerspiegelt, welches den Spaltenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Spalten innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- {{domxref("Element.ariaColIndexText")}}
  - : Ein String, der das Attribut [`aria-colindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colindextext) widerspiegelt, welches eine menschenlesbare Textalternative von aria-colindex definiert.
- {{domxref("Element.ariaColSpan")}}
  - : Ein String, der das Attribut [`aria-colspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-colspan) widerspiegelt, welches die Anzahl der Spalten definiert, die von einer Zelle oder einem Rasterkästchen innerhalb einer Tabelle, einem Raster oder Baumraster überspannt werden.
- {{domxref("Element.ariaCurrent")}}
  - : Ein String, der das Attribut [`aria-current`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-current) widerspiegelt, welches das Element angibt, das das aktuelle Element innerhalb eines Containers oder einer Menge verwandter Elemente repräsentiert.
- {{domxref("Element.ariaDescription")}}
  - : Ein String, der das Attribut [`aria-description`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-description) widerspiegelt, welches einen String-Wert definiert, der das aktuelle Element beschreibt oder annotiert.
- {{domxref("Element.ariaDisabled")}}
  - : Ein String, der das Attribut [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-disabled) widerspiegelt, welches angibt, dass das Element wahrnehmbar, aber deaktiviert ist und daher nicht bearbeitet oder anderweitig bedienbar ist.
- {{domxref("Element.ariaExpanded")}}
  - : Ein String, der das Attribut [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-expanded) widerspiegelt, welches angibt, ob ein von diesem Element besessenes oder kontrolliertes Gruppierungselement erweitert oder eingeklappt ist.
- {{domxref("Element.ariaHasPopup")}}
  - : Ein String, der das Attribut [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-haspopup) widerspiegelt, welches die Verfügbarkeit und den Typ eines interaktiven Popup-Elements wie Menü oder Dialog angibt, das von einem Element ausgelöst werden kann.
- {{domxref("Element.ariaHidden")}}
  - : Ein String, der das Attribut [`aria-hidden`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-hidden) widerspiegelt, welches angibt, ob das Element einer Zugänglichkeits-API ausgesetzt ist.
- {{domxref("Element.ariaKeyShortcuts")}}
  - : Ein String, der das Attribut [`aria-keyshortcuts`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts) widerspiegelt, welches Tastenkombinationen angibt, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.
- {{domxref("Element.ariaLabel")}}
  - : Ein String, der das Attribut [`aria-label`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-label) widerspiegelt, welches einen String-Wert definiert, der das aktuelle Element kennzeichnet.
- {{domxref("Element.ariaLevel")}}
  - : Ein String, der das Attribut [`aria-level`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-level) widerspiegelt, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.
- {{domxref("Element.ariaLive")}}
  - : Ein String, der das Attribut [`aria-live`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-live) widerspiegelt, welches angibt, dass ein Element aktualisiert wird und beschreibt, welche Arten von Aktualisierungen die Benutzeragenten, unterstützende Technologien und Benutzer von der Live-Region erwarten können.
- {{domxref("Element.ariaModal")}}
  - : Ein String, der das Attribut [`aria-modal`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-modal) widerspiegelt, welches angibt, ob ein Element modal ist, wenn es angezeigt wird.
- {{domxref("Element.ariaMultiline")}}
  - : Ein String, der das Attribut [`aria-multiline`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiline) widerspiegelt, welches angibt, ob eine Textbox mehrere Zeilen der Eingabe oder nur eine einzige Zeile akzeptiert.
- {{domxref("Element.ariaMultiSelectable")}}
  - : Ein String, der das Attribut [`aria-multiselectable`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-multiselectable) widerspiegelt, welches angibt, dass der Benutzer mehr als ein Element von den aktuellen auswählbaren Nachfahren auswählen kann.
- {{domxref("Element.ariaOrientation")}}
  - : Ein String, der das Attribut [`aria-orientation`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-orientation) widerspiegelt, welches angibt, ob die Ausrichtung des Elements horizontal, vertikal oder unbekannt/mehrdeutig ist.
- {{domxref("Element.ariaPlaceholder")}}
  - : Ein String, der das Attribut [`aria-placeholder`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-placeholder) widerspiegelt, welches einen kurzen Hinweis definiert, der dem Benutzer bei der Dateneingabe helfen soll, wenn das Steuerungsfeld keinen Wert hat.
- {{domxref("Element.ariaPosInSet")}}
  - : Ein String, der das Attribut [`aria-posinset`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-posinset) widerspiegelt, welches die Nummer oder Position eines Elements innerhalb der aktuellen Menge von Listenelementen oder Baumelementen definiert.
- {{domxref("Element.ariaPressed")}}
  - : Ein String, der das Attribut [`aria-pressed`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-pressed) widerspiegelt, welches den aktuellen "gedrückten" Zustand von Umschaltknöpfen angibt.
- {{domxref("Element.ariaReadOnly")}}
  - : Ein String, der das Attribut [`aria-readonly`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-readonly) widerspiegelt, welches angibt, dass das Element nicht bearbeitbar ist, aber dennoch bedient werden kann.
- {{domxref("Element.ariaRelevant")}} {{Non-standard_Inline}}
  - : Ein String, der das Attribut [`aria-relevant`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-relevant) widerspiegelt, welches angibt, welche Benachrichtigungen der Benutzeragent auslösen wird, wenn der Zugänglichkeitsbaum innerhalb einer Live-Region modifiziert wird. Dies wird verwendet, um zu beschreiben, welche Änderungen in einer `aria-live`-Region relevant sind und angekündigt werden sollten.
- {{domxref("Element.ariaRequired")}}
  - : Ein String, der das Attribut [`aria-required`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-required) widerspiegelt, welches angibt, dass Benutzereingaben auf dem Element erforderlich sind, bevor ein Formular eingereicht werden kann.
- {{domxref("Element.ariaRoleDescription")}}
  - : Ein String, der das Attribut [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-roledescription) widerspiegelt, welches eine menschenlesbare, autor-lokalisierte Beschreibung der Rolle eines Elements definiert.
- {{domxref("Element.ariaRowCount")}}
  - : Ein String, der das Attribut [`aria-rowcount`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowcount) widerspiegelt, welches die Gesamtzahl der Zeilen in einer Tabelle, einem Raster oder Baumraster definiert.
- {{domxref("Element.ariaRowIndex")}}
  - : Ein String, der das Attribut [`aria-rowindex`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindex) widerspiegelt, welches den Zeilenindex oder die Position eines Elements im Verhältnis zur Gesamtzahl der Zeilen innerhalb einer Tabelle, eines Rasters oder Baumrasters definiert.
- {{domxref("Element.ariaRowIndexText")}}
  - : Ein String, der das Attribut [`aria-rowindextext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowindextext) widerspiegelt, welches eine menschenlesbare Textalternative von aria-rowindex definiert.
- {{domxref("Element.ariaRowSpan")}}
  - : Ein String, der das Attribut [`aria-rowspan`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-rowspan) widerspiegelt, welches die Anzahl der Zeilen definiert, die von einer Zelle oder einem Rasterkästchen innerhalb einer Tabelle, einem Raster oder Baumraster überspannt werden.
- {{domxref("Element.ariaSelected")}}
  - : Ein String, der das Attribut [`aria-selected`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-selected) widerspiegelt, welches den aktuellen "ausgewählten" Zustand von Elementen angibt, die einen ausgewählten Zustand haben.
- {{domxref("Element.ariaSetSize")}}
  - : Ein String, der das Attribut [`aria-setsize`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-setsize) widerspiegelt, welches die Anzahl der Elemente in der aktuellen Menge von Listenelementen oder Baumelementen definiert.
- {{domxref("Element.ariaSort")}}
  - : Ein String, der das Attribut [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-sort) widerspiegelt, welches angibt, ob Elemente in einer Tabelle oder einem Raster aufsteigend oder absteigend sortiert sind.
- {{domxref("Element.ariaValueMax")}}
  - : Ein String, der das Attribut [`aria-valueMax`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemax) widerspiegelt, welches den maximal zulässigen Wert für ein Bereichs-Widget definiert.
- {{domxref("Element.ariaValueMin")}}
  - : Ein String, der das Attribut [`aria-valueMin`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuemin) widerspiegelt, welches den minimal zulässigen Wert für ein Bereichs-Widget definiert.
- {{domxref("Element.ariaValueNow")}}
  - : Ein String, der das Attribut [`aria-valueNow`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuenow) widerspiegelt, welches den aktuellen Wert für ein Bereichs-Widget definiert.
- {{domxref("Element.ariaValueText")}}
  - : Ein String, der das Attribut [`aria-valuetext`](/de/docs/Web/Accessibility/ARIA/Attributes/aria-valuetext) widerspiegelt, welches die menschenlesbare Textalternative von aria-valuenow für ein Bereichs-Widget definiert.

## Instanz-Methoden

_`Element` erbt Methoden von seinen Eltern {{DOMxRef("Node")}} und dessen eigenem Eltern-Interface, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Element.after()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt nach dem `Element`.
- {{DOMxRef("Element.animate()")}}
  - : Eine Kurzbefehlsmethode zum Erstellen und Ausführen einer Animation auf einem Element. Gibt die erstellte Animation-Objektinstanz zurück.
- {{DOMxRef("Element.append()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Strings nach dem letzten Kind des Elements ein.
- {{DOMxRef("Element.attachShadow()")}}
  - : Verknüpft einen Shadow-DOM-Baum mit dem angegebenen Element und gibt eine Referenz auf dessen {{DOMxRef("ShadowRoot")}} zurück.
- {{DOMxRef("Element.before()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Strings in die Kinderliste des Elternteils des `Element` ein, direkt vor dem `Element`.
- {{DOMxRef("Element.checkVisibility()")}}
  - : Gibt zurück, ob ein Element basierend auf konfigurierbaren Überprüfungen sichtbar erwartet wird oder nicht.
- {{DOMxRef("Element.closest()")}}
  - : Gibt das `Element` zurück, das der nächste Vorfahre des aktuellen Elements (oder das aktuelle Element selbst) ist, das die im Parameter angegebenen Selektoren erfüllt.
- {{DOMxRef("Element.computedStyleMap()")}}
  - : Gibt eine {{DOMxRef("StylePropertyMapReadOnly")}}-Schnittstelle zurück, die eine schreibgeschützte Darstellung eines CSS-Deklarationsblocks bietet, der eine Alternative zur {{DOMxRef("CSSStyleDeclaration")}} ist.
- {{DOMxRef("Element.getAnimations()")}}
  - : Gibt ein Array von derzeit aktiven Animation-Objekten auf dem Element zurück.
- {{DOMxRef("Element.getAttribute()")}}
  - : Ruft den Wert des benannten Attributs vom aktuellen Knoten ab und gibt ihn als String zurück.
- {{DOMxRef("Element.getAttributeNames()")}}
  - : Gibt ein Array von Attributnamen des aktuellen Elements zurück.
- {{DOMxRef("Element.getAttributeNode()")}}
  - : Ruft die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten ab und gibt sie als {{DOMxRef("Attr")}} zurück.
- {{DOMxRef("Element.getAttributeNodeNS()")}}
  - : Ruft die Knotenrepräsentation des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten ab und gibt sie als {{DOMxRef("Attr")}} zurück.
- {{DOMxRef("Element.getAttributeNS()")}}
  - : Ruft den Wert des Attributs mit dem angegebenen Namespace und Name vom aktuellen Knoten ab und gibt ihn als String zurück.
- {{DOMxRef("Element.getBoundingClientRect()")}}
  - : Gibt die Größe eines Elements und seine Position relativ zum Viewport zurück.
- {{domxref("Element.getBoxQuads()")}} {{Experimental_Inline}}
  - : Gibt eine Liste von {{domxref("DOMQuad")}}-Objekten zurück, die die CSS-Fragmente des Knotens repräsentieren.
- {{DOMxRef("Element.getClientRects()")}}
  - : Gibt eine Sammlung von Rechtecken zurück, die die Begrenzungsrechtecke für jede Zeile Text in einem Client anzeigen.
- {{DOMxRef("Element.getElementsByClassName()")}}
  - : Gibt eine Live-{{DOMxRef("HTMLCollection")}} zurück, die alle Nachfahren des aktuellen Elements enthält, die die im Parameter angegebene Klassenliste besitzen.
- {{DOMxRef("Element.getElementsByTagName()")}}
  - : Gibt eine Live-{{DOMxRef("HTMLCollection")}} zurück, die alle Nachfahrelemente eines bestimmten Tag-Namens vom aktuellen Element enthält.
- {{DOMxRef("Element.getElementsByTagNameNS()")}}
  - : Gibt eine Live-{{DOMxRef("HTMLCollection")}} zurück, die alle Nachfahrelemente eines bestimmten Tag-Namens und Namespaces vom aktuellen Element enthält.
- {{DOMxRef("Element.getHTML()")}}
  - : Gibt den DOM-Inhalt des Elements als HTML-String zurück, optional einschließlich jeglichen Shadow-DOMs.
- {{DOMxRef("Element.hasAttribute()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut hat oder nicht.
- {{DOMxRef("Element.hasAttributeNS()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element das angegebene Attribut im angegebenen Namespace hat oder nicht.
- {{DOMxRef("Element.hasAttributes()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Element eines oder mehrere HTML-Attribute hat.
- {{DOMxRef("Element.hasPointerCapture()")}}
  - : Gibt an, ob das Element, auf dem es aufgerufen wird, die Zeigererfassung für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.
- {{DOMxRef("Element.insertAdjacentElement()")}}
  - : Fügt ein gegebenes Elementknoten an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- {{DOMxRef("Element.insertAdjacentHTML()")}}
  - : Parst den Text als HTML oder XML und fügt die resultierenden Knoten in der angegebenen Position in den Baum ein.
- {{DOMxRef("Element.insertAdjacentText()")}}
  - : Fügt einen gegebenen Textknoten an einer gegebenen Position relativ zu dem Element ein, auf dem es aufgerufen wird.
- {{DOMxRef("Element.matches()")}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Element durch den angegebenen Selektor-String ausgewählt würde oder nicht.
- {{DOMxRef("Element.prepend()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Strings vor dem ersten Kind des Elements ein.
- {{DOMxRef("Element.querySelector()")}}
  - : Gibt den ersten {{DOMxRef("Node")}} zurück, der dem angegebenen Selektor-String relativ zum Element entspricht.
- {{DOMxRef("Element.querySelectorAll()")}}
  - : Gibt eine {{DOMxRef("NodeList")}} von Knoten zurück, die dem angegebenen Selektor-String relativ zum Element entsprechen.
- {{DOMxRef("Element.releasePointerCapture()")}}
  - : Beendet die Zeigererfassung, die zuvor für ein bestimmtes {{DOMxRef("PointerEvent")}} festgelegt wurde.
- {{DOMxRef("Element.remove()")}}
  - : Entfernt das Element aus der Kinderliste seines Elternteils.
- {{DOMxRef("Element.removeAttribute()")}}
  - : Entfernt das benannte Attribut vom aktuellen Knoten.
- {{DOMxRef("Element.removeAttributeNode()")}}
  - : Entfernt die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten.
- {{DOMxRef("Element.removeAttributeNS()")}}
  - : Entfernt das Attribut mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- {{DOMxRef("Element.replaceChildren()")}}
  - : Ersetzt die bestehenden Kinder eines {{domxref("Node")}} durch eine bestimmte neue Menge von Kindern.
- {{DOMxRef("Element.replaceWith()")}}
  - : Ersetzt das Element in der Kinderliste seines Elternteils durch eine Menge von {{domxref("Node")}}-Objekten oder Strings.
- {{DOMxRef("Element.requestFullscreen()")}}
  - : Fordert asynchron den Browser auf, das Element in den Vollbildmodus zu versetzen.
- {{DOMxRef("Element.requestPointerLock()")}}
  - : Ermöglicht es, asynchron zu verlangen, dass der Zeiger auf das gegebene Element gesperrt wird.
- {{domxref("Element.scroll()")}}
  - : Scrolled zu einem bestimmten Satz von Koordinaten innerhalb eines angegebenen Elements.
- {{domxref("Element.scrollBy()")}}
  - : Scrolled ein Element um den gegebenen Betrag.
- {{DOMxRef("Element.scrollIntoView()")}}
  - : Scrolled die Seite, bis das Element in den Sichtbereich gelangt.
- {{DOMxRef("Element.scrollIntoViewIfNeeded()")}} {{Non-standard_Inline}}
  - : Scrolled das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich nicht bereits innerhalb des sichtbaren Bereichs des Browserfensters befindet. **Verwenden Sie stattdessen den Standard {{DOMxRef("Element.scrollIntoView()")}}.**
- {{domxref("Element.scrollTo()")}}
  - : Scrolled zu einem bestimmten Satz von Koordinaten innerhalb eines angegebenen Elements.
- {{DOMxRef("Element.setAttribute()")}}
  - : Setzt den Wert eines benannten Attributs des aktuellen Knotens.
- {{DOMxRef("Element.setAttributeNode()")}}
  - : Setzt die Knotenrepräsentation des benannten Attributs vom aktuellen Knoten.
- {{DOMxRef("Element.setAttributeNodeNS()")}}
  - : Setzt die Knotenrepräsentation des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- {{DOMxRef("Element.setAttributeNS()")}}
  - : Setzt den Wert des Attributs mit dem angegebenen Namen und Namespace vom aktuellen Knoten.
- {{DOMxRef("Element.setCapture()")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Richtet die Mausereigniserfassung ein, leitet alle Mausereignisse auf dieses Element um.
- {{DOMxRef("Element.setHTMLUnsafe()")}}
  - : Parst einen HTML-String in ein Dokumentfragment, ohne ihn zu bereinigen, welches dann den ursprünglichen Unterbaum des Elements im DOM ersetzt. Der HTML-String kann deklarative Schattenwurzeln enthalten, die als Template-Elemente geparst werden, wenn das HTML mit [`Element.innerHTML`](#element.innerhtml) gesetzt wurde.
- {{DOMxRef("Element.setPointerCapture()")}}
  - : Bezeichnet ein bestimmtes Element als das Ziel der Erfassung zukünftiger [Zeigerereignisse](/de/docs/Web/API/Pointer_events).
- {{DOMxRef("Element.toggleAttribute()")}}
  - : Schaltet ein boolesches Attribut um, entfernt es, wenn es vorhanden ist, und fügt es hinzu, wenn es nicht vorhanden ist, auf dem angegebenen Element.

## Ereignisse

Hören Sie auf diese Ereignisse mit `addEventListener()` oder indem Sie einen Ereignis-Listener zu der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- {{domxref("Element/afterscriptexecute_event","afterscriptexecute")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Skript ausgeführt wurde.
- {{domxref("Element/beforeinput_event", "beforeinput")}}
  - : Wird ausgelöst, wenn der Wert eines Eingabeelements geändert werden soll.
- {{domxref("Element/beforematch_event", "beforematch")}} {{Experimental_Inline}}
  - : Wird an einem Element ausgelöst, das sich im [_versteckt, bis gefunden_](/de/docs/Web/HTML/Global_attributes/hidden)-Zustand befindet, wenn der Browser im Begriff ist, seinen Inhalt offen zu legen, weil der Benutzer den Inhalt durch die "Seite durchsuchen"-Funktion oder durch Fragmentnavigation gefunden hat.
- {{domxref("Element/beforescriptexecute_event","beforescriptexecute")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Skript unmittelbar vor der Ausführung steht.
- {{domxref("Element/beforexrselect_event", "beforexrselect")}} {{Experimental_Inline}}
  - : Wird vor WebXR-Auswahlereignissen ({{domxref("XRSession/select_event", "select")}}, {{domxref("XRSession/selectstart_event", "selectstart")}}, {{domxref("XRSession/selectend_event", "selectend")}}) ausgelöst.
- {{domxref("Element/contentvisibilityautostatechange_event", "contentvisibilityautostatechange")}}
  - : Wird an jedem Element ausgelöst, das {{cssxref("content-visibility", "content-visibility: auto")}} gesetzt hat, wenn es anfängt oder aufhört für den Benutzer [relevant zu sein](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#relevant_to_the_user) und [seinen Inhalt überspringt](/de/docs/Web/CSS/CSS_containment/Using_CSS_containment#skips_its_contents).
- {{domxref("Element/scroll_event", "scroll")}}
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- {{domxref("Element/scrollend_event", "scrollend")}}
  - : Wird ausgelöst, wenn die Dokumentansicht das Scrollen abgeschlossen hat.
- {{domxref("Element/securitypolicyviolation_event","securitypolicyviolation")}}
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- {{domxref("Element/wheel_event","wheel")}}
  - : Wird ausgelöst, wenn der Benutzer ein Radknopf an einem Zeigegerät (in der Regel eine Maus) dreht.

### Animationsereignisse

- {{domxref("Element/animationcancel_event", "animationcancel")}}
  - : Wird ausgelöst, wenn eine Animation unerwartet abbricht.
- {{domxref("Element/animationend_event", "animationend")}}
  - : Wird ausgelöst, wenn eine Animation normal abgeschlossen wurde.
- {{domxref("Element/animationiteration_event", "animationiteration")}}
  - : Wird ausgelöst, wenn eine Animationwiederholung abgeschlossen wurde.
- {{domxref("Element/animationstart_event", "animationstart")}}
  - : Wird ausgelöst, wenn eine Animation beginnt.

### Zwischenablageereignisse

- {{domxref("Element/copy_event", "copy")}}
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- {{domxref("Element/cut_event", "cut")}}
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- {{domxref("Element/paste_event", "paste")}}
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Kompositionsereignisse

- {{domxref("Element/compositionend_event", "compositionend")}}
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein {{glossary("input method editor")}} die aktuelle Kompositionssitzung beendet oder abbricht.
- {{domxref("Element/compositionstart_event", "compositionstart")}}
  - : Wird ausgelöst, wenn ein Textkompositionssystem wie ein {{glossary("input method editor")}} eine neue Kompositionssitzung startet.
- {{domxref("Element/compositionupdate_event", "compositionupdate")}}
  - : Wird ausgelöst, wenn ein neues Zeichen im Kontext einer Textkompositionssitzung empfangen wird, die von einem Textkompositionssystem wie einem {{glossary("input method editor")}} gesteuert wird.

### Fokuserereignisse

- {{domxref("Element/blur_event", "blur")}}
  - : Wird ausgelöst, wenn ein Element den Fokus verliert.
- {{domxref("Element/focus_event", "focus")}}
  - : Wird ausgelöst, wenn ein Element den Fokus erhält.
- {{domxref("Element/focusin_event", "focusin")}}
  - : Wird ausgelöst, wenn ein Element den Fokus erhält, nach {{domxref("Element/focus_event", "focus")}}.
- {{domxref("Element/focusout_event", "focusout")}}
  - : Wird ausgelöst, wenn ein Element den Fokus verliert, nach {{domxref("Element/blur_event", "blur")}}.

### Vollbild-Modus-Ereignisse

- {{domxref("Element/fullscreenchange_event", "fullscreenchange")}}
  - : Wird an ein `Element` gesendet, wenn es in den oder aus dem [Vollbild](/de/docs/Web/API/Fullscreen_API/Guide)-Modus wechselt.
- {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}
  - : Wird an ein `Element` gesendet, wenn ein Fehler auftritt, während versucht wird, es in den oder aus dem [Vollbild](/de/docs/Web/API/Fullscreen_API/Guide)-Modus zu schalten.

### Tastaturereignisse

- {{domxref("Element/keydown_event", "keydown")}}
  - : Wird ausgelöst, wenn eine Taste gedrückt wird.
- {{domxref("Element/keypress_event", "keypress")}} {{Deprecated_Inline}}
  - : Wird ausgelöst, wenn eine Taste gedrückt wird, die einen Zeichenwert erzeugt.
- {{domxref("Element/keyup_event", "keyup")}}
  - : Wird ausgelöst, wenn eine Taste losgelassen wird.

### Mausereignisse

- {{domxref("Element/auxclick_event", "auxclick")}}
  - : Wird ausgelöst, wenn eine nicht-primäre Taste eines Zeigegeräts (z. B. jede Maustaste außer der linken Taste) auf einem Element gedrückt und losgelassen wird.
- {{domxref("Element/click_event", "click")}}
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z. B. die primäre Maustaste) auf ein einzelnes Element gedrückt und losgelassen wird.
- {{domxref("Element/contextmenu_event", "contextmenu")}}
  - : Wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen.
- {{domxref("Element/dblclick_event", "dblclick")}}
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts (z. B. die primäre Maustaste) zweimal auf ein einzelnes Element geklickt wird.
- {{domxref("Element/DOMActivate_event", "DOMActivate")}} {{Deprecated_Inline}}
  - : Tritt auf, wenn ein Element aktiviert wird, zum Beispiel durch einen Mausklick oder einen Tastendruck.
- {{domxref("Element/DOMMouseScroll_event", "DOMMouseScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Tritt auf, wenn das Scrollen des Mausrads oder eines ähnlichen Geräts erfolgt und der angesammelte Scrollbetrag seit dem letzten Ereignis mehr als 1 Zeile oder 1 Seite beträgt.
- {{domxref("Element/mousedown_event", "mousedown")}}
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element gedrückt wird.
- {{domxref("Element/mouseenter_event", "mouseenter")}}
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über das Element bewegt wird, an dem der Listener angehängt ist.
- {{domxref("Element/mouseleave_event", "mouseleave")}}
  - : Wird ausgelöst, wenn der Zeiger eines Zeigegeräts (normalerweise eine Maus) aus einem Element bewegt wird, an dem der Listener angehängt ist.
- {{domxref("Element/mousemove_event", "mousemove")}}
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) bewegt wird, während es über einem Element ist.
- {{domxref("Element/mouseout_event", "mouseout")}}
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) aus dem Element herausgeführt wird, an dem der Listener angehängt ist, oder aus einem seiner Kinder.
- {{domxref("Element/mouseover_event", "mouseover")}}
  - : Wird ausgelöst, wenn ein Zeigegerät (normalerweise eine Maus) über das Element bewegt wird, an dem der Listener angehängt ist, oder über eines seiner Kinder.
- {{domxref("Element/mouseup_event", "mouseup")}}
  - : Wird ausgelöst, wenn eine Taste eines Zeigegeräts auf einem Element losgelassen wird.
- {{domxref("Element/mousewheel_event", "mousewheel")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird.
- {{domxref("Element/MozMousePixelScroll_event", "MozMousePixelScroll")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Mausrad oder ein ähnliches Gerät betätigt wird.
- {{domxref("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}} {{Non-standard_Inline}}
  - : Wird jedes Mal ausgelöst, wenn sich der ausgeübte Druck auf das Trackpad/den Touchscreen ändert.
- {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}} {{Non-standard_Inline}}
  - : Wird nach dem mousedown-Ereignis ausgelöst, sobald genügend Druck ausgeübt wurde, um als "Force Click" zu qualifizieren.
- {{domxref("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}} {{Non-standard_Inline}}
  - : Wird vor dem {{domxref("Element/mousedown_event", "mousedown")}}-Ereignis ausgelöst.
- {{domxref("Element/webkitmouseforceup_event", "webkitmouseforceup")}} {{Non-standard_Inline}}
  - : Wird nach dem {{domxref("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}-Ereignis ausgelöst, sobald der Druck genügend reduziert wurde, um den "Force Click" zu beenden.

### Zeigerereignisse

- {{domxref("Element/gotpointercapture_event", "gotpointercapture")}}
  - : Wird ausgelöst, wenn ein Element einen Zeiger mit {{domxref("Element/setPointerCapture", "setPointerCapture()")}} erfasst.
- {{domxref("Element/lostpointerapture_event", "lostpointercapture")}}
  - : Wird ausgelöst, wenn ein [erfasster Zeiger](/de/docs/Web/API/Pointer_events#pointer_capture) freigegeben wird.
- {{domxref("Element/pointercancel_event", "pointercancel")}}
  - : Wird ausgelöst, wenn ein Zeigerereignis abgebrochen wird.
- {{domxref("Element/pointerdown_event", "pointerdown")}}
  - : Wird ausgelöst, wenn ein Zeiger aktiv wird.
- {{domxref("Element/pointerenter_event", "pointerenter")}}
  - : Wird ausgelöst, wenn ein Zeiger in die Treffersuchgrenzen eines Elements oder eines seiner Nachkommen bewegt wird.
- {{domxref("Element/pointerleave_event", "pointerleave")}}
  - : Wird ausgelöst, wenn ein Zeiger aus den Treffersuchgrenzen eines Elements herausbewegt wird.
- {{domxref("Element/pointermove_event", "pointermove")}}
  - : Wird ausgelöst, wenn ein Zeiger die Koordinaten ändert.
- {{domxref("Element/pointerout_event", "pointerout")}}
  - : Wird ausgelöst, wenn ein Zeiger aus den _Treffersuchgrenzen_ eines Elements herausbewegt wird (neben anderen Gründen).
- {{domxref("Element/pointerover_event", "pointerover")}}
  - : Wird ausgelöst, wenn ein Zeiger in die Treffersuchgrenzen eines Elements bewegt wird.
- {{domxref("Element/pointerrawupdate_event", "pointerrawupdate")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine {{domxref("Element/pointerdown_event", "pointerdown")}} oder {{domxref("Element/pointerup_event", "pointerup")}}-Ereignisse auslösen.
- {{domxref("Element/pointerup_event", "pointerup")}}
  - : Wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist.

### Berührungsereignisse

- {{domxref("Element/gesturechange_event","gesturechange")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn sich Finger während einer Berührungsgeste bewegen.
- {{domxref("Element/gestureend_event","gestureend")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn keine Finger mehr die Berührungsoberfläche berühren und die Geste somit beendet wird.
- {{domxref("Element/gesturestart_event","gesturestart")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn mehrere Finger die Berührungsoberfläche berühren und somit eine neue Geste starten.
- {{domxref("Element/touchcancel_event", "touchcancel")}}
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf eine implementationsspezifische Weise unterbrochen wurden (zum Beispiel, wenn zu viele Berührungspunkte erstellt wurden).
- {{domxref("Element/touchend_event", "touchend")}}
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte von der Berührungsoberfläche entfernt werden.
- {{domxref("Element/touchmove_event", "touchmove")}}
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte auf der Berührungsoberfläche bewegt werden.
- {{domxref("Element/touchstart_event", "touchstart")}}
  - : Wird ausgelöst, wenn ein oder mehrere Berührungspunkte die Berührungsoberfläche berühren.

### Übergangsereignisse

- {{domxref("Element/transitioncancel_event", "transitioncancel")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) abgebrochen wurde.
- {{domxref("Element/transitionend_event", "transitionend")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) das Spielen abgeschlossen hat.
- {{domxref("Element/transitionrun_event", "transitionrun")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) erstellt wird (d.h., wenn er zu einem Satz laufender Übergänge hinzugefügt wird), allerdings nicht notwendigerweise gestartet ist.
- {{domxref("Element/transitionstart_event", "transitionstart")}}
  - : Ein {{domxref("Event")}}, das ausgelöst wird, wenn ein [CSS-Übergang](/de/docs/Web/CSS/CSS_transitions) zu wechseln beginnt.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
