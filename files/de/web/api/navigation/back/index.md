---
title: "Navigation: back()-Methode"
short-title: back()
slug: Web/API/Navigation/back
l10n:
  sourceCommit: e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`back()`**-Methode des
[`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert um einen Eintrag rückwärts in der Navigationshistorie.

## Syntax

```js-nolint
back(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Event übergeben werden, verfügbar gemacht in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info). Dies kann jeden Datentyp haben. Sie könnten beispielsweise den neu navigierten Inhalt mit einer anderen Animation anzeigen, je nachdem, wie dorthin navigiert wurde (nach links streichen, nach rechts streichen, oder nach Hause gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn die sichtbare URL geändert wurde und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn alle Promise, die vom `intercept()`-Handler zurückgegeben werden, erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Promises, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Event ausgelöst wird.

Jedes dieser Promise wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)-Wert des [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index) -1 oder 0 ist, d.h. entweder ist das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv, oder der aktuelle Historieneintrag ist der erste in der Historie, was bedeutet, dass eine Rückwärtsnavigation nicht möglich ist, oder wenn das aktuelle [`Document`](/de/docs/Web/API/Document) entlädt.

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

- [Moderne clientseitige Routings: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
