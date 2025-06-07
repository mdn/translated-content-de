---
title: "Navigator: globalPrivacyControl-Eigenschaft"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: f89740247002fb71eb339af142482900f3c32349
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`Navigator.globalPrivacyControl`** gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Benutzers für die aktuelle Website zurück. Diese Einstellung zeigt an, ob der Benutzer zustimmt, dass die Website oder der Dienst seine persönlichen Informationen an Dritte verkauft oder teilt.

Der Wert der Eigenschaft spiegelt den des {{httpheader("Sec-GPC")}} HTTP-Headers wider.

## Wert

`true`, wenn der Benutzer ausdrücklich _nicht_ zustimmt, seine Daten zu verkaufen oder zu teilen.
`false`, wenn der Benutzer entweder Zustimmung erteilt hat oder keine Präferenz angegeben hat.

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
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
