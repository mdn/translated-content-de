---
title: "Element: ariaLevel-Eigenschaft"
short-title: ariaLevel
slug: Web/API/Element/ariaLevel
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("DOM")}}

Die **`ariaLevel`**-Eigenschaft des [`Element`](/de/docs/Web/API/Element)-Interfaces spiegelt den Wert des `aria-level`-Attributs wider, welches die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.

> [!NOTE]
> Verwenden Sie nach Möglichkeit ein HTML {{htmlelement("Heading_Elements", "h1")}} oder eine andere korrekte Überschriftenebene, da diese eingebaute Semantik besitzen und keine ARIA-Attribute erfordern.

## Wert

Ein String, der eine ganze Zahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-level`-Attribut des Elements mit der ID `main-heading` auf "1" gesetzt. Mit `ariaLevel` aktualisieren wir den Wert auf "2".

```html
<div role="heading" id="main-heading" aria-level="1">
  This is a main page heading
</div>
```

```js
let el = document.getElementById("main-heading");
console.log(el.ariaLevel); // "1"
el.ariaLevel = "2";
console.log(el.ariaLevel); // "2"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ARIA: heading role](/de/docs/Web/Accessibility/ARIA/Roles/heading_role)
