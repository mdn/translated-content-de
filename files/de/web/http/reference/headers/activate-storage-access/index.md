---
title: Activate-Storage-Access header
short-title: Activate-Storage-Access
slug: Web/HTTP/Reference/Headers/Activate-Storage-Access
l10n:
  sourceCommit: 4e011ae3e353d5500df26e3ca5af31c3c1cf037b
---

Der HTTP **`Activate-Storage-Access`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht einem Server, eine erteilte Berechtigung zu aktivieren, um auf seine [unpartitionierten Cookies](/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) in einer Cross-Site-Anfrage zuzugreifen.

Der Server stützt sich auf Berechtigungsstatus-Informationen, die im {{httpheader("Sec-Fetch-Storage-Access")}} Header der Anfrage bereitgestellt werden.

Diese Header werden zusammen als [Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) bezeichnet. Sie bieten eine effiziente Alternative zum ersten Laden der Ressource ohne Cookies, indem Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API#) verwenden, um die Berechtigung zu aktivieren, und dann die Ressource mit Cookies neu laden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Anfrage-Header")}}
      </th>
      <td>Nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Activate-Storage-Access: retry; allowed-origin="https://foo.bar"
Activate-Storage-Access: retry; allowed-origin=*
Activate-Storage-Access: load
```

## Direktiven

- `retry`
  - : Fordern Sie, dass der Browser die Speicherzugriffsberechtigung für den Kontext aktiviert und dann die Anfrage mit eingeschlossenen Cookies wiederholt. Der `allowed-origin` Parameter muss angegeben werden, um den bestimmten Ursprung zuzulassen (spezifizieren Sie `*`, um jeden Ursprung zuzulassen).
- `load`
  - : Fordern Sie, dass der Browser die Speicherzugriffsberechtigung für den Kontext aktiviert und dann die Ressource lädt.

## Beschreibung

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API#) bietet einen Mechanismus in JavaScript, der es einer eingebetteten Ressource ermöglicht, eine `storage-access` Berechtigung anzufordern. Dies ermöglicht das Senden von Drittanbieter-Cookies in Anfragen, die ansonsten standardmäßig in den meisten Browsern blockiert werden würden. Die Ressource muss zunächst ohne Cookies angefordert werden, sodass der Server eine unangemeldete Version der Ressource bereitstellt, die keinen Zugriff auf ihre eigenen Cookies hat. Nach dem Laden kann diese Ressource [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit transienter Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Wird die Berechtigung vom Benutzer gewährt, wird sie vom Browser in einem Schlüssel gespeichert, der mit dem Einbettungs- und eingebetteten _Standort_ verbunden ist. Der Browser muss dann die Ressource neu laden, die jetzt mit Cookies angefordert werden kann, da sie die `aktive` Berechtigung für den aktuellen Kontext hat.

Die Berechtigung wird für einen bestimmten Einbettungs-/eingebetteten Standort gewährt, aber nur für einen bestimmten Kontext aktiviert, wie zum Beispiel eine `<iframe>` oder einen Browser-Tab. Das bedeutet, dass, wenn Sie dieselbe Seite in einem neuen Tab oder `<iframe>` laden, der Berechtigungsstatus dieses Kontexts `inaktiv` ist; sie wird nicht `aktiv`, bis die Berechtigung aktiviert wird. Der normale Speicherzugriffsverlauf besteht darin, erneut die Ressource ohne Cookies anzufordern, `Document.requestStorageAccess()` aufzurufen, um die bestehende Berechtigung zu aktivieren, und dann die Ressource mit Cookies neu zu laden.

Die Ressource muss mindestens einmal geladen werden, um die Speicherzugriffsberechtigung zu erhalten. Sobald sie jedoch gewährt wurde, kann ein Server `Activate-Storage-Access` verwenden, um die Berechtigung für andere Kontexte zu aktivieren. Dies vermeidet die Notwendigkeit, die Ressource zu laden, nur um die Berechtigung durch Aufruf von `Document.requestStorageAccess()` zu aktivieren.

So funktioniert es:

1. Der Browser fügt `Sec-Fetch-Storage-Access: inactive` zu Anfragen hinzu, wenn der Kontext die Berechtigung hat, aber sie nicht aktiv ist (zusammen mit dem `Origin` Header, der die Quelle der Anfrage angibt).
2. Wenn der Server `Sec-Fetch-Storage-Access: inactive` erhält, kann er mit `Activate-Storage-Access: retry; allowed-origin="<request_origin>"` antworten, um den Browser zu bitten, die Berechtigung für den Kontext zu aktivieren und die Anfrage zu wiederholen.
3. Wenn der Browser die Wiederholungsanfrage erhält, aktiviert er die Berechtigung und sendet die Anfrage erneut, diesmal mit `Sec-Fetch-Storage-Access: active` und eingeschlossenen Cookies.
4. Wenn der Server eine Anfrage mit `Sec-Fetch-Storage-Access: active` und Cookies sieht, antwortet er mit der authentifizierten Version der Ressource. Einmal vom Browser geladen, hat diese Ressource Zugriff auf ihre Cookies, als wäre sie eine Erstanbieterressource.

Antworten müssen auch den {{httpheader("Vary")}} Header mit `Sec-Fetch-Storage-Access` beinhalten.

## Beispiele

Diese Beispiele zeigen Anfragen mit {{httpheader("Sec-Fetch-Storage-Access")}} für Kontexte, die unterschiedliche Speicherzugriffsberechtigungszustände haben, und entsprechende Antworten mit `Activate-Storage-Access`. Sie verwenden das Beispiel einer Seite, `https://mysite.example`, die ein {{htmlelement("iframe")}} enthält, das eine Benutzerprofilseite, `embedded.com/user/profile`, einbettet.

