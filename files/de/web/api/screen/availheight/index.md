---
title: "Screen: availHeight-Eigenschaft"
short-title: availHeight
slug: Web/API/Screen/availHeight
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`availHeight`**-Eigenschaft des [`Screen`](/de/docs/Web/API/Screen)-Interfaces gibt die Höhe in CSS-Pixeln des für Webinhalte verfügbaren Bereichs auf dem Bildschirm zurück. Da [`Screen`](/de/docs/Web/API/Screen) auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle unter der Eigenschaft [`window.screen`](/de/docs/Web/API/Window/screen) verfügbar ist, greifen Sie mit `window.screen.availHeight` auf `availHeight` zu.

Ebenso können Sie [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth) verwenden, um die Anzahl der horizontal für den Browser verfügbaren Pixel zu ermitteln.

## Wert

Ein numerischer Wert, der angibt, wie viele CSS-Pixel der verfügbare Raum des Bildschirms hoch ist. Dies kann nicht größer sein als der Wert von [`window.screen.height`](/de/docs/Web/API/Screen/height) und ist kleiner, falls das Gerät oder der Benutzer-Agent vertikalen Raum für sich selbst reserviert.

Zum Beispiel auf einem Mac, bei dem das Dock am unteren Bildschirmrand platziert ist (was standardmäßig der Fall ist), entspricht der Wert von `availHeight` ungefähr dem Wert von `height` (der gesamten Höhe des Bildschirms in CSS-Pixeln) abzüglich der Höhen des Docks und der Menüleiste, wie im unten stehenden Diagramm zu sehen. Diese nehmen nur `availHeight` ein, wenn sie immer angezeigt werden: Wenn die Seite im Vollbildmodus ist oder das Dock so konfiguriert ist, dass es automatisch ein- und ausgeblendet wird, werden sie in `availHeight` nicht mitgezählt.

![Diagramm, das zeigt, wie Screen.availHeight in Bezug zu Screen.height und dem Bildschirminhalt steht](availheight-diagram.svg)

## Beispiele

Wenn Ihre Webanwendung ein neues Fenster öffnen muss, wie z. B. eine Werkzeugpalette, die mehrere Panels enthalten kann, und Sie es so positionieren möchten, dass es den gesamten vertikalen verfügbaren Raum einnimmt, können Sie dies mit einem Code wie dem hier gezeigten tun.

Im Hauptfenster wird der folgende Code verwendet, wenn es Zeit ist, die Panels zu öffnen.

```js
const paletteWindow = window.open(
  "panels.html",
  "Panels",
  "left=0, top=0, width=200",
);
```

Der HTML-Code des Panel-Fensters in `panels.html` enthält eigenen JavaScript-Code, der ausgeführt wird, sobald das Fenster erstellt wird. Es muss nicht auf ein bestimmtes Ereignis (oder überhaupt ein Ereignis) warten. Dieser Code kümmert sich um die Größenänderung des Fensters basierend auf dem verfügbaren Platz:

```js
window.outerHeight = window.screen.availHeight;
```

Das Ergebnis sieht ähnlich aus wie unten gezeigt. Beachten Sie das Panel-Fenster, das den gesamten verfügbaren vertikalen Raum auf der linken Seite des Bildschirms einnimmt.

![Screenshot des Beispiels für Screen.availHeight](screen-availheight.png)

Auf einem Windows-System würde dies ähnlich funktionieren, indem das Fenster geöffnet und vertikal so dimensioniert wird, dass es den gesamten verfügbaren vertikalen Raum nutzt und Platz für die Taskleiste und andere Benutzeroberflächenelemente lässt, die Platz reservieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window`](/de/docs/Web/API/Window)
- [`Screen`](/de/docs/Web/API/Screen)
- [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth)
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)
