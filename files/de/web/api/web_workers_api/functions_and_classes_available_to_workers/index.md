---
title: Funktionen und Klassen, die Web-Workern zur Verfügung stehen
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{DefaultAPISidebar("Web Workers API")}}

Zusätzlich zum Standard-Funktionssatz von [JavaScript](/de/docs/Web/JavaScript) (wie z. B. {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}}, etc.) gibt es eine Vielzahl von Funktionen, die Workern vom DOM zur Verfügung stehen. Dieser Artikel bietet eine Liste dieser Funktionen.

## Worker-Kontexte und Funktionen

**Worker laufen in einem anderen globalen Kontext als das aktuelle Fenster!** Während [`Window`](/de/docs/Web/API/Window) nicht direkt Workern zur Verfügung steht, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und werden Workern durch ihre eigenen von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) abgeleiteten Kontexte zur Verfügung gestellt:

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für gemeinsame Worker
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [Service Worker](/de/docs/Web/API/Service_Worker_API)

Einige der Funktionen (ein Teil davon), die allen Workern und dem Haupt-Thread gemeinsam sind (aus `WindowOrWorkerGlobalScope`), sind:

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
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) (nur dedizierte Worker)
- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) (nur dedizierte Worker)

Die folgenden Funktionen sind **nur** für Worker verfügbar:

- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) (alle Worker)
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) (nur dedizierte Worker)

## Im Web verfügbare APIs in Workern

> [!NOTE]
> Wenn eine aufgeführte API von einer Plattform in einer bestimmten Version unterstützt wird, kann allgemein angenommen werden, dass sie in Web-Workern verfügbar ist. Sie können die Unterstützung für ein bestimmtes Objekt/Funktion auch über die Website testen: <https://worker-playground.glitch.me/>

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
- [Encoding API](/de/docs/Web/API/Encoding_API) (z. B. [`TextEncoder`](/de/docs/Web/API/TextEncoder), [`TextDecoder`](/de/docs/Web/API/TextDecoder))
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
- [Server-sent events](/de/docs/Web/API/Server-sent_events)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [Trusted Types API](/de/docs/Web/API/Trusted_Types_API)
- [URL API](/de/docs/Web/API/URL_API) (z. B. [`URL`](/de/docs/Web/API/URL))
- [URL Pattern API](/de/docs/Web/API/URL_Pattern_API)
- [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API)
- [WebCodecs API](/de/docs/Web/API/WebCodecs_API)
- [Web Crypto API](/de/docs/Web/API/Web_Crypto_API) (z. B. [`Crypto`](/de/docs/Web/API/Crypto))
- [WebHID API](/de/docs/Web/API/WebHID_API) (nur dedizierte und Service Worker)
- [Web Locks API](/de/docs/Web/API/Web_Locks_API)
- [Web Serial API](/de/docs/Web/API/Web_Serial_API)
- [Web Periodic Background Synchronization API](/de/docs/Web/API/Web_Periodic_Background_Synchronization_API)
- [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebUSB API](/de/docs/Web/API/WebUSB_API)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)

Worker können auch andere Worker generieren, sodass diese APIs ebenfalls verfügbar sind:

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)

## Siehe auch

- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker)