### Server aktiviert eine Berechtigung

Dieses Beispiel geht davon aus, dass der Benutzer die Berechtigung für den Kontext bereits erteilt hat, diese aber noch nicht aktiviert wurde. (Mit der API würden wir die Berechtigung aktivieren, indem wir die Ressource erneut laden, damit sie `Document.requestStorageAccess()` aufrufen kann.)

Die Anfrage gilt für ein Cross-Site `<iframe>` mit dem Credentials-Modus ["include"](/de/docs/Web/API/Request/credentials#include). Der Browser hat der Anfrage `Sec-Fetch-Storage-Access: inactive` hinzugefügt, weil die `secure-access` Berechtigung erteilt, aber nicht aktiviert wurde. Es wurden keine Cookies hinzugefügt, da sie standardmäßig blockiert sind. Der `Origin` ist ebenfalls gesetzt, da der Server die Quelle der Anfrage wissen muss.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: inactive
Credentials-Mode: include
```

Der Server antwortet mit `Activate-Storage-Access: retry; allowed-origin="https://mysite.example"`, was bedeutet, dass der Browser die erteilte Berechtigung aktivieren und die Anfrage mit Cookies wiederholen soll. Der Server fügt den {{httpheader("Vary")}} Header hinzu, da die Antwort sich mit `Sec-Fetch-Storage-Access` ändern kann.

```http
HTTP/1.1 401 Unauthorized
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: retry; allowed-origin="https://mysite.example"
```

Der Browser aktiviert die Berechtigung und stellt eine neue Anfrage. Unten können Sie sehen, dass es `Sec-Fetch-Storage-Access: active` setzt und diesmal die Drittanbieter-Cookies einfügt.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: active
Credentials-Mode: include
Cookie: sessionid=abc123
```

Der Server antwortet dann mit der authentifizierten Ressource, die `Activate-Storage-Access: load` enthält. Die Ressource wird geladen und hat Zugriff auf ihre Cookies, als wäre es ein Erstanbieter-Einbettung.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Activate-Storage-Access: load
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

### secure-access Berechtigung anfangs nicht gewährt

Dieses Beispiel geht davon aus, dass es das _erste_ Mal ist, dass der Benutzer eine Seite besucht, die etwas von `embedded.com` einbettet, sodass die Speicherzugriffsberechtigung nicht gewährt wurde.

Die Header können eine Berechtigung nur für einen Kontext aktivieren, der bereits erteilt wurde - sie können nicht verwendet werden, um die Speicherzugriffsberechtigung ursprünglich zu erteilen. Die eingebettete Seite muss daher ohne Cookies geladen werden und dann `Document.requestStorageAccess()` mit transienter Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Dies ist derselbe Ablauf wie ohne die Header.

> [!NOTE]
> Die Header werden bei Bedarf hinzugefügt, wenn die Berechtigung nicht gewährt wurde, beeinflussen jedoch den Nachrichtenfluss oder das Verhalten des Browsers nicht materiell. Da das Beispiel den Hauptzweck der Header nicht demonstriert, haben wir es nach dem „bereits erteilten“ Beispiel präsentiert.

Die Anfrage ist dieselbe wie im vorherigen Beispiel, außer dass der Browser `Sec-Fetch-Storage-Access: none` hinzugefügt hat, weil die `secure-access` Berechtigung nicht gewährt wurde. Auch hier werden keine Cookies hinzugefügt, da sie standardmäßig blockiert sind.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: none
Credentials-Mode: include
```

Der Server gibt eine unangemeldete Version der Ressource zurück. Dies schließt den {{httpheader("Vary")}} Header ein, da sich die Antwort mit `Sec-Fetch-Storage-Access` ändern kann. Beachten Sie, dass `Activate-Storage-Access` nicht enthalten ist, da der Server eine Berechtigung nicht aktivieren kann, wenn keine erteilt wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

Die eingebettete Seite würde dann `Document.requestStorageAccess()` mit transienter Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Wenn die Speicherzugriffsberechtigung für die eingebettete Seite gewährt wird, wird sie auch aktiviert.

Dann würde es sich selbst neu laden, was zur folgenden Anfrage führt. Dieses Mal fügt der Browser `Sec-Fetch-Storage-Access: active` hinzu und schließt die Drittanbieter-Cookies ein, was den Berechtigungsstatus des eingebetteten Inhalts widerspiegelt.

```http
GET /user/profile HTTP/1.1
Host: embedded.com
Origin: https://mysite.example
Sec-Fetch-Dest: iframe
Sec-Fetch-Site: cross-site
Sec-Fetch-Mode: navigate
Sec-Fetch-Storage-Access: active
Credentials-Mode: include
Cookie: sessionid=abc123
```

Der Server antwortet mit der authentifizierten Version der Ressource, die sich von der ersten geladenen Version unterscheiden kann, und fügt den Header `Activate-Storage-Access: load` hinzu. Der Browser lädt die Seite, die nun Zugriff auf ihre eigene Cookie-Informationen hat.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: load

<html>
  ...
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("Sec-Fetch-Storage-Access")}}
- [Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in _Storage Access API_
- [Speicherzugriffs-Header-Sequenzen](/de/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in _Storage Access API_
