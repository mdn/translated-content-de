---
title: "PerformanceResourceTiming: Eigenschaft transferSize"
short-title: transferSize
slug: Web/API/PerformanceResourceTiming/transferSize
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`transferSize`** gibt die Größe (in Oktetten) der abgerufenen Ressource an.
Sie setzt sich aus der Größe des Antwortkörpers und einem festen Wert zusammen, der stellvertretend für die Größe der Antwort-Header steht.

## Wert

Die Eigenschaft `transferSize` kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource angibt.
  Sie entspricht der Größe des kodierten Antwortkörpers (siehe [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize)) plus 300.
  Der feste Wert von 300 steht stellvertretend für die Größe der Antwort-Header, da deren tatsächliche Größe Informationen wie das Vorhandensein von Cookies preisgeben könnte.
- `300`, wenn die Ressource beim Server revalidiert wurde, statt erneut heruntergeladen zu werden.
- `0`, wenn die Ressource aus einem lokalen Cache abgerufen wurde, ohne den Server zu kontaktieren.
- `0`, wenn die Ressource über eine Cross-Origin-Anfrage abgerufen wurde und die {{HTTPHeader("Timing-Allow-Origin")}}-Prüfung nicht besteht.

## Beschreibung

Bei einer Cross-Origin-Ressource wird `transferSize` nur dann angegeben, wenn die Ressource mit einem {{HTTPHeader("Timing-Allow-Origin")}}-Header ausgeliefert wird, der den anfragenden Origin zulässt.
Ohne diesen Header ist `transferSize` gleich `0`, unabhängig davon, ob die Ressource aus einem Cache abgerufen wurde.

Damit beispielsweise `https://developer.mozilla.org` die Übertragungsgrößen sehen kann, sollte die Cross-Origin-Ressource Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Der Teil von `transferSize`, der die Größe des Antwortkörpers angibt, unterliegt derselben [CORS](/de/docs/Web/HTTP/Guides/CORS)-Beschränkung wie `encodedBodySize`.
Wenn eine Cross-Origin-Ressource die `Timing-Allow-Origin`-Prüfung besteht, aber nicht die CORS-Prüfung, enthält `transferSize` nicht die Größe des Antwortkörpers.

## Beispiele

### Prüfen, ob eine Ressource aus dem Cache abgerufen wurde

In Umgebungen, die die Eigenschaft [`responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) nicht unterstützen, lässt sich anhand von `transferSize` feststellen, ob eine Ressource aus dem Cache abgerufen wurde.
Wenn `transferSize` gleich null ist und die Ressource einen dekodierten Antwortkörper mit einer Größe ungleich null hat, wurde sie aus einem lokalen Cache abgerufen.
Diese Prüfung funktioniert nur für Same-Origin-Ressourcen sowie für Cross-Origin-Ressourcen, die sowohl die `Timing-Allow-Origin`-Prüfung als auch die CORS-Prüfung bestehen.
Ohne `Timing-Allow-Origin` ist `transferSize` immer `0`.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
      console.log(`${entry.name} was loaded from cache`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Diese Methode zeigt nur `resource`-Performance-Einträge an, die zum Zeitpunkt des Aufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
