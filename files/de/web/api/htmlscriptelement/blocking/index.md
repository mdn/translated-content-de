---
title: "HTMLScriptElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: 0e2ec54f4eb55cccad11af843d83061857918bee
---

{{APIRef("HTML DOM")}}

Die **`blocking`**-Eigenschaft des [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Interfaces ist ein String, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollen.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste von unten aufgeführten Blocking-Token sein, die die Operationen angeben, die blockiert werden sollen:

- `render`
  - : Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendern blockieren. Skripte blockieren standardmäßig nicht das Rendern; wenn ein `script`-Element nicht `type="module"`, `async` oder `defer` enthält, blockiert es das _Parsing_, nicht das _Rendern_. Wenn ein solches `script`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendern blockiert.

## Beispiele

```html
<script id="el" type="text/javascript" async blocking="render"></script>
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
- [`HTMLStyleElement.blocking`](/de/docs/Web/API/HTMLStyleElement/blocking)
