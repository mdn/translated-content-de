---
title: Document
slug: Web/API/Document
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{APIRef("DOM")}}

Das **`Document`** Interface repräsentiert jede Webseite, die im Browser geladen ist, und dient als Eingangspunkt zu den Inhalten der Webseite, dem [DOM-Baum](/de/docs/Web/API/Document_Object_Model#what_is_a_dom_tree).

Der DOM-Baum umfasst Elemente wie {{HTMLElement("body")}} und {{HTMLElement("table")}}, unter [vielen anderen](/de/docs/Web/HTML/Reference/Elements). Er bietet Funktionen für das Dokument im Allgemeinen, z. B. wie man die URL der Seite erhält und neue Elemente im Dokument erstellt.

{{InheritanceDiagram}}

Das `Document` Interface beschreibt die gemeinsamen Eigenschaften und Methoden für jede Art von Dokument. Je nach Dokumenttyp (z. B. [HTML](/de/docs/Web/HTML), [XML](/de/docs/Web/XML), SVG, …) steht eine größere API zur Verfügung: HTML-Dokumente, die mit dem `"text/html"` Inhalts-Typ ausgeliefert werden, implementieren auch das [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface, wohingegen XML- und SVG-Dokumente das [`XMLDocument`](/de/docs/Web/API/XMLDocument) Interface implementieren.

## Konstruktor

- [`Document()`](/de/docs/Web/API/Document/Document)
  - : Erstellt ein neues `Document` Objekt.

## Instanz-Eigenschaften

_Dieses Interface erbt außerdem von den Interfaces [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit den Fokus hat.
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) {{ReadOnlyInline}}
  - : Gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition) Instanz zurück, die die derzeit aktive [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) im Dokument darstellt, oder `null`, wenn es keinen aktiven Ansichtsübergang gibt.
- [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)
  - : Fügt dem Dokument ein Array von konstruierten Stylesheets hinzu. Diese Stylesheets können auch mit Shadow DOM Unterbaum desselben Dokuments geteilt werden.
- [`Document.body`](/de/docs/Web/API/Document/body)
  - : Gibt das {{HTMLElement("body")}} oder {{htmlelement("frameset")}} Knoten des aktuellen Dokuments zurück.
- [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) {{ReadOnlyInline}}
  - : Gibt den Zeichensatz zurück, der vom Dokument verwendet wird.
- [`Document.childElementCount`](/de/docs/Web/API/Document/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente des aktuellen Dokuments zurück.
- [`Document.children`](/de/docs/Web/API/Document/children) {{ReadOnlyInline}}
  - : Gibt die Kindelemente des aktuellen Dokuments zurück.
- [`Document.compatMode`](/de/docs/Web/API/Document/compatMode) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument im _Quirks_ oder _Strict_ Modus gerendert wird.
- [`Document.contentType`](/de/docs/Web/API/Document/contentType) {{ReadOnlyInline}}
  - : Gibt den Content-Type aus dem MIME-Header des aktuellen Dokuments zurück.
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("script")}} Element zurück, dessen Skript derzeit verarbeitet wird und [kein JavaScript-Modul ist](https://github.com/whatwg/html/issues/997).
- [`Document.doctype`](/de/docs/Web/API/Document/doctype) {{ReadOnlyInline}}
  - : Gibt die Dokumententyp-Definition (DTD) des aktuellen Dokuments zurück.
- [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das ein direktes Kind des Dokuments ist. Für HTML-Dokumente ist dies normalerweise das [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement) Objekt, das das {{HTMLElement("html")}} Element des Dokuments darstellt.
- [`Document.documentURI`](/de/docs/Web/API/Document/documentURI) {{ReadOnlyInline}}
  - : Gibt den Dokumentstandort als Zeichenkette zurück.
- [`Document.embeds`](/de/docs/Web/API/Document/embeds) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der eingebetteten {{HTMLElement('embed')}} Elemente im Dokument zurück.
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt das [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy) Interface mit den auf das Dokument angewendeten Feature-Policies zurück.
- [`Document.firstElementChild`](/de/docs/Web/API/Document/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste Kindelement des aktuellen Dokuments zurück.
- [`Document.fonts`](/de/docs/Web/API/Document/fonts)
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Interface des aktuellen Dokuments zurück.
- [`Document.forms`](/de/docs/Web/API/Document/forms) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("form")}} Elemente im Dokument zurück.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) {{ReadOnlyInline}}
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das aktuell im Vollbildmodus für dieses Dokument ist.
- [`Document.head`](/de/docs/Web/API/Document/head) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("head")}} Element des aktuellen Dokuments zurück.
- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob die Seite als verborgen betrachtet wird oder nicht.
- [`Document.images`](/de/docs/Web/API/Document/images) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Bilder im Dokument zurück.
- [`Document.implementation`](/de/docs/Web/API/Document/implementation) {{ReadOnlyInline}}
  - : Gibt die DOM-Implementierung zurück, die mit dem aktuellen Dokument verknüpft ist.
