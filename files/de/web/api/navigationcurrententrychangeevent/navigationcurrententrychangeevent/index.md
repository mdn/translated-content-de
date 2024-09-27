---
title: "NavigationCurrentEntryChangeEvent: NavigationCurrentEntryChangeEvent() Konstruktor"
short-title: NavigationCurrentEntryChangeEvent()
slug: Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigationCurrentEntryChangeEvent()`**-Konstruktor erstellt ein neues [`NavigationCurrentEntryChangeEvent`](/de/docs/Web/API/NavigationCurrentEntryChangeEvent)-Objekt.

## Syntax

```js-nolint
new NavigationCurrentEntryChangeEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses darstellt. Im Fall von `NavigationCurrentEntryChangeEvent` ist dies immer `event`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `destination`
      - : Ein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry)-Objekt, das den Ort darstellt, zu dem navigiert wird.
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation, die zur Änderung geführt hat. Mögliche Werte sind `push`, `reload`, `replace` und `traverse`. Standardmäßig ist dies `null`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigationCurrentEntryChangeEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des Auslösens des [`currententrychange`](/de/docs/Web/API/Navigation/currententrychange_event)-Ereignisses aufgerufen wird.

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

- [Modernes clientseitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
