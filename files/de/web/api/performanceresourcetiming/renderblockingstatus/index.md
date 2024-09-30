---
title: "PerformanceResourceTiming: Eigenschaft renderBlockingStatus"
short-title: renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
l10n:
  sourceCommit: db1dc6f70f351b0518c1cfef5a0bea68c9f6000b
---

{{APIRef("Resource Timing API")}}

Die schreibgeschützte Eigenschaft **`renderBlockingStatus`** gibt den render-blockierenden Status der Ressource zurück.

Sie ist nützlich, um festzustellen, welche Ressourcen:

- nicht render-blockierend waren und daher verzögert werden konnten, oder
- render-blockierend waren und daher vorab geladen werden konnten.

## Beschreibung

Render-blockierende Ressourcen sind statische Dateien wie Schriftarten, CSS und JavaScript, die den Browser daran hindern oder aufhalten, Seiteninhalte auf dem Bildschirm darzustellen. Der Browser bestimmt diese blockierenden Ressourcen automatisch und rendert keinen Pixel auf dem Bildschirm, bevor nicht alle Stylesheets und synchronen Skripte geladen und ausgewertet wurden. Dies verhindert das "Flash of Unstyled Contents" ("FOUC").

Zusätzlich zum automatischen render-blockierenden Mechanismus kann `blocking="render"` als Attribut und Wert in den {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}} Elementen angegeben werden, um explizites Render-Blockieren zu spezifizieren. Zum Beispiel:

```html
<script blocking="render" src="important.js" defer></script>
```

## Wert

Die `renderBlockingStatus`-Eigenschaft kann die folgenden Werte haben:

- `"blocking"`
  - : Die Ressource könnte potenziell das Rendering blockieren.
- `"non-blocking"`
  - : Die Ressource blockiert das Rendering nicht.

## Beispiele

### Auflisten von Ressourcen, die das Rendering blockieren

Die `renderBlockingStatus`-Eigenschaft kann verwendet werden, um Ressourcen zu sehen, die das Rendering blockieren.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Leistungszeitachse des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitachse des Browsers vorhanden sind:

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