- [`Document.lastElementChild`](/de/docs/Web/API/Document/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement des aktuellen Dokuments zurück.
- [`Document.links`](/de/docs/Web/API/Document/links) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Hyperlinks im Dokument zurück.
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das aktuell im Bild-im-Bild-Modus in diesem Dokument präsentiert wird.
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled) {{ReadOnlyInline}}
  - : Gibt true zurück, wenn die Bild-im-Bild-Funktion aktiviert ist.
- [`Document.plugins`](/de/docs/Web/API/Document/plugins) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der verfügbaren Plugins zurück.
- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, das als Ziel für Mausereignisse gesetzt wurde, während der Zeiger gesperrt ist. `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder das Ziel in einem anderen Dokument ist.
- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob das Dokument derzeit im Prozess des Vorladens ist, wie über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.
- [`Document.scripts`](/de/docs/Web/API/Document/scripts) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("script")}} Elemente im Dokument zurück.
- [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`Element`](/de/docs/Web/API/Element) zurück, das das Dokument scrollt.
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) der [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet) Objekte für Stylesheets zurück, die explizit in ein Dokument verlinkt oder eingebettet sind.
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) {{ReadOnlyInline}}
  - : Gibt eine Zeitleiste zurück als spezielle Instanz von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline), die automatisch beim Laden der Seite erstellt wird.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Gibt eine `string` zurück, die den Sichtbarkeitsstatus des Dokuments bezeichnet. Mögliche Werte sind `visible`, `hidden` und `unloaded`.

### Erweiterungen für HTML-Dokumente

_Das `Document` Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface oder ist für solche Dokumente erweitert._

- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
  - : Gibt eine durch Semikolons getrennte Liste der Cookies für dieses Dokument zurück oder setzt ein einzelnes Cookie.
- [`Document.defaultView`](/de/docs/Web/API/Document/defaultView) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Fensterobjekt zurück.
- [`Document.designMode`](/de/docs/Web/API/Document/designMode)
  - : Ruft die Fähigkeit ab, das gesamte Dokument zu bearbeiten, oder setzt diese Fähigkeit.
- [`Document.dir`](/de/docs/Web/API/Document/dir)
  - : Ruft die Richtung (rtl/ltr) des Dokuments ab oder setzt diese.
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
  - : Ruft den Titel des aktuellen Dokuments ab oder setzt diesen.
- [`Document.URL`](/de/docs/Web/API/Document/URL) {{ReadOnlyInline}}
  - : Gibt den Dokumentstandort als Zeichenkette zurück.
- Benannte Eigenschaften
  - : Einige Elemente im Dokument werden auch als Eigenschaften exponiert:
    - Für jedes {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, und {{HTMLElement("object")}} Element wird sein `name` (falls nicht leer) exponiert.
      Wenn das Dokument zum Beispiel `<form name="my_form">` enthält, dann geben `document["my_form"]` (und das Äquivalent `document.my_form`) eine Referenz auf dieses Element zurück.
    - Für jedes {{HTMLElement("object")}} Element wird seine `id` (falls nicht leer) exponiert.
    - Für jedes {{HTMLElement("img")}} Element mit nicht leerem `name`, wird seine `id` (falls nicht leer) exponiert.

    Wenn eine Eigenschaft einem einzelnen Element entspricht, wird dieses Element direkt zurückgegeben. Wenn dieses einzelne Element ein iframe ist, wird stattdessen sein [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben. Wenn die Eigenschaft mehreren Elementen entspricht, wird eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurückgegeben, die alle enthält.

### Veraltete Eigenschaften

- [`Document.alinkColor`](/de/docs/Web/API/Document/alinkColor) {{Deprecated_Inline}}
  - : Gibt die Farbe der aktiven Links im Dokumentenkörper zurück oder setzt diese.
- [`Document.all`](/de/docs/Web/API/Document/all) {{Deprecated_Inline}}
  - : Bietet Zugriff auf alle Elemente im Dokument - es gibt eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) zurück, die im Dokumentenknoten verwurzelt ist. Dies ist eine veraltete, nicht standardisierte Eigenschaft und sollte nicht verwendet werden.
- [`Document.anchors`](/de/docs/Web/API/Document/anchors) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste aller Anker im Dokument zurück.
- [`Document.applets`](/de/docs/Web/API/Document/applets) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück. Veraltete Eigenschaft, die früher die Liste der Applets in einem Dokument zurückgab.
- [`Document.bgColor`](/de/docs/Web/API/Document/bgColor) {{Deprecated_Inline}}
  - : Ruft die Hintergrundfarbe des aktuellen Dokuments ab oder setzt diese.
- [`Document.charset`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.domain`](/de/docs/Web/API/Document/domain) {{Deprecated_Inline}}
  - : Ruft die Domain des aktuellen Dokuments ab oder setzt diese.
