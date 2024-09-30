---
title: "console: profileEnd() statische Methode"
short-title: profileEnd()
slug: Web/API/console/profileEnd_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.profileEnd()`** stoppt die Aufzeichnung eines Profils, das zuvor mit [`console.profile()`](/de/docs/Web/API/Console/profile_static) gestartet wurde.

Sie können optional ein Argument angeben, um dem Profil einen Namen zu geben. Auf diese Weise können Sie nur das Profil stoppen, wenn Sie mehrere Profile aufzeichnen.

- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser dem Namen eines aufgezeichneten Profils entspricht, wird dieses Profil gestoppt.
- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser nicht dem Namen eines aufgezeichneten Profils entspricht, werden keine Änderungen vorgenommen.
- Wenn `console.profileEnd()` kein Profilname übergeben wird, wird das zuletzt gestartete Profil gestoppt.

## Syntax

```js-nolint
profileEnd(profileName)
```

### Parameter

- `profileName` {{Optional_Inline}}
  - : Der Name, der dem Profil gegeben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.profile()`](/de/docs/Web/API/Console/profile_static)
