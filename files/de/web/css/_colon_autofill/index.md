---
title: ":autofill"
slug: Web/CSS/:autofill
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:autofill`** CSS-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wird angewendet, wenn ein {{HTMLElement("input")}}-Element seinen Wert vom Browser automatisch ausgefüllt hat. Die Klasse endet, wenn der Benutzer das Feld bearbeitet.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-autofill.html", "tabbed-shorter")}}

> [!NOTE]
> Die Benutzeragent-Stylesheets vieler Browser verwenden `!important` in ihren `:-webkit-autofill` Stil-Deklarationen, was bedeutet, dass sie von Webseiten nicht überschrieben werden können, ohne auf JavaScript-Tricks zurückzugreifen. Zum Beispiel hat Chrome Folgendes in seinem internen Stylesheet:
>
> ```css
> background-color: rgb(232 240 254) !important;
> background-image: none !important;
> color: -internal-light-dark(black, white) !important;
> ```
>
> Dies bedeutet, dass Sie in Ihren eigenen Regeln {{cssxref('background-color')}}, {{cssxref('background-image')}}, oder {{cssxref('color')}} nicht festlegen können.

## Syntax

```css
:autofill {
  /* ... */
}
```

## Beispiele

Das folgende Beispiel zeigt die Verwendung der `:autofill` Pseudoklasse, um den Rahmen eines Textfeldes zu ändern, das vom Browser automatisch vervollständigt wurde.
Um sicherzustellen, dass wir keine [ungültige Selektorliste](/de/docs/Web/CSS/Selector_list#invalid_selector_list) erstellen, werden sowohl `:-webkit-autofill` als auch `:autofill` mit einer toleranten Selektorliste unter Verwendung von {{cssxref(":is()")}} abgeglichen.

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
- [User Interface Module Level 4: more selectors](https://wiki.csswg.org/spec/css4-ui#more-selectors)
