---
title: Web Workers API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 376a2756e066d887300609a252d11422b6b15487
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen es, eine Skriptoperation in einem Hintergrund-Thread auszuführen, der vom Hauptausführungsthread einer Webanwendung getrennt ist. Der Vorteil hierbei ist, dass umfangreiche Verarbeitungen in einem separaten Thread durchgeführt werden können, sodass der Hauptthread (normalerweise die Benutzeroberfläche) ohne Blockierung oder Verlangsamung ausgeführt werden kann.

## Konzepte und Nutzung von Web Workers

Ein Worker ist ein Objekt, das mithilfe eines Konstruktors erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), der eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird.

Zusätzlich zu der Standardmenge an [JavaScript](/de/docs/Web/JavaScript)-Funktionen (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, etc.) können Sie fast jeden Code, den Sie mögen, innerhalb eines Worker-Threads ausführen. Es gibt einige Ausnahmen: Zum Beispiel können Sie das DOM nicht direkt von innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`Window`](/de/docs/Web/API/Window)-Objekts verwenden. Informationen über den Code, den Sie _verwenden_ können, finden Sie unten unter [globaler Kontext und Funktionen von Workern](#worker_globale_kontexte_und_funktionen) und [unterstützte Web-APIs](#unterstützte_web-apis).

Daten werden zwischen Workern und dem Hauptthread über ein Nachrichtensystem gesendet — beide Seiten senden ihre Nachrichten mittels der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist innerhalb der [`message`](/de/docs/Web/API/Worker/message_event)-Eigenschaft `data` enthalten). Die Daten werden kopiert anstatt geteilt.

Worker können ihrerseits neue Worker erzeugen, solange diese Worker innerhalb der gleichen {{Glossary("origin", "Origin")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerk-Anfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) durchführen (beachten Sie jedoch, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

### Typen von Workern

Es gibt mehrere verschiedene Arten von Workern:

- [Dedizierte Worker](/de/docs/Web/API/Worker) sind Worker, die von einem einzigen Skript genutzt werden. Dieser Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt dargestellt.
- [Gemeinsame Worker](/de/docs/Web/API/SharedWorker) sind Worker, die von mehreren Skripten genutzt werden können, die in verschiedenen Fenstern, IFrames usw. ausgeführt werden, solange sie sich im gleichen Domainbereich wie der Worker befinden. Sie sind etwas komplexer als dedizierte Worker — Skripte müssen über einen aktiven Port kommunizieren.
- [Service Worker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Unter anderem sollen sie die Erstellung effektiver Offline-Erlebnisse ermöglichen, Netzwerk-Anfragen abfangen und je nach Verfügbarkeit des Netzwerks geeignete Maßnahmen ergreifen, sowie Ressourcen auf dem Server aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisations-APIs.

> [!NOTE]
> Laut der [Web Workers Spezifikation](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2) sollten Worker-Fehlerereignisse nicht nach oben durchgereicht werden (siehe [Firefox Fehler 1188141](https://bugzil.la/1188141)). Dies wurde in Firefox 42 implementiert.

### Worker globale Kontexte und Funktionen

Worker laufen in einem anderen globalen Kontext als das aktuelle [`window`](/de/docs/Web/API/Window)! Während [`Window`](/de/docs/Web/API/Window) nicht direkt für Worker verfügbar ist, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und für Worker durch ihre eigenen von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) abgeleiteten Kontexte verfügbar gemacht:

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für gemeinsame Worker
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [Service Worker](/de/docs/Web/API/Service_Worker_API)

Einige der Funktionen (eine Teilmenge), die allen Workern und dem Hauptthread gemeinsam sind (aus `WindowOrWorkerGlobalScope`), sind:

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
> Wenn eine aufgelistete API auf einer Plattform in einer bestimmten Version unterstützt wird, kann im Allgemeinen davon ausgegangen werden, dass sie in Webarbeitern verfügbar ist. Sie können die Unterstützung für ein bestimmtes Objekt/eine bestimmte Funktion auch unter <https://worker-playground.glitch.me/> testen.

Die folgenden Web-APIs sind für Worker verfügbar:

- [Background Fetch API](/de/docs/Web/API/Background_Fetch_API)
- [Background Synchronization API](/de/docs/Web/API/Background_Synchronization_API)
- [Barcode Detection API](/de/docs/Web/API/Barcode_Detection_API)
- [Broadcast Channel API](/de/docs/Web/API/Broadcast_Channel_API)
- [Canvas API](/de/docs/Web/API/Canvas_API)
- [Channel Messaging API](/de/docs/Web/API/Channel_Messaging_API)
- [Compression Streams API](/de/docs/Web/API/Compression_Streams_API)
- [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API)
- [Console API](/de/docs/Web/API/Console_API)
- [Content Index API](/de/docs/Web/API/Content_Index_API)
- [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) (nur für Service Worker)
- [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API)
- [Encoding API](/de/docs/Web/API/Encoding_API)
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
- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Server-Sent Events](/de/docs/Web/API/Server-Sent_Events)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
- [URL API](/de/docs/Web/API/URL_API)
- [URL Pattern API](/de/docs/Web/API/URL_Pattern_API)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API)
- [Web Locks API](/de/docs/Web/API/Web_Locks_API)
- [Web Serial API](/de/docs/Web/API/Web_Serial_API)
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [WebCodecs API](/de/docs/Web/API/WebCodecs_API)
- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebHID API](/de/docs/Web/API/WebHID_API) (nur für dedizierte und Service Worker)
- [WebUSB API](/de/docs/Web/API/WebUSB_API)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)

Worker können auch andere Worker erzeugen, daher sind diese APIs ebenfalls verfügbar:

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)

## Web Worker Schnittstellen

- [`Worker`](/de/docs/Web/API/Worker)
  - : Repräsentiert einen laufenden Worker-Thread und ermöglicht es Ihnen, Nachrichten an den laufenden Worker-Code zu übermitteln.
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
  - : Definiert den absoluten Standort des vom [`Worker`](/de/docs/Web/API/Worker) ausgeführten Skripts.
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
  - : Repräsentiert eine spezielle Art von Worker, auf die von mehreren {{Glossary("browsing_context", "Browsing-Kontexten")}} (d. h. Fenster, Tabs oder IFrames) oder sogar anderen Workern zugegriffen werden kann.
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
  - : Repräsentiert den generischen Gültigkeitsbereich eines jeden Workers (erfüllt die gleiche Funktion wie [`Window`](/de/docs/Web/API/Window) für normale Webinhalte). Unterschiedliche Arten von Workern haben Gültigkeitsbereichsobjekte, die von dieser Schnittstelle erben und spezifischere Funktionen hinzufügen.
- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
  - : Repräsentiert den Gültigkeitsbereich eines dedizierten Workers, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige dedizierte Funktionen hinzufügt.
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
  - : Repräsentiert den Gültigkeitsbereich eines gemeinsamen Workers, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige dedizierte Funktionen hinzufügt.
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
  - : Repräsentiert die Identität und den Zustand des User-Agents (des Clients).

## Beispiele

Wir haben einige Demos erstellt, um die Nutzung von Web Workern zu zeigen:

- [Einfaches Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Einfaches Beispiel für einen gemeinsamen Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([gemeinsamen Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [Beispiel für einen OffscreenCanvas Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

Weitere Informationen darüber, wie diese Demos funktionieren, finden Sie in [Using Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Using Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
