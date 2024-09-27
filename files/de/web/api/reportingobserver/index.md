---
title: ReportingObserver
slug: Web/API/ReportingObserver
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Reporting API")}}

Das `ReportingObserver`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) ermöglicht es Ihnen, Berichte zu sammeln und darauf zuzugreifen.

## Konstruktor

- [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)
  - : Erstellt eine neue Instanz eines `ReportingObserver`-Objekts, das verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Instanz-Eigenschaften

_Dieses Interface hat keine definierte Eigenschaften._

## Instanz-Methoden

- [`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)
  - : Stoppt einen Reporting Observer, der Berichte sammelte und zuvor mit der Beobachtung begonnen hatte.
- [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)
  - : Fordert einen Reporting Observer auf, mit dem Sammeln von Berichten in seiner Berichts-Warteschlange zu beginnen.
- [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)
  - : Gibt die aktuelle Liste der in der Warteschlange des Observers enthaltenen Berichte zurück und leert die Warteschlange.

## Ereignisse

_Dieses Interface löst keine Ereignisse aus._

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html)-Beispiel erstellen wir einen einfachen Reporting Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir veranlassen dann, dass er mit dem Sammeln von Berichten mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) beginnt; dies weist den Observer an, mit dem Sammeln von Berichten in seiner Berichts-Warteschlange zu beginnen, und führt die im Konstruktor angegebene Callback-Funktion aus:

```js
observer.observe();
```

Später im Beispiel verwenden wir absichtlich die veraltete Version von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia):

```js
if (navigator.mozGetUserMedia) {
  navigator.mozGetUserMedia(constraints, success, failure);
} else {
  navigator.getUserMedia(constraints, success, failure);
}
```

Dies führt dazu, dass ein Abwertungsbericht generiert wird; aufgrund des innerhalb des `ReportingObserver()`-Konstruktors eingerichteten Ereignishandlers können wir jetzt auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter zu einer veralteten Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir tatsächlich die veraltete `getUserMedia()`-Methode zweimal aufrufen. Nach dem ersten Aufruf rufen wir [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) auf, was den ersten generierten Bericht zurückgibt und die Warteschlange leert. Deshalb wird beim Drücken der Schaltfläche nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
