---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
l10n:
  sourceCommit: 8ccdd482e4723b5393278bba686adc24d1769d0f
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **User-Agent Client Hints API** erweitert die [Client Hints](/de/docs/Web/HTTP/Client_hints), um eine Möglichkeit zu bieten, Informationen über den Browser und die Plattform über User-Agent-Antwort- und -Anforderungsheader sowie eine JavaScript-API bereitzustellen.

## Konzepte und Verwendung

Das Parsen des User-Agent-Strings war traditionell der Weg, um Informationen über den Browser oder das Gerät des Benutzers zu erhalten. Ein typischer User-Agent-String sieht wie folgt aus und identifiziert Chrome 92 auf Windows:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

User-Agent Client Hints zielt darauf ab, diese Informationen auf eine datenschutzfreundlichere Weise bereitzustellen, indem ein Modell erzwungen wird, bei dem der Server eine Reihe von Informationen anfordert. Der Browser entscheidet, was zurückgegeben wird. Dieser Ansatz bedeutet, dass ein User-Agent Einstellungen bereitstellen könnte, die es einem Benutzer ermöglichen, einige der Informationen zu verbergen, die sie von solchen Anfragen fingerabdruckfähig machen könnten.

Um zu entscheiden, was zurückgegeben werden soll, werden die über diese API zugänglichen Informationen in zwei Gruppen unterteilt – **niedrige Entropie** und **hohe Entropie** Hints. Hinweise mit niedriger Entropie sind solche, die nicht viel Informationen preisgeben. Die API macht diese leicht zugänglich bei jeder Anfrage. Hinweise mit hoher Entropie haben das Potenzial, mehr Informationen preiszugeben und sind daher so gestaltet, dass der Browser entscheiden kann, ob er sie bereitstellt. Diese Entscheidung könnte potenziell auf Benutzerpräferenzen basieren oder hinter einer Berechtigungsanfrage verborgen sein.

### Anwendungsfälle für User-Agent Client Hints

Potenzielle Anwendungsfälle umfassen:

- Bereitstellung maßgeschneiderter Polyfills für Benutzer, bei denen festgestellt wird, dass ihrem Browser eine Funktion der Webplattform fehlt.
- Umgang mit Browserfehlern.
- Aufzeichnung von Browser-Analysen.
- Anpassung von Inhalten basierend auf User-Agent-Informationen.
  Dies umfasst das Bereitstellen verschiedener Inhalte für mobile Geräte, insbesondere Geräte, die als leistungsschwach erkannt wurden.
  Es kann auch die Anpassung des Designs umfassen, um die Benutzeroberfläche an das Betriebssystem des Benutzers anzupassen, oder das Bereitstellen von Links zu betriebssystemspezifischen Inhalten.
- Benachrichtigung, wenn sich ein Benutzer von einem anderen Browser oder Gerät anmeldet, als Sicherheitsfunktion.
- Bereitstellung des richtigen Binärprogramms auf einer Webseite, die einen Download anbietet.
- Sammeln von Informationen über den Browser und das Gerät zur Identifizierung von Anwendungsfehlern.
- Blockieren von Spammern, Bots und Crawlern.

## Schnittstellen

- {{domxref("NavigatorUAData")}}
  - : Bietet Eigenschaften und Methoden zum Zugriff auf Daten über den Browser und das Betriebssystem des Benutzers.

### Erweiterungen zu anderen Schnittstellen

- {{domxref("Navigator.userAgentData")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("NavigatorUAData")}} Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.
- {{domxref("WorkerNavigator.userAgentData")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("NavigatorUAData")}} Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Benutzers bietet.

## Beispiele

### Abrufen der Marken

Das folgende Beispiel gibt den Wert von {{domxref("NavigatorUAData.brands")}} in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Rückgabe von Werten mit hoher Entropie

Im folgenden Beispiel werden eine Reihe von Hinweisen mit der Methode {{domxref("NavigatorUAData.getHighEntropyValues()")}} angefordert. Wenn das Versprechen erfüllt wird, werden diese Informationen in der Konsole ausgegeben.

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

- [Verbesserung des Datenschutzes der Benutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
- [Umstellung auf User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch)
