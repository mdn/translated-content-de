---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
l10n:
  sourceCommit: 8ccdd482e4723b5393278bba686adc24d1769d0f
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **User-Agent Client Hints API** erweitert [Client Hints](/de/docs/Web/HTTP/Client_hints), um eine Möglichkeit anzubieten, Browser- und Plattforminformationen über User-Agent-Antwort- und Anfrage-Header sowie eine JavaScript-API bereitzustellen.

## Konzepte und Nutzung

Das Parsen des User-Agent-Strings war historisch die Methode, um Informationen über den Browser oder das Gerät eines Benutzers zu erhalten. Ein typischer User-Agent-String sieht wie das folgende Beispiel aus und identifiziert Chrome 92 auf Windows:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

User-Agent Client Hints zielt darauf ab, diese Informationen auf eine datenschutzfreundlichere Weise bereitzustellen, indem ein Modell durchgesetzt wird, in dem der Server eine Reihe von Informationen anfordert. Der Browser entscheidet, was zurückgegeben wird. Dieser Ansatz bedeutet, dass ein User-Agent Einstellungen bereitstellen könnte, die es einem Nutzer ermöglichen, einige der Informationen zu verbergen, die ihn durch solche Anfragen identifizierbar machen könnten.

Um zu entscheiden, was zurückgegeben wird, werden die über diese API zugänglichen Informationen in zwei Gruppen unterteilt – **niedrige Entropie** und **hohe Entropie** Hinweise. Niedrige Entropie-Hinweise sind solche, die nicht viele Informationen preisgeben; die API macht diese bei jeder Anfrage leicht zugänglich. Hohe Entropie-Hinweise haben das Potenzial, mehr Informationen preiszugeben, und sind daher so abgesichert, dass der Browser entscheiden kann, ob er sie bereitstellt. Diese Entscheidung könnte potenziell auf Nutzerpräferenzen basieren oder hinter einer Berechtigungsanfrage versteckt sein.

### Anwendungsfälle für User-Agent Client Hints

Mögliche Anwendungsfälle umfassen:

- Bereitstellung von benutzerdefinierten Polyfills für Nutzer, wenn festgestellt wird, dass ihrem Browser ein Web-Plattform-Feature fehlt.
- Behebung von Browser-Fehlern.
- Aufzeichnung von Browser-Analysen.
- Anpassung von Inhalten basierend auf User-Agent-Informationen.
  Dies umfasst unter anderem das Bereitstellen unterschiedlicher Inhalte für mobile Geräte, insbesondere für Geräte, die als leistungsschwach identifiziert werden.
  Es könnte auch das Anpassen des Designs umfassen, um Benutzeroberflächen an das Betriebssystem des Nutzers anzupassen oder Links zu betriebssystemspezifischen Inhalten bereitzustellen.
- Bereitstellung einer Benachrichtigung, wenn sich ein Nutzer von einem anderen Browser oder Gerät aus anmeldet, als Sicherheitsmerkmal.
- Bereitstellung des korrekten binären ausführbaren Programms, auf einer Website, die einen Download anbietet.
- Sammeln von Informationen über den Browser und das Gerät zur Identifizierung von Anwendungsfehlern.
- Blockieren von Spammern, Bots und Crawlern.

## Schnittstellen

- [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)
  - : Bietet Eigenschaften und Methoden zum Zugriff auf Daten über den Browser und das Betriebssystem des Nutzers.

### Erweiterungen auf andere Schnittstellen

- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Nutzers bietet.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem des Nutzers bietet.

## Beispiele

### Die Marken bekommen

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Rückgabe von hochentropischen Werten

Im folgenden Beispiel werden eine Reihe von Hinweisen mit der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) angefordert. Wenn das Promise aufgelöst wird, werden diese Informationen in der Konsole ausgegeben.

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

- [Verbesserung der Benutzerprivatsphäre und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
- [Umsteigen auf User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch)
