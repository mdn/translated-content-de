---
title: "PerformanceEntry: Eigenschaft name"
short-title: name
slug: Web/API/PerformanceEntry/name
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`name`** der Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) ist eine Zeichenfolge, die den Namen eines Performance-Eintrags angibt. Sie dient als Bezeichner, muss aber nicht eindeutig sein. Der Wert hängt von der Unterklasse ab.

## Wert

Eine Zeichenfolge. Der Wert hängt von der Unterklasse des `PerformanceEntry`-Objekts ab, wie in der folgenden Tabelle dargestellt.

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
      <td>Gibt immer eine leere Zeichenfolge zurück.</td>
    </tr>
    <tr>
      <td>[`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)</td>
      <td>Gibt immer eine leere Zeichenfolge zurück.</td>
    </tr>
    <tr>
      <td>[`LayoutShift`](/de/docs/Web/API/LayoutShift)</td>
      <td>Gibt immer <code>"layout-shift"</code> zurück.</td>
    </tr>
    <tr>
      <td>[`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)</td>
      <td>Gibt immer eine leere Zeichenfolge zurück.</td>
    </tr>
    <tr>
      <td>[`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)</td>
      <td>Eine der folgenden Zeichenfolgen:
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
      <td>Eine der folgenden Zeichenfolgen:
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
        Der Name, der beim Erstellen der Markierung durch Aufruf von
        [`performance.mark()`](/de/docs/Web/API/Performance/mark) verwendet wurde.
      </td>
    </tr>
    <tr>
      <td>[`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)</td>
      <td>
        Der Name, der beim Erstellen der Messung durch Aufruf von
        [`performance.measure()`](/de/docs/Web/API/Performance/measure) verwendet wurde.
      </td>
    </tr>
    <tr>
      <td>[`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)</td>
      <td>Die aufgelöste URL der angeforderten Ressource.
      Beachten Sie, dass <a href="/de/docs/Web/URI/Reference/Fragment/Text_fragments">Textfragmente</a> und andere Fragmentdirektiven darin nicht enthalten sind.
      Der Wert ändert sich auch dann nicht, wenn die Anfrage umgeleitet wird.
      </td>
    </tr>
    <tr>
      <td>[`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)</td>
      <td>Eine der folgenden Zeichenfolgen:
        <ul>
          <li><code>"first-paint"</code></li>
          <li><code>"first-contentful-paint"</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>[`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)</td>
      <td>Die aufgelöste URL der angeforderten Ressource. Dieser Wert ändert sich auch dann nicht, wenn die Anfrage umgeleitet wird.</td>
    </tr>
    <tr>
      <td>[`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)</td>
      <td>Die neue URL, zu der navigiert wurde.</td>
    </tr>
    <tr>
      <td>[`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)</td>
      <td>Gibt immer <code>"unknown"</code> zurück.</td>
    </tr>
    <tr>
      <td>[`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)</td>
      <td>Eine der folgenden Zeichenfolgen:
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

Wenn `PerformanceEntry` ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt ist, verweist die Eigenschaft `name` auf die aufgelöste URL der angeforderten Ressource.
In diesem Fall kann die Eigenschaft `name` hilfreich sein, um bestimmte Ressourcen herauszufiltern, beispielsweise alle SVG-Bilder.

```js
// Log durations of SVG resources
performance.getEntriesByType("resource").forEach((entry) => {
  if (entry.name.endsWith(".svg")) {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

### Performance-Einträge anhand ihres Namens abrufen

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) stellen Methoden bereit, mit denen Sie Performance-Einträge direkt anhand ihres Namens abrufen können. Dafür benötigen Sie nicht unbedingt die Eigenschaft `name`; stattdessen können Sie [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) oder [`PerformanceObserverEntryList.getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName) verwenden.

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
