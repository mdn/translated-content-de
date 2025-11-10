---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`WorkerGlobalScope`**-Interface der [Web Workers API](/de/docs/Web/API/Web_Workers_API) ist ein Interface, das den Gültigkeitsbereich eines jeden Workers darstellt. Arbeiter haben keinen Browsing-Kontext; dieser Gültigkeitsbereich enthält die Informationen, die normalerweise durch [`Window`](/de/docs/Web/API/Window)-Objekte vermittelt werden — in diesem Fall Ereignishandler, die Konsole oder das zugeordnete [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt. Jedes `WorkerGlobalScope` hat seine eigene Ereignisschleife.

Dieses Interface ist normalerweise auf den jeweiligen Worker-Typ spezialisiert: [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Arbeiter, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Arbeiter und [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [ServiceWorker](/de/docs/Web/API/Service_Worker_API). Die `self`-Eigenschaft gibt den spezialisierten Bereich für jeden Kontext zurück.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das dem aktuellen Kontext zugeordnet ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Assets für die Offline-Nutzung und das Erstellen benutzerdefinierter Antworten auf Anfragen.
- [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Website sich in einem Cross-Origin-Isolationszustand befindet.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verbunden ist.
- [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) {{ReadOnlyInline}}
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück, das mit dem Worker verbunden ist.
- [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) {{ReadOnlyInline}}
  - : Bietet einen Mechanismus für Arbeiter, um asynchron auf Funktionen von indizierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) oder nicht (`false`) ist.
- [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) {{ReadOnlyInline}}
  - : Gibt das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück, das mit dem Worker verbunden ist. Es handelt sich um ein spezielles Location-Objekt, meist um eine Untermenge des [`Location`](/de/docs/Web/API/Location) für Browsing-Bereiche, jedoch an Worker angepasst.
- [`WorkerGlobalScope.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) {{ReadOnlyInline}}
  - : Gibt den [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück, der dem Worker zugeordnet ist. Es handelt sich um ein spezielles Navigator-Objekt, meist eine Untermenge des [`Navigator`](/de/docs/Web/API/Navigator) für Browsing-Bereiche, jedoch an Worker angepasst.
- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, serialisiert als Zeichenkette.
- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) {{ReadOnlyInline}}
  - : Gibt die [`Performance`](/de/docs/Web/API/Performance) zurück, die mit dem Worker verbunden ist. Nur eine Untermenge der Eigenschaften und Methoden des `Performance`-Interfaces sind für Worker verfügbar.
- [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dies ist der Einstiegspunkt für die Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verbunden ist und den Einstiegspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das `WorkerGlobalScope` selbst zurück. Meistens ist es ein spezifischer Gültigkeitsbereich wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Instanz-Methoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
  - : Dekodiert eine Datenzeichenkette, die mit Base-64-Kodierung kodiert wurde.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
  - : Erstellt eine Base-64-kodierte {{Glossary("ASCII", "ASCII")}}-Zeichenkette aus einer Zeichenkette von Binärdaten.
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
  - : Hebt die wiederholte Ausführung auf, die mit [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) festgelegt wurde.
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
  - : Hebt die verzögerte Ausführung auf, die mit [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) festgelegt wurde.
- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
  - : Akzeptiert verschiedene Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das in einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck der Pixel beschnitten, das am Punkt _(sx, sy)_ beginnt und die Breite sw und Höhe sh hat.
- [`WorkerGlobalScope.dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht das Schreiben einer Nachricht auf stdout, das heißt, in Ihrem Terminal. Dies entspricht dem Firefox-`window.dump` für Worker.
- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
  - : Importiert ein oder mehrere Skripte in den Gültigkeitsbereich des Workers. Sie können beliebig viele angeben, durch Kommas getrennt. Zum Beispiel: `importScripts('foo.js', 'bar.js');`.
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
  - : Stellt eine Mikroaufgabe in die Warteschlange, die zu einem sicheren Zeitpunkt ausgeführt werden soll, bevor die Kontrolle an die Ereignisschleife des Browsers zurückgegeben wird.
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine angegebene Anzahl von Millisekunden vergeht.
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
  - : Plant die Ausführung einer Funktion zu einem bestimmten Zeitpunkt in der Zukunft.
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Werts unter Verwendung des [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
  - : Meldet einen Fehler in einem Skript und emuliert eine unbehandelte Ausnahme.

## Ereignisse

- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt.
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Wird am globalen/Worker-Bereichsobjekt ausgelöst, wenn sich die bevorzugten Sprachen des Benutzers ändern.
- [`offline`](/de/docs/Web/API/WorkerGlobalScope/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verliert und der Wert von `navigator.onLine` auf `false` wechselt.
- [`online`](/de/docs/Web/API/WorkerGlobalScope/online_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk wiedererlangt und der Wert von `navigator.onLine` auf `true` wechselt.
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
  - : Wird bei behandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.
- [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
  - : Wird bei unbehandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.

## Beispiel

Sie werden nicht direkt auf `WorkerGlobalScope` in Ihrem Code zugreifen; seine Eigenschaften und Methoden werden jedoch von spezifischeren globalen Gültigkeitsbereichen wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) geerbt. Zum Beispiel könnten Sie ein weiteres Skript in den Worker importieren und den Inhalt des `navigator`-Objekts des Worker-Gültigkeitsbereichs mit den folgenden zwei Zeilen ausdrucken:

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> Da der globale Gültigkeitsbereich des Worker-Skripts effektiv der globale Gültigkeitsbereich des Workers ist, den Sie ausführen ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) oder was auch immer) und alle Worker-Gültigkeitsbereiche Methoden, Eigenschaften usw. vom `WorkerGlobalScope` erben, können Sie Zeilen wie die oben genannten ausführen, ohne ein übergeordnetes Objekt anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Anderes globales Objekt-Interface: [`Window`](/de/docs/Web/API/Window), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- Andere Worker-bezogene Interfaces: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [Verwendung von Web-Arbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
