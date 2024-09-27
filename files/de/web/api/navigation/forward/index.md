---
title: "Navigation: forward() Methode"
short-title: forward()
slug: Web/API/Navigation/forward
l10n:
  sourceCommit: e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`forward()`** Methode des
[`Navigation`](/de/docs/Web/API/Navigation)-Interfaces navigiert einen Eintrag vorwärts in der Verlaufshistorie.

## Syntax

```js-nolint
forward(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das [`navigate`](/de/docs/Web/API/Navigation/navigate_event)-Ereignis übergeben werden und im [`NavigateEvent.info`](/de/docs/Web/API/NavigateEvent/info) verfügbar sind. Dies kann jeder Datentyp sein. Beispielsweise möchten Sie möglicherweise neu navigierte Inhalte mit einer anderen Animation anzeigen, abhängig davon, wie sie erreicht wurden (nach links wischen, nach rechts wischen oder zum Startbildschirm zurückkehren). Eine Zeichenkette, die angibt, welche Animation zu verwenden ist, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer [`NavigationHistoryEntry`](/de/docs/Web/API/NavigationHistoryEntry) erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von dem [`NavigateEvent.intercept()`](/de/docs/Web/API/NavigateEvent/intercept)-Handler zurückgegebenen Versprechungen erfüllt sind. Dies entspricht der Erfüllung des [`NavigationTransition.finished`](/de/docs/Web/API/NavigationTransition/finished)-Versprechens, wenn das [`navigatesuccess`](/de/docs/Web/API/Navigation/navigatesuccess_event)-Ereignis ausgelöst wird.

Jedes dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der [`Navigation.currentEntry`](/de/docs/Web/API/Navigation/currentEntry)'s [`NavigationHistoryEntry.index`](/de/docs/Web/API/NavigationHistoryEntry/index)-Wert -1 oder [`navigation.entries().length - 1`](/de/docs/Web/API/Navigation/entries) ist, d.h. entweder das aktuelle [`Document`](/de/docs/Web/API/Document) ist noch nicht aktiv, oder der aktuelle Verlaufseintrag ist der letzte in der Historie, was bedeutet, dass eine Vorwärtsnavigation nicht möglich ist, oder wenn das aktuelle [`Document`](/de/docs/Web/API/Document) entladen wird.

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

- [Moderne clientseitige Routenführung: die Navigation API](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Navigation API Erklärer](https://github.com/WICG/navigation-api/blob/main/README.md)
- Domenic Denicolas [Navigation API Live-Demo](https://gigantic-honored-octagon.glitch.me/)
