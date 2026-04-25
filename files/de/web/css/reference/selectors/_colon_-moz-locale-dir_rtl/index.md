---
title: "`:-moz-locale-dir(rtl)` CSS-Pseudoklasse"
short-title: :-moz-locale-dir(rtl)
slug: Web/CSS/Reference/Selectors/:-moz-locale-dir_rtl
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die ein Element auswählt, wenn die Benutzeroberfläche von rechts nach links dargestellt wird. Dies wird durch die Präferenz `intl.uidirection.locale` bestimmt (wobei `locale` das aktuelle Gebietsschema ist), die auf "rtl" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es Erweiterungen auch dann zu funktionieren, wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts- als auch rechts-nach-links-Layouts unabhängig von spezifischen Gebietsschemas unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht ordnungsgemäß im HTML; er passt nie, unabhängig davon, ob das UI-Gebietsschema links-nach-rechts oder rechts-nach-links ist.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und könnte selbst in Firefox aufgrund eines Problems mit der Verwendung dieses Selektors im HTML nicht ordnungsgemäß funktionieren.

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
