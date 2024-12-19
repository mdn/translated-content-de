---
title: The HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML DOM API** besteht aus den Schnittstellen, die die Funktionalität jedes {{Glossary("element", "Elements")}} in {{Glossary("HTML", "HTML")}} definieren, sowie jeglichen unterstützenden Typen und Schnittstellen, auf die sie angewiesen sind.

Die funktionalen Bereiche, die in der HTML DOM API enthalten sind, umfassen:

- Zugriff auf und Kontrolle von HTML-Elementen über das {{Glossary("DOM", "DOM")}}.
- Zugriff auf und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML {{HTMLElement("canvas")}}, um beispielsweise darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf den Browserverlauf.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), [Web Storage](/de/docs/Web/API/Web_Storage_API), [Web Workers](/de/docs/Web/API/Web_Workers_API), [WebSocket](/de/docs/Web/API/WebSockets_API) und [Server-sent events](/de/docs/Web/API/Server-sent_events).

## HTML DOM-Konzepte und Verwendung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML DOM, die das Arbeiten mit HTML-Elementen betreffen. Eine Diskussion über andere Bereiche, wie [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [WebSockets](/de/docs/Web/API/WebSockets_API), [Web Storage](/de/docs/Web/API/Web_Storage_API) usw., finden Sie in der Dokumentation zu diesen APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ({{Glossary("DOM", "DOM")}}) ist eine Architektur, die die Struktur eines [`Dokuments`](/de/docs/Web/API/Document) beschreibt; jedes Dokument wird durch eine Instanz der Schnittstelle [`Document`](/de/docs/Web/API/Document) dargestellt. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten**, wobei ein Knoten ein grundlegender Datensatz ist, der ein einzelnes Objekt im Dokument darstellt (wie ein Element oder einen Textknoten).

Knoten können streng organisatorisch sein, als Mittel zur Gruppierung anderer Knoten oder um einen Punkt zu schaffen, an dem eine Hierarchie konstruiert werden kann; andere Knoten können sichtbare Komponenten eines Dokuments darstellen. Jeder Knoten basiert auf der Schnittstelle [`Node`](/de/docs/Web/API/Node), die Eigenschaften zum Abrufen von Informationen über den Knoten sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten innerhalb des DOM bietet.

Knoten haben kein Konzept zum Einfügen des Inhalts, der tatsächlich im Dokument angezeigt wird. Sie sind leere Gefäße. Der grundlegende Begriff eines Knotens, der visuelle Inhalte darstellen kann, wird durch die Schnittstelle [`Element`](/de/docs/Web/API/Element) eingeführt. Eine `Element-` Objektinstanz stellt ein einzelnes Element in einem Dokument dar, das entweder mit HTML oder einem {{Glossary("XML", "XML")}}-Vokabular wie {{Glossary("SVG", "SVG")}} erstellt wurde.

Betrachten Sie zum Beispiel ein Dokument mit zwei Elementen, von denen eines zwei weitere Elemente enthält, die darin verschachtelt sind:

![Struktur eines Dokuments mit Elementen in einem Dokument in einem Fenster](dom-structure.svg)

Während die Schnittstelle [`Document`](/de/docs/Web/API/Document) als Teil der [DOM](/de/docs/Web/API/Document_Object_Model)-Spezifikation definiert ist, erweitert die HTML-Spezifikation sie erheblich, um Informationen hinzuzufügen, die speziell für die Verwendung des DOM im Kontext eines Webbrowsers und zur Darstellung von HTML-Dokumenten von Bedeutung sind.

Zu den Dingen, die durch den HTML-Standard zu `Document` hinzugefügt werden, gehören:

- Unterstützung beim Zugriff auf verschiedene Informationen, die von den {{Glossary("HTTP", "HTTP")}}-Headern beim Laden der Seite bereitgestellt werden, wie der [Standort](/de/docs/Web/API/Document/location), von dem das Dokument geladen wurde, [Cookies](/de/docs/Web/API/Document/cookie), [Änderungsdatum](/de/docs/Web/API/Document/lastModified), die verweisende Seite [Referrer](/de/docs/Web/API/Document/referrer) und so weiter.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}} Block und im [body](/de/docs/Web/API/Document/body) des Dokuments sowie Listen von [Bildern](/de/docs/Web/API/Document/images), [Links](/de/docs/Web/API/Document/links), [Skripten](/de/docs/Web/API/Document/scripts) usw., die im Dokument enthalten sind.
- Unterstützung der Interaktion mit dem Benutzer durch Untersuchung des [Fokus](/de/docs/Web/API/Document/hasFocus) und durch Ausführung von Befehlen auf [bearbeitbarem Inhalt](/de/docs/Web/HTML/Global_attributes/contenteditable).
- Ereignisbehandler für Dokumentereignisse, die durch den HTML-Standard definiert sind, um Zugang zu [Maus](/de/docs/Web/API/MouseEvent) und [Tastatur](/de/docs/Web/API/KeyboardEvent) Ereignissen, [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API), [Mediensteuerung](/de/docs/Web/API/HTMLMediaElement) und mehr zu ermöglichen.
- Ereignisbehandler für Ereignisse, die sowohl an Elemente als auch an Dokumente gesendet werden können; derzeit umfassen sie nur [Kopieren](/de/docs/Web/API/HTMLElement/copy_event), [Ausschneiden](/de/docs/Web/API/HTMLElement/cut_event) und [Einfügen](/de/docs/Web/API/HTMLElement/paste_event) Aktionen.

