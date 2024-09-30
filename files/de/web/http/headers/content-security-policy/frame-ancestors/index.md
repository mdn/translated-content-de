---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive gibt gültige Eltern an, die eine Seite mit {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

Wenn diese Direktive auf `'none'` gesetzt wird, ähnelt dies der {{HTTPHeader("X-Frame-Options")}}`: deny` (welches auch in älteren Browsern unterstützt wird).

> **Note:** **`frame-ancestors`** ermöglicht es Ihnen anzugeben, welche Quellseite eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, welches es ermöglicht, anzugeben, von wo aus iframes in einer Seite geladen werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>[Navigationsdirektive](/de/docs/Glossary/Navigation_directive)</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn diese nicht gesetzt ist, ist alles erlaubt.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}
        Element nicht unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `frame-ancestors`-Richtlinie festgelegt werden:

```http
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <space separated list of sources>;
```

### Quellen

\<source> kann eine der folgenden sein:

> [!NOTE]
> Die Syntax der `frame-ancestors`-Direktive ähnelt einer Quellenliste anderer Direktiven (z.B. {{CSP("default-src")}}), erlaubt aber beispielsweise nicht `'unsafe-eval'` oder `'unsafe-inline'`. Sie wird auch nicht auf eine `default-src`-Einstellung zurückfallen. Nur die unten aufgelisteten Quellen sind erlaubt:

- \<host-source>

  - : Internet-Hosts nach Name oder IP-Adresse sowie ein optionales [URL](/de/docs/Glossary/URL)-Schema und/oder eine Portnummer, getrennt durch Leerzeichen. Die Adresse der Seite kann ein optionales führendes Wildcard (das Sternchenzeichen, `'*'`) enthalten, und Sie können ein Wildcard (wiederum `'*'`) als Portnummer verwenden, was bedeutet, dass alle legalen Ports für die Quelle gültig sind. Einzelne Anführungszeichen um den Host sind nicht erlaubt.
    Beispiele:

    - `http://*.example.com`: Stimmt mit allen Versuchen überein, von einer beliebigen Subdomain von example.com unter Verwendung des `http:` URL-Schemas zu laden.
    - `mail.example.com:443`: Stimmt mit allen Versuchen überein, auf Port 443 auf mail.example.com zuzugreifen.
    - `https://store.example.com`: Stimmt mit allen Versuchen überein, auf store.example.com unter Verwendung von `https:` zuzugreifen.

    > [!WARNING]
    > Wenn kein URL-Schema für eine `host-source` angegeben ist und das iframe von einer `https` URL geladen wird, muss die URL für die Seite, die das iframe lädt, ebenfalls `https` sein, gemäß dem Abschnitt [Entspricht URL ausdrücklichem Treffer im Ursprung mit Umleitungsanzahl?](https://w3c.github.io/webappsec-csp/#match-url-to-source-expression) der CSP-Spezifikation.

- \<scheme-source>

  - : Ein Schema wie `http:` oder `https:`. Der Doppelpunkt ist erforderlich und das Schema sollte nicht in Anführungszeichen gesetzt werden. Sie können auch Datenschemata angeben (nicht empfohlen).

    - `data:` Erlaubt [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle zu verwenden. _Dies ist unsicher; ein Angreifer kann auch beliebige `data:` URLs injizieren. Verwenden Sie diese sparsam und auf keinen Fall für Skripte._
    - `mediastream:` Erlaubt [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle.
    - `blob:` Erlaubt [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle zu verwenden.
    - `filesystem:` Erlaubt [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle.

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer. Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen `blob` und `filesystem` ausdrücklich aus Quellenrichtlinien aus. Websites, die diese Inhaltstypen zulassen müssen, können sie mit dem Datenattribut angeben.
- `'none'`
  - : Bezieht sich auf die leere Menge; das heißt, keine URLs stimmen überein. Die einfachen Anführungszeichen sind erforderlich.

## Beispiele

```http
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;

Content-Security-Policy: frame-ancestors 'self' https://example.org https://example.com https://store.example.com;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
- {{CSP("frame-src")}} CSP
