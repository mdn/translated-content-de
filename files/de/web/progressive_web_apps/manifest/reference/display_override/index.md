---
title: display_override
slug: Web/Progressive_web_apps/Manifest/Reference/display_override
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

Das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display) Mitglied wird verwendet, um den bevorzugten Anzeigemodus eines Entwicklers für eine Website zu bestimmen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückfällt, wenn der angeforderte Modus nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen reicht dieser Rückfallprozess möglicherweise nicht aus.

Das `display_override` Mitglied löst dieses Problem, indem es dem Entwickler ermöglicht, eine Sequenz von Anzeigemodi bereitzustellen, die der Browser in Betracht zieht, bevor er das `display` Mitglied verwendet. Sein Wert ist ein Array von Anzeigemodi, die der Reihe nach betrachtet werden, und der erste unterstützte Anzeigemodus wird angewendet.

### Werte

Display-Override-Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

- `browser`

  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
    Dies ist der Standard.

- `fullscreen`

  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird kein User-Agent {{Glossary("chrome", "chrome")}} angezeigt.

- `minimal-ui`

  - : Die Anwendung wird wie eine eigenständige Anwendung mit einem minimalen Satz von UI-Elementen zur Steuerung der Navigation aussehen und sich anfühlen.
    Die Elemente variieren je nach Browser.

- `standalone`

  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich anfühlen.
    Dies kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ein eigenes Symbol im Anwendungsstarter besitzt usw.
    In diesem Modus wird der User-Agent UI-Elemente zur Steuerung der Navigation ausschließen, aber er kann andere UI-Elemente wie eine Statusleiste enthalten.

- `tabbed` {{experimental_inline}}

  - : Die Anwendung kann mehrere Anwendungskontexte innerhalb eines einzelnen OS-Level-Fensters enthalten.
    Unterstützende Browser können wählen, wie diese Kontexte angezeigt werden, aber ein üblicher Ansatz ist, eine Tableiste bereitzustellen, um zwischen ihnen zu wechseln.

- `window-controls-overlay` {{experimental_inline}}
  - : Dieser Anzeigemodus gilt nur, wenn sich die Anwendung in einem separaten PWA-Fenster auf einem Desktop-Betriebssystem befindet.
    Die Anwendung wird in das Fenstersteuerungs-Overlay-Feature einsteigen, wobei die gesamte Fensteroberfläche für die Webinhalte der App verfügbar sein wird und die Fenstersteuerungsschaltflächen (maximieren, minimieren, schließen und andere PWA-spezifische Schaltflächen) als Overlay über dem Webinhalt erscheinen.

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
- [Passen Sie das Fenstersteuerungs-Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
