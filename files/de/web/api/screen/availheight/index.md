---
title: "Screen: availHeight-Eigenschaft"
short-title: availHeight
slug: Web/API/Screen/availHeight
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{APIRef("CSSOM view API")}}

Die schreibgeschützte [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle hat die **`availHeight`**-Eigenschaft, die die Höhe in CSS-Pixeln des für Webinhalte auf dem Bildschirm verfügbaren Raums zurückgibt. Da [`Screen`](/de/docs/Web/API/Screen) über die [`Window`](/de/docs/Web/API/Window)-Schnittstelle in der [`window.screen`](/de/docs/Web/API/Window/screen)-Eigenschaft verfügbar ist, greifen Sie mit `window.screen.availHeight` auf `availHeight` zu.

Sie können auf ähnliche Weise [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth) verwenden, um die Anzahl der Pixel zu erhalten, die horizontal dem Browser zur Verfügung stehen.

## Wert

Ein numerischer Wert, der angibt, wie viele CSS-Pixel hoch der verfügbare Raum auf dem Bildschirm ist. Dieser Wert kann nicht größer sein als der Wert von [`window.screen.height`](/de/docs/Web/API/Screen/height) und wird kleiner sein, wenn das Gerät oder der Benutzeragent vertikalen Raum für sich selbst reserviert.

Zum Beispiel, auf einem Mac, dessen Dock sich unten auf dem Bildschirm befindet (was die Standardeinstellung ist), ist der Wert von `availHeight` ungefähr der Wert von `height` (die Gesamthöhe des Bildschirms in CSS-Pixeln) minus der Höhen des Docks und der Menüleiste, wie im unten stehenden Diagramm gezeigt. Sie nehmen nur `availHeight` in Anspruch, wenn sie immer angezeigt werden: wenn die Seite im Vollbildmodus ist oder wenn das Dock so konfiguriert ist, dass es automatisch ein- und ausgeblendet wird, dann werden sie nicht in `availHeight` gezählt.

![Diagramm, das zeigt, wie Screen.availHeight im Verhältnis zu Screen.height und den Inhalten des Bildschirms steht](availheight-diagram.svg)

## Beispiele

Wenn Ihre Webanwendung ein neues Fenster öffnen muss, wie z.B. eine Werkzeugpalette, die mehrere Fenster enthalten kann, und es so positionieren möchte, dass es den gesamten vertikalen verfügbaren Raum einnimmt, können Sie dies mit einem ähnlichen Code wie hier gesehen tun.

Im Hauptfenster wird beim Öffnen der Fenster folgender Code verwendet.

```js
const paletteWindow = window.open(
  "panels.html",
  "Panels",
  "left=0, top=0, width=200",
);
```

Der HTML-Code des Fenster-Panels in `panels.html` hat ein eigenes JavaScript, das sofort ausgeführt wird, sobald das Fenster erstellt wurde. Es muss nicht auf irgendein besonderes Ereignis (oder überhaupt ein Ereignis) warten. Dieser Code kümmert sich darum, das Fenster basierend auf dem verfügbaren Raum zu skalieren:

```js
window.outerHeight = window.screen.availHeight;
```

Das Ergebnis sieht ungefähr wie unten aus. Beachten Sie, dass das Fenster-Panels den gesamten verfügbaren vertikalen Raum auf der linken Seite des Bildschirms einnimmt.

![Screenshot des Beispiels für Screen.availHeight](screen-availheight.png)

Auf einem Windows-System würde dies ähnlich funktionieren, indem das Fenster geöffnet und vertikal angepasst wird, sodass es den gesamten verfügbaren vertikalen Raum nutzt und Platz für die Taskleiste und andere Benutzeroberflächenelemente lässt, die Raum reservieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window`](/de/docs/Web/API/Window)
- [`Screen`](/de/docs/Web/API/Screen)
- [`Screen.availWidth`](/de/docs/Web/API/Screen/availWidth)
- [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight)
