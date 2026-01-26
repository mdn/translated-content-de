---
title: "NavigationCurrentEntryChangeEvent: from-Eigenschaft"
short-title: from
slug: Web/API/NavigationCurrentEntryChangeEvent/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`from`** schreibgeschützte Eigenschaft der [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent)-Schnittstelle gibt das [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) zurück, von dem aus navigiert wurde.

## Wert

Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt.

## Beispiele

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.from);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
