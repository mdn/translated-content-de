---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Response-Header")}} wird verwendet, um ein Cookie vom Server an den User Agent zu senden, sodass der User Agent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie` Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code daran, auf den `Set-Cookie` Header zuzugreifen, wie es die Fetch-Spezifikation erfordert, die `Set-Cookie` als [verbotenen Response-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jeder Antwort herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0), die dem Frontend-Code ausgesetzt ist.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie` Header in der Antwort des Servers, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldeinformationen einbezogen werden.

Weitere Informationen finden Sie im Leitfaden zu [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

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
  - : Definiert den Cookienamen und seinen Wert.
    Eine Cookiedefinition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`) enthalten.

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt sein und jedes US-ASCII-Zeichen außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Whitespace")}}, Anführungszeichen, Kommata, Semikolons und Backslashes enthalten.

    **Codierung**: Viele Implementierungen verwenden {{Glossary("Percent-encoding", "Prozentcodierung")}} für Cookie-Werte. Dies ist jedoch nicht durch die RFC-Spezifikation erforderlich.
    Die Prozentcodierung hilft, die Anforderungen an die für `<cookie-value>` erlaubten Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezielle Semantik:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (der Bindestrich gehört zum Präfix), müssen mit dem `secure` Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an das Unterdomänen- oder Domänenhost gesendet, das sie gesetzt hat, und nicht an andere Hosts.
    > Sie müssen mit dem `secure` Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) kommen, dürfen keine Domain angegeben haben, und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}
  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain oder eine Domain höherer Ordnung kann als Wert gesetzt werden, es sei denn, es handelt sich um ein öffentliches Suffix. Das Setzen der Domain macht das Cookie sowohl für diese verfügbar als auch für alle ihre Subdomänen.

    Wenn weggelassen, wird dieses Attribut auf den Host der aktuellen Dokument-URL gesetzt, ohne Subdomains einzubeziehen.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrere Host-/Domainwerte sind nicht erlaubt, aber wenn eine Domain angegeben ist, sind Subdomains immer einbezogen.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Session-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, danach wird das Session-Cookie entfernt.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und beim nächsten Gebrauch des Browsers wiederherstellt. Session-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Das `Expires` Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die von der des Client-Browsers abweichen kann.
    Firefox und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um Uhrzeitdifferenzen auszugleichen, und speichern und löschen Cookies basierend auf der vom Server beabsichtigten Zeit.
    Die Anpassung für Uhrzeitdifferenzen wird aus dem Wert des {{httpheader("DATE")}} Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden soll, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verhindert, dass JavaScript auf das Cookie zugreift, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie) Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, weiterhin mit von JavaScript initiierten Anfragen gesendet wird, zum Beispiel wenn [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch) aufgerufen wird.
    Dies mildert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}) ab.

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl der Sekunden bis zum Ablauf des Cookies an. Eine Null oder eine negative Zahl führt dazu, dass das Cookie sofort abläuft. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie in partitioniertem Speicher gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure` Direktive](#secure) ebenfalls gesetzt sein muss.
    Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der im angeforderten URL vorhanden sein muss, damit der Browser den `Cookie` Header sendet.

    Das Schrägstrichzeichen (`/`) wird als Verzeichnistrenner interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel für `Path=/docs`,
    - werden die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` alle übereinstimmen.
    - die Anforderungspfade `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

    > [!NOTE]
    > Das `path` Attribut ermöglicht es Ihnen zu kontrollieren, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) gegen unbefugtes Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Bestimmt, ob ein Cookie mit Anfragen von einer anderen Seite gesendet wird oder nicht: Das heißt, Anfragen, die von einer anderen {{Glossary("site", "site")}} stammen, einschließlich des Schemas, von der Seite, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery (CSRF)")}} Angriffe.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "site")}} stammen, die das Cookie gesetzt hat.

    - `Lax`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "site")}} stammen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Navigation auf oberster Ebene: dies bedeutet im Wesentlichen, dass die Anfrage dazu führt, dass sich die URL in der Adressleiste des Browsers ändert.
          - Dies würde zum Beispiel Anfragen ausschließen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API gemacht werden, oder Anfragen für Unterressourcen von {{htmlelement("img")}} oder {{htmlelement("script")}} Elementen, oder Navigierungen in {{htmlelement("iframe")}} Elementen.

          - Es würde Anfragen einschließen, die gemacht werden, wenn der Benutzer ein Link im obersten Browsing-Kontext von einer Seite zu einer anderen klickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location), oder eine {{htmlelement("form")}} Einsendung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}}, und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine permissivere Version verwendet. In dieser permissiveren Version werden Cookies auch in {{httpmethod("POST")}} Anfragen einbezogen, sofern sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Sendet das Cookie sowohl mit Cross-Site- als auch mit Same-Site-Anfragen.
        Das `Secure` Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:` Schema gemacht wird (außer auf localhost), und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}} Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten usw.) verhindert.
    > Cookies mit diesem Attribut können immer noch gelesen/verändert werden, entweder mit Zugriff auf die Festplatte des Clients oder von JavaScript, wenn das `HttpOnly` Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure` Attribut setzen. Die `https:` Anforderungen werden ignoriert, wenn das `Secure` Attribut von localhost gesetzt wird.

## Beispiele

### Session-Cookie

Session-Cookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Session-Cookies, wenn sie das `Expires` oder `Max-Age` Attribut nicht angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanent-Cookie

Permanente Cookies werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Dauer (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die nicht den Server einschließt, der es gesetzt hat, [sollte vom User Agent abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bereitstellenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookie-Namen, die mit `__Secure-` oder `__Host-` präfixiert sind, können nur verwendet werden, wenn sie mit dem `secure` Attribut von einem sicheren (HTTPS) Ursprung gesetzt sind.

Darüber hinaus müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` haben (was bedeutet, dass jeder Pfad beim Host) und dürfen kein `Domain` Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Sicherheiten verlassen, und präfixierte Cookies werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Darüber hinaus wird empfohlen, das `__Host` Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, damit sie an den Hostnamen und nicht an die registrierbare Domain gebunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
