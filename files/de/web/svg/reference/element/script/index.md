---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das **`<script>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht das Hinzufügen von Skripten zu einem SVG-Dokument.

> [!NOTE]
> Obwohl das `script`-Element in SVG dem HTML-{{HTMLElement('script')}}-Element entspricht, gibt es einige Unterschiede, wie z.B. die Verwendung des {{SVGAttr('href')}}-Attributs anstelle von [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) und die fehlende Unterstützung für ECMAScript-Module bisher (siehe unten für Details zur Browser-Kompatibilität).

## Verwendungskontext

{{svginfo}}

## Attribute

- [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : Dieses Attribut definiert [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin), wie sie für das HTML-{{HTMLElement('script')}}-Element festgelegt sind.
    _Werttyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/Reference/Values/string); _Standardwert_: `?`; _Animierbar_: **ja**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Bietet einen Hinweis auf die relative Priorität beim Laden eines externen Skripts.
    Erlaubte Werte:
    - `high`
      - : Lädt das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten.
    - `low`
      - : Lädt das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Legt keine Präferenz für die Ladepriorität fest.
        Wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
        Dies ist der Standardwert.
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} zu dem zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der zu verwendenden Skriptsprache.
    _Werttyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} zu dem zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement)-Schnittstelle.

## Beispiel

```html
Click the circle to change colors.
<svg
  viewBox="0 0 10 10"
  height="120px"
  width="120px"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="5" cy="5" r="4" />

  <script>
    // <![CDATA[
    function getColor() {
      const R = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      const G = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      const B = Math.round(Math.random() * 255)
        .toString(16)
        .padStart(2, "0");

      return `#${R}${G}${B}`;
    }

    document.querySelector("circle").addEventListener("click", (e) => {
      e.target.style.fill = getColor();
    });
    // ]]>
  </script>
</svg>
```

{{EmbedLiveSample('Example', 150, '100%')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("fetchpriority")}} Attribut
- [`script`-Element in HTML](/de/docs/Web/HTML/Reference/Elements/script)
