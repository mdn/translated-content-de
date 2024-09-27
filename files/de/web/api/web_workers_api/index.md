---
title: Web Workers API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen es, ein Skript in einem Hintergrund-Thread laufen zu lassen, der vom Hauptausführungsthread einer Webanwendung getrennt ist. Der Vorteil dabei ist, dass aufwendige Berechnungen in einem separaten Thread durchgeführt werden können, sodass der Hauptthread (normalerweise der UI-Thread) ohne Blockierungen/Verzögerungen läuft.

## Web Workers Konzepte und Nutzung

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z.B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), der eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread laufen wird.

Zusätzlich zum Standard-Satz von [JavaScript](/de/docs/Web/JavaScript)-Funktionen (wie etwa {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, etc.) können Sie in einem Worker-Thread nahezu jeden beliebigen Code ausführen. Es gibt einige Ausnahmen: zum Beispiel können Sie nicht direkt das DOM aus einem Worker heraus manipulieren oder einige Standardmethoden und -eigenschaften des [`Window`](/de/docs/Web/API/Window)-Objekts verwenden. Informationen über den Code, den Sie _ausführen_ können, finden Sie im Abschnitt [Globale Worker-Kontexte und Funktionen](#globale_worker-kontexte_und_funktionen) und [unterstützte Web-APIs](#unterstützte_web-apis) weiter unten.

Daten werden zwischen Workern und dem Hauptthread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten über die `postMessage()`-Methode und antworten auf Nachrichten über den `onmessage`-Event-Handler (die Nachricht befindet sich innerhalb der `data`-Eigenschaft des [`message`](/de/docs/Web/API/Worker/message_event) Events). Die Daten werden kopiert anstatt geteilt.

Worker können wiederum neue Worker erzeugen, sofern diese im selben [Origin](/de/docs/Glossary/origin) wie die übergeordnete Seite gehostet werden.

Darüber hinaus können Worker Netzwerk-Anfragen unter Verwendung der APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) machen (wobei zu beachten ist, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

### Worker-Typen

Es gibt verschiedene Arten von Workern:

- [Dedizierte Worker](/de/docs/Web/API/Worker) sind Worker, die von einem einzigen Skript verwendet werden. Dieser Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt repräsentiert.
- [Geteilte Worker](/de/docs/Web/API/SharedWorker) sind Worker, die von mehreren Skripten genutzt werden können, die in verschiedenen Fenstern, IFrames etc. laufen, solange sie in derselben Domäne wie der Worker sind. Sie sind etwas komplexer als dedizierte Worker — Skripte müssen über einen aktiven Port kommunizieren.
- [Service Worker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sind dazu gedacht, unter anderem das Erstellen effektiver offline Erfahrungen zu ermöglichen, Netzwerk-Anfragen abzufangen und abhängig davon, ob das Netzwerk verfügbar ist, entsprechende Maßnahmen zu ergreifen und die auf dem Server befindlichen Ressourcen zu aktualisieren. Sie ermöglichen auch den Zugang zu Push-Benachrichtigungen und Hintergrund-Sync-APIs.

> [!NOTE]
> Laut der [Web Workers Spec](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2) sollten Worker-Fehlerereignisse nicht weiter aufsteigen (siehe [Firefox-Bug 1188141](https://bugzil.la/1188141)). Dies wurde in Firefox 42 umgesetzt.

### Globale Worker-Kontexte und Funktionen

Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window)! Während [`Window`](/de/docs/Web/API/Window) nicht direkt für Worker verfügbar ist, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und werden Workern durch ihre eigenen von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) abgeleiteten Kontexte zur Verfügung gestellt:

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Worker
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [Service Worker](/de/docs/Web/API/Service_Worker_API)

Einige der Funktionen (ein Teil davon), die allen Workern und dem Hauptthread (vom `WindowOrWorkerGlobalScope`) gemeinsam sind, sind:

- [`atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
- [`btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
- [`clearInterval()`](/de/docs/Web/API/ClearInterval)
- [`clearTimeout()`](/de/docs/Web/API/ClearTimeout)
- [`createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap)
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
> Wenn eine gelistete API auf einer Plattform in einer bestimmten Version unterstützt wird, kann allgemein davon ausgegangen werden, dass sie auch in Web-Workern verfügbar ist. Sie können die Unterstützung eines bestimmten Objekts/Funktion auch auf der Seite prüfen: <https://worker-playground.glitch.me/>

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

Worker können auch andere Worker starten, sodass diese APIs ebenfalls verfügbar sind:

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)

## Web Worker Schnittstellen

- [`Worker`](/de/docs/Web/API/Worker)
  - : Repräsentiert einen laufenden Worker-Thread und ermöglicht es Ihnen, Nachrichten an den laufenden Worker-Code zu senden.
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
  - : Definiert den absoluten Ort des durch den [`Worker`](/de/docs/Web/API/Worker) ausgeführten Skripts.
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
  - : Repräsentiert eine spezielle Art von Worker, die von mehreren [Browsing-Kontexten](/de/docs/Glossary/browsing_context) (z.B. Fenstern, Tabs oder IFrames) oder sogar von anderen Workern aus zugegriffen werden kann.
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
  - : Repräsentiert den generischen Scope eines jeden Workers (die gleiche Funktion wie [`Window`](/de/docs/Web/API/Window) bei normalem Webinhalt). Unterschiedliche Typen von Workern haben Scope-Objekte, die von dieser Schnittstelle erben und spezifischere Features hinzufügen.
- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
  - : Repräsentiert den Scope eines dedizierten Workers und erbt von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope), wobei einige dedizierte Funktionen hinzugefügt werden.
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
  - : Repräsentiert den Scope eines geteilten Workers und erbt von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope), wobei einige dedizierte Funktionen hinzugefügt werden.
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
  - : Repräsentiert die Identität und den Status des User Agents (des Clients).

## Beispiele

Wir haben ein paar Demos erstellt, um die Nutzung von Web Workern zu zeigen:

- [Einfaches Beispiel für dedizierte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Einfaches Beispiel für geteilte Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [OffscreenCanvas Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

Weitere Informationen darüber, wie diese Demos funktionieren, finden Sie in [Using Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
