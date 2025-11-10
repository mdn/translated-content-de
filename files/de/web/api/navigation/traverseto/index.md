---
title: "Navigation: traverseTo()-Methode"
short-title: traverseTo()
slug: Web/API/Navigation/traverseTo
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`traverseTo()`**-Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert zu dem [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), das durch den angegebenen [`key`](/de/docs/Web/API/NavigationHistoryEntry/key) identifiziert wird.

## Syntax

```js-nolint
traverseTo(key)
traverseTo(key, options)
```

### Parameter

- `key`
  - : Der `key` des [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry), zu dem navigiert werden soll.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis übergeben werden sollen und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann jeder Datentyp sein. Beispielsweise könnten Sie den neu navigierten Inhalt abhängig davon, wie er aufgerufen wurde (nach links wischen, nach rechts wischen oder nach Hause gehen), mit einer anderen Animation anzeigen. Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neues [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle vom `intercept()`-Handler zurückgegebenen Promises erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Promises, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Eines dieser Promises wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)'s [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert -1 ist, was bedeutet, dass das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv ist, oder wenn die Navigation-Verlaufsliste kein [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) mit dem angegebenen Schlüssel enthält, oder wenn das aktuelle [`Document`](/de/docs/Web/API/Document) entladen wird.

## Beispiele

### Heimtasten-Einrichtung

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

- [Moderne client-seitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
