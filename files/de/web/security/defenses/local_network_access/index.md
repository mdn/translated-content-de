---
title: Lokaler Netzwerkzugriff
slug: Web/Security/Defenses/Local_network_access
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

Die [**Lokalen Netzwerkzugriff**](https://wicg.github.io/local-network-access/) Technologie beschränkt die Fähigkeit von Websites, Anfragen an das lokale Netzwerk des Benutzers zu stellen, um Risiken wie Cross-Site-Request-Forgery-Angriffe zu mindern. In diesem Artikel wird erklärt, wie der lokale Netzwerkzugriff funktioniert und was Webentwickler tun müssen, um damit zu interagieren.

## Hintergrund

Es gibt mehrere Szenarien, in denen eine Website eine Anfrage an ein lokales Netzwerk stellen möchte. Zum Beispiel:

- Eine Website greift auf ein lokales Gerät zu, um Diagnoseinformationen zur Fehlerbehebung abzurufen.
- Eine Website greift auf ein lokales Gerät zu, um während eines Einrichtungsverfahrens Konfigurationsdetails bereitzustellen.
- Eine Website verbindet sich mit einer lokalen Seite (wie einem Intranet), um Authentifizierungsinformationen bereitzustellen oder als Teil einer Testumgebung.

Der Zugriff auf das lokale Netzwerk birgt Risiken - Angreifer können solche Anfragen nutzen, um bestimmte Arten von [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriffen gegen lokale Netzwerkgeräte wie Router und Drucker zu initiieren.

Ein häufiger Angriff besteht typischerweise darin, dass die Website eines Angreifers versucht, auf den Router eines Nutzers zuzugreifen und dessen DNS-Einstellungen zu ändern. Wenn dies gelingt, können DNS-Abfragen von einem DNS-Server der Wahl des Angreifers aufgelöst werden, was bedeutet, dass der Angreifer Benutzer auf andere Seiten schicken kann, als sie beabsichtigt haben, wie Phishing- oder Clickjacking-Seiten, was potenziell ihre Zugangsdaten kompromittiert.

Der Angreifer könnte auch die Firmware des Routers ersetzen und bösartige Seiten darauf hosten oder Werbeverkehr stehlen und auf andere Seiten umleiten. Diese Art von Angriff wird erleichtert durch die Tatsache, dass viele Nutzer die Standardverwaltungspasswörter ihrer lokalen Geräte nicht ändern.

Der lokale Netzwerkzugriff reduziert diese Risiken, indem der Zugriff auf das lokale Netzwerk über eine Reihe von Berechtigungsaufforderungen und {{httpheader("Permissions-Policy")}} Direktiven kontrolliert wird.

## Adressräume

Der lokale Netzwerkzugriff definiert drei verschiedene **Adressräume**, unter denen alle Netzwerkadressen kategorisiert werden:

- Lokal
  - : Eine lokale Adresse ist nur im lokalen Netzwerk zugänglich; ihr Ziel wird in verschiedenen Netzwerken unterschiedlich sein. Zum Beispiel `192.168.0.1`.
- Loopback
  - : Eine Loopback-Adresse ist nur auf dem lokalen Gerät zugänglich; ihr Ziel wird auf jedem Gerät unterschiedlich sein. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.
- Öffentlich
  - : Eine öffentliche Adresse ist von überall im Internet verfügbar; ihr Ziel ist für alle Geräte weltweit gleich. Zum Beispiel `104.18.27.120` (die IP-Adresse von `example.com`).

Je nachdem, in welchem Adressraum eine Anfrage-URL kategorisiert ist, wird der Browser die Berechtigungen unterschiedlich handhaben.

## Welche Anfragetypen sind betroffen?

Einschränkungen für den lokalen Netzwerkzugriff gelten für:

- Subressourcenanfragen
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- Navigation von Subframes
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- [WebTransport](/de/docs/Web/API/WebTransport_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)

## Berechtigungen für lokalen Netzwerkzugriff

In Browsern, die die Spezifikation für den lokalen Netzwerkzugriff unterstützen, werden Loopback- und lokale Anfragen durch spezifische Berechtigungen geregelt — `local-network` und `loopback-network`. Das bedeutet, dass, wenn eine Website eine Anfrage an eine lokale IP- oder Loopback-Adresse stellt oder eine lokale Website (zum Beispiel ein Intranet) eine Anfrage an eine Loopback-Adresse macht, dem Nutzer ein Berechtigungsdialog angezeigt wird, in dem er aufgefordert wird, die Anfrage zuzulassen oder abzulehnen.

Sie können den Status der Berechtigung mit der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen, zum Beispiel um zu prüfen, ob eine lokale Anfrage erfolgreich sein wird und den Nutzer entsprechend zu beraten:

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

Die Berechtigungen sind auf sichere Kontexte beschränkt. In unsicheren Kontexten werden alle Anfragen scheitern.

## Entspannung von gemischten Inhalten

Wenn die Berechtigungen erteilt werden, wird zusätzlich das Blockieren von [gemischten Inhalten](/de/docs/Web/Security/Defenses/Mixed_content) für lokale Netzwerkzugriffe gelockert. Dies ist notwendig, da viele lokale Geräte aus verschiedenen Gründen keine öffentlich vertrauenswürdigen TLS-Zertifikate erhalten können. Zum Beispiel ermöglicht es, dass öffentliche Websites auf lokale Testserver oder Geräte zugreifen, die auf HTTP laufen.

Um unterstützenden Browsern explizit mitzuteilen, dass sie gemischte Inhaltsüberprüfungen überspringen sollen, setzen Sie die Eigenschaft [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) bei neuen Anfragen (über den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor oder direkt in der [`fetch()`](/de/docs/Web/API/Window/fetch) Methode) auf `local` oder `loopback`.

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

Das Setzen von `targetAddressSpace: "loopback"` ist erforderlich in Fällen, in denen eine URL eine öffentliche Domain-Adresse ist, aber letztendlich zu einer lokalen Netzwerkadresse führt, wie `http://internal.example.com`. Wird dies ausgelassen, scheitert eine Anfrage von einer HTTPS-Site, die auf die HTTP-Ressource zugreift, an den Überprüfungen für gemischte Inhalte.

Einige Adressen, wie private IP-Literale (zum Beispiel `192.168.0.1`) und `.local` Adressen (wie `http://router.local`), haben gelockerte Überprüfungen für gemischte Inhalte in Fällen, in denen Berechtigungen für den lokalen Netzwerkzugriff erteilt werden, sodass die `targetAddressSpace` Eigenschaft nicht gesetzt werden muss. Werden jedoch keine Berechtigungen für den lokalen Netzwerkzugriff erteilt, gelten weiterhin Überprüfungen für gemischte Inhalte, unabhängig davon, ob `targetAddressSpace` gesetzt ist oder nicht.

## Richtlinien für Berechtigungen für lokalen Netzwerkzugriff

Sie können den Zugriff auf lokale und Loopback-Adressen auf Dokumentebene mit den {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} Direktiven kontrollieren.

Die Standard-Whitelist für diese Direktiven ist `self`, was bedeutet, dass Anfragen im aktuellen Dokument und in eingebetteten Browsing-Kontexten mit gleichem Ursprung nur erlaubt werden. Um lokale oder Loopback-Anfragen auf Dokumentebene für einen bestimmten Ursprung zu erlauben, verwenden Sie diese Direktiven in einem `Permissions-Policy` HTTP-Header:

```http
Permissions-Policy: local-network=("https://example.com")

Permissions-Policy: loopback-network=("https://example.com")
```

Oder in einem `<iframe>` [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut für ein eingebettetes Dokument:

```html
<iframe src="https://example.com" allow="local-network"></iframe>

<iframe src="https://example.com" allow="loopback-network"></iframe>
```

Wenn eine lokale Netzwerkabfrage von dem eingebetteten Dokument gestellt wird, wird sie behandelt, als hätte das einbettende Dokument die Berechtigung für den lokalen Netzwerkzugriff angefordert, und jede Berechtigungsentscheidung des Benutzers wird an den Ursprung des einbettenden Dokuments gebunden. Wenn das Dokument im `<iframe>` zu anderen Dokumenten navigiert, die ebenfalls lokale Netzwerkabfragen machen, müssen Sie alle ihre Ursprünge in der Berechtigungsrichtlinie angeben.

Zum Beispiel, wenn `https://example.com` das `<iframe>` nach `https://example2.com` navigiert, und sowohl `https://example.com` als auch `https://example2.com` lokale Netzwerkzugriffsanfragen stellen, müssten Sie die Berechtigung explizit an beide Ursprünge delegieren, wie folgt:

```html
<iframe
  src="https://example.com"
  allow="local-network https://example.com https://example2.com"></iframe>
```

Sie könnten auch `allow="local-network *"` angeben, um jedem Ursprung, der im `<iframe>` geladen wird, lokale Netzwerkzugriffe zu erlauben. Dies kann nützlich sein, in Fällen, in denen ein `<iframe>` willkürliche Weiterleitungen zu einem anderen Ursprung vornimmt (wie bei SSO), bevor es zurück zu `localhost` weiterleitet.

## Das `local-network-access` Alias

Die Technologie für den lokalen Netzwerkzugriff wurde ursprünglich mit der Berechtigung {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} spezifiziert, die verwendet wurde, um Netzwerkzugriffe auf sowohl lokale als auch Loopback-Adressen zusammen zu steuern. Dies wurde auf die granulareren Berechtigungen {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} aktualisiert, die Sie fortan verwenden sollten.

Aber die `local-network-access` Berechtigung wird weiterhin zur Rückwärtskompatibilität [wo bereits implementiert](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access#browser_compatibility) unterstützt, als Alias von `local-network` und `loopback-network`.

### Berechtigungsstatus für `local-network-access`

Beim Abfragen des Berechtigungsstatus von `local-network-access`, zum Beispiel:

```js
navigator.permissions.query({ name: "local-network-access" })
.then((result) => { ... });
```

Das zurückgegebene Ergebnis ist eine Kombination des Zustands der beiden neueren Berechtigungen. Wenn nur eine von `local-network` oder `loopback-network` einen nicht-`prompt` Zustand hat, wird dieser Wert zurückgegeben. Wenn eine der Berechtigungen zuvor `denied` war, dann wird die `local-network-access` Berechtigung ebenfalls `denied` zurückgeben. Die folgende Tabelle fasst alle möglichen Berechtigungsergebnisse zusammen:

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

### Berechtigungsrichtlinie für `local-network-access`

Das Festlegen einer Berechtigungsrichtlinie für `local-network-access` ist gleichbedeutend mit dem Festlegen einer Berechtigungsrichtlinie für sowohl `local-network` als auch `loopback-network` gleichzeitig.

Zum Beispiel ist das hier gezeigte `allow` Attribut:

```html
<iframe src="https://example.com" allow="local-network-access"></iframe>
```

gleichwertig mit:

```html
<iframe
  src="https://example.com"
  allow="local-network; loopback-network"></iframe>
```

Wenn Sie alle Formen der Berechtigungsrichtlinie in einem `<iframe>` aus Gründen der Rückwärtskompatibilität erlauben müssen, können Sie entweder

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

- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriff
- {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} Direktiven
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace)
