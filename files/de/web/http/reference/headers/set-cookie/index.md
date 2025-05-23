---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: ee756fd51ccbc4820a4b334aa753648650ad1d51
---

{{HTTPSidebar}}

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzer-Agent zu senden, damit der Benutzer-Agent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code davor, auf den `Set-Cookie`-Header zuzugreifen, wie es die Fetch-Spezifikation verlangt, die `Set-Cookie` als einen [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) von jeder Antwort, die dem Frontend-Code zugänglich gemacht wird.
>
> Wenn eine Anfrage der [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder der [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API) [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), werden Browser `Set-Cookie`-Header in der Antwort des Servers ignorieren, es sei denn, die Anfrage beinhaltet Anmeldedaten. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldedaten einbezogen werden können.

Für weitere Informationen siehe den Leitfaden zum [Verwenden von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

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

  - : Definiert den Namen und den Wert des Cookies.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, außer: Steuerzeichen ({{Glossary("ASCII", "ASCII")}} Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen eingebettet sein und jedes US-ASCII-Zeichen außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Whitespace")}}, Anführungszeichen, Kommata, Semikolons und Rückwärtsschrägstrich enthalten.

    **Encoding**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozent-Codierung")}} von Cookie-Werten durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die Prozent-Codierung hilft, die Anforderungen der für `<cookie-value>` zulässigen Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (der Bindestrich ist Teil des Präfixes), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) aus gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder -Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts. Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain spezifiziert haben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain kann als Wert gesetzt werden, oder eine Domain einer höheren Ordnung, es sei denn, es ist ein öffentlicher Suffix. Durch das Setzen der Domain wird das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar gemacht.

    Wenn es weggelassen wird, wird dieses Attribut standardmäßig auf den Host der aktuellen Dokument-URL ohne Subdomains gesetzt.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrere Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain angegeben ist, sind Subdomains immer enthalten.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Zeitstempel an. Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Session-Cookie**. Eine Sitzung endet, wenn der Client heruntergefahren wird, wonach das Session-Cookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs-Funktion_, die alle Tabs speichert und das nächste Mal, wenn der Browser verwendet wird, wiederherstellt. Sitzungs-Cookies werden ebenfalls wiederhergestellt, als wäre der Browser nie geschlossen worden.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die von der des Client-Browsers abweichen kann. Firefox und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der zur Kompensation für Uhrendrift angepasst ist, um Cookies zu speichern und ablaufen zu lassen, basierend auf der vom Server beabsichtigten Zeit. Die Anpassung für Uhrendrift wird anhand des Werts des {{httpheader("DATE")}}-Headers berechnet. Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}

  - : Verbietet JavaScript, auf das Cookie zuzugreifen, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft. Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit von JavaScript initiierten Anfragen gesendet wird, zum Beispiel beim Aufrufen von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch). Dies vermindert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie unter Verwendung von partitioniertem Speicher gespeichert werden sollte. Beachten Sie, dass, wenn dies gesetzt ist, auch die [`Secure`-Direktive](#secure) gesetzt sein muss. Siehe [Cookies mit unabhängigem partitionierten Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der im angeforderten URL vorhanden sein muss, damit der Browser den `Cookie`-Header sendet.

    Der Schrägstrich (`/`) wird als Verzeichnistrenner interpretiert und Unterverzeichnisse werden ebenfalls berücksichtigt. Zum Beispiel für `Path=/docs`,

    - die Anfragenpfade `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP` werden alle übereinstimmen.
    - die Anfragenpfade `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

    > [!NOTE]
    > Das `path`-Attribut lässt Sie steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Bestimmt, ob ein Cookie bei Cross-Site-Anfragen gesendet wird: das heißt, Anfragen, die von einer anderen {{Glossary("site", "Site")}} stammen, einschließlich des Schemas, als von der Site, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery (CSRF)")}}-Angriffe.

    Die möglichen Attributswerte sind:

    - `Strict`

      - : Sendet das Cookie nur für Anfragen, die von der gleichen {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat.

    - `Lax`

      - : Sendet das Cookie nur für Anfragen, die von der gleichen {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:

        - Die Anfrage ist eine Top-Level-Navigation: das bedeutet im Wesentlichen, dass die Anfrage dazu führt, dass die in der Adressleiste des Browsers angezeigte URL geändert wird.

          - Dies würde zum Beispiel Anfragen ausschließen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API gemacht wurden, oder Anfragen für Unterressourcen von {{htmlelement("img")}} oder {{htmlelement("script")}}-Elementen oder Navigierungen innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Es würde Anfragen einschließen, die gemacht werden, wenn der Benutzer in einem Top-Level-Browsing-Kontext von einer Seite zur anderen klickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location) macht, oder ein {{htmlelement("form")}}-Einsendung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesonders schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}}, und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine freizügigere Version verwendet. In dieser freizügigeren Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen einbezogen, solange sie nicht länger als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`

      - : Sendet das Cookie sowohl mit Cross-Site- als auch mit Same-Site-Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt werden, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}

  - : Zeigt an, dass das Cookie nur dann an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema erfolgt (außer auf localhost), und daher resistenter gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe ist.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedetails, etc.) verhindert.
    > Cookies mit diesem Attribut können immer noch gelesen/geändert werden, entweder durch Zugriff auf die Festplatte des Clients oder von JavaScript aus, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie kein `Expires`- oder `Max-Age`-Attribut angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitdauer (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die den Server, der es gesetzt hat, nicht einschließt, [sollte vom Benutzer-Agenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server gehostet auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der diensthabenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server gehostet auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen, die mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung aus gesetzt werden.

Zusätzlich müssen Cookies mit dem `__Host-` Präfix einen Pfad von `/` haben (d.h. jeden Pfad beim Host) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Bei Clients, die keine Cookie-Präfixe implementieren, können Sie nicht auf diese zusätzlichen Absicherungen zählen, und mit Präfixen versehene Cookies werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich wird empfohlen, beim Setzen von partitionierten Cookies das `__Host`-Präfix zu verwenden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
