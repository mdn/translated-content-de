---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: a569e812ee3cf80e5d5fcc3ca6de7e7a174d1175
---

{{HTTPSidebar}}

Der HTTP-**`Set-Cookie`**-{{Glossary("response_header", "Antwortheader")}} wird verwendet, um ein Cookie vom Server an den User-Agent zu senden, sodass der User-Agent es später an den Server zurücksenden kann. Um mehrere Cookies zu senden, sollten mehrere `Set-Cookie`-Header in derselben Antwort gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Code auf der Client-Seite davon, auf den `Set-Cookie`-Header zuzugreifen, wie es von der Fetch-Spezifikation verlangt wird, die `Set-Cookie` als [verbotenen Antwortheadernamen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [ausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0) aus jeder Antwort, die dem Frontend-Code zur Verfügung gestellt wird.
>
> Wenn eine Anforderung der [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder der [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API) [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header in der Serverantwort, es sei denn, die Anforderung enthält Anmeldedaten. Besuchen Sie [Using the Fetch API - Including credentials](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldedaten enthalten werden können.

Weitere Informationen finden Sie im Leitfaden zu [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwortheader")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Headername")}}</th>
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

  - : Definiert den Cookie-Namen und seinen Wert.
    Eine Cookie-Definition beginnt mit einem Name-Wert-Paar.

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, außer Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`).

    Ein `<cookie-value>` kann optional in Anführungszeichen eingeschlossen werden und jedes US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Leerraum")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Codierung**: Viele Implementierungen verwenden {{Glossary("Percent-encoding", "Prozent-Codierung")}} für Cookie-Werte.
    Dies ist jedoch nicht durch die RFC-Spezifikation vorgeschrieben.
    Die Prozent-Codierung trägt dazu bei, die Anforderungen an die für `<cookie-value>` zulässigen Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezielle Semantik:
    >
    > **`__Secure-`-Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (Bindestrich ist Teil des Präfixes), müssen mit dem `secure`-Flag auf einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-`-Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) stammen, dürfen keine Domain angeben und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Als Wert kann nur die aktuelle Domain oder eine übergeordnete Domain festgelegt werden, es sei denn, es handelt sich um ein öffentliches Suffix. Wenn die Domain festgelegt wird, ist das Cookie sowohl für diese als auch für alle ihre Subdomains verfügbar.

    Falls ausgelassen, wird dieses Attribut standardmäßig auf den Host der aktuellen Dokument-URL gesetzt, ohne Subdomains.

    Im Unterschied zu früheren Spezifikationen werden vorangestellte Punkte in Domainnamen (`.example.com`) ignoriert.

    Mehrere Host-/Domainwerte sind _nicht_ erlaubt, aber wenn eine Domain _angegeben wird_, dann sind Subdomains immer enthalten.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Date-Timestamp an.
    Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wird nicht angegeben, wird das Cookie zu einem **Sitzungs-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, danach wird das Sitzungs-Cookie entfernt.

    > [!WARNING]
    > Viele Webbrowser verfügen über eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und das nächste Mal wiederherstellt, wenn der Browser verwendet wird. Sitzungs-Cookies werden ebenfalls wiederhergestellt, als ob der Browser nie geschlossen wurde.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die möglicherweise von der des Client-Browsers abweicht.
    Firefox- und Chromium-basierte Browser verwenden intern einen Ablaufwert (max-age), der angepasst wird, um die Uhrenabweichung auszugleichen. Cookies werden basierend auf der Zeit, die vom Server beabsichtigt war, gespeichert und ablaufen gelassen.
    Die Anpassung für die Uhrenabweichung wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden soll, jedoch nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}

  - : Verhindert, dass JavaScript auf das Cookie zugreift, beispielsweise über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein mit `HttpOnly` erstelltes Cookie dennoch mit von JavaScript initiierten Anfragen gesendet wird, zum Beispiel, wenn [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch) aufgerufen wird.
    Dies minimiert Angriffe durch Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden an, bis das Cookie abläuft. Eine Null oder negative Zahl lässt das Cookie sofort ablaufen. Wenn sowohl `Expires` als auch `Max-Age` festgelegt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie unter Verwendung eines partitionierten Speichers gespeichert werden soll.
    Beachten Sie, dass, falls dies gesetzt ist, auch die [`Secure`-Anweisung](#secure) gesetzt sein muss.
    Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der _vorhanden sein muss_ in der angeforderten URL, damit der Browser den `Cookie`-Header sendet.

    Das Schrägstrich-Zeichen (`/`) wird als Verzeichnis-Trennzeichen interpretiert, und auch Unterverzeichnisse werden abgeglichen. Beispielsweise für `Path=/docs`:

    - Stimmen folgende Anforderungspfade überein: `/docs`, `/docs/`, `/docs/Web/`, und `/docs/Web/HTTP`.
    - Stimmen folgende Anforderungspfade nicht überein: `/`, `/docsets`, `/fr/docs`.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Bestimmt, ob ein Cookie mit Cross-Site-Anfragen gesendet wird oder nicht,
    wodurch ein gewisser Schutz gegen Cross-Site-Request-Forgery-Angriffe ({{Glossary("CSRF", "CSRF")}}) geboten wird.

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für Same-Site-Anfragen sendet, das heißt, Anfragen, die von derselben Seite stammen, die das Cookie gesetzt hat.
        Wenn eine Anfrage von einer anderen Domain oder einem anderen Schema (selbst mit derselben Domain) stammt, werden keine Cookies mit dem Attribut `SameSite=Strict` gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie nicht bei Cross-Site-Anfragen, wie bei Anfragen zum Laden von Bildern oder Frames, gesendet wird, aber gesendet wird, wenn ein Benutzer von einer externen Seite zur Ursprungsseite navigiert (z. B. beim Klicken auf einen Link).
        Dies ist das Standardverhalten, falls das Attribut `SameSite` nicht angegeben ist.

        > [!WARNING]
        > Nicht alle Browser setzen `SameSite=Lax` standardmäßig.
        > Siehe [Browser-Kompatibilität](#browser-kompatibilität) für weitere Details.

    - `None`

      - : Bedeutet, dass der Browser das Cookie sowohl mit Cross-Site- als auch Same-Site-Anfragen sendet.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert verwendet wird, wie folgt: `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure) Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass unsichere Seiten (`http:`) keine Cookies mit der `Secure`-Anweisung setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit der Anweisung `SameSite=None; Secure`, die nicht zusätzlich das [`Partitioned`](#partitioned)-Attribut enthalten, können in Cross-Site-Kontexten in zukünftigen Browserversionen blockiert werden. Dieses Verhalten schützt Benutzerdaten vor Cross-Site-Tracking. Siehe [Cookies Having Independent Partitioned State (CHIPS)](/de/docs/Web/Privacy/Privacy_sandbox/Partitioned_cookies) und [Third-party cookies](/de/docs/Web/Privacy/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur dann an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema gemacht wird (außer auf localhost) und ist daher widerstandsfähiger gegenüber {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffen.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` jeden Zugriff auf sensible Informationen in Cookies (Session-Keys, Login-Daten etc.) verhindert.
    > Cookies mit diesem Attribut können immer noch gelesen/geändert werden, entweder durch Zugriff auf die Festplatte des Clients oder durch JavaScript, wenn das Cookie-Attribut `HttpOnly` nicht gesetzt ist.
    >
    > Unsichere Seiten (`http:`) können keine Cookies mit der `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Beispiele

### Sitzungs-Cookie

Sitzungs-Cookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungs-Cookies, wenn sie nicht das Attribut `Expires` oder `Max-Age` angeben.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanentes Cookie

Permanente Cookies werden zu einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitdauer (`Max-Age`) entfernt und nicht bei Schließen des Clients.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domains

Ein Cookie für eine Domain, die den Server, der es gesetzt hat, nicht enthält, [sollte vom User-Agent abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `original-company.com` gesetzt wurde:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bedienenden Domain wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server auf `example.com` gesetzt wurde:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Präfixe

Cookienamen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem Attribut `secure` von einer sicheren (HTTPS-)Ursprung gesetzt werden.

Zusätzlich müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` haben (was bedeutet, dass jeder Pfad am Host gemeint ist) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Bei Clients, die keine Cookie-Präfixe implementieren, können Sie nicht auf diese zusätzlichen Sicherheiten zählen, und Cookies mit Präfixen werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich wird empfohlen, das Präfix `__Host` zu verwenden, wenn partitionierte Cookies gesetzt werden, damit sie an den Hostnamen und nicht an die registrierbare Domain gebunden sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [SameSite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev Blog)
