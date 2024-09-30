---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: d527f91adab970844abf4c32092c123b55b85188
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML DOM API** besteht aus den Schnittstellen, die die Funktionalität jedes der [Elemente](/de/docs/Glossary/element) in [HTML](/de/docs/Glossary/HTML) definieren, sowie aus unterstützenden Typen und Schnittstellen, auf die sie angewiesen sind.

Die funktionalen Bereiche, die in der HTML DOM API enthalten sind, umfassen:

- Zugriff auf und Steuerung von HTML-Elementen über das [DOM](/de/docs/Glossary/DOM).
- Zugriff auf und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML-{{HTMLElement("canvas")}}, beispielsweise um darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf die Browserverlaufsgeschichte.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [Server-sent events](/de/docs/Web/API/Server-sent_events).

## HTML DOM Konzepte und Verwendung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML DOM, die den Umgang mit HTML-Elementen betreffen. Die Diskussion anderer Bereiche, wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) usw. sind in der Dokumentation dieser APIs zu finden.

### Struktur eines HTML-Dokuments

Das Document Object Model ([DOM](/de/docs/Glossary/DOM)) ist eine Architektur, die die Struktur eines [`Dokuments`](/de/docs/Web/API/Document) beschreibt; jedes Dokument wird durch eine Instanz der Schnittstelle [`Document`](/de/docs/Web/API/Document) dargestellt. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten**, wobei ein Knoten ein grundlegender Datensatz ist, der ein einzelnes Objekt im Dokument darstellt (wie ein Element oder Textknoten).

Knoten können rein organisatorisch sein, indem sie eine Möglichkeit bieten, andere Knoten zu gruppieren, oder einen Punkt schaffen, an dem eine Hierarchie aufgebaut werden kann; andere Knoten können sichtbare Komponenten eines Dokuments darstellen. Jeder Knoten basiert auf der [`Node`](/de/docs/Web/API/Node)-Schnittstelle, die Eigenschaften zum Abrufen von Informationen über den Knoten sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten im DOM bereitstellt.

Knoten haben kein Konzept des tatsächlichen Inhalts, der im Dokument angezeigt wird. Sie sind leere Gefäße. Die grundlegende Vorstellung eines Knotens, der visuellen Inhalt darstellen kann, wird durch die [`Element`](/de/docs/Web/API/Element)-Schnittstelle eingeführt. Ein `Element`-Objekt-Instanz stellt ein einzelnes Element in einem Dokument dar, das entweder mit HTML oder einer [XML](/de/docs/Glossary/XML)-Vokabular wie [SVG](/de/docs/Glossary/SVG) erstellt wurde.

Zum Beispiel, betrachten Sie ein Dokument mit zwei Elementen, von denen eines zwei weitere verschachtelte Elemente enthält:

![Struktur eines Dokuments mit Elementen in einem Fenster](dom-structure.svg)

Während die [`Document`](/de/docs/Web/API/Document)-Schnittstelle als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert ist, erweitert die HTML-Spezifikation diese erheblich, um Informationen hinzuzufügen, die spezifisch für die Verwendung des DOM im Kontext eines Webbrowsers sind, sowie für die spezifische Verwendung zur Darstellung von HTML-Dokumenten.

Zu den von der HTML-Spezifikation zu `Document` hinzugefügten Elementen gehören:

