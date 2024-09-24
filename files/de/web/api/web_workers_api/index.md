---
title: Web-Workers-API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen es, eine Skriptoperation in einem Hintergrund-Thread auszuführen, der getrennt vom Hauptausführungsthread einer Webanwendung läuft. Der Vorteil davon ist, dass aufwendige Prozesse in einem separaten Thread durchgeführt werden können, sodass der Hauptthread (normalerweise die Benutzeroberfläche) ohne Blockierung oder Verlangsamung weiterlaufen kann.

## Konzepte und Nutzung von Web Workers

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z. B. {{DOMxRef("Worker.Worker", "Worker()")}}) und eine benannte JavaScript-Datei ausführt — diese Datei enthält den Code, der im Worker-Thread ausgeführt wird.

Neben dem Standardfunktionsumfang von [JavaScript](/de/docs/Web/JavaScript) (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}} etc.) kann fast jeder beliebige Code innerhalb eines Worker-Threads ausgeführt werden. Es gibt einige Ausnahmen: zum Beispiel kann das DOM nicht direkt aus einem Worker heraus manipuliert werden, und einige Standardmethoden und -eigenschaften des {{domxref("Window")}}-Objekts können nicht verwendet werden. Informationen über den Code, den Sie _verwenden_ können, finden Sie unten unter [Worker-Global-Kontext und Funktionen](#worker-global-kontexte_und_funktionen) und [unterstützte Web-APIs](#unterstützte_web-apis).

Daten werden über ein Nachrichtensystem zwischen Workern und dem Hauptthread gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist in der `data`-Eigenschaft des {{domxref("Worker/message_event", "message")}}-Ereignisses enthalten). Die Daten werden kopiert, anstatt geteilt zu werden.

