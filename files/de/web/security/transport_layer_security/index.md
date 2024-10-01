---
title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Sicherheit jeder Verbindung, die Transport Layer Security (TLS) verwendet, hängt stark von den gewählten Cipher-Suites und Sicherheitsparametern ab. Ziel dieses Artikels ist es, Ihnen bei diesen Entscheidungen zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec) Team [pflegt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Transport Layer Security (TLS) Protokoll ist der Standard, der es zwei vernetzten Anwendungen oder Geräten ermöglicht, Informationen privat und robust auszutauschen. Anwendungen, die TLS nutzen, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann. Dieser Artikel bietet einen Überblick über TLS und die Entscheidungen, die Sie treffen müssen, um Ihre Inhalte zu sichern.

## Geschichte

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer von Netscape eingeführten Technologie. Es wurde kurz darauf auf SSL 3.0 aktualisiert, und mit der zunehmenden Nutzung wurde deutlich, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie spezifiziert werden musste, um die Interoperabilität zwischen allen Webbrowsern und Servern sicherzustellen. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) spezifizierte TLS 1.0 in {{RFC(2246)}} im Januar 1999. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Obwohl das Web jetzt TLS zur Verschlüsselung verwendet, beziehen sich viele Menschen aus Gewohnheit immer noch darauf als "SSL".

Obwohl TLS über jedem niedrigstufigen Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls die Verschlüsselung des HTTP-Verkehrs. HTTP, das mit TLS verschlüsselt ist, wird allgemein als {{Glossary("HTTPS", "HTTPS")}} bezeichnet. TLS-verschlüsselter Webverkehr wird konventionell standardmäßig über Port 443 ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiger Anwendungsfall für TLS.

## HTTP über TLS

TLS bietet drei Hauptdienste, die die Sicherheit der damit ausgetauschten Daten gewährleisten:

- Authentifizierung
  - : Authentifizierung lässt jede Partei der Kommunikation überprüfen, dass die andere Partei tatsächlich diejenige ist, die sie zu sein vorgibt.
- Verschlüsselung
  - : Daten werden verschlüsselt, während sie zwischen dem Benutzeragenten und dem Server übertragen werden, um zu verhindern, dass sie von unbefugten Parteien gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass zwischen dem Verschlüsseln, Übertragen und Entschlüsseln der Daten keine Informationen verloren gehen, beschädigt, manipuliert oder gefälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der sich ein Client und ein Server auf ein gemeinsames Geheimnis einigen und wichtige Parameter, wie Cipher-Suites, ausgehandelt werden. Sobald die Parameter und ein Datenaustauschmodus festgelegt sind, in dem Anwendungsdaten, wie HTTP, ausgetauscht werden.

### Cipher-Suites

