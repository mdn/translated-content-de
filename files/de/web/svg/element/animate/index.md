---
title: <animate>
slug: Web/SVG/Element/animate
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<animate>`** [SVG](/de/docs/Web/SVG) Element bietet eine Möglichkeit, ein Attribut eines Elements im Laufe der Zeit zu animieren.

## Beispiel

```css hidden
html,
body,
svg {
  height: 100%;
  margin: 0;
  padding: 0;
}
```

```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate
      attributeName="rx"
      values="0;5;0"
      dur="10s"
      repeatCount="indefinite" />
  </rect>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Nutzungshinweise

Dieses Element implementiert das [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement) Interface.

## Barrierefreiheit

Blinkende und blitzende Animationen können problematisch für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Darüber hinaus können bestimmte Bewegungsarten ein Auslöser für Vestibuläre Störungen, Epilepsie und Migräne sowie Skotopische Empfindlichkeit sein.

Erwägen Sie, eine Mechanismus zum Anhalten oder Deaktivieren der Animation bereitzustellen, und verwenden Sie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder das entsprechende [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, um ein ergänzendes Erlebnis für Benutzer zu schaffen, die eine Präferenz für nicht animierte Erlebnisse ausgedrückt haben.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Guideline 2.2 explanations](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