Worker können neue Worker erzeugen, solange diese Worker innerhalb desselben {{glossary("origin")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerkabfragen unter Verwendung der {{domxref("WorkerGlobalScope/fetch", "fetch()")}}- oder {{domxref("XMLHttpRequest")}}-APIs durchführen (beachten Sie jedoch, dass das {{domxref("XMLHttpRequest.responseXML", "responseXML")}}-Attribut von `XMLHttpRequest` immer `null` sein wird).

### Worker-Typen

Es gibt verschiedene Typen von Workern:

- {{domxref("Worker", "Dedizierte Worker", "", "nocode")}} sind Worker, die von einem einzigen Skript genutzt werden. Dieser Kontext wird durch ein {{DOMxRef("DedicatedWorkerGlobalScope")}}-Objekt repräsentiert.
- {{domxref("SharedWorker", "Geteilte Worker", "", "nocode")}} sind Worker, die von mehreren Skripten genutzt werden können, die in verschiedenen Fenstern, IFrames usw. laufen, solange sie sich im selben Domain wie der Worker befinden. Sie sind etwas komplexer als dedizierte Worker – Skripte müssen über einen aktiven Port kommunizieren.
- {{domxref("Service Worker API", "Service Worker", "", "nocode")}} agieren im Wesentlichen als Proxyserver, die zwischen Webanwendungen, dem Browser und dem Netzwerk (sofern verfügbar) sitzen. Sie sind dafür gedacht, unter anderem effektive Offline-Erlebnisse zu ermöglichen, Netzwerkabfragen abzufangen und je nach Verfügbarkeit des Netzwerks geeignete Maßnahmen zu ergreifen und Assets auf dem Server zu aktualisieren. Sie bieten auch Zugang zu Push-Benachrichtigungen und Hintergrundsynchronisierungs-APIs.

> [!NOTE]
> Laut der [Web Workers Spezifikation](https://html.spec.whatwg.org/multipage/workers.html#runtime-script-errors-2) sollten Worker-Fehlerereignisse nicht aufsteigen (siehe [Firefox Bug 1188141](https://bugzil.la/1188141)). Dies wurde in Firefox 42 implementiert.

### Worker-Global-Kontexte und Funktionen

Worker laufen in einem anderen globalen Kontext als das aktuelle {{DOMxRef("window")}}! Während {{domxref("Window")}} für Worker nicht direkt verfügbar ist, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und den Workern durch ihre eigenen von {{domxref("WorkerGlobalScope")}} abgeleiteten Kontexte verfügbar gemacht:

- {{domxref("DedicatedWorkerGlobalScope")}} für dedizierte Worker
- {{domxref("SharedWorkerGlobalScope")}} für geteilte Worker
- {{domxref("ServiceWorkerGlobalScope")}} für [Service Worker](/de/docs/Web/API/Service_Worker_API)

Einige der Funktionen (ein Teilmenge), die allen Workern und dem Hauptthread gemeinsam sind (aus `WindowOrWorkerGlobalScope`), sind:

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
- {{domxref("DedicatedWorkerGlobalScope.requestAnimationFrame()", "requestAnimationFrame()")}} (dedizierte Worker nur)
- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()", "cancelAnimationFrame()")}} (dedizierte Worker nur)

Die folgenden Funktionen sind **nur** in Workern verfügbar:

- {{domxref("WorkerGlobalScope.importScripts()", "importScripts()")}},
- {{domxref("DedicatedWorkerGlobalScope.postMessage()", "postMessage()")}} (dedizierte Worker nur).

### Unterstützte Web-APIs

> [!NOTE]
> Wenn eine aufgeführte API von einer Plattform in einer bestimmten Version unterstützt wird, kann grundsätzlich angenommen werden, dass sie in Web Workern verfügbar ist. Sie können auch die Unterstützung für ein bestimmtes Objekt/Funktion auf der Seite testen: <https://worker-playground.glitch.me/>

Die folgenden Web-APIs sind für Worker verfügbar:

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
- {{domxref("Media Source Extensions API", "", "", "nocode")}} (nur dedizierte Worker)
- {{domxref("Network Information API", "", "", "nocode")}}
- {{domxref("Notifications API", "", "", "nocode")}}
- {{domxref("Payment Handler API", "", "", "nocode")}}
- {{domxref("Performance API", "", "", "nocode")}}
- {{domxref("Permissions API", "", "", "nocode")}}
- {{domxref("Prioritized Task Scheduling API", "", "", "nocode")}}
- {{domxref("Push API", "", "", "nocode")}}
- {{domxref("Server-Sent Events", "", "", "nocode")}}
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

Worker können auch andere Worker erzeugen, daher sind diese APIs ebenfalls verfügbar:

- {{domxref("Worker")}}
- {{domxref("WorkerGlobalScope")}}
- {{domxref("WorkerLocation")}}
- {{domxref("WorkerNavigator")}}

## Web Worker-Schnittstellen

- {{DOMxRef("Worker")}}
  - : Repräsentiert einen laufenden Worker-Thread, der es Ihnen ermöglicht, Nachrichten an den laufenden Worker-Code zu senden.
- {{DOMxRef("WorkerLocation")}}
  - : Definiert den absoluten Standort des Skripts, das von dem {{domxref("Worker")}} ausgeführt wird.
- {{DOMxRef("SharedWorker")}}
  - : Repräsentiert eine spezielle Art von Worker, die von mehreren {{glossary("browsing context", "Browsingcontexts")}} (d.h. Fenster, Tabs oder IFrames) oder sogar anderen Workern zugänglich ist.
- {{DOMxRef("WorkerGlobalScope")}}
  - : Repräsentiert den allgemeinen Rahmen eines jeden Workers (der dasselbe tut wie {{DOMxRef("Window")}} für normale Web-Inhalte). Unterschiedliche Worker-Typen haben Rahmenobjekte, die von diesem Interface erben und spezifischere Funktionen hinzufügen.
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
  - : Repräsentiert den Rahmen eines dedizierten Workers, der von {{DOMxRef("WorkerGlobalScope")}} erbt und einige dedizierte Funktionen hinzufügt.
- {{DOMxRef("SharedWorkerGlobalScope")}}
  - : Repräsentiert den Rahmen eines geteilten Workers, der von {{DOMxRef("WorkerGlobalScope")}} erbt und einige spezifische Funktionen hinzufügt.
- {{DOMxRef("WorkerNavigator")}}
  - : Repräsentiert die Identität und den Zustand des User-Agents (des Clients).

## Beispiele

Wir haben ein paar Demos erstellt, um die Nutzung von Web Workern zu zeigen:

- [Einfaches Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Einfaches Beispiel für einen geteilten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [OffscreenCanvas-Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas-Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

Weitere Informationen darüber, wie diese Demos funktionieren, finden Sie unter [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- {{domxref("Worker")}} Schnittstelle
- {{domxref("SharedWorker")}} Schnittstelle
- {{domxref("Service Worker API", "", "", "nocode")}}
