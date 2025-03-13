---
title: <animate>
slug: Web/SVG/Element/animate
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SVGRef}}

Das **`<animate>`** [SVG](/de/docs/Web/SVG)-Element bietet eine Möglichkeit, ein Attribut eines Elements im Laufe der Zeit zu animieren.

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

## Verwendungshinweise

Dieses Element implementiert die [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement)-Schnittstelle.

## Barrierefreiheitshinweise

Blinkende und flackernde Animationen können problematisch für Menschen mit kognitiven Beeinträchtigungen wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS) sein. Zudem können bestimmte Arten von Bewegungen Auslöser für vestibuläre Störungen, Epilepsie, Migräne und Skotopische Empfindlichkeit sein.

Es sollte in Betracht gezogen werden, eine Möglichkeit zum Anhalten oder Deaktivieren der Animation bereitzustellen, sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder den entsprechenden [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} zu verwenden, um ein alternatives Erlebnis für Nutzer zu schaffen, die eine Präferenz für nicht-animierte Erfahrungen angegeben haben.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Leitfaden 2.2 Erklärungen](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_genug_zeit_um_usern_genug_zeit_zum_lesen_und_verwenden_von_inhalten_zu_geben)
- [Understanding Success Criterion 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
