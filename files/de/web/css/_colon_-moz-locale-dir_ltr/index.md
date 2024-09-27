---
title: ":-moz-locale-dir(ltr)"
slug: Web/CSS/:-moz-locale-dir_ltr
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-locale-dir(ltr)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element auswählt, wenn die Benutzeroberfläche von links nach rechts angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` die aktuelle Gebietsschemaeinstellung ist) auf "ltr" bestimmt.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Es ermöglicht auch Erweiterungen zu funktionieren, selbst wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts- als auch rechts-nach-links-Layouts unabhängig von gebietsschemaspezifischen Details unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert nicht richtig in HTML; er stimmt immer überein, unabhängig davon, ob das UI-Gebietsschema links-nach-rechts oder rechts-nach-links ist.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und funktioniert möglicherweise sogar in Firefox nicht korrekt aufgrund eines Problems mit dem Selektor, der nicht korrekt mit HTML-Inhalten funktioniert. Es wurde für die Verwendung mit `XUL` entworfen.

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
