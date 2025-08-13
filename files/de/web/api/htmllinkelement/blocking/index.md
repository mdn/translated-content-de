---
title: "HTMLLinkElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLLinkElement/blocking
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

{{APIRef("HTML DOM")}}

Die **`blocking`**-Eigenschaft des [`HTMLLinkElement`](/de/docs/Web/API/HTMLLinkElement)-Interfaces ist ein String, der angibt, dass bestimmte Operationen beim Abrufen einer externen Ressource blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("link")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste der unten aufgeführten Blocking-Tokens sein, die die zu blockierenden Operationen angeben:

- `render`
  - : Das Rendering des Inhalts auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `link`-Elemente im `<head>`-Abschnitt des Dokuments können möglicherweise das Rendering blockieren. Standardmäßig blockiert ein `link`-Element mit `rel="stylesheet"` im `<head>` das Rendering, wenn der Browser es während des Parsens entdeckt. Wenn ein solches `link`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie zusätzlich `blocking = "render"` setzen, damit es das Rendering blockiert.

## Beispiele

```html
<link
  id="el"
  rel="stylesheet"
  href="/example.css"
  blocking="render"
  crossorigin />
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

- [`HTMLScriptElement.blocking`](/de/docs/Web/API/HTMLScriptElement/blocking)
- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
