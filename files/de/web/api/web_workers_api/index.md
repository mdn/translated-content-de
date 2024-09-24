---
title: Web Workers API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen es, eine Skriptoperation in einem Hintergrundthread auszuführen, der vom Haupt-Execution-Thread einer Webanwendung getrennt ist. Der Vorteil hiervon ist, dass aufwendige Verarbeitung in einem separaten Thread durchgeführt werden kann, wodurch der Hauptthread (in der Regel die Benutzeroberfläche) ohne Blockierung oder Verlangsamung laufen kann.

## Web Workers Konzepte und Nutzung

Ein Worker ist ein Objekt, das mithilfe eines Konstruktors erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread laufen wird.

Neben dem Standard-Funktionssatz von [JavaScript](/de/docs/Web/JavaScript) (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, usw.) können Sie fast jeden beliebigen Code innerhalb eines Worker-Threads ausführen. Es gibt einige Ausnahmen: Zum Beispiel können Sie das DOM nicht direkt aus einem Worker heraus manipulieren oder einige Standardmethoden und -eigenschaften des [`Window`](/de/docs/Web/API/Window)-Objekts verwenden. Informationen über den Code, den Sie ausführen _können_, finden Sie unten unter [Worker globaler Kontext und Funktionen](#worker_globaler_kontext_und_funktionen) und [unterstützte Web-APIs](#unterstützte_web-apis).

Daten werden über ein Nachrichtensystem zwischen Workern und dem Hauptthread gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht befindet sich innerhalb der `data`-Eigenschaft des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses). Die Daten werden kopiert anstatt geteilt.

