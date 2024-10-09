---
title: ReportingObserver
slug: Web/API/ReportingObserver
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Das `ReportingObserver`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) ermöglicht es Ihnen, Berichte zu sammeln und darauf zuzugreifen.

## Konstruktor

- [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)
  - : Erstellt eine neue Instanz eines `ReportingObserver`-Objekts, die verwendet werden kann, um Berichte zu sammeln und darauf zuzugreifen.

## Instanz-Eigenschaften

_Dieses Interface hat keine definierten Eigenschaften._

## Instanz-Methoden

- [`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)
  - : Stoppt einen Reporting Observer, der zuvor begonnen hat Berichte zu sammeln.
- [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)
  - : Weist einen Reporting Observer an, mit dem Sammeln von Berichten in seiner Berichtswarteschlange zu beginnen.
- [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)
  - : Gibt die aktuelle Liste der Berichte in der Berichtswarteschlange des Beobachters zurück und leert die Warteschlange.

## Ereignisse

_Dieses Interface verfügt über keine auslösbaren Ereignisse._

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Reporting Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen ihn dann an, Berichte zu beobachten, indem wir [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) verwenden; dies teilt dem Observer mit, dass er mit dem Sammeln von Berichten in seiner Berichtswarteschlange beginnen soll, und führt die im Konstruktor angegebene Callback-Funktion aus:

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

Dies führt dazu, dass ein Veraltungsbericht erstellt wird; dank des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir jetzt auf den Button klicken, um die Berichtsdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken unten darüber zu einem veralteten Feature](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir tatsächlich die veraltete `getUserMedia()`-Methode zweimal aufrufen. Nach dem ersten Aufruf verwenden wir [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords), was den ersten generierten Bericht zurückgibt und die Warteschlange leert. Aufgrund dessen wird beim Drücken des Buttons nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
