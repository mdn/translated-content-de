---
title: "MediaQueryList: Methode addListener()"
short-title: addListener()
slug: Web/API/MediaQueryList/addListener
l10n:
  sourceCommit: c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{APIRef("CSSOM")}}{{Deprecated_Header}}

Die veraltete **`addListener()`**-Methode der
{{DOMxRef("MediaQueryList")}}-Schnittstelle fügt einen Listener zu dem
`MediaQueryListener` hinzu, der eine benutzerdefinierte Callback-Funktion als Reaktion auf
eine Änderung des Status der Media Query ausführt.

In älteren Browsern hatte `MediaQueryList` noch nicht von {{DOMxRef("EventTarget")}} geerbt,
daher wurde diese Methode als Alias zu {{DOMxRef("EventTarget.addEventListener()")}} bereitgestellt.
Verwenden Sie `addEventListener()` anstelle von `addListener()`, wenn es
in den von Ihnen zu unterstützenden Browsern verfügbar ist.

## Syntax

```js-nolint
addListener(func)
```

### Parameter

- `func`
  - : Eine Funktion oder Funktionsreferenz, die die Callback-Funktion darstellt, die ausgeführt werden soll,
    wenn sich der Status der Media Query ändert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const paragraph = document.querySelector("p");
const mediaQueryList = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* das Ansichtsfenster ist 600 Pixel breit oder weniger */
    paragraph.textContent = "Dies ist ein schmales Display — 600px breit oder weniger.";
    document.body.style.backgroundColor = "pink";
  } else {
    /* das Ansichtsfenster ist mehr als 600 Pixel breit */
    paragraph.textContent = "Dies ist ein breites Display — mehr als 600px breit.";
    document.body.style.backgroundColor = "aquamarine";
  }
}

mediaQueryList.addListener(screenTest);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Verwendung von Media Queries im Code](/de/docs/Web/CSS/CSS_media_queries/Testing_media_queries)
- {{DOMxRef("window.matchMedia()")}}
- {{DOMxRef("MediaQueryList")}}
- {{DOMxRef("MediaQueryListEvent")}}
