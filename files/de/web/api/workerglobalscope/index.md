---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: f19387e11b429473d515019a0b8d9ba4e615f88f
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Die **`WorkerGlobalScope`**-Schnittstelle der [Web Workers API](/de/docs/Web/API/Web_Workers_API) ist eine Schnittstelle, die den Geltungsbereich eines jeden Workers repräsentiert. Workers haben keinen Browserkontext; dieser Geltungsbereich beinhaltet die Informationen, die normalerweise von [`Window`](/de/docs/Web/API/Window)-Objekten bereitgestellt werden – in diesem Fall Ereignishandler, die Konsole oder das zugeordnete [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt. Jede `WorkerGlobalScope`-Schnittstelle hat ihre eigene Ereignisschleife.

Diese Schnittstelle wird normalerweise von jedem Worker-Typ spezialisiert: [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Worker, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Worker und [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [ServiceWorker](/de/docs/Web/API/Service_Worker_API). Die `self`-Eigenschaft gibt den spezialisierten Geltungsbereich für jeden Kontext zurück.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Nutzung und das Generieren von benutzerdefinierten Antworten auf Anfragen.
- [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen boolean-Wert zurück, der angibt, ob die Website sich in einem Zustand der cross-origin Isolation befindet.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) {{ReadOnlyInline}}
  - : Gibt das [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück, das mit dem globalen Objekt verknüpft ist.
- [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) {{ReadOnlyInline}}
  - : Gibt das [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück, das mit dem Worker verknüpft ist.
- [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) {{ReadOnlyInline}}
  - : Stellt eine Mechanik bereit, mit der Worker asynchron auf die Fähigkeiten von indexierten Datenbanken zugreifen können; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen boolean-Wert zurück, der anzeigt, ob der aktuelle Kontext sicher (`true`) oder unsicher (`false`) ist.
- [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) {{ReadOnlyInline}}
  - : Gibt das [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück, das mit dem Worker verknüpft ist. Es handelt sich um ein spezifisches Location-Objekt, im Wesentlichen ein Teilmenge des [`Location`](/de/docs/Web/API/Location) für Browserkontexte, aber angepasst für Worker.
- [`WorkerGlobalScope.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) {{ReadOnlyInline}}
  - : Gibt das [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt zurück, das mit dem Worker verknüpft ist. Es stellt eine spezifische Navigator-Instanz dar, im Wesentlichen eine Teilmenge des [`Navigator`](/de/docs/Web/API/Navigator) für Browserkontexte, aber angepasst für Worker.
- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts als Zeichenkette zurück.
- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) {{ReadOnlyInline}}
  - : Gibt das [`Performance`](/de/docs/Web/API/Performance)-Objekt zurück, das mit dem Worker verknüpft ist. Nur eine Teilmenge der Eigenschaften und Methoden der `Performance`-Schnittstelle ist für Worker verfügbar.
- [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) {{ReadOnlyInline}}
  - : Gibt das [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dies ist der Einstiegspunkt für die Nutzung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory)-Objekt zurück, das mit dem globalen Objekt verknüpft ist, und stellt den Einstiegspunkt für die Nutzung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bereit.
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die `WorkerGlobalScope` selbst zurück. Meistens handelt es sich dabei um einen spezifischen Geltungsbereich wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der [`EventTarget`](/de/docs/Web/API/EventTarget)-Schnittstelle._

- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
  - : Dekodiert eine Datenzeichenkette, die mit base-64-Kodierung kodiert wurde.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
  - : Erstellt eine base-64-kodierte {{Glossary("ASCII", "ASCII")}}-Zeichenkette aus einer Zeichenkette mit Binärdaten.
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/WorkerGlobalScope/clearInterval)
  - : Hebt die wiederholte Ausführung auf, die mit [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval) eingestellt wurde.
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/WorkerGlobalScope/clearTimeout)
  - : Hebt die verzögerte Ausführung auf, die mit [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout) eingestellt wurde.
- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
  - : Akzeptiert eine Vielzahl unterschiedlicher Bildquellen und gibt ein {{jsxref("Promise")}} zurück, welches zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional kann die Quelle auf das Rechteck mit den Pixeln von _(sx, sy)_ mit der Breite sw und Höhe sh beschnitten werden.
- [`WorkerGlobalScope.dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht es, eine Nachricht an stdout zu schreiben – also in Ihrem Terminal. Dies ist dasselbe wie Firefox' [`window.dump`](/de/docs/Web/API/Window/dump), jedoch für Worker.
- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Startet den Prozess des Abrufens einer Ressource aus dem Netzwerk.
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
  - : Importiert ein oder mehrere Skripte in den Geltungsbereich des Workers. Sie können beliebig viele angeben, getrennt durch Kommata. Zum Beispiel: `importScripts('foo.js', 'bar.js');`.
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
  - : Wartet eine Mikrotask ein, die zu einem sicheren Zeitpunkt vor der Rückkehr der Kontrolle in die Ereignisschleife des Browsers ausgeführt wird.
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/WorkerGlobalScope/setInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn eine bestimmte Anzahl von Millisekunden abgelaufen ist.
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/WorkerGlobalScope/setTimeout)
  - : Plant die Ausführung einer Funktion nach einer bestimmten Zeit.
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
  - : Erstellt eine {{Glossary("Deep_copy", "tiefe Kopie")}} eines gegebenen Wertes unter Verwendung des [strukturierter Kopieralgorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
  - : Meldet einen Fehler in einem Skript und simuliert so eine unbehandelte Ausnahme.

## Ereignisse

- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt.
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Wird im globalen/Worker-Kontext ausgelöst, wenn sich die bevorzugten Sprachen des Benutzers ändern.
- [`offline`](/de/docs/Web/API/WorkerGlobalScope/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugang zum Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` wechselt.
- [`online`](/de/docs/Web/API/WorkerGlobalScope/online_event)
  - : Wird ausgelöst, wenn der Browser Zugang zum Netzwerk erhält und der Wert von `navigator.onLine` auf `true` wechselt.
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
  - : Wird ausgelöst, wenn eine {{jsxref("Promise")}}-Ablehnung behandelt wird.
- [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
  - : Wird bei unbehandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.

## Beispiel

Sie werden `WorkerGlobalScope` nicht direkt in Ihrem Code verwenden; seine Eigenschaften und Methoden werden jedoch von spezifischeren globalen Geltungsbereichen wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) geerbt. Zum Beispiel könnten Sie mithilfe der folgenden zwei Zeilen ein weiteres Skript in den Worker importieren und den Inhalt des `navigator`-Objekts des Worker-Bereichs ausgeben:

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> Da der globale Geltungsbereich des Worker-Skripts effektiv der globale Geltungsbereich des Workers selbst ist ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) oder ein anderer) und alle Worker-Scopes Methoden, Eigenschaften etc. von `WorkerGlobalScope` erben, können Sie Zeilen wie die obigen ohne Angabe eines übergeordneten Objekts ausführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere globale Objektschnittstellen: [`Window`](/de/docs/Web/API/Window), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- Andere Worker-bezogene Schnittstellen: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
