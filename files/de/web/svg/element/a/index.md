---
title: <a>
slug: Web/SVG/Element/a
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SVGRef}}

Das **`<a>`** [SVG](/de/docs/Web/SVG)-Element erstellt einen Hyperlink zu anderen Webseiten, Dateien, Positionen auf derselben Seite, E-Mail-Adressen oder einer anderen URL. Es ist dem HTML-{{htmlelement("a")}}-Element sehr ähnlich.

Das `<a>`-Element in SVG ist ein Container, was bedeutet, dass Sie einen Link um Text (wie in HTML) sowie um jede Form erstellen können.

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
> Da dieses Element den gleichen Tag-Namen wie [HTML's `<a>`-Element](/de/docs/Web/HTML/Element/a) teilt, kann das Selektieren von `a` mit CSS oder [`querySelector`](/de/docs/Web/API/Document/querySelector) möglicherweise auf den falschen Elementtyp angewendet werden. Versuchen Sie, [die `@namespace`-Regel](/de/docs/Web/CSS/@namespace) zu verwenden, um zwischen den beiden zu unterscheiden.

## Attribute

- [`download`](/de/docs/Web/HTML/Element/a#download)
  - : Weist Browser an, eine {{Glossary("URL", "URL")}} herunterzuladen, anstatt zu dieser zu navigieren, sodass der Benutzer aufgefordert wird, sie als lokale Datei zu speichern.
    _Wertetyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} oder URL-Fragmente, zu denen der Hyperlink zeigt.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **yes**
- [`hreflang`](/de/docs/Web/HTML/Element/a#hreflang)
  - : Die menschliche Sprache der URL oder der URL-Fragmente, zu denen der Hyperlink zeigt.
    _Wertetyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **no**
- [`ping`](/de/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, durch den Browser (im Hintergrund) {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` gesendet werden. Typischerweise für Tracking verwendet. Für eine weiter verbreitete Funktion, die dieselben Anwendungsfälle bedient, siehe [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).
    _Wertetyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Content_type#list-of-ts)** ; _Standardwert_: _none_; _Animierbar_: **no**
- [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)
  - : Welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Abrufen der {{Glossary("URL", "URL")}} gesendet werden soll.
    _Wertetyp_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Standardwert_: _none_; _Animierbar_: **no**
- [`rel`](/de/docs/Web/HTML/Element/a#rel)
  - : Die Beziehung des Zielobjekts zum Linkobjekt.
    _Wertetyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Attributes/rel)** ; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL", "URL")}} angezeigt werden soll.
    _Wertetyp_: `_self`|`_parent`|`_top`|`_blank`|**\<XML-Name>** ; _Standardwert_: `_self`; _Animierbar_: **yes**
- [`type`](/de/docs/Web/HTML/Element/a#type)
  - : Ein {{Glossary("MIME_type", "MIME-Typ")}} für die verlinkte URL.
    _Wertetyp_: **\<string>** ; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder das URL-Fragment, zu dem der Hyperlink zeigt. Möglicherweise erforderlich für Abwärtskompatibilität mit älteren Browsern.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _none_; _Animierbar_: **yes**

## Nutzungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:title")}} Attribut
- HTML {{HTMLElement("a")}} Element
