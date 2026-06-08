---
title: "Anfrage: targetAddressSpace Eigenschaft"
short-title: targetAddressSpace
slug: Web/API/Request/targetAddressSpace
l10n:
  sourceCommit: 75016e5d37ecff3b11de4c2ef6665178f654797e
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`targetAddressSpace`** des [`Request`](/de/docs/Web/API/Request)-Interfaces gibt den Zieladressraum der Anfrage zurück, der angibt, ob es sich um eine Loopback-, lokale oder öffentliche Anfrage handelt.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `local`
  - : Die Anfrage richtet sich an eine lokale Adresse, die nur im lokalen Netzwerk zugänglich ist; ihr Ziel wird sich in verschiedenen Netzwerken unterscheiden. Zum Beispiel `192.168.0.1`.
- `loopback`
  - : Die Anfrage richtet sich an eine Loopback-Adresse, die nur auf dem lokalen Gerät zugänglich ist; ihr Ziel wird sich auf jedem Gerät unterscheiden. Zum Beispiel `127.0.0.1`, allgemein bekannt als `localhost`.
- `public`
  - : Die Anfrage richtet sich an eine Adresse, die von überall im Internet zugänglich ist; ihr Ziel ist für alle Geräte weltweit gleich. Zum Beispiel `104.18.27.120` (die IP-Adresse von `example.com`)
- `unknown`
  - : Kein `targetAddressSpace` wurde für die Anfrage festgelegt.

## Beschreibung

In Browsern, die die [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access) Spezifikation unterstützen, sind Loopback- und lokale Anfragen hinter spezifischen Berechtigungen abgesichert — `local-network` und `loopback-network`. Das Anfordern von Benutzerberechtigungen für solche Anfragen verringert das Risiko von [Cross-Site-Request-Forgery (CSRF)](/de/docs/Web/Security/Attacks/CSRF)-Angriffen gegen lokale Netzwerkgeräte wie Router und Drucker und reduziert die Möglichkeit, solche Anfragen zu verwenden, um das lokale Netzwerk des Benutzers zu identifizieren.

Diese Berechtigungen sind auf sichere Kontexte beschränkt. Wenn sie gewährt werden, entspannen die Berechtigungen zusätzlich das [gemischte Inhalte](/de/docs/Web/Security/Defenses/Mixed_content) Blocking für lokale Netzwerk-Anfragen. Dies ist notwendig, weil viele lokale Geräte aus verschiedenen Gründen keine öffentlich vertrauenswürdigen TLS-Zertifikate erhalten können. Zum Beispiel ermöglicht es, dass öffentliche Websites auf lokale Testserver oder auf HTTP laufende Geräte zugreifen.

Die `targetAddressSpace`-Eigenschaft, wenn auf `local` oder `loopback` bei neuen Anfragen gesetzt (über den [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor oder direkt in der [`fetch()`](/de/docs/Web/API/Window/fetch)-Methode), informiert unterstützende Browser explizit, gemischte Inhalte-Prüfungen zu überspringen. Dies ist in Fällen notwendig, in denen eine URL eine öffentliche Domain-Adresse ist, die aber letztendlich zu einer lokalen Netzwerk-Adresse aufgelöst wird, wie etwa `http://internal.example.com`.

Einige Adressen, wie private IP-Literalwerte (zum Beispiel `192.168.0.1`) und `.local`-Adressen (wie `http://router.local`), haben gelockerte gemischte Inhalt-Prüfungen in Fällen, in denen lokale Netzwerkzugriffsrechte gewährt werden, sodass die Einstellung der `targetAddressSpace`-Eigenschaft nicht notwendig ist. Wenn jedoch keine lokalen Netzwerkzugriffsrechte gewährt werden, gelten gemischte Inhalt-Prüfungen weiterhin, unabhängig davon, ob `targetAddressSpace` gesetzt ist oder nicht.

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

- [Lokaler Netzwerkzugriff](/de/docs/Web/Security/Defenses/Local_network_access)
- {{httpheader("Permissions-Policy/local-network", "local-network")}} Berechtigungsrichtlinie
- {{httpheader("Permissions-Policy/loopback-network", "loopback-network")}} Berechtigungsrichtlinie
