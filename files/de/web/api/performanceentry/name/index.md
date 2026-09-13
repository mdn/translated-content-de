---
title: "PerformanceEntry: name-Eigenschaft"
short-title: name
slug: Web/API/PerformanceEntry/name
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`name`**-Eigenschaft der [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Schnittstelle ist ein String, der den Namen eines Leistungseintrags darstellt. Sie fungiert als Bezeichner, muss jedoch nicht eindeutig sein. Der Wert hängt von der Unterklasse ab.

## Wert

Ein String. Der Wert hängt von der Unterklasse des `PerformanceEntry`-Objekts ab, wie in der Tabelle unten gezeigt.

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Unterklasse</th>
      <th scope="col">Wert</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)</td>
      <td>Gibt immer einen leeren String zurück.</td>
    </tr>
    <tr>
      <td>[`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)</td>
      <td>Gibt immer einen leeren String zurück.</td>
    </tr>
    <tr>
      <td>[`LayoutShift`](/de/docs/Web/API/LayoutShift)</td>
      <td>Gibt immer <code>"layout-shift"</code> zurück.</td>
    </tr>
    <tr>
      <td>[`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)</td>
      <td>Einer der folgenden Strings:
        <ul>
          <li><code>"image-paint"</code></li>
          <li><code>"text-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>[`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)</td>
      <td>Der Typ des zugehörigen Ereignisses.</td>
    </tr>
    <tr>
      <td>[`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)</td>
      <td>Gibt immer <code>"long-animation-frame"</code> zurück.</td>
    </tr>
    <tr>
      <td>[`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)</td>
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
      <td>[`PerformanceMark`](/de/docs/Web/API/PerformanceMark)</td>
      <td>
        Der Name, der verwendet wurde, als die Markierung durch Aufruf von
        [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt wurde.
      </td>
    </tr>
    <tr>
      <td>[`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)</td>
      <td>
        Der Name, der verwendet wurde, als die Messung durch Aufruf von
        [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt wurde.
      </td>
    </tr>
    <tr>
      <td>[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)</td>
      <td>Die aufgelöste URL der angeforderten Ressource.
      Beachten Sie, dass dies alle <a href="/de/docs/Web/URI/Reference/Fragment/Text_fragments">Textfragmente</a> oder andere Fragmentdirektiven ausschließt.
      Der Wert ändert sich nicht, auch wenn die Anfrage umgeleitet wird.
      </td>
    </tr>
    <tr>
      <td>[`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)</td>
      <td>Einer der folgenden Strings:
        <ul>
          <li><code>"first-paint"</code></li>
          <li><code>"first-contentful-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>[`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)</td>
      <td>Die aufgelöste URL der angeforderten Ressource. Dieser Wert ändert sich nicht, auch wenn die Anfrage umgeleitet wird.</td>
    </tr>
    <tr>
      <td>[`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)</td>
      <td>Die neue navigierte URL.</td>
    </tr>
    <tr>
      <td>[`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)</td>
      <td>Gibt immer <code>"unknown"</code> zurück.</td>
    </tr>
    <tr>
      <td>[`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)</td>
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

### Leistungseinträge nach Name filtern

Wenn das `PerformanceEntry`-Objekt ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Objekt ist, bezieht sich die `name`-Eigenschaft auf die aufgelöste URL der angeforderten Ressource. In diesem Fall kann die `name`-Eigenschaft nützlich sein, um bestimmte Ressourcen herauszufiltern, beispielsweise alle SVG-Bilder.

```js
// Log durations of SVG resources
performance.getEntriesByType("resource").forEach((entry) => {
  if (entry.name.endsWith(".svg")) {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

### Leistungseinträge nach Name abrufen

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) bieten Methoden, die es ermöglichen, Leistungseinträge direkt nach Name abzurufen. Man benötigt nicht unbedingt die `name`-Eigenschaft dafür, stattdessen kann man [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) oder [`PerformanceObserverEntryList.getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName) verwenden.

```js
// Log all marks named "debug-marks" at this point in time
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});

// PerformanceObserver version
// Log all marks named "debug-marks" when they happen
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

- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
- [`PerformanceObserverEntryList.getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName)
