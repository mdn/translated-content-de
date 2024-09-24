---
title: "BackgroundFetchRegistration: id-Eigenschaft"
short-title: id
slug: Web/API/BackgroundFetchRegistration/id
l10n:
  sourceCommit: c77a11ee1509542c16b0348afc4fcb3ffe588e1c
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die schreibgeschützte **`id`**-Eigenschaft der {{domxref("BackgroundFetchRegistration")}}-Schnittstelle gibt eine Kopie der `ID` des Hintergrundabrufs zurück.

## Wert

Ein String.

## Beispiele

Das Protokollieren dieses Teils in der Konsole gibt die Kennung zurück, die beim Registrieren des Abrufs festgelegt wurde. In diesem Fall `"my-fetch"`.

```js
console.log(bgFetch.id); // "my-fetch"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
