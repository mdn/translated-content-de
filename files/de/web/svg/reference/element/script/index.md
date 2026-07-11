---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: 8ee9efc5f273bd71fb650f555f53c1ba3932390c
---

Das **`<script>`** [SVG](/de/docs/Web/SVG) Element ermöglicht das Hinzufügen von Skripten zu einem SVG-Dokument.

> [!NOTE]
> Während das `script`-Element von SVG dem HTML {{HTMLElement('script')}}-Element entspricht, gibt es einige Unterschiede. Zum Beispiel verwendet es das {{SVGAttr('href')}}-Attribut anstelle von [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) und unterstützt bisher keine ECMAScript-Module (siehe unten die Browser-Kompatibilität für Details).

## Nutzungskontext

{{svginfo}}

## Attribute

- `async` {{experimental_inline}}
  - : Wenn das `async`-Attribut vorhanden ist, wird das externe Skript parallel zum Parsen abgerufen und ausgeführt, sobald es verfügbar ist. Entspricht dem [`async`](/de/docs/Web/HTML/Reference/Elements/script#async)-Attribut des HTML {{HTMLElement('script')}}-Elements.
    _Wertetyp_: **boolean**; _Standardwert_: _none_; _Animierbar_: **nein**
- [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : Dieses Attribut definiert [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin) wie für das HTML {{HTMLElement('script')}}-Element.
    _Wertetyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/Reference/Values/string); _Standardwert_: `?`; _Animierbar_: **ja**
- `defer` {{experimental_inline}}
  - : Wenn das `defer`-Attribut vorhanden ist, wird das externe Skript ausgeführt, nachdem das Dokument geparst wurde, aber bevor [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst wird. Entspricht dem [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut des HTML {{HTMLElement('script')}}-Elements.
    _Wertetyp_: **boolean**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt einen Hinweis auf die relative Priorität beim Abrufen eines externen Skripts.
    Erlaubte Werte:
    - `high`
      - : Ruft das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Ruft das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität.
        Es wird verwendet, wenn kein oder ein ungültiger Wert gesetzt ist.
        Dies ist der Standard.
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skriptes.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut definiert den Typ der zu verwendenden Skriptsprache.
    _Wertetyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skriptes.
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

- {{SVGAttr("fetchpriority")}} Attribut
- [`script` Element in HTML](/de/docs/Web/HTML/Reference/Elements/script)
