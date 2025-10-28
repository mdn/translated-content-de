---
title: User-Agent-Reduzierung
slug: Web/HTTP/Guides/User-agent_reduction
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

**User-Agent-Reduzierung** ist eine weitgehend akzeptierte Browser-Initiative, um die Menge an datenschutzsensiblen Informationen in User-Agent-Strings (UA-Strings) zu reduzieren.

Dieser Artikel zeigt die Unterschiede in UA-Strings als Ergebnis der User-Agent-Reduzierung und erklärt, wie Sie sowohl die gekürzten als auch zusätzliche UA-Informationen bei Bedarf abrufen können.

## Hintergrund

Der User-Agent-String (UA), verfügbar im {{httpheader("User-Agent")}} HTTP-Header und in verwandten API-Funktionen wie [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.platform`](/de/docs/Web/API/Navigator/platform), ermöglicht es Servern und Netzwerkpartnern, die Anwendung, das Betriebssystem, den Anbieter und/oder die Version des anfragenden {{Glossary("user_agent", "User Agents")}} zu identifizieren.

### Browsererkennung

Theoretisch ist der UA-String nützlich zur Erkennung des Browsers und zur Bereitstellung von Code zur Umgehung browser-spezifischer Fehler oder fehlender Feature-Unterstützung. Dies ist jedoch **unzuverlässig** und **nicht empfohlen**:

- Zukünftige Browser beheben Fehler und fügen Unterstützung für neue Funktionen hinzu. Ihr Browsererkennungscode muss also regelmäßig aktualisiert werden, um zu vermeiden, dass Browser ausgeschlossen werden, die tatsächlich die von Ihnen getesteten Funktionen unterstützen. [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ist eine viel verlässlichere Strategie.
- Sie haben wirklich keine Garantie, dass der von dieser Eigenschaft beworbene User-Agent wirklich derjenige ist, in dem Ihre Webseite geladen wird. Browseranbieter können im Wesentlichen mit dem UA-String tun, was sie wollen, und haben historisch gesehen falsche Werte von solchen Eigenschaften zurückgegeben, um nicht von einigen Webseiten ausgeschlossen zu werden.
- Einige Browser ermöglichen es Nutzern, den Wert dieses Feldes zu ändern, wenn sie wollen (**UA-Spoofing**).

Die folgenden Strategien sind viel verlässlicher zur Umgehung von Fehlern und unterschiedlicher Browserunterstützung:

- [Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection): Erkennung der Unterstützung für ein Feature, anstatt der Browserversion.
- {{Glossary("Progressive_Enhancement", "Progressive Enhancement")}}: Bereitstellung eines Basisniveaus an wesentlichen Inhalten und Funktionen für so viele Nutzer wie möglich, während die bestmögliche Erfahrung für Browser bereitgestellt wird, die den gesamten erforderlichen Code ausführen können.

Siehe auch [Browsererkennung mit dem User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) für weitere Informationen darüber, warum es normalerweise eine schlechte Idee ist, unterschiedlichen Browsern unterschiedliche Inhalte anzubieten.

### Datenschutzbedenken

Zusätzlich hat die im UA-String offengelegte Information historisch gesehen [Datenschutz](/de/docs/Web/Privacy)bedenken aufgeworfen — sie kann verwendet werden, um einen bestimmten User-Agent zu identifizieren und kann daher für {{Glossary("fingerprinting", "Fingerprinting")}} genutzt werden.

Um solche Bedenken zu mildern, implementieren [unterstützende Browser](/de/docs/Web/HTTP/Reference/Headers/User-Agent#browser_compatibility) die User-Agent-Reduzierung, die den `User-agent`-Header und verwandte API-Funktionen aktualisiert, um eine reduzierte Menge an Informationen bereitzustellen.

## Änderungen im UA-String nach der Reduzierung

In [unterstützenden Browsern](/de/docs/Web/HTTP/Reference/Headers/User-Agent#browser_compatibility) entfernt die User-Agent-Reduzierung drei Informationen aus dem UA-String — die genaue Plattform-/OS-Version, das Gerätemodell und die kleinere Browserversion.

Schauen wir uns ein Beispiel an, um zu sehen, wie das aussieht. Während früher der UA-String für Chrome auf Android folgendermaßen aussehen konnte:

```plain
Mozilla/5.0 (Linux; Android 16; Pixel 9) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.12.45 Mobile Safari/537.36
```

Sieht er nach dem Update der User-Agent-Reduzierung nun so aus:

```plain
Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Mobile Safari/537.36
```

Die folgenden Abschnitte bieten mehr Details zu den einzelnen Änderungen im US-String.

### Plattform-/OS-Version und Gerätemodell

Die Plattformversion und das Gerätemodell werden immer durch feste Werte dargestellt:

- `Android 10; K` auf Android.
- `Macintosh; Intel Mac OS X 10_15_7` auf macOS.
- `Windows NT 10.0; Win64; x64` auf Windows.
- `X11; CrOS x86_64 14541.0.0` auf ChromeOS.
- `X11; Linux x86_64` auf Linux.

### Kleinere Browserversion

Die Haupt-Browserversionsnummer wird korrekt angezeigt, aber die kleineren Versionsnummern werden immer als Nullen dargestellt — `0.0.0`.

## Abrufen von UA-Informationen über Client-Hinweise

Es kann sein, dass Sie noch Code haben, der auf detaillierte UA-String-Daten angewiesen ist, die nicht in Feature Detection oder Progressive Enhancement umgewandelt werden können. Beispiele umfassen fein abgestufte Protokollierung, Betrugspräventionsmaßnahmen oder eine Software-Hilfeseite, die basierend auf dem Gerätetyp des Nutzers unterschiedliche Inhalte bereitstellt.

In diesem Fall können Sie weiterhin detaillierte UA-String-Daten über [`Sec-CH-UA-*`](/de/docs/Web/HTTP/Reference/Headers#user_agent_client_hints) Header (auch bekannt als **User-Agent Client Hints**) abrufen. Die Header bieten eine sicherere, datenschutzfreundlichere Möglichkeit, solche Informationen zu senden, da Server sich für die Informationen entscheiden müssen, die sie möchten, anstatt dass sie ständig über den `User-Agent`-String gesendet werden. Zudem bietet es Zugang zu einer breiteren Auswahl an Informationen.

Für weitere Informationen siehe [User-Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints).

## Zugriff auf Client-Hinweise über JavaScript

Die [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) ermöglicht Ihnen den Zugriff auf Client-Hinweis-Informationen über JavaScript. Die [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) Eigenschaft bietet Zugriff auf das [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Objekt, das Eigenschaften enthält, die die Low-Entropy Client-Hinweise darstellen.

Um auf High-Entropy Hinweise wie `Sec-CH-UA-Model` und `Sec-CH-UA-Form-Factors` zuzugreifen, müssen Sie die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) verwenden.

Für weitere Informationen siehe die [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API).

## Siehe auch

- {{httpheader("User-Agent")}}
- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent), [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.platform`](/de/docs/Web/API/Navigator/platform)
- [HTTP Client Hints](/de/docs/Web/HTTP/Guides/Client_hints)
- [Implementing Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection)
- [https://developer.chrome.com/docs/privacy-security/user-agent-client-hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) auf developer.chrome.com (2020)
