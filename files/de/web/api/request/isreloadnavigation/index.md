---
title: "Anfrage: isReloadNavigation-Eigenschaft"
short-title: isReloadNavigation
slug: Web/API/Request/isReloadNavigation
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`isReloadNavigation`** des [`Request`](/de/docs/Web/API/Request)-Interfaces ist ein boolescher Wert, der angibt, ob es sich bei der Anfrage um eine vom Benutzer ausgelöste Neuladung handelt.

Eine vom Benutzer ausgelöste Neuladung kann über eine Browsersteuerung ausgelöst werden, beispielsweise durch Drücken von <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd> oder durch Klicken auf die Neuladen-Schaltfläche des Browsers, oder programmatisch (zum Beispiel durch Aufrufen von [`Location.reload()`](/de/docs/Web/API/Location/reload), [`History.go(0)`](/de/docs/Web/API/History/go) oder [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload)).

Diese Eigenschaft wird hauptsächlich in `fetch`-Ereignis-Handlern innerhalb eines Service Workers verwendet, um angemessen auf Neuladeanfragen im Vergleich zu Nicht-Neuladeanfragen zu reagieren. Zum Beispiel zeigt eine Neuladeanfrage an, dass der Benutzer aktuelle Daten erwartet, daher sollten Inhalte vom Server dem aus einem Cache vorgezogen werden.

## Wert

Ein boolescher Wert.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel kann innerhalb eines Service Worker-Skripts verwendet werden, um Neuladungen zu überprüfen und entsprechend zu reagieren.

Innerhalb eines `fetch`-Ereignis-Handlers prüfen wir zunächst, ob die [`Request.mode`](/de/docs/Web/API/Request/mode)-Eigenschaft des Ereignisses `navigate` und die `isReloadNavigation`-Eigenschaften `true` sind. Wenn dies der Fall ist, handelt es sich um eine Neuladungsnavigation; wir holen daher die Seite aus dem Netzwerk, um eine aktualisierte Version bereitzustellen. Scheitert dies, versuchen wir, die Seite aus dem [`Cache`](/de/docs/Web/API/Cache) als Fallback abzurufen.

Wenn es sich bei der Navigation nicht um eine Neuladungsnavigation handelt, versuchen wir zuerst, die Seite aus dem `Cache` abzurufen, und holen sie nur aus dem Netzwerk, wenn keine zwischengespeicherte Version der Seite gefunden wird.

```js
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate" && event.request.isReloadNavigation) {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request)),
    );
  } else {
    event.respondWith(
      caches
        .match(event.request)
        .then((cached) => cached || fetch(event.request)),
    );
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Navigation API](/de/docs/Web/API/Navigation_API)
