---
title: Web Workers API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen es, eine Skriptoperation in einem Hintergrund-Thread auszuführen, der von dem Haupt-Execution-Thread einer Webanwendung getrennt ist. Der Vorteil davon ist, dass aufwendige Verarbeitung in einem separaten Thread durchgeführt werden kann, sodass der Haupt- (normalerweise der UI-) Thread ohne Blockierung oder Verlangsamung weiterlaufen kann.

## Web Workers Konzepte und Nutzung

Ein Worker ist ein Objekt, das mithilfe eines Konstruktors erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird.

Zusätzlich zum Standardumfang der [JavaScript](/de/docs/Web/JavaScript)-Funktionen (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, usw.) können Sie fast jeden Code in einem Worker-Thread ausführen. Es gibt einige Ausnahmen: Zum Beispiel können Sie das DOM nicht direkt aus einem Worker heraus manipulieren oder einige Standardmethoden und -eigenschaften des [`Window`](/de/docs/Web/API/Window)-Objekts verwenden. Informationen über den Code, den Sie _ausführen_ können, finden Sie im Abschnitt [worker globaler Kontext und Funktionen](#worker_globaler_kontexte_und_funktionen) und [unterstützte Web-APIs](#unterstützte_web-apis) unten.

Zwischen Workern und dem Haupt-Thread werden Daten über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mithilfe der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Event-Handler (die Nachricht befindet sich in der `data`-Eigenschaft des [`message`](/de/docs/Web/API/Worker/message_event)-Events). Die Daten werden kopiert anstatt geteilt.

Worker können wiederum neue Worker erstellen, solange diese Worker im selben {{Glossary("origin", "Ursprung")}} wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) machen (obwohl das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

### Workertypen

Es gibt eine Reihe von verschiedenen Arten von Workern:

- [Dedizierte Worker](/de/docs/Web/API/Worker) sind Worker, die von einem einzigen Skript genutzt werden. Dieser Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt dargestellt.
- [Geteilte Worker](/de/docs/Web/API/SharedWorker) sind Worker, die von mehreren Skripten, die in verschiedenen Fenstern, IFrames usw. laufen, genutzt werden können, solange sie sich in derselben Domäne wie der Worker befinden. Sie sind etwas komplexer als dedizierte Worker – Skripte müssen über einen aktiven Port kommunizieren.
- [Service Worker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sind unter anderem dazu gedacht, die Erstellung effektiver Offline-Erfahrungen zu ermöglichen, Netzwerk-Anfragen abzufangen und je nach Verfügbarkeit des Netzwerks entsprechende Maßnahmen zu ergreifen und Ressourcen auf dem Server zu aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.

> [!NOTE]
> Gemäß der [Web workers Spezifikation](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2) sollten Worker-Fehlerevents nicht aufsteigen (siehe [Firefox Fehler 1188141](https://bugzil.la/1188141)). Dies wurde in Firefox 42 implementiert.

### Worker globaler Kontexte und Funktionen

Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window)! Während [`Window`](/de/docs/Web/API/Window) nicht direkt für Worker verfügbar ist, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und durch die eigenen von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) abgeleiteten Kontexte für Worker verfügbar gemacht:

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Worker
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [Service Worker](/de/docs/Web/API/Service_Worker_API)

Einige der Funktionen (eine Teilmenge), die allen Workern gemeinsam sind und dem Haupt-Thread (von `WindowOrWorkerGlobalScope`) zur Verfügung stehen, sind:

- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- [`clearInterval()`](/de/docs/Web/API/ClearInterval)
- [`clearTimeout()`](/de/docs/Web/API/ClearTimeout)
- [`createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
- [`dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{non-standard_inline}}
- [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
- [`queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
- [`reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
- [`setInterval()`](/de/docs/Web/API/SetInterval)
- [`setTimeout()`](/de/docs/Web/API/SetTimeout)
- [`structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
- [`requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) (nur dedizierte Worker)
- [`cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) (nur dedizierte Worker)

Die folgenden Funktionen sind **nur** für Worker verfügbar:

- [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts),
- [`postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) (nur dedizierte Worker).

### Unterstützte Web-APIs

> [!NOTE]
> Wenn eine aufgeführte API von einer Plattform in einer bestimmten Version unterstützt wird, kann allgemein angenommen werden, dass sie in Web Workern verfügbar ist. Sie können die Unterstützung für ein bestimmtes Objekt/Funktion auch auf der Seite testen: <https://worker-playground.glitch.me/>

Die folgenden Web-APIs sind für Worker verfügbar:

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
- [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) (nur dedizierte Worker)
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

Worker können auch andere Worker erstellen, daher sind diese APIs ebenfalls verfügbar:

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)

## Web Worker Schnittstellen

- [`Worker`](/de/docs/Web/API/Worker)
  - : Repräsentiert einen laufenden Worker-Thread, der es Ihnen ermöglicht, Nachrichten an den laufenden Worker-Code zu senden.
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
  - : Definiert die absolute Position des Scriptes, das vom [`Worker`](/de/docs/Web/API/Worker) ausgeführt wird.
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
  - : Repräsentiert eine spezifische Art von Worker, der von mehreren {{Glossary("browsing_context", "Browsing-Kontexten")}} (d.h. Fenster, Tabs oder IFrames) oder sogar anderen Workern zugegriffen werden kann.
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
  - : Repräsentiert den generischen Geltungsbereich eines beliebigen Workers (erfüllt die gleiche Aufgabe wie [`Window`](/de/docs/Web/API/Window) für normalen Webinhalt). Verschiedene Arten von Workern haben Bereichsobjekte, die von dieser Schnittstelle erben und spezifischere Funktionen hinzufügen.
- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
  - : Repräsentiert den Geltungsbereich eines dedizierten Workers, erbt von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) und fügt einige dedizierte Funktionen hinzu.
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
  - : Repräsentiert den Geltungsbereich eines geteilten Workers, erbt von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) und fügt einige dedizierte Funktionen hinzu.
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
  - : Repräsentiert die Identität und den Status des Benutzer-Agents (des Clients).

## Beispiele

Wir haben ein paar Demos erstellt, um die Nutzung von Web Workern zu zeigen:

- [Einfaches Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Einfaches Beispiel für einen geteilten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [OffscreenCanvas Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

Weitere Informationen darüber, wie diese Demos funktionieren, finden Sie in [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
