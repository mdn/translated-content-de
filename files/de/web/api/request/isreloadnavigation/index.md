---
title: "Anfrage: Eigenschaft isReloadNavigation"
short-title: isReloadNavigation
slug: Web/API/Request/isReloadNavigation
l10n:
  sourceCommit: 98091f3ead60c0057dbbc7c7224e967ca44acff9
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`isReloadNavigation`** des [`Request`](/de/docs/Web/API/Request)-Interfaces ist ein Boolean, der anzeigt, ob die Anfrage durch ein vom Benutzer ausgelöstes Neuladen erfolgt.

Ein vom Benutzer ausgelöstes Neuladen kann über eine Browsersteuerung ausgelöst werden, wie etwa durch Drücken von <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd> oder Klicken auf die Neuladen-Schaltfläche des Browsers oder programmatisch (zum Beispiel durch Aufrufen von [`Location.reload()`](/de/docs/Web/API/Location/reload), [`History.go(0)`](/de/docs/Web/API/History/go) oder [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload)).

Diese Eigenschaft wird hauptsächlich innerhalb der [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler von Service Workern verwendet, um angemessen auf Neuladeanforderungen im Gegensatz zu Nicht-Neuladeanforderungen zu reagieren. Zum Beispiel zeigt eine Neuladeanforderung an, dass der Benutzer aktuelle Daten erwartet, daher sollte der Inhalt vom Server dem aus einem Cache bevorzugt werden.

## Wert

Ein Boolean-Wert.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel kann in einem Service Worker-Skript verwendet werden, um auf Neuladevorgänge zu prüfen und angemessen zu reagieren.

Innerhalb eines [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandlers prüfen wir zuerst, ob der [`Request.mode`](/de/docs/Web/API/Request/mode) des Ereignisses `navigate` ist und ob die `isReloadNavigation`-Eigenschaft `true` ist. Wenn dies der Fall ist, handelt es sich um eine Neuladenavigation; wir holen daher die Seite aus dem Netzwerk, um eine aktualisierte Version bereitzustellen. Wenn das fehlschlägt, versuchen wir, die Seite als Fallback aus dem [`Cache`](/de/docs/Web/API/Cache) abzurufen.

Wenn die Navigation keine Neuladenavigation ist, versuchen wir zuerst, die Seite aus dem `Cache` abzurufen und greifen nur dann auf das Netzwerk zurück, wenn keine zwischengespeicherte Version der Seite gefunden wird.

```js
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate" && event.request.isReloadNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          return response;
        })
        .catch(() => caches.match(event.request)),
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request);
      }),
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
