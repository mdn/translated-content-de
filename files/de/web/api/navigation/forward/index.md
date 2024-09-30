---
title: "Navigation: forward() Methode"
short-title: forward()
slug: Web/API/Navigation/forward
l10n:
  sourceCommit: e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`forward()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert vorwärts um einen Eintrag im Navigationsverlauf.

## Syntax

```js-nolint
forward(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event übergeben werden und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar gemacht werden. Dies kann jeder Datentyp sein. Sie könnten beispielsweise wünschen, neu navigierte Inhalte mit einer anderen Animation anzuzeigen, je nachdem, wie zu ihnen navigiert wurde (nach links oder rechts wischen oder zur Startseite gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn alle von dem [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler zurückgegebenen Promises erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Einer dieser Promises schlägt fehl, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)'s [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert -1 oder [`navigation.entries().length - 1`](/de/docs/Web/API/Navigation/entries) ist, d. h. entweder das aktuelle [`Document`](/de/docs/Web/API/Document) ist noch nicht aktiv oder der aktuelle Verlaufs-Eintrag ist der letzte im Verlauf, was bedeutet, dass eine Vorwärtsnavigation nicht möglich ist, oder wenn das aktuelle [`Document`](/de/docs/Web/API/Document) entladen wird.

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

- [Moderne clientseitige Routing: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärung](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
