---
title: "PerformanceEntry: name-Eigenschaft"
short-title: name
slug: Web/API/PerformanceEntry/name
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`name`**-Eigenschaft der {{domxref("PerformanceEntry")}}-Schnittstelle ist ein String, der den Namen eines Performance-Eintrags darstellt. Sie dient als Identifikator, muss jedoch nicht eindeutig sein. Der Wert hängt von der Unterklasse ab.

## Wert

Ein String. Der Wert hängt von der Unterklasse des `PerformanceEntry`-Objekts ab, wie in der untenstehenden Tabelle gezeigt.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Unterklasse</th>
      <th scope="col">Wert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref('LargestContentfulPaint')}}</td>
      <td>Gibt immer einen leeren String zurück.</td>
    </tr>
    <tr>
      <td>{{domxref('LayoutShift')}}</td>
      <td>Gibt immer <code>"layout-shift"</code> zurück.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceElementTiming')}}</td>
      <td>Einer der folgenden Strings:
        <ul>
          <li><code>"image-paint"</code></li>
          <li><code>"text-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceEventTiming')}}</td>
      <td>Der Typ des zugehörigen Ereignisses.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceLongTaskTiming')}}</td>
      <td>Einer der folgenden Strings:
        <ul>
          <li><code>"cross-origin-ancestor"</code></li>
          <li><code>"cross-origin-descendant"</code></li>
          <li><code>"cross-origin-unreachable"</code></li>
          <li><code>"multiple-contexts"</code></li>
          <li><code>"same-origin-ancestor"</code></li>
          <li><code>"same-origin-descendant"</code></li>
          <li><code>"same-origin"</code></li>
          <li><code>"self"</code></li>
          <li><code>"unknown"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMark')}}</td>
      <td>
        Der Name, der beim Erstellen der Markierung durch Aufruf von
        {{domxref("Performance.mark","performance.mark()")}} verwendet wurde.
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceMeasure')}}</td>
      <td>
        Der Name, der beim Erstellen der Messung durch Aufruf von
        {{domxref("Performance.measure","performance.measure()")}} verwendet wurde.
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceNavigationTiming')}}</td>
      <td>Die aufgelöste URL der angeforderten Ressource. Dieser Wert ändert sich nicht, selbst wenn die Anforderung umgeleitet wird.</td>
    </tr>
    <tr>
      <td>{{domxref('PerformancePaintTiming')}}</td>
      <td>Einer der folgenden Strings:
        <ul>
          <li><code>"first-paint"</code></li>
          <li><code>"first-contentful-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>{{domxref('PerformanceResourceTiming')}}</td>
      <td>Die aufgelöste URL der angeforderten Ressource. Dieser Wert ändert sich nicht, selbst wenn die Anforderung umgeleitet wird.</td>
    </tr>
    <tr>
      <td>{{domxref('TaskAttributionTiming')}}</td>
      <td>Gibt immer <code>"unknown"</code> zurück.</td>
    </tr>
    <tr>
      <td>{{domxref('VisibilityStateEntry')}}</td>
      <td>Einer der folgenden Strings:
        <ul>
          <li><code>"visible"</code></li>
          <li><code>"hidden"</code></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Performance-Einträge nach Namen filtern

Wenn der `PerformanceEntry` ein {{domxref('PerformanceResourceTiming')}}-Objekt ist, bezieht sich die `name`-Eigenschaft auf die aufgelöste URL der angeforderten Ressource. In diesem Fall kann die `name`-Eigenschaft nützlich sein, um bestimmte Ressourcen herauszufiltern, zum Beispiel alle SVG-Bilder.

```js
// Protokollieren Sie die Dauer von SVG-Ressourcen
performance.getEntriesByType("resource").forEach((entry) => {
  if (entry.name.endsWith(".svg")) {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

### Performance-Einträge nach Namen abrufen

Sowohl {{domxref("Performance")}} als auch {{domxref("PerformanceObserver")}} bieten Methoden, mit denen Sie Performance-Einträge direkt nach Namen abrufen können. Sie benötigen nicht unbedingt die `name`-Eigenschaft dafür, stattdessen könnten Sie {{domxref("Performance.getEntriesByName()")}} oder {{domxref("PerformanceObserverEntryList.getEntriesByName()")}} verwenden.

```js
// Protokollieren Sie alle Marks mit dem Namen "debug-marks" zu diesem Zeitpunkt
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});

// PerformanceObserver-Version
// Protokollieren Sie alle Marks mit dem Namen "debug-marks", wenn sie auftreten
function perfObserver(list, observer) {
  list.getEntriesByName("debug-mark", "mark").forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Performance.getEntriesByName()")}}
- {{domxref("PerformanceObserverEntryList.getEntriesByName()")}}
