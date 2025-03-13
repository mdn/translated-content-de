---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`WorkerGlobalScope`**-Interface der [Web Workers API](/de/docs/Web/API/Web_Workers_API) ist ein Interface, das den Geltungsbereich eines jeden Workers darstellt. Workers haben keinen Browsing-Kontext; dieser Geltungsbereich enthält die Informationen, die normalerweise von [`Window`](/de/docs/Web/API/Window)-Objekten vermittelt werden – in diesem Fall Event-Handler, die Konsole oder das zugehörige [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt. Jedes `WorkerGlobalScope` hat seine eigene Ereignisschleife.

Dieses Interface wird normalerweise von jedem Workertyp spezialisiert: [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für gemeinsame Worker und [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [ServiceWorker](/de/docs/Web/API/Service_Worker_API). Die `self`-Eigenschaft gibt den spezialisierten Geltungsbereich für jeden Kontext zurück.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Nutzung und das Erstellen benutzerdefinierter Antworten auf Anfragen.
- [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob sich die Website in einem Cross-Origin-Isolationszustand befindet.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verknüpft ist.
- [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) {{ReadOnlyInline}}
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück, das mit dem Worker verknüpft ist.
- [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) {{ReadOnlyInline}}
  - : Bietet einen Mechanismus für Worker, um asynchron auf Fähigkeiten von indizierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der anzeigt, ob der aktuelle Kontext sicher (`true`) oder nicht (`false`) ist.
- [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) {{ReadOnlyInline}}
  - : Gibt die [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück, die mit dem Worker verknüpft ist. Es handelt sich um ein spezifisches Standortobjekt, das größtenteils ein Teil des [`Location`](/de/docs/Web/API/Location) für Browsing-Bereiche ist, jedoch an Worker angepasst ist.
- [`WorkerGlobalScope.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) {{ReadOnlyInline}}
  - : Gibt den [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück, der mit dem Worker verknüpft ist. Es handelt sich um ein spezifisches Navigator-Objekt, das größtenteils ein Teil des [`Navigator`](/de/docs/Web/API/Navigator) für Browsing-Bereiche ist, jedoch an Worker angepasst ist.
- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts zurück, serialisiert als Zeichenkette.
- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) {{ReadOnlyInline}}
  - : Gibt das [`Performance`](/de/docs/Web/API/Performance) zurück, das mit dem Worker verknüpft ist. Nur ein Teil der `Performance`-Eigenschaften und -Methoden sind für Worker verfügbar.
- [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Einstiegspunkt zur Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verknüpft ist, und bietet den Einstiegspunkt zur Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das `WorkerGlobalScope` selbst zurück. Meistens handelt es sich um einen spezifischen Geltungsbereich wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Instanzmethoden

_Dieses Interface erbt Methoden von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
  - : Decodiert einen Datenstring, der mit Base-64-Codierung codiert wurde.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
  - : Erstellt einen Base-64-codierten {{Glossary("ASCII", "ASCII")}}-String aus einem String von Binärdaten.
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
  - : Bricht die wiederholte Ausführung ab, die mit [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) festgelegt wurde.
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
  - : Bricht die verzögerte Ausführung ab, die mit [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) festgelegt wurde.
- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
  - : Nimmt eine Vielzahl von unterschiedlichen Bildquellen an und gibt ein {{jsxref("Promise")}} zurück, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck von Pixeln zugeschnitten, das bei _(sx, sy)_ mit der Breite sw und der Höhe sh beginnt.
- [`WorkerGlobalScope.dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht es Ihnen, eine Nachricht an stdout zu schreiben – d.h. in Ihr Terminal. Dies ist dasselbe wie der [`window.dump`](/de/docs/Web/API/Window/dump) von Firefox, jedoch für Worker.
- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
  - : Importiert eines oder mehrere Skripte in den Geltungsbereich des Workers. Sie können so viele angeben, wie Sie möchten, getrennt durch Kommas. Zum Beispiel: `importScripts('foo.js', 'bar.js');`.
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
  - : Reiht eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle an die Ereignisschleife des Browsers ausgeführt wird.
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine bestimmte Anzahl von Millisekunden verstrichen ist.
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
  - : Plant die Ausführung einer Funktion nach einer bestimmten Zeitspanne.
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Wertes mit dem [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
  - : Meldet einen Fehler in einem Skript und emuliert eine unbehandelte Ausnahme.

## Ereignisse

- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt.
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Wird im globalen/Worker-Geltungsbereichsobjekt ausgelöst, wenn sich die bevorzugten Sprachen des Benutzers ändern.
- [`offline`](/de/docs/Web/API/WorkerGlobalScope/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` wechselt.
- [`online`](/de/docs/Web/API/WorkerGlobalScope/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erlangt hat und der Wert von `navigator.onLine` auf `true` wechselt.
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
  - : Wird bei behandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.
- [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/Guides/CSP) verletzt wird.
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
  - : Wird bei unbehandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.

## Beispiel

Sie werden auf `WorkerGlobalScope` nicht direkt in Ihrem Code zugreifen; jedoch werden seine Eigenschaften und Methoden von spezifischeren globalen Bereichen wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) geerbt. Beispielsweise könnten Sie ein weiteres Skript in den Worker importieren und die Inhalte des `navigator`-Objekts des Workers mit den folgenden zwei Zeilen ausdrucken:

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> Da der globale Geltungsbereich des Worker-Skripts effektiv der globale Geltungsbereich des von Ihnen ausgeführten Workers ist ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) oder ein anderer) und alle globalen Worker-Geltungsbereiche Methoden, Eigenschaften usw. von `WorkerGlobalScope` erben, können Sie Zeilen wie die oben stehenden ausführen, ohne ein übergeordnetes Objekt anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere globale Objektschnittstellen: [`Window`](/de/docs/Web/API/Window), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- Andere Worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
