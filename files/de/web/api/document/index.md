---
title: Dokument
slug: Web/API/Document
l10n:
  sourceCommit: 08e04f121ea7b3a55e6ef47782d2d82fb053ca88
---

{{APIRef("DOM")}}

Das **`Document`**-Interface repräsentiert jede in einem Browser geladene Webseite und dient als Einstiegspunkt in den Inhalt der Webseite, der der [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) ist.

Der DOM-Baum umfasst Elemente wie {{HTMLElement("body")}} und {{HTMLElement("table")}}, neben [vielen anderen](/de/docs/Web/HTML/Element). Es bietet global Funktionen für das Dokument, wie das Abrufen der URL der Seite und das Erstellen neuer Elemente im Dokument.

{{InheritanceDiagram}}

Das `Document`-Interface beschreibt die allgemeinen Eigenschaften und Methoden für jede Art von Dokument. Abhängig vom Typ des Dokuments (z. B. [HTML](/de/docs/Web/HTML), [XML](/de/docs/Web/XML), SVG, ...) steht eine größere API zur Verfügung: HTML-Dokumente, die mit dem Inhalts-Typ `"text/html"` serviert werden, implementieren auch das [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Interface, während XML- und SVG-Dokumente das [`XMLDocument`](/de/docs/Web/API/XMLDocument)-Interface implementieren.

## Konstruktor

- [`Document()`](/de/docs/Web/API/Document/Document)
  - : Erstellt ein neues `Document`-Objekt.

## Instanzeigenschaften

_Dieses Interface erbt auch vom [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) Interface._

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit den Fokus hat.
- [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)
  - : Fügt ein Array von erstellten Stylesheets hinzu, die vom Dokument verwendet werden sollen. Diese Stylesheets können auch mit Schatten-DOM-Teilbäumen desselben Dokuments geteilt werden.
- [`Document.body`](/de/docs/Web/API/Document/body)
  - : Gibt den {{HTMLElement("body")}} oder {{htmlelement("frameset")}} Knoten des aktuellen Dokuments zurück.
- [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) {{ReadOnlyInline}}
  - : Gibt das Zeichensatz zurück, das vom Dokument verwendet wird.
- [`Document.childElementCount`](/de/docs/Web/API/Document/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente des aktuellen Dokuments zurück.
- [`Document.children`](/de/docs/Web/API/Document/children) {{ReadOnlyInline}}
  - : Gibt die Kindelemente des aktuellen Dokuments zurück.
- [`Document.compatMode`](/de/docs/Web/API/Document/compatMode) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument im _quirks_ oder im _strict_ Modus gerendert wird.
- [`Document.contentType`](/de/docs/Web/API/Document/contentType) {{ReadOnlyInline}}
  - : Gibt den in der MIME-Header des aktuellen Dokuments spezifizierten Content-Type zurück.
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("script")}}-Element zurück, dessen Skript derzeit verarbeitet wird und [kein JavaScript-Modul ist](https://github.com/whatwg/html/issues/997).
- [`Document.doctype`](/de/docs/Web/API/Document/doctype) {{ReadOnlyInline}}
  - : Gibt die Document Type Definition (DTD) des aktuellen Dokuments zurück.
- [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das ein direktes Kindelement des Dokuments ist. Für HTML-Dokumente ist dies normalerweise das [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement)-Objekt, welches das {{HTMLElement("html")}}-Element des Dokuments repräsentiert.
- [`Document.documentURI`](/de/docs/Web/API/Document/documentURI) {{ReadOnlyInline}}
  - : Gibt den Dokumentstandort als Zeichenkette zurück.
- [`Document.embeds`](/de/docs/Web/API/Document/embeds) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der eingebetteten {{HTMLElement('embed')}}-Elemente im Dokument zurück.
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Interface mit den im Dokument angewendeten Funktionenrichtlinien zurück.
- [`Document.firstElementChild`](/de/docs/Web/API/Document/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kindelement des aktuellen Dokuments zurück.
- [`Document.fonts`](/de/docs/Web/API/Document/fonts)
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interface des aktuellen Dokuments zurück.
- [`Document.forms`](/de/docs/Web/API/Document/forms) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("form")}}-Elemente im Dokument zurück.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) {{ReadOnlyInline}}
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich aktuell im Vollbildmodus für dieses Dokument befindet.
- [`Document.head`](/de/docs/Web/API/Document/head) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("head")}}-Element des aktuellen Dokuments zurück.
- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Seite als ausgeblendet betrachtet wird oder nicht.
- [`Document.images`](/de/docs/Web/API/Document/images) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Bilder im Dokument zurück.
- [`Document.implementation`](/de/docs/Web/API/Document/implementation) {{ReadOnlyInline}}
  - : Gibt die mit dem aktuellen Dokument verknüpfte DOM-Implementierung zurück.
