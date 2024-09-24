---
title: "UserActivation: hasBeenActive-Eigenschaft"
short-title: hasBeenActive
slug: Web/API/UserActivation/hasBeenActive
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`hasBeenActive`**-Eigenschaft der {{domxref("UserActivation")}}-Schnittstelle zeigt an, ob das aktuelle Fenster eine {{Glossary("sticky activation","stetige Benutzeraktivierung")}} hat.

## Wert

Ein boolean.

## Beispiele

### Überprüfen, ob jemals eine Benutzeraktion ausgeführt wurde

Verwenden Sie die `hasBeenActive`-Eigenschaft, um zu überprüfen, ob der Benutzer seit dem Laden der Seite mit der Seite interagiert hat.

```js
if (navigator.userActivation.hasBeenActive) {
  // fortfahren mit automatischem Abspielen einer Animation, zum Beispiel
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.isActive")}}
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation)
