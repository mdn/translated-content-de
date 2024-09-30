---
title: "Document: pointerLockElement-Eigenschaft"
short-title: pointerLockElement
slug: Web/API/Document/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte **`pointerLockElement`**-Eigenschaft des [`Document`](/de/docs/Web/API/Document)-Interfaces liefert das Element, das als Ziel für Mausereignisse festgelegt ist, während der Zeiger gesperrt ist. Sie ist `null`, wenn die Sperre aussteht, der Zeiger entsperrt ist oder das Ziel sich in einem anderen Dokument befindet.

## Wert

Ein [`Element`](/de/docs/Web/API/Element) oder `null`.

## Beispiele

### Überprüfen des Pointer-Lock-Status

Dieses Beispiel enthält ein {{htmlelement("div")}}-Element, das seinerseits ein {{htmlelement("button")}} enthält. Durch Klicken auf den Button wird eine Zeigersperre für das `<div>` angefordert.

Das Beispiel hört auch auf das [`pointerlockchange`](/de/docs/Web/API/Document/pointerlockchange_event)-Ereignis: Wenn dieses Ereignis ausgelöst wird, deaktiviert der Ereignishandler den "Sperren"-Button, wenn ein Element im Dokument die Zeigersperre hat, und aktiviert den Button andernfalls.

Der Effekt ist, dass, wenn Sie auf den "Sperren"-Button klicken, der Zeiger gesperrt wird und der Button deaktiviert wird: Wenn Sie dann die Zeigersperre aufheben (zum Beispiel durch Drücken der <kbd>Escape</kbd>-Taste), wird der Button wieder aktiviert.

#### HTML

```html
<div id="container">
  <button id="lock">Lock</button>
</div>
```

#### CSS

```css
div {
  height: 100px;
  width: 200px;
  border: 2px solid blue;
}
```

#### JavaScript

```js
const lock = document.querySelector("#lock");
const container = document.querySelector("#container");

lock.addEventListener("click", () => {
  container.requestPointerLock();
});

document.addEventListener("pointerlockchange", () => {
  const locked = document.pointerLockElement;
  lock.disabled = Boolean(locked);
});
```

#### Ergebnis

{{EmbedLiveSample("Checking pointer lock status")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.exitPointerLock()`](/de/docs/Web/API/Document/exitPointerLock)
- [`Element.requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)
