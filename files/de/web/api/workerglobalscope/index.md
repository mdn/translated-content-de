---
title: WorkerGlobalScope
slug: Web/API/WorkerGlobalScope
l10n:
  sourceCommit: 58d79e9c2206e0a604cd4d7f6fba5181262af420
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("worker")}}

Das **`WorkerGlobalScope`**-Interface der [Web Workers API](/de/docs/Web/API/Web_Workers_API) ist ein Interface, das den Gültigkeitsbereich jedes Arbeiters darstellt. Arbeiter haben keinen Browserkontext; dieser Bereich enthält die Informationen, die normalerweise von [`Window`](/de/docs/Web/API/Window)-Objekten vermittelt werden — in diesem Fall Ereignishandler, die Konsole oder das zugeordnete [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Objekt. Jeder `WorkerGlobalScope` hat seine eigene Ereignisschleife.

Dieses Interface wird in der Regel von jedem Arbeitertyp spezialisiert: [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) für dedizierte Arbeiter, [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) für geteilte Arbeiter und [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) für [ServiceWorker](/de/docs/Web/API/Service_Worker_API). Die `self`-Eigenschaft gibt den spezialisierten Bereich für jeden Kontext zurück.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches) {{ReadOnlyInline}} {{SecureContext_Inline}}
  - : Gibt das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Objekt zurück, das mit dem aktuellen Kontext verknüpft ist. Dieses Objekt ermöglicht Funktionen wie das Speichern von Ressourcen für die Offline-Verwendung und das Erstellen benutzerdefinierter Antworten auf Anfragen.
- [`console`](/de/docs/Web/API/Console) {{ReadOnlyInline}} {{Non-standard_inline}}
  - : Gibt die mit dem Arbeiter verbundene [`console`](/de/docs/Web/API/Console) zurück.
- [`WorkerGlobalScope.crossOriginIsolated`](/de/docs/Web/API/WorkerGlobalScope/crossOriginIsolated) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob die Website sich in einem isolierten Zustand über Ursprünge hinweg befindet.
- [`WorkerGlobalScope.crypto`](/de/docs/Web/API/WorkerGlobalScope/crypto) {{ReadOnlyInline}}
  - : Gibt das mit dem globalen Objekt verknüpfte [`Crypto`](/de/docs/Web/API/Crypto)-Objekt zurück.
- [`WorkerGlobalScope.fonts`](/de/docs/Web/API/WorkerGlobalScope/fonts) {{ReadOnlyInline}}
  - : Gibt das mit dem Arbeiter verknüpfte [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) zurück.
