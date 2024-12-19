---
title: "Navigator: `platform`-Eigenschaft"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die schreibgeschützte **`platform`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Objekts gibt einen String zurück, der die Plattform identifiziert, auf der der Browser des Benutzers läuft.

> [!NOTE]
> Im Allgemeinen sollten Sie wann immer möglich vermeiden, Code zu schreiben, der Methoden oder Eigenschaften wie diese verwendet, um Informationen über die Umgebung des Benutzers zu ermitteln. Schreiben Sie stattdessen Code, der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) verwendet.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser des Benutzers läuft; zum Beispiel: `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"`.

## Beispiele

`navigator.platform` sollte fast immer zugunsten der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) vermieden werden. Es gibt jedoch einen Fall, in dem `navigator.platform` unter den möglichen Optionen die am wenigsten schlechte Wahl sein könnte: Wenn Sie den Benutzern Ratschläge darüber geben müssen, ob die Modifikatortaste für Tastenkombinationen die `⌘`-Befehlstaste (auf Apple-Systemen) statt der `⌃`-Steuerungstaste (auf Nicht-Apple-Systemen) ist:

```js
let modifierKeyPrefix = "^"; // control key
if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {
  modifierKeyPrefix = "⌘"; // command key
}
```

Das heißt, prüfen Sie, ob `navigator.platform` mit `"Mac"` beginnt oder exakt mit `"iPhone"` übereinstimmt, und wählen Sie dann basierend darauf, ob eine dieser Bedingungen zutrifft, die Modifikatortaste, die die Benutzeroberfläche Ihrer Webanwendung den Benutzern empfiehlt, in Tastenkombinationen zu drücken.

## Verwendungshinweise

Auf Windows geben moderne Browser `"Win32"` zurück, auch wenn sie auf einer 64-Bit-Version von Windows laufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.userAgentData.platform`](/de/docs/Web/API/NavigatorUAData/platform)
