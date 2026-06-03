---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: 94a841dba1498c685a18e72d041fd9057f302d6c
---

Das **`<a>`** [SVG](/de/docs/Web/SVG)-Element erstellt einen Hyperlink zu anderen Webseiten, Dateien, Orten auf derselben Seite, E-Mail-Adressen oder jeder anderen URL. Es ist dem HTML-Element {{htmlelement("a")}} sehr ähnlich.

Das `<a>`-Element von SVG ist ein Container, was bedeutet, dass Sie einen Link um Text (wie in HTML), aber auch um jede Form erstellen können.

## Verwendungskontext

{{svginfo}}

## Attribute

- {{SVGAttr("download")}}
  - : Weist Browser an, eine {{Glossary("URL", "URL")}} herunterzuladen, anstatt sie zu öffnen, sodass der Benutzer aufgefordert wird, sie als lokale Datei zu speichern.
    _Werttyp_: **\<string>**; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} oder URL-Fragement, auf die der Hyperlink zeigt.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **yes**
- [`hreflang`](/de/docs/Web/HTML/Reference/Elements/a#hreflang)
  - : Die menschliche Sprache der URL oder des URL-Fragments, auf die der Hyperlink zeigt.
    _Werttyp_: **\<string>**; _Standardwert_: _none_; _Animierbar_: **no**
- [`interestfor`](/de/docs/Web/HTML/Reference/Elements/a#interestfor) {{experimental_inline}} {{non-standard_inline}}
  - : Definiert das `<a>`-Element als **Interessen-Initiator**. Sein Wert ist die `id` eines Zielelements, das auf irgendeine Weise beeinflusst wird (normalerweise angezeigt oder ausgeblendet), wenn Interesse an dem Initiator-Element gezeigt oder verloren wird (z. B. durch Hovern/Entfernen des Hovers oder Fokussieren/Defokussieren). Siehe [Using interest invokers](/de/docs/Web/API/Popover_API/Using_interest_invokers) für weitere Details und Beispiele.
    _Werttyp_: **\<string>**; _Standardwert_: _none_; _Animierbar_: **no**
- [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, an die beim Folgen des Hyperlinks {{HTTPMethod("POST")}}-Anfragen mit dem Inhalt `PING` vom Browser (im Hintergrund) gesendet werden. Typischerweise für das Tracking verwendet. Für ein breiter unterstütztes Feature zur Adressierung derselben Anwendungsfälle siehe [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).
    _Werttyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _Standardwert_: _none_; _Animierbar_: **no**
- [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)
  - : Welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) beim Abrufen der {{Glossary("URL", "URL")}} gesendet wird.
    _Werttyp_: `no-referrer` | `no-referrer-when-downgrade` | `same-origin` | `origin` | `strict-origin` | `origin-when-cross-origin` | `strict-origin-when-cross-origin` | `unsafe-url`; _Standardwert_: _none_; _Animierbar_: **no**
- [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)
  - : Die Beziehung des Zielobjekts zum Link-Objekt.
    _Werttyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Reference/Attributes/rel)**; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL", "URL")}} angezeigt werden soll.
    _Werttyp_: `_self` | `_parent` | `_top` | `_blank` | **\<XML-Name>**; _Standardwert_: `_self`; _Animierbar_: **yes**
- [`type`](/de/docs/Web/HTML/Reference/Elements/a#type)
  - : Ein {{Glossary("MIME_type", "MIME-Typ")}} für die verlinkte URL.
    _Werttyp_: **\<string>**; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder das URL-Fragment, auf die der Hyperlink zeigt. Möglicherweise für die Kompatibilität mit älteren Browsern erforderlich.
    _Werttyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **yes**

## DOM-Schnittstelle

Dieses Element implementiert die [`SVGAElement`](/de/docs/Web/API/SVGAElement)-Schnittstelle.

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
> Da dieses Element seinen Tag-Namen mit [HTML's `<a>`-Element](/de/docs/Web/HTML/Reference/Elements/a) teilt, kann das Selektieren von `a` mit CSS oder [`querySelector`](/de/docs/Web/API/Document/querySelector) auf den falschen Elementtyp angewendet werden. Verwenden Sie die {{cssxref("@namespace")}}-Regel, um die beiden zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:title")}}-Attribut
- HTML {{HTMLElement("a")}}-Element
