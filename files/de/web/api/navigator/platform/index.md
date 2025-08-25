---
title: "Navigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{APIRef("HTML DOM")}}

Die **`platform`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt eine schreibgeschützte Zeichenkette zurück, die die Plattform identifiziert, auf der der Browser des Benutzers läuft.

> [!NOTE]
> Im Allgemeinen sollten Sie, wann immer möglich, vermeiden, Code zu schreiben, der Methoden oder Eigenschaften wie diese verwendet, um Informationen über die Umgebung des Benutzers zu ermitteln. Stattdessen sollten Sie Code schreiben, der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) verwendet.

## Wert

Eine Zeichenkette, die die Plattform identifiziert, auf der der Browser des Benutzers läuft; zum Beispiel: `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"`.

## Beispiele

`navigator.platform` sollte fast immer zugunsten der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) vermieden werden. Aber es gibt einen Fall, in dem `navigator.platform` unter den verfügbaren Optionen die am wenigsten schlechte Option sein könnte: Wenn Sie den Benutzern Hinweise geben müssen, ob die Modifikatortaste für Tastenkombinationen die `⌘`-Befehlstaste (auf Apple-Systemen) anstelle der `⌃`-Steuertaste (auf Nicht-Apple-Systemen) ist:

```js
const modifierKeyPrefix =
  navigator.platform.startsWith("Mac") || navigator.platform === "iPhone"
    ? "⌘" // command key
    : "^"; // control key
```

Daher sollte geprüft werden, ob `navigator.platform` mit `"Mac"` beginnt oder exakt `"iPhone"` entspricht. Wenn eines dieser Kriterien zutrifft, wählen Sie die Modifikatortaste, die die Benutzeroberfläche Ihrer Webanwendung den Benutzern in Tastenkombinationen empfiehlt.

## Hinweise zur Verwendung

Unter Windows geben moderne Browser `"Win32"` zurück, selbst wenn sie auf einer 64-Bit-Version von Windows ausgeführt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.userAgentData.platform`](/de/docs/Web/API/NavigatorUAData/platform)
