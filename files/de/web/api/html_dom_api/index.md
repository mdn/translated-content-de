---
title: HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML DOM API** umfasst die Schnittstellen, die die Funktionalität der einzelnen {{Glossary("element", "Elemente")}} in {{Glossary("HTML", "HTML")}} definieren, sowie die unterstützenden Typen und Schnittstellen, auf denen diese beruhen.

Zu den Funktionsbereichen der HTML DOM API gehören:

- Zugriff auf und Steuerung von HTML-Elementen über das {{Glossary("DOM", "DOM")}}.
- Zugriff auf und Bearbeitung von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML-{{HTMLElement("canvas")}}-Elements, beispielsweise um darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verknüpft sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf den Navigationsverlauf des Browsers.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [serverseitig gesendete Ereignisse](/de/docs/Web/API/Server-sent_events).

## Konzepte und Verwendung des HTML DOM

In diesem Artikel konzentrieren wir uns auf die Teile des HTML DOM, die die Interaktion mit HTML-Elementen betreffen. Informationen zu anderen Bereichen wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API) und [Web Storage](/de/docs/Web/API/Web_Storage_API) finden Sie in der Dokumentation der jeweiligen APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ({{Glossary("DOM", "DOM")}}) ist eine Architektur, die die Struktur eines [`document`](/de/docs/Web/API/Document) beschreibt. Jedes Dokument wird durch eine Instanz der Schnittstelle [`Document`](/de/docs/Web/API/Document) repräsentiert. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten**. Ein Knoten ist ein grundlegender Datensatz, der ein einzelnes Objekt innerhalb des Dokuments repräsentiert, beispielsweise ein Element oder einen Textknoten.

Knoten können rein der Organisation dienen, indem sie andere Knoten gruppieren oder einen Ausgangspunkt für den Aufbau einer Hierarchie bieten. Andere Knoten können sichtbare Bestandteile eines Dokuments repräsentieren. Jeder Knoten basiert auf der Schnittstelle [`Node`](/de/docs/Web/API/Node). Diese stellt Eigenschaften zum Abrufen von Informationen über den Knoten sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten innerhalb des DOM bereit.

Knoten selbst enthalten nicht den Inhalt, der tatsächlich im Dokument angezeigt wird. Sie sind leere Behälter. Das grundlegende Konzept eines Knotens, der sichtbaren Inhalt repräsentieren kann, wird durch die Schnittstelle [`Element`](/de/docs/Web/API/Element) eingeführt. Eine `Element`-Objektinstanz repräsentiert ein einzelnes Element in einem Dokument, das mit HTML oder einem {{Glossary("XML", "XML")}}-Vokabular wie {{Glossary("SVG", "SVG")}} erstellt wurde.

Betrachten Sie beispielsweise ein Dokument mit zwei Elementen, von denen eines zwei weitere verschachtelte Elemente enthält:

![Struktur eines Dokuments mit Elementen innerhalb eines Dokuments in einem Fenster](dom-structure.svg)

Die Schnittstelle [`Document`](/de/docs/Web/API/Document) ist zwar als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert, wird durch die HTML-Spezifikation jedoch erheblich erweitert. Sie erhält dadurch Informationen, die speziell für die Verwendung des DOM im Kontext eines Webbrowsers und für die Darstellung von HTML-Dokumenten benötigt werden.

Zu den Ergänzungen des HTML-Standards für `Document` gehören:

- Unterstützung für den Zugriff auf verschiedene Informationen, die beim Laden der Seite durch {{Glossary("HTTP", "HTTP")}}-Header bereitgestellt werden, etwa der [Ort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), das [Änderungsdatum](/de/docs/Web/API/Document/lastModified) und die [verweisende Website](/de/docs/Web/API/Document/referrer).
- Zugriff auf Listen der Elemente im {{HTMLElement("head")}}-Block und im [body](/de/docs/Web/API/Document/body) des Dokuments sowie auf Listen der darin enthaltenen [Bilder](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Skripte](/de/docs/Web/API/Document/scripts) und weiterer Inhalte.
- Unterstützung für die Interaktion mit Benutzern durch Prüfen des [Fokus](/de/docs/Web/API/Document/hasFocus) und Ausführen von Befehlen auf [bearbeitbaren Inhalten](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Event-Handler für im HTML-Standard definierte Dokumentereignisse, die den Zugriff auf [Maus-](/de/docs/Web/API/MouseEvent) und [Tastaturereignisse](/de/docs/Web/API/KeyboardEvent), [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), die [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) und weitere Funktionen ermöglichen.
- Event-Handler für Ereignisse, die sowohl an Elemente als auch an Dokumente übermittelt werden können. Dazu gehören derzeit nur die Aktionen [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event) und [`paste`](/de/docs/Web/API/Element/paste_event).

### Schnittstellen für HTML-Elemente

Die Schnittstelle `Element` wurde durch Einführung der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement), von der alle spezifischeren HTML-Elementklassen erben, für die Darstellung von HTML-Elementen angepasst. Dadurch wird die Klasse `Element` um allgemeine HTML-spezifische Funktionen für Elementknoten erweitert. Zu den von `HTMLElement` hinzugefügten Eigenschaften gehören beispielsweise [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein {{Glossary("HTML", "HTML")}}-Dokument ist ein DOM-Baum, dessen Elementknoten HTML-Elemente sind, die durch die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) repräsentiert werden. Die Klasse `HTMLElement` erbt wiederum von `Node`, sodass jedes Element auch ein Knoten ist – aber nicht jeder Knoten ein Element. Dadurch stehen die von der Schnittstelle [`Node`](/de/docs/Web/API/Node) bereitgestellten Strukturfunktionen auch HTML-Elementen zur Verfügung: Sie können ineinander verschachtelt, erstellt, gelöscht und verschoben werden.

Die Schnittstelle `HTMLElement` ist jedoch generisch und stellt nur Funktionen bereit, die allen HTML-Elementen gemeinsam sind. Dazu gehören beispielsweise die ID und die Koordinaten eines Elements, das HTML, aus dem es besteht, sowie Informationen zur Scrollposition.

Um die Kernfunktionalität der Schnittstelle `HTMLElement` um die für ein bestimmtes Element benötigten Funktionen zu erweitern, wird die Klasse `HTMLElement` durch Unterklassen mit den entsprechenden Eigenschaften und Methoden ergänzt. Das Element {{HTMLElement("canvas")}} wird beispielsweise durch ein Objekt des Typs [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) repräsentiert. `HTMLCanvasElement` erweitert den Typ `HTMLElement` um Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die canvas-spezifische Funktionen bereitstellen.

Die Vererbungshierarchie der HTML-Elementklassen sieht insgesamt so aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Ein Element erbt somit die Eigenschaften und Methoden aller seiner Vorfahren. Betrachten Sie beispielsweise ein {{HTMLElement("a")}}-Element, das im DOM durch ein Objekt des Typs [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird. Das Element verfügt über die ankerspezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind. Darüber hinaus verfügt es über die Eigenschaften und Methoden von [`HTMLElement`](/de/docs/Web/API/HTMLElement), [`Element`](/de/docs/Web/API/Element), [`Node`](/de/docs/Web/API/Node) und schließlich [`EventTarget`](/de/docs/Web/API/EventTarget).

Jede Ebene trägt einen wesentlichen Teil zur Funktionalität des Elements bei. Von `Node` erbt das Element die Fähigkeit, in einem anderen Element enthalten zu sein und selbst andere Elemente zu enthalten. Besonders wichtig ist die von `EventTarget` geerbte Fähigkeit, Ereignisse wie Mausklicks sowie Wiedergabe- und Pausenereignisse zu empfangen und zu verarbeiten.

Einige Elemente haben Gemeinsamkeiten und verfügen deshalb über einen zusätzlichen gemeinsamen Zwischentyp. Die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} stellen beispielsweise beide audiovisuelle Medien dar. Ihre entsprechenden Typen [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) basieren auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), der wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) basiert. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die Audio- und Videoelementen gemeinsam sind.

Diese elementspezifischen Schnittstellen machen den größten Teil der HTML DOM API aus und stehen im Mittelpunkt dieses Artikels. Der Artikel zum [DOM](/de/docs/Web/API/Document_Object_Model) bietet eine allgemeine Einführung in das DOM und seine Konzepte.

## Zielgruppe des HTML DOM

Die vom HTML DOM bereitgestellten Funktionen gehören zu den am häufigsten verwendeten APIs im Werkzeugkasten der Webentwicklung.
Mit Ausnahme der einfachsten Webanwendungen nutzen nahezu alle Webanwendungen einige Funktionen des HTML DOM.

