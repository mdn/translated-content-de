---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: ac513ee8e865b8de037adee906d10fd888004cce
---

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später an den Server zurücksenden kann.
Um mehrere Cookies zu senden, sollten in derselben Antwort mehrere `Set-Cookie`-Header gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Frontendcode daran, auf den `Set-Cookie`-Header zuzugreifen, wie es von der Fetch-Spezifikation verlangt wird, die `Set-Cookie` als einen [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus jedem dem Frontendcode zugänglichen Antwort-Header herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0).
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser die im Antwort-Header des Servers enthaltenen `Set-Cookie`-Header, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie die Seiten [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [Artikel zu XMLHttpRequest](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldeinformationen einbezogen werden.

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
  - : Definiert den Namen des Cookies und dessen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen außer Steuerzeichen ({{Glossary("ASCII", "ASCII")}} Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tab und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`) enthalten.

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt werden und jedes US-ASCII-Zeichen außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Anführungszeichen, Kommas, Semikolons und Rückwärtsschrägen enthalten.

    **Kodierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozent-Codierung")}} der Cookie-Werte durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die Prozent-Codierung hilft, die Anforderungen der für `<cookie-value>` erlaubten Zeichen zu erfüllen.

    > [!NOTE]
    > Einige Cookie-Namen enthalten Präfixe, die bestimmte Einschränkungen für die Attribute des Cookies bei unterstützenden Benutzeragenten auferlegen. Weitere Informationen finden Sie unter [Cookie-Präfixe](#cookie-präfixe).

- `Domain=<domain-value>` {{optional_inline}}
  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain oder eine Domain höherer Ordnung kann als Wert gesetzt werden, sofern diese kein öffentlicher Suffix ist. Die Festlegung der Domain macht das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar.

    Wenn dieses Attribut weggelassen wird, wird es standardmäßig auf den Host der aktuellen Dokument-URL gesetzt, ohne Subdomains einzuschließen.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrere Host-/Domainwerte sind _nicht_ zulässig, aber wenn eine Domain _angegeben_ wird, sind Subdomains immer enthalten.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Zeitstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Session-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, nach welchem das Sitzungscookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellung_, die alle Registerkarten speichert und sie beim nächsten Browserstart wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen worden wäre.

    Das `Expires`-Attribut wird vom Server mit einem Wert im Verhältnis zu seiner eigenen internen Uhr gesetzt, die von der der Client-Browsers abweichen kann.
    Firefox und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um Uhrzeitunterschiede zu kompensieren, indem Cookies gemäß der vom Server beabsichtigten Zeit gespeichert und abgelaufen werden.
    Die Anpassung für Zeitschwankungen wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut analysiert werden sollte, aber nicht, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verbietet JavaScript den Zugriff auf das Cookie, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit von JavaScript initiierten Anfragen gesendet wird, zum Beispiel bei Aufrufen von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies verringert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl der Sekunden bis zum Ablauf des Cookies an. Eine Null oder negative Zahl wird das Cookie sofort ablaufen lassen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie in einer partitionierten Speicherung gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, auch die [`Secure`-Direktive](#secure) gesetzt sein muss.
    Siehe [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der _vorhanden_ sein muss, damit der Browser den `Cookie`-Header bei der angeforderten URL sendet.

    Wenn dieses Attribut weggelassen wird, wird es standardmäßig auf den Pfadanteil der Anforderungs-URL gesetzt. Zum Beispiel, wenn ein Cookie durch eine Anfrage an `https://example.com/docs/Web/HTTP/index.html` gesetzt wird, wäre der Standardpfad `/docs/Web/HTTP/`.

    Der Schrägstrich (`/`) wird als Verzeichnistrennzeichen interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,
    - werden die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP` alle übereinstimmen.
    - die Anforderungspfade `/`, `/docsets`, `/fr/docs` werden nicht übereinstimmen.

    > [!NOTE]
    > Das `path`-Attribut ermöglicht es Ihnen, zu steuern, welche Cookies der Browser basierend auf den unterschiedlichen Teilen einer Seite sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unautorisiertem Auslesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Kontrolliert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird: das heißt Anfragen, die von einer anderen {{Glossary("site", "Seite")}}, einschließlich des Schemas, als die Seite, die das Cookie gesetzt hat, ausgehen. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site-Request-Forgery (CSRF)")}} Angriffe.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} ausgehen, die das Cookie gesetzt hat.

    - `Lax`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} ausgehen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Top-Level-Navigation: das bedeutet im Wesentlichen, dass die Anfrage die im Adressfeld des Browsers angezeigte URL ändert.
          - Dies würde zum Beispiel Anfragen ausschließen, die die [`fetch()`](/de/docs/Web/API/Window/fetch) API verwenden, oder Anfragen für Subressourcen von {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elementen, oder Navigationen innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Es würden jedoch Anfragen enthalten sein, die erfolgen, wenn der Benutzer einen Link im Top-Level-Browsing-Kontext von einer Seite zu einer anderen anklickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location), oder das Absenden eines {{htmlelement("form")}}-Formulars.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere sind damit {{httpmethod("POST")}}, {{httpmethod("PUT")}}, und {{httpmethod("DELETE")}} ausgeschlossen.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine permissivere Version verwendet. In dieser permissiveren Version sind Cookies auch in {{httpmethod("POST")}}-Anfragen enthalten, solange sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Sendet das Cookie sowohl mit Cross-Site- als auch mit Same-Site-Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie nur dann an den Server gesendet wird, wenn eine Anfrage mit dem Schema `https:` (außer auf localhost) erfolgt und somit widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}} Angriffe ist.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten, etc.) verhindert.
    > Cookies mit diesem Attribut können weiterhin entweder mit Zugriff auf die Festplatte des Clients oder von JavaScript aus gelesen/geändert werden, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt ist.

## Cookie-Präfixe

Einige Cookie-Namen enthalten Präfixe, die bestimmte Einschränkungen für die Attribute des Cookies bei unterstützenden Benutzeragenten auferlegen. Alle Cookie-Präfixe beginnen mit einem doppelten Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem Attribut `Secure` von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem Attribut `Secure` von einer sicheren Seite (HTTPS) gesetzt werden. Zusätzlich dürfen sie kein `Domain`-Attribut haben, und das `Path`-Attribut muss auf `/` gesetzt sein. Dies gewährleistet, dass solche Cookies nur an den Host, der sie gesetzt hat, gesendet werden, und nicht an einen anderen Host in der Domain. Es garantiert auch, dass sie Host-weit gesetzt sind und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das so nah wie möglich an einer Sicherheitsgrenze behandelt wird.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht oder verändert über JavaScript-Funktionen wie `Document.cookie` oder die [Cookie-Store-API](/de/docs/Web/API/Cookie_Store_API) gesetzt werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zusätzlich haben sie dieselben Einschränkungen wie `__Host-`-präfixierte Cookies. Diese Kombination ergibt ein Cookie, das so nah wie möglich an einer Sicherheitsgrenze behandelt wird, während gleichzeitig sichergestellt wird, dass Entwickler und Serverbetreiber wissen, dass sein Umfang auf HTTP-Anfragen beschränkt ist.

> [!WARNING]
> Sie können sich nicht auf diese zusätzlichen Zusicherungen bei Browsern verlassen, die keine Cookie-Präfixe unterstützen; in solchen Fällen werden Cookies mit Präfix stets akzeptiert.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie nicht das `Expires` oder `Max-Age`-Attribut spezifizieren.

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

Das folgende Cookie wird abgelehnt, wenn es von einem auf `original-company.com` gehosteten Server gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bereitstellenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem auf `example.com` gehosteten Server gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookie-Namen, die mit `__Secure-` oder `__Host-` anfangen, können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Cookie-Namen, die mit `__Http-` oder `__Host-Http-` anfangen, können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden und nicht clientseitig über JavaScript.

Zusätzlich müssen Cookies mit dem `__Host-` oder `__Host-Http-` Präfix den Pfad `/` haben (was bedeutet, auf jedem Pfad des Hosts) und dürfen kein `Domain`-Attribut haben.

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
> Partitionierte Cookies müssen mit `Secure` festgelegt werden. Es wird zudem empfohlen, beim Setzen partitionierter Cookies ein `__Host` oder `__Host-Http-` Präfix zu verwenden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev-Blog)
