---
title: NetworkInformation
slug: Web/API/NetworkInformation
l10n:
  sourceCommit: 8bb6752a4d3ed3d54ab681636d16602e6bf1d74d
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Die **`NetworkInformation`** -Schnittstelle der [Network Information API](/de/docs/Web/API/Network_Information_API) bietet Informationen über die Verbindung, die ein Gerät zur Kommunikation mit dem Netzwerk verwendet, und bietet eine Möglichkeit für Skripte, benachrichtigt zu werden, wenn sich der Verbindungstyp ändert. Die `NetworkInformation`-Schnittstelle kann nicht instanziiert werden. Stattdessen wird sie über die `connection`-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle oder der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`NetworkInformation.downlink`](/de/docs/Web/API/NetworkInformation/downlink) {{ReadOnlyInline}}
  - : Gibt die effektive Bandbreitenschätzung in Megabit pro Sekunde zurück, gerundet auf das nächste Vielfache von 25 Kilobit pro Sekunde.
- [`NetworkInformation.downlinkMax`](/de/docs/Web/API/NetworkInformation/downlinkMax) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die maximale Downlink-Geschwindigkeit in Megabit pro Sekunde (Mbps) für die zugrunde liegende Verbindungstechnologie zurück.
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType) {{ReadOnlyInline}}
  - : Gibt den effektiven Verbindungstyp zurück, der einer von 'slow-2g', '2g', '3g' oder '4g' ist. Dieser Wert wird anhand einer Kombination aus kürzlich beobachteten Round-Trip-Zeiten und Downlink-Werten bestimmt.
- [`NetworkInformation.rtt`](/de/docs/Web/API/NetworkInformation/rtt) {{ReadOnlyInline}}
  - : Gibt die geschätzte effektive Round-Trip-Zeit der aktuellen Verbindung zurück, gerundet auf das nächste Vielfache von 25 Millisekunden.
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzer eine Option zur Reduzierung der Datennutzung im Benutzeragenten eingestellt hat.
- [`NetworkInformation.type`](/de/docs/Web/API/NetworkInformation/type) {{ReadOnlyInline}} {{Experimental_Inline}}

  - : Gibt den Verbindungstyp zurück, den ein Gerät zur Kommunikation mit dem Netzwerk verwendet. Es wird einer der folgenden Werte sein:

    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

## Instanz-Methoden

_Diese Schnittstelle erbt auch Methoden ihres Elternteils, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

- [`change`](/de/docs/Web/API/NetworkInformation/change_event)
  - : Das Ereignis, das ausgelöst wird, wenn sich die Verbindungsinformationen ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
