---
title: "Document: exitFullscreen()-Methode"
short-title: exitFullscreen()
slug: Web/API/Document/exitFullscreen
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ApiRef("Fullscreen API")}}

Die Methode **`exitFullscreen()`**
des {{domxref("Document")}}-Objekts fordert an, dass das Element in diesem
Dokument, welches derzeit im Vollbildmodus präsentiert wird, aus dem
Vollbildmodus genommen wird und der vorherige Bildschirmzustand wiederhergestellt wird. Dies hebt in der Regel die Auswirkungen eines vorherigen Aufrufs von {{domxref("Element.requestFullscreen()")}} auf.

## Syntax

```js-nolint
exitFullscreen()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird, sobald der {{Glossary("user agent")}} den Vollbildmodus beendet hat. Wenn beim Versuch, den Vollbildmodus zu beenden, ein Fehler auftritt, wird der `catch()`-Handler des Promises aufgerufen.

## Beispiele

Dieses Beispiel bewirkt, dass das aktuelle Dokument bei jedem Mausklick im Dokument in den und aus dem Vollbildmodus wechselt.

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
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.fullscreenElement") }}
- {{ cssxref(":fullscreen") }} und {{cssxref("::backdrop")}}
- Das {{HTMLElement("iframe")}} [`allowfullscreen`](/de/docs/Web/HTML/Element/iframe#allowfullscreen)
  Attribut
