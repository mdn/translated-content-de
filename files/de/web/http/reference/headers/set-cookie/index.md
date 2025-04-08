---
title: Set-Cookie
slug: Web/HTTP/Reference/Headers/Set-Cookie
l10n:
  sourceCommit: b540e82db25e1b5fc7b7093575c5c0931216ca17
---

{{HTTPSidebar}}

Der HTTP-**`Set-Cookie`** {{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an das Nutzergerät zu senden, damit das Nutzergerät es später an den Server zurücksenden kann.
Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Code im Frontend daran, auf den `Set-Cookie`-Header zuzugreifen, wie es die Fetch-Spezifikation verlangt, die `Set-Cookie` als [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus allen Antworten herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0), die dem Frontend-Code angezeigt werden.
>
> Wenn eine [Fetch-API](/de/docs/Web/API/Fetch_API/Using_Fetch)- oder [XMLHttpRequest-API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/Guides/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header in der Antwort des Servers, es sei denn, die Anfrage enthält Anmeldedaten. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie man Anmeldedaten einbezieht.

Für weitere Informationen siehe den Leitfaden zum [Verwenden von HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies).

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

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, außer: Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in Anführungszeichen eingeschlossen werden und beliebige US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Whitespace")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen {{Glossary("Percent-encoding", "Prozentkodierung")}} bei Cookie-Werten durch.
    Dies wird jedoch nicht von der RFC-Spezifikation gefordert.
    Die Prozentkodierung hilft, die Anforderungen der zulässigen Zeichen für `<cookie-value>` zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Bedeutung:
    >
    > **`__Secure-`-Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (Bindestrich ist Teil des Präfixes), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) aus gesetzt werden.
    >
    > **`__Host-`-Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an einen anderen Host.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angegeben haben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domain oder eine höher geordnete Domain kann als Wert gesetzt werden, es sei denn, es handelt sich um ein öffentliches Suffix. Wenn die Domain eingestellt ist, wird das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar gemacht.

    Wenn weggelassen, wird dieses Attribut standardmäßig auf den Host der aktuellen Dokument-URL gesetzt, ohne Subdomains einzuschließen.

    Entgegen früheren Spezifikationen werden führende Punkte in Domain-Namen (`.example.com`) ignoriert.

    Mehrfache Host-/Domain-Werte sind _nicht_ zulässig, aber wenn eine Domain _angegeben_ ist, werden Subdomains immer einbezogen.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum/Zeitstempel an.
    Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungs-Cookie**.
    Eine Sitzung endet, wenn der Client herunterfährt, woraufhin das Sitzungs-Cookie entfernt wird.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und sie beim nächsten Start des Browsers wiederherstellt. Sitzungs-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr eingestellt, die von der des Client-Browsers abweichen kann.
    Firefox und Chromium-basierte Browser verwenden intern einen Verfallswert (max-age), der angepasst wird, um Zeitunterschiede auszugleichen, und speichern und verteilen Cookies basierend auf der vom Server beabsichtigten Zeit.
    Die Anpassung der Zeitverschiebung wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut analysiert werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}

  - : Verhindert, dass JavaScript auf das Cookie zugreift, beispielsweise über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, trotzdem mit JavaScript-initiierten Anfragen gesendet wird, zum Beispiel beim Aufruf von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mindert Angriffe gegen Cross-Site Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder eine negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie mit partitioniertem Speicher gespeichert werden soll.
    Beachten Sie, dass in diesem Fall die [`Secure`-Direktive](#secure) ebenfalls gesetzt werden muss.
    Siehe [Cookies mit unabhängigen partitionierten Zuständen (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der in der angeforderten URL _vorhanden sein muss_, damit der Browser den `Cookie`-Header sendet.

    Der Schrägstrich (`/`) wird als Verzeichnistrenner interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,

    - passen die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP`.
    - die Anforderungspfade `/`, `/docsets`, `/fr/docs` stimmen nicht überein.

    > [!NOTE]
    > Das `path`-Attribut ermöglicht es Ihnen zu steuern, welche Cookies der Browser basierend auf den verschiedenen Teilen einer Site sendet.
    > Es ist nicht als Sicherheitsmaßnahme gedacht und [schützt nicht](/de/docs/Web/API/Document/cookie#security) gegen unbefugtes Auslesen des Cookies von einem anderen Pfad.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Kontrolliert, ob ein Cookie mit Cross-Site-Anfragen gesendet wird: das heißt, Anfragen, die von einer anderen {{Glossary("site", "Site")}} stammen, einschließlich des Schemas, als die Site, die das Cookie gesetzt hat. Dies bietet einen gewissen Schutz gegen bestimmte Cross-Site-Angriffe, einschließlich {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}-Angriffen.

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Sendet das Cookie nur für Anfragen, die von der gleichen {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat.

    - `Lax`

      - : Sendet das Cookie nur für Anfragen, die von der gleichen {{Glossary("site", "Site")}} stammen, die das Cookie gesetzt hat, und für Cross-Site-Anfragen, die beide der folgenden Kriterien erfüllen:

        - Die Anforderung ist eine Top-Level-Navigation: Dies bedeutet im Wesentlichen, dass die Anforderung dazu führt, dass sich die in der Adressleiste des Browsers angezeigte URL ändert.

          - Dies würde zum Beispiel Anfragen ausschließen, die mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API gemacht werden, oder Anfragen nach Subressourcen von {{htmlelement("img")}}- oder {{htmlelement("script")}}-Elementen, oder Navigationsvorgängen in {{htmlelement("iframe")}}-Elementen.

          - Es würde Anfragen einschließen, die gemacht werden, wenn der Benutzer auf einen Link im Top-Level-Browsing-Kontext von einer Site zu einer anderen klickt, oder eine Zuweisung zu [`document.location`](/de/docs/Web/API/Document/location), oder eine {{htmlelement("form")}}-Einreichung.

        - Die Anforderung verwendet eine {{Glossary("Safe/HTTP", "sichere")}} Methode: insbesondere schließt das {{httpmethod("POST")}}, {{httpmethod("PUT")}} und {{httpmethod("DELETE")}} aus.

        Einige Browser verwenden `Lax` als Standardwert, wenn `SameSite` nicht angegeben ist: siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

        > [!NOTE]
        > Wenn `Lax` als Standard angewendet wird, wird eine permissivere Version verwendet. In dieser permissiveren Version werden Cookies auch in {{httpmethod("POST")}}-Anfragen aufgenommen, solange sie nicht mehr als zwei Minuten vor der Anfrage gesetzt wurden.

    - `None`

      - : Sendet das Cookie sowohl mit Cross-Site- als auch same-site-Anfragen.
        Das `Secure`-Attribut muss ebenfalls gesetzt werden, wenn dieser Wert verwendet wird.

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie an den Server nur gesendet wird, wenn eine Anfrage mit dem `https:`-Schema erfolgt (außer auf localhost), und ist daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten usw.) verhindert.
    > Cookies mit diesem Attribut können dennoch gelesen/geändert werden, entweder bei Zugriff auf die Festplatte des Clients oder per JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Beispiele

### Sitzungs-Cookie

Sitzungs-Cookies werden entfernt, wenn der Client herunterfährt. Cookies sind Sitzungs-Cookies, wenn sie das `Expires`- oder `Max-Age`-Attribut nicht angeben.

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

Ein Cookie für eine Domain, die nicht den Server einschließt, der es gesetzt hat, [sollte vom Nutzergerät abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

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

Cookienamen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem `secure`-Attribut von einem sicheren (HTTPS) Ursprung gesetzt werden.

Außerdem müssen Cookies mit dem `__Host-`-Präfix einen Pfad von `/` haben (was jeden Pfad beim Host bedeutet) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Bei Clients, die keine Cookie-Präfixe implementieren, können Sie sich nicht auf diese zusätzlichen Sicherheiten verlassen, und präfixierte Cookies werden immer akzeptiert.

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
- [Samesite cookies explained](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
