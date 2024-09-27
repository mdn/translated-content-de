---
title: "HTMLCanvasElement: contextlost Ereignis"
short-title: contextlost
slug: Web/API/HTMLCanvasElement/contextlost_event
l10n:
  sourceCommit: 16ddaba6073a5e4022aecd2aca8893905a9dd5d0
---

{{APIRef}}

Das **`contextlost`** Ereignis der [Canvas API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der Benutzeragent erkennt, dass der zugeordnete Speicher mit einem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Kontext verloren geht. Kontexte können aus verschiedenen Gründen verloren gehen, wie zum Beispiel Treiberabstürze oder wenn die Anwendung keinen Speicherplatz mehr hat.

Standardmäßig versucht der Benutzeragent, den Kontext wiederherzustellen und löst dann das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) aus. Benutzerdefinierter Code kann verhindern, dass der Kontext wiederhergestellt wird, indem [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) während der Ereignisbehandlung aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("contextlost", (event) => {});

oncontextlost = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Das folgende Codebeispiel erkennt das `contextlost` Ereignis.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

Um zu verhindern, dass der Kontext wiederhergestellt wird, könnte der Code stattdessen so aussehen:

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement: contextrestored` Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- [`OffscreenCanvas: contextlost` Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
