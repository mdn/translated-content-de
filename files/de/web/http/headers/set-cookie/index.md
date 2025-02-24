---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{HTTPSidebar}}

Der HTTP-**`Set-Cookie`**-{{Glossary("response_header", "Antwortheader")}} wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später an den Server zurücksenden kann.
Um mehrere Cookies zu senden, sollten in derselben Antwort mehrere `Set-Cookie`-Header gesendet werden.

> [!WARNING]
> Browser blockieren frontend-JavaScript-Code vom Zugriff auf den `Set-Cookie`-Header, wie es von der Fetch-Spezifikation gefordert wird, die `Set-Cookie` als [verbotenen Antwortheadernamen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [gefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) aus jeder Antwort, die dem Frontend-Code zugänglich gemacht wird.
>
> Wenn eine [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch)- oder [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header in der Antwort des Servers, es sei denn, die Anfrage umfasst Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie man Anmeldeinformationen einbindet.

Für weitere Informationen siehe den Leitfaden zum [Verwenden von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwortheadername")}}</th>
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

  - : Definiert den Namen des Cookies und seinen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten, außer: Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tab und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen eingeschlossen sein und jedes US-ASCII-Zeichen enthalten, außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Codierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozent-Codierung")}} auf Cookie-Werten durch.
    Dies wird jedoch nicht von der RFC-Spezifikation verlangt.
    Die Prozent-Codierung hilft dabei, die Anforderungen der für `<cookie-value>` erlaubten Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (Bindestrich ist Teil des Präfixes), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an irgendeinen anderen Host.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain kann als Wert gesetzt werden, oder eine Domain höherer Ordnung, es sei denn, es handelt sich um ein öffentliches Suffix. Wenn die Domain gesetzt wird, ist das Cookie für sie und alle ihre Subdomains verfügbar.

    Wenn weggelassen, wird dieses Attribut standardmäßig auf den Host der aktuellen Dokument-URL festgelegt, ohne Subdomains einzuschließen.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrfachwerte für Hosts/Domains sind _nicht_ erlaubt, wenn jedoch eine Domain angegeben ist, sind Subdomains immer eingeschlossen.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Zeitstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Session-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, woraufhin das Session-Cookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und beim nächsten Einsatz des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die sich von der des Client-Browsers unterscheiden kann.
    Firefox und auf Chromium basierende Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um Uhrunterschiede zu kompensieren, und speichern und löschen Cookies basierend auf der vom Server vorgesehenen Zeit.
    Die Anpassung für Uhrdifferenzen wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut analysiert werden sollte, jedoch nicht angibt, ob/und wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}

  - : Verhindert, dass JavaScript auf das Cookie zugreift, beispielsweise über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, immer noch mit JavaScript-initiierten Anfragen gesendet wird, zum Beispiel beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies reduziert Angriffe durch Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` festgelegt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie unter Verwendung partitionierten Speichers gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, die [Sicherheitsrichtlinie](#secure) ebenfalls gesetzt sein muss.
    Weitere Informationen finden Sie unter [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der _vorhanden sein muss_ in der angeforderten URL, damit der Browser den `Cookie`-Header sendet.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnisseparator interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,

    - die Anforderungs-Pfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` passen alle.
    - die Anforderungs-Pfade `/`, `/docsets`, `/fr/docs` passen nicht.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Steuert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird oder nicht
    und bietet einen gewissen Schutz gegen Anfragenfälschungsangriffe über mehrere Standorte ({{Glossary("CSRF", "CSRF")}}).

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für same-site-Anfragen sendet, das heißt, Anfragen, die von derselben Seite stammen, die das Cookie gesetzt hat.
        Wenn eine Anfrage von einer anderen Domain oder einem anderen Schema stammt (selbst mit derselben Domain), werden keine Cookies mit dem `SameSite=Strict`-Attribut gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie nicht bei Cross-Site-Anfragen gesendet wird, z. B. bei Anfragen, um Bilder oder Frames zu laden, sondern gesendet wird, wenn ein Benutzer zu der Ursprungsseite von einer externen Seite navigiert (z. B. beim Folgen eines Links).
        Dies ist das Standardverhalten, wenn das `SameSite`-Attribut nicht angegeben ist.

        > [!WARNING]
        > Nicht alle Browser setzen `SameSite=Lax` standardmäßig.
        > Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

    - `None`

      - : Bedeutet, dass der Browser das Cookie mit sowohl Cross- als auch Same-Site-Anfragen sendet.
        Das `Secure`-Attribut muss auch gesetzt sein, wenn dieser Wert festgelegt wird, also `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure) Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass unsichere Seiten (`http:`) keine Cookies mit der `Secure`-Richtlinie setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit dem `SameSite=None; Secure`, die nicht auch das [`Partitioned`](#partitioned)-Attribut haben, können in Cross-Site-Kontexten in zukünftigen Browserversionen blockiert werden. Dieses Verhalten schützt Benutzerdaten vor Cross-Site-Tracking. Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) und [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit der `https:`-Schema gemacht wird (außer bei localhost), und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe.

    > [!NOTE]
    > Nehmen Sie nicht an, dass `Secure` den vollständigen Zugriff auf sensitive Informationen in Cookies (Sitzungsschlüssel, Login-Daten usw.) verhindert.
    > Cookies mit diesem Attribut können immer noch gelesen/modifiziert werden, entweder mit Zugriff auf die Festplatte des Clients oder von JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht spezifizieren.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die nicht den Server umfasst, der es gesetzt hat, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der liefernden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Darüber hinaus müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` (bedeutet jeden Pfad beim Host) haben und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Sicherheiten verlassen, und mit Präfixen versehene Cookies werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt sein. Darüber hinaus wird empfohlen, das `__Host`-Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
