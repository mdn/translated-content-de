---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **`<script>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht das Hinzufügen von Skripten zu einem SVG-Dokument.

> [!NOTE]
> Während das `script`-Element von SVG dem HTML {{HTMLElement('script')}}-Element entspricht, gibt es einige Abweichungen, beispielsweise verwendet es das {{SVGAttr('href')}}-Attribut anstelle von [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) und unterstützt bislang keine ECMAScript-Module (Siehe unten für Details zur Browser-Kompatibilität).

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

## Attribute

- [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : Dieses Attribut definiert [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin), wie sie für das HTML {{HTMLElement('script')}}-Element festgelegt sind.
    _Wertetyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/string); _Standardwert_: `?`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} zu dem zu ladenden Skript.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der zu verwendenden Skriptsprache.
    _Wertetyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} zu dem zu ladenden Skript.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`script`-Element in HTML](/de/docs/Web/HTML/Reference/Elements/script)
