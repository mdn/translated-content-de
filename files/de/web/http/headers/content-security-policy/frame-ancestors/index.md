---
title: "CSP: frame-ancestors"
slug: Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{HTTPSidebar}}

Die HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** Direktive spezifiziert gültige Eltern, die eine Seite mithilfe von {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, oder {{HTMLElement("embed")}} einbetten dürfen.

Das Setzen dieser Direktive auf `'none'` ist ähnlich wie {{HTTPHeader("X-Frame-Options")}}`: deny` (was auch in älteren Browsern unterstützt wird).

> **Note:** **`frame-ancestors`** erlaubt es Ihnen, anzugeben, welche übergeordnete Quelle eine Seite einbetten darf.
> Dies unterscheidet sich von **`frame-src`**, das angibt, woher iframes in einer Seite geladen werden dürfen.

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
      <th scope="row">{{CSP("default-src")}} Rückfall</th>
      <td>Nein. Wenn Sie dies nicht setzen, ist alles erlaubt.</td>
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

Eine oder mehrere Quellen können für die `frame-ancestors` Richtlinie gesetzt werden:

```http
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <space separated list of sources>;
```

### Quellen

\<source> kann eine der folgenden sein:

> [!NOTE]
> Die Syntax der `frame-ancestors` Direktive ist ähnlich einer Quellliste anderer Direktiven (z. B. {{CSP("default-src")}}), erlaubt jedoch beispielsweise kein `'unsafe-eval'` oder `'unsafe-inline'`. Es wird auch nicht auf eine `default-src` Einstellung zurückfallen. Nur die unten aufgeführten Quellen sind erlaubt:

- \<host-source>

  - : Internet-Hosts nach Name oder IP-Adresse sowie ein optionales [URL](/de/docs/Glossary/URL) Schema und/oder Portnummer, getrennt durch Leerzeichen. Die Adresse der Seite kann ein optionales führendes Wildcard (das Sternchen-Zeichen, `'*'`) enthalten, und Sie können ein Wildcard (wiederum, `'*'`) als die Portnummer verwenden, was bedeutet, dass alle gültigen Ports für die Quelle erlaubt sind. Einzelne Anführungszeichen um den Host sind nicht erlaubt.
    Beispiele:

    - `http://*.example.com`: Passt auf alle Versuche, von irgendeinem Subdomain von example.com unter Verwendung des `http:` URL Schemas zu laden.
    - `mail.example.com:443`: Passt auf alle Versuche, auf Port 443 auf mail.example.com zuzugreifen.
    - `https://store.example.com`: Passt auf alle Versuche, auf store.example.com unter Verwendung von `https:` zuzugreifen.

    > [!WARNING]
    > Wenn für eine `host-source` kein URL-Schema angegeben ist und das iframe von einer `https` URL geladen wird, muss die URL für die Seite, die das iframe lädt, ebenfalls `https` sein, gemäß dem Abschnitt [Übereinstimmt URL-Ausdruck im Ursprung mit Umleitungszahl?](https://w3c.github.io/webappsec-csp/#match-url-to-source-expression) der CSP-Spezifikation.

- \<scheme-source>

  - : Ein Schema wie `http:` oder `https:`. Der Doppelpunkt ist erforderlich und das Schema sollte nicht in Anführungszeichen gesetzt werden. Sie können auch Datenschemen angeben (nicht empfohlen).

    - `data:` Erlaubt [`data:` URLs](/de/docs/Web/URI/Schemes/data) als Inhaltsquelle verwendet zu werden. _Dies ist unsicher; ein Angreifer kann auch beliebige `data:` URLs injizieren. Verwenden Sie dies sparsam und definitiv nicht für Skripte._
    - `mediastream:` Erlaubt [`mediastream:` URIs](/de/docs/Web/API/Media_Capture_and_Streams_API) als Inhaltsquelle verwendet zu werden.
    - `blob:` Erlaubt [`blob:` URIs](/de/docs/Web/API/Blob) als Inhaltsquelle verwendet zu werden.
    - `filesystem:` Erlaubt [`filesystem:` URIs](/de/docs/Web/API/FileSystem) als Inhaltsquelle verwendet zu werden.

- `'self'`
  - : Bezieht sich auf den Ursprung, von dem das geschützte Dokument serviert wird, einschließlich des gleichen URL-Schemas und der Portnummer. Sie müssen die einfachen Anführungszeichen einschließen. Einige Browser schließen `blob` und `filesystem` spezifisch von Quell-Direktiven aus. Seiten, die diese Inhaltstypen erlauben müssen, können sie unter Verwendung des Data-Attributs specifizieren.
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
