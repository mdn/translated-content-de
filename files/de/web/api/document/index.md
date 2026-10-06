---
title: Document
slug: Web/API/Document
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("DOM")}}

Die **`Document`**-Schnittstelle repräsentiert jede im Browser geladene Webseite und dient als Einstiegspunkt für deren Inhalt, den [DOM-Baum](/de/docs/Web/API/Document_Object_Model#what_is_a_dom_tree).

Der DOM-Baum enthält neben [vielen anderen](/de/docs/Web/HTML/Reference/Elements) Elemente wie {{HTMLElement("body")}} und {{HTMLElement("table")}}. Die Schnittstelle stellt Funktionen für das gesamte Dokument bereit, etwa zum Abrufen der URL der Seite und zum Erstellen neuer Elemente im Dokument.

{{InheritanceDiagram}}

Die `Document`-Schnittstelle beschreibt die gemeinsamen Eigenschaften und Methoden aller Arten von Dokumenten. Je nach Dokumenttyp (z. B. [HTML](/de/docs/Web/HTML), [XML](/de/docs/Web/XML), SVG …) steht eine umfangreichere API zur Verfügung: HTML-Dokumente, die mit dem Content-Type `"text/html"` bereitgestellt werden, implementieren zusätzlich die Schnittstelle [`HTMLDocument`](/de/docs/Web/API/HTMLDocument), während XML- und SVG-Dokumente die Schnittstelle [`XMLDocument`](/de/docs/Web/API/XMLDocument) implementieren.

## Konstruktor

- [`Document()`](/de/docs/Web/API/Document/Document)
  - : Erstellt ein neues `Document`-Objekt.

## Instanzeigenschaften

_Diese Schnittstelle erbt auch von den Schnittstellen [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.activeElement`](/de/docs/Web/API/Document/activeElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das derzeit den Fokus hat.
- [`Document.activeViewTransition`](/de/docs/Web/API/Document/activeViewTransition) {{ReadOnlyInline}}
  - : Gibt eine [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Instanz zurück, die die derzeit im Dokument aktive [Ansichtsübergangsanimation](/de/docs/Web/API/View_Transition_API) repräsentiert, oder `null`, wenn kein Ansichtsübergang aktiv ist.
- [`Document.adoptedStyleSheets`](/de/docs/Web/API/Document/adoptedStyleSheets)
  - : Fügt ein Array erstellter Stylesheets hinzu, die vom Dokument verwendet werden sollen.
    Diese Stylesheets können auch mit Shadow-DOM-Teilbäumen desselben Dokuments geteilt werden.
- [`Document.body`](/de/docs/Web/API/Document/body)
  - : Gibt den {{HTMLElement("body")}}- oder {{htmlelement("frameset")}}-Knoten des aktuellen Dokuments zurück.
- [`Document.characterSet`](/de/docs/Web/API/Document/characterSet) {{ReadOnlyInline}}
  - : Gibt den vom Dokument verwendeten Zeichensatz zurück.
- [`Document.childElementCount`](/de/docs/Web/API/Document/childElementCount) {{ReadOnlyInline}}
  - : Gibt die Anzahl der untergeordneten Elemente des aktuellen Dokuments zurück.
- [`Document.children`](/de/docs/Web/API/Document/children) {{ReadOnlyInline}}
  - : Gibt die untergeordneten Elemente des aktuellen Dokuments zurück.
- [`Document.compatMode`](/de/docs/Web/API/Document/compatMode) {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument im _Quirks_- oder im _Strict_-Modus gerendert wird.
- [`Document.contentType`](/de/docs/Web/API/Document/contentType) {{ReadOnlyInline}}
  - : Gibt den Content-Type aus dem MIME-Header des aktuellen Dokuments zurück.
- [`Document.currentScript`](/de/docs/Web/API/Document/currentScript) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("script")}}-Element zurück, dessen Skript gerade verarbeitet wird und das [kein JavaScript-Modul ist](https://github.com/whatwg/html/issues/997).
- [`Document.customElementRegistry`](/de/docs/Web/API/Document/customElementRegistry) {{ReadOnlyInline}}
  - : Das diesem Dokument zugeordnete [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)-Objekt oder `null`, falls keines festgelegt wurde.
- [`Document.doctype`](/de/docs/Web/API/Document/doctype) {{ReadOnlyInline}}
  - : Gibt die Dokumenttypdefinition (DTD) des aktuellen Dokuments zurück.
- [`Document.documentElement`](/de/docs/Web/API/Document/documentElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das ein direktes untergeordnetes Element des Dokuments ist. Bei HTML-Dokumenten ist dies normalerweise das [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement)-Objekt, das das {{HTMLElement("html")}}-Element des Dokuments repräsentiert.
- [`Document.documentURI`](/de/docs/Web/API/Document/documentURI) {{ReadOnlyInline}}
  - : Gibt die Adresse des Dokuments als Zeichenfolge zurück.
- [`Document.embeds`](/de/docs/Web/API/Document/embeds) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der eingebetteten {{HTMLElement('embed')}}-Elemente im Dokument zurück.
- [`Document.featurePolicy`](/de/docs/Web/API/Document/featurePolicy) {{Experimental_Inline}} {{ReadOnlyInline}} {{non-standard_inline}}
  - : Gibt die [`FeaturePolicy`](/de/docs/Web/API/FeaturePolicy)-Schnittstelle mit den auf das Dokument angewendeten Feature-Richtlinien zurück.
- [`Document.firstElementChild`](/de/docs/Web/API/Document/firstElementChild) {{ReadOnlyInline}}
  - : Gibt das erste untergeordnete Element des aktuellen Dokuments zurück.
- [`Document.fonts`](/de/docs/Web/API/Document/fonts) {{ReadOnlyInline}}
  - : Gibt die [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle des aktuellen Dokuments zurück.
- [`Document.forms`](/de/docs/Web/API/Document/forms) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("form")}}-Elemente im Dokument zurück.
- [`Document.fragmentDirective`](/de/docs/Web/API/Document/fragmentDirective) {{ReadOnlyInline}}
  - : Gibt die [`FragmentDirective`](/de/docs/Web/API/FragmentDirective) für das aktuelle Dokument zurück.
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement) {{ReadOnlyInline}}
  - : Das Element, das für dieses Dokument derzeit im Vollbildmodus angezeigt wird.
- [`Document.head`](/de/docs/Web/API/Document/head) {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("head")}}-Element des aktuellen Dokuments zurück.
- [`Document.hidden`](/de/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Seite als verborgen gilt.
- [`Document.images`](/de/docs/Web/API/Document/images) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Bilder im Dokument zurück.
- [`Document.implementation`](/de/docs/Web/API/Document/implementation) {{ReadOnlyInline}}
  - : Gibt die dem aktuellen Dokument zugeordnete DOM-Implementierung zurück.
- [`Document.lastElementChild`](/de/docs/Web/API/Document/lastElementChild) {{ReadOnlyInline}}
  - : Gibt das letzte untergeordnete Element des aktuellen Dokuments zurück.
- [`Document.links`](/de/docs/Web/API/Document/links) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der Hyperlinks im Dokument zurück.
- [`Document.pictureInPictureElement`](/de/docs/Web/API/Document/pictureInPictureElement) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, das in diesem Dokument derzeit im Bild-im-Bild-Modus angezeigt wird.
- [`Document.pictureInPictureEnabled`](/de/docs/Web/API/Document/pictureInPictureEnabled) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Bild-im-Bild-Funktion aktiviert ist.
- [`Document.plugins`](/de/docs/Web/API/Document/plugins) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der verfügbaren Plugins zurück.
- [`Document.pointerLockElement`](/de/docs/Web/API/Document/pointerLockElement) {{ReadOnlyInline}}
  - : Gibt das Element zurück, das als Ziel für Mausereignisse festgelegt wurde, während der Zeiger gesperrt ist. Gibt `null` zurück, wenn die Sperre noch aussteht, der Zeiger nicht gesperrt ist oder sich das Ziel in einem anderen Dokument befindet.
- [`Document.prerendering`](/de/docs/Web/API/Document/prerendering) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Dokument derzeit vorgerendert wird, nachdem dies über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) veranlasst wurde.
- [`Document.scripts`](/de/docs/Web/API/Document/scripts) {{ReadOnlyInline}}
  - : Gibt eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) der {{HTMLElement("script")}}-Elemente im Dokument zurück.
- [`Document.scrollingElement`](/de/docs/Web/API/Document/scrollingElement) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`Element`](/de/docs/Web/API/Element) zurück, das das Dokument scrollt.
- [`Document.styleSheets`](/de/docs/Web/API/Document/styleSheets) {{ReadOnlyInline}}
  - : Gibt eine [`StyleSheetList`](/de/docs/Web/API/StyleSheetList) mit [`CSSStyleSheet`](/de/docs/Web/API/CSSStyleSheet)-Objekten für Stylesheets zurück, die ausdrücklich in das Dokument eingebunden oder darin eingebettet sind.
- [`Document.timeline`](/de/docs/Web/API/Document/timeline) {{ReadOnlyInline}}
  - : Gibt die Zeitleiste als spezielle Instanz von [`DocumentTimeline`](/de/docs/Web/API/DocumentTimeline) zurück, die beim Laden der Seite automatisch erstellt wird.
- [`Document.visibilityState`](/de/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Gibt eine `string` zurück, die den Sichtbarkeitsstatus des Dokuments bezeichnet. Mögliche Werte sind `visible`, `hidden` und `unloaded`.

### Erweiterungen für HTMLDocument

_Die `Document`-Schnittstelle für HTML-Dokumente erbt von der Schnittstelle [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder wird für solche Dokumente erweitert._

- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
  - : Gibt eine durch Semikolons getrennte Liste der Cookies für dieses Dokument zurück oder setzt ein einzelnes Cookie.
- [`Document.defaultView`](/de/docs/Web/API/Document/defaultView) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Window-Objekt zurück.
- [`Document.designMode`](/de/docs/Web/API/Document/designMode)
  - : Ruft die Möglichkeit ab, das gesamte Dokument zu bearbeiten, oder legt sie fest.
- [`Document.dir`](/de/docs/Web/API/Document/dir)
  - : Ruft die Schreibrichtung (rtl/ltr) des Dokuments ab oder legt sie fest.
- [`Document.fullscreenEnabled`](/de/docs/Web/API/Document/fullscreenEnabled) {{ReadOnlyInline}}
  - : Gibt an, ob der Vollbildmodus verfügbar ist.
- [`Document.lastModified`](/de/docs/Web/API/Document/lastModified) {{ReadOnlyInline}}
  - : Gibt das Datum zurück, an dem das Dokument zuletzt geändert wurde.
- [`Document.location`](/de/docs/Web/API/Document/location) {{ReadOnlyInline}}
  - : Gibt die URI des aktuellen Dokuments zurück.
- [`Document.readyState`](/de/docs/Web/API/Document/readyState) {{ReadOnlyInline}}
  - : Gibt den Ladestatus des Dokuments zurück.
- [`Document.referrer`](/de/docs/Web/API/Document/referrer) {{ReadOnlyInline}}
  - : Gibt die URI der Seite zurück, die auf diese Seite verlinkt hat.
- [`Document.title`](/de/docs/Web/API/Document/title)
  - : Legt den Titel des aktuellen Dokuments fest oder gibt ihn zurück.
- [`Document.URL`](/de/docs/Web/API/Document/URL) {{ReadOnlyInline}}
  - : Gibt die Adresse des Dokuments als Zeichenfolge zurück.
- Benannte Eigenschaften
  - : Einige Elemente im Dokument sind auch als Eigenschaften verfügbar:
    - Für jedes {{HTMLElement("embed")}}-, {{HTMLElement("form")}}-, {{HTMLElement("iframe")}}-, {{HTMLElement("img")}}- und {{HTMLElement("object")}}-Element wird dessen `name` bereitgestellt, sofern er nicht leer ist.
      Wenn das Dokument beispielsweise `<form name="my_form">` enthält, geben `document["my_form"]` und das gleichwertige `document.my_form` eine Referenz auf dieses Element zurück.
    - Für jedes {{HTMLElement("object")}}-Element wird dessen `id` bereitgestellt, sofern sie nicht leer ist.
    - Für jedes {{HTMLElement("img")}}-Element mit nicht leerem `name` wird dessen `id` bereitgestellt, sofern sie nicht leer ist.

    Wenn eine Eigenschaft einem einzelnen Element entspricht, wird dieses Element direkt zurückgegeben. Ist dieses einzelne Element ein iframe, wird stattdessen dessen [`contentWindow`](/de/docs/Web/API/HTMLIFrameElement/contentWindow) zurückgegeben. Entspricht die Eigenschaft mehreren Elementen, wird eine [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) mit allen diesen Elementen zurückgegeben.

### Veraltete Eigenschaften

- [`Document.alinkColor`](/de/docs/Web/API/Document/alinkColor) {{Deprecated_Inline}}
  - : Gibt die Farbe aktiver Links im Dokumentkörper zurück oder legt sie fest.
- [`Document.all`](/de/docs/Web/API/Document/all) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ermöglicht den Zugriff auf alle Elemente im Dokument. Die Eigenschaft gibt eine [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection) zurück, deren Wurzel der Dokumentknoten ist. Diese veraltete, nicht standardisierte Eigenschaft sollte nicht verwendet werden.
- [`Document.anchors`](/de/docs/Web/API/Document/anchors) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste aller Anker im Dokument zurück.
- [`Document.applets`](/de/docs/Web/API/Document/applets) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine leere [`HTMLCollection`](/de/docs/Web/API/HTMLCollection) zurück. Diese veraltete Eigenschaft gab früher die Liste der Applets in einem Dokument zurück.
- [`Document.bgColor`](/de/docs/Web/API/Document/bgColor) {{Deprecated_Inline}}
  - : Ruft die Hintergrundfarbe des aktuellen Dokuments ab oder legt sie fest.
- [`Document.charset`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias für [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.domain`](/de/docs/Web/API/Document/domain) {{Deprecated_Inline}}
  - : Ruft die Domain des aktuellen Dokuments ab oder legt sie fest.
- [`Document.fgColor`](/de/docs/Web/API/Document/fgColor) {{Deprecated_Inline}}
  - : Ruft die Vordergrund- bzw. Textfarbe des aktuellen Dokuments ab oder legt sie fest.
- [`Document.fullscreen`](/de/docs/Web/API/Document/fullscreen) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn sich das Dokument im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) befindet.
- [`Document.inputEncoding`](/de/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias für [`Document.characterSet`](/de/docs/Web/API/Document/characterSet). Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.lastStyleSheetSet`](/de/docs/Web/API/Document/lastStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Namen des zuletzt aktivierten Stylesheet-Sets zurück. Der Wert bleibt `null`, bis das Stylesheet durch Festlegen des Werts von [`selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) geändert wird.
- [`Document.linkColor`](/de/docs/Web/API/Document/linkColor) {{Deprecated_Inline}}
  - : Ruft die Farbe von Hyperlinks im Dokument ab oder legt sie fest.
