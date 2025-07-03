---
title: "NavigationCurrentEntryChangeEvent: NavigationCurrentEntryChangeEvent() Konstruktor"
short-title: NavigationCurrentEntryChangeEvent()
slug: Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigationCurrentEntryChangeEvent()`** Konstruktor erzeugt ein neues [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) Objekt.

## Syntax

```js-nolint
new NavigationCurrentEntryChangeEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt.
- `init`
  - : Ein Objekt, das _zusätzlich zu den im [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften_ die folgenden Eigenschaften besitzt:
    - `from`
      - : Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) Objekt, das den Ort repräsentiert, zu dem navigiert wird.
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation, die die Änderung verursacht hat. Mögliche Werte sind `push`, `reload`, `replace` und `traverse`. Standardwert ist `null`.

### Rückgabewert

Ein neues [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent) Objekt.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigationCurrentEntryChangeEvent` Objekt wird erzeugt, wenn ein Handler als Ergebnis des Auslösens des [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event) Ereignisses aufgerufen wird.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
