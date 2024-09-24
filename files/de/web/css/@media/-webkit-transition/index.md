---
title: "-webkit-transition"
slug: Web/CSS/@media/-webkit-transition
l10n:
  sourceCommit: 7dd65b6c9dfcb592f6723a281108a1a6b80b954e
---

{{CSSRef}} {{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die [`transition`](/de/docs/Web/CSS/animation#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari), und nicht auf Chromium basierende Browser, unterstützen das `-webkit-transition` Medienfeature. Keine Browser unterstützen `transition` ohne das Präfix als Media Query (obwohl einige Browser - {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/@supports) Feature-Query.

Das **`-webkit-transition`** Boolean non-standard [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) ist eine [WebKit-Erweiterung](/de/docs/Web/CSS/WebKit_Extensions), dessen Wert `true` ist, wenn der Browsing-Kontext [CSS-Übergänge](/de/docs/Web/CSS/CSS_transitions) unterstützt.

Apple hat [eine Beschreibung in der Safari CSS Reference](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dies wird dort jetzt als `transition` bezeichnet.

> [!NOTE]
> Sie sollten dieses Medienfeature nicht verwenden; es wurde nie spezifiziert, nie breit implementiert und wurde [aus den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen eine {{cssxref("@supports")}} Feature-Query.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS, das verwendet wird, wenn dieses Medienfeature und prefixed transitions unterstützt werden */
}
```

## Beispiele

### Verwenden Sie stattdessen @supports

Verwenden Sie nicht das `-webkit-transition` Medienfeature. Testen Sie stattdessen die Unterstützung von transition mit dem CSS-{{cssxref("@supports")}}-[At-Regel](/de/docs/Web/CSS/At-rule), wie folgt:

```css
@supports (transition: initial) {
  /* CSS, das verwendet wird, wenn transitions unterstützt werden */
}
```

### Veraltetes Beispiel

Bevor dies veraltet wurde, konnten Sie `-webkit-transition` in Ihrem CSS wie folgt verwenden:

```css
@media (-webkit-transition) {
  /* CSS, das verwendet wird, wenn transitions unterstützt werden */
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
- {{cssxref("transition")}} und [Verwendung von CSS-Übergängen](/de/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- {{cssxref("@supports")}} und [Verwendung von Feature-Queries](/de/docs/Web/CSS/CSS_conditional_rules/Using_feature_queries)
