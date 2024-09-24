---
title: "NavigationCurrentEntryChangeEvent: NavigationCurrentEntryChangeEvent() Konstruktor"
short-title: NavigationCurrentEntryChangeEvent()
slug: Web/API/NavigationCurrentEntryChangeEvent/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: df3316c2c702c57514bfd8daba389765464ea653
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Der **`NavigationCurrentEntryChangeEvent()`**-Konstruktor erstellt ein neues {{domxref("NavigationCurrentEntryChangeEvent")}}-Objekt.

## Syntax

```js-nolint
new NavigationCurrentEntryChangeEvent(type, init)
```

### Parameter

- `type`
  - : Ein String, der den Typ des Ereignisses repräsentiert. Im Fall von `NavigationCurrentEntryChangeEvent` ist dies immer `event`.
- `init`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `destination`
      - : Ein {{domxref("NavigationHistoryEntry")}}-Objekt, das den Ort repräsentiert, zu dem navigiert wird.
    - `navigationType` {{optional_inline}}
      - : Der Typ der Navigation, die zur Änderung geführt hat. Mögliche Werte sind `push`, `reload`, `replace` und `traverse`. Standardmäßig `null`.

## Beispiele

Ein Entwickler würde diesen Konstruktor nicht manuell verwenden. Ein neues `NavigationCurrentEntryChangeEvent`-Objekt wird erstellt, wenn ein Handler als Ergebnis des {{domxref("Navigation.currententrychange_event", "currententrychange")}}-Ereignisses aufgerufen wird.

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

- [Modernes client-seitiges Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Erklärung der Navigation API](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Live-Demo der Navigation API](https://gigantic-honored-octagon.glitch.me/)
