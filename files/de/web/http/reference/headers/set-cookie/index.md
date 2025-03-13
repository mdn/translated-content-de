---
title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten in derselben Antwort mehrere `Set-Cookie` Header gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code den Zugriff auf den `Set-Cookie` Header, wie es von der Fetch-Spezifikation gefordert wird, die `Set-Cookie` als [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der aus jeder Antwort herausgefiltert werden muss, die dem Frontend-Code zugänglich gemacht wird.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie` Header in der Antwort des Servers, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Sie Anmeldeinformationen einbinden können.

Weitere Informationen finden Sie im Leitfaden [Using HTTP cookies](/de/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}</th>
      <td>Ja</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Set-Cookie: <cookie-name>=<cookie-value>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<number>
Set-Cookie: <cookie-name>=<cookie-value>; Partitioned
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure

Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Strict
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=Lax
Set-Cookie: <cookie-name>=<cookie-value>; SameSite=None; Secure

// Multiple attributes are also possible, for example:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## Attribute

- `<cookie-name>=<cookie-value>`

  - : Definiert den Cookienamen und seinen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten, mit Ausnahme von: Steuerzeichen ({{Glossary("ASCII", "ASCII")}} Zeichen 0 bis 31 und ASCII Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in doppelte Anführungszeichen gesetzt werden und alle US-ASCII-Zeichen außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, doppelte Anführungszeichen, Kommas, Semikolons und Backslashes enthalten.

    **Codierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Percent-Encoding")}} auf Cookie-Werten durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Das Prozent-Codierung hilft, die Anforderungen der für `<cookie-value>` erlaubten Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (der Bindestrich ist Teil des Präfixes), müssen mit dem `secure` Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an einen anderen Host.
    > Sie müssen mit dem `secure` Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keinen Domainwert angeben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain oder eine Domain höherer Ordnung (es sei denn, es handelt sich um ein öffentliches Suffix) kann als Wert gesetzt werden. Das Setzen der Domain macht das Cookie für diese Domain sowie alle ihre Subdomains verfügbar.

    Wenn weggelassen, ist dieser Wert standardmäßig der Host der aktuellen Dokument-URL, ohne Subdomains.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrere Host-/Domainwerte sind _nicht_ erlaubt, aber wenn eine Domain \_angegeben ist, werden Subdomains immer eingeschlossen.

- `Expires=<datum>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumstempel an. Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungs-Cookie**. Eine Sitzung endet, wenn der Client heruntergefahren wird, nach dem das Sitzungscookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungs-Wiederherstellungs_-Funktion, die alle Tabs speichert und sie bei der nächsten Nutzung des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Das `Expires` Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die sich von der des Client-Browsers unterscheiden kann. Firefox und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um den Zeitunterschied auszugleichen, und speichern und löschen Cookies basierend auf der vom Server vorgesehenen Zeit.
    Die Anpassung für die Zeitabweichung wird aus dem Wert des {{httpheader("DATE")}} Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut analysiert werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}

  - : Verhindert, dass JavaScript das Cookie beispielsweise über die [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft abruft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, immer noch mit JavaScript-initiierten Anfragen gesendet wird, zum Beispiel beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mindert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<nummer>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden bis zum Ablauf des Cookies an. Eine Null oder negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie unter Verwendung von partitioniertem Speicher gespeichert werden soll. Beachten Sie, dass wenn dies gesetzt ist, auch die [`Secure` Direktive](#secure) gesetzt sein muss. Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der in der angeforderten URL vorhanden sein _muss_, damit der Browser den `Cookie` Header sendet.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnistrennzeichen interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,

    - werden die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` alle passen.
    - werden die Anforderungspfade `/`, `/docsets`, `/fr/docs` nicht passen.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Steuert, ob ein Cookie mit domainübergreifenden Anfragen gesendet wird, und bietet so einen gewissen Schutz vor Cross-Site-Request-Forgery-Angriffen ({{Glossary("CSRF", "CSRF")}}).

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für Anfragen von derselben Seite sendet, also für Anfragen, die von derselben Seite stammen, die das Cookie gesetzt hat.
        Wenn eine Anfrage von einer anderen Domain oder einem anderen Schema stammt (auch mit derselben Domain), werden keine Cookies mit dem `SameSite=Strict` Attribut gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie bei domainübergreifenden Anfragen, wie z.B. Anfragen zum Laden von Bildern oder Frames, nicht gesendet wird, aber gesendet wird, wenn ein Benutzer von einer externen Seite auf die Ursprungsseite navigiert (z.B. wenn er einem Link folgt).
        Dies ist das Standardverhalten, wenn das `SameSite` Attribut nicht angegeben ist.

        > [!WARNING]
        > Nicht alle Browser setzen `SameSite=Lax` standardmäßig.
        > Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

    - `None`

      - : Bedeutet, dass der Browser das Cookie sowohl bei domainübergreifenden als auch bei gleichseitigen Anfragen sendet.
        Das `Secure` Attribut muss ebenfalls gesetzt werden, wenn dieser Wert verwendet wird, wie z.B. `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure) Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass unsichere Seiten (`http:`) keine Cookies mit der `Secure` Direktive setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit dem `SameSite=None; Secure` Attribut, die nicht auch das [`Partitioned`](#partitioned) Attribut haben, können in zukünftigen Browserversionen in domainübergreifenden Kontexten blockiert werden. Dieses Verhalten schützt Benutzerdaten vor domainübergreifendem Tracking. Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) und [Third-party cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:` Schema erstellt wird (außer auf localhost), und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}} Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten etc.) verhindert.
    > Cookies mit diesem Attribut können weiterhin entweder durch Zugriff auf die Festplatte des Clients oder von JavaScript gelesen/geändert werden, wenn das `HttpOnly` Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure` Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure` Attribut von localhost gesetzt wird.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie nicht das `Expires` oder `Max-Age` Attribut angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden zu einem bestimmten Datum (`Expires`) oder nach einem bestimmten Zeitraum (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die den Server, der es gesetzt hat, nicht umfasst, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bedienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen, die mit `__Secure-` oder `__Host-` vorangestellt sind, können nur verwendet werden, wenn sie mit dem `secure` Attribut von einer sicheren (HTTPS) Quelle gesetzt sind.

Zusätzlich müssen Cookies mit dem `__Host-` Präfix einen Pfad von `/` haben (bedeutet jeden Pfad beim Host) und dürfen kein `Domain` Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Sicherheitsmaßnahmen verlassen, und Cookies mit Präfixen werden immer akzeptiert.

```http
// Both accepted when from a secure origin (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Rejected due to missing Secure attribute
Set-Cookie: __Secure-id=1

// Rejected due to the missing Path=/ attribute
Set-Cookie: __Host-id=1; Secure

// Rejected due to setting a Domain
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
```

### Partitioniertes Cookie

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Außerdem wird empfohlen, das `__Host` Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