- Unterstützung für den Zugriff auf verschiedene Informationen, die von den [HTTP](/de/docs/Glossary/HTTP)-Headern beim Laden der Seite bereitgestellt werden, wie den [Standort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), [Änderungsdatum](/de/docs/Web/API/Document/lastModified), [verweisende Seite](/de/docs/Web/API/Document/referrer) usw.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}}-Block und [body](/de/docs/Web/API/Document/body) des Dokuments sowie auf Listen der im Dokument enthaltenen [Bilder](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Skripte](/de/docs/Web/API/Document/scripts) usw.
- Unterstützung für die Interaktion mit dem Benutzer durch die Überprüfung des [Fokus](/de/docs/Web/API/Document/hasFocus) und die Ausführung von Befehlen auf [bearbeitbarem Inhalt](/de/docs/Web/HTML/Global_attributes/contenteditable).
- Ereignishandler für durch den HTML-Standard definierte Dokumentereignisse, die den Zugriff auf [Maus](/de/docs/Web/API/MouseEvent)- und [Tastatur](/de/docs/Web/API/KeyboardEvent)-ereignisse, [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) und mehr ermöglichen.
- Ereignishandler für Ereignisse, die sowohl an Elemente als auch an Dokumente geliefert werden können; diese umfassen derzeit nur [Kopier](/de/docs/Web/API/HTMLElement/copy_event)-, [Ausschneid](/de/docs/Web/API/HTMLElement/cut_event)- und [Einfügeaktionen](/de/docs/Web/API/HTMLElement/paste_event).

### HTML-Element-Schnittstellen

Die `Element`-Schnittstelle wurde weiter angepasst, um HTML-Elemente speziell durch die Einführung der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle darzustellen, von der alle spezifischeren HTML-Elementklassen erben. Dies erweitert die `Element`-Klasse um HTML-spezifische allgemeine Funktionen zu den Elementknoten. Von `HTMLElement` hinzugefügte Eigenschaften sind beispielsweise [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein [HTML](/de/docs/Glossary/HTML)-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, das durch die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert wird. Die `HTMLElement`-Klasse implementiert wiederum `Node`, sodass jedes Element auch ein Knoten ist (aber nicht umgekehrt). Auf diese Weise stehen die von der [`Node`](/de/docs/Web/API/Node)-Schnittstelle implementierten strukturellen Funktionen auch HTML-Elementen zur Verfügung, sodass sie ineinander verschachtelt, erstellt und gelöscht, verschoben werden können usw.

Die `HTMLElement`-Schnittstelle ist jedoch generisch und bietet nur die Funktionalität, die allen HTML-Elementen gemeinsam ist, wie die ID des Elements, seine Koordinaten, das HTML, aus dem das Element besteht, Informationen über die Scrollposition usw.

Um die Funktionalität der Kern-`HTMLElement`-Schnittstelle zu erweitern, um die für ein bestimmtes Element benötigten Funktionen bereitzustellen, wird die `HTMLElement`-Klasse unterklassifiziert, um die benötigten Eigenschaften und Methoden hinzuzufügen. Beispielsweise wird das {{HTMLElement("canvas")}}-Element durch ein Objekt vom Typ [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) dargestellt. `HTMLCanvasElement` erweitert den `HTMLElement`-Typ durch Hinzufügen von Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), um Canvas-spezifische Funktionen bereitzustellen.

