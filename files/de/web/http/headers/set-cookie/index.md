---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTTPSidebar}}

Der **`Set-Cookie`** HTTP-Response-Header wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit dieser es später an den Server zurücksenden kann.
Um mehrere Cookies zu senden, sollten mehrere **`Set-Cookie`**-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code vom Zugriff auf den `Set-Cookie`-Header, wie es von der Fetch-Spezifikation gefordert wird, die `Set-Cookie` als einen [verbotenen Response-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jeder Antwort, die dem Frontend-Code zugänglich ist, herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0).
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie`-Header, die in der Antwort des Servers vorhanden sind, es sei denn, die Anfrage enthält Anmeldedaten. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldedaten eingeschlossen werden.

Weitere Informationen finden Sie im Leitfaden zu [HTTP-Cookies verwenden](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Headername")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Verbotener Response-Header-Name")}}</th>
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

// Mehrere Attribute sind ebenfalls möglich, zum Beispiel:
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```

## Attribute

- `<cookie-name>=<cookie-value>`

  - : Definiert den Cookie-Namen und seinen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen außer Steuerzeichen ({{Glossary("ASCII")}} Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`) enthalten.

    Ein `<cookie-value>` kann optional in Anführungszeichen eingeschlossen sein und alle US-ASCII-Zeichen außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{glossary("Whitespace")}}, Anführungszeichen, Kommata, Semikolons und Backslashes enthalten.

    **Kodierung**: Viele Implementierungen führen {{Glossary("Percent-encoding", "Prozentkodierung")}} bei Cookie-Werten durch.
    Dies ist jedoch von der RFC-Spezifikation nicht vorgeschrieben.
    Die Prozentkodierung hilft jedoch, die Anforderungen der Zeichen zu erfüllen, die für `<cookie-value>` erlaubt sind.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (Bindestrich ist Teil des Präfixes), müssen mit der `secure`-Markierung von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domäne gesendet, die sie gesetzt hat, und nicht an andere Hosts.
    > Sie müssen mit der `secure`-Markierung gesetzt werden, müssen von einer sicheren Seite (HTTPS) kommen, dürfen keine Domäne angegeben haben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domäne kann als Wert gesetzt werden oder eine Domäne höherer Ordnung, es sei denn, es ist ein öffentlicher Suffix. Durch das Setzen der Domäne wird das Cookie sowohl für diese als auch für alle ihre Subdomänen verfügbar gemacht.

    Wenn weggelassen, wird dieses Attribut standardmäßig auf den Host der aktuellen Dokument-URL gesetzt, ohne Subdomänen.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrfache Host-/Domänenwerte sind _nicht_ erlaubt, aber wenn eine Domäne _angegeben_ ist, dann sind Subdomänen immer enthalten.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumstempel an.
    Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Falls nicht angegeben, wird das Cookie zu einem **Session-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, woraufhin das Session-Cookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungsfunktion_, die alle Tabs speichert und beim nächsten Start des Browsers wiederherstellt. Session-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Wenn ein `Expires`-Datum festgelegt ist, ist die Frist relativ zu dem _Client_, auf dem das Cookie gesetzt wird, und nicht zum Server.

- `HttpOnly` {{optional_inline}}

  - : Verbietet JavaScript den Zugriff auf das Cookie, zum Beispiel über die {{domxref("Document.cookie")}}-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, weiterhin mit Javascript-initiierten Anfragen gesendet wird, zum Beispiel bei der Verwendung von {{domxref("XMLHttpRequest.send()")}} oder {{domxref("Window/fetch", "fetch()")}}.
    Dies mildert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl beendet das Cookie sofort. Wenn sowohl `Expires` als auch `Max-Age` festgelegt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie mit parzelliertem Speicher gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure`-Richtlinie](#secure) ebenfalls gesetzt sein muss.
    Weitere Informationen finden Sie unter [Cookies mit unabhängigem parzellierten Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies).

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der _vorhanden sein muss_ in der angeforderten URL, damit der Browser den `Cookie`-Header sendet.

    Der Schrägstrich (`/`) wird als Verzeichnis-Trennzeichen interpretiert und Unterverzeichnisse werden ebenfalls verglichen. Zum Beispiel, für `Path=/docs`,

    - stimmen die Anfragepfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` alle überein.
    - stimmen die Anfragepfade `/`, `/docsets`, `/fr/docs` nicht überein.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Steuert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird oder nicht, und bietet somit einen gewissen Schutz gegen Cross-Site Request Forgery Angriffe ({{Glossary("CSRF")}}).

    Die möglichen Attributswerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für Same-Site-Anfragen sendet, also Anfragen, die von derselben Site stammen, die das Cookie gesetzt hat.
        Wenn eine Anfrage von einer anderen Domäne oder einem anderen Schema (sogar mit derselben Domäne) stammt, werden keine Cookies mit dem `SameSite=Strict`-Attribut gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie nicht bei Cross-Site-Anfragen gesendet wird, wie beispielsweise bei Anfragen zum Laden von Bildern oder Frames, aber gesendet wird, wenn ein Benutzer von einer externen Seite zur Ursprungsseite navigiert (zum Beispiel, wenn er einem Link folgt).
        Dies ist das Standardverhalten, wenn das `SameSite`-Attribut nicht angegeben ist.

    - `None`

      - : Bedeutet, dass der Browser das Cookie sowohl bei Cross-Site- als auch bei Same-Site-Anfragen sendet.
        Das `Secure`-Attribut muss ebenfalls gesetzt werden, wenn dieser Wert festgelegt wird, wie folgt `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" abgelehnt, weil es das Attribut "SameSite=None" hat, aber das "Secure"-Attribut fehlt.

        Dieses Set-Cookie wurde blockiert, weil es das Attribut "SameSite=None" hatte, aber nicht das "Secure"-Attribut, das erforderlich ist, um "SameSite=None" zu verwenden.
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure) Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass unsichere Seiten (`http:`) keine Cookies mit der `Secure`-Richtlinie setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit `SameSite=None; Secure`, die nicht auch das [`Partitioned`](#partitioned)-Attribut haben, können in Cross-Site-Kontexten in zukünftigen Browserversionen blockiert werden. Dieses Verhalten schützt Benutzerdaten vor Cross-Site-Tracking. Siehe [Cookies mit unabhängigem parzelliertem Status (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) und [Third-party-Cookies](/de/docs/Web/Privacy/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur dann an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost), und ist daher widerstandsfähiger gegen [Man-in-the-Middle](/de/docs/Glossary/MitM)-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Session-Schlüssel, Anmeldedaten, etc.) verhindert. Cookies mit diesem Attribut können weiterhin entweder mit Zugriff auf die Festplatte des Clients oder von JavaScript gelesen/geändert werden, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können keine Cookies mehr mit dem `Secure`-Attribut setzen (seit Chrome 52 und Firefox 52). Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird (seit Chrome 89 und Firefox 75).

## Beispiele

### Session-Cookie

**Session-Cookies** werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Session-Cookies, wenn sie das Attribut `Expires` oder `Max-Age` nicht angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

**Permanente Cookies** werden an einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitdauer (`Max-Age`) entfernt und nicht beim Schließen des Clients.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domänen

Ein Cookie für eine Domäne, die den Server, der es gesetzt hat, nicht einbezieht, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server gesetzt wird, der auf `originalcompany.com` gehostet wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

Ein Cookie für eine Subdomäne der bedienenden Domäne wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server gesetzt wird, der auf `example.com` gehostet wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen, die mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie vom sicheren (HTTPS) Ursprung mit dem `secure`-Attribut gesetzt werden.

Zusätzlich müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` haben (bedeutet jeder Pfad beim Host) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie nicht auf diese zusätzlichen Sicherheiten zählen, und Cookies mit Präfixen werden immer akzeptiert.

```http
// Beide akzeptiert, wenn von einem sicheren Ursprung (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Abgelehnt aufgrund fehlendem Secure-Attribut
Set-Cookie: __Secure-id=1

// Abgelehnt aufgrund des fehlenden Path=/ Attributes
Set-Cookie: __Host-id=1; Secure

// Abgelehnt aufgrund gesetzter Domain
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
```

### Parzelliertes Cookie

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Parzellierte Cookies müssen mit `Secure` gesetzt werden. Zudem wird empfohlen, das `__Host`-Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domäne zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsnotizen

- Ab Chrome 52 und Firefox 52 können unsichere Seiten (`http:`) keine Cookies mehr mit dem `Secure`-Attribut setzen.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
- [SameSite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
