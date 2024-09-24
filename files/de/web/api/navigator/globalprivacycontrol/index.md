---
title: "Navigator: globalPrivacyControl-Eigenschaft"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: ec4de01e84cb892379c9130d6fbff1e2abc4f486
---

{{APIRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`Navigator.globalPrivacyControl`** gibt die Global Privacy Control-Einstellung des Benutzers für die aktuelle Website zurück. Diese Einstellung zeigt an, ob der Benutzer zustimmt, dass die Website oder der Dienst seine persönlichen Informationen an Dritte verkauft oder weitergibt.

Der Wert der Eigenschaft spiegelt den des {{httpheader("Sec-GPC")}} HTTP-Headers wider.

## Wert

`true`, wenn der Benutzer ausdrücklich _nicht_ die Zustimmung zur Weitergabe oder zum Verkauf seiner Daten gibt.
`false`, wenn der Benutzer die Zustimmung erteilt oder keine Präferenz angegeben hat.

## Beispiel

```js
console.log(navigator.globalPrivacyControl);
// "true" wenn der Benutzer ausdrücklich angegeben hat, dass seine Daten nicht weitergegeben oder verkauft werden sollen, andernfalls "false".
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
