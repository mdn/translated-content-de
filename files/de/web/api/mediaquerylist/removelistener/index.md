---
title: "MediaQueryList: removeListener() Methode"
short-title: removeListener()
slug: Web/API/MediaQueryList/removeListener
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM view API")}}

Die **`removeListener()`**-Methode des
[`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interfaces entfernt einen Listener von dem
`MediaQueryListener`.

In älteren Browsern hat `MediaQueryList` noch nicht von [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt,
daher wurde diese Methode als Alias von [`EventTarget.removeEventListener()`](/de/docs/Web/API/EventTarget/removeEventListener) bereitgestellt.
Verwenden Sie `removeEventListener()` anstelle von `removeListener()`, wenn es
in den Browsern verfügbar ist, die Sie unterstützen müssen.

## Syntax

```js-nolint
removeListener(func)
```

### Parameter

- `func`
  - : Eine Funktion oder ein Funktionsverweis, der die zu entfernende Callback-Funktion darstellt.

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

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
