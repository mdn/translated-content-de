---
title: Zugriff auf das lokale Netzwerk
slug: Web/Security/Defenses/Local_network_access
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

Die [**Zugriff auf das lokale Netzwerk**](https://wicg.github.io/local-network-access/) Technologie schränkt die Möglichkeit von Websites ein, Anfragen an das lokale Netzwerk des Nutzers zu stellen, um das Risiko von Angriffen wie Cross-Site-Request-Forgery zu verringern. Dieser Artikel erklärt, wie der Zugriff auf das lokale Netzwerk funktioniert und was Webentwickler tun müssen, um damit zu interagieren.

## Hintergrund

Es gibt eine Reihe von Szenarien, in denen eine Website eine Anfrage an ein lokales Netzwerk stellen möchte. Zum Beispiel:

- Eine Website greift auf ein lokales Gerät zu, um Diagnosedaten zur Fehlerbehebung abzurufen.
- Eine Website greift auf ein lokales Gerät zu, um Konfigurationsdetails während eines Setup-Prozesses bereitzustellen.
- Eine Website verbindet sich mit einer lokalen Seite (wie einem Intranet), um Authentifizierungsinformationen bereitzustellen oder als Teil einer Testumgebung.

Der Zugriff auf das lokale Netzwerk birgt Risiken – Angreifer können solche Anfragen verwenden, um bestimmte Klassen von [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriffen gegen lokale Netzwerkgeräte wie Router und Drucker auszuführen.

Ein häufiger Angriff besteht typischerweise darin, dass die Website eines Angreifers versucht, auf den Router eines Benutzers zuzugreifen und dessen DNS-Einstellungen zu ändern. Gelingt dies, können DNS-Anfragen von einem DNS-Server der Wahl des Angreifers aufgelöst werden, was bedeutet, dass der Angreifer Nutzer zu anderen Websites als den beabsichtigten senden kann, wie Phishing- oder Clickjacking-Sites, was möglicherweise ihre Anmeldedaten gefährdet.

Der Angreifer könnte auch die Firmware des Routers ersetzen und bösartige Sites darauf hosten, oder Werbetraffic stehlen und auf andere Websites umleiten. Diese Art von Angriff wird erleichtert durch die Tatsache, dass viele Nutzer die Standard-Management-Passwörter ihrer lokalen Geräte nicht ändern.

Der Zugriff auf das lokale Netzwerk mindert diese Risiken, indem er den Zugriff auf das lokale Netzwerk über eine Reihe von Berechtigungsabfragen und {{httpheader("Permissions-Policy")}} Direktiven steuert.

## Adressräume

Der Zugriff auf das lokale Netzwerk definiert drei verschiedene **Adressräume**, in die alle Netzwerkadressen kategorisiert werden:

- Lokal
  - : Eine lokale Adresse ist nur im lokalen Netzwerk zugänglich; ihr Ziel unterscheidet sich in verschiedenen Netzwerken. Zum Beispiel `192.168.0.1`.
- Loopback
  - : Eine Loopback-Adresse ist nur auf dem lokalen Gerät zugänglich; ihr Ziel unterscheidet sich auf jedem Gerät. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.
- Öffentlich
  - : Eine öffentliche Adresse ist weltweit von jedem im Internet zugänglich; ihr Ziel ist für alle Geräte global gleich. Zum Beispiel `104.18.27.120` (die IP-Adresse von `example.com`).

Abhängig davon, in welchen Adressraum die URL einer Anfrage kategorisiert wird, wird der Browser ihre Berechtigungen unterschiedlich behandeln.

## Welche Anfragetypen sind betroffen?

Einschränkungen beim Zugriff auf das lokale Netzwerk gelten für:

- Subressourcenanfragen
- [`fetch()`](/de/docs/Web/API/Window/fetch) Anfragen
- Navigation von Subframes
- [Service Workers](/de/docs/Web/API/Service_Worker_API), einschließlich Anfragen, die über [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate) gestellt werden, wenn der navigierte [`WindowClient`](/de/docs/Web/API/WindowClient) ein Subframe ist
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- [WebTransport](/de/docs/Web/API/WebTransport_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)

## Berechtigungen für den Zugriff auf das lokale Netzwerk

In Browsern, die die Spezifikation für den Zugriff auf das lokale Netzwerk unterstützen, sind Loopback- und lokale Anfragen hinter bestimmten Berechtigungen versteckt — `local-network` und `loopback-network`. Dies bedeutet, dass wenn eine Website eine Anfrage an eine lokale IP oder Loopback-Adresse stellt oder eine lokale Website (z.B. ein Intranet) eine Anfrage an eine Loopback-Adresse sendet, dem Nutzer ein Berechtigungsdialog angezeigt wird, in dem er die Anfrage erlauben oder ablehnen kann.

Sie können den Berechtigungsstatus mit der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen, zum Beispiel um festzustellen, ob eine lokale Anfrage erfolgreich sein wird und den Nutzer entsprechend zu beraten:

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

## Entspannung gemischter Inhalte

Wenn erteilt, entspannen die Berechtigungen zusätzlich das Blockieren [gemischter Inhalte](/de/docs/Web/Security/Defenses/Mixed_content) für Anfragen im lokalen Netzwerk. Dies ist notwendig, weil viele lokale Geräte aus verschiedenen Gründen nicht in der Lage sind, öffentlich vertrauenswürdige TLS-Zertifikate zu erhalten. Beispielsweise ermöglicht es öffentlichen Websites, auf lokale Testserver oder Geräte zuzugreifen, die über HTTP laufen.

Um unterstützenden Browsern explizit mitzuteilen, gemischte Inhaltsüberprüfungen zu überspringen, setzen Sie die Eigenschaft [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) auf `local` oder `loopback` bei neuen Anfragen (über den [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor oder direkt in der [`fetch()`](/de/docs/Web/API/Window/fetch) Methode).

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

Das Setzen von `targetAddressSpace: "loopback"` ist erforderlich in Fällen, in denen eine URL eine öffentliche Domain-Adresse ist, aber auf eine lokale Netzwerkadresse auflöst, wie `http://internal.example.com`. Wenn dies weggelassen wird, wird eine Anfrage von einer HTTPS-Site zum Zugriff auf die HTTP-Ressource bei gemischten Inhaltsüberprüfungen fehlschlagen.

Einige Adressen, wie private IP-Literale (z. B. `192.168.0.1`) und `.local`-Adressen (wie `http://router.local`), haben bei gewährter Zugriffserlaubnis für das lokale Netzwerk gelockerte Überprüfungen gemischter Inhalte, sodass die Eigenschaft `targetAddressSpace` nicht gesetzt werden muss. Wenn jedoch keine Zugriffserlaubnis für das lokale Netzwerk gewährt wird, gelten die Überprüfungen gemischter Inhalte weiterhin, unabhängig davon, ob `targetAddressSpace` gesetzt ist oder nicht.

## Richtlinien für Zugriffsberechtigungen auf das lokale Netzwerk

Sie können auf Dokumentenebene den Zugriff auf lokale und Loopback-Adressen mit den {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} Direktiven steuern.

Die Standardzuweisungsliste für diese Direktiven ist `self`, was bedeutet, dass Anfragen nur im aktuellen Dokument und in eingebetteten Browsing-Kontexten im selben Ursprung erlaubt sind. Um lokale oder Loopback-Anfragen auf Dokumentebene für einen bestimmten Ursprung zuzulassen, verwenden Sie diese Direktiven in einem `Permissions-Policy` HTTP-Header:

```http
Permissions-Policy: local-network=("https://example.com")

Permissions-Policy: loopback-network=("https://example.com")
```

Oder in einem `<iframe>` [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) Attribut für ein eingebettetes Dokument:

```html
<iframe src="https://example.com" allow="local-network"></iframe>

<iframe src="https://example.com" allow="loopback-network"></iframe>
```

Wenn eine lokale Netzwerkanfrage vom eingebetteten Dokument gestellt wird, wird sie so behandelt, als hätte das einbettende Dokument die Erlaubnis für den Zugriff auf das lokale Netzwerk angefordert, und jede Entscheidung des Benutzers zur Erlaubnis wird mit dem Ursprung des einbettenden Dokuments verknüpft. Wenn das Dokument innerhalb des `<iframe>` zu anderen Dokumenten navigiert, die ebenfalls lokale Netzwerkanfragen stellen, müssen Sie alle ihre Ursprünge in der Berechtigungsrichtlinie angeben.

Zum Beispiel, wenn `https://example.com` das `<iframe>` zu `https://example2.com` navigierte und sowohl `https://example.com` als auch `https://example2.com` Anfragen zum lokalen Netzwerk stellten, müssten Sie die Berechtigung explizit an beide Ursprünge delegieren, wie folgt:

```html
<iframe
  src="https://example.com"
  allow="local-network https://example.com https://example2.com"></iframe>
```

Sie könnten auch `allow="local-network *"` angeben, um jedem Ursprung, der im `<iframe>` geladen wird, zu erlauben, lokale Netzwerkanfragen zu stellen. Dies kann nützlich sein in Fällen, in denen ein `<iframe>` beliebige Weiterleitungen zu einem anderen Ursprung macht (wie bei SSO), bevor es zurück zu `localhost` weiterleitet.

## Der `local-network-access` Alias

Die Technologie für den Zugriff auf das lokale Netzwerk wurde ursprünglich mit der {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} Erlaubnis spezifiziert, die verwendet wurde, um Netzwerk-Anfragen sowohl an lokale als auch an Loopback-Adressen gemeinsam zu steuern. Dies wurde auf die granulareren {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} Berechtigungen aktualisiert, die Sie in Zukunft verwenden sollten.

Die `local-network-access` Erlaubnis wird jedoch zur Rückwärtskompatibilität [wo bereits implementiert](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access#browser_compatibility) weiterhin unterstützt, als Alias von `local-network` und `loopback-network`.

### Berechtigungsstatus für `local-network-access`

Beim Abfragen des Berechtigungsstatus von `local-network-access`, zum Beispiel:

```js
navigator.permissions.query({ name: "local-network-access" }).then((result) => {
  // ...
});
```

Das zurückgegebene Ergebnis ist eine Kombination aus dem Status der beiden neueren Berechtigungen. Wenn nur eine von `local-network` oder `loopback-network` einen nicht-`prompt`-Zustand hat, wird dieser Wert zurückgegeben. Wenn eine der Berechtigungen zuvor `denied` war, wird auch die `local-network-access` Berechtigung `denied` zurückgeben. Die folgende Tabelle fasst alle möglichen Berechtigungsergebnisse zusammen:

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

Das Setzen einer Berechtigungspolitik für `local-network-access` entspricht dem Setzen einer Berechtigungspolitik für sowohl `local-network` als auch `loopback-network` gleichzeitig.

Zum Beispiel entspricht das hier gezeigte `allow` Attribut:

```html
<iframe src="https://example.com" allow="local-network-access"></iframe>
```

dem:

```html
<iframe
  src="https://example.com"
  allow="local-network; loopback-network"></iframe>
```

Wenn Sie alle Formen der Berechtigungspolitik in einem `<iframe>` aus Rückwärtskompatibilitätsgründen erlauben müssen, können Sie entweder angeben

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

## Siehe auch

- [Cross-site request forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF) Angriff
- {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}} Direktiven
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace)
