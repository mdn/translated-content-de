---
title: "MediaQueryList: addListener()-Methode"
short-title: addListener()
slug: Web/API/MediaQueryList/addListener
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSSOM view API")}}{{Deprecated_Header}}

Die veraltete **`addListener()`**-Methode des
[`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Interfaces fügt einen Listener hinzu zum
`MediaQueryListener`, der eine benutzerdefinierte Callback-Funktion ausführt, wenn sich der Status der Media Query ändert.

In älteren Browsern hat `MediaQueryList` noch nicht von [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt,
daher wurde diese Methode als Alias von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) bereitgestellt.
Verwenden Sie `addEventListener()` anstelle von `addListener()`, sofern es
in den von Ihnen unterstützten Browsern verfügbar ist.

## Syntax

```js-nolint
addListener(func)
```

### Parameter

- `func`
  - : Eine Funktion oder Funktionsreferenz, die die Callback-Funktion darstellt, die Sie ausführen möchten,
    wenn sich der Status der Media Query ändert.

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Verwendung von Media Queries aus Code](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
