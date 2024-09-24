---
title: Benutzerzeitmessung
slug: Web/API/Performance_API/User_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

Die Benutzer-Zeitmessung ist Teil der Performance API und ermöglicht es Ihnen, die Leistung von Anwendungen mithilfe von [hochpräzisen Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp) zu messen, die Teil der Leistungstimeline des Browsers sind. Es gibt zwei Arten von Leistungszeiteinträgen:

- {{domxref("PerformanceMark")}}-Einträge sind Marken, die Sie benennen und an beliebiger Stelle in einer Anwendung hinzufügen können.
- {{domxref("PerformanceMeasure")}}-Einträge sind Zeitmessungen zwischen zwei Marken.

## Was ist Benutzerzeitmessung?

Der Browser stellt bestimmte Informationen (sogenannte _Performance-Einträge_) für die Leistungstimeline des Browsers bereit. Dazu gehören beispielsweise Einträge, die von der [Resource Timing API](/de/docs/Web/API/Performance_API/Resource_timing) bereitgestellt werden, die die Zeit bestimmen, die benötigt wird, um eine Ressource wie ein Bild abzurufen.

Der Browser kann jedoch nicht bestimmen, was in Ihrer Anwendung passiert. Zum Beispiel, wenn ein Benutzer einen Button anklickt oder eine bestimmte Aufgabe innerhalb Ihrer Anwendung ausführt, gibt es keine hochpräzise Leistungsmessung. Die Benutzer-Zeitmessung-API ist eine Erweiterung der Leistungstimeline des Browsers und hilft Ihnen dabei, Leistungsdaten zu messen und aufzuzeichnen, die speziell für Ihre Anwendung sind.

Der Vorteil der Verwendung dieser API gegenüber Aufrufen von {{jsxref("Date.now()")}} oder {{domxref("performance.now()")}} besteht darin, dass Sie den Markierungen einen Namen geben können und dass sie sich gut in Leistungstools integriert. Entwicklerwerkzeuge des Browsers können Leistungsmarken in Performance-Panels anzeigen, und es funktioniert auch mit anderen Performance-APIs wie {{domxref("PerformanceObserver")}}-Objekten.

## Hinzufügen von Leistungsmarkierungen

Um mit der Messung der Leistung Ihrer App-Funktionalität zu beginnen, müssen Sie benannte Leistungsmarken an wichtigen Stellen in Ihrem Code hinzufügen. Idealerweise gehen Sie durch Ihren Code und bestimmen kritische Pfade und wichtige Aufgaben, für die Sie sicherstellen möchten, dass sie schnell ausgeführt werden können.

Die Methode {{domxref("Performance.mark","performance.mark()")}} wird verwendet, um eine {{domxref("PerformanceMark")}} zu erstellen. Die Methode nimmt ein Argument, den `name` der Marke, wie im folgenden Beispiel gezeigt.

```js
// An einer Stelle im Code platzieren, die den Login startet
performance.mark("login-started");

// An einer Stelle im Code platzieren, die den Login abschließt
performance.mark("login-finished");
```

Wenn das `name`-Argument nicht ausreicht, kann `mark()` mit einem Optionsobjekt konfiguriert werden, in dem Sie zusätzliche Informationen in der `detail`-Eigenschaft angeben können, die von jedem Typ sein kann. Sie können auch bei Bedarf eine andere `startTime` festlegen. Im folgenden Code wird die `startTime` auf `12.5` gesetzt, und zusätzliche Informationen, wie das verwendete HTML-Element, werden mit `detail` bereitgestellt.

```js
performance.mark("login-started", {
  startTime: 12.5,
  detail: { htmlElement: myElement.id },
});
```

## Dauer zwischen Markierungen messen

Nachdem Sie nun Markierungen zu Ihrer Anwendung hinzugefügt haben, können Sie die Zeit zwischen ihnen messen.

Die Methode {{domxref("Performance.measure()")}} wird verwendet, um ein {{domxref("PerformanceMeasure")}}-Objekt zu erstellen. Sie akzeptiert einen `name`-Parameter, der zur Identifizierung des Maßes verwendet wird, und zwei Marken, `start` und `end`, zwischen denen gemessen werden soll. Das folgende Beispiel erstellt ein `"login-duration"` Maß und misst zwischen dem Anfang und dem Ende des Anmeldevorgangs.

