---
title: "`-webkit-transition` CSS-Media-Feature"
short-title: -webkit-transition
slug: Web/CSS/Reference/At-rules/@media/-webkit-transition
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{deprecated_header}} {{Non-standard_header}}

> [!NOTE]
> Alle Browser unterstützen die [`transition`](/de/docs/Web/CSS/Reference/Properties/transition#browser_compatibility)-Eigenschaft ohne Vendor-Präfixe. Nur WebKit (Safari) und nicht auf Chromium basierende Browser unterstützen die `-webkit-transition`-Media-Feature. Kein Browser unterstützt `transition` ohne das Präfix als Media Query (obwohl einige Browser - {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports)-Feature-Abfrage.

Das **`-webkit-transition`** ist ein Boolean Non-Standard [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn der Browsing-Kontext [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) unterstützt.

Apple hat [eine Beschreibung in der Safari CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dies wird dort jetzt `transition` genannt.

> [!NOTE]
> Sie sollten dieses Media-Feature nicht verwenden; es wurde nie spezifiziert, nie weit verbreitet implementiert und wurde [aus den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen eine {{cssxref("@supports")}}-Feature-Abfrage.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Beispiele

### Verwenden Sie @supports stattdessen

Verwenden Sie nicht das `-webkit-transition`-Media-Feature. Testen Sie stattdessen die Unterstützung für Übergänge mit der CSS {{cssxref("@supports")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), wie folgt:

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
- {{cssxref("transition")}} und [die Verwendung von CSS-Übergängen](/de/docs/Web/CSS/Guides/Transitions/Using)
- {{cssxref("@media")}} und [Verwendung von Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
