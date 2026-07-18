---
title: "Navigator: globalPrivacyControl-Eigenschaft"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: ba61b242bb7da20302af919bb7f496be67e89e32
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die schreibgeschützte **`Navigator.globalPrivacyControl`**-Eigenschaft gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Nutzers für die aktuelle Website zurück. Diese Einstellung gibt an, ob der Nutzer dem Verkauf oder der Weitergabe seiner persönlichen Daten an Dritte durch die Website oder den Dienst zustimmt.

Der Wert der Eigenschaft entspricht dem des {{httpheader("Sec-GPC")}} HTTP-Headers.

## Wert

`true`, wenn der Nutzer ausdrücklich _nicht_ der Zustimmung zum Verkauf oder zur Weitergabe seiner Daten erteilt.
`false`, wenn der Nutzer entweder die Zustimmung erteilt oder keine Präferenz angegeben hat.

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
- [GlobalPrivacyControl.org](https://globalprivacycontrol.org/)
- [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) auf Wikipedia
