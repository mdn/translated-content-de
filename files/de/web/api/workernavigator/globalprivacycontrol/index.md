---
title: "WorkerNavigator: globalPrivacyControl-Eigenschaft"
short-title: globalPrivacyControl
slug: Web/API/WorkerNavigator/globalPrivacyControl
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.globalPrivacyControl`** gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Benutzers für die aktuelle Website zurück. Diese Einstellung zeigt an, ob der Benutzer einer Website oder einem Dienst gestattet, seine persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

Der Wert der Eigenschaft entspricht dem des {{httpheader("Sec-GPC")}} HTTP-Headers.

## Wert

`true`, wenn der Benutzer ausdrücklich keine Zustimmung zum Verkauf oder Teilen seiner Daten erteilt.
`false`, wenn der Benutzer entweder Zustimmung erteilt oder keine Präferenz angegeben hat.

## Beispiel

```js
console.log(navigator.globalPrivacyControl);
// "true" if the user has specifically indicated they do not want their data shared or sold, otherwise "false".
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-GPC")}} Header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
