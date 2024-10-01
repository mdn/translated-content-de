---
title: Referrer-Policy
slug: Web/HTTP/Headers/Referrer-Policy
l10n:
  sourceCommit: 693540415a308c347897eff3b540b5716c52e366
---

{{HTTPSidebar}}

Der **`Referrer-Policy`** {{Glossary("HTTP_header", "HTTP-Header")}} legt fest, wie viele [Referrer-Informationen](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) (gesendet mit dem {{HTTPHeader("Referer")}} Header) mit Anfragen einbezogen werden sollen. Neben dem HTTP-Header können Sie [diese Richtlinie auch in HTML festlegen](#integration_mit_html).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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
> Der ursprüngliche Header-Name {{HTTPHeader("Referer")}} ist eine falsche Schreibweise des Wortes "referrer". Der `Referrer-Policy` Header teilt nicht diese Falschschreibung.

## Direktiven

- `no-referrer`
  - : Der {{HTTPHeader("Referer")}} Header wird weggelassen: Gesendete Anfragen enthalten keine Referrer-Informationen.
- `no-referrer-when-downgrade`
  - : Senden Sie den {{Glossary("origin", "Origin")}}, den Pfad und den Abfrage-String im {{HTTPHeader("Referer")}}, wenn das Sicherheitsniveau des Protokolls gleich bleibt oder sich verbessert (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}} Header nicht für Anfragen an unsichere Ziele (HTTPS→HTTP, HTTPS→file).
- `origin`
  - : Senden Sie nur den {{Glossary("origin", "Origin")}} im {{HTTPHeader("Referer")}} Header.
    Zum Beispiel wird ein Dokument unter `https://example.com/page.html` den Referrer `https://example.com/` senden.
- `origin-when-cross-origin`
  - : Beim Durchführen einer {{Glossary("Same-origin_policy", "same-origin")}} Anfrage auf demselben Protokoll-Level (HTTP→HTTP, HTTPS→HTTPS), senden Sie den {{Glossary("origin", "Origin")}}, den Pfad und den Abfrage-String. Senden Sie nur den Origin für Cross-Origin-Anfragen und Anfragen an unsicherere Ziele (HTTPS→HTTP).
- `same-origin`
  - : Senden Sie den {{Glossary("origin", "Origin")}}, den Pfad und den Abfrage-String für {{Glossary("Same-origin_policy", "same-origin")}} Anfragen. Senden Sie den {{HTTPHeader("Referer")}} Header nicht für Cross-Origin-Anfragen.
- `strict-origin`
  - : Senden Sie nur den Origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}} Header nicht an weniger sichere Ziele (HTTPS→HTTP).
- `strict-origin-when-cross-origin` (Standard)

  - : Senden Sie den Origin, Pfad und Abfrage-String bei einer Same-Origin-Anfrage. Für Cross-Origin-Anfragen senden Sie nur den Origin, wenn das Sicherheitsniveau des Protokolls gleich bleibt (HTTPS→HTTPS). Senden Sie den {{HTTPHeader("Referer")}} Header nicht an weniger sichere Ziele (HTTPS→HTTP).

    > [!NOTE]
    > Dies ist die Standardrichtlinie, wenn keine Richtlinie angegeben wird oder wenn der angegebene Wert ungültig ist (siehe Spezifikationsrevision [November 2020](https://github.com/whatwg/fetch/pull/1066)). Zuvor war der Standard `no-referrer-when-downgrade`.

- `unsafe-url`

  - : Senden Sie den Origin, Pfad und Abfrage-String bei jeder Anfrage, unabhängig von der Sicherheit.

    > [!WARNING]
    > Diese Richtlinie kann potenziell private Informationen von HTTPS-Ressourcen-URLs an unsichere Ursprünge weitergeben. Überdenken Sie die Auswirkungen dieser Einstellung sorgfältig.

## Integration mit HTML

Sie können auch Referrer-Richtlinien innerhalb von HTML festlegen. Zum Beispiel können Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}} Element mit einem [name](/de/docs/Web/HTML/Element/meta#name) von `referrer` setzen:

```html
<meta name="referrer" content="origin" />
```

Sie können das `referrerpolicy` Attribut auf {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("img")}}, {{HTMLElement("iframe")}}, {{HTMLElement("script")}}, oder {{HTMLElement("link")}} Elementen angeben, um Referrer-Richtlinien für einzelne Anfragen festzulegen:

