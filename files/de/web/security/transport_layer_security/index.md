---
title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Sicherheit jeder Verbindung, die Transport Layer Security (TLS) verwendet, hängt stark von den ausgewählten Verschlüsselungssuiten und Sicherheitsparametern ab. Ziel dieses Artikels ist es, Ihnen bei diesen Entscheidungen zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec)-Team [führt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Transport Layer Security (TLS)-Protokoll ist der Standard, um es zwei Netzwerk-Anwendungen oder Geräten zu ermöglichen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit von Daten haben kann. Dieser Artikel bietet einen Überblick über TLS und die Art von Entscheidungen, die Sie treffen müssen, um Ihre Inhalte zu sichern.

## Geschichte

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer von Netscape eingeführten Technologie. Es wurde kurz darauf auf SSL 3.0 aktualisiert, und als seine Nutzung zunahm, wurde klar, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie spezifiziert werden musste, um die Interoperabilität zwischen allen Webbrowsern und Servern zu gewährleisten. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) spezifizierte TLS 1.0 in {{RFC(2246)}} im Januar 1999. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Trotz der Tatsache, dass das Web nun TLS zur Verschlüsselung verwendet, sprechen viele Menschen immer noch aus Gewohnheit von "SSL".

Obwohl TLS über jedem niedrigstufigen Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls, HTTP-Verkehr zu verschlüsseln. HTTP, das unter Verwendung von TLS verschlüsselt ist, wird üblicherweise als {{Glossary("HTTPS", "HTTPS")}} bezeichnet. TLS-verschlüsselter Webverkehr wird per Konvention standardmäßig auf Port 443 ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiger Anwendungsfall für TLS.

## HTTP über TLS

TLS bietet drei primäre Dienste, die helfen, die Sicherheit der damit ausgetauschten Daten zu gewährleisten:

- Authentifikation
  - : Die Authentifizierung ermöglicht es jeder Kommunikationspartei zu verifizieren, dass die andere Partei diejenige ist, die sie vorgibt zu sein.
- Verschlüsselung
  - : Daten werden verschlüsselt, während sie zwischen dem Benutzeragenten und dem Server übertragen werden, um zu verhindern, dass sie von unbefugten Parteien gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass beim Verschlüsseln, Übertragen und Entschlüsseln der Daten keine Informationen verloren gehen, beschädigt, manipuliert oder gefälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der ein Client und ein Server ein gemeinsames Geheimnis vereinbaren und wichtige Parameter, wie Verschlüsselungssuiten, ausgehandelt werden. Einmal verhandelt, erfolgt ein Datenaustauschmodus, in dem Anwendungsdaten wie HTTP ausgetauscht werden.

### Verschlüsselungssuiten

