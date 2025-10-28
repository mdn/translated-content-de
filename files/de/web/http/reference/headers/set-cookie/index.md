---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: d866d83490585c1803de796a61ce8e732a3a9495
---

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den User-Agent zu senden, sodass der User-Agent es später zurück an den Server senden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code am Zugriff auf den `Set-Cookie`-Header, wie es durch die Fetch-Spezifikation gefordert ist, die `Set-Cookie` als einen [verbotenen Antwortheader-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jeder Antwort ausgeschlossen werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0), die dem Frontend-Code ausgesetzt ist.
>
> Wenn eine [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header im Antwort-Header des Servers, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldeinformationen einbezogen werden können.

Weitere Informationen finden Sie im Leitfaden [Using HTTP cookies](/de/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwortheader-Name")}}</th>
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
  - : Definiert den Cookie-Namen und dessen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten, außer Steuerzeichen ({{Glossary("ASCII", "ASCII")}} Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen eingeschlossen werden und jedes US-ASCII-Zeichen enthalten, außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Anführungszeichen, Kommas, Semikolons und Rückstriche.

    **Kodierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozent-Kodierung")}} der Cookie-Werte durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die Prozent-Kodierung hilft, die Anforderungen der für `<cookie-value>` zugelassenen Zeichen zu erfüllen.

    > [!NOTE]
    > Einige Cookie-Namen enthalten Präfixe, die spezifische Einschränkungen für die Attribute des Cookies in unterstützenden User-Agents auferlegen. Weitere Informationen finden Sie unter [Cookie-Präfixe](#cookie-präfixe).

- `Domain=<domain-value>` {{optional_inline}}
  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain oder eine übergeordnete Domain kann als Wert gesetzt werden, es sei denn, es handelt sich um ein öffentliches Suffix. Durch Setzen der Domain wird das Cookie für diese sowie für alle ihre Subdomains verfügbar gemacht.

    Wenn dieses Attribut weggelassen wird, wird das Cookie nur an den Host zurückgegeben, der es gesendet hat (d.h. es wird zu einem „Host-Only-Cookie“).
    Dies ist restriktiver als das Setzen des Hostnamens, da das Cookie nicht für Subdomains des Hosts verfügbar gemacht wird.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrere Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben_ wird, sind Subdomains immer eingeschlossen.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Zeitstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungscookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, danach
    wird das Sitzungscookie entfernt.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und beim nächsten Start des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Das `Expires`-Attribut wird vom Server mit einem Wert basierend auf seiner eigenen internen Uhr gesetzt, die sich von der des Client-Browsers unterscheiden kann.
    Firefox und Chrom-basierte Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um Uhrunterschiede auszugleichen, sodass Cookies basierend auf dem vom Server beabsichtigten Zeitpunkt erstellt und ablaufen können.
    Die Anpassung des Uhrunterschieds wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verbietet JavaScript den Zugriff auf das Cookie, z. B. über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit JavaScript-initiierten Anfragen gesendet wird, z. B. beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mindert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie unter Verwendung von partitioniertem Speicher gespeichert werden soll.
    Beachten Sie, dass wenn dies gesetzt ist, die [`Secure`-Direktive](#secure) ebenfalls gesetzt sein muss.
    Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der in der angeforderten URL _vorhanden sein muss_, damit der Browser den `Cookie`-Header sendet.

    Wird dieses Attribut weggelassen, wird es auf den Pfadkomponenten der Anforderungs-URL standardmäßig angewendet. Zum Beispiel, wenn ein Cookie durch eine Anforderung an `https://example.com/docs/Web/HTTP/index.html` gesetzt wird, wäre der Standardpfad `/docs/Web/HTTP/`.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnistrennzeichen interpretiert, und Unterverzeichnisse werden ebenfalls berücksichtigt. Zum Beispiel für `Path=/docs`,
    - die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP` werden alle übereinstimmen.
    - die Anforderungspfad `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

    > [!NOTE]
    > Das `path`-Attribut erlaubt Ihnen zu kontrollieren, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt](/de/docs/Web/API/Document/cookie#security) nicht gegen unbefugtes Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Steuert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird: das heißt, Anfragen, die von einer anderen {{Glossary("site", "Site")}} stammen, einschließlich des Schemas, als die Site, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery (CSRF)")}}-Angriffe.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Sendet das Cookie nur für Anfragen von derselben {{Glossary("site", "Site")}}, die das Cookie gesetzt hat.

    - `Lax`
      - : Sendet das Cookie nur für Anfragen aus derselben {{Glossary("site", "Site")}}, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Top-Level-Navigation: Das bedeutet im Wesentlichen, dass die Anfrage dazu führt, dass sich die im Adressfeld des Browsers angezeigte URL ändert.
          - Dies würde z. B. Anfragen ausschließen, die mithilfe der [`fetch()`](/de/docs/Web/API/Window/fetch)-API gestellt werden, oder Anfragen für Unterressourcen von {{htmlelement("img")}} oder {{htmlelement("script")}}-Elementen oder Navigationsvorgänge innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Es würde Anfragen einschließen, die gestellt werden, wenn der Benutzer auf eine Verknüpfung im obersten Browserfenster von einer Site zu einer anderen klickt, oder eine Zuweisung an [`document.location`](/de/docs/Web/API/Document/location), oder eine {{htmlelement("form")}}-Einreichung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}}, und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine weniger restriktive Version verwendet. In dieser weniger restriktiven Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen einbezogen, solange sie nicht länger als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Sendet das Cookie sowohl mit Cross-Site- als auch mit gleichen Site-Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie nur dann an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gestellt wird (außer auf localhost) und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungs-Schlüssel, Anmeldedaten etc.) verhindert.
    > Cookies mit diesem Attribut können immer noch mit Zugriff auf die Festplatte des Clients oder von JavaScript gelesen/verändert werden, falls das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Cookie-Präfixe

Einige Cookie-Namen enthalten Präfixe, die spezifische Einschränkungen für die Attribute der Cookies in unterstützenden User-Agents auferlegen. Alle Cookie-Präfixe beginnen mit einem doppelten Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Zudem dürfen sie kein `Domain`-Attribut spezifiziert haben, und das `Path`-Attribut muss auf `/` gesetzt sein. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an irgendeinen anderen Host auf der Domain. Es garantiert auch, dass sie hostweit gesetzt sind und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das so nah wie möglich daran ist, die Herkunft als Sicherheitsgrenze zu behandeln.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit der `Secure`-Flagge von einer sicheren Seite (HTTPS) gesetzt werden und zudem muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Funktionen wie `Document.cookie` oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder modifiziert werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit der `Secure`-Flagge von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zudem haben sie dieselben Einschränkungen wie mit `__Host-`-Präfix versehene Cookies. Diese Kombination ergibt ein Cookie, das so nah wie möglich daran ist, die Herkunft als Sicherheitsgrenze zu behandeln, während gleichzeitig sichergestellt wird, dass Entwickler und Serverbetreiber wissen, dass sein Geltungsbereich auf HTTP-Anfragen beschränkt ist.

> [!WARNING]
> Auf Browsern, die keine Cookie-Präfixe unterstützen, können Sie sich nicht auf diese zusätzlichen Garantien verlassen; in solchen Fällen werden bevorzugte Cookies immer akzeptiert.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie nicht das `Expires`- oder `Max-Age`-Attribut angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden an einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die nicht den Server einschließt, der es festgelegt hat, [sollte vom User-Agent abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem auf `original-company.com` gehosteten Server gesetzt wurde:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bedienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem auf `example.com` gehosteten Server gesetzt wurde:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookie-Namen, die mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Cookie-Namen, die mit `__Http-` oder `__Host-Http-` beginnen, können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden und zudem muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header und nicht auf der Clientseite via JavaScript gesetzt wurden.

Zusätzlich müssen Cookies mit dem `__Host-` oder `__Host-Http-` Präfix einen Pfad von `/` (d.h. jeden Pfad am Host) haben und dürfen kein `Domain`-Attribut haben.

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

// Only settable via Set-Cookie
Set-Cookie: __Http-ID=123; Secure; Domain=example.com
Set-Cookie: __Host-Http-ID=123; Secure; Path=/
```

### Partitioniertes Cookie

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich wird empfohlen, ein `__Host`- oder `__Host-Http-`-Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die eintragbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
