---
title: <script>
slug: Web/SVG/Reference/Element/script
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

Mit dem **`<script>`**-Element von [SVG](/de/docs/Web/SVG) können Sie einem SVG-Dokument Skripte hinzufügen.

> [!NOTE]
> Das `script`-Element von SVG entspricht zwar dem HTML-Element {{HTMLElement('script')}}, unterscheidet sich aber in einigen Punkten: Es verwendet beispielsweise das Attribut {{SVGAttr('href')}} statt [`src`](/de/docs/Web/HTML/Reference/Elements/script#src) und unterstützt bislang keine ECMAScript-Module. Weitere Informationen finden Sie unten unter Browser-Kompatibilität.

## Verwendungskontext

{{svginfo}}

## Attribute

- `async` {{experimental_inline}}
  - : Wenn das Attribut `async` vorhanden ist, wird das externe Skript parallel zum Parsen geladen und ausgeführt, sobald es verfügbar ist. Dies entspricht dem Attribut [`async`](/de/docs/Web/HTML/Reference/Elements/script#async) des HTML-Elements {{HTMLElement('script')}}.
    _Wertetyp_: **boolean**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- [`crossorigin`](/de/docs/Web/HTML/Reference/Elements/script#crossorigin)
  - : Dieses Attribut legt die [CORS-Einstellungen](/de/docs/Web/HTML/Reference/Attributes/crossorigin) fest, wie sie für das HTML-Element {{HTMLElement('script')}} definiert sind.
    _Wertetyp_: [**[ anonymous | use-credentials ]?**](/de/docs/Web/CSS/Reference/Values/string); _Standardwert_: `?`; _Animierbar_: **ja**
- `defer` {{experimental_inline}}
  - : Wenn das Attribut `defer` vorhanden ist, wird das externe Skript ausgeführt, nachdem das Dokument geparst wurde, aber bevor das Ereignis [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) ausgelöst wird. Dies entspricht dem Attribut [`defer`](/de/docs/Web/HTML/Reference/Elements/script#defer) des HTML-Elements {{HTMLElement('script')}}.
    _Wertetyp_: **boolean**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("fetchpriority")}} {{experimental_inline}} {{non-standard_inline}}
  - : Gibt einen Hinweis auf die relative Priorität beim Laden eines externen Skripts.
    Zulässige Werte:
    - `high`
      - : Lädt das externe Skript mit hoher Priorität im Vergleich zu anderen externen Skripten.
    - `low`
      - : Lädt das externe Skript mit niedriger Priorität im Vergleich zu anderen externen Skripten.
    - `auto`
      - : Legt keine bevorzugte Ladepriorität fest.
        Dieser Wert wird verwendet, wenn kein Wert oder ein ungültiger Wert angegeben ist.
        Dies ist der Standardwert.
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skripts.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("type")}}
  - : Dieses Attribut legt den Typ der zu verwendenden Skriptsprache fest.
    _Wertetyp_: {{Glossary("MIME_type", "**`<media-type>`**")}}; _Standardwert_: `application/ecmascript`; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die {{Glossary("URL", "URL")}} des zu ladenden Skripts.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _keiner_; _Animierbar_: **nein**

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGScriptElement`](/de/docs/Web/API/SVGScriptElement).

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

- Attribut {{SVGAttr("fetchpriority")}}
- [`script`-Element in HTML](/de/docs/Web/HTML/Reference/Elements/script)
