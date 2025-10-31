---
title: -webkit-transition
slug: Web/CSS/@media/-webkit-transition
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transition`](/de/docs/Web/CSS/Reference/Properties/animation#browser_compatibility)-Eigenschaft ohne Anbieterpräfixe. Nur WebKit (Safari), und nicht auf Chromium basierende Browser, unterstützen das `-webkit-transition` Medienmerkmal. Kein Browser unterstützt `transition` ohne das Präfix als Media Query (obwohl einige Browser - {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Funktionsabfrage.

Das **`-webkit-transition`** Boolesche nicht standardisierte [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), dessen Wert `true` ist, wenn der Browsing-Kontext [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) unterstützt.

Apple hat [eine Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dort wird es jetzt `transition` genannt.

> [!NOTE]
> Sie sollten dieses Medienmerkmal nicht verwenden; es wurde nie spezifiziert, nie weit verbreitet implementiert und wurde [aus den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen eine {{cssxref("@supports")}} Funktionsabfrage.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Beispiele

### Verwendung von @supports

Verwenden Sie nicht das `-webkit-transition` Medienmerkmal. Testen Sie stattdessen die Unterstützung von Übergängen mithilfe der CSS {{cssxref("@supports")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), wie folgt:

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
- [Testseite bei quirksmode.org](https://www.quirksmode.org/css/tests/mediaqueries/animation.html)
- {{cssxref("transition")}} und [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Funktionsabfragen](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
