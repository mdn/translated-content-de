---
title: ":-moz-locale-dir(rtl)"
slug: Web/CSS/:-moz-locale-dir_rtl
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element auswählt, wenn die Benutzeroberfläche von rechts nach links dargestellt wird. Dies wird durch die Einstellung `intl.uidirection.locale` ermittelt (wobei `locale` das aktuelle Gebietsschema ist), die auf "rtl" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es auch, dass Erweiterungen funktionieren, selbst wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl linksläufige als auch rechtsläufige Layouts unabhängig von den spezifischen Gebietsschemen unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht richtig aus HTML heraus; er trifft nie zu, egal ob das UI-Gebietsschema von links nach rechts oder von rechts nach links ist.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel wird nicht funktionieren, wenn Sie nicht Firefox verwenden, und es könnte nicht einmal in Firefox richtig funktionieren aufgrund eines Problems mit der Verwendung dieses Selektors in HTML.

### HTML

```html
<p>Wenn Sie eine von rechts nach links verlaufende Benutzeroberfläche verwenden, sollte dies rot sein.</p>
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
