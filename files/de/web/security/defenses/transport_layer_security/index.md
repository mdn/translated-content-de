---
title: Transport Layer Security (TLS)
short-title: Transport Layer Security
slug: Web/Security/Defenses/Transport_Layer_Security
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Die Sicherheit jeder Verbindung, die Transport Layer Security (TLS) verwendet, hängt stark von den ausgewählten Verschlüsselungssuiten und Sicherheitsparametern ab. Ziel dieses Artikels ist es, Ihnen bei diesen Entscheidungen zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec) Team [pflegt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Transport Layer Security (TLS)-Protokoll ist der Standard, um es zwei vernetzten Anwendungen oder Geräten zu ermöglichen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter auswählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann. Dieser Artikel bietet einen Überblick über TLS und die Art von Entscheidungen, die Sie treffen müssen, um Ihre Inhalte abzusichern.

## Geschichte

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer von Netscape eingeführten Technologie. Es wurde kurz darauf auf SSL 3.0 aktualisiert, und als seine Nutzung zunahm, wurde klar, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie spezifiziert werden musste, um die Interoperabilität zwischen allen Webbrowsern und Servern sicherzustellen. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) spezifizierte TLS 1.0 in {{RFC(2246)}} im Januar 1999. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Obwohl das Web jetzt TLS zur Verschlüsselung verwendet, sprechen viele Menschen immer noch aus Gewohnheit von "SSL".

Obwohl TLS über jedem Low-Level-Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls, HTTP-Verkehr zu verschlüsseln. HTTP, das mit TLS verschlüsselt ist, wird allgemein als {{Glossary("HTTPS", "HTTPS")}} bezeichnet. TLS-verschlüsselter Webverkehr wird konventionell standardmäßig über Port 443 ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiger Anwendungsfall für TLS.

## HTTP über TLS

TLS bietet drei Hauptdienste, die dazu beitragen, die Sicherheit und Schutz der damit ausgetauschten Daten sicherzustellen:

- Authentifizierung
  - : Authentifizierung ermöglicht es jeder Partei in der Kommunikation zu überprüfen, dass die andere Partei tatsächlich diejenige ist, die sie vorgibt zu sein.
- Verschlüsselung
  - : Daten werden verschlüsselt, während sie zwischen dem Benutzeragenten und dem Server übertragen werden, um zu verhindern, dass sie von unbefugten Dritten gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass zwischen der Verschlüsselung, Übertragung und Entschlüsselung der Daten keine Informationen verloren gehen, beschädigt, manipuliert oder gefälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der ein Client und ein Server ein gemeinsames Geheimnis vereinbaren und wichtige Parameter, wie Verschlüsselungssuiten, ausgehandelt werden. Sobald die Parameter festgelegt sind, wird ein Datenübertragungsmodus vereinbart, bei dem Anwendungsdaten wie HTTP ausgetauscht werden.

### Verschlüsselungssuiten