Die primären Parameter, die beim TLS-Handshake ausgehandelt werden, sind eine [cipher suite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 und früher umfasst die ausgehandelte Verschlüsselungssuite eine Reihe kryptografischer Algorithmen, die zusammen die Aushandlung des gemeinsamen Geheimnisses bereitstellen, das Mittel, mit dem ein Server authentifiziert wird, und die Methode, die zur Verschlüsselung von Daten verwendet wird.

Die Verschlüsselungssuite in TLS 1.3 regelt hauptsächlich die Verschlüsselung von Daten, separate Aushandlungsmethoden werden für die Schlüsselaustausch und Authentifikation verwendet.

Verschiedene Software kann unterschiedliche Namen für dieselben Verschlüsselungssuiten verwenden. Beispielsweise unterscheiden sich die in OpenSSL und GnuTLS verwendeten Namen von denen in den TLS-Standards. Die [Tabelle zur Namenentsprechung der Verschlüsselungen](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) im Artikel über TLS-Konfigurationen des Mozilla OpSec-Teams listet diese Namen sowie Informationen über Kompatibilität und Sicherheitsstufen auf.

### Konfiguration Ihres Servers

Die korrekte Konfiguration Ihres Servers ist entscheidend. Im Allgemeinen sollten Sie versuchen, die Unterstützung für Verschlüsselungen auf die neuesten, mit den Browsern, die Sie mit Ihrer Website verbinden möchten, kompatiblen, zu beschränken. Der [Mozilla OpSec-Leitfaden zur TLS-Konfiguration](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen bei der Konfiguration Ihrer Website zu helfen, stellt Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) zur Verfügung, der Konfigurationsdateien für die folgenden Webserver generiert:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Verwendung des [Konfigurators](https://ssl-config.mozilla.org/) wird empfohlen, um die Konfiguration entsprechend Ihren Anforderungen zu erstellen; kopieren Sie diese dann in die entsprechende Datei auf Ihrem Server und starten Sie den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei muss möglicherweise angepasst werden, um benutzerdefinierte Einstellungen einzuschließen. Stellen Sie daher sicher, dass Sie die generierte Konfiguration vor der Verwendung überprüfen; das Installieren der Konfigurationsdatei ohne Sicherstellung, dass alle Referenzen auf Domainnamen und Ähnliches korrekt sind, führt zu einem nicht funktionierenden Server.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine umfangreiche Revision von TLS. TLS 1.3 enthält zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Entfernen von ungenutzten und unsicheren Funktionen von TLS 1.2.
- Einbeziehen einer starken Sicherheitsanalyse in das Design.
- Verbesserung der Privatsphäre durch Verschlüsselung eines größeren Teils des Protokolls.
- Reduzierung der Zeit, die erforderlich ist, um einen Handshake abzuschließen.

TLS 1.3 verändert viele der grundlegenden Protokollelemente, bewahrt jedoch fast alle grundlegenden Fähigkeiten der vorherigen TLS-Versionen. Für das Web kann TLS 1.3 aktiviert werden, ohne die Kompatibilität mit einigen seltenen Ausnahmen zu beeinträchtigen (siehe unten).

Die wichtigsten Änderungen in TLS 1.3 sind:

- Der TLS 1.3-Handshake wird in den meisten Fällen in einer einzigen Runde abgeschlossen, was die Handshake-Latenz reduziert.
- Ein Server kann einen 0-RTT (zero round trip time) Handshake aktivieren. Clients, die sich erneut mit dem Server verbinden, können sofort Anfragen senden, wodurch die Latenz des TLS-Handshakes vollständig eliminiert wird. Obwohl die Leistungsgewinne durch 0-RTT erheblich sein können, besteht ein gewisses Risiko von Wiederholungsangriffen, daher sollte diese Funktion mit Vorsicht aktiviert werden.
- TLS 1.3 unterstützt nur vorwärts sichere Modi, es sei denn, die Verbindung wird fortgesetzt oder es wird ein vorgelagerter Schlüssel verwendet.
- TLS 1.3 definiert eine neue Reihe von Verschlüsselungssuiten, die exklusiv für TLS 1.3 sind. Diese Verschlüsselungssuiten verwenden alle moderne Authenticated Encryption with Associated Data (AEAD) Algorithmen.
- Der TLS 1.3-Handshake ist verschlüsselt, mit Ausnahme der Nachrichten, die zur Etablierung eines gemeinsamen Geheimnisses erforderlich sind. Insbesondere bedeutet dies, dass Server- und Client-Zertifikate verschlüsselt sind. Beachten Sie jedoch, dass die Server-Identität (die server_name oder SNI-Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen wurden deaktiviert: Neuverhandlung, generische Datenkompression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) Zertifikate, statischer RSA-Schlüsselaustausch und Schlüsselaustausch mit benutzerdefinierten Diffie-Hellman (DH) Gruppen.

Implementierungen von Entwurfsversionen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT-Modus. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, um TLS 1.3 erfolgreich zu betreiben.

TLS 1.3 fügt nur einen bedeutenden neuen Anwendungsfall hinzu. Der 0-RTT-Handshake kann signifikante Leistungsgewinne für latenzempfindliche Anwendungen, wie das Web, bieten. Das Aktivieren von 0-RTT erfordert zusätzliche Schritte, sowohl um eine erfolgreiche Implementierung sicherzustellen als auch um die Risiken von Wiederholungsangriffen zu verwalten.

Die Entfernung der Neuverhandlung in TLS 1.3 könnte einige Webserver betreffen, die sich auf die Client-Authentifizierung mit Zertifikaten verlassen. Einige Webserver verwenden Neuverhandlungen, um entweder sicherzustellen, dass Client-Zertifikate verschlüsselt sind oder um Client-Zertifikate nur dann anzufordern, wenn bestimmte Ressourcen angefordert werden. Aus Gründen der Privatsphäre von Client-Zertifikaten stellt die Verschlüsselung des TLS 1.3-Handshakes sicher, dass Client-Zertifikate verschlüsselt sind; dies könnte jedoch einige Softwareänderungen erfordern. Reaktive Client-Authentifizierung mit Zertifikaten wird von TLS 1.3 unterstützt, ist jedoch nicht weit verbreitet implementiert. Alternative Mechanismen befinden sich in der Entwicklung, die auch HTTP/2 unterstützen werden.

## Veraltete TLS-Versionen ausmustern

Um einen moderneren, sichereren Webstandard zu fördern, haben alle großen Browser Anfang 2020 begonnen, die Unterstützung für TLS 1.0 und 1.1 zu entfernen. Sie müssen sicherstellen, dass Ihr Webserver in Zukunft TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 gibt Firefox eine [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehlermeldung aus, wenn es sich mit Servern mit den älteren TLS-Versionen verbindet ([Firefox-Bug 1606734](https://bugzil.la/1606734)).

## TLS-Handshake-Zeitüberschreitungswerte

Wenn der TLS-Handshake aus irgendeinem Grund langsam oder nicht reagiert, kann dies die Benutzererfahrung erheblich beeinträchtigen. Um dieses Problem zu mindern, haben moderne Browser Handshake-Timeouts implementiert:

- Seit Version 58 implementiert Firefox einen TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten der `network.http.tls-handshake-timeout` Voreinstellung in about:config variiert werden.

## Siehe auch

- Der [Mozilla SSL-Konfigurationsgenerator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen helfen, Konfigurationsdateien für Ihren Server zu erstellen, um Ihre Website zu sichern.
- Das Mozilla Operations Security (OpSec)-Team pflegt eine Wiki-Seite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Verwenden Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Website ist.
- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
