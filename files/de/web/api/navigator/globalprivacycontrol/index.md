---
title: "Navigator: Eigenschaft globalPrivacyControl"
short-title: globalPrivacyControl
slug: Web/API/Navigator/globalPrivacyControl
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`Navigator.globalPrivacyControl`** gibt die Einstellung des Benutzers für [Global Privacy Control](https://globalprivacycontrol.org/) für die aktuelle Website zurück.
Diese Einstellung gibt an, ob der Benutzer damit einverstanden ist, dass die Website oder der Dienst seine personenbezogenen Daten an Dritte verkauft oder weitergibt.

Der Wert der Eigenschaft entspricht dem des HTTP-Headers {{httpheader("Sec-GPC")}}.

## Wert

`true`, wenn der Benutzer dem Verkauf oder der Weitergabe seiner Daten ausdrücklich _nicht_ zustimmt.
`false`, wenn der Benutzer zustimmt oder keine Präferenz angegeben hat.

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

- Header {{HTTPHeader("Sec-GPC")}}
- [GlobalPrivacyControl.org](https://globalprivacycontrol.org/)
- [Do Not Track](https://en.wikipedia.org/wiki/Do_Not_Track) auf Wikipedia
