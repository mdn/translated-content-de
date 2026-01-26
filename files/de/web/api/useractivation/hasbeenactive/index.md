---
title: "UserActivation: hasBeenActive-Eigenschaft"
short-title: hasBeenActive
slug: Web/API/UserActivation/hasBeenActive
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`hasBeenActive`**-Eigenschaft der [`UserActivation`](/de/docs/Web/API/UserActivation)-Schnittstelle zeigt an, ob das aktuelle Fenster über eine {{Glossary("sticky_activation", "sticky user activation")}} verfügt.

## Wert

Ein Boolean.

## Beispiele

### Überprüfen, ob jemals eine Benutzergeste durchgeführt wurde

Verwenden Sie die `hasBeenActive`-Eigenschaft, um zu überprüfen, ob der Benutzer seit dem Laden der Seite mit ihr interagiert hat.

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
- [Funktionen, die durch Benutzeraktivierung beschränkt sind](/de/docs/Web/Security/Defenses/User_activation)
