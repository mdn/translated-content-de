---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **`<a>`** [SVG](/de/docs/Web/SVG) Element erzeugt einen Hyperlink zu anderen Webseiten, Dateien, Positionen auf derselben Seite, E-Mail-Adressen oder einer anderen URL. Es ist dem {{htmlelement("a")}} Element von HTML sehr ähnlich.

Das `<a>` Element von SVG ist ein Container, was bedeutet, dass Sie einen Link um Text (wie in HTML) und auch um beliebige Formen erstellen können.

## Beispiel

```css hidden
@namespace svg url(http://www.w3.org/2000/svg);
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a shape -->
  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* As SVG does not provide a default visual style for links,
   it's considered best practice to add some */

@namespace svg url(http://www.w3.org/2000/svg);
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
> Da dieses Element seinen Tag-Namen mit [HTMLs `<a>` Element](/de/docs/Web/HTML/Reference/Elements/a) teilt, kann die Auswahl von `a` mit CSS oder [`querySelector`](/de/docs/Web/API/Document/querySelector) möglicherweise auf den falschen Elementtyp angewendet werden. Versuchen Sie die [Regel `@namespace`](/de/docs/Web/CSS/@namespace), um die beiden zu unterscheiden.

## Attribute

- [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)
  - : Weist Browser an, eine {{Glossary("URL", "URL")}} herunterzuladen, anstatt zu ihr zu navigieren, sodass der Benutzer aufgefordert wird, sie als lokale Datei zu speichern.
    _Wertetyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("href")}}
  - : Der {{Glossary("URL", "URL")}} oder URL-Fragment, auf das der Hyperlink zeigt.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **yes**
- [`hreflang`](/de/docs/Web/HTML/Reference/Elements/a#hreflang)
  - : Die menschliche Sprache der URL oder des URL-Fragments, auf das der Hyperlink zeigt.
    _Wertetyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **no**
- [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, zu denen beim Folgen des Hyperlinks {{HTTPMethod("POST")}} Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden. Typischerweise für Tracking-Zwecke verwendet. Für ein weiter verbreitet unterstütztes Feature, das dieselben Anwendungsfälle adressiert, siehe [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).
    _Wertetyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)** ; _Standardwert_: _none_; _Animierbar_: **no**
- [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)
  - : Welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet werden soll, wenn die {{Glossary("URL", "URL")}} abgerufen wird.
    _Wertetyp_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Standardwert_: _none_; _Animierbar_: **no**
- [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)
  - : Die Beziehung des Zielobjekts zum Linkobjekt.
    _Wertetyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Reference/Attributes/rel)** ; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL", "URL")}} angezeigt werden soll.
    _Wertetyp_: `_self`|`_parent`|`_top`|`_blank`|**\<XML-Name>** ; _Standardwert_: `_self`; _Animierbar_: **yes**
- [`type`](/de/docs/Web/HTML/Reference/Elements/a#type)
  - : Ein [MIME-Typ](/en-US/Glossary/MIME_type) für die verlinkte URL.
    _Wertetyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder URL-Fragment, auf das der Hyperlink zeigt. Möglicherweise erforderlich für die Abwärtskompatibilität mit älteren Browsern.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **yes**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:title")}} Attribut
- HTML {{HTMLElement("a")}} Element
