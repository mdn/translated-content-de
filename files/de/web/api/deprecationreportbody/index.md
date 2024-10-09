---
title: DeprecationReportBody
slug: Web/API/DeprecationReportBody
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die `DeprecationReportBody`-Schnittstelle der [Reporting-API](/de/docs/Web/API/Reporting_API) repräsentiert den Inhalt eines Veralterungsberichts.

Ein Veralterungsbericht wird generiert, wenn eine veraltete Funktion (zum Beispiel eine veraltete API-Methode) in einem Dokument verwendet wird, das von einem [`ReportingObserver`](/de/docs/Web/API/ReportingObserver) beobachtet wird. Neben der Unterstützung dieser API hängt der Empfang nützlicher Veralterungswarnungen davon ab, dass Browseranbieter diese Warnungen für veraltete Funktionen hinzufügen.

{{InheritanceDiagram}}

## Konstruktor

Eine Instanz von `DeprecationReportBody` wird als Wert von [`Report.body`](/de/docs/Web/API/Report/body) zurückgegeben, wenn [`Report.Type`](/de/docs/Web/API/Report/Type) `deprecation` ist. Die Schnittstelle hat keinen Konstruktor.

## Instanzeigenschaften

Diese Schnittstelle erbt auch Eigenschaften von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`DeprecationReportBody.id`](/de/docs/Web/API/DeprecationReportBody/id) {{experimental_inline}}
  - : Ein String, der die Funktion oder API darstellt, die veraltet ist, zum Beispiel `NavigatorGetUserMedia`. Dies kann verwendet werden, um Berichte nach veralteten Funktionen zu gruppieren.
- [`DeprecationReportBody.anticipatedRemoval`](/de/docs/Web/API/DeprecationReportBody/anticipatedRemoval) {{Experimental_Inline}}
  - : Ein {{jsxref("Date")}}-Objekt (als String dargestellt), das das Datum repräsentiert, an dem die Funktion voraussichtlich aus dem aktuellen Browser entfernt wird. Wenn das Datum nicht bekannt ist, gibt diese Eigenschaft `null` zurück.
- [`DeprecationReportBody.message`](/de/docs/Web/API/DeprecationReportBody/message) {{experimental_inline}}
  - : Ein String, der eine lesbare Beschreibung der Veralterung enthält, einschließlich Informationen darüber, welche neuere Funktion sie eventuell ersetzt hat. Dies entspricht typischerweise der Nachricht, die ein Browser in seiner DevTools-Konsole anzeigt, wenn eine veraltete Funktion verwendet wird, falls vorhanden.
- [`DeprecationReportBody.sourceFile`](/de/docs/Web/API/DeprecationReportBody/sourceFile) {{experimental_inline}}
  - : Ein String, der den Pfad zur Quelldatei enthält, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.
- [`DeprecationReportBody.lineNumber`](/de/docs/Web/API/DeprecationReportBody/lineNumber) {{experimental_inline}}
  - : Eine Zahl, die die Zeile in der Quelldatei darstellt, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.
- [`DeprecationReportBody.columnNumber`](/de/docs/Web/API/DeprecationReportBody/columnNumber) {{experimental_inline}}
  - : Eine Zahl, die die Spalte in der Quelldatei darstellt, in der die veraltete Funktion verwendet wurde, falls bekannt, oder `null` andernfalls.

## Instanzmethoden

Diese Schnittstelle erbt auch Methoden von [`ReportBody`](/de/docs/Web/API/ReportBody).

- [`DeprecationReportBody.toJSON()`](/de/docs/Web/API/DeprecationReportBody/toJSON) {{experimental_inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung des `InterventionReportBody`-Objekts zurückgibt.

## Beispiele

In unserem [deprecation_report.html](https://mdn.github.io/dom-examples/reporting-api/deprecation_report.html)-Beispiel erstellen wir einen einfachen Reporting-Observer, um die Nutzung veralteter Funktionen auf unserer Webseite zu beobachten:

```js
const options = {
  types: ["deprecation"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  reportBtn.onclick = () => displayReports(reports);
}, options);
```

Wir weisen dann an, mit [`ReportingObserver.observe()`](/de/docs/Web/API/ReportingObserver/observe) Berichte zu beobachten; dies weist den Observer an, Berichte in seiner Berichts-Warteschlange zu sammeln und die Callback-Funktion auszuführen, die im Konstruktor angegeben ist:

```js
observer.observe();
```

Aufgrund des Ereignishandlers, den wir im `ReportingObserver()`-Konstruktor eingerichtet haben, können wir nun auf den Button klicken, um die Berichtsdaten anzuzeigen.

![Bild eines fröhlichen bärtigen Mannes mit verschiedenen Statistiken darunter über eine veraltete Funktion](reporting_api_example.png)

Die Berichtsdaten werden über die `displayReports()`-Funktion angezeigt, die den `reports`-Parameter des Observer-Callbacks als ihren Parameter nimmt:

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

Der `reports`-Parameter enthält ein Array aller Berichte in der Berichts-Warteschlange des Observers. Wir iterieren über jeden Bericht mit einer einfachen [`for`](/de/docs/Web/JavaScript/Reference/Statements/for)-Schleife, dann iterieren wir über jeden Eintrag im Berichtskörper (eine Instanz von `DeprecationReportBody`) mit einer [`for...in`](/de/docs/Web/JavaScript/Reference/Statements/for...in)-Struktur und zeigen jedes Schlüssel/Wert-Paar in einem Listeneintrag an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Reporting API](/de/docs/Web/API/Reporting_API)
- [Die Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
