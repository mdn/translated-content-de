---
title: "PerformanceNavigationTiming: Eigenschaft `type`"
short-title: type
slug: Web/API/PerformanceNavigationTiming/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`type`** gibt den Typ der Navigation zurück.

Sie können diese Eigenschaft verwenden, um Ihre Navigationszeitdaten zu kategorisieren, da jeder dieser Typen unterschiedliche Leistungsmerkmale aufweist. Benutzer, die vor- und zurückblättern, könnten eine schnellere Website erleben als Benutzer, die zum ersten Mal navigieren oder Formulare absenden usw.

Wenn Ihre Website beispielsweise häufig neue Inhalte bereitstellt, möchten Sie diese Inhalte möglicherweise mit [Fetch](/de/docs/Web/API/Fetch_API) oder Ähnlichem aktualisieren und vermeiden, dass Benutzer ständig die ganze Seite neu laden müssen. Der Typ `"reload"` kann Ihnen helfen, Seiten zu finden, die häufig neu geladen werden.

## Wert

Die Eigenschaft `type` kann die folgenden Werte haben:

- `"navigate"`
  - : Navigation, die durch das Klicken auf einen Link, die Eingabe der URL in die Adressleiste des Browsers, das Absenden eines Formulars oder die Initialisierung durch eine Skriptoperation außer `reload` und `back_forward` wie unten aufgeführt, gestartet wurde.
- `"reload"`
  - : Navigation über die Neuladungsoperation des Browsers, [`location.reload()`](/de/docs/Web/API/Location/reload) oder eine Refresh-Pragma-Direktive wie `<meta http-equiv="refresh" content="300">`.
- `"back_forward"`
  - : Navigation über die Verlauf-Navigationsoperation des Browsers.
- `"prerender"`
  - : Navigation, die durch einen [Prerender-Hinweis](/de/docs/Web/HTML/Reference/Attributes/rel/prerender) eingeleitet wurde.

## Beispiele

### Protokollieren von Neuladungs-Navigation

Die Eigenschaft `type` kann verwendet werden, um zu überprüfen, ob die Navigation vom Typ `reload` war. Sie könnten diese `reload`-Einträge an einem serverseitigen Endpunkt sammeln, um festzustellen, welche Seiten Ihrer Website am häufigsten neu geladen werden, oder alle Navigationstypen sammeln und beispielsweise bestimmen, welcher Prozentsatz der Benutzer vor- und zurückgeht.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Leistungseinträge informiert, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.type === "reload") {
      console.log(`${entry.name} was reloaded!`);
      console.log(entry);
    }
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  if (entry.type === "reload") {
    console.log(`${entry.name} was reloaded!`);
    console.log(entry);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
