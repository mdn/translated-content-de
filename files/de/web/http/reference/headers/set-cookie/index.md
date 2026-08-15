---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den User-Agent zu senden, damit der User-Agent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren Frontend-JavaScript-Code vor dem Zugriff auf den `Set-Cookie`-Header, wie es die Fetch-Spezifikation erfordert, die `Set-Cookie` als [verbotenen Antwort-Headernamen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus allen Antworten herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0), die dem Frontend-Code zugänglich gemacht werden.
>
> Wenn eine [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie`-Header in der Antwort des Servers, es sei denn, die Anfrage enthält Anmeldedaten. Besuchen Sie [Verwendung der Fetch-API - Einbeziehen von Anmeldedaten](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Sie Anmeldedaten einbeziehen können.

Weitere Informationen finden Sie im Leitfaden zur [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

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
  - : Definiert den Cookienamen und dessen Wert. Eine Cookiedefinition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann aus beliebigen US-ASCII-Zeichen bestehen, mit Ausnahme von Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulatoren und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt werden und jedes US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozentkodierung")}} der Cookie-Werte durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die Prozentkodierung hilft dabei, die Anforderungen an die Zeichen zu erfüllen, die für `<cookie-value>` erlaubt sind.

    > [!NOTE]
    > Einige Cookie-Namen enthalten Präfixe, die spezifische Einschränkungen für die Attribute des Cookies bei unterstützenden User-Agents auferlegen. Weitere Informationen finden Sie unter [Cookie-Präfixe](#cookie-präfixe).

- `Domain=<domain-value>` {{optional_inline}}
  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur der aktuelle Domain-Name oder eine höher geordnete Domain, außer es handelt sich um ein öffentliches Suffix, kann als Wert gesetzt werden. Die Festlegung der Domain macht das Cookie für diese und alle ihre Subdomains verfügbar.

    Wenn diese Angabe weggelassen wird, wird das Cookie nur an den Host zurückgegeben, der es gesendet hat (d.h. es wird ein "nur-Host-Cookie"). Dies ist restriktiver als die Angabe des Host-Namens, da das Cookie für die Subdomains des Hosts nicht verfügbar gemacht wird.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrere Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain _spezifiziert_ ist, sind die Subdomains immer enthalten.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datumsstempel an. Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungscookie**. Eine Sitzung endet, wenn der Client heruntergefahren wird, wonach das Sitzungscookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und sie beim nächsten Neustart des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als wäre der Browser nie geschlossen worden.

    Das `Expires`-Attribut wird vom Server mit einem Wert in Bezug auf seine eigene interne Uhr gesetzt, die von der des Clientbrowsers abweichen kann. Firefox und Browser auf Chromium-Basis verwenden intern einen Verfallswert (max-age), der angepasst wird, um Zeitunterschiede auszugleichen. Sie speichern und verfallen Cookies basierend auf der vom Server beabsichtigten Zeit. Die Anpassung an den Uhrversatz wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet. Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verhindert, dass JavaScript auf das Cookie zugreift, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft. Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, weiterhin mit JavaScript-initiierten Anfragen gesendet wird, beispielsweise bei einem Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch). Dies mildert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie unter Verwendung von partitioniertem Speicher gespeichert werden soll. Beachten Sie, dass, wenn dies gesetzt ist, auch die [`Secure`-Anweisung](#secure) gesetzt werden muss. Weitere Einzelheiten finden Sie unter [Cookies mit unabhängigem partitionierten Zustand (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies).

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der in der angeforderten URL existieren _muss_, damit der Browser den `Cookie`-Header sendet.

    Wenn nicht angegeben, wird dieses Attribut standardmäßig auf die Pfadkomponente der Anforderungs-URL gesetzt. Zum Beispiel: Wenn ein Cookie durch eine Anfrage an `https://example.com/docs/Web/HTTP/index.html` gesetzt wird, würde der Standardpfad `/docs/Web/HTTP/` sein.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnistrenner interpretiert und auch Subverzeichnisse werden gematcht. Zum Beispiel, für `Path=/docs`,
    - die Anforderungs-Pfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` werden alle übereinstimmen.
    - die Anforderungs-Pfade `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

    > [!NOTE]
    > Das `path`-Attribut ermöglicht es Ihnen, zu steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor dem unbefugten Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Steuert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird, also Anfragen, die von einer anderen {{Glossary("site", "Seite")}} stammen, einschließlich des Schemas, von der Seite, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz vor bestimmten Cross-Site-Angriffen, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery (CSRF)")}}-Angriffen.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat.

    - `Lax`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Top-Level-Navigation: Das bedeutet im Wesentlichen, dass die Anfrage dazu führt, dass sich die URL ändert, die in der Adressleiste des Browsers angezeigt wird.
          - Dies würde zum Beispiel Anfragen ausschließen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API gemacht werden, oder Anfragen für Subressourcen aus {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elementen, oder Navigierungen innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Es würde Anfragen einschließen, die gemacht werden, wenn der Benutzer auf einen Link im Top-Level-Browsing-Kontext von einer Seite zu einer anderen klickt, oder eine Zuordnung zu [`document.location`](/de/docs/Web/API/Document/location), oder ein {{htmlelement("form")}}-Sendung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}}-Methode: insbesondere schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}} und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine permissivere Version verwendet. In dieser permissiveren Version sind Cookies auch bei {{httpmethod("POST")}}-Anfragen enthalten, sofern sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Sendet das Cookie sowohl mit Cross-Site- als auch mit Same-Site-Anfragen. Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost) und daher gegen [MitM (Man-in-the-Middle)](/de/docs/Web/Security/Attacks/MITM)-Angriffe widerstandsfähiger ist.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Zugangsdaten usw.) verhindert.
    > Cookies mit diesem Attribut können weiterhin gelesen/geändert werden, entweder mit Zugriff auf die Festplatte des Clients oder aus JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Cookie-Präfixe

