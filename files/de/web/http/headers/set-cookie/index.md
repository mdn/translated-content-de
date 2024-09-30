---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTTPSidebar}}

Der **`Set-Cookie`** HTTP-Antwortheader wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere **`Set-Cookie`** Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Code im Frontend vom Zugriff auf den `Set-Cookie` Header, wie es vom Fetch-Spezifikationsstandard gefordert wird, der `Set-Cookie` als [verbotenen Antwortheader-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [ausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) aus jeder Antwort, die dem Frontend-Code zugänglich gemacht wird.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie` Header in der Antwort des Servers, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Sie Anmeldeinformationen einfügen können.

Weitere Informationen finden Sie im Leitfaden zu [der Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>[Antwort-Header](/de/docs/Glossary/Response_header)</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">[Verbotener Antwortheader-Name](/de/docs/Glossary/Forbidden_response_header_name)</th>
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

  - : Definiert den Cookienamen und seinen Wert. 
    Eine Cookie-Definition beginnt mit einem Namen-Wert-Paar.

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, außer Steuerzeichen ([ASCII](/de/docs/Glossary/ASCII) Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt werden und beliebige US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), [Leerzeichen](/de/docs/Glossary/Whitespace), Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Codierung**: Viele Implementierungen führen eine [Prozent-Codierung](/de/docs/Glossary/Percent-encoding) von Cookie-Werten durch. Dies wird jedoch nicht von der RFC-Spezifikation gefordert. Die Prozent-Codierung hilft, die Anforderungen der für `<cookie-value>` zulässigen Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies, deren Namen mit `__Secure-` beginnen (Bindestrich ist Teil des Präfixes), müssen mit dem `secure` Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies, deren Namen mit `__Host-` beginnen, werden nur an das Host-Subdomain oder Domain gesendet, das sie gesetzt hat, und nicht an einen anderen Host.
    > Sie müssen mit dem `secure` Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Es kann nur die aktuelle Domain als Wert gesetzt werden oder eine übergeordnete Domain, sofern es sich nicht um ein öffentliches Suffix handelt. Das Setzen der Domain macht das Cookie für diese verfügbar sowie für alle ihre Subdomains.

    Wenn dieses Attribut weggelassen wird, wird es standardmäßig auf den Host der aktuellen Dokument-URL gesetzt, ohne Subdomains einzuschließen.

    Entgegen früherer Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrfache Host-/Domain-Werte sind _nicht_ zulässig, aber wenn eine Domain _angegeben_ ist, werden Subdomains immer eingeschlossen.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumstempel an. 
    Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wenn nichts angegeben ist, wird das Cookie zu einem **Sitzungs-Cookie**.
    Eine Sitzung endet, wenn der Client geschlossen wird, danach wird das Sitzungscookie entfernt.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und beim nächsten Verwenden des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Wenn ein `Expires`-Datum gesetzt ist, ist die Frist relativ zu dem _Client_, auf den das Cookie gesetzt wird, nicht zu dem Server.

- `HttpOnly` {{optional_inline}}

  - : Verhindert, dass JavaScript auf das Cookie zugreift, z.B. über die [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft. 
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit JavaScript-initiierte Anfragen gesendet wird, z.B. bei der Verwendung von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch). 
    Dies mildert Angriffe gegen Cross-Site-Scripting ([XSS](/de/docs/Glossary/Cross-site_scripting)) ab.

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl führt dazu, dass das Cookie sofort abläuft. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie mit partitioniertem Speicher gespeichert werden soll. 
    Beachten Sie, dass, wenn dies gesetzt ist, auch die [`Secure`-Direktive](#secure) gesetzt sein muss. 
    Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für mehr Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der _im_ angeforderten URL vorhanden sein muss, damit der Browser den `Cookie`-Header sendet.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnis-Trennzeichen interpretiert, und auch Unterverzeichnisse werden abgeglichen. Zum Beispiel für `Path=/docs`,

    - die Anfragepfade `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP` werden alle übereinstimmen.
    - die Anfragepfade `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Bestimmt, ob ein Cookie mit Cross-Site-Anfragen gesendet wird oder nicht, 
    wodurch ein gewisser Schutz gegen Cross-Site Request Forgery Angriffe ([CSRF](/de/docs/Glossary/CSRF)) geboten wird.

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für Same-Site-Anfragen sendet, d.h. Anfragen, die von derselben Seite stammen, die das Cookie gesetzt hat.
        Wenn eine Anfrage von einer anderen Domain oder einem anderen Schema (auch bei derselben Domain) stammt, werden keine Cookies mit dem Attribut `SameSite=Strict` gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie nicht bei Cross-Site-Anfragen gesendet wird, wie z.B. bei Anfragen, um Bilder oder Frames zu laden, aber gesendet wird, wenn ein Benutzer von einer externen Seite zur Ursprungsseite navigiert (zum Beispiel, wenn er einem Link folgt).
        Dies ist das Standardverhalten, wenn das `SameSite`-Attribut nicht angegeben ist.

    - `None`

      - : Bedeutet, dass der Browser das Cookie sowohl bei Cross-Site- als auch bei Same-Site-Anfragen sendet.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert festgelegt wird, wie z.B. `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure) Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass unsichere Sites (`http:`) keine Cookies mit der `Secure`-Direktive setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit `SameSite=None; Secure`, die auch nicht das Attribut [`Partitioned`](#partitioned) haben, können in zukünftigen Browserversionen in Cross-Site-Kontexten blockiert werden. Dieses Verhalten schützt Benutzerdaten vor Cross-Site-Tracking. Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) und [Third-party cookies](/de/docs/Web/Privacy/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gestellt wird (außer bei localhost) und daher besser gegen [Man-in-the-Middle](/de/docs/Glossary/MitM) Angriffe geschützt ist.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` alle Zugriffe auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten etc.) verhindert. Cookies mit diesem Attribut können dennoch gelesen/geändert werden, entweder mit Zugriff auf die Festplatte des Clients oder über JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können seit Chrome 52 und Firefox 52 keine Cookies mehr mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird (seit Chrome 89 und Firefox 75).

## Beispiele

### Sitzungscookie

**Sitzungscookies** werden entfernt, wenn der Client geschlossen wird. Cookies sind Sitzungscookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Dauerhaftes Cookie

**Dauerhafte Cookies** werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die nicht den Server enthält, der es gesetzt hat, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `originalcompany.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

Ein Cookie für eine Subdomain der dienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen, die mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Zusätzlich müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` haben (was jeden Pfad am Host bedeutet) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Sicherheiten verlassen, und Cookies mit Präfixen werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich wird empfohlen, das Präfix `__Host` zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- Ab Chrome 52 und Firefox 52 können unsichere Seiten (`http:`) keine Cookies mehr mit dem `Secure`-Attribut setzen.

## Siehe auch

- [HTTP Cookies](/de/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [SameSite Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
