---
title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 1aa58c82ff9566d0d003fea01aa348ca16e9ee70
---

{{HTTPSidebar}}

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code vor dem Zugriff auf den `Set-Cookie`-Header, wie es von der Fetch-Spezifikation erforderlich ist, die `Set-Cookie` als einen [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jeder Antwort](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0), die dem Frontend-Code ausgesetzt ist, herausgefiltert werden muss.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch)- oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header in der Serverantwort, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Sie Anmeldeinformationen einbeziehen.

Weitere Informationen finden Sie im Leitfaden zum [Verwenden von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

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

  - : Definiert den Cookie-Namen und seinen Wert. Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, außer: Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in doppelte Anführungszeichen gesetzt werden und beliebige US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Doppelpunkte, Kommas, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen {{Glossary("Percent-encoding", "Prozent-Kodierung")}} für Cookie-Werte durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die Prozent-Kodierung hilft jedoch, die Anforderungen an die erlaubten Zeichen für `<cookie-value>` zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (Bindestrich ist Teil des Präfixes), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder -Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts. Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, es darf keine Domain angegeben sein und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain kann als Wert gesetzt werden, oder eine höherwertige Domain, es sei denn, es handelt sich um ein öffentliches Suffix. Bei Setzen der Domain wird das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar sein.

    Wird dies weggelassen, lautet der Standardwert dieses Attributs der Host der aktuellen Dokument-URL, ausgenommen Subdomains.

    Entgegen früherer Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrere Host-/Domainwerte sind _nicht_ erlaubt, aber wenn eine Domain angegeben ist, sind Subdomains immer enthalten.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Daten-Zeitstempel an. Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wenn nichts angegeben ist, wird das Cookie zu einem **Session-Cookie**. Eine Sitzung endet, wenn der Client heruntergefahren wird, danach wird das Session-Cookie entfernt.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und beim nächsten Gebrauch des Browsers wiederherstellt. Sitzungs-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Das `Expires`-Attribut wird vom Server mit einem relativen Wert zu seiner internen Uhrzeit gesetzt, die sich von der des Client-Browsers unterscheiden kann. Firefox und auf Chromium basierende Browser verwenden intern einen Verfallswert (max-age), der angepasst wird, um die Zeitverschiebung auszugleichen, wobei Cookies basierend auf der vom Server beabsichtigten Zeit gespeichert und abgelaufen werden. Die Anpassung an die Uhrzeitverschiebung wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet. Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, jedoch nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden soll.

- `HttpOnly` {{optional_inline}}

  - : Verbietet JavaScript, auf das Cookie zuzugreifen, beispielsweise über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft. Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit JavaScript-initiierten Anfragen gesendet wird, z. B. bei einem Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch). Dies mildert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden bis zum Ablauf des Cookies an. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie mit partitioniertem Speicher gespeichert werden soll. Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure`-Direktive](#secure) ebenfalls gesetzt sein muss. Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der in der angeforderten URL vorhanden sein _muss_, damit der Browser den `Cookie`-Header sendet.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnistrenner interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel wird bei `Path=/docs`,

    - die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` übereinstimmen.
    - die Anforderungspfade `/`, `/docsets`, `/fr/docs` nicht übereinstimmen.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Kontrolliert, ob ein Cookie mit standortübergreifenden Anfragen gesendet wird oder nicht: d.h. Anfragen, die von einer anderen {{Glossary("site", "Website")}} einschließlich des Schemas stammen, als die Website, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte standortübergreifende Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery-(CSRF)")}}-Angriffen.

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Website")}} stammen, die das Cookie gesetzt hat.

    - `Lax`

      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Website")}} stammen, die das Cookie gesetzt hat, und für standortübergreifende Anfragen, die beide der folgenden Kriterien erfüllen:

        - Die Anfrage ist eine Top-Level-Navigation: das bedeutet im Wesentlichen, dass die Anfrage die URL verändert, die in der Adressleiste des Browsers angezeigt wird.

          - Dies würde zum Beispiel Anfragen ausschließen, die mithilfe des [`fetch()`](/de/docs/Web/API/Window/fetch)-API gemacht werden, oder Anfragen, die aus {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elementen stammen, oder Navigierungen innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Dies würde Anfragen einschließen, die gemacht werden, wenn der Benutzer im Top-Level-Browsing-Kontext von einer Website zu einer anderen auf einen Link klickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location), oder eine {{htmlelement("form")}}-Einreichung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}} und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine weniger restriktive Version verwendet. In dieser weniger restriktiven Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen eingeschlossen, solange sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`

      - : Sendet das Cookie sowohl mit standortübergreifenden als auch gleichen Standortanfragen. Das `Secure`-Attribut muss auch gesetzt werden, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie an den Server nur gesendet wird, wenn eine Anfrage mit dem `https:`-Schema (außer auf localhost) gemacht wird und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugang zu sensiblen Informationen in Cookies (Sitzungsschlüssel, Login-Daten etc.) verhindert.
    > Cookies mit diesem Attribut können weiterhin entweder durch Zugriff auf die Festplatte des Clients oder durch JavaScript gelesen/verändert werden, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Websites (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut durch localhost gesetzt wird.

## Beispiele

### Session-Cookie

Sitzungs-Cookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungs-Cookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht spezifizieren.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden an einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) und nicht beim Schließen des Clients entfernt.

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

Cookie-Namen mit dem Präfix `__Secure-` oder `__Host-` dürfen nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Darüber hinaus müssen Cookies mit dem `__Host-`-Präfix einen Pfad von `/` haben (was bedeutet, dass jeder Pfad beim Host ist) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Zusicherungen verlassen, und Cookies mit Präfix werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich wird empfohlen, das `__Host`-Präfix beim Setzen partitionierter Cookies zu verwenden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [SameSite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
