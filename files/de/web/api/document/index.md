---
title: Dokument
slug: Web/API/Document
l10n:
  sourceCommit: 3b3394b9b1e966bb1d397bd6e50e2fb5bde7b3c5
---

{{APIRef("DOM")}}

Das **`Document`** Interface repräsentiert jede Webseite, die im Browser geladen wird, und dient als Einstiegspunkt in den Inhalt der Webseite, welcher der [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) ist.

Der DOM-Baum umfasst Elemente wie {{HTMLElement("body")}} und {{HTMLElement("table")}}, unter [vielen anderen](/de/docs/Web/HTML/Element). Es bietet globale Funktionalität für das Dokument, wie zum Beispiel, wie man die URL der Seite erhält und wie man neue Elemente im Dokument erstellt.

{{InheritanceDiagram}}

Das `Document` Interface beschreibt die gemeinsamen Eigenschaften und Methoden für jede Art von Dokument. Abhängig vom Dokumenttyp (z. B. [HTML](/de/docs/Web/HTML), [XML](/de/docs/Web/XML), SVG, …) steht eine umfangreichere API zur Verfügung: HTML-Dokumente, die mit dem Content-Typ `"text/html"` bereitgestellt werden, implementieren auch das [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface, während XML- und SVG-Dokumente das [`XMLDocument`](/de/docs/Web/API/XMLDocument) Interface implementieren.

## Konstruktor

- [`Document()`](/de/docs/Web/API/Document/Document)
  - : Erstellt ein neues `Document` Objekt.

## Instanzeigenschaften

_Dieses Interface erbt auch von den [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) Interfaces._

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das aktuell den Fokus hat.
- [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)
  - : Fügt ein Array von konstruierten Stylesheets hinzu, die vom Dokument verwendet werden sollen.
    Diese Stylesheets können auch mit Schatten-DOM-Unterbäumen desselben Dokuments geteilt werden.
- [`Document.body`](/de/docs/Web/API/Document/body)
  - : Gibt den {{HTMLElement("body")}} oder den {{htmlelement("frameset")}} Knoten des aktuellen Dokuments zurück.
- [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) {{ReadOnlyInline}}
  - : Gibt den Zeichensatz des Dokuments zurück.
- [`Document.childElementCount`](/de/docs/Web/API/Document/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kind-Elemente des aktuellen Dokuments zurück.
- [`Document.children`](/de/docs/Web/API/Document/children) {{ReadOnlyInline}}
  - : Gibt die Kind-Elemente des aktuellen Dokuments zurück.
- [`Document.compatMode`](/de/docs/Web/API/Document/compatMode) {{ReadOnlyInline}}
  - : Zeigt an, ob das Dokument im _Quirks_- oder _Strict_-Modus gerendert wird.
- [`Document.contentType`](/de/docs/Web/API/Document/contentType) {{ReadOnlyInline}}
  - : Gibt den Content-Type aus dem MIME-Header des aktuellen Dokuments zurück.
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("script")}} Element zurück, dessen Skript aktuell verarbeitet wird und [kein JavaScript-Modul ist](https://github.com/whatwg/html/issues/997).
- [`Document.doctype`](/de/docs/Web/API/Document/doctype) {{ReadOnlyInline}}
  - : Gibt die Dokumenttyp-Definition (DTD) des aktuellen Dokuments zurück.
- [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das ein direktes Kind des Dokuments ist. Bei HTML-Dokumenten ist dies normalerweise das [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement) Objekt, das das {{HTMLElement("html")}} Element des Dokuments repräsentiert.
- [`Document.documentURI`](/de/docs/Web/API/Document/documentURI) {{ReadOnlyInline}}
  - : Gibt den Dokumentstandort als String zurück.
- [`Document.embeds`](/de/docs/Web/API/Document/embeds) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der eingebetteten {{HTMLElement('embed')}} Elemente im Dokument zurück.
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interface mit den auf das Dokument angewendeten Funktionalitätsrichtlinien zurück.
- [`Document.firstElementChild`](/de/docs/Web/API/Document/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kind-Element des aktuellen Dokuments zurück.
- [`Document.fonts`](/de/docs/Web/API/Document/fonts)
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Interface des aktuellen Dokuments zurück.
- [`Document.forms`](/de/docs/Web/API/Document/forms) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("form")}} Elemente im Dokument zurück.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) {{ReadOnlyInline}}
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das sich derzeit im Vollbildmodus für dieses Dokument befindet.
- [`Document.head`](/de/docs/Web/API/Document/head) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("head")}} Element des aktuellen Dokuments zurück.
- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Seite als versteckt angesehen wird oder nicht.
- [`Document.images`](/de/docs/Web/API/Document/images) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Bilder im Dokument zurück.
- [`Document.implementation`](/de/docs/Web/API/Document/implementation) {{ReadOnlyInline}}
  - : Gibt die DOM-Implementierung zurück, die mit dem aktuellen Dokument verknüpft ist.
