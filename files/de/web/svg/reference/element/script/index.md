---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<script>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht es, Skripte in ein SVG-Dokument einzufügen.

> [!NOTE]
> Obwohl das `script`-Element von SVG dem HTML {{HTMLElement('script')}}-Element entspricht, gibt es einige Unterschiede. Beispielsweise wird das Attribut {{SVGAttr('href')}} anstelle von [`src`](/de/docs/Web/HTML/Element/script#src) verwendet und ECMAScript-Module werden bisher nicht unterstützt (siehe Details zur Browser-Kompatibilität unten).

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

- [`crossorigin`](/de/docs/Web/HTML/Element/script#crossorigin)
  - : Dieses Attribut definiert [CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin) wie beim HTML-{{HTMLElement('script')}}-Element.
    _Wertetyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/string); _Standardwert_: `?`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skripts.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der Skriptsprache, die verwendet werden soll.
    _Wertetyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skripts.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`script`-Element in HTML](/de/docs/Web/HTML/Element/script)
