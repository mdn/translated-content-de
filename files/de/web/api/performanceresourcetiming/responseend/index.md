---
title: "PerformanceResourceTiming: Eigenschaft responseEnd"
short-title: responseEnd
slug: Web/API/PerformanceResourceTiming/responseEnd
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`responseEnd`** gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt unmittelbar nach dem Empfang des letzten Bytes der Ressource durch den Browser oder unmittelbar vor dem Schließen der Transportverbindung angibt – je nachdem, was zuerst eintritt.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach dem Empfang des letzten Bytes der Ressource durch den Browser oder unmittelbar vor dem Schließen der Transportverbindung angibt – je nachdem, was zuerst eintritt.

## Beschreibung

Die Eigenschaft `responseEnd` ist für Cross-Origin-Anfragen auch ohne den HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} verfügbar. Eine Ausnahme bilden Navigationen von Cross-Origin-{{HTMLElement("iframe")}}-Elementen.

### Cross-Origin-iframes

Wenn das Dokument eines Cross-Origin-{{HTMLElement("iframe")}} mit einem {{HTTPHeader("Timing-Allow-Origin")}}-Header ausgeliefert wird, der den Origin der einbettenden Seite zulässt, gibt `responseEnd` den Zeitpunkt unmittelbar nach dem Empfang des letzten Bytes dieses Dokuments durch den Browser an.

Ohne diesen Header wird der genaue Zeitpunkt nicht gemeldet, da er Aufschluss darüber geben könnte, wie der Benutzer mit dem Frame interagiert hat.
Stattdessen meldet der Browser einen Ersatzeintrag, sobald das [`load`](/de/docs/Web/API/HTMLElement/load_event)-Ereignis des iframe ausgelöst wird.
In diesem Eintrag gibt [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) den Zeitpunkt an, zu dem die Navigation des iframe begann, und `responseEnd` den Zeitpunkt, zu dem das iframe einschließlich aller seiner Unterressourcen vollständig geladen war.
Die anderen Zeitstempel sowie die Eigenschaften [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) und [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) haben den Wert `0`.

## Beispiele

### Dauer des Abrufs messen (ohne Weiterleitungen)

Mit den Eigenschaften `responseEnd` und [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) lässt sich die Gesamtdauer für den Abruf der endgültigen Ressource messen (ohne Weiterleitungen). Wenn Sie Weiterleitungen einbeziehen möchten, finden Sie die Gesamtdauer des Abrufs in der Eigenschaft [`duration`](/de/docs/Web/API/PerformanceEntry/duration).

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const timeToFetch = entry.responseEnd - entry.fetchStart;
    if (timeToFetch > 0) {
      console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const timeToFetch = entry.responseEnd - entry.fetchStart;
  if (timeToFetch > 0) {
    console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [Ressourcen-Timing](/de/docs/Web/API/Performance_API/Resource_timing)
