---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: d527f91adab970844abf4c32092c123b55b85188
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML DOM API** besteht aus den Schnittstellen, die die Funktionalität jedes der [Elemente](/de/docs/Glossary/element) in [HTML](/de/docs/Glossary/HTML) sowie alle unterstützenden Typen und Schnittstellen, auf die sie sich stützen, definieren.

Die funktionalen Bereiche, die in der HTML DOM API enthalten sind, umfassen:

- Zugriff auf und Kontrolle von HTML-Elementen über das [DOM](/de/docs/Glossary/DOM).
- Zugriff auf und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML-{{HTMLElement("canvas")}}, beispielsweise um darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Media-Elementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf den Browser-Navigationverlauf.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [Server-sent events](/de/docs/Web/API/Server-sent_events).

## HTML DOM-Konzepte und Verwendung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML DOM, die die Interaktion mit HTML-Elementen betreffen. Diskussionen zu anderen Bereichen, wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) usw. finden Sie in der Dokumentation zu diesen APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ([DOM](/de/docs/Glossary/DOM)) ist eine Architektur, die die Struktur eines [`Dokuments`](/de/docs/Web/API/Document) beschreibt; jedes Dokument wird durch eine Instanz der Schnittstelle [`Document`](/de/docs/Web/API/Document) dargestellt. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten**, wobei ein Knoten ein grundlegender Datensatz ist, der ein einzelnes Objekt innerhalb des Dokuments darstellt (wie ein Element oder einen Textknoten).

Knoten können strikt organisatorisch sein und eine Möglichkeit bieten, andere Knoten zusammenzufassen oder einen Punkt zu schaffen, an dem eine Hierarchie konstruiert werden kann. Andere Knoten können sichtbare Komponenten eines Dokuments darstellen. Jeder Knoten basiert auf der [`Node`](/de/docs/Web/API/Node)-Schnittstelle, die Eigenschaften bereitstellt, um Informationen über den Knoten abzurufen, sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten innerhalb des DOM.

Knoten haben kein Konzept davon, den tatsächlich im Dokument angezeigten Inhalt zu enthalten. Sie sind leere Behälter. Das grundlegende Konzept eines Knotens, der visuellen Inhalt darstellen kann, wird durch die [`Element`](/de/docs/Web/API/Element)-Schnittstelle eingeführt. Eine Objektinstanz vom Typ `Element` repräsentiert ein einzelnes Element in einem Dokument, das entweder mit HTML oder einem [XML](/de/docs/Glossary/XML)-Vokabular wie [SVG](/de/docs/Glossary/SVG) erstellt wurde.

Betrachten Sie beispielsweise ein Dokument mit zwei Elementen, von denen eines zwei weitere verschachtelte Elemente enthält:

![Struktur eines Dokuments mit Elementen innerhalb eines Dokuments in einem Fenster](dom-structure.svg)

Während die [`Document`](/de/docs/Web/API/Document)-Schnittstelle als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert ist, erweitert die HTML-Spezifikation sie erheblich, um Informationen hinzuzufügen, die speziell für die Verwendung des DOM im Kontext eines Webbrowsers relevant sind, sowie um sie speziell zur Darstellung von HTML-Dokumenten zu verwenden.

Zu den durch die HTML-Spezifikation zu `Document` hinzugefügten Elementen gehören:

- Unterstützung für den Zugriff auf verschiedene Informationen, die von den [HTTP](/de/docs/Glossary/HTTP)-Headern beim Laden der Seite bereitgestellt werden, wie den [Ort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), [Änderungsdatum](/de/docs/Web/API/Document/lastModified), [verweisende Seite](/de/docs/Web/API/Document/referrer) und so weiter.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}}-Block und [body](/de/docs/Web/API/Document/body) des Dokuments, sowie Listen der im Dokument enthaltenen [Bilder](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Skripte](/de/docs/Web/API/Document/scripts) usw.
- Unterstützung für die Interaktion mit dem Benutzer durch das Untersuchen des [Fokus](/de/docs/Web/API/Document/hasFocus) und durch das Ausführen von Befehlen auf [editierbaren Inhalten](/de/docs/Web/HTML/Global_attributes/contenteditable).
- Ereignis-Handler für Dokumentereignisse, die durch den HTML-Standard definiert sind, um Zugriff auf [Maus](/de/docs/Web/API/MouseEvent) und [Tastatur](/de/docs/Web/API/KeyboardEvent) Ereignisse, [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) und mehr zu ermöglichen.
- Ereignis-Handler für Ereignisse, die an sowohl Elemente als auch Dokumente übermittelt werden können; diese umfassen derzeit nur [Kopieren](/de/docs/Web/API/HTMLElement/copy_event), [Ausschneiden](/de/docs/Web/API/HTMLElement/cut_event) und [Einfügen](/de/docs/Web/API/HTMLElement/paste_event)-Aktionen.

