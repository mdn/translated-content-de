---
title: "UserActivation: Eigenschaft hasBeenActive"
short-title: hasBeenActive
slug: Web/API/UserActivation/hasBeenActive
l10n:
  sourceCommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`hasBeenActive`**-Eigenschaft des [`UserActivation`](/de/docs/Web/API/UserActivation)-Interfaces gibt an, ob das aktuelle Fenster eine [sticky user activation](/de/docs/Glossary/sticky_activation) aufweist.

## Wert

Ein boolescher Wert.

## Beispiele

### Überprüfen, ob jemals eine Benutzeraktion ausgeführt wurde

Verwenden Sie die `hasBeenActive`-Eigenschaft, um zu überprüfen, ob der Benutzer seit dem Laden der Seite mit dieser interagiert hat.

```js
if (navigator.userActivation.hasBeenActive) {
  // proceed with auto-playing an animation, for example
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`UserActivation`](/de/docs/Web/API/UserActivation)
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive)
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation)
