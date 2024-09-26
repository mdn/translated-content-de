---
title: "Document: pointerLockElement Eigenschaft"
short-title: pointerLockElement
slug: Web/API/Document/pointerLockElement
l10n:
  sourceCommit: c99ff93a1b71e7d664509fdd3e0c168920be967a
---

{{APIRef("Pointer Lock API")}}

Die schreibgeschützte Eigenschaft **`pointerLockElement`** der {{domxref("Document")}}-Schnittstelle liefert das Element, das als Ziel für Mausereignisse gesetzt ist, während der Zeiger gesperrt ist.
Es ist `null`, wenn die Sperre ansteht, der Zeiger entsperrt ist oder das Ziel in einem anderen Dokument ist.

## Wert

Ein {{domxref("Element")}} oder `null`.

## Beispiele

### Überprüfung des Zeigersperrstatus

Dieses Beispiel enthält ein {{htmlelement("div")}}-Element, das wiederum einen {{htmlelement("button")}} enthält. Beim Klicken auf den Button wird die Zeigersperre für das `<div>` angefordert.

Das Beispiel hört auch auf das {{domxref("Document/pointerlockchange_event", "pointerlockchange")}}-Ereignis: Wenn dieses Ereignis ausgelöst wird, deaktiviert der Ereignishandler den "Sperren"-Button, wenn ein Element im Dokument die Zeigersperre besitzt, und aktiviert den Button andernfalls.

Das Ergebnis ist, dass wenn Sie auf den "Sperren"-Button klicken, der Zeiger gesperrt wird und der Button deaktiviert wird: Wenn Sie dann die Zeigersperre verlassen (zum Beispiel durch Drücken der <kbd>Escape</kbd>-Taste), wird der Button wieder aktiviert.

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

{{EmbedLiveSample("Überprüfung des Zeigersperrstatus")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/de/docs/Web/API/Pointer_Lock_API)