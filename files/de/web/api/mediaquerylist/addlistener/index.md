---
title: "MediaQueryList: addListener()-Methode"
short-title: addListener()
slug: Web/API/MediaQueryList/addListener
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die veraltete **`addListener()`**-Methode der
[`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle fügt einen Listener zum
`MediaQueryListener` hinzu, der eine benutzerdefinierte Callback-Funktion ausführt, wenn sich der Status
der Media Query ändert.

In älteren Browsern erbte `MediaQueryList` noch nicht von [`EventTarget`](/de/docs/Web/API/EventTarget),
sodass diese Methode als Alias von [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
bereitgestellt wurde. Verwenden Sie `addEventListener()` statt `addListener()`, wenn es
in den von Ihnen zu unterstützenden Browsern verfügbar ist.

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
const mediaQueryList = window.matchMedia("(max-width: 600px)");

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

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Die Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
