---
title: User timing
slug: Web/API/Performance_API/User_timing
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{DefaultAPISidebar("Performance API")}}

User Timing ist Teil der Performance API und ermöglicht es Ihnen, die Leistung von Anwendungen mit [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp) zu messen, die Teil der Leistungstimeline des Browsers sind. Es gibt zwei Arten von Timing-Performance-Einträgen:

- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge sind Markierungen, die Sie benennen und an jeder Stelle in einer Anwendung hinzufügen können.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Einträge sind Zeitmessungen zwischen zwei Markierungen.

## Was ist User Timing?

Der Browser stellt bestimmte Informationen (sogenannte _Performance-Einträge_) für die Leistungstimeline des Browsers bereit. Dazu gehören beispielsweise Einträge, die von der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) bereitgestellt werden und die Zeit bestimmen, die erforderlich ist, um eine Ressource wie ein Bild abzurufen.

Der Browser kann jedoch nicht bestimmen, was in Ihrer Anwendung passiert. Wenn beispielsweise ein Benutzer auf eine Schaltfläche klickt oder eine bestimmte Aufgabe innerhalb Ihrer Anwendung ausführt, gibt es keine hochpräzise Leistungsbewertung. Die User Timing API ist eine Erweiterung der Leistungstimeline des Browsers und hilft Ihnen, Leistungsdaten zu messen und aufzuzeichnen, die speziell für Ihre Anwendung sind.

Der Vorteil der Verwendung dieser API im Vergleich zu Aufrufen von {{jsxref("Date.now()")}} oder [`performance.now()`](/de/docs/Web/API/Performance/now) besteht darin, dass Sie den Markierungen einen Namen geben können und sie sich gut in Leistungstools integrieren. Entwicklertools des Browsers können Leistungspunkte in Leistungspanels anzeigen, und sie funktioniert auch mit anderen Leistungs-APIs wie [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten.

## Hinzufügen von Leistungsmarkierungen

Als erster Schritt zur Messung der Leistung der Funktionen Ihrer App müssen Sie an wichtigen Stellen in Ihrem Code benannte Leistungsmarkierungen hinzufügen. Idealerweise durchgehen Sie Ihren Code und bestimmen kritische Pfade und wichtige Aufgaben, bei denen Sie sicherstellen möchten, dass sie schnell ausgeführt werden können.

Die Methode [`performance.mark()`](/de/docs/Web/API/Performance/mark) wird verwendet, um eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) zu erstellen. Die Methode nimmt ein Argument entgegen, den `name` der Markierung, wie im folgenden Beispiel gezeigt.

```js
// Place at a location in the code that starts login
performance.mark("login-started");

// Place at a location in the code that finishes login
performance.mark("login-finished");
```

Wenn das `name`-Argument nicht ausreicht, ist `mark()` mit einem Optionsobjekt konfigurierbar, in dem Sie zusätzliche Informationen in der `detail`-Eigenschaft platzieren können, die von jedem Typ sein kann. Sie können auch eine andere `startTime` einstellen, falls erforderlich. Im folgenden Code ist die `startTime` auf `12.5` gesetzt, und zusätzliche Informationen wie das verwendete HTML-Element werden mit `detail` angegeben.

```js
performance.mark("login-started", {
  startTime: 12.5,
  detail: { htmlElement: myElement.id },
});
```

## Messen der Dauer zwischen Markierungen

Nachdem Sie Markierungen zu Ihrer Anwendung hinzugefügt haben, können Sie die Zeit zwischen ihnen messen.

Die Methode [`Performance.measure()`](/de/docs/Web/API/Performance/measure) wird verwendet, um ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt zu erstellen. Es akzeptiert einen `name`-Parameter, der verwendet wird, um die Messung zu identifizieren, und zwei Markierungen, `start` und `end`, die zwischen gemessen werden sollen. Das folgende Beispiel erstellt eine `"login-duration"`-Messung und misst zwischen Anfang und Ende des Anmeldevorgangs.

Das Objekt hat dann eine `duration`-Eigenschaft, die den Endmarkierungszeitstempel minus den Startmarkierungszeitstempel für Sie berechnet. Zum Beispiel können Sie diesen Wert protokollieren oder an ein Analyse-Endpunkt senden.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);

