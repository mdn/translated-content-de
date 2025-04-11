---
title: Referrer-Policy
slug: Web/HTTP/Reference/Headers/Referrer-Policy
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTTPSidebar}}

Der HTTP-**`Referrer-Policy`**-{{Glossary("response_header", "Antwort-Header")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) bei Anfragen enthalten sein sollen.
Abgesehen vom HTTP-Header können Sie [diese Richtlinie in HTML festlegen](#integration_mit_html).

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
  - : Der {{HTTPHeader("Referer")}}-Header wird weggelassen: gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Sendet den {{Glossary("origin", "Origin")}}, Pfad und die Abfragezeichenfolge in {{HTTPHeader("Referer")}}, wenn das Protokollsicherheitsniveau gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht bei Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Sendet nur den {{Glossary("origin", "Origin")}} im {{HTTPHeader("Referer")}}-Header.
    Zum Beispiel sendet ein Dokument unter `https://example.com/page.html` den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Bei Anfragen gleichen Ursprungs ({{Glossary("Same-origin_policy", "same-origin")}}) zum gleichen Protokollniveau (HTTP→HTTP, HTTPS→HTTPS) wird der {{Glossary("origin", "Origin")}}, Pfad und die Abfragezeichenfolge gesendet. Senden Sie nur den Origin für Anfragen über Ursprungsgrenzen hinweg und Anfragen an weniger sichere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Sendet den {{Glossary("origin", "Origin")}}, Pfad und die Abfragezeichenfolge für Anfragen gleichen Ursprungs ({{Glossary("Same-origin_policy", "same-origin")}}). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht bei Anfragen über Ursprungsgrenzen hinweg.
- `strict-origin`
  - : Sendet nur den Origin, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)

  - : Sendet den Origin, Pfad und die Abfragezeichenfolge bei Anfragen gleichen Ursprungs. Bei Anfragen über Ursprungsgrenzen hinweg wird nur der Origin gesendet, wenn das Protokollsicherheitsniveau gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie festgelegt ist oder der angegebene Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Zuvor war die Standardeinstellung `no-referrer-when-downgrade`.

- `unsafe-url`

  - : Sendet den Origin, Pfad und die Abfragezeichenfolge bei jeder Anforderung, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell vertrauliche Informationen von HTTPS-Ressourcen-URLs an unsichere Ursprünge lecken. Prüfen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können Referrer-Richtlinien auch innerhalb von HTML festlegen. Beispielsweise können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [Name](/de/docs/Web/HTML/Reference/Elements/meta#name) von `referrer` setzen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy`-Attribut auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, oder {{HTMLElement("link")}}-Elementen spezifizieren, um Referrer-Richtlinien für einzelne Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer`-[Linkbeziehung](/de/docs/Web/HTML/Reference/Attributes/rel) auf `a`-, `area`- oder `link`-Elementen setzen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben dargestellt, wird die `noreferrer`-Linkbeziehung ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element festlegen, sollte sie _mit_ einem Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abrufen, die in Stylesheets referenziert sind. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy`-HTTP-Header in der Antwort des CSS-Stylesheets überschrieben.
- Für {{HTMLElement("style")}}-Elemente oder [`style`-Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des Eigentümerdokuments verwendet.

## Beispiele

### `no-referrer`

| Von Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _irgendwohin_ | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Von Dokument                | Navigation zu                   | Verwendeter Referrer       |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(kein Referrer)_          |
| **http**://example.com/page | _irgendwohin_                   | `http://example.com/page`  |

### `origin`

| Von Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _irgendwohin_ | `https://example.com/` |

### `origin-when-cross-origin`

| Von Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com/page     | `https://example.com/`     |

### `same-origin`

| Von Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | _(kein Referrer)_          |

### `strict-origin`

| Von Dokument                | Navigation zu          | Verwendeter Referrer   |
| --------------------------- | ---------------------- | ---------------------- |
| `https://example.com/page`  | `https://mozilla.org`  | `https://example.com/` |
| `https://example.com/page`  | **http**://example.com | _(kein Referrer)_      |
| **http**://example.com/page | _irgendwohin_          | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Von Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Von Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _irgendwohin_ | `https://example.com/page?q=123` |

### Eine Fallback-Richtlinie spezifizieren

Wenn Sie eine Fallback-Richtlinie spezifizieren möchten, falls die gewünschte Richtlinie nicht ausreichend von Browsern unterstützt wird, verwenden Sie eine durch Kommas getrennte Liste mit der gewünschten Richtlinie als letzte:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

Im obigen Szenario wird `no-referrer` nur verwendet, wenn der Browser die `strict-origin-when-cross-origin`-Richtlinie nicht unterstützt.

> [!NOTE]
> Das Spezifizieren mehrerer Werte wird nur im `Referrer-Policy`-HTTP-Header unterstützt und nicht im `referrerpolicy`-Attribut.

## Browserspezifische Einstellungen

### Firefox-Einstellungen

Sie können die _Standard_-Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Präferenzenamen sind versionsspezifisch:

- Firefox-Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox-Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen akzeptieren den gleichen Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Security > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- Wenn Sie [Fetch](/de/docs/Web/API/Fetch_API) verwenden: [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [HTTP-Referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- [Strengere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
