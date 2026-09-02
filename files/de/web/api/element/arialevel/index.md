---
title: "Element: ariaLevel-Eigenschaft"
short-title: ariaLevel
slug: Web/API/Element/ariaLevel
l10n:
  sourceCommit: ce12c10364f35c64184dec44be85537b7e10d91f
---

{{APIRef("DOM")}}

Die **`ariaLevel`**-Eigenschaft der [`Element`](/de/docs/Web/API/Element)-Schnittstelle spiegelt den Wert des `aria-level` Attributs wider, das die hierarchische Ebene eines Elements innerhalb einer Struktur definiert.

> [!NOTE]
> Wo immer möglich, verwenden Sie ein HTML {{htmlelement("Heading_Elements", "h1")}} oder eine andere korrekte Überschriftenebene, da diese integrierte Semantik besitzen und keine ARIA-Attribute erfordern.

## Wert

Ein String, der eine Ganzzahl enthält.

## Beispiele

In diesem Beispiel wird das `aria-level`-Attribut des Elements mit der ID `main-heading` auf "1" gesetzt. Mithilfe von `ariaLevel` aktualisieren wir den Wert auf "2".

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
