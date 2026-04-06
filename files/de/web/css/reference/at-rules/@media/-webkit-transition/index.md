---
title: -webkit-transition
slug: Web/CSS/Reference/At-rules/@media/-webkit-transition
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{deprecated_header}} {{ Non-standard_header }}

> [!NOTE]
> Alle Browser unterstützen die Eigenschaft [`transition`](/de/docs/Web/CSS/Reference/Properties/transition#browser_compatibility) ohne Anbieterpräfixe. Nur auf WebKit (Safari) basierende Browser und nicht auf Chromium basierende Browser unterstützen das `-webkit-transition`-Medienfeature. Kein Browser unterstützt `transition` ohne das Präfix als Medienabfrage (obwohl einige Browser - {{cssxref("@media/-webkit-transform-3d", "-webkit-transform-3d")}} unterstützen). Verwenden Sie stattdessen die Feature-Abfrage [`@supports (transition)`](/de/docs/Web/CSS/Reference/At-rules/@supports).

Das **`-webkit-transition`** ist ein Boolean-nicht-standardisiertes [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features), eine [WebKit-Erweiterung](/de/docs/Web/CSS/Reference/Webkit_extensions), deren Wert `true` ist, wenn der Browsing-Kontext [CSS-Übergänge](/de/docs/Web/CSS/Guides/Transitions) unterstützt.

Apple bietet [eine Beschreibung in der Safari-CSS-Referenz](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariCSSRef/Articles/OtherStandardCSS3Features.html#//apple_ref/doc/uid/TP40007601-SW3); dies wird dort nun als `transition` bezeichnet.

> [!NOTE]
> Dieses Medienfeature sollte nicht verwendet werden; es wurde nie spezifiziert, nie weit verbreitet implementiert und wurde aus [den meisten Browsern entfernt](#browser-kompatibilität). Verwenden Sie stattdessen die {{cssxref("@supports")}} Feature-Abfrage.

## Syntax

```css
@media (-webkit-transition) {
  /* CSS to use if this media feature and prefixed transitions are supported */
}
```

## Beispiele

### Verwendung von @supports

Verwenden Sie nicht das `-webkit-transition`-Medienfeature. Testen Sie stattdessen die Unterstützung von Transitionen mit dem CSS-{{cssxref("@supports")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), wie folgt:

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
- {{cssxref("@media")}} und [Verwendung von Medienabfragen](/de/docs/Web/CSS/Guides/Media_queries/Using)
- {{cssxref("@supports")}} und [Verwendung von Feature-Abfragen](/de/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
