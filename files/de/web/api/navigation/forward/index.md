---
title: "Navigation: Methode forward()"
short-title: forward()
slug: Web/API/Navigation/forward
l10n:
  sourceCommit: e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`forward()`**-Methode des {{domxref("Navigation")}}-Interfaces navigiert um einen Eintrag vorwärts in der Navigationshistorie.

## Syntax

```js-nolint
forward(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Entwicklerdefinierte Informationen, die an das {{domxref("Navigation/navigate_event", "navigate")}}-Event übergeben werden, verfügbar in {{domxref("NavigateEvent.info")}}. Dies kann jeder Datentyp sein. Sie könnten beispielsweise den neu navigierten Inhalt mit einer anderen Animation abhängig davon anzeigen, wie dorthin navigiert wurde (nach links wischen, nach rechts wischen oder zur Startseite gehen). Ein String, der angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn die sichtbare URL geändert wurde und ein neuer {{domxref("NavigationHistoryEntry")}} erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, der erfüllt wird, wenn alle Versprechen, die vom {{domxref("NavigateEvent.intercept()")}}-Handler zurückgegeben wurden, erfüllt wurden. Dies entspricht dem Erfüllen des {{domxref("NavigationTransition.finished")}}-Versprechens, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Event ausgelöst wird.

Eines dieser Versprechen wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Wert von {{domxref("Navigation.currentEntry")}}'s {{domxref("NavigationHistoryEntry.index")}} -1 oder {{domxref("Navigation.entries", "navigation.entries().length - 1")}} ist, das heißt entweder ist das aktuelle {{domxref("Document")}} noch nicht aktiv oder der aktuelle Geschichtseintrag ist der letzte in der Historie, was bedeutet, dass ein Vorwärts-Navigation nicht möglich ist, oder wenn das aktuelle {{domxref("Document")}} entladen wird.

## Beispiele

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Behandeln Sie jegliche notwendige Bereinigung, nachdem
    // die Navigation abgeschlossen ist
  } else {
    displayBanner("Sie sind auf der ersten Seite");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Behandeln Sie jegliche notwendige Bereinigung, nachdem
    // die Navigation abgeschlossen ist
  } else {
    displayBanner("Sie sind auf der letzten Seite");
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
