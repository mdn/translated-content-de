---
title: "Element: ariaLevel-Eigenschaft"
short-title: ariaLevel
slug: Web/API/Element/ariaLevel
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

Die **`ariaLevel`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des `aria-level`-Attributs wider, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.

> [!NOTE]
> Verwenden Sie, wenn möglich, ein HTML {{htmlelement("Heading_Elements", "h1")}} oder eine andere korrekte Überschriftenebene, da diese eingebaute Semantik haben und keine ARIA-Attribute erfordern.

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

- [ARIA: heading role](/de/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
