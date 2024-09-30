---
title: "DeprecationReportBody: anticipatedRemoval-Eigenschaft"
short-title: anticipatedRemoval
slug: Web/API/DeprecationReportBody/anticipatedRemoval
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("Reporting API")}}{{SeeCompatTable}}

Die **`anticipatedRemoval`** schreibgeschützte Eigenschaft des [`DeprecationReportBody`](/de/docs/Web/API/DeprecationReportBody)-Interfaces gibt das Datum zurück, an dem die Browserversion, die das Feature entfernt, veröffentlicht wird. Dieser Wert kann verwendet werden, um Warnungen zu priorisieren. Wenn diese Eigenschaft `null` zurückgibt, weil das Datum unbekannt ist, sollte die Veraltung als niedrig priorisiert betrachtet werden.

## Wert

Ein {{jsxref("date")}}-Objekt oder `null`, wenn das Datum nicht bekannt ist.

## Beispiele

In diesem Beispiel erstellen wir einen neuen [`ReportingObserver`](/de/docs/Web/API/ReportingObserver), um Veraltungsberichte zu beobachten und dann den Wert von `anticipatedRemoval` in der Konsole auszugeben.

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
