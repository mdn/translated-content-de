---
title: :autofill
slug: Web/CSS/:autofill
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:autofill`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) trifft zu, wenn ein {{HTMLElement("input")}}-Element vom Browser automatisch ausgefüllt wird. Die Klasse hört auf, übereinzustimmen, wenn der Benutzer das Feld bearbeitet.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-autofill.html", "tabbed-shorter")}}

> [!NOTE]
> Die Benutzeragenten-Stilvorlagen (user agent style sheets) vieler Browser verwenden `!important` in ihren `:-webkit-autofill`-Stildefinitionen, wodurch sie von Webseiten nicht ohne den Einsatz von JavaScript-Hacks überschrieben werden können. Zum Beispiel hat Chrome Folgendes in seiner internen Stilvorlage:
>
> ```css
> background-color: rgb(232 240 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> Das bedeutet, dass Sie {{cssxref('background-color')}}, {{cssxref('background-image')}} oder {{cssxref('color')}} in Ihren eigenen Regeln nicht festlegen können.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `:autofill`-Pseudoklasse, um den Rahmen eines Textfelds zu ändern, das vom Browser automatisch ausgefüllt wurde. Um zu gewährleisten, dass keine [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list) erstellt wird, werden sowohl `:-webkit-autofill` als auch `:autofill` mithilfe einer fehlertoleranten Selektorliste mit {{cssxref(":is()")}} kombiniert.

```css
input {
  border-radius: 3px;
}

input:is(:-webkit-autofill, :autofill) {
  border: 3px dotted orange;
}
```

```html
<form method="post" action="">
  <label for="email">Email</label>
  <input type="email" name="email" id="email" autocomplete="email" />
</form>
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Chromium Issue 46543: Auto-filled input text box yellow background highlight cannot be turned off](https://crbug.com/46543)
- [WebKit Bug 66032: Allow site authors to override autofilled fields' colors.](https://webkit.org/b/66032)
- [Mozilla Bug 740979: implement `:-moz-autofill` pseudo-class on input elements with an autofilled value](https://bugzil.la/740979)
- [User Interface Module Level 4: More Selectors](https://wiki.csswg.org/spec/css4-ui#more-selectors)
