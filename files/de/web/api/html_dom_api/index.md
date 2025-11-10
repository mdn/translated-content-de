---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML-DOM-API** besteht aus den Schnittstellen, die die Funktionalität jedes einzelnen {{Glossary("element", "Elemente")}} in {{Glossary("HTML", "HTML")}} definieren, sowie aus unterstützenden Typen und Schnittstellen, auf die sie angewiesen sind.

Die funktionalen Bereiche, die in der HTML-DOM-API enthalten sind, umfassen:

- Zugriff und Steuerung von HTML-Elementen über das {{Glossary("DOM", "DOM")}}.
- Zugriff und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML-{{HTMLElement("canvas")}}, beispielsweise um darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf die Browser-Navigation.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [Server-sent events](/de/docs/Web/API/Server-sent_events).

## HTML-DOM-Konzepte und Nutzung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML-DOMs, die das Arbeiten mit HTML-Elementen beinhalten. Diskussionen über andere Bereiche, wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API), [Web Storage](/de/docs/Web/API/Web_Storage_API), etc. finden sich in der Dokumentation zu diesen APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ({{Glossary("DOM", "DOM")}}) ist eine Architektur, die die Struktur eines [`document`](/de/docs/Web/API/Document) beschreibt; jedes Dokument wird durch eine Instanz der [`Document`](/de/docs/Web/API/Document)-Schnittstelle repräsentiert. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten** (nodes), wobei ein Knoten einen grundlegenden Datensatz darstellt, der ein einzelnes Objekt innerhalb des Dokuments (z. B. ein Element oder Textknoten) repräsentiert.

Knoten können rein organisatorisch sein und eine Möglichkeit bieten, andere Knoten zusammenzufassen oder einen Punkt zu bieten, an dem eine Hierarchie aufgebaut werden kann; andere Knoten können sichtbare Komponenten eines Dokuments repräsentieren. Jeder Knoten basiert auf der [`Node`](/de/docs/Web/API/Node)-Schnittstelle, die Eigenschaften zum Abrufen von Informationen über den Knoten sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten innerhalb des DOM bietet.

Knoten haben kein Konzept des tatsächlichen Inhalts, der im Dokument angezeigt wird. Sie sind leere Gefäße. Der grundlegende Begriff eines Knotens, der visuelle Inhalte darstellen kann, wird durch die [`Element`](/de/docs/Web/API/Element)-Schnittstelle eingeführt. Eine `Element`-Objektinstanz repräsentiert ein einzelnes Element in einem Dokument, das entweder mit HTML oder einer {{Glossary("XML", "XML")}}-Vokabular wie {{Glossary("SVG", "SVG")}} erstellt wurde.

Betrachten Sie zum Beispiel ein Dokument mit zwei Elementen, von denen eines zwei weitere Elemente enthält:

![Struktur eines Dokuments mit Elementen innerhalb eines Dokuments in einem Fenster](dom-structure.svg)

Während die [`Document`](/de/docs/Web/API/Document)-Schnittstelle als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert ist, wird sie durch die HTML-Spezifikation erheblich verbessert, um Informationen hinzuzufügen, die spezifisch für die Verwendung des DOM im Kontext eines Webbrowsers und für die spezifische Repräsentation von HTML-Dokumenten sind.

Zu den Dingen, die vom HTML-Standard zu `Document` hinzugefügt wurden, gehören:

