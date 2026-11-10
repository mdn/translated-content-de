---
title: "Navigator: oscpu-Eigenschaft"
short-title: oscpu
slug: Web/API/Navigator/oscpu
l10n:
  sourceCommit: b9569fcd65bb09ea7e032ef0938185eccdc2d9c4
---

{{ ApiRef("HTML DOM") }}

Die Eigenschaft **`Navigator.oscpu`** gibt eine Zeichenfolge zurück, die das aktuelle Betriebssystem identifiziert.

## Wert

Eine Zeichenfolge, die das Betriebssystem identifiziert, auf dem der Browser ausgeführt wird.

| Betriebssystem                | Format der `oscpuInfo`-Zeichenfolge                  |
| ----------------------------- | ---------------------------------------------------- |
| OS/2                          | `OS/2 Warp x (either 3, 4 or 4.5)`                   |
| Windows CE                    | `WindowsCE x.y`                                      |
| Windows 64-Bit (64-Bit-Build) | `Windows NT x.y; Win64; x64`                         |
| Windows 64-Bit (32-Bit-Build) | `Windows NT x.y; WOW64`                              |
| Windows 32-Bit                | `Windows NT x.y`                                     |
| Mac OS X (PPC-Build)          | `PowerPC Mac OS X version x.y`                       |
| Mac OS X (i386/x64-Build)     | `Intel Mac OS X` oder `macOS version x.y`            |
| Linux 64-Bit (32-Bit-Build)   | Ausgabe von `uname -s`, gefolgt von `i686 on x86_64` |
| Linux                         | Ausgabe von `uname -sm`                              |

In dieser Tabelle steht `x.y` für die Version des Betriebssystems.

## Hinweise zur Verwendung

Sofern Ihr Code nicht über erhöhte Berechtigungen verfügt (chrome oder zumindest die Berechtigung UniversalBrowserRead), kann er statt der tatsächlichen Plattform den Wert der Einstellung `general.oscpu.override` erhalten.

## Beispiele

```js
function osInfo() {
  alert(navigator.oscpu);
}

osInfo(); // alerts "Windows NT 6.0" for example
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
