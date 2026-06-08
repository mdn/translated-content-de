---
title: "Permissions-Policy: loopback-network Direktive"
short-title: loopback-network
slug: Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{SeeCompatTable}}

Der HTTP-Header {{HTTPHeader("Permissions-Policy")}} `loopback-network`-Direktive steuert, ob das aktuelle Dokument Netzwerkanfragen an Loopback-Adressen stellen darf.

Eine Loopback-Adresse ist nur auf dem lokalen Host zugänglich; ihr Ziel wird auf jedem Gerät unterschiedlich sein. Zum Beispiel `127.0.0.1`, das allgemein als `localhost` bekannt ist.

Konkret gilt: Wo eine definierte Richtlinie die Nutzung dieses Features blockiert, werden Anfragen an Loopback-Adressen immer fehlschlagen.

Siehe [Lokaler Netzwerkzugang](/de/docs/Web/Security/Defenses/Local_network_access) für weitere Details.

## Syntax

```http
Permissions-Policy: loopback-network=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für mehr Details.

## Standardrichtlinie

Die Standardzugriffsliste für `loopback-network` ist `self`. Der oberste Browsing-Kontext und gleichoriginige iframes haben standardmäßig Zugriff auf das `loopback-network`-Feature.

## Beispiele

### Grundlegende Verwendung

SecureCorp Inc. möchte `loopback-network` in allen Cross-Origin-iframes außer denen, deren Ursprung `https://example.com` ist, untersagen. Dies kann durch Auslieferung des folgenden HTTP-Response-Headers erfolgen, um eine Berechtigungsrichtlinie zu definieren:

```http
Permissions-Policy: loopback-network=(self "https://example.com")
```

SecureCorp Inc. muss auch ein Attribut {{HTMLElement('iframe','allow','#Attributes')}} auf jedem `<iframe>` Element einschließen, bei dem `loopback-network` erlaubt werden soll:

```html
<iframe src="https://example.com/lna" allow="loopback-network"></iframe>
```

> [!NOTE]
> Die Angabe des `Permissions-Policy`-Headers auf diese Weise untersagt `loopback-network` für andere Ursprünge, selbst wenn sie durch das `<iframe>`-Attribut `allow` erlaubt sind.

### Nutzung der Standardrichtlinie

Wenn eine Zugriffsliste für `loopback-network` nicht durch einen `Permissions-Policy`-Response-Header definiert wird, wenden Benutzeragenten die Standardzugriffsliste `self` an. In diesem Modus ist `loopback-network` automatisch im obersten Browsing-Kontext und gleichoriginigen iframes erlaubt, jedoch nicht in Cross-Origin-iframes.

Um `loopback-network` in einem Cross-Origin-iframe zu erlauben, fügen Sie dem `<iframe>` Element ein Attribut {{HTMLElement('iframe','allow','#Attributes')}} hinzu:

```html
<iframe src="https://other.com/lna" allow="loopback-network"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lokaler Netzwerkzugang](/de/docs/Web/Security/Defenses/Local_network_access)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
