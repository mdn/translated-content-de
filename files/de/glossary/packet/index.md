---
title: Paket
slug: Glossary/Packet
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein Paket oder Netzwerkpaket ist ein formatiertes Datenstück, das über ein Netzwerk gesendet wird. Die Hauptkomponenten eines Netzwerkpakets sind die Nutzdaten und die Steuerinformationen. Die Nutzdaten werden als _Payload_ bezeichnet. Die Steuerinformationen sind die Informationen zur Übermittlung der Payload. Sie bestehen aus Netzwerkadressen für die Quelle und das Ziel, Sequenzierungsinformationen und Fehlererkennungscodes und befinden sich in der Regel in den Paket-Headern und -Footer.

## Was ein Paket enthält

### Hop-Limit

Ein Hop tritt auf, wenn ein Paket von einem Netzwerk zum nächsten Netzwerk weitergeleitet wird. Es ist ein Feld, das bei jedem Durchgang eines Pakets um eins verringert wird; sobald das Hop-Limit 0 erreicht, ist der Sendebetrieb fehlgeschlagen und das Paket wird verworfen.

Mit der Zeit kann die Anzahl der Pakete, die innerhalb geschlossener Kreisläufe zirkulieren, zunehmen, was schließlich zum Ausfall des Netzwerks führen kann.

### Fehlererkennung und -korrektur

Fehlererkennung und -korrektur sind Codes, die verwendet werden, um Fehler zu erkennen und Korrekturen auf die Fehler anzuwenden, die auftreten, wenn Daten an den Empfänger übertragen werden. Es gibt zwei Arten der Fehlerkorrektur: Rückwärts- und Vorwärtsfehlerkorrektur. Rückwärtsfehlerkorrektur bedeutet, dass der Empfänger den Sender bittet, die gesamte Dateneinheit erneut zu übertragen. Vorwärtsfehlerkorrektur bedeutet, dass der Empfänger den Fehlerkorrekturcode verwendet, der die Fehler automatisch korrigiert.

Am Sender erfolgt die Berechnung, bevor das Paket gesendet wird. Wenn es am Ziel empfangen wird, wird die Prüfsumme neu berechnet und mit der im Paket verglichen.

### Priorität

Dieses Feld gibt an, welches Paket eine höhere Priorität gegenüber den anderen haben sollte. Die Warteschlange mit hoher Priorität wird schneller geleert als die mit niedrigerer Priorität, wenn das Netzwerk überlastet ist.

### Adressen

Beim Routing von Netzwerkpaketen sind zwei Netzwerkadressen erforderlich: die Quelladresse des sendenden Hosts und die Zieladresse des empfangenden Hosts.

### Benutzerdaten - Payload

Payload sind die Daten, die im Auftrag einer Anwendung übertragen werden. Sie sind in der Regel variabel lang, bis zu einem Maximum, das durch das Netzwerkprotokoll und manchmal durch die Ausrüstung auf dem Weg festgelegt wird.

## Verwendete Referenzen

- [Network packet](https://en.wikipedia.org/wiki/Network_packet)
- [Hop (networking)](<https://en.wikipedia.org/wiki/Hop_(networking)>)
- [How error detection and correction works](https://www.techradar.com/news/computing/how-error-detection-and-correction-works-1080736)
