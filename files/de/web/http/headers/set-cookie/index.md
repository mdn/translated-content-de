---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{HTTPSidebar}}

Der HTTP-Antwortheader **`Set-Cookie`** wird verwendet, um ein Cookie vom Server an den User-Agent zu senden, damit der User-Agent es später zurück an den Server senden kann. Um mehrere Cookies zu senden, sollten mehrere **`Set-Cookie`**-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Code im Frontend vor dem Zugriff auf den `Set-Cookie`-Header, wie es von der Fetch-Spezifikation gefordert wird, die `Set-Cookie` als [verbotenen Antwortheadernamen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) von jeder Antwort, die dem Frontend-Code ausgesetzt ist.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)- oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header, die in der Antwort des Servers vorhanden sind, es sei denn, die Anfrage enthält Anmeldedaten. Besuchen Sie [Fetch API verwenden - Einschließlich von Anmeldedaten](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldedaten eingeschlossen werden.

Weitere Informationen finden Sie im Leitfaden zu [HTTP-Cookies verwenden](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Headertyp</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden response header name")}}</th>
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

  - : Definiert den Namen des Cookies und dessen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, mit Ausnahme von: Steuerzeichen ({{Glossary("ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in doppelte Anführungszeichen gesetzt werden und beliebige US-ASCII-Zeichen enthalten, mit Ausnahme von Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{glossary("Whitespace")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen {{Glossary("Percent-encoding", "Percent-Encoding")}} bei Cookie-Werten durch. Dies ist jedoch nicht von der RFC-Spezifikation vorgeschrieben. Das Percent-Encoding trägt dazu bei, die Anforderungen an die erlaubten Zeichen für `<cookie-value>` zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (Bindestrich gehört zum Präfix), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben, und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain kann als Wert gesetzt werden oder eine Domain höherer Ordnung, es sei denn, es handelt sich um ein öffentliches Suffix. Durch das Setzen der Domain wird das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar gemacht.

    Wenn dieses Attribut weggelassen wird, wird standardmäßig der Host der aktuellen Dokument-URL verwendet, ohne Subdomains einzuschließen.

    Entgegen früheren Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrfache Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben_ ist, dann sind Subdomains immer eingeschlossen.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Date-Zeitstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Session-Cookie**.
    Eine Sitzung endet, wenn der Client herunterfährt, danach wird das Sitzungscookie entfernt.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und sie beim nächsten Start des Browsers wiederherstellt. Session-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Wenn ein `Expires`-Datum festgelegt ist, ist die Frist relativ zum _Client_, auf dem das Cookie gesetzt wird, nicht zum Server.

- `HttpOnly` {{optional_inline}}

  - : Verhindert, dass JavaScript auf das Cookie zugreift, beispielsweise über die {{domxref("Document.cookie")}}-Eigenschaft. Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit JavaScript-initiierten Anfragen gesendet wird, z. B. bei einem Aufruf von {{domxref("XMLHttpRequest.send()")}} oder {{domxref("Window/fetch", "fetch()")}}. Dies mildert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) ab.

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` festgelegt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie mithilfe partitionierter Speicherung gespeichert werden soll. Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure`-Direktive](#secure) ebenfalls gesetzt sein muss. Siehe [Cookies mit unabhängigen partitionierten Staaten (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der in der angeforderten URL vorhanden _sein muss_, damit der Browser den `Cookie`-Header sendet.

    Der Schrägstrich (`/`) wird als Verzeichnistrenner interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel für `Path=/docs`,

    - stimmen die Anforderungs-Pfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` alle überein.
    - die Anforderungs-Pfade `/`, `/docsets`, `/fr/docs` stimmen nicht überein.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Kontrolliert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird,
    und bietet einen gewissen Schutz vor Angriffen mittels Cross-Site-Request-Forgery ({{Glossary("CSRF")}}).

    Mögliche Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für same-site-Anfragen sendet, d. h. Anfragen, die von derselben Seite ausgehen, die das Cookie gesetzt hat. Wenn eine Anfrage von einer anderen Domain oder einem anderen Schema ausgeht (auch bei derselben Domain), werden keine Cookies mit dem Attribut `SameSite=Strict` gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie bei Cross-Site-Anfragen, wie z. B. bei Anfragen zum Laden von Bildern oder Frames, nicht gesendet wird, aber gesendet wird, wenn ein Benutzer zur Ursprungsseite von einer externen Seite navigiert (zum Beispiel, wenn er einem Link folgt). Dies ist das Standardverhalten, wenn das Attribut `SameSite` nicht angegeben ist.

    - `None`

      - : Bedeutet, dass der Browser das Cookie sowohl mit Cross-Site- als auch mit same-site-Anfragen sendet. Das `Secure`-Attribut muss ebenfalls gesetzt werden, wenn Sie diesen Wert festlegen, so `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" abgelehnt, weil es das "SameSite=None"-Attribut hat, aber das "Secure"-Attribut fehlt.

        Dieses Set-Cookie wurde blockiert, weil es das "SameSite=None"-Attribut hatte, aber nicht das benötigte "Secure"-Attribut, um "SameSite=None" zu verwenden.
        ```

        > [!NOTE]
        > Ein mit [`Secure`](#secure) gekennzeichnetes Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass unsichere Seiten (`http:`) keine Cookies mit der `Secure`-Direktive setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit `SameSite=None; Secure`, die nicht auch das [`Partitioned`](#partitioned)-Attribut haben, können in Cross-Site-Kontexten in zukünftigen Browserversionen blockiert werden. Dieses Verhalten schützt Benutzerdaten vor Cross-Site-Tracking. Siehe [Cookies mit unabhängigen partitionierten Staaten (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) und [Third-party cookies](/de/docs/Web/Privacy/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema vorgenommen wird (außer auf localhost), und ist daher widerstandsfähiger gegen [Man-in-the-Middle](/de/docs/Glossary/MitM)-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten usw.) verhindert. Cookies mit diesem Attribut können immer noch entweder mit Zugriff auf die Festplatte des Clients oder aus JavaScript gelesen/verändert werden, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen (seit Chrome 52 und Firefox 52). Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird (seit Chrome 89 und Firefox 75).

## Beispiele

### Session-Cookie

**Session-Cookies** werden entfernt, wenn der Client herunterfährt. Cookies sind Session-Cookies, wenn sie kein `Expires`- oder `Max-Age`-Attribut angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

**Permanente Cookies** werden an einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die den Server, der es gesetzt hat, nicht einschließt, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `originalcompany.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=somecompany.co.uk
```

Ein Cookie für eine Subdomain der bedienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen, die mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einer sicheren (HTTPS) Ursprungsseite gesetzt wurden.

Zusätzlich müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` haben (was bedeutet, dass jeder Pfad beim Host erlaubt ist) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Bei Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Sicherheiten verlassen, und Cookies mit Präfixen werden immer akzeptiert.

```http
// Beide akzeptiert, wenn von einer sicheren Ursprungsseite (HTTPS)
Set-Cookie: __Secure-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-ID=123; Secure; Path=/

// Abgelehnt wegen fehlendem Secure-Attribut
Set-Cookie: __Secure-id=1

// Abgelehnt wegen fehlendem Path=/-Attribut
Set-Cookie: __Host-id=1; Secure

// Abgelehnt wegen gesetztem Domain
Set-Cookie: __Host-id=1; Secure; Path=/; Domain=example.com
```

### Partitioniertes Cookie

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich wird empfohlen, das `__Host`-Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

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
- [Erklärung zu SameSite-Cookies](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
