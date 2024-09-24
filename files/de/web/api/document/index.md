---
title: Dokument
slug: Web/API/Document
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("DOM")}}

Die **`Document`**-Schnittstelle repräsentiert jede Webseite, die im Browser geladen ist, und dient als Einstiegspunkt in den Inhalt der Webseite, welcher der [DOM-Baum](/de/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model#what_is_a_dom_tree) ist.

Der DOM-Baum enthält Elemente wie {{HTMLElement("body")}} und {{HTMLElement("table")}}, neben [vielen anderen](/de/docs/Web/HTML/Element). Er bietet Funktionen global für das Dokument, wie das Abrufen der URL der Seite und das Erstellen neuer Elemente im Dokument.

{{InheritanceDiagram}}

Die `Document`-Schnittstelle beschreibt die allgemeinen Eigenschaften und Methoden für jede Art von Dokument. Abhängig vom Dokumenttyp (z. B. [HTML](/de/docs/Web/HTML), [XML](/de/docs/Web/XML), SVG, …) steht eine erweiterte API zur Verfügung: HTML-Dokumente, die mit dem Inhaltstyp `"text/html"` bereitgestellt werden, implementieren auch die {{DOMxRef("HTMLDocument")}}-Schnittstelle, während XML- und SVG-Dokumente die {{DOMxRef("XMLDocument")}}-Schnittstelle implementieren.

## Konstruktor

- {{DOMxRef("Document.Document", "Document()")}}
  - : Erstellt ein neues `Document`-Objekt.

## Instanz Eigenschaften

_Diese Schnittstelle erbt auch von den Schnittstellen {{DOMxRef("Node")}} und {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Document.activeElement")}} {{ReadOnlyInline}}
  - : Gibt das {{DOMxRef('Element')}} zurück, das derzeit den Fokus hat.
- {{DOMxRef("Document.adoptedStyleSheets")}}
  - : Fügt ein Array von erstellten Stylesheets hinzu, die vom Dokument verwendet werden sollen.
    Diese Stylesheets können auch mit Shadow-DOM-Teilbäumen desselben Dokuments geteilt werden.
- {{DOMxRef("Document.body")}}
  - : Gibt den {{HTMLElement("body")}}- oder {{htmlelement("frameset")}}-Knoten des aktuellen Dokuments zurück.
- {{DOMxRef("Document.characterSet")}} {{ReadOnlyInline}}
  - : Gibt das Zeichensatz zurück, das vom Dokument verwendet wird.
- {{domxref("Document.childElementCount")}} {{ReadOnlyInline}}
  - : Gibt die Anzahl der Kindelemente des aktuellen Dokuments zurück.
- {{domxref("Document.children")}} {{ReadOnlyInline}}
  - : Gibt die Kindelemente des aktuellen Dokuments zurück.
- {{DOMxRef("Document.compatMode")}} {{ReadOnlyInline}}
  - : Gibt an, ob das Dokument im _Quirks_ oder _Strict_ Modus gerendert wird.
- {{DOMxRef("Document.contentType")}} {{ReadOnlyInline}}
  - : Gibt den Content-Type aus dem MIME-Header des aktuellen Dokuments zurück.
- {{DOMxRef("Document.currentScript")}} {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("script")}}-Element zurück, dessen Skript derzeit verarbeitet wird und [kein JavaScript-Modul ist](https://github.com/whatwg/html/issues/997).
- {{DOMxRef("Document.doctype")}} {{ReadOnlyInline}}
  - : Gibt die Dokumenttypdefinition (DTD) des aktuellen Dokuments zurück.
- {{DOMxRef("Document.documentElement")}} {{ReadOnlyInline}}
  - : Gibt das {{DOMxRef("Element")}} zurück, das ein direktes Kindelement des Dokuments ist. Bei HTML-Dokumenten ist dies normalerweise das {{DOMxRef("HTMLHtmlElement")}}-Objekt, das das {{HTMLElement("html")}}-Element des Dokuments repräsentiert.
- {{DOMxRef("Document.documentURI")}} {{ReadOnlyInline}}
  - : Gibt den Speicherort des Dokuments als Zeichenkette zurück.
- {{DOMxRef("Document.embeds")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("HTMLCollection")}} der eingebetteten {{HTMLElement('embed')}}-Elemente im Dokument zurück.
- {{DOMxRef("Document.featurePolicy")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Gibt die {{DOMxRef("FeaturePolicy")}}-Schnittstelle mit den auf das Dokument angewandten Feature-Policies zurück.
- {{domxref("Document.firstElementChild")}} {{ReadOnlyInline}}
  - : Gibt das erste Kindelement des aktuellen Dokuments zurück.
- {{DOMxRef("Document.fonts")}}
  - : Gibt die {{DOMxRef("FontFaceSet")}}-Schnittstelle des aktuellen Dokuments zurück.
- {{DOMxRef("Document.forms")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("HTMLCollection")}} der {{HTMLElement("form")}}-Elemente im Dokument zurück.
- {{DOMxRef("Document.fragmentDirective")}} {{ReadOnlyInline}}
  - : Gibt die {{domxref("FragmentDirective")}} für das aktuelle Dokument zurück.
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : Das Element, das derzeit im Vollbildmodus für dieses Dokument ist.
- {{DOMxRef("Document.head")}} {{ReadOnlyInline}}
  - : Gibt das {{HTMLElement("head")}}-Element des aktuellen Dokuments zurück.
- {{DOMxRef("Document.hidden")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Seite als versteckt gilt oder nicht.
- {{DOMxRef("Document.images")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("HTMLCollection")}} der Bilder im Dokument zurück.
- {{DOMxRef("Document.implementation")}} {{ReadOnlyInline}}
  - : Gibt die DOM-Implementierung zurück, die mit dem aktuellen Dokument assoziiert ist.
- {{domxref("Document.lastElementChild")}} {{ReadOnlyInline}}
  - : Gibt das letzte Kindelement des aktuellen Dokuments zurück.
- {{DOMxRef("Document.links")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("HTMLCollection")}} der Hyperlinks im Dokument zurück.
- {{DOMxRef("Document.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : Gibt das {{DOMxRef('Element')}} zurück, das derzeit im Bild-im-Bild-Modus in diesem Dokument präsentiert wird.
- {{DOMxRef("Document.pictureInPictureEnabled")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn die Bild-im-Bild-Funktion aktiviert ist.
- {{DOMxRef("Document.plugins")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("HTMLCollection")}} der verfügbaren Plugins zurück.
- {{DOMxRef("Document.pointerLockElement")}} {{ReadOnlyInline}}
  - : Gibt das Element zurück, das als Ziel für Mausereignisse eingestellt ist, während der Zeiger gesperrt ist. `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder wenn das Ziel in einem anderen Dokument ist.
- {{DOMxRef("Document.prerendering")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das Dokument derzeit im Prozess des Vorabladens ist, wie über die [Speculation Rules API](/de/docs/Web/API/Speculation_Rules_API) initiiert.
- {{DOMxRef("Document.scripts")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef("HTMLCollection")}} der {{HTMLElement("script")}}-Elemente im Dokument zurück.
- {{DOMxRef("Document.scrollingElement")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das {{DOMxRef("Element")}} zurück, das das Dokument scrollt.
- {{DOMxRef("Document.styleSheets")}} {{ReadOnlyInline}}
  - : Gibt eine {{DOMxRef('StyleSheetList')}} von {{DOMxRef('CSSStyleSheet')}}-Objekten für Stylesheets zurück, die explizit in ein Dokument eingebunden sind oder eingebettet sind.
- {{DOMxRef("Document.timeline")}} {{ReadOnlyInline}}
  - : Gibt eine Zeitleiste als spezielle Instanz von {{domxref("DocumentTimeline")}} zurück, die beim Laden der Seite automatisch erstellt wird.
- {{DOMxRef("Document.visibilityState")}} {{ReadOnlyInline}}
  - : Gibt einen `string` zurück, der den Sichtbarkeitszustand des Dokuments kennzeichnet. Mögliche Werte sind `visible`, `hidden`, `prerender` und `unloaded`.

### Erweiterungen für HTML-Dokumente

_Die `Document`-Schnittstelle für HTML-Dokumente erbt von der {{DOMxRef("HTMLDocument")}}-Schnittstelle oder wird für solche Dokumente erweitert._

- {{DOMxRef("Document.cookie")}}
  - : Gibt eine durch Semikolon getrennte Liste der Cookies für dieses Dokument zurück oder setzt ein einzelnes Cookie.
- {{DOMxRef("Document.defaultView")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das Fensterobjekt zurück.
- {{DOMxRef("Document.designMode")}}
  - : Ruft die Möglichkeit zum Bearbeiten des gesamten Dokuments ab/legt sie fest.
- {{DOMxRef("Document.dir")}}
  - : Ruft die Direktionalität (rtl/ltr) des Dokuments ab/legt sie fest.
- {{DOMxRef("Document.fullscreenEnabled")}} {{ReadOnlyInline}}
  - : Gibt an, ob der Vollbildmodus verfügbar ist.
- {{DOMxRef("Document.lastModified")}} {{ReadOnlyInline}}
  - : Gibt das Datum zurück, an dem das Dokument zuletzt geändert wurde.
- {{DOMxRef("Document.location")}} {{ReadOnlyInline}}
  - : Gibt die URI des aktuellen Dokuments zurück.
- {{DOMxRef("Document.readyState")}} {{ReadOnlyInline}}
  - : Gibt den Ladezustand des Dokuments zurück.
- {{DOMxRef("Document.referrer")}} {{ReadOnlyInline}}
  - : Gibt die URI der Seite zurück, die zu dieser Seite verlinkt hat.
- {{DOMxRef("Document.title")}}
  - : Setzt oder holt den Titel des aktuellen Dokuments.
- {{DOMxRef("Document.URL")}} {{ReadOnlyInline}}
  - : Gibt den Speicherort des Dokuments als Zeichenkette zurück.

### Veraltete Eigenschaften

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : Gibt die Farbe aktiver Links im Dokumentenkörper zurück oder setzt diese.
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}}
  - : Gewährt Zugriff auf alle Elemente im Dokument — gibt eine {{DOMxRef('HTMLAllCollection')}} zurück, die am Dokumentknoten verwurzelt ist. Dies ist eine veraltete, nicht standardisierte Eigenschaft und sollte nicht verwendet werden.
- {{DOMxRef("Document.anchors")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine Liste aller Anker im Dokument zurück.
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Gibt eine leere {{domxref("HTMLCollection")}} zurück. Veraltete Eigenschaft, die früher die Liste der Applets in einem Dokument zurückgab.
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : Ruft die Hintergrundfarbe des aktuellen Dokuments ab/legt sie fest.
- {{DOMxRef("Document.characterSet","Document.charset")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von {{DOMxRef("Document.characterSet")}}. Verwenden Sie stattdessen diese Eigenschaft.
- {{DOMxRef("Document.domain")}} {{Deprecated_Inline}}
  - : Ruft die Domain des aktuellen Dokuments ab/legt sie fest.
- {{DOMxRef("Document.fgColor")}} {{Deprecated_Inline}}
  - : Ruft die Vordergrundfarbe oder Textfarbe des aktuellen Dokuments ab/legt sie fest.
- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn das Dokument im [Vollbildmodus](/de/docs/Web/API/Fullscreen_API) ist.
- {{DOMxRef("Document.characterSet", "Document.inputEncoding")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias von {{DOMxRef("Document.characterSet")}}. Verwenden Sie stattdessen diese Eigenschaft.
- {{DOMxRef("Document.lastStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Namen des zuletzt aktivierten Stylesheet-Sets zurück. Hat den Wert `null`, bis das Stylesheet geändert wird, indem der Wert von {{DOMxRef("Document.selectedStyleSheetSet","selectedStyleSheetSet")}} festgelegt wird.
- {{DOMxRef("Document.linkColor")}} {{Deprecated_Inline}}
  - : Ruft die Farbe der Hyperlinks im Dokument ab/legt sie fest.
- {{DOMxRef("Document.preferredStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt das bevorzugte Stylesheet-Set zurück, wie vom Seitenautor angegeben.
- {{DOMxRef("Document.rootElement")}} {{Deprecated_Inline}}
  - : Ähnlich wie {{DOMxRef("Document.documentElement")}}, aber nur für {{SVGElement("svg")}}-Elemente der Wurzel. Verwenden Sie stattdessen diese Eigenschaft.
- {{DOMxRef("Document.selectedStyleSheetSet")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt zurück, welches Stylesheet-Set derzeit verwendet wird.
- {{DOMxRef("Document.styleSheetSets")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Liste der auf dem Dokument verfügbaren Stylesheet-Sets zurück.
- {{DOMxRef("Document.vlinkColor")}} {{Deprecated_Inline}}
  - : Ruft die Farbe besuchter Hyperlinks ab/legt sie fest.
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : Gibt die Kodierung zurück, wie sie durch die XML-Deklaration bestimmt wird.
- {{DOMxRef("Document.xmlStandalone")}} {{Deprecated_Inline}}
  - : Gibt `true` zurück, wenn die XML-Deklaration das Dokument als eigenständig angibt (_z. B._, Ein externer Teil der DTD beeinflusst den Inhalt des Dokuments), sonst `false`.
- {{DOMxRef("Document.xmlVersion")}} {{Deprecated_Inline}}
  - : Gibt die Versionsnummer zurück, wie sie in der XML-Deklaration angegeben ist, oder `"1.0"`, wenn die Deklaration fehlt.

## Instanzmethoden

_Diese Schnittstelle erbt auch von den Schnittstellen {{DOMxRef("Node")}} und {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Document.adoptNode()")}}
  - : Adoptieren Sie einen Knoten aus einem externen Dokument.
- {{DOMxRef("Document.append()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Zeichenfolgen nach dem letzten Kind des Dokuments ein.
- {{DOMxRef("Document.browsingTopics()")}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein Versprechen zurück, das mit einem Array von Objekten erfüllt wird, die die Top-Themen für den Benutzer repräsentieren, eines aus jedem der letzten drei Epochen. Standardmäßig bewirkt die Methode auch, dass der Browser den aktuellen Seitenbesuch, wie vom Anrufer beobachtet, aufzeichnet, sodass der Hostname der Seite später in die Berechnung der Themen einfließen kann. Weitere Details siehe [Topics API](/de/docs/Web/API/Topics_API).
- {{DOMxRef("Document.captureEvents()")}} {{Deprecated_Inline}}
  - : Siehe {{DOMxRef("Window.captureEvents")}}.
- {{DOMxRef("Document.caretPositionFromPoint()")}}
  - : Gibt ein {{DOMxRef('CaretPosition')}}-Objekt zurück, das den DOM-Knoten mit dem Caret sowie den Zeichenoffset des Carets innerhalb dieses Knotens enthält.
- {{DOMxRef("Document.caretRangeFromPoint()")}} {{Non-standard_Inline}}
  - : Holt ein {{DOMxRef("Range")}}-Objekt für das Dokumentfragment unter den angegebenen Koordinaten.
- {{DOMxRef("Document.createAttribute()")}}
  - : Erstellt ein neues {{DOMxRef("Attr")}}-Objekt und gibt es zurück.
- {{DOMxRef("Document.createAttributeNS()")}}
  - : Erstellt einen neuen Attributknoten in einem bestimmten Namensraum und gibt ihn zurück.
- {{DOMxRef("Document.createCDATASection()")}}
  - : Erstellt einen neuen CDATA-Knoten und gibt ihn zurück.
- {{DOMxRef("Document.createComment()")}}
  - : Erstellt einen neuen Kommentar-Knoten und gibt ihn zurück.
- {{DOMxRef("Document.createDocumentFragment()")}}
  - : Erstellt ein neues Dokumentfragment.
- {{DOMxRef("Document.createElement()")}}
  - : Erstellt ein neues Element mit dem gegebenen Tag-Namen.
- {{DOMxRef("Document.createElementNS()")}}
  - : Erstellt ein neues Element mit dem gegebenen Tag-Namen und Namespace-URI.
- {{DOMxRef("Document.createEvent()")}}
  - : Erstellt ein Ereignisobjekt.
- {{DOMxRef("Document.createNodeIterator()")}}
  - : Erstellt ein {{DOMxRef("NodeIterator")}}-Objekt.
- {{DOMxRef("Document.createProcessingInstruction()")}}
  - : Erstellt ein neues {{DOMxRef("ProcessingInstruction")}}-Objekt.
- {{DOMxRef("Document.createRange()")}}
  - : Erstellt ein {{DOMxRef("Range")}}-Objekt.
- {{DOMxRef("Document.createTextNode()")}}
  - : Erstellt einen Textknoten.
- {{DOMxRef("Document.createTouch()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein {{DOMxRef("Touch")}}-Objekt.
- {{DOMxRef("Document.createTouchList()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein {{DOMxRef("TouchList")}}-Objekt.
- {{DOMxRef("Document.createTreeWalker()")}}
  - : Erstellt ein {{DOMxRef("TreeWalker")}}-Objekt.
- {{DOMxRef("Document.elementFromPoint()")}}
  - : Gibt das oberste Element an den angegebenen Koordinaten zurück.
- {{DOMxRef("Document.elementsFromPoint()")}}
  - : Gibt ein Array aller Elemente an den angegebenen Koordinaten zurück.
- {{DOMxRef("Document.enableStyleSheetsForSet()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Aktiviert die Stylesheets für das angegebene Stylesheet-Set.
- {{DOMxRef("Document.exitFullscreen()")}}
  - : Stoppt das Dokument, das als Vollbildelement angezeigt wird.
- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : Entfernt das Video aus dem schwebenden Bild-im-Bild-Fenster zurück in seinen ursprünglichen Container.
- {{DOMxRef("Document.exitPointerLock()")}}
  - : Löst die Zeigersperre.
- {{DOMxRef("Document.getAnimations()")}}
  - : Gibt ein Array aller {{DOMxRef("Animation")}}-Objekte zurück, die derzeit aktiv sind und deren Zielelemente Nachkommen des `Dokuments` sind.
- {{domxref("Document.getBoxQuads()")}} {{Experimental_Inline}}
  - : Gibt eine Liste von {{domxref("DOMQuad")}}-Objekten zurück, die die CSS-Fragmente des Knotens repräsentieren.
- {{DOMxRef("Document.getElementById", "Document.getElementById()")}}
  - : Gibt eine Objektreferenz auf das identifizierte Element zurück.
- {{DOMxRef("Document.getElementsByClassName()")}}
  - : Gibt eine Liste von Elementen mit dem gegebenen Klassennamen zurück.
- {{DOMxRef("Document.getElementsByTagName()")}}
  - : Gibt eine Liste von Elementen mit dem gegebenen Tag-Namen zurück.
- {{DOMxRef("Document.getElementsByTagNameNS()")}}
  - : Gibt eine Liste von Elementen mit dem gegebenen Tag-Namen und Namespace zurück.
- {{DOMxRef("Document.getSelection()")}}
  - : Gibt ein {{DOMxRef('Selection')}}-Objekt zurück, das den Bereich des vom Benutzer ausgewählten Textes repräsentiert oder die aktuelle Position des Carets.
- {{DOMxRef("Document.hasStorageAccess()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem booleschen Wert auflöst, der angibt, ob das Dokument Zugriff auf unpartitionierte Cookies hat.
- {{DOMxRef("Document.hasUnpartitionedCookieAccess()")}}
  - : Neuer Name für {{DOMxRef("Document.hasStorageAccess()")}}.
- {{DOMxRef("Document.importNode()")}}
  - : Gibt eine Kopie eines Knotens aus einem externen Dokument zurück.
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : Ermöglicht Ihnen, das Element zu ändern, das als Hintergrundbild für eine angegebene Element-ID verwendet wird.
- {{DOMxRef("Document.prepend()")}}
  - : Fügt eine Menge von {{domxref("Node")}}-Objekten oder Zeichenfolgen vor dem ersten Kind des Dokuments ein.
- {{DOMxRef("Document.querySelector()")}}
  - : Gibt das erste Element-Knoten innerhalb des Dokuments in Dokumentreihenfolge zurück, das den angegebenen Selektoren entspricht.
- {{DOMxRef("Document.querySelectorAll()")}}
  - : Gibt eine Liste aller Element-Knoten innerhalb des Dokuments zurück, die den angegebenen Selektoren entsprechen.
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : Löst die aktuelle Mausaufnahme auf, wenn sie auf einem Element in diesem Dokument ist.
- {{DOMxRef("Document.releaseEvents()")}} {{Deprecated_Inline}}
  - : Siehe {{DOMxRef("Window.releaseEvents()")}}.
- {{DOMxRef("Document.replaceChildren()")}}
  - : Ersetzt die vorhandenen Kinder eines Dokuments durch eine bestimmte neue Menge von Kindern.
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : Ermöglicht einem Dokument, das in einem Drittanbieter-Kontext geladen wird (z. B. eingebettet in ein {{htmlelement("iframe")}}), Zugriff auf unpartitionierte Cookies anzufordern, in Fällen, in denen Benutzeragenten standardmäßig den Zugriff auf unpartitionierte Cookies von in einem Drittanbieter-Kontext geladenen Seiten blockieren, um die Privatsphäre zu verbessern.
- {{DOMxRef("Document.requestStorageAccessFor()")}} {{experimental_inline}}
  - : Erlaubt Top-Level-Sites, den Zugriff auf Drittanbieter-Cookies im Namen von eingebettetem Inhalt zu beantragen, der von einer anderen Seite des gleichen [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) stammt.
- {{domxref("Document.startViewTransition()")}}
  - : Startet einen neuen {{domxref("View Transitions API", "Ansichtsübergang", "", "nocode")}} und gibt ein {{domxref("ViewTransition")}}-Objekt zurück, um ihn zu repräsentieren.

Die `Document`-Schnittstelle wird mit der {{DOMxRef("XPathEvaluator")}}-Schnittstelle erweitert:

- {{DOMxRef("Document.createExpression()")}}
  - : Kompiliert ein [`XPathExpression`](/de/docs/Web/API/XPathExpression), das dann für (wiederholte) Auswertungen verwendet werden kann.
- {{DOMxRef("Document.createNSResolver()")}} {{deprecated_inline}}
  - : Gibt den Eingabeknoten unverändert zurück.
- {{DOMxRef("Document.evaluate()")}}
  - : Wertet einen XPath-Ausdruck aus.

### Erweiterung für HTML-Dokumente

Die `Document`-Schnittstelle für HTML-Dokumente erbt von der {{DOMxRef("HTMLDocument")}}-Schnittstelle oder wird für solche Dokumente erweitert:

- {{DOMxRef("Document.clear()")}} {{Deprecated_Inline}}
  - : Diese Methode tut nichts.
- {{DOMxRef("Document.close()")}}
  - : Schließt einen Dokumentstrom zum Schreiben.
- {{DOMxRef("Document.execCommand()")}} {{Deprecated_Inline}}
  - : Führt in einem editierbaren Dokument einen Formatierungsbefehl aus.
- {{DOMxRef("Document.getElementsByName()")}}
  - : Gibt eine Liste von Elementen mit dem gegebenen Namen zurück.
- {{DOMxRef("Document.hasFocus()")}}
  - : Gibt `true` zurück, wenn der Fokus derzeit irgendwo im angegebenen Dokument liegt.
- {{DOMxRef("Document.open()")}}
  - : Öffnet einen Dokumentstrom zum Schreiben.
- {{DOMxRef("Document.queryCommandEnabled()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt werden kann.
- {{DOMxRef("Document.queryCommandIndeterm()")}} {{Deprecated_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich in einem unbestimmten Zustand ist.
- {{DOMxRef("Document.queryCommandState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich ausgeführt wurde.
- {{DOMxRef("Document.queryCommandSupported()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt true zurück, wenn der Formatierungsbefehl im aktuellen Bereich unterstützt wird.
- {{DOMxRef("Document.queryCommandValue()")}} {{Deprecated_Inline}}
  - : Gibt den aktuellen Wert für einen Formatierungsbefehl im aktuellen Bereich zurück.
- {{DOMxRef("Document.write()")}}
  - : Schreibt Text in ein Dokument.
- {{DOMxRef("Document.writeln()")}}
  - : Schreibt eine Zeile Text in ein Dokument.

## Statische Methoden

_Diese Schnittstelle erbt auch von den Schnittstellen {{DOMxRef("Node")}} und {{DOMxRef("EventTarget")}}._

- {{domxref("Document/parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
  - : Erstellt ein neues `Document`-Objekt aus einem HTML-String ohne Überprüfung. Der String kann deklarative Shadow-Roots enthalten.

## Veranstaltungen

Hören Sie auf diese Ereignisse mit `addEventListener()` oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieser Schnittstelle. Neben den unten aufgeführten Ereignissen können viele Ereignisse aus {{domxref("Node", "Knoten", "", "nocode")}} stammen, die im Dokumentbaum enthalten sind.

- {{DOMxRef("Document.afterscriptexecute_event", "afterscriptexecute")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element das Ausführen seines Skripts beendet.
- {{DOMxRef("Document.beforescriptexecute_event", "beforescriptexecute")}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein statisches {{HTMLElement("script")}}-Element kurz davor steht, sein Skript auszuführen.
- {{domxref("Document.prerenderingchange_event", "prerenderingchange")}} {{experimental_inline}}
  - : Wird auf einem vorab geladenen Dokument ausgelöst, wenn es aktiviert wird (d. h. der Benutzer die Seite ansieht).
- {{DOMxRef("Document.securitypolicyviolation_event", "securitypolicyviolation")}}
  - : Wird ausgelöst, wenn eine Inhaltsrichtlinie verletzt wird.
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : Wird ausgelöst, wenn der Inhalt eines Tabs sichtbar oder verborgen geworden ist.

### Zwischenablageereignisse

- {{DOMxRef("Document/copy_event", "copy")}}
  - : Wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers einleitet.
- {{DOMxRef("Document/cut_event", "cut")}}
  - : Wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers einleitet.
- {{DOMxRef("Document/paste_event", "paste")}}
  - : Wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers einleitet.

### Vollbildereignisse

- {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
  - : Wird ausgelöst, wenn das `Dokument` in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) wechselt.
- {{DOMxRef("Document/fullscreenerror_event", "fullscreenerror")}}
  - : Wird ausgelöst, wenn ein Fehler beim Versuch auftritt, in den oder aus dem [Vollbildmodus](/de/docs/Web/API/Fullscreen_API/Guide) zu wechseln.

### Laden & Entladen Ereignisse

- {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Wird ausgelöst, wenn das Dokument vollständig geladen und analysiert ist, ohne auf das Laden von Stylesheets, Bildern und Subframes zu warten.
- {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - : Wird ausgelöst, wenn das {{DOMxRef("Document/readyState", "readyState")}}-Attribut eines Dokuments sich geändert hat.

### Zeigersperre Ereignisse

- {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}
  - : Wird ausgelöst, wenn der Zeiger gesperrt/entsperrt wird.
- {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}
  - : Wird ausgelöst, wenn das Sperren des Zeigers fehlgeschlagen ist.

### Scrollereignisse

- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element gescrollt wurde.
- {{DOMxRef("Document/scrollend_event", "scrollend")}}
  - : Wird ausgelöst, wenn die Dokumentansicht oder ein Element das Scrollen abgeschlossen hat.

### Auswahlereignisse

- {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
  - : Wird ausgelöst, wenn die aktuelle Textauswahl in einem Dokument geändert wird.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