Das Objekt hat dann eine `duration`-Eigenschaft, die für Sie den Zeitstempel der Endmarke minus den Zeitstempel der Startmarke berechnet. Zum Beispiel können Sie diesen Wert protokollieren oder an einen Analyseendpunkt senden.

```js
const loginMeasure = performance.measure(
  "login-duration",
  "login-started",
  "login-finished",
);

console.log(loginMeasure.duration);
```

Die Methode {{domxref("Performance.measure()")}} kann ebenfalls mit einem Optionsobjekt konfiguriert werden, sodass Sie fortgeschrittenere Messungen durchführen oder zusätzliche Informationen mit der `detail`-Eigenschaft bereitstellen können.

Zum Beispiel können Sie die [`event.timestamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft von einem [`click`-Ereignis](/de/docs/Web/API/Element/click_event) verwenden, um genau zu wissen, wann ein Benutzer auf Login geklickt hat und dies bis zu dem Zeitpunkt zu messen, zu dem die Benutzeroberfläche aktualisiert wurde, was hier die `"login-finished"`-Marke ist.

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

## Leistungsmessungen beobachten

Der bevorzugte Weg, um über Ihre benutzerdefinierten Leistungsmessungen benachrichtigt zu werden, ist die Verwendung von {{domxref("PerformanceObserver")}}-Objekten. Performance-Observer erlauben Ihnen, sich passiv auf Leistungsmarken und -messungen zu abonnieren, während sie auftreten.

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

Für weitere Informationen, siehe {{domxref("PerformanceObserver")}}.

## Markierungen und Messungen abrufen

Es gibt viele verschiedene Performance-Einträge in der Leistungstimeline des Browsers. Einige werden vom Browser hinzugefügt, und einige könnten von Ihnen hinzugefügt worden sein, wie die Login-Markierungen und -Messungen aus den obigen Beispielen.

Um Leistungsmarken und -messungen zu einem bestimmten Zeitpunkt abzurufen, bietet die {{domxref("Performance")}}-Schnittstelle drei Methoden, wie unten gezeigt.

> [!NOTE]
> Die untenstehenden Methoden benachrichtigen Sie nicht über neue Leistungsmarken; Sie erhalten nur Marken, die erstellt wurden, wenn Sie diese Methoden aufrufen.
> Siehe den Abschnitt [Leistungsmessungen beobachten](#leistungsmessungen_beobachten) oben, um Benachrichtigungen über neue Metriken zu erhalten, sobald sie verfügbar werden, mithilfe eines {{domxref("PerformanceObserver")}}. In der Regel ist die Verwendung von Performance-Observern der bevorzugte Weg, um Leistungsmarken und -messungen zu erhalten.

Die Methode {{domxref("Performance.getEntries","performance.getEntries()")}} erhält alle Performance-Einträge. Sie können sie nach Bedarf filtern.

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

Die Methode {{domxref("Performance.getEntriesByType","performance.getEntriesByType(entryType)")}} filtert die Einträge bereits nach Typ.

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

Die Methode {{domxref("Performance.getEntriesByName","performance.getEntriesByName(name, entryType)")}} ermöglicht es Ihnen, spezifische Marken oder Messungen nach Namen zu erhalten.

```js
// Protokollieren Sie alle Marken namens "debug-marks"
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Markierungen und Messungen entfernen

Um alle Leistungsmarken oder -messungen zu bereinigen oder nur bestimmte Einträge, sind die folgenden Methoden verfügbar:

- [`performance.clearMarks()`](/de/docs/Web/API/Performance/clearMarks)
- [`performance.clearMeasures()`](/de/docs/Web/API/Performance/clearMeasures)

```js
// Alle Marken löschen
performance.clearMarks();

// Entfernt die Marke mit dem Namen "myMarker"
performance.clearMarks("myMarker");

// Alle Messungen löschen
performance.clearMeasures();

// Entfernt die Messung mit dem Namen "myMeasure"
performance.clearMeasures("myMeasure");
```

## Siehe auch

- {{domxref("Performance")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver")}}