```html
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternativ können Sie eine `noreferrer` [Link-Relation](/de/docs/Web/HTML/Attributes/rel) auf `a`, `area`, oder `link` Elementen setzen:

```html
<a href="http://example.com" rel="noreferrer">…</a>
```

> [!WARNING]
> Wie oben zu sehen, wird die `noreferrer` Link-Relation ohne Bindestrich geschrieben. Wenn Sie die Referrer-Richtlinie für das gesamte Dokument mit einem {{HTMLElement("meta")}} Element angeben, sollte es _mit_ Bindestrich geschrieben werden: `<meta name="referrer" content="no-referrer">`.

## Integration mit CSS

CSS kann Ressourcen abfragen, die in Stylesheets referenziert werden. Diese Ressourcen folgen ebenfalls einer Referrer-Richtlinie:

- Externe CSS-Stylesheets verwenden die Standardrichtlinie (`strict-origin-when-cross-origin`), es sei denn, sie wird durch einen `Referrer-Policy` HTTP-Header im Antwortkopf des CSS-Stylesheets überschrieben.
- Für {{HTMLElement("style")}} Elemente oder [`style` Attribute](/de/docs/Web/API/HTMLElement/style) wird die Referrer-Richtlinie des Besitzerdokuments verwendet.

## Beispiele

### `no-referrer`

| Aus Dokument               | Navigation zu | Verwendeter Referrer |
| -------------------------- | ------------- | -------------------- |
| `https://example.com/page` | _überall_     | _(kein Referrer)_    |

### `no-referrer-when-downgrade`

| Aus Dokument                | Navigation zu                   | Verwendeter Referrer       |
| --------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page`  | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page`  | `https://mozilla.org`           | `https://example.com/page` |
| `https://example.com/page`  | **http**://example.com          | _(kein Referrer)_          |
| **http**://example.com/page | _überall_                       | `http://example.com/page`  |

### `origin`

| Aus Dokument               | Navigation zu | Verwendeter Referrer   |
| -------------------------- | ------------- | ---------------------- |
| `https://example.com/page` | _überall_     | `https://example.com/` |

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

| Aus Dokument                | Navigation zu          | Verwendeter Referrer   |
| --------------------------- | ---------------------- | ---------------------- |
| `https://example.com/page`  | `https://mozilla.org`  | `https://example.com/` |
| `https://example.com/page`  | **http**://example.com | _(kein Referrer)_      |
| **http**://example.com/page | _überall_              | `http://example.com/`  |

### `strict-origin-when-cross-origin`

| Aus Dokument               | Navigation zu                   | Verwendeter Referrer       |
| -------------------------- | ------------------------------- | -------------------------- |
| `https://example.com/page` | `https://example.com/otherpage` | `https://example.com/page` |
| `https://example.com/page` | `https://mozilla.org`           | `https://example.com/`     |
| `https://example.com/page` | **http**://example.com          | _(kein Referrer)_          |

### `unsafe-url`

| Aus Dokument                     | Navigation zu | Verwendeter Referrer             |
| -------------------------------- | ------------- | -------------------------------- |
| `https://example.com/page?q=123` | _überall_     | `https://example.com/page?q=123` |

### Eine Fallback-Richtlinie angeben

Wenn Sie eine Fallback-Richtlinie angeben möchten, falls die gewünschte Richtlinie nicht ausreichend von Browsern unterstützt wird, verwenden Sie eine kommaseparierte Liste, wobei die gewünschte Richtlinie zuletzt angegeben wird:

```http
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In dem obigen Szenario wird `no-referrer` nur verwendet, wenn der Browser die `strict-origin-when-cross-origin` Richtlinie nicht unterstützt.

> [!NOTE]
> Mehrere Werte anzugeben wird nur im `Referrer-Policy` HTTP-Header unterstützt, nicht im `referrerpolicy` Attribut.

## Browserspezifische Präferenzen/Einstellungen

### Firefox-Präferenzen

Sie können die _Standard_-Referrer-Richtlinie in den Firefox-Präferenzen konfigurieren. Die Präferenznamen sind versionsspezifisch:

- Firefox Version 59 und später: `network.http.referer.defaultPolicy` (und `network.http.referer.defaultPolicy.pbmode` für private Netzwerke)
- Firefox Versionen 53 bis 58: `network.http.referer.userControlPolicy`

Alle diese Einstellungen akzeptieren denselben Satz an Werten: `0 = no-referrer`, `1 = same-origin`, `2 = strict-origin-when-cross-origin`, `3 = no-referrer-when-downgrade`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web-Sicherheit > Referer-Header: Datenschutz- und Sicherheitsbedenken](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
- [HTTP referer auf Wikipedia](https://en.wikipedia.org/wiki/HTTP_referer)
- Beim Gebrauch von [Fetch](/de/docs/Web/API/Fetch_API): [`Request.referrerPolicy`](/de/docs/Web/API/Request/referrerPolicy)
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
- [Engere Kontrolle über Ihre Referrer – Mozilla Security Blog](https://blog.mozilla.org/security/2015/01/21/meta-referrer/)
