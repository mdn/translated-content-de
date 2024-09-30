---
title: display_override
slug: Web/Manifest/display_override
l10n:
  sourceCommit: 2b44e3e665ceb5f4336089695aa5f617b1baf33c
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Der [`display`](/de/docs/Web/Manifest/display)-Member wird verwendet, um den bevorzugten Anzeigemodus für eine Website festzulegen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückgreift, wenn der angeforderte nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen reicht dieser Fallback-Prozess möglicherweise nicht aus.

Der `display_override`-Member löst dieses Problem, indem er dem Entwickler ermöglicht, eine Abfolge von Anzeigemodi bereitzustellen, die der Browser in Betracht ziehen soll, bevor er den `display`-Member verwendet. Sein Wert ist ein Array von Anzeigemodi, die nacheinander betrachtet werden, und der erste unterstützte Anzeigemodus wird angewendet.

### Werte

Display-Override-Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

- `browser`

  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder -Fenster, abhängig vom Browser und Betriebssystem.
    Dies ist der Standard.

- `fullscreen`

  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird keine Benutzeroberfläche des Benutzeragenten [chrome](/de/docs/Glossary/chrome) angezeigt.

- `minimal-ui`

  - : Die Anwendung wird wie eine eigenständige Anwendung mit einem minimalen Satz von UI-Elementen zur Steuerung der Navigation aussehen und sich so anfühlen.
    Die Elemente variieren je nach Browser.

- `standalone`

  - : Die Anwendung wird wie eine eigenständige Anwendung aussehen und sich so anfühlen.
    Dies kann umfassen, dass die Anwendung ein eigenes Fenster hat, ihr eigenes Symbol im Anwendungsstarter etc.
    In diesem Modus wird der Benutzeragent UI-Elemente zur Steuerung der Navigation ausschließen, kann aber andere UI-Elemente wie eine Statusleiste einschließen.

- `tabbed` {{experimental_inline}}

  - : Die Anwendung kann mehrere Anwendungskontexte in einem einzelnen Betriebssystemfenster enthalten.
    Unterstützende Browser können wählen, wie diese Kontexte angezeigt werden sollen, aber ein häufiger Ansatz ist, eine Tab-Leiste bereitzustellen, um zwischen ihnen zu wechseln.

- `window-controls-overlay` {{experimental_inline}}

  - : Dieser Anzeigemodus gilt nur, wenn sich die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem befindet.
    Die Anwendung wird sich für das Window Controls Overlay-Feature entscheiden, bei dem die gesamte Fensterfläche für den Webinhalt der App verfügbar ist und die Fenstersteuerungsschaltflächen (maximieren, minimieren, schließen und andere PWA-spezifische Schaltflächen) als Overlay über dem Webinhalt erscheinen.

## Beispiele

Im folgenden Beispiel wird der Browser die folgende Kette von Anzeigemodus-Fallbacks in dieser Reihenfolge berücksichtigen: `fullscreen` → `minimal-ui` → `standalone`.

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

- [Preparing for the display modes of tomorrow](https://developer.chrome.com/docs/capabilities/display-override)
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/articles/window-controls-overlay)
