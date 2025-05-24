---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML DOM API** besteht aus den Schnittstellen, die die Funktionalität jedes {{Glossary("element", "Elements")}} in {{Glossary("HTML", "HTML")}} definieren, sowie aus unterstützenden Typen und Schnittstellen, auf die sie sich verlassen.

Die funktionalen Bereiche, die in der HTML DOM API enthalten sind, umfassen:

- Zugriff und Kontrolle von HTML-Elementen über das {{Glossary("DOM", "DOM")}}.
- Zugriff auf und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML-{{HTMLElement("canvas")}}, zum Beispiel um darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugang zur Browser-Navigation.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [Server-sent events](/de/docs/Web/API/Server-sent_events).

## HTML DOM-Konzepte und -Nutzung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML DOM, die die Interaktion mit HTML-Elementen betreffen. Diskussionen über andere Bereiche, wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) usw., finden Sie in der Dokumentation dieser APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ({{Glossary("DOM", "DOM")}}) ist eine Architektur, die die Struktur eines [`Dokuments`](/de/docs/Web/API/Document) beschreibt; jedes Dokument wird durch eine Instanz der Schnittstelle [`Document`](/de/docs/Web/API/Document) repräsentiert. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten**, wobei ein Knoten einen grundlegenden Datensatz darstellt, der ein einzelnes Objekt innerhalb des Dokuments repräsentiert (wie ein Element oder Textknoten).

Knoten können strikt organisatorisch sein und eine Möglichkeit bieten, andere Knoten zu gruppieren oder einen Punkt zu schaffen, an dem eine Hierarchie aufgebaut werden kann; andere Knoten können sichtbare Komponenten eines Dokuments darstellen. Jeder Knoten basiert auf der [`Node`](/de/docs/Web/API/Node)-Schnittstelle, die Eigenschaften bietet, um Informationen über den Knoten zu erhalten, sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten innerhalb des DOM.

Knoten haben keine Vorstellung davon, den Inhalt einzuschließen, der tatsächlich im Dokument angezeigt wird. Sie sind leere Gefäße. Die grundlegende Vorstellung eines Knotens, der visuellen Inhalt darstellen kann, wird durch die [`Element`](/de/docs/Web/API/Element)-Schnittstelle eingeführt. Eine `Element`-Objektinstanz repräsentiert ein einzelnes Element in einem Dokument, das entweder mit HTML oder einem {{Glossary("XML", "XML")}}-Vokabular wie {{Glossary("SVG", "SVG")}} erstellt wurde.

Betrachten Sie zum Beispiel ein Dokument mit zwei Elementen, von denen eines zwei weitere eingebettete Elemente enthält:

![Struktur eines Dokuments mit Elementen in einem Dokument in einem Fenster](dom-structure.svg)

Während die [`Document`](/de/docs/Web/API/Document)-Schnittstelle als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert ist, erweitert die HTML-Spezifikation sie erheblich, um Informationen hinzuzufügen, die spezifisch sind für die Verwendung des DOM im Kontext eines Webbrowsers, sowie um damit HTML-Dokumente zu repräsentieren.

Unter den Dingen, die durch den HTML-Standard zu `Document` hinzugefügt werden, sind:

