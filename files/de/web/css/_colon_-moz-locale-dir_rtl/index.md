---
title: ":-moz-locale-dir(rtl)"
slug: Web/CSS/:-moz-locale-dir_rtl
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-locale-dir(rtl)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element auswählt, wenn die Benutzeroberfläche von rechts nach links angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` bestimmt (wobei `locale` die aktuelle Lokalisierung ist), die auf "rtl" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf der Lokalisierung des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Es ermöglicht Erweiterungen auch zu funktionieren, selbst wenn sie die Standardsprache des Benutzers nicht unterstützen, da sie sowohl Layouts von links nach rechts als auch von rechts nach links unterstützen können, unabhängig von den spezifischen Lokalisierungen.

> [!WARNING]
> Dieser Selektor funktioniert nicht richtig aus HTML heraus; er trifft nie zu, egal ob die UI-Lokalisierung von links nach rechts oder von rechts nach links erfolgt.

## Syntax

```css
:-moz-locale-dir(rtl) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und möglicherweise auch nicht richtig in Firefox aufgrund eines Problems mit der Verwendung dieses Selektors in HTML.

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