Die primären Parameter, die beim TLS-Handshake ausgehandelt werden, sind eine [Verschlüsselungssuite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 und früher beinhaltet die ausgehandelte Verschlüsselungssuite eine Reihe von kryptografischen Algorithmen, die zusammen die Aushandlung des gemeinsamen Geheimnisses, die Methode zur Authentifizierung des Servers und die Methode zur Verschlüsselung von Daten bereitstellen.

Die Verschlüsselungssuite in TLS 1.3 regelt in erster Linie die Verschlüsselung von Daten; separate Aushandlungsmethoden werden für die Vereinbarung des Schlüssels und die Authentifizierung verwendet.

Unterschiedliche Software verwendet möglicherweise unterschiedliche Namen für dieselben Verschlüsselungssuiten. Zum Beispiel unterscheiden sich die in OpenSSL und GnuTLS verwendeten Namen von denen in den TLS-Standards. Die [Tabelle zur Entsprechung von Verschlüsselungsnamen](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) im Artikel des Mozilla OpSec-Teams zu TLS-Konfigurationen listet diese Namen sowie Informationen zu Kompatibilität und Sicherheitsstufen auf.

### Konfiguration Ihres Servers

Die richtige Konfiguration Ihres Servers ist entscheidend. Im Allgemeinen sollten Sie versuchen, die Unterstützung für Verschlüsselungen auf die neuesten kompatiblen Verschlüsselungen zu begrenzen, die mit den Browsern, die Sie mit Ihrer Website verbinden können möchten, kompatibel sind. Der [Mozilla OpSec-Leitfaden zu TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen beim Konfigurieren Ihrer Website zu helfen, bietet Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) an, der Konfigurationsdateien für die folgenden Webserver generiert:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Verwendung des [Konfigurators](https://ssl-config.mozilla.org/) ist eine empfohlene Methode, um die Konfiguration zu erstellen, die Ihren Anforderungen entspricht. Kopieren Sie dann die generierte Konfiguration in die entsprechende Datei auf Ihrem Server und starten Sie den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei muss möglicherweise angepasst werden, um benutzerdefinierte Einstellungen einzuschließen. Überprüfen Sie also die generierte Konfiguration, bevor Sie sie verwenden. Installieren der Konfigurationsdatei ohne Überprüfung, ob alle Verweise auf Domainnamen und ähnliches korrekt sind, führt zu einem Server, der einfach nicht funktioniert.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine bedeutende Überarbeitung von TLS. TLS 1.3 beinhaltet zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Entfernen ungenutzter und unsicherer Funktionen von TLS 1.2.
- Einbeziehen einer starken Sicherheitsanalyse im Design.
- Verbesserung der Privatsphäre durch Verschlüsselung eines größeren Teils des Protokolls.
- Reduzierung der Zeit, die benötigt wird, um einen Handshake abzuschließen.

TLS 1.3 verändert viele grundlegende Aspekte des Protokolls, bewahrt dabei jedoch fast alle Grundfähigkeiten früherer TLS-Versionen. Für das Web kann TLS 1.3 aktiviert werden, ohne die Kompatibilität zu beeinträchtigen, mit einigen seltenen Ausnahmen (siehe unten).

Die wesentlichen Änderungen in TLS 1.3 sind:

- Der TLS 1.3-Handshake wird in den meisten Fällen in einer Runde abgeschlossen, wodurch die Latenz des Handshakes reduziert wird.
- Ein Server kann einen 0-RTT-Handshake (zero round trip time) aktivieren. Clients, die sich erneut mit dem Server verbinden, können sofort Anfragen senden und eliminieren die Latenz des TLS-Handshakes vollständig. Obwohl die Leistungsgewinne von 0-RTT erheblich sein können, besteht ein gewisses Risiko eines Wiedergabeangriffs, daher ist vor der Aktivierung dieser Funktion Vorsicht geboten.
- TLS 1.3 unterstützt nur vorwärts-sichere Modi, es sei denn, die Verbindung wird wieder aufgenommen oder verwendet einen vorher gemeinsam genutzten Schlüssel.
- TLS 1.3 definiert eine neue Gruppe von Verschlüsselungssuiten, die ausschließlich für TLS 1.3 sind. Diese Verschlüsselungssuiten verwenden alle moderne Authenticated Encryption with Associated Data (AEAD) Algorithmen.
- Der TLS 1.3-Handshake ist verschlüsselt, mit Ausnahme der Nachrichten, die notwendig sind, um ein gemeinsames Geheimnis zu erstellen. Insbesondere bedeutet dies, dass Server- und Client-Zertifikate verschlüsselt werden. Beachten Sie jedoch, dass die Serveridentität (die server_name oder SNI-Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen wurden deaktiviert: Neuverhandlung, generische Datenkompression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA)-Zertifikate, statische RSA-Schlüsselaustausch und Schlüsselaustausch mit benutzerdefinierten Diffie–Hellman (DH)-Gruppen.

Implementierungen der Entwurfsversionen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT-Modus. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, um TLS 1.3 erfolgreich zu betreiben.

TLS 1.3 fügt nur einen signifikant neuen Anwendungsfall hinzu. Der 0-RTT-Handshake kann erhebliche Leistungsgewinne für latenzempfindliche Anwendungen wie das Web bieten. Die Aktivierung von 0-RTT erfordert zusätzliche Schritte, sowohl um eine erfolgreiche Bereitstellung sicherzustellen als auch um die Risiken von Wiedergabeangriffen zu verwalten.

Die Entfernung der Neuverhandlung in TLS 1.3 könnte einige Webserver betreffen, die auf Client-Authentifizierung mit Zertifikaten angewiesen sind. Einige Webserver verwenden die Neuverhandlung, um sicherzustellen, dass Client-Zertifikate verschlüsselt sind oder um Client-Zertifikate nur anzufordern, wenn bestimmte Ressourcen angefordert werden. Für die Privatsphäre der Client-Zertifikate stellt die Verschlüsselung des TLS 1.3-Handshakes sicher, dass Client-Zertifikate verschlüsselt sind; dies könnte jedoch einige Softwareanpassungen erfordern. Reaktive Client-Authentifizierung mittels Zertifikaten wird von TLS 1.3 unterstützt, ist jedoch nicht weit verbreitet implementiert. Alternative Mechanismen sind in der Entwicklung, die auch HTTP/2 unterstützen werden.

## Ältere TLS-Versionen einstellen

Um auf einen moderneren, sichereren Webstandard hinzuarbeiten, begannen alle großen Browser Anfang 2020 damit, die Unterstützung für TLS 1.0 und 1.1 zu entfernen. Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 wird Firefox beim Verbinden mit Servern, die die älteren TLS-Versionen verwenden, einen [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehler zurückgeben ([Firefox Bug 1606734](https://bugzil.la/1606734)).

## TLS-Handshake-Timeout-Werte

Wenn der TLS-Handshake aus irgendeinem Grund langsam oder nicht reagierend wird, kann dies die Benutzererfahrung erheblich beeinträchtigen. Um dieses Problem zu mildern, haben moderne Browser Handshake-Timeouts implementiert:

- Seit Version 58 implementiert Firefox ein TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten der `network.http.tls-handshake-timeout` Einstellung in about:config variiert werden.

## Siehe auch

- Der [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen helfen, Konfigurationsdateien für Ihren Server zu erstellen, um Ihre Website zu sichern.
- Das Mozilla Operations Security (OpSec) Team pflegt eine Wiki-Seite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Verwenden Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Website ist.
- [Sichere Kontexte](/de/docs/Web/Security/Defenses/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
