---
title: <script>
slug: Web/SVG/Element/script
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<script>`** [SVG](/de/docs/Web/SVG) Element ermöglicht es, Skripte zu einem SVG-Dokument hinzuzufügen.

> [!NOTE]
> Während das `script` Element von SVG gleichwertig mit dem HTML {{HTMLElement('script')}} Element ist, gibt es einige Unterschiede, wie z.B. die Verwendung des {{SVGAttr('href')}} Attributs anstelle von [`src`](/de/docs/Web/HTML/Element/script#src), und es unterstützt bisher keine ECMAScript Module (siehe unten für Details zur Browser-Kompatibilität).

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
  - : Dieses Attribut definiert [CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin), wie sie für das HTML {{HTMLElement('script')}} Element definiert sind.
    _Werttyp_: [**\<string>**](/de/docs/Web/CSS/string); _Standardwert_: `?`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} zum zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der Skriptsprache, die verwendet werden soll.
    _Werttyp_: [**\<string>**](/de/docs/Web/CSS/string); _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} zum zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`script` Element in HTML](/de/docs/Web/HTML/Element/script)
