---
title: HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: 6686b4c94c8cf3eb188d0e549634cd581f0b8237
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML-DOM-API** besteht aus den Schnittstellen, die die Funktionalität jedes {{Glossary("element", "Elements")}} in {{Glossary("HTML", "HTML")}} definieren, sowie aus unterstützenden Typen und Schnittstellen, auf die sie angewiesen sind.

Die Funktionsbereiche, die in der HTML-DOM-API enthalten sind, umfassen:

- Zugriff auf und Steuerung von HTML-Elementen über das {{Glossary("DOM", "DOM")}}.
- Zugriff auf und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML-{{HTMLElement("canvas")}}, zum Beispiel, um darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf den Browser-Navigation-Verlauf.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [Server-sent Events](/de/docs/Web/API/Server-sent_events).

## HTML-DOM-Konzepte und -Verwendung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML-DOM, die die Interaktion mit HTML-Elementen beinhalten. Diskussionen über andere Bereiche, wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API), [Web Storage](/de/docs/Web/API/Web_Storage_API), etc. finden Sie in der Dokumentation zu diesen APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ({{Glossary("DOM", "DOM")}}) ist eine Architektur, die die Struktur eines [`Dokuments`](/de/docs/Web/API/Document) beschreibt; jedes Dokument wird durch eine Instanz der Schnittstelle [`Document`](/de/docs/Web/API/Document) dargestellt. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Nodes**, wobei ein Node einen grundlegenden Eintrag darstellt, der ein einzelnes Objekt im Dokument repräsentiert (wie ein Element oder einen Textknoten).

Nodes können rein organisatorisch sein und eine Möglichkeit bieten, andere Nodes zu gruppieren oder einen Punkt zu schaffen, an dem eine Hierarchie erstellt werden kann; andere Nodes können sichtbare Komponenten eines Dokuments repräsentieren. Jeder Node basiert auf der [`Node`](/de/docs/Web/API/Node)-Schnittstelle, die Eigenschaften zum Abrufen von Informationen über den Node sowie Methoden zum Erstellen, Löschen und Organisieren von Nodes innerhalb des DOM bereitstellt.

Nodes haben kein Konzept, den tatsächlich im Dokument angezeigten Inhalt einzuschließen. Sie sind leere Gefäße. Die grundlegende Vorstellung eines Knoten, der visuellen Inhalt darstellen kann, wird durch die [`Element`](/de/docs/Web/API/Element)-Schnittstelle eingeführt. Eine Instanz von `Element` repräsentiert ein einzelnes Element in einem Dokument, das entweder mit HTML oder einem {{Glossary("XML", "XML")}}-Vokabular wie {{Glossary("SVG", "SVG")}} erstellt wurde.

Betrachten Sie zum Beispiel ein Dokument mit zwei Elementen, von denen eines zwei weitere Elemente in sich geschachtelt hat:

![Struktur eines Dokuments mit Elementen innerhalb eines Dokuments in einem Fenster](dom-structure.svg)

Während die [`Document`](/de/docs/Web/API/Document)-Schnittstelle als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert ist, verbessert die HTML-Spezifikation sie erheblich, um Informationen hinzuzufügen, die speziell für die Verwendung des DOM im Kontext eines Webbrowsers sowie zur Darstellung von HTML-Dokumenten relevant sind.

Zu den Dingen, die durch den HTML-Standard zu `Document` hinzugefügt werden, gehören:

