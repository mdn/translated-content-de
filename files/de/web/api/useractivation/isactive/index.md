---
title: "UserActivation: isActive-Eigenschaft"
short-title: isActive
slug: Web/API/UserActivation/isActive
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`isActive`**-Eigenschaft der [`UserActivation`](/de/docs/Web/API/UserActivation)-Schnittstelle gibt an, ob das aktuelle Fenster eine {{Glossary("transient_activation", "transiente Benutzerauslösung")}} hat.

## Wert

Ein boolescher Wert.

## Beispiele

### Überprüfung, ob kürzlich eine Benutzeraktion durchgeführt wurde

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
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/Defenses/User_activation)
