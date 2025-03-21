---
title: Funktionen und Klassen, die Web-Workern zur Verfügung stehen
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
l10n:
  sourceCommit: 407e167070e81eec6ca2231326242e3e354b9cd5
---

{{DefaultAPISidebar("Web Workers API")}}

Zusätzlich zu dem standardmäßigen Satz von [JavaScript](/de/docs/Web/JavaScript)-Funktionen (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}} usw.) gibt es eine Vielzahl von Funktionen (und APIs), die in Workern verfügbar sind. Dieser Artikel bietet eine Liste dieser Funktionen.

## Funktionen, die in Workern verfügbar sind

Die folgenden Funktionen stehen Workern zur Verfügung:

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
- [`DedicatedWorkerGlobalScope.postMessage()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/postMessage) (nur dedizierte Worker)
- [`DedicatedWorkerGlobalScope.requestAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame) (nur dedizierte Worker)
- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) (nur dedizierte Worker)

Die folgenden Funktionen sind **nur** in Workern verfügbar:

- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)

## Web-APIs, die in Workern verfügbar sind

> [!NOTE]
> Wenn eine gelistete API von einer Plattform in einer bestimmten Version unterstützt wird, kann generell angenommen werden, dass sie in Web-Workern verfügbar ist. Sie können die Unterstützung für ein bestimmtes Objekt/Funktion auch mit der Seite testen: <https://worker-playground.glitch.me/>

Die folgenden Web-APIs sind in Workern verfügbar:

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
- [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) (nur Service Worker)
- [CSS Font Loading API](/de/docs/Web/API/CSS_Font_Loading_API)
- [Encoding API](/de/docs/Web/API/Encoding_API)
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
- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
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
- [WebHID API](/de/docs/Web/API/WebHID_API) (nur dedizierte und Service Worker)
- [WebUSB API](/de/docs/Web/API/WebUSB_API)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)

Worker können auch andere Worker erstellen, sodass diese APIs ebenfalls verfügbar sind:

- [`Worker`](/de/docs/Web/API/Worker)
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker)
