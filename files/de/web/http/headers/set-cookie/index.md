---
title: Set-Cookie
slug: Web/HTTP/Headers/Set-Cookie
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

{{HTTPSidebar}}

Der HTTP-**`Set-Cookie`**-{{Glossary("response_header", "Antwort-Header")}} wird verwendet, um ein Cookie vom Server an den Benutzeragenten zu senden, damit der Benutzeragent es später an den Server zurücksenden kann.
Um mehrere Cookies zu senden, sollten im selben Antwort-Header mehrere `Set-Cookie`-Header gesendet werden.

> [!WARNING]
> Browser blockieren JavaScript-Code im Frontend daran, auf den `Set-Cookie`-Header zuzugreifen, wie es die Fetch-Spezifikation verlangt, die `Set-Cookie` als einen [verbotenen Antwort-Header-Namen](https://fetch.spec.whatwg.org/#forbidden-response-header-name) definiert, der [aus allen Antworten, die dem Frontend-Code ausgesetzt sind, herausgefiltert werden muss](https://fetch.spec.whatwg.org/#ref-for-forbidden-response-header-name%E2%91%A0).
>
> Wenn eine [Fetch API](/de/docs/Web/API/Fetch_API/Using_Fetch) oder [XMLHttpRequest API](/de/docs/Web/API/XMLHttpRequest_API)-Anfrage [CORS verwendet](/de/docs/Web/HTTP/CORS#what_requests_use_cors), ignorieren Browser `Set-Cookie`-Header in der Serverantwort, es sei denn, die Anfrage enthält Anmeldeinformationen. Besuchen Sie [Verwendung der Fetch API - Einschließlich Anmeldeinformationen](/de/docs/Web/API/Fetch_API/Using_Fetch#including_credentials) und den [XMLHttpRequest-Artikel](/de/docs/Web/API/XMLHttpRequest_API), um zu erfahren, wie Anmeldeinformationen eingeschlossen werden.

Für weitere Informationen siehe den Leitfaden zur [Verwendung von HTTP-Cookies](/de/docs/Web/HTTP/Cookies).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response_header", "Antwort-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_header_name", "Verbotener Header-Name")}}</th>
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

  - : Definiert den Cookie-Namen und dessen Wert.
    Eine Cookie-Definition beginnt mit einem Namen-Wert-Paar.

    Ein `<cookie-name>` kann beliebige US-ASCII-Zeichen enthalten, mit Ausnahme von: Steuerzeichen ({{Glossary("ASCII", "ASCII")}}-Zeichen 0 bis 31 und ASCII-Zeichen 127) oder Trennzeichen (Leerzeichen, Tabulator und die Zeichen: `( ) < > @ , ; : \ " / [ ] ? = { }`)

    Ein `<cookie-value>` kann optional in Anführungszeichen gesetzt werden und kann jedes US-ASCII-Zeichen enthalten, ausgenommen Steuerzeichen (ASCII-Zeichen 0 bis 31 und ASCII-Zeichen 127), {{Glossary("Whitespace", "Whitespace")}}, Anführungszeichen, Kommas, Semikolons und Backslashes.

    **Kodierung**: Viele Implementierungen führen {{Glossary("Percent-encoding", "Prozent-Codierung")}} auf Cookie-Werten durch.
    Dies ist jedoch von der RFC-Spezifikation nicht gefordert.
    Die Prozent-Codierung hilft, die Anforderungen an die für `<cookie-value>` zugelassenen Zeichen zu erfüllen.

    > [!NOTE]
    > Einige `<cookie-name>` haben eine spezifische Bedeutung:
    >
    > **`__Secure-` Präfix**: Cookies mit Namen, die mit `__Secure-` beginnen (Bindestrich gehört zum Präfix), müssen mit dem `secure`-Flag von einer sicheren Seite (HTTPS) gesetzt werden.
    >
    > **`__Host-` Präfix**: Cookies mit Namen, die mit `__Host-` beginnen, werden nur an die Host-Subdomain oder Domain gesendet, die sie gesetzt hat, und nicht an andere Hosts.
    > Sie müssen mit dem `secure`-Flag gesetzt werden, müssen von einer sicheren Seite (HTTPS) kommen, dürfen keine Domäne spezifiziert haben, und der Pfad muss `/` sein.

- `Domain=<domain-value>` {{optional_inline}}

  - : Definiert den Host, an den das Cookie gesendet wird.

    Nur die aktuelle Domäne oder eine höhergeordnete Domäne, es sei denn, es handelt sich um ein öffentliches Suffix, kann als Wert gesetzt werden. Wird die Domäne gesetzt, ist das Cookie verfügbar, sowohl für diese Domäne als auch für alle ihre Subdomains.

    Wird dieses Attribut weggelassen, ist der Standardwert der Host der aktuellen Dokument-URL, ohne Subdomains.

    Im Gegensatz zu früheren Spezifikationen werden führende Punkte in Domänennamen (`.example.com`) ignoriert.

    Mehrere Host-/Domänenwerte sind _nicht_ erlaubt, aber wenn eine Domäne _spezifiziert_ wird, dann sind Subdomains immer inkludiert.

- `Expires=<date>` {{optional_inline}}

  - : Gibt die maximale Lebensdauer des Cookies als HTTP-Datum-Zeitstempel an.
    Siehe {{HTTPHeader("Date")}} für die erforderliche Formatierung.

    Wenn nicht angegeben, wird das Cookie zu einem **Sitzungs-Cookie**.
    Eine Sitzung endet, wenn der Client heruntergefahren wird, danach wird das Sitzungs-Cookie entfernt.

    > [!WARNING]
    > Viele Webbrowser haben eine _Sitzungswiederherstellungs_-Funktion, die alle Tabs speichert und sie beim nächsten Verwenden des Browsers wiederherstellt. Sitzungs-Cookies werden ebenfalls wiederhergestellt, als wäre der Browser nie geschlossen worden.

    Das `Expires`-Attribut wird vom Server mit einem Wert relativ zu seiner eigenen internen Uhr gesetzt, die von der des Client-Browsers abweichen kann.
    Firefox und auf Chromium basierende Browser verwenden intern einen Verfallswert (max-age), der angepasst wird, um die Uhrzeitunterschiede auszugleichen, und speichern und verfallen Cookies basierend auf der vom Server beabsichtigten Zeit.
    Die Anpassung für die Zeitdifferenz wird aus dem Wert des {{httpheader("DATE")}}-Headers berechnet.
    Beachten Sie, dass die Spezifikation erklärt, wie das Attribut geparst werden sollte, aber nicht angibt, ob/wie der Wert vom Empfänger korrigiert werden sollte.

- `HttpOnly` {{optional_inline}}

  - : Verbietet JavaScript den Zugriff auf das Cookie, zum Beispiel über die [`Document.cookie`](/de/docs/Web/API/Document/cookie)-Eigenschaft.
    Beachten Sie, dass ein Cookie, das mit `HttpOnly` erstellt wurde, dennoch mit JavaScript-initiierten Anfragen gesendet wird, zum Beispiel bei Aufrufen von [`XMLHttpRequest.send()`](/de/docs/Web/API/XMLHttpRequest/send) oder [`fetch()`](/de/docs/Web/API/Window/fetch).
    Dies mindert Angriffe gegen Cross-Site-Scripting ({{Glossary("Cross-site_scripting", "XSS")}}).

- `Max-Age=<number>` {{optional_inline}}

  - : Gibt die Anzahl der Sekunden bis zum Verfall des Cookies an. Eine Null oder eine negative Zahl lässt das Cookie sofort verfallen. Wenn sowohl `Expires` als auch `Max-Age` gesetzt sind, hat `Max-Age` Vorrang.

- `Partitioned` {{optional_inline}}

  - : Gibt an, dass das Cookie unter Verwendung einer partitionierten Speicherung gespeichert werden soll.
    Beachten Sie, dass, wenn dies gesetzt ist, die [`Secure`-Richtlinie](#secure) ebenfalls gesetzt sein muss.
    Siehe [Cookies mit unabhängig partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) für weitere Details.

- `Path=<path-value>` {{optional_inline}}

  - : Gibt den Pfad an, der in der angeforderten URL vorhanden sein _muss_, damit der Browser den `Cookie`-Header sendet.

    Der Schrägstrich (`/`) wird als Verzeichnistrenner interpretiert, und Unterverzeichnisse werden ebenfalls abgeglichen. Zum Beispiel, für `Path=/docs`,

    - stimmen die Anforderungspfade `/docs`, `/docs/`, `/docs/Web/` und `/docs/Web/HTTP` alle überein.
    - stimmen die Anforderungspfade `/`, `/docsets`, `/fr/docs` nicht überein.

- `SameSite=<samesite-value>` {{optional_inline}}

  - : Kontrolliert, ob ein Cookie bei Cross-Site-Anfragen gesendet wird,
    und bietet damit einen gewissen Schutz gegen Cross-Site-Request-Forgery-Angriffe ({{Glossary("CSRF", "CSRF")}}).

    Die möglichen Attributwerte sind:

    - `Strict`

      - : Bedeutet, dass der Browser das Cookie nur für gleiche Site-Anfragen sendet, das heißt, Anfragen, die von der gleichen Site stammen, die das Cookie gesetzt hat.
        Wenn eine Anfrage von einer anderen Domäne oder einem anderen Schema stammt (auch mit der gleichen Domäne), werden keine Cookies mit dem `SameSite=Strict`-Attribut gesendet.

    - `Lax`

      - : Bedeutet, dass das Cookie bei Cross-Site-Anfragen, wie bei Anfragen zum Laden von Bildern oder Frames, nicht gesendet wird, aber gesendet wird, wenn ein Benutzer zur Ursprungsseite von einer externen Seite navigiert (zum Beispiel beim Folgen eines Links).
        Dies ist das Standardverhalten, wenn das `SameSite`-Attribut nicht angegeben ist.

        > [!WARNING]
        > Nicht alle Browser setzen `SameSite=Lax` standardmäßig.
        > Siehe [Browser-Kompatibilität](#browser-kompatibilität) für Details.

    - `None`

      - : Bedeutet, dass der Browser das Cookie mit beiden, Cross-Site- und gleiche Site-Anfragen, sendet.
        Das `Secure`-Attribut muss ebenfalls gesetzt sein, wenn dieser Wert gesetzt wird, so `SameSite=None; Secure`. Wenn `Secure` fehlt, wird ein Fehler protokolliert:

        ```plain
        Cookie "myCookie" rejected because it has the "SameSite=None" attribute but is missing the "secure" attribute.

        This Set-Cookie was blocked because it had the "SameSite=None" attribute but did not have the "Secure" attribute, which is required in order to use "SameSite=None".
        ```

        > [!NOTE]
        > Ein [`Secure`](#secure) Cookie wird nur mit einer verschlüsselten Anfrage über das HTTPS-Protokoll an den Server gesendet. Beachten Sie, dass unsichere Sites (`http:`) keine Cookies mit der `Secure`-Richtlinie setzen können und daher `SameSite=None` nicht verwenden können.

        > [!WARNING]
        > Cookies mit `SameSite=None; Secure`, die nicht auch das [`Partitioned`](#partitioned)-Attribut haben, können in Cross-Site-Kontexten in zukünftigen Browserversionen blockiert werden. Dieses Verhalten schützt Benutzerdaten vor Cross-Site-Tracking. Siehe [Cookies mit unabhängig partitioniertem Status (CHIPS)](/de/docs/Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies) und [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

- `Secure` {{optional_inline}}

  - : Gibt an, dass das Cookie nur an den Server gesendet wird, wenn eine Anfrage mit dem `https:`-Schema (außer auf localhost) gestellt wird, und daher widerstandsfähiger gegen {{Glossary("MitM", "Man-in-the-Middle")}}-Angriffe ist.

    > [!NOTE]
    > Gehen Sie nicht davon aus, dass `Secure` den gesamten Zugriff auf sensible Informationen in Cookies (Sitzungsschlüssel, Anmeldedaten, etc.) verhindert.
    > Cookies mit diesem Attribut können immer noch gelesen/verändert werden, entweder mit Zugriff auf die Festplatte des Clients oder von JavaScript, wenn das `HttpOnly`-Cookie-Attribut nicht gesetzt ist.
    >
    > Unsichere Sites (`http:`) können keine Cookies mit dem `Secure`-Attribut setzen. Die `https:`-Anforderungen werden ignoriert, wenn das `Secure`-Attribut von localhost gesetzt wird.

## Beispiele

### Sitzungs-Cookie

Sitzungs-Cookies werden entfernt, wenn der Client heruntergefahren wird. Cookies sind Sitzungs-Cookies, wenn sie nicht das `Expires`- oder `Max-Age`-Attribut spezifizieren.

```http
Set-Cookie: sessionId=38afes7a8
```

### Permanent-Cookie

Permanent-Cookies werden an einem bestimmten Datum (`Expires`) oder nach einer bestimmten Zeitspanne (`Max-Age`) entfernt und nicht, wenn der Client geschlossen wird.

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT
```

```http
Set-Cookie: id=a3fWa; Max-Age=2592000
```

### Ungültige Domänen

Ein Cookie für eine Domäne, die nicht den Server einschließt, der es gesetzt hat [sollte vom Benutzeragenten abgelehnt werden](https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.2.3).

Das folgende Cookie wird abgelehnt, wenn es von einem Server gehostet auf `original-company.com` gesetzt wird:

```http
Set-Cookie: qwerty=219ffwef9w0f; Domain=some-company.co.uk
```

Ein Cookie für eine Subdomain der bedienenden Domäne wird abgelehnt.

Das folgende Cookie wird abgelehnt, wenn es von einem Server gehostet auf `example.com` gesetzt wird:

```http
Set-Cookie: sessionId=e8bb43229de9; Domain=foo.example.com
```

### Cookie-Vorwahlen

Cookie-Namen mit dem Präfix `__Secure-` oder `__Host-` können nur verwendet werden, wenn sie mit dem Attribut `secure` von einer sicheren (HTTPS) Herkunft gesetzt werden.

Darüber hinaus müssen Cookies mit dem Präfix `__Host-` einen Pfad von `/` haben (bedeutet jeder Pfad beim Host) und dürfen kein `Domain`-Attribut haben.

> [!WARNING]
> Für Clients, die keine Cookie-Prefixe implementieren, kann man sich auf diese zusätzlichen Zusicherungen nicht verlassen, und vorgezeichnete Cookies werden immer akzeptiert.

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
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Darüber hinaus wird empfohlen, das Präfix `__Host` zu verwenden, wenn partitionierte Cookies gesetzt werden, um sie an den Hostnamen und nicht an die registrierbare Domäne zu binden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- [`Document.cookie`](/de/docs/Web/API/Document/cookie)
- [Samesite-Cookies erklärt](https://web.dev/articles/samesite-cookies-explained) (web.dev blog)
