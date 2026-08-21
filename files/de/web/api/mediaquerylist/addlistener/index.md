---
title: "MediaQueryList: addListener() Methode"
short-title: addListener()
slug: Web/API/MediaQueryList/addListener
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSSOM view API")}}

Die veraltete **`addListener()`**-Methode der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList) Schnittstelle fügt einen Listener zur `MediaQueryListener` hinzu, der eine benutzerdefinierte Callback-Funktion ausführt, wenn sich der Status der Media Query ändert.

In älteren Browsern hat `MediaQueryList` noch nicht von [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt, daher wurde diese Methode als Alias für [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) bereitgestellt. Verwenden Sie `addEventListener()` anstelle von `addListener()`, wenn es in den Browsern, die Sie unterstützen müssen, verfügbar ist.

## Syntax

```js-nolint
addListener(func)
```

### Parameter

- `func`
  - : Eine Funktion oder Funktionsreferenz, die die Callback-Funktion darstellt, die Sie ausführen möchten, wenn sich der Status der Media Query ändert.

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
- [Media Queries im Code verwenden](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
