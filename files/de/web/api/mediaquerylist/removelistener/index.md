---
title: "MediaQueryList: removeListener()-Methode"
short-title: removeListener()
slug: Web/API/MediaQueryList/removeListener
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die **`removeListener()`**-Methode der {{DOMxRef("MediaQueryList")}}-Schnittstelle entfernt einen Listener vom `MediaQueryListener`.

In älteren Browsern erbt `MediaQueryList` noch nicht von {{DOMxRef("EventTarget")}}, daher wurde diese Methode als Alias von {{DOMxRef("EventTarget.removeEventListener()")}} bereitgestellt. Verwenden Sie `removeEventListener()` anstelle von `removeListener()`, wenn es in den von Ihnen unterstützten Browsern verfügbar ist.

## Syntax

```js-nolint
removeListener(func)
```

### Parameter

- `func`
  - : Eine Funktion oder Funktionsreferenz, die die Rückruffunktion darstellt, die Sie entfernen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const paragraph = document.querySelector("p");
const mediaQueryList = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* der Viewport ist 600 Pixel breit oder weniger */
    paragraph.textContent = "Dies ist ein schmaler Bildschirm — 600px breit oder weniger.";
    document.body.style.backgroundColor = "pink";
  } else {
    /* der Viewport ist mehr als 600 Pixel breit */
    paragraph.textContent = "Dies ist ein breiter Bildschirm — mehr als 600px breit.";
    document.body.style.backgroundColor = "aquamarine";
  }
}

mediaQueryList.addListener(screenTest);

// Später, wenn es nicht mehr benötigt wird
mediaQueryList.removeListener(screenTest);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries aus Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
