---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **User-Agent Client Hints API** erweitert [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints), um eine Möglichkeit zu bieten, Informationen über den Browser und die Plattform über User-Agent-Anfrage- und Antwortheader sowie eine JavaScript-API offenzulegen.

## Konzepte und Verwendung

Das Parsen des User-Agent-Strings war historisch gesehen die Methode, um Informationen über den Browser oder das Gerät des Benutzers zu erhalten. Ein typischer User-Agent-String sieht wie das folgende Beispiel aus, das Chrome 92 auf Windows identifiziert:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

User-Agent Client Hints zielt darauf ab, diese Informationen auf eine datenschutzfreundlichere Weise bereitzustellen, indem ein Modell durchgesetzt wird, bei dem der Server eine Reihe von Informationen anfordert. Der Browser entscheidet, was zurückgegeben wird. Dieser Ansatz bedeutet, dass ein User-Agent Einstellungen bereitstellen könnte, die es einem Benutzer ermöglichen, einige der Informationen zu verbergen, die ihn durch solche Anfragen identifizieren könnten.

Um zu entscheiden, was zurückgegeben werden soll, sind die über diese API zugänglichen Informationen in zwei Gruppen unterteilt—**niedriges Entropie**- und **hohes Entropie**-Hinweise. Niedrige Entropie-Hinweise sind solche, die nicht viele Informationen preisgeben; die API macht diese bei jeder Anfrage leicht zugänglich. Hohe Entropie-Hinweise haben das Potenzial, mehr Informationen preiszugeben und sind daher so gestaltet, dass der Browser eine Entscheidung darüber treffen kann, ob sie bereitgestellt werden sollen. Diese Entscheidung könnte potenziell auf den Vorlieben des Benutzers basieren oder durch eine Berechtigungsanfrage.

### Anwendungsfälle für User-Agent Client Hints

Mögliche Anwendungsfälle umfassen:

- Bereitstellung maßgeschneiderter Polyfills für Benutzer, wenn festgestellt wird, dass ihr Browser eine bestimmte Webplattform-Funktion nicht unterstützt.
- Umgehung von Browser-Bugs.
- Erfassung von Browser-Analysen.
- Anpassung von Inhalten basierend auf User-Agent-Informationen.
  Dies schließt das Servieren verschiedener Inhalte auf mobilen Geräten ein, insbesondere bei Geräten, die als leistungsschwach identifiziert werden.
  Es könnte auch die Anpassung des Designs umfassen, um die Schnittstellen an das Betriebssystem des Benutzers anzupassen, oder das Bereitstellen von Links zu betriebssystemspezifischen.
- Bereitstellung einer Benachrichtigung, wenn sich ein Benutzer von einem anderen Browser oder Gerät anmeldet, als Sicherheitsmaßnahme.
- Bereitstellung der korrekten binären ausführbaren Datei auf einer Website, die einen Download anbietet.
- Sammlung von Informationen über den Browser und das Gerät, um Anwendungsfehler zu identifizieren.
- Blockierung von Spammern, Bots und Crawlern.

## Schnittstellen

- [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)
  - : Bietet Eigenschaften und Methoden, um auf Daten über den Browser und das Betriebssystem des Benutzers zuzugreifen.

### Erweiterungen anderer Schnittstellen

- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.

## Beispiele

### Abrufen der Marken

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Rückgabe von Werten mit hoher Entropie

Im folgenden Beispiel wird eine Reihe von Hinweisen mittels der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) angefordert. Wenn das Promise aufgelöst wird, werden diese Informationen in der Konsole ausgegeben.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
- [Zu User-Agent Client Hints migrieren](https://web.dev/articles/migrate-to-ua-ch)