- [`WorkerGlobalScope.indexedDB`](/de/docs/Web/API/WorkerGlobalScope/indexedDB) {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit für Arbeiter, asynchron auf Fähigkeiten von indizierten Datenbanken zuzugreifen; gibt ein [`IDBFactory`](/de/docs/Web/API/IDBFactory)-Objekt zurück.
- [`WorkerGlobalScope.isSecureContext`](/de/docs/Web/API/WorkerGlobalScope/isSecureContext) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der aktuelle Kontext sicher ist (`true`) oder nicht (`false`).
- [`WorkerGlobalScope.location`](/de/docs/Web/API/WorkerGlobalScope/location) {{ReadOnlyInline}}
  - : Gibt das mit dem Arbeiter verknüpfte [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) zurück. Es ist ein spezifisches Standort-Objekt, meist ein Untersetzer des [`Location`](/de/docs/Web/API/Location) für Browsing-Bereiche, aber an Arbeiter angepasst.
- [`WorkerGlobalScope.navigator`](/de/docs/Web/API/WorkerGlobalScope/navigator) {{ReadOnlyInline}}
  - : Gibt den mit dem Arbeiter verknüpften [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) zurück. Es ist ein spezielles Navigator-Objekt, meist ein Untersetzer des [`Navigator`](/de/docs/Web/API/Navigator) für Browsing-Bereiche, aber an Arbeiter angepasst.
- [`WorkerGlobalScope.origin`](/de/docs/Web/API/WorkerGlobalScope/origin) {{ReadOnlyInline}}
  - : Gibt den Ursprung des globalen Objekts als String serialisiert zurück.
- [`WorkerGlobalScope.performance`](/de/docs/Web/API/WorkerGlobalScope/performance) {{ReadOnlyInline}}
  - : Gibt die mit dem Arbeiter verknüpfte [`Performance`](/de/docs/Web/API/Performance) zurück. Nur ein Teil der Eigenschaften und Methoden des `Performance`-Interfaces steht für Arbeiter zur Verfügung.
- [`WorkerGlobalScope.scheduler`](/de/docs/Web/API/WorkerGlobalScope/scheduler) {{ReadOnlyInline}}
  - : Gibt das mit dem aktuellen Kontext verknüpfte [`Scheduler`](/de/docs/Web/API/Scheduler)-Objekt zurück. Dies ist der Einstiegspunkt für die Verwendung der [Prioritized Task Scheduling API](/de/docs/Web/API/Prioritized_Task_Scheduling_API).
- [`WorkerGlobalScope.trustedTypes`](/de/docs/Web/API/WorkerGlobalScope/trustedTypes) {{ReadOnlyInline}}
  - : Gibt das mit dem globalen Objekt verknüpfte [`TrustedTypePolicyFactory`](/de/docs/Web/API/TrustedTypePolicyFactory) zurück, das den Einstiegspunkt für die Verwendung der [Trusted Types API](/de/docs/Web/API/Trusted_Types_API) bietet.
- [`WorkerGlobalScope.self`](/de/docs/Web/API/WorkerGlobalScope/self) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf den `WorkerGlobalScope` selbst zurück. Die meiste Zeit handelt es sich um einen spezifischen Bereich wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) oder [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope).

## Instanzmethoden

_Dieses Interface erbt Methoden vom [`EventTarget`](/de/docs/Web/API/EventTarget)-Interface._

- [`WorkerGlobalScope.atob()`](/de/docs/Web/API/WorkerGlobalScope/atob)
  - : Dekodiert einen Datenstring, der mit Base-64 Kodierung kodiert wurde.
- [`WorkerGlobalScope.btoa()`](/de/docs/Web/API/WorkerGlobalScope/btoa)
  - : Erstellt einen Base-64 kodierten [ASCII](/de/docs/Glossary/ASCII)-String aus einem Binärdatenstring.
- [`WorkerGlobalScope.clearInterval()`](/de/docs/Web/API/ClearInterval)
  - : Hebt die wiederholte Ausführung von [`setInterval()`](/de/docs/Web/API/SetInterval) auf.
- [`WorkerGlobalScope.clearTimeout()`](/de/docs/Web/API/ClearTimeout)
  - : Hebt die verzögerte Ausführung von [`setTimeout()`](/de/docs/Web/API/SetTimeout) auf.
