---
title: "PerformanceResourceTiming: redirectStart-Eigenschaft"
short-title: redirectStart
slug: Web/API/PerformanceResourceTiming/redirectStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`redirectStart`** gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, der die Startzeit des Fetch-Vorgangs darstellt, der die Weiterleitung initiiert.

Wenn es HTTP-Weiterleitungen beim Abrufen der Ressource gibt und wenn irgendeine der Weiterleitungen nicht von derselben Quelle wie das aktuelle Dokument stammt, jedoch der Überprüfungsalgorithmus für die Zeitmessung für jede weitergeleitete Ressource gilt, gibt diese Eigenschaft die Startzeit des Fetch-Vorgangs zurück, der die Weiterleitung initiiert; andernfalls wird null zurückgegeben.

Um die Anzahl der Weiterleitungen zu ermitteln, siehe auch {{domxref("PerformanceNavigationTiming.redirectCount")}}.

## Wert

Die `redirectStart`-Eigenschaft kann folgende Werte haben:

- Einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}}, der die Startzeit des Fetch-Vorgangs darstellt, der die Weiterleitung initiiert.
- `0`, wenn es keine Weiterleitung gibt.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header verwendet wird.

## Beispiele

### Messung der Weiterleitungszeit

Die Eigenschaften `redirectStart` und {{domxref("PerformanceResourceTiming.redirectEnd", "redirectEnd")}} können verwendet werden, um zu messen, wie lange die Weiterleitung dauert.

```js
const redirect = entry.redirectEnd - entry.redirectStart;
```

Ein Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erzeugung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const redirect = entry.redirectEnd - entry.redirectStart;
    if (redirect > 0) {
      console.log(`${entry.name}: Redirect time: ${redirect}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Ein Beispiel unter Verwendung von {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const redirect = entry.redirectEnd - entry.redirectStart;
  if (redirect > 0) {
    console.log(`${entry.name}: Redirect time: ${redirect}ms`);
  }
});
```

### Timing-Informationen für Cross-Origin

Wenn der Wert der `redirectStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Timing-Informationen für Cross-Origin anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceNavigationTiming.redirectCount")}}
- {{HTTPHeader("Timing-Allow-Origin")}}
