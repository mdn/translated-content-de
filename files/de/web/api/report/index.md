---
title: Bericht
slug: Web/API/Report
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{APIRef("Reporting API")}}

Die `Report`-Schnittstelle der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen einzelnen Bericht.

Berichte können auf verschiedene Weise abgerufen werden:

- Über die {{domxref("ReportingObserver.takeRecords()")}} Methode – diese gibt alle Berichte in der Nachrichtenwarteschlange eines Beobachters zurück und leert dann die Warteschlange.
- Über den `reports`-Parameter der Rückruffunktion, die beim Erstellen einer neuen Beobachterinstanz in den [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver) Konstruktor übergeben wird. Dieser enthält die Liste der Berichte, die sich derzeit in der Nachrichtenwarteschlange des Beobachters befinden.
- Durch das Senden von Anfragen an die Endpunkte, die über den {{httpheader("Reporting-Endpoints")}} HTTP-Header definiert sind.

## Instanzeigenschaften

- {{domxref("Report.body")}} {{ReadOnlyInline}}
  - : Der Körper des Berichts, der ein `ReportBody`-Objekt enthält, das die detaillierten Berichtsinformationen enthält.
- {{domxref("Report.type")}} {{ReadOnlyInline}}
  - : Der Typ des erzeugten Berichts, z.B. `deprecation` oder `intervention`.
- {{domxref("Report.url")}} {{ReadOnlyInline}}
  - : Die URL des Dokuments, das den Bericht erzeugt hat.

## Instanzmethoden

_Diese Schnittstelle hat keine definierten Methoden._

## Ereignisse

_Diese Schnittstelle hat keine Ereignisse, die darauf ausgelöst werden._

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

Anschließend weisen wir ihn an, mit dem Beobachten von Berichten zu beginnen, indem wir {{domxref("ReportingObserver.observe()")}} verwenden; dies veranlasst den Beobachter, Berichte in seiner Nachrichtenwarteschlange zu sammeln und die im Konstruktor angegebene Rückruffunktion auszuführen:

```js
observer.observe();
```

Aufgrund des Ereignishandlers, den wir im `ReportingObserver()` Konstruktor eingerichtet haben, können wir nun auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter über eine veraltete Funktion](reporting_api_example.png)

Die Berichtdetails werden über die `displayReports()` Funktion angezeigt, die den `reports`-Parameter der Beobachter-Rückruffunktion als Parameter verwendet:

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

Der `reports`-Parameter enthält ein Array aller Berichte in der Nachrichtenwarteschlange des Beobachters. Wir durchlaufen jeden Bericht mit einer [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) Schleife und iterieren dann über jeden Eintrag im Körper des Berichts mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Struktur, wobei wir jedes Schlüssel/Wert-Paar in einem Listenelement anzeigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- {{httpheader("Report-To")}} HTTP-Header
