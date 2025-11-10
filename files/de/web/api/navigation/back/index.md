---
title: "Navigation: back() Methode"
short-title: back()
slug: Web/API/Navigation/back
l10n:
  sourceCommit: 0496643fbc14a6bad2bf46c94ab27c541f6928ff
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`back()`** Methode der [`Navigation`](/de/docs/Web/API/Navigation) Schnittstelle navigiert um einen Eintrag in der Navigationshistorie rückwärts.

## Syntax

```js-nolint
back(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die zum [`navigate`](/de/docs/Web/API/Navigation/navigate_event) Ereignis weitergegeben werden und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann jeder Datentyp sein. Sie könnten beispielsweise den neu navigierten Inhalt mit einer anderen Animation anzeigen, abhängig davon, wie er navigiert wurde (nach links wischen, nach rechts wischen oder nach Hause gehen). Eine Zeichenkette, die angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem `intercept()` Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis ausgelöst wird.

Eines dieser Versprechen wird verworfen, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry) [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index) Wert -1 oder 0 ist, d.h. entweder ist das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv, oder der aktuelle Historieneintrag ist der erste in der Historie, was bedeutet, dass eine Rückwärtsnavigation nicht möglich ist, oder das aktuelle [`Document`](/de/docs/Web/API/Document) wird entladen.

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

- [Modern client-side routing: the Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API explainer](https://github.com/WICG/navigation-api/blob/main/README.md)
