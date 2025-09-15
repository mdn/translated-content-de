---
title: "MediaQueryList: addListener()-Methode"
short-title: addListener()
slug: Web/API/MediaQueryList/addListener
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}{{Deprecated_Header}}

Die veraltete **`addListener()`**-Methode der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle fügt einen Listener zum `MediaQueryListener` hinzu, der eine benutzerdefinierte Callback-Funktion als Reaktion auf die Änderung des Status der Medienabfrage ausführt.

In älteren Browsern hat `MediaQueryList` noch nicht von [`EventTarget`](/de/docs/Web/API/EventTarget) geerbt, weshalb diese Methode als Alias für [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) bereitgestellt wurde. Verwenden Sie `addEventListener()` anstelle von `addListener()`, wenn es in den Browsern verfügbar ist, die Sie unterstützen müssen.

## Syntax

```js-nolint
addListener(func)
```

### Parameter

- `func`
  - : Eine Funktion oder Funktionsreferenz, die die Callback-Funktion darstellt, die ausgeführt werden soll, wenn sich der Status der Medienabfrage ändert.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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

- [Medienabfragen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Medienabfragen aus Code verwenden](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