- [`Document.preferredStyleSheetSet`](/de/docs/Web/API/Document/preferredStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das vom Autor der Seite angegebene bevorzugte Stylesheet-Set zurück.
- [`Document.rootElement`](/de/docs/Web/API/Document/rootElement) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Wie [`Document.documentElement`](/de/docs/Web/API/Document/documentElement), jedoch nur für {{SVGElement("svg")}}-Wurzelelemente. Verwenden Sie stattdessen diese Eigenschaft.
- [`Document.selectedStyleSheetSet`](/de/docs/Web/API/Document/selectedStyleSheetSet) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt zurück, welches Stylesheet-Set derzeit verwendet wird.
- [`Document.styleSheetSets`](/de/docs/Web/API/Document/styleSheetSets) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Liste der für das Dokument verfügbaren Stylesheet-Sets zurück.
- [`Document.vlinkColor`](/de/docs/Web/API/Document/vlinkColor) {{Deprecated_Inline}}
  - : Ruft die Farbe besuchter Hyperlinks ab oder legt sie fest.
- [`Document.xmlEncoding`](/de/docs/Web/API/Document/xmlEncoding) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Gibt die durch die XML-Deklaration bestimmte Zeichenkodierung zurück.
- `Document.xmlStandalone` {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn die XML-Deklaration angibt, dass das Dokument eigenständig ist (_z. B._ wenn ein externer Teil der DTD den Inhalt des Dokuments beeinflusst), andernfalls `false`.
- [`Document.xmlVersion`](/de/docs/Web/API/Document/xmlVersion) {{Deprecated_Inline}}
  - : Gibt die in der XML-Deklaration angegebene Versionsnummer zurück oder `"1.0"`, wenn keine Deklaration vorhanden ist.

## Instanzmethoden

_Diese Schnittstelle erbt auch von den Schnittstellen [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.adoptNode()`](/de/docs/Web/API/Document/adoptNode)
  - : Übernimmt einen Knoten aus einem externen Dokument.
- [`Document.append()`](/de/docs/Web/API/Document/append)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen nach dem letzten untergeordneten Knoten des Dokuments ein.
- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)
  - : Gibt an, dass ein bestimmter Text von einem Screenreader vorgelesen werden soll.
- [`Document.browsingTopics()`](/de/docs/Web/API/Document/browsingTopics) {{non-standard_inline}} {{deprecated_inline}}
  - : Gibt ein Promise zurück, das mit einem Array von Objekten erfüllt wird, die die wichtigsten Themen für den Benutzer repräsentieren – jeweils eines aus jeder der letzten drei Epochen. Standardmäßig veranlasst die Methode den Browser außerdem, den aktuellen Seitenbesuch als vom Aufrufer beobachtet zu erfassen, damit der Hostname der Seite später bei der Berechnung der Themen verwendet werden kann. Weitere Informationen finden Sie unter [Topics API](/de/docs/Web/API/Topics_API).
- `Document.captureEvents()` {{Deprecated_Inline}}
  - : Siehe [`Window.captureEvents`](/de/docs/Web/API/Window/captureEvents).
- [`Document.caretPositionFromPoint()`](/de/docs/Web/API/Document/caretPositionFromPoint)
  - : Gibt ein [`CaretPosition`](/de/docs/Web/API/CaretPosition)-Objekt zurück, das den DOM-Knoten mit der Einfügemarke sowie deren Zeichenoffset innerhalb dieses Knotens enthält.
- [`Document.caretRangeFromPoint()`](/de/docs/Web/API/Document/caretRangeFromPoint) {{Non-standard_Inline}}
  - : Ruft ein [`Range`](/de/docs/Web/API/Range)-Objekt für das Dokumentfragment an den angegebenen Koordinaten ab.
- [`Document.createAttribute()`](/de/docs/Web/API/Document/createAttribute)
  - : Erstellt ein neues [`Attr`](/de/docs/Web/API/Attr)-Objekt und gibt es zurück.
- [`Document.createAttributeNS()`](/de/docs/Web/API/Document/createAttributeNS)
  - : Erstellt einen neuen Attributknoten im angegebenen Namensraum und gibt ihn zurück.
- [`Document.createCDATASection()`](/de/docs/Web/API/Document/createCDATASection)
  - : Erstellt einen neuen CDATA-Knoten und gibt ihn zurück.
- [`Document.createComment()`](/de/docs/Web/API/Document/createComment)
  - : Erstellt einen neuen Kommentarknoten und gibt ihn zurück.
- [`Document.createDocumentFragment()`](/de/docs/Web/API/Document/createDocumentFragment)
  - : Erstellt ein neues Dokumentfragment.
- [`Document.createElement()`](/de/docs/Web/API/Document/createElement)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen.
- [`Document.createElementNS()`](/de/docs/Web/API/Document/createElementNS)
  - : Erstellt ein neues Element mit dem angegebenen Tag-Namen und der angegebenen Namensraum-URI.
- [`Document.createEvent()`](/de/docs/Web/API/Document/createEvent) {{deprecated_inline}}
  - : Erstellt ein Ereignisobjekt.
- [`Document.createNodeIterator()`](/de/docs/Web/API/Document/createNodeIterator)
  - : Erstellt ein [`NodeIterator`](/de/docs/Web/API/NodeIterator)-Objekt.
- [`Document.createProcessingInstruction()`](/de/docs/Web/API/Document/createProcessingInstruction)
  - : Erstellt ein neues [`ProcessingInstruction`](/de/docs/Web/API/ProcessingInstruction)-Objekt.
- [`Document.createRange()`](/de/docs/Web/API/Document/createRange)
  - : Erstellt ein [`Range`](/de/docs/Web/API/Range)-Objekt.
- [`Document.createTextNode()`](/de/docs/Web/API/Document/createTextNode)
  - : Erstellt einen Textknoten.
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
  - : Aktiviert die Stylesheets des angegebenen Stylesheet-Sets.
- [`Document.exitFullscreen()`](/de/docs/Web/API/Document/exitFullscreen)
  - : Beendet die Vollbildanzeige des Vollbildelements des Dokuments.
- [`Document.exitPictureInPicture()`](/de/docs/Web/API/Document/exitPictureInPicture)
  - : Verschiebt das Video aus dem schwebenden Bild-im-Bild-Fenster zurück in seinen ursprünglichen Container.
- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
  - : Hebt die Zeigersperre auf.
- [`Document.getAnimations()`](/de/docs/Web/API/Document/getAnimations)
  - : Gibt ein Array aller derzeit wirksamen [`Animation`](/de/docs/Web/API/Animation)-Objekte zurück, deren Zielelemente Nachfahren von `document` sind.
- `Document.getBoxQuads()` {{Experimental_Inline}}
  - : Gibt eine Liste von [`DOMQuad`](/de/docs/Web/API/DOMQuad)-Objekten zurück, die die CSS-Fragmente des Knotens repräsentieren.
- [`Document.getElementById()`](/de/docs/Web/API/Document/getElementById)
  - : Gibt eine Objektreferenz auf das durch die ID identifizierte Element zurück.
- [`Document.getElementsByClassName()`](/de/docs/Web/API/Document/getElementsByClassName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Klassennamen zurück.
- [`Document.getElementsByTagName()`](/de/docs/Web/API/Document/getElementsByTagName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Tag-Namen zurück.
- [`Document.getElementsByTagNameNS()`](/de/docs/Web/API/Document/getElementsByTagNameNS)
  - : Gibt eine Liste von Elementen mit dem angegebenen Tag-Namen und Namensraum zurück.
- [`Document.getSelection()`](/de/docs/Web/API/Document/getSelection)
  - : Gibt ein [`Selection`](/de/docs/Web/API/Selection)-Objekt zurück, das den vom Benutzer ausgewählten Textbereich oder die aktuelle Position der Einfügemarke repräsentiert.
- [`Document.hasPrivateToken()`](/de/docs/Web/API/Document/hasPrivateToken) {{experimental_inline}}
  - : Gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob der Browser einen [Private State Token](/de/docs/Web/API/Private_State_Token_API) eines bestimmten Ausstellers gespeichert hat.
- [`Document.hasRedemptionRecord()`](/de/docs/Web/API/Document/hasRedemptionRecord) {{experimental_inline}}
  - : Gibt ein Promise zurück, das mit einem booleschen Wert erfüllt wird, der angibt, ob im Browser ein [Einlösungsnachweis](/de/docs/Web/API/Private_State_Token_API/Using#redeeming_tokens) eines bestimmten Ausstellers vorhanden ist.
- [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert aufgelöst wird, der angibt, ob das Dokument Zugriff auf unpartitionierte Cookies hat.
- [`Document.hasUnpartitionedCookieAccess()`](/de/docs/Web/API/Document/hasUnpartitionedCookieAccess)
  - : Neuer Name für [`Document.hasStorageAccess()`](/de/docs/Web/API/Document/hasStorageAccess).
- [`Document.importNode()`](/de/docs/Web/API/Document/importNode)
  - : Gibt einen Klon eines Knotens aus einem externen Dokument zurück.
- [`Document.moveBefore()`](/de/docs/Web/API/Document/moveBefore)
  - : Verschiebt einen angegebenen [`Node`](/de/docs/Web/API/Node) innerhalb des `Document`-DOM-Knotens als direktes Kind vor einen angegebenen Referenzknoten, ohne den Knoten zuvor zu entfernen und anschließend wieder einzufügen.
- [`Document.mozSetImageElement()`](/de/docs/Web/API/Document/mozSetImageElement) {{Non-standard_Inline}}
  - : Ermöglicht es Ihnen, das Element zu ändern, das als Hintergrundbild für eine bestimmte Element-ID verwendet wird.
- [`Document.prepend()`](/de/docs/Web/API/Document/prepend)
  - : Fügt eine Gruppe von [`Node`](/de/docs/Web/API/Node)-Objekten oder Zeichenfolgen vor dem ersten untergeordneten Knoten des Dokuments ein.
- [`Document.querySelector()`](/de/docs/Web/API/Document/querySelector)
  - : Gibt den ersten Elementknoten innerhalb des Dokuments zurück, der in Dokumentreihenfolge den angegebenen Selektoren entspricht.
- [`Document.querySelectorAll()`](/de/docs/Web/API/Document/querySelectorAll)
  - : Gibt eine Liste aller Elementknoten innerhalb des Dokuments zurück, die den angegebenen Selektoren entsprechen.
- [`Document.releaseCapture()`](/de/docs/Web/API/Document/releaseCapture) {{Non-standard_Inline}}
  - : Hebt die aktuelle Erfassung von Mausereignissen auf, sofern sie für ein Element dieses Dokuments aktiv ist.
- `Document.releaseEvents()` {{Deprecated_Inline}}
  - : Siehe [`Window.releaseEvents()`](/de/docs/Web/API/Window/releaseEvents).
- [`Document.replaceChildren()`](/de/docs/Web/API/Document/replaceChildren)
  - : Ersetzt die vorhandenen untergeordneten Knoten eines Dokuments durch eine angegebene neue Gruppe von Knoten.
- [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess)
  - : Ermöglicht einem Dokument, das in einem Drittanbieterkontext geladen wurde (also in einem {{htmlelement("iframe")}} eingebettet ist), Zugriff auf unpartitionierte Cookies anzufordern, wenn Benutzeragenten diesen Zugriff für in einem Drittanbieterkontext geladene Websites aus Datenschutzgründen standardmäßig blockieren.
- [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor) {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht es übergeordneten Websites, im Namen eingebetteter Inhalte von einer anderen Website desselben [Sets zusammengehöriger Websites](https://privacysandbox.google.com/cookies/related-website-sets-integration) Zugriff auf Drittanbieter-Cookies anzufordern.
- [`Document.startViewTransition()`](/de/docs/Web/API/Document/startViewTransition)
  - : Startet einen neuen [Ansichtsübergang](/de/docs/Web/API/View_Transition_API) und gibt ein [`ViewTransition`](/de/docs/Web/API/ViewTransition)-Objekt zurück, das ihn repräsentiert.

Die `Document`-Schnittstelle wird durch die Schnittstelle [`XPathEvaluator`](/de/docs/Web/API/XPathEvaluator) erweitert:

- [`Document.createExpression()`](/de/docs/Web/API/Document/createExpression)
  - : Kompiliert einen [`XPathExpression`](/de/docs/Web/API/XPathExpression), der anschließend für (wiederholte) Auswertungen verwendet werden kann.
- [`Document.createNSResolver()`](/de/docs/Web/API/Document/createNSResolver) {{deprecated_inline}}
  - : Gibt den Eingabeknoten unverändert zurück.
- [`Document.evaluate()`](/de/docs/Web/API/Document/evaluate)
  - : Wertet einen XPath-Ausdruck aus.

### Erweiterung für HTML-Dokumente

Die `Document`-Schnittstelle für HTML-Dokumente erbt von der Schnittstelle [`HTMLDocument`](/de/docs/Web/API/HTMLDocument) oder wird für solche Dokumente erweitert:

- [`Document.clear()`](/de/docs/Web/API/Document/clear) {{Deprecated_Inline}}
  - : Diese Methode bewirkt nichts.
- [`Document.close()`](/de/docs/Web/API/Document/close)
  - : Schließt einen Dokumentstrom zum Schreiben.
- [`Document.execCommand()`](/de/docs/Web/API/Document/execCommand) {{Deprecated_Inline}} {{non-standard_inline}}
  - : Führt in einem bearbeitbaren Dokument einen Formatierungsbefehl aus.
- [`Document.getElementsByName()`](/de/docs/Web/API/Document/getElementsByName)
  - : Gibt eine Liste von Elementen mit dem angegebenen Namen zurück.
- [`Document.hasFocus()`](/de/docs/Web/API/Document/hasFocus)
  - : Gibt `true` zurück, wenn sich der Fokus derzeit irgendwo innerhalb des angegebenen Dokuments befindet.
- [`Document.open()`](/de/docs/Web/API/Document/open)
  - : Öffnet einen Dokumentstrom zum Schreiben.
- [`Document.queryCommandEnabled()`](/de/docs/Web/API/Document/queryCommandEnabled) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt `true` zurück, wenn der Formatierungsbefehl auf den aktuellen Bereich angewendet werden kann.
- `Document.queryCommandIndeterm()` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt `true` zurück, wenn sich der Formatierungsbefehl für den aktuellen Bereich in einem unbestimmten Zustand befindet.
- [`Document.queryCommandState()`](/de/docs/Web/API/Document/queryCommandState) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt `true` zurück, wenn der Formatierungsbefehl auf den aktuellen Bereich angewendet wurde.
- [`Document.queryCommandSupported()`](/de/docs/Web/API/Document/queryCommandSupported) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt `true` zurück, wenn der Formatierungsbefehl für den aktuellen Bereich unterstützt wird.
- `Document.queryCommandValue()` {{Deprecated_Inline}} {{non-standard_inline}}
  - : Gibt den aktuellen Wert des Formatierungsbefehls für den aktuellen Bereich zurück.
- [`Document.write()`](/de/docs/Web/API/Document/write) {{deprecated_inline}}
  - : Schreibt Text in ein Dokument.
- [`Document.writeln()`](/de/docs/Web/API/Document/writeln) {{deprecated_inline}}
  - : Schreibt eine Textzeile in ein Dokument.

## Statische Methoden

_Diese Schnittstelle erbt auch von den Schnittstellen [`Node`](/de/docs/Web/API/Node) und [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`Document.parseHTML()`](/de/docs/Web/API/Document/parseHTML_static)
  - : Erstellt durch Bereinigung aus einer HTML-Zeichenfolge ein neues `Document`-Objekt auf eine Weise, die vor XSS schützt.
- [`Document.parseHTMLUnsafe()`](/de/docs/Web/API/Document/parseHTMLUnsafe_static)
  - : Erstellt aus einer HTML-Zeichenfolge ein neues `Document`-Objekt, ohne eine Bereinigung vorzunehmen.
    Die Zeichenfolge kann deklarative Shadow Roots enthalten.

## Ereignisse

Sie können auf diese Ereignisse reagieren, indem Sie `addEventListener()` verwenden oder der Eigenschaft `oneventname` dieser Schnittstelle einen Event-Listener zuweisen. Zusätzlich zu den unten aufgeführten Ereignissen können viele Ereignisse von [Knoten](/de/docs/Web/API/Node) innerhalb des Dokumentbaums nach oben weitergegeben werden.

- [`afterscriptexecute`](/de/docs/Web/API/Document/afterscriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element die Ausführung seines Skripts abgeschlossen hat.
- [`beforescriptexecute`](/de/docs/Web/API/Document/beforescriptexecute_event) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Wird ausgelöst, unmittelbar bevor ein statisches {{HTMLElement("script")}}-Element mit der Ausführung beginnt.
- [`prerenderingchange`](/de/docs/Web/API/Document/prerenderingchange_event) {{experimental_inline}}
  - : Wird auf einem vorgerenderten Dokument ausgelöst, wenn es aktiviert wird (d.h. wenn der Benutzer die Seite aufruft).
- [`securitypolicyviolation`](/de/docs/Web/API/Document/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn gegen eine Content Security Policy verstoßen wird.
- [`visibilitychange`](/de/docs/Web/API/Document/visibilitychange_event)
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar oder verborgen wird.

### Vollbildereignisse

- [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)
  - : Wird ausgelöst, wenn das `Document` in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt oder ihn verlässt.
- [`fullscreenerror`](/de/docs/Web/API/Document/fullscreenerror_event)
  - : Wird ausgelöst, wenn beim Versuch, in den [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln oder ihn zu verlassen, ein Fehler auftritt.

### Lade- und Entladeereignisse

- [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)
  - : Wird ausgelöst, wenn das Dokument vollständig geladen und geparst wurde, ohne darauf zu warten, dass Stylesheets, Bilder und untergeordnete Frames vollständig geladen sind.
- [`readystatechange`](/de/docs/Web/API/Document/readystatechange_event)
  - : Wird ausgelöst, wenn sich das Attribut [`readyState`](/de/docs/Web/API/Document/readyState) eines Dokuments geändert hat.

### Ereignisse der Zeigersperre

- [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)
  - : Wird ausgelöst, wenn der Zeiger gesperrt oder entsperrt wird.
- [`pointerlockerror`](/de/docs/Web/API/Document/pointerlockerror_event)
  - : Wird ausgelöst, wenn das Sperren des Zeigers fehlgeschlagen ist.

### Scrollereignisse

- [`scroll`](/de/docs/Web/API/Document/scroll_event)
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- [`scrollend`](/de/docs/Web/API/Document/scrollend_event)
  - : Wird ausgelöst, wenn das Scrollen der Dokumentansicht oder eines Elements abgeschlossen ist.
- [`scrollsnapchange`](/de/docs/Web/API/Document/scrollsnapchange_event) {{experimental_inline}}
  - : Wird am Ende eines Scrollvorgangs auf dem Scrollcontainer ausgelöst, wenn ein neues Scroll-Snap-Ziel ausgewählt wurde.
- [`scrollsnapchanging`](/de/docs/Web/API/Document/scrollsnapchanging_event) {{experimental_inline}}
  - : Wird auf dem Scrollcontainer ausgelöst, wenn der Browser feststellt, dass ein neues Scroll-Snap-Ziel bevorsteht, das beim Ende der aktuellen Scrollgeste ausgewählt wird.

### Auswahlereignisse

- [`selectionchange`](/de/docs/Web/API/Document/selectionchange_event)
  - : Wird ausgelöst, wenn die aktuelle Textauswahl in einem Dokument geändert wird.

### Nach oben weitergegebene Ereignisse

Nicht alle nach oben weitergegebenen Ereignisse können das `Document`-Objekt erreichen. Nur die folgenden erreichen es und können am `Document`-Objekt überwacht werden:

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
