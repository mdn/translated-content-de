---
title: "console: profileEnd() statische Methode"
short-title: profileEnd()
slug: Web/API/console/profileEnd_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die **`console.profileEnd()`** statische Methode beendet die Aufzeichnung eines Profils, das zuvor mit [`console.profile()`](/de/docs/Web/API/Console/profile_static) gestartet wurde.

Sie können optional ein Argument angeben, um dem Profil einen Namen zu geben. Auf diese Weise können Sie nur dieses Profil beenden, wenn Sie mehrere Profile aufzeichnen.

- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser mit dem Namen eines aufgezeichneten Profils übereinstimmt, wird dieses Profil beendet.
- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser nicht mit dem Namen eines aufgezeichneten Profils übereinstimmt, werden keine Änderungen vorgenommen.
- Wird `console.profileEnd()` kein Profilname übergeben, wird das zuletzt gestartete Profil beendet.

## Syntax

```js-nolint
profileEnd(profileName)
```

### Parameter

- `profileName` {{Optional_Inline}}
  - : Der Name, den Sie dem Profil geben möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.profile()`](/de/docs/Web/API/Console/profile_static)
