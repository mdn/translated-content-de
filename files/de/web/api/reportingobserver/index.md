---
title: ReportingObserver
slug: Web/API/ReportingObserver
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Reporting API")}}

Das `ReportingObserver`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) ermöglicht es Ihnen, Berichte zu sammeln und auf sie zuzugreifen.

## Konstruktor

- {{domxref("ReportingObserver.ReportingObserver", "ReportingObserver()")}}
  - : Erstellt eine neue Instanz eines `ReportingObserver`-Objekts, das zum Sammeln und Zugriff auf Berichte verwendet werden kann.

## Instanz-Eigenschaften

_Dieses Interface hat keine definierten Eigenschaften._

## Instanz-Methoden

- {{domxref("ReportingObserver.disconnect()")}}
  - : Stoppt einen zuvor gestarteten Reporting Observer, sodass er keine Berichte mehr sammelt.
- {{domxref("ReportingObserver.observe()")}}
  - : Anweist einen Reporting Observer, das Sammeln von Berichten in seiner Berichtswarteschlange zu starten.
- {{domxref("ReportingObserver.takeRecords()")}}
  - : Gibt die aktuelle Liste der in der Warteschlange des Observers enthaltenen Berichte zurück und leert die Warteschlange.

## Ereignisse

_Dieses Interface hat keine auslösenden Ereignisse._

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Reporting Observer, um die Nutzung veralteter Features auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen ihn dann an, mit dem Sammeln von Berichten zu beginnen, indem wir {{domxref("ReportingObserver.observe()")}} verwenden; dies instruiert den Observer, damit er Berichte in seiner Berichtswarteschlange sammelt und die im Konstruktor angegebene Callback-Funktion ausführt:

```js
observer.observe();
```

Später im Beispiel verwenden wir absichtlich die veraltete Version von {{domxref("MediaDevices.getUserMedia()")}}:

```js
if (navigator.mozGetUserMedia) {
  navigator.mozGetUserMedia(constraints, success, failure);
} else {
  navigator.getUserMedia(constraints, success, failure);
}
```

Dies führt dazu, dass ein Veraltungsmeldung generiert wird; aufgrund des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir jetzt auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken über ein veraltetes Feature](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete `getUserMedia()`-Methode tatsächlich zweimal aufrufen. Nach dem ersten Aufruf rufen wir {{domxref("ReportingObserver.takeRecords()")}}, auf, was den ersten generierten Bericht zurückgibt und die Warteschlange leert. Aus diesem Grund wird beim Drücken der Schaltfläche nur der zweite Bericht aufgelistet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
