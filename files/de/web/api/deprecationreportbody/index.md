---
title: DeprecationReportBody
slug: Web/API/DeprecationReportBody
l10n:
  sourceCommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Das Interface `DeprecationReportBody` der [Reporting API](/de/docs/Web/API/Reporting_API) repräsentiert den Inhalt eines Veraltungsberichts.

Ein Veraltungsbericht wird erstellt, wenn ein veraltetes Feature (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird, das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet wird. Neben der Unterstützung dieser API erfordert das Empfangen nützlicher Veraltungswarnungen, dass die Browserhersteller diese Warnungen für veraltete Funktionen hinzufügen.

{{InheritanceDiagram}}

## Konstruktor

Eine Instanz von `DeprecationReportBody` wird als Wert von [`Report.body`](/de/docs/Web/API/Report/body) zurückgegeben, wenn [`Report.Type`](/de/docs/Web/API/Report/Type) `deprecation` ist. Das Interface hat keinen Konstruktor.

## Instanz-Eigenschaften

Dieses Interface erbt auch Eigenschaften von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`DeprecationReportBody.id`](/de/docs/Web/API/DeprecationReportBody/id) {{experimental_inline}}
  - : Ein String, der das Feature oder die API repräsentiert, die veraltet ist, zum Beispiel `NavigatorGetUserMedia`. Dies kann verwendet werden, um Berichte nach veraltetem Feature zu gruppieren.
- [`DeprecationReportBody.anticipatedRemoval`](/de/docs/Web/API/DeprecationReportBody/anticipatedRemoval) {{Experimental_Inline}}
  - : Ein {{jsxref("Date")}} Objekt (als String dargestellt), das das Datum repräsentiert, an dem das Feature voraussichtlich aus dem aktuellen Browser entfernt wird. Wenn das Datum nicht bekannt ist, gibt diese Eigenschaft `null` zurück.
- [`DeprecationReportBody.message`](/de/docs/Web/API/DeprecationReportBody/message) {{experimental_inline}}
  - : Ein String, der eine menschenlesbare Beschreibung der Veraltung enthält, einschließlich Informationen wie z.B. welches neuere Feature es ersetzt hat, falls vorhanden. Dies stimmt typischerweise mit der Meldung überein, die ein Browser in seiner DevTools-Konsole anzeigt, wenn ein veraltetes Feature verwendet wird, sofern verfügbar.
- [`DeprecationReportBody.sourceFile`](/de/docs/Web/API/DeprecationReportBody/sourceFile) {{experimental_inline}}
  - : Ein String, der den Pfad zur Quelldatei enthält, in der das veraltete Feature verwendet wurde, sofern bekannt, oder `null` andernfalls.
- [`DeprecationReportBody.lineNumber`](/de/docs/Web/API/DeprecationReportBody/lineNumber) {{experimental_inline}}
  - : Eine Zahl, die die Zeile in der Quelldatei repräsentiert, in der das veraltete Feature verwendet wurde, sofern bekannt, oder `null` andernfalls.
- [`DeprecationReportBody.columnNumber`](/de/docs/Web/API/DeprecationReportBody/columnNumber) {{experimental_inline}}
  - : Eine Zahl, die die Spalte in der Quelldatei repräsentiert, in der das veraltete Feature verwendet wurde, sofern bekannt, oder `null` andernfalls.

## Instanz-Methoden

Dieses Interface erbt auch Methoden von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`DeprecationReportBody.toJSON()`](/de/docs/Web/API/DeprecationReportBody/toJSON) {{experimental_inline}}
  - : Ein _Serializer_, der eine JSON-Repräsentation des `InterventionReportBody` Objekts zurückgibt.

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html) Beispiel erstellen wir einen einfachen Reporting-Observer, um die Nutzung veralteter Features auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen ihn dann an, mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) Berichte zu beobachten; dies weist den Observer an, Berichte in seiner Berichtswarteschlange zu sammeln und die im Konstruktor angegebene Callback-Funktion auszuführen:

```js
observer.observe();
```

Aufgrund des Ereignis-Handlers, den wir im Konstruktor von `ReportingObserver()` eingerichtet haben, können wir jetzt auf die Schaltfläche klicken, um die Berichtdetails anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen unten angezeigten Statistiken über ein veraltetes Feature](reporting_api_example.png)

Die Berichtdetails werden durch die `displayReports()` Funktion angezeigt, die den `reports` Parameter des Observer-Callbacks als Parameter übernimmt:

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

Der `reports` Parameter enthält ein Array aller Berichte in der Berichtswarteschlange des Observers. Wir durchlaufen jeden Bericht mit einer grundlegenden [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife und iterieren dann über jedes Element im Berichtskörper (eine `DeprecationReportBody` Instanz) mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in) Struktur und zeigen jedes Schlüssel/Wert-Paar innerhalb eines Listenelements an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Die Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
