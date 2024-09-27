---
title: "PerformanceResourceTiming: renderBlockingStatus-Eigenschaft"
short-title: renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
l10n:
  sourceCommit: db1dc6f70f351b0518c1cfef5a0bea68c9f6000b
---

{{APIRef("Resource Timing API")}}

Die schreibgeschützte Eigenschaft **`renderBlockingStatus`** gibt den Render-Blockierungsstatus der Ressource zurück.

Sie ist nützlich, um Ressourcen zu identifizieren, die:

- nicht render-blockierend waren und daher verzögert werden könnten, oder
- render-blockierend waren und daher vorab geladen werden könnten.

## Beschreibung

Render-blockierende Ressourcen sind statische Dateien wie Schriftarten, CSS und JavaScript, die den Browser daran hindern oder verzögern, Seiteninhalte auf dem Bildschirm darzustellen. Der Browser bestimmt diese blockierenden Ressourcen automatisch und rendert kein Pixel auf den Bildschirm, bevor alle Stylesheets und synchronen Skripte geladen und ausgewertet sind. Dies verhindert den Flash of Unstyled Contents ("FOUC").

Zusätzlich zum automatischen Mechanismus zur Render-Blockierung kann `blocking="render"` als Attribut und Wert zu {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}} Elementen hinzugefügt werden, um eine explizite Render-Blockierung anzugeben. Zum Beispiel:

```html
<script blocking="render" src="important.js" defer></script>
```

## Wert

Die Eigenschaft `renderBlockingStatus` kann folgende Werte haben:

- `"blocking"`
  - : Die Ressource könnte potenziell das Rendering blockieren.
- `"non-blocking"`
  - : Die Ressource blockiert das Rendering nicht.

## Beispiele

### Protokollierung von Ressourcen, die das Rendering blockieren

Die Eigenschaft `renderBlockingStatus` kann verwendet werden, um Ressourcen zu sehen, die das Rendering blockieren.

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.renderBlockingStatus === "blocking") {
      console.log(`${entry.name} is render-blocking.`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.renderBlockingStatus === "blocking") {
    console.log(`${entry.name} is render-blocking.`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
