---
title: Zugriff auf lokale Netzwerke
slug: Web/Security/Defenses/Local_network_access
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Die [**Technologie für den Zugriff auf lokale Netzwerke**](https://wicg.github.io/local-network-access/) schränkt die Möglichkeit von Websites ein, Anfragen an das lokale Netzwerk des Benutzers zu stellen, um das Risiko von Angriffen wie Cross-Site-Request-Forgerys zu mindern. Dieser Artikel erklärt, wie der Zugriff auf lokale Netzwerke funktioniert und was Webentwickler tun müssen, um damit zu interagieren.

## Hintergrund

Es gibt eine Reihe von Szenarien, in denen eine Website eine Anfrage an ein lokales Netzwerk stellen möchte. Zum Beispiel:

- Eine Website greift auf ein lokales Gerät zu, um Diagnosedaten bei der Fehlersuche abzurufen.
- Eine Website greift auf ein lokales Gerät zu, um Konfigurationsdetails während eines Einrichtungsvorgangs bereitzustellen.
- Eine Website verbindet sich mit einer lokalen Seite (z. B. einem Intranet), um Authentifizierungsinformationen bereitzustellen oder als Teil einer Testumgebung.

Der Zugriff auf lokale Netzwerke birgt Risiken — Angreifer können solche Anfragen nutzen, um bestimmte Klassen von [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriffen gegen lokale Netzwerkgeräte wie Router und Drucker zu initiieren.

Ein häufiger Angriff besteht typischerweise darin, dass eine Angreifer-Website versucht, auf den Router eines Nutzers zuzugreifen und dessen DNS-Einstellungen zu ändern. Wenn erfolgreich, können DNS-Anfragen von einem DNS-Server nach Wahl des Angreifers aufgelöst werden, was bedeutet, dass der Angreifer Benutzer auf andere als die beabsichtigten Seiten senden kann, wie Phishing- oder Clickjacking-Seiten, was möglicherweise ihre Zugangsdaten gefährdet.

Der Angreifer könnte auch die Firmware des Routers ersetzen und bösartige Seiten darauf hosten oder Werbeverkehr stehlen und auf andere Seiten umleiten. Diese Art von Angriff wird dadurch erleichtert, dass viele Benutzer die Standard-Verwaltungspasswörter ihrer lokalen Geräte nicht ändern.

Der Zugriff auf lokale Netzwerke mindert diese Risiken, indem der Zugriff auf lokale Netzwerke über eine Reihe von Berechtigungsdialogen und {{httpheader("Permissions-Policy")}}-Direktiven kontrolliert wird.

## Adressräume

Der Zugriff auf lokale Netzwerke definiert drei verschiedene **Adressräume**, unter denen alle Netzwerkadressen kategorisiert werden:

- Lokal
  - : Eine lokale Adresse ist nur im lokalen Netzwerk zugänglich; ihr Ziel unterscheidet sich in verschiedenen Netzwerken. Zum Beispiel `192.168.0.1`.
- Loopback
  - : Eine Loopback-Adresse ist nur auf dem lokalen Gerät zugänglich; ihr Ziel unterscheidet sich auf jedem Gerät. Zum Beispiel `127.0.0.1`, was allgemein als `localhost` bekannt ist.
- Öffentlich
  - : Eine öffentliche Adresse ist von überall im Internet erreichbar; ihr Ziel ist für alle Geräte global gleich. Zum Beispiel `104.18.27.120` (die IP-Adresse von `example.com`).

Je nachdem, in welchem Adressraum eine Anforderungs-URL kategorisiert ist, behandelt der Browser deren Berechtigungen unterschiedlich.

## Welche Anfragen sind betroffen?

Einschränkungen beim Zugriff auf lokale Netzwerke gelten für:

- Subresource-Anfragen
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- Navigation von Subframes
- [Service Worker](/de/docs/Web/API/Service_Worker_API), einschließlich Anfragen, die über [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate) gestellt werden, wenn der navigierte [`WindowClient`](/de/docs/Web/API/WindowClient) ein Subframe ist
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- [WebTransport](/de/docs/Web/API/WebTransport_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)

## Berechtigungen für den Zugriff auf lokale Netzwerke

In Browsern, die die Spezifikation für den Zugriff auf lokale Netzwerke unterstützen, sind Loopback- und lokale Anfragen durch spezifische Berechtigungen geschützt — `local-network` bzw. `loopback-network`. Das bedeutet, dass, wenn eine Website eine Anfrage an eine lokale IP- oder Loopback-Adresse stellt oder eine lokale Website (z. B. ein Intranet) eine Anfrage an eine Loopback-Adresse stellt, dem Benutzer ein Berechtigungsdialog angezeigt wird, der ihn fragt, ob die Anfrage erlaubt oder abgelehnt werden soll.

Sie können den Status der Berechtigung mittels der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) prüfen, z. B. um zu überprüfen, ob eine lokale Anfrage erfolgreich sein wird und den Benutzer entsprechend zu beraten:

```js
navigator.permissions.query({ name: "local-network" }).then((result) => {
  if (result !== "granted") {
    adviseUserOnRemediation();
  }
});
```

```js
navigator.permissions.query({ name: "loopback-network" }).then((result) => {
  if (result !== "granted") {
    adviseUserOnRemediation();
  }
});
```

Die Berechtigungen sind auf sichere Kontexte beschränkt. In unsicheren Kontexten werden alle Anfragen fehlschlagen.

## Entspannen des Mixed Content

Wenn die Berechtigung erteilt ist, wird zusätzlich das Blockieren von [Mixed Content](/de/docs/Web/Security/Defenses/Mixed_content) für lokale Netzwerk-Anfragen gelockert. Dies ist erforderlich, da viele lokale Geräte aus verschiedenen Gründen keine öffentlich vertrauenswürdigen TLS-Zertifikate erhalten können. Zum Beispiel erlaubt es öffentlichen Websites, auf lokale Testserver oder Geräte zuzugreifen, die auf HTTP laufen.

Um unterstützenden Browsern explizit mitzuteilen, Mixed Content-Prüfungen zu überspringen, setzen Sie die Eigenschaft [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) auf `local` oder `loopback` bei neuen Anfragen (über den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor oder direkt in der [`fetch()`](/de/docs/Web/API/Window/fetch) Methode).

Zum Beispiel:

```js
const req = new Request("http://localhost:8888", {
  method: "get",
  mode: "cors",
  targetAddressSpace: "loopback",
});

console.log(req.targetAddressSpace);
// loopback
```

Das Setzen von `targetAddressSpace: "loopback"` ist erforderlich in Fällen, in denen eine URL eine öffentliche Domain-Adresse ist, aber letztlich auf eine lokale Netzwerkadresse aufgelöst wird, z. B. `http://internal.example.com`. Wenn dies weggelassen wird, schlägt eine Anfrage von einer HTTPS-Seite, die auf die HTTP-Ressource zugreift, bei den Mixed Content-Prüfungen fehl.

Einige Adressen, wie private IP-Literale (z. B. `192.168.0.1`) und `.local`-Adressen (wie `http://router.local`), haben entspannte Mixed Content-Prüfungen in Fällen, in denen Berechtigungen für den Zugriff auf lokale Netzwerke erteilt sind, sodass die `targetAddressSpace`-Eigenschaft nicht gesetzt werden muss. Wenn jedoch keine Berechtigungen für den Zugriff auf lokale Netzwerke erteilt sind, gelten dennoch die Mixed Content-Prüfungen, unabhängig davon, ob `targetAddressSpace` gesetzt ist oder nicht.

## Berechtigungspolitiken für den Zugriff auf lokale Netzwerke

Sie können den Zugriff auf lokale und Loopback-Adressen auf Dokumentenebene über die Direktiven {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} der {{httpheader('Permissions-Policy')}} steuern.

Die Standard-Zulassungsliste für diese Direktiven ist `self`, was bedeutet, dass Anfragen nur im aktuellen Dokument und eingebetteten Browsing-Kontexten desselben Ursprungs erlaubt werden. Um lokale oder Loopback-Anfragen auf Dokumentenebene für einen bestimmten Ursprung zuzulassen, verwenden Sie diese Direktiven im `Permissions-Policy` HTTP-Header:

```http
Permissions-Policy: local-network=("https://example.com")

Permissions-Policy: loopback-network=("https://example.com")
```

Oder in einem `<iframe>` [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut für ein eingebettetes Dokument:

```html
<iframe src="https://example.com" allow="local-network"></iframe>

<iframe src="https://example.com" allow="loopback-network"></iframe>
```

Wenn eine Anfrage von einem eingebetteten Dokument an ein lokales Netzwerk gestellt wird, wird sie so behandelt, als hätte das einbettende Dokument die Berechtigung für den Zugriff auf das lokale Netzwerk angefordert, und jede Entscheidung des Benutzers bezüglich der Berechtigung wird mit dem Ursprung des einbettenden Dokuments verknüpft. Wenn das Dokument innerhalb des `<iframe>` auf andere Dokumente navigiert, die ebenfalls Anfragen an lokale Netzwerke stellen, müssen Sie alle ihre Ursprünge in der Berechtigungspolitik angeben.

Zum Beispiel, wenn `https://example.com` das `<iframe>` zu `https://example2.com` navigiert und sowohl `https://example.com` als auch `https://example2.com` Anfragen für den Zugriff auf lokale Netzwerke stellen, müssten Sie die Berechtigung explizit an beide Ursprünge delegieren wie folgt:

```html
<iframe
  src="https://example.com"
  allow="local-network https://example.com https://example2.com"></iframe>
```

Sie können auch `allow="local-network *"` angeben, um jedem im `<iframe>` geladenen Ursprung Anfragen an lokale Netzwerke zu erlauben. Dies kann nützlich sein in Fällen, in denen ein `<iframe>` willkürliche Umleitungen zu einem anderen Ursprung vornimmt (z. B. für Single Sign-On), bevor es zurück zu `localhost` leitet.

## Der Alias `local-network-access`

Die Technologie für den Zugriff auf lokale Netzwerke wurde ursprünglich mit der Berechtigung {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} spezifiziert, die zur Steuerung von Netzwerk-Anfragen sowohl zu lokalen als auch zu Loopback-Adressen zusammen verwendet wurde. Dies wurde auf die granulareren Berechtigungen {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} aktualisiert, die von nun an verwendet werden sollten.

Die `local-network-access`-Berechtigung wird jedoch weiterhin aus Gründen der Abwärtskompatibilität [wo bereits implementiert](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access#browser_compatibility) unterstützt, als Alias für `local-network` und `loopback-network`.

### Berechtigungsstatus für `local-network-access`

Beim Abfragen des Berechtigungsstatus von `local-network-access`, zum Beispiel:

```js
navigator.permissions.query({ name: "local-network-access" }).then((result) => {
  // ...
});
```

Das zurückgegebene Ergebnis ist eine Kombination aus dem Status der beiden neueren Berechtigungen. Wenn nur eine von `local-network` oder `loopback-network` einen nicht-`prompt`-Zustand hat, wird dieser Wert zurückgegeben. Wenn einer der Berechtigungen zuvor `denied` war, dann wird die `local-network-access`-Berechtigung ebenfalls `denied` zurückgeben. Die folgende Tabelle fasst alle möglichen Berechtigungsergebnisse zusammen:

| `local-network` Berechtigung | `loopback-network` Berechtigung | `local-network-access` Berechtigung |
| ---------------------------- | ------------------------------- | ----------------------------------- |
| `allowed`                    | `allowed`                       | `allowed`                           |
| `allowed`                    | `prompt`                        | `allowed`                           |
| `allowed`                    | `denied`                        | `denied`                            |
| `prompt`                     | `allowed`                       | `allowed`                           |
| `prompt`                     | `prompt`                        | `prompt`                            |
| `prompt`                     | `denied`                        | `denied`                            |
| `denied`                     | `allowed`                       | `denied`                            |
| `denied`                     | `prompt`                        | `denied`                            |
| `denied`                     | `denied`                        | `denied`                            |

### Berechtigungspolitik für `local-network-access`

Das Festlegen einer Berechtigungspolitik für `local-network-access` ist gleichbedeutend mit dem Festlegen einer Berechtigungspolitik für `local-network` und `loopback-network` gleichzeitig.

Zum Beispiel, das hier gezeigte `allow`-Attribut:

```html
<iframe src="https://example.com" allow="local-network-access"></iframe>
```

ist gleichbedeutend mit:

```html
<iframe
  src="https://example.com"
  allow="local-network; loopback-network"></iframe>
```

Wenn Sie alle Formen der Berechtigungspolitik in einem `<iframe>` zu Abwärtskompatibilitätszwecken zulassen müssen, können Sie entweder

```html
<iframe
  src="https://example.com"
  allow="local-network-access; local-network; loopback-network"></iframe>
```

oder

```html
<iframe
  src="https://example.com"
  allow="local-network-access *; local-network *; loopback-network *"></iframe>
```

angeben.

## Siehe auch

- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriff
- {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} Direktiven
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace)
