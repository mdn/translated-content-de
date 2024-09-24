---
title: DeprecationReportBody
slug: Web/API/DeprecationReportBody
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `DeprecationReportBody` Interface der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert den Körper eines Abkündigungsberichts.

Ein Abkündigungsbericht wird erstellt, wenn eine veraltete Funktion (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird, das von einem {{domxref("ReportingObserver")}} beobachtet wird. Neben der Unterstützung dieser API hängt der Erhalt nützlicher Abkündigungswarnungen davon ab, dass Browserhersteller diese Warnungen für veraltete Funktionen hinzufügen.

{{InheritanceDiagram}}

## Konstruktor

Eine Instanz von `DeprecationReportBody` wird als Wert von {{domxref("Report.body")}} zurückgegeben, wenn {{domxref("Report.Type")}} den Wert `deprecation` hat. Das Interface hat keinen Konstruktor.

## Instanzeigenschaften

Dieses Interface erbt auch Eigenschaften von {{domxref("ReportBody")}}.

- {{domxref("DeprecationReportBody.id")}} {{experimental_inline}}
  - : Ein String, der die Funktion oder die API repräsentiert, die veraltet ist, beispielsweise `NavigatorGetUserMedia`. Dies kann verwendet werden, um Berichte nach veralteter Funktion zu gruppieren.
- {{domxref("DeprecationReportBody.anticipatedRemoval")}} {{Experimental_Inline}}
  - : Ein {{jsxref("Date")}} Objekt (als String dargestellt), das das Datum repräsentiert, an dem die Funktion voraussichtlich aus dem aktuellen Browser entfernt wird. Wenn das Datum nicht bekannt ist, gibt diese Eigenschaft `null` zurück.
- {{domxref("DeprecationReportBody.message")}} {{experimental_inline}}
  - : Ein String, der eine menschenlesbare Beschreibung der Abkündigung enthält, inklusive Informationen wie, welche neuere Funktion sie, falls vorhanden, ersetzt hat. Dies entspricht typischerweise der Nachricht, die ein Browser in seiner Entwicklertools-Konsole anzeigt, wenn eine veraltete Funktion verwendet wird, falls eine verfügbar ist.
- {{domxref("DeprecationReportBody.sourceFile")}} {{experimental_inline}}
  - : Ein String, der den Pfad zur Quelldatei enthält, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.
- {{domxref("DeprecationReportBody.lineNumber")}} {{experimental_inline}}
  - : Eine Zahl, die die Zeile in der Quelldatei repräsentiert, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.
- {{domxref("DeprecationReportBody.columnNumber")}} {{experimental_inline}}
  - : Eine Zahl, die die Spalte in der Quelldatei repräsentiert, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.

## Instanzmethoden

Dieses Interface erbt auch Methoden von {{domxref("ReportBody")}}.

- {{domxref("DeprecationReportBody.toJSON()")}} {{experimental_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `InterventionReportBody` Objekts zurückgibt.

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Beobachter, der die Verwendung von veralteten Funktionen auf unserer Webseite beobachtet:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Dann weisen wir ihn an, Berichte zu beobachten, indem wir {{domxref("ReportingObserver.observe()")}} verwenden; dies sagt dem Beobachter, dass er beginnen soll, Berichte in seiner Berichtsqueue zu sammeln, und führt die im Konstruktor angegebene Callback-Funktion aus:

```js
observer.observe();
```

Aufgrund des Ereignishandlers, den wir im `ReportingObserver()` Konstruktor eingerichtet haben, können wir nun auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen angezeigten Statistiken über eine veraltete Funktion](reporting_api_example.png)

Die Berichtdetails werden über die `displayReports()` Funktion angezeigt, die den `reports` Parameter des Beobachter-Callbacks als Parameter übernimmt:

```js
function displayReports(reports) {
  const outputElem = document.querySelector(".output");
  const list = document.createElement("ul");
  outputElem.appendChild(list);

  reports.forEach((report, i) => {
    const listItem = document.createElement("li");
    const textNode = document.createTextNode(
      `Report ${i + 1}, type: ${report.type}`,
    );
    listItem.appendChild(textNode);
    const innerList = document.createElement("ul");
    listItem.appendChild(innerList);
    list.appendChild(listItem);

    for (const [key, value] of Object.entries(report.body)) {
      const innerListItem = document.createElement("li");
      innerListItem.textContent = `${key}: ${value}`;
      innerList.appendChild(innerListItem);
    }
  });
}
```

Der `reports` Parameter enthält ein Array aller Berichte in der Berichtsqueue des Beobachters. Wir durchlaufen jeden Bericht mit einer einfachen [`for`](/de/docs/Web/JavaScript/Reference/Statements/for) Schleife und iterieren dann über jeden Eintrag im Körper des Berichts (eine `DeprecationReportBody` Instanz) mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Struktur, wobei wir jedes Schlüssel/Wert-Paar innerhalb eines Listenelements anzeigen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Die Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
