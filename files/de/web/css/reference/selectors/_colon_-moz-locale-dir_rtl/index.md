---
title: :-moz-locale-dir(rtl)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_rtl
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die ein Element dann abgleicht, wenn die Benutzeroberfläche in einer Rechts-nach-Links-Ausrichtung angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Spracheinstellung ist) auf "rtl" bestimmt.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf der Spracheinstellung des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es auch Erweiterungen zu funktionieren, selbst wenn sie die Standardspracheinstellung des Benutzers nicht unterstützen, da sie sowohl Links-nach-Rechts- als auch Rechts-nach-Links-Layouts unabhängig von sprachspezifischen Details unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht korrekt im HTML; er stimmt nie überein, egal ob die UI-Spracheinstellung Links-nach-Rechts oder Rechts-nach-Links ist.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und könnte selbst in Firefox nicht richtig funktionieren aufgrund eines Problems mit der Verwendung dieses Selektors im HTML.

### HTML

```html
<p>If you're using a right-to-left interface, this should be red.</p>
```

### CSS

```css
p:-moz-locale-dir(rtl) {
  color: red;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

Kein Teil eines Standards.

## Siehe auch

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
