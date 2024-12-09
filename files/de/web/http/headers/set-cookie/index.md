---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: ed041385cf874deec203e820fd415bdcd6f98a19
---

{{HTTPSidebar}}

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später wieder an den Server senden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code den Zugriff auf den `Set-Cookie`-Header, wie es von der Fetch-Spezifikation gefordert wird. Diese definiert `Set-Cookie` als [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name), der [aus jeder Antwort, die Frontend-Code ausgesetzt ist, herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0).
>
> Wenn eine [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API) Anforderung [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie`-Header in der Antwort des Servers, es sei denn, der Anforderung sind Anmeldeinformationen beigefügt. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldeinformationen eingeschlossen werden.

Weitere Informationen finden Sie im Leitfaden zur [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Definiert den Namen und den Wert des Cookies. Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten, außer: Steuerzeichen ({{Glossary("ASCII", "ASCII")}} Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt sein und jedes US-ASCII-Zeichen enthalten, mit Ausnahme von Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Whitespace")}}, Anführungszeichen, Kommata, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen {{Glossary("Percent-encoding", "prozentuale Kodierung")}} auf Cookie-Werten durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die prozentuale Kodierung hilft, die Anforderungen an die für `<cookie-value>` erlaubten Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (der Bindestrich ist Teil des Präfixes), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts. Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain kann als Wert festgelegt werden, oder eine höher geordnete Domain, außer es handelt sich um ein öffentliches Suffix. Das Festlegen der Domain macht das Cookie darin verfügbar sowie für alle ihre Subdomains.

    Wenn dieser Parameter weggelassen wird, lautet der Standardwert dieses Attributs der Host der aktuellen Dokument-URL, ohne Subdomains.

    Entgegen früherer Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrere Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben_ ist, werden Subdomains immer einbezogen.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumsstempel an. Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Session-Cookie**. Eine Session endet, wenn der Client heruntergefahren wird, danach wird das Session-Cookie entfernt.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Registerkarten speichert und sie beim nächsten Start des Browsers wiederherstellt. Session-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Wenn ein `Expires`-Datum gesetzt ist, ist die Frist relativ zum _Client_, auf dem das Cookie gesetzt wird, nicht zum Server.

- `HttpOnly` {{optional_inline}}

  - : Verbietet JavaScript den Zugriff auf das Cookie, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft. Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit durch JavaScript initiierte Anfragen gesendet wird, zum Beispiel beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch). Dies verringert die Gefahr von Cross-Site-Scripting-Angriffen ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl führt dazu, dass das Cookie sofort abläuft. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie unter Verwendung von partitioniertem Speicher gespeichert werden soll. Beachten Sie, dass, wenn dies gesetzt ist, auch die [`Secure`-Direktive](#secure) gesetzt sein muss. Weitere Details finden Sie unter [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der im angeforderten URL vorhanden _sein muss_, damit der Browser den `Cookie`-Header sendet.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnistrennzeichen interpretiert, und auch Unterverzeichnisse werden abgeglichen. Zum Beispiel wird für `Path=/docs`,

    - die Anforderungspfad `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP` alle übereinstimmen.
    - die Anforderungspfad `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Kontrolliert, ob ein Cookie mit anfragen über Domänengrenzen hinweg gesendet wird oder nicht und bietet einen gewissen Schutz gegen Cross-Site-Request-Fälschung-Angriffe ({{Glossary("CSRF", "CSRF")}}).

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für gleichseitige Anfragen sendet, das heißt, Anfragen, die von derselben Site stammen, die das Cookie gesetzt hat. Wenn eine Anfrage von einer anderen Domain oder einem anderen Schema ausgeht (auch bei derselben Domain), werden keine Cookies mit dem `SameSite=Strict`-Attribut gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie nicht bei anfragen über Domänengrenzen hinweg gesendet wird, wie etwa bei Anforderungen zum Laden von Bildern oder Frames, jedoch bei Navigieren eines Benutzers zur Ursprungs-Site von einer externen Site gesendet wird (zum Beispiel beim Verfolgen eines Links). Dies ist das Standardverhalten, wenn das `SameSite`-Attribut nicht angegeben ist.

        > [!WARNING]
        > Nicht alle Browser setzen `SameSite=Lax` standardmäßig.
        > Weitere Informationen finden Sie unter [Browser-Kompatibilität](#browser-kompatibilität).

    - `None`

      - : Bedeutet, dass der Browser das Cookie sowohl mit anfragen über Domänengrenzen hinweg als auch mit gleichseitigen Anfragen sendet. Das `Secure`-Attribut muss auch gesetzt werden, wenn dieser Wert gesetzt ist, also `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure)-Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Es ist zu beachten, dass unsichere Seiten (`http:`) keine Cookies mit der `Secure`-Direktive setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit `SameSite=None; Secure`, die nicht auch das [`Partitioned`](#partitioned)-Attribut haben, können in zukünftigen Browserversionen in übergreifenden Kontexten blockiert werden. Dieses Verhalten schützt Benutzerdaten vor cross-site tracking. Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) und [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost) und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle-Angriffe")}}.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten, etc.) verhindert. Cookies mit diesem Attribut können weiterhin entweder mit Zugriff auf die Festplatte des Clients oder durch JavaScript gelesen/verändert werden, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Beispiele

### Session-Cookie

Session-Cookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Session-Cookies, wenn sie nicht das `Expires`- oder `Max-Age`-Attribut angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanent-Cookie

Permanente Cookies werden an einem spezifischen Datum entfernt (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die den Server, der es gesetzt hat, nicht einschließt, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der dienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einer sicheren (HTTPS) Herkunft gesetzt werden.

Darüber hinaus müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` haben (bedeutet beliebiger Pfad beim Host) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Absicherungen verlassen, und Cookies mit Präfixen werden immer akzeptiert.

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

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
