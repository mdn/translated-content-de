---
title: Referrer-Policy header
short-title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP **`Referrer-Policy`** {{Glossary("response_header", "Antwort-Header")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) in Anfragen enthalten sein sollten. Neben dem HTTP-Header können Sie [diese Richtlinie in HTML festlegen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

> [!NOTE]
> Der Header-Name {{HTTPHeader("Referer")}} ist eine falsche Schreibweise des Wortes "referrer". Der `Referrer-Policy`-Header teilt diesen Rechtschreibfehler nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird ausgelassen: Gesendete Anfragen enthalten keinerlei Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{Glossary("origin", "Ursprung")}}, Pfad und die Abfragezeichenfolge in {{HTTPHeader("Referer")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt oder verbessert wird (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{Glossary("origin", "Ursprung")}} im {{HTTPHeader("Referer")}}-Header. Beispielsweise sendet ein Dokument auf `https://example.com/page.html` den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Bei einer {{Glossary("Same-origin_policy", "gleichherkunftsbezogenen")}} Anfrage auf derselben Protokollebene (HTTP→HTTP, HTTPS→HTTPS) senden Sie den {{Glossary("origin", "Ursprung")}}, Pfad und die Abfragezeichenfolge. Senden Sie nur den Ursprung für Anfragen an fremde Ursprünge und Anfragen zu weniger sicheren Zielen (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{Glossary("origin", "Ursprung")}}, Pfad und die Abfragezeichenfolge für {{Glossary("Same-origin_policy", "gleichherkunftsbezogene")}} Anfragen. Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an fremde Ursprünge.
- `strict-origin`
  - : Senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)

  - : Senden Sie den Ursprung, Pfad und die Abfragezeichenfolge bei einer gleichherkunftsbezogenen Anfrage. Für Anfragen an fremde Ursprünge senden Sie nur den Ursprung, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder der angegebene Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Früher war `no-referrer-when-downgrade` der Standard.

- `unsafe-url`

  - : Senden Sie den Ursprung, Pfad und die Abfragezeichenfolge bei allen Anfragen, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell vertrauliche Informationen aus HTTPS-Ressourcen-URLs an unsichere Ursprünge weiterleiten. Überlegen Sie sorgfältig über die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können Referrer-Richtlinien auch in HTML festlegen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy`-Attribut an {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}} oder {{HTMLElement("link")}}-Elementen angeben, um Referrer-Richtlinien für einzelne Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer` [Link-Beziehung](/de/docs/Web/HTML/Reference/Attributes/rel) an `a`, `area` oder `link`-Elementen festlegen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben zu sehen ist, wird die `noreferrer`-Link-Beziehung ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element angeben, sollte sie _mit_ Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abrufen, die in Stylesheets referenziert werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), sofern sie nicht durch einen `Referrer-Policy`-HTTP-Header in der Antwort des CSS-Stylesheets überschrieben wird.
- Für {{HTMLElement("style")}}-Elemente oder [`style`-Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des eigenen Dokuments verwendet.

## Beispiele

### `no-referrer`

| Vom Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _überall_     | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Vom Dokument                | Navigation zu                   | Verwendeter Referrer       |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(kein Referrer)_          |
| **http**://example.com/page | _überall_                       | `http://example.com/page`  |

### `origin`

| Vom Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _überall_     | `https://example.com/` |

### `origin-when-cross-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com/page     | `https://example.com/`     |

### `same-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | _(kein Referrer)_          |

### `strict-origin`

| Vom Dokument                | Navigation zu          | Verwendeter Referrer   |
| --------------------------- | ---------------------- | ---------------------- |
| `https://example.com/page`  | `https://mozilla.org`  | `https://example.com/` |
| `https://example.com/page`  | **http**://example.com | _(kein Referrer)_      |
| **http**://example.com/page | _überall_              | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Vom Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _überall_     | `https://example.com/page?q=123` |

### Eine Fallback-Richtlinie festlegen

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie nicht umfassend genug von Browsern unterstützt wird, verwenden Sie eine durch Kommas getrennte Liste, wobei die gewünschte Richtlinie zuletzt angegeben wird:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In dem oben genannten Szenario wird `no-referrer` nur verwendet, wenn der Browser die `strict-origin-when-cross-origin`-Richtlinie nicht unterstützt.

> [!NOTE]
> Die Angabe mehrerer Werte wird nur im `Referrer-Policy`-HTTP-Header unterstützt, nicht im `referrerpolicy`-Attribut.

## Browser-spezifische Einstellungen

### Firefox-Einstellungen

Sie können die _standardmäßige_ Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen akzeptieren denselben Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- Bei Verwendung von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Gleichherkunftsrichtlinie](/de/docs/Web/Security/Same-origin_policy)
- [HTTP-Referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
