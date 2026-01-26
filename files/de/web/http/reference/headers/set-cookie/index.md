---
title: Set-Cookie header
short-title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

Der HTTP **`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzer-Agent zu senden, sodass dieser es später wieder an den Server senden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Frontend-Code, der auf den `Set-Cookie`-Header zugreift, wie es die Fetch-Spezifikation erfordert. Diese definiert `Set-Cookie` als einen [gesperrten Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name), der [herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) von jeder Antwort, die dem Frontend-Code zugänglich ist.
>
> Wenn eine [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API) Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser die `Set-Cookie`-Header in der Serverantwort, es sei denn, die Anfrage beinhaltet Anmeldeinformationen. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu lernen, wie Sie Anmeldeinformationen einbinden.

Weitere Informationen finden Sie im Leitfaden zu [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Gesperrter Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_response_header_name", "Gesperrter Antwort-Header")}}</th>
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
    Die Definition eines Cookies beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann alle US-ASCII-Zeichen enthalten, außer Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt sein und jedes US-ASCII-Zeichen enthalten, außer Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerzeichen")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen eine {{Glossary("Percent-encoding", "Prozentkodierung")}} der Cookie-Werte durch. Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben. Die Prozentkodierung hilft jedoch, die Anforderungen der erlaubten Zeichen für `<cookie-value>` zu erfüllen.

    > [!NOTE]
    > Einige Cookienamen enthalten Präfixe, die spezifische Einschränkungen auf die Attribute des Cookies in unterstützenden Benutzeragenten auferlegen. Weitere Informationen finden Sie unter [Cookie-Präfixe](#cookie-präfixe).

- `Domain=<domain-value>` {{optional_inline}}
  - : Definiert den Host, an den das Cookie gesendet wird.

    Als Wert kann nur die aktuelle Domain oder eine Domain höherer Ordnung gesetzt werden, es sei denn, es handelt sich um ein öffentliches Suffix. Das Setzen der Domain macht das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar.

    Wenn es weggelassen wird, wird das Cookie nur an den Host zurückgesendet, der es gesendet hat (d.h. es wird zu einem "host-only cookie").
    Dies ist restriktiver, als den Hostnamen zu setzen, da das Cookie nicht für Subdomains des Hosts verfügbar gemacht wird.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrere Host-/Domain-Werte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben_ ist, dann sind Subdomains immer eingeschlossen.

- `Expires=<date>` {{optional_inline}}
  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Zeitstempel an.
    Siehe {{HTTPHeader("Date")}} für das erforderliche Format.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungs-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, danach wird das Sitzungs-Cookie entfernt.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellung_-Funktion, die alle Tabs speichert und diese beim nächsten Gebrauch des Browsers wiederherstellt. Sitzungs-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die von der des Client-Browsers abweichen kann.
    Firefox und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um den Unterschied in der Uhrzeit auszugleichen. Cookies werden basierend auf der vom Server beabsichtigten Zeit gespeichert und ablaufen gelassen.
    Die Anpassung für die Uhrdifferenz wird aus dem Wert des {{httpheader("DATE")}} Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}
  - : Verbietet JavaScript den Zugriff auf das Cookie, beispielsweise über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, weiterhin mit JavaScript-initiierten Anfragen gesendet wird, z. B. beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mindert Angriffe gegen Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}
  - : Gibt die Anzahl von Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl wird das Cookie sofort ablaufen lassen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}
  - : Gibt an, dass das Cookie unter Verwendung einer partitionierten Speicherung gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure`-Direktive](#secure) ebenfalls gesetzt werden muss.
    Weitere Einzelheiten finden Sie unter [Cookies mit unabhängigem partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies).

- `Path=<path-value>` {{optional_inline}}
  - : Gibt den Pfad an, der _in_ der angeforderten URL existieren _muss_, damit der Browser den `Cookie`-Header sendet.

    Wenn weggelassen, wird dieses Attribut standardmäßig auf den Pfad der Anfrage-URL gesetzt. Wenn ein Cookie beispielsweise durch eine Anfrage an `https://example.com/docs/Web/HTTP/index.html` gesetzt wird, würde der Standardpfad `/docs/Web/HTTP/` sein.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnis-Trennzeichen interpretiert, und Subverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,
    - werden die Anfragen für die Pfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` alle abgeglichen.
    - werden die Anfragen für die Pfade `/`, `/docsets`, `/fr/docs` nicht abgeglichen.

    > [!NOTE]
    > Das `path`-Attribut lässt Sie steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Website sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) vor unbefugtem Lesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}
  - : Steuert, ob ein Cookie bei Anfragen von anderen {{Glossary("site", "Seiten")}} gesendet wird, einschließlich des Schemas, von der Seite, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffe.

    Die möglichen Attributwerte sind:
    - `Strict`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat.

    - `Lax`
      - : Sendet das Cookie nur für Anfragen, die von derselben {{Glossary("site", "Seite")}} stammen, die das Cookie gesetzt hat, und für Anfragen von anderen Seiten, die beide der folgenden Kriterien erfüllen:
        - Die Anfrage ist eine Top-Level-Navigation: Das bedeutet im Wesentlichen, dass die Anfrage dazu führt, dass die URL in der Adressleiste des Browsers wechselt.
          - Dies würde zum Beispiel Anfragen ausschließen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API gemacht werden, oder Anfragen für Subressourcen aus {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elementen, oder Navigieren innerhalb von {{htmlelement("iframe")}}-Elementen.

          - Es würde Anfragen einschließen, die auftauchen, wenn der Benutzer auf einen Link im Top-Level-Browsing-Kontext von einer Seite zu einer anderen klickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location), oder einen {{htmlelement("form")}}-Absenden.

        - Die Anfrage verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: Im Besonderen schließt dies {{httpmethod("POST")}}, {{httpmethod("PUT")}} und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine permissivere Version verwendet. In dieser permissiveren Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen einbezogen, solange sie nicht mehr als zwei Minuten vor der gestellten Anfrage gesetzt wurden.

    - `None`
      - : Sendet das Cookie mit sowohl cross-site als auch same-site Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn Sie diesen Wert verwenden.

- `Secure` {{optional_inline}}
  - : Gibt an, dass das Cookie nur dann an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer bei localhost) und ist daher resistenter gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeglichen Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten etc.) verhindert.
    > Cookies mit diesem Attribut können noch durch Zugriff auf die Festplatte des Clients oder durch JavaScript gelesen/modifiziert werden, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Cookie-Präfixe

Einige Cookienamen enthalten Präfixe, die spezifische Einschränkungen auf die Attribute des Cookies in unterstützenden Benutzeragenten auferlegen. Alle Cookie-Präfixe beginnen mit einem Doppel-Underscore (`__`) und enden mit einem Bindestrich (`-`). Die folgenden Präfixe sind definiert:

- **`__Secure-`**: Cookies, deren Namen mit `__Secure-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden.
- **`__Host-`**: Cookies, deren Namen mit `__Host-` beginnen, müssen mit dem `Secure`-Attribut von einer sicheren Seite (HTTPS) gesetzt werden. Zusätzlich dürfen sie kein `Domain`-Attribut spezifiziert haben, und das `Path`-Attribut muss auf `/` gesetzt werden. Dies garantiert, dass solche Cookies nur an den Host gesendet werden, der sie gesetzt hat, und nicht an irgendeinen anderen Host auf der Domain. Es wird auch garantiert, dass sie hostweit gesetzt sind und auf keinem Pfad auf diesem Host überschrieben werden können. Diese Kombination führt zu einem Cookie, das dem Konzept einer Sicherheitsgrenze für den Ursprung so nahe wie möglich kommt.
- **`__Http-`**: Cookies, deren Namen mit `__Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und zusätzlich muss das `HttpOnly`-Attribut gesetzt sein, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden (sie können nicht über JavaScript-Funktionen wie `Document.cookie` oder die [Cookie Store API](/de/docs/Web/API/Cookie_Store_API) gesetzt oder modifiziert werden).
- **`__Host-Http-`**: Cookies, deren Namen mit `__Host-Http-` beginnen, müssen mit dem `Secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden und müssen das `HttpOnly`-Attribut haben, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden. Zusätzlich haben sie auch dieselben Einschränkungen wie die mit `__Host-`-Präfix gesetzten Cookies. Diese Kombination führt zu einem Cookie, das dem Konzept einer Sicherheitsgrenze für den Ursprung so nahe wie möglich kommt, während gleichzeitig sichergestellt wird, dass Entwickler und Serverbetreiber wissen, dass sein Gültigkeitsbereich auf HTTP-Anfragen beschränkt ist.

> [!WARNING]
> Sie können sich nicht auf diese zusätzlichen Sicherheiten bei Browsern verlassen, die Cookie-Präfixe nicht unterstützen; in solchen Fällen werden präfixierte Cookies immer akzeptiert.

## Beispiele

### Sitzungscookie

Sitzungscookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungscookies, wenn sie das Attribut `Expires` oder `Max-Age` nicht spezifizieren.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden an einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitdauer (`Max-Age`) entfernt, und nicht, wenn der Client geschlossen wird.

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

Cookienamen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Cookienamen mit dem Präfix `__Http-` oder `__Host-Http-` können nur verwendet werden, wenn sie mit dem `Secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden und zusätzlich das `HttpOnly`-Attribut haben müssen, um zu beweisen, dass sie über den `Set-Cookie`-Header gesetzt wurden und nicht clientseitig über JavaScript.

Zusätzlich müssen Cookies mit dem `__Host-` oder `__Host-Http-` Präfix einen Pfad von `/` haben (bedeutet jeden Pfad beim Host) und dürfen kein `Domain`-Attribut haben.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Darüber hinaus wird empfohlen, ein `__Host` oder `__Host-Http-` Präfix zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domain zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite cookies explained](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
