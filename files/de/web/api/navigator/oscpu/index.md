---
title: "Navigator: oscpu-Eigenschaft"
short-title: oscpu
slug: Web/API/Navigator/oscpu
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{ ApiRef("HTML DOM") }} {{Deprecated_Header}}

Die **`Navigator.oscpu`**-Eigenschaft gibt einen String zurück, der das aktuelle Betriebssystem identifiziert.

## Wert

Ein String, der das Betriebssystem angibt, auf dem der Browser läuft.

| Betriebssystem                | Format des `oscpuInfo`-Strings                      |
| ----------------------------- | --------------------------------------------------- |
| OS/2                          | `OS/2 Warp x (entweder 3, 4 oder 4.5)`              |
| Windows CE                    | `WindowsCE x.y`                                     |
| Windows 64-bit (64-bit Build) | `Windows NT x.y; Win64; x64`                        |
| Windows 64-bit (32-bit Build) | `Windows NT x.y; WOW64`                             |
| Windows 32-bit                | `Windows NT x.y`                                    |
| Mac OS X (PPC Build)          | `PowerPC Mac OS X version x.y`                      |
| Mac OS X (i386/x64 Build)     | `Intel Mac OS X` oder `macOS version x.y`           |
| Linux 64-bit (32-bit Build)   | Ausgabe von `uname -s` gefolgt von `i686 on x86_64` |
| Linux                         | Ausgabe von `uname -sm`                             |

In dieser Tabelle bezieht sich `x.y` auf die Version des Betriebssystems.

## Beispiele

```js
function osInfo() {
  alert(navigator.oscpu);
}

osInfo(); // alerts "Windows NT 6.0" for example
```

## Nutzungshinweise

Es sei denn, Ihr Code ist privilegiert (chrome oder hat zumindest das UniversalBrowserRead-Privileg), könnte er den Wert der `general.oscpu.override`-Einstellung anstelle der echten Plattform erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
