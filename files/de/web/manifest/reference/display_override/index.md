---
title: display_override
slug: Web/Manifest/Reference/display_override
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das [`display`](/de/docs/Web/Manifest/Reference/display)-Mitglied wird verwendet, um den bevorzugten Anzeigemodus eines Entwicklers für eine Website zu bestimmen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückfällt, wenn der angeforderte nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen könnte dieser Rückfallprozess nicht ausreichend sein.

Das `display_override`-Mitglied löst dieses Problem, indem es dem Entwickler ermöglicht, eine Abfolge von Anzeigemodi bereitzustellen, die der Browser berücksichtigt, bevor er das `display`-Mitglied verwendet. Sein Wert ist ein Array von Anzeigemodi, die in der angegebenen Reihenfolge betrachtet werden, und der erste unterstützte Anzeigemodus wird angewendet.

### Werte

Display-Override-Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

- `browser`

  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder neuen Fenster, abhängig vom Browser und der Plattform.
    Dies ist der Standard.

- `fullscreen`

  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird kein User-Agent-{{Glossary("chrome", "Chrome")}} angezeigt.

- `minimal-ui`

  - : Die Anwendung wirkt wie eine eigenständige Anwendung mit einem minimalen Satz von UI-Elementen zur Steuerung der Navigation.
    Die Elemente variieren je nach Browser.

- `standalone`

  - : Die Anwendung wirkt wie eine eigenständige Anwendung.
    Dies kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ihr eigenes Symbol im Anwendungsstarter usw.
    In diesem Modus schließt der User-Agent UI-Elemente zur Steuerung der Navigation aus, kann jedoch andere UI-Elemente wie eine Statusleiste einschließen.

- `tabbed` {{experimental_inline}}

  - : Die Anwendung kann mehrere Anwendungskontexte in einem einzigen Betriebssystem-Fenster enthalten.
    Unterstützende Browser können entscheiden, wie diese Kontexte angezeigt werden, aber ein gängiger Ansatz ist, eine Tableiste bereitzustellen, um zwischen ihnen zu wechseln.

- `window-controls-overlay` {{experimental_inline}}

  - : Dieser Anzeigemodus gilt nur, wenn sich die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem befindet.
    Die Anwendung nutzt die Funktion Window Controls Overlay, bei der die gesamte Fensterfläche für den Webinhalt der App verfügbar ist und die Fenstersteuerungstasten (Maximieren, Minimieren, Schließen und andere PWA-spezifische Tasten) als Overlay über dem Webinhalt erscheinen.

## Beispiele

Im folgenden Beispiel wird der Browser die folgende Kette von Anzeigemodus-Rückfällen in dieser Reihenfolge berücksichtigen: `fullscreen` → `minimal-ui` → `standalone`.

```json
{
  "display_override": ["fullscreen", "minimal-ui"],
  "display": "standalone"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vorbereitung auf die Anzeigemodi von morgen](https://developer.chrome.com/docs/capabilities/display-override)
- [Anpassen des Fenstersteuerungs-Overlays der Titelleiste Ihres PWA](https://web.dev/articles/window-controls-overlay)
