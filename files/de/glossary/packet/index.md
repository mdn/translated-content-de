---
title: Paket
slug: Glossary/Packet
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein Paket oder Netzwerkpaket ist ein formatiertes Datenstück, das über ein Netzwerk gesendet wird. Die Hauptkomponenten eines Netzwerkpakets sind die Benutzerdaten und die Steuerinformationen. Die Benutzerdaten werden als _Nutzlast_ bezeichnet. Die Steuerinformationen sind die Informationen zur Zustellung der Nutzlast. Diese bestehen aus Netzwerkadressen für die Quelle und das Ziel, Sequenzierungsinformationen und Fehlererkennungscodes und befinden sich in der Regel in den Paket-Headern und -Fußzeilen.

## Was ein Paket enthält

### Hop-Limit

Ein Hop tritt auf, wenn ein Paket von einem Netzwerk in das nächste Netzwerk übergeben wird. Es handelt sich um ein Feld, das bei jedem Durchlauf eines Pakets um eins verringert wird; sobald das Hop-Limit 0 erreicht, ist die Sendung fehlgeschlagen und das Paket wird verworfen.

Mit der Zeit kann die Anzahl der Pakete, die innerhalb geschlossener Schaltungen wandern, die Netzwerke überlasten und schließlich zu deren Versagen führen.

### Fehlererkennung und -korrektur

Fehlererkennung und -korrektur sind Codes, die verwendet werden, um Fehler zu erkennen und Korrekturen anzuwenden, die auftreten, wenn Daten an den Empfänger übertragen werden. Es gibt zwei Arten von Fehlerkorrekturen: rückwärtsgerichtete und vorwärtsgerichtete Fehlerkorrektur. Bei der rückwärtsgerichteten Fehlerkorrektur fordert der Empfänger den Sender auf, die gesamte Dateneinheit erneut zu senden. Bei der vorwärtsgerichteten Fehlerkorrektur verwendet der Empfänger den Fehlerkorrekturcode, der die Fehler automatisch korrigiert.

Am Sender wird die Berechnung durchgeführt, bevor das Paket gesendet wird. Beim Empfang am Ziel wird die Prüfsumme erneut berechnet und mit der im Paket verglichen.

### Priorität

Dieses Feld gibt an, welches Paket eine höhere Priorität gegenüber anderen haben sollte. Die Warteschlange mit hoher Priorität wird schneller geleert als Warteschlangen mit niedrigerer Priorität, wenn das Netzwerk überlastet ist.

### Adressen

Beim Routing von Netzwerkpaketen sind zwei Netzwerkadressen erforderlich: die Quelladresse des sendenden Hosts und die Zieladresse des empfangenden Hosts.

### Benutzerdaten - Nutzlast

Die Nutzlast sind die Daten, die im Auftrag einer Anwendung übertragen werden. Sie ist in der Regel von variabler Länge, bis zu einem Maximum, das vom Netzwerkprotokoll und manchmal von der Ausrüstung auf dem Weg festgelegt wird.

## Verwendete Quellen

- [Network packet](https://en.wikipedia.org/wiki/Network_packet)
- [Hop (networking)](<https://en.wikipedia.org/wiki/Hop_(networking)>)
- [Wie Fehlererkennung und -korrektur funktioniert](https://www.techradar.com/news/computing/how-error-detection-and-correction-works-1080736)
