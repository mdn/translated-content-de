---
title: -webkit-transition
slug: Web/CSS/@media/-webkit-transition
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}} {{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transition`](/de/docs/Web/CSS/animation#browser_compatibility)-Eigenschaft ohne Anbieterpräfixe. Nur WebKit (Safari) und nicht Chromium-basierte Browser unterstützen die Media-Feature `-webkit-transition`. Keine Browser unterstützen `transition` ohne Präfix als Media-Query (obwohl einige Browser {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports)-Feature-Query.

Das **`-webkit-transition`**-Boolean, ein nicht-standardmäßiges [CSS](/de/docs/Web/CSS)-[Media-Feature](/de/docs/Web/CSS/@media#media_features), ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), deren Wert `true` ist, wenn der Browsing-Kontext [CSS transitions](/de/docs/Web/CSS/CSS_transitions) unterstützt.

Apple hat [eine Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dies wird dort jetzt `transition` genannt.

> [!NOTE]
> Sie sollten dieses Media-Feature nicht verwenden; es wurde nie spezifiziert, war nie weit verbreitet implementiert und wurde [in den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Query.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Beispiele

### Verwendung von @supports statt `-webkit-transition`

Verwenden Sie das Media-Feature `-webkit-transition` nicht. Stattdessen können Sie die Unterstützung für `transition` mit der CSS-{{cssxref("@supports")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) wie folgt testen:

```css
@supports (transition: initial) {
  /* CSS to use if transitions are supported */
}
```

### Veraltetes Beispiel

Bevor dies veraltet wurde, konnten Sie `-webkit-transition` in Ihrem CSS wie folgt verwenden:

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
- [Testseite auf quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transition")}} und [Verwendung von CSS transitions](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