## Schnittstellen der HTML DOM API

Die meisten Schnittstellen der HTML DOM API entsprechen nahezu eins zu eins einzelnen HTML-Elementen oder einer kleinen Gruppe von Elementen mit ähnlicher Funktionalität. Darüber hinaus umfasst die HTML DOM API einige Schnittstellen und Typen, die die Schnittstellen der HTML-Elemente unterstützen.

### Schnittstellen für HTML-Elemente

Diese Schnittstellen repräsentieren bestimmte HTML-Elemente oder Gruppen verwandter Elemente, denen dieselben Eigenschaften und Methoden zugeordnet sind.

- [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement)
- [`HTMLAreaElement`](/de/docs/Web/API/HTMLAreaElement)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
- [`HTMLBaseElement`](/de/docs/Web/API/HTMLBaseElement)
- [`HTMLBodyElement`](/de/docs/Web/API/HTMLBodyElement)
- [`HTMLBRElement`](/de/docs/Web/API/HTMLBRElement)
- [`HTMLButtonElement`](/de/docs/Web/API/HTMLButtonElement)
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`HTMLDataElement`](/de/docs/Web/API/HTMLDataElement)
- [`HTMLDataListElement`](/de/docs/Web/API/HTMLDataListElement)
- [`HTMLDetailsElement`](/de/docs/Web/API/HTMLDetailsElement)
- [`HTMLDialogElement`](/de/docs/Web/API/HTMLDialogElement)
- [`HTMLDirectoryElement`](/de/docs/Web/API/HTMLDirectoryElement)
- [`HTMLDivElement`](/de/docs/Web/API/HTMLDivElement)
- [`HTMLDListElement`](/de/docs/Web/API/HTMLDListElement)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)
- [`HTMLFieldSetElement`](/de/docs/Web/API/HTMLFieldSetElement)
- [`HTMLFormElement`](/de/docs/Web/API/HTMLFormElement)
- [`HTMLHRElement`](/de/docs/Web/API/HTMLHRElement)
- [`HTMLHeadElement`](/de/docs/Web/API/HTMLHeadElement)
- [`HTMLHeadingElement`](/de/docs/Web/API/HTMLHeadingElement)
- [`HTMLHtmlElement`](/de/docs/Web/API/HTMLHtmlElement)
- [`HTMLIFrameElement`](/de/docs/Web/API/HTMLIFrameElement)
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)
- [`HTMLLegendElement`](/de/docs/Web/API/HTMLLegendElement)
- [`HTMLLIElement`](/de/docs/Web/API/HTMLLIElement)
- [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)
- [`HTMLMapElement`](/de/docs/Web/API/HTMLMapElement)
- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)
- [`HTMLMenuElement`](/de/docs/Web/API/HTMLMenuElement)
- [`HTMLMetaElement`](/de/docs/Web/API/HTMLMetaElement)
- [`HTMLMeterElement`](/de/docs/Web/API/HTMLMeterElement)
- [`HTMLModElement`](/de/docs/Web/API/HTMLModElement)
- [`HTMLObjectElement`](/de/docs/Web/API/HTMLObjectElement)
- [`HTMLOListElement`](/de/docs/Web/API/HTMLOListElement)
- [`HTMLOptGroupElement`](/de/docs/Web/API/HTMLOptGroupElement)
- [`HTMLOptionElement`](/de/docs/Web/API/HTMLOptionElement)
- [`HTMLOutputElement`](/de/docs/Web/API/HTMLOutputElement)
- [`HTMLParagraphElement`](/de/docs/Web/API/HTMLParagraphElement)
- [`HTMLPictureElement`](/de/docs/Web/API/HTMLPictureElement)
- [`HTMLPreElement`](/de/docs/Web/API/HTMLPreElement)
- [`HTMLProgressElement`](/de/docs/Web/API/HTMLProgressElement)
- [`HTMLQuoteElement`](/de/docs/Web/API/HTMLQuoteElement)
- [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)
- [`HTMLSelectElement`](/de/docs/Web/API/HTMLSelectElement)
- [`HTMLSlotElement`](/de/docs/Web/API/HTMLSlotElement)
- [`HTMLSourceElement`](/de/docs/Web/API/HTMLSourceElement)
- [`HTMLSpanElement`](/de/docs/Web/API/HTMLSpanElement)
- [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)
- [`HTMLTableCaptionElement`](/de/docs/Web/API/HTMLTableCaptionElement)
- [`HTMLTableCellElement`](/de/docs/Web/API/HTMLTableCellElement)
- [`HTMLTableColElement`](/de/docs/Web/API/HTMLTableColElement)
- [`HTMLTableElement`](/de/docs/Web/API/HTMLTableElement)
- [`HTMLTableRowElement`](/de/docs/Web/API/HTMLTableRowElement)
- [`HTMLTableSectionElement`](/de/docs/Web/API/HTMLTableSectionElement)
- [`HTMLTemplateElement`](/de/docs/Web/API/HTMLTemplateElement)
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTimeElement`](/de/docs/Web/API/HTMLTimeElement)
- [`HTMLTitleElement`](/de/docs/Web/API/HTMLTitleElement)
- [`HTMLTrackElement`](/de/docs/Web/API/HTMLTrackElement)
- [`HTMLUListElement`](/de/docs/Web/API/HTMLUListElement)
- [`HTMLUnknownElement`](/de/docs/Web/API/HTMLUnknownElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)

#### Veraltete Schnittstellen für HTML-Elemente

- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) {{deprecated_inline}}

#### Nicht mehr verwendete Schnittstellen für HTML-Elemente

- [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) {{deprecated_inline}}
- [`HTMLFrameElement`](/de/docs/Web/API/HTMLFrameElement) {{deprecated_inline}}
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement) {{deprecated_inline}}

### Schnittstellen zur Integration von Webanwendungen und Browsern

Diese Schnittstellen ermöglichen den Zugriff auf das Browserfenster und das darin enthaltene HTML-Dokument sowie auf den Zustand des Browsers, gegebenenfalls verfügbare Plugins und verschiedene Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Nicht mehr verwendete Schnittstellen zur Integration von Webanwendungen und Browsern

- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Schnittstellen zur Formularunterstützung

Diese Schnittstellen stellen die Struktur und Funktionalität bereit, die von Elementen zum Erstellen und Verwalten von Formularen benötigt werden, darunter die Elemente {{HTMLElement("form")}} und {{HTMLElement("input")}}.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Schnittstellen für Canvas und Bilder

Diese Schnittstellen repräsentieren Objekte, die von der Canvas API verwendet werden, sowie die Elemente {{HTMLElement("img")}} und {{HTMLElement("picture")}}.

- [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)
- [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
- [`Path2D`](/de/docs/Web/API/Path2D)
- [`TextMetrics`](/de/docs/Web/API/TextMetrics)

### Medienschnittstellen

Die Medienschnittstellen ermöglichen über HTML den Zugriff auf die Inhalte der Medienelemente {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

- [`AudioTrack`](/de/docs/Web/API/AudioTrack)
- [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)
- [`MediaError`](/de/docs/Web/API/MediaError)
- [`TextTrack`](/de/docs/Web/API/TextTrack)
- [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)
- [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)
- [`TextTrackList`](/de/docs/Web/API/TextTrackList)
- [`TimeRanges`](/de/docs/Web/API/TimeRanges)
- [`TrackEvent`](/de/docs/Web/API/TrackEvent)
- [`VideoTrack`](/de/docs/Web/API/VideoTrack)
- [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)

### Schnittstellen für Drag and Drop

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare oder gerade gezogene Objekte sowie Gruppen solcher Objekte zu repräsentieren und den Drag-and-Drop-Vorgang zu verarbeiten.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Schnittstellen für den Seitenverlauf

Die Schnittstellen der History API ermöglichen den Zugriff auf Informationen über den Browserverlauf sowie die Vorwärts- und Rückwärtsnavigation des aktuellen Browser-Tabs innerhalb dieses Verlaufs.

- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)
- [`History`](/de/docs/Web/API/History)
- [`Location`](/de/docs/Web/API/Location)
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)

### Schnittstellen für Web Components

Diese Schnittstellen werden von der [Web Components API](/de/docs/Web/API/Web_components) verwendet, um [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu erstellen und zu verwalten.

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)

### Verschiedene und unterstützende Schnittstellen

Diese unterstützenden Objekttypen werden in der HTML DOM API auf unterschiedliche Weise verwendet. Darüber hinaus repräsentiert [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis, das übermittelt wird, wenn ein {{Glossary("JavaScript", "JavaScript")}}-{{jsxref("Promise")}} zurückgewiesen wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen, die zu anderen APIs gehören

Mehrere Schnittstellen sind zwar technisch in der HTML-Spezifikation definiert, gehören aber tatsächlich zu anderen APIs.

#### Schnittstellen für Web Storage

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ermöglicht es Websites, Daten vorübergehend oder dauerhaft auf dem Gerät von Benutzern zu speichern, um sie später wiederzuverwenden.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Schnittstellen für Web Workers

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) verwendet. Sie ermöglichen Workern die Interaktion mit einer Anwendung und deren Inhalten und unterstützen außerdem den Nachrichtenaustausch zwischen Fenstern oder Anwendungen.

- [`BroadcastChannel`](/de/docs/Web/API/BroadcastChannel)
- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
- [`MessageChannel`](/de/docs/Web/API/MessageChannel)
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
- [`MessagePort`](/de/docs/Web/API/MessagePort)
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)

#### Schnittstellen für WebSocket

Diese in der HTML-Spezifikation definierten Schnittstellen werden von der [WebSockets API](/de/docs/Web/API/WebSockets_API) verwendet.

- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
- [`WebSocket`](/de/docs/Web/API/WebSocket)

#### Schnittstellen für serverseitig gesendete Ereignisse

Die Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) repräsentiert die Quelle, die [serverseitig gesendete Ereignisse](/de/docs/Web/API/Server-sent_events) gesendet hat oder sendet.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das Ereignis [`input`](/de/docs/Web/API/Element/input_event) eines {{HTMLElement("input")}}-Elements überwacht. So wird der Zustand einer „Senden“-Schaltfläche abhängig davon aktualisiert, ob ein bestimmtes Feld gerade einen Wert enthält.

### HTML

Das HTML sieht folgendermaßen aus:

```html
<p>Please provide the information below. Items marked with "*" are required.</p>
<p>
  <label for="userName" required>Your name:</label>
  <input type="text" id="userName" /> (*)
