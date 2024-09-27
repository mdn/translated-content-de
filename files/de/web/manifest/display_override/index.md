---
title: display_override
slug: Web/Manifest/display_override
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das [`display`](/de/docs/Web/Manifest/display)-Mitglied wird verwendet, um den bevorzugten Anzeigemodus eines Entwicklers für eine Website festzulegen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückgreift, wenn der angeforderte nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen reicht dieser Fallback-Prozess möglicherweise nicht aus.

Das `display_override`-Mitglied löst dieses Problem, indem es dem Entwickler ermöglicht, eine Reihe von Anzeigemodi anzugeben, die der Browser in Betracht zieht, bevor er das `display`-Mitglied benutzt. Sein Wert ist ein Array von Anzeigemodi, die der Reihe nach berücksichtigt werden, und der erste unterstützte Anzeigemodus wird angewendet.

### Werte

Display-Override-Objekte sind Anzeige-Modus-Strings, die möglichen Werte sind:

- `browser`

  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
    Dies ist die Standardeinstellung.

- `fullscreen`

  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird keine Benutzeroberfläche [chrome](/de/docs/Glossary/chrome) angezeigt.

- `minimal-ui`

  - : Die Anwendung wirkt wie eine eigenständige Anwendung mit einem minimalen Satz von UI-Elementen zur Steuerung der Navigation.
    Die Elemente variieren je nach Browser.

- `standalone`

  - : Die Anwendung wirkt wie eine eigenständige Anwendung.
    Dies kann bedeuten, dass die Anwendung ein eigenes Fenster hat, ein eigenes Symbol im Anwendungsstarter, usw.
    In diesem Modus wird die Browser-Oberfläche zur Steuerung der Navigation ausgeschlossen, jedoch können andere UI-Elemente wie eine Statusleiste enthalten sein.

- `tabbed` {{experimental_inline}}

  - : Die Anwendung kann mehrere Anwendungs-Kontexte innerhalb eines einzigen Betriebssystem-Fensters enthalten.
    Unterstützende Browser können wählen, wie diese Kontexte angezeigt werden, aber ein üblicher Ansatz ist, eine Tableiste bereitzustellen, um zwischen ihnen zu wechseln.

- `window-controls-overlay` {{experimental_inline}}

  - : Dieser Anzeigemodus gilt nur, wenn die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem ist.
    Die Anwendung wird sich für das Window Controls Overlay-Feature anmelden, bei dem die gesamte Fensterfläche für den Web-Content der App verfügbar ist und die Fenstertasten (Maximieren, Minimieren, Schließen und andere PWA-spezifische Tasten) als Overlay über dem Web-Content erscheinen.

## Beispiele

Im untenstehenden Beispiel wird der Browser die folgende Anzeigemodus-Fallback-Kette in dieser Reihenfolge berücksichtigen: `fullscreen` → `minimal-ui` → `standalone`.

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
- [Anpassen des Fenstersteuerungs-Overlays in der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
