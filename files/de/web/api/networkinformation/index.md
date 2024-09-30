---
title: NetworkInformation
slug: Web/API/NetworkInformation
l10n:
  sourceCommit: 8bb6752a4d3ed3d54ab681636d16602e6bf1d74d
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Das **`NetworkInformation`** Interface der [Network Information API](/de/docs/Web/API/Network_Information_API) liefert Informationen über die Verbindung, die ein Gerät zur Kommunikation mit dem Netzwerk nutzt, und bietet eine Möglichkeit für Skripte, benachrichtigt zu werden, wenn sich der Verbindungstyp ändert.
Das `NetworkInformation` Interface kann nicht instanziiert werden. Stattdessen wird es über die `connection` Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator) Interfaces oder des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) Interfaces aufgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt auch Eigenschaften seines Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`NetworkInformation.downlink`](/de/docs/Web/API/NetworkInformation/downlink) {{ReadOnlyInline}}
  - : Gibt die effektive Bandbreitenschätzung in Megabit pro Sekunde zurück, gerundet auf das nächste Vielfache von 25 Kilobit pro Sekunde.
- [`NetworkInformation.downlinkMax`](/de/docs/Web/API/NetworkInformation/downlinkMax) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die maximale Downlink-Geschwindigkeit in Megabit pro Sekunde (Mbps) für die zugrunde liegende Verbindungstechnologie zurück.
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType) {{ReadOnlyInline}}
  - : Gibt den effektiven Verbindungstyp zurück, der einer der folgenden sein kann: 'slow-2g', '2g', '3g' oder '4g'. Dieser Wert wird unter Verwendung einer Kombination aus kürzlich beobachteten Round-Trip-Zeiten und Downlink-Werten bestimmt.
- [`NetworkInformation.rtt`](/de/docs/Web/API/NetworkInformation/rtt) {{ReadOnlyInline}}
  - : Gibt die geschätzte effektive Round-Trip-Zeit der aktuellen Verbindung zurück, gerundet auf das nächste Vielfache von 25 Millisekunden.
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Nutzer eine Option zur reduzierten Datennutzung im User-Agent eingestellt hat.
- [`NetworkInformation.type`](/de/docs/Web/API/NetworkInformation/type) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Verbindungstyp zurück, den ein Gerät zur Kommunikation mit dem Netzwerk verwendet. Er wird einen der folgenden Werte haben:

    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

## Instanzmethoden

_Dieses Interface erbt auch Methoden seines Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Events

- [`change`](/de/docs/Web/API/NetworkInformation/change_event)
  - : Das Event, das ausgelöst wird, wenn sich die Verbindungsinformationen ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Online- und Offline-Events](/de/docs/Web/API/Navigator/onLine)
