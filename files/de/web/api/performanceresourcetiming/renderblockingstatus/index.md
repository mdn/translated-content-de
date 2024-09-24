---
title: "PerformanceResourceTiming: Eigenschaft renderBlockingStatus"
short-title: renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
l10n:
  sourceCommit: db1dc6f70f351b0518c1cfef5a0bea68c9f6000b
---

{{APIRef("Resource Timing API")}}

Die schreibgeschützte Eigenschaft **`renderBlockingStatus`** gibt den Status des Render-Blockings der Ressource zurück.

Sie ist nützlich, um Ressourcen zu ermitteln, die:

- kein Render-Blocking verursachten und daher verzögert werden konnten, oder
- render-blocking waren und daher vorab geladen werden konnten.

## Beschreibung

Render-blocking Ressourcen sind statische Dateien wie Fonts, CSS und JavaScript, die den Browser daran hindern, Seiteninhalte auf dem Bildschirm darzustellen. Der Browser bestimmt diese blockierenden Ressourcen automatisch und rendert keine Pixel auf den Bildschirm, bevor alle Stylesheets und synchronen Skripte geladen und ausgewertet wurden. Dies verhindert den "Flash of Unstyled Contents" (FOUC).

Zusätzlich zum automatischen Render-Blocking-Mechanismus kann `blocking="render"` als Attribut und Wert den {{HTMLElement("script")}}, {{HTMLElement("style")}} oder {{HTMLElement("link")}} Elementen hinzugefügt werden, um explizites Render-Blocking anzugeben. Zum Beispiel:

```html
<script blocking="render" src="important.js" defer></script>
```

## Wert

Die `renderBlockingStatus`-Eigenschaft kann die folgenden Werte annehmen:

- `"blocking"`
  - : Die Ressource könnte potenziell das Rendering blockieren.
- `"non-blocking"`
  - : Die Ressource blockiert das Rendering nicht.

## Beispiele

### Ressourcen protokollieren, die das Rendering blockieren

Die `renderBlockingStatus`-Eigenschaft kann verwendet werden, um Ressourcen zu sehen, die das Rendering blockieren.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

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