Worker können ihrerseits neue Worker erzeugen, solange diese Worker innerhalb desselben {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) machen (obwohl zu beachten ist, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

### Worker Typen

Es gibt eine Anzahl unterschiedlicher Typen von Workern:

- [Dedizierte Worker](/de/docs/Web/API/Worker) sind Worker, die von einem einzigen Skript genutzt werden. Dieser Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt repräsentiert.
- [Shared Worker](/de/docs/Web/API/SharedWorker) sind Worker, die von mehreren Skripten genutzt werden können, die in verschiedenen Fenstern, IFrames usw. laufen, sofern sie sich in derselben Domain wie der Worker befinden. Sie sind etwas komplexer als dedizierte Worker — Skripte müssen über einen aktiven Port kommunizieren.
- [Service Worker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxyserver, die zwischen Webanwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerk-Anfragen abfangen und je nach Netzwerkverfügbarkeit geeignete Maßnahmen ergreifen sowie auf dem Server befindliche Ressourcen aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrundsynchronisierungs-APIs.

> [!NOTE]
> Gemäß der [Web Workers Spezifikation](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2) sollten Worker-Fehlerereignisse nicht aufsteigen (siehe [Firefox-Bug 1188141](https://bugzil.la/1188141)). Dies wurde in Firefox 42 implementiert.

### Worker globaler Kontext und Funktionen

Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window)! Während [`Window`](/de/docs/Web/API/Window) direkt für Worker nicht verfügbar ist, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und durch ihre eigenen, von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) abgeleiteten Kontexte für Worker verfügbar gemacht:

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für shared Worker
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [Service Worker](/de/docs/Web/API/Service_Worker_API)

Einige der Funktionen (ein Teilmenge), die allen Workern und dem Hauptthread gemeinsam sind (aus `WindowOrWorkerGlobalScope`) sind:

- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
- [`WorkerGlobalScope.dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{non-standard_inline}}
- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) (nur für dedizierte Worker)
- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) (nur für dedizierte Worker)

Die folgenden Funktionen sind **nur** für Worker verfügbar:

- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (alle Worker)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) (nur für dedizierte Worker)

### Unterstützte Web-APIs

> [!NOTE]
> Wenn eine aufgelistete API von einer Plattform in einer bestimmten Version unterstützt wird, kann in der Regel davon ausgegangen werden, dass sie in Web Workern verfügbar ist. Sie können die Unterstützung für ein bestimmtes Objekt/Funktion auch auf der Seite testen: <https://worker-playground.glitch.me/>

Die folgenden Web-APIs stehen Workern zur Verfügung:

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Barcode Detection API](/de/docs/Web/API/Barcode_Detection_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
- [Console API](/de/docs/Web/API/Console_API)
- [Compression Streams API](/de/docs/Web/API/Compression_Streams_API)
- [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API)
- [`CustomEvent`](/de/docs/Web/API/CustomEvent)
- [Encoding API](/de/docs/Web/API/Encoding_API) (z.B. [`TextEncoder`](/de/docs/Web/API/TextEncoder), [`TextDecoder`](/de/docs/Web/API/TextDecoder))
- [Fetch API](/de/docs/Web/API/Fetch_API)
- [File API](/de/docs/Web/API/File_API)
- [File System API](/de/docs/Web/API/File_System_API)
- [Idle Detection API](/de/docs/Web/API/Idle_Detection_API)
- [IndexedDB API](/de/docs/Web/API/IndexedDB_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) (nur für dedizierte Worker)
- [Network Information API](/de/docs/Web/API/Network_Information_API)
- [Notifications API](/de/docs/Web/API/Notifications_API)
- [Payment Handler API](/de/docs/Web/API/Payment_Handler_API)
- [Performance API](/de/docs/Web/API/Performance_API)
- [Permissions API](/de/docs/Web/API/Permissions_API)
- [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API)
- [Push API](/de/docs/Web/API/Push_API)
- [Server-Sent Events](/de/docs/Web/API/Server-Sent_Events)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
- [URL API](/de/docs/Web/API/URL_API) (z.B. [`URL`](/de/docs/Web/API/URL))
- [URL Pattern API](/de/docs/Web/API/URL_Pattern_API)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [WebCodecs API](/de/docs/Web/API/WebCodecs_API)
- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) (z.B. [`Crypto`](/de/docs/Web/API/Crypto))
- [Web Locks API](/de/docs/Web/API/Web_Locks_API)
- [Web Serial API](/de/docs/Web/API/Web_Serial_API)
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebUSB API](/de/docs/Web/API/WebUSB_API)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)

Worker können auch andere Worker erzeugen, daher stehen diese APIs ebenfalls zur Verfügung:

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)

## Web Worker Schnittstellen

- [`Worker`](/de/docs/Web/API/Worker)
  - : Repräsentiert einen laufenden Worker-Thread und ermöglicht es Ihnen, Nachrichten an den laufenden Worker-Code zu senden.
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
  - : Definiert den absoluten Ort des von dem [`Worker`](/de/docs/Web/API/Worker) ausgeführten Skripts.
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
  - : Repräsentiert eine spezielle Art von Worker, die von mehreren {{Glossary("browsing_context", "Browsing-Kontexten")}} (d.h. Fenstern, Tabs oder IFrames) oder sogar anderen Workern aus zugänglich ist.
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
  - : Repräsentiert den generischen Geltungsbereich eines Workers (gleiche Aufgabe wie [`Window`](/de/docs/Web/API/Window) für normale Webinhalte). Verschiedene Arten von Workern haben Geltungsbereichsobjekte, die von dieser Schnittstelle erben und spezifischere Funktionen hinzufügen.
- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
  - : Repräsentiert den Geltungsbereich eines dedizierten Workers, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige dedizierte Funktionen hinzufügt.
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
  - : Repräsentiert den Geltungsbereich eines Shared Workers, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige dedizierte Funktionen hinzufügt.
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
  - : Repräsentiert die Identität und den Zustand des User-Agents (des Clients).

## Beispiele

Wir haben einige Demos erstellt, um die Nutzung von Web Workern zu demonstrieren:

- [Grundlegendes Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Grundlegendes Beispiel für einen Shared Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([Shared Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [OffscreenCanvas Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

Weitere Informationen darüber, wie diese Demos funktionieren, finden Sie in [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
