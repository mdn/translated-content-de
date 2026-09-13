---
title: Activate-Storage-Access header
short-title: Activate-Storage-Access
slug: Web/HTTP/Reference/Headers/Activate-Storage-Access
l10n:
  sourceCommit: f4c14731a1a157fc8d8f7357ac4d74d14a7d7fb5
---

Der HTTP **`Activate-Storage-Access`** {{Glossary("response_header", "Antwortheader")}} erlaubt einem Server, eine erteilte Berechtigung zu aktivieren, um in einer Cross-Site-Anfrage auf seine [unpartitionierten Cookies](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) zuzugreifen.

Der Server stützt sich auf Berechtigungsinformationen, die im {{httpheader("Sec-Fetch-Storage-Access")}} Header der Anfrage bereitgestellt werden.

Die Header werden zusammen als [Storage Access Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) bezeichnet. Sie bieten eine effiziente Alternative zum erstmaligen Laden der Ressource ohne Cookies, wobei die [Storage Access API](/de/docs/Web/API/Storage_Access_API#) verwendet wird, um die Berechtigung zu aktivieren, und dann die Ressource mit Cookies neu geladen wird.

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
  - : Der Server verwendet dieses Token, um anzuzeigen, dass er seine Drittanbieter-Cookies benötigt, um diese Anfrage korrekt zu beantworten.

    Der Server sollte vor der Antwort mit diesem Token überprüfen, ob `Sec-Fetch-Storage-Access: inactive` in der Anfrage vorhanden ist, um sicherzustellen, dass die Berechtigung bereits erteilt (aber inaktiv) ist.
    Der `allowed-origin` Parameter muss spezifiziert werden, um den spezifischen Ursprung zuzulassen (geben Sie `*` an, um jeden Ursprung zuzulassen).

    Der Browser sollte durch Aktivierung einer _bereits gewährten_ Storage-Access-Berechtigung antworten und die Anfrage mit einbezogenen unpartitionierten Cookies erneut versuchen.

- `load`
  - : Der Server verwendet dieses Token, um anzuzeigen, dass er dem Browser ein HTML-Dokument sendet, das eine bereits vorhandene `storage-access` Berechtigung aktivieren muss, um während des Ladens auf unpartitionierte Cookies zugreifen zu können.

    Der Server sollte für `Sec-Fetch-Storage-Access: inactive` oder `Sec-Fetch-Storage-Access: active` in der Anfrage überprüfen, bevor er mit `load` antwortet, um zu bestätigen, dass die Berechtigung bereits erteilt wurde.

    Der Browser sollte antworten, indem er die Ressource lädt und ihr Zugriff auf ihre unpartitionierten Cookies gewährt.

## Beschreibung

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) bietet einen JavaScript-Mechanismus, um einer eingebetteten Ressource zu erlauben, eine `storage-access` Berechtigung anzufordern. Dies ermöglicht das Senden von Drittanbieter-Cookies in Anfragen, die ansonsten standardmäßig in den meisten Browsern blockiert würden. Die Ressource muss zunächst ohne Cookies angefordert werden, damit der Server eine unbestätigte Version der Ressource zurückgibt, die keinen Zugriff auf ihre eigenen Cookies hat. Nach dem Laden kann diese Ressource [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die Storage-Access-Berechtigung anzufordern. Wenn die Zustimmung vom Benutzer erteilt wird, speichert der Browser die Berechtigung in einem Schlüssel, der mit dem Einbettenden und der eingebetteten _Seite_ verbunden ist. Der Browser muss dann die Ressource neu laden, die nun mit Cookies angefordert werden kann, da sie den `active` Berechtigungsstatus für den aktuellen Kontext hat.

Die Berechtigung wird für eine bestimmte Einbettende/Seite erteilt, aber nur _aktiviert_ für einen bestimmten Ursprung und für einen bestimmten Kontext wie ein `<iframe>` oder einen Browser-Tab. Das bedeutet, dass wenn Sie dieselbe Seite in einem neuen Tab oder `<iframe>` laden, der Berechtigungsstatus dieses Kontexts erteilt, aber `inactive` sein wird; es wird nicht `active`, bis die Berechtigung aktiviert wird. Ebenso, wenn Sie einen anderen Ursprung in derselben Seite laden, wird die Berechtigung erteilt, aber Sie müssen die Berechtigung aktivieren, damit Drittanbieter-Cookies für diese Ressource gesendet oder geladen werden.

Die Ressource muss mindestens einmal geladen werden, um die Storage-Access-Berechtigung zu erhalten. Einmal erteilt, kann jedoch ein Server `Activate-Storage-Access` verwenden, um die Berechtigung für andere Ursprünge und Kontexte zu aktivieren.

So funktioniert das:

1. Der Browser fügt `Sec-Fetch-Storage-Access: inactive` zu Anfragen hinzu, wenn der Kontext die Berechtigung hat, diese aber nicht aktiv ist (zusammen mit dem `Origin` Header, der die Quelle der Anfrage angibt).
2. Wenn der Server `Sec-Fetch-Storage-Access: inactive` erhält, kann er mit `Activate-Storage-Access: retry; allowed-origin="<request_origin>"` antworten, um den Browser zu bitten, die Berechtigung für den Kontext zu aktivieren und die Anfrage erneut zu versuchen.
3. Wenn der Browser die erneute Anfrage erhält, aktiviert er die Berechtigung und sendet die Anfrage erneut, diesmal mit `Sec-Fetch-Storage-Access: active` und inklusive Cookies.
4. Wenn der Server eine Anfrage mit `Sec-Fetch-Storage-Access: active` und Cookies sieht, antwortet er mit der authentifizierten Version der Ressource. Sobald diese vom Browser geladen wurde, hat diese Ressource Zugang zu ihren Cookies, als ob sie eine Erstpartei-Ressource wäre.

Antworten müssen auch den {{httpheader("Vary")}} Header mit `Sec-Fetch-Storage-Access` beinhalten.

> [!NOTE]
> Es ist auch möglich (aber weniger effizient), eine Berechtigung durch Laden einer Ressource und Aufruf von `Document.requestStorageAccess()` zu aktivieren.

## Beispiele

Diese Beispiele zeigen Anfragen mit {{httpheader("Sec-Fetch-Storage-Access")}} für Kontexte, die unterschiedliche Speicherzugriffsberechtigungszustände haben, und entsprechende Antworten mit `Activate-Storage-Access`. Sie verwenden das Beispiel einer Seite, `https://mysite.example`, die ein {{htmlelement("iframe")}} enthält, das eine Benutzerprofilseite `embedded.com/user/profile` einbettet.

### Server aktiviert eine Berechtigung

Dieses Beispiel geht davon aus, dass der Benutzer die Berechtigung für den Kontext bereits erteilt hat, sie jedoch noch nicht aktiviert wurde. (Mit der API würden wir die Berechtigung aktivieren, indem wir die Ressource neu laden, damit sie `Document.requestStorageAccess()` aufrufen kann.)

Die Anfrage ist für ein Cross-Site `<iframe>` mit Modus ["include"](/de/docs/Web/API/Request/credentials#include). Der Browser hat `Sec-Fetch-Storage-Access: inactive` zur Anfrage hinzugefügt, da die `secure-access` Berechtigung erteilt, aber nicht aktiviert wurde. Es wurden keine Cookies hinzugefügt, da diese standardmäßig blockiert sind. Auch der `Origin` wird gesetzt, da der Server die Quelle der Anfrage kennen muss.

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

Der Server antwortet mit `Activate-Storage-Access: retry; allowed-origin="https://mysite.example"`, was bedeutet, dass der Browser die erteilte Berechtigung aktivieren und die Anfrage mit Cookies erneut versuchen sollte. Der Server fügt den {{httpheader("Vary")}} Header hinzu, da die Antwort sich mit `Sec-Fetch-Storage-Access` ändern kann.

```http
HTTP/1.1 401 Unauthorized
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: retry; allowed-origin="https://mysite.example"
```

Der Browser aktiviert die Berechtigung und macht eine neue Anfrage. Unten sehen Sie, dass `Sec-Fetch-Storage-Access: active` gesetzt wird und diesmal die Drittanbieter-Cookies einbezogen werden.

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

Der Server antwortet dann mit der authentifizierten Ressource, die `Activate-Storage-Access: load` enthält. Die Ressource wird geladen und hat Zugang zu ihren Cookies, als ob sie eine Erstpartei-Einbettung wäre.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Activate-Storage-Access: load
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

### secure-access Berechtigung ursprünglich nicht erteilt

Dieses Beispiel geht davon aus, dass es das _erste_ Mal ist, dass der Benutzer eine Seite besucht, die etwas von `embedded.com` einbettet, sodass die Speicherzugriffsberechtigung nicht erteilt wurde.

Die Header können nur eine Berechtigung für einen Kontext aktivieren, die bereits erteilt wurde — sie können nicht verwendet werden, um die Speicherzugriffsberechtigung überhaupt erst zu _erteilen_. Die eingebettete Seite muss daher ohne Cookies geladen werden und dann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Dies ist derselbe Ablauf, als ob die Header nicht vorhanden wären.

> [!NOTE]
> Die Header werden hinzugefügt, wo es angemessen ist, wenn die Berechtigung nicht erteilt wurde, beeinflussen jedoch nicht wesentlich den Nachrichtenfluss oder das Verhalten des Browsers. Da das Beispiel nicht den Hauptzweck der Header demonstriert, haben wir es nach dem "bereits erteilt" Beispiel vorgestellt.

Die Anfrage ist dieselbe wie im vorherigen Beispiel, außer dass der Browser `Sec-Fetch-Storage-Access: none` hinzugefügt hat, da die `secure-access` Berechtigung nicht erteilt wurde. Wiederum werden keine Cookies hinzugefügt, da diese standardmäßig blockiert sind.

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

Der Server gibt eine nicht authentifizierte Version der Ressource zurück. Dies schließt den {{httpheader("Vary")}} Header ein, da die Antwort sich mit `Sec-Fetch-Storage-Access` ändern kann. Beachten Sie, dass `Activate-Storage-Access` nicht enthalten ist, da der Server eine Berechtigung nicht aktivieren kann, wenn keine erteilt wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

Die eingebettete Seite würde dann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Wenn die Speicherzugriffsberechtigung für die eingebettete Seite erteilt wird, wird sie auch aktiviert.

Sie würde sich dann selbst neu laden, was zu der folgenden Anfrage führt. Dieses Mal fügt der Browser `Sec-Fetch-Storage-Access: active` hinzu und schließt die Drittanbieter-Cookies ein, was den Berechtigungsstatus des eingebetteten Inhalts widerspiegelt.

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

Der Server antwortet mit der authentifizierten Version der Ressource, die sich von der ersten geladenen Version unterscheiden kann, und fügt den Header `Activate-Storage-Access: load` hinzu. Der Browser lädt die Seite, die nun Zugang zu ihren eigenen Cookie-Informationen hat.

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
- [Storage Access Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) in _Storage Access API_
- [Storage Access Header-Sequenzen](/de/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in _Storage Access API_
