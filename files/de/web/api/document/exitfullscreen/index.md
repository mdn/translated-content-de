---
title: "Dokument: exitFullscreen()-Methode"
short-title: exitFullscreen()
slug: Web/API/Document/exitFullscreen
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{ApiRef("Fullscreen API")}}

Die [`Document`](/de/docs/Web/API/Document)-Methode
**`exitFullscreen()`** fordert, dass das Element in diesem
Dokument, welches derzeit im Vollbildmodus dargestellt wird, aus dem
Vollbildmodus herausgenommen wird und der vorherige Zustand des Bildschirms wiederhergestellt wird. Dies kehrt normalerweise die Effekte eines vorherigen Aufrufs von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) um.

## Syntax

```js-nolint
exitFullscreen()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, sobald der {{Glossary("user_agent", "User-Agent")}} das Beenden des Vollbildmodus abgeschlossen hat. Wenn ein Fehler beim Versuch, den Vollbildmodus zu beenden, auftritt, wird der `catch()`-Handler des Promises aufgerufen.

## Beispiele

Dieses Beispiel bewirkt, dass das aktuelle Dokument bei jedem Mausklick darauf zwischen einer Vollbildpräsentation ein- und ausgeschaltet wird.

```js
document.onclick = (event) => {
  if (document.fullscreenElement) {
    document
      .exitFullscreen()
      .then(() => console.log("Document Exited from Full screen mode"))
      .catch((err) => console.error(err));
  } else {
    document.documentElement.requestFullscreen();
  }
};
```

> [!NOTE]
> Ein vollständigeres Beispiel finden Sie bei den
> [`Element.requestFullscreen()`-Beispielen](/de/docs/Web/API/Element/requestFullscreen#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
- [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen)
- [`Document.fullscreenElement`](/de/docs/Web/API/Document/fullscreenElement)
- {{ cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}}-Attribut [`allowfullscreen`](/de/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen)
