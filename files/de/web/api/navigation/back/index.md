---
title: "Navigation: back() Methode"
short-title: back()
slug: Web/API/Navigation/back
l10n:
  sourceCommit: e00c30e3919b1cc08fa1ea3913e75a42a91add02
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

Die **`back()`** Methode der {{domxref("Navigation")}}-Schnittstelle navigiert um einen Eintrag rückwärts in der Navigation History.

## Syntax

```js-nolint
back(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `info` {{optional_inline}}
      - : Vom Entwickler definierte Informationen, die an das {{domxref("Navigation/navigate_event", "navigate")}}-Event übermittelt werden, verfügbar in {{domxref("NavigateEvent.info")}}. Dies kann jeder Datentyp sein. Beispielsweise könnten Sie den neu navigierten Inhalt mit einer anderen Animation anzeigen, abhängig davon, wie er navigiert wurde (nach links wischen, nach rechts wischen oder nach Hause gehen). Eine Zeichenkette, die angibt, welche Animation verwendet werden soll, könnte als `info` übergeben werden.

### Rückgabewert

Ein Objekt mit den folgenden Eigenschaften:

- `committed`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn sich die sichtbare URL geändert hat und ein neuer {{domxref("NavigationHistoryEntry")}} erstellt wurde.
- `finished`
  - : Ein {{jsxref("Promise")}}, das erfüllt wird, wenn alle von der `intercept()`-Handler zurückgegebenen Promises erfüllt sind. Dies entspricht dem Erfüllen des {{domxref("NavigationTransition.finished")}}-Promises, wenn das {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}}-Event ausgelöst wird.

Einer dieser Promises wird abgelehnt, wenn die Navigation aus irgendeinem Grund fehlgeschlagen ist.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der {{domxref("Navigation.currentEntry")}}'s {{domxref("NavigationHistoryEntry.index")}}-Wert -1 oder 0 beträgt, d.h. entweder das aktuelle {{domxref("Document")}} noch nicht aktiv ist, oder der aktuelle History-Eintrag der erste in der History ist, was bedeutet, dass eine Rückwärtsnavigation nicht möglich ist, oder wenn das aktuelle {{domxref("Document")}} entladen wird.

## Beispiele

```js
async function backHandler() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Führen Sie alle erforderlichen Bereinigungen durch, 
    // nachdem die Navigation abgeschlossen ist
  } else {
    displayBanner("Sie sind auf der ersten Seite");
  }
}

async function forwardHandler() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Führen Sie alle erforderlichen Bereinigungen durch, 
    // nachdem die Navigation abgeschlossen ist
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
- Domenic Denicolas [Live-Demo zur Navigation API](https://gigantic-honored-octagon.glitch.me/)
