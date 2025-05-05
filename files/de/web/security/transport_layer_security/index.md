---
title: Transport Layer Security (TLS)
short-title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Die Sicherheit einer Verbindung, die Transport Layer Security (TLS) verwendet, hängt stark von den gewählten Chiffresuiten und Sicherheitsparametern ab. Ziel dieses Artikels ist es, Ihnen bei der Entscheidung zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec) Team [pflegt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Transport Layer Security (TLS) Protokoll ist der Standard, um zwei vernetzte Anwendungen oder Geräte zu befähigen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, die erheblichen Einfluss auf die Sicherheit und Zuverlässigkeit der Daten haben können. Dieser Artikel bietet einen Überblick über TLS und die Art von Entscheidungen, die Sie treffen müssen, um Ihre Inhalte zu sichern.

## Historie

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer Technologie, die von Netscape eingeführt wurde. Es wurde kurz darauf auf SSL 3.0 aktualisiert, und als die Nutzung zunahm, wurde klar, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie spezifiziert werden musste, um die Interoperabilität zwischen allen Webbrowsern und Servern sicherzustellen. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) spezifizierte TLS 1.0 in {{RFC(2246)}} im Januar 1999. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Obwohl das Web nun TLS zur Verschlüsselung verwendet, sprechen viele Menschen immer noch von "SSL" aus Gewohnheit.

Obwohl TLS auf jedem niedrigstufigen Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls die Verschlüsselung von HTTP-Verkehr. HTTP, das mit TLS verschlüsselt wird, wird allgemein als {{Glossary("HTTPS", "HTTPS")}} bezeichnet. TLS-verschlüsselter Webverkehr wird konventionell auf Port 443 standardmäßig ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiger Anwendungsfall für TLS.

## HTTP über TLS

TLS bietet drei Hauptdienste, die die Sicherheit der damit ausgetauschten Daten gewährleisten:

- Authentifizierung
  - : Die Authentifizierung ermöglicht es jeder Kommunikationspartei zu überprüfen, dass die andere Partei tatsächlich der ist, der sie vorgibt zu sein.
- Verschlüsselung
  - : Daten werden verschlüsselt, während sie zwischen dem Benutzeragenten und dem Server übertragen werden, um zu verhindern, dass sie von unbefugten Parteien gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass zwischen Verschlüsselung, Übertragung und Entschlüsselung der Daten keine Informationen verloren gehen, beschädigt, manipuliert oder gefälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der sich ein Client und ein Server auf ein gemeinsames Geheimnis einigen und wichtige Parameter, wie Chiffresuiten, verhandelt werden. Sobald die Parameter und ein Datenaustauschmodus vereinbart sind, bei dem Anwendungsdaten, wie HTTP, ausgetauscht werden.

### Chiffresuiten

