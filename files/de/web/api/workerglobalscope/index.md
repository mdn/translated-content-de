---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: 3429ce2f34bd358f413aabece0ce8871d8c7cb9d
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`WorkerGlobalScope`**-Schnittstelle der [Web Workers API](/de/docs/Web/API/Web_Workers_API) repräsentiert den Gültigkeitsbereich jedes Workers. Worker verfügen über keinen Browsing-Kontext; dieser Gültigkeitsbereich enthält die Informationen, die normalerweise durch [`Window`](/de/docs/Web/API/Window)-Objekte vermittelt werden – in diesem Fall Ereignis-Handler, die Konsole oder das zugehörige [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt. Jeder `WorkerGlobalScope` verfügt über seine eigene Ereignisschleife.

Diese Schnittstelle wird üblicherweise von jedem Workertyp spezialisiert: [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Worker und [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [ServiceWorker](/de/docs/Web/API/Service_Worker_API). Die Eigenschaft `self` gibt den spezialisierten Gültigkeitsbereich für jeden Kontext zurück.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Verwendung und das Generieren benutzerdefinierter Antworten auf Anfragen.
- [`console`](/de/docs/Web/API/Console) {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Gibt die [`console`](/de/docs/Web/API/Console) zurück, die mit dem Worker verknüpft ist.
- [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob sich die Website in einem "Cross-Origin"-Isolationszustand befindet.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verknüpft ist.
- [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) {{ReadOnlyInline}}
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück, das mit dem Worker verknüpft ist.
- [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) {{ReadOnlyInline}}
  - : Ermöglicht es Workern, asynchron auf Funktionen von indexierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) oder unsicher (`false`) ist.
- [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) {{ReadOnlyInline}}
  - : Gibt das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück, das mit dem Worker verknüpft ist. Es handelt sich um ein spezifisches Location-Objekt, das größtenteils eine Teilmenge des [`Location`](/de/docs/Web/API/Location) für Browsing-Kontexte darstellt, jedoch an Worker angepasst ist.
- [`WorkerGlobalScope.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) {{ReadOnlyInline}}
  - : Gibt das [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück, das mit dem Worker verknüpft ist. Es handelt sich um ein spezifisches Navigator-Objekt, das größtenteils eine Teilmenge des [`Navigator`](/de/docs/Web/API/Navigator) für Browsing-Kontexte darstellt, jedoch an Worker angepasst ist.
- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts als Zeichenfolge zurück.
- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) {{ReadOnlyInline}}
  - : Gibt die [`Performance`](/de/docs/Web/API/Performance) zurück, die mit dem Worker verknüpft ist. Nur eine Teilmenge der Eigenschaften und Methoden der `Performance`-Schnittstelle steht Workern zur Verfügung.
- [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Einstiegspunkt für die Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verknüpft ist, und bietet den Einstiegspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API).
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf den `WorkerGlobalScope` selbst zurück. Meistens handelt es sich um einen spezifischen Gültigkeitsbereich wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Instanzmethoden

_Diese Schnittstelle erbt Methoden von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
  - : Dekodiert einen Datenstring, der mit der Base-64-Codierung kodiert wurde.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
  - : Erstellt einen Base-64-kodierten {{Glossary("ASCII", "ASCII")}}-String aus einem String mit Binärdaten.
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
  - : Hebt die wiederholte Ausführung auf, die mit [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) festgelegt wurde.
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
  - : Hebt die verzögerte Ausführung auf, die mit [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) festgelegt wurde.
- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
  - : Akzeptiert verschiedene Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich in ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) auflöst. Optional wird die Quelle auf das Rechteck der Pixel zugeschnitten, das bei _(sx, sy)_ beginnt und eine Breite von sw sowie eine Höhe von sh hat.
- [`WorkerGlobalScope.dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht es Ihnen, eine Nachricht an stdout (z.B. in Ihrem Terminal) zu schreiben. Dies entspricht dem [`window.dump`](/de/docs/Web/API/Window/dump) von Firefox, jedoch für Worker.
- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Startet den Prozess, eine Ressource aus dem Netzwerk abzurufen.
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
  - : Importiert ein oder mehrere Skripte in den Gültigkeitsbereich des Workers. Es können beliebig viele angegeben werden, getrennt durch Kommas. Beispiel: `importScripts('foo.js', 'bar.js');`.
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
  - : Wartet eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle zur Ereignisschleife des Browsers ausgeführt wird.
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
  - : Plant die Ausführung einer Funktion in regelmäßigen Abständen ein.
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
  - : Plant die Ausführung einer Funktion nach Ablauf einer bestimmten Zeitspanne ein.
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie (deep clone)")}} eines gegebenen Werts mithilfe des [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
  - : Berichtet über einen Fehler in einem Skript, indem ein unbehandelter Ausnahmefall simuliert wird.

## Ereignisse

- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt.
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Wird ausgelöst, wenn sich die bevorzugten Sprachen des Nutzers ändern.
- [`offline`](/de/docs/Web/API/WorkerGlobalScope/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verliert und der Wert von `navigator.onLine` auf `false` wechselt.
- [`online`](/de/docs/Web/API/WorkerGlobalScope/online_event)
  - : Wird ausgelöst, wenn der Browser Zugriff auf das Netzwerk erhält und der Wert von `navigator.onLine` auf `true` wechselt.
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
  - : Wird bei behandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.
- [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
  - : Wird bei nicht behandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.

## Beispiel

Sie greifen nicht direkt auf `WorkerGlobalScope` in Ihrem Code zu; dessen Eigenschaften und Methoden werden jedoch von spezifischeren globalen Gültigkeitsbereichen wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) übernommen. Zum Beispiel könnten Sie ein weiteres Skript in den Worker importieren und den Inhalt des `navigator`-Objekts des Worker-Bereichs mit den folgenden zwei Zeilen ausgeben:

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> Da der globale Gültigkeitsbereich des Worker-Skripts effektiv der globale Gültigkeitsbereich des aktuellen Workers ist ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) oder ein anderer) und alle Worker-Gültigkeitsbereiche Methoden, Eigenschaften usw. von `WorkerGlobalScope` erben, können Sie ähnliche Zeilen wie die obigen ausführen, ohne ein übergeordnetes Objekt anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Schnittstellen für globale Objekte: [`Window`](/de/docs/Web/API/Window), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- Andere Worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
