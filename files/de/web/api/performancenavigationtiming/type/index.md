---
title: "PerformanceNavigationTiming: type-Eigenschaft"
short-title: type
slug: Web/API/PerformanceNavigationTiming/type
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`type`**-Eigenschaft mit Schreibschutz gibt den Typ der Navigation zurück.

Sie können diese Eigenschaft verwenden, um Ihre Navigationstiming-Daten zu kategorisieren, da jeder dieser Typen unterschiedliche Leistungsmerkmale aufweist. Benutzer, die vor- und zurückgehen, könnten eine schnellere Seite erleben als Benutzer, die die Navigation zum ersten Mal durchführen oder Formulare übermitteln, usw.

Zum Beispiel, wenn Ihre Seite häufig neue Inhalte bereitstellt, möchten Sie vielleicht diese Inhalte mit [Fetch](/de/docs/Web/API/Fetch_API) oder ähnlichem aktualisieren und vermeiden, dass Benutzer die gesamte Seite ständig neu laden müssen. Der `"reload"`-Typ kann Ihnen helfen, Seiten zu finden, die häufig neu geladen werden.

## Wert

Die `type`-Eigenschaft kann folgende Werte annehmen:

- `"navigate"`
  - : Navigation gestartet durch Klicken auf einen Link, Eingabe der URL in der Adressleiste des Browsers, Formularübermittlung oder Initialisierung durch ein Skriptoperation, die nicht `reload` und `back_forward` wie unten aufgeführt sind.
- `"reload"`
  - : Navigation erfolgt durch die Neuladeoperation des Browsers, [`location.reload()`](/de/docs/Web/API/Location/reload) oder eine Refresh-Pragma-Direktive wie `<meta http-equiv="refresh" content="300">`.
- `"back_forward"`
  - : Navigation erfolgt durch die Verlaufstraversenoperation des Browsers.
- `"prerender"`
  - : Navigation wird durch einen [prerender-Hinweis](/de/docs/Web/HTML/Attributes/rel/prerender) initiiert.

## Beispiele

### Protokollierung der Reload-Navigation

Die `type`-Eigenschaft kann verwendet werden, um zu überprüfen, ob die Navigation vom Typ `reload` war. Sie könnten diese `reload`-Einträge in einem serverseitigen Endpunkt sammeln, um zu bestimmen, welche Seiten Ihrer Website am häufigsten neu geladen werden, oder alle Navigationstypen sammeln und feststellen, welcher Prozentsatz der Benutzer vor- und zurückgeht, zum Beispiel.

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performanceeinträge benachrichtigt, wenn sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performanceeinträge anzeigt, die zu dem Zeitpunkt in der Leistungstimeline des Browsers vorhanden sind, an dem Sie diese Methode aufrufen:

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
