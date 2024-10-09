---
title: "DeprecationReportBody: anticipatedRemoval-Eigenschaft"
short-title: anticipatedRemoval
slug: Web/API/DeprecationReportBody/anticipatedRemoval
l10n:
  sourceCommit: a7d66cf8b1251dc43f4b35c8060b95df69f58a0a
---

{{APIRef("Reporting API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`anticipatedRemoval`** der Schnittstelle [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody) gibt das Datum zurück, an dem die Browser-Version, die das Feature entfernt, veröffentlicht wird. Dieser Wert kann verwendet werden, um Warnungen zu priorisieren. Gibt diese Eigenschaft `null` zurück, weil das Datum unbekannt ist, sollte die Veraltung als niedrig priorisiert betrachtet werden.

## Wert

Ein {{jsxref("date")}}-Objekt, oder `null`, wenn das Datum nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsberichte zu beobachten, und drucken dann den Wert von `anticipatedRemoval` in die Konsole.

```js
let options = {
  types: ["deprecation"],
  buffered: true,
};

let observer = new ReportingObserver((reports, observer) => {
  let firstReport = reports[0];
  console.log(firstReport.type); // deprecation
  console.log(firstReport.body.anticipatedRemoval);
}, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
