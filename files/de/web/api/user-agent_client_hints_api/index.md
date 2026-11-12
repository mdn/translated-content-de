---
title: User-Agent Client Hints API
slug: Web/API/User-Agent_Client_Hints_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("User-Agent Client Hints API")}}{{SeeCompatTable}}

Die **User-Agent Client Hints API** erweitert [Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) um eine Möglichkeit, Informationen über Browser und Plattform über User-Agent-Response- und Request-Header sowie über eine JavaScript-API bereitzustellen.

## Konzepte und Verwendung

Traditionell wurden Informationen über den Browser oder das Gerät einer Person durch das Parsen des User-Agent-Strings gewonnen. Ein typischer User-Agent-String sieht wie im folgenden Beispiel aus und identifiziert Chrome 92 unter Windows:

```plain
Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36
```

User-Agent Client Hints sollen diese Informationen auf eine Weise bereitstellen, die die Privatsphäre besser schützt: Der Server fordert bestimmte Informationen an, und der Browser entscheidet, welche davon er zurückgibt. Dieser Ansatz ermöglicht Einstellungen, mit denen Nutzer bestimmte Informationen verbergen können, anhand derer sie bei solchen Anfragen wiedererkannt werden könnten.

Damit der Browser entscheiden kann, was er zurückgibt, werden die über diese API zugänglichen Informationen in zwei Gruppen unterteilt: Hinweise mit **niedriger Entropie** und Hinweise mit **hoher Entropie**. Hinweise mit niedriger Entropie geben nur wenige Informationen preis und sind über die API bei jeder Anfrage leicht zugänglich. Hinweise mit hoher Entropie können mehr Informationen preisgeben. Ihr Zugriff ist daher so eingeschränkt, dass der Browser entscheiden kann, ob er sie bereitstellt. Diese Entscheidung kann beispielsweise von Nutzereinstellungen abhängen oder eine Berechtigungsanfrage erfordern.

### Anwendungsfälle für User-Agent Client Hints

Mögliche Anwendungsfälle sind:

- Nutzern angepasste Polyfills bereitzustellen, wenn ihrem Browser eine bestimmte Webplattformfunktion fehlt.
- Browserfehler zu umgehen.
- Browseranalysen zu erfassen.
- Inhalte anhand von User-Agent-Informationen anzupassen.
  Dazu gehört, mobilen Geräten unterschiedliche Inhalte bereitzustellen, insbesondere Geräten, die als leistungsschwach erkannt wurden.
  Auch das Design kann an das Betriebssystem angepasst werden, etwa durch entsprechende Benutzeroberflächen oder Links zu betriebssystemspezifischen Versionen.
- Als Sicherheitsfunktion eine Benachrichtigung anzuzeigen, wenn sich eine Person über einen anderen Browser oder ein anderes Gerät anmeldet.
- Auf einer Website mit Downloads die passende ausführbare Binärdatei bereitzustellen.
- Informationen über Browser und Gerät zu sammeln, um Anwendungsfehler zu erkennen.
- Spammer, Bots und Crawler zu blockieren.

## Schnittstellen

- [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)
  - : Stellt Eigenschaften und Methoden für den Zugriff auf Daten über den Browser und das Betriebssystem der Nutzer bereit.

### Erweiterungen anderer Schnittstellen

- [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem der Nutzer bietet.
- [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) {{ReadOnlyInline}}
  - : Gibt ein [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt zurück, das Zugriff auf Informationen über den Browser und das Betriebssystem der Nutzer bietet.

## Sicherheitsaspekte

Websites, die eine [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) festlegen können (über den HTTP-Header {{HTTPHeader("Permissions-Policy")}} oder das Attribut [`allow`](/de/docs/Web/HTML/Reference/Elements/iframe#allow) des {{HTMLElement("iframe")}}-Elements), können die Verwendung der User-Agent Client Hints API mit der Direktive {{HTTPHeader("Permissions-Policy/ch-ua-high-entropy-values", "ch-ua-high-entropy-values")}} einschränken.

Wenn die Berechtigung nicht erteilt wird, gibt [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) nur Daten mit niedriger Entropie zurück, etwa `brands`, `mobile` und `platform`.

Die folgende Richtlinie würde beispielsweise nur der aktuellen Origin und zwei weiteren ausdrücklich angegebenen Origins erlauben, Daten mit hoher Entropie abzurufen.

```http
Permissions-Policy: ch-ua-high-entropy-values=("self https://a.example.com" "https://b.example.com")
```

Anschließend könnten Sie eine der beiden anderen Origins einbetten:

```html
<iframe src="https://a.example.com" allow="ch-ua-high-entropy-values"></iframe>
```

Die standardmäßige Allowlist für `ch-ua-high-entropy-values` ist `*`. Damit dürfen alle Inhalte im aktuellen Dokument und in sämtlichen verschachtelten Browsing-Kontexten `getHighEntropyValues()` verwenden.

> [!NOTE]
> Der Zugriff auf einzelne Merkmale mit hoher Entropie lässt sich über jeweils eigene [Permissions Policies](https://wicg.github.io/client-hints-infrastructure/#policy-controlled-features) steuern.

## Beispiele

### Marken abrufen

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) auf der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Werte mit hoher Entropie abrufen

Im folgenden Beispiel werden mit der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) mehrere Hinweise angefordert. Sobald das Promise erfüllt ist, werden diese Informationen auf der Konsole ausgegeben.

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

- [Verbesserung der Privatsphäre von Nutzern und der Entwicklungserfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
- [Zu User-Agent Client Hints migrieren](https://web.dev/articles/migrate-to-ua-ch)