- [`Document.lastElementChild`](/de/docs/Web/API/Document/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kind-Element des aktuellen Dokuments zurück.
- [`Document.links`](/de/docs/Web/API/Document/links) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Hyperlinks im Dokument zurück.
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das momentan im Bild-in-Bild-Modus in diesem Dokument präsentiert wird.
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled) {{ReadOnlyInline}}
  - : Gibt true zurück, wenn die Bild-in-Bild-Funktion aktiviert ist.
- [`Document.plugins`](/de/docs/Web/API/Document/plugins) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der verfügbaren Plugins zurück.
- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist. `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder das Ziel in einem anderen Dokument liegt.
- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob das Dokument derzeit im Prozess des Vorausladens ist, wie über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.
- [`Document.scripts`](/de/docs/Web/API/Document/scripts) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("script")}} Elemente im Dokument zurück.
- [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`Element`](/de/docs/Web/API/Element) zurück, das das Dokument scrollt.
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) von [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekten für Stylesheets zurück, die explizit in ein Dokument eingebunden oder eingebettet sind.
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) {{ReadOnlyInline}}
  - : Gibt die Timeline als spezielle Instanz von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) zurück, die beim Laden der Seite automatisch erzeugt wird.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Gibt einen `string` zurück, der den Sichtbarkeitsstatus des Dokuments angibt. Mögliche Werte sind `visible`, `hidden`, `prerender` und `unloaded`.

### Erweiterungen für HTMLDocument

_Das `Document` Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface oder wird für solche Dokumente erweitert._

- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
  - : Gibt eine durch Semikolons getrennte Liste der Cookies für das Dokument zurück oder setzt ein einzelnes Cookie.
- [`Document.defaultView`](/de/docs/Web/API/Document/defaultView) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Fensterobjekt zurück.
- [`Document.designMode`](/de/docs/Web/API/Document/designMode)
  - : Holt/setzt die Möglichkeit, das gesamte Dokument zu bearbeiten.
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
  - : Setzt oder liest den Titel des aktuellen Dokuments.
- [`Document.URL`](/de/docs/Web/API/Document/URL) {{ReadOnlyInline}}
  - : Gibt den Dokumentstandort als String zurück.

### Veraltete Eigenschaften

- [`Document.alinkColor`](/de/docs/Web/API/Document/alinkColor) {{Deprecated_Inline}}
  - : Gibt die Farbe aktiver Links im Dokumentkörper zurück oder setzt diese.
- [`Document.all`](/de/docs/Web/API/Document/all) {{Deprecated_Inline}}
  - : Bietet Zugriff auf alle Elemente im Dokument — gibt eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) zurück, die im Dokumentknoten verwurzelt ist. Dies ist eine veraltete, nicht standardisierte Eigenschaft und sollte nicht verwendet werden.
- [`Document.anchors`](/de/docs/Web/API/Document/anchors) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste aller Anker im Dokument zurück.
- [`Document.applets`](/de/docs/Web/API/Document/applets) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück. Legacy-Eigenschaft, die früher die Liste der Applets innerhalb eines Dokuments zurückgab.
- [`Document.bgColor`](/de/docs/Web/API/Document/bgColor) {{Deprecated_Inline}}
  - : Holt/setzt die Hintergrundfarbe des aktuellen Dokuments.
- [`Document.charset`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.domain`](/de/docs/Web/API/Document/domain) {{Deprecated_Inline}}
  - : Holt/setzt die Domain des aktuellen Dokuments.