Die Gesamtvererbung für HTML-Elementklassen sieht so aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Ein Element erbt, als solches, die Eigenschaften und Methoden all seiner Vorfahren. Betrachten Sie ein {{HTMLElement("a")}}-Element, das im DOM durch ein Objekt vom Typ [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) dargestellt wird. Das Element umfasst dann die ankerspezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind, sowie die, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Element`](/de/docs/Web/API/Element) definiert sind, sowie von [`Node`](/de/docs/Web/API/Node) und schließlich [`EventTarget`](/de/docs/Web/API/EventTarget).

Jede Ebene definiert einen Schlüsselaspekt der Nützlichkeit des Elements. Von `Node` erbt das Element Konzepte rund um die Fähigkeit, vom Element enthalten zu sein und selbst andere Elemente zu enthalten. Von besonderer Bedeutung ist das, was durch das Erben von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse wie Mausklicks, Abspiel- und Pauseereignisse und dergleichen zu empfangen und zu behandeln.

Es gibt Elemente, die Gemeinsamkeiten teilen und daher einen zusätzlichen Zwischentyp haben. Zum Beispiel präsentieren das {{HTMLElement("audio")}}- und das {{HTMLElement("video")}}-Element beide audiovisuelle Medien. Die entsprechenden Typen [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) basieren beide auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), der wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) basiert und so weiter. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die zwischen Audio- und Videoelementen gemeinsam sind.

Diese elementspezifischen Schnittstellen machen den Großteil der HTML DOM API aus und sind der Schwerpunkt dieses Artikels. Um mehr über die tatsächliche Struktur des [DOM](/de/docs/Web/API/Document_Object_Model) zu erfahren, siehe [Einführung in das DOM](/de/docs/Web/API/Document_Object_Model/Introduction).

## Zielgruppe der HTML DOM

Die von der HTML DOM bereitgestellten Funktionen gehören zu den am häufigsten verwendeten APIs in der Werkzeugkiste eines Webentwicklers. Alle, außer die einfachsten Web-Anwendungen, werden einige Funktionen der HTML DOM verwenden.

## HTML DOM API-Schnittstellen

Die Mehrheit der Schnittstellen, die die HTML DOM API ausmachen, entspricht fast eins zu eins einzelnen HTML-Elementen oder einer kleinen Gruppe von Elementen mit ähnlicher Funktionalität. Darüber hinaus umfasst die HTML DOM API einige Schnittstellen und Typen, um die HTML-Element-Schnittstellen zu unterstützen.

### HTML-Element-Schnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Sätze von verwandten Elementen, die dieselben Eigenschaften und Methoden mit sich) assoziiert haben.

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

#### Veraltete HTML-Element-Schnittstellen

- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) {{deprecated_inline}}

#### Obsolete HTML-Element-Schnittstellen

- [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) {{deprecated_inline}}
- [`HTMLFrameElement`](/de/docs/Web/API/HTMLFrameElement) {{deprecated_inline}}
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement) {{deprecated_inline}}

### Web-App- und Browser-Integrationsschnittstellen

Diese Schnittstellen bieten Zugriff auf das Browserfenster und -dokument, das das HTML enthält, sowie auf den Status des Browsers, dort verfügbare Plugins (falls vorhanden) und verschiedene Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Veraltete Web-App- und Browser-Integrationsschnittstellen

- [`External`](/de/docs/Web/API/External) {{deprecated_inline}}

#### Obsolete Web-App- und Browser-Integrationsschnittstellen

- [`ApplicationCache`](/de/docs/Web/API/ApplicationCache) {{deprecated_inline}}
- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Formulardatenunterstützung Schnittstellen

Diese Schnittstellen bieten Struktur und Funktionalität, die von den Elementen erforderlich sind, die verwendet werden, um Formulare zu erstellen und zu verwalten, einschließlich der {{HTMLElement("form")}}- und {{HTMLElement("input")}}-Elemente.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Canvas- und Bildschnittstellen

Diese Schnittstellen repräsentieren Objekte, die von der Canvas API sowie den {{HTMLElement("img")}}- und {{HTMLElement("picture")}}-Elementen verwendet werden.

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

### Medien-Schnittstellen

Die Medienschnittstellen bieten HTML-Zugriff auf die Inhalte der Medienelemente: {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

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

### Drag-and-Drop-Schnittstellen

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Elemente, Gruppen von gezogenen oder ziehbaren Elementen darzustellen und den Drag-and-Drop-Prozess zu handhaben.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Seitenverlaufs-Schnittstellen

Die History API-Schnittstellen ermöglichen den Zugriff auf Informationen über den Verlauf des Browsers sowie das Verschieben des aktuellen Tabs des Browsers vorwärts und rückwärts durch diesen Verlauf.

- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)
- [`History`](/de/docs/Web/API/History)
- [`Location`](/de/docs/Web/API/Location)
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)

### Web Components-Schnittstellen

Diese Schnittstellen werden von der [Web Components API](/de/docs/Web/API/Web_components) verwendet, um die verfügbaren [benutzerdefinierten Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu erstellen und zu verwalten.

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)

### Verschiedene und unterstützende Schnittstellen

Diese unterstützenden Objekttypen werden auf verschiedene Weise in der HTML DOM API verwendet. Darüber hinaus stellt [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis dar, das ausgeliefert wird, wenn ein [JavaScript](/de/docs/Glossary/JavaScript) {{jsxref("Promise")}} abgelehnt wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen anderer APIs

Mehrere Schnittstellen sind technisch in der HTML-Spezifikation definiert, gehören jedoch tatsächlich zu anderen APIs.

#### Web Storage Schnittstellen

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet die Möglichkeit für Websites, Daten entweder temporär oder dauerhaft auf dem Gerät des Benutzers zu speichern, um sie später wiederzuverwenden.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Web Workers Schnittstellen

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) verwendet, sowohl um die Fähigkeit zu etablieren, dass Worker mit einer App und ihren Inhalten interagieren, als auch um die Nachrichtenübermittlung zwischen Fenstern oder Apps zu unterstützen.

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

#### WebSocket Schnittstellen

Diese Schnittstellen, die durch die HTML-Spezifikation definiert sind, werden von der [WebSockets API](/de/docs/Web/API/WebSockets_API) verwendet.

- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
- [`WebSocket`](/de/docs/Web/API/WebSocket)

#### Server-sent events Schnittstellen

Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle stellt die Quelle dar, die [vom Server gesendete Ereignisse](/de/docs/Web/API/Server-sent_events) gesendet oder gesendet hat.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis eines {{HTMLElement("input")}}-Elements überwacht, um den Zustand der "Senden"-Schaltfläche eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

### JavaScript

```js
const nameField = document.getElementById("userName");
const sendButton = document.getElementById("sendButton");

