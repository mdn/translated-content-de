---
title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Sicherheit jeder Verbindung, die Transport Layer Security (TLS) verwendet, hängt stark von den gewählten Cipher-Suiten und Sicherheitsparametern ab. Ziel dieses Artikels ist es, Ihnen bei diesen Entscheidungen zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec) Team [pflegt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Transport Layer Security (TLS) Protokoll ist der Standard, um es zwei vernetzten Anwendungen oder Geräten zu ermöglichen, privat und robust Informationen auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann. Dieser Artikel bietet einen Überblick über TLS und die Arten von Entscheidungen, die Sie treffen müssen, um Ihre Inhalte zu sichern.

## Geschichte

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer von Netscape eingeführten Technologie. Kurz darauf wurde es auf SSL 3.0 aktualisiert, und als seine Nutzung zunahm, wurde klar, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie spezifiziert werden musste, um die Interoperabilität zwischen allen Webbrowsern und Servern zu gewährleisten. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) legte TLS 1.0 in {{RFC(2246)}} im Januar 1999 fest. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Obwohl das Web jetzt TLS zur Verschlüsselung verwendet, sprechen viele Menschen aus Gewohnheit immer noch von "SSL".

Obwohl TLS über jedem niedrigstufigen Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls, HTTP-Verkehr zu verschlüsseln. HTTP, das mit TLS verschlüsselt ist, wird üblicherweise als {{Glossary("HTTPS", "HTTPS")}} bezeichnet. TLS-verschlüsselter Webverkehr wird standardmäßig konventionell auf Port 443 ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiger Anwendungsfall für TLS.

## HTTP über TLS

TLS bietet drei Hauptdienste, die dazu beitragen, die Sicherheit und den Schutz der mit ihm ausgetauschten Daten zu gewährleisten:

- Authentifizierung
  - : Authentifizierung ermöglicht es jeder Partei der Kommunikation zu überprüfen, dass die andere Partei wirklich diejenige ist, als die sie sich ausgibt.
- Verschlüsselung
  - : Daten werden verschlüsselt, während sie zwischen dem Benutzeragenten und dem Server übertragen werden, um zu verhindern, dass sie von unbefugten Parteien gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass zwischen dem Verschlüsseln, Übertragen und Entschlüsseln der Daten keine Informationen verloren gehen, beschädigt, manipuliert oder verfälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der sich ein Client und ein Server auf ein gemeinsames Geheimnis einigen und wichtige Parameter, wie Cipher-Suiten, ausgehandelt werden. Sobald Parameter und ein Datenaustauschmodus vereinbart sind, bei dem Anwendungsdaten wie HTTP ausgetauscht werden.

### Cipher-Suiten