- [`Document.fgColor`](/de/docs/Web/API/Document/fgColor) {{Deprecated_Inline}}
  - : Holt/setzt die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments.
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn das Dokument sich im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) befindet.
- [`Document.inputEncoding`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Namen des Stylesheet-Sets zurück, das zuletzt aktiviert war. Hat den Wert `null`, bis das Stylesheet durch Setzen des Wertes von [`selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) geändert wurde.
- [`Document.linkColor`](/de/docs/Web/API/Document/linkColor) {{Deprecated_Inline}}
  - : Holt/setzt die Farbe von Hyperlinks im Dokument.
- [`Document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das bevorzugte Stylesheet-Set zurück, wie es vom Seitenersteller angegeben wurde.
- [`Document.rootElement`](/de/docs/Web/API/Document/rootElement) {{Deprecated_Inline}}
  - : Wie [`Document.documentElement`](/de/docs/Web/API/Document/documentElement), aber nur für {{SVGElement("svg")}} Wurzelelemente. Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt zurück, welches Stylesheet-Set derzeit verwendet wird.
- [`Document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Liste der im Dokument verfügbaren Stylesheet-Sets zurück.
- [`Document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor) {{Deprecated_Inline}}
  - : Holt/setzt die Farbe besuchter Hyperlinks.
- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) {{Deprecated_Inline}}
  - : Gibt die Kodierung zurück, wie sie durch die XML-Deklaration bestimmt wurde.
- [`Document.xmlStandalone`](/de/docs/Web/API/Document/xmlStandalone) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn die XML-Deklaration angibt, dass das Dokument eigenständig ist (_z.B._ Ein externer Teil der DTD beeinflusst den Inhalt des Dokuments), andernfalls `false`.
- [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) {{Deprecated_Inline}}
  - : Gibt die Versionsnummer zurück, wie in der XML-Deklaration angegeben oder `"1.0"`, wenn die Deklaration fehlt.

## Instanzmethoden

_Dieses Interface erbt auch von den [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) Interfaces._

- [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)
  - : Übernimmt einen Knoten aus einem externen Dokument.
- [`Document.append()`](/de/docs/Web/API/Document/append)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings nach dem letzten Kind des Dokuments ein.
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein Promise zurück, das sich mit einem Array von Objekten erfüllt, die die Top-Themen für den Nutzer repräsentieren, eines aus jeder der letzten drei Epochen. Standardmäßig führt die Methode auch dazu, dass der Browser den aktuellen Seitenbesuch aufzeichnet, wie vom Aufrufer beobachtet, sodass der Hostname der Seite später in der Berechnung von Themen verwendet werden kann. Siehe die [Topics API](/de/docs/Web/API/Topics_API) für weitere Details.
- [`Document.captureEvents()`](/de/docs/Web/API/Document/captureEvents) {{Deprecated_Inline}}
  - : Siehe [`Window.captureEvents`](/de/docs/Web/API/Window/captureEvents).
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
  - : Gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition) Objekt zurück, das den DOM-Knoten, der das Caret enthält, und den Zeichenoffset des Carets innerhalb dieses Knotens enthält.
- [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) {{Non-standard_Inline}}
  - : Holt ein [`Range`](/de/docs/Web/API/Range) Objekt für das Dokumentfragment unter den angegebenen Koordinaten.
- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
  - : Erstellt ein neues [`Attr`](/de/docs/Web/API/Attr) Objekt und gibt es zurück.
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
  - : Erstellt ein neues Attribut in einem gegebenen Namensraum und gibt es zurück.
- [`Document.createCDATASection()`](/de/docs/Web/API/Document/createCDATASection)
  - : Erstellt einen neuen CDATA-Knoten und gibt ihn zurück.