- [`Document.fgColor`](/de/docs/Web/API/Document/fgColor) {{Deprecated_Inline}}
  - : Ruft die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments ab oder setzt diese.
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn das Dokument im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) ist.
- [`Document.inputEncoding`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Namen des Stylesheet-Sets zurück, das zuletzt aktiviert war. Hat den Wert `null`, bis das Stylesheet geändert wird, indem der Wert von [`selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) gesetzt wird.
- [`Document.linkColor`](/de/docs/Web/API/Document/linkColor) {{Deprecated_Inline}}
  - : Ruft die Farbe von Hyperlinks im Dokument ab oder setzt diese.
- [`Document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das bevorzugte Stylesheet-Set zurück, wie vom Seitenautor angegeben.
- [`Document.rootElement`](/de/docs/Web/API/Document/rootElement) {{Deprecated_Inline}}
  - : Wie [`Document.documentElement`](/de/docs/Web/API/Document/documentElement), jedoch nur für {{SVGElement("svg")}} Wurzelelemente. Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt zurück, welches Stylesheet-Set derzeit verwendet wird.
- [`Document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Liste der auf dem Dokument verfügbaren Stylesheet-Sets zurück.
- [`Document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor) {{Deprecated_Inline}}
  - : Ruft die Farbe von besuchten Hyperlinks ab oder setzt diese.
- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) {{Deprecated_Inline}}
  - : Gibt die Kodierung zurück, wie durch die XML-Deklaration bestimmt.
- `Document.xmlStandalone` {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn die XML-Deklaration angibt, dass das Dokument eigenständig ist (_z. B._ Ein externer Teil der DTD beeinflusst den Inhalt des Dokuments), ansonsten `false`.
- [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) {{Deprecated_Inline}}
  - : Gibt die Versionsnummer zurück, wie in der XML-Deklaration angegeben oder `"1.0"`, wenn die Deklaration fehlt.

## Instanz-Methoden

_Dieses Interface erbt außerdem von den Interfaces [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)
  - : Adoptiert einen Knoten aus einem externen Dokument.
- [`Document.append()`](/de/docs/Web/API/Document/append)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen nach dem letzten Kind des Dokuments ein.
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) {{Experimental_Inline}}
  - : Gibt an, dass eine bestimmte Zeichenfolge von einem Screenreader angekündigt werden soll.
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) {{non-standard_inline}} {{deprecated_inline}}
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die wichtigsten Themen für den Benutzer darstellen, eines aus jedem der letzten drei Epochen. Standardmäßig verursacht die Methode auch, dass der Browser den aktuellen Seitenbesuch aufzeichnet, wie er vom Aufrufer beobachtet wurde, sodass der Hostname der Seite später zur Themenberechnung verwendet werden kann. Weitere Details finden Sie in der [Topics API](/de/docs/Web/API/Topics_API).
- `Document.captureEvents()` {{Deprecated_Inline}}
  - : Siehe [`Window.captureEvents`](/de/docs/Web/API/Window/captureEvents).
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
  - : Gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition) Objekt zurück, das den DOM-Knoten enthält, der das Caret enthält, und den Zeichenoffset des Carets in diesem Knoten.