Die primären Parameter, die der TLS-Handshake verhandelt, sind eine [Chiffresuite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 und älter umfasst die verhandelte Chiffresuite eine Reihe von kryptografischen Algorithmen, die zusammen die Verhandlung des gemeinsamen Geheimnisses, die Authentifizierung des Servers und die Methode zur Datenverschlüsselung ermöglichen.

In TLS 1.3 steuert die Chiffresuite hauptsächlich die Verschlüsselung der Daten, separate Verhandlungsverfahren werden für Schlüsselaustausch und Authentifizierung verwendet.

Verschiedene Software kann unterschiedliche Namen für dieselben Chiffresuiten verwenden. Zum Beispiel unterscheiden sich die in OpenSSL und GnuTLS verwendeten Namen von denen in den TLS-Standards. Die [Korrespondenztabelle der Chiffrenamen](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) im Artikel des Mozilla OpSec Teams zu TLS-Konfigurationen listet diese Namen sowie Informationen über Kompatibilität und Sicherheitsniveaus auf.

### Konfiguration Ihres Servers

Die korrekte Konfiguration Ihres Servers ist entscheidend. Im Allgemeinen sollten Sie versuchen, die Unterstützung von Chiffren auf die neuesten möglichen zu beschränken, die mit den Browsern kompatibel sind, die Sie mit Ihrer Seite verbinden möchten. Der [Mozilla OpSec Leitfaden zur TLS-Konfiguration](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen bei der Konfiguration Ihrer Seite zu helfen, stellt Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) zur Verfügung, der Konfigurationsdateien für die folgenden Webserver generiert:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Verwendung des [Konfigurators](https://ssl-config.mozilla.org/) wird empfohlen, um die Konfiguration zu erstellen, die Ihren Bedürfnissen entspricht; kopieren Sie diese dann in die entsprechende Datei auf Ihrem Server und starten Sie den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei muss möglicherweise einige Anpassungen enthalten, um benutzerdefinierte Einstellungen einzubeziehen, daher sollten Sie die generierte Konfiguration vor ihrer Verwendung überprüfen; das Installieren der Konfigurationsdatei ohne Sicherstellung der Korrektheit von Verweisen auf Domänennamen und Ähnliches führt dazu, dass der Server einfach nicht funktioniert.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine umfassende Überarbeitung von TLS. TLS 1.3 beinhaltet zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Entfernen nicht genutzter und unsicherer Features von TLS 1.2.
- Starke Sicherheitsanalyse im Design einbeziehen.
- Verbesserung der Privatsphäre durch Verschlüsselung eines größeren Teils des Protokolls.
- Reduzierung der Zeit, die für einen Handshake benötigt wird.

TLS 1.3 ändert viel von den Grundprinzipien des Protokolls, behält aber fast alle grundlegenden Fähigkeiten der vorherigen TLS-Versionen bei. Für das Web kann TLS 1.3 ohne Auswirkungen auf die Kompatibilität aktiviert werden, mit einigen seltenen Ausnahmen (siehe unten).

Die wesentlichen Änderungen in TLS 1.3 sind:

- Der TLS 1.3 Handshake wird in den meisten Fällen in einer Hin- und Rückrunde abgeschlossen, was die Handshake-Latenz reduziert.
- Ein Server kann einen 0-RTT (Zero Round Trip Time) Handshake aktivieren. Clients, die sich erneut mit dem Server verbinden, können sofort Anfragen senden, wodurch die Latenz des TLS-Handshakes vollständig entfällt. Obwohl die Leistungsgewinne durch 0-RTT erheblich sein können, besteht ein gewisses Risiko eines Replay-Angriffs, weshalb einige Vorsicht geboten ist, bevor diese Funktion aktiviert wird.
- TLS 1.3 unterstützt nur vorwärts-sichere Modi, es sei denn, die Verbindung wird wiederaufgenommen oder es wird ein vorkonfigurierter Schlüssel verwendet.
- TLS 1.3 definiert eine neue Reihe von Chiffresuiten, die exklusiv für TLS 1.3 sind. Diese Chiffresuiten verwenden alle moderne Authenticated Encryption with Associated Data (AEAD) Algorithmen.
- Der TLS 1.3 Handshake ist verschlüsselt, mit Ausnahme der Nachrichten, die notwendig sind, um ein gemeinsames Geheimnis zu etablieren. Dies bedeutet insbesondere, dass Server- und Client-Zertifikate verschlüsselt sind. Beachten Sie jedoch, dass die Serveridentität (die server_name oder SNI-Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen wurden deaktiviert: Neuaushandlung, generische Datenkompression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) Zertifikate, statische RSA Schlüsselverhandlungen und Schlüsselverhandlungen mit benutzerdefinierten Diffie–Hellman (DH) Gruppen.

Implementierungen von Entwurfsversionen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT Modus. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, um TLS 1.3 erfolgreich zu betreiben.

TLS 1.3 fügt nur einen signifikanten neuen Anwendungsfall hinzu. Der 0-RTT Handshake kann erhebliche Leistungsgewinne für latenzempfindliche Anwendungen wie das Web bieten. Die Aktivierung von 0-RTT erfordert zusätzliche Schritte, sowohl um eine erfolgreiche Bereitstellung zu gewährleisten als auch um die Risiken von Replay-Angriffen zu managen.

Das Entfernen der Neuaushandlung in TLS 1.3 könnte einige Webserver betreffen, die auf die Client-Authentifizierung per Zertifikat angewiesen sind. Einige Webserver verwenden Neuaushandlung, um entweder sicherzustellen, dass Client-Zertifikate verschlüsselt sind, oder um Client-Zertifikate nur dann anzufordern, wenn bestimmte Ressourcen angefragt werden. Zum Schutz der Client-Zertifikate stellt die Verschlüsselung des TLS 1.3 Handshakes sicher, dass Client-Zertifikate verschlüsselt sind; dies könnte jedoch einige Softwareänderungen erfordern. Reaktive Client-Authentifizierung mithilfe von Zertifikaten wird von TLS 1.3 unterstützt, ist jedoch nicht weit verbreitet implementiert. Alternative Mechanismen sind in der Entwicklung, die auch HTTP/2 unterstützen werden.

## Abschied von alten TLS-Versionen

Um zu einer moderneren und sichereren Weblandschaft beizutragen, begannen alle großen Browser Anfang 2020 damit, die Unterstützung für TLS 1.0 und 1.1 zu entfernen. Sie müssen sicherstellen, dass Ihr Webserver in Zukunft TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 zeigt Firefox einen [Fehler bei einer sicheren Verbindung](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) an, wenn Verbindung mit Servern, die ältere TLS-Versionen verwenden, hergestellt werden sollen ([Firefox Fehler 1606734](https://bugzil.la/1606734)).

## TLS-Handshake-Timeout-Werte

Wenn der TLS-Handshake aus irgendeinem Grund langsam oder unempfänglich wird, kann dies die Benutzererfahrung erheblich beeinträchtigen. Um dieses Problem zu mildern, haben moderne Browser Handshake-Timeouts implementiert:

- Seit Version 58 implementiert Firefox einen TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten der `network.http.tls-handshake-timeout` Einstellung in about:config variiert werden.

## Siehe auch

- Der [Mozilla SSL Konfigurationsgenerator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen bei der Erstellung von Konfigurationsdateien für Ihren Server helfen, um Ihre Seite zu sichern.
- Das Mozilla Operations Security (OpSec) Team pflegt eine Wiki-Seite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Verwenden Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Seite ist.
- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
