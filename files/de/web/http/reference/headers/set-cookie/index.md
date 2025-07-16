---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 28ff05822873891090b3a64b053ad6d838959adf
---

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um ein Cookie vom Server an den User Agent zu senden, damit der User Agent es später zurück zum Server senden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code, um auf den `Set-Cookie`-Header zuzugreifen, wie es durch die Fetch-Spezifikation gefordert wird, die `Set-Cookie` als [verbotenen Response-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) von jeder Antwort, die dem Frontend-Code ausgesetzt ist.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header in der Antwort des Servers, es sei denn, die Anfrage enthält Anmeldedaten. Besuchen Sie [Verwenden der Fetch API - Anmeldedaten einbeziehen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Sie Anmeldedaten einbeziehen können.

Für mehr Informationen siehe den Leitfaden zu [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Response-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Response-Header-Name")}}</th>
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
  - : Definiert den Cookie-Namen und seinen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, mit Ausnahme von Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulatoren und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt werden und beliebige US-ASCII-Zeichen enthalten, außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerraum")}}, Anführungszeichen, Kommata, Semikolons und Backslashes.

    **Codierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozentcodierung")}} der Cookie-Werte durch.
    Dies ist jedoch nicht durch die RFC-Spezifikation gefordert.
    Die Prozentcodierung hilft, die Anforderungen der zulässigen Zeichen für `<cookie-value>` zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-`-Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (der Bindestrich ist Teil des Präfixes), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-`-Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder -Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}
  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain kann als Wert gesetzt werden, oder eine Domain höheren Rangs, es sei denn, es handelt sich um ein öffentliches Suffix. Das Setzen der Domain macht das Cookie für diese verfügbar sowie für alle ihre Subdomains.

    Wenn nicht angegeben, wird dieser Attributstandard auf den Host der aktuellen Dokument-URL gesetzt, ohne Subdomains einzuschließen.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrfache Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain angegeben ist, sind Subdomains immer enthalten.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumstempel an.
    Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungscookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, woraufhin
    das Sitzungscookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und sie beim nächsten Gebrauch des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Das `Expires`-Attribut wird vom Server mit einem Wert eingestellt, der relativ zu seiner eigenen internen Uhr ist, die von der des Client-Browsers abweichen kann.
    Firefox und auf Chromium basierende Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um die Uhrendifferenz zu kompensieren und speichern und löschen Cookies basierend auf der vom Server beabsichtigten Zeit.
    Die Anpassung für den Uhrenskew wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verbietet JavaScript den Zugriff auf das Cookie, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, trotzdem mit von JavaScript initiierten Anfragen gesendet wird, beispielsweise beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mildert Angriffe gegen Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) ab.

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl wird das Cookie sofort ablaufen lassen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie unter Verwendung von partitioniertem Speicher gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure`-Direktive](#secure) ebenfalls gesetzt sein muss.
    Siehe [Cookies mit unabhängiger partitionierter Speicherung (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der _existieren muss_ in der angeforderten URL, damit der Browser den `Cookie`-Header sendet.

    Wenn weggelassen, ist dieser Attributstandard der Pfadteil der Anfrage-URL. Zum Beispiel, wenn ein Cookie durch eine Anfrage auf `https://example.com/docs/Web/HTTP/index.html` gesetzt wird, wäre der Standardpfad `/docs/Web/HTTP/`.

    Der Schrägstrich (`/`) wird als Verzeichnisseparator interpretiert, und Unterverzeichnisse werden ebenfalls übereinstimmend. Zum Beispiel, für `Path=/docs`,
    - werden die Anfragepfade `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP` alle übereinstimmen.
    - die Anfragepfade `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

    > [!NOTE]
    > Das `path`-Attribut ermöglicht es Ihnen, zu steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Steuert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird: das heißt, Anfragen, die von einer anderen {{Glossary("site", "Seite")}} stammen, einschließlich des Schemas, als der Seite, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Senden Sie das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat.

    - `Lax`
      - : Senden Sie das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Navigation auf oberster Ebene: das bedeutet im Wesentlichen, dass die Anfrage dazu führt, dass sich die URL ändert, die in der Adressleiste des Browsers angezeigt wird.
          - Dies würde beispielsweise Anfragen ausschließen, die über die [`fetch()`](/de/docs/Web/API/Window/fetch)-API gemacht werden, oder Anfragen für Subressourcen von {{htmlelement("img")}} oder {{htmlelement("script")}}-Elementen, oder Navigationen innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Sie umfassen Anfragen, die gemacht werden, wenn der Benutzer in der obersten Browsing-Kontext von einer Seite zur anderen auf einen Link klickt, oder eine Zuweisung an [`document.location`](/de/docs/Web/API/Document/location), oder eine {{htmlelement("form")}}-Einsendung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: ins besonders, dies schließt {{httpmethod("POST")}}, {{httpmethod("PUT")}}, und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standardwert angewendet wird, wird eine permissivere Version verwendet. In dieser permissiveren Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen eingeschlossen, sofern sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Senden Sie das Cookie sowohl mit Cross-Site- als auch mit Same-Site-Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie zum Server nur gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer bei localhost) und daher besser gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe geschützt ist.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` alle Zugriffe auf sensible Informationen in Cookies (Sitzungsschlüssel, Login-Details, etc.) verhindert.
    > Cookies mit diesem Attribut können immer noch entweder mit Zugriff auf die Festplatte des Clients gelesen/verändert werden oder von JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt ist.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht spezifizieren.

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

Ein Cookie für eine Domain, die nicht den Server enthält, der es gesetzt hat, [sollte vom User Agent abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der diensthabenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookie-Namen, die mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Zudem müssen Cookies mit dem `__Host-`-Präfix einen Pfad von `/` haben (bedeutet, dass jeder Pfad beim Host ist) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Bei Clients, die keine Cookie-Präfixe implementieren, können Sie sich auf diese zusätzlichen Zusicherungen nicht verlassen, und präfixierte Cookies werden immer akzeptiert.

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

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
