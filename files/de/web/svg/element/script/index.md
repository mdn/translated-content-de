---
title: <script>
slug: Web/SVG/Element/script
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das SVG-Element `script` ermöglicht es, Skripte zu einem SVG-Dokument hinzuzufügen.

> [!NOTE]
> Während das SVG-Element `script` dem HTML-Element {{HTMLElement('script')}} entspricht, gibt es einige Unterschiede, wie z.B. die Verwendung des Attributs {{SVGAttr('href')}} anstelle von [`src`](/de/docs/Web/HTML/Element/script#src) und dass bisher keine ECMAScript-Module unterstützt werden (siehe unten zur Browser-Kompatibilität).

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
  - : Dieses Attribut definiert die [CORS-Einstellungen](/de/docs/Web/HTML/Attributes/crossorigin), wie sie für das HTML-Element {{HTMLElement('script')}} festgelegt sind.
    _Werttyp_: [**\<string>**](/de/docs/Web/CSS/string); _Standardwert_: `?`; _Animierbar_: **ja**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} zum zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der zu verwendenden Skriptsprache.
    _Werttyp_: [**\<string>**](/de/docs/Web/CSS/string); _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} zum zu ladenden Skript.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **nein**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`script`-Element in HTML](/de/docs/Web/HTML/Element/script)
