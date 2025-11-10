---
title: :-moz-locale-dir(ltr)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_ltr
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Die **`:-moz-locale-dir(ltr)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die ein Element auswählt, wenn die Benutzeroberfläche von links nach rechts angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Gebietsschemaeinstellung ist) auf "ltr" bestimmt.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Designs verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es auch, dass Erweiterungen funktionieren, selbst wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl Links-nach-Rechts als auch Rechts-nach-Links Layouts unabhängig von den spezifischen Lokalisierungen unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht richtig im HTML; er trifft immer zu, unabhängig davon, ob das UI-Gebietsschema Links-nach-Rechts oder Rechts-nach-Links ist.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und möglicherweise auch nicht in Firefox aufgrund eines Problems, dass der Selektor mit HTML-Inhalten nicht richtig funktioniert. Es wurde für die Verwendung mit `XUL` entworfen.

### HTML

```html
<p>If you're using a left-to-right interface, this should be red.</p>
```

### CSS

```css
p:-moz-locale-dir(ltr) {
  color: red;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
