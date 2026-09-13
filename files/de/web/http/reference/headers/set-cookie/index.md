---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: d8b9ef6d4342a26e188204a479eede5f057aceab
---

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an das Benutzeragent zu senden, sodass das Benutzeragent es später zurück an den Server senden kann.
Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser verhindern, dass Frontend-JavaScript-Code auf den `Set-Cookie`-Header zugreift, wie es vom Fetch-Spezifikationen verlangt wird. Diese definieren `Set-Cookie` als einen [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name), der [herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) von jeder Antwort, die dem Frontend-Code zugänglich gemacht wird.
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser die in der Serverantwort vorhandenen `Set-Cookie`-Header, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie man Anmeldeinformationen einbezieht.

Für weitere Informationen siehe den Leitfaden über [die Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

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
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header")}}</th>
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

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, mit Ausnahme von Steuerzeichen ({{Glossary("ASCII", "ASCII")}} Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in Anführungszeichen eingeschlossen werden und beliebige US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Codierung**: Viele Implementierungen führen {{Glossary("Percent-encoding", "Prozentcodierung")}} bei Cookie-Werten durch. Dies ist jedoch nicht durch die RFC-Spezifikationen vorgeschrieben. Die Prozentcodierung hilft jedoch dabei, die Anforderungen an die für `<cookie-value>` erlaubten Zeichen zu erfüllen.

    > [!NOTE]
    > Einige Cookie-Namen enthalten Präfixe, die spezifische Einschränkungen hinsichtlich der Attribute des Cookies bei unterstützenden Benutzeragenten auferlegen. Siehe [Cookie-Präfixe](#cookie-präfixe) für weitere Informationen.

- `Domain=<domain-value>` {{optional_inline}}
  - : Legt fest, an welche Hosts das Cookie gesendet wird.

    Die Festlegung der Domain macht das Cookie für diese Domain und alle ihre Subdomains verfügbar.
    Wenn sie weggelassen wird, wird das Cookie nur an den Host zurückgesendet, der es gesendet hat (d.h. es wird zu einem "Host-only Cookie").
    Dies ist restriktiver als die Angabe des Hostnamens, da das Cookie nicht für Subdomains des Hosts verfügbar gemacht wird.

    Der Wert muss die Domain des Servers sein, der den `Set-Cookie`-Antwort-Header sendet, oder eine übergeordnete Domain dieser Serverdomain.
    Sie kann kein [public suffix](https://publicsuffix.org/) wie `com`, `co.uk` oder `github.io` sein.
    Ein Beispiel: Eine Antwort von `api.example.com` kann `Domain=api.example.com` oder `Domain=example.com` setzen, aber nicht `Domain=beta.api.example.com`, `Domain=other.example.com` oder `Domain=com`.
    Ebenso kann eine Antwort von `shop.example.co.uk` `Domain=shop.example.co.uk` oder `Domain=example.co.uk` setzen, aber nicht `Domain=co.uk`, da `co.uk` ein Public Suffix ist.
    Cookies, die gegen diese Regeln verstoßen, werden ignoriert.

    Entgegen früherer Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrfache Host-/Domainwerte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben_ ist, sind Subdomains immer einbezogen.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Session-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, danach wird das Session-Cookie entfernt.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_ -Funktion, die alle Registerkarten speichert und beim nächsten Verwenden des Browsers wiederherstellt. Sitzungs-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die sich von der des Client-Browsers unterscheiden kann.
    Firefox und auf Chromium basierende Browser verwenden intern einen Verfallswert (Max-Age), der angepasst wird, um die Uhrzeitdifferenz zu kompensieren, wobei Cookies basierend auf der vom Server beabsichtigten Zeit gespeichert und abgelaufen sind.
    Der Abgleich für die Uhrenabweichung wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verhindert, dass JavaScript auf das Cookie zugreift, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit von JavaScript initiierten Anfragen gesendet wird, zum Beispiel beim Aufrufen von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mindert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl lassen das Cookie sofort ablaufen. Wenn `Expires` und `Max-Age` beide gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie unter Verwendung einer partitionierten Speicherung gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure`-Direktive](#secure) ebenfalls gesetzt werden muss.
    Siehe [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der in der angeforderten URL vorhanden sein _muss_, damit der Browser den `Cookie`-Header sendet.

    Wenn weggelassen, wird dieses Attribut standardmäßig auf den Pfadkomponenten der Anforderungs-URL gesetzt. Wenn ein Cookie zum Beispiel durch eine Anfrage an `https://example.com/docs/Web/HTTP/index.html` gesetzt wird, lautet der Standardpfad `/docs/Web/HTTP/`.

    Der Schrägstrich (`/`) wird als Verzeichnis-Trennzeichen interpretiert und auch Unterverzeichnisse werden abgeglichen. Zum Beispiel für `Path=/docs`,
    - werden die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` alle abgeglichen.
    - die Anforderungspfade `/`, `/docsets`, `/fr/docs` werden nicht abgeglichen.

    > [!NOTE]
    > Das `path`-Attribut ermöglicht es Ihnen zu steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) gegen unbefugtes Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Steuert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird: das heißt, Anfragen, die von einer anderen {{Glossary("site", "Seite")}} stammen, einschließlich des Schemas, von der Seite, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery (CSRF)")}} Angriffe.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat.

    - `Lax`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Top-Level-Navigation: Dies bedeutet im Wesentlichen, dass die Anfrage bewirkt, dass sich die in der Adressleiste des Browsers gezeigte URL ändert.
          - Dies würde zum Beispiel Anfragen ausschließen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API gemacht werden, oder Anfragen für Subressourcen von {{htmlelement("img")}} oder {{htmlelement("script")}}-Elementen oder Navigationen innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Einschließen würde es Anfragen, die gemacht werden, wenn der Benutzer in einem Top-Level-Browsing-Kontext von einer Seite zur anderen klickt oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location) oder ein {{htmlelement("form")}}-Formularabsendung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}} und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht spezifiziert ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine permissivere Version verwendet. In dieser permissiveren Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen einbezogen, solange sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Sendet das Cookie sowohl mit Cross-Site- als auch mit Same-Site-Anfragen.
        Das `Secure`-Attribut muss auch gesetzt werden, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie nur gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost) und daher widerstandsfähiger gegen [Man-in-the-Middle (MITM)](/de/docs/Web/Security/Attacks/MITM) Angriffe ist.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten, etc.) verhindert.
    > Cookies mit diesem Attribut können dennoch entweder über den Zugriff auf die Festplatte des Clients oder von JavaScript gelesen/geändert werden, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:` Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Cookies-Präfixe

Einige Cookies-Namen enthalten Präfixe, die spezifische Einschränkungen hinsichtlich der Attribute des Cookies bei unterstützenden Benutzeragenten auferlegen. Alle Cookie-Präfixe beginnen mit einem doppelten Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Zusätzlich dürfen sie kein `Domain`-Attribut spezifiziert haben und das `Path`-Attribut muss auf `/` gesetzt werden. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an einen anderen Host auf der Domain. Es garantiert auch, dass sie hostweit gesetzt und nicht auf einem beliebigen Pfad auf diesem Host überschrieben werden können. Diese Kombination führt zu einem Cookie, das so nah wie möglich kommt, die Herkunft als Sicherheitsgrenze zu behandeln.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Funktionen wie `Document.cookie` oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt und das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zusätzlich haben sie die gleichen Einschränkungen wie mit `__Host-`-präfixierten Cookies. Diese Kombination führt zu einem Cookie, das so nah wie möglich kommt, die Herkunft als Sicherheitsgrenze zu behandeln, während gleichzeitig sichergestellt wird, dass Entwickler und Serverbetreiber wissen, dass sein Anwendungsbereich auf HTTP-Anfragen beschränkt ist.

> [!WARNING]
> Sie können sich nicht auf diese zusätzlichen Zusicherungen bei Browsern verlassen, die Cookie-Präfixe nicht unterstützen; in solchen Fällen werden Präfix-Cookies immer akzeptiert.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie nicht das `Expires`- oder `Max-Age`-Attribut angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) und nicht beim Schließen des Clients entfernt.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die nicht den Server einschließt, der es gesetzt hat, [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bedienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookie-Namen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Cookie-Namen mit dem Präfix `__Http-` oder `__Host-Http-` können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden und zusätzlich das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header und nicht clientseitig über JavaScript gesetzt wurden.

Außerdem müssen Cookies mit dem Präfix `__Host-` oder `__Host-Http-` einen Pfad von `/` haben (bedeutet, jeglicher Pfad am Host) und dürfen kein `Domain`-Attribut haben.

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

### Partitionierter Cookie

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Darüber hinaus wird empfohlen, ein `__Host`- oder `__Host-Http-`-Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [SameSite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
