---
title: Web Workers API
slug: Web/API/Web_Workers_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Web Workers API")}}

**Web Workers** ermöglichen es, einen Skriptvorgang in einem Hintergrund-Thread auszuführen, der vom Hauptausführungsthread einer Webanwendung getrennt ist. Der Vorteil dabei ist, dass aufwändige Verarbeitungen in einem separaten Thread durchgeführt werden können, wodurch der Hauptthread (in der Regel die Benutzeroberfläche) ohne Blockierungen oder Verlangsamungen weiterlaufen kann.

## Konzepte und Nutzung

Ein Worker ist ein Objekt, das mit einem Konstruktor (z. B. [`Worker()`](/de/docs/Web/API/Worker/Worker)) erstellt wird und eine benannte JavaScript-Datei ausführt – diese Datei enthält den Code, der im Worker-Thread läuft.

Zusätzlich zu den Standardfunktionen von [JavaScript](/de/docs/Web/JavaScript) (wie {{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("Object")}}, {{jsxref("JSON")}} usw.) kann fast jeder Code, den Sie möchten, in einem Worker-Thread ausgeführt werden. Es gibt einige Ausnahmen: Beispielsweise kann man das DOM nicht direkt von einem Worker aus manipulieren oder einige Standardmethoden und -eigenschaften des [`Window`](/de/docs/Web/API/Window)-Objekts verwenden. Informationen über den Code, den Sie _ausführen können_, finden Sie unter [unterstützte Funktionen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#functions_available_in_workers) und [unterstützte Web-APIs](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).

Daten werden über ein Nachrichtensystem zwischen Workern und dem Hauptthread gesendet – beide Seiten senden ihre Nachrichten mit der `postMessage()`-Methode und reagieren auf Nachrichten über den `onmessage`-Event-Handler (die Nachricht ist in der `data`-Eigenschaft des [`message`](/de/docs/Web/API/Worker/message_event)-Events enthalten). Die Daten werden dabei kopiert und nicht geteilt.

Arbeitsprozesse können wiederum neue Worker erzeugen, solange diese Worker innerhalb des gleichen {{Glossary("origin", "Ursprungs")}} wie die übergeordnete Seite gehostet werden.

Zusätzlich können Worker Netzwerkanfragen mit den APIs [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) oder [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) machen (obwohl zu beachten ist, dass das Attribut [`responseXML`](/de/docs/Web/API/XMLHttpRequest/responseXML) von `XMLHttpRequest` immer `null` sein wird).

### Worker-Typen

Es gibt verschiedene Arten von Workern:

- [Dedizierte Worker](/de/docs/Web/API/Worker) sind Worker, die von einem einzigen Skript genutzt werden. Dieser Kontext wird durch ein [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Objekt dargestellt.
- [Geteilte Worker](/de/docs/Web/API/SharedWorker) sind Worker, die von mehreren Skripten verwendet werden können, die in verschiedenen Fenstern, IFrames usw. ausgeführt werden, solange sie sich im selben Domain wie der Worker befinden. Sie sind etwas komplexer als dedizierte Worker – Skripte müssen über einen aktiven Port kommunizieren.
- [Service Worker](/de/docs/Web/API/Service_Worker_API) fungieren im Wesentlichen als Proxy-Server, die zwischen Webanwendungen, dem Browser und dem Netzwerk (wenn verfügbar) sitzen. Sie sind unter anderem dazu gedacht, effektive Offline-Erfahrungen zu schaffen, Netzwerkanfragen abzufangen und basierend darauf, ob das Netzwerk verfügbar ist, angemessene Maßnahmen zu ergreifen und auf dem Server befindliche Ressourcen zu aktualisieren. Sie ermöglichen auch den Zugriff auf Push-Benachrichtigungen und Background-Sync-APIs.

### Worker-Kontexte

Während [`Window`](/de/docs/Web/API/Window) für Worker nicht direkt verfügbar ist, sind viele der gleichen Methoden in einem geteilten Mix-In (`WindowOrWorkerGlobalScope`) definiert und durch ihre eigenen von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) abgeleiteten Kontexte für Worker verfügbar gemacht:

- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Worker
- [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [Service Worker](/de/docs/Web/API/Service_Worker_API)

## Schnittstellen

- [`Worker`](/de/docs/Web/API/Worker)
  - : Stellt einen laufenden Worker-Thread dar, mit dem Sie Nachrichten an den laufenden Worker-Code senden können.
- [`WorkerLocation`](/de/docs/Web/API/WorkerLocation)
  - : Definiert die absolute Position des von dem [`Worker`](/de/docs/Web/API/Worker) ausgeführten Skripts.
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)
  - : Repräsentiert eine spezielle Art von Worker, die von mehreren {{Glossary("browsing_context", "Browsing-Kontexten")}} (d.h. Fenstern, Tabs oder IFrames) oder sogar anderen Workern aus zugänglich ist.
- [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)
  - : Stellt den generischen Umfang eines jeden Workers dar (erfüllt die gleiche Aufgabe wie [`Window`](/de/docs/Web/API/Window) für normale Webinhalte). Verschiedene Arten von Workern haben Bereichsobjekte, die von dieser Schnittstelle erben und spezifischere Funktionen hinzufügen.
- [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)
  - : Repräsentiert den Bereich eines dedizierten Workers, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige spezielle Funktionen hinzufügt.
- [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope)
  - : Repräsentiert den Bereich eines geteilten Workers, der von [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) erbt und einige spezielle Funktionen hinzufügt.
- [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
  - : Repräsentiert die Identität und den Zustand des User Agents (des Clients).

## Beispiele

Wir haben einige Demos erstellt, um die Nutzung von Web Workern zu zeigen:

- [Einfaches Beispiel eines dedizierten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-web-worker) ([dedizierten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-web-worker/)).
- [Einfaches Beispiel eines geteilten Workers](https://github.com/mdn/dom-examples/tree/main/web-workers/simple-shared-worker) ([geteilten Worker ausführen](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).
- [OffscreenCanvas Worker-Beispiel](https://github.com/mdn/dom-examples/tree/main/web-workers/offscreen-canvas-worker) ([OffscreenCanvas Worker ausführen](https://mdn.github.io/dom-examples/web-workers/offscreen-canvas-worker/)).

Weitere Informationen darüber, wie diese Demos funktionieren, finden Sie unter [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers).

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [`Worker`](/de/docs/Web/API/Worker)-Schnittstelle
- [`SharedWorker`](/de/docs/Web/API/SharedWorker)-Schnittstelle
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