Die primären Parameter, die der TLS-Handshake aushandelt, sind eine [Cipher-Suite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 und früher beinhaltet die ausgehandelte Cipher-Suite eine Reihe von kryptografischen Algorithmen, die gemeinsam die Aushandlung des gemeinsamen Geheimnisses, die Mittel zur Authentifizierung eines Servers und die Methode, die zur Datenverschlüsselung verwendet wird, bereitstellen.

Die Cipher-Suite in TLS 1.3 regelt hauptsächlich die Verschlüsselung von Daten, separate Verhandlungsmethoden werden für die Schlüsselauswahl und Authentifizierung genutzt.

Verschiedene Software kann unterschiedliche Namen für dieselben Cipher-Suites verwenden. Zum Beispiel unterscheiden sich die in OpenSSL und GnuTLS verwendeten Namen von denen in den TLS-Standards. Die [Cipher-Namen Entsprechungstabelle](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) im Artikel des Mozilla OpSec-Teams über TLS-Konfigurationen listet diese Namen sowie Informationen über Kompatibilität und Sicherheitsstufen auf.

### Konfiguration Ihres Servers

Die richtige Konfiguration Ihres Servers ist entscheidend. Im Allgemeinen sollten Sie versuchen, die Unterstützung für Chiffren auf die neuesten Chiffren zu beschränken, die mit den Browsern kompatibel sind, die Sie zu Ihrer Seite verbinden möchten. Der [Mozilla OpSec Leitfaden zu TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen bei der Konfiguration Ihrer Seite zu helfen, stellt Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) bereit, der Konfigurationsdateien für die folgenden Webserver generiert:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Verwendung des [Konfigurationsgenerators](https://ssl-config.mozilla.org/) wird empfohlen, um die Konfiguration auf Ihre Bedürfnisse anzupassen; dann kopieren und fügen Sie sie in die entsprechende Datei auf Ihrem Server ein und starten Sie den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei kann einige Anpassungen erfordern, um benutzerdefinierte Einstellungen zu berücksichtigen, überprüfen Sie daher die generierte Konfiguration vor der Verwendung; das Installieren der Konfigurationsdatei ohne sicherzustellen, dass alle Verweise auf Domain-Namen und dergleichen korrekt sind, führt zu einem nicht funktionierenden Server.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine größere Überarbeitung von TLS. TLS 1.3 enthält zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Entfernen von nicht genutzten und unsicheren Funktionen von TLS 1.2.
- Einbeziehung einer starken Sicherheitsanalyse im Design.
- Verbesserung des Datenschutzes durch die Verschlüsselung eines größeren Teils des Protokolls.
- Verringerung der Zeit, die für den Abschluss eines Handshakes erforderlich ist.

TLS 1.3 ändert vieles im grundlegenden Protokoll, bewahrt aber fast alle grundlegenden Fähigkeiten früherer TLS-Versionen. Für das Web kann TLS 1.3 aktiviert werden, ohne die Kompatibilität zu beeinträchtigen, mit einigen seltenen Ausnahmen (siehe unten).

Die wesentlichen Änderungen in TLS 1.3 sind:

- Der TLS 1.3-Handshake wird in den meisten Fällen in einer Rundreise abgeschlossen, was die Latenz des Handshakes reduziert.
- Ein Server kann einen 0-RTT (zero round trip time) Handshake aktivieren. Clients, die sich erneut mit dem Server verbinden, können sofort Anfragen senden, wodurch die Latenz des TLS-Handshakes vollständig entfällt. Obwohl die Leistungsgewinne von 0-RTT erheblich sein können, gehen sie mit einem gewissen Risiko von Replay-Attacken einher, daher bedarf es Vorsicht, bevor dieses Feature aktiviert wird.
- TLS 1.3 unterstützt nur vorwärtsgeheime Modi, es sei denn, die Verbindung wird wieder aufgenommen oder es wird ein im Voraus geteilter Schlüssel verwendet.
- TLS 1.3 definiert eine neue Reihe von Cipher-Suites, die exklusiv für TLS 1.3 sind. Diese Cipher-Suites verwenden alle moderne Authenticated Encryption with Associated Data (AEAD) Algorithmen.
- Der TLS 1.3-Handshake ist verschlüsselt, außer für die Nachrichten, die nötig sind, um ein geteiltes Geheimnis zu etablieren. Insbesondere bedeutet dies, dass Server- und Client-Zertifikate verschlüsselt sind. Beachten Sie jedoch, dass die Server-Identität (die server_name oder SNI-Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen wurden deaktiviert: Neuverhandlung, generische Datenkompression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA) Zertifikate, statischer RSA-Schlüsselaustausch und Schlüsselaustausch mit benutzerdefinierten Diffie-Hellman (DH) Gruppen.

Implementierungen von Entwurfsversionen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT-Modes. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, um TLS 1.3 erfolgreich zu betreiben.

TLS 1.3 fügt nur einen bedeutenden neuen Anwendungsfall hinzu. Der 0-RTT-Handshake kann erhebliche Leistungsgewinne für latenzempfindliche Anwendungen wie das Web bringen. Die Aktivierung von 0-RTT erfordert zusätzliche Schritte, sowohl um die erfolgreiche Implementierung sicherzustellen als auch um die Risiken von Replay-Attacken zu managen.

Das Entfernen der Neuverhandlung in TLS 1.3 kann einige Webserver betreffen, die sich auf die Authentifizierung von Clients mit Zertifikaten verlassen. Einige Webserver verwenden die Neuverhandlung, um entweder sicherzustellen, dass Client-Zertifikate verschlüsselt sind, oder um Client-Zertifikate nur dann anzufordern, wenn bestimmte Ressourcen angefordert werden. Aus Datenschutzgründen sorgt die Verschlüsselung des TLS 1.3-Handshakes dafür, dass Client-Zertifikate verschlüsselt sind; dies könnte jedoch einige Softwareänderungen erfordern. Reaktive Client-Authentifizierung mit Zertifikaten wird von TLS 1.3 unterstützt, aber nicht weit verbreitet implementiert. Alternative Mechanismen sind in Entwicklung, die auch HTTP/2 unterstützen werden.

## Alte TLS-Versionen einstellen

Um zu einer moderneren, sichereren Webumgebung beizutragen, haben alle großen Browser ab Anfang 2020 damit begonnen, die Unterstützung für TLS 1.0 und 1.1 zu entfernen. Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 wird Firefox einen [Sicherheitsverbindungsfehler](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) zurückgeben, wenn er versucht, Verbindung zu Servern mit den älteren TLS-Versionen aufzunehmen ([Firefox Bug 1606734](https://bugzil.la/1606734)).

## TLS-Handshake-Zeitüberschreitungswerte

Wenn der TLS-Handshake aus irgendeinem Grund langsam oder nicht mehr reagierend wird, kann dies die Benutzererfahrung erheblich beeinträchtigen. Um dieses Problem zu mildern, haben moderne Browser Zeitüberschreitungen für Handshakes implementiert:

- Seit Version 58 implementiert Firefox eine TLS-Handshake-Zeitüberschreitung mit einem Standardwert von 30 Sekunden. Der Zeitüberschreitungswert kann durch Bearbeiten des `network.http.tls-handshake-timeout` Prefs in about:config variiert werden.

## Siehe auch

- Der [Mozilla SSL-Konfigurationsgenerator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen helfen, Konfigurationsdateien für Ihren Server zu erstellen, um Ihre Site zu sichern.
- Das Mozilla Operations Security (OpSec) Team pflegt eine Wiki-Seite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Verwenden Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Website ist.
- [Sichere Kontexte](/de/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP-Header
