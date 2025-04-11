---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML-DOM-API** besteht aus den Schnittstellen, die die Funktionalität jedes der {{Glossary("element", "Elemente")}} in {{Glossary("HTML", "HTML")}} definieren, sowie allen unterstützenden Typen und Schnittstellen, auf die sie angewiesen sind.

Die funktionalen Bereiche der HTML-DOM-API umfassen:

- Zugriff auf und Kontrolle von HTML-Elementen über das {{Glossary("DOM", "DOM")}}.
- Zugriff auf und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML-{{HTMLElement("canvas")}}, um beispielsweise darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf den Verlauf der Browsernavigation.
- Unterstützung und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [Server-sent events](/de/docs/Web/API/Server-sent_events).

## HTML-DOM-Konzepte und Verwendung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML-DOM, die das Arbeiten mit HTML-Elementen betreffen. Diskussionen über andere Bereiche, wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) usw., finden Sie in der Dokumentation zu diesen APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ({{Glossary("DOM", "DOM")}}) ist eine Architektur, die die Struktur eines [`Dokuments`](/de/docs/Web/API/Document) beschreibt; jedes Dokument wird durch eine Instanz der Schnittstelle [`Document`](/de/docs/Web/API/Document) dargestellt. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten**, wobei ein Knoten einen grundlegenden Datensatz darstellt, der ein einzelnes Objekt innerhalb des Dokuments repräsentiert (wie ein Element oder einen Textknoten).

Knoten können rein organisatorisch sein und eine Möglichkeit bieten, andere Knoten zu gruppieren oder einen Punkt zu bieten, an dem eine Hierarchie erstellt werden kann; andere Knoten können sichtbare Komponenten eines Dokuments darstellen. Jeder Knoten basiert auf der Schnittstelle [`Node`](/de/docs/Web/API/Node), die Eigenschaften zum Abrufen von Informationen über den Knoten sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten innerhalb des DOM bereitstellt.

Knoten haben kein Konzept von dem Inhalt, der tatsächlich im Dokument angezeigt wird. Sie sind leere Behälter. Die grundlegende Vorstellung eines Knotens, der visuelle Inhalte darstellen kann, wird durch die Schnittstelle [`Element`](/de/docs/Web/API/Element) eingeführt. Eine `Element`-Objektinstanz repräsentiert ein einzelnes Element in einem Dokument, das entweder mit HTML oder einer {{Glossary("XML", "XML")}}-Vokabular wie {{Glossary("SVG", "SVG")}} erstellt wurde.

Betrachten Sie beispielsweise ein Dokument mit zwei Elementen, von denen eines zwei weitere Elemente in sich verschachtelt hat:

![Struktur eines Dokuments mit Elementen innerhalb eines Dokuments in einem Fenster](dom-structure.svg)

Während die Schnittstelle [`Document`](/de/docs/Web/API/Document) als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert ist, erweitert die HTML-Spezifikation sie erheblich, um Informationen speziell für die Verwendung des DOM im Kontext eines Webbrowsers hinzuzufügen, sowie für die Verwendung zur Darstellung von HTML-Dokumenten.

Zu den von der HTML-Norm zu `Document` hinzugefügten Dingen gehören:

- Unterstützung für den Zugriff auf verschiedene Informationen, die von den {{Glossary("HTTP", "HTTP")}}-Headern bereitgestellt werden, wenn die Seite geladen wird, wie den [Standort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), [Änderungsdatum](/de/docs/Web/API/Document/lastModified), [verweisende Webseite](/de/docs/Web/API/Document/referrer) usw.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}}-Block und [body](/de/docs/Web/API/Document/body), sowie Listen der im Dokument enthaltenen [Bilder](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Scripts](/de/docs/Web/API/Document/scripts) usw.
- Unterstützung für die Interaktion mit dem Benutzer durch Untersuchung des [Fokus](/de/docs/Web/API/Document/hasFocus) und durch Ausführen von Befehlen auf [bearbeitbaren Inhalten](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Ereignis-Handler für Ereignisse, die im HTML-Standard für den Zugriff auf [Maus](/de/docs/Web/API/MouseEvent)- und [Tastatur](/de/docs/Web/API/KeyboardEvent)-Ereignisse, [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) und mehr definiert sind.
- Ereignis-Handler für Ereignisse, die sowohl an Elemente als auch an Dokumente geliefert werden können; hierzu gehören derzeit nur [Kopieren](/de/docs/Web/API/HTMLElement/copy_event), [Ausschneiden](/de/docs/Web/API/HTMLElement/cut_event) und [Einfügen](/de/docs/Web/API/HTMLElement/paste_event)-Aktionen.

### HTML-Element-Schnittstellen

Die `Element`-Schnittstelle wurde weiter angepasst, um speziell HTML-Elemente zu repräsentieren, indem die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) eingeführt wurde, von der alle spezifischeren HTML-Elementklassen erben. Dies erweitert die `Element`-Klasse, um HTML-spezifische Allgemeinmerkmale zu den Elementknoten hinzuzufügen. Zu den von `HTMLElement` hinzugefügten Eigenschaften gehören beispielsweise [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein {{Glossary("HTML", "HTML")}}-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, dargestellt durch die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement). Die `HTMLElement`-Klasse implementiert wiederum `Node`, sodass jedes Element auch ein Knoten ist (aber nicht umgekehrt). Auf diese Weise stehen die strukturellen Merkmale, die von der Schnittstelle [`Node`](/de/docs/Web/API/Node) implementiert werden, auch für HTML-Elemente zur Verfügung, sodass sie ineinander verschachtelt, erstellt und gelöscht, verschoben usw. werden können.

