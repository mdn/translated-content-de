---
title: Activate-Storage-Access header
short-title: Activate-Storage-Access
slug: Web/HTTP/Reference/Headers/Activate-Storage-Access
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

Der HTTP **`Activate-Storage-Access`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server, eine erteilte Berechtigung zum Zugriff auf seine [unpartitionierten Cookies](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) bei einer anwendungsübergreifenden Anfrage zu aktivieren.

Der Server verlässt sich auf die Berechtigungsstatusinformationen, die im {{httpheader("Sec-Fetch-Storage-Access")}} Header der Anfrage bereitgestellt werden.

Die Header werden zusammen als [Storage Access Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) bezeichnet. Sie bieten eine effiziente Alternative zu dem zuerst ohne Cookies geladenen Ressourcen, dem Aktivieren der Berechtigung über die [Storage Access API](/de/docs/Web/API/Storage_Access_API#) und dem erneuten Laden der Ressource mit Cookies.

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
        {{Glossary("CORS-safelisted_request_header", "CORS-sicherer Anfrage-Header")}}
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
  - : Fordert den Browser auf, die Berechtigung für den Speicherzugriff für den Kontext zu aktivieren und dann die Anfrage mit eingeschlossenen Cookies zu wiederholen. Der `allowed-origin` Parameter muss angegeben werden, um den spezifischen Ursprung zu erlauben (geben Sie `*` an, um jeden Ursprung zu erlauben).
- `load`
  - : Fordert den Browser auf, die Berechtigung für den Speicherzugriff für den Kontext zu aktivieren und dann die Ressource zu laden.

## Beschreibung

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API#) bietet einen JavaScript-Mechanismus, mit dem eine eingebettete Ressource eine `storage-access` Berechtigung anfordern kann. Dadurch können Drittanbieter-Cookies in Anfragen gesendet werden, die ansonsten standardmäßig in den meisten Browsern blockiert würden. Die Ressource muss zuerst ohne Cookies angefordert werden, damit der Server eine nicht authentifizierte Version der Ressource zurückgibt, die keinen Zugriff auf ihre eigenen Cookies hat. Nach dem Laden kann diese Ressource [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit temporärer Aktivierung aufrufen, um die Berechtigung für den Speicherzugriff anzufordern. Wenn sie vom Benutzer erteilt wird, wird die Berechtigung vom Browser in einem Schlüssel gespeichert, der mit dem Einbettenden und der eingebetteten _Site_ verknüpft ist. Der Browser muss dann die Ressource neu laden, die nun mit Cookies angefordert werden kann, da sie den `aktiven` Berechtigungsstatus für den aktuellen Kontext hat.

Die Berechtigung wird für eine bestimmte Einbettende/eingebettete Site erteilt, aber nur für einen bestimmten Kontext aktiviert, wie z.B. ein `<iframe>` oder ein Browser-Tab. Das bedeutet, dass, wenn Sie dieselbe Seite in einem neuen Tab oder einem `<iframe>` laden, der Berechtigungsstatus dieses Kontexts `inaktiv` sein wird; er wird erst `aktiv`, wenn die Berechtigung aktiviert wird. Der normale Ablauf des Speicherzugriffs besteht darin, die Ressource erneut ohne Cookies anzufordern, `Document.requestStorageAccess()` aufzurufen, um die bestehende Berechtigung zu aktivieren, und dann die Ressource mit Cookies erneut zu laden.

Die Ressource muss mindestens einmal geladen sein, um die Berechtigung für den Speicherzugriff zu erhalten. Nachdem sie jedoch erteilt wurde, kann ein Server `Activate-Storage-Access` verwenden, um die Berechtigung für andere Kontexte zu aktivieren. Dies vermeidet die Notwendigkeit, die Ressource nur zu laden, um die Berechtigung durch Aufrufen von `Document.requestStorageAccess()` zu aktivieren.

So funktioniert es:

1. Der Browser fügt `Sec-Fetch-Storage-Access: inactive` zu Anfragen hinzu, wenn der Kontext eine Berechtigung hat, diese aber nicht aktiv ist (zusammen mit dem `Origin` Header, der die Quelle der Anfrage angibt).
2. Wenn der Server `Sec-Fetch-Storage-Access: inactive` erhält, kann er mit `Activate-Storage-Access: retry; allowed-origin="<request_origin>"` antworten, um den Browser zu bitten, die Berechtigung für den Kontext zu aktivieren und die Anfrage zu wiederholen.
3. Wenn der Browser die Wiederholungsanforderung erhält, aktiviert er die Berechtigung und sendet die Anfrage erneut, diesmal mit `Sec-Fetch-Storage-Access: active` und eingeschlossenen Cookies.
4. Wenn der Server eine Anfrage mit `Sec-Fetch-Storage-Access: active` und Cookies sieht, antwortet er mit der authentifizierten Version der Ressource. Einmal vom Browser geladen, hat diese Ressource Zugang zu ihren Cookies, als wäre sie eine First-Party-Ressource.

Antworten müssen auch den {{httpheader("Vary")}} Header enthalten mit `Sec-Fetch-Storage-Access`.

## Beispiele

Diese Beispiele zeigen Anfragen mit {{httpheader("Sec-Fetch-Storage-Access")}} für Kontexte, die unterschiedliche Berechtigungszustände für den Speicherzugriff haben, und entsprechende Antworten mit `Activate-Storage-Access`. Sie verwenden das Beispiel einer Seite, `https://mysite.example`, die ein {{htmlelement("iframe")}} einbettet, das eine Benutzerprofilseite, `embedded.com/user/profile`, einbettet.

### Server aktiviert eine Berechtigung

Dieses Beispiel geht davon aus, dass der Benutzer die Berechtigung für den Kontext bereits erteilt hat, sie aber noch nicht aktiviert wurde. (Mit der API würden wir die Berechtigung durch Neuladen der Ressource aktivieren, damit sie `Document.requestStorageAccess()` aufrufen kann.)

Die Anfrage ist für ein anwendungsübergreifendes `<iframe>` im Credential-Modus ["include"](/de/docs/Web/API/Request/credentials#include). Der Browser hat `Sec-Fetch-Storage-Access: inactive` zur Anfrage hinzugefügt, da die `secure-access` Berechtigung erteilt, aber nicht aktiviert wurde. Es wurden keine Cookies hinzugefügt, da sie standardmäßig blockiert sind. Der `Origin` ist auch gesetzt, da der Server die Quelle der Anfrage kennen muss.

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

Der Server antwortet mit `Activate-Storage-Access: retry; allowed-origin="https://mysite.example"`, was darauf hinweist, dass der Browser die erteilte Berechtigung aktivieren und die Anfrage mit Cookies wiederholen soll. Der Server enthält den {{httpheader("Vary")}} Header, da sich die Antwort mit `Sec-Fetch-Storage-Access` ändern kann.

```http
HTTP/1.1 401 Unauthorized
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: retry; allowed-origin="https://mysite.example"
```

Der Browser aktiviert die Berechtigung und stellt eine neue Anfrage. Unten sehen Sie, dass er `Sec-Fetch-Storage-Access: active` setzt und diesmal die Drittanbieter-Cookies einschließt.

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

Der Server antwortet dann mit der authentifizierten Ressource, die `Activate-Storage-Access: load` enthält. Die Ressource wird geladen und hat Zugriff auf ihre Cookies, als ob sie eine First-Party-Einbettung wäre.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Activate-Storage-Access: load
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

### secure-access Berechtigung zunächst nicht erteilt

Dieses Beispiel geht davon aus, dass es das _erste_ Mal ist, dass der Benutzer eine Seite besucht, die etwas von `embedded.com` einbettet, sodass die Berechtigung für den Speicherzugriff nicht erteilt wurde.

Die Header können nur eine Berechtigung für einen Kontext aktivieren, die bereits erteilt wurde — sie können nicht verwendet werden, um die Speicherzugriffsberechtigung zuerst zu _erteilen_. Die eingebettete Seite muss daher ohne Cookies geladen werden und dann mit temporärer Aktivierung [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) aufrufen, um die Speicherzugriffsberechtigung anzufordern. Dies ist derselbe Ablauf, als ob die Header nicht vorhanden wären.

> [!NOTE]
> Die Header werden dort hinzugefügt, wo sie bei nicht erteilter Berechtigung angebracht sind, beeinflussen jedoch nicht den Nachrichtenfluss oder das Browserverhalten wesentlich. Da das Beispiel nicht den Hauptzweck der Header demonstriert, haben wir es nach dem Beispiel "bereits erteilt" dargestellt.

Die Anfrage ist dieselbe wie im vorherigen Beispiel, außer dass der Browser `Sec-Fetch-Storage-Access: none` hinzugefügt hat, da die `secure-access` Berechtigung nicht erteilt wurde. Auch hier werden keine Cookies hinzugefügt, da sie standardmäßig blockiert sind.

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

Der Server gibt eine nicht authentifizierte Version der Ressource zurück. Dies enthält den {{httpheader("Vary")}} Header, da sich die Antwort mit `Sec-Fetch-Storage-Access` ändern kann. Beachten Sie, dass `Activate-Storage-Access` nicht enthalten ist, da der Server keine Berechtigung aktivieren kann, wenn keine erteilt wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

Die eingebettete Seite würde dann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit temporärer Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Wenn die Speicherzugriffsberechtigung für die eingebettete Seite erteilt wird, wird sie auch aktiviert.

Sie würde sich dann neu laden, was zu der folgenden Anfrage führt. Diesmal fügt der Browser `Sec-Fetch-Storage-Access: active` hinzu und schließt die Drittanbieter-Cookies ein, was den Berechtigungsstatus des eingebetteten Inhalts widerspiegelt.

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

Der Server antwortet mit der authentifizierten Version der Ressource, die sich von der ersten geladenen Version unterscheiden kann, und fügt den Header `Activate-Storage-Access: load` hinzu. Der Browser lädt die Seite, die nun Zugriff auf ihre eigenen Cookie-Informationen hat.

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