- Unterstützung für den Zugriff auf verschiedene Informationen, die von den {{Glossary("HTTP", "HTTP")}}-Headern beim Laden der Seite bereitgestellt werden, wie z. B. der [Ort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), [Änderungsdatum](/de/docs/Web/API/Document/lastModified), [Referenzseite](/de/docs/Web/API/Document/referrer) usw.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}}-Block des Dokuments und [body](/de/docs/Web/API/Document/body), sowie auf Listen der im Dokument enthaltenen [Bilder](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Skripte](/de/docs/Web/API/Document/scripts), etc.
- Unterstützung für die Interaktion mit dem Benutzer durch Prüfung des [Fokus](/de/docs/Web/API/Document/hasFocus) und durch Ausführen von Befehlen auf [bearbeitbare Inhalte](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Ereignishandler für Dokumentereignisse, die durch den HTML-Standard definiert wurden, um den Zugriff auf [Maus](/de/docs/Web/API/MouseEvent)- und [Tastatur](/de/docs/Web/API/KeyboardEvent)-Ereignisse, [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) usw. zu ermöglichen.
- Ereignishandler für Ereignisse, die sowohl an Elemente als auch an Dokumente geliefert werden können; diese umfassen derzeit nur [„copy“](/de/docs/Web/API/Element/copy_event), [„cut“](/de/docs/Web/API/Element/cut_event) und [„paste“](/de/docs/Web/API/Element/paste_event)-Aktionen.

### HTML-Element-Schnittstellen

Die `Element`-Schnittstelle wurde speziell weiterentwickelt, um HTML-Elemente zu repräsentieren, indem die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle eingeführt wurde, von der alle spezifischeren HTML-Elementklassen erben. Dies erweitert die `Element`-Klasse, um HTML-spezifische allgemeine Funktionen zu den Elementknoten hinzuzufügen. Von `HTMLElement` hinzugefügte Eigenschaften umfassen beispielsweise [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein {{Glossary("HTML", "HTML")}}-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, repräsentiert durch die [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle. Die `HTMLElement`-Klasse implementiert wiederum `Node`, sodass jedes Element auch ein Knoten ist (aber nicht umgekehrt). Auf diese Weise sind die strukturellen Merkmale, die von der [`Node`](/de/docs/Web/API/Node)-Schnittstelle implementiert werden, auch für HTML-Elemente verfügbar, wodurch sie innerhalb voneinander verschachtelt, erstellt und gelöscht, verschoben usw. werden können.

Die `HTMLElement`-Schnittstelle ist jedoch generisch und bietet nur die Funktionalität, die allen HTML-Elementen gemeinsam ist, wie die ID des Elements, seine Koordinaten, der HTML-Code, aus dem das Element besteht, Informationen über die Scroll-Position und so weiter.

Um die Funktionalität der Kern-`HTMLElement`-Schnittstelle zu erweitern und die Funktionen bereitzustellen, die ein spezifisches Element benötigt, wird die `HTMLElement`-Klasse unterklassifiziert, um die benötigten Eigenschaften und Methoden hinzuzufügen. Zum Beispiel wird das {{HTMLElement("canvas")}}-Element durch ein Objekt vom Typ [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) repräsentiert. `HTMLCanvasElement` ergänzt den `HTMLElement`-Typ, indem es Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzufügt, um canvas-spezifische Funktionen bereitzustellen.

Die gesamte Vererbung für HTML-Elementklassen sieht folgendermaßen aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Ein Element erbt somit die Eigenschaften und Methoden aller seiner Vorfahren. Zum Beispiel betrachten wir ein {{HTMLElement("a")}}-Element, das im DOM durch ein Objekt vom Typ [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) repräsentiert wird. Das Element umfasst dann die ankerspezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind, aber auch die, die durch [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Element`](/de/docs/Web/API/Element) sowie von [`Node`](/de/docs/Web/API/Node) und schließlich von [`EventTarget`](/de/docs/Web/API/EventTarget) definiert sind.

Jede Ebene definiert einen Schlüsselaspekt der Nützlichkeit des Elements. Von `Node` erbt das Element Konzepte, die die Fähigkeit betreffen, das Element in ein anderes Element einzufügen, und selbst andere Elemente zu enthalten. Von besonderer Bedeutung ist, was durch das Erben von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse wie Mausklicks, Wiedergabe- und Pausen-Ereignisse usw. zu empfangen und zu verarbeiten.

Es gibt Elemente, die Gemeinsamkeiten aufweisen und daher einen zusätzlichen Zwischen-Typ haben. Zum Beispiel präsentieren die {{HTMLElement("audio")}} und {{HTMLElement("video")}}-Elemente beide audiovisuelle Medien. Die entsprechenden Typen, [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), basieren beide auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), der wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) basiert usw. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die Audio- und Videoelemente gemeinsam haben.

Diese elementspezifischen Schnittstellen umfassen den Großteil der HTML-DOM-API und sind der Fokus dieses Artikels. Der [DOM](/de/docs/Web/API/Document_Object_Model)-Artikel bietet eine allgemeine Einführung in das DOM und seine Konzepte.

## Zielgruppe der HTML-DOM

Die von der HTML-DOM bereitgestellten Funktionen gehören zu den am häufigsten verwendeten APIs im Werkzeugkasten eines Webentwicklers.
Alle außer den einfachsten Webanwendungen verwenden einige Funktionen der HTML-DOM.

## Schnittstellen der HTML-DOM-API

Die meisten der Schnittstellen, die die HTML-DOM-API bilden, korrelieren fast eins zu eins mit individuellen HTML-Elementen oder zu einer kleinen Gruppe von Elementen mit ähnlicher Funktionalität. Außerdem umfasst die HTML-DOM-API einige Schnittstellen und Typen zur Unterstützung der HTML-Element-Schnittstellen.

### HTML-Element-Schnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Gruppen verwandter Elemente, die die gleichen Eigenschaften und Methoden haben).

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

#### Obsolete Schnittstellen für HTML-Elemente

- [`HTMLFontElement`](/de/docs/Web/API/HTMLFontElement) {{deprecated_inline}}
- [`HTMLFrameElement`](/de/docs/Web/API/HTMLFrameElement) {{deprecated_inline}}
- [`HTMLFrameSetElement`](/de/docs/Web/API/HTMLFrameSetElement) {{deprecated_inline}}

### Schnittstellen zur Webanwendungs- und Browserintegration

Diese Schnittstellen bieten Zugriff auf das Browserfenster und das Dokument, das das HTML enthält, sowie auf den Zustand des Browsers und verfügbare Plugins (falls vorhanden) und verschiedene Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Veraltete Schnittstellen zur Webanwendungs- und Browserintegration

- [`External`](/de/docs/Web/API/External) {{deprecated_inline}}

#### Obsolete Schnittstellen zur Webanwendungs- und Browserintegration

- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Formunterstützung-Schnittstellen

Diese Schnittstellen bieten Struktur und Funktionalität für die Elemente, die zur Erstellung und Verwaltung von Formularen verwendet werden, einschließlich der {{HTMLElement("form")}}- und {{HTMLElement("input")}}-Elemente.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Canvas- und Image-Schnittstellen

Diese Schnittstellen repräsentieren Objekte, die durch die Canvas-API verwendet werden, sowie das {{HTMLElement("img")}}-Element und {{HTMLElement("picture")}}-Elemente.

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

### Drag- und Drop-Schnittstellen

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Elemente, Gruppen von gezogenen oder ziehbaren Elementen zu repräsentieren und um den Zieh- und Ablegeverfahren zu handhaben.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Seitenhistorie-Schnittstellen

Die Schnittestellen der History API bieten die Möglichkeit, Informationen über die Browserhistorie zuzugreifen und die aktuelle Registerkarte des Browsers vorwärts und rückwärts durch diese Historie zu bewegen.

- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)
- [`History`](/de/docs/Web/API/History)
- [`Location`](/de/docs/Web/API/Location)
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)

### Web Components-Schnittstellen

Diese Schnittstellen werden von der [Web Components API](/de/docs/Web/API/Web_components) verwendet, um verfügbare [benutzerdefinierte Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu erstellen und zu verwalten.

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)

### Verschiedene und unterstützende Schnittstellen

Diese unterstützenden Objekttypen werden auf verschiedene Weise in der HTML-DOM-API verwendet. Zusätzlich repräsentiert [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis, das ausgeliefert wird, wenn ein {{Glossary("JavaScript", "JavaScript")}} {{jsxref("Promise")}} abgelehnt wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen, die anderen APIs angehören

Mehrere Schnittstellen werden technisch gesehen in der HTML-Spezifikation definiert, während sie tatsächlich Teil anderer APIs sind.

#### Web Storage-Schnittstellen

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet die Möglichkeit für Websites, Daten entweder vorübergehend oder dauerhaft auf dem Gerät des Benutzers zu speichern, um sie später erneut zu verwenden.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Web Workers-Schnittstellen

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) verwendet, um sowohl die Fähigkeit zu schaffen, dass Worker mit einer App und ihrem Inhalt interagieren können, als auch um Nachrichten zwischen Fenstern oder Apps zu unterstützen.

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

#### Server-sent events Schnittstellen

Die [`EventSource`](/de/docs/Web/API/EventSource)-Schnittstelle stellt die Quelle dar, welche [server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events) gesendet hat oder sendet.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das [`input`](/de/docs/Web/API/Element/input_event)-Ereignis eines {{HTMLElement("input")}}-Elements überwacht, um den Status der "Submit"-Schaltfläche eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

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

Dieser Code verwendet die [`getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode der [`Document`](/de/docs/Web/API/Document)-Schnittstelle, um das DOM-Objekt zu erhalten, das die {{HTMLElement("input")}}-Elemente repräsentiert, deren IDs `userName` und `sendButton` sind. Damit können Sie auf die Eigenschaften und Methoden zugreifen, die Informationen bereitstellen und die Kontrolle über diese Elemente gewähren.

Das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Objekt für die "Senden"-Schaltfläche hat die [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled)-Eigenschaft auf `true` gesetzt, was die "Senden"-Schaltfläche deaktiviert, sodass sie nicht angeklickt werden kann. Außerdem wird das Benutzernamen-Eingabefeld durch Aufruf der [`focus()`](/de/docs/Web/API/HTMLElement/focus)-Methode, die sie von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt, als aktiver Fokus gesetzt.

Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Handler für das `input`-Ereignis zum Benutzernamen-Eingabefeld hinzuzufügen. Dieser Code betrachtet die Länge des aktuellen Werts der Eingabe; wenn diese null ist, wird die "Senden"-Schaltfläche deaktiviert, falls sie nicht bereits deaktiviert ist. Andernfalls stellt der Code sicher, dass die Schaltfläche aktiviert ist.

Mit dieser Einrichtung ist die "Senden"-Schaltfläche immer aktiviert, wenn das Benutzernamen-Eingabefeld einen Wert hat, und deaktiviert, wenn es leer ist.

### HTML

Der HTML-Code für das Formular sieht folgendermaßen aus:

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

- [HTML-Element-Referenz](/de/docs/Web/HTML/Reference/Elements)
- [HTML-Attribut-Referenz](/de/docs/Web/HTML/Reference/Attributes)
- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) Referenz

### Leitfäden

- [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