- [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) {{Non-standard_Inline}}
  - : Ruft ein [`Range`](/de/docs/Web/API/Range) Objekt für den Dokumentabschnitt unter den angegebenen Koordinaten ab.
- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
  - : Erstellt ein neues [`Attr`](/de/docs/Web/API/Attr) Objekt und gibt es zurück.
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
  - : Erstellt einen neuen Attributsknoten in einem angegebenen Namensraum und gibt ihn zurück.
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
  - : Stoppt das Dokumentelement aus dem Vollbild.
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Entfernen Sie das Video aus dem schwebenden Bild-im-Bild-Fenster zurück zu seinem ursprünglichen Container.
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
  - : Löst die Zeigersperre.
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array aller [`Animation`](/de/docs/Web/API/Animation) Objekte zurück, die derzeit in Kraft sind, deren Zielelemente Nachfolger des `document` sind.
- `Document.getBoxQuads()` {{Experimental_Inline}}
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
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection) Objekt zurück, das den Bereich des vom Benutzer ausgewählten Textes oder die aktuelle Position des Carets darstellt.
- [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken) {{experimental_inline}}
  - : Gibt ein Versprechen zurück, das mit einem Booleschen erfüllt wird, der angibt, ob der Browser ein [privates Zustandstoken](/de/docs/Web/API/Private_State_Token_API) speichert, das von einem bestimmten Aussteller stammt.
- [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord) {{experimental_inline}}
  - : Gibt ein Versprechen zurück, das mit einem Booleschen erfüllt wird, der angibt, ob der Browser einen [Rücklösungseintrag](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens) hat, der von einem bestimmten Aussteller stammt.
- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit einem booleschen Wert auflöst, der angibt, ob das Dokument Zugriff auf nicht partitionierte Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.importNode()`](/de/docs/Web/API/Document/importNode)
  - : Gibt eine Kopie eines Knotens aus einem externen Dokument zurück.
- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
  - : Verschiebt einen gegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des `Document` DOM-Knotens als direktes Kind, vor einen gegebenen Referenzknoten, ohne den Knoten zu entfernen und dann wieder einzufügen.
- [`Document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) {{Non-standard_Inline}}
  - : Ermöglicht es Ihnen, das Element zu ändern, welches als Hintergrundbild für eine bestimmte Element-ID verwendet wird.
- [`Document.prepend()`](/de/docs/Web/API/Document/prepend)
  - : Fügt eine Reihe von [`Node`](/de/docs/Web/API/Node) Objekten oder Zeichenfolgen vor dem ersten Kind des Dokuments ein.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
  - : Gibt den ersten Elementknoten im Dokument, in Dokumentreihenfolge, zurück, der die angegebenen Selektoren erfüllt.
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
  - : Gibt eine Liste aller Elementknoten im Dokument zurück, die die angegebenen Selektoren erfüllen.
- [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) {{Non-standard_Inline}}
  - : Löst das aktuelle Maus-Capture, wenn es sich auf einem Element in diesem Dokument befindet.
- `Document.releaseEvents()` {{Deprecated_Inline}}
  - : Siehe [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents).
- [`Document.replaceChildren()`](/de/docs/Web/API/Document/replaceChildren)
  - : Ersetzt die vorhandenen Kinder eines Dokuments durch einen bestimmten neuen Satz von Kindern.
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht einem Dokument, das in einem Drittpartei-Kontext geladen ist (d.h. eingebettet in ein {{htmlelement("iframe")}}), den Zugriff auf nicht partitionierte Cookies anzufordern, in Fällen, in denen Benutzeragenten standardmäßig den Zugriff auf nicht partitionierte Cookies durch Websites, die in einem Drittpartei-Kontext geladen sind, blockieren, um die Privatsphäre zu verbessern.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{experimental_inline}}
  - : Ermöglicht es Top-Level-Seiten, Drittanbieter-Cookie-Zugang im Namen eingebetteter Inhalte, die von einer anderen Website in demselben [verwandten Website-Set](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammen, anzufordern.
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition) Objekt zurück, um ihn zu repräsentieren.

Das `Document` Interface wird mit dem [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) Interface erweitert:

- [`Document.createExpression()`](/de/docs/Web/API/Document/createExpression)
  - : Kompiliert einen [`XPathExpression`](/de/docs/Web/API/XPathExpression), welcher dann für wiederholte Auswertungen verwendet werden kann.
