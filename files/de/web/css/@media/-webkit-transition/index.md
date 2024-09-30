---
title: "-webkit-transition"
slug: Web/CSS/@media/-webkit-transition
l10n:
  sourceCommit: 7dd65b6c9dfcb592f6723a281108a1a6b80b954e
---

{{CSSRef}} {{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transition`](/de/docs/Web/CSS/animation#browser_compatibility) Eigenschaft ohne Anbieterpräfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen die `-webkit-transition` Medien-Funktion. Keine Browser unterstützen `transition` ohne das Präfix als Media Query (obwohl einige Browser {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Feature Query.

Das **`-webkit-transition`** ist eine Boolesche nicht-standardmäßige [CSS](/de/docs/Web/CSS) [Medien-Funktion](/de/docs/Web/CSS/@media#media_features), eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn der Browsing-Kontext [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) unterstützt.

Apple hat [eine Beschreibung im Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dort wird dies jetzt `transition` genannt.

> [!NOTE]
> Sie sollten diese Medien-Funktion nicht verwenden; sie wurde nie spezifiziert, nie weit verbreitet implementiert und wurde aus [den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature Query.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Beispiele

### Verwenden Sie @supports stattdessen

Verwenden Sie die `-webkit-transition` Medien-Funktion nicht. Testen Sie stattdessen die Unterstützung von Übergängen mit der CSS {{cssxref("@supports")}} [At-Regel](/de/docs/Web/CSS/At-rule), wie hier:

```css
@supports (transition: initial) {
  /* CSS to use if transitions are supported */
}
```

### Veraltetes Beispiel

Bevor dies obsolet wurde, konnten Sie `-webkit-transition` in Ihrem CSS so verwenden:

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
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transition")}} und [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
