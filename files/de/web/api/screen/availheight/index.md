---
title: "Screen: availHeight-Eigenschaft"
short-title: availHeight
slug: Web/API/Screen/availHeight
l10n:
  sourceCommit: b2af4eb16dd4c399ed81f67efd49777fa6ae9030
---

{{APIRef("CSSOM")}}

Die schreibgeschützte **`availHeight`**-Eigenschaft der {{DOMxRef("Screen")}}-Schnittstelle gibt die Höhe in CSS-Pixeln des für Webinhalte verfügbaren Platzes auf dem Bildschirm zurück. Da {{DOMxRef("Screen")}} über die {{DOMxRef("Window")}}-Schnittstelle durch die Eigenschaft {{DOMxRef("Window.screen", "window.screen")}} bereitgestellt wird, greifen Sie auf `availHeight` mit `window.screen.availHeight` zu.

Sie können ähnlich {{DOMxRef("Screen.availWidth")}} verwenden, um die Anzahl der Pixel zu erhalten, die horizontal für den Browser zur Verfügung stehen.

## Wert

Ein numerischer Wert, der die Anzahl der CSS-Pixel angibt, die der verfügbare Platz auf dem Bildschirm hoch ist. Dieser Wert kann nicht größer sein als der Wert von {{DOMxRef("Screen.height", "window.screen.height")}}, und wird geringer sein, wenn das Gerät oder der Benutzeragent sich vertikalen Raum reserviert.

Zum Beispiel, auf einem Mac, dessen Dock sich standardmäßig am unteren Bildschirmrand befindet, ist der Wert von `availHeight` ungefähr der Wert von `height` (die gesamte Höhe des Bildschirms in CSS-Pixeln) minus den Höhen des Docks und der Menüleiste, wie im folgenden Diagramm zu sehen. Diese belegen nur `availHeight`, wenn sie immer angezeigt werden: Wenn die Seite im Vollbildmodus ist oder wenn das Dock so konfiguriert ist, dass es automatisch ein- und ausgeblendet wird, dann werden sie nicht in `availHeight` gezählt.

![Diagramm, das zeigt, wie Screen.availHeight sich zu Screen.height und dem Bildschirminhalt verhält](availheight-diagram.svg)

## Beispiele

Wenn Ihre Webanwendung ein neues Fenster öffnen muss, wie z.B. eine Werkzeugpalette, die mehrere Paneele enthalten kann, und es so positionieren möchte, dass es den gesamten verfügbaren vertikalen Raum einnimmt, können Sie dies mit einem ähnlichen Code wie hier gesehen tun.

Im Hauptfenster wird, wenn es Zeit ist, die Paneele zu öffnen, folgender Code verwendet:

```js
const paletteWindow = window.open(
  "panels.html",
  "Panels",
  "left=0, top=0, width=200",
);
```

Das HTML des Panels-Fensters in `panels.html` enthält seinen eigenen JavaScript-Code, der direkt ausgeführt wird, sobald das Fenster erstellt wird. Es muss nicht auf ein bestimmtes Ereignis warten (oder auf ein Ereignis überhaupt). Dieser Code kümmert sich um das Anpassen der Fenstergröße basierend auf dem verfügbaren Platz:

```js
window.outerHeight = window.screen.availHeight;
```

Das Ergebnis ähnelt dem unten Gezeigten. Beachten Sie, dass das Panels-Fenster den gesamten verfügbaren vertikalen Raum auf der linken Seite des Bildschirms ausfüllt.

![Screenshot des Beispiels für Screen.availHeight](screen-availheight.png)

Auf einem Windows-System würde dies ähnlich funktionieren, indem das Fenster geöffnet und vertikal so dimensioniert wird, dass es den gesamten verfügbaren vertikalen Raum nutzt und Platz für die Taskleiste und andere Interfaces, die Platz reservieren, lässt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("Window")}}
- {{DOMxRef("Screen")}}
- {{DOMxRef("Screen.availWidth")}}
- {{DOMxRef("Window.innerHeight")}}
