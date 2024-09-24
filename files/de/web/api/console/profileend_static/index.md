---
title: "console: profileEnd() statische Methode"
short-title: profileEnd()
slug: Web/API/console/profileEnd_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die **`console.profileEnd()`** statische Methode stoppt die Aufzeichnung eines Profils, das zuvor mit {{domxref("console/profile_static", "console.profile()")}} gestartet wurde.

Sie können optional ein Argument angeben, um dem Profil einen Namen zu geben. Dadurch können Sie nur dieses Profil beenden, wenn Sie mehrere Profile aufzeichnen.

- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser mit dem Namen eines aufgezeichneten Profils übereinstimmt, wird dieses Profil gestoppt.
- Wenn `console.profileEnd()` ein Profilname übergeben wird und dieser nicht mit dem Namen eines aufgezeichneten Profils übereinstimmt, werden keine Änderungen vorgenommen.
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

- {{domxref("console/profile_static", "console.profile()")}}
