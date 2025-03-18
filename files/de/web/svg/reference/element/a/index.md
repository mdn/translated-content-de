---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

Das **`<a>`** [SVG](/de/docs/Web/SVG)-Element erstellt einen Hyperlink zu anderen Webseiten, Dateien, Positionen auf derselben Seite, E-Mail-Adressen oder jeder anderen URL. Es ist dem `a`-Element von HTML sehr ähnlich.

Das `<a>`-Element von SVG ist ein Container, was bedeutet, dass Sie einen Link um Text (wie in HTML) aber auch um jede Form erstellen können.

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
> Da dieses Element seinen Tag-Namen mit dem [HTML `<a>`-Element](/de/docs/Web/HTML/Element/a) teilt, kann die Auswahl von `a` mit CSS oder [`querySelector`](/de/docs/Web/API/Document/querySelector) möglicherweise auf die falsche Art von Element angewandt werden. Versuchen Sie die [Regel `@namespace`](/de/docs/Web/CSS/@namespace), um die beiden zu unterscheiden.

## Attribute

- [`download`](/de/docs/Web/HTML/Element/a#download)
  - : Weist Browser an, eine {{Glossary("URL", "URL")}} herunterzuladen, anstatt darauf zu navigieren, sodass der Benutzer aufgefordert wird, sie als lokale Datei zu speichern.
    _Werttyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} oder URL-Fragmente, auf die der Hyperlink verweist.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **ja**
- [`hreflang`](/de/docs/Web/HTML/Element/a#hreflang)
  - : Die Sprache des URL oder URL-Fragments, auf das der Hyperlink verweist.
    _Werttyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **nein**
- [`ping`](/de/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Körper `PING` vom Browser (im Hintergrund) gesendet werden. Wird typischerweise zum Tracking verwendet. Für eine breiter unterstützte Funktion, die dieselben Anwendungsfälle adressiert, siehe [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).
    _Werttyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)** ; _Standardwert_: _none_; _Animierbar_: **nein**
- [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)
  - : Welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet wird, wenn die {{Glossary("URL", "URL")}} abgerufen wird.
    _Werttyp_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Standardwert_: _none_; _Animierbar_: **nein**
- [`rel`](/de/docs/Web/HTML/Element/a#rel)
  - : Die Beziehung des Zielobjekts zum Link-Objekt.
    _Werttyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Attributes/rel)** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL", "URL")}} angezeigt wird.
    _Werttyp_: `_self`|`_parent`|`_top`|`_blank`|**\<XML-Name>** ; _Standardwert_: `_self`; _Animierbar_: **ja**
- [`type`](/de/docs/Web/HTML/Element/a#type)
  - : Ein {{Glossary("MIME_type", "MIME type")}} für die verlinkte URL.
    _Werttyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **nein**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder das URL-Fragment, auf das der Hyperlink verweist. Kann für die Abwärtskompatibilität mit älteren Browsern erforderlich sein.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **ja**

## Verwendungs-Kontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:title")}} Attribut
- HTML {{HTMLElement("a")}} Element
