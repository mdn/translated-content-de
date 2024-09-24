---
title: Referrer-Richtlinie
slug: Web/HTTP/Headers/Referrer-Policy
l10n:
  sourceCommit: ab007c32f6ef1f5d426f8ff806c67652692e4108
---

{{HTTPSidebar}}

Der **`Referrer-Policy`** {{glossary("HTTP header")}} steuert, wie viele [Referrer-Informationen](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}}-Header) in Anfragen enthalten sein sollten. Abgesehen vom HTTP-Header können Sie [diese Richtlinie in HTML festlegen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
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
> Der ursprüngliche Headername {{HTTPHeader("Referer")}} ist eine Falschschreibung des Wortes "referrer". Der `Referrer-Policy`-Header teilt diesen Schreibfehler nicht.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}}-Header wird weggelassen: Gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie die {{glossary("origin")}}, den Pfad und die Abfragezeichenfolge im {{HTTPHeader("Referer")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Anfragen an weniger sichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur die {{glossary("origin")}} im {{HTTPHeader("Referer")}}-Header.
    Zum Beispiel wird ein Dokument auf `https://example.com/page.html` den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Wenn Sie eine {{glossary("Same-origin_policy", "same-origin")}} Anfrage beim gleichen Protokolllevel (HTTP→HTTP, HTTPS→HTTPS) ausführen, senden Sie die {{glossary("origin")}}, den Pfad und die Abfragezeichenfolge. Senden Sie nur die Origin für Cross-Origin-Anfragen und Anfragen an weniger sichere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie die {{glossary("origin")}}, den Pfad und die Abfragezeichenfolge für {{glossary("Same-origin_policy", "same-origin")}} Anfragen. Senden Sie den {{HTTPHeader("Referer")}}-Header nicht für Cross-Origin-Anfragen.
- `strict-origin`
  - : Senden Sie nur die Origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)

  - : Senden Sie die Origin, Pfad und Abfragezeichenfolge bei einer Same-Origin-Anfrage. Für Cross-Origin-Anfragen senden Sie nur die Origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}}-Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben ist oder der bereitgestellte Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Früher war der Standard `no-referrer-when-downgrade`.

- `unsafe-url`

  - : Senden Sie die Origin, Pfad und Abfragezeichenfolge bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell private Informationen von HTTPS-Ressourcen-URLs an unsichere Ursprünge weitergeben. Überlegen Sie sorgfältig die Auswirkungen dieser Einstellung.

## Integration mit HTML

Sie können Referrer-Richtlinien auch in HTML festlegen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element festlegen, das einen [Name](/de/docs/Web/HTML/Element/meta#name) von `referrer` hat:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy` Attribut auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, oder {{HTMLElement("link")}} Elementen angeben, um Referrer-Richtlinien für einzelne Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer` [Linkrelation](/de/docs/Web/HTML/Attributes/rel) auf `a`, `area`, oder `link` Elementen festlegen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben zu sehen ist, wird die `noreferrer` Linkrelation ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}}-Element angeben, sollte sie _mit_ Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen laden, die in Stylesheets referenziert sind. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy` HTTP-Header in der Antwort des CSS Stylesheets überschrieben.
- Für {{HTMLElement("style")}}-Elemente oder [`style`-Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des Eigentümerdokuments verwendet.

## Beispiele

### `no-referrer`

| Aus Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _überall_     | _(kein Referrer)_      |

### `no-referrer-when-downgrade`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `origin`

| Aus Dokument               | Navigation zu | Verwendeter Referrer       |
| -------------------------- | ------------- | -------------------------- |
| `https://example.com/page` | _überall_     | `https://example.com/`     |

### `origin-when-cross-origin`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com/page     | `https://example.com/`     |

### `same-origin`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | _(kein Referrer)_          |

### `strict-origin`

| Aus Dokument                | Navigation zu         | Verwendeter Referrer       |
| --------------------------- | --------------------- | -------------------------- |
| `https://example.com/page`  | `https://mozilla.org` | `https://example.com/`     |
| `https://example.com/page`  | **http**://example.com | _(kein Referrer)_          |
| **http**://example.com/page | _überall_             | `http://example.com/`      |

### `strict-origin-when-cross-origin`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Aus Dokument                     | Navigation zu | Verwendeter Referrer               |
| -------------------------------- | ------------- | ---------------------------------- |
| `https://example.com/page?q=123` | _überall_     | `https://example.com/page?q=123`   |

### Eine Fallback-Richtlinie angeben

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie nicht ausreichend von Browsern unterstützt wird, verwenden Sie eine durch Kommas getrennte Liste, wobei die gewünschte Richtlinie zuletzt angegeben wird:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In diesem Szenario wird `no-referrer` nur verwendet, wenn der Browser die Richtlinie `strict-origin-when-cross-origin` nicht unterstützt.

> [!NOTE]
> Die Angabe mehrerer Werte wird nur im `Referrer-Policy` HTTP-Header unterstützt und nicht im `referrerpolicy` Attribut.

## Browser-spezifische Präferenzen/Einstellungen

### Firefox Präferenzen

Sie können die _Standard_- Referrer-Richtlinie in den Firefox-Einstellungen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen akzeptieren denselben Satz von Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- [HTTP Referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- Beim Verwenden von [Fetch](/de/docs/Web/API/Fetch_API): {{domxref("Request.referrerPolicy")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
- [Tight Control Over Your Referrers – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
