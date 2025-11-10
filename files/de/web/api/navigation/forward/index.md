---
title: "Navigation: forward() Methode"
short-title: forward()
slug: Web/API/Navigation/forward
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`forward()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert vorwärts um einen Eintrag in der Navigationshistorie.

## Syntax

```js-nolint
forward(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis übergeben werden und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar gemacht werden. Dies kann ein beliebiger Datentyp sein. Sie möchten beispielsweise neu navigierte Inhalte mit einer anderen Animation anzeigen, je nachdem, wie sie navigiert wurden (nach links wischen, nach rechts wischen oder nach Hause gehen). Eine Zeichenkette, die angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn alle von dem [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Eines dieser Versprechen schlägt fehl, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)'s [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert -1 oder [`navigation.entries().length - 1`](/de/docs/Web/API/Navigation/entries) ist, d.h. entweder das aktuelle [`Document`](/de/docs/Web/API/Document) ist noch nicht aktiv, oder der aktuelle Historieneintrag ist der letzte in der Historie, was bedeutet, dass eine Vorwärtsnavigation nicht möglich ist, oder wenn das aktuelle [`Document`](/de/docs/Web/API/Document) entladen wird.

## Beispiele

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the first page");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Handle any required clean-up after
    // navigation has finished
  } else {
    displayBanner("You are on the last page");
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Moderne clientseitige Navigation: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erläuterung](https://github.com/WICG/navigation-api/blob/main/README.md)
