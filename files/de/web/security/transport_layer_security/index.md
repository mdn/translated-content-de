---
title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Sicherheit jeder Verbindung unter Verwendung von Transport Layer Security (TLS) hängt stark von den ausgewählten Chiffresuiten und Sicherheitsparametern ab. Ziel dieses Artikels ist es, Ihnen bei diesen Entscheidungen zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec) Team [pflegt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Transport Layer Security (TLS)-Protokoll ist der Standard, um zwei vernetzte Anwendungen oder Geräte zu ermöglichen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann. Dieser Artikel bietet einen Überblick über TLS und die Art von Entscheidungen, die Sie treffen müssen, um Ihre Inhalte zu sichern.

## Historie

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer von Netscape eingeführten Technologie. Es wurde kurz darauf auf SSL 3.0 aktualisiert, und als seine Nutzung sich ausdehnte, wurde klar, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie spezifiziert werden musste, um die Interoperabilität zwischen allen Webbrowsern und Servern zu gewährleisten. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) spezifizierte TLS 1.0 in {{RFC(2246)}} im Januar 1999. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Trotz der Tatsache, dass das Web nun TLS für Verschlüsselung verwendet, sprechen viele Menschen aus Gewohnheit immer noch von "SSL".

Obwohl TLS über jedes niedrigstufige Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls, den HTTP-Verkehr zu verschlüsseln. HTTP, das unter Verwendung von TLS verschlüsselt wird, wird üblicherweise als [HTTPS](/de/docs/Glossary/HTTPS) bezeichnet. TLS-verschlüsselter Webverkehr wird konventionell standardmäßig auf Port 443 ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiger Anwendungsfall für TLS.

## HTTP über TLS

TLS bietet drei primäre Dienste, die dazu beitragen, die Sicherheit und Integrität der damit ausgetauschten Daten zu gewährleisten:

- Authentifizierung
  - : Authentifizierung ermöglicht es jeder Partei der Kommunikation zu überprüfen, dass die andere Partei tatsächlich die ist, die sie vorgibt zu sein.
- Verschlüsselung
  - : Daten werden während der Übertragung zwischen dem Benutzeragenten und dem Server verschlüsselt, um zu verhindern, dass sie von unbefugten Parteien gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass beim Verschlüsseln, Übertragen und Entschlüsseln der Daten keine Informationen verloren, beschädigt, manipuliert oder gefälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der sich ein Client und ein Server auf ein gemeinsames Geheimnis einigen und wichtige Parameter, wie Chiffresuiten, ausgehandelt werden. Sobald Parameter und ein Datenaustauschmodus vereinbart sind, wird Anwendungsdaten, wie HTTP, ausgetauscht.

### Chiffresuiten

