---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
l10n:
  sourceCommit: 2dcdbed09ec5ca28a73d82e259601459c468508c
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **User-Agent Client Hints API** erweitert [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints), um eine Methode bereitzustellen, mit der Browser- und Plattforminformationen über User-Agent-Response- und -Request-Header sowie eine JavaScript-API offengelegt werden können.

## Konzepte und Verwendung

Das Parsen des User-Agent-Strings war historisch gesehen die Methode, um Informationen über den Browser oder das Gerät des Nutzers zu erhalten. Ein typischer User-Agent-String sieht aus wie das folgende Beispiel, das Chrome 92 auf Windows identifiziert:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

User-Agent Client Hints zielt darauf ab, diese Informationen auf eine datenschutzfreundlichere Weise bereitzustellen, indem ein Modell erzwungen wird, bei dem der Server eine Reihe von Informationen anfordert und der Browser entscheidet, was zurückgegeben wird. Dieses Vorgehen bedeutet, dass ein User-Agent Einstellungen bereitstellen könnte, die einem Nutzer erlauben, einige der Informationen zu verbergen, die sie durch solche Anfragen identifizieren könnten.

Um zu entscheiden, was zurückgegeben werden soll, sind die über diese API zugänglichen Informationen in zwei Gruppen unterteilt: **niedrige Entropie** und **hohe Entropie**. Hinweise mit niedriger Entropie geben nicht viele Informationen preis, die API macht diese mit jeder Anfrage leicht zugänglich. Hinweise mit hoher Entropie haben das Potenzial, mehr Informationen preiszugeben, und sind daher so beschränkt, dass der Browser eine Entscheidung treffen kann, ob sie bereitgestellt werden. Diese Entscheidung könnte potenziell auf Nutzereinstellungen oder einer Anfrage um Erlaubnis basieren.

### Anwendungsfälle für User-Agent Client Hints

Mögliche Anwendungsfälle umfassen:

- Bereitstellung benutzerdefinierter Polyfills, um Nutzern zu helfen, deren Browser ein Web-Plattform-Feature fehlt.
- Umgehung von Browser-Fehlern.
- Erfassung von Browser-Analysen.
- Anpassung von Inhalten basierend auf User-Agent-Informationen.
  Dies umfasst das Bereitstellen verschiedener Inhalte für mobile Geräte, insbesondere Geräte, die als leistungsschwach identifiziert wurden.
  Es könnte auch die Anpassung des Designs umfassen, um die Schnittstellen an das Betriebssystem des Nutzers anzupassen oder Links zu Betriebssystem-spezifischen anbieten.
- Bereitstellung einer Benachrichtigung, wenn sich ein Nutzer von einem anderen Browser oder Gerät einloggt, als Sicherheitsfunktion.
- Bereitstellung des richtigen Binärprogramms auf einer Website, die einen Download anbietet.
- Sammeln von Informationen über den Browser und das Gerät, um Anwendungsfehler zu identifizieren.
- Blockierung von Spammern, Bots und Crawlern.

## Schnittstellen

- [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)
  - : Bietet Eigenschaften und Methoden, um auf Daten über den Browser und das Betriebssystem des Nutzers zuzugreifen.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Nutzers gibt.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Nutzers gibt.

## Beispiele

### Abrufen der Marken

Das folgende Beispiel druckt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in die Konsole.

```js
console.log(navigator.userAgentData.brands);
```

### Rückgabe von Werten mit hoher Entropie

Im folgenden Beispiel wird eine Reihe von Hinweisen angefordert, indem die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwendet wird. Wenn das Versprechen erfüllt ist, werden diese Informationen in die Konsole gedruckt.

```js
navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList",
  ])
  .then((ua) => {
    console.log(ua);
  });
```

## Sicherheitsüberlegungen

Websites, die das Setzen einer [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) (über den HTTP-{{HTTPHeader("Permissions-Policy")}}-Header oder das {{HTMLElement("iframe")}}-Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow)) unterstützen, können die Möglichkeit einschränken, die User-Agent Client Hints API zu verwenden, indem sie die Direktive {{HTTPHeader("Permissions-Policy/ch-ua-high-entropy-values", "ch-ua-high-entropy-values")}} verwenden.

Insbesondere wenn die Erlaubnis nicht erteilt wird, wird [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) nur Daten mit niedriger Entropie wie `brands`, `mobile` und `platform` zurückgeben.

Zum Beispiel würde die folgende Richtlinie nur dem aktuellen Ursprung und zwei anderen spezifischen Ursprüngen erlauben, Daten mit hoher Entropie abzurufen.

```http
Permissions-Policy: ch-ua-high-entropy-values=("self https://a.example.com" "https://b.example.com")
```

Sie könnten dann einen der beiden anderen Ursprünge einbetten:

```html
<iframe src="https://a.example.com" allow="ch-ua-high-entropy-values"></iframe>
```

Die Standardzugriffsliste für `ch-ua-high-entropy-values` ist `*`, was jedem Inhalt innerhalb des aktuellen Dokuments und aller verschachtelten Browsing-Kontexte erlaubt, `getHighEntropyValues()` zu verwenden.

> [!NOTE]
> Der Zugriff auf einzelne Merkmale mit hoher Entropie kann mit ihren eigenen [individuellen Berechtigungsrichtlinien](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features) gesteuert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Nutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
- [Migration zu User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch)
