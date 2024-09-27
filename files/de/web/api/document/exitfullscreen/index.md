---
title: "Document: exitFullscreen()-Methode"
short-title: exitFullscreen()
slug: Web/API/Document/exitFullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Fullscreen API")}}

Die Methode [`Document`](/de/docs/Web/API/Document) **`exitFullscreen()`** fordert, dass das Element, das derzeit im Vollbildmodus präsentiert wird, aus diesem Modus herausgenommen wird und der vorherige Zustand des Bildschirms wiederhergestellt wird. Dies macht in der Regel die Auswirkungen eines vorherigen Aufrufs von [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen) rückgängig.

## Syntax

```js-nolint
exitFullscreen()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der aufgelöst wird, sobald der [User Agent](/de/docs/Glossary/user_agent) das Verlassen des Vollbildmodus abgeschlossen hat. Wenn ein Fehler beim Versuch des Verlassens des Vollbildmodus auftritt, wird der `catch()`-Handler des Promise aufgerufen.

## Beispiele

Dieses Beispiel bewirkt, dass das aktuelle Dokument bei jedem Mausklick innerhalb des Dokuments zwischen der Vollbildpräsentation ein- und ausgeschaltet wird.

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
> Beispiele zu [`Element.requestFullscreen()`](/de/docs/Web/API/Element/requestFullscreen#examples).

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
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  Attribut