### HTML-Element-Schnittstellen

Die Schnittstelle `Element` wurde speziell angepasst, um HTML-Elemente durch die Einführung der Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) zu repräsentieren, von der alle spezifischeren HTML-Elementklassen erben. Dies erweitert die `Element`-Klasse, um HTML-spezifische allgemeine Funktionen zu den Elementknoten hinzuzufügen. Zu den durch `HTMLElement` hinzugefügten Eigenschaften gehören beispielsweise [`hidden`](/de/docs/Web/API/HTMLElement/hidden) und [`innerText`](/de/docs/Web/API/HTMLElement/innerText).

Ein {{Glossary("HTML", "HTML")}}-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, das durch die Schnittstelle [`HTMLElement`](/de/docs/Web/API/HTMLElement) dargestellt wird. Die `HTMLElement`-Klasse wiederum implementiert `Node`, so dass jedes Element auch ein Knoten ist (aber nicht umgekehrt). Auf diese Weise stehen die durch die Schnittstelle [`Node`](/de/docs/Web/API/Node) implementierten strukturellen Merkmale auch HTML-Elementen zur Verfügung, die es ihnen ermöglichen, ineinander verschachtelt, erstellt, gelöscht, verschoben usw. zu werden.

Die Schnittstelle `HTMLElement` ist jedoch generisch und bietet nur die für alle HTML-Elemente gemeinsamen Funktionen wie die ID des Elements, seine Koordinaten, das HTML, aus dem das Element besteht, Informationen über die Scrollposition usw.

Um die Funktionalität der Kernschnittstelle `HTMLElement` zu erweitern und die für ein bestimmtes Element benötigten Funktionen bereitzustellen, wird die `HTMLElement`-Klasse untergeordnet, um die benötigten Eigenschaften und Methoden hinzuzufügen. Beispielsweise wird das {{HTMLElement("canvas")}}-Element durch ein Objekt vom Typ [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) dargestellt. `HTMLCanvasElement` erweitert den `HTMLElement`-Typ, indem es Eigenschaften wie [`height`](/de/docs/Web/API/HTMLCanvasElement/height) und Methoden wie [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) hinzufügt, um Canvas-spezifische Funktionen bereitzustellen.

Die allgemeine Vererbung für HTML-Elementklassen sieht so aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Als solches erbt ein Element die Eigenschaften und Methoden all seiner Vorfahren. Betrachten Sie zum Beispiel ein {{HTMLElement("a")}}-Element, das im DOM durch ein Objekt des Typs [`HTMLAnchorElement`](/de/docs/Web/API/HTMLAnchorElement) dargestellt wird. Das Element enthält dann die ankerspezifischen Eigenschaften und Methoden, die in der Dokumentschnittstelle dieser Klasse beschrieben sind, aber auch diejenigen, die von [`HTMLElement`](/de/docs/Web/API/HTMLElement) und [`Element`](/de/docs/Web/API/Element), sowie von [`Node`](/de/docs/Web/API/Node) und schließlich von [`EventTarget`](/de/docs/Web/API/EventTarget) definiert sind.

Jede Ebene definiert einen entscheidenden Aspekt des Nutzens des Elements. Von `Node` erbt das Element Konzepte, die die Fähigkeit betreffen, dass das Element von einem anderen Element enthalten sein kann und selbst andere Elemente enthalten kann. Von besonderer Bedeutung ist das, was durch die Vererbung von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse wie Mausklicks, Abspielen- und Pause-Ereignisse usw. zu empfangen und zu verarbeiten.

Es gibt Elemente, die Gemeinsamkeiten teilen und daher einen zusätzlichen Zwischentyp haben. Beispielsweise präsentieren die Elemente {{HTMLElement("audio")}} und {{HTMLElement("video")}} beide audiovisuelle Medien. Die entsprechenden Typen, [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement) und [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement), basieren beide auf dem gemeinsamen Typ [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), der wiederum auf [`HTMLElement`](/de/docs/Web/API/HTMLElement) basiert und so weiter. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die gemeinsam für Audio- und Videoelemente sind.

