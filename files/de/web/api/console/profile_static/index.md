---
title: "console: profile() statische Methode"
short-title: profile()
slug: Web/API/console/profile_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.profile()`** beginnt mit der Aufzeichnung eines Leistungsprofils (zum Beispiel mit dem [Firefox Performance Tool](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html)).

Sie können optional ein Argument angeben, um dem Profil einen Namen zu geben. Dadurch können Sie nur dieses Profil stoppen, wenn mehrere Profile aufgezeichnet werden. Siehe [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static), um zu sehen, wie dieses Argument interpretiert wird.

Um die Aufzeichnung zu stoppen, rufen Sie [`console.profileEnd()`](/de/docs/Web/API/Console/profileEnd_static) auf.

## Syntax

```js-nolint
console.profile(profileName)
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
