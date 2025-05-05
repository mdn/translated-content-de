---
title: display_override
slug: Web/Progressive_web_apps/Manifest/Reference/display_override
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

{{SeeCompatTable}}

Das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglied wird verwendet, um den bevorzugten Anzeigemodus eines Entwicklers für eine Website festzulegen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückfällt, wenn der angeforderte Modus nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen reicht dieser Fallback-Prozess möglicherweise nicht aus.

Das `display_override`-Mitglied löst dies, indem es dem Entwickler ermöglicht, eine Sequenz von Anzeigemodi bereitzustellen, die der Browser vor dem `display`-Mitglied berücksichtigt. Sein Wert ist ein Array von Anzeigemodi, die in der Reihenfolge betrachtet werden, und der erste unterstützte Anzeigemodus wird angewendet.

### Werte

Display-override-Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

- `browser`

  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, je nach Browser und Plattform.
    Dies ist der Standard.

- `fullscreen`

  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird kein Benutzer-Agent-{{Glossary("chrome", "Chrome")}} angezeigt.

- `minimal-ui`

  - : Die Anwendung sieht aus und verhält sich wie eine eigenständige Anwendung mit einem minimalen Satz an UI-Elementen zur Steuerung der Navigation.
    Die Elemente variieren je nach Browser.

- `standalone`

  - : Die Anwendung sieht aus und verhält sich wie eine eigenständige Anwendung.
    Dies kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ihr eigenes Symbol im Anwendungsstarter, usw.
    In diesem Modus schließt der Benutzer-Agent UI-Elemente zur Steuerung der Navigation aus, kann jedoch andere UI-Elemente wie eine Statusleiste enthalten.

- `tabbed` {{experimental_inline}}

  - : Die Anwendung kann mehrere Anwendungskontexte in einem einzigen Betriebssystem-Fenster enthalten.
    Unterstützende Browser können wählen, wie diese Kontexte angezeigt werden, aber ein häufiger Ansatz ist es, eine Tableiste bereitzustellen, um zwischen ihnen zu wechseln.

- `window-controls-overlay` {{experimental_inline}}

  - : Dieser Anzeigemodus gilt nur, wenn die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem ist.
    Die Anwendung wird sich für das Window Controls Overlay-Feature entscheiden, bei dem die gesamte Fensteroberfläche für die Webinhalte der App zur Verfügung steht und die Fenstersteuerungsschaltflächen (Maximieren, Minimieren, Schließen und andere PWA-spezifische Schaltflächen) als Overlay über den Webinhalten erscheinen.

## Beispiele

Im untenstehenden Beispiel wird der Browser die folgende Anzeigemodus-Fallbackkette in dieser Reihenfolge berücksichtigen: `fullscreen` → `minimal-ui` → `standalone`.

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