- [`Document.lastElementChild`](/de/docs/Web/API/Document/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement des aktuellen Dokuments zurück.
- [`Document.links`](/de/docs/Web/API/Document/links) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Hyperlinks im Dokument zurück.
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit im Bild-in-Bild-Modus in diesem Dokument präsentiert wird.
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Bild-in-Bild-Funktion aktiviert ist.
- [`Document.plugins`](/de/docs/Web/API/Document/plugins) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der verfügbaren Plugins zurück.
- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, das als Ziel für Mausereignisse festgelegt wurde, während der Zeiger gesperrt ist. `null`, wenn die Sperrung aussteht, der Zeiger entsperrt ist oder wenn das Ziel in einem anderen Dokument ist.
- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob sich das Dokument derzeit im Prerendering-Prozess befindet, wie er über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert wurde.
- [`Document.scripts`](/de/docs/Web/API/Document/scripts) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("script")}}-Elemente im Dokument zurück.
- [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`Element`](/de/docs/Web/API/Element) zurück, das das Dokument scrollt.
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die explizit in einem Dokument verlinkt oder eingebettet sind.
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) {{ReadOnlyInline}}
  - : Gibt den Zeitstrahl als spezielle Instanz von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) zurück, der beim Laden der Seite automatisch erstellt wird.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Gibt einen `string` zurück, der den Sichtbarkeitszustand des Dokuments bezeichnet. Mögliche Werte sind `visible`, `hidden`, `prerender` und `unloaded`.

### Erweiterungen für HTMLDocument

_Das `Document`-Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Interface oder wird für solche Dokumente erweitert._

- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
  - : Gibt eine durch Semikolon getrennte Liste der Cookies für dieses Dokument zurück oder setzt ein einzelnes Cookie.
- [`Document.defaultView`](/de/docs/Web/API/Document/defaultView) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das `window`-Objekt zurück.
- [`Document.designMode`](/de/docs/Web/API/Document/designMode)
  - : Ruft die Möglichkeit ab/legt sie fest, das gesamte Dokument zu bearbeiten.
- [`Document.dir`](/de/docs/Web/API/Document/dir)
  - : Ruft die Richtung (rtl/ltr) des Dokuments ab/setzt sie.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) {{ReadOnlyInline}}
  - : Gibt an, ob der Vollbildmodus verfügbar ist.
- [`Document.lastModified`](/de/docs/Web/API/Document/lastModified) {{ReadOnlyInline}}
  - : Gibt das Datum zurück, an dem das Dokument zuletzt geändert wurde.
- [`Document.location`](/de/docs/Web/API/Document/location) {{ReadOnlyInline}}
  - : Gibt die URI des aktuellen Dokuments zurück.
- [`Document.readyState`](/de/docs/Web/API/Document/readyState) {{ReadOnlyInline}}
  - : Gibt den Ladezustand des Dokuments zurück.
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) {{ReadOnlyInline}}
  - : Gibt die URI der Seite zurück, die zu dieser Seite verlinkt hat.
- [`Document.title`](/de/docs/Web/API/Document/title)
  - : Setzt oder erhält den Titel des aktuellen Dokuments.
- [`Document.URL`](/de/docs/Web/API/Document/URL) {{ReadOnlyInline}}
  - : Gibt den Dokumentstandort als Zeichenkette zurück.

### Veraltete Eigenschaften

- [`Document.alinkColor`](/de/docs/Web/API/Document/alinkColor) {{Deprecated_Inline}}
  - : Gibt die Farbe von aktiven Links im Dokumentkörper zurück oder setzt sie.
- [`Document.all`](/de/docs/Web/API/Document/all) {{Deprecated_Inline}}
  - : Bietet Zugriff auf alle Elemente im Dokument — es gibt eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) zurück, die an der Dokumentknoten verankert ist. Dies ist eine veraltete, nicht standardisierte Eigenschaft und sollte nicht verwendet werden.
