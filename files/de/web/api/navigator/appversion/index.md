---
title: "Navigator: appVersion-Eigenschaft"
short-title: appVersion
slug: Web/API/Navigator/appVersion
l10n:
  sourceCommit: 0b852c3f5c46b69a57d23e860a833f6830951793
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`Navigator.appVersion`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt einen String zurück, der Versionsinformationen über den Browser darstellt.

## Wert

Ein String.

## Beschreibung

Die `appVersion`-Eigenschaft gibt Informationen zurück, die auf die Browserversion hinweisen.

Beachten Sie, dass die zurückgegebenen Informationen je nach Browser erheblich variieren. In einigen Browsern, wie zum Beispiel Chrome, ist dies fast identisch mit dem von [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent) zurückgegebenen Wert, wobei das `Mozilla/`-Präfix entfernt wurde. Zum Beispiel:

```plain
5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
```

In anderen Browsern, wie zum Beispiel Firefox, wird dies auf einen kurzen String reduziert, der auf die Plattform/das Betriebssystem hinweist. Zum Beispiel:

```plain
5.0 (Macintosh)
```

Theoretisch sind diese Informationen nützlich, um den Browser zu erkennen und Code bereitzustellen, um browser-spezifische Fehler oder fehlende Feature-Unterstützungen zu umgehen. Allerdings ist dies **unzuverlässig** und **nicht empfohlen** aus den in [User-Agent reduction](/de/docs/Web/HTTP/Guides/User-agent_reduction) und [Browser detection using the user agent](/de/docs/Web/HTTP/Guides/Browser_detection_using_the_user_agent) angegebenen Gründen.

[Feature Detection](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) ist eine viel verlässlichere Strategie.

## Beispiele

```js
console.log(navigator.appVersion);
// On Chrome, logs something like "5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36" (reduced UA string)

// On Firefox, logs something like "5.0 (Macintosh)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Navigator.userAgent`](/de/docs/Web/API/Navigator/userAgent)
- {{HTTPHeader("User-agent")}} HTTP-Header
