---
title: User Timing
slug: Web/API/Performance_API/User_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

User Timing ist Teil der Performance API und ermöglicht Ihnen, die Leistung von Anwendungen mittels [hochauflösender Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zu messen, die Teil der Leistungstimeline des Browsers sind. Es gibt zwei Arten von Performance-Einträgen:

- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Einträge sind Markierungen, die Sie benennen und an einer beliebigen Stelle in einer Anwendung hinzufügen können.
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Einträge sind Zeitmessungen zwischen zwei Markierungen.

## Was ist User Timing?

Der Browser stellt Ihnen bestimmte Informationen (sogenannte _Performance-Einträge_) in der Leistungstimeline des Browsers zur Verfügung. Dazu gehören beispielsweise Einträge, die von der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) bereitgestellt werden und die Zeit bestimmen, die zum Abrufen einer Ressource wie eines Bildes benötigt wird.

Der Browser kann jedoch nicht bestimmen, was in Ihrer Anwendung vor sich geht. Zum Beispiel gibt es keine hochpräzise Leistungsüberwachung, wenn ein Benutzer einen Button klickt oder eine bestimmte Aufgabe innerhalb Ihrer Anwendung ausführt. Die User Timing API ist eine Erweiterung der Leistungstimeline des Browsers und hilft Ihnen, Leistungsdaten zu messen und aufzuzeichnen, die speziell für Ihre Anwendung sind.

Der Vorteil der Verwendung dieser API gegenüber Aufrufen von {{jsxref("Date.now()")}} oder [`performance.now()`](/de/docs/Web/API/Performance/now) besteht darin, dass Sie den Markierungen einen Namen geben können und sie sich nahtlos in Leistungswerkzeuge integrieren. Die Entwicklertools des Browsers können Leistungsmarkierungen in Performance-Panels anzeigen, und sie arbeitet auch mit anderen Performance-APIs wie [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten zusammen.

## Hinzufügen von Leistungsmarkierungen

Als erster Schritt zur Messung der Leistung Ihrer App-Funktionalität müssen Sie benannte Leistungsmarkierungen an wichtigen Stellen in Ihrem Code hinzufügen. Idealerweise durchlaufen Sie Ihren Code und bestimmen kritische Pfade und wichtige Aufgaben, für die Sie sicherstellen möchten, dass sie schnell durchgeführt werden können.

Die Methode [`performance.mark()`](/de/docs/Web/API/Performance/mark) wird verwendet, um eine [`PerformanceMark`](/de/docs/Web/API/PerformanceMark) zu erstellen. Die Methode nimmt ein Argument, den `name` der Markierung, wie im folgenden Beispiel gezeigt.

```js
// Place at a location in the code that starts login
performance.mark("login-started");

// Place at a location in the code that finishes login
performance.mark("login-finished");
```

Falls das `name`-Argument nicht ausreicht, ist `mark()` konfigurierbar mit einem Optionsobjekt, in das Sie zusätzliche Informationen in der `detail`-Eigenschaft einfügen können, die vom beliebigen Typ sein kann. Sie können auch eine andere `startTime` festlegen, wenn nötig. Im folgenden Code ist die `startTime` auf `12.5` gesetzt, und zusätzliche Informationen, wie das verwendete HTML-Element, werden mit `detail` bereitgestellt.

```js
performance.mark("login-started", {
  startTime: 12.5,
  detail: { htmlElement: myElement.id },
});
```

## Dauer zwischen Markierungen messen

Nachdem Sie nun Markierungen zu Ihrer Anwendung hinzugefügt haben, können Sie die Zeit zwischen ihnen messen.

Die Methode [`Performance.measure()`](/de/docs/Web/API/Performance/measure) wird verwendet, um ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt zu erstellen. Sie akzeptiert einen `name`-Parameter, der zur Identifizierung der Messung verwendet wird, und zwei Markierungen, `start` und `end`, zwischen denen gemessen werden soll. Im folgenden Beispiel wird eine `"login-duration"`-Messung erstellt und zwischen dem Start und dem Ende des Anmeldevorgangs gemessen.

Das Objekt hat dann eine `duration`-Eigenschaft, die den Endmarkierungs-Zeitstempel minus den Startmarkierungs-Zeitstempel für Sie berechnet. Sie können diesen Wert beispielsweise protokollieren oder an ein Analyse-Endpoint senden.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);

console.log(loginMeasure.duration);
```

Die Methode [`Performance.measure()`](/de/docs/Web/API/Performance/measure) ist auch mit einem Optionsobjekt konfigurierbar, sodass Sie erweiterte Messungen durchführen oder zusätzliche Informationen mit der `detail`-Eigenschaft bereitstellen können.

Zum Beispiel können Sie die [`event.timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft eines [`click` events](/de/docs/Web/API/Element/click_event) verwenden, um genau zu wissen, wann ein Benutzer auf Login geklickt hat und das bis zu dem Zeitpunkt messen, als das UI aktualisiert wurde, was hier die `"login-finished"`-Markierung ist.

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

## Beobachtung von Leistungsmaßen

Die empfohlene Methode, um über Ihre benutzerdefinierten Leistungsmaße benachrichtigt zu werden, ist die Verwendung von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Objekten. Leistungsbeobachter ermöglichen es Ihnen, passiv Leistungsmarkierungen und -maße zu abonnieren, während sie auftreten.

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

Für weitere Informationen siehe [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

## Abfragen von Markierungen und Maßen

Es gibt viele verschiedene Leistungseinträge in der Leistungstimeline des Browsers. Einige werden vom Browser hinzugefügt, andere könnten von Ihnen hinzugefügt werden, wie die Anmelde-Markierungen und -Maße aus den obigen Beispielen.

Um Leistungsmarkierungen und -maße zu einem bestimmten Zeitpunkt abzurufen, bietet das [`Performance`](/de/docs/Web/API/Performance)-Interface drei Methoden, wie unten gezeigt.

> [!NOTE]
> Die untenstehenden Methoden benachrichtigen Sie nicht über neue Leistungsmarkierungen; Sie erhalten nur Markierungen, die erstellt wurden, wenn Sie diese Methoden aufrufen.
> Siehe den Abschnitt [Beobachtung von Leistungsmaßen](#beobachtung_von_leistungsmaßen) oben, um Benachrichtigungen über neue Metriken zu erhalten, sobald sie mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verfügbar werden. Normalerweise ist die Verwendung von Leistungsbeobachtern der bevorzugte Weg, um Leistungsmarkierungen und -maße zu erhalten.

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

Die Methode [`performance.getEntriesByName(name, entryType)`](/de/docs/Web/API/Performance/getEntriesByName) ermöglicht es Ihnen, spezifische Markierungen oder Maße nach Namen zu erhalten.

```js
// Log all marks named "debug-marks"
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Entfernen von Markierungen und Maßen

Um alle Leistungsmarkierungen oder Modelle oder nur bestimmte Einträge zu bereinigen, stehen die folgenden Methoden zur Verfügung:

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
