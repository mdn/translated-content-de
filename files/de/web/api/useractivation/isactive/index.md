---
title: "UserActivation: isActive-Eigenschaft"
short-title: isActive
slug: Web/API/UserActivation/isActive
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`isActive`**-Eigenschaft des [`UserActivation`](/de/docs/Web/API/UserActivation)-Interfaces gibt an, ob das aktuelle Fenster über eine [transiente Benutzeraktivierung](/de/docs/Glossary/transient_activation) verfügt.

## Wert

Ein Boolean.

## Beispiele

### Überprüfen, ob kürzlich eine Benutzeraktion ausgeführt wurde

Verwenden Sie die `isActive`-Eigenschaft, um zu überprüfen, ob der Benutzer derzeit mit der Seite interagiert.

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UserActivation`](/de/docs/Web/API/UserActivation)
- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation)
