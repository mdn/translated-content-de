---
title: "Navigator: platform-Eigenschaft"
short-title: platform
slug: Web/API/Navigator/platform
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Die schreibgeschützte **`platform`**-Eigenschaft der {{domxref("Navigator")}}-Schnittstelle gibt einen String zurück, der die Plattform identifiziert, auf der der Browser des Benutzers läuft.

> [!NOTE]
> Im Allgemeinen sollten Sie nach Möglichkeit vermeiden, Code zu schreiben, der Methoden oder Eigenschaften wie diese verwendet, um Informationen über die Benutzerumgebung herauszufinden, und stattdessen Code schreiben, der [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) verwendet.

## Wert

Ein String, der die Plattform identifiziert, auf der der Browser des Benutzers läuft; zum Beispiel: `"MacIntel"`, `"Win32"`, `"Linux x86_64"`, `"Linux armv81"`.

## Beispiele

`navigator.platform` sollte fast immer zugunsten der [Feature-Erkennung](/de/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) vermieden werden. Es gibt jedoch einen Fall, in dem `navigator.platform` unter den möglichen Optionen die am wenigsten schlechte Wahl sein kann: Wenn Sie den Benutzern Ratschläge geben müssen, ob die Modifier-Taste für Tastenkombinationen die `⌘`-Befehlstaste (auf Apple-Systemen) anstelle der `⌃`-Steuerungstaste (auf Nicht-Apple-Systemen) ist:

```js
let modifierKeyPrefix = "^"; // Steuerungstaste
if (
  navigator.platform.indexOf("Mac") === 0 ||
  navigator.platform === "iPhone"
) {
  modifierKeyPrefix = "⌘"; // Befehlstaste
}
```

Das heißt, überprüfen Sie, ob `navigator.platform` mit `"Mac"` beginnt oder genau mit `"iPhone"` übereinstimmt, und wählen Sie dann basierend darauf, ob eines davon zutrifft, die Modifier-Taste, die in der Benutzeroberfläche Ihrer Webanwendung den Benutzern beim Drücken von Tastenkombinationen angezeigt wird.

## Anwendungshinweise

Auf Windows geben moderne Browser `"Win32"` zurück, selbst wenn sie auf einer 64-Bit-Version von Windows laufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`navigator.userAgentData.platform`](/de/docs/Web/API/NavigatorUAData/platform)
