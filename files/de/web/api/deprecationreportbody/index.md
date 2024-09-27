---
title: DeprecationReportBody
slug: Web/API/DeprecationReportBody
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das `DeprecationReportBody`-Interface der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert den Inhalt eines Abkündigungsberichts.

Ein Abkündigungsbericht wird generiert, wenn eine veraltete Funktion (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird, das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet wird. Neben der Unterstützung durch diese API ist der Erhalt nützlicher Abkündigungshinweise davon abhängig, dass Browser-Anbieter diese Warnungen für veraltete Funktionen hinzufügen.

{{InheritanceDiagram}}

## Konstruktor

Eine Instanz von `DeprecationReportBody` wird als Wert von [`Report.body`](/de/docs/Web/API/Report/body) zurückgegeben, wenn [`Report.Type`](/de/docs/Web/API/Report/Type) `deprecation` ist. Das Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

Dieses Interface erbt auch Eigenschaften von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`DeprecationReportBody.id`](/de/docs/Web/API/DeprecationReportBody/id) {{experimental_inline}}
  - : Ein String, der die veraltete Funktion oder API repräsentiert, zum Beispiel `NavigatorGetUserMedia`. Dies kann verwendet werden, um Berichte nach veralteter Funktion zu gruppieren.
- [`DeprecationReportBody.anticipatedRemoval`](/de/docs/Web/API/DeprecationReportBody/anticipatedRemoval) {{Experimental_Inline}}
  - : Ein {{jsxref("Date")}}-Objekt (als String dargestellt), das das Datum repräsentiert, an dem die Funktion aus dem aktuellen Browser voraussichtlich entfernt wird. Ist das Datum nicht bekannt, gibt diese Eigenschaft `null` zurück.
- [`DeprecationReportBody.message`](/de/docs/Web/API/DeprecationReportBody/message) {{experimental_inline}}
  - : Ein String, der eine menschenlesbare Beschreibung der Abkündigung enthält, einschließlich Informationen darüber, welche neuere Funktion sie abgelöst hat, falls vorhanden. Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine veraltete Funktion verwendet wird, wenn eine verfügbar ist.
- [`DeprecationReportBody.sourceFile`](/de/docs/Web/API/DeprecationReportBody/sourceFile) {{experimental_inline}}
  - : Ein String, der den Pfad zur Quelldatei enthält, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.
- [`DeprecationReportBody.lineNumber`](/de/docs/Web/API/DeprecationReportBody/lineNumber) {{experimental_inline}}
  - : Eine Zahl, die die Zeile in der Quelldatei repräsentiert, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.
- [`DeprecationReportBody.columnNumber`](/de/docs/Web/API/DeprecationReportBody/columnNumber) {{experimental_inline}}
  - : Eine Zahl, die die Spalte in der Quelldatei repräsentiert, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.

## Instanz-Methoden

Dieses Interface erbt auch Methoden von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`DeprecationReportBody.toJSON()`](/de/docs/Web/API/DeprecationReportBody/toJSON) {{experimental_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `InterventionReportBody`-Objekts zurückgibt.

## Beispiele

In unserem Beispiel [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) erstellen wir einen einfachen Reporting-Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen dann den Observer an, mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) Berichte zu beobachten; dies teilt dem Observer mit, Berichte in seiner Berichts-Warteschlange zu sammeln, und führt die im Konstruktor angegebene Rückruffunktion aus:

```js
observer.observe();
```

Aufgrund des Ereignis-Handlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir nun auf die Schaltfläche klicken, um die Berichtsdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter über eine veraltete Funktion](reporting_api_example.png)

Die Berichtsdetails werden über die Funktion `displayReports()` angezeigt, die den `reports`-Parameter des Observer-Rückrufs als Parameter verwendet:

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

Der `reports`-Parameter enthält ein Array aller Berichte in der Berichts-Warteschlange des Observers. Wir durchlaufen jeden Bericht mit einer einfachen [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife und iterieren dann über jeden Eintrag im Berichtskörper (eine `DeprecationReportBody`-Instanz) mithilfe einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Struktur und zeigen jedes Schlüssel-/Wertpaar in einem Listenelement an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- [The Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
