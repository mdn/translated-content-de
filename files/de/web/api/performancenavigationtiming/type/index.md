---
title: "PerformanceNavigationTiming: type-Eigenschaft"
short-title: type
slug: Web/API/PerformanceNavigationTiming/type
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`type`** gibt den Typ der Navigation zurück.

Sie können diese Eigenschaft verwenden, um Ihre Navigationszeitdaten zu kategorisieren, da jeder dieser Typen unterschiedliche Leistungseigenschaften aufweist. Benutzer, die vor- und zurückgehen, könnten eine schnellere Website erleben als Benutzer, die zum ersten Mal navigieren oder Formulare absenden usw.

Wenn Ihre Seite beispielsweise häufig neue Inhalte bereitstellt, möchten Sie diese Inhalte möglicherweise mit [Fetch](/de/docs/Web/API/Fetch_API) oder Ähnlichem aktualisieren und vermeiden, dass Benutzer ständig die gesamte Seite neu laden müssen. Der Typ `"reload"` kann Ihnen helfen, Seiten zu identifizieren, die häufig neu geladen werden.

## Wert

Die `type`-Eigenschaft kann die folgenden Werte haben:

- `"navigate"`
  - : Navigation, die durch Klicken auf einen Link, Eingabe der URL in die Adressleiste des Browsers, Absenden eines Formulars oder Initialisierung durch einen Skriptvorgang, der nicht `reload` und `back_forward` wie unten aufgeführt ist, gestartet wird.
- `"reload"`
  - : Navigation erfolgt über die Neuladungsoperation des Browsers, [`location.reload()`](/de/docs/Web/API/Location/reload) oder eine Refresh-Pragma-Direktive wie `<meta http-equiv="refresh" content="300">`.
- `"back_forward"`
  - : Navigation erfolgt über die Verlaufstraversierung des Browsers.

## Beispiele

### Logging von Reload-Navigation

Die `type`-Eigenschaft kann verwendet werden, um zu überprüfen, ob die Navigation vom Typ `reload` war. Sie könnten diese `reload`-Einträge in einem serverseitigen Endpunkt sammeln, um festzustellen, welche Seiten Ihrer Website am häufigsten neu geladen werden, oder alle Navigationstypen sammeln und ermitteln, welcher Prozentsatz der Benutzer vor- und zurückgeht, zum Beispiel.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `navigation`-Performanceeinträge benachrichtigt, wenn sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performanceeinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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
