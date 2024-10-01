---
title: "Document: exitFullscreen() Methode"
short-title: exitFullscreen()
slug: Web/API/Document/exitFullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Fullscreen API")}}

Die [`Document`](/de/docs/Web/API/Document) Methode **`exitFullscreen()`** fordert an, dass das Element in diesem Dokument, das derzeit im Vollbildmodus präsentiert wird, aus dem Vollbildmodus genommen wird, um den vorherigen Zustand des Bildschirms wiederherzustellen. Dies hebt normalerweise die Effekte eines vorherigen Aufrufs von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) auf.

## Syntax

```js-nolint
exitFullscreen()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, sobald der {{Glossary("user_agent", "User-Agent")}} den Vollbildmodus verlassen hat. Wenn ein Fehler bei dem Versuch auftritt, den Vollbildmodus zu verlassen, wird der `catch()` Handler für das Promise aufgerufen.

## Beispiele

Dieses Beispiel bewirkt, dass das aktuelle Dokument bei jedem Mausklick innerhalb des Dokuments in und aus einer Vollbildpräsentation wechselt.

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
> Für ein vollständigeres Beispiel siehe die
> [`Element.requestFullscreen()` Beispiele](/de/docs/Web/API/Element/requestFullscreen#examples).

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
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen) Attribut
