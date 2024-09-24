---
title: Paket
slug: Glossary/Packet
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein Paket, oder Netzpaket, ist ein formatiertes Datenstück, das über ein Netzwerk gesendet wird. Die Hauptbestandteile eines Netzwerkpakets sind die Benutzerdaten und die Steuerinformationen. Die Benutzerdaten sind als _Nutzlast_ bekannt. Die Steuerinformationen sind die Informationen zur Übertragung der Nutzlast. Sie bestehen aus den Netzwerkadressen für die Quelle und das Ziel, Sequenzierungsinformationen und Fehlererkennungscodes und sind normalerweise in den Kopf- und Fußzeilen des Pakets zu finden.

## Was ein Paket enthält

### Hop-Limit

Ein Hop tritt auf, wenn ein Paket von einem Netzwerk an das nächste Netzwerk weitergeleitet wird. Es ist ein Feld, das sich bei jedem Durchlaufen eines Pakets um eins verringert; sobald das Hop-Limit 0 erreicht, ist die Sendeoperation fehlgeschlagen und das Paket wird verworfen.

Mit der Zeit kann die Anzahl der Pakete, die in geschlossenen Schaltungen zirkulieren, ansteigen und letztendlich dazu führen, dass das Netzwerk ausfällt.

### Fehlererkennung und -korrektur

Fehlererkennung und -korrektur sind Codes, die verwendet werden, um Fehler zu erkennen und Korrekturen auf Fehler anzuwenden, die auftreten, wenn Daten an den Empfänger übertragen werden. Es gibt zwei Arten von Fehlerkorrekturen: Rückwärts- und Vorwärtsfehlerkorrektur. Rückwärtsfehlerkorrektur bedeutet, dass der Empfänger den Sender auffordert, die gesamte Dateneinheit erneut zu senden. Vorwärtsfehlerkorrektur bedeutet, dass der Empfänger den Fehlerkorrekturcode verwendet, der die Fehler automatisch korrigiert.

Beim Sender erfolgt die Berechnung, bevor das Paket gesendet wird. Wenn es beim Ziel empfangen wird, wird die Prüfsumme neu berechnet und mit der im Paket verglichen.

### Priorität

Dieses Feld zeigt an, welches Paket Vorrang vor den anderen haben sollte. Die Warteschlange mit hoher Priorität wird schneller geleert als Warteschlangen mit niedrigerer Priorität, wenn das Netzwerk ausgelastet ist.

### Adressen

Beim Routing von Netzpaketen werden zwei Netzwerkadressen benötigt: die Quelladresse des sendenden Hosts und die Zieladresse des empfangenden Hosts.

### Benutzerdaten - Nutzlast

Nutzlast sind die Daten, die im Auftrag einer Anwendung übertragen werden. Sie ist normalerweise variabel lang, bis zu einem Maximum, das durch das Netzwerkprotokoll und manchmal durch die Geräte auf der Route festgelegt ist.

## Verwendete Referenzen

- [Network packet](https://en.wikipedia.org/wiki/Network_packet)
- [Hop (networking)](<https://en.wikipedia.org/wiki/Hop_(networking)>)
- [How error detection and correction works](https://www.techradar.com/news/computing/how-error-detection-and-correction-works-1080736)
