---
title: "HTMLStyleElement: blocking Eigenschaft"
short-title: blocking
slug: Web/API/HTMLStyleElement/blocking
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

{{APIRef("HTML DOM")}}

Die **`blocking`**-Eigenschaft des [`HTMLStyleElement`](/de/docs/Web/API/HTMLStyleElement)-Interfaces ist ein String, der angibt, dass bestimmte Operationen beim Abrufen kritischer Subressourcen blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("style")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste von Blocking-Token sein, die unten aufgeführt sind und die angeben, welche Operationen blockiert werden sollen:

- `render`
  - : Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `style`-Elemente im `<head>` des Dokuments können möglicherweise das Rendern blockieren. Standardmäßig blockiert ein `style`-Element im `<head>` das Rendern, wenn der Browser es beim Parsen entdeckt. Wenn ein solches `style`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendern blockiert.

## Beispiele

```html
<style id="el" blocking="render">
  p {
    color: blue;
  }
</style>
```

```js
const el = document.getElementById("el");
console.log(el.blocking); // Output: "render"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLinkElement.blocking`](/de/docs/Web/API/HTMLLinkElement/blocking)
- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
