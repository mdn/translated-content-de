---
title: Report
slug: Web/API/Report
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}

Das `Report`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen einzelnen Bericht dar.

Berichte können auf verschiedene Weise abgerufen werden:

- Über die Methode [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) — diese gibt alle Berichte in der Berichtswarteschlange eines Observers zurück und leert dann die Warteschlange.
- Über den `reports`-Parameter der Callback-Funktion, die beim Erstellen einer neuen Observer-Instanz in den Konstruktor [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) übergeben wird. Dies enthält die Liste der Berichte, die sich derzeit in der Berichtswarteschlange des Observers befinden.
- Durch Senden von Anfragen an die Endpunkte, die über den {{httpheader("Reporting-Endpoints")}} HTTP-Header definiert wurden.

## Instanzeigenschaften

- [`Report.body`](/de/docs/Web/API/Report/body) {{ReadOnlyInline}}
  - : Der Inhalt des Berichts, der ein `ReportBody`-Objekt ist, das die detaillierten Berichtsinformationen enthält.
- [`Report.type`](/de/docs/Web/API/Report/type) {{ReadOnlyInline}}
  - : Der Typ des erzeugten Berichts, z.B. `deprecation` oder `intervention`.
- [`Report.url`](/de/docs/Web/API/Report/url) {{ReadOnlyInline}}
  - : Die URL des Dokuments, das den Bericht erzeugt hat.

## Instanzmethoden

_Dieses Interface hat keine definierten Methoden._

## Ereignisse

_Dieses Interface hat keine Ereignisse, die darauf ausgelöst werden._

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Reporting-Observer, um die Nutzung von veralteten Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen ihn dann an, mit der Beobachtung von Berichten zu beginnen, indem wir [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) verwenden; dies teilt dem Observer mit, mit dem Sammeln von Berichten in seiner Warteschlange zu beginnen und die im Konstruktor spezifizierte Callback-Funktion auszuführen:

```js
observer.observe();
```

Aufgrund des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir nun auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken über eine veraltete Funktion](reporting_api_example.png)

Die Berichtdetails werden über die Funktion `displayReports()` angezeigt, die den `reports`-Parameter des Observer-Callbacks als seinen Parameter verwendet:

```js
function displayReports(reports) {
  const outputElem = document.querySelector(".output");
  const list = document.createElement("ul");
  outputElem.appendChild(list);

  reports.forEach((report, i) => {
    let listItem = document.createElement("li");
    let textNode = document.createTextNode(
      `Report ${i + 1}, type: ${report.type}`,
    );
    listItem.appendChild(textNode);
    let innerList = document.createElement("ul");
    listItem.appendChild(innerList);
    list.appendChild(listItem);

    for (const key in report.body) {
      const innerListItem = document.createElement("li");
      const keyValue = report.body[key];
      innerListItem.textContent = `${key}: ${keyValue}`;
      innerList.appendChild(innerListItem);
    }
  });
}
```

Der `reports`-Parameter enthält ein Array aller Berichte in der Warteschlange des Observers. Wir iterieren über jeden Bericht mit einer [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Schleife und über jeden Eintrag im Berichtskörper mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Struktur, wobei wir jedes Schlüssel/Wert-Paar innerhalb eines Listenelements anzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- {{httpheader("Report-To")}} HTTP-Header
