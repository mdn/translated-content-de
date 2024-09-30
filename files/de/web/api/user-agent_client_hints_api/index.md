---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
l10n:
  sourceCommit: 8ccdd482e4723b5393278bba686adc24d1769d0f
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **User-Agent Client Hints API** erweitert die [Client Hints](/de/docs/Web/HTTP/Client_hints), um eine Möglichkeit zu bieten, Browser- und Plattforminformationen über User-Agent-Response- und -Request-Header sowie eine JavaScript-API bereitzustellen.

## Konzepte und Verwendung

Das Parsen des User-Agent-Strings war historisch der Weg, um Informationen über den Browser oder das Gerät des Benutzers zu erhalten. Ein typischer User-Agent-String sieht wie das folgende Beispiel aus, das Chrome 92 auf Windows identifiziert:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

User-Agent-Client-Hints zielen darauf ab, diese Informationen auf eine datenschutzfreundlichere Weise bereitzustellen, indem ein Modell durchgesetzt wird, bei dem der Server ein Set von Informationen anfordert und der Browser entscheidet, was zurückgegeben wird. Diese Herangehensweise bedeutet, dass ein User-Agent Einstellungen bereitstellen könnte, die es einem Benutzer ermöglichen, einige der Informationen, die ihn durch solche Anfragen zu Fingerprinting-Zwecken identifizieren könnten, zu verbergen.

Um zu entscheiden, was zurückgegeben wird, werden die über diese API zugänglichen Informationen in zwei Gruppen unterteilt: **niedrige Entropie** und **hohe Entropie** Hints. Hinweise mit niedriger Entropie geben nicht viel Information preis, die API macht diese bei jeder Anfrage leicht zugänglich. Hinweise mit hoher Entropie haben das Potenzial, mehr Informationen preiszugeben, und sind daher so gestaltet, dass der Browser darüber entscheiden kann, ob sie bereitgestellt werden. Diese Entscheidung könnte potenziell auf Benutzerpräferenzen basieren oder hinter einer Genehmigungsanfrage verborgen sein.

### Anwendungsfälle für User-Agent Client Hints

Mögliche Anwendungsfälle umfassen:

- Bereitstellung von maßgeschneiderten Polyfills für Benutzer, wenn festgestellt wird, dass deren Browser ein Webplattform-Feature nicht unterstützt.
- Umgehung von Browser-Bugs.
- Aufzeichnung von Browser-Analytik.
- Anpassung von Inhalten basierend auf User-Agent-Informationen.
  Dazu gehört das Bereitstellen verschiedener Inhalte für mobile Geräte, insbesondere für Geräte, die als leistungsschwach erkannt werden.
  Es könnte auch die Anpassung des Designs umfassen, um die Schnittstellen auf das Betriebssystem des Benutzers abzustimmen, oder das Bereitstellen von Links zu betriebssystemspezifischen Elementen.
- Bereitstellung einer Benachrichtigung, wenn sich ein Benutzer von einem anderen Browser oder Gerät aus anmeldet, als Sicherheitsfunktion.
- Bereitstellung der richtigen Binärdatei auf einer Website, die einen Download anbietet.
- Sammlung von Informationen über den Browser und das Gerät, um Anwendungsfehler zu identifizieren.
- Sperrung von Spammern, Bots und Crawlern.

## Schnittstellen

- [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)
  - : Bietet Eigenschaften und Methoden zum Zugriff auf Daten über den Browser und das Betriebssystem des Benutzers.

### Erweiterungen zu anderen Schnittstellen

- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugang zu Informationen über den Browser und das Betriebssystem des Benutzers gewährt.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugang zu Informationen über den Browser und das Betriebssystem des Benutzers gewährt.

## Beispiele

### Abrufen der Marken

Das folgende Beispiel druckt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in die Konsole.

```js
console.log(navigator.userAgentData.brands);
```

### Zurückgeben von Werten mit hoher Entropie

Im folgenden Beispiel werden mehrere Hinweise angefordert, indem die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwendet wird. Wenn das Promise aufgelöst wird, werden diese Informationen in die Konsole gedruckt.

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

- [Verbesserung des Datenschutzes der Nutzer und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
- [Migration zu User-Agent Client Hints](https://web.dev/articles/migrate-to-ua-ch)
