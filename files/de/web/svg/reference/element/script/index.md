---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: ac806e34aba086be141689c64dc4dd73636fbd62
---

Das **`<script>`** [SVG](/de/docs/Web/SVG) Element ermöglicht es, Skripte zu einem SVG-Dokument hinzuzufügen.

> [!NOTE]
> Obwohl das `script` Element von SVG dem HTML {{HTMLElement('script')}} Element entspricht, gibt es einige Unterschiede, wie die Verwendung des {{SVGAttr('href')}} Attributs anstelle von [`src`](/de/docs/Web/HTML/Reference/Elements/script#src), und bisher werden ECMAScript-Module nicht unterstützt (Siehe unten für Details zur Browser-Kompatibilität).

## Nutzungskontext

{{svginfo}}

## Attribute

- [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : Dieses Attribut definiert die [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin), wie sie für das HTML {{HTMLElement('script')}} Element definiert sind.
    _Werttyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/string); _Standardwert_: `?`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} zum zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der Skriptsprache, die verwendet werden soll.
    _Werttyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} zum zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement) Schnittstelle.

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

- [`script` Element in HTML](/de/docs/Web/HTML/Reference/Elements/script)