sendButton.disabled = true;
// [note: this is disabled since it causes this article to always load with this example focused and scrolled into view]
//nameField.focus();

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

Dieser Code verwendet die [`Document`](/de/docs/Web/API/Document)-Schnittstelle's [`getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode, um das DOM-Objekt zu erhalten, das die {{HTMLElement("input")}}-Elemente darstellt, deren IDs `userName` und `sendButton` sind. Mit diesen können wir auf die Eigenschaften und Methoden zugreifen, die Informationen bereitstellen und die Kontrolle über diese Elemente gewähren.

Das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt für die "Senden"-Schaltfläche hat die [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)-Eigenschaft auf `true` gesetzt, wodurch die "Senden"-Schaltfläche deaktiviert wird, sodass sie nicht geklickt werden kann. Darüber hinaus wird das Benutzername-Eingabefeld durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, die es von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt, zum aktiven Fokus gemacht.

Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Handler für das `input`-Ereignis zur Benutzername-Eingabe hinzuzufügen. Dieser Code überprüft die Länge des aktuellen Werts der Eingabe; wenn es null ist, dann wird die "Senden"-Schaltfläche deaktiviert, wenn sie nicht bereits deaktiviert ist. Andernfalls stellt der Code sicher, dass die Schaltfläche aktiviert ist.

Mit dieser Einrichtung ist die "Senden"-Schaltfläche immer aktiviert, wenn das Benutzername-Eingabefeld einen Wert hat und deaktiviert, wenn es leer ist.

### HTML

Das HTML für das Formular sieht folgendermaßen aus:

```html
<p>Please provide the information below. Items marked with "*" are required.</p>
<form action="" method="get">
  <p>
    <label for="userName" required>Your name:</label>
    <input type="text" id="userName" /> (*)
  </p>
  <p>
    <label for="userEmail">Email:</label>
    <input type="email" id="userEmail" />
  </p>
  <input type="submit" value="Send" id="sendButton" />
</form>
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- [HTML-Elemente-Referenz](/de/docs/Web/HTML/Element)
- [HTML-Attributsreferenz](/de/docs/Web/HTML/Attributes)
- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) Referenz

### Leitfäden

- [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): Ein Anfänger-Leitfaden zur Manipulation des DOM.