Einige Cookie-Namen enthalten Präfixe, die spezifische Einschränkungen für die Attribute des Cookies bei unterstützenden User-Agents auferlegen. Alle Cookie-Präfixe beginnen mit einem doppelten Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Darüber hinaus dürfen sie kein `Domain`-Attribut angegeben haben und das `Path`-Attribut muss auf `/` gesetzt sein. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an einen anderen Host in der Domain. Es garantiert auch, dass sie hostweit gesetzt sind und nicht in einem Pfad auf diesem Host überschrieben werden können. Diese Kombination erzeugt ein Cookie, das so nah wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Funktionen wie `Document.cookie` oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Darüber hinaus haben sie auch dieselben Einschränkungen wie `__Host-`-präfixierte Cookies. Diese Kombination erzeugt ein Cookie, das so nah wie möglich daran ist, den Ursprung als Sicherheitsgrenze zu behandeln, während gleichzeitig sichergestellt wird, dass Entwickler und Serverbetreiber wissen, dass ihr Umfang auf HTTP-Anfragen beschränkt ist.

> [!WARNING]
> Sie können nicht auf diese zusätzlichen Zusicherungen in Browsern zählen, die Cookie-Präfixe nicht unterstützen; in solchen Fällen werden präfixierte Cookies immer akzeptiert.

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

Ein Cookie für eine Domain, die den Server, der es gesetzt hat, nicht einschließt, [sollte vom User-Agent abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem auf `original-company.com` gehosteten Server gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bedienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem auf `example.com` gehosteten Server gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt wurden.

Cookienamen mit dem Präfix `__Http-` oder `__Host-Http-` können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt wurden und zusätzlich das `HttpOnly`-Attribut gesetzt sein muss, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden und nicht auf der Client-Seite über JavaScript.

Darüber hinaus müssen Cookies mit dem Präfix `__Host-` oder `__Host-Http-` einen Pfad von `/` (bedeutet jeden Pfad am Host) haben und dürfen kein `Domain`-Attribut haben.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Darüber hinaus wird empfohlen, beim Setzen von partitionierten Cookies ein `__Host` oder `__Host-Http-` Präfix zu verwenden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Same-Site-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
