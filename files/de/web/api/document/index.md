---
title: Dokument
slug: Web/API/Document
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

{{APIRef("DOM")}}

Das **`Document`** Interface repräsentiert jede im Browser geladene Webseite und dient als Einstiegspunkt in den Inhalt der Webseite, welcher der [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) ist.

Der DOM-Baum umfasst Elemente wie {{HTMLElement("body")}} und {{HTMLElement("table")}}, neben [vielen anderen](/de/docs/Web/HTML/Element). Er bietet global Funktionalitäten für das Dokument, wie beispielsweise, um die URL der Seite abzurufen und neue Elemente im Dokument zu erstellen.

{{InheritanceDiagram}}

Das `Document` Interface beschreibt die gemeinsamen Eigenschaften und Methoden für jede Art von Dokument. Abhängig von der Art des Dokuments (z.B. [HTML](/de/docs/Web/HTML), [XML](/de/docs/Web/XML), SVG, …) steht eine umfangreichere API zur Verfügung: HTML-Dokumente, die mit dem Content-Typ `"text/html"` bereitgestellt werden, implementieren auch das [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface, während XML- und SVG-Dokumente das [`XMLDocument`](/de/docs/Web/API/XMLDocument) Interface implementieren.

## Konstruktor

- [`Document()`](/de/docs/Web/API/Document/Document)
  - : Erzeugt ein neues `Document` Objekt.

## Instanzeigenschaften

_Dieses Interface erbt auch von den Interfaces [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, welches derzeit den Fokus hat.
- [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)
  - : Fügt ein Array von konstruierten Stylesheets hinzu, das vom Dokument genutzt werden soll. Diese Stylesheets können auch mit Shadow-DOM-Teilbäumen des gleichen Dokuments geteilt werden.
- [`Document.body`](/de/docs/Web/API/Document/body)
  - : Gibt den {{HTMLElement("body")}} oder {{htmlelement("frameset")}} Knoten des aktuellen Dokuments zurück.
- [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) {{ReadOnlyInline}}
  - : Gibt den Zeichensatz zurück, der vom Dokument verwendet wird.
- [`Document.childElementCount`](/de/docs/Web/API/Document/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente des aktuellen Dokuments zurück.
- [`Document.children`](/de/docs/Web/API/Document/children) {{ReadOnlyInline}}
  - : Gibt die Kindelemente des aktuellen Dokuments zurück.
- [`Document.compatMode`](/de/docs/Web/API/Document/compatMode) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument im _Quirks_- oder _Strict_-Modus gerendert wird.
- [`Document.contentType`](/de/docs/Web/API/Document/contentType) {{ReadOnlyInline}}
  - : Gibt den Content-Type aus dem MIME-Header des aktuellen Dokuments zurück.
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("script")}} Element zurück, dessen Script gerade verarbeitet wird und das [kein JavaScript-Modul ist](https://github.com/whatwg/html/issues/997).
- [`Document.doctype`](/de/docs/Web/API/Document/doctype) {{ReadOnlyInline}}
  - : Gibt die Document Type Definition (DTD) des aktuellen Dokuments zurück.
- [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das ein direktes Kindelement des Dokuments ist. Für HTML-Dokumente ist dies normalerweise das [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement) Objekt, das das {{HTMLElement("html")}} Element des Dokuments darstellt.
- [`Document.documentURI`](/de/docs/Web/API/Document/documentURI) {{ReadOnlyInline}}
  - : Gibt den Speicherort des Dokuments als `string` zurück.
- [`Document.embeds`](/de/docs/Web/API/Document/embeds) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der eingebetteten {{HTMLElement('embed')}} Elemente im Dokument zurück.
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interface mit den auf das Dokument angewendeten Funktionsrichtlinien zurück.
- [`Document.firstElementChild`](/de/docs/Web/API/Document/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kindelement des aktuellen Dokuments zurück.
- [`Document.fonts`](/de/docs/Web/API/Document/fonts)
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Interface des aktuellen Dokuments zurück.
- [`Document.forms`](/de/docs/Web/API/Document/forms) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("form")}} Elemente im Dokument zurück.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) {{ReadOnlyInline}}
  - : Gibt das [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) des aktuellen Dokuments zurück.
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich aktuell im Vollbildmodus für dieses Dokument befindet.
- [`Document.head`](/de/docs/Web/API/Document/head) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("head")}} Element des aktuellen Dokuments zurück.
- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt einen Boolean-Wert zurück, der angibt, ob die Seite als versteckt betrachtet wird oder nicht.
- [`Document.images`](/de/docs/Web/API/Document/images) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Bilder im Dokument zurück.
- [`Document.implementation`](/de/docs/Web/API/Document/implementation) {{ReadOnlyInline}}
  - : Gibt die mit dem aktuellen Dokument verbundene DOM-Implementierung zurück.
