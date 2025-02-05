---
title: ":-moz-locale-dir(ltr)"
slug: Web/CSS/:-moz-locale-dir_ltr
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-locale-dir(ltr)`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element selektiert, wenn die Benutzeroberfläche von links nach rechts angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Lokalisierung ist) auf "ltr" festgelegt.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf der Spracheinstellung des Benutzers anzupassen. (Dies kann von Fenster zu Fenster oder sogar von Tab zu Tab variieren.) Außerdem ermöglicht er Erweiterungen, auch dann zu funktionieren, wenn sie die Standard-Lokalisierung des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts- als auch rechts-nach-links-Layouts unabhängig von den lokalen Spezifika unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht korrekt in HTML; er matched immer, unabhängig davon, ob die Benutzeroberfläche links-nach-rechts oder rechts-nach-links ist.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und möglicherweise selbst in Firefox nicht, aufgrund eines Problems, dass der Selektor in HTML-Inhalten nicht korrekt funktioniert. Er wurde für die Nutzung mit `XUL` entworfen.

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
