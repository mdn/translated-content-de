---
title: "PerformanceResourceTiming: Eigenschaft decodedBodySize"
short-title: decodedBodySize
slug: Web/API/PerformanceResourceTiming/decodedBodySize
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`decodedBodySize`** gibt die Größe (in Oktetten) des per Fetch (HTTP oder Cache) empfangenen Nachrichtenkörpers zurück, nachdem eine gegebenenfalls angewendete Inhaltskodierung (wie gzip oder Brotli) entfernt wurde.

## Wert

Die Eigenschaft `decodedBodySize` kann folgende Werte haben:

- Eine Zahl, die die Größe (in Oktetten) des per Fetch (HTTP oder Cache) empfangenen Nachrichtenkörpers angibt, nachdem eine gegebenenfalls angewendete Inhaltskodierung entfernt wurde.
- `0`, wenn es sich bei der Ressource um eine Cross-Origin-Anfrage im [Modus](/de/docs/Web/API/Request/mode) `no-cors` handelt oder wenn die Anfrage fehlgeschlagen ist, beispielsweise weil sie die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Prüfung nicht bestanden hat.

## Beschreibung

Informationen zur Inhaltsgröße einer Cross-Origin-Ressource sind eingeschränkt, sofern die Ressource die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Prüfung nicht besteht. Wenn der Wert der Eigenschaft `decodedBodySize` `0` ist, könnte es sich daher um eine Cross-Origin-Anfrage handeln.

Damit Informationen zur Inhaltsgröße einer Cross-Origin-Ressource zugänglich sind, muss die Ressource im [Modus](/de/docs/Web/API/Request/mode) `cors` angefordert werden und die Antwort die CORS-Prüfung bestehen. Dazu muss sie einen geeigneten {{HTTPHeader("Access-Control-Allow-Origin")}}-Header enthalten.
Anfragen mit [`fetch()`](/de/docs/Web/API/Window/fetch) verwenden standardmäßig den Modus `cors`.
Elemente wie {{HTMLElement("img")}} verwenden den Modus `no-cors`, sofern das Attribut [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) nicht gesetzt ist. Daher wird für ein ohne dieses Attribut geladenes Cross-Origin-Bild eine Inhaltsgröße von `0` angezeigt.

Damit `https://developer.mozilla.org` die Inhaltsgrößen sehen kann, sollte die Cross-Origin-Ressource Folgendes senden:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Browser dürfen strengere Beschränkungen anwenden, als CORS verlangt, und können `0` zurückgeben, selbst wenn die CORS-Prüfung erfolgreich ist.

Frame-Navigationen, etwa wenn ein {{HTMLElement("iframe")}} sein Dokument lädt, verwenden kein CORS.
Ihre Inhaltsgrößen sind nur bei Same-Origin-Frames zugänglich, die ohne Cross-Origin-Weiterleitungen geladen wurden – selbst wenn das Dokument des Frames die Prüfung anhand von {{HTTPHeader("Timing-Allow-Origin")}} besteht.

## Beispiele

### Prüfen, ob Inhalte komprimiert wurden

Wenn die Eigenschaften `decodedBodySize` und [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) nicht null sind und sich unterscheiden, wurden die Inhalte komprimiert (beispielsweise mit gzip oder Brotli).

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

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
