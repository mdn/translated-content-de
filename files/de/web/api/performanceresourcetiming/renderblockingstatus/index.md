---
title: "PerformanceResourceTiming: renderBlockingStatus Eigenschaft"
short-title: renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`renderBlockingStatus`** schreibgeschützte Eigenschaft gibt den Render-Blocking-Status der Ressource zurück.

Sie ist nützlich, um Ressourcen zu identifizieren, die:

- nicht render-blockierend waren und daher verzögert werden konnten, oder
- render-blockierend waren und daher vorab geladen werden konnten.

## Beschreibung

Render-blockierende Ressourcen sind statische Dateien wie Schriftarten, CSS und JavaScript, die den Browser daran hindern oder verzögern, Seiteninhalte auf dem Bildschirm darzustellen. Der Browser bestimmt diese blockierenden Ressourcen automatisch und rendert keine Pixel auf dem Bildschirm, bevor alle Stylesheets und synchronen Skripte geladen und ausgewertet wurden. Dies verhindert das Flash of Unstyled Contents ("FOUC").

Zusätzlich zum automatischen Render-Blocking-Mechanismus kann `blocking="render"` als Attribut und Wert für {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}} Elemente angegeben werden, um explizites Render-Blocking zu definieren. Zum Beispiel:

```html
<script blocking="render" src="important.js" defer></script>
```

## Wert

Die `renderBlockingStatus` Eigenschaft kann folgende Werte haben:

- `"blocking"`
  - : Die Ressource könnte potenziell das Rendering blockieren.
- `"non-blocking"`
  - : Die Ressource blockiert das Rendering nicht.

## Beispiele

### Protokollierung von Ressourcen, die das Rendering blockieren

Die `renderBlockingStatus` Eigenschaft kann verwendet werden, um Ressourcen zu sehen, die das Rendering blockieren.

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Performance-Einträge benachrichtigt, sobald sie in der Leistungschronik des Browsers aufgezeichnet werden. Verwenden Sie die `buffered` Option, um auf Einträge vor der Beobachtererstellung zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), welches nur `resource` Performance-Einträge anzeigt, die in der Leistungschronik des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

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
