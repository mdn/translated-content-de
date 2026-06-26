---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: a9e07b75358077e93e2515a13a7413275116ee48
---

Das **`<script>`**-Element [SVG](/de/docs/Web/SVG) ermöglicht das Hinzufügen von Skripten zu einem SVG-Dokument.

> [!NOTE]
> Während das `script`-Element von SVG dem HTML-{{HTMLElement('script')}}-Element entspricht, gibt es einige Unterschiede, wie zum Beispiel die Verwendung des {{SVGAttr('href')}}-Attributs anstelle von [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) und es unterstützt bislang keine ECMAScript-Module (siehe unten für Browser-Kompatibilität).

## Verwendungskontext

{{svginfo}}

## Attribute

- `async` {{non-standard_inline}}
  - : Wenn das `async`-Attribut vorhanden ist, wird das externe Skript parallel zum Parsen abgerufen und ausgewertet, sobald es verfügbar ist. Dies entspricht dem [`async`](/de/docs/Web/HTML/Reference/Elements/script#async)-Attribut im HTML-{{HTMLElement('script')}}-Element.
    _Werttyp_: **boolean**; _Standardwert_: _none_; _Animierbar_: **nein**
- [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : Dieses Attribut definiert [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin) wie im HTML-{{HTMLElement('script')}}-Element.
    _Werttyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/Reference/Values/string); _Standardwert_: `?`; _Animierbar_: **ja**
- `defer` {{experimental_inline}}
  - : Wenn das `defer`-Attribut vorhanden ist, wird das externe Skript nach dem Parsen des Dokuments, aber vor dem Auslösen von [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgeführt. Dies entspricht dem [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer)-Attribut im HTML-{{HTMLElement('script')}}-Element.
    _Werttyp_: **boolean**; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt einen Hinweis auf die relative Priorität an, die beim Abrufen eines externen Skripts verwendet werden soll.
    Erlaubte Werte:
    - `high`
      - : Ruft das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten ab.
    - `low`
      - : Ruft das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten ab.
    - `auto`
      - : Setzt keine Präferenz für die Abrufpriorität.
        Wird verwendet, wenn kein Wert oder ein ungültiger Wert festgelegt ist.
        Dies ist der Standard.
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

- {{SVGAttr("fetchpriority")}}-Attribut
- [`script`-Element in HTML](/de/docs/Web/HTML/Reference/Elements/script)
