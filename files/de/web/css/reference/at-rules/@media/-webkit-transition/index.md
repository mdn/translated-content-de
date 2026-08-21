---
title: "`-webkit-transition` CSS Media-Feature"
short-title: -webkit-transition
slug: Web/CSS/Reference/At-rules/@media/-webkit-transition
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transition`](/de/docs/Web/CSS/Reference/Properties/transition#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur auf WebKit (Safari) basierende Browser und nicht Chromium unterstützen die `-webkit-transition` Media-Feature. Keine Browser unterstützen `transition` ohne Präfix als Media-Query (obwohl einige Browser - {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports)-Feature-Query.

Die **`-webkit-transition`** Boolesche, nicht standardisierte [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn der Browserkontext [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) unterstützt.

Apple hat [eine Beschreibung im Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dies wird dort jetzt `transition` genannt.

> [!NOTE]
> Sie sollten diese Media-Feature nicht verwenden; es wurde nie spezifiziert, war nie weit verbreitet implementiert und wurde [aus den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Query.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Beispiele

### Verwenden Sie @supports stattdessen

Verwenden Sie nicht die `-webkit-transition` Media-Feature. Stattdessen überprüfen Sie die Unterstützung von Übergängen mit der CSS {{cssxref("@supports")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), so wie hier:

```css
@supports (transition: initial) {
  /* CSS to use if transitions are supported */
}
```

### Veraltetes Beispiel

Bevor dies veraltet wurde, konnten Sie `-webkit-transition` in Ihrem CSS so verwenden:

```css
@media (-webkit-transition) {
  /* CSS to use if transitions are supported */
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- {{cssxref("transition")}} und [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref("@media")}} und [Verwendung von Media-Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
