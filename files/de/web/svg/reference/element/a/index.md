---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: 8ae90c06d95ae6d0ccae0feb06ccab676fafbd24
---

Das **`<a>`**-Element von [SVG](/de/docs/Web/SVG) erstellt einen Hyperlink zu anderen Webseiten, Dateien, Stellen auf derselben Seite, E-Mail-Adressen oder anderen URLs. Es ist dem {{htmlelement("a")}}-Element von HTML sehr ähnlich.

Das SVG-Element `<a>` ist ein Container. Daher können Sie einen Link nicht nur um Text (wie in HTML), sondern auch um beliebige Formen legen.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("download")}}
  - : Weist Browser an, eine {{Glossary("URL", "URL")}} herunterzuladen, statt sie aufzurufen. Benutzer werden dadurch aufgefordert, die Ressource als lokale Datei zu speichern.
    _Werttyp_: **\<string>**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} oder das URL-Fragment, auf die bzw. das der Hyperlink verweist.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _keiner_; _Animierbar_: **ja**
- {{SVGAttr("hreflang")}}
  - : Die menschliche Sprache der URL oder des URL-Fragments, auf die bzw. das der Hyperlink verweist.
    _Werttyp_: **\<string>**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- [`interestfor`](/de/docs/Web/HTML/Reference/Elements/a#interestfor) {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<a>`-Element als **Interest Invoker**. Sein Wert ist die `id` eines Zielelements, das auf irgendeine Weise beeinflusst wird (normalerweise eingeblendet oder ausgeblendet), wenn Interesse am Invoker-Element gezeigt wird oder verloren geht (beispielsweise durch Bewegen des Mauszeigers darüber bzw. davon weg oder durch Fokussieren bzw. Aufheben des Fokus). Weitere Informationen und Beispiele finden Sie unter [Interest Invoker verwenden](/de/docs/Web/API/Popover_API/Using_interest_invokers).
    _Werttyp_: **\<string>**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("ping")}} {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, an die der Browser beim Aufrufen des Hyperlinks im Hintergrund {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` sendet. Wird üblicherweise für Tracking verwendet. Eine breiter unterstützte Funktion für dieselben Anwendungsfälle ist [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).
    _Werttyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("referrerpolicy")}}
  - : Welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Abrufen der {{Glossary("URL", "URL")}} gesendet wird.
    _Werttyp_: `no-referrer` | `no-referrer-when-downgrade` | `same-origin` | `origin` | `strict-origin` | `origin-when-cross-origin` | `strict-origin-when-cross-origin` | `unsafe-url`; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("rel")}}
  - : Die Beziehung zwischen dem Zielobjekt und dem Linkobjekt.
    _Werttyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Reference/Attributes/rel)**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL", "URL")}} angezeigt wird.
    _Werttyp_: `_self` | `_parent` | `_top` | `_blank` | **\<XML-Name>**; _Standardwert_: `_self`; _Animierbar_: **ja**
- [`type`](/de/docs/Web/HTML/Reference/Elements/a#type)
  - : Ein {{Glossary("MIME_type", "MIME-Typ")}} für die verlinkte URL.
    _Werttyp_: **\<string>**; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder das URL-Fragment, auf die bzw. das der Hyperlink verweist. Kann für die Abwärtskompatibilität mit älteren Browsern erforderlich sein.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _keiner_; _Animierbar_: **ja**

## DOM-Schnittstelle

Dieses Element implementiert die Schnittstelle [`SVGAElement`](/de/docs/Web/API/SVGAElement).

## Beispiel

```css hidden
@namespace svg url("http://www.w3.org/2000/svg");
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a shape -->
  <a href="/docs/Web/SVG/Reference/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Reference/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* As SVG does not provide a default visual style for links,
   it's considered best practice to add some */

@namespace svg url("http://www.w3.org/2000/svg");
/* Necessary to select only SVG <a> elements, and not also HTML's.
   See warning below */

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* Even for text, SVG uses fill over color */
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

> [!WARNING]
> Da dieses Element denselben Tag-Namen wie das [HTML-Element `<a>`](/de/docs/Web/HTML/Reference/Elements/a) hat, kann die Auswahl von `a` mit CSS oder [`querySelector`](/de/docs/Web/API/Document/querySelector) den falschen Elementtyp erfassen. Verwenden Sie die Regel {{cssxref("@namespace")}}, um die beiden zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Attribut {{SVGAttr("xlink:title")}}
- HTML-Element {{HTMLElement("a")}}
