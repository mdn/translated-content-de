---
title: "console: profile() statische Methode"
short-title: profile()
slug: Web/API/console/profile_static
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.profile()`** startet die Aufzeichnung eines Leistungsprofils (zum Beispiel das [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).

Sie können optional ein Argument angeben, um das Profil zu benennen, und dies ermöglicht es Ihnen, nur dieses Profil zu stoppen, wenn mehrere Profile aufgezeichnet werden. Siehe [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static), um zu sehen, wie dieses Argument interpretiert wird.

Um die Aufzeichnung zu stoppen, rufen Sie [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static) auf.

## Syntax

```js-nolint
profile(profileName)
```

### Parameter

- `profileName` {{Optional_Inline}}
  - : Der Name, der dem Profil gegeben werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static)
