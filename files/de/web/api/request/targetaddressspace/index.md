---
title: "Anfrage: targetAddressSpace-Eigenschaft"
short-title: targetAddressSpace
slug: Web/API/Request/targetAddressSpace
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`targetAddressSpace`** der [`Request`](/de/docs/Web/API/Request)-Schnittstelle gibt den Zieladressraum der Anfrage zurück, der angibt, ob diese als Loopback-, lokale oder öffentliche Anfrage gedacht ist.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `local`
  - : Die Anfrage richtet sich an eine lokale Adresse, die nur im lokalen Netzwerk zugänglich ist; ihr Ziel unterscheidet sich in verschiedenen Netzwerken. Zum Beispiel `192.168.0.1`.
- `loopback`
  - : Die Anfrage richtet sich an eine Loopback-Adresse, die nur auf dem lokalen Gerät zugänglich ist; ihr Ziel unterscheidet sich auf jedem Gerät. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.
- `public`
  - : Die Anfrage richtet sich an eine Adresse, die von überall im Internet erreichbar ist; ihr Ziel ist für alle Geräte weltweit gleich. Zum Beispiel `104.18.27.120` (die IP-Adresse von `example.com`).
- `unknown`
  - : Keine `targetAddressSpace` wurde bei der Anfrage gesetzt.

## Beschreibung

In Browsern, die die Spezifikation [Local Network Access](/de/docs/Web/Security/Defenses/Local_network_access) unterstützen, sind Loopback- und lokale Anfragen hinter spezifischen Berechtigungen wie `local-network` und `loopback-network` geschützt. Die Anforderung von Benutzerberechtigungen für solche Anfragen mindert das Risiko von [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriffen gegen lokale Netzwerkgeräte wie Router und Drucker und reduziert die Möglichkeit von Websites, diese Anfragen zur Fingerabdruckerstellung des lokalen Netzwerks des Benutzers zu verwenden.

Diese Berechtigungen sind auf sichere Kontexte beschränkt. Wenn sie erteilt werden, lockern die Berechtigungen zusätzlich das Blockieren von [gemischtem Inhalt](/de/docs/Web/Security/Defenses/Mixed_content) für Anfragen im lokalen Netzwerk. Dies ist erforderlich, da viele lokale Geräte aus verschiedenen Gründen keine öffentlich vertrauenswürdigen TLS-Zertifikate erhalten können. Zum Beispiel ermöglicht es öffentlichen Websites den Zugriff auf lokale Testserver oder Geräte, die auf HTTP laufen.

Die `targetAddressSpace`-Eigenschaft, wenn sie auf `local` oder `loopback` bei neuen Anfragen gesetzt wird (über den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode), weist unterstützende Browser explizit an, Prüfungen auf gemischten Inhalt zu überspringen. Dies ist erforderlich in Fällen, in denen eine URL eine öffentliche Domain-Adresse ist, aber schließlich zu einer lokalen Netzwerkadresse aufgelöst wird, wie `http://internal.example.com`.

Einige Adressen, wie private IP-Literale (z.B. `192.168.0.1`) und `.local`-Adressen (z.B. `http://router.local`), haben gelockerte Prüfungen auf gemischten Inhalt in Fällen, in denen lokale Netzwerkzugriffsberechtigungen erteilt werden, sodass die `targetAddressSpace`-Eigenschaft nicht gesetzt werden muss. Werden jedoch keine lokalen Netzwerkzugriffsberechtigungen erteilt, gelten die Prüfungen auf gemischten Inhalt weiterhin, unabhängig davon, ob `targetAddressSpace` gesetzt ist oder nicht.

## Beispiele

### Grundlegende Verwendung

```js
const req = new Request("http://localhost:8888", {
  method: "get",
  mode: "cors",
  targetAddressSpace: "loopback",
});

console.log(req.targetAddressSpace);
// loopback

fetch(req);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Local Network Access](/de/docs/Web/Security/Defenses/Local_network_access)
- {{httpheader("Permissions-Policy/local-network", "local-network")}} Berechtigungspolitik
- {{httpheader("Permissions-Policy/loopback-network", "loopback-network")}} Berechtigungspolitik
