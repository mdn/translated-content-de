---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

Das **`<script>`** [SVG](/de/docs/Web/SVG)-Element ermöglicht das Hinzufügen von Skripten zu einem SVG-Dokument.

> [!NOTE]
> Obwohl das `script`-Element von SVG dem {{HTMLElement('script')}}-Element von HTML entspricht, gibt es einige Unterschiede. Zum Beispiel verwendet es das {{SVGAttr('href')}}-Attribut anstelle von [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) und unterstützt derzeit keine ECMAScript-Module (siehe Browser-Kompatibilität unten für Details).

## Nutzungskontext

{{svginfo}}

## Attribute

- [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : Dieses Attribut definiert die [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin), wie sie für das HTML-{{HTMLElement('script')}}-Element festgelegt sind.
    _Wertetyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/string); _Standardwert_: `?`; _Animierbar_: **ja**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt einen Hinweis auf die relative Priorität, die beim Abrufen eines externen Skripts verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Ruft das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Ruft das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität.
        Dieser Wert wird verwendet, wenn kein Wert oder ein ungültiger Wert gesetzt ist.
        Dies ist der Standard.
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skripts.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den zu verwendenden Skriptsprachen-Typ.
    _Wertetyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skripts.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**

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

- {{SVGAttr("fetchpriority")}}-Attribut
- [`script`-Element in HTML](/de/docs/Web/HTML/Reference/Elements/script)
