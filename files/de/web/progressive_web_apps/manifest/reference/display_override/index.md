---
title: display_override
slug: Web/Progressive_web_apps/Manifest/Reference/display_override
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{SeeCompatTable}}

Das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Mitglied wird verwendet, um den bevorzugten Anzeigemodus eines Entwicklers für eine Website festzulegen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückfällt, wenn der angeforderte Modus nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen reicht dieser Rückfallprozess möglicherweise nicht aus.

Das `display_override`-Mitglied löst dies, indem es dem Entwickler ermöglicht, eine Sequenz von Anzeigemodi bereitzustellen, die der Browser in Betracht zieht, bevor das `display`-Mitglied verwendet wird. Sein Wert ist ein Array von Anzeigemodi, die in Reihenfolge betrachtet werden, und der erste unterstützte Anzeigemodus wird angewendet.

## Werte

Display-Override-Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

- `browser`
  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
    Dies ist der Standard.

- `fullscreen`
  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird keine Benutzeroberfläche des {{Glossary("chrome", "Chrome")}} angezeigt.

- `minimal-ui`
  - : Die Anwendung wird wie eine eigenständige Anwendung mit einer minimalen Anzahl von UI-Elementen für die Steuerung der Navigation aussehen und sich anfühlen.
    Die Elemente variieren je nach Browser.

- `standalone`
  - : Die Anwendung wird als eigenständige Anwendung aussehen und sich anfühlen.
    Dies kann beinhalten, dass die Anwendung ein eigenes Fenster besitzt, ein eigenes Symbol im Programmlauncher hat usw.
    In diesem Modus wird die Benutzeroberfläche für die Steuerung der Navigation vom User-Agent ausgeschlossen, es können jedoch andere UI-Elemente wie eine Statusleiste enthalten sein.

- `tabbed` {{experimental_inline}}
  - : Die Anwendung kann mehrere Anwendungskontexte innerhalb eines einzigen Betriebssystemfensters enthalten.
    Unterstützende Browser können wählen, wie diese Kontexte angezeigt werden, aber ein üblicher Ansatz ist, eine Tableiste zum Wechseln zwischen ihnen bereitzustellen.

- `window-controls-overlay` {{experimental_inline}}
  - : Dieser Anzeigemodus gilt nur, wenn die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem geöffnet ist.
    Die Anwendung wird sich für das Fenstersteuerungs-Overlay-Feature anmelden, bei dem die gesamte Fensteroberfläche für den Web-Inhalt der App verfügbar ist und die Fenstersteuerelemente (maximieren, minimieren, schließen und andere PWA-spezifische Schaltflächen) als Overlay über dem Web-Inhalt erscheinen.

## Beispiele

Im untenstehenden Beispiel wird der Browser die folgende Anzeigemodus-Rückfallkette in dieser Reihenfolge in Betracht ziehen: `fullscreen` → `minimal-ui` → `standalone`.

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
- [Anpassung des Fenstersteuerungs-Overlays der Titelleiste Ihrer PWA](https://web.dev/articles/window-controls-overlay)
