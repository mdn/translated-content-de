---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: 783ffd9c1cf35421242e028a1b8743cf2b1918dd
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Set-Cookie`** wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, sodass der Benutzeragent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere **`Set-Cookie`**-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Code im Frontend vom Zugriff auf den `Set-Cookie`-Header, wie es die Fetch-Spezifikation verlangt, die `Set-Cookie` als einen [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jeder Antwort herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0), die Frontend-Code zugänglich ist.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder eine [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header im Server-Antwort, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Verwendung der Fetch API - Inklusive Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldeinformationen einbezogen werden.

Weitere Informationen finden Sie im Leitfaden über [Die Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}</th>
      <td>ja</td>
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

  - : Definiert den Cookie-Namen und dessen Wert. Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten, außer: Steuerzeichen ({{Glossary("ASCII", "ASCII")}} Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt werden und alle US-ASCII-Zeichen enthalten, außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Whitespace")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Codierung**: Viele Implementierungen verwenden {{Glossary("Percent-encoding", "Prozent-Codierung")}} für Cookie-Werte. Dies ist jedoch nicht von der RFC-Spezifikation vorgeschrieben. Die Prozent-Codierung hilft jedoch, die Anforderungen der für `<cookie-value>` zulässigen Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` (der Bindestrich ist Teil des Präfixes) beginnen, müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an einen anderen Host.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben, und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain kann als Wert gesetzt werden oder eine Domain höherer Ordnung, sofern es sich nicht um ein öffentliches Suffix handelt. Wenn die Domain gesetzt wird, wird das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar gemacht.

    Wird dieses Attribut weggelassen, wird standardmäßig der Host der aktuellen Dokument-URL ohne Subdomains verwendet.

    Entgegen früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrere Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben_ ist, sind die Subdomains immer einbezogen.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Stempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungs-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, wonach das Sitzungscookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungsfunktion_, die alle Tabs speichert und sie beim nächsten Gebrauch des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als wäre der Browser nie geschlossen worden.

    Wenn ein `Expires`-Datum gesetzt ist, ist die Frist relativ zum _Client_, auf dem das Cookie gesetzt wird, nicht zum Server.

- `HttpOnly` {{optional_inline}}

  - : Verbietet JavaScript den Zugriff auf das Cookie, beispielsweise über die [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, trotzdem mit JavaScript-initiierten Anfragen gesendet wird, zum Beispiel beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mildert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) ab.

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl wird das Cookie sofort ablaufen lassen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie mithilfe eines partitionierten Speichers gespeichert werden soll.
    Beachten Sie, dass in diesem Fall die [`Secure`-Richtlinie](#secure) ebenfalls gesetzt werden muss.
    Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der _vorhanden sein muss_ in der angeforderten URL, damit der Browser den `Cookie`-Header sendet.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnistrennzeichen interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,

    - stimmen die Pfadanfragen `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` überein.
    - die Pfadanfragen `/`, `/docsets`, `/fr/docs` stimmen nicht überein.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Steuert, ob ein Cookie mit bereichsübergreifenden Anfragen gesendet wird
    und bietet einen gewissen Schutz gegen Cross-Site-Request-Forgery-Angriffe ({{Glossary("CSRF", "CSRF")}}).

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur bei bereichsinternen Anfragen sendet, das heißt, Anfragen, die von derselben Site stammen, die das Cookie gesetzt hat.
        Wenn eine Anfrage von einer anderen Domain oder einem anderen Schema stammt (selbst mit derselben Domain), werden keine Cookies mit dem Attribut `SameSite=Strict` gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie nicht bei bereichsübergreifenden Anfragen gesendet wird, wie zum Beispiel bei Anfragen zum Laden von Bildern oder Frames, jedoch gesendet wird, wenn ein Benutzer von einer externen Seite auf die Ursprungsseite navigiert (zum Beispiel beim Folgen eines Links).
        Dies ist das Standardverhalten, wenn das `SameSite`-Attribut nicht angegeben ist.

    - `None`

      - : Bedeutet, dass der Browser das Cookie sowohl bei bereichsübergreifenden als auch bei bereichsinternen Anfragen sendet.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert gesetzt wird, also so `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure) Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass nicht sichere Seiten (`http:`) keine Cookies mit der `Secure`-Richtlinie setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit `SameSite=None; Secure`, die nicht auch das [`Partitioned`](#partitioned)-Attribut haben, könnten in bereichsübergreifenden Kontexten in zukünftigen Browserversionen blockiert werden. Dieses Verhalten schützt Benutzerdaten vor bereichsübergreifendem Tracking. Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) und [Third-party Cookies](/de/docs/Web/Privacy/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost), und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}} Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` allen Zugriff auf sensible Informationen in Cookies verhindert (Sitzungsschlüssel, Anmeldedaten usw.). Cookies mit diesem Attribut können weiterhin entweder mit Zugriff auf die Festplatte des Clients gelesen/geändert werden oder aus JavaScript, wenn das `HttpOnly` Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen (seit Chrome 52 und Firefox 52). Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt ist (seit Chrome 89 und Firefox 75).

## Beispiele

### Sitzungscookie

**Sitzungscookies** werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanent-Cookie

**Permanente Cookies** werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die nicht den Server enthält, der es gesetzt hat, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der aufrufenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookie-Namen, die mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Zusätzlich müssen Cookies mit dem `__Host-` Präfix einen Pfad von `/` (was jeden Pfad am Host bedeutet) haben und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie auf diese zusätzlichen Absicherungen nicht zählen, und präfixte Cookies werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Darüber hinaus wird empfohlen, das `__Host`-Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitäts-Hinweise

- Ab Chrome 52 und Firefox 52 können unsichere Seiten (`http:`) keine Cookies mehr mit dem `Secure`-Attribut setzen.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