Die primären Parameter, die durch den TLS-Handshake ausgehandelt werden, sind eine [Chiffresuite](https://de.wikipedia.org/wiki/Chiffresuite).

In TLS 1.2 und früher umfasst die ausgehandelte Chiffresuite eine Reihe kryptographischer Algorithmen, die zusammen die Aushandlung des gemeinsamen Geheimnisses, die Art der Serverauthentifizierung und die Methode zur Verschlüsselung der Daten bereitstellen.

Die Chiffresuite in TLS 1.3 steuert primär die Datenverschlüsselung, separate Aushandlungsmethoden werden für die Schlüsselaustauschvereinbarung und Authentifizierung verwendet.

Verschiedene Software kann unterschiedliche Namen für dieselben Chiffresuiten verwenden. Beispielsweise unterscheiden sich die Namen, die in OpenSSL und GnuTLS verwendet werden, von denen in den TLS-Standards. Die [Chiffrenamens-Korrespondenztabelle](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) im Artikel des Mozilla OpSec-Teams zu TLS-Konfigurationen listet diese Namen sowie Informationen zur Kompatibilität und Sicherheitsniveaus auf.

### Konfiguration Ihres Servers

Die korrekte Konfiguration Ihres Servers ist entscheidend. Im Allgemeinen sollten Sie versuchen, die Unterstützung von Chiffren auf die neuesten, mit den von Ihnen angestrebten Browsern kompatiblen, Chiffren zu beschränken. Die [Mozilla OpSec-Leitfaden zu TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen bei der Konfiguration Ihrer Website zu helfen, bietet Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) an, der Konfigurationsdateien für folgende Webserver generiert:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Nutzung des [Konfigurators](https://ssl-config.mozilla.org/) wird empfohlen, um die Konfiguration zu erstellen, die Ihren Bedürfnissen entspricht; kopieren Sie sie dann in die entsprechende Datei auf Ihrem Server und starten Sie den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei könnte einige Anpassungen erfordern, um benutzerdefinierte Einstellungen zu integrieren. Überprüfen Sie daher die generierte Konfiguration vor ihrer Verwendung; das Installieren der Konfigurationsdatei ohne Sicherstellen, dass alle Verweise auf Domainnamen und ähnliches korrekt sind, führt zu einem Server, der einfach nicht funktioniert.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine bedeutende Überarbeitung von TLS. TLS 1.3 umfasst zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Entfernung ungenutzter und unsicherer Funktionen von TLS 1.2.
- Einbeziehung einer starken Sicherheitsanalyse in das Design.
- Verbesserung der Privatsphäre durch Verschlüsselung eines größeren Teils des Protokolls.
- Reduzierung der Zeit, die erforderlich ist, um einen Handshake abzuschließen.

TLS 1.3 ändert viel von den Protokollgrundlagen, bewahrt jedoch fast alle grundlegenden Fähigkeiten der vorherigen TLS-Versionen. Für das Web kann TLS 1.3 aktiviert werden, ohne die Kompatibilität zu beeinträchtigen, mit einigen seltenen Ausnahmen (siehe unten).

Die wichtigsten Änderungen in TLS 1.3 sind:

- Der TLS 1.3-Handschlag wird in den meisten Fällen in einer einzigen Hin- und Rückfahrt abgeschlossen, was die Handshake-Latenz reduziert.
- Ein Server kann einen 0-RTT (Zero Round Trip Time) Handshake aktivieren. Clients, die sich erneut mit dem Server verbinden, können sofort Anfragen senden und die Latenz des TLS-Handshakes vollständig eliminieren. Die Leistungsgewinne durch 0-RTT können beträchtlich sein, aber sie bergen ein gewisses Risiko eines Replay-Angriffs, daher ist Vorsicht geboten, bevor diese Funktion aktiviert wird.
- TLS 1.3 unterstützt nur vorwärtsgeheime Modi, es sei denn, die Verbindung wird wieder aufgenommen oder es wird ein vorgespeicherter Schlüssel verwendet.
- TLS 1.3 definiert eine neue Reihe von Chiffresuiten, die exklusiv für TLS 1.3 sind. Diese Chiffresuiten verwenden alle moderne Algorithmen zur Authentifizierten Verschlüsselung mit zugehörigen Daten (AEAD).
- Der TLS 1.3-Handshakes ist verschlüsselt, mit Ausnahme der Nachrichten, die erforderlich sind, um ein gemeinsames Geheimnis zu etablieren. Dies bedeutet insbesondere, dass Server- und Client-Zertifikate verschlüsselt sind. Beachten Sie jedoch, dass die Server-Identität (die server_name oder SNI Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen sind deaktiviert: Neuaushandlung, generische Datenkompression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) Zertifikate, statischer RSA-Schlüsselaustausch und Schlüsselaustausch mit benutzerdefinierten Diffie-Hellman (DH) Gruppen.

Implementierungen von Entwurfsversionen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT-Modus. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, um TLS 1.3 erfolgreich betreiben zu können.

TLS 1.3 fügt nur einen wesentlichen neuen Anwendungsfall hinzu. Der 0-RTT-Handschlag kann erhebliche Leistungsgewinne für latenzempfindliche Anwendungen bieten, wie das Web. Die Aktivierung von 0-RTT erfordert zusätzliche Schritte, sowohl um eine erfolgreiche Bereitstellung sicherzustellen als auch um die Risiken von Replay-Angriffen zu managen.

Die Entfernung der Neuaushandlung in TLS 1.3 könnte einige Webserver betreffen, die auf Client-Authentifizierung mittels Zertifikaten angewiesen sind. Einige Webserver verwenden die Neuaushandlung, um entweder sicherzustellen, dass Client-Zertifikate verschlüsselt sind, oder um Client-Zertifikate nur dann anzufordern, wenn bestimmte Ressourcen angefordert werden. Für die Privatsphäre der Client-Zertifikate sorgt die Verschlüsselung des TLS 1.3-Handshakes dafür, dass Client-Zertifikate verschlüsselt sind. Dies könnte jedoch einige Softwareänderungen erfordern. Reaktive Client-Authentifizierung mit Zertifikaten wird von TLS 1.3 unterstützt, aber nicht weit verbreitet implementiert. Alternative Mechanismen werden entwickelt, die auch HTTP/2 unterstützen werden.

## Außerdienststellung alter TLS-Versionen

Zur Unterstützung eines moderneren, sicheren Webs begannen alle großen Browser Anfang 2020 mit der Entfernung der Unterstützung für TLS 1.0 und 1.1. Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 wird Firefox einen [Sicherheitsfehler bei der Verbindung](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) zurückgeben, wenn eine Verbindung zu Servern mit älteren TLS-Versionen hergestellt wird ([Firefox-Bug 1606734](https://bugzil.la/1606734)).

## TLS-Handshake-Timeout-Werte

Wenn der TLS-Handshake aus irgendeinem Grund langsam oder nicht reagiert, kann dies die Benutzererfahrung erheblich beeinträchtigen. Um dieses Problem zu mildern, haben moderne Browser Handshake-Timeouts implementiert:

- Seit Version 58 implementiert Firefox eine TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten der `network.http.tls-handshake-timeout` Voreinstellung in about:config variiert werden.

## Siehe auch

- Der [Mozilla SSL-Konfigurationsgenerator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen helfen, Konfigurationsdateien für Ihren Server zu generieren, um Ihre Seite abzusichern.
- Das Mozilla Operations Security (OpSec) Team pflegt eine Wikiseite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Nutzen Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Website ist.
- [Secure Contexts](/de/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP Header
