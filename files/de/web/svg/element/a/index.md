---
title: <a>
slug: Web/SVG/Element/a
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

{{SVGRef}}

Das **\<a>** SVG-Element erstellt einen Hyperlink zu anderen Webseiten, Dateien, Positionen auf derselben Seite, E-Mail-Adressen oder einer anderen URL. Es ist dem {{htmlelement("a")}}-Element von HTML sehr ähnlich.

Das `<a>`-Element in SVG ist ein Container, was bedeutet, dass Sie einen Link um Text (wie in HTML) erstellen können, aber auch um jede Form.

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
  <!-- Ein Link um eine Form -->
  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="35" />
  </a>

  <!-- Ein Link um einen Text -->
  <a href="/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
  </a>
</svg>
```

```css
/* Da SVG keinen Standard-Vizualstil für Links bietet,
   wird empfohlen, einige hinzuzufügen */

@namespace svg url(http://www.w3.org/2000/svg);
/* Notwendig, um nur SVG-<a>-Elemente auszuwählen
   und nicht auch HTML. Siehe Warnung unten */

svg|a:link,
svg|a:visited {
  cursor: pointer;
}

svg|a text,
text svg|a {
  fill: blue; /* Auch für Text verwendet SVG fill anstelle von color */
  text-decoration: underline;
}

svg|a:hover,
svg|a:active {
  outline: dotted 1px blue;
}
```

{{EmbedLiveSample('Example', 100, 100)}}

> [!WARNING]
> Da dieses Element seinen Tag-Namen mit [HTML's `<a>`-Element](/de/docs/Web/HTML/Element/a) teilt, kann die Auswahl von `a` mit CSS oder {{domxref("Document.querySelector", "querySelector")}} auf die falsche Art von Element angewendet werden. Versuchen Sie, [die `@namespace`-Regel](/de/docs/Web/CSS/@namespace) zu verwenden, um die beiden zu unterscheiden.

## Attribute

- [`download`](/de/docs/Web/HTML/Element/a#download)
  - : Veranlasst Browser, eine {{Glossary("URL")}} herunterzuladen, anstatt sie zu öffnen, sodass der Benutzer aufgefordert wird, sie als lokale Datei zu speichern.
    _Werttyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL")}} oder URL-Fragment, auf das der Hyperlink verweist.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **ja**
- [`hreflang`](/de/docs/Web/HTML/Element/a#hreflang)
  - : Die menschliche Sprache der URL oder des URL-Fragments, auf das der Hyperlink verweist.
    _Werttyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **ja**
- [`ping`](/de/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` im Hintergrund vom Browser gesendet werden. Typischerweise für das Tracking verwendet. Für eine breiter unterstützte Funktion, die dieselben Anwendungsfälle abdeckt, siehe {{domxref("Navigator.sendBeacon()")}}.
    _Werttyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Content_type#list-of-ts)** ; _Standardwert_: _none_; _Animierbar_: **nein**
- [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)
  - : Welchen [Referrer](/de/docs/Web/HTTP/Headers/Referer) gesendet werden soll, wenn die {{Glossary("URL")}} abgerufen wird.
    _Werttyp_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Standardwert_: _none_; _Animierbar_: **nein**
- [`rel`](/de/docs/Web/HTML/Element/a#rel)
  - : Die Beziehung des Zielobjekts zum Linkobjekt.
    _Werttyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Attributes/rel)** ; _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL")}} angezeigt werden soll.
    _Werttyp_: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; _Standardwert_: `_self`; _Animierbar_: **ja**
- [`type`](/de/docs/Web/HTML/Element/a#type)
  - : Ein {{Glossary("MIME type")}} für die verlinkte URL.
    _Werttyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder das URL-Fragment, auf das der Hyperlink verweist. Möglicherweise erforderlich für die Rückwärtskompatibilität bei älteren Browsern.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:title")}} Attribut
- HTML {{HTMLElement("a")}} Element
