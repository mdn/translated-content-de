---
title: "Navigation: traverseTo()-Methode"
short-title: traverseTo()
slug: Web/API/Navigation/traverseTo
l10n:
  sourceCommit: f828e14c25d972b71d57afb419d22c49ecad11d0
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`traverseTo()`**-Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert zu dem durch den gegebenen [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) identifizierten [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry).

## Syntax

```js-nolint
traverseTo(key)
traverseTo(key, options)
```

### Parameter

- `key`
  - : Der `key` des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), zu dem navigiert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionen-Objekt, das folgende Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event weitergegeben werden, verfügbar in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info). Dies kann jeden Datentyp umfassen. Sie könnten beispielsweise wünschen, neu navigierte Inhalte mit einer anderen Animation anzuzeigen, je nachdem, wie darauf zugegriffen wurde (nach links wischen, nach rechts wischen oder zur Startseite). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, welches erfüllt wird, wenn die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, welches erfüllt wird, wenn alle von dem `intercept()`-Handler zurückgegebenen Promises erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Promise, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event ausgelöst wird.

Eines dieser Promises wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)'s [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert -1 ist, was bedeutet, dass das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist, oder wenn die Navigationshistorienliste keinen [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) mit dem angegebenen `key` enthält, oder wenn das aktuelle [`Document`](/de/docs/Web/API/Document) entladen wird.

## Beispiele

### Home-Button einrichten

```js
function initHomeBtn() {
  // Get the key of the first loaded entry
  // so the user can always go back to this view.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercept navigate events, such as link clicks, and
// replace them with single-page navigations
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigate to a different view,
      // but the "home" button will always work.
    },
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