</p>
<p>
  <label for="userEmail">Email:</label>
  <input type="email" id="userEmail" />
</p>
<input type="button" value="Send" id="sendButton" />
```

### JavaScript

```js
const nameField = document.getElementById("userName");
const sendButton = document.getElementById("sendButton");

sendButton.disabled = true;
// [note: this is disabled since it causes this article to always load with this example focused and scrolled into view]
// nameField.focus();

nameField.addEventListener("input", (event) => {
  const elem = event.target;
  const valid = elem.value.length !== 0;

  if (valid && sendButton.disabled) {
    sendButton.disabled = false;
  } else if (!valid && !sendButton.disabled) {
    sendButton.disabled = true;
  }
});
```

Dieser Code verwendet die Methode [`getElementById()`](/de/docs/Web/API/Document/getElementById) der Schnittstelle [`Document`](/de/docs/Web/API/Document), um die DOM-Objekte abzurufen, die die {{HTMLElement("input")}}-Elemente mit den IDs `userName` und `sendButton` repräsentieren. Über diese Objekte können wir auf die Eigenschaften und Methoden zugreifen, die Informationen über die Elemente bereitstellen und ihre Steuerung ermöglichen.

Die Eigenschaft [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled) des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekts für die „Senden“-Schaltfläche wird auf `true` gesetzt. Dadurch wird die Schaltfläche deaktiviert und kann nicht angeklickt werden. Außerdem wird das Eingabefeld für den Benutzernamen zum aktiven Fokus, indem die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) geerbte Methode [`focus()`](/de/docs/Web/API/HTMLElement/focus) aufgerufen wird.

Anschließend wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um der Eingabe des Benutzernamens einen Handler für das Ereignis `input` hinzuzufügen. Der Code prüft die Länge des aktuellen Eingabewerts. Ist sie null, wird die „Senden“-Schaltfläche deaktiviert, sofern sie nicht bereits deaktiviert ist. Andernfalls stellt der Code sicher, dass die Schaltfläche aktiviert ist.

Damit ist die „Senden“-Schaltfläche immer dann aktiviert, wenn das Eingabefeld für den Benutzernamen einen Wert enthält, und deaktiviert, wenn es leer ist.

### Ergebnis

{{EmbedLiveSample("Examples", 640, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Referenz zu HTML-Elementen](/de/docs/Web/HTML/Reference/Elements)
- [Referenz zu HTML-Attributen](/de/docs/Web/HTML/Reference/Attributes)
- Referenz zum [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model)
- [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
