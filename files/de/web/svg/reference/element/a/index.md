---
title: <a>
slug: Web/SVG/Reference/Element/a
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Das **`<a>`** [SVG](/de/docs/Web/SVG)-Element erstellt einen Hyperlink zu anderen Webseiten, Dateien, Positionen auf derselben Seite, E-Mail-Adressen oder einer anderen URL. Es ist dem {{htmlelement("a")}}-Element in HTML sehr ähnlich.

Das `<a>`-Element in SVG ist ein Container, was bedeutet, dass Sie einen Link um Text (wie in HTML), aber auch um jede Form erstellen können.

## Verwendungskontext

{{svginfo}}

## Attribute

- [`download`](/de/docs/Web/HTML/Reference/Elements/a#download)
  - : Instruieren Sie Browser, anstelle der Navigation zu einer {{Glossary("URL", "URL")}} diese herunterzuladen, sodass der Benutzer aufgefordert wird, sie als lokale Datei zu speichern.
    _Wertetyp_: **\<string>**; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("href")}}
  - : Die {{Glossary("URL", "URL")}} oder URL-Fragment, auf das der Hyperlink verweist.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **yes**
- [`hreflang`](/de/docs/Web/HTML/Reference/Elements/a#hreflang)
  - : Die menschliche Sprache der URL oder des URL-Fragments, auf die bzw. das der Hyperlink verweist.
    _Wertetyp_: **\<string>**; _Standardwert_: _none_; _Animierbar_: **no**
- [`ping`](/de/docs/Web/HTML/Reference/Elements/a#ping) {{experimental_inline}}
  - : Eine durch Leerzeichen getrennte Liste von URLs, an die, wenn der Hyperlink gefolgt wird, {{HTTPMethod("POST")}}-Anfragen mit dem Body `PING` vom Browser (im Hintergrund) gesendet werden. Typischerweise für Tracking verwendet. Für ein breiter unterstütztes Feature, das denselben Anwendungsfall abdeckt, siehe [`Navigator.sendBeacon()`](/de/docs/Web/API/Navigator/sendBeacon).
    _Wertetyp_: **[\<list-of-URLs>](/de/docs/Web/SVG/Guides/Content_type#list-of-ts)**; _Standardwert_: _none_; _Animierbar_: **no**
- [`referrerpolicy`](/de/docs/Web/HTML/Reference/Elements/a#referrerpolicy)
  - : Welcher [Referrer](/de/docs/Web/HTTP/Reference/Headers/Referer) gesendet werden soll, wenn die {{Glossary("URL", "URL")}} abgerufen wird.
    _Wertetyp_: `no-referrer` | `no-referrer-when-downgrade` | `same-origin` | `origin` | `strict-origin` | `origin-when-cross-origin` | `strict-origin-when-cross-origin` | `unsafe-url`; _Standardwert_: _none_; _Animierbar_: **no**
- [`rel`](/de/docs/Web/HTML/Reference/Elements/a#rel)
  - : Die Beziehung des Zielobjekts zum Linkobjekt.
    _Wertetyp_: **[\<list-of-Link-Types>](/de/docs/Web/HTML/Reference/Attributes/rel)**; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("target")}}
  - : Wo die verlinkte {{Glossary("URL", "URL")}} angezeigt werden soll.
    _Wertetyp_: `_self` | `_parent` | `_top` | `_blank` | **\<XML-Name>**; _Standardwert_: `_self`; _Animierbar_: **yes**
- [`type`](/de/docs/Web/HTML/Reference/Elements/a#type)
  - : Ein {{Glossary("MIME_type", "MIME-Typ")}} für die verlinkte URL.
    _Wertetyp_: **\<string>**; _Standardwert_: _none_; _Animierbar_: **no**
- {{SVGAttr("xlink:href")}} {{deprecated_inline}}
  - : Die URL oder das URL-Fragment, auf das der Hyperlink verweist. Möglicherweise zur Rückwärtskompatibilität für ältere Browser erforderlich.
    _Wertetyp_: **[\<URL>](/de/docs/Web/SVG/Guides/Content_type#url)**; _Standardwert_: _none_; _Animierbar_: **yes**

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
> Da dieses Element seinen Tag-Namen mit dem [HTML-`<a>`-Element](/de/docs/Web/HTML/Reference/Elements/a) teilt, kann das Auswählen von `a` mit CSS oder [`querySelector`](/de/docs/Web/API/Document/querySelector) möglicherweise auf die falsche Art von Element zutreffen. Versuchen Sie, [die `@namespace`-Regel](/de/docs/Web/CSS/Reference/At-rules/@namespace) zu verwenden, um die beiden zu unterscheiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("xlink:title")}}-Attribut
- HTML {{HTMLElement("a")}}-Element
