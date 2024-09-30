---
title: "PerformanceNavigationTiming: type-Eigenschaft"
short-title: type
slug: Web/API/PerformanceNavigationTiming/type
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`type`** gibt den Typ der Navigation zurück.

Sie können diese Eigenschaft verwenden, um Ihre Navigationstiming-Daten zu kategorisieren, da jeder dieser Typen unterschiedliche Leistungsmerkmale aufweisen kann. Benutzer, die vor- und zurückgehen, könnten eine schnellere Website erleben als Benutzer, die zum ersten Mal navigieren oder Formulare absenden usw.

Zum Beispiel, wenn Ihre Website häufig neue Inhalte bereitstellt, möchten Sie diese Inhalte möglicherweise mit [Fetch](/de/docs/Web/API/Fetch_API) oder ähnlichem aktualisieren und vermeiden, dass Benutzer ständig die gesamte Seite neu laden müssen. Der `"reload"`-Typ kann Ihnen helfen, Seiten zu finden, die häufig neu geladen werden.

## Wert

Die `type`-Eigenschaft kann die folgenden Werte haben:

- `"navigate"`
  - : Die Navigation wurde durch Klicken auf einen Link, Eingabe der URL in die Adressleiste des Browsers, Absenden eines Formulars oder Initialisierung durch einen Skriptvorgang, der nicht `reload` und `back_forward` wie unten aufgeführt, eingeleitet.
- `"reload"`
  - : Die Navigation erfolgt über die Neuladungsoperation des Browsers, [`location.reload()`](/de/docs/Web/API/Location/reload) oder eine Refresh-Pragma-Direktive wie `<meta http-equiv="refresh" content="300">`.
- `"back_forward"`
  - : Die Navigation erfolgt durch die Verlaufstraversierung des Browsers.
- `"prerender"`
  - : Die Navigation wird durch einen [prerender hint](/de/docs/Web/HTML/Attributes/rel/prerender) eingeleitet.

## Beispiele

### Navigation von Neuladungen protokollieren

Die `type`-Eigenschaft kann verwendet werden, um zu überprüfen, ob die Navigation vom Typ `reload` war. Sie könnten diese `reload`-Einträge an einen serverseitigen Endpunkt sammeln, um festzustellen, welche Seiten Ihrer Website am häufigsten neu geladen werden, oder alle Navigationstypen sammeln und feststellen, wie viele Prozent der Benutzer vor- und zurücknavigieren, zum Beispiel.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Leistungseinträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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
