---
title: display_override
slug: Web/Progressive_web_apps/Manifest/Reference/display_override
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}{{SeeCompatTable}}

Das [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Element wird verwendet, um den bevorzugten Anzeigemodus einer Website durch den Entwickler zu bestimmen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückfällt, wenn der angeforderte nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen könnte dieser Fallback-Prozess nicht ausreichend sein.

Das `display_override`-Element löst dies, indem es dem Entwickler ermöglicht, eine Reihenfolge von Anzeigemodi anzugeben, die der Browser vor der Verwendung des `display`-Elements in Betracht zieht. Sein Wert ist ein Array von Anzeigemodi, die der Reihe nach betrachtet werden, und der zuerst unterstützte Anzeigemodus wird angewendet.

### Werte

Display Override Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

- `browser`

  - : Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster, abhängig vom Browser und der Plattform.
    Dies ist der Standard.

- `fullscreen`

  - : Der gesamte verfügbare Anzeigebereich wird genutzt und es wird kein User-Agent-{{Glossary("chrome", "Chrome")}} angezeigt.

- `minimal-ui`

  - : Die Anwendung wird aussehen und sich wie eine eigenständige Anwendung verhalten mit einem minimalen Satz von UI-Elementen zur Steuerung der Navigation.
    Die Elemente variieren je nach Browser.

- `standalone`

  - : Die Anwendung wird aussehen und sich wie eine eigenständige Anwendung verhalten.
    Dies kann beinhalten, dass die Anwendung ein separates Fenster, ihr eigenes Icon im Anwendungsstarter usw. hat.
    In diesem Modus wird der User-Agent UI-Elemente zur Steuerung der Navigation ausschließen, kann aber andere UI-Elemente wie eine Statusleiste einschließen.

- `tabbed` {{experimental_inline}}

  - : Die Anwendung kann mehrere Anwendungs-Kontexte in einem einzelnen Betriebssystem-Fenster enthalten.
    Unterstützende Browser können wählen, wie diese Kontexte dargestellt werden, aber ein gängiger Ansatz ist, eine Tableiste bereitzustellen, um zwischen ihnen zu wechseln.

- `window-controls-overlay` {{experimental_inline}}

  - : Dieser Anzeigemodus gilt nur, wenn die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem ist.
    Die Anwendung wird sich für die Window Controls Overlay-Funktion entscheiden, bei der der gesamte Fensteroberflächenbereich für den Webinhalt der App verfügbar ist und die Fenstertasten (maximieren, minimieren, schließen und andere PWA-spezifische Tasten) als Overlay über dem Webinhalt erscheinen.

## Beispiele

Im folgenden Beispiel wird der Browser die folgende Fallback-Kette von Anzeigemodi in dieser Reihenfolge in Betracht ziehen: `fullscreen` → `minimal-ui` → `standalone`.

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

- [Sich auf die Anzeigemodi von morgen vorbereiten](https://developer.chrome.com/docs/capabilities/display-override)
- [Passen Sie das Fenstersteuerungs-Overlay der Titelleiste Ihrer PWA an](https://web.dev/articles/window-controls-overlay)
