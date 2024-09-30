---
title: "CSP: default-src"
slug: Web/HTTP/Headers/Content-Security-Policy/default-src
l10n:
  sourceCommit: c6b08a226f356baa26ed37a9d8ed12196244d02e
---

{{HTTPSidebar}}

Der HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`default-src`**-Direktive dient als Rückfalloption für die anderen CSP-[Fetch-Richtlinien](/de/docs/Glossary/fetch_directive). Für jede der folgenden Direktiven, die fehlen, sucht der Benutzeragent nach der `default-src`-Direktive und verwendet diesen Wert:

- {{CSP("child-src")}}
- {{CSP("connect-src")}}
- {{CSP("font-src")}}
- {{CSP("frame-src")}}
- {{CSP("img-src")}}
- {{CSP("manifest-src")}}
- {{CSP("media-src")}}
- {{CSP("object-src")}}
- {{CSP("prefetch-src")}}
- {{CSP("script-src")}}
- {{CSP("script-src-elem")}}
- {{CSP("script-src-attr")}}
- {{CSP("style-src")}}
- {{CSP("style-src-elem")}}
- {{CSP("style-src-attr")}}
- {{CSP("worker-src")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Fetch-Richtlinie](/de/docs/Glossary/Fetch_directive)</td>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `default-src`-Richtlinie zugelassen werden:

```http
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Quellen

`<source>` kann jeder der in [CSP-Quellenwerte](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#sources) aufgeführten Werte sein.

Beachten Sie, dass diese gleichen Werte in allen [Fetch-Richtlinien](/de/docs/Glossary/fetch_directive) (und einer [Anzahl anderer Richtlinien](/de/docs/Web/HTTP/Headers/Content-Security-Policy/Sources#relevant_directives)) verwendet werden können.

## Beispiele

### Keine Vererbung mit default-src

Wenn andere Direktiven angegeben sind, beeinflusst `default-src` sie nicht. Der folgende Header:

```http
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

ist das gleiche wie:

```http
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

### Firefox `default-src: none` SVG-Sprite-Blockierungsproblem

CSP-Richtlinien empfehlen oft, mit `default-src 'none'` zu beginnen, um alle Ressourcenladevorgänge zu sperren, und dann weitere Direktiven hinzuzufügen, um die Richtlinie zu erweitern, sodass Sie nur die benötigten Ressourcen laden können. Zum Beispiel, um nur das Laden gleichnamiger Bilder zu erlauben:

```http
Content-Security-Policy: default-src 'none'; img-src 'self'
```

Es gibt jedoch ein Problem dabei. Wenn Sie SVG-Sprites, die in externen Dateien definiert sind, über das [`<use>`](/de/docs/Web/SVG/Element/use)-Element einbetten, zum Beispiel:

```svg
<svg>
  <use href="/images/icons.svg#icon"/>
</svg>
```

werden Ihre SVG-Bilder in Firefox blockiert, wenn Sie eine `default-src 'none'`-Richtlinie festgelegt haben. Firefox behandelt das SVG nicht als eingebettetes Bild wie andere Browser, daher ermöglicht `img-src 'self'` nicht, dass sie geladen werden. Sie müssen `default-src 'self'` verwenden, wenn Sie möchten, dass Ihre externen Sprites in Firefox geladen werden (siehe [Bug 1773976](https://bugzilla.mozilla.org/show_bug.cgi?id=1773976) und [dieses CSP-Spezifikationsproblem](https://github.com/w3c/webappsec-csp/issues/199) für weitere Informationen).

Alternativ, wenn die `default-src 'none'`-Richtlinie eine harte Anforderung ist, können Sie die SVG-Sprites inline in die HTML-Seite einfügen:

```html
<body>
  <svg style="display: none">
    <symbol id="icon" viewBox="0 0 24 24">
      <path d="…" />
    </symbol>
  </svg>
  …
  <svg>
    <use href="#icon" />
  </svg>
</body>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- CSP-Direktiven (<https://www.w3.org/TR/CSP/#csp-directives>):

  - [Fetch-Richtlinie](/de/docs/Glossary/Fetch_directive)
  - [Dokumentrichtlinie](/de/docs/Glossary/Document_directive)
  - [Navigationsrichtlinie](/de/docs/Glossary/Navigation_directive)
  - [Berichtsrichtlinie](/de/docs/Glossary/Reporting_directive)
  - [`upgrade-insecure-requests`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests)
  - [`block-all-mixed-content`](/de/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content)
