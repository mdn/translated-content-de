---
title: "UserActivation: isActive-Eigenschaft"
short-title: isActive
slug: Web/API/UserActivation/isActive
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`isActive`**-Eigenschaft der {{domxref("UserActivation")}}-Schnittstelle gibt an, ob das aktuelle Fenster eine {{Glossary("transient activation", "vorübergehende Benutzeraktivierung")}} hat.

## Wert

Ein Boolean.

## Beispiele

### Überprüfen, ob kürzlich eine Benutzeraktion durchgeführt wurde

Verwenden Sie die `isActive`-Eigenschaft, um zu überprüfen, ob der Benutzer derzeit mit der Seite interagiert.

```js
if (navigator.userActivation.isActive) {
  // fortfahren, um z.B. das Abspielen von Medien anzufordern
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("UserActivation")}}
- {{domxref("UserActivation.hasBeenActive")}}
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation)
