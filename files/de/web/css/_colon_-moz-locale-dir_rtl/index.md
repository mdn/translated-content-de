---
title: :-moz-locale-dir(rtl)
slug: Web/CSS/:-moz-locale-dir_rtl
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die ein Element abgleicht, wenn die Benutzeroberfläche von rechts nach links angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` bestimmt (wobei `locale` die aktuelle Locale ist), die auf "rtl" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf der Locale des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es auch Erweiterungen zu funktionieren, auch wenn sie die standardmäßige Locale des Benutzers nicht unterstützen, da sie sowohl Links-nach-Rechts- als auch Rechts-nach-Links-Layouts unabhängig von den spezifischen Locale-Eigenschaften unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht richtig aus HTML heraus; er wird nie übereinstimmen, egal ob die UI-Locale von links nach rechts oder von rechts nach links ist.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie Firefox nicht verwenden, und es könnte sogar in Firefox nicht richtig funktionieren, aufgrund eines Problems bei der Verwendung dieses Selektors in HTML.

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

Nicht Teil eines Standards.

## Siehe auch

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
