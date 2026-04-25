---
title: "`:-moz-locale-dir(ltr)` CSS-Pseudoklasse"
short-title: :-moz-locale-dir(ltr)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_ltr
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

Die **`:-moz-locale-dir(ltr)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die ein Element dann auswählt, wenn die Benutzeroberfläche von links nach rechts angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Gebietsschema-Einstellung ist), die auf "ltr" gesetzt ist, bestimmt.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es Erweiterungen auch, zu funktionieren, selbst wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl Links-nach-Rechts- als auch Rechts-nach-Links-Layouts unabhängig von spezifischen Gebietsschemadetails unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht richtig in HTML; er trifft immer zu, unabhängig davon, ob das UI-Gebietsschema von links nach rechts oder von rechts nach links ist.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und möglicherweise auch nicht in Firefox aufgrund eines Problems mit dem Selektor, der mit HTML-Inhalten nicht richtig funktioniert. Es wurde für die Verwendung mit `XUL` entworfen.

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