- Unterstützung für den Zugriff auf verschiedene Informationen, die von den {{Glossary("HTTP", "HTTP")}}-Headern bereitgestellt werden, wenn die Seite geladen wird, wie z.B. der [Standort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), [Änderungsdatum](/de/docs/Web/API/Document/lastModified), [verweisende Seite](/de/docs/Web/API/Document/referrer) usw.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}}-Block und im [body](/de/docs/Web/API/Document/body) des Dokuments, sowie Listen der im Dokument enthaltenen [Bilder](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Skripte](/de/docs/Web/API/Document/scripts) usw.
- Unterstützung bei der Interaktion mit dem Benutzer durch die Untersuchung des [Fokus](/de/docs/Web/API/Document/hasFocus) und durch Ausführen von Befehlen für [bearbeitbare Inhalte](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Ereignis-Handler für Dokumentereignisse, die vom HTML-Standard definiert sind, um Zugriff auf [Maus](/de/docs/Web/API/MouseEvent)- und [Tastatur](/de/docs/Web/API/KeyboardEvent)-Ereignisse, [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) und mehr zu ermöglichen.
- Ereignis-Handler für Ereignisse, die sowohl an Elemente als auch an Dokumente geliefert werden können; diese umfassen derzeit nur die Aktionen [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event) und [`paste`](/de/docs/Web/API/Element/paste_event).

### HTML-Element-Schnittstellen

Die `Element`-Schnittstelle wurde weiter angepasst, um HTML-Elemente speziell darzustellen, indem die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle eingeführt wurde, die von allen spezifischeren HTML-Elementklassen geerbt wird. Dies erweitert die `Element`-Klasse, um HTML-spezifische allgemeine Features zu den Elementknoten hinzuzufügen. Zu den von `HTMLElement` hinzugefügten Eigenschaften gehören beispielsweise [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein {{Glossary("HTML", "HTML")}}-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, das durch die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle dargestellt wird. Die `HTMLElement`-Klasse implementiert wiederum `Node`, sodass jedes Element auch ein Node ist (aber nicht umgekehrt). Auf diese Weise stehen die strukturellen Features, die von der [`Node`](/de/docs/Web/API/Node)-Schnittstelle implementiert werden, auch HTML-Elementen zur Verfügung, sodass sie ineinander verschachtelt, erstellt und gelöscht, verschoben und so weiter werden können.

Die `HTMLElement`-Schnittstelle ist jedoch allgemein und bietet nur die Funktionalität, die allen HTML-Elementen gemeinsam ist, wie die ID des Elements, seine Koordinaten, das HTML, das das Element bildet, Informationen über die Scrollposition und so weiter.

Um die Funktionalität der Kernschnittstelle `HTMLElement` zu erweitern und die für ein spezifisches Element benötigten Features bereitzustellen, wird die `HTMLElement`-Klasse erweitert, um die erforderlichen Eigenschaften und Methoden hinzuzufügen. Zum Beispiel wird das {{HTMLElement("canvas")}}-Element durch ein Objekt vom Typ [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) repräsentiert. `HTMLCanvasElement` ergänzt den `HTMLElement`-Typ, indem es Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzufügt, um Canvas-spezifische Features bereitzustellen.

Die allgemeine Vererbung für HTML-Elementklassen sieht so aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Auf diese Weise erbt ein Element die Eigenschaften und Methoden aller seiner Vorfahren. Betrachten Sie zum Beispiel ein {{HTMLElement("a")}}-Element, das im DOM durch ein Objekt des Typs [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) dargestellt wird. Das Element umfasst dann die ankerspezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind, sowie die, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Element`](/de/docs/Web/API/Element) definiert sind, sowie von [`Node`](/de/docs/Web/API/Node) und schließlich [`EventTarget`](/de/docs/Web/API/EventTarget).

Jede Ebene definiert einen Schlüsselaspekt der Nützlichkeit des Elements. Von `Node` erbt das Element Konzepte, die die Fähigkeit betreffen, dass das Element von einem anderen Element enthalten und selber andere Elemente enthalten kann. Besonders wichtig ist das, was durch das Erben von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse wie Mausklicks, Abspiel- und Pause-Ereignisse und so weiter zu empfangen und zu behandeln.

Es gibt Elemente, die Gemeinsamkeiten teilen und daher einen zusätzlichen Zwischentyp haben. Zum Beispiel stellen die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente beide audiovisuelle Medien dar. Die entsprechenden Typen, [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), basieren beide auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), der wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) basiert und so weiter. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die zwischen Audio- und Videoelementen gemeinsam sind.

Diese elementspezifischen Schnittstellen bilden den Großteil der HTML-DOM-API und stehen im Mittelpunkt dieses Artikels. Der Artikel über das [DOM](/de/docs/Web/API/Document_Object_Model) bietet eine allgemeine Einführung in das DOM und seine Konzepte.

## Zielgruppe der HTML-DOM

Die von der HTML-DOM offengelegten Funktionen gehören zu den am häufigsten genutzten APIs im Werkzeugkasten eines Webentwicklers. Alle, bis auf die einfachsten Webanwendungen, werden einige der HTML-DOM-Funktionen nutzen.

## HTML-DOM-API-Schnittstellen

Die Mehrheit der Schnittstellen, die die HTML-DOM-API ausmachen, stimmen fast eins zu eins mit einzelnen HTML-Elementen oder einer kleinen Gruppe von Elementen mit ähnlicher Funktionalität überein. Zusätzlich umfasst die HTML-DOM-API einige Schnittstellen und Typen zur Unterstützung der HTML-Element-Schnittstellen.

### HTML-Element-Schnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Sätze verwandter Elemente, die die gleichen Eigenschaften und Methoden teilen).

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

Diese Schnittstellen bieten Zugriff auf das Browserfenster und das Dokument, das das HTML enthält, sowie auf den Status des Browsers, verfügbare Plugins (falls vorhanden) und verschiedene Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Obsolete Web-App- und Browser-Integrationsschnittstellen

- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Formularunterstützungs-Schnittstellen

Diese Schnittstellen stellen die Struktur und Funktionalität bereit, die von den Elementen benötigt wird, um Formulare zu erstellen und zu verwalten, einschließlich der {{HTMLElement("form")}}- und {{HTMLElement("input")}}-Elemente.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Canvas- und Bild-Schnittstellen

Diese Schnittstellen repräsentieren Objekte, die von der Canvas-API sowie vom {{HTMLElement("img")}}-Element und {{HTMLElement("picture")}}-Elementen verwendet werden.

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

### Drag and Drop Schnittstellen

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Objekte, Gruppen von gezogenen oder ziehbaren Objekten zu repräsentieren und um den Drag and Drop-Prozess zu handhaben.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Seitenverlauf-Schnittstellen

Die Schnittstellen der History API ermöglichen den Zugriff auf Informationen über den Verlauf des Browsers sowie das Vorwärts- und Rückwärtsnavigieren des aktuellen Tabs im Verlauf.

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

### Sonstige und unterstützende Schnittstellen

Diese unterstützenden Objekttypen werden in verschiedenen Weisen in der HTML-DOM-API verwendet. Zusätzlich repräsentiert [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis, das ausgeliefert wird, wenn ein {{Glossary("JavaScript", "JavaScript")}} {{jsxref("Promise")}} abgelehnt wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen von anderen APIs

Mehrere Schnittstellen sind technisch in der HTML-Spezifikation definiert, während sie tatsächlich Teil anderer APIs sind.

#### Web Storage Schnittstellen

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet die Möglichkeit für Websites, Daten entweder temporär oder dauerhaft auf dem Gerät des Benutzers für eine spätere Wiederverwendung zu speichern.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Web Workers Schnittstellen

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) sowohl verwendet, um die Fähigkeit zu schaffen, dass Arbeiter mit einer App und ihren Inhalten interagieren können, als auch um die Nachrichtenübermittlung zwischen Fenstern oder Apps zu unterstützen.

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

Diese Schnittstellen, die von der HTML-Spezifikation definiert sind, werden von der [WebSockets API](/de/docs/Web/API/WebSockets_API) verwendet.

- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
- [`WebSocket`](/de/docs/Web/API/WebSocket)

#### Server-sent Events Schnittstellen

Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle repräsentiert die Quelle, die [Server-sent Events](/de/docs/Web/API/Server-sent_events) gesendet hat oder sendet.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis eines {{HTMLElement("input")}}-Elements überwacht, um den Zustand der "Senden"-Schaltfläche eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

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

Dieser Code verwendet die [`Document`](/de/docs/Web/API/Document)-Schnittstelle's [`getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode, um das DOM-Objekt zu erhalten, das die {{HTMLElement("input")}}-Elemente repräsentiert, deren IDs `userName` und `sendButton` sind. Mit diesen können wir auf die Eigenschaften und Methoden zugreifen, die Informationen über diese Elemente bereitstellen und Kontrolle über sie gewähren.

Das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt für die "Senden"-Schaltfläche besitzt die [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)-Eigenschaft, die auf `true` gesetzt wird, was die "Senden"-Schaltfläche deaktiviert, so dass sie nicht angeklickt werden kann. Darüber hinaus wird das Benutzername-Eingabefeld durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, die es von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt, in den aktiven Fokus genommen.

Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Handler für das `input`-Ereignis zur Benutzernamen-Eingabe hinzuzufügen. Dieser Code überprüft die Länge des aktuellen Werts der Eingabe; wenn sie null ist, wird die "Senden" Schaltfläche deaktiviert, falls sie noch nicht deaktiviert ist. Andernfalls stellt der Code sicher, dass die Schaltfläche aktiviert ist.

Mit diesem Mechanismus im Platz wird die "Senden" Schaltfläche immer aktiviert, wann immer das Benutzername-Eingabefeld einen Wert hat, und deaktiviert, wenn es leer ist.

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

- [HTML-Elemente-Referenz](/de/docs/Web/HTML/Reference/Elements)
- [HTML-Attribute-Referenz](/de/docs/Web/HTML/Reference/Attributes)
- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model)-Referenz

### Leitfäden

- [DOM-Scripting Einleitung](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
