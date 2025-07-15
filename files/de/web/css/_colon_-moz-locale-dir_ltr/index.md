---
title: :-moz-locale-dir(ltr)
slug: Web/CSS/:-moz-locale-dir_ltr
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Der **`:-moz-locale-dir(ltr)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element auswählt, wenn die Benutzeroberfläche von links nach rechts angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` bestimmt (wobei `locale` die aktuelle Gebietsschema ist), die auf "ltr" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es auch Erweiterungen, zu funktionieren, selbst wenn sie das Standard-Gebietsschema des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts- als auch rechts-nach-links-Layouts unabhängig von spezifischen Gebietsschemas unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht ordnungsgemäß von HTML aus; er trifft immer zu, unabhängig davon, ob das UI-Gebietsschema links-nach-rechts oder rechts-nach-links ist.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und möglicherweise auch nicht in Firefox aufgrund eines Problems mit dem Selektor, der nicht ordnungsgemäß mit HTML-Inhalten funktioniert. Es wurde für die Verwendung mit `XUL` entworfen.

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
