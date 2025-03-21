---
title: "console: profile() statische Methode"
short-title: profile()
slug: Web/API/console/profile_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.profile()`** beginnt mit der Aufzeichnung eines Performance-Profils (zum Beispiel das [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).

Sie können optional ein Argument angeben, um dem Profil einen Namen zu geben. Dadurch können Sie nur dieses Profil stoppen, wenn mehrere Profile aufgezeichnet werden. Sehen Sie sich [`console.profileEnd()`](/de/docs/Web/API/console/profileEnd_static) an, um zu erfahren, wie dieses Argument interpretiert wird.

Um die Aufzeichnung zu stoppen, rufen Sie [`console.profileEnd()`](/de/docs/Web/API/console/profileEnd_static) auf.

## Syntax

```js-nolint
console.profile(profileName)
```

### Parameter

- `profileName` {{Optional_Inline}}
  - : Der Name, den Sie dem Profil geben möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.profileEnd()`](/de/docs/Web/API/console/profileEnd_static)
