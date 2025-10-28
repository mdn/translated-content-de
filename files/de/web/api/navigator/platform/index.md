---
title: "Navigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`platform`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt einen String zurück, der die Plattform identifiziert, auf der der Browser des Benutzers läuft.

## Wert

Ein String, der eine Plattform angibt, zum Beispiel:

- `"MacIntel"`
- `"Win32"`
- `"Linux x86_64"`

> [!NOTE]
> Unter Windows geben moderne Browser `"Win32"` zurück, selbst wenn sie auf einer 64-Bit-Version von Windows laufen.

## Beschreibung

Die `platform`-Eigenschaft zeigt die Plattform/das Betriebssystem an, auf dem der Browser läuft.

Theoretisch ist diese Information nützlich, um den Browser zu erkennen und Code bereitzustellen, um browser-spezifische Fehler oder fehlende Funktionsunterstützung zu umgehen. Dies ist jedoch **unzuverlässig** und **wird nicht empfohlen** aus den in [User-Agent-Reduzierung](/de/docs/Web/HTTP/Guides/User-agent_reduction) und [Browsererkennung mit dem User-Agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) angegebenen Gründen.

[Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ist eine viel zuverlässigere Strategie.

## Beispiele

### Bestimmen der Modifikatortaste für die Plattform des Benutzers

Ein Fall, in dem `navigator.platform` nützlich sein kann, ist, wenn Sie Benutzern zeigen müssen, ob die Modifikatortaste für Tastenkombinationen die `⌘`-Befehlstaste (auf Apple-Systemen gefunden) ist, anstelle der `Ctrl`-Steuerungstaste (auf Nicht-Apple-Systemen):

```js
const modifierKeyPrefix =
  navigator.platform.startsWith("Mac") || navigator.platform === "iPhone"
    ? "⌘" // command key
    : "Ctrl"; // control key
```

Dieser Code überprüft, ob `navigator.platform` mit `"Mac"` beginnt oder exakt mit `"iPhone"` übereinstimmt, und setzt dann, basierend darauf, ob eines dieser Kriterien `true` ist, eine `modifierKeyPrefix`-Variable auf die entsprechende Modifikatortaste für die Plattform des Benutzers. Dies könnte in einem Web-UI verwendet werden, um Benutzern mitzuteilen, welche Modifikatortaste sie bei der Verwendung von Tastenkombinationen benötigen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)
- {{HTTPHeader("User-agent")}} HTTP-Header
