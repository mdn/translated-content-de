---
title: "Navigator: Eigenschaft globalPrivacyControl"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: ec4de01e84cb892379c9130d6fbff1e2abc4f486
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`Navigator.globalPrivacyControl`** gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Benutzers für die aktuelle Website zurück.
Diese Einstellung zeigt an, ob der Benutzer der Website oder dem Dienst zustimmt, seine persönlichen Informationen an Dritte zu verkaufen oder zu teilen.

Der Wert der Eigenschaft spiegelt den des {{httpheader("Sec-GPC")}} HTTP-Headers wider.

## Wert

`true`, wenn der Benutzer ausdrücklich _keine_ Zustimmung zum Verkauf oder zur Weitergabe seiner Daten erteilt.
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

- {{HTTPHeader("Sec-GPC")}}-Header
- [globalprivacycontrol.org](https://globalprivacycontrol.org/)
- [Global Privacy Control Spezifikation](https://privacycg.github.io/gpc-spec/)
- [Do Not Track auf Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
