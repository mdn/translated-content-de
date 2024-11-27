---
title: "WorkerNavigator: globalPrivacyControl-Eigenschaft"
short-title: globalPrivacyControl
slug: Web/API/WorkerNavigator/globalPrivacyControl
l10n:
  sourceCommit: c1fd7dc9410c14ec9e00b3ec35b7b94d43296389
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte Eigenschaft **`WorkerNavigator.globalPrivacyControl`** gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Benutzers für die aktuelle Webseite zurück. Diese Einstellung gibt an, ob der Benutzer der Webseite oder dem Dienst zustimmt, seine persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

Der Wert der Eigenschaft reflektiert den Wert des {{httpheader("Sec-GPC")}} HTTP-Headers.

## Wert

`true`, wenn der Benutzer ausdrücklich _nicht_ der Zustimmung zum Verkauf oder Teilen seiner Daten zustimmt.
`false`, wenn der Benutzer entweder die Zustimmung erteilt oder keine Präferenz angegeben hat.

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

- {{HTTPHeader("Sec-GPC")}}-Header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spec](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
