---
title: Activate-Storage-Access header
short-title: Activate-Storage-Access
slug: Web/HTTP/Reference/Headers/Activate-Storage-Access
l10n:
  sourceCommit: 1296e665fd82a80bb17123725dcbf1f08b89ab4e
---

Der HTTP **`Activate-Storage-Access`** {{Glossary("response_header", "Antwort-Header")}} ermöglicht es einem Server, eine erteilte Berechtigung zum Zugriff auf seine [unpartitionierten Cookies](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) in einem Cross-Site-Request zu aktivieren.

Der Server verlässt sich auf die Berechtigungsstatusinformationen, die im {{httpheader("Sec-Fetch-Storage-Access")}}-Header der Anfrage enthalten sind.

Die Header werden zusammen als [Speicherzugriffs-Header](/de/docs/Web/API/Storage_Access_API#storage_access_headers) bezeichnet. Sie bieten eine effiziente Alternative zum ersten Laden der Ressource ohne Cookies, zur Aktivierung der Berechtigung mit der [Storage Access API](/de/docs/Web/API/Storage_Access_API#) und dann erneutes Laden der Ressource mit Cookies.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Fetch_Metadata_Request_Header", "Fetch-Metadaten-Anfrage-Header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden_request_header", "Verbotener Anfrage-Header")}}</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted_request_header", "CORS-gesicherter Anfrage-Header")}}
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
  - : Der Server verwendet dieses Token, um anzugeben, dass er seine Drittanbieter-Cookies benötigt, um auf diese Anfrage ordnungsgemäß zu antworten.

    Der Server sollte `Sec-Fetch-Storage-Access: inactive` in der Anfrage überprüfen, bevor er mit diesem Token antwortet, um zu überprüfen, dass die Berechtigung bereits gewährt (aber inaktiv) ist. Der `allowed-origin`-Parameter muss angegeben werden, um den spezifischen Ursprung zuzulassen (geben Sie `*` an, um jeden Ursprung zuzulassen).

    Der Browser sollte darauf reagieren, indem er eine _bereits gewährte_ Speicherzugriffsberechtigung aktiviert und die Anfrage mit enthaltenen unpartitionierten Cookies erneut sendet.

- `load`
  - : Der Server verwendet dieses Token, um anzugeben, dass er dem Browser ein HTML-Dokument sendet, das eine bestehende `storage-access`-Berechtigung aktivieren muss — um unpartitionierte Cookies während des Ladevorgangs zuzugreifen.

    Der Server sollte `Sec-Fetch-Storage-Access: inactive` oder `Sec-Fetch-Storage-Access: active` in der Anfrage überprüfen, bevor er mit `load` antwortet, um zu bestätigen, dass die Berechtigung bereits gewährt wurde.

    Der Browser sollte darauf reagieren, indem er die Ressource lädt und ihr Zugriff auf ihre unpartitionierten Cookies gewährt.

## Beschreibung

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) bietet einen JavaScript-Mechanismus, der es einer eingebetteten Ressource ermöglicht, `storage-access`-Berechtigung anzufordern. Dies ermöglicht das Senden von Drittanbieter-Cookies in Anfragen, die sonst standardmäßig in den meisten Browsern blockiert würden. Die Ressource muss zuerst ohne Cookies angefordert werden, sodass der Server eine nicht-autorisierte Version der Ressource zurückgibt, die keinen Zugriff auf ihre eigenen Cookies hat. Nach dem Laden kann diese Ressource [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Wenn sie vom Benutzer gewährt wird, wird die Berechtigung vom Browser in einem Schlüssel gespeichert, der mit der einbettenden und eingebetteten _Seite_ assoziiert ist. Der Browser muss dann die Ressource neu laden, die er jetzt mit Cookies anfordern kann, da sie den `active`-Berechtigungsstatus für den aktuellen Kontext hat.

Die Berechtigung wird für eine bestimmte einbettende/eingebettete Seite gewährt, aber nur _aktiviert_ für einen bestimmten Ursprung und für einen bestimmten Kontext wie ein `<iframe>` oder ein Browser-Tab. Das bedeutet, dass, wenn Sie dieselbe Seite in einem neuen Tab oder `<iframe>` laden, der Berechtigungsstatus dieses Kontexts gewährt, aber `inaktiv` ist; sie wird nicht `aktiv`, bis die Berechtigung aktiviert wird. Ebenso, wenn Sie eine andere Herkunft in derselben Seite laden, wird die Berechtigung gewährt, aber Sie müssen die Berechtigung aktivieren, damit Drittanbieter-Cookies für diese Ressource gesendet oder geladen werden.

Die Ressource muss mindestens einmal geladen werden, um die Speicherzugriffsberechtigung gewährt zu bekommen. Sobald sie jedoch gewährt wurde, kann ein Server `Activate-Storage-Access` verwenden, um die Berechtigung für andere Ursprünge und Kontexte zu aktivieren.

So funktioniert das:

1. Der Browser fügt `Sec-Fetch-Storage-Access: inactive` zu Anfragen hinzu, wenn der Kontext die Berechtigung hat, aber sie nicht aktiv ist (zusammen mit dem `Origin`-Header, der die Quelle der Anfrage angibt).
2. Wenn der Server `Sec-Fetch-Storage-Access: inactive` erhält, kann er mit `Activate-Storage-Access: retry; allowed-origin="<request_origin>"` antworten, um den Browser zu bitten, die Berechtigung für den Kontext zu aktivieren und die Anfrage erneut zu senden.
3. Wenn der Browser die erneute Anfrage erhält, aktiviert er die Berechtigung und sendet die Anfrage erneut, diesmal mit `Sec-Fetch-Storage-Access: active` und eingeschlossenen Cookies.
4. Wenn der Server eine Anfrage mit `Sec-Fetch-Storage-Access: active` und Cookies sieht, antwortet er mit der autorisierten Version der Ressource. Sobald diese vom Browser geladen wurde, hat die Ressource Zugriff auf ihre Cookies, als wäre sie eine Erstpartei-Ressource.

Antworten müssen auch den {{httpheader("Vary")}}-Header mit `Sec-Fetch-Storage-Access` enthalten.

> [!NOTE]
> Es ist auch möglich (aber weniger effizient), eine Berechtigung zu aktivieren, indem eine Ressource geladen wird und `Document.requestStorageAccess()` aufgerufen wird.

## Beispiele

Diese Beispiele zeigen Anfragen mit {{httpheader("Sec-Fetch-Storage-Access")}} für Kontexte, die unterschiedliche Speicherzugriffsberechtigungszustände haben, und entsprechende Antworten mit `Activate-Storage-Access`. Sie verwenden das Beispiel einer Seite, `https://mysite.example`, die ein {{htmlelement("iframe")}} enthält, das eine Benutzerprofilseite, `embedded.com/user/profile`, einbettet.

### Server aktiviert eine Berechtigung

Dieses Beispiel geht davon aus, dass der Benutzer bereits die Erlaubnis für den Kontext erteilt hat, sie aber noch nicht aktiviert wurde. (Mit der API würden wir die Berechtigung aktivieren, indem wir die Ressource neu laden, sodass sie `Document.requestStorageAccess()` aufrufen kann.)

Die Anfrage ist für ein Cross-Site-`<iframe>` mit dem Credentials-Modus ["include"](/de/docs/Web/API/Request/credentials#include). Der Browser hat `Sec-Fetch-Storage-Access: inactive` zur Anfrage hinzugefügt, weil die `secure-access`-Berechtigung gewährt, aber nicht aktiviert wurde. Es wurden keine Cookies hinzugefügt, da sie standardmäßig blockiert sind. Der `Origin` wird ebenfalls gesetzt, da der Server die Quelle der Anfrage kennen muss.

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

Der Server antwortet mit `Activate-Storage-Access: retry; allowed-origin="https://mysite.example"`, was darauf hinweist, dass der Browser die gewährte Berechtigung aktivieren und die Anfrage mit Cookies erneut senden sollte. Der Server fügt den {{httpheader("Vary")}}-Header hinzu, da sich die Antwort durch `Sec-Fetch-Storage-Access` ändern kann.

```http
HTTP/1.1 401 Unauthorized
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access
Activate-Storage-Access: retry; allowed-origin="https://mysite.example"
```

Der Browser aktiviert die Berechtigung und erstellt eine neue Anfrage. Unten sehen Sie, dass er `Sec-Fetch-Storage-Access: active` setzt und diesmal die Drittanbieter-Cookies einschließt.

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

Der Server antwortet dann mit der autorisierten Ressource, die `Activate-Storage-Access: load` enthält. Die Ressource wird geladen und hat Zugriff auf ihre Cookies, als wäre sie ein Erstparteien-Einbettung.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Activate-Storage-Access: load
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

### Secure-Access-Berechtigung zunächst nicht erteilt

Dieses Beispiel geht davon aus, dass es das _erste_ Mal ist, dass der Benutzer eine Seite besucht, die etwas von `embedded.com` einbettet, sodass die Speicherzugriffsberechtigung nicht erteilt wurde.

Die Header können eine Berechtigung nur für einen Kontext aktivieren, die bereits erteilt wurde — sie können nicht verwendet werden, um die Speicherzugriffsberechtigung überhaupt _zu erteilen_. Die eingebettete Seite muss daher ohne Cookies geladen werden und dann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Dies ist der gleiche Ablauf, als wären die Header nicht vorhanden.

> [!NOTE]
> Die Header werden dort hinzugefügt, wo es passend ist, wenn die Berechtigung nicht erteilt wurde, beeinflussen jedoch nicht wesentlich den Nachrichtenfluss oder das Browserverhalten. Da das Beispiel nicht den Hauptzweck der Header demonstriert, haben wir es nach dem "bereits erteilten" Beispiel präsentiert.

Die Anfrage entspricht der im vorherigen Beispiel, mit der Ausnahme, dass der Browser `Sec-Fetch-Storage-Access: none` hinzugefügt hat, weil die `secure-access`-Berechtigung nicht erteilt wurde. Cookies werden erneut nicht hinzugefügt, da sie standardmäßig blockiert sind.

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

Der Server gibt eine nicht-autorisierte Version der Ressource zurück. Dies schließt den {{httpheader("Vary")}}-Header ein, da sich die Antwort durch `Sec-Fetch-Storage-Access` ändern kann. Beachten Sie, dass `Activate-Storage-Access` nicht enthalten ist, da der Server keine Berechtigung aktivieren kann, wenn keine erteilt wurde.

```http
HTTP/1.1 200 OK
Content-Type: text/html
Vary: Sec-Fetch-Storage-Access

<html>
  ...
</html>
```

Die eingebettete Seite würde dann [`Document.requestStorageAccess()`](/de/docs/Web/API/Document/requestStorageAccess) mit vorübergehender Aktivierung aufrufen, um die Speicherzugriffsberechtigung anzufordern. Wenn die Speicherzugriffsberechtigung für die eingebettete Seite erteilt wird, ist sie ebenfalls aktiviert.

Die Seite würde sich dann neu laden, was in der folgenden Anfrage resultiert. Diesmal fügt der Browser `Sec-Fetch-Storage-Access: active` hinzu und schließt die Drittanbieter-Cookies ein, was den Berechtigungsstatus des eingebetteten Inhalts widerspiegelt.

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

Der Server antwortet mit der autorisierten Version der Ressource, die sich von der ersten geladenen Version unterscheiden kann, und fügt den Header `Activate-Storage-Access: load` hinzu. Der Browser lädt die Seite, die jetzt Zugriff auf ihre eigenen Cookie-Informationen hat.

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