- [`Document.lastElementChild`](/de/docs/Web/API/Document/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement des aktuellen Dokuments zurück.
- [`Document.links`](/de/docs/Web/API/Document/links) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Hyperlinks im Dokument zurück.
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit im Bild-in-Bild-Modus in diesem Dokument angezeigt wird.
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Bild-in-Bild-Funktion aktiviert ist.
- [`Document.plugins`](/de/docs/Web/API/Document/plugins) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der verfügbaren Plugins zurück.
- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, das als Ziel für Mausereignisse festgelegt wurde, während der Zeiger gesperrt ist. `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder wenn das Ziel in einem anderen Dokument ist.
- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen Boolean zurück, der anzeigt, ob das Dokument derzeit im Prozess des Prerenderings ist, wie vom [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.
- [`Document.scripts`](/de/docs/Web/API/Document/scripts) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("script")}} Elemente im Dokument zurück.
- [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) {{ReadOnlyInline}}
  - : Gibt einen Verweis auf das [`Element`](/de/docs/Web/API/Element) zurück, das das Dokument scrollt.
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekten für Stylesheets zurück, die explizit in ein Dokument eingebunden oder eingebettet sind.
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) {{ReadOnlyInline}}
  - : Gibt die Zeitachse als spezielle Instanz von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) zurück, die automatisch beim Laden der Seite erstellt wird.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Gibt einen `string` zurück, der den Sichtbarkeitsstatus des Dokuments angibt. Mögliche Werte sind `visible`, `hidden`, `prerender` und `unloaded`.

### Erweiterungen für HTMLDocument

_Das `Document` Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface oder wird für solche Dokumente erweitert._

- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
  - : Gibt eine Liste der Cookies für dieses Dokument zurück, getrennt durch Semikolons, oder setzt ein einzelnes Cookie.
- [`Document.defaultView`](/de/docs/Web/API/Document/defaultView) {{ReadOnlyInline}}
  - : Gibt einen Verweis auf das Fensterobjekt zurück.
- [`Document.designMode`](/de/docs/Web/API/Document/designMode)
  - : Holt/setzt die Fähigkeit, das gesamte Dokument zu bearbeiten.
- [`Document.dir`](/de/docs/Web/API/Document/dir)
  - : Holt/setzt die Richtung (rtl/ltr) des Dokuments.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) {{ReadOnlyInline}}
  - : Gibt an, ob der Vollbildmodus verfügbar ist.
- [`Document.lastModified`](/de/docs/Web/API/Document/lastModified) {{ReadOnlyInline}}
  - : Gibt das Datum zurück, an dem das Dokument zuletzt geändert wurde.
- [`Document.location`](/de/docs/Web/API/Document/location) {{ReadOnlyInline}}
  - : Gibt die URI des aktuellen Dokuments zurück.
- [`Document.readyState`](/de/docs/Web/API/Document/readyState) {{ReadOnlyInline}}
  - : Gibt den Ladezustand des Dokuments zurück.
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) {{ReadOnlyInline}}
  - : Gibt die URI der Seite zurück, die auf diese Seite verlinkt hat.
- [`Document.title`](/de/docs/Web/API/Document/title)
  - : Setzt oder holt den Titel des aktuellen Dokuments.
- [`Document.URL`](/de/docs/Web/API/Document/URL) {{ReadOnlyInline}}
  - : Gibt die Dokumentposition als String zurück.

### Veraltete Eigenschaften

- [`Document.alinkColor`](/de/docs/Web/API/Document/alinkColor) {{Deprecated_Inline}}
  - : Gibt die Farbe der aktiven Links im Dokumentkörper zurück oder setzt diese.
- [`Document.all`](/de/docs/Web/API/Document/all) {{Deprecated_Inline}}
  - : Bietet Zugriff auf alle Elemente im Dokument — es gibt eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) zurück, die am Dokumentknoten verankert ist. Dies ist eine alte, nicht-standardisierte Eigenschaft und sollte nicht verwendet werden.
- [`Document.anchors`](/de/docs/Web/API/Document/anchors) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste aller Anker im Dokument zurück.
- [`Document.applets`](/de/docs/Web/API/Document/applets) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück. Eine veraltete Eigenschaft, die früher die Liste der Applets in einem Dokument zurückgegeben hat.
- [`Document.bgColor`](/de/docs/Web/API/Document/bgColor) {{Deprecated_Inline}}
  - : Holt/setzt die Hintergrundfarbe des aktuellen Dokuments.
- [`Document.charset`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.domain`](/de/docs/Web/API/Document/domain) {{Deprecated_Inline}}
  - : Holt/setzt die Domain des aktuellen Dokuments.
