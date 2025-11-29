---
title: Transport Layer Security (TLS)
short-title: Transport Layer Security
slug: Web/Security/Defenses/Transport_Layer_Security
l10n:
  sourceCommit: 39070892d5d1a5cc55312a0ac10c97f4c339384f
---

Die Sicherheit jeder Verbindung, die Transport Layer Security (TLS) verwendet, hängt stark von den ausgewählten Chiffre-Suiten und Sicherheitsparametern ab. Das Ziel dieses Artikels ist es, Ihnen bei diesen Entscheidungen zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec) Team [führt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Transport Layer Security (TLS) Protokoll ist der Standard, um den Austausch von Informationen zwischen zwei vernetzten Anwendungen oder Geräten privat und robust zu ermöglichen. Anwendungen, die TLS nutzen, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann. Dieser Artikel bietet einen Überblick über TLS und die Entscheidungen, die Sie bei der Sicherung Ihres Inhalts treffen müssen.

## Geschichte

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer von Netscape eingeführten Technologie. Es wurde kurz danach auf SSL 3.0 aktualisiert, und als seine Nutzung zunahm, wurde klar, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie nötig war, um die Interoperabilität zwischen allen Webbrowsern und Servern sicherzustellen. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) spezifizierte TLS 1.0 in {{RFC(2246)}} im Januar 1999. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Obwohl das Web nun TLS zur Verschlüsselung verwendet, wird es aus Gewohnheit oft noch als "SSL" bezeichnet.

Obwohl TLS über jedem Low-Level Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls, HTTP-Verkehr zu verschlüsseln. Mithilfe von TLS verschlüsseltes HTTP wird gemeinhin als {{Glossary("HTTPS", "HTTPS")}} bezeichnet. TLS-verschlüsselter Webverkehr wird konventionell standardmäßig über Port 443 ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiger Anwendungsfall für TLS.

## HTTP über TLS

TLS bietet drei primäre Dienste, die helfen, die Sicherheit der mit ihm ausgetauschten Daten zu gewährleisten:

- Authentifizierung
  - : Die Authentifizierung ermöglicht es jeder Partei der Kommunikation, zu verifizieren, dass die andere Partei diejenige ist, die sie vorgibt zu sein.
- Verschlüsselung
  - : Daten werden verschlüsselt, während sie zwischen dem Benutzeragenten und dem Server übertragen werden, um zu verhindern, dass sie von unbefugten Parteien gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass zwischen der Verschlüsselung, Übertragung und Entschlüsselung der Daten keine Informationen verloren gehen, beschädigt, manipuliert oder verfälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der sich Client und Server auf ein gemeinsames Geheimnis und wichtige Parameter, wie Chiffre-Suiten, einigen. Sobald Parameter und ein Datenaustauschmodus festgelegt sind, wird Anwendungsdaten, wie HTTP, ausgetauscht.

### Chiffre-Suiten

