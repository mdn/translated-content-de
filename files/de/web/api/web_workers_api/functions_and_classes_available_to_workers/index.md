---
title: Funktionen und Klassen, die Webarbeitern zur Verfügung stehen
slug: Web/API/Web_Workers_API/Functions_and_classes_available_to_workers
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Workers API")}}

Zusätzlich zum standardmäßigen [JavaScript](/de/docs/Web/JavaScript)-Funktionsumfang (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}} usw.) stehen Arbeitern eine Vielzahl von Funktionen aus dem DOM zur Verfügung. Dieser Artikel bietet eine Liste dieser Funktionen.

## Arbeiterkontexte & Funktionen

**Arbeiter laufen in einem anderen globalen Kontext als das aktuelle Fenster!** Während {{domxref("Window")}} nicht direkt für Arbeiter verfügbar ist, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und werden Arbeitern durch ihre eigenen {{domxref("WorkerGlobalScope")}}-abgeleiteten Kontexte zur Verfügung gestellt:

- {{domxref("DedicatedWorkerGlobalScope")}} für dedizierte Arbeiter
- {{domxref("SharedWorkerGlobalScope")}} für geteilte Arbeiter
- {{domxref("ServiceWorkerGlobalScope")}} für [Service-Worker](/de/docs/Web/API/Service_Worker_API)

Einige der Funktionen (ein Teil), die allen Arbeitern und dem Haupt-Thread gemeinsam sind (aus `WindowOrWorkerGlobalScope`), sind:

- {{domxref("WorkerGlobalScope.atob()", "atob()")}}
- {{domxref("WorkerGlobalScope.btoa()", "btoa()")}}
- {{domxref("clearInterval()")}}
- {{domxref("clearTimeout()")}}
- {{domxref("createImageBitmap()")}}
- {{domxref("WorkerGlobalScope.dump()", "dump()")}} {{non-standard_inline}}
- {{domxref("WorkerGlobalScope/fetch", "fetch()")}}
- {{domxref("queueMicrotask()")}}
- {{domxref("reportError()")}}
- {{domxref("setInterval()")}}
- {{domxref("setTimeout()")}}
- {{domxref("structuredClone()")}}
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} (nur dedizierte Arbeiter)
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()", "cancelAnimationFrame()")}} (nur dedizierte Arbeiter)

Die folgenden Funktionen sind **nur** für Arbeiter verfügbar:

- {{domxref("WorkerGlobalScope.importScripts", "WorkerGlobalScope.importScripts()")}} (alle Arbeiter)
- {{domxref("DedicatedWorkerGlobalScope.postMessage")}} (nur dedizierte Arbeiter)

## In Arbeitern verfügbare Web-APIs

> [!NOTE]
> Wenn eine aufgeführte API von einer Plattform in einer bestimmten Version unterstützt wird, kann im Allgemeinen davon ausgegangen werden, dass sie in Webarbeitern verfügbar ist. Sie können die Unterstützung für ein bestimmtes Objekt/eine Funktion auch mit der Seite testen: <https://worker-playground.glitch.me/>

Die folgenden Web-APIs sind für Arbeiter verfügbar:

- {{domxref("Background Fetch API", "", "", "nocode")}}
- {{domxref("Background Synchronization API", "", "", "nocode")}}
- {{domxref("Barcode Detection API", "", "", "nocode")}}
- {{domxref("Broadcast Channel API", "", "", "nocode")}}
- {{domxref("Canvas API", "", "", "nocode")}}
- {{domxref("Channel Messaging API", "", "", "nocode")}}
- {{domxref("Console API", "", "", "nocode")}}
- {{domxref("Compression Streams API", "", "", "nocode")}}
- {{domxref("CSS Font Loading API", "", "", "nocode")}}
- {{domxref("CustomEvent")}}
- {{domxref("Encoding API", "", "", "nocode")}} (z.B. {{domxref("TextEncoder")}}, {{domxref("TextDecoder")}})
- {{domxref("Fetch API", "", "", "nocode")}}
- {{domxref("File API", "", "", "nocode")}}
- {{domxref("File System API", "", "", "nocode")}}
- {{domxref("Idle Detection API", "", "", "nocode")}}
- {{domxref("IndexedDB API", "", "", "nocode")}}
- {{domxref("Media Capabilities API", "", "", "nocode")}}
- {{domxref("Media Source Extensions API", "", "", "nocode")}} (nur dedizierte Arbeiter)
- {{domxref("Network Information API", "", "", "nocode")}}
- {{domxref("Notifications API", "", "", "nocode")}}
- {{domxref("Payment Handler API", "", "", "nocode")}}
- {{domxref("Performance API", "", "", "nocode")}}
- {{domxref("Permissions API", "", "", "nocode")}}
- {{domxref("Prioritized Task Scheduling API", "", "", "nocode")}}
- {{domxref("Push API", "", "", "nocode")}}
- {{domxref("Server-sent events", "", "", "nocode")}}
- {{domxref("Service Worker API", "", "", "nocode")}}
- {{domxref("Streams API", "", "", "nocode")}}
- {{domxref("Trusted Types API", "", "", "nocode")}}
- {{domxref("URL API", "", "", "nocode")}} (z.B. {{domxref("URL")}})
- {{domxref("URL Pattern API", "", "", "nocode")}}
- {{domxref("User-Agent Client Hints API", "", "", "nocode")}}
- {{domxref("WebCodecs API", "", "", "nocode")}}
- {{domxref("Web Crypto API", "", "", "nocode")}} (z.B. {{domxref("Crypto")}})
- {{domxref("Web Locks API", "", "", "nocode")}}
- {{domxref("Web Serial API", "", "", "nocode")}}
- {{domxref("Web Periodic Background Synchronization API", "", "", "nocode")}}
- {{domxref("WebGPU API", "", "", "nocode")}}
- {{domxref("WebUSB API", "", "", "nocode")}}
- {{domxref("WebSockets API", "", "", "nocode")}}
- {{domxref("XMLHttpRequest API", "", "", "nocode")}}

Arbeiter können auch andere Arbeiter starten, daher sind diese APIs ebenfalls verfügbar:

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("WorkerLocation")}}
- {{domxref("WorkerNavigator")}}

## Siehe auch

- [Verwendung von Webworkern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}}
