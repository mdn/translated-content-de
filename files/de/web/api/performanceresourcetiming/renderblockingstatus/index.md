---
title: "PerformanceResourceTiming: Eigenschaft renderBlockingStatus"
short-title: renderBlockingStatus
slug: Web/API/PerformanceResourceTiming/renderBlockingStatus
l10n:
  sourceCommit: dcef271d72ac6af79454379af98cdb670c417eb5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`renderBlockingStatus`** gibt an, ob die Ressource das Rendering blockiert.

Sie ist nützlich, um Ressourcen zu ermitteln, die:

- das Rendering nicht blockiert haben und daher verzögert geladen werden könnten, oder
- das Rendering blockiert haben und daher vorgeladen werden könnten.

## Wert

Die Eigenschaft `renderBlockingStatus` kann folgende Werte haben:

- `"blocking"`
  - : Die Ressource könnte das Rendering potenziell blockieren.
- `"non-blocking"`
  - : Die Ressource blockiert das Rendering nicht.

## Beschreibung

Ressourcen, die das Rendering blockieren, sind statische Dateien wie Schriftarten, CSS und JavaScript, die verhindern oder verzögern, dass der Browser Seiteninhalte auf dem Bildschirm darstellt. Der Browser ermittelt diese Ressourcen automatisch und stellt erst dann Pixel auf dem Bildschirm dar, wenn alle Stylesheets und synchronen Skripte geladen und ausgewertet wurden. Dadurch wird ein kurzzeitiges Anzeigen ungestalteter Inhalte („Flash of Unstyled Contents“, FOUC) verhindert.

Zusätzlich zum automatischen Mechanismus kann `blocking="render"` als Attribut mit entsprechendem Wert für {{HTMLElement("script")}}-, {{HTMLElement("style")}}- oder {{HTMLElement("link")}}-Elemente angegeben werden, um das Rendering ausdrücklich zu blockieren. Zum Beispiel:

```html
<script blocking="render" src="important.js" defer></script>
```

## Beispiele

### Ressourcen protokollieren, die das Rendering blockieren

Mit der Eigenschaft `renderBlockingStatus` können Sie sehen, welche Ressourcen das Rendering blockieren.

Das folgende Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver). Er benachrichtigt über neue `resource`-Performance-Einträge, sobald diese in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die bereits vor der Erstellung des Observers erfasst wurden.

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

Das folgende Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Diese Methode zeigt nur die `resource`-Performance-Einträge an, die zum Zeitpunkt des Aufrufs in der Performance-Timeline des Browsers vorhanden sind:

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
