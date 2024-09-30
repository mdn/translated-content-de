---
title: "Navigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die schreibgeschützte **`platform`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt einen String zurück, der die Plattform identifiziert, auf der der Browser des Benutzers gerade läuft.

> [!NOTE]
> Im Allgemeinen sollten Sie wann immer möglich vermeiden, Code zu schreiben, der Methoden oder Eigenschaften wie diese verwendet, um Informationen über die Umgebung des Benutzers zu ermitteln. Stattdessen sollten Sie Code schreiben, der [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) verwendet.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser des Benutzers läuft; beispielsweise: `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"`.

## Beispiele

`navigator.platform` sollte fast immer zugunsten der [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) vermieden werden. Es gibt jedoch einen Fall, in dem `navigator.platform` unter den möglichen Optionen die am wenigsten schlechte Wahl sein könnte: Wenn Sie den Benutzern Ratschläge darüber geben müssen, ob die Modifikatortaste für Tastenkombinationen die `⌘`-Befehlstaste (auf Apple-Systemen) oder die `⌃`-Strg-Taste (auf Nicht-Apple-Systemen) ist:

```js
let modifierKeyPrefix = "^"; // control key
if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {
  modifierKeyPrefix = "⌘"; // command key
}
```

Das heißt, überprüfen Sie, ob `navigator.platform` mit `"Mac"` beginnt oder ob es eine exakte Übereinstimmung mit `"iPhone"` ist, und basierend darauf, ob eines dieser Kriterien zutrifft, wählen Sie die Modifikatortaste, die die Benutzeroberfläche Ihrer Webanwendung den Benutzern für Tastenkombinationen empfiehlt.

## Nutzungshinweise

Unter Windows geben moderne Browser `"Win32"` zurück, auch wenn sie auf einer 64-Bit-Version von Windows ausgeführt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.userAgentData.platform`](/de/docs/Web/API/NavigatorUAData/platform)
