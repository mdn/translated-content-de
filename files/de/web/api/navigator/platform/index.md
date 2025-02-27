---
title: "Navigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: 2263f5243fb50ecde994ed374eb2d92c73c962f9
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die **`platform`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die einen String zurückgibt, der die Plattform identifiziert, auf der der Browser des Benutzers ausgeführt wird.

> [!NOTE]
> Allgemein gilt, dass Sie wann immer möglich vermeiden sollten, Code zu schreiben, der Methoden oder Eigenschaften wie diese verwendet, um Informationen über die Umgebung des Benutzers zu ermitteln. Stattdessen sollten Sie Code schreiben, der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) verwendet.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser des Benutzers ausgeführt wird; zum Beispiel: `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"`.

## Beispiele

`navigator.platform` sollte fast immer zugunsten der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) vermieden werden. Es gibt jedoch einen Fall, in dem unter den möglichen Optionen, die Sie verwenden könnten, `navigator.platform` die am wenigsten schlechte Option sein kann: Wenn Sie Benutzern Hinweise geben müssen, ob die Modifikatortaste für Tastenkombinationen die `⌘`-Befehlstaste (zu finden auf Apple-Systemen) anstelle der `⌃`-Steuerungstaste (auf Nicht-Apple-Systemen) ist:

```js
const modifierKeyPrefix =
  navigator.platform.startsWith("Mac") || navigator.platform === "iPhone"
    ? "⌘" // command key
    : "^"; // control key
```

Das heißt, überprüfen Sie, ob `navigator.platform` mit `"Mac"` beginnt oder eine exakte Übereinstimmung mit `"iPhone"` ist. Basierend darauf, ob eine dieser Bedingungen zutrifft, wählen Sie die Modifikatortaste, die die Benutzeroberfläche Ihrer Webanwendung den Benutzern in Tastenkombinationen empfehlen wird.

## Anwendungshinweise

Unter Windows geben moderne Browser `"Win32"` zurück, auch wenn sie auf einer 64-Bit-Version von Windows ausgeführt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.userAgentData.platform`](/de/docs/Web/API/NavigatorUAData/platform)
