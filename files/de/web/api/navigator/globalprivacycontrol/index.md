---
title: "Navigator: globalPrivacyControl Eigenschaft"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: c1fd7dc9410c14ec9e00b3ec35b7b94d43296389
---

{{APIRef("DOM")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`Navigator.globalPrivacyControl`** gibt die [Global Privacy Control](https://globalprivacycontrol.org/)-Einstellung des Benutzers für die aktuelle Website zurück. Diese Einstellung zeigt an, ob der Benutzer der Website oder dem Dienst das Verkaufen oder Teilen ihrer persönlichen Informationen mit Dritten gestattet.

Der Wert der Eigenschaft entspricht dem des {{httpheader("Sec-GPC")}} HTTP-Headers.

## Wert

`true`, wenn der Benutzer ausdrücklich _keine_ Zustimmung zum Verkaufen oder Teilen seiner Daten gibt.
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
