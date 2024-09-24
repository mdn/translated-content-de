---
title: SharedWorkerGlobalScope
slug: Web/API/SharedWorkerGlobalScope
l10n:
  sourceCommit: e76119da66eebf2d8ea5f572ab5dd8e1698ae414
---

{{APIRef("Web Workers API")}}

Das **`SharedWorkerGlobalScope`**-Objekt (der {{domxref("SharedWorker")}} globale Gültigkeitsbereich) ist über das {{domxref("window.self","self")}}-Schlüsselwort zugänglich. Einige zusätzliche globale Funktionen, Namensraumobjekte und Konstruktoren, die normalerweise nicht mit dem Worker-Globalbereich verbunden sind, aber hier verfügbar sind, sind im [JavaScript-Referenz](/de/docs/Web/JavaScript/Reference) aufgeführt. Sehen Sie die vollständige Liste der [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der {{domxref("WorkerGlobalScope")}}-Schnittstelle und deren übergeordneten {{domxref("EventTarget")}}._

- {{domxref("SharedWorkerGlobalScope.name")}} {{ReadOnlyInline}}
  - : Der Name, der dem {{domxref("SharedWorker")}} (optional) gegeben wurde, als er mit dem {{domxref("SharedWorker.SharedWorker", "SharedWorker()")}}-Konstruktor erstellt wurde. Dies ist hauptsächlich für Debugging-Zwecke nützlich.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der {{domxref("WorkerGlobalScope")}}-Schnittstelle und deren übergeordneten {{domxref("EventTarget")}}._

- {{domxref("SharedWorkerGlobalScope.close()")}}
  - : Verwift alle Aufgaben, die in der Ereignisschleife des `SharedWorkerGlobalScope`-Bereichs aufgereiht sind, und schließt somit diesen speziellen Gültigkeitsbereich.

## Ereignisse

Hören Sie dieses Ereignis mit {{domxref("EventTarget.addEventListener()", "addEventListener()")}} oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- {{domxref("SharedWorkerGlobalScope/connect_event", "connect")}}
  - : Wird bei geteilten Arbeitern ausgelöst, wenn ein neuer Client eine Verbindung herstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SharedWorker")}}
- {{domxref("WorkerGlobalScope")}}
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Funktionen, die Arbeitern zur Verfügung stehen](/de/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers)