- [`Document.anchors`](/de/docs/Web/API/Document/anchors) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste aller Anker im Dokument zurück.
- [`Document.applets`](/de/docs/Web/API/Document/applets) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück. Veraltete Eigenschaft, die früher die Liste der Applets innerhalb eines Dokuments zurückgab.
- [`Document.bgColor`](/de/docs/Web/API/Document/bgColor) {{Deprecated_Inline}}
  - : Ruft die Hintergrundfarbe des aktuellen Dokuments ab/setzt sie.
- [`Document.charset`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.domain`](/de/docs/Web/API/Document/domain) {{Deprecated_Inline}}
  - : Ruft die Domäne des aktuellen Dokuments ab/setzt sie.
- [`Document.fgColor`](/de/docs/Web/API/Document/fgColor) {{Deprecated_Inline}}
  - : Ruft die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments ab/setzt sie.
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn sich das Dokument im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) befindet.
- [`Document.inputEncoding`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Namen des zuletzt aktivierten Stylesheets-Sets zurück. Hat den Wert `null`, bis das Stylesheet geändert wird, indem der Wert von [`selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) gesetzt wird.
- [`Document.linkColor`](/de/docs/Web/API/Document/linkColor) {{Deprecated_Inline}}
  - : Ruft die Farbe von Hyperlinks im Dokument ab/setzt sie.
