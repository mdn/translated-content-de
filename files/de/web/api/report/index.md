---
title: Report
slug: Web/API/Report
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{APIRef("Reporting API")}}

Das `Report`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert einen einzelnen Bericht.

Berichte können auf verschiedene Weise abgerufen werden:

- Über die Methode [`ReportingObserver.takeRecords()`](/de/docs/Web/API/ReportingObserver/takeRecords) — diese gibt alle Berichte in der Berichts-Schlange eines Beobachters zurück und leert dann die Schlange.
- Über den `reports`-Parameter der Callback-Funktion, die beim Erstellen einer neuen Beobachterinstanz in den [`ReportingObserver()`](/de/docs/Web/API/ReportingObserver/ReportingObserver)-Konstruktor übergeben wird. Dies enthält die Liste der Berichte, die sich aktuell in der Berichts-Schlange des Beobachters befinden.
- Durch das Senden von Anfragen an die über den {{httpheader("Reporting-Endpoints")}} HTTP-Header definierten Endpunkte.

## Instanz-Eigenschaften

- [`Report.body`](/de/docs/Web/API/Report/body) {{ReadOnlyInline}}
  - : Der Hauptteil des Berichts, der ein `ReportBody`-Objekt ist, das die detaillierten Berichts-Informationen enthält.
- [`Report.type`](/de/docs/Web/API/Report/type) {{ReadOnlyInline}}
  - : Der Typ des erstellten Berichts, z. B. `deprecation` oder `intervention`.
- [`Report.url`](/de/docs/Web/API/Report/url) {{ReadOnlyInline}}
  - : Die URL des Dokuments, das den Bericht generiert hat.

## Instanz-Methoden

_Dieses Interface hat keine definierten Methoden._

## Ereignisse

_Dieses Interface hat keine ausgelösten Ereignisse._

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

Wir weisen den Observer dann an, Berichte zu beobachten, indem wir [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) verwenden; dies weist den Observer an, Berichte in seiner Berichts-Schlange zu sammeln und die im Konstruktor angegebene Callback-Funktion auszuführen:

```js
observer.observe();
```

Aufgrund des Event-Handlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir nun auf den Button klicken, um die Berichtsdaten anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken unten über eine veraltete Funktion angezeigt](reporting_api_example.png)

Die Berichtsdaten werden über die `displayReports()`-Funktion angezeigt, die den `reports`-Parameter des Observer-Callbacks als Parameter übernimmt:

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

Der `reports`-Parameter enthält ein Array aller Berichte in der Berichts-Schlange des Beobachters. Wir durchlaufen jeden Bericht mit einer [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)-Schleife und iterieren dann über jeden Eintrag im Body des Berichts mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Struktur, wobei jedes Schlüssel/Wert-Paar in einem Listeneintrag angezeigt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- {{httpheader("Report-To")}} HTTP-Header