Diese elementspezifischen Schnittstellen bilden den Großteil der HTML DOM API und stehen im Fokus dieses Artikels. Um mehr über die eigentliche Struktur des [DOM](/de/docs/Web/API/Document_Object_Model) zu erfahren, siehe [Einführung in das DOM](/de/docs/Web/API/Document_Object_Model/Introduction).

## Zielgruppe der HTML DOM API

Die von der HTML DOM bereitgestellten Funktionen gehören zu den am häufigsten verwendeten APIs im Werkzeugkasten eines Webentwicklers. Alle außer den einfachsten Webanwendungen werden einige Funktionen der HTML DOM verwenden.

## HTML DOM API-Schnittstellen

Der Großteil der Schnittstellen, die die HTML DOM API bilden, entspricht fast eins zu eins individuellen HTML-Elementen oder kleinen Gruppen von Elementen mit ähnlicher Funktionalität. Zusätzlich enthält die HTML DOM API einige Schnittstellen und Typen zur Unterstützung der HTML-Elementschnittstellen.

### HTML-Element-Schnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Sätze verwandter Elemente, die die gleichen Eigenschaften und Methoden haben).

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

### Webanwendungen und Browser-Integrationsschnittstellen

Diese Schnittstellen bieten Zugang zum Browserfenster und Dokument, das das HTML enthält, sowie zum Zustand des Browsers, verfügbaren Plugins (falls vorhanden) und verschiedenen Konfigurationsoptionen.

- [`BarProp`](/de/docs/Web/API/BarProp)
- [`Navigator`](/de/docs/Web/API/Navigator)
- [`Window`](/de/docs/Web/API/Window)

#### Veraltete Webanwendungen und Browser-Integrationsschnittstellen

- [`External`](/de/docs/Web/API/External) {{deprecated_inline}}

#### Obsolete Webanwendungen und Browser-Integrationsschnittstellen

- [`Plugin`](/de/docs/Web/API/Plugin) {{deprecated_inline}}
- [`PluginArray`](/de/docs/Web/API/PluginArray) {{deprecated_inline}}

### Formularunterstützung Schnittstellen

Diese Schnittstellen bieten die Struktur und Funktionalität, die von den Elementen benötigt werden, um Formulare zu erstellen und zu verwalten, einschließlich der Elemente {{HTMLElement("form")}} und {{HTMLElement("input")}}.

- [`FormDataEvent`](/de/docs/Web/API/FormDataEvent)
- [`HTMLFormControlsCollection`](/de/docs/Web/API/HTMLFormControlsCollection)
- [`HTMLOptionsCollection`](/de/docs/Web/API/HTMLOptionsCollection)
- [`RadioNodeList`](/de/docs/Web/API/RadioNodeList)
- [`ValidityState`](/de/docs/Web/API/ValidityState)

### Canvas- und Bildschnittstellen

Diese Schnittstellen repräsentieren Objekte, die von der Canvas API sowie dem {{HTMLElement("img")}} Element und {{HTMLElement("picture")}} Elementen verwendet werden.

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

