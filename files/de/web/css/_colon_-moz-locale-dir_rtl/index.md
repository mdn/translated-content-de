---
title: ":-moz-locale-dir(rtl)"
slug: Web/CSS/:-moz-locale-dir_rtl
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element auswählt, wenn die Benutzeroberfläche von rechts nach links angezeigt wird. Dies wird durch die Präferenz `intl.uidirection.locale` bestimmt (wobei `locale` das aktuelle Gebietsschema ist) und auf "rtl" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es auch Erweiterungen zu funktionieren, selbst wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl links- als auch rechtsgerichtete Layouts unabhängig von den spezifischen Gebietsschemaeinstellungen unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert aus HTML heraus nicht richtig; er passt nie, egal ob die UI-Umgebung links- oder rechtsgerichtet ist.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und unter Umständen nicht einmal in Firefox durch ein Problem mit der Verwendung dieses Selektors in HTML.

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

Teil keiner Norm.

## Siehe auch

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}}
