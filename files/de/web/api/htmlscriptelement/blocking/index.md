---
title: "HTMLScriptElement: blocking-Eigenschaft"
short-title: blocking
slug: Web/API/HTMLScriptElement/blocking
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

Die **`blocking`**-Eigenschaft der [`HTMLScriptElement`](/de/docs/Web/API/HTMLScriptElement)-Schnittstelle ist ein String, der angibt, dass bestimmte Operationen beim Abrufen des Skripts blockiert werden sollten.

Sie spiegelt das `blocking`-Attribut des {{HTMLElement("script")}}-Elements wider.

## Wert

Ein String. Muss eine durch Leerzeichen getrennte Liste der folgenden Blockierungstokens sein, die die zu blockierenden Operationen angeben:

- `render`
  - : Das Rendern von Inhalten auf dem Bildschirm wird blockiert.

    > [!NOTE]
    > Nur `script`-Elemente im `<head>` des Dokuments können möglicherweise das Rendern blockieren. Skripte blockieren standardmäßig nicht das Rendern; wenn ein `script`-Element nicht `type="module"`, `async` oder `defer` enthält, blockiert es das _Parsen_, nicht das _Rendern_. Wenn ein solches `script`-Element dynamisch über ein Skript hinzugefügt wird, müssen Sie `blocking = "render"` setzen, damit es das Rendern blockiert.

## Beispiele

```html
<script id="el" async blocking="render"></script>
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