- [`WorkerGlobalScope.createImageBitmap()`](/de/docs/Web/API/WorkerGlobalScope/createImageBitmap)
  - : Nimmt eine Vielzahl verschiedener Bildquellen an und gibt ein {{jsxref("Promise")}} zurück, das zu einem [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aufgelöst wird. Optional wird die Quelle auf das Rechteck der Pixel zugeschnitten, beginnend bei _(sx, sy)_ mit der Breite sw und der Höhe sh.
- [`WorkerGlobalScope.dump()`](/de/docs/Web/API/WorkerGlobalScope/dump) {{deprecated_inline}} {{non-standard_inline}}
  - : Ermöglicht es Ihnen, eine Nachricht an stdout zu schreiben — d.h. in Ihrem Terminal. Dies ist das gleiche wie Firefox's [`window.dump`](/de/docs/Web/API/Window/dump), aber für Arbeiter.
- [`WorkerGlobalScope.fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)
  - : Startet den Vorgang des Abrufens einer Ressource aus dem Netzwerk.
- [`WorkerGlobalScope.importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)
  - : Importiert ein oder mehrere Skripte in den Gültigkeitsbereich des Arbeiters. Sie können beliebig viele angeben, getrennt durch Kommas. Zum Beispiel: `importScripts('foo.js', 'bar.js');`.
- [`WorkerGlobalScope.queueMicrotask()`](/de/docs/Web/API/WorkerGlobalScope/queueMicrotask)
  - : Stellt einen Mikrotask in die Warteschlange, der zu einem sicheren Zeitpunkt vor der Rückkehr zur Ereignisschleife des Browsers ausgeführt wird.
- [`WorkerGlobalScope.setInterval()`](/de/docs/Web/API/SetInterval)
  - : Plant die Ausführung einer Funktion jedes Mal, wenn die angegebene Anzahl von Millisekunden verstrichen ist.
- [`WorkerGlobalScope.setTimeout()`](/de/docs/Web/API/SetTimeout)
  - : Plant die Ausführung einer Funktion nach einer bestimmten Zeitspanne.
- [`WorkerGlobalScope.structuredClone()`](/de/docs/Web/API/WorkerGlobalScope/structuredClone)
  - : Erstellt eine [tiefe Kopie](/de/docs/Glossary/Deep_copy) eines gegebenen Wertes mit dem [Structured Clone Algorithmus](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- [`WorkerGlobalScope.reportError()`](/de/docs/Web/API/WorkerGlobalScope/reportError)
  - : Meldet einen Fehler in einem Skript und simuliert eine nicht behandelte Ausnahme.

## Ereignisse

- [`error`](/de/docs/Web/API/WorkerGlobalScope/error_event)
  - : Wird ausgelöst, wenn ein Fehler auftritt.
- [`languagechange`](/de/docs/Web/API/WorkerGlobalScope/languagechange_event)
  - : Wird beim globalen/Arbeiter-Bereichsobjekt ausgelöst, wenn sich die bevorzugten Sprachen des Benutzers ändern.
- [`offline`](/de/docs/Web/API/WorkerGlobalScope/offline_event)
  - : Wird ausgelöst, wenn der Browser den Zugriff auf das Netzwerk verloren hat und der Wert von `navigator.onLine` auf `false` geschaltet wird.
- [`online`](/de/docs/Web/API/WorkerGlobalScope/online_event)
  - : Wird ausgelöst, wenn der Browser Zugriff auf das Netzwerk erlangt hat und der Wert von `navigator.onLine` auf `true` geschaltet wird.
- [`rejectionhandled`](/de/docs/Web/API/WorkerGlobalScope/rejectionhandled_event)
  - : Wird bei behandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.
- [`securitypolicyviolation`](/de/docs/Web/API/WorkerGlobalScope/securitypolicyviolation_event)
  - : Wird ausgelöst, wenn eine [Content Security Policy](/de/docs/Web/HTTP/CSP) verletzt wird.
- [`unhandledrejection`](/de/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
  - : Wird bei unbehandelten {{jsxref("Promise")}}-Ablehnungsereignissen ausgelöst.

## Beispiel

Sie werden nicht direkt in Ihrem Code auf `WorkerGlobalScope` zugreifen; seine Eigenschaften und Methoden werden jedoch von spezifischeren globalen Bereichen wie [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) geerbt. Zum Beispiel könnten Sie ein weiteres Skript in den Arbeiter importieren und den Inhalt des `navigator`-Objekts des Arbeiterbereichs mit den folgenden zwei Zeilen ausgeben:

```js
importScripts("foo.js");
console.log(navigator);
```

> [!NOTE]
> Da der globale Bereich des Arbeiterskripts effektiv der globale Bereich des Arbeiters ist, den Sie ausführen ([`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) oder ein anderer) und alle Arbeiter-Globalbereiche Methoden, Eigenschaften usw. von `WorkerGlobalScope` erben, können Sie Zeilen wie die oben ohne Angabe eines Elternobjekts ausführen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere globale Objekt-Interfaces: [`Window`](/de/docs/Web/API/Window), [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope), [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope), [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)
- Andere arbeiterbezogene Interfaces: [`Worker`](/de/docs/Web/API/Worker), [`WorkerLocation`](/de/docs/Web/API/WorkerLocation) und [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
