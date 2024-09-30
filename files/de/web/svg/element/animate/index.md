---
title: "`<animate>`"
slug: Web/SVG/Element/animate
l10n:
  sourceCommit: 3a1ef2abc8233835f0b0cc73afaf36e44edaf4a1
---

{{SVGRef}}

Das SVG-Element **`<animate>`** bietet eine Möglichkeit, ein Attribut eines Elements über die Zeit zu animieren.

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

Dieses Element implementiert das Interface [`SVGAnimateElement`](/de/docs/Web/API/SVGAnimateElement).

## Barrierefreiheit

Blinkende und flackernde Animationen können für Menschen mit kognitiven Beeinträchtigungen, wie Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (ADHS), problematisch sein. Darüber hinaus können bestimmte Arten von Bewegungen Auslöser für vestibuläre Störungen, Epilepsie, Migräne und skotopische Empfindlichkeit sein.

Überlegen Sie, ob Sie eine Möglichkeit zum Pausieren oder Deaktivieren von Animationen bereitstellen, sowie die [Reduced Motion Media Query](/de/docs/Web/CSS/@media/prefers-reduced-motion) oder das entsprechende [User Agent client hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints) {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}}, um eine ergänzende Erfahrung für Nutzer zu schaffen, die eine Vorliebe für unbewegte Erlebnisse geäußert haben.

- [Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [An Introduction to the Reduced Motion Media Query | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Responsive Design for Motion | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Verständnis von WCAG, Erläuterungen zu Richtlinie 2.2](/de/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Verständnis des Erfolgskriteriums 2.2.2 | W3C Verständnis von WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