- [`Document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das bevorzugte Stylesheet-Set zurück, wie vom Seitenautor angegeben.
- [`Document.rootElement`](/de/docs/Web/API/Document/rootElement) {{Deprecated_Inline}}
  - : Wie [`Document.documentElement`](/de/docs/Web/API/Document/documentElement), jedoch nur für {{SVGElement("svg")}}-Wurzelelemente. Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt zurück, welches Stylesheet-Set derzeit in Verwendung ist.
- [`Document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Liste der im Dokument verfügbaren Stylesheet-Sets zurück.
- [`Document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor) {{Deprecated_Inline}}
  - : Ruft die Farbe von besuchten Hyperlinks ab/setzt sie.
- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) {{Deprecated_Inline}}
  - : Gibt die Kodierung zurück, wie sie in der XML-Deklaration festgelegt wurde.
- [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn die XML-Deklaration angibt, dass das Dokument eigenständig ist (_z. B.,_ Ein externer Teil des DTD beeinflusst den Inhalt des Dokuments), andernfalls `false`.
- [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) {{Deprecated_Inline}}
  - : Gibt die Versionsnummer zurück, wie sie in der XML-Deklaration angegeben ist oder `"1.0"`, wenn die Deklaration fehlt.

## Instanzmethoden

_Dieses Interface erbt auch von den [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) Interfaces._

- [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)
  - : Adoptiert einen Knoten aus einem externen Dokument.
- [`Document.append()`](/de/docs/Web/API/Document/append)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen nach dem letzten Kindelement des Dokuments ein.
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Nutzer repräsentieren, eines aus jeder der letzten drei Epochen. Standardmäßig verursacht die Methode auch, dass der Browser den aktuellen Seitenbesuch aufzeichnet, wie vom Aufrufer beobachtet, sodass der Hostname der Seite später in der Themenberechnung verwendet werden kann. Siehe die [Topics API](/de/docs/Web/API/Topics_API) für weitere Details.
- [`Document.captureEvents()`](/de/docs/Web/API/Document/captureEvents) {{Deprecated_Inline}}
  - : Siehe [`Window.captureEvents`](/de/docs/Web/API/Window/captureEvents).
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
  - : Gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt zurück, das den DOM-Knoten enthält, der die Einfügemarke enthält, und den Zeichenoffset der Einfügemarke innerhalb dieses Knotens.
- [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) {{Non-standard_Inline}}
  - : Ruft ein [`Range`](/de/docs/Web/API/Range)-Objekt für das Dokumentfragment unter den angegebenen Koordinaten ab.
- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
  - : Erstellt ein neues [`Attr`](/de/docs/Web/API/Attr)-Objekt und gibt es zurück.
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
  - : Erstellt ein neues Attributknoten in einem angegebenen Namensraum und gibt es zurück.
- [`Document.createCDATASection()`](/de/docs/Web/API/Document/createCDATASection)
  - : Erstellt einen neuen CDATA-Knoten und gibt ihn zurück.
- [`Document.createComment()`](/de/docs/Web/API/Document/createComment)
  - : Erstellt einen neuen Kommentarknoten und gibt ihn zurück.
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
  - : Erstellt ein neues Dokumentfragment.
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen.
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen und Namensraum-URI.
- [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) {{deprecated_inline}}
  - : Erstellt ein Ereignisobjekt.
- [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator)
  - : Erstellt ein [`NodeIterator`](/de/docs/Web/API/NodeIterator)-Objekt.
- [`Document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction)
  - : Erstellt ein neues [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Objekt.
- [`Document.createRange()`](/de/docs/Web/API/Document/createRange)
  - : Erstellt ein [`Range`](/de/docs/Web/API/Range)-Objekt.
- [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
  - : Erstellt ein Textknoten.
- [`Document.createTouch()`](/de/docs/Web/API/Document/createTouch) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein [`Touch`](/de/docs/Web/API/Touch)-Objekt.
- [`Document.createTouchList()`](/de/docs/Web/API/Document/createTouchList) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein [`TouchList`](/de/docs/Web/API/TouchList)-Objekt.
- [`Document.createTreeWalker()`](/de/docs/Web/API/Document/createTreeWalker)
  - : Erstellt ein [`TreeWalker`](/de/docs/Web/API/TreeWalker)-Objekt.
- [`Document.elementFromPoint()`](/de/docs/Web/API/Document/elementFromPoint)
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- [`Document.elementsFromPoint()`](/de/docs/Web/API/Document/elementsFromPoint)
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- [`Document.enableStyleSheetsForSet()`](/de/docs/Web/API/Document/enableStyleSheetsForSet) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Aktiviert die Stylesheets für das angegebene Stylesheet-Set.
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Beendet das Anzeigen des Vollbildelements des Dokuments im Vollbildmodus.
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Entfernt das Video aus dem schwebenden Bild-in-Bild-Fenster zurück in seinen ursprünglichen Container.
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
  - : Gibt die Zeigersperre frei.
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, die derzeit in Kraft sind, deren Zielelemente Nachkommen des `Dokuments` sind.
- [`Document.getBoxQuads()`](/de/docs/Web/API/Document/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekten zurück, die die CSS-Fragmente des Knotens darstellen.
- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById)
  - : Gibt ein Objekt zurück, das sich auf das identifizierte Element bezieht.
- [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Klassennamen zurück.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Tag-Namen zurück.
- [`Document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS)
  - : Gibt eine Liste von Elementen mit dem angegebenen Tag-Namen und Namensraum zurück.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke darstellt.
- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob das Dokument Zugriff auf unparteiische Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.importNode()`](/de/docs/Web/API/Document/importNode)
  - : Gibt einen Klon eines Knotens aus einem externen Dokument zurück.
- [`Document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) {{Non-standard_Inline}}
  - : Ermöglicht Ihnen, das Element zu ändern, das als Hintergrundbild für eine festgelegte Element-ID verwendet wird.
- [`Document.prepend()`](/de/docs/Web/API/Document/prepend)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten Kindelement des Dokuments ein.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
  - : Gibt das erste Elementknoten innerhalb des Dokuments zurück, in Dokumentreihenfolge, das den angegebenen Selektoren entspricht.
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
  - : Gibt eine Liste aller Elementknoten innerhalb des Dokuments zurück, die den angegebenen Selektoren entsprechen.
- [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) {{Non-standard_Inline}}
  - : Gibt die aktuelle Mausaufnahme frei, wenn sie sich auf einem Element in diesem Dokument befindet.
- [`Document.releaseEvents()`](/de/docs/Web/API/Document/releaseEvents) {{Deprecated_Inline}}
  - : Siehe [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents).
- [`Document.replaceChildren()`](/de/docs/Web/API/Document/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines Dokuments durch eine angegebene neue Menge von Kindern.
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Erlaubt einem Dokument, das in einem Drittanbieter-Kontext geladen wird (d. h. eingebettet in einem {{htmlelement("iframe")}}), Zugriff auf unparteiische Cookies zu beantragen, in Fällen, in denen Benutzeragenten standardmäßig den Zugriff auf unparteiische Cookies durch in einem Drittanbieter-Kontext geladene Seiten blockieren, um die Privatsphäre zu verbessern.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Erlaubt Top-Level-Sites, im Namen von eingebetteten Inhalten, die von einer anderen Site derselben [zusammengehörigen Website-Gruppe](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen, Zugriff auf Drittpartei-Cookies zu beantragen.
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet eine neue [Ansichtstransition](/de/docs/Web/API/View_Transitions_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, um sie darzustellen.

Das `Document`-Interface ist mit dem [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator)-Interface erweitert:

- [`Document.createExpression()`](/de/docs/Web/API/Document/createExpression)
  - : Übersetzt ein [`XPathExpression`](/de/docs/Web/API/XPathExpression), das dann für (wiederholte) Auswertungen verwendet werden kann.
- [`Document.createNSResolver()`](/de/docs/Web/API/Document/createNSResolver) {{deprecated_inline}}
  - : Gibt den Eingabeknoten unverändert zurück.
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
  - : Bewertet einen XPath-Ausdruck.

### Erweiterung für HTML-Dokumente

Das `Document`-Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument)-Interface oder wird für solche Dokumente erweitert:

- [`Document.clear()`](/de/docs/Web/API/Document/clear) {{Deprecated_Inline}}
  - : Diese Methode bewirkt nichts.
- [`Document.close()`](/de/docs/Web/API/Document/close)
  - : Schließt einen Dokumentstream zum Schreiben.
- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) {{Deprecated_Inline}}
  - : Führt in einem editierbaren Dokument einen Formatierungsbefehl aus.
- [`Document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Namen zurück.
- [`Document.hasFocus()`](/de/docs/Web/API/Document/hasFocus)
  - : Gibt `true` zurück, wenn sich der Fokus derzeit irgendwo innerhalb des angegebenen Dokuments befindet.
- [`Document.open()`](/de/docs/Web/API/Document/open)
  - : Öffnet einen Dokumentstream zum Schreiben.
- [`Document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt werden kann.
- [`Document.queryCommandIndeterm()`](/de/docs/Web/API/Document/queryCommandIndeterm) {{Deprecated_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich in einem unbestimmten Zustand ist.
- [`Document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt wurde.
- [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich unterstützt wird.
- [`Document.queryCommandValue()`](/de/docs/Web/API/Document/queryCommandValue) {{Deprecated_Inline}}
  - : Gibt den aktuellen Wert des aktuellen Bereichs für einen Formatierungsbefehl zurück.
- [`Document.write()`](/de/docs/Web/API/Document/write)
  - : Schreibt Text in ein Dokument.
- [`Document.writeln()`](/de/docs/Web/API/Document/writeln)
  - : Schreibt eine Zeile Text in ein Dokument.

## Statische Methoden

_Dieses Interface erbt auch von den [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) Interfaces._

- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Erstellt ein neues `Document`-Objekt aus einem HTML-String ohne Durchführung einer Überprüfung. Der String kann deklarative Schattenwurzeln enthalten.

## Ereignisse

Hören Sie diese Ereignisse unter Verwendung von `addEventListener()` oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse von [Knoten](/de/docs/Web/API/Node) stammen, die im Dokumentbaum enthalten sind.

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element das Ausführen seines Skripts abgeschlossen hat.
- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element kurz davor ist, mit der Ausführung zu beginnen.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) {{experimental_inline}}
  - : Wird auf einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (d. h. der Benutzer die Seite anzeigt).
- [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine Inhaltsrichtlinie verletzt wird.
- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar wird oder ausgeblendet wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Document/copy_event)
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.
- [`cut`](/de/docs/Web/API/Document/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Document/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Vollbildereignisse

- [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)
  - : Wird ausgelöst, wenn das `Document` in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
  - : Wird ausgelöst, wenn ein Fehler beim Versuch auftritt, in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln.

### Lade- und Entladeereignisse

- [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - : Wird ausgelöst, wenn das Dokument vollständig geladen und analysiert wurde, ohne auf das Laden von Stylesheets, Bildern und Unterrahmen zu warten.
- [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - : Wird ausgelöst, wenn sich das [`readyState`](/de/docs/Web/API/Document/readyState)-Attribut eines Dokuments geändert hat.

### Zeigersperre-Ereignisse

- [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)
  - : Wird ausgelöst, wenn der Zeiger gesperrt/entsperrt wird.
- [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)
  - : Wird ausgelöst, wenn das Sperren des Zeigers fehlgeschlagen ist.

### Scrollereignisse

- [`scroll`](/de/docs/Web/API/Document/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element das Scrollen abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scroll-Container am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser ein neues Scroll-Snap-Ziel erkennt, das sich in Bearbeitung befindet, d. h. es wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Auswahlereignisse

- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Wird ausgelöst, wenn die aktuelle Textauswahl in einem Dokument geändert wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
