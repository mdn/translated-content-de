---
title: :-moz-locale-dir(rtl)
slug: Web/CSS/:-moz-locale-dir_rtl
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element auswählt, wenn die Benutzeroberfläche von rechts nach links angezeigt wird. Dies wird durch die Einstellung der Präferenz `intl.uidirection.locale` (wobei `locale` die aktuelle Spracheinstellung ist) auf "rtl" bestimmt.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf der Spracheinstellung des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Darüber hinaus ermöglicht er es Erweiterungen, auch dann zu funktionieren, wenn sie die Standardsprache des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts- als auch rechts-nach-links-Layouts unabhängig von den jeweiligen Spracheinstellungen unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht ordnungsgemäß in HTML; er passt nie, unabhängig davon, ob die Benutzerschnittstelle links-nach-rechts oder rechts-nach-links ist.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und könnte sogar in Firefox aufgrund eines Problems mit der Verwendung dieses Selektors in HTML nicht ordnungsgemäß funktionieren.

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
