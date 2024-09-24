---
title: "DOMTokenList: toggle()-Methode"
short-title: toggle()
slug: Web/API/DOMTokenList/toggle
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

Die **`toggle()`**-Methode der {{domxref("DOMTokenList")}}-Schnittstelle entfernt ein vorhandenes Token aus der Liste und gibt `false` zurück.
Wenn das Token nicht existiert, wird es hinzugefügt und die Funktion gibt `true` zurück.

## Syntax

```js-nolint
toggle(token)
toggle(token, force)
```

### Parameter

- `token`
  - : Ein String, der das Token repräsentiert, das Sie umschalten möchten.
- `force` {{optional_inline}}
  - : Wenn angegeben, wird das Umschalten zu einer einseitigen Operation.
    Wenn auf `false` gesetzt, wird `token` _nur_ entfernt, aber nicht hinzugefügt.
    Wenn auf `true` gesetzt, wird `token` _nur_ hinzugefügt, aber nicht entfernt.

### Rückgabewert

Ein Boolean-Wert, `true` oder `false`, der angibt, ob `token` nach dem Aufruf in der Liste ist oder nicht.

## Beispiele

### Eine Klasse beim Klicken umschalten

Im folgenden Beispiel rufen wir die Liste der Klassen, die auf einem {{htmlelement("span")}}-Element gesetzt sind, als `DOMTokenList` über {{domxref("Element.classList")}} ab. Wir ersetzen dann ein Token in der Liste und schreiben die Liste in den {{domxref("Node.textContent")}} des `<span>`.

Zunächst das HTML:

```html
<span class="a b">classList is 'a b'</span>
```

Jetzt das JavaScript:

```js
const span = document.querySelector("span");
const classes = span.classList;

span.addEventListener("click", () => {
  const result = classes.toggle("c");
  span.textContent = `'c' ${
    result ? "added" : "removed"
  }; classList is now "${classes}".`;
});
```

Die Ausgabe sieht folgendermaßen aus und ändert sich jedes Mal, wenn Sie auf den Text klicken:

{{ EmbedLiveSample('Toggling_a_class_on_click', '100%', 60) }}

### Das force-Parameter setzen

Der zweite Parameter kann verwendet werden, um zu bestimmen, ob die Klasse enthalten ist oder nicht. Dieses Beispiel würde die 'c'-Klasse nur dann einschließen, wenn das Browserfenster breiter als 1000 Pixel ist:

```js
span.classList.toggle("c", window.innerWidth > 1000);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