- [`Document.createComment()`](/de/docs/Web/API/Document/createComment)
  - : Erstellt einen neuen Kommentar-Knoten und gibt ihn zurück.
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
  - : Erstellt ein neues Dokument-Fragment.
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen.
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen und Namensraum-URI.
- [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent)
  - : Erstellt ein Ereignis-Objekt.
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
  - : Aktiviert die Stylesheets für das angegebene Stylesheet-Set.
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Stoppt das Vollbild-Element des Dokuments daran, im Vollbildmodus angezeigt zu werden.
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Entfernt das Video von der schwebenden Bild-in-Bild-Fenster zurück in seinen ursprünglichen Container.
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
  - : Hebt die Zeigersperre auf.
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation) Objekte zurück, die derzeit in Kraft sind und deren Ziel-Elemente Nachkommen des `Dokuments` sind.
- [`Document.getBoxQuads()`](/de/docs/Web/API/Document/getBoxQuads) {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad) Objekten zurück, die die CSS-Fragment des Knotens repräsentieren.
- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById)
  - : Gibt eine Objekt-Referenz auf das identifizierte Element zurück.
- [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Klassennamen zurück.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Tag-Namen zurück.
- [`Document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS)
  - : Gibt eine Liste von Elementen mit dem angegebenen Tag-Namen und Namensraum zurück.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection) Objekt zurück, das den Bereich des vom Benutzer ausgewählten Textes oder die aktuelle Position des Cursors repräsentiert.
- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Booleschen Wert erfüllt, der angibt, ob das Dokument Zugang zu unpartitionierten Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.importNode()`](/de/docs/Web/API/Document/importNode)
  - : Gibt eine Kopie eines Knotens aus einem externen Dokument zurück.
- [`Document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) {{Non-standard_Inline}}
  - : Ermöglicht es Ihnen, das Element zu ändern, das als Hintergrundbild für eine angegebene Element-ID verwendet wird.
- [`Document.prepend()`](/de/docs/Web/API/Document/prepend)
  - : Fügt eine Menge von [`Node`](/de/docs/Web/API/Node) Objekten oder Strings vor dem ersten Kind des Dokuments ein.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
  - : Gibt den ersten Elementknoten innerhalb des Dokuments in Dokumentreihenfolge zurück, der den angegebenen Selektoren entspricht.
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
  - : Gibt eine Liste aller Elementknoten innerhalb des Dokuments zurück, die den angegebenen Selektoren entsprechen.
- [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) {{Non-standard_Inline}}
  - : Hebt die aktuelle Mausaufnahme auf, wenn sie sich auf einem Element in diesem Dokument befindet.
- [`Document.releaseEvents()`](/de/docs/Web/API/Document/releaseEvents) {{Deprecated_Inline}}
  - : Siehe [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents).
- [`Document.replaceChildren()`](/de/docs/Web/API/Document/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines Dokuments durch einen angegebenen neuen Satz von Kindern.
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht es einem in einem Drittanbieter-Kontext geladenen Dokument (d.h. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf unpartitionierte Cookies anzufordern, in Fällen, in denen Benutzeragenten standardmäßig den Zugriff auf unpartitionierte Cookies durch Websites im Drittanbieter-Kontext blockieren, um die Privatsphäre zu verbessern.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ermöglicht es Top-Level-Websites, Drittanbieter-Cookie-Zugriff im Namen von eingebetteten Inhalten zu beantragen, die von einer anderen Website innerhalb desselben [bezogenen Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen.
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen [Ansichtsübergang](/de/docs/Web/API/View_Transitions_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, das ihn repräsentiert.

Das `Document` Interface wird mit dem [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) Interface erweitert:

- [`Document.createExpression()`](/de/docs/Web/API/Document/createExpression)
  - : Kompiliert einen [`XPathExpression`](/de/docs/Web/API/XPathExpression), der dann für (wiederholte) Auswertungen verwendet werden kann.
- [`Document.createNSResolver()`](/de/docs/Web/API/Document/createNSResolver) {{deprecated_inline}}
  - : Gibt den Eingabeknoten unverändert zurück.
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
  - : Bewertet einen XPath-Ausdruck.

### Erweiterung für HTML-Dokumente

Das `Document` Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface oder wird für solche Dokumente erweitert:

- [`Document.clear()`](/de/docs/Web/API/Document/clear) {{Deprecated_Inline}}
  - : Diese Methode macht nichts.
- [`Document.close()`](/de/docs/Web/API/Document/close)
  - : Schließt einen Dokumentstream zum Schreiben.
- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) {{Deprecated_Inline}}
  - : Führt bei einem bearbeitbaren Dokument einen Formatierungsbefehl aus.
- [`Document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Namen zurück.
- [`Document.hasFocus()`](/de/docs/Web/API/Document/hasFocus)
  - : Gibt `true` zurück, wenn der Fokus sich derzeit irgendwo innerhalb des angegebenen Dokuments befindet.
- [`Document.open()`](/de/docs/Web/API/Document/open)
  - : Öffnet einen Dokumentstream zum Schreiben.
- [`Document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt werden kann.
- [`Document.queryCommandIndeterm()`](/de/docs/Web/API/Document/queryCommandIndeterm) {{Deprecated_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich einen unbestimmten Zustand hat.
- [`Document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt wurde.
- [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich unterstützt wird.
- [`Document.queryCommandValue()`](/de/docs/Web/API/Document/queryCommandValue) {{Deprecated_Inline}}
  - : Gibt den aktuellen Wert des Formatierungsbefehls im aktuellen Bereich zurück.
- [`Document.write()`](/de/docs/Web/API/Document/write)
  - : Schreibt Text in ein Dokument.
- [`Document.writeln()`](/de/docs/Web/API/Document/writeln)
  - : Schreibt eine Textzeile in ein Dokument.

## Statische Methoden

_Dieses Interface erbt auch von den [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget) Interfaces._

- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Erstellt ein neues `Document` Objekt aus einem HTML-String, ohne eine Bereinigung durchzuführen.
    Der String kann deklarative Schattenwurzeln enthalten.

## Ereignisse

Hören Sie diese Ereignisse mithilfe von `addEventListener()` oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieses Interfaces. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse von [Knoten](/de/docs/Web/API/Node) innerhalb des Dokumentbaums überblubbern.

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} Element das Ausführen seines Skripts beendet hat
- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} kurz davor ist, das Ausführen zu starten.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) {{experimental_inline}}
  - : Wird auf einem vorausgerenderten Dokument ausgelöst, wenn es aktiviert wird (d. h. der Benutzer die Seite betrachtet).
- [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine Content Security Policy verletzt wurde.
- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar geworden ist oder ausgeblendet wurde.

### Zwischenablage-Ereignisse

- [`copy`](/de/docs/Web/API/Document/copy_event)
  - : Wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.
- [`cut`](/de/docs/Web/API/Document/cut_event)
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.
- [`paste`](/de/docs/Web/API/Document/paste_event)
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

### Vollbild-Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)
  - : Wird ausgelöst, wenn das `Document` in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt oder diesen verlässt.
- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, während versucht wird, in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln oder diesen zu verlassen.

### Lade- und Entlade-Ereignisse

- [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - : Wird ausgelöst, wenn das Dokument vollständig geladen und geparst wurde, ohne auf Stylesheets, Bilder und Subframes zu warten.
- [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - : Wird ausgelöst, wenn sich das [`readyState`](/de/docs/Web/API/Document/readyState) Attribut eines Dokuments ändert.

### Zeigersperre-Ereignisse

- [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)
  - : Wird ausgelöst, wenn der Zeiger gesperrt/entsperrt wird.
- [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)
  - : Wird ausgelöst, wenn das Sperren des Zeigers fehlgeschlagen ist.

### Scrollereignisse

- [`scroll`](/de/docs/Web/API/Document/scroll_event)
  - : Wird ausgelöst, wenn das Dokumentfenster oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)
  - : Wird ausgelöst, wenn das Dokumentfenster oder ein Element das Scrollen abgeschlossen hat.
- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Scrollcontainer am Ende eines Scrollvorgangs ausgelöst, wenn ein neuer Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scrollcontainer ausgelöst, wenn der Browser feststellt, dass ein neuer Scroll-Snap-Ziel aussteht, d.h. ausgewählt wird, wenn die aktuelle Scrollgeste endet.

### Auswahlereignisse

- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Wird ausgelöst, wenn die aktuelle Textauswahl in einem Dokument geändert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