console.log(loginMeasure.duration);
```

Die Methode [`Performance.measure()`](/de/docs/Web/API/Performance/measure) ist auch mit einem Optionsobjekt konfigurierbar, sodass Sie fortgeschrittenere Messungen durchführen oder mit der `detail`-Eigenschaft zusätzliche Informationen bereitstellen können.

Zum Beispiel können Sie die [`event.timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft von einem [`click` event](/de/docs/Web/API/Element/click_event) verwenden, um genau zu wissen, wann ein Benutzer auf Anmelden geklickt hat, und dies zu dem Zeitpunkt messen, an dem die Benutzeroberfläche aktualisiert wurde, was hier der `"login-finished"`-Marker ist.

```js
loginButton.addEventListener("click", (clickEvent) => {
  fetch(loginURL).then((data) => {
    renderLoggedInUser(data);

    const marker = performance.mark("login-finished");

    performance.measure("login-click", {
      detail: { htmlElement: myElement.id },
      start: clickEvent.timeStamp,
      end: marker.startTime,
    });
  });
});
```

## Beobachten von Leistungsmaßnahmen

Der bevorzugte Weg, benachrichtigt zu werden, über Ihre benutzerdefinierten Leistungsmaßnahmen, ist die Verwendung von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten. Leistungsbeobachter erlauben Ihnen, passiv auf Leistungsmarken und -messungen zu abonnieren, während sie geschehen.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

Weitere Informationen finden Sie unter [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

## Abrufen von Markierungen und Messungen

Es gibt viele verschiedene Leistungseinträge in der Leistungstimeline des Browsers. Einige werden vom Browser hinzugefügt und einige könnten von Ihnen hinzugefügt werden, wie die Anmeldemarkierungen und -messungen aus den obigen Beispielen.

Um Leistungsmarken und -messungen zu einem bestimmten Zeitpunkt abzurufen, bietet das [`Performance`](/de/docs/Web/API/Performance)-Interface drei Methoden, wie unten gezeigt.

> [!NOTE]
> Die untenstehenden Methoden benachrichtigen Sie nicht über neue Leistungsmarken; Sie erhalten nur Marken, die erstellt wurden, wenn Sie diese Methoden aufrufen.
> Siehe den Abschnitt [Beobachten von Leistungsmaßnahmen](#beobachten_von_leistungsmaßnahmen) oben, um Benachrichtigungen über neue Metriken zu erhalten, sobald sie verfügbar werden, unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver). Normalerweise ist die Verwendung von Leistungsbeobachtern der bevorzugte Weg, um Leistungsmarken und -messungen zu erhalten.

Die Methode [`performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) holt alle Leistungseinträge. Sie können sie nach Bedarf filtern.

```js
const entries = performance.getEntries();
entries.forEach((entry) => {
  if (entry.entryType === "mark") {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  }
  if (entry.entryType === "measure") {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  }
});
```

Die Methode [`performance.getEntriesByType(entryType)`](/de/docs/Web/API/Performance/getEntriesByType) filtert die Einträge bereits nach Typ.

```js
const marks = performance.getEntriesByType("mark");
marks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});

const measures = performance.getEntriesByType("measure");
measures.forEach((entry) => {
  console.log(`${entry.name}'s duration: ${entry.duration}`);
});
```

Die Methode [`performance.getEntriesByName(name, entryType)`](/de/docs/Web/API/Performance/getEntriesByName) ermöglicht es Ihnen, spezifische Marken oder Messungen nach Namen zu erhalten.

```js
// Log all marks named "debug-marks"
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Entfernen von Markierungen und Messungen

Um alle Leistungsmarken oder -messungen oder nur bestimmte Einträge zu bereinigen, stehen die folgenden Methoden zur Verfügung:

- [`performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
- [`performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)

```js
// Clear all marks
performance.clearMarks();

// Removes the marker with the name "myMarker"
performance.clearMarks("myMarker");

// Clear all measures
performance.clearMeasures();

// Removes the measure with the name "myMeasure"
performance.clearMeasures("myMeasure");
```

## Siehe auch

- [`Performance`](/de/docs/Web/API/Performance)
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)
