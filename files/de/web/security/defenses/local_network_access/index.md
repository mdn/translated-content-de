---
title: Zugriff auf das lokale Netzwerk
slug: Web/Security/Defenses/Local_network_access
l10n:
  sourceCommit: daeab84f326911c95114ee686c3c3ab566b71afe
---

Die [**Technologie für den Zugriff auf das lokale Netzwerk**](https://wicg.github.io/local-network-access/) schränkt die Möglichkeit von Websites ein, Anfragen an das lokale Netzwerk des Nutzers zu stellen, um das Risiko von Angriffen wie Cross-Site-Request-Forgery zu mindern. Dieser Artikel erklärt, wie der Zugriff auf das lokale Netzwerk funktioniert und was Webentwickler tun müssen, um damit zu interagieren.

## Hintergrund

Es gibt eine Reihe von Szenarien, in denen eine Website eine Anfrage an ein lokales Netzwerk stellen möchte. Zum Beispiel:

- Eine Website greift auf ein lokales Gerät zu, um beim Troubleshooting Diagnosedaten abzurufen.
- Eine Website greift auf ein lokales Gerät zu, um während eines Einrichtungsverfahrens Konfigurationsdetails bereitzustellen.
- Eine Website verbindet sich mit einer lokalen Seite (wie einem Intranet), um Authentifizierungsinformationen bereitzustellen oder als Teil einer Testumgebung.

Der erlaubte Zugriff auf das lokale Netzwerk birgt Risiken — Angreifer können solche Anfragen nutzen, um bestimmte Klassen von [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriffen gegen Geräte im lokalen Netzwerk wie Router und Drucker zu initiieren.

Ein häufiger Angriff besteht typischerweise darin, dass die Seite eines Angreifers versucht, auf den Router eines Benutzers zuzugreifen und deren DNS-Einstellungen zu ändern. Gelingt dies, können DNS-Anfragen von einem DNS-Server aufgelöst werden, den der Angreifer gewählt hat, was bedeutet, dass der Angreifer Nutzer zu anderen Websites umleiten kann als beabsichtigt, wie Phishing- oder Clickjacking-Seiten, und möglicherweise deren Zugangsdaten kompromittieren.

Der Angreifer könnte auch die Firmware des Routers ersetzen und bösartige Seiten darauf hosten oder Werbeverkehr stehlen und auf andere Seiten umleiten. Solche Angriffe werden dadurch erleichtert, dass viele Nutzer die Standardverwaltungspasswörter ihrer lokalen Geräte nicht ändern.

Der Zugriff auf das lokale Netzwerk mildert diese Risiken, indem er den Zugriff auf das lokale Netzwerk durch eine Reihe von Berechtigungsaufforderungen und {{httpheader("Permissions-Policy")}}-Direktiven steuert.

## Adressräume

Der Zugriff auf das lokale Netzwerk definiert drei verschiedene **Adressräume**, unter denen alle Netzwerkadressen kategorisiert werden:

- Lokal
  - : Eine lokale Adresse ist nur im lokalen Netzwerk zugänglich; ihr Ziel wird in verschiedenen Netzwerken unterschiedlich sein. Zum Beispiel `192.168.0.1`.
- Loopback
  - : Eine Loopback-Adresse ist nur auf dem lokalen Gerät zugänglich; ihr Ziel wird auf jedem Gerät unterschiedlich sein. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.
- Öffentlich
  - : Eine öffentliche Adresse ist von überall im Internet zugänglich; ihr Ziel ist für alle Geräte weltweit gleich. Zum Beispiel `104.18.27.120` (die IP-Adresse von `example.com`).

Abhängig davon, in welchem Adressraum eine Anforderungs-URL kategorisiert ist, wird der Browser deren Berechtigungen unterschiedlich handhaben.

## Welche Anfragetypen sind betroffen?

Die Einschränkungen für den Zugriff auf das lokale Netzwerk gelten für:

- Subressourcen-Anfragen
- [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen
- Navigation von Subframes
- [Service Workers](/de/docs/Web/API/Service_Worker_API), einschließlich Anfragen, die über [`WindowClient.navigate()`](/de/docs/Web/API/WindowClient/navigate) gestellt werden, wenn der navigierte [`WindowClient`](/de/docs/Web/API/WindowClient) ein Subframe ist
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- [WebTransport](/de/docs/Web/API/WebTransport_API)
- [WebRTC](/de/docs/Web/API/WebRTC_API)

## Berechtigungen für den Zugriff auf das lokale Netzwerk

In Browsern, die die Spezifikation für den Zugriff auf das lokale Netzwerk unterstützen, sind Loopback- und lokale Anfragen hinter spezifischen Berechtigungen gesperrt — `local-network` und `loopback-network`. Das bedeutet, dass dem Benutzer bei einer Website-Anfrage an eine lokale IP- oder Loopback-Adresse oder einer lokalen Website (zum Beispiel ein Intranet), die eine Anfrage an eine Loopback-Adresse stellt, ein Berechtigungsdialog angezeigt wird, der ihn fragt, ob er die Anfrage erlauben oder ablehnen möchte.

Sie können den Status der Berechtigung mit der Methode [`Permissions.query()`](/de/docs/Web/API/Permissions/query) überprüfen, zum Beispiel um zu checken, ob eine lokale Anfrage erfolgreich sein wird und den Nutzer entsprechend zu beraten:

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

## Entspannen von gemischten Inhalten

Wenn die Berechtigung erteilt wird, entspannt sie zusätzlich das Blockieren von [gemischten Inhalten](/de/docs/Web/Security/Defenses/Mixed_content) für Anfragen an das lokale Netzwerk. Dies ist erforderlich, da viele lokale Geräte aus verschiedenen Gründen keine öffentlich vertrauenswürdigen TLS-Zertifikate erhalten können. Zum Beispiel ermöglicht es öffentlichen Websites, auf lokale Testserver oder Geräte zuzugreifen, die über HTTP laufen.

Um unterstützenden Browsern ausdrücklich mitzuteilen, gemischte Inhaltsprüfungen zu überspringen, setzen Sie die Eigenschaft [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace) auf `local` oder `loopback` bei neuen Anfragen (über den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode).

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

Das Setzen von `targetAddressSpace: "loopback"` ist erforderlich, in Fällen, in denen eine URL eine öffentliche Domain-Adresse ist, aber letztendlich zu einer lokalen Netzwerkadresse aufgelöst wird, wie `http://internal.example.com`. Wird dies weggelassen, schlägt eine Anfrage von einer HTTPS-Seite auf die HTTP-Ressource bei gemischten Inhaltsprüfungen fehl.

Einige Adressen, wie private IP-Literale (zum Beispiel `192.168.0.1`) und `.local`-Adressen (wie `http://router.local`), sind bei gemischten Inhaltsprüfungen entspannt, wenn Berechtigungen für den Zugriff auf das lokale Netzwerk erteilt werden. Deshalb benötigen sie die Einstellung der `targetAddressSpace`-Eigenschaft nicht. Sind jedoch keine Berechtigungen für den Zugriff auf das lokale Netzwerk erteilt, gelten die Prüfungen für gemischte Inhalte weiterhin, unabhängig davon, ob `targetAddressSpace` gesetzt ist oder nicht.

## Richtlinien für Berechtigungen für den Zugriff auf das lokale Netzwerk

Sie können den Zugriff auf lokale und Loopback-Adressen auf Dokumentebene steuern, indem Sie die {{httpheader('Permissions-Policy/local-network','local-network')}}- und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}}-{{httpheader('Permissions-Policy')}}-Direktiven verwenden.

Die Standard-Zulassungsliste für diese Direktiven ist `self`, was bedeutet, dass Anfragen im aktuellen Dokument und eingebetteten Browsing-Kontexten desselben Ursprungs nur dann zugelassen werden. Um lokale oder Loopback-Anfragen auf Dokumentebene für einen bestimmten Ursprung zuzulassen, verwenden Sie diese Direktiven in einem `Permissions-Policy`-HTTP-Header:

```http
Permissions-Policy: local-network=("https://example.com")

Permissions-Policy: loopback-network=("https://example.com")
```

Oder in einem `<iframe>`-[`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)-Attribut für ein eingebettetes Dokument:

```html
<iframe src="https://example.com" allow="local-network"></iframe>

<iframe src="https://example.com" allow="loopback-network"></iframe>
```

Wenn eine Anfrage aus dem eingebetteten Dokument an das lokale Netzwerk gestellt wird, wird dies so behandelt, als hätte das einbettende Dokument die Berechtigung für den Zugriff auf das lokale Netzwerk angefordert, und jede vom Benutzer getroffene Berechtigungsentscheidung wird an den Ursprung des einbettenden Dokuments gebunden. Wenn das Dokument innerhalb des `<iframe>` zu anderen Dokumenten navigiert, die ebenfalls Anfragen an das lokale Netzwerk stellen, müssen Sie alle ihre Ursprünge in der Berechtigungspolitik angeben.

Zum Beispiel, wenn `https://example.com` das `<iframe>` zu `https://example2.com` navigiert und sowohl `https://example.com` als auch `https://example2.com` Anfragen für den Zugriff auf das lokale Netzwerk stellen, müssten Sie die Berechtigungen explizit für beide Ursprünge wie folgt delegieren:

```html
<iframe
  src="https://example.com"
  allow="local-network https://example.com https://example2.com"></iframe>
```

Sie könnten auch `allow="local-network *"` angeben, um jedem Ursprung, der im `<iframe>` geladen wird, das Stellen von Anfragen an das lokale Netzwerk zu erlauben. Dies kann nützlich sein in Fällen, in denen ein `<iframe>` willkürliche Umleitungen zu einem anderen Ursprung vornimmt (wie bei SSO), bevor es wieder zu `localhost` umleitet.

## Der Alias `local-network-access`

Die Technologie für den Zugriff auf das lokale Netzwerk wurde ursprünglich mit der Berechtigung {{httpheader('Permissions-Policy/local-network-access','local-network-access')}} spezifiziert, die verwendet wurde, um Netzwerkanfragen sowohl an lokale als auch Loopback-Adressen zusammen zu steuern. Dies wurde auf die granulareren Berechtigungen {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} aktualisiert, die Sie in Zukunft verwenden sollten.

Jedoch wird die `local-network-access`-Berechtigung weiterhin für Rückwärtskompatibilität [wo bereits implementiert](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access#browser_compatibility) als Alias von `local-network` und `loopback-network` unterstützt.

### Berechtigungsstatus für `local-network-access`

Wenn der Berechtigungsstatus von `local-network-access` abgefragt wird, zum Beispiel:

```js
navigator.permissions.query({ name: "local-network-access" })
.then((result) => { ... });
```

Das zurückgegebene Ergebnis ist eine Kombination aus dem Status der beiden neueren Berechtigungen. Wenn nur eine von `local-network` oder `loopback-network` einen nicht-`prompt`-Zustand hat, wird dieser Wert zurückgegeben. Wenn eine der beiden Berechtigungen zuvor `denied` war, wird die `local-network-access`-Berechtigung ebenfalls `denied` zurückgeben. Die folgende Tabelle fasst alle möglichen Berechtigungsergebnisse zusammen:

| `local-network`-Berechtigung | `loopback-network`-Berechtigung | `local-network-access`-Berechtigung |
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

Eine Berechtigungspolitik für `local-network-access` festzulegen, ist gleichbedeutend mit dem Festlegen einer Berechtigungspolitik sowohl für `local-network` als auch für `loopback-network` gleichzeitig.

Zum Beispiel ist das hier gezeigte `allow`-Attribut:

```html
<iframe src="https://example.com" allow="local-network-access"></iframe>
```

gleichbedeutend mit:

```html
<iframe
  src="https://example.com"
  allow="local-network; loopback-network"></iframe>
```

Wenn Sie alle Formen der Berechtigungspolitik in einem `<iframe>` aus Gründen der Rückwärtskompatibilität zulassen müssen, können Sie entweder

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

- [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriff
- {{httpheader('Permissions-Policy/local-network','local-network')}} und {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} {{httpheader('Permissions-Policy')}}-Direktiven
- [`Request.targetAddressSpace`](/de/docs/Web/API/Request/targetAddressSpace)
