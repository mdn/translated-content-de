---
title: "PerformanceResourceTiming: serverTiming-Eigenschaft"
short-title: serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}} {{securecontext_header}}

Die schreibgeschützte Eigenschaft **`serverTiming`** gibt ein Array von {{domxref("PerformanceServerTiming")}}-Einträgen zurück, das Server-Timing-Metriken enthält.

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können bei `navigation`- und `resource`-Einträgen vorhanden sein.

## Wert

Ein Array von {{domxref("PerformanceServerTiming")}}-Einträgen.

## Beispiele

### Server-Timing-Einträge protokollieren

Sie können einen {{domxref("PerformanceObserver")}} verwenden, um auf {{domxref("PerformanceServerTiming")}}-Einträge zu achten. Die Dauer jedes Server-Eintrags wird in der Konsole protokolliert.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der Benachrichtigungen über neue `resource`-Performance-Einträge gibt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(`${serverEntry.name} duration: ${serverEntry.duration}`);
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, duration } of serverTiming) {
        console.log(`${url}: ${name} duration: ${duration}`);
      }
    }
  }
}
```

### Informationen zum Cross-Origin-Server-Timing

Der Zugriff auf Informationen zum Server-Timing ist auf denselben Ursprung beschränkt. Um Cross-Origin-Timing-Informationen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwortheader gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` die Anzeige von Server-Timing-Informationen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceServerTiming")}}
- {{HTTPHeader("Server-Timing")}}
