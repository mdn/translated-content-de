---
title: User timing
slug: Web/API/Performance_API/User_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

User Timing ist Teil der Performance API und ermöglicht es Ihnen, die Leistung von Anwendungen mithilfe von [Präzisionszeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp) zu messen, die Teil der Performance-Zeitachse des Browsers sind. Es gibt zwei Arten von Timing-Performance-Einträgen:

- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge sind Markierungen, die Sie benennen und an jeder Stelle in einer Anwendung hinzufügen können.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Einträge sind Zeitmessungen zwischen zwei Markierungen.

## Was ist User Timing?

Der Browser stellt bestimmte Informationen (sogenannte _Performance-Einträge_) für die Performance-Zeitachse des Browsers bereit. Dazu gehören beispielsweise Einträge, die von der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) bereitgestellt werden und die Zeit ermitteln, die benötigt wird, um eine Ressource wie ein Bild abzurufen.

Der Browser kann jedoch nicht feststellen, was in Ihrer Anwendung passiert. Wenn ein Benutzer beispielsweise auf eine Schaltfläche klickt oder eine bestimmte Aufgabe innerhalb Ihrer Anwendung ausführt, gibt es keine genaue Leistungsbewertung. Die User Timing API ist eine Erweiterung der Performance-Zeitachse des Browsers und hilft Ihnen dabei, Leistungsdaten zu messen und aufzuzeichnen, die speziell für Ihre Anwendung sind.

Der Vorteil der Verwendung dieser API gegenüber Aufrufen von {{jsxref("Date.now()")}} oder [`performance.now()`](/de/docs/Web/API/Performance/now) besteht darin, dass Sie den Markierungen einen Namen geben können und sie sich gut in Leistungstools integrieren lässt. Entwicklerwerkzeuge des Browsers können Leistungsmarkierungen in Leistungs-Panels anzeigen, und sie funktioniert auch mit anderen Leistungs-APIs wie [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten.

## Leistungsmarkierungen hinzufügen

Als ersten Schritt zur Messung der Leistung der Funktionen Ihrer Anwendung müssen Sie benannte Leistungsmarkierungen an wichtigen Stellen in Ihrem Code hinzufügen. Ideal ist es, wenn Sie Ihren Code durchsuchen und kritische Pfade und wichtige Aufgaben ermitteln, für die Sie sicherstellen möchten, dass sie schnell durchgeführt werden können.

Die Methode [`performance.mark()`](/de/docs/Web/API/Performance/mark) wird verwendet, um ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) zu erstellen. Die Methode nimmt ein Argument, den `name` der Markierung, wie im folgenden Beispiel gezeigt.

```js
// Place at a location in the code that starts login
performance.mark("login-started");

// Place at a location in the code that finishes login
performance.mark("login-finished");
```

Wenn das `name`-Argument nicht ausreicht, ist `mark()` mit einem Optionen-Objekt konfigurierbar, in dem Sie zusätzliche Informationen in der `detail`-Eigenschaft bereitstellen können, die beliebigen Typs sein kann. Sie können auch bei Bedarf eine andere `startTime` festlegen. Im folgenden Code wird die `startTime` auf `12.5` gesetzt, und zusätzliche Informationen, wie das verwendete HTML-Element, werden mit `detail` bereitgestellt.

```js
performance.mark("login-started", {
  startTime: 12.5,
  detail: { htmlElement: myElement.id },
});
```

## Dauer zwischen Markierungen messen

Jetzt, da Sie Markierungen zu Ihrer Anwendung hinzugefügt haben, können Sie die Zeit dazwischen messen.

Die Methode [`Performance.measure()`](/de/docs/Web/API/Performance/measure) wird verwendet, um ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt zu erstellen. Sie akzeptiert einen `name`-Parameter, der zur Identifizierung der Messung verwendet wird, und zwei Markierungen, `start` und `end`, zwischen denen gemessen werden soll. Das folgende Beispiel erstellt eine `"login-duration"`-Messung und misst zwischen dem Start und dem Ende des Anmeldevorgangs.

Das Objekt hat dann eine `duration`-Eigenschaft, die den End- und Startzeitstempel für Sie berechnet. Zum Beispiel können Sie diesen Wert protokollieren oder an ein Analyse-Endpunkt senden.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);

console.log(loginMeasure.duration);
```

Die Methode [`Performance.measure()`](/de/docs/Web/API/Performance/measure) ist auch mit einem Optionen-Objekt konfigurierbar, sodass Sie fortgeschrittenere Messungen vornehmen oder zusätzliche Informationen mit der `detail`-Eigenschaft bereitstellen können.

Beispielsweise können Sie die [`event.timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft von einem [`click` event](/de/docs/Web/API/Element/click_event) verwenden, um genau zu wissen, wann ein Benutzer auf Login geklickt hat, und dies bis zu dem Zeitpunkt messen, zu dem die Benutzeroberfläche aktualisiert wurde, was hier die `"login-finished"`-Markierung ist.

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

## Beobachtung von Leistungsmaßnahmen

Der bevorzugte Weg, um über Ihre benutzerdefinierten Leistungsmaßnahmen benachrichtigt zu werden, ist die Verwendung von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten. Leistungsbeobachter ermöglichen es Ihnen, sich passiv auf Leistungsmarkierungen und -messungen zu abonnieren, sobald sie auftreten.

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

Es gibt viele verschiedene Performance-Einträge in der Performance-Zeitachse des Browsers. Einige werden vom Browser hinzugefügt, und einige könnten von Ihnen hinzugefügt worden sein, wie die Login-Markierungen und -Messungen aus den obigen Beispielen.

Um Leistungsmarkierungen und -messungen zu einem bestimmten Zeitpunkt abzurufen, bietet die Schnittstelle [`Performance`](/de/docs/Web/API/Performance) drei Methoden, wie unten gezeigt.

> [!NOTE]
> Die untenstehenden Methoden benachrichtigen Sie nicht über neue Leistungsmarkierungen; Sie erhalten nur Markierungen, die erstellt wurden, wenn Sie diese Methoden aufrufen.
> Siehe den Abschnitt [Beobachtung von Leistungsmaßnahmen](#beobachtung_von_leistungsmaßnahmen) oben, um Benachrichtigungen über neue Metriken zu erhalten, sobald diese verfügbar sind, mithilfe eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver). In der Regel ist die Verwendung von Leistungsbeobachtern der bevorzugte Weg, um Leistungsmarkierungen und -messungen zu erhalten.

Die Methode [`performance.getEntries()`](/de/docs/Web/API/Performance/getEntries) holt alle Performance-Einträge. Sie können diese nach Bedarf filtern.

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

Die Methode [`performance.getEntriesByName(name, entryType)`](/de/docs/Web/API/Performance/getEntriesByName) ermöglicht es Ihnen, spezifische Markierungen oder Messungen nach Name abzurufen.

```js
// Log all marks named "debug-marks"
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Entfernen von Markierungen und Messungen

Um alle Performance-Markierungen oder -Messungen zu bereinigen, oder nur spezifische Einträge, stehen die folgenden Methoden zur Verfügung:

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
