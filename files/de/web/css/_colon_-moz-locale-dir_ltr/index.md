---
title: ":-moz-locale-dir(ltr)"
slug: Web/CSS/:-moz-locale-dir_ltr
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-locale-dir(ltr)`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein Element auswählt, wenn die Benutzeroberfläche von links nach rechts angezeigt wird. Dies wird durch die Einstellung `intl.uidirection.locale` (wobei `locale` das aktuelle Gebietsschema ist) auf "ltr" vorgenommen.

> [!NOTE]
> Dieser Selektor wird hauptsächlich von Erweiterungen und Themes verwendet, um die Benutzeroberfläche basierend auf dem Gebietsschema des Benutzers anzupassen. (Dies kann von Fenster zu Fenster und sogar von Tab zu Tab variieren.) Er ermöglicht es Erweiterungen außerdem, auch dann zu funktionieren, wenn sie das Standardgebietsschema des Benutzers nicht unterstützen, da sie sowohl links-nach-rechts- als auch rechts-nach-links-Layouts unabhängig von den spezifischen Gebietsschemas unterstützen können.

> [!WARNING]
> Dieser Selektor funktioniert von HTML aus nicht richtig; er wählt immer aus, unabhängig davon, ob die UI-Locale links-nach-rechts oder rechts-nach-links ist.

## Syntax

```css
:-moz-locale-dir(ltr) {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nicht, wenn Sie nicht Firefox verwenden, und möglicherweise auch nicht in Firefox aufgrund eines Problems mit dem Selektor, der nicht richtig mit HTML-Inhalt funktioniert. Es wurde für die Verwendung mit `XUL` entwickelt.

### HTML

```html
<p>Wenn Sie eine links-nach-rechts-Benutzeroberfläche verwenden, sollte dies rot sein.</p>
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

Teil keiner Norm.

## Siehe auch

- {{CSSxRef(":dir", ":dir(…)")}}
- {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}}
