---
title: "Navigator: userAgent-Eigenschaft"
short-title: userAgent
slug: Web/API/Navigator/userAgent
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

{{ApiRef("HTML DOM")}}

Die schreibgeschützte **`Navigator.userAgent`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt die `User-Agent` (UA)-Zeichenkette für den aktuellen Browser zurück.

## Wert

Ein String.

## Beschreibung

Die `userAgent`-Eigenschaft liefert die UA-Zeichenkette des aktuellen Browsers. Die UA-Zeichenkette basiert auf einer formalen Struktur, die in mehrere Informationsstücke zerlegt werden kann.

Der Browser stellt die UA-Zeichenkette auch über den {{HTTPHeader("User-Agent")}} HTTP-Header bereit. Teile dieser Informationen sind auch in {{Glossary("HTTP", "HTTP")}}-Headern wie den [User-Agent-Client-Hinweisen](/de/docs/Web/HTTP/Guides/Client_hints) und anderen verwandten API-Funktionen wie [`Navigator.appVersion`](/de/docs/Web/API/Navigator/appVersion) und [`Navigator.platform`](/de/docs/Web/API/Navigator/platform) verfügbar.

Theoretisch sind diese Informationen nützlich, um den Browser zu erkennen und Code bereitzustellen, um Browser-spezifische Fehler oder fehlende Funktionsunterstützung zu umgehen. Dies ist jedoch **unzuverlässig** und **nicht empfohlen**, aus den in [User-Agent reduction](/de/docs/Web/HTTP/Guides/User-agent_reduction) und [Browser detection using the user agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) angegebenen Gründen.

[Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ist eine wesentlich zuverlässigere Strategie.

## Beispiele

```js
console.log(navigator.userAgent);
// On Chrome on macOS, logs something like "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36" (reduced UA string)

// On Firefox on Windows, logs something like "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0) Gecko/20100101 Firefox/124.0"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{httpheader("User-Agent")}} HTTP-Header
