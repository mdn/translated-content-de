---
title: :-moz-locale-dir(rtl)
slug: Web/CSS/:-moz-locale-dir_rtl
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element abgleicht, wenn die Benutzeroberfläche von rechts nach links angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Gebietsschemaeinstellungen ist) bestimmt, die auf "rtl" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Designs verwendet, um die Benutzeroberfläche basierend auf dem Benutzergebietsschema anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es auch Erweiterungen, selbst dann zu funktionieren, wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts- als auch rechts-nach-links-Layouts unabhängig von den spezifischen Gebietsschemaeigenschaften unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht korrekt aus HTML heraus; er passt nie, egal ob das UI-Gebietsschema links-nach-rechts oder rechts-nach-links ist.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und es könnte selbst in Firefox nicht ordnungsgemäß funktionieren, aufgrund eines Problems mit der Verwendung dieses Selektors in HTML.

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
