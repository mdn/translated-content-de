---
title: <a>
slug: Web/SVG/Element/a
l10n:
  sourceCommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

{{SVGRef}}

Das **`<a>`** [SVG](/de/docs/Web/SVG)-Element erstellt einen Hyperlink zu anderen Webseiten, Dateien, Orten auf derselben Seite, E-Mail-Adressen oder jedem anderen URL. Es ist dem {{htmlelement("a")}}-Element von HTML sehr ähnlich.

Das `<a>`-Element von SVG ist ein Container, was bedeutet, dass Sie einen Link um Text (wie in HTML) aber auch um jede Form herum erstellen können.

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
> Da dieses Element seinen Tag-Namen mit [dem `<a>`-Element von HTML](/de/docs/Web/HTML/Element/a) teilt, kann das Auswählen von `a` mit CSS oder [`querySelector`](/de/docs/Web/API/Document/querySelector) auf den falschen Elementtyp angewendet werden. Versuchen Sie die [Regel `@namespace`](/de/docs/Web/CSS/@namespace), um die beiden zu unterscheiden.

## Attribute

- [`download`](/de/docs/Web/HTML/Element/a#download)
  - : Weist Browser an, eine {{Glossary("URL", "URL")}} herunterzuladen, anstatt sie zu öffnen, sodass der Benutzer aufgefordert wird, sie als lokale Datei zu speichern.
    _Werttyp_: **\<string>** ; _Standardwert_: _keiner_; _Animierbar_: **nein**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} oder URL-Fragment, auf die der Hyperlink zeigt.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _keiner_; _Animierbar_: **ja**
- [`hreflang`](/de/docs/Web/HTML/Element/a#hreflang)
  - : Die menschliche Sprache der URL oder des URL-Fragments, auf die der Hyperlink zeigt.
    _Werttyp_: **\<string>** ; _Standardwert_: _keiner_; _Animierbar_: **ja**
- [`ping`](/de/docs/Web/HTML/Element/a#ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, an die beim Folgen des Hyperlinks vom Browser (im Hintergrund) {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` gesendet werden. Typischerweise für das Tracking verwendet. Für eine weiter verbreitete Funktion, die dieselben Anwendungsfälle adressiert, siehe [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).
    _Werttyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Content_type#list-of-ts)** ; _Standardwert_: _keiner_; _Animierbar_: **nein**
- [`referrerpolicy`](/de/docs/Web/HTML/Element/a#referrerpolicy)
  - : Welcher [Referrer](/de/docs/Web/HTTP/Headers/Referer) gesendet werden soll, wenn die {{Glossary("URL", "URL")}} abgerufen wird.
    _Werttyp_: `no-referrer`|`no-referrer-when-downgrade`|`same-origin`|`origin`|`strict-origin`|`origin-when-cross-origin`|`strict-origin-when-cross-origin`|`unsafe-url` ; _Standardwert_: _keiner_; _Animierbar_: **nein**
- [`rel`](/de/docs/Web/HTML/Element/a#rel)
  - : Die Beziehung des Zielobjekts zum Link-Objekt.
    _Werttyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Attributes/rel)** ; _Standardwert_: _keiner_; _Animierbar_: **ja**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL", "URL")}} angezeigt werden soll.
    _Werttyp_: `_self`|`_parent`|`_top`|`_blank`|**\<name>** ; _Standardwert_: `_self`; _Animierbar_: **ja**
- [`type`](/de/docs/Web/HTML/Element/a#type)
  - : Ein {{Glossary("MIME_type", "MIME-Typ")}} für die verlinkte URL.
    _Werttyp_: **\<string>** ; _Standardwert_: _keiner_; _Animierbar_: **ja**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder das URL-Fragment, auf die der Hyperlink zeigt. Möglicherweise erforderlich für die Rückwärtskompatibilität mit älteren Browsern.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Content_type#url)** ; _Standardwert_: _keiner_; _Animierbar_: **ja**

## Verwendungskontext

{{svginfo}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:title")}}-Attribut
- HTML {{HTMLElement("a")}}-Element
