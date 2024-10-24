---
title: "console: profileEnd() statische Methode"
short-title: profileEnd()
slug: Web/API/console/profileEnd_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die **`console.profileEnd()`** statische Methode stoppt die Aufzeichnung eines Profils, die zuvor mit [`console.profile()`](/de/docs/Web/API/Console/profile_static) gestartet wurde.

Sie können optional ein Argument angeben, um dem Profil einen Namen zu geben. Dies ermöglicht es Ihnen, nur dieses Profil zu stoppen, wenn Sie mehrere Profile aufzeichnen.

- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser mit dem Namen eines aufgezeichneten Profils übereinstimmt, wird dieses Profil gestoppt.
- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser nicht mit dem Namen eines aufgezeichneten Profils übereinstimmt, werden keine Änderungen vorgenommen.
- Wenn `console.profileEnd()` kein Profilname übergeben wird, wird das zuletzt gestartete Profil gestoppt.

## Syntax

```js-nolint
console.profileEnd(profileName)
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