Die Medienschnittstellen ermöglichen den HTML-Zugriff auf die Inhalte der Medienelemente: {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

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

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Elemente, Gruppen von gezogenen oder ziehbaren Elementen zu repräsentieren und den Zieh- und Ablegeprozess zu handhaben.

- [`DataTransfer`](/de/docs/Web/API/DataTransfer)
- [`DataTransferItem`](/de/docs/Web/API/DataTransferItem)
- [`DataTransferItemList`](/de/docs/Web/API/DataTransferItemList)
- [`DragEvent`](/de/docs/Web/API/DragEvent)

### Seitengeschichts-Schnittstellen

Die Schnittstellen der History API ermöglichen den Zugriff auf Informationen zur Verlaufshistorie des Browsers und das Verschieben der aktuellen Registerkarte des Browsers vorwärts und rückwärts durch diese Historie.

- [`BeforeUnloadEvent`](/de/docs/Web/API/BeforeUnloadEvent)
- [`HashChangeEvent`](/de/docs/Web/API/HashChangeEvent)
- [`History`](/de/docs/Web/API/History)
- [`Location`](/de/docs/Web/API/Location)
- [`PageRevealEvent`](/de/docs/Web/API/PageRevealEvent)
- [`PageSwapEvent`](/de/docs/Web/API/PageSwapEvent)
- [`PageTransitionEvent`](/de/docs/Web/API/PageTransitionEvent)
- [`PopStateEvent`](/de/docs/Web/API/PopStateEvent)

### Web Components Schnittstellen

Diese Schnittstellen werden von der [Web Components API](/de/docs/Web/API/Web_components) genutzt, um die verfügbaren [benutzerdefinierten Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu erstellen und zu verwalten.

- [`CustomElementRegistry`](/de/docs/Web/API/CustomElementRegistry)

### Verschiedene und unterstützende Schnittstellen

Diese unterstützenden Objekttypen werden auf vielfältige Weise in der HTML DOM API verwendet. Darüber hinaus repräsentiert [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent) das Ereignis, das geliefert wird, wenn ein {{Glossary("JavaScript", "JavaScript")}} {{jsxref("Promise")}} abgelehnt wird.

- [`DOMStringList`](/de/docs/Web/API/DOMStringList)
- [`DOMStringMap`](/de/docs/Web/API/DOMStringMap)
- [`ErrorEvent`](/de/docs/Web/API/ErrorEvent)
- [`HTMLAllCollection`](/de/docs/Web/API/HTMLAllCollection)
- [`MimeType`](/de/docs/Web/API/MimeType)
- [`MimeTypeArray`](/de/docs/Web/API/MimeTypeArray)
- [`PromiseRejectionEvent`](/de/docs/Web/API/PromiseRejectionEvent)

### Schnittstellen, die zu anderen APIs gehören

Einige Schnittstellen sind technisch in der HTML-Spezifikation definiert, gehören aber tatsächlich zu anderen APIs.

#### Webspeicher-Schnittstellen

Die [Web Storage API](/de/docs/Web/API/Web_Storage_API) bietet die Möglichkeit für Websites, Daten entweder vorübergehend oder dauerhaft auf dem Gerät des Benutzers zu speichern, um sie später wiederzuverwenden.

- [`Storage`](/de/docs/Web/API/Storage)
- [`StorageEvent`](/de/docs/Web/API/StorageEvent)

#### Web Workers Schnittstellen

Diese Schnittstellen werden von der [Web Workers API](/de/docs/Web/API/Web_Workers_API) verwendet, um sowohl die Fähigkeit für Worker zu schaffen, mit einer App und ihrem Inhalt zu interagieren, als auch um Nachrichten zwischen Fenstern oder Apps zu unterstützen.

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

Die [`EventSource`](/de/docs/Web/API/EventSource) Schnittstelle repräsentiert die Quelle, die [Server-sent events](/de/docs/Web/API/Server-sent_events) gesendet hat oder sendet.

- [`EventSource`](/de/docs/Web/API/EventSource)

## Beispiele

In diesem Beispiel wird das [`input`](/de/docs/Web/API/Element/input_event) Ereignis eines {{HTMLElement("input")}} Elements überwacht, um den Status des "Absenden"-Knopfs eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

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

Dieser Code verwendet die Methode [`getElementById()`](/de/docs/Web/API/Document/getElementById) der [`Document`](/de/docs/Web/API/Document) Schnittstelle, um das DOM-Objekt zu erhalten, das die {{HTMLElement("input")}}-Elemente mit den IDs `userName` und `sendButton` repräsentiert. Damit können wir auf die Eigenschaften und Methoden zugreifen, die Informationen über diese Elemente bereitstellen und deren Kontrolle ermöglichen.

Das [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Objekt für die [`disabled`](/de/docs/Web/API/HTMLInputElement/disabled) Eigenschaft des "Senden"-Knopfs wird auf `true` gesetzt, was den "Senden"-Knopf deaktiviert, sodass er nicht geklickt werden kann. Zusätzlich wird das Eingabefeld für den Benutzernamen durch Aufrufen der Methode [`focus()`](/de/docs/Web/API/HTMLElement/focus), die es von [`HTMLElement`](/de/docs/Web/API/HTMLElement) erbt, in den aktiven Fokus versetzt.

Dann wird [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen, um einen Handler für das `input`-Ereignis zur Benutzernamenseingabe hinzuzufügen. Dieser Code überprüft die Länge des aktuellen Werts der Eingabe; wenn sie null ist, wird der "Senden"-Knopf deaktiviert, falls nicht schon deaktiviert. Ansonsten stellt der Code sicher, dass der Knopf aktiviert ist.

Mit dieser Einstellung ist der "Senden"-Knopf immer aktiviert, wann immer das Eingabefeld für den Benutzernamen einen Wert hat, und deaktiviert, wenn es leer ist.

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

- [HTML-Elementreferenz](/de/docs/Web/HTML/Element)
- [HTML-Attributreferenz](/de/docs/Web/HTML/Attributes)
- [Document Object Model (DOM)](/de/docs/Web/API/Document_Object_Model) Referenz

### Leitfäden

- [Einführung in DOM-Scripting](/de/docs/Learn_web_development/Core/Scripting/DOM_scripting)
