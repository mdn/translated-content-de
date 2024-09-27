---
title: "Navigator: userActivation-Eigenschaft"
short-title: userActivation
slug: Web/API/Navigator/userActivation
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`userActivation`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt zurück, das Informationen über den Benutzeraktivierungszustand des aktuellen Fensters enthält.

## Wert

Ein [`UserActivation`](/de/docs/Web/API/UserActivation)-Objekt.

## Beispiele

### Überprüfen, ob kürzlich eine Benutzeraktion durchgeführt wurde

Verwenden Sie [`UserActivation.isActive`](/de/docs/Web/API/UserActivation/isActive), um zu überprüfen, ob der Benutzer derzeit mit der Seite interagiert ([Flüchtige Aktivierung](/de/docs/Glossary/Transient_activation)).

```js
if (navigator.userActivation.isActive) {
  // proceed to request playing media, for example
}
```

### Überprüfen, ob jemals eine Benutzeraktion durchgeführt wurde

Verwenden Sie [`UserActivation.hasBeenActive`](/de/docs/Web/API/UserActivation/hasBeenActive), um zu überprüfen, ob der Benutzer jemals mit der Seite interagiert hat ([Dauerhafte Aktivierung](/de/docs/Glossary/Sticky_activation)).

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
- [Funktionen, die durch Benutzeraktivierung gesteuert werden](/de/docs/Web/Security/User_activation)
