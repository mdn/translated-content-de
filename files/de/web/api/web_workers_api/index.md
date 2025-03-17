---
title: Web Workers API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 407e167070e81eec6ca2231326242e3e354b9cd5
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen es, eine Skriptoperation in einem Hintergrund-Thread auszuführen, der vom Haupt-Execution-Thread einer Webanwendung getrennt ist. Der Vorteil hierbei ist, dass aufwendige Verarbeitung in einem separaten Thread durchgeführt werden kann, sodass der Haupt-Thread (gewöhnlich die Benutzeroberfläche) ohne Blockierung/Verlangsamung laufen kann.

## Konzepte und Nutzung

Ein Worker ist ein Objekt, das mit einem Konstruktor erstellt wird (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)), das eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread ausgeführt wird.

Zusätzlich zu den Standard-Funktionen von [JavaScript](/de/docs/Web/JavaScript) (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}} usw.) können Sie fast jeden gewünschten Code innerhalb eines Worker-Threads ausführen. Es gibt einige Ausnahmen: Zum Beispiel können Sie nicht direkt das DOM innerhalb eines Workers manipulieren oder einige Standardmethoden und -eigenschaften des [`Window`](/de/docs/Web/API/Window)-Objekts verwenden. Informationen über den Code, den Sie ausführen _können_, finden Sie unter [unterstützte Funktionen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#functions_available_in_workers) und [unterstützte Web-APIs](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).

Daten werden zwischen Workern und dem Haupt-Thread über ein Nachrichtensystem gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und antworten auf Nachrichten über den `onmessage`-Ereignishandler (die Nachricht ist innerhalb der `data`-Eigenschaft des [`message`](/de/docs/Web/API/Worker/message_event)-Ereignisses enthalten). Die Daten werden kopiert anstatt geteilt.

Worker können wiederum neue Worker erstellen, solange diese Worker innerhalb desselben {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet sind.

Darüber hinaus können Worker Netzwerkanfragen unter Verwendung der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)- oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-APIs stellen (obwohl zu beachten ist, dass das [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML)-Attribut von `XMLHttpRequest` immer `null` sein wird).

### Workertypen

Es gibt verschiedene Arten von Workern:

- [Dedizierte Worker](/de/docs/Web/API/Worker) sind Worker, die von einem einzelnen Skript genutzt werden. Dieser Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt repräsentiert.
- [Geteilte Worker](/de/docs/Web/API/SharedWorker) sind Worker, die von mehreren Skripten genutzt werden können, die in verschiedenen Fenstern, IFrames usw. laufen, solange sie sich in derselben Domain wie der Worker befinden. Sie sind etwas komplexer als dedizierte Worker – Skripte müssen über einen aktiven Port kommunizieren.
- [Service Worker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (falls verfügbar) sitzen. Sie sollen unter anderem die Erstellung effektiver Offline-Erfahrungen ermöglichen, Netzwerkanfragen abfangen und je nach Verfügbarkeit des Netzwerks entsprechende Maßnahmen ergreifen sowie Assets auf dem Server aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Hintergrund-Synchronisierungs-APIs.

### Worker-Kontexte

Obwohl [`Window`](/de/docs/Web/API/Window) Arbeitern nicht direkt zur Verfügung steht, sind viele der gleichen Methoden in einem gemeinsamen Mixin (`WindowOrWorkerGlobalScope`) definiert und Arbeitern durch ihre eigenen, von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) abgeleiteten Kontexte verfügbar gemacht:

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Worker
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [Service Worker](/de/docs/Web/API/Service_Worker_API)

## Schnittstellen

- [`Worker`](/de/docs/Web/API/Worker)
  - : Stellt einen laufenden Worker-Thread dar, der es Ihnen ermöglicht, Nachrichten an den laufenden Workercode zu senden.
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
  - : Definiert den absoluten Speicherort des vom [`Worker`](/de/docs/Web/API/Worker) ausgeführten Skripts.
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
  - : Stellt einen speziellen Typ von Worker dar, der von mehreren {{Glossary("browsing_context", "Browsing-Kontexten")}} (d.h. Fenstern, Tabs oder IFrames) oder sogar anderen Workern genutzt werden kann.
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
  - : Stellt den generischen Geltungsbereich eines jeden Workers dar (erfüllt die gleiche Rolle wie [`Window`](/de/docs/Web/API/Window) für normale Webinhalte). Verschiedene Workertypen haben Geltungsbereich-Objekte, die von diesem Interface erben und spezifischere Funktionen hinzufügen.
- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
  - : Stellt den Geltungsbereich eines dedizierten Workers dar, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige dedizierte Funktionen hinzufügt.
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
  - : Stellt den Geltungsbereich eines geteilten Workers dar, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige dedizierte Funktionen hinzufügt.
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
  - : Stellt die Identität und den Zustand des User-Agents (des Clients) dar.

## Beispiele

Wir haben ein paar Demos erstellt, um die Verwendung von Web Workern zu zeigen:

- [Grundlegendes Beispiel für einen dedizierten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Grundlegendes Beispiel für einen geteilten Worker](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [OffscreenCanvas Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

Weitere Informationen darüber, wie diese Demos funktionieren, finden Sie in [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker) Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker) Schnittstelle
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