Die Hauptparameter, die der TLS-Handshake aushandelt, sind eine [Cipher-Suite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 und früher umfasst die ausgehandelte Cipher-Suite eine Reihe kryptographischer Algorithmen, die zusammen die Aushandlung des gemeinsamen Geheimnisses, die Methode zur Authentifizierung des Servers und die Methode zur Verschlüsselung von Daten bereitstellen.

Die Cipher-Suite in TLS 1.3 regelt hauptsächlich die Verschlüsselung von Daten, separate Aushandlungsmethoden werden für die Schlüsselvereinbarung und Authentifizierung verwendet.

Verschiedene Software kann unterschiedliche Namen für dieselben Cipher-Suiten verwenden. Beispielsweise unterscheiden sich die in OpenSSL und GnuTLS verwendeten Namen von denen in den TLS-Standards. In dem Artikel des Mozilla OpSec-Teams zu TLS-Konfigurationen finden Sie in der [Cipher Names Correspondence Table](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) diese Namen sowie Informationen zur Kompatibilität und Sicherheitsstufen.

### Konfiguration Ihres Servers

Die richtige Konfiguration Ihres Servers ist entscheidend. Im Allgemeinen sollten Sie versuchen, die Ciphers auf die neuestmöglichen Ciphers zu beschränken, die mit den Browsern kompatibel sind, die Sie mit Ihrer Website verbinden möchten. Der [Mozilla OpSec Leitfaden zu TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen bei der Konfiguration Ihrer Website zu helfen, bietet Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) an, der Konfigurationsdateien für die folgenden Webserver generieren kann:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Verwendung des [Konfigurators](https://ssl-config.mozilla.org/) ist eine empfohlene Möglichkeit, die Konfiguration zu erstellen, die Ihren Anforderungen entspricht; dann kopieren Sie sie und fügen sie in die entsprechende Datei auf Ihrem Server ein und starten den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei muss möglicherweise angepasst werden, um benutzerdefinierte Einstellungen einzuschließen, daher sollten Sie die generierte Konfiguration vor der Verwendung überprüfen; das Installieren der Konfigurationsdatei ohne Sicherstellung, dass alle Verweise auf Domainnamen und dergleichen korrekt sind, führt zu einem Server, der nicht funktioniert.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine bedeutende Überarbeitung von TLS. TLS 1.3 umfasst zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Entfernen ungenutzter und unsicherer Funktionen von TLS 1.2.
- Einschließen einer starken Sicherheitsanalyse in das Design.
- Verbesserung der Privatsphäre durch Verschlüsselung eines größeren Teils des Protokolls.
- Reduzierung der Zeit, die benötigt wird, um einen Handshake abzuschließen.

TLS 1.3 ändert viele der grundlegenden Protokollfundamente, behält jedoch fast alle grundlegenden Fähigkeiten früherer TLS-Versionen bei. Für das Web kann TLS 1.3 aktiviert werden, ohne die Kompatibilität zu beeinträchtigen, mit einigen seltenen Ausnahmen (siehe unten).

Die wesentlichen Änderungen in TLS 1.3 sind:

- Der TLS 1.3 Handshake wird in den meisten Fällen in einer einzigen Rundreise abgeschlossen, was die Handshake-Latenz verringert.
- Ein Server kann einen 0-RTT (Zero Round Trip Time) Handshake aktivieren. Clients, die sich erneut mit dem Server verbinden, können sofort Anfragen senden und so die Latenz des TLS Handshakes vollständig eliminieren. Obwohl die Leistungsgewinne durch 0-RTT erheblich sein können, besteht ein gewisses Risiko für Replay-Angriffe, sodass einige Vorsichtsmaßnahmen erforderlich sind, bevor diese Funktion aktiviert wird.
- TLS 1.3 unterstützt nur vorwärts-sichere Modi, es sei denn, die Verbindung wird wieder aufgenommen oder es wird ein vorab gemeinsam genutzter Schlüssel verwendet.
- TLS 1.3 definiert eine neue Reihe von Cipher-Suiten, die ausschließlich für TLS 1.3 verwendet werden. Diese Cipher-Suiten verwenden alle moderne Authenticated Encryption with Associated Data (AEAD) Algorithmen.
- Der TLS 1.3 Handshake ist verschlüsselt, mit Ausnahme der Nachrichten, die zur Erstellung eines gemeinsamen Geheimnisses erforderlich sind. Insbesondere bedeutet dies, dass Server- und Client-Zertifikate verschlüsselt sind. Beachten Sie jedoch, dass die Server-Identität (die server_name oder SNI Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen wurden deaktiviert: Neuaushandlung, generische Datenkompression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) Zertifikate, statischer RSA-Schlüsselaustausch und Schlüsselaustausch mit benutzerdefinierten Diffie-Hellman (DH) Gruppen.

Implementierungen von Entwurfsfassungen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT Modus. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, damit TLS 1.3 erfolgreich arbeiten kann.

TLS 1.3 fügt nur einen signifikant neuen Anwendungsfall hinzu. Der 0-RTT Handshake kann erhebliche Leistungsgewinne für latenzempfindliche Anwendungen, wie das Web, bieten. Die Aktivierung von 0-RTT erfordert zusätzliche Schritte, sowohl um eine erfolgreiche Bereitstellung sicherzustellen als auch um die Risiken von Replay-Angriffen zu verwalten.

Das Entfernen der Neuaushandlung in TLS 1.3 könnte einige Webserver betreffen, die auf die Client-Authentifizierung mit Zertifikaten angewiesen sind. Einige Webserver verwenden die Neuaushandlung, um entweder sicherzustellen, dass Client-Zertifikate verschlüsselt sind, oder um Client-Zertifikate nur dann anzufordern, wenn bestimmte Ressourcen angefordert werden. Für den Datenschutz von Client-Zertifikaten stellt die Verschlüsselung des TLS 1.3 Handshakes sicher, dass Client-Zertifikate verschlüsselt sind; dies könnte jedoch einige Softwareänderungen erfordern. Reaktive Client-Authentifizierung mit Zertifikaten wird von TLS 1.3 unterstützt, aber nicht weitgehend implementiert. Alternative Mechanismen befinden sich in der Entwicklung, die ebenfalls HTTP/2 unterstützen werden.

## Außerdienststellung alter TLS-Versionen

Um auf dem Weg zu einem moderneren, sichereren Web zu helfen, begannen alle großen Browser Anfang 2020 die Unterstützung für TLS 1.0 und 1.1 zu entfernen. Sie müssen sicherstellen, dass Ihr Webserver in Zukunft TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 wird Firefox einen [Sichere Verbindung fehlgeschlagen](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehler zurückgeben, wenn er sich mit Servern verbindet, die die älteren TLS-Versionen verwenden ([Firefox Bug 1606734](https://bugzil.la/1606734)).

## TLS Handshake-Timeout-Werte

Wenn der TLS Handshake aus irgendeinem Grund langsam oder nicht reagierend wird, kann dies die Benutzererfahrung erheblich beeinträchtigen. Um dieses Problem zu mildern, haben moderne Browser Handshake-Timeouts implementiert:

- Seit Version 58 implementiert Firefox ein TLS Handshake Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten der Präferenz `network.http.tls-handshake-timeout` in about:config geändert werden.

## Siehe auch

- Der [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen helfen, Konfigurationsdateien für Ihren Server zu erstellen, um Ihre Website zu sichern.
- Das Mozilla Operations Security (OpSec) Team pflegt eine Wiki-Seite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Verwenden Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Website ist.
- [Secure Contexts](/de/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
