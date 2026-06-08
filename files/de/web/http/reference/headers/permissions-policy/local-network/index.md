---
title: "Permissions-Policy: local-network Directive"
short-title: local-network
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-network
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{SeeCompatTable}}

Der HTTP {{HTTPHeader("Permissions-Policy")}} Header `local-network` Directive steuert, ob das aktuelle Dokument Netzwerk-Anfragen an lokale Adressen stellen darf.

Eine lokale Adresse ist nur im lokalen Netzwerk zugänglich; ihr Ziel unterscheidet sich je nach Netzwerk. Zum Beispiel `192.168.0.1`.

Insbesondere dort, wo eine definierte Richtlinie die Nutzung dieses Features blockiert, schlagen Anfragen an lokale Adressen immer fehl.

Siehe [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access) für weitere Details.

## Syntax

```http
Permissions-Policy: local-network=<allowlist>;
```

- `<allowlist>`
  - : Eine Liste von Ursprüngen, für die die Erlaubnis zur Nutzung des Features erteilt wird. Siehe [`Permissions-Policy` > Syntax](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) für weitere Details.

## Standardrichtlinie

Die Standardliste für `local-network` ist `self`. Der übergeordnete Browsing-Kontext und iframes mit demselben Ursprung haben standardmäßig Zugriff auf das `local-network` Feature.

## Beispiele

### Grundlegende Verwendung

SecureCorp Inc. möchte `local-network` in allen Cross-Origin-iframes außer denen, deren Ursprung `https://example.com` ist, nicht zulassen. Dies kann durch die Bereitstellung des folgenden HTTP-Antwort-Headers zur Definition einer Berechtigungsrichtlinie erreicht werden:

```http
Permissions-Policy: local-network=(self "https://example.com")
```

SecureCorp Inc. muss ebenfalls ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut auf jedem `<iframe>` Element einfügen, bei dem `local-network` erlaubt sein soll:

```html
<iframe src="https://example.com/lna" allow="local-network"></iframe>
```

> [!NOTE]
> Die Spezifizierung des `Permissions-Policy` Headers in dieser Weise schließt `local-network` für andere Ursprünge aus, selbst wenn sie durch das `<iframe>` `allow` Attribut erlaubt sind.

### Verwendung der Standardrichtlinie

Wenn eine Liste für `local-network` nicht durch einen `Permissions-Policy` Antwort-Header definiert ist, wenden Benutzeragenten die Standardliste `self` an. In diesem Modus ist `local-network` im übergeordneten Browsing-Kontext und iframes mit demselben Ursprung automatisch erlaubt, aber nicht in Cross-Origin-iframes.

Um `local-network` in einem Cross-Origin-iframe zu erlauben, fügen Sie dem `<iframe>` Element ein {{HTMLElement('iframe','allow','#Attributes')}} Attribut hinzu:

```html
<iframe src="https://other.com/lna" allow="local-network"></iframe>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access)
- {{HTTPHeader("Permissions-Policy")}} Header
- [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy)
