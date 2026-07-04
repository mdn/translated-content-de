---
title: "Anforderung: isReloadNavigation-Eigenschaft"
short-title: isReloadNavigation
slug: Web/API/Request/isReloadNavigation
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`isReloadNavigation`** der [`Request`](/de/docs/Web/API/Request) Schnittstelle ist ein Boolean, der angibt, ob die Anforderung durch eine vom Benutzer ausgelöste Neuanschaffung ausgelöst wurde.

Eine vom Benutzer ausgelöste Neuanschaffung kann über ein Browser-Steuerelement ausgelöst werden, wie das Drücken von <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>R</kbd> oder durch Klicken auf die Neuanschaffungsschaltfläche des Browsers, oder programmatisch (zum Beispiel durch den Aufruf von [`Location.reload()`](/de/docs/Web/API/Location/reload), [`History.go(0)`](/de/docs/Web/API/History/go) oder [`Navigation.reload()`](/de/docs/Web/API/Navigation/reload)).

Diese Eigenschaft wird hauptsächlich innerhalb von `fetch`-Ereignis-Handlern von Service Workern verwendet, um angemessen auf Neuanschaffungsanforderungen im Vergleich zu Nicht-Neuanschaffungsanforderungen zu reagieren. Ein Neuanschaffungsanforderung zeigt beispielsweise an, dass der Benutzer aktuelle Daten erwartet, daher sollte der Inhalt vom Server gegenüber dem aus einem Cache bevorzugt werden.

## Wert

Ein Boolean-Wert.

## Beispiele

### Grundlegende Nutzung

Das folgende Beispiel kann in einem Service Worker-Skript verwendet werden, um Neuanschaffungen zu überprüfen und entsprechend zu reagieren.

Innerhalb eines `fetch`-Ereignis-Handlers prüfen wir zunächst, ob der `Request.mode` des Ereignisses `navigate` ist und die `isReloadNavigation`-Eigenschaften `true` sind. Wenn ja, handelt es sich um eine Neuanschaffungsnavigation; daher holen wir die Seite aus dem Netzwerk, um eine aktualisierte Version bereitzustellen. Falls das fehlschlägt, versuchen wir, die Seite als Rückfalllösung aus dem [`Cache`](/de/docs/Web/API/Cache) abzurufen.

Wenn die Navigation keine Neuanschaffungsnavigation ist, versuchen wir zunächst, die Seite aus dem `Cache` abzurufen und holen nur dann aus dem Netzwerk, wenn keine zwischengespeicherte Version der Seite gefunden wird.

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
