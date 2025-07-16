---
title: webRequest.handlerBehaviorChanged()
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/handlerBehaviorChanged
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Diese Funktion kann verwendet werden, um sicherzustellen, dass Ereignis-Listener richtig angewendet werden, wenn Seiten im speicherinternen Cache des Browsers sind. Wenn der Browser eine Seite geladen hat und die Seite neu geladen wird, kann der Browser die Seite aus seinem speicherinternen Cache neu laden, und in diesem Fall werden keine Ereignisse für die Anforderung ausgelöst.

Angenommen, die Aufgabe einer Erweiterung besteht darin, Webanfragen gegen ein Muster zu blockieren, und folgendes Szenario tritt auf:

- Der Benutzer lädt eine Seite, die eine bestimmte Anforderung enthält, und das Muster erlaubt die Anforderung.
- Die Ressource wird geladen und im Speicher zwischengespeichert.
- Die Muster der Erweiterung werden so aktualisiert, dass die Ressource nicht mehr erlaubt wäre.
- Der Benutzer lädt die Seite neu.

Da die Seite aus dem Speicher-Cache neu geladen wird, wird der Listener möglicherweise nicht erneut aufgerufen und die Anforderung wird trotz der neuen Richtlinie der Erweiterung geladen.

Die Funktion `handlerBehaviorChanged()` wurde entwickelt, um dieses Problem zu lösen. Sie leert den speicherinternen Cache, sodass Seitenneuladungen Ereignis-Listener auslösen.

Da `handlerBehaviorChanged()` den Cache leert, kann dies zu hohen Kosten und schlechter Leistung führen. Das webRequest-Modul definiert eine schreibgeschützte Eigenschaft {{WebExtAPIRef("webRequest.MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES", "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES")}}: Mehr Anrufe als diese Anzahl innerhalb von 10 Minuten haben keine Wirkung.

Die Implementierung des Cachings und damit die Notwendigkeit dieser Funktion variiert von Browser zu Browser, sodass diese Funktion in einigen Browsern nichts tut.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let flushingCache = browser.webRequest.handlerBehaviorChanged()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn die Operation abgeschlossen ist.

## Beispiele

Im folgenden Codeausschnitt leeren wir den speicherinternen Cache durch einen Aufruf von `handlerBehaviorChanged()` und melden diese Aktion, indem wir eine entsprechende Nachricht in der Konsole protokollieren.

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.webRequest`](https://developer.chrome.com/docs/extensions/reference/api/webRequest#method-handlerBehaviorChanged) API. Diese Dokumentation ist aus [`web_request.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/web_request.json) im Chromium-Code abgeleitet.
