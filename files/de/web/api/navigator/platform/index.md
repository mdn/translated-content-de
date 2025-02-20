---
title: "Navigator: `platform`-Eigenschaft"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: 6fc08fb394fde3bb37cca92c77c65e8720ce2bb4
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die schreibgeschützte **`platform`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt einen String zurück, der die Plattform identifiziert, auf der der Browser des Benutzers läuft.

> [!NOTE]
> Im Allgemeinen sollten Sie, wann immer möglich, vermeiden, Code zu schreiben, der Methoden oder Eigenschaften wie diese verwendet, um Informationen über die Umgebung des Benutzers herauszufinden. Stattdessen sollten Sie Code schreiben, der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) verwendet.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser des Benutzers läuft; zum Beispiel: `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"`.

## Beispiele

`navigator.platform` sollte fast immer zugunsten der [Feature-Erkennung](/de/docs/Learn_web_development/Extensions/Testing/Feature_detection) vermieden werden. Es gibt jedoch einen Fall, in dem `navigator.platform` unter den verfügbaren Optionen die am wenigsten schlechte Option sein kann: Wenn Sie Benutzern Ratschläge darüber geben müssen, ob die Modifikatortaste für Tastaturkürzel die `⌘` Befehlstaste (auf Apple-Systemen) anstelle der `⌃` Steuerungstaste (auf Nicht-Apple-Systemen) ist:

```js
const modifierKeyPrefix =
  navigator.platform.startsWith("Mac") || navigator.platform === "iPhone"
    ? "^" // control key
    : "⌘"; // command key
```

Das heißt, prüfen Sie, ob `navigator.platform` mit `"Mac"` beginnt oder genau mit `"iPhone"` übereinstimmt, und wählen Sie dann basierend darauf, ob einer dieser Fälle zutrifft, die Modifikatortaste, die Ihre Webanwendung den Benutzern im UI empfiehlt, bei Tastaturkürzeln zu drücken.

## Verwendungshinweise

Unter Windows geben moderne Browser `"Win32"` zurück, auch wenn sie auf einer 64-Bit-Version von Windows laufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.userAgentData.platform`](/de/docs/Web/API/NavigatorUAData/platform)
