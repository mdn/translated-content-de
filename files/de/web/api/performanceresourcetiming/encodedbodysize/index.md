---
title: "PerformanceResourceTiming: Eigenschaft encodedBodySize"
short-title: encodedBodySize
slug: Web/API/PerformanceResourceTiming/encodedBodySize
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`encodedBodySize`** gibt die Größe (in Oktetten) des beim Abruf (über HTTP oder aus dem Cache) empfangenen Nutzdatenkörpers an, bevor angewendete Inhaltskodierungen wie gzip oder Brotli entfernt wurden.

## Wert

Die Eigenschaft `encodedBodySize` kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) des beim Abruf (über HTTP oder aus dem Cache) empfangenen Nutzdatenkörpers angibt, bevor eine angewendete Inhaltskodierung entfernt wurde.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage im [Modus](/de/docs/Web/API/Request/mode) `no-cors` ist oder wenn die Anfrage fehlgeschlagen ist, beispielsweise weil sie die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Prüfung nicht bestanden hat.

## Beschreibung

Informationen zur Inhaltsgröße einer Cross-Origin-Ressource sind eingeschränkt, sofern die Ressource die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Prüfung nicht besteht. Wenn der Wert der Eigenschaft `encodedBodySize` `0` ist, könnte es sich daher um eine Cross-Origin-Anfrage handeln.

Damit Informationen zur Inhaltsgröße einer Cross-Origin-Ressource verfügbar sind, muss die Ressource im [Modus](/de/docs/Web/API/Request/mode) `cors` angefordert werden und die Antwort die CORS-Prüfung bestehen. Dazu muss sie einen geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}}-Header enthalten.
Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden standardmäßig den Modus `cors`.
Elemente wie {{HTMLElement("img")}} verwenden den Modus `no-cors`, sofern das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) nicht gesetzt ist. Deshalb hat ein Cross-Origin-Bild, das ohne dieses Attribut geladen wurde, eine Inhaltsgröße von `0`.

Damit `https://developer.mozilla.org` die Inhaltsgrößen sehen kann, sollte die Cross-Origin-Ressource Folgendes senden:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Browser dürfen strengere Beschränkungen anwenden, als CORS vorschreibt, und können `0` zurückgeben, selbst wenn die CORS-Prüfung bestanden wurde.

Frame-Navigationen, etwa wenn ein {{HTMLElement("iframe")}} sein Dokument lädt, verwenden kein CORS.
Ihre Inhaltsgrößen werden nur für Same-Origin-Frames offengelegt, die ohne Cross-Origin-Weiterleitungen geladen wurden – selbst wenn das Dokument des Frames die {{HTTPHeader("Timing-Allow-Origin")}}-Prüfung besteht.

## Beispiele

### Prüfen, ob der Inhalt komprimiert wurde

Wenn die Eigenschaften `encodedBodySize` und [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) nicht null sind und sich unterscheiden, wurde der Inhalt komprimiert (beispielsweise mit gzip oder Brotli).

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const uncompressed =
      entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
    if (uncompressed) {
      console.log(`${entry.name} was not compressed!`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Diese Methode zeigt nur die `resource`-Performance-Einträge an, die zum Zeitpunkt ihres Aufrufs in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const uncompressed =
    entry.decodedBodySize && entry.decodedBodySize === entry.encodedBodySize;
  if (uncompressed) {
    console.log(`${entry.name} was not compressed!`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Timing-Allow-Origin")}}
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/Guides/CORS)
