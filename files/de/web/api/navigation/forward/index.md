---
title: "Navigation: forward() Methode"
short-title: forward()
slug: Web/API/Navigation/forward
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

Die **`forward()`** Methode des [`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert um einen Eintrag vorwärts in der Navigationshistorie.

## Syntax

```js-nolint
forward(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis übergeben werden und in [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann jeder Datentyp sein. Sie könnten beispielsweise den neu navigierten Inhalt mit einer anderen Animation anzeigen lassen, abhängig davon, wie dorthin navigiert wurde (nach links wischen, nach rechts wischen oder nach Hause gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler zurückgegebenen Versprechen erfüllt sind. Dies entspricht dem Erfüllen des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished) Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event) Ereignis eintritt.

Eines dieser Versprechen wird zurückgewiesen, falls die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)'s [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index) Wert -1 ist oder [`navigation.entries().length - 1`](/de/docs/Web/API/Navigation/entries), d.h. entweder ist das aktuelle [`Document`](/de/docs/Web/API/Document) noch nicht aktiv, oder der aktuelle Historieneintrag ist der letzte in der Historie, was bedeutet, dass eine vorwärtige Navigation nicht möglich ist, oder wenn das aktuelle [`Document`](/de/docs/Web/API/Document) entladen wird.

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

- [Moderne clientseitige Routings: Die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärungsdokument](https://github.com/WICG/navigation-api/blob/main/README.md)