- Unterstützung für den Zugriff auf verschiedene Informationen, die durch die {{Glossary("HTTP", "HTTP")}}-Header beim Laden der Seite bereitgestellt werden, wie der [Standort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), [Änderungsdatum](/de/docs/Web/API/Document/lastModified), [verweisende Seite](/de/docs/Web/API/Document/referrer) und so weiter.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}}-Block und [body](/de/docs/Web/API/Document/body) des Dokuments sowie auf Listen der [Bilder](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Skripte](/de/docs/Web/API/Document/scripts) usw., die im Dokument enthalten sind.
- Unterstützung für die Interaktion mit dem Benutzer durch Untersuchen des [Fokus](/de/docs/Web/API/Document/hasFocus) und durch das Ausführen von Befehlen auf [bearbeitbaren Inhalten](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Ereignis-Handler für Dokumentereignisse, die durch den HTML-Standard definiert sind, um Zugriff auf [Maus-](/de/docs/Web/API/MouseEvent) und [Tastaturereignisse](/de/docs/Web/API/KeyboardEvent), [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) und mehr zu ermöglichen.
- Ereignis-Handler für Ereignisse, die sowohl an Elemente als auch an Dokumente geliefert werden können; dazu gehören derzeit nur [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event) und [`paste`](/de/docs/Web/API/Element/paste_event)-Aktionen.

### HTML-Elementschnittstellen

Die `Element`-Schnittstelle wurde weiter angepasst, um speziell HTML-Elemente darzustellen, indem die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle eingeführt wurde, von der alle spezifischeren HTML-Elementklassen erben. Dies erweitert die `Element`-Klasse um HTML-spezifische allgemeine Funktionen für die Elementknoten. Eigenschaften, die von `HTMLElement` hinzugefügt wurden, sind zum Beispiel [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein {{Glossary("HTML", "HTML")}}-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, das durch die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle repräsentiert wird. Die `HTMLElement`-Klasse implementiert wiederum `Node`, so dass jedes Element auch ein Knoten ist (aber nicht umgekehrt). Auf diese Weise stehen die strukturellen Funktionen, die durch die [`Node`](/de/docs/Web/API/Node)-Schnittstelle implementiert werden, auch HTML-Elementen zur Verfügung, so dass sie ineinander verschachtelt, erstellt und gelöscht, verschoben und so weiter werden können.

Die `HTMLElement`-Schnittstelle ist jedoch generisch und bietet nur die Funktionalität, die allen HTML-Elementen gemeinsam ist, wie die ID des Elements, seine Koordinaten, das HTML, das das Element ausmacht, Informationen über die Scroll-Position und so weiter.

Um die Funktionalität der Kern-`HTMLElement`-Schnittstelle zu erweitern und die Funktionen bereitzustellen, die für ein bestimmtes Element benötigt werden, wird die `HTMLElement`-Klasse untergeordnet, um die benötigten Eigenschaften und Methoden hinzuzufügen. Zum Beispiel wird das {{HTMLElement("canvas")}}-Element durch ein Objekt vom Typ [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) repräsentiert. `HTMLCanvasElement` erweitert den `HTMLElement`-Typ, indem es Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzufügt, um Canvas-spezifische Funktionen bereitzustellen.

Die allgemeine Vererbung für HTML-Elementklassen sieht folgendermaßen aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Ein Element erbt somit die Eigenschaften und Methoden all seiner Vorfahren. Betrachten Sie beispielhaft ein {{HTMLElement("a")}}-Element, das im DOM durch ein Objekt vom Typ [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird. Das Element umfasst dann die anker-spezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind, aber auch die, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Element`](/de/docs/Web/API/Element) definiert werden, sowie von [`Node`](/de/docs/Web/API/Node) und schließlich [`EventTarget`](/de/docs/Web/API/EventTarget).

Jede Ebene definiert einen wesentlichen Aspekt der Nützlichkeit des Elements. Von `Node` erbt das Element Konzepte, die die Fähigkeit betreffen, dass das Element von einem anderen Element enthalten sein kann und selbst andere Elemente enthalten kann. Von besonderer Bedeutung ist, was durch das Erben von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse zu empfangen und zu behandeln, wie Mausklicks, Abspiel- und Pausenvorgänge usw.

Es gibt Elemente, die Gemeinsamkeiten teilen und daher einen zusätzlichen Zwischentyp haben. Zum Beispiel stellen die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente beide audiovisuelle Medien dar. Die entsprechenden Typen, [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), basieren beide auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), der wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) usw. basiert. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die zwischen Audio- und Videoelementen gemeinsam sind.

Diese element-spezifischen Schnittstellen bilden den Großteil der HTML DOM API und sind der Schwerpunkt dieses Artikels. Um mehr über die tatsächliche Struktur des [DOM](/de/docs/Web/API/Document_Object_Model) zu erfahren, siehe [Einführung in das DOM](/de/docs/Web/API/Document_Object_Model/Introduction).

## Zielgruppe der HTML DOM

Die durch das HTML DOM freigelegten Funktionen gehören zu den am häufigsten verwendeten APIs im Werkzeugkasten eines Webentwicklers. Alle bis auf die einfachsten Webanwendungen werden einige Funktionen des HTML DOM verwenden.

## Schnittstellen der HTML DOM API

Die meisten der Schnittstellen, die die HTML DOM API bilden, korrespondieren fast eins zu eins mit einzelnen HTML-Elementen oder einer kleinen Gruppe von Elementen mit ähnlicher Funktionalität. Darüber hinaus umfasst die HTML DOM API einige Schnittstellen und Typen, um die HTML-Elementschnittstellen zu unterstützen.

### HTML-Elementschnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Gruppen verwandter Elemente, die dieselben Eigenschaften und Methoden haben).

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

#### Veraltete HTML-Elementschnittstellen

- [`HTMLMarqueeElement`](/de/docs/Web/API/HTMLMarqueeElement) {{deprecated_inline}}

#### Obsolete HTML-Elementschnittstellen

- [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) {{deprecated_inline}}
- [`HTMLFrameElement`](/de/docs/Web/API/HTMLFrameElement) {{deprecated_inline}}
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement) {{deprecated_inline}}

### Web-App- und Browser-Integrationsschnittstellen

Diese Schnittstellen bieten Zugriff auf das Browserfenster und das Dokument, das das HTML enthält, sowie auf den Status des Browsers, verfügbare Plugins (falls vorhanden) und verschiedene Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Veraltete Web-App- und Browser-Integrationsschnittstellen

- [`External`](/de/docs/Web/API/External) {{deprecated_inline}}

#### Obsolete Web-App- und Browser-Integrationsschnittstellen

- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Formulardarstellungsschnittstellen

Diese Schnittstellen bieten Struktur und Funktionalität, die von den Elementen benötigt werden, um Formulare zu erstellen und zu verwalten, einschließlich der {{HTMLElement("form")}}- und {{HTMLElement("input")}}-Elemente.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Canvas- und Bildschnittstellen

Diese Schnittstellen repräsentieren Objekte, die von der Canvas-API sowie den {{HTMLElement("img")}}-Elementen und {{HTMLElement("picture")}}-Elementen verwendet werden.

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

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Elemente, Gruppen von gezogenen oder ziehbaren Elementen zu repräsentieren und um den Drag-and-Drop-Prozess zu handhaben.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Seitenhistorie-Schnittstellen

Die Schnittstellen der History API ermöglichen den Zugriff auf Informationen über den Verlauf des Browsers, sowie das Vor- und Zurückschalten der aktuellen Registerkarte des Browsers durch diesen Verlauf.

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

Diese unterstützenden Objekttypen werden in einer Vielzahl von Funktionen in der HTML DOM API verwendet. Darüber hinaus repräsentiert [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis, das geliefert wird, wenn ein {{Glossary("JavaScript", "JavaScript")}}-{{jsxref("Promise")}} abgelehnt wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen, die zu anderen APIs gehören

Einige Schnittstellen sind technisch in der HTML-Spezifikation definiert, gehören jedoch tatsächlich zu anderen APIs.

#### Web-Storage-Schnittstellen

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet die Möglichkeit, dass Websites Daten entweder vorübergehend oder dauerhaft auf dem Gerät des Benutzers für die spätere Wiederverwendung speichern.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Web-Workers-Schnittstellen

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) sowohl zur Etablierung der Fähigkeit für Workers, mit einer App und ihrem Inhalt zu interagieren, als auch zur Unterstützung der Nachrichtenübermittlung zwischen Fenstern oder Apps verwendet.

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

Diese Schnittstellen, die durch die HTML-Spezifikation definiert sind, werden von der [WebSockets API](/de/docs/Web/API/WebSockets_API) verwendet.

- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
- [`WebSocket`](/de/docs/Web/API/WebSocket)

#### Server-sent events-Schnittstellen

Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle repräsentiert die Quelle, die [Server-sent events](/de/docs/Web/API/Server-sent_events) gesendet hat oder sendet.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis eines {{HTMLElement("input")}}-Elements überwacht, um den Status der "Senden"-Schaltfläche eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

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

Dieser Code verwendet die [`getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, um das DOM-Objekt darzustellen, das die {{HTMLElement("input")}}-Elemente repräsentiert, deren IDs `userName` und `sendButton` sind. Mit diesen können wir auf die Eigenschaften und Methoden zugreifen, die Informationen über diese Elemente bereitstellen und Kontrolle über sie gewähren.

Das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt für die "Senden"-Schaltfläche hat die Eigenschaft [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled), die auf `true` gesetzt ist, was die "Senden"-Schaltfläche deaktiviert, so dass sie nicht angeklickt werden kann. Darüber hinaus wird das Eingabefeld für den Benutzernamen durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, die es von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt, in den aktiven Fokus gerückt.

Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Handler für das `input`-Ereignis zur Benutzernameneingabe hinzuzufügen. Dieser Code prüft die Länge des aktuellen Wertes der Eingabe; wenn sie null ist, wird die "Senden"-Schaltfläche deaktiviert, falls sie nicht bereits deaktiviert ist. Andernfalls stellt der Code sicher, dass die Schaltfläche aktiviert ist.

Mit dieser Einrichtung wird die "Senden"-Schaltfläche immer dann aktiviert, wenn das Benutzernamenfeld einen Wert hat und deaktiviert, wenn es leer ist.

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

- [HTML-Elementreferenz](/de/docs/Web/HTML/Reference/Elements)
- [HTML-Attributreferenz](/de/docs/Web/HTML/Reference/Attributes)
- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model)-Referenz

### Leitfäden

- [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