Die primären Parameter, die der TLS-Handshake verhandelt, sind eine [Chiffre-Suite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 und früher umfasst die verhandelte Chiffre-Suite eine Reihe kryptografischer Algorithmen, die zusammen die Aushandlung des geteilten Geheimnisses ermöglichen, die Authentifizierung des Servers und die Methode, mit der Daten verschlüsselt werden sollen.

Die Chiffre-Suite in TLS 1.3 regelt primär die Verschlüsselung von Daten, separate Verhandlungsverfahren werden für die Schlüsselvereinbarung und Authentifizierung verwendet.

Verschiedene Software kann unterschiedliche Namen für dieselben Chiffre-Suiten verwenden. Zum Beispiel unterscheiden sich die in OpenSSL und GnuTLS verwendeten Namen von denen in den TLS-Standards. Die [Tabelle zur Übereinstimmung der Chiffrenamen](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) im Artikel des Mozilla OpSec-Teams zu TLS-Konfigurationen listet diese Namen sowie Informationen über Kompatibilität und Sicherheitsstufen auf.

### Ihren Server konfigurieren

Die korrekte Konfiguration Ihres Servers ist entscheidend. Im Allgemeinen sollten Sie versuchen, die Unterstützung für Chiffren auf die neuesten möglichen Chiffren zu beschränken, die mit den Browsern kompatibel sind, die mit Ihrer Website verbunden werden sollen. Der [Mozilla OpSec Leitfaden zu TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen bei der Konfiguration Ihrer Website zu helfen, stellt Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) bereit, der Konfigurationsdateien für die folgenden Webserver generiert:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Nutzung des [Konfigurators](https://ssl-config.mozilla.org/) wird empfohlen, um die Konfiguration entsprechend Ihren Bedürfnissen zu erstellen; kopieren Sie sie dann in die entsprechende Datei auf Ihrem Server und starten Sie den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei muss möglicherweise einige Anpassungen enthalten, um benutzerdefinierte Einstellungen zu berücksichtigen, also stellen Sie sicher, die generierte Konfiguration vor der Verwendung zu überprüfen; das Installieren der Konfigurationsdatei ohne sicherzustellen, dass alle Verweise auf Domainnamen usw. korrekt sind, führt zu einem Server, der einfach nicht funktioniert.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine wesentliche Überarbeitung von TLS. TLS 1.3 umfasst zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Unbenutzte und unsichere Funktionen von TLS 1.2 zu entfernen.
- Eine starke Sicherheitsanalyse in das Design einzubeziehen.
- Die Privatsphäre zu verbessern, indem mehr vom Protokoll verschlüsselt wird.
- Die zur Fertigstellung eines Handshakes benötigte Zeit zu reduzieren.

TLS 1.3 verändert viele der grundlegenden Protokollelemente, bewahrt jedoch fast alle Grundfähigkeiten früherer TLS-Versionen. Für das Web kann TLS 1.3 aktiviert werden, ohne die Kompatibilität mit einigen wenigen Ausnahmen zu beeinträchtigen (siehe unten).

Die wesentlichen Änderungen in TLS 1.3 sind:

- Der TLS 1.3-Handshake wird in den meisten Fällen in einem einzigen Roundtrip abgeschlossen, was die Handshake-Latenz reduziert.
- Ein Server kann einen 0-RTT (Zero Round Trip Time) Handshake aktivieren. Clients, die sich erneut mit dem Server verbinden, können Anfragen sofort senden und die Latenz des TLS-Handshakes vollständig eliminieren. Obwohl die Leistungsgewinne durch 0-RTT erheblich sein können, besteht ein gewisses Risiko eines Replay-Angriffs, weshalb einige Vorsicht geboten ist, bevor diese Funktion aktiviert wird.
- TLS 1.3 unterstützt ausschließlich forward-sekrete Modi, es sei denn, die Verbindung wird wieder aufgenommen oder es wird ein vorab geteilter Schlüssel verwendet.
- TLS 1.3 definiert ein neues Set von Chiffre-Suiten, die exklusiv für TLS 1.3 sind. Diese Chiffre-Suiten verwenden alle moderne Algorithmen für Authenticated Encryption with Associated Data (AEAD).
- Der TLS 1.3-Handschlag ist verschlüsselt, abgesehen von den Nachrichten, die notwendig sind, um ein gemeinsames Geheimnis zu etablieren. Insbesondere bedeutet das, dass Server- und Client-Zertifikate verschlüsselt sind. Beachten Sie jedoch, dass die Server-Identität (die server_name oder SNI-Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen wurden deaktiviert: Verhandlungen, generische Datenkomprimierung, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA)-Zertifikate, statischer RSA-Schlüsselaustausch und Schlüsselaustausch mit benutzerdefinierten Diffie-Hellman (DH)-Gruppen.

Implementierungen von Entwurfsversionen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT-Modus. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, um TLS 1.3 erfolgreich zu betreiben.

TLS 1.3 fügt nur einen signifikanten neuen Anwendungsfall hinzu. Der 0-RTT-Handshake kann erhebliche Leistungsgewinne für latenzempfindliche Anwendungen, wie das Web, bieten. Die Aktivierung von 0-RTT erfordert zusätzliche Schritte, sowohl um die erfolgreiche Bereitstellung sicherzustellen als auch um die Risiken von Replay-Angriffen zu verwalten.

Die Entfernung von Neuverhandlung in TLS 1.3 könnte einige Webserver betreffen, die auf Client-Authentifizierung mit Zertifikaten angewiesen sind. Einige Webserver verwenden Neuverhandlungen, um entweder sicherzustellen, dass Client-Zertifikate verschlüsselt sind, oder um Client-Zertifikate nur dann anzufordern, wenn bestimmte Ressourcen angefordert werden. Für die Privatsphäre von Client-Zertifikaten stellt die Verschlüsselung des TLS 1.3-Handschlags sicher, dass Client-Zertifikate verschlüsselt sind; dies könnte jedoch einige Softwareänderungen erfordern. Reaktive Client-Authentifizierung mit Zertifikaten wird von TLS 1.3 unterstützt, aber nicht weit verbreitet implementiert. Alternative Mechanismen sind in Entwicklung, die auch HTTP/2 unterstützen.

## Ausscheiden alter TLS-Versionen

Um zur Schaffung eines moderneren, sichereren Webs beizutragen, begannen alle großen Browser Anfang 2020 die Unterstützung für TLS 1.0 und 1.1 zu entfernen. Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 wird Firefox einen [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehler zurückgeben, wenn er versucht, eine Verbindung zu Servern mit den älteren TLS-Versionen herzustellen ([Firefox bug 1606734](https://bugzil.la/1606734)).

## TLS-Handshake-Timeout-Werte

Wenn der TLS-Handshake aus irgendeinem Grund langsam oder nicht reagierend wird, kann dies die Benutzererfahrung erheblich beeinträchtigen. Um dieses Problem zu entschärfen, haben moderne Browser Handshake-Timeouts implementiert:

- Seit Version 58 implementiert Firefox einen TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten des `network.http.tls-handshake-timeout` Prefs in about:config variiert werden.

## Siehe auch

- Der [Mozilla SSL Konfigurationsgenerator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen helfen, Konfigurationsdateien für Ihren Server zu erstellen, um Ihre Site zu sichern.
- Das Mozilla Operations Security (OpSec) Team führt eine Wikiseite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Verwenden Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Site ist.
- [Secure Contexts](/de/docs/Web/Security/Defenses/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) HTTP-Header
