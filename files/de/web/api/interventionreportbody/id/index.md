---
title: "InterventionReportBody: id-Eigenschaft"
short-title: id
slug: Web/API/InterventionReportBody/id
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die **`id`**-Eigenschaft des [`InterventionReportBody`](/de/docs/Web/API/InterventionReportBody)-Interfaces gibt eine Zeichenfolge zurück, die die Intervention identifiziert, die den Bericht erzeugt hat. Dies kann verwendet werden, um Berichte zu gruppieren.

## Wert

Eine Zeichenfolge.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Interventionsberichte zu beobachten, und geben dann den Wert von `id` in der Konsole aus.

```js
const options = {
  types: ["intervention"],
  buffered: true,
};

const observer = new ReportingObserver((reports, observer) => {
  const firstReport = reports[0];
  console.log(firstReport.type); // intervention
  console.log(firstReport.body.id);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
