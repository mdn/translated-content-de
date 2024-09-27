---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: 8b6cec0ceff01e7a9d6865cf5306788e15cce4b8
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`WorkerGlobalScope`** Schnittstelle der [Web Workers API](/de/docs/Web/API/Web_Workers_API) ist eine Schnittstelle, die den Gültigkeitsbereich jedes Workers darstellt. Worker haben keinen Browsing-Kontext; dieser Gültigkeitsbereich enthält Informationen, die normalerweise durch [`Window`](/de/docs/Web/API/Window)-Objekte vermittelt werden — in diesem Fall Ereignis-Handler, die Konsole oder das zugeordnete [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt. Jeder `WorkerGlobalScope` hat seine eigene Ereignisschleife.

Diese Schnittstelle wird normalerweise von jedem Workertyp spezialisiert: [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Worker und [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [ServiceWorker](/de/docs/Web/API/Service_Worker_API). Die `self`-Eigenschaft gibt den spezialisierten Gültigkeitsbereich für jeden Kontext zurück.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`EventTarget`](/de/docs/Web/API/EventTarget) Schnittstelle._

- [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets zur Offline-Nutzung und das Generieren benutzerdefinierter Antworten auf Anfragen.
- [`console`](/de/docs/Web/API/Console) {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Gibt die [`console`](/de/docs/Web/API/Console) zurück, die mit dem Worker verbunden ist.
- [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der anzeigt, ob sich die Website in einem cross-origin Isolationzustand befindet.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verbunden ist.
- [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) {{ReadOnlyInline}}
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück, das mit dem Worker verbunden ist.
- [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit für Worker, asynchron auf die Fähigkeiten von indizierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) {{ReadOnlyInline}}
  - : Gibt das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück, das mit dem Worker verbunden ist. Es ist ein spezifisches Standortobjekt, meist ein Subset des [`Location`](/de/docs/Web/API/Location) für Browsing-Gültigkeitsbereiche, aber an Worker angepasst.
- [`WorkerGlobalScope.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) {{ReadOnlyInline}}
  - : Gibt den [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück, der mit dem Worker verbunden ist. Es ist ein spezifisches Navigatorobjekt, meist ein Subset des [`Navigator`](/de/docs/Web/API/Navigator) für Browsing-Gültigkeitsbereiche, aber an Worker angepasst.
- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts als Zeichenkette serialisiert zurück.
- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) {{ReadOnlyInline}}
  - : Gibt die [`Performance`](/de/docs/Web/API/Performance) zurück, die mit dem Worker verbunden ist. Nur ein Teil der Eigenschaften und Methoden der `Performance`-Schnittstelle ist für Worker verfügbar.
- [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dies ist der Einstiegspunkt zur Nutzung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verbunden ist, und bietet den Einstiegspunkt zur Nutzung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf den `WorkerGlobalScope` selbst zurück. Meistens handelt es sich um einen speziellen Gültigkeitsbereich wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von der [`EventTarget`](/de/docs/Web/API/EventTarget) Schnittstelle._

- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
  - : Dekodiert eine Zeichenkette von Daten, die mit Base-64-Kodierung kodiert wurden.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
  - : Erstellt eine Base-64-kodierte [ASCII](/de/docs/Glossary/ASCII)-Zeichenkette aus einer Zeichenkette von Binärdaten.
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/ClearInterval)
  - : Hebt die wiederholte Ausführung auf, die mit [`setInterval()`](/de/docs/Web/API/SetInterval) festgelegt wurde.
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/ClearTimeout)
  - : Hebt die verzögerte Ausführung auf, die mit [`setTimeout()`](/de/docs/Web/API/SetTimeout) festgelegt wurde.
- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/CreateImageBitmap)
  - : Akzeptiert eine Vielzahl verschiedener Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck der Pixel zugeschnitten, das bei _(sx, sy)_ mit der Breite sw und der Höhe sh beginnt.
- [`WorkerGlobalScope.dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht das Schreiben einer Nachricht in stdout — d.h. in Ihrem Terminal. Dies ist dasselbe wie das [`window.dump`](/de/docs/Web/API/Window/dump) von Firefox, jedoch für Worker.
- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
  - : Importiert ein oder mehrere Skripte in den Gültigkeitsbereich des Workers. Sie können beliebig viele angeben, getrennt durch Kommas. Zum Beispiel: `importScripts('foo.js', 'bar.js');`.
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
  - : Wartet eine Mikroaufgabe zur Ausführung zu einem sicheren Zeitpunkt, bevor die Steuerung an die Ereignisschleife des Browsers zurückkehrt.
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/SetInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn ein gegebener Zeitraum von Millisekunden vergeht.
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/SetTimeout)
  - : Plant die Ausführung einer Funktion nach einer gegebenen Zeitspanne.
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
  - : Erstellt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines gegebenen Werts unter Verwendung des [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
  - : Meldet einen Fehler in einem Skript und emuliert eine unbehandelte Ausnahme.

## Ereignisse

- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event)
  - : Wird ausgelöst, wenn ein Fehler aufgetreten ist.
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Wird im globalen/Worker-Gültigkeitsbereich-Objekt ausgelöst, wenn sich die bevorzugten Sprachen des Benutzers ändern.
- [`offline`](/de/docs/Web/API/WorkerGlobalScope/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verliert und der Wert von `navigator.onLine` auf `false` umschaltet.
- [`online`](/de/docs/Web/API/WorkerGlobalScope/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erhält und der Wert von `navigator.onLine` auf `true` umschaltet.
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
  - : Wird bei behandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.
- [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
  - : Wird bei unbehandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.

## Beispiel

Sie greifen nicht direkt in Ihrem Code auf `WorkerGlobalScope` zu; seine Eigenschaften und Methoden werden jedoch von spezifischeren globalen Gültigkeitsbereichen wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) geerbt. Zum Beispiel könnten Sie ein weiteres Skript in den Worker importieren und den Inhalt des `navigator`-Objekts des Worker-Gültigkeitsbereichs mit den folgenden zwei Zeilen ausgeben:

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> Da der globale Gültigkeitsbereich des Worker-Skripts im Grunde der globale Gültigkeitsbereich des von Ihnen ausgeführten Workers ist ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) oder ein anderer) und alle Worker-Gültigkeitsbereiche Methoden, Eigenschaften usw. von `WorkerGlobalScope` erben, können Sie Zeilen wie die oben genannten ausführen, ohne ein übergeordnetes Objekt anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere globale Objektschnittstellen: [`Window`](/de/docs/Web/API/Window), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- Andere worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
