---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{HTTPSidebar}}

Der **`Referrer-Policy`** {{glossary("HTTP header")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) bei Anfragen enthalten sein sollen. Abgesehen vom HTTP-Header können Sie diese Richtlinie auch [in HTML setzen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
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
> Der ursprüngliche Header-Name {{HTTPHeader("Referer")}} ist ein Rechtschreibfehler des Wortes "referrer". Der `Referrer-Policy`-Header teilt diesen Rechtschreibfehler nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird weggelassen: Gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{glossary("origin")}}, Pfad und die Abfragezeichenfolge im {{HTTPHeader("Referer")}}, wenn die Sicherheitsebene des Protokolls gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{glossary("origin")}} im {{HTTPHeader("Referer")}}-Header.
    Zum Beispiel sendet ein Dokument bei `https://example.com/page.html` den Referrer `https://example.com/`.
- `origin-when-cross-origin`
  - : Bei derselben Protokollebene (HTTP→HTTP, HTTPS→HTTPS) bei einer {{glossary("Same-origin_policy", "same-origin")}}-Anfrage senden Sie den {{glossary("origin")}}, Pfad und die Abfragezeichenfolge. Senden Sie nur den Origin für Cross-Origin-Anfragen und Anfragen an weniger sichere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{glossary("origin")}}, Pfad und die Abfragezeichenfolge für {{glossary("Same-origin_policy", "same-origin")}}-Anfragen. Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Cross-Origin-Anfragen.
- `strict-origin`
  - : Senden Sie nur den Origin, wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)

  - : Senden Sie den Origin, Pfad und die Abfragezeichenfolge bei einer Same-Origin-Anfrage. Für Cross-Origin-Anfragen senden Sie den Origin (nur) wenn die Sicherheitsebene des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben wird oder wenn der angegebene Wert ungültig ist (siehe Spezifikationsänderung [November 2020](https://github.com/whatwg/fetch/pull/1066)). Zuvor war die Standardrichtlinie `no-referrer-when-downgrade`.

- `unsafe-url`

  - : Senden Sie den Origin, Pfad und die Abfragezeichenfolge bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell-private Informationen von HTTPS-Ressourcen-URLs zu unsicheren Ursprungspunkten weitergeben. Prüfen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können auch Referrer-Richtlinien innerhalb von HTML festlegen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` festlegen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy`-Attribut auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}} oder {{HTMLElement("link")}}-Elementen angeben, um Referrer-Richtlinien für einzelne Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer`- [Linkrelation](/de/docs/Web/HTML/Attributes/rel) auf einem `a`, `area` oder `link`-Element festlegen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben gezeigt, wird die `noreferrer`-Linkrelation ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element festlegen, sollte sie _mit_ Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abrufen, die in Stylesheets referenziert werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), sofern sie nicht durch einen `Referrer-Policy` HTTP-Header in der Antwort des CSS-Stylesheets überschrieben wird.
- Für {{HTMLElement("style")}}-Elemente oder [`style`-Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des Eigentümerdokuments verwendet.

## Beispiele

### `no-referrer`

| Vom Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _irgendwohin_ | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `origin`

| Vom Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _irgendwohin_ | `https://example.com/` |

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
| **http**://example.com/page | _irgendwohin_          | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Vom Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Vom Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _irgendwohin_ | `https://example.com/page?q=123` |

### Fallback-Richtlinie angeben

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie nicht ausreichend von Browsern unterstützt wird, verwenden Sie eine durch Kommas getrennte Liste, wobei die gewünschte Richtlinie zuletzt angegeben wird:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In dem oben genannten Szenario wird `no-referrer` nur verwendet, wenn der Browser die Richtlinie `strict-origin-when-cross-origin` nicht unterstützt.

> [!NOTE]
> Die Angabe mehrerer Werte wird nur im `Referrer-Policy` HTTP-Header unterstützt und nicht im `referrerpolicy`-Attribut.

## Browser-spezifische Präferenzen/Einstellungen

### Firefox-Einstellungen

Sie können die _Standard_-Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox-Version 59 und höher: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox-Versionen 53 bis 58: `network.http.referer.userControlPolicy`

All diese Einstellungen verwenden den gleichen Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- [HTTP-Referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- Bei Verwendung von [Fetch](/de/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [Stärkere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
