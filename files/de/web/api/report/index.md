---
title: Report
slug: Web/API/Report
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{APIRef("Reporting API")}}

Das `Report` Interface der [Reporting API](/de/docs/Web/API/Reporting_API) stellt einen einzelnen Bericht dar.

Berichte können auf verschiedene Weisen abgerufen werden:

- Über die Methode [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) — diese gibt alle Berichte in der Berichtswarteschlange eines Beobachters zurück und leert dann die Warteschlange.
- Über den `reports` Parameter der Callback-Funktion, die beim Erstellen einer neuen Instanz des Beobachters in den [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktor übergeben wird. Dieser enthält die Liste der Berichte, die sich aktuell in der Berichtswarteschlange des Beobachters befinden.
- Durch das Senden von Anfragen an die Endpunkte, die über den {{httpheader("Reporting-Endpoints")}} HTTP-Header definiert sind.

## Instanzeigenschaften

- [`Report.body`](/de/docs/Web/API/Report/body) {{ReadOnlyInline}}
  - : Der Inhalt des Berichts, der ein `ReportBody` Objekt mit den detaillierten Berichtsinformationen ist.
- [`Report.type`](/de/docs/Web/API/Report/type) {{ReadOnlyInline}}
  - : Der Typ des generierten Berichts, z. B. `deprecation` oder `intervention`.
- [`Report.url`](/de/docs/Web/API/Report/url) {{ReadOnlyInline}}
  - : Die URL des Dokuments, das den Bericht generiert hat.

## Instanzmethoden

_Dieses Interface hat keine definierten Methoden._

## Ereignisse

_Dieses Interface hat keine Ereignisse, die darauf ausgelöst werden._

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Reporting-Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Dann sagen wir ihm, dass er mit dem Beobachten von Berichten mithilfe von [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) beginnen soll; dies veranlasst den Beobachter, Berichte in seiner Berichtswarteschlange zu sammeln und die im Konstruktor angegebene Callback-Funktion auszuführen:

```js
observer.observe();
```

Aufgrund des Ereignishandlers, den wir im `ReportingObserver()` Konstruktor eingerichtet haben, können wir jetzt auf den Button klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken zu einem veralteten Funktion](reporting_api_example.png)

Die Berichtdetails werden über die `displayReports()` Funktion angezeigt, die den `reports` Parameter des Callback des Beobachters als seinen Parameter nimmt:

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

Der `reports` Parameter enthält ein Array aller Berichte in der Berichtswarteschlange des Beobachters. Wir iterieren über jeden Bericht mithilfe einer [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) Schleife und dann über jeden Eintrag im Berichtskörper mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Struktur, wobei jedes Schlüssel-/Wertpaar in einem Listenelement angezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- {{httpheader("Report-To")}} HTTP-Header
