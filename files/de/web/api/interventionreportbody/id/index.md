---
title: "InterventionReportBody: id-Eigenschaft"
short-title: id
slug: Web/API/InterventionReportBody/id
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die schreibgeschützte **`id`**-Eigenschaft der {{domxref("InterventionReportBody")}}-Schnittstelle gibt einen String zurück, der die Intervention identifiziert, die den Bericht erstellt hat. Dies kann verwendet werden, um Berichte zu gruppieren.

## Wert

Ein String.

## Beispiele

In diesem Beispiel erstellen wir einen neuen {{domxref("ReportingObserver")}}, um Interventionsberichte zu beobachten, und drucken dann den Wert von `id` in die Konsole.

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
