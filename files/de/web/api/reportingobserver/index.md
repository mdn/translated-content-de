---
title: ReportingObserver
slug: Web/API/ReportingObserver
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Reporting API")}}

Das `ReportingObserver` Interface der [Reporting API](/de/docs/Web/API/Reporting_API) ermöglicht Ihnen das Sammeln und Abrufen von Berichten.

## Konstruktor

- [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)
  - : Erstellt eine neue `ReportingObserver` Objektinstanz, die zum Sammeln und Zugreifen auf Berichte verwendet werden kann.

## Instanz-Eigenschaften

_Dieses Interface hat keine definierten Eigenschaften._

## Instanz-Methoden

- [`ReportingObserver.disconnect()`](/de/docs/Web/API/ReportingObserver/disconnect)
  - : Stoppt einen zuvor gestarteten Reporting Observer, der Berichte gesammelt hat.
- [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe)
  - : Weist einen Reporting Observer an, mit dem Sammeln von Berichten in seiner Berichtswarteschlange zu beginnen.
- [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords)
  - : Gibt die aktuelle Liste der Berichte in der Berichtswarteschlange des Observers zurück und leert die Warteschlange.

## Ereignisse

_Dieses Interface hat keine Ereignisse, die darauf ausgelöst werden._

## Beispiele

In unserem Beispiel [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) erstellen wir einen einfachen Reporting Observer, um die Nutzung von veralteten Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir lassen ihn dann mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) Berichte beobachten; dies veranlasst den Observer, Berichte in seiner Berichtswarteschlange zu sammeln, und führt die im Konstruktor angegebene Callback-Funktion aus:

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

Dadurch wird ein Deprecation-Bericht erzeugt; aufgrund des Event-Handlers, den wir im `ReportingObserver()` Konstruktor eingerichtet haben, können wir jetzt auf den Button klicken, um die Berichtsdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen darunter angezeigten Statistiken über eine veraltete Funktion](reporting_api_example.png)

> [!NOTE]
> Wenn Sie sich den [vollständigen Quellcode](https://github.com/mdn/dom-examples/blob/main/reporting-api/deprecation_report.html) ansehen, werden Sie feststellen, dass wir die veraltete Methode `getUserMedia()` tatsächlich zweimal aufrufen. Nach dem ersten Aufruf führen wir [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) aus, das den ersten erstellten Bericht zurückgibt und die Warteschlange leert. Aus diesem Grund wird, wenn der Button gedrückt wird, nur der zweite Bericht aufgeführt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
