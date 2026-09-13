---
title: "HTMLLabelElement: htmlFor-Eigenschaft"
short-title: htmlFor
slug: Web/API/HTMLLabelElement/htmlFor
l10n:
  sourceCommit: 96c0e251ee3d12f373fa1c4b3370a14b3a726db6
---

{{APIRef("HTML DOM")}}

Die **`htmlFor`**-Eigenschaft des [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)-Interfaces ist die ID des zugehörigen Steuerelements des Labels. Sie spiegelt den Wert des [`for`](/de/docs/Web/HTML/Reference/Elements/label#for)-Inhaltsattributs wider und wird verwendet, um dieses zu setzen und abzurufen.

## Wert

Ein String, der die ID des mit dem Steuerelement verbundenen Elements enthält.

## Beschreibung

Ein `HTMLLabelElement` sollte mit einem Steuerelement verknüpft werden, sodass ein Klick auf das Label das Steuerelement aktiviert. Das `for`-Attribut, das in der `htmlFor`-Eigenschaft widergespiegelt wird, sollte die `id` des zugehörigen Steuerelements enthalten.

> [!NOTE]
> Wenn diese Eigenschaft einen Wert hat, muss die [`HTMLLabelElement.control`](/de/docs/Web/API/HTMLLabelElement/control)-Eigenschaft auf dasselbe Steuerelement verweisen.

Das `htmlFor`-Attribut bietet JavaScript-Zugriff auf den `for`-Attributwert. `htmlFor` wird anstelle von `for` verwendet, um Konflikte mit dem JavaScript-Schlüsselwort `for` zu vermeiden ([dies ist nicht mehr unbedingt erforderlich und könnte sich in Zukunft ändern](https://github.com/whatwg/html/issues/9379)).

## Beispiel

### Grundlegende Verwendung

In diesem Beispiel ist der `for`-Attributwert des `<label>`-Elements `username`, welches über sein `id`-Attribut mit dem `<input>` verknüpft ist. Wir verwenden die `htmlFor`-DOM-Eigenschaft, um auf den `for`-Attributwert zuzugreifen.

```html
<label for="username">Enter your username:</label>
<input id="username" name="username" type="text" />
```

```js
document.querySelector("label").htmlFor;
// username
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLLabelElement`](/de/docs/Web/API/HTMLLabelElement)
- [`HTMLLabelElement.control`](/de/docs/Web/API/HTMLLabelElement/control)
- [`HTMLElement`](/de/docs/Web/API/HTMLElement)
- {{HTMLElement("label")}}
- [HTML-Formulare Leitfaden](/de/docs/Learn_web_development/Extensions/Forms)
