---
title: "NavigationCurrentEntryChangeEvent: NavigationCurrentEntryChangeEvent() Konstruktor"
short-title: NavigationCurrentEntryChangeEvent()
slug: Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Der **`NavigationCurrentEntryChangeEvent()`** Konstruktor erzeugt ein neues [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) Objekt.

## Syntax

```js-nolint
new NavigationCurrentEntryChangeEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert.
- `init`
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften hat:
    - `from`
      - : Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt, welches den Ort repräsentiert, zu dem navigiert wird.
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation, die zur Änderung geführt hat. Mögliche Werte sind `push`, `reload`, `replace` und `traverse`. Standardmäßig `null`.

### Rückgabewert

Ein neues [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigationCurrentEntryChangeEvent` Objekt wird konstruiert, wenn ein Handler als Ergebnis des Auslösens des [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignisses aufgerufen wird.

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Modernes Client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
