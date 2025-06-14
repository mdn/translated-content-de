---
title: Referrer-Policy header
short-title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: 0b8f00bb9ece33c6964eea886b2f7db8711d7b62
---

{{HTTPSidebar}}

Der HTTP **`Referrer-Policy`** {{Glossary("response_header", "Response-Header")}} steuert, wie viele Informationen über den [Referrer](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}} Header) in Anfragen enthalten sein sollen. Abgesehen vom HTTP-Header können Sie diese Richtlinie auch [in HTML setzen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
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
> Der Header-Name {{HTTPHeader("Referer")}} ist ein Schreibfehler des Wortes "referrer". Der `Referrer-Policy` Header teilt diesen Schreibfehler nicht.

## Richtlinien

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}} Header wird ausgelassen: gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{Glossary("origin", "Origin")}}, Pfad und die Abfragezeichenfolge im {{HTTPHeader("Referer")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}} Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{Glossary("origin", "Origin")}} im {{HTTPHeader("Referer")}} Header. Zum Beispiel wird ein Dokument unter `https://example.com/page.html` den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Bei einer {{Glossary("Same-origin_policy", "same-origin")}} Anfrage zum gleichen Protokoll-Level (HTTP→HTTP, HTTPS→HTTPS), senden Sie den {{Glossary("origin", "Origin")}}, Pfad und die Abfragezeichenfolge. Senden Sie nur den Origin für Cross-Origin-Anfragen und Anfragen an weniger sichere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{Glossary("origin", "Origin")}}, Pfad und die Abfragezeichenfolge für {{Glossary("Same-origin_policy", "same-origin")}} Anfragen. Senden Sie den {{HTTPHeader("Referer")}} Header nicht für Cross-Origin-Anfragen.
- `strict-origin`
  - : Senden Sie nur den Origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}} Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)

  - : Senden Sie den Origin, Pfad und die Abfragezeichenfolge bei einer same-origin Anfrage. Für Cross-Origin-Anfragen senden Sie nur den Origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}} Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder wenn der angegebene Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Vorher war die Standardrichtlinie `no-referrer-when-downgrade`.

- `unsafe-url`

  - : Senden Sie den Origin, Pfad und die Abfragezeichenfolge bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie wird potenziell private Informationen von HTTPS Ressourcen-URLs zu unsicheren Zielen weitergeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können Referrer-Richtlinien auch innerhalb von HTML setzen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}} Element mit einem [Namen](/de/docs/Web/HTML/Reference/Elements/meta/name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy` Attribut auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, oder {{HTMLElement("link")}} Elementen angeben, um Referrer-Richtlinien für individuelle Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer` [Link-Relation](/de/docs/Web/HTML/Reference/Attributes/rel) auf `a`, `area`, oder `link` Elementen festlegen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben gezeigt, wird die `noreferrer` Link-Relation ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}} Element angeben, sollte sie _mit_ einem Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen referenzieren, die aus Stylesheets geladen werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy` HTTP Header in der Antwort des CSS Stylesheets überschrieben.
- Für {{HTMLElement("style")}} Elemente oder [`style` Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des Besitzer-Dokuments verwendet.

## Beispiele

### `no-referrer`

| Vom Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _irgendwo_    | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Vom Dokument                | Navigation zu                   | Verwendeter Referrer       |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(kein Referrer)_          |
| **http**://example.com/page | _irgendwo_                      | `http://example.com/page`  |

### `origin`

| Vom Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _irgendwo_    | `https://example.com/` |

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
| **http**://example.com/page | _irgendwo_             | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Vom Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _irgendwo_    | `https://example.com/page?q=123` |

### Eine Fallback-Richtlinie angeben

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie nicht genügend Browserunterstützung hat, verwenden Sie eine durch Komma getrennte Liste, wobei die gewünschte Richtlinie zuletzt angegeben wird:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Im obigen Szenario wird `no-referrer` nur verwendet, wenn der Browser die `strict-origin-when-cross-origin` Richtlinie nicht unterstützt.

> [!NOTE]
> Das Spezifizieren mehrerer Werte wird nur im `Referrer-Policy` HTTP-Header unterstützt und nicht im `referrerpolicy` Attribut.

## Browserspezifische Einstellungen

### Firefox-Einstellungen

Sie können die _Standard_ Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Namen der Einstellungen sind versionsspezifisch:

- Firefox-Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox-Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen nehmen den gleichen Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- Beim Verwenden von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [HTTP Referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
