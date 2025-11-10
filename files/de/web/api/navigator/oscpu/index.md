---
title: "Navigator: oscpu-Eigenschaft"
short-title: oscpu
slug: Web/API/Navigator/oscpu
l10n:
  sourceCommit: 9cbfa7fc0051724913e92958b712425db77291a8
---

{{ ApiRef("HTML DOM") }}

Die **`Navigator.oscpu`**-Eigenschaft gibt einen String zurück, der das aktuelle Betriebssystem identifiziert.

## Wert

Ein String, der das Betriebssystem identifiziert, auf dem der Browser läuft.

| Betriebssystem                | Format des `oscpuInfo`-Strings                      |
| ----------------------------- | --------------------------------------------------- |
| OS/2                          | `OS/2 Warp x (either 3, 4 or 4.5)`                  |
| Windows CE                    | `WindowsCE x.y`                                     |
| Windows 64-bit (64-bit build) | `Windows NT x.y; Win64; x64`                        |
| Windows 64-bit (32-bit build) | `Windows NT x.y; WOW64`                             |
| Windows 32-bit                | `Windows NT x.y`                                    |
| Mac OS X (PPC build)          | `PowerPC Mac OS X version x.y`                      |
| Mac OS X (i386/x64 build)     | `Intel Mac OS X` oder `macOS version x.y`           |
| Linux 64-bit (32-bit build)   | Ausgabe von `uname -s` gefolgt von `i686 on x86_64` |
| Linux                         | Ausgabe von `uname -sm`                             |

In dieser Tabelle bezieht sich `x.y` auf die Version des Betriebssystems.

## Beispiele

```js
function osInfo() {
  alert(navigator.oscpu);
}

osInfo(); // alerts "Windows NT 6.0" for example
```

## Verwendungshinweise

Wenn Ihr Code nicht privilegiert ist (Chrome oder zumindest das UniversalBrowserRead-Privileg hat), kann er den Wert der `general.oscpu.override`-Einstellung anstelle der tatsächlichen Plattform erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
