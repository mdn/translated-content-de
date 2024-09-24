---
title: display_override
slug: Web/Manifest/display_override
l10n:
  sourceCommit: 40ab91c2c9745290aa1db5aa44691a11e7950ca6
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Array</code></td>
    </tr>
  </tbody>
</table>

Das [`display`](/de/docs/Web/Manifest/display)-Mitglied wird verwendet, um den vom Entwickler bevorzugten Anzeigemodus für eine Website zu bestimmen. Es folgt einem Prozess, bei dem der Browser auf den nächsten Anzeigemodus zurückfällt, wenn der angeforderte nicht unterstützt wird. In einigen fortgeschrittenen Anwendungsfällen könnte dieser Fallback-Prozess jedoch nicht ausreichend sein.

Das `display_override`-Mitglied löst dies, indem es dem Entwickler ermöglicht, eine Sequenz von Anzeigemodi bereitzustellen, die der Browser in Betracht zieht, bevor er das `display`-Mitglied verwendet. Sein Wert ist ein Array von Anzeigemodi, die der Reihe nach betrachtet werden, und der erste unterstützte Anzeigemodus wird angewandt.

## Werte

Display-Override-Objekte sind Anzeigemodus-Strings, die möglichen Werte sind:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Anzeigemodus</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>browser</code></td>
      <td>
        Die Anwendung öffnet sich in einem herkömmlichen Browser-Tab oder einem neuen Fenster,
        abhängig vom Browser und der Plattform. Dies ist der Standard.
      </td>
    </tr>
    <tr>
      <td><code>fullscreen</code></td>
      <td>
        Der gesamte verfügbare Anzeigebereich wird genutzt und es wird keine Nutzeragent-
        {{Glossary("chrome")}} angezeigt.
      </td>
    </tr>
    <tr>
      <td><code>minimal-ui</code></td>
      <td>
        Die Anwendung sieht aus und verhält sich wie eine eigenständige Anwendung mit
        einer minimalen Anzahl von UI-Elementen zur Steuerung der Navigation. Die
        Elemente variieren je nach Browser.
      </td>
    </tr>
    <tr>
      <td><code>standalone</code></td>
      <td>
        Die Anwendung sieht aus und verhält sich wie eine eigenständige Anwendung. Dies
        kann beinhalten, dass die Anwendung ein eigenes Fenster hat, ihr eigenes Symbol
        im Anwendungsstarter, etc. In diesem Modus wird der Nutzeragent UI-Elemente zur
        Steuerung der Navigation ausschließen, kann aber andere UI-Elemente wie eine
        Statusleiste enthalten.
      </td>
    </tr>
    <tr>
      <td><code>tabbed</code></td>
      <td>
        Die Anwendung kann mehrere Anwendungs-Kontexte in einem einzigen Betriebssystem-Fenster enthalten. Unterstützende Browser können wählen, wie diese Kontexte angezeigt werden, aber ein gängiger Ansatz ist, eine Tableiste bereitzustellen, um zwischen ihnen zu wechseln.
      </td>
    </tr>
    <tr>
      <td><code>window-controls-overlay</code></td>
      <td>
        Dieser Anzeigemodus gilt nur, wenn die Anwendung in einem separaten PWA-Fenster und auf einem Desktop-Betriebssystem ist. Die Anwendung wird zur Window Controls Overlay-Funktion optieren, bei der die gesamte Fensteroberfläche für die Webinhalte der App verfügbar ist und die Fenstersteuerungsschaltflächen (maximieren, minimieren, schließen und andere PWA-spezifische Schaltflächen) als Overlay über den Webinhalten erscheinen.
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

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

- [Preparing for the display modes of tomorrow](https://developer.chrome.com/docs/capabilities/display-override)
- [Customize the window controls overlay of your PWA's title bar](https://web.dev/articles/window-controls-overlay)
