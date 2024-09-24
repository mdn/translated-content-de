---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{HTTPSidebar}}

Die HTTP-Direktive {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** legt gültige Eltern fest, die eine Seite unter Verwendung von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}} oder {{HTMLElement("embed")}} einbetten dürfen.

Das Setzen dieser Direktive auf `'none'` ist ähnlich wie bei {{HTTPHeader("X-Frame-Options")}}`: deny` (was auch in älteren Browsern unterstützt wird).

> **Hinweis:** **`frame-ancestors`** ermöglicht es Ihnen festzulegen, welche übergeordnete Quelle eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, das es erlaubt zu spezifizieren, woher iframes in einer Seite geladen werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Art der Direktive</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn dies nicht festgelegt wird, ist alles erlaubt.</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}-Element
        nicht unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

Eine oder mehrere Quellen können für die `frame-ancestors` Richtlinie festgelegt werden:

```http
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <space separated list of sources>;
```

### Quellen

\<source> kann eine der folgenden sein:

> [!NOTE]
> Die Syntax der `frame-ancestors` Direktive ähnelt einer Quellenliste anderer Direktiven (z.B. {{CSP("default-src")}}), erlaubt jedoch zum Beispiel nicht `'unsafe-eval'` oder `'unsafe-inline'`. Es wird auch nicht auf eine `default-src` Einstellung zurückfallen. Nur die unten aufgeführten Quellen sind erlaubt:

- \<host-source>

  - : Internet-Hosts nach Namen oder IP-Adresse, sowie ein optionales {{Glossary("URL")}}-Schema und/oder eine Portnummer, getrennt durch Leerzeichen. Die Adresse der Seite kann ein optionales führendes Platzhalterzeichen (das Sternchen-Zeichen, `'*'`) enthalten, und Sie können einen Platzhalter (wiederum `'*'`) als Portnummer verwenden, was bedeutet, dass alle legalen Ports für die Quelle gültig sind. Einzelne Anführungszeichen um den Host sind nicht erlaubt.
    Beispiele:

    - `http://*.example.com`: Passt auf alle Versuche, von jedem Subdomain von example.com mit dem `http:` URL-Schema zu laden.
    - `mail.example.com:443`: Passt auf alle Zugriffe auf Port 443 auf mail.example.com.
    - `https://store.example.com`: Passt auf alle Versuche, store.example.com mit `https:` zu erreichen.

    > [!WARNING]
    > Wenn für eine `host-source` kein URL-Schema angegeben ist und das iframe von einer `https` URL geladen wird, muss die URL für die Seite, die das iframe lädt, ebenfalls `https` sein, gemäß dem Abschnitt [Does URL match expression in origin with redirect count?](https://w3c.github.io/webappsec-csp/#match-url-to-source-expression) der CSP-Spezifikation.

- \<scheme-source>

  - : Ein Schema wie `http:` oder `https:`. Der Doppelpunkt ist erforderlich und das Schema sollte nicht in Anführungszeichen gesetzt werden. Sie können auch Datenschemata angeben (nicht empfohlen).

    - `data:` Erlaubt [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle zu verwenden. _Dies ist unsicher; ein Angreifer kann auch beliebige `data:` URLs injizieren. Verwenden Sie dies sparsam und auf keinen Fall für Skripte._
    - `mediastream:` Erlaubt [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle zu verwenden.
    - `blob:` Erlaubt [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle zu verwenden.
    - `filesystem:` Erlaubt [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle zu verwenden.

- `'self'`
  - : Bezieht sich auf die Herkunft, von der das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer. Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen `blob` und `filesystem` ausdrücklich von den Quelle-Direktiven aus. Websites, die diese Inhaltstypen zulassen müssen, können sie mit dem Datenattribut angeben.
- `'none'`
  - : Bezieht sich auf die leere Menge; das heißt, es gibt keine übereinstimmenden URLs. Die einfachen Anführungszeichen sind erforderlich.

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
