---
title: :-moz-locale-dir(ltr)
slug: Web/CSS/:-moz-locale-dir_ltr
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Die **`:-moz-locale-dir(ltr)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die ein Element auswählt, wenn die Benutzeroberfläche von links nach rechts angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Spracheinstellung ist) bestimmt, die auf "ltr" gesetzt ist.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf der Spracheinstellung des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tabulator zu Tabulator variieren.) Er ermöglicht es Erweiterungen auch zu funktionieren, selbst wenn sie die Standardsprache des Benutzers nicht unterstützen, da sie sowohl Lese- als auch Schreibrichtungen unabhängig von sprachspezifischen Besonderheiten unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht richtig aus HTML heraus; er stimmt immer überein, unabhängig davon, ob die Benutzeroberfläche von links nach rechts oder von rechts nach links ausgerichtet ist.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und möglicherweise nicht einmal in Firefox aufgrund eines Problems mit dem Selektor, der nicht richtig mit HTML-Inhalten arbeitet. Es wurde für die Verwendung mit `XUL` entwickelt.

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

Kein Teil eines Standards.

## Siehe auch

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
