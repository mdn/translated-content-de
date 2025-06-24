---
title: NetworkInformation
slug: Web/API/NetworkInformation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Das **`NetworkInformation`**-Interface der [Network Information API](/de/docs/Web/API/Network_Information_API) liefert Informationen über die Verbindung, die ein Gerät zur Kommunikation mit dem Netzwerk verwendet, und bietet eine Möglichkeit für Skripte, benachrichtigt zu werden, wenn sich der Verbindungstyp ändert. Das `NetworkInformation`-Interface kann nicht instanziiert werden. Es wird stattdessen über die `connection`-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces oder des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt auch Eigenschaften seiner Eltern, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`NetworkInformation.downlink`](/de/docs/Web/API/NetworkInformation/downlink) {{ReadOnlyInline}}
  - : Gibt die geschätzte effektive Bandbreite in Megabit pro Sekunde zurück, gerundet auf das nächste Vielfache von 25 Kilobit pro Sekunde.
- [`NetworkInformation.downlinkMax`](/de/docs/Web/API/NetworkInformation/downlinkMax) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die maximale Downlink-Geschwindigkeit in Megabit pro Sekunde (Mbps) für die zugrunde liegende Verbindungstechnologie zurück.
- [`NetworkInformation.effectiveType`](/de/docs/Web/API/NetworkInformation/effectiveType) {{ReadOnlyInline}}
  - : Gibt den effektiven Verbindungstyp zurück, der entweder 'slow-2g', '2g', '3g', oder '4g' ist. Dieser Wert wird durch eine Kombination aus kürzlich beobachteten Round-Trip-Zeiten und Downlink-Werten bestimmt.
- [`NetworkInformation.rtt`](/de/docs/Web/API/NetworkInformation/rtt) {{ReadOnlyInline}}
  - : Gibt die geschätzte effektive Round-Trip-Zeit der aktuellen Verbindung zurück, gerundet auf das nächste Vielfache von 25 Millisekunden.
- [`NetworkInformation.saveData`](/de/docs/Web/API/NetworkInformation/saveData) {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzer im Benutzeragent eine Option für reduzierte Datennutzung gesetzt hat.
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

_Dieses Interface erbt auch Methoden seiner Eltern, [`EventTarget`](/de/docs/Web/API/EventTarget)._

## Ereignisse

- [`change`](/de/docs/Web/API/NetworkInformation/change_event)
  - : Das Ereignis, das ausgelöst wird, wenn sich die Verbindungsinformationen ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
