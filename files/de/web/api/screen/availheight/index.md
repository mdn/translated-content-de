---
title: "Screen: availHeight-Eigenschaft"
short-title: availHeight
slug: Web/API/Screen/availHeight
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`availHeight`**-Eigenschaft der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle gibt die Höhe in CSS-Pixeln des für Webinhalte verfügbaren Raums auf dem Bildschirm zurück. Da [`Screen`](/de/docs/Web/API/Screen) auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle über die [`window.screen`](/de/docs/Web/API/Window/screen)-Eigenschaft verfügbar ist, greifen Sie mit `window.screen.availHeight` auf `availHeight` zu.

Sie können ähnlich [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth) verwenden, um die Anzahl der Pixel zu ermitteln, die horizontal für den Browser verfügbar sind.

## Wert

Ein numerischer Wert, der angibt, wie viele CSS-Pixel hoch der verfügbare Raum auf dem Bildschirm ist. Dieser Wert kann nicht größer sein als der Wert von [`window.screen.height`](/de/docs/Web/API/Screen/height) und wird geringer sein, wenn das Gerät oder der Benutzeragent vertikalen Raum für sich selbst reserviert.

Zum Beispiel, auf einem Mac, bei dem das Dock unten am Bildschirm positioniert ist (was standardmäßig der Fall ist), ist der Wert von `availHeight` ungefähr der Wert von `height` (die Gesamthöhe des Bildschirms in CSS-Pixeln) abzüglich der Höhen von Dock und Menüleiste, wie im untenstehenden Diagramm zu sehen. Sie nehmen nur `availHeight` in Anspruch, wenn sie immer angezeigt werden: Wenn die Seite im Vollbildmodus angezeigt wird oder das Dock so konfiguriert ist, dass es automatisch ein- und ausgeblendet wird, werden sie bei `availHeight` nicht berücksichtigt.

![Diagramm, das zeigt, wie Screen.availHeight mit Screen.height und dem Bildschirminhalt zusammenhängt](availheight-diagram.svg)

## Beispiele

Wenn Ihre Webanwendung ein neues Fenster öffnen muss, wie beispielsweise eine Werkzeugpalette, die mehrere Tafeln enthalten kann, und es so positionieren möchte, dass es den gesamten verfügbaren vertikalen Raum einnimmt, können Sie dies mit einem Code tun, der dem hier gezeigten ähnelt.

Im Hauptfenster wird, wenn es an der Zeit ist, die Tafeln zu öffnen, ein Code wie der folgende verwendet.

```js
const paletteWindow = window.open(
  "panels.html",
  "Panels",
  "left=0, top=0, width=200",
);
```

Der HTML-Code des Tafelfensters in `panels.html` enthält eigenen JavaScript-Code, der ausgeführt wird, sobald das Fenster erstellt wird. Es muss nicht einmal auf ein bestimmtes Ereignis (oder irgendein Ereignis) warten. Dieser Code kümmert sich um die Anpassung der Fenstergröße basierend auf dem verfügbaren Raum:

```js
window.outerHeight = window.screen.availHeight;
```

Das Ergebnis sieht ähnlich aus wie unten dargestellt. Beachten Sie das Tafelfenster, das den gesamten verfügbaren vertikalen Raum am linken Bildschirmrand ausfüllt.

![Screenshot des Beispiels für Screen.availHeight](screen-availheight.png)

Auf einem Windows-System würde dies ähnlich funktionieren, indem das Fenster geöffnet und vertikal so dimensioniert wird, dass es den gesamten verfügbaren vertikalen Raum nutzt und Platz für die Taskleiste und andere Interface-Elemente lässt, die Raum reservieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window`](/de/docs/Web/API/Window)
- [`Screen`](/de/docs/Web/API/Screen)
- [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth)
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)