### HTML-Element-Schnittstellen

Die `Element`-Schnittstelle wurde ferner angepasst, um HTML-Elemente speziell darzustellen, indem die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle eingeführt wurde, von der alle spezifischeren HTML-Elementklassen erben. Dies erweitert die `Element`-Klasse, um HTML-spezifische allgemeine Funktionen zu den Elementknoten hinzuzufügen. Durch `HTMLElement` hinzugefügte Eigenschaften umfassen beispielsweise [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein [HTML](/de/docs/Glossary/HTML)-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, dargestellt durch die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle. Die `HTMLElement`-Klasse implementiert wiederum `Node`, sodass jedes Element auch ein Knoten ist (aber nicht umgekehrt). Auf diese Weise sind die strukturellen Merkmale, die von der [`Node`](/de/docs/Web/API/Node)-Schnittstelle implementiert wurden, auch für HTML-Elemente verfügbar, sodass sie ineinander verschachtelt, erstellt und gelöscht, bewegt und so weiter werden können.

Die `HTMLElement`-Schnittstelle ist jedoch generisch und bietet nur die Funktionalität, die allen HTML-Elementen gemeinsam ist, wie die ID des Elements, seine Koordinaten, das HTML, aus dem das Element besteht, Informationen über die Scroll-Position und so weiter.

Um die Funktionalität der Kern-`HTMLElement`-Schnittstelle zu erweitern und die für ein spezifisches Element benötigten Merkmale bereitzustellen, wird die `HTMLElement`-Klasse unterklassifiziert, um die erforderlichen Eigenschaften und Methoden hinzuzufügen. Zum Beispiel wird das {{HTMLElement("canvas")}}-Element durch ein Objekt vom Typ [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) repräsentiert. `HTMLCanvasElement` erweitert den `HTMLElement`-Typ, indem Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzugefügt werden, um canvas-spezifische Funktionen bereitzustellen.

Das gesamte Vererbungsmodell für HTML-Elementklassen sieht so aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Ein Element erbt die Eigenschaften und Methoden all seiner Vorfahren. Beispielsweise betrachten Sie ein {{HTMLElement("a")}}-Element, welches im DOM durch ein Objekt vom Typ [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird. Das Element enthält dann die ankerspezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind, aber auch diejenigen, die durch [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Element`](/de/docs/Web/API/Element) definiert sind, sowie von [`Node`](/de/docs/Web/API/Node) und schließlich [`EventTarget`](/de/docs/Web/API/EventTarget).

Jede Ebene definiert einen Schlüsselaspekt der Nützlichkeit des Elements. Von `Node` erbt das Element Konzepte über die Fähigkeit, von einem anderen Element enthalten zu werden und selbst andere Elemente zu enthalten. Von besonderer Bedeutung ist das, was durch das Erben von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse wie Mausklicks, Abspiel- und Pause-Ereignisse usw. zu empfangen und zu verarbeiten.

Es gibt Elemente, die Gemeinsamkeiten teilen und daher einen zusätzlichen Zwischentyp haben. Zum Beispiel stellen die {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente beide audiovisuelle Medien dar. Die entsprechenden Typen, [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), basieren beide auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), welches wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) basiert und so weiter. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die Audio- und Videoelemente gemeinsam haben.

Diese elementspezifischen Schnittstellen bilden den Großteil der HTML DOM API und sind der Fokus dieses Artikels. Um mehr über die tatsächliche Struktur des [DOM](/de/docs/Web/API/Document_Object_Model) zu erfahren, siehe [Einführung in das DOM](/de/docs/Web/API/Document_Object_Model/Introduction).

## Zielgruppe der HTML DOM

Die von der HTML DOM bereitgestellten Funktionen gehören zu den am häufigsten verwendeten APIs im Werkzeugkasten eines Webentwicklers. Alle, außer den einfachsten Webanwendungen, werden einige Funktionen der HTML DOM nutzen.

## HTML DOM API-Schnittstellen

Die Mehrheit der Schnittstellen, aus denen die HTML DOM API besteht, korrespondiert fast eins zu eins mit einzelnen HTML-Elementen oder mit einer kleinen Gruppe von Elementen mit ähnlicher Funktionalität. Darüber hinaus umfasst die HTML DOM API einige Schnittstellen und Typen zur Unterstützung der HTML-Element-Schnittstellen.

### HTML-Element-Schnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Gruppen verwandter Elemente, die dieselben mit ihnen verbundenen Eigenschaften und Methoden haben).

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

### Schnittstellen für Web-App- und Browser-Integration

Diese Schnittstellen bieten Zugriff auf das Browserfenster und das Dokument, die das HTML enthalten, sowie auf den Status des Browsers, verfügbare Plugins (falls vorhanden) und verschiedene Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Veraltete Schnittstellen für Web-App- und Browser-Integration

- [`External`](/de/docs/Web/API/External) {{deprecated_inline}}

#### Obsolete Schnittstellen für Web-App- und Browser-Integration

- [`ApplicationCache`](/de/docs/Web/API/ApplicationCache) {{deprecated_inline}}
- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Unterstützung von Formular-Schnittstellen

Diese Schnittstellen bieten Struktur und Funktionalität, die von den Elementen zur Erstellung und Verwaltung von Formularen erforderlich sind, einschließlich der {{HTMLElement("form")}} und {{HTMLElement("input")}}-Elemente.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Canvas- und Bild-Schnittstellen

Diese Schnittstellen repräsentieren Objekte, die von der Canvas-API verwendet werden, sowie das {{HTMLElement("img")}}-Element und {{HTMLElement("picture")}}-Elemente.

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

Die Media-Schnittstellen bieten HTML-Zugriff auf die Inhalte der Media-Elemente: {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

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

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Elemente, Gruppen gezogener oder ziehbarer Elemente darzustellen und den Drag-and-Drop-Prozess zu handhaben.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Seitenhistorie-Schnittstellen

Die History-API-Schnittstellen ermöglichen den Zugriff auf Informationen über die Browser-Historie und den Wechsel des Browsers aktuellen Tabs vorwärts und rückwärts in dieser Historie.

- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)
- [`History`](/de/docs/Web/API/History)
- [`Location`](/de/docs/Web/API/Location)
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)

### Web-Komponenten-Schnittstellen

Diese Schnittstellen werden von der [Web Components API](/de/docs/Web/API/Web_components) verwendet, um die verfügbaren [benutzerdefinierten Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu erstellen und zu verwalten.

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)

### Verschiedene und unterstützende Schnittstellen

Diese unterstützenden Objekttypen werden auf verschiedene Weise in der HTML DOM API verwendet. Darüber hinaus repräsentiert [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis, das ausgeliefert wird, wenn ein [JavaScript](/de/docs/Glossary/JavaScript) {{jsxref("Promise")}} abgelehnt wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen, die zu anderen APIs gehören

Mehrere Schnittstellen sind technisch in der HTML-Spezifikation definiert, während sie tatsächlich Teil anderer APIs sind.

#### Web-Storage-Schnittstellen

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet die Möglichkeit für Websites, Daten entweder vorübergehend oder dauerhaft auf dem Gerät des Benutzers für eine spätere Wiederverwendung zu speichern.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Web Workers-Schnittstellen

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) verwendet, um sowohl die Möglichkeit für Worker zu schaffen, mit einer App und ihrem Inhalt zu interagieren, als auch zur Unterstützung der Nachrichtenübermittlung zwischen Fenstern oder Apps.

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

#### WebSocket-Schnittstellen

Diese Schnittstellen, die von der HTML-Spezifikation definiert sind, werden von der [WebSockets API](/de/docs/Web/API/WebSockets_API) verwendet.

- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
- [`WebSocket`](/de/docs/Web/API/WebSocket)

#### Server-Sent Events Schnittstellen

Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle repräsentiert die Quelle, die [Server-Sent Events](/de/docs/Web/API/Server-sent_events) gesendet hat oder sendet.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis eines {{HTMLElement("input")}}-Elements überwacht, um den Status eines „Absenden“-Buttons eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

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

Dieser Code verwendet die [`getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode der `Document`-Schnittstelle, um das DOM-Objekt zu erhalten, das die {{HTMLElement("input")}}-Elemente repräsentiert, deren IDs `userName` und `sendButton` sind. Mit diesen können wir auf die Eigenschaften und Methoden zugreifen, die Informationen über diese Elemente liefern und die Kontrolle darüber gewähren.

Das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt für die [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)-Eigenschaft des „Absenden“-Buttons wird auf `true` gesetzt, was den „Absenden“-Button deaktiviert, sodass er nicht geklickt werden kann. Zusätzlich wird das Benutzername-Eingabefeld zum aktiven Fokus gemacht, indem die [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode aufgerufen wird, die es von `HTMLElement` erbt.

Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Handler für das Eingabefeld-Ereignis zum Benutzernameneingabefeld hinzuzufügen. Dieser Code überprüft die Länge des aktuellen Werts der Eingabe; wenn sie null ist, dann wird der „Absenden“-Button deaktiviert, falls er nicht bereits deaktiviert ist. Andernfalls wird sichergestellt, dass der Button aktiviert ist.

Mit dieser Anordnung ist der „Absenden“-Button immer aktiviert, wenn das Benutzernameneingabefeld einen Wert hat, und deaktiviert, wenn es leer ist.

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

- [HTML-Elemente Referenz](/de/docs/Web/HTML/Element)
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Attributes)
- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) Referenz

### Leitfäden

- [Dokumente manipulieren](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): Eine Anfängeranleitung zur Manipulation des DOM.
