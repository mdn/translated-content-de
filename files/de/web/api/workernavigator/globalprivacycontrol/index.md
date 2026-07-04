---
title: "WorkerNavigator: globalPrivacyControl-Eigenschaft"
short-title: globalPrivacyControl
slug: Web/API/WorkerNavigator/globalPrivacyControl
l10n:
  sourceCommit: 513146a616213fee548fdcf72dc1359030eb3395
---

{{APIRef("DOM")}}{{AvailableInWorkers("worker")}}

Die **`WorkerNavigator.globalPrivacyControl`** schreibgeschützte Eigenschaft gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Benutzers für die aktuelle Website zurück. Diese Einstellung gibt an, ob der Benutzer der Website oder dem Dienst die Erlaubnis erteilt, seine persönlichen Informationen an Dritte zu verkaufen oder weiterzugeben.

Der Wert der Eigenschaft entspricht dem des {{httpheader("Sec-GPC")}} HTTP-Headers.

## Wert

`true`, wenn der Benutzer _nicht_ explizit die Zustimmung erteilt, seine Daten zu verkaufen oder zu teilen.
`false`, wenn der Benutzer entweder die Zustimmung erteilt hat oder keine Präferenz angegeben hat.

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
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
