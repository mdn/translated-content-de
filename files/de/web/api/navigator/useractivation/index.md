---
title: "Navigator: Eigenschaft userActivation"
short-title: userActivation
slug: Web/API/Navigator/userActivation
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`userActivation`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt zurück, das Informationen über den aktuellen Benutzeraktivierungszustand des Fensters enthält.

## Wert

Ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt.

## Beispiele

### Überprüfen, ob kürzlich eine Benutzerhandlung durchgeführt wurde

Verwenden Sie [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive), um zu überprüfen, ob der Benutzer derzeit mit der Seite interagiert ({{Glossary("Transient_activation", "Transiente Aktivierung")}}).

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

### Überprüfen, ob jemals eine Benutzerhandlung durchgeführt wurde

Verwenden Sie [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive), um zu überprüfen, ob der Benutzer jemals mit der Seite interagiert hat ({{Glossary("Sticky_activation", "Stabile Aktivierung")}}).

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
- [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive)
- [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive)
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/Defenses/User_activation)