- [`Document.fgColor`](/de/docs/Web/API/Document/fgColor) {{Deprecated_Inline}}
  - : Holt/setzt die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments.
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn das Dokument im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) ist.
- [`Document.inputEncoding`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Namen des zuletzt aktivierten Style Sheet Sets zurück. Hat den Wert `null`, bis das Stylesheet geändert wird, indem der Wert von [`selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) gesetzt wird.
- [`Document.linkColor`](/de/docs/Web/API/Document/linkColor) {{Deprecated_Inline}}
  - : Holt/setzt die Farbe der Hyperlinks im Dokument.
- [`Document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das bevorzugte Style Sheet Set zurück, wie vom Seitenautor angegeben.
- [`Document.rootElement`](/de/docs/Web/API/Document/rootElement) {{Deprecated_Inline}}
  - : Wie [`Document.documentElement`](/de/docs/Web/API/Document/documentElement), jedoch nur für {{SVGElement("svg")}} Wurzelelemente. Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt das aktuell verwendete Style Sheet Set zurück.
- [`Document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Liste der im Dokument verfügbaren Style Sheet Sets zurück.
- [`Document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor) {{Deprecated_Inline}}
  - : Holt/setzt die Farbe von besuchten Hyperlinks.
- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) {{Deprecated_Inline}}
  - : Gibt die Kodierung zurück, wie sie in der XML-Deklaration festgelegt ist.
- [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn die XML-Deklaration angibt, dass das Dokument eigenständig ist (_z.B._, ein externer Teil der DTD beeinflusst den Inhalt des Dokuments), andernfalls `false`.
- [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) {{Deprecated_Inline}}
  - : Gibt die Versionsnummer zurück, wie sie in der XML-Deklaration angegeben ist, oder `"1.0"`, wenn die Deklaration fehlt.

## Instanzmethoden

_Dieses Interface erbt auch von den Interfaces [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)
  - : Adoptiert einen Knoten aus einem externen Dokument.
- [`Document.append()`](/de/docs/Web/API/Document/append)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings nach dem letzten Kind des Dokuments ein.
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein `Promise` zurück, das sich mit einem Array von Objekten erfüllt, die die Top-Themen für den Benutzer darstellen, eines aus jeder der letzten drei Epochen. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch wie vom Anrufer beobachtet aufzeichnet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann. Weitere Informationen finden Sie in der [Topics API](/de/docs/Web/API/Topics_API).
- [`Document.captureEvents()`](/de/docs/Web/API/Document/captureEvents) {{Deprecated_Inline}}
  - : Siehe [`Window.captureEvents`](/de/docs/Web/API/Window/captureEvents).
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
  - : Gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition) Objekt zurück, das den DOM-Knoten enthält, der den Caret enthält, und den Zeichenversatz des Carets innerhalb dieses Knotens.
- [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) {{Non-standard_Inline}}
  - : Holt ein [`Range`](/de/docs/Web/API/Range) Objekt für das Dokumentfragment unter den angegebenen Koordinaten.
- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
  - : Erstellt ein neues [`Attr`](/de/docs/Web/API/Attr) Objekt und gibt es zurück.
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
  - : Erstellt einen neuen Attributknoten in einem angegebenen Namensraum und gibt ihn zurück.
- [`Document.createCDATASection()`](/de/docs/Web/API/Document/createCDATASection)
  - : Erstellt einen neuen CDATA-Knoten und gibt ihn zurück.
- [`Document.createComment()`](/de/docs/Web/API/Document/createComment)
  - : Erstellt einen neuen Kommentar-Knoten und gibt ihn zurück.
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
  - : Erstellt ein neues Dokumentfragment.
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen.
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen und Namespace-URI.
- [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) {{deprecated_inline}}
  - : Erstellt ein Ereignisobjekt.
- [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator)
  - : Erstellt ein [`NodeIterator`](/de/docs/Web/API/NodeIterator) Objekt.
- [`Document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction)
  - : Erstellt ein neues [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction) Objekt.
- [`Document.createRange()`](/de/docs/Web/API/Document/createRange)
  - : Erstellt ein [`Range`](/de/docs/Web/API/Range) Objekt.
- [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
  - : Erstellt einen Textknoten.
- [`Document.createTouch()`](/de/docs/Web/API/Document/createTouch) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein [`Touch`](/de/docs/Web/API/Touch) Objekt.
- [`Document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein [`TouchList`](/de/docs/Web/API/TouchList) Objekt.
- [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker)
  - : Erstellt ein [`TreeWalker`](/de/docs/Web/API/TreeWalker) Objekt.
- [`Document.elementFromPoint()`](/de/docs/Web/API/Document/elementFromPoint)
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint)
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`Document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Aktiviert die Stylesheets für das angegebene Style Sheet Set.
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Beendet die Anzeige des Vollbild-Elements des Dokuments im Vollbildmodus.
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Entzieht das Video aus dem schwebenden Bild-im-Bild-Fenster zurück zu seinem ursprünglichen Container.
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
  - : Gibt die Zeigersperre frei.
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array aller aktuell wirksamen [`Animation`](/de/docs/Web/API/Animation) Objekte zurück, deren Zielelemente Nachkommen des `document` sind.
- [`Document.getBoxQuads()`](/de/docs/Web/API/Document/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad) Objekten zurück, die die CSS-Fragmente des Knotens darstellen.
- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById)
  - : Gibt eine Objekt-Referenz auf das identifizierte Element zurück.
- [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName)
  - : Gibt eine Liste von Elementen mit dem gegebenen Klassennamen zurück.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
  - : Gibt eine Liste von Elementen mit dem gegebenen Tag-Namen zurück.
- [`Document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS)
  - : Gibt eine Liste von Elementen mit dem gegebenen Tag-Namen und Namespace zurück.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection) Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position des Carets darstellt.
- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Boolean-Wert erfüllt, der angibt, ob das Dokument Zugriff auf unpartitionierte Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.importNode()`](/de/docs/Web/API/Document/importNode)
  - : Gibt einen Klon eines Knotens aus einem externen Dokument zurück.
- [`Document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) {{Non-standard_Inline}}
  - : Ermöglicht, das Element zu ändern, das als Hintergrundbild für eine angegebene Element-ID verwendet wird.
- [`Document.prepend()`](/de/docs/Web/API/Document/prepend)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings vor dem ersten Kind des Dokuments ein.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
  - : Gibt das erste Elementknoten innerhalb des Dokuments, in Dokumentreihenfolge, zurück, das die angegebenen Selektoren erfüllt.
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
  - : Gibt eine Liste aller Elementknoten innerhalb des Dokuments zurück, die die angegebenen Selektoren erfüllen.
- [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) {{Non-standard_Inline}}
  - : Gibt die aktuelle Mausaufnahme frei, sofern sie sich auf ein Element in diesem Dokument bezieht.
- [`Document.releaseEvents()`](/de/docs/Web/API/Document/releaseEvents) {{Deprecated_Inline}}
  - : Siehe [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents).
- [`Document.replaceChildren()`](/de/docs/Web/API/Document/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines Dokuments mit einer angegebenen neuen Menge von Kindern.
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht einem in einem Drittanbieterkontext geladenen Dokument, zum Beispiel eingebettet in einem {{htmlelement("iframe")}}, Zugriff auf unpartitionierte Cookies anzufordern, in Fällen, wo Benutzeragenten standardmäßig den Zugriff auf unpartitionierte Cookies durch Websites, die in einem Drittanbieterkontext geladen sind, blockieren, um die Privatsphäre zu verbessern.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ermöglicht es Top-Level-Sites, auf eingebettete Inhalte einer anderen Site im gleichen [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) im Auftrag Zugriff für Drittanbieter-Cookies zu beantragen.
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen [Ansichtstransition](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, das sie repräsentiert.

Das `Document` Interface wird mit dem [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) Interface erweitert:

- [`Document.createExpression()`](/de/docs/Web/API/Document/createExpression)
  - : Kompiliert ein [`XPathExpression`](/de/docs/Web/API/XPathExpression), das dann für (wiederholte) Auswertungen verwendet werden kann.
- [`Document.createNSResolver()`](/de/docs/Web/API/Document/createNSResolver) {{deprecated_inline}}
  - : Gibt den Eingabeknoten unverändert zurück.
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
  - : Wertet einen XPath-Ausdruck aus.

### Erweiterung für HTML-Dokumente

Das `Document` Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface oder wird für solche Dokumente erweitert:

- [`Document.clear()`](/de/docs/Web/API/Document/clear) {{Deprecated_Inline}}
  - : Diese Methode tut nichts.
- [`Document.close()`](/de/docs/Web/API/Document/close)
  - : Schließt einen Dokumentstream zum Schreiben.
- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) {{Deprecated_Inline}}
  - : Führt in einem bearbeitbaren Dokument einen Formatierungsbefehl aus.
- [`Document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Namen zurück.
- [`Document.hasFocus()`](/de/docs/Web/API/Document/hasFocus)
  - : Gibt `true` zurück, wenn der Fokus derzeit irgendwo innerhalb des angegebenen Dokuments liegt.
- [`Document.open()`](/de/docs/Web/API/Document/open)
  - : Öffnet einen Dokumentstream zum Schreiben.
- [`Document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt `true` zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt werden kann.
- [`Document.queryCommandIndeterm()`](/de/docs/Web/API/Document/queryCommandIndeterm) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn der Formatierungsbefehl im aktuellen Bereich in einem unbestimmten Zustand ist.
- [`Document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt `true` zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt wurde.
- [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt `true` zurück, wenn der Formatierungsbefehl im aktuellen Bereich unterstützt wird.
- [`Document.queryCommandValue()`](/de/docs/Web/API/Document/queryCommandValue) {{Deprecated_Inline}}
  - : Gibt den aktuellen Wert des aktuellen Bereichs für einen Formatierungsbefehl zurück.
- [`Document.write()`](/de/docs/Web/API/Document/write) {{deprecated_inline}}
  - : Schreibt Text in ein Dokument.
- [`Document.writeln()`](/de/docs/Web/API/Document/writeln)
  - : Schreibt eine Textzeile in ein Dokument.

## Statische Methoden

_Dieses Interface erbt auch von den Interfaces [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Erstellt ein neues `Document`-Objekt aus einem HTML-String, ohne eine Sanitization durchzuführen. Der String kann deklarative Shadow-Roots enthalten.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` oder indem Sie einen Ereignis-Listener auf die Eigenschaft `oneventname` dieses Interfaces zuweisen. Zusätzlich zu den unten aufgelisteten Ereignissen können viele Ereignisse von [nodes](/de/docs/Web/API/Node) innerhalb des Dokumentbaums gestreut werden.

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} Element sein Skript fertig ausgeführt hat.
- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} Element kurz davor ist, sein Skript auszuführen.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) {{experimental_inline}}
  - : Wird auf einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (d.h. der Nutzer die Seite ansieht).
