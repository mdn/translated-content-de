---
title: "WorkerNavigator: Eigenschaft globalPrivacyControl"
short-title: globalPrivacyControl
slug: Web/API/WorkerNavigator/globalPrivacyControl
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.globalPrivacyControl`** gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Nutzers für die aktuelle Website zurück. Diese Einstellung zeigt an, ob der Nutzer zustimmt, dass die Website oder der Dienst seine persönlichen Informationen an Dritte verkauft oder weitergibt.

Der Wert der Eigenschaft spiegelt den des HTTP-Headers {{httpheader("Sec-GPC")}} wider.

## Wert

`true`, wenn der Nutzer ausdrücklich _nicht_ die Zustimmung erteilt hat, seine Daten zu verkaufen oder zu teilen.
`false`, wenn der Nutzer entweder Zustimmung erteilt hat oder keine Präferenz angegeben hat.

## Beispiel

```js
console.log(navigator.globalPrivacyControl);
// "true", wenn der Nutzer ausdrücklich angegeben hat, dass seine Daten nicht geteilt oder verkauft werden sollen, ansonsten "false".
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-GPC")}}-Header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
