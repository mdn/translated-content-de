---
title: "MediaQueryList: removeListener() Methode"
short-title: removeListener()
slug: Web/API/MediaQueryList/removeListener
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die **`removeListener()`**-Methode der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Schnittstelle entfernt einen Listener aus dem `MediaQueryListener`.

In älteren Browsern hat `MediaQueryList` noch nicht von [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt, daher wurde diese Methode als Alias für [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) bereitgestellt. Verwenden Sie `removeEventListener()` anstelle von `removeListener()`, wenn es in den Browsern verfügbar ist, die Sie unterstützen müssen.

## Syntax

```js-nolint
removeListener(func)
```

### Parameter

- `func`
  - : Eine Funktion oder Funktionsreferenz, die die Callback-Funktion darstellt, die Sie entfernen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const paragraph = document.querySelector("p");
const mediaQueryList = window.matchMedia("(width <= 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    paragraph.textContent = "This is a narrow screen — 600px wide or less.";
    document.body.style.backgroundColor = "pink";
  } else {
    /* the viewport is more than 600 pixels wide */
    paragraph.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "aquamarine";
  }
}

mediaQueryList.addListener(screenTest);

// Later on, when it is no longer needed
mediaQueryList.removeListener(screenTest);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Medienabfragen aus Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
