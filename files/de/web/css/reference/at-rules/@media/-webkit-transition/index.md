---
title: -webkit-transition
slug: Web/CSS/Reference/At-rules/@media/-webkit-transition
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transition`](/de/docs/Web/CSS/Reference/Properties/animation#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen das `-webkit-transition` Media-Feature. Kein Browser unterstützt `transition` ohne Präfix als Media Query (obwohl einige Browser - {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports) Feature Query.

Das **`-webkit-transition`** Boolesche, nicht standardisierte [CSS](/de/docs/Web/CSS)-[Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn der Browsing-Kontext [CSS transitions](/de/docs/Web/CSS/Guides/Transitions) unterstützt.

Apple hat [eine Beschreibung im Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dies wird dort jetzt `transition` genannt.

> [!NOTE]
> Sie sollten dieses Media-Feature nicht verwenden; es wurde nie spezifiziert, war nie weit verbreitet implementiert und wurde [aus den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature Query.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Beispiele

### Verwenden Sie stattdessen @supports

Verwenden Sie das `-webkit-transition` Media-Feature nicht. Testen Sie stattdessen die Unterstützung von Transitionen mit der CSS {{cssxref("@supports")}} [Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), so:

```css
@supports (transition: initial) {
  /* CSS to use if transitions are supported */
}
```

### Veraltetes Beispiel

Bevor dieses veraltet wurde, konnten Sie `-webkit-transition` in Ihrem CSS wie folgt verwenden:

```css
@media (-webkit-transition) {
  /* CSS to use if transitions are supported */
}
```

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}}
- {{cssxref("@media/-webkit-transform-2d", "-webkit-transform-2d")}}
- {{cssxref("@media/-webkit-animation", "-webkit-animation")}}
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transition")}} und [Verwendung von CSS transitions](/de/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature Queries](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
