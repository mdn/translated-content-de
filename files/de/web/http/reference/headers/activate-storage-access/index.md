---
title: Activate-Storage-Access header
short-title: Activate-Storage-Access
slug: Web/HTTP/Reference/Headers/Activate-Storage-Access
l10n:
  sourceCommit: 11d748f9e217b6a9fd16291d7815a6f803f0136d
---

{{SeeCompatTable}}

Der HTTP **`Activate-Storage-Access`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server, eine erteilte Berechtigung zu aktivieren, um auf seine [unpartitionierten Cookies](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) in einer Cross-Site-Anfrage zuzugreifen.

Der Server verlässt sich auf die Berechtigungsstatusinformationen, die im {{httpheader("Sec-Fetch-Storage-Access")}} Header der Anfrage bereitgestellt werden.

Die Header werden gemeinsam als [Storage-Access-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) bezeichnet. Sie bieten eine effizientere Alternative, als zuerst die Ressource ohne Cookies zu laden, die [Storage Access API](/de/docs/Web/API/Storage_Access_API#) zu verwenden, um die Berechtigung zu aktivieren, und dann die Ressource mit Cookies neu zu laden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch Metadata Request Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-sicher gelisteter Anforderungs-Header")}}
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
  - : Fordert, dass der Browser die storage-access-Berechtigung für den Kontext aktiviert und die Anfrage dann mit eingefügten Cookies erneut versucht. Der Parameter `allowed-origin` muss angegeben werden, um den spezifischen Ursprung zuzulassen (geben Sie `*` an, um jeden Ursprung zuzulassen).
- `load`
  - : Fordert, dass der Browser die storage-access-Berechtigung für den Kontext aktiviert und dann die Ressource lädt.

## Beschreibung

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API#) bietet einen JavaScript-Mechanismus, der es einer eingebetteten Ressource ermöglicht, eine `storage-access`-Berechtigung anzufordern. Dies ermöglicht das Senden von Drittanbieter-Cookies in Anfragen, die standardmäßig in den meisten Browsern blockiert werden. Die Ressource muss zuerst ohne Cookies angefordert werden, sodass der Server eine Version der Ressource ohne Zugang zu seinen eigenen Cookies zurückgibt. Nachdem das Laden abgeschlossen ist, kann diese Ressource [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die storage-access-Berechtigung anzufordern. Wenn der Benutzer die Berechtigung gewährt, wird diese vom Browser unter einem Schlüssel gespeichert, der mit dem Einbettungs- und eingebetteten _Site_ verknüpft ist. Der Browser muss dann die Ressource neu laden, die er nun mit Cookies anfordern kann, da sie den `active`-Berechtigungsstatus für den aktuellen Kontext hat.

Die Berechtigung wird für eine bestimmte Einbettung/ eingebettete Website gewährt, jedoch nur für einen bestimmten Kontext wie ein `<iframe>` oder ein Browser-Tab aktiviert. Das bedeutet, dass, wenn Sie dieselbe Seite in einem neuen Tab oder `<iframe>` laden, der Berechtigungsstatus dieses Kontexts `inactive` ist; es wird erst `active`, wenn die Berechtigung aktiviert wird. Der normale Storage-Access-Fluss besteht darin, die Ressource erneut ohne Cookies anzufordern, `Document.requestStorageAccess()` aufzurufen, um die vorhandene Berechtigung zu aktivieren, und dann die Ressource mit Cookies neu zu laden.

Die Ressource muss mindestens einmal geladen sein, um die storage-access-Berechtigung zu erhalten. Sobald die Berechtigung jedoch erteilt ist, kann ein Server `Activate-Storage-Access` verwenden, um die Berechtigung für andere Kontexte zu aktivieren. Dies erspart das Laden der Ressource, nur um die Berechtigung durch Aufrufen von `Document.requestStorageAccess()` zu aktivieren.

So funktioniert es:

1. Der Browser fügt `Sec-Fetch-Storage-Access: inactive` zu Anfragen hinzu, wenn der Kontext die Berechtigung hat, aber nicht aktiv ist (zusammen mit dem `Origin`-Header, der die Quelle der Anfrage angibt).
2. Wenn der Server `Sec-Fetch-Storage-Access: inactive` erhält, kann er mit `Activate-Storage-Access: retry; allowed-origin="<request_origin>"` antworten, um den Browser zu bitten, die Berechtigung für den Kontext zu aktivieren und die Anfrage zu wiederholen.
3. Wenn der Browser die Wiederholungsanfrage erhält, aktiviert er die Berechtigung und sendet die Anfrage erneut, diesmal mit `Sec-Fetch-Storage-Access: active` und einschließlich Cookies.
4. Sieht der Server eine Anfrage mit `Sec-Fetch-Storage-Access: active` und Cookies, antwortet er mit der glaubwürdigen Version der Ressource. Sobald der Browser sie geladen hat, hat diese Ressource Zugriff auf ihre Cookies, als wäre sie eine Erstparteienressource.

Antworten müssen auch den {{httpheader("Vary")}} Header mit `Sec-Fetch-Storage-Access` beinhalten.

## Beispiele

Diese Beispiele zeigen Anfragen mit {{httpheader("Sec-Fetch-Storage-Access")}} für Kontexte, die unterschiedliche Storage-Access-Berechtigungsstatus haben, und die entsprechenden Antworten mit `Activate-Storage-Access`. Sie verwenden das Beispiel einer Website, `https://mysite.example`, die ein {{htmlelement("iframe")}} umfasst, das eine Benutzerprofilseite, `embedded.com/user/profile`, einbettet.

### Server aktiviert eine Berechtigung

Dieses Beispiel nimmt an, dass der Benutzer bereits die Berechtigung für den Kontext erteilt hat, diese jedoch noch nicht aktiviert wurde. (Mit der API würden wir die Berechtigung aktivieren, indem wir die Ressource neu laden, sodass sie `Document.requestStorageAccess()` aufrufen kann.)

Die Anfrage ist für ein Cross-Site-`<iframe>` mit Anmeldeinformationen-Modus ["include"](/de/docs/Web/API/Request/credentials#include). Der Browser hat `Sec-Fetch-Storage-Access: inactive` zur Anfrage hinzugefügt, da die `secure-access` Berechtigung erteilt, aber nicht aktiviert ist. Es wurden keine Cookies hinzugefügt, da sie standardmäßig blockiert sind. Der `Origin` wird ebenfalls gesetzt, da der Server die Quelle der Anfrage kennen muss.

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

Der Server antwortet mit `Activate-Storage-Access: retry; allowed-origin="https://mysite.example"`, was angibt, dass der Browser die erteilte Berechtigung aktivieren und die Anfrage mit Cookies erneut versuchen soll. Der Server fügt den {{httpheader("Vary")}} Header hinzu, da die Antwort mit `Sec-Fetch-Storage-Access` variieren kann.

```http
HTTP/1.1 401 Unauthorized
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: retry; allowed-origin="https://mysite.example"
```

Der Browser aktiviert die Berechtigung und stellt eine neue Anfrage. Unten sehen Sie, dass es `Sec-Fetch-Storage-Access: active` setzt und diesmal die Drittanbieter-Cookies enthält.

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

Der Server antwortet dann mit der glaubwürdigen Ressource, die `Activate-Storage-Access: load` enthält. Die Ressource wird geladen und hat Zugriff auf ihre Cookies, als wäre sie eine Erstparteieinbettung.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Activate-Storage-Access: load
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

### secure-access-Berechtigung zunächst nicht erteilt

Dieses Beispiel nimmt an, dass es das _erste_ Mal ist, dass der Benutzer eine Seite besucht, die etwas von `embedded.com` einbettet, sodass die Storage-Access-Berechtigung nicht erteilt wurde.

Die Header können nur eine Berechtigung für einen Kontext aktivieren, die bereits erteilt wurde — sie können nicht verwendet werden, um die storage-access-Berechtigung zunächst _zu erteilen_. Die eingebettete Seite muss daher ohne Cookies geladen werden und dann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die storage-access-Berechtigung anzufordern. Dies ist derselbe Ablauf, als wären die Header nicht vorhanden.

> [!NOTE]
> Die Header werden bei Bedarf hinzugefügt, wenn die Berechtigung noch nicht erteilt wurde, beeinflussen jedoch nicht den Nachrichtenfluss oder das Browserverhalten wesentlich. Da das Beispiel den Hauptzweck der Header nicht demonstriert, haben wir es nach dem Beispiel "bereits erteilt" präsentiert.

Die Anfrage ist dieselbe wie im vorherigen Beispiel, außer dass der Browser `Sec-Fetch-Storage-Access: none` hinzugefügt hat, da die `secure-access` Berechtigung nicht erteilt wurde. Wieder werden keine Cookies hinzugefügt, da sie standardmäßig blockiert sind.

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

Der Server gibt eine nicht glaubwürdige Version der Ressource zurück. Dies schließt den {{httpheader("Vary")}} Header ein, da die Antwort mit `Sec-Fetch-Storage-Access` variieren kann. Beachten Sie, dass es nicht `Activate-Storage-Access` enthält, da der Server keine Berechtigung aktivieren kann, wenn keine erteilt wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

Die eingebettete Seite würde dann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die storage-access-Berechtigung anzufordern. Wenn die storage-access-Berechtigung für die eingebettete Seite erteilt wird, wird sie ebenfalls aktiviert.

Sie würde sich dann selbst neu laden, was zu der folgenden Anfrage führt. Diesmal fügt der Browser `Sec-Fetch-Storage-Access: active` hinzu und schließt die Drittanbieter-Cookies ein, was den Berechtigungsstatus des eingebetteten Inhalts widerspiegelt.

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

Der Server antwortet mit der glaubwürdigen Version der Ressource, die möglicherweise von der ersten geladenen Version abweicht, und fügt den Header `Activate-Storage-Access: load` hinzu. Der Browser lädt die Seite, die nun Zugriff auf ihre eigenen Cookieinformationen hat.

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
- [Sequenzen der Storage Access Header](/de/docs/Web/API/Storage_Access_API#storage_access_header_sequences) in _Storage Access API_
