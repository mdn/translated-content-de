---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{HTTPSidebar}}

Die HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive gibt gültige Eltern an, die eine Seite mittels {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

Die Einstellung dieser Direktive auf `'none'` ist ähnlich wie {{HTTPHeader("X-Frame-Options")}}`: deny` (was auch in älteren Browsern unterstützt wird).

> **Hinweis:** **`frame-ancestors`** ermöglicht es Ihnen anzugeben, welche übergeordnete Quelle eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, das angibt, von wo iframes in einer Seite geladen werden dürfen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">Direktivart</th>
      <td>{{Glossary("Navigation directive")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} Fallback</th>
      <td>Nein. Wenn dies nicht festgelegt ist, ist alles erlaubt.</td>
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

Für die `frame-ancestors`-Richtlinie können ein oder mehrere Quellen festgelegt werden:

```http
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <space separated list of sources>;
```

### Quellen

\<source> kann eines der folgenden sein:

> [!NOTE]
> Die Syntax der `frame-ancestors`-Direktive ähnelt einer Quellenliste anderer Direktiven (z.B. {{CSP("default-src")}}), erlaubt jedoch z.B. nicht `'unsafe-eval'` oder `'unsafe-inline'`. Es erfolgt auch kein Fallback auf eine `default-src`-Einstellung. Nur die unten aufgeführten Quellen sind erlaubt:

- \<host-source>

  - : Internet-Hosts nach Namen oder IP-Adresse, sowie optionales {{Glossary("URL")}}-Schema und/oder Portnummer, durch Leerzeichen getrennt. Die Adresse der Site kann ein optionales vorangestelltes Wildcard (das Sternzeichen `'*'`) enthalten, und Sie können ein Wildcard (wieder `'*'`) als Portnummer verwenden, was bedeutet, dass alle legalen Ports für die Quelle gültig sind. Einzelne Anführungszeichen um den Host sind nicht erlaubt.
    Beispiele:

    - `http://*.example.com`: Entspricht allen Versuchen, von einem beliebigen Subdomain von example.com mit dem `http:` URL-Schema zu laden.
    - `mail.example.com:443`: Entspricht allen Versuchen, auf Port 443 auf mail.example.com zuzugreifen.
    - `https://store.example.com`: Entspricht allen Versuchen, auf store.example.com mit `https:` zuzugreifen.

    > [!WARNING]
    > Wenn für eine `host-source` kein URL-Schema angegeben ist und das iframe von einer `https`-URL geladen wird, muss auch die URL für die Seite, die das iframe lädt, `https` sein, gemäß dem Abschnitt [Does URL match expression in origin with redirect count?](https://w3c.github.io/webappsec-csp/#match-url-to-source-expression) der CSP-Spezifikation.

- \<scheme-source>

  - : Ein Schema wie `http:` oder `https:`. Der Doppelpunkt ist erforderlich und das Schema sollte nicht in Anführungszeichen stehen. Sie können auch Datenschemata angeben (nicht empfohlen).

    - `data:` Erlaubt [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquellen zu verwenden. _Dies ist unsicher; ein Angreifer kann auch beliebige `data:` URLs einspeichern. Verwenden Sie dies sparsam und auf keinen Fall für Skripte._
    - `mediastream:` Erlaubt [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquellen zu verwenden.
    - `blob:` Erlaubt [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquellen zu verwenden.
    - `filesystem:` Erlaubt [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquellen zu verwenden.

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument bereitgestellt wird, einschließlich des gleichen URL-Schemas und der Portnummer. Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen `blob` und `filesystem` spezifisch von Quellendirektiven aus. Webseiten, die diese Inhaltstypen zulassen müssen, können sie mit dem Datenattribut angeben.
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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("X-Frame-Options")}}
- {{CSP("frame-src")}} CSP
