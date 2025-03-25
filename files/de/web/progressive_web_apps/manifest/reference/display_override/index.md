---
title: display_override
slug: Web/Progressive_web_apps/Manifest/Reference/display_override
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Element wird verwendet, um den bevorzugten Anzeigemodus eines Entwicklers für eine Website festzulegen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückfällt, wenn der angeforderte nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen könnte dieser Fallback-Prozess nicht ausreichen.

Das `display_override` Element löst dieses Problem, indem es dem Entwickler ermöglicht, eine Reihe von Anzeigemodi bereitzustellen, die der Browser in Betracht ziehen soll, bevor er das `display` Element verwendet. Sein Wert ist ein Array von Anzeigemodi, die in der angegebenen Reihenfolge berücksichtigt werden, wobei der erste unterstützte Anzeigemodus angewendet wird.

### Werte

Display-Override-Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

- `browser`

  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder in einem neuen Fenster, abhängig vom Browser und der Plattform.
    Dies ist der Standard.

- `fullscreen`

  - : Der gesamte verfügbare Anzeigebereich wird genutzt und keine Benutzeroberfläche des Benutzeragenten {{Glossary("chrome", "chrome")}} wird angezeigt.

- `minimal-ui`

  - : Die Anwendung verhält sich wie eine eigenständige Anwendung mit einem minimalen Satz von UI-Elementen zur Steuerung der Navigation.
    Die Elemente variieren je nach Browser.

- `standalone`

  - : Die Anwendung verhält sich wie eine eigenständige Anwendung.
    Dies kann bedeuten, dass die Anwendung ein anderes Fenster hat, ihr eigenes Symbol im Anwendungsstarter, usw.
    In diesem Modus wird der Benutzeragent UI-Elemente zur Steuerung der Navigation ausschließen, aber andere UI-Elemente wie eine Statusleiste einbeziehen können.

- `tabbed` {{experimental_inline}}

  - : Die Anwendung kann mehrere Anwendungs-Kontexte in einem einzigen betriebssystemweiten Fenster enthalten.
    Unterstützende Browser können wählen, wie diese Kontexte angezeigt werden, eine gängige Methode ist jedoch, eine Tableiste bereitzustellen, um zwischen ihnen zu wechseln.

- `window-controls-overlay` {{experimental_inline}}

  - : Dieser Anzeigemodus gilt nur, wenn die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem ausgeführt wird.
    Die Anwendung wird sich für das Window Controls Overlay-Feature entscheiden, bei dem die gesamte Fensteroberfläche für den Webinhalt der App verfügbar ist und die Fensteuerungstasten (Maximieren, Minimieren, Schließen und andere PWA-spezifische Tasten) als Overlay über dem Webinhalt erscheinen.

## Beispiele

Im folgenden Beispiel betrachtet der Browser die folgende Anzeigemodus-Fallback-Kette in dieser Reihenfolge: `fullscreen` → `minimal-ui` → `standalone`.

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
- [Anpassen des Fenstersteuerungs-Overlays der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
