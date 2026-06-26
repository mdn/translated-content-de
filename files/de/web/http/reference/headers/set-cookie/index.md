---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

Der HTTP-**`Set-Cookie`**-{{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzer-Agent zu senden, damit der Benutzer-Agent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren den Zugriff von Frontend-JavaScript-Code auf den `Set-Cookie`-Header, wie es von der Fetch-Spezifikation gefordert wird, die `Set-Cookie` als [verbotenen Antwort-Headernamen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) aus jeder Antwort, die dem Frontend-Code gezeigt wird.
>
> Bei einer [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage, die [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie`-Header in der Serverantwort, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Die Fetch API verwenden - Anmeldeinformationen einschließen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Sie Anmeldeinformationen einschließen können.

Weitere Informationen finden Sie im Leitfaden zu [HTTP-Cookies verwenden](/de/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
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
  - : Definiert den Cookie-Namen und seinen Wert. Eine Definition eines Cookies beginnt mit einem Namen-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten, außer Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichens (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in doppelte Anführungszeichen eingeschlossen werden und jedes US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, doppelte Anführungszeichen, Kommata, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozent-Kodierung")}} von Cookie-Werten durch. Dies ist jedoch nicht durch die RFC-Spezifikation erforderlich. Die Prozent-Kodierung hilft, die Anforderungen an die erlaubten Zeichen für `<cookie-value>` zu erfüllen.

    > [!NOTE]
    > Einige Cookie-Namen enthalten Präfixe, die bestimmte Einschränkungen für die Attribute des Cookies in unterstützenden Benutzer-Agenten auferlegen. Siehe [Cookie-Präfixe](#cookie-präfixe) für weitere Informationen.

- `Domain=<domain-value>` {{optional_inline}}
  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domäne kann als Wert gesetzt werden oder eine Domäne höherer Ordnung, es sei denn, es handelt sich um ein öffentliches Suffix. Das Setzen der Domäne macht das Cookie sowohl verfügbar für diese, als auch für alle ihre Subdomänen.

    Wenn weggelassen, wird das Cookie nur an den Host zurückgegeben, der es gesendet hat (d.h. es wird zu einem "Host-only-Cookie"). Dies ist restriktiver als das Setzen des Hostnamens, da das Cookie für Subdomänen des Hosts nicht verfügbar gemacht wird.

    Entgegen früherer Spezifikationen werden führende Punkte in Domänennamen (`.example.com`) ignoriert.

    Mehrere Host-/Domänenwerte sind _nicht_ erlaubt, aber wenn eine Domäne _angegeben_ ist, dann sind Subdomänen immer eingeschlossen.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Zeitstempel an. Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht festgelegt, wird das Cookie zu einem **Sitzungscookie**. Eine Sitzung endet, wenn der Client heruntergefahren wird, wonach das Sitzungscookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und beim nächsten Gebrauch des Browsers wiederherstellt. Sitzungscookies werden ebenfalls wiederhergestellt, als wäre der Browser nie geschlossen worden.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr festgelegt, die sich von der des Client-Browsers unterscheiden kann. Firefox und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der an die Uhrzeitdifferenz angepasst ist, und speichern und verfallen Cookies basierend auf der vom Server beabsichtigten Zeit. Die Anpassung für Abweichungen in der Uhrzeit wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet. Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verhindert, dass JavaScript auf das Cookie zugreift, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft. Beachten Sie, dass ein mit `HttpOnly` erstelltes Cookie dennoch mit von JavaScript initiierten Anfragen gesendet wird, zum Beispiel beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch). Dies mildert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl der Sekunden an, nach denen das Cookie abläuft. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` festgelegt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie in einer partitionierten Speicherung gespeichert werden sollte. Beachten Sie, dass, wenn dies gesetzt ist, auch die [`Secure`-Direktive](#secure) gesetzt sein muss. Siehe [Cookies mit unabhängiger partitionierter Speicherung (CHIPS)](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) für mehr Details.

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der _vorhanden sein muss_ in der angeforderten URL, damit der Browser den `Cookie`-Header sendet.

    Wenn weggelassen, wird dieses Attribut standardmäßig auf den Pfadbestandteil der Anforderungs-URL gesetzt. Zum Beispiel, wenn ein Cookie von einer Anfrage an `https://example.com/docs/Web/HTTP/index.html` gesetzt wird, wäre der Standardpfad `/docs/Web/HTTP/`.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnistrenner interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,
    - werden die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP` alle übereinstimmen.
    - werden die Anforderungspfade `/`, `/docsets`, `/fr/docs` nicht übereinstimmen.

    > [!NOTE]
    > Das `path`-Attribut ermöglicht Ihnen die Kontrolle darüber, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Seite sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Kontrolliert, ob ein Cookie mit standortübergreifenden Anfragen gesendet wird: das heißt, Anfragen, die von einem anderen {{Glossary("site", "Site")}}, inklusive des Schemas, als die Site, die das Cookie gesetzt hat, stammen. Dies bietet einen gewissen Schutz gegen bestimmte standortübergreifende Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Senden Sie das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat.

    - `Lax`
      - : Senden Sie das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat, und für standortübergreifende Anfragen, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Top-Level-Navigation: dies bedeutet im Wesentlichen, dass die Anfrage die URL ändert, die in der Adressleiste des Browsers angezeigt wird.
          - Dies würde zum Beispiel Anfragen ausschließen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API oder Anfragen für Sub-Ressourcen von {{htmlelement("img")}} oder {{htmlelement("script")}}-Elementen, oder Navigierungen innerhalb von {{htmlelement("iframe")}}-Elementen getätigt wurden.

          - Es würde Anfragen einschließen, die getätigt werden, wenn der Benutzer in der obersten Browsing-Ebene auf einen Link von einer Site zu einer anderen klickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location), oder eine {{htmlelement("form")}}-Einreichung.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere, dies schließt {{httpmethod("POST")}}, {{httpmethod("PUT")}}, und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht spezifiziert ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standardwert angewendet wird, wird eine freizügigere Version verwendet. In dieser freizügigeren Version werden Cookies auch bei {{httpmethod("POST")}}-Anfragen eingeschlossen, solange sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`
      - : Senden Sie das Cookie sowohl mit standortübergreifenden als auch mit gleichsite-bezogenen Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost), und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` alle Zugriffe auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten usw.) verhindert.
    > Cookies mit diesem Attribut können dennoch gelesen/geändert werden, entweder mit Zugriff auf die Festplatte des Clients oder von JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Cookie-Präfixe

Einige Cookie-Namen enthalten Präfixe, die bestimmte Einschränkungen für die Attribute des Cookies in unterstützenden Benutzer-Agenten auferlegen. Alle Cookie-Präfixe beginnen mit einem doppelten Unterstrich (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:

- **`__Secure-`**: Cookies mit Namen, die mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies mit Namen, die mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Darüber hinaus dürfen sie kein `Domain`-Attribut haben, und das `Path`-Attribut muss auf `/` gesetzt werden. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an einen anderen Host auf der Domain. Es garantiert auch, dass sie hostweit gesetzt sind und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination ergibt ein Cookie, das sich dem Ursprung als Sicherheitsgrenze so nahe wie möglich nähert.
- **`__Http-`**: Cookies mit Namen, die mit `__Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht via JavaScript-Funktionen wie `Document.cookie` oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder geändert werden).
- **`__Host-Http-`**: Cookies mit Namen, die mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut gesetzt haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Darüber hinaus unterliegen sie den gleichen Einschränkungen wie Cookies mit dem Präfix `__Host-`. Diese Kombination ergibt ein Cookie, das dem Ursprung als Sicherheitsgrenze so nahe wie möglich kommt und gleichzeitig sicherstellt, dass Entwickler und Serverbetreiber wissen, dass sein Geltungsbereich auf HTTP-Anfragen beschränkt ist.

> [!WARNING]
> Sie können sich nicht auf diese zusätzlichen Zusicherungen bei Browsern verlassen, die keine Cookie-Präfixe unterstützen; in solchen Fällen werden präfixierte Cookies immer akzeptiert.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Dauer (`Max-Age`) entfernt und nicht beim Schließen des Clients.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domänen

Ein Cookie für eine Domäne, die den Server, der es gesetzt hat, nicht einschließt, [sollte vom Benutzer-Agenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der dienenden Domäne wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookie-Namen, die mit `__Secure-` oder `__Host-` präfixiert sind, können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Cookie-Namen, die mit `__Http-` oder `__Host-Http-` präfixiert sind, können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden und zusätzlich das `HttpOnly`-Attribut gesetzt sein muss, um zu beweisen, dass sie über den `Set-Cookie`-Header und nicht clientseitig über JavaScript gesetzt wurden.

Darüber hinaus müssen Cookies mit dem Präfix `__Host-` oder `__Host-Http-` einen Pfad von `/` (d.h. jeder Pfad auf dem Host) haben und dürfen kein `Domain`-Attribut haben.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Darüber hinaus wird empfohlen, ein `__Host`- oder `__Host-Http-`-Präfix beim Setzen von partitionierten Cookies zu verwenden, um sicherzustellen, dass sie an den Hostnamen und nicht an die registrierbare Domäne gebunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
