---
title: Die HTML DOM API
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: d527f91adab970844abf4c32092c123b55b85188
---

{{DefaultAPISidebar("HTML DOM")}}

Die **HTML DOM API** setzt sich aus den Schnittstellen zusammen, die die Funktionalität der {{Glossary("element", "Elemente")}} in {{Glossary("HTML")}} sowie unterstützende Typen und Schnittstellen, auf die sie sich stützen, definieren.

Die Funktionsbereiche, die in der HTML DOM API enthalten sind, umfassen:

- Zugriff und Kontrolle von HTML-Elementen über das {{Glossary("DOM")}}.
- Zugriff und Manipulation von Formulardaten.
- Interaktion mit den Inhalten von 2D-Bildern und dem Kontext eines HTML {{HTMLElement("canvas")}}, zum Beispiel um darauf zu zeichnen.
- Verwaltung von Medien, die mit den HTML-Medienelementen ({{HTMLElement("audio")}} und {{HTMLElement("video")}}) verbunden sind.
- Ziehen und Ablegen von Inhalten auf Webseiten.
- Zugriff auf den Verlauf der Browser-Navigation.
- Unterstützende und verbindende Schnittstellen für andere APIs wie [Web Components](/de/docs/Web/API/Web_components), {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}, {{DOMxRef("Web_Workers_API", "Web Workers", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSocket", "", "1")}} und {{DOMxRef("Server-sent_events", "Server-sent events", "", "1")}}.

## HTML DOM Konzepte und Nutzung

In diesem Artikel konzentrieren wir uns auf die Teile des HTML DOM, die mit HTML-Elementen interagieren. Diskussionen über andere Bereiche wie {{DOMxRef("HTML_Drag_and_Drop_API", "Drag and Drop", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSockets", "", "1")}}, {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}} usw. finden Sie in der Dokumentation zu diesen APIs.

### Struktur eines HTML-Dokuments

Das Document Object Model ({{Glossary("DOM")}}) ist eine Architektur, die die Struktur eines {{domxref("document")}} beschreibt; jedes Dokument wird durch eine Instanz der Schnittstelle {{domxref("Document")}} dargestellt. Ein Dokument besteht wiederum aus einem hierarchischen Baum von **Knoten**, wobei ein Knoten einen grundlegenden Datensatz darstellt, der ein einzelnes Objekt innerhalb des Dokuments (wie ein Element oder Textknoten) repräsentiert.

Knoten können streng organisatorisch sein und eine Möglichkeit bieten, andere Knoten zu gruppieren oder einen Punkt zu schaffen, an dem eine Hierarchie aufgebaut werden kann; andere Knoten können sichtbare Komponenten eines Dokuments darstellen. Jeder Knoten basiert auf der {{domxref("Node")}}-Schnittstelle, die Eigenschaften zum Abrufen von Informationen über den Knoten sowie Methoden zum Erstellen, Löschen und Organisieren von Knoten innerhalb des DOM bietet.

Knoten haben kein Konzept, den Inhalt einzuschließen, der tatsächlich im Dokument angezeigt wird. Sie sind leere Gefäße. Die grundlegende Vorstellung von einem Knoten, der visuelle Inhalte darstellen kann, wird durch die {{domxref("Element")}}-Schnittstelle eingeführt. Eine `Element`-Objektinstanz repräsentiert ein einzelnes Element in einem Dokument, das entweder mit HTML oder einem {{glossary("XML")}} Vokabular wie {{glossary("SVG")}} erstellt wurde.

Zum Beispiel betrachten Sie ein Dokument mit zwei Elementen, von denen eines zwei weitere Elemente in sich verschachtelt hat:

![Struktur eines Dokuments mit Elementen in einem Dokument in einem Fenster](dom-structure.svg)

Während die {{domxref("Document")}}-Schnittstelle als Teil der {{DOMxRef("Document_Object_Model", "DOM", "", "1")}}-Spezifikation definiert ist, erweitert die HTML-Spezifikation sie erheblich, um Informationen hinzuzufügen, die speziell für die Verwendung des DOM im Kontext eines Webbrowsers sowie für die spezifische Darstellung von HTML-Dokumenten notwendig sind.

Zu den im HTML-Standard zu `Document` hinzugefügten Dingen gehören:

- Unterstützung für den Zugriff auf verschiedene Informationen, die von den {{Glossary("HTTP")}}-Headern beim Laden der Seite bereitgestellt werden, wie etwa der {{DOMxRef("Document/location", "Standort", "", "1")}}, von dem das Dokument geladen wurde, {{DOMxRef("Document/cookie", "Cookies", "", "1")}}, {{DOMxRef("Document/lastModified", "Änderungsdatum", "", "1")}}, {{DOMxRef("Document/referrer", "verweisende Seite", "", "1")}} und so weiter.
- Zugriff auf Listen von Elementen im {{HTMLElement("head")}}-Block und {{DOMxRef("Document/body", "body", "", "1")}} des Dokuments, sowie Listen der {{DOMxRef("Document/images", "Bilder", "", "1")}}, {{DOMxRef("Document/links", "Links", "", "1")}}, {{DOMxRef("Document/scripts", "Skripte", "", "1")}} usw., die im Dokument enthalten sind.
- Unterstützung für die Interaktion mit dem Benutzer durch Überprüfung der {{DOMxRef("Document/hasFocus", "Fokus", "", "1")}} und durch das Ausführen von Befehlen auf [bearbeitbarem Inhalt](/de/docs/Web/HTML/Global_attributes/contenteditable).
- Ereignishandler für Dokumentanforderungen, die vom HTML-Standard definiert sind, um Zugriff auf {{DOMxRef("MouseEvent", "Maus", "", "1")}}- und {{DOMxRef("KeyboardEvent", "Tastatur", "", "1")}}-Ereignisse, {{DOMxRef("HTML_Drag_and_Drop_API", "Drag and Drop", "", "1")}}, {{DOMxRef("HTMLMediaElement", "Mediensteuerung", "", "1")}} und mehr zu ermöglichen.
- Ereignishandler für Ereignisse, die sowohl an Elemente als auch Dokumente gesendet werden können; diese umfassen derzeit nur {{DOMxRef("HTMLElement/copy_event", "Kopieren", "", "1")}}, {{DOMxRef("HTMLElement/cut_event", "Schneiden", "", "1")}} und {{DOMxRef("HTMLElement/paste_event", "Einfügen", "", "1")}}-Aktionen.

### HTML-Element-Schnittstellen

Die `Element`-Schnittstelle wurde weiter angepasst, um HTML-Elemente speziell zu repräsentieren, indem die {{domxref("HTMLElement")}}-Schnittstelle eingeführt wird, von der alle spezifischeren HTML-Elementklassen erben. Dies erweitert die `Element`-Klasse, um HTML-spezifische allgemeine Funktionen zu den Elementknoten hinzuzufügen. Zu den von `HTMLElement` hinzugefügten Eigenschaften gehören zum Beispiel {{domxref("HTMLElement.hidden", "hidden")}} und {{domxref("HTMLElement.innerText", "innerText")}}.

Ein {{Glossary("HTML")}}-Dokument ist ein DOM-Baum, in dem jeder der Knoten ein HTML-Element ist, dargestellt durch die {{domxref("HTMLElement")}}-Schnittstelle. Die `HTMLElement`-Klasse wiederum implementiert `Node`, so dass jedes Element auch ein Knoten ist (aber nicht umgekehrt). Auf diese Weise stehen die strukturellen Funktionen, die durch die {{domxref("Node")}}-Schnittstelle implementiert wurden, auch HTML-Elementen zur Verfügung, was es ihnen ermöglicht, ineinander verschachtelt, erstellt, gelöscht, verschoben und so weiter zu werden.

Die `HTMLElement`-Schnittstelle ist jedoch generisch und bietet nur die Funktionalität, die allen HTML-Elementen gemeinsam ist, wie die ID des Elements, seine Koordinaten, das HTML, das das Element bildet, Informationen über die Scrollposition und so weiter.

Um die Funktionalität der Kern-`HTMLElement`-Schnittstelle zu erweitern, um die für ein bestimmtes Element benötigten Funktionen bereitzustellen, wird die `HTMLElement`-Klasse erweitert, um die benötigten Eigenschaften und Methoden hinzuzufügen. Zum Beispiel wird das {{HTMLElement("canvas")}} Element durch ein Objekt vom Typ {{domxref("HTMLCanvasElement")}} repräsentiert. `HTMLCanvasElement` erweitert den `HTMLElement`-Typ, indem Eigenschaften wie {{domxref("HTMLCanvasElement.height", "height")}} und Methoden wie {{domxref("HTMLCanvasElement.getContext", "getContext()")}} hinzugefügt werden, um Canvas-spezifische Funktionen bereitzustellen.

Die Gesamtvererbung für HTML-Elementklassen sieht folgendermaßen aus:

![Hierarchie der Schnittstellen für HTML-Elemente](html-dom-hierarchy.svg)

Ein Element erbt somit die Eigenschaften und Methoden all seiner Vorfahren. Betrachten Sie beispielsweise ein {{HTMLElement("a")}} Element, das im DOM durch ein Objekt vom Typ {{domxref("HTMLAnchorElement")}} repräsentiert wird. Das Element umfasst dann die Anker-spezifischen Eigenschaften und Methoden, die in der Dokumentation dieser Klasse beschrieben sind, sowie diejenigen, die von {{domxref("HTMLElement")}} und {{domxref("Element")}} definiert sind, ebenso wie von {{domxref("Node")}} und schließlich {{domxref("EventTarget")}}.

Jede Ebene definiert einen wesentlichen Aspekt der Nützlichkeit des Elements. Von `Node` erbt das Element Konzepte, die die Fähigkeit betreffen, dass das Element von einem anderen Element enthalten wird und selbst andere Elemente enthalten kann. Von besonderer Bedeutung ist das, was durch die Vererbung von `EventTarget` gewonnen wird: die Fähigkeit, Ereignisse wie Mausklicks, Abspiel- und Pause-Ereignisse usw. zu empfangen und zu behandeln.

Es gibt Elemente, die Gemeinsamkeiten teilen und daher einen zusätzlichen Zwischentyp haben. Zum Beispiel präsentieren die {{HTMLElement("audio")}}- und {{HTMLElement("video")}}-Elemente beide audiovisuellen Medien. Die entsprechenden Typen, {{domxref("HTMLAudioElement")}} und {{domxref("HTMLVideoElement")}}, basieren beide auf dem gemeinsamen Typ {{domxref("HTMLMediaElement")}}, der wiederum auf {{domxref("HTMLElement")}} basiert und so weiter. `HTMLMediaElement` definiert die Methoden und Eigenschaften, die Audio- und Videoelemente gemeinsam haben.

Diese element-spezifischen Schnittstellen bilden den Großteil der HTML DOM API und sind der Schwerpunkt dieses Artikels. Um mehr über die tatsächliche Struktur des {{DOMxRef("Document_Object_Model", "DOM", "", "1")}} zu erfahren, siehe {{DOMxRef("Document_Object_Model/Introduction", "Einführung in das DOM", "", "1")}}.

## Zielgruppe der HTML DOM

Die von der HTML DOM bereitgestellten Funktionen gehören zu den am häufigsten verwendeten APIs im Werkzeugkasten eines Webentwicklers. Nahezu alle, mit Ausnahme der einfachsten Webanwendungen, werden einige Funktionen der HTML DOM verwenden.

## HTML DOM API Schnittstellen

Die Mehrheit der Schnittstellen, die die HTML DOM API bilden, stimmen fast eins zu eins mit einzelnen HTML-Elementen oder mit kleinen Gruppen von Elementen, die ähnliche Funktionalität haben, überein. Darüber hinaus enthält die HTML DOM API einige Schnittstellen und Typen, um die HTML-Element-Schnittstellen zu unterstützen.

### HTML-Element-Schnittstellen

Diese Schnittstellen repräsentieren spezifische HTML-Elemente (oder Sätze von verwandten Elementen, die die gleichen Eigenschaften und Methoden gemeinsam haben).

- {{DOMxRef("HTMLAnchorElement")}}
- {{DOMxRef("HTMLAreaElement")}}
- {{DOMxRef("HTMLAudioElement")}}
- {{DOMxRef("HTMLBaseElement")}}
- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLBRElement")}}
- {{DOMxRef("HTMLButtonElement")}}
- {{DOMxRef("HTMLCanvasElement")}}
- {{DOMxRef("HTMLDataElement")}}
- {{DOMxRef("HTMLDataListElement")}}
- {{DOMxRef("HTMLDetailsElement")}}
- {{DOMxRef("HTMLDialogElement")}}
- {{DOMxRef("HTMLDirectoryElement")}}
- {{DOMxRef("HTMLDivElement")}}
- {{DOMxRef("HTMLDListElement")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("HTMLEmbedElement")}}
- {{DOMxRef("HTMLFieldSetElement")}}
- {{DOMxRef("HTMLFormElement")}}
- {{DOMxRef("HTMLHRElement")}}
- {{DOMxRef("HTMLHeadElement")}}
- {{DOMxRef("HTMLHeadingElement")}}
- {{DOMxRef("HTMLHtmlElement")}}
- {{DOMxRef("HTMLIFrameElement")}}
- {{DOMxRef("HTMLImageElement")}}
- {{DOMxRef("HTMLInputElement")}}
- {{DOMxRef("HTMLLabelElement")}}
- {{DOMxRef("HTMLLegendElement")}}
- {{DOMxRef("HTMLLIElement")}}
- {{DOMxRef("HTMLLinkElement")}}
- {{DOMxRef("HTMLMapElement")}}
- {{DOMxRef("HTMLMediaElement")}}
- {{DOMxRef("HTMLMenuElement")}}
- {{DOMxRef("HTMLMetaElement")}}
- {{DOMxRef("HTMLMeterElement")}}
- {{DOMxRef("HTMLModElement")}}
- {{DOMxRef("HTMLObjectElement")}}
- {{DOMxRef("HTMLOListElement")}}
- {{DOMxRef("HTMLOptGroupElement")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOutputElement")}}
- {{DOMxRef("HTMLParagraphElement")}}
- {{DOMxRef("HTMLPictureElement")}}
- {{DOMxRef("HTMLPreElement")}}
- {{DOMxRef("HTMLProgressElement")}}
- {{DOMxRef("HTMLQuoteElement")}}
- {{DOMxRef("HTMLScriptElement")}}
- {{DOMxRef("HTMLSelectElement")}}
- {{DOMxRef("HTMLSlotElement")}}
- {{DOMxRef("HTMLSourceElement")}}
- {{DOMxRef("HTMLSpanElement")}}
- {{DOMxRef("HTMLStyleElement")}}
- {{DOMxRef("HTMLTableCaptionElement")}}
- {{DOMxRef("HTMLTableCellElement")}}
- {{DOMxRef("HTMLTableColElement")}}
- {{DOMxRef("HTMLTableElement")}}
- {{DOMxRef("HTMLTableRowElement")}}
- {{DOMxRef("HTMLTableSectionElement")}}
- {{DOMxRef("HTMLTemplateElement")}}
- {{DOMxRef("HTMLTextAreaElement")}}
- {{DOMxRef("HTMLTimeElement")}}
- {{DOMxRef("HTMLTitleElement")}}
- {{DOMxRef("HTMLTrackElement")}}
- {{DOMxRef("HTMLUListElement")}}
- {{DOMxRef("HTMLUnknownElement")}}
- {{DOMxRef("HTMLVideoElement")}}

#### Veraltete HTML-Element-Schnittstellen

- {{DOMxRef("HTMLMarqueeElement")}} {{deprecated_inline}}

#### Obsolete HTML-Element-Schnittstellen

- {{DOMxRef("HTMLFontElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameSetElement")}} {{deprecated_inline}}

### Web-App- und Browser-Integrationsschnittstellen

Diese Schnittstellen bieten Zugriff auf das Browserfenster und das Dokument, das das HTML enthält, sowie auf den Zustand des Browsers, verfügbare Plugins (falls vorhanden) und verschiedene Konfigurationsoptionen.

- {{DOMxRef("BarProp")}}
- {{DOMxRef("Navigator")}}
- {{DOMxRef("Window")}}

#### Veraltete Web-App- und Browser-Integrationsschnittstellen

- {{DOMxRef("External")}} {{deprecated_inline}}

#### Obsolete Web-App- und Browser-Integrationsschnittstellen

- {{DOMxRef("ApplicationCache")}} {{deprecated_inline}}
- {{DOMxRef("Plugin")}} {{deprecated_inline}}
- {{DOMxRef("PluginArray")}} {{deprecated_inline}}

### Formularunterstützende Schnittstellen

Diese Schnittstellen bieten Struktur und Funktionalität, die von den Elementen verwendet werden, um Formulare zu erstellen und zu verwalten, einschließlich der {{HTMLElement("form")}}- und {{HTMLElement("input")}}-Elemente.

- {{DOMxRef("FormDataEvent")}}
- {{DOMxRef("HTMLFormControlsCollection")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("RadioNodeList")}}
- {{DOMxRef("ValidityState")}}

### Canvas- und Bildschnittstellen

Diese Schnittstellen repräsentieren Objekte, die von der Canvas API sowie dem {{HTMLElement("img")}}-Element und {{HTMLElement("picture")}}-Elementen verwendet werden.

- {{DOMxRef("CanvasGradient")}}
- {{DOMxRef("CanvasPattern")}}
- {{DOMxRef("CanvasRenderingContext2D")}}
- {{DOMxRef("ImageBitmap")}}
- {{DOMxRef("ImageBitmapRenderingContext")}}
- {{DOMxRef("ImageData")}}
- {{DOMxRef("OffscreenCanvas")}}
- {{DOMxRef("OffscreenCanvasRenderingContext2D")}}
- {{DOMxRef("Path2D")}}
- {{DOMxRef("TextMetrics")}}

### Medienschnittstellen

Die Medienschittstellen bieten HTML-Zugriff auf die Inhalte der Medienelemente: {{HTMLElement("audio")}} und {{HTMLElement("video")}}.

- {{DOMxRef("AudioTrack")}}
- {{DOMxRef("AudioTrackList")}}
- {{DOMxRef("MediaError")}}
- {{DOMxRef("TextTrack")}}
- {{DOMxRef("TextTrackCue")}}
- {{DOMxRef("TextTrackCueList")}}
- {{DOMxRef("TextTrackList")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TrackEvent")}}
- {{DOMxRef("VideoTrack")}}
- {{DOMxRef("VideoTrackList")}}

### Drag-and-Drop-Schnittstellen

Diese Schnittstellen werden von der [HTML Drag and Drop API](/de/docs/Web/API/HTML_Drag_and_Drop_API) verwendet, um einzelne ziehbare (oder gezogene) Elemente, Gruppen von gezogenen oder ziehbaren Elementen zu repräsentieren und den Drag-and-Drop-Prozess zu handhaben.

- {{DOMxRef("DataTransfer")}}
- {{DOMxRef("DataTransferItem")}}
- {{DOMxRef("DataTransferItemList")}}
- {{DOMxRef("DragEvent")}}

### Seitenverlaufsschnittstellen

Die History API Schnittstellen erlauben den Zugriff auf Informationen über den Verlauf des Browsers, ebenso wie das Vorwärts- und Rückwärtsnavigieren durch den Verlauf des aktuellen Tabs im Browser.

- {{DOMxRef("BeforeUnloadEvent")}}
- {{DOMxRef("HashChangeEvent")}}
- {{DOMxRef("History")}}
- {{DOMxRef("Location")}}
- {{DOMxRef("PageRevealEvent")}}
- {{DOMxRef("PageSwapEvent")}}
- {{DOMxRef("PageTransitionEvent")}}
- {{DOMxRef("PopStateEvent")}}

### Web Components Schnittstellen

Diese Schnittstellen werden von der [Web Components API](/de/docs/Web/API/Web_components) verwendet, um die verfügbaren [benutzerdefinierten Elemente](/de/docs/Web/API/Web_components/Using_custom_elements) zu erstellen und zu verwalten.

- {{DOMxRef("CustomElementRegistry")}}

### Verschiedene und unterstützende Schnittstellen

Diese unterstützenden Objekttypen werden auf vielfältige Weise in der HTML DOM API verwendet. Darüber hinaus repräsentiert {{domxref("PromiseRejectionEvent")}} das Ereignis, das geliefert wird, wenn ein {{Glossary("JavaScript")}} {{jsxref("Promise")}} abgelehnt wird.

- {{DOMxRef("DOMStringList")}}
- {{DOMxRef("DOMStringMap")}}
- {{DOMxRef("ErrorEvent")}}
- {{DOMxRef("HTMLAllCollection")}}
- {{DOMxRef("MimeType")}}
- {{DOMxRef("MimeTypeArray")}}
- {{DOMxRef("PromiseRejectionEvent")}}

### Schnittstellen, die zu anderen APIs gehören

Mehrere Schnittstellen sind technisch gesehen im HTML-Standard definiert, während sie tatsächlich Teil anderer APIs sind.

#### Web-Storage-Schnittstellen

Die {{DOMxRef("Web_Storage_API", "Web Storage API", "", "1")}} bietet die Fähigkeit für Websites, Daten entweder temporär oder dauerhaft auf dem Gerät des Benutzers für eine spätere Wiederverwendung zu speichern.

- {{DOMxRef("Storage")}}
- {{DOMxRef("StorageEvent")}}

#### Web Worker Schnittstellen

Diese Schnittstellen werden von der {{DOMxRef("Web_Workers_API", "Web Workers API", "", "1")}} sowohl zur Einrichtung der Möglichkeit genutzt, dass Worker mit einer App und deren Inhalt interagieren können, als auch um die Nachrichtenübermittlung zwischen Fenstern oder Apps zu unterstützen.

- {{DOMxRef("BroadcastChannel")}}
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
- {{DOMxRef("MessageChannel")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MessagePort")}}
- {{DOMxRef("SharedWorker")}}
- {{DOMxRef("SharedWorkerGlobalScope")}}
- {{DOMxRef("Worker")}}
- {{DOMxRef("WorkerGlobalScope")}}
- {{DOMxRef("WorkerLocation")}}
- {{DOMxRef("WorkerNavigator")}}

#### WebSocket-Schnittstellen

Diese Schnittstellen, die von der HTML-Spezifikation definiert sind, werden von der {{DOMxRef("WebSockets_API", "WebSockets API", "", "1")}} verwendet.

- {{DOMxRef("CloseEvent")}}
- {{DOMxRef("WebSocket")}}

#### Schnittstellen für servergesendete Ereignisse

Die {{domxref("EventSource")}}-Schnittstelle repräsentiert die Quelle, die {{DOMxRef("Server-sent_events", "servergesendete Ereignisse", "", "1")}} gesendet hat oder sendet.

- {{DOMxRef("EventSource")}}

## Beispiele

In diesem Beispiel wird das {{domxref("Element/input_event", "input")}}-Ereignis eines {{HTMLElement("input")}}-Elements überwacht, um den Zustand der "Senden"-Schaltfläche eines Formulars basierend darauf zu aktualisieren, ob ein bestimmtes Feld derzeit einen Wert hat oder nicht.

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

Dieser Code verwendet die {{domxref("Document")}}-Schnittstelle {{domxref("Document.getElementById", "getElementById()")}} Methode, um das DOM-Objekt zu erhalten, das die {{HTMLElement("input")}}-Elemente repräsentiert, deren IDs `userName` und `sendButton` sind. Mit diesen können wir auf die Eigenschaften und Methoden zugreifen, die Informationen darüber bereitstellen und Kontrolle über diese Elemente gewähren.

Das {{domxref("HTMLInputElement")}}-Objekt für die Eigenschaft {{domxref("HTMLInputElement.disabled", "disabled")}} der "Senden"-Schaltfläche ist auf `true` gesetzt, was die "Senden"-Schaltfläche deaktiviert, sodass sie nicht angeklickt werden kann. Darüber hinaus wird das Benutzername-Eingabefeld durch Aufrufen der {{domxref("HTMLElement/focus", "focus()")}} Methode, die es von {{domxref("HTMLElement")}} erbt, aktiv in den Fokus gesetzt.

Dann wird {{domxref("EventTarget.addEventListener", "addEventListener()")}} aufgerufen, um dem Benutzername-Eingabefeld einen Handler für das `input`-Ereignis hinzuzufügen. Dieser Code überprüft die Länge des aktuellen Werts der Eingabe; wenn dieser null ist, wird die "Senden"-Schaltfläche deaktiviert, falls sie nicht schon deaktiviert ist. Andernfalls stellt der Code sicher, dass die Schaltfläche aktiviert ist.

Mit dieser Einrichtung ist die "Senden"-Schaltfläche immer dann aktiviert, wenn das Benutzername-Eingabefeld einen Wert hat und deaktiviert, wenn es leer ist.

### HTML

Das HTML für das Formular sieht folgendermaßen aus:

```html
<p>Bitte geben Sie die folgenden Informationen an. Mit "*" gekennzeichnete Elemente sind erforderlich.</p>
<form action="" method="get">
  <p>
    <label for="userName" required>Ihr Name:</label>
    <input type="text" id="userName" /> (*)
  </p>
  <p>
    <label for="userEmail">Email:</label>
    <input type="email" id="userEmail" />
  </p>
  <input type="submit" value="Senden" id="sendButton" />
</form>
```

### Ergebnis

{{EmbedLiveSample("Examples", 640, 300)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

### Referenzen

- [HTML-Elemente-Referenz](/de/docs/Web/HTML/Element)
- [HTML-Attribute-Referenz](/de/docs/Web/HTML/Attributes)
- {{DOMxRef("Document_Object_Model", "Document Object Model (DOM)", "", "1")}} Referenz

### Leitfäden

- [Manipulation von Dokumenten](/de/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents): Ein Anfängerleitfaden zur Manipulation des DOM.
