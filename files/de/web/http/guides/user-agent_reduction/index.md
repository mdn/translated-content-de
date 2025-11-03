---
title: User-Agent-Reduktion
slug: Web/HTTP/Guides/User-agent_reduction
l10n:
  sourceCommit: 2ab902d9eec2f5a93d1f666234371ca77e93c470
---

**User-Agent-Reduktion** ist eine weitgehend akzeptierte Browser-Initiative zur Reduzierung der Menge an datenschutzrelevanten Informationen, die in User-Agent-Strings (UA-Strings) bereitgestellt werden.

Dieser Artikel zeigt die Unterschiede in UA-Strings als Ergebnis der User-Agent-Reduktion und erklärt, wie Sie bei Bedarf sowohl gekürzte als auch zusätzliche UA-Informationen abrufen können.

## Hintergrund

Der User-Agent-String (UA-String) — verfügbar im {{httpheader("User-Agent")}} HTTP-Header und in verwandten API-Funktionen wie [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) — ermöglicht es Servern und Netzwerkpartnern, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfordernden {{Glossary("user_agent", "User Agents")}} zu identifizieren.

### Browser-Erkennung

Theoretisch ist der UA-String nützlich, um den Browser zu erkennen und Code bereitzustellen, um browser-spezifische Fehler zu umgehen oder fehlende Feature-Unterstützung zu kompensieren. Dies ist jedoch **unzuverlässig** und **wird nicht empfohlen**:

- Zukünftige Browser werden Fehler beheben und Unterstützung für neue Funktionen hinzufügen, sodass Ihr Browser-Erkennungscode regelmäßig aktualisiert werden muss, um zu vermeiden, dass Browser ausgeschlossen werden, die die Funktionen, für die Sie testen, tatsächlich unterstützen. [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ist eine weitaus zuverlässigere Strategie.
- Es gibt wirklich keine Garantie dafür, dass der durch diese Eigenschaft beworbene User-Agent wirklich derjenige ist, in dem Ihre Seite geladen ist. Browser-Anbieter können im Grunde machen, was sie mit dem UA-String wollen, und würden historisch gesehen falsche Werte von solchen Eigenschaften zurückgeben, um nicht von einigen Websites ausgeschlossen zu werden.
- Einige Browser ermöglichen es Benutzern, den Wert dieses Feldes zu ändern, wenn sie möchten (**UA-Spoofing**).

Die folgenden Strategien sind weitaus zuverlässiger, um Fehler und unterschiedliche Browserunterstützung zu umgehen:

- [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection): Die Unterstützung eines Features erkennen, anstatt die Browserversion.
- {{Glossary("Progressive_Enhancement", "Progressive Verbesserung")}}: Bereitstellung einer Basis wesentlicher Inhalte und Funktionen für möglichst viele Benutzer, während das bestmögliche Erlebnis für Browser bereitgestellt wird, die den gesamten erforderlichen Code ausführen können.

Siehe auch [Browser-Erkennung mit dem User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für weitere Informationen, warum das Bereitstellen unterschiedlicher Inhalte für verschiedene Browser in der Regel eine schlechte Idee ist.

### Datenschutzbedenken

Zusätzlich hat die in UA-Strings offengelegte Information historisch gesehen [Datenschutz](/de/docs/Web/Privacy)-Bedenken aufgeworfen — sie kann verwendet werden, um einen bestimmten User-Agent zu identifizieren, und kann daher für {{Glossary("fingerprinting", "Fingerprinting")}} genutzt werden.

Um solche Bedenken zu mildern, implementieren [unterstützende Browser](/de/docs/Web/HTTP/Reference/Headers/User-Agent#browser_compatibility) eine User-Agent-Reduktion, die den `User-agent`-Header und verwandte API-Funktionen aktualisiert, um eine reduzierte Menge an Informationen bereitzustellen.

## UA-String-Änderungen nach der Reduktion

In [unterstützenden Browsern](/de/docs/Web/HTTP/Reference/Headers/User-Agent#browser_compatibility) entfernt die User-Agent-Reduktion drei Informationen aus dem UA-String — die genaue Plattform/OS-Version, das Gerätemodell und die Nebenversionsnummer des Browsers.

Lassen Sie uns ein Beispiel ansehen, damit Sie sehen können, wie das aussieht. Während vorher der UA-String für Chrome auf Android so aussehen könnte:

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

Sieht er nach dem User-Agent-Reduktions-Update jetzt so aus:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

Die untenstehenden Abschnitte bieten mehr Details zu den jeweiligen Änderungen der UA-Strings.

### Plattform-/OS-Version und Gerätemodell

Die Plattform-Version und das Gerätemodell werden immer durch feste Werte dargestellt:

- `Android 10; K` auf Android.
- `Macintosh; Intel Mac OS X 10_15_7` auf macOS.
- `Windows NT 10.0; Win64; x64` auf Windows.
- `X11; CrOS x86_64 14541.0.0` auf ChromeOS.
- `X11; Linux x86_64` auf Linux.

### Nebenversionsnummer des Browsers

Die Hauptversionsnummer des Browsers wird korrekt angezeigt, aber die Nebenversionsnummern werden immer als Nullen angezeigt — `0.0.0`.

## Anfordern von UA-Informationen über Client-Hints

Möglicherweise haben Sie noch Code, der auf detaillierten UA-String-Daten basiert und nicht in der Lage ist, auf Feature-Erkennung oder progressive Verbesserung umgestellt zu werden. Beispiele sind feingranulares Logging, Betrugspräventionsmaßnahmen oder eine Software-Hilfeseite, die aufgrund des Gerätetyps des Benutzers unterschiedliche Inhalte bereitstellt.

In diesem Fall können Sie immer noch auf detaillierte UA-String-Daten über [`Sec-CH-UA-*`](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints) Header (auch bekannt als **User-Agent-Client-Hints**) zugreifen. Diese Header bieten eine sicherere und datenschutzfreundlichere Möglichkeit, solche Informationen zu senden, da Server sich für die gewünschten Informationen entscheiden müssen, anstatt dass sie ständig über den `User-Agent`-String gesendet werden. Außerdem bietet es Zugang zu einer breiteren Auswahl an Informationen.

Weitere Informationen finden Sie unter [User-Agent-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints).

## Zugriff auf Client Hints über JavaScript

Die [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) ermöglicht den Zugriff auf Client-Hint-Informationen über JavaScript. Die [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData)-Eigenschaft bietet Zugriff auf das [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Objekt, das Eigenschaften mit den niederschwelligen Client-Hints enthält.

Um auf hochschwellige Hints wie `Sec-CH-UA-Model` und `Sec-CH-UA-Form-Factors` zuzugreifen, müssen Sie die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwenden.

Weitere Informationen finden Sie in der [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API).

## Siehe auch

- {{httpheader("User-Agent")}}
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.platform`](/de/docs/Web/API/Navigator/platform)
- [HTTP Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementierung der Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [https://developer.chrome.com/docs/privacy-security/user-agent-client-hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
