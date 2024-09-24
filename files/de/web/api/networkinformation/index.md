---
title: NetworkInformation
slug: Web/API/NetworkInformation
l10n:
  sourceCommit: 8bb6752a4d3ed3d54ab681636d16602e6bf1d74d
---

{{APIRef("Network Information API")}} {{AvailableInWorkers}}

Die **`NetworkInformation`**-Schnittstelle der [Network Information API](/de/docs/Web/API/Network_Information_API) liefert Informationen über die Verbindung, die ein Gerät zur Kommunikation mit dem Netzwerk verwendet, und bietet eine Möglichkeit, Skripte zu benachrichtigen, wenn sich der Verbindungstyp ändert. Die `NetworkInformation`-Schnittstelle kann nicht instanziiert werden. Stattdessen wird sie über die `connection`-Eigenschaft der {{domxref("Navigator")}}-Schnittstelle oder der {{domxref("WorkerNavigator")}}-Schnittstelle aufgerufen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt auch Eigenschaften ihres Elternteils, {{domxref("EventTarget")}}._

- {{domxref("NetworkInformation.downlink")}} {{ReadOnlyInline}}
  - : Gibt die geschätzte Bandbreite in Megabit pro Sekunde zurück, gerundet auf das nächste Vielfache von 25 Kilobit pro Sekunde.
- {{domxref("NetworkInformation.downlinkMax")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die maximale Downlink-Geschwindigkeit in Megabit pro Sekunde (Mbps) für die zugrundeliegende Verbindungstechnologie zurück.
- {{domxref("NetworkInformation.effectiveType")}} {{ReadOnlyInline}}
  - : Gibt den effektiven Verbindungstyp zurück, der einer der folgenden Werte sein kann: 'slow-2g', '2g', '3g' oder '4g'. Dieser Wert wird anhand einer Kombination aus zuletzt beobachteter Round-Trip-Zeit und Downlink-Werten bestimmt.
- {{domxref("NetworkInformation.rtt")}} {{ReadOnlyInline}}
  - : Gibt die geschätzte effektive Round-Trip-Zeit der aktuellen Verbindung zurück, gerundet auf das nächste Vielfache von 25 Millisekunden.
- {{domxref("NetworkInformation.saveData")}} {{ReadOnlyInline}}
  - : Gibt `true` zurück, wenn der Benutzer eine Option zur verringerten Datennutzung im User-Agenten festgelegt hat.
- {{domxref("NetworkInformation.type")}} {{ReadOnlyInline}} {{Experimental_Inline}}

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

_Diese Schnittstelle erbt auch Methoden ihres Elternteils, {{domxref("EventTarget")}}._

## Ereignisse

- {{domxref("NetworkInformation.change_event", "change")}}
  - : Das Ereignis, das ausgelöst wird, wenn sich die Verbindungsinformationen ändern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