- [`Document.createNSResolver()`](/de/docs/Web/API/Document/createNSResolver) {{deprecated_inline}}
  - : Gibt den Eingabeknoten als solchen zurück.
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
  - : Bewertet einen XPath-Ausdruck.

### Erweiterung für HTML-Dokumente

Das `Document` Interface für HTML-Dokumente erbt vom [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) Interface oder ist für solche Dokumente erweitert:

- [`Document.clear()`](/de/docs/Web/API/Document/clear) {{Deprecated_Inline}}
  - : Diese Methode macht nichts.
- [`Document.close()`](/de/docs/Web/API/Document/close)
  - : Schließt einen Dokument-Stream zum Schreiben.
- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) {{Deprecated_Inline}}
  - : Führt auf einem bearbeitbaren Dokument einen Formatierungsbefehl aus.
- [`Document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Namen zurück.
- [`Document.hasFocus()`](/de/docs/Web/API/Document/hasFocus)
  - : Gibt `true` zurück, wenn der Fokus derzeit irgendwo innerhalb des angegebenen Dokuments liegt.
- [`Document.open()`](/de/docs/Web/API/Document/open)
  - : Öffnet einen Dokument-Stream zum Schreiben.
- [`Document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl auf dem aktuellen Bereich ausgeführt werden kann.
- `Document.queryCommandIndeterm()` {{Deprecated_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich in einem unbestimmten Zustand ist.
- [`Document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt wurde.
- [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich unterstützt wird.
- `Document.queryCommandValue()` {{Deprecated_Inline}}
  - : Gibt den aktuellen Wert des aktuellen Bereichs für einen Formatierungsbefehl zurück.
- [`Document.write()`](/de/docs/Web/API/Document/write) {{deprecated_inline}}
  - : Schreibt Text in ein Dokument.
- [`Document.writeln()`](/de/docs/Web/API/Document/writeln) {{deprecated_inline}}
  - : Schreibt eine Textzeile in ein Dokument.

## Statische Methoden

_Dieses Interface erbt außerdem von den Interfaces [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static) {{experimental_inline}}
  - : Erstellt ein neues `Document` Objekt aus einer HTML-Zeichenkette auf eine XSS-sichere Weise mit Sanitierung.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Erstellt ein neues `Document` Objekt aus einer HTML-Zeichenkette ohne Sanitierung. Die Zeichenkette kann deklarative Schattenwurzeln enthalten.

## Ereignisse

Hören Sie diese Ereignisse mit `addEventListener()` ab oder weisen Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zu. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse von [Knoten](/de/docs/Web/API/Node) im Dokumentbaum geblubbert werden.

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} Element das Ausführen seines Skripts abgeschlossen hat
- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}} Element kurz vor dem Ausführen steht.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) {{experimental_inline}}
  - : Wird auf einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (z. B. der Benutzer sieht die Seite).
- [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine Inhalts-Sicherheitsrichtlinie verletzt wird.
- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Registers sichtbar oder versteckt wird.

### Vollbild-Ereignisse

- [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)
  - : Wird ausgelöst, wenn das `Document` in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt oder diesen verlässt.
- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt, während versucht wird, in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln oder diesen zu verlassen.

### Lade- & Entlade-Ereignisse

- [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - : Wird ausgelöst, wenn das Dokument vollständig geladen und analysiert wurde, ohne darauf zu warten, dass Stylesheets, Bilder und Subframes das Laden abschließen.
- [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - : Wird ausgelöst, wenn das [`readyState`](/de/docs/Web/API/Document/readyState) Attribut eines Dokuments geändert wurde.

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
  - : Wird am Scroll-Container am Ende eines Scroll-Vorgangs ausgelöst, wenn ein neuer Scroll-Snap-Zielpunkt ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird am Scroll-Container ausgelöst, wenn der Browser feststellt, dass ein neuer Scroll-Snap-Zielpunkt ansteht, das heißt, er wird ausgewählt, wenn die aktuelle Scroll-Geste endet.

### Auswahlereignisse

- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Wird ausgelöst, wenn die aktuelle Textauswahl in einem Dokument geändert wird.

### Gebubbelte Ereignisse

Nicht alle Ereignisse, die geblubbert werden, können das `Document` Objekt erreichen. Nur die folgenden können abgehört werden und können am `Document` Objekt abgehört werden:

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
