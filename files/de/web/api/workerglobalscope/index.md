---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`WorkerGlobalScope`** Schnittstelle der [Web Workers API](/de/docs/Web/API/Web_Workers_API) ist eine Schnittstelle, die den Geltungsbereich eines jeden Workers darstellt. Worker haben keinen Browserkontext; dieser Bereich enthält die Informationen, die normalerweise von {{domxref("Window")}}-Objekten vermittelt würden — in diesem Fall Ereignis-Handler, die Konsole oder das zugehörige {{domxref("WorkerNavigator")}}-Objekt. Jeder `WorkerGlobalScope` hat seine eigene Ereignisschleife.

Diese Schnittstelle wird in der Regel von jedem Worker-Typ spezialisiert: {{domxref("DedicatedWorkerGlobalScope")}} für dedizierte Worker, {{domxref("SharedWorkerGlobalScope")}} für gemeinsame Worker und {{domxref("ServiceWorkerGlobalScope")}} für [ServiceWorker](/de/docs/Web/API/Service_Worker_API). Die `self`-Eigenschaft gibt den spezialisierten Geltungsbereich für jeden Kontext zurück.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der {{domxref("EventTarget")}}-Schnittstelle._

- {{domxref("WorkerGlobalScope.caches")}} {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das {{domxref("CacheStorage")}}-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Nutzung und das Generieren benutzerdefinierter Antworten auf Anfragen.
- {{domxref("console")}} {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Gibt die mit dem Worker verbundene {{domxref("console")}} zurück.
- {{domxref("WorkerGlobalScope.crossOriginIsolated")}} {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Website in einem Cross-Origin-Isolationszustand ist.
- {{domxref("WorkerGlobalScope.crypto")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("Crypto")}}-Objekt zurück, das mit dem globalen Objekt verbunden ist.
- {{domxref("WorkerGlobalScope.fonts")}} {{ReadOnlyInline}}
  - : Gibt die mit dem Worker verbundene {{domxref("FontFaceSet")}} zurück.
- {{domxref("WorkerGlobalScope.indexedDB")}} {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit für Worker, asynchron auf Kapazitäten von indizierten Datenbanken zuzugreifen; gibt ein {{domxref("IDBFactory")}} Objekt zurück.
- {{domxref("WorkerGlobalScope.isSecureContext")}} {{ReadOnlyInline}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher (`true`) ist oder nicht (`false`).
- {{domxref("WorkerGlobalScope.location")}} {{ReadOnlyInline}}
  - : Gibt die mit dem Worker verbundene {{domxref("WorkerLocation")}} zurück. Es handelt sich um ein spezifisches Ortsobjekt, das größtenteils ein Untermenge des {{domxref("Location")}} für Browsing-Kontexte ist, aber an Worker angepasst wurde.
- {{domxref("WorkerGlobalScope.navigator")}} {{ReadOnlyInline}}
  - : Gibt den mit dem Worker verbundenen {{domxref("WorkerNavigator")}} zurück. Es handelt sich um ein spezifisches Navigatorobjekt, das größtenteils ein Untermenge des {{domxref("Navigator")}} für Browsing-Kontexte ist, aber an Worker angepasst wurde.
- {{domxref("WorkerGlobalScope.origin")}} {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts als Zeichenfolge serialisiert zurück.
- {{domxref("WorkerGlobalScope.performance")}} {{ReadOnlyInline}}
  - : Gibt die mit dem Worker verbundene {{domxref("Performance")}} zurück. Nur eine Teilmenge der Eigenschaften und Methoden der `Performance` Schnittstelle ist für Worker verfügbar.
- {{domxref("WorkerGlobalScope.scheduler")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("Scheduler")}}-Objekt zurück, das mit dem aktuellen Kontext verbunden ist. Dies ist der Einstiegspunkt zur Nutzung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- {{domxref("WorkerGlobalScope.trustedTypes")}} {{ReadOnlyInline}}
  - : Gibt das {{domxref("TrustedTypePolicyFactory")}}-Objekt zurück, das mit dem globalen Objekt verbunden ist und den Einstiegspunkt für die Nutzung der {{domxref("Trusted Types API", "", "", "nocode")}} bietet.
- {{domxref("WorkerGlobalScope.self")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf den `WorkerGlobalScope` selbst zurück. Meist handelt es sich um einen spezifischen Bereich wie {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}} oder {{domxref("ServiceWorkerGlobalScope")}}.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der {{domxref("EventTarget")}}-Schnittstelle._

- {{domxref("WorkerGlobalScope.atob()")}}
  - : Dekodiert eine Zeichenfolge von Daten, die mit der Base-64-Codierung kodiert wurden.
- {{domxref("WorkerGlobalScope.btoa()")}}
  - : Erstellt eine Base-64-kodierte {{Glossary("ASCII")}}-Zeichenfolge aus einer Zeichenfolge binärer Daten.
- {{domxref("clearInterval()", "WorkerGlobalScope.clearInterval()")}}
  - : Hebt die wiederholte Ausführung auf, die mit {{domxref("setInterval()")}} festgelegt wurde.
- {{domxref("clearTimeout()", "WorkerGlobalScope.clearTimeout()")}}
  - : Hebt die verzögerte Ausführung auf, die mit {{domxref("setTimeout()")}} festgelegt wurde.
- {{domxref("createImageBitmap()", "WorkerGlobalScope.createImageBitmap()")}}
  - : Akzeptiert eine Vielzahl verschiedener Bildquellen und gibt ein {{jsxref("Promise")}} zurück, das sich auf ein {{domxref("ImageBitmap")}} auflöst. Optional wird die Quelle auf das Rechteck von Pixeln zugeschnitten, das bei _(sx, sy)_ mit Breite sw und Höhe sh beginnt.
- {{domxref("WorkerGlobalScope.dump()")}} {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht es Ihnen, eine Nachricht an stdout zu schreiben - d.h. in Ihrem Terminal. Dies ist dasselbe wie das Firefox-{{domxref("window.dump")}}, jedoch für Workers.
- {{domxref("WorkerGlobalScope.fetch()")}}
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- {{domxref("WorkerGlobalScope.importScripts()")}}
  - : Importiert ein oder mehrere Skripte in den Worker-Geltungsbereich. Sie können so viele angeben, wie Sie möchten, getrennt durch Kommata. Zum Beispiel: `importScripts('foo.js', 'bar.js');`.
- {{domxref("queueMicrotask()", "WorkerGlobalScope.queueMicrotask()")}}
  - : Stellt eine Mikrotask in die Warteschlange, die zu einem sicheren Zeitpunkt vor der Rückgabe der Steuerung an die Ereignisschleife des Browsers ausgeführt wird.
- {{domxref("setInterval()", "WorkerGlobalScope.setInterval()")}}
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine bestimmte Anzahl von Millisekunden verstreicht.
- {{domxref("setTimeout()", "WorkerGlobalScope.setTimeout()")}}
  - : Plant die Ausführung einer Funktion in einer bestimmten Zeit.
- {{domxref("structuredClone()", "WorkerGlobalScope.structuredClone()")}}
  - : Erstellt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines gegebenen Wertes mit dem [structured clone algorithm](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- {{domxref("reportError()", "WorkerGlobalScope.reportError()")}}
  - : Meldet einen Fehler in einem Skript und emuliert eine nicht abgefangene Ausnahme.

## Ereignisse

- {{domxref("WorkerGlobalScope/error_event", "error")}}
  - : Wird ausgelöst, wenn ein Fehler aufgetreten ist.
- {{domxref("WorkerGlobalScope/languagechange_event", "languagechange")}}
  - : Wird auf dem globalen/Worker-Geltungsbereichsobjekt ausgelöst, wenn sich die bevorzugten Sprachen des Benutzers ändern.
- {{domxref("WorkerGlobalScope/offline_event", "offline")}}
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verliert und der Wert von `navigator.onLine` auf `false` wechselt.
- {{domxref("WorkerGlobalScope/online_event", "online")}}
  - : Wird ausgelöst, wenn der Browser Zugriff auf das Netzwerk erhält und der Wert von `navigator.onLine` auf `true` wechselt.
- {{domxref("WorkerGlobalScope/rejectionhandled_event", "rejectionhandled")}}
  - : Wird bei behandelten {{jsxref("Promise")}} Ablehnungsereignissen ausgelöst.
- {{domxref("WorkerGlobalScope/securitypolicyviolation_event", "securitypolicyviolation")}}
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- {{domxref("WorkerGlobalScope/unhandledrejection_event", "unhandledrejection")}}
  - : Wird bei unbehandelten {{jsxref("Promise")}} Ablehnungsereignissen ausgelöst.

## Beispiel

Sie werden nicht direkt auf `WorkerGlobalScope` in Ihrem Code zugreifen; jedoch werden seine Eigenschaften und Methoden von spezifischeren globalen Bereichen wie {{domxref("DedicatedWorkerGlobalScope")}} und {{domxref("SharedWorkerGlobalScope")}} geerbt. Beispielsweise könnten Sie ein weiteres Skript in den Worker importieren und die Inhalte des `navigator`-Objekts des Worker-Bereichs mit den folgenden zwei Zeilen ausdrucken:

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> Da der globale Bereich des Worker-Skripts effektiv der globale Bereich des von Ihnen ausgeführten Workers ist ({{domxref("DedicatedWorkerGlobalScope")}} oder was auch immer) und alle Worker-Globalbereiche Methoden, Eigenschaften etc. vom `WorkerGlobalScope` erben, können Sie Zeilen wie die obigen ausführen, ohne ein übergeordnetes Objekt anzugeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere globale Objekt-Schnittstelle: {{domxref("Window")}}, {{domxref("DedicatedWorkerGlobalScope")}}, {{domxref("SharedWorkerGlobalScope")}}, {{domxref("ServiceWorkerGlobalScope")}}
- Andere Worker-bezogene Schnittstellen: {{domxref("Worker")}}, {{domxref("WorkerLocation")}} und {{domxref("WorkerNavigator")}}
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
