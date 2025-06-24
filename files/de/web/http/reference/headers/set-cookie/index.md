---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{HTTPSidebar}}

Der HTTP-**`Set-Cookie`**-{{Glossary("response_header", "Antwortheader")}} wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren den Zugriff von JavaScript-Code im Frontend auf den `Set-Cookie`-Header, wie es von der Fetch-Spezifikation gefordert wird, die `Set-Cookie` als [verbotenen Antwortheadernamen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jeder Antwort herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0), die Frontend-Code ausgesetzt ist.
>
> Wenn eine [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch)- oder [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie`-Header in der Antwort des Servers, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Verwendung der Fetch-API - Einschließlich Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldeinformationen hinzugefügt werden können.

Für weitere Informationen lesen Sie den Leitfaden zu [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrageheader")}}</th>
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
    Die Definition eines Cookies beginnt mit einem Namen-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten außer: Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt werden und darf alle US-ASCII-Zeichen enthalten, mit Ausnahme von Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Anführungszeichen, Kommas, Semikola und Rückschrägstrichen.

    **Codierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozent-Codierung")}} der Cookie-Werte durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die Prozent-Codierung hilft jedoch, die Anforderungen der erlaubten Zeichen für `<cookie-value>` zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Semantik:
    >
    > **`__Secure-`-Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (der Bindestrich gehört zum Präfix), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-`-Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben, und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain oder eine höher geordnete Domain kann als Wert gesetzt werden, es sei denn, es ist ein öffentlicher Suffix. Das Setzen der Domain macht das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar.

    Wenn weggelassen, wird dieses Attribut standardmäßig auf den Host der aktuellen Dokument-URL festgelegt, ohne Subdomains.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrere Host- oder Domainwerte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben_ ist, sind Subdomains immer eingeschlossen.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Falls nicht angegeben, wird das Cookie zu einem **Sitzungscookie**. Eine Sitzung endet, wenn der Client heruntergefahren wird, danach wird das Sitzungscookie entfernt.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und das nächste Mal wiederherstellt, wenn der Browser verwendet wird. Sitzungscookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhrzeit gesetzt, die von der des Client-Browsers abweichen kann. Firefox und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um Uhrzeitunterschiede auszugleichen, wobei Cookies basierend auf der vom Server beabsichtigten Zeit gespeichert und ablaufen. Die Anpassung für Abweichung der Uhrzeit wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet. Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden soll, aber nicht angibt, ob/wie der Wert von der empfangenden Seite korrigiert werden soll.

- `HttpOnly` {{optional_inline}}

  - : Verbietet JavaScript den Zugriff auf das Cookie, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft. Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, weiterhin mit JavaScript-initiierten Anfragen gesendet wird, z. B. bei einem Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch). Dies mindert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie unter Verwendung von partitioniertem Speicher gespeichert werden sollte. Beachten Sie, dass, wenn dies gesetzt ist, auch die [`Secure`-Direktive](#secure) gesetzt sein muss. Weitere Details finden Sie unter [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der _vorhanden sein muss_ in der angeforderten URL, damit der Browser den `Cookie`-Header sendet.

    Der Schrägstrich (`/`) wird als Verzeichnistrenner interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel für `Path=/docs`,

    - die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` werden alle übereinstimmen.
    - die Anforderungspfade `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

    > [!NOTE]
    > Das `path`-Attribut ermöglicht Ihnen die Kontrolle darüber, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Steuert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird oder nicht: das heißt, Anfragen, die von einer anderen {{Glossary("site", "Site")}} als der stammen, die das Cookie gesetzt hat, einschließlich des Schemas. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery (CSRF)")}}-Angriffe.

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Sende das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat.

    - `Lax`

      - : Sende das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide folgenden Kriterien erfüllen:

        - Die Anfrage ist eine Top-Level-Navigation: das bedeutet im Wesentlichen, dass die Anfrage die URL ändert, die in der Adressleiste des Browsers angezeigt wird.

          - Dies würde beispielsweise Anfragen ausschließen, die unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch)-API oder Anfragen nach Subressourcen von {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elementen gemacht werden, oder Navigationen in {{htmlelement("iframe")}}-Elementen.

          - Dazu gehören Anfragen, die gemacht werden, wenn der Benutzer auf einen Link im Top-Level-Browsing-Kontext von einer Seite zur anderen klickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location), oder ein {{htmlelement("form")}}-Versand.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}} und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine freizügigere Version verwendet. In dieser freizügigeren Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen eingeschlossen, solange sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Sende das Cookie sowohl mit Cross-Site- als auch mit gleichseitigen Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost), und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten usw.) verhindert.
    > Cookies mit diesem Attribut können dennoch gelesen/verändert werden, entweder mit Zugriff auf die Festplatte des Clients oder von JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt ist.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht angeben.

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

Ein Cookie für eine Domain, die den Server, der es gesetzt hat, nicht einschließt, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der servierenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookies, deren Namen mit `__Secure-` oder `__Host-` beginnen, können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Zusätzlich müssen Cookies mit dem `__Host-`-Präfix einen Pfad von `/` haben (was bedeutet, dass jeder Pfad beim Host gemeint ist) und dürfen kein `Domain`-Attribut haben.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich wird empfohlen, das `__Host`-Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, damit sie an den Hostnamen und nicht an die registrierbare Domain gebunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