- [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine Sicherheitsrichtlinie für Inhalte verletzt wird.
- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder ausgeblendet wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Document/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Document/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Document/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Vollbild-Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)
  - : Wird ausgelöst, wenn das `Document` in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
  - : Wird ausgelöst, wenn beim Versuch, in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln, ein Fehler auftritt.

### Lade- & Entlade-Ereignisse

- [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - : Wird ausgelöst, wenn das Dokument vollständig geladen und geparst wurde, ohne auf das Laden von Stylesheets, Bildern und Unterframes zu warten.
- [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - : Wird ausgelöst, wenn das [`readyState`](/de/docs/Web/API/Document/readyState) Attribut eines Dokuments sich ändert.

### Zeigersperre-Ereignisse

- [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)
  - : Wird ausgelöst, wenn der Zeiger gesperrt/entsperrt wird.
- [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)
  - : Wird ausgelöst, wenn das Sperren des Zeigers fehlschlägt.

### Scroll-Ereignisse

- [`scroll`](/de/docs/Web/API/Document/scroll_event)
  - : Wird ausgelöst, wenn der Dokumentenansicht oder ein Element gescrollt wird.
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)
  - : Wird ausgelöst, wenn der Dokumentenansicht oder ein Element das Scrollen abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende eines Scrollvorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel aussteht, d.h. es wird ausgewählt, wenn die aktuelle Scrollgeste endet.

### Auswahlevents

- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Wird ausgelöst, wenn die aktuelle Textauswahl in einem Dokument geändert wird.

### Geschachtelte Ereignisse

Nicht alle automatischen stufenweisen Ereignisse können das `Document`-Objekt erreichen. Nur die folgenden können und können am `Document`-Objekt belauscht werden:

- `abort`
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`beforeinput`](/de/docs/Web/API/Element/beforeinput_event)
- [`beforematch`](/de/docs/Web/API/Element/beforematch_event)
- [`beforetoggle`](/de/docs/Web/API/HTMLElement/beforetoggle_event)
- [`blur`](/de/docs/Web/API/Element/blur_event)
- `cancel`
- [`canplay`](/de/docs/Web/API/HTMLMediaElement/canplay_event)
- [`canplaythrough`](/de/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`change`](/de/docs/Web/API/HTMLElement/change_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`close`](/de/docs/Web/API/HTMLDialogElement/close_event)
- [`contextlost`](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`contextrestored`](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`copy`](/de/docs/Web/API/Element/copy_event)
- [`cuechange`](/de/docs/Web/API/HTMLTrackElement/cuechange_event)
- [`cut`](/de/docs/Web/API/Element/cut_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
- [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
- [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
- [`dragleave`](/de/docs/Web/API/HTMLElement/dragleave_event)
- [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
- [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
- [`drop`](/de/docs/Web/API/HTMLElement/drop_event)
- [`durationchange`](/de/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`emptied`](/de/docs/Web/API/HTMLMediaElement/emptied_event)
- [`ended`](/de/docs/Web/API/HTMLMediaElement/ended_event)
- [`error`](/de/docs/Web/API/HTMLElement/error_event)
- [`focus`](/de/docs/Web/API/Element/focus_event)
- [`formdata`](/de/docs/Web/API/HTMLFormElement/formdata_event)
- [`input`](/de/docs/Web/API/Element/input_event)
- [`invalid`](/de/docs/Web/API/HTMLInputElement/invalid_event)
- [`keydown`](/de/docs/Web/API/Element/keydown_event)
- [`keypress`](/de/docs/Web/API/Element/keypress_event)
- [`keyup`](/de/docs/Web/API/Element/keyup_event)
- [`load`](/de/docs/Web/API/HTMLElement/load_event)
- [`loadeddata`](/de/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`loadedmetadata`](/de/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`loadstart`](/de/docs/Web/API/HTMLMediaElement/loadstart_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseenter`](/de/docs/Web/API/Element/mouseenter_event)
- [`mouseleave`](/de/docs/Web/API/Element/mouseleave_event)
- [`mousemove`](/de/docs/Web/API/Element/mousemove_event)
- [`mouseout`](/de/docs/Web/API/Element/mouseout_event)
- [`mouseover`](/de/docs/Web/API/Element/mouseover_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`paste`](/de/docs/Web/API/Element/paste_event)
- [`pause`](/de/docs/Web/API/HTMLMediaElement/pause_event)
- [`play`](/de/docs/Web/API/HTMLMediaElement/play_event)
- [`playing`](/de/docs/Web/API/HTMLMediaElement/playing_event)
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)
- [`ratechange`](/de/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`reset`](/de/docs/Web/API/HTMLFormElement/reset_event)
- [`resize`](/de/docs/Web/API/HTMLVideoElement/resize_event)
- [`scroll`](/de/docs/Web/API/Element/scroll_event)
- [`scrollend`](/de/docs/Web/API/Element/scrollend_event)
- [`securitypolicyviolation`](/de/docs/Web/API/Element/securitypolicyviolation_event)
- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)
- [`seeking`](/de/docs/Web/API/HTMLMediaElement/seeking_event)
- [`select`](/de/docs/Web/API/HTMLInputElement/select_event)
- [`slotchange`](/de/docs/Web/API/HTMLSlotElement/slotchange_event)
- [`stalled`](/de/docs/Web/API/HTMLMediaElement/stalled_event)
- [`submit`](/de/docs/Web/API/HTMLFormElement/submit_event)
- [`suspend`](/de/docs/Web/API/HTMLMediaElement/suspend_event)
- [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`toggle`](/de/docs/Web/API/HTMLElement/toggle_event)
- [`volumechange`](/de/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`waiting`](/de/docs/Web/API/HTMLMediaElement/waiting_event)
- [`wheel`](/de/docs/Web/API/Element/wheel_event)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
