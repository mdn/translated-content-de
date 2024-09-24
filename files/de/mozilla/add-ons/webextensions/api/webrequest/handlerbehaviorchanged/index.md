---
title: webRequest.handlerBehaviorChanged()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Diese Funktion kann verwendet werden, um sicherzustellen, dass Event-Listener korrekt angewendet werden, wenn Seiten im Arbeitsspeicher-Cache des Browsers liegen. Wenn der Browser eine Seite geladen hat und die Seite neu geladen wird, kann der Browser die Seite aus seinem Arbeitsspeicher-Cache neu laden, und in diesem Fall werden keine Ereignisse für die Anforderung ausgelöst.

Angenommen, die Aufgabe einer Erweiterung ist es, Webanfragen gegen ein Muster zu blockieren, und folgendes Szenario tritt ein:

- Der Nutzer lädt eine Seite, die eine bestimmte Anfrage beinhaltet, und das Muster erlaubt die Anfrage.
- Die Ressource wird geladen und im Arbeitsspeicher zwischengespeichert.
- Die Muster der Erweiterung werden so aktualisiert, dass die Ressource nicht mehr erlaubt wäre.
- Der Nutzer lädt die Seite neu.

Da die Seite aus dem Arbeitsspeicher-Cache neu geladen wird, wird der Listener möglicherweise nicht erneut aufgerufen, und die Anfrage wird trotz der neuen Richtlinie der Erweiterung geladen.

Die Funktion `handlerBehaviorChanged()` ist dazu konzipiert, dieses Problem zu adressieren. Sie leert den Arbeitsspeicher-Cache, sodass Seitenneuladen Event-Listener auslösen.

Da `handlerBehaviorChanged()` den Cache leert, kann es aufwendig und schlecht für die Leistung sein. Das webRequest-Modul definiert eine schreibgeschützte Eigenschaft {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}: Mehr Aufrufe als diese Anzahl in 10 Minuten haben keine Wirkung.

Die Implementierung des Caching, und damit die Notwendigkeit dieser Funktion, variiert von einem Browser zum anderen, daher tut diese Funktion in einigen Browsern nichts.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let flushingCache = browser.webRequest.handlerBehaviorChanged()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das erfüllt wird, ohne Argumente, wenn der Vorgang abgeschlossen ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Beispiel leeren wir den Arbeitsspeicher-Cache durch einen Aufruf von `handlerBehaviorChanged()` und melden diese Aktion, indem wir eine entsprechende Nachricht in die Konsole protokollieren.

```js
function onFlushed() {
  console.log(`In-memory cache flushed`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let flushingCache = browser.webRequest.handlerBehaviorChanged();
flushingCache.then(onFlushed, onError);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#method-handlerBehaviorChanged) API. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
