---
title: webRequest.handlerBehaviorChanged()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Diese Funktion kann verwendet werden, um sicherzustellen, dass Ereignis-Listener korrekt angewendet werden, wenn Seiten im In-Memory-Cache des Browsers sind. Wenn der Browser eine Seite geladen hat und die Seite neu geladen wird, kann der Browser die Seite aus seinem In-Memory-Cache neu laden, und in diesem Fall werden die Ereignisse für die Anfrage nicht ausgelöst.

Angenommen, die Aufgabe einer Erweiterung besteht darin, Webanfragen gegen ein Muster zu blockieren, und das folgende Szenario tritt ein:

- Der Benutzer lädt eine Seite, die eine bestimmte Anfrage enthält, und das Muster erlaubt die Anfrage.
- Die Ressource wird geladen und im Speicher zwischengespeichert.
- Die Muster der Erweiterung werden so aktualisiert, dass die Ressource nicht mehr erlaubt wäre.
- Der Benutzer lädt die Seite erneut.

Da die Seite aus dem Speicher-Cache neu geladen wird, wird der Listener möglicherweise nicht erneut aufgerufen und die Anfrage wird geladen, trotz der neuen Richtlinie der Erweiterung.

Die Funktion `handlerBehaviorChanged()` wurde entwickelt, um dieses Problem zu lösen. Sie leert den In-Memory-Cache, sodass Seitenneuladungen Ereignis-Listener auslösen.

Da `handlerBehaviorChanged()` den Cache leert, kann dies kostspielig und schlecht für die Performance sein. Das webRequest-Modul definiert eine schreibgeschützte Eigenschaft {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}: werden mehr Aufrufe als diese Anzahl in 10 Minuten gemacht, hat dies keine Wirkung.

Die Implementierung des Cachings und damit die Notwendigkeit für diese Funktion variiert von Browser zu Browser, daher bewirkt diese Funktion in einigen Browsern nichts.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let flushingCache = browser.webRequest.handlerBehaviorChanged()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn der Vorgang abgeschlossen ist.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im folgenden Beispiel leeren wir den In-Memory-Cache durch einen Aufruf von `handlerBehaviorChanged()` und protokollieren diese Aktion, indem wir eine entsprechende Nachricht in die Konsole schreiben.

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
> Diese API basiert auf der [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#method-handlerBehaviorChanged) API von Chromium. Diese Dokumentation ist abgeleitet von [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code.
