---
title: "PerformanceNavigationTiming: type-Eigenschaft"
short-title: type
slug: Web/API/PerformanceNavigationTiming/type
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`type`**-Eigenschaft gibt den Typ der Navigation zurück.

Sie können diese Eigenschaft verwenden, um Ihre Navigationszeitdaten zu kategorisieren, da jeder dieser Typen unterschiedliche Leistungsmerkmale aufweist. Benutzer, die hin- und herwechseln, könnten eine schnellere Website erleben als Benutzer, die zum ersten Mal navigieren oder Formulare absenden, usw.

Zum Beispiel, wenn Ihre Website häufig neue Inhalte bereitstellt, möchten Sie diese Inhalte möglicherweise mit [Fetch](/de/docs/Web/API/Fetch_API) oder Ähnlichem aktualisieren und vermeiden, dass Benutzer die gesamte Seite ständig neu laden müssen. Der Typ `"reload"` kann Ihnen helfen, Seiten zu finden, die häufig neu geladen werden.

## Wert

Die `type`-Eigenschaft kann die folgenden Werte haben:

- `"navigate"`
  - : Navigation, die durch Klicken auf einen Link, Eingeben der URL in die Adressleiste des Browsers, Formulareinsendung oder Initialisierung über eine Skriptoperation, die nicht `reload` und `back_forward` ist, gestartet wurde.
- `"reload"`
  - : Navigation über die Neuladungsoperation des Browsers, {{domxref("location.reload()")}} oder eine Refresh-Pragma-Direktive wie `<meta http-equiv="refresh" content="300">`.
- `"back_forward"`
  - : Navigation über die Verlaufsdurchlaufoperation des Browsers.
- `"prerender"`
  - : Navigation wird durch einen [Prerender-Hinweis](/de/docs/Web/HTML/Attributes/rel/prerender) initiiert.

## Beispiele

### Protokollierung von Neuladungsnavigation

Die `type`-Eigenschaft kann verwendet werden, um zu überprüfen, ob die Navigation vom Typ `reload` war. Sie könnten diese `reload`-Einträge in einem serverseitigen Endpunkt sammeln, um festzustellen, welche Seiten Ihrer Website am häufigsten neu geladen werden, oder alle Navigationstypen sammeln und bestimmen, welcher Prozentsatz der Benutzer vor- und zurückgeht, zum Beispiel.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Leistungseinträge benachrichtigt, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

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