Die Schnittstelle `HTMLElement` ist jedoch generell und bietet nur die Funktionalität, die allen HTML-Elementen gemeinsam ist, wie die ID des Elements, seine Koordinaten, das HTML, das das Element ausmacht, Informationen über die Scrollposition und so weiter.

Um die Funktionalität der grundlegenden `HTMLElement`-Schnittstelle zu erweitern und die für ein bestimmtes Element benötigten Funktionen bereitzustellen, wird die `HTMLElement`-Klasse unterklassifiziert, um die benötigten Eigenschaften und Methoden hinzuzufügen. Zum Beispiel wird das {{HTMLElement("canvas")}}-Element durch ein Objekt vom Typ [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) repräsentiert. `HTMLCanvasElement` ergänzt den `HTMLElement`-Typ um Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), um canvas-spezifische Funktionen bereitzustellen.

Die allgemeine Vererbung für HTML-Elementklassen sieht folgendermaßen aus:

![Hierarchie von Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Auf diese Weise erbt ein Element die Eigenschaften und Methoden all seiner Vorfahren. Betrachten Sie beispielsweise ein {{HTMLElement("a")}}-Element, das im DOM durch ein Objekt vom Typ [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird. Das Element umfasst dann die anker-spezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind, sowie diejenigen, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Element`](/de/docs/Web/API/Element) definiert sind, sowie von [`Node`](/de/docs/Web/API/Node) und letztendlich [`EventTarget`](/de/docs/Web/API/EventTarget).

Jede Ebene definiert einen wesentlichen Aspekt des Nutzens des Elements. Von `Node` erbt das Element Konzepte rund um die Fähigkeit, von einem anderen Element enthalten zu sein und selbst andere Elemente zu enthalten. Von besonderer Bedeutung ist, was durch Vererbung von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse wie Mausklicks, Abspiel- und Pausevorgänge usw. zu empfangen und zu verarbeiten.

Es gibt Elemente, die Gemeinsamkeiten teilen und daher einen zusätzlichen Zwischentyp haben. Zum Beispiel präsentieren die {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente beide audiovisuelle Medien. Die entsprechenden Typen, [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), basieren beide auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), der wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) basiert usw. `HTMLMediaElement` definiert die zwischen Audio- und Videoelementen gemeinsamen Methoden und Eigenschaften.

Diese element-spezifischen Schnittstellen bilden den Großteil der HTML-DOM-API und stehen im Fokus dieses Artikels. Um mehr über die tatsächliche Struktur des [DOM](/de/docs/Web/API/Document_Object_Model) zu erfahren, siehe [Einführung in das DOM](/de/docs/Web/API/Document_Object_Model/Introduction).

## Zielgruppe der HTML-DOM

Die von der HTML-DOM bereitgestellten Funktionen gehören zu den am häufigsten verwendeten APIs im Werkzeugkasten eines Webentwicklers. Alle außer den einfachsten Webanwendungen nutzen einige Funktionen der HTML-DOM.

## Schnittstellen der HTML-DOM-API

Der Großteil der zur HTML-DOM-API gehörenden Schnittstellen entspricht nahezu eins zu eins einzelnen HTML-Elementen oder einer kleinen Gruppe von Elementen mit ähnlicher Funktionalität. Darüber hinaus enthält die HTML-DOM-API einige Schnittstellen und Typen zur Unterstützung der HTML-Element-Schnittstellen.

### HTML-Element-Schnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Gruppen verwandter Elemente, die dieselben Eigenschaften und Methoden mit ihnen verbunden haben).

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

Diese Schnittstellen bieten Zugriff auf das Browserfenster und das Dokument, das das HTML enthält, sowie auf den Zustand des Browsers, verfügbare Plugins (falls vorhanden) und verschiedene Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Veraltete Web-App- und Browser-Integrationsschnittstellen

- [`External`](/de/docs/Web/API/External) {{deprecated_inline}}

#### Obsolete Web-App- und Browser-Integrationsschnittstellen

- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Formulare-Unterstützungsschnittstellen

Diese Schnittstellen bieten die Struktur und Funktionalität, die für die Elemente erforderlich sind, die zur Erstellung und Verwaltung von Formularen verwendet werden, einschließlich der {{HTMLElement("form")}}- und {{HTMLElement("input")}}-Elemente.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Canvas- und Bildschnittstellen

Diese Schnittstellen repräsentieren Objekte, die von der Canvas-API sowie dem {{HTMLElement("img")}}-Element und den {{HTMLElement("picture")}}-Elementen verwendet werden.

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

Die Medien-Schnittstellen bieten HTML-Zugriff auf die Inhalte der Medienelemente: {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

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

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Objekte, Gruppen von gezogenen oder ziehbaren Objekten darzustellen und den Zieh-und-Ablegen-Prozess zu verwalten.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Seitenverlauf-Schnittstellen

Die History-API-Schnittstellen ermöglichen den Zugriff auf Informationen über den Verlauf des Browsers sowie das Vor- und Zurückverschieben des aktuellen Tabs im Browser durch diesen Verlauf.

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

Diese unterstützenden Objekttypen werden auf unterschiedliche Weise in der HTML-DOM-API verwendet. Darüber hinaus repräsentiert [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis, das ausgelöst wird, wenn ein {{Glossary("JavaScript", "JavaScript")}} {{jsxref("Promise")}} abgelehnt wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen, die zu anderen APIs gehören

Einige Schnittstellen sind technisch in der HTML-Spezifikation definiert, während sie eigentlich Teil anderer APIs sind.

#### Web Storage Schnittstellen

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) ermöglicht es Websites, Daten entweder vorübergehend oder dauerhaft auf dem Gerät des Benutzers für eine spätere Wiederverwendung zu speichern.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Web Workers Schnittstellen

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) verwendet, um sowohl die Fähigkeit der Worker zur Interaktion mit einer App und ihren Inhalten zu etablieren, als auch um die Nachrichtenübermittlung zwischen Fenstern oder Apps zu unterstützen.

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

Diese Schnittstellen, definiert durch die HTML-Spezifikation, werden von der [WebSockets API](/de/docs/Web/API/WebSockets_API) verwendet.

- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
- [`WebSocket`](/de/docs/Web/API/WebSocket)

#### Server-sent events Schnittstellen

Die Schnittstelle [`EventSource`](/de/docs/Web/API/EventSource) repräsentiert die Quelle, die [servergesendete Ereignisse](/de/docs/Web/API/Server-sent_events) sendet oder gesendet hat.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis eines {{HTMLElement("input")}}-Elements überwacht, um den Status des "Abschicken"-Buttons eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

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

Dieser Code verwendet die [`Document`](/de/docs/Web/API/Document)-Schnittstelle und deren [`getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode, um das DOM-Objekt darzustellen, das die {{HTMLElement("input")}}-Elemente mit den IDs `userName` und `sendButton` repräsentiert. Mit diesen können wir auf die Eigenschaften und Methoden zugreifen, die Informationen über diese Elemente bereitstellen und die Kontrolle über diese Elemente ermöglichen.

Das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt für die [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)-Eigenschaft des "Senden"-Buttons wird auf `true` gesetzt, wodurch der "Senden"-Button deaktiviert wird, sodass er nicht angeklickt werden kann. Zusätzlich wird das Eingabefeld für den Benutzernamen durch Aufrufen der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, die es von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt, zum aktiven Fokus gemacht.

Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Handler für das `input`-Ereignis zur Benutzernamen-Eingabe hinzuzufügen. Dieser Code überprüft die Länge des aktuellen Wertes der Eingabe; wenn er null ist, wird der "Senden"-Button deaktiviert, falls er nicht bereits deaktiviert ist. Andernfalls stellt der Code sicher, dass der Button aktiviert ist.

Mit diesem Vorgehen wird der "Senden"-Button immer aktiviert, wenn das Eingabefeld für den Benutzernamen einen Wert hat, und deaktiviert, wenn es leer ist.

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
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Reference/Attributes)
- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) Referenz

### Leitfäden

- [Einführung in das DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
