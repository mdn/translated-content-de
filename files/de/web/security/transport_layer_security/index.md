---
title: Transportschichtsicherheit
slug: Web/Security/Transport_Layer_Security
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Sicherheit jeder Verbindung, die Transportschichtsicherheit (TLS) verwendet, hängt stark von den ausgewählten Chiffresuiten und Sicherheitsparametern ab. Ziel dieses Artikels ist es, Ihnen bei diesen Entscheidungen zu helfen, um die Vertraulichkeit und Integrität der Kommunikation zwischen Client und Server sicherzustellen. Das Mozilla Operations Security (OpSec) Team [pflegt einen Wiki-Eintrag](https://wiki.mozilla.org/Security/Server_Side_TLS) mit Referenzkonfigurationen für Server.

Das Protokoll Transportschichtsicherheit (TLS) ist der Standard, um zwei vernetzten Anwendungen oder Geräten zu ermöglichen, Informationen privat und robust auszutauschen. Anwendungen, die TLS verwenden, können ihre Sicherheitsparameter wählen, was erhebliche Auswirkungen auf die Sicherheit und Zuverlässigkeit der Daten haben kann. Dieser Artikel gibt einen Überblick über TLS und die Arten von Entscheidungen, die Sie treffen müssen, um Ihre Inhalte zu sichern.

## Geschichte

Als HTTPS eingeführt wurde, basierte es auf Secure Sockets Layer (SSL) 2.0, einer von Netscape eingeführten Technologie. Kurz darauf wurde es auf SSL 3.0 aktualisiert, und als seine Nutzung zunahm, wurde klar, dass eine gemeinsame, standardisierte Verschlüsselungstechnologie spezifiziert werden musste, um die Interoperabilität aller Webbrowser und Server sicherzustellen. Die [Internet Engineering Task Force](https://www.ietf.org/) (IETF) spezifizierte TLS 1.0 in {{RFC(2246)}} im Januar 1999. Die aktuelle Version von TLS ist 1.3 ({{RFC(8446)}}).

Obwohl das Web jetzt TLS für Verschlüsselung verwendet, bezeichnen viele Menschen es immer noch aus Gewohnheit als "SSL".

Obwohl TLS über jedem niederschwelligen Transportprotokoll verwendet werden kann, war das ursprüngliche Ziel des Protokolls die Verschlüsselung von HTTP-Verkehr. HTTP, das mit TLS verschlüsselt ist, wird üblicherweise als {{Glossary("HTTPS")}} bezeichnet. TLS-verschlüsselter Webverkehr wird konventionsgemäß standardmäßig über Port 443 ausgetauscht, während unverschlüsseltes HTTP standardmäßig Port 80 verwendet. HTTPS bleibt ein wichtiges Anwendungsbeispiel für TLS.

## HTTP über TLS

TLS bietet drei primäre Dienste, die zur Sicherheit und zum Schutz der damit ausgetauschten Daten beitragen:

- Authentifizierung
  - : Authentifizierung ermöglicht es jeder Kommunikationspartei, zu überprüfen, dass die andere Partei tatsächlich diejenige ist, die sie vorgibt zu sein.
- Verschlüsselung
  - : Daten werden während der Übertragung zwischen dem User-Agent und dem Server verschlüsselt, um zu verhindern, dass sie von Unbefugten gelesen und interpretiert werden.
- Integrität
  - : TLS stellt sicher, dass zwischen der Verschlüsselung, Übertragung und Entschlüsselung der Daten keine Informationen verloren gehen, beschädigt, manipuliert oder verfälscht werden.

Eine TLS-Verbindung beginnt mit einer Handshake-Phase, in der sich ein Client und ein Server auf ein gemeinsames Geheimnis einigen und wichtige Parameter, wie Chiffresuiten, ausgehandelt werden. Nach der Aushandlung der Parameter und eines Datenaustauschmodus, bei dem Anwendungsdaten, wie HTTP, ausgetauscht werden.

### Chiffresuiten

Die primären Parameter, die der TLS-Handshake aushandelt, sind eine [Chiffresuite](https://en.wikipedia.org/wiki/Cipher_suite).

In TLS 1.2 und früher schließt die ausgehandelte Chiffresuite einen Satz kryptographischer Algorithmen ein, die zusammen die Aushandlung des gemeinsamen Geheimnisses, das Authentifizierungsverfahren des Servers und die Methode, mit der Daten verschlüsselt werden, bereitstellen.

Die Chiffresuite in TLS 1.3 regelt in erster Linie die Verschlüsselung der Daten. Separate Verhandlungsverfahren werden für die Schlüsselvereinbarung und Authentifizierung verwendet.

Verschiedene Software könnten unterschiedliche Namen für die gleichen Chiffresuiten verwenden. Beispielsweise unterscheiden sich die in OpenSSL und GnuTLS verwendeten Namen von denen in den TLS-Standards. Die [Chiffrenamen-Korrespondenztabelle](https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table) im Artikel zu TLS-Konfigurationen des Mozilla OpSec-Teams listet diese Namen sowie Informationen über Kompatibilität und Sicherheitsniveaus auf.

### Konfigurieren Ihres Servers

Die korrekte Konfiguration Ihres Servers ist entscheidend. Generell sollten Sie versuchen, die Unterstützung für Chiffren auf die neuesten möglichen Chiffren zu beschränken, die mit den Browsern kompatibel sind, die Sie mit Ihrer Seite verbinden möchten. Die [Mozilla OpSec-Anleitung zur TLS-Konfiguration](https://wiki.mozilla.org/Security/Server_Side_TLS) bietet weitere Informationen zu empfohlenen Konfigurationen.

Um Ihnen bei der Konfiguration Ihrer Webseite zu helfen, bietet Mozilla einen hilfreichen [TLS-Konfigurationsgenerator](https://ssl-config.mozilla.org/) an, der Konfigurationsdateien für die folgenden Webserver generiert:

- Apache
- Nginx
- Lighttpd
- HAProxy
- Amazon Web Services CloudFormation Elastic Load Balancer

Die Nutzung des [Konfigurators](https://ssl-config.mozilla.org/) wird empfohlen, um die Konfiguration zu erstellen, die Ihren Bedürfnissen entspricht; kopieren Sie sie dann und fügen Sie sie in die entsprechende Datei auf Ihrem Server ein und starten Sie den Server neu, um die Änderungen zu übernehmen. Die Konfigurationsdatei muss möglicherweise einige Anpassungen enthalten, um benutzerdefinierte Einstellungen einzuschließen. Überprüfen Sie daher die generierte Konfiguration, bevor Sie sie verwenden; das Installieren der Konfigurationsdatei ohne sicherzustellen, dass alle Verweise auf Domainnamen und dergleichen korrekt sind, führt zu einem Server, der einfach nicht funktioniert.

## TLS 1.3

{{RFC("8446", "TLS 1.3")}} ist eine wesentliche Überarbeitung von TLS. TLS 1.3 umfasst zahlreiche Änderungen, die die Sicherheit und Leistung verbessern. Die Ziele von TLS 1.3 sind:

- Entfernen von nicht verwendeten und unsicheren Funktionen aus TLS 1.2.
- Einbeziehen einer starken Sicherheitsanalyse in das Design.
- Verbesserung der Privatsphäre durch Verschlüsselung eines größeren Teils des Protokolls.
- Reduzieren der Zeit, die benötigt wird, um einen Handshake abzuschließen.

TLS 1.3 ändert viel von den Grundlagen des Protokolls, bewahrt jedoch fast alle grundlegenden Fähigkeiten früherer TLS-Versionen. Für das Web kann TLS 1.3 ohne Auswirkungen auf die Kompatibilität aktiviert werden, mit einigen seltenen Ausnahmen (siehe unten).

Die wesentlichen Änderungen in TLS 1.3 sind:

- Der TLS 1.3 Handshake wird in den meisten Fällen in einem Round-Trip abgeschlossen, was die Handshake-Latenz reduziert.
- Ein Server kann einen 0-RTT (Zero Round Trip Time) Handshake aktivieren. Clients, die sich wieder mit dem Server verbinden, können sofort Anfragen senden, wodurch die Latenz des TLS-Handshakes vollständig entfällt. Obwohl die Leistungsgewinne durch 0-RTT erheblich sein können, bergen sie ein Risiko von Replay-Angriffen, daher ist etwas Vorsicht geboten, bevor diese Funktion aktiviert wird.
- TLS 1.3 unterstützt nur vorwärts-sichere Modi, es sei denn, die Verbindung wird wieder aufgenommen oder es wird ein vorab geteilter Schlüssel verwendet.
- TLS 1.3 definiert einen neuen Satz von Chiffresuiten, die exklusiv für TLS 1.3 sind. Diese Chiffresuiten verwenden alle moderne Authenticated Encryption with Associated Data (AEAD)-Algorithmen.
- Der TLS 1.3-Handshake ist verschlüsselt, mit Ausnahme der Nachrichten, die zur Erzielung eines gemeinsamen Geheimnisses erforderlich sind. Insbesondere bedeutet dies, dass Server- und Client-Zertifikate verschlüsselt sind. Beachten Sie jedoch, dass die Serveridentität (die server_name oder SNI-Erweiterung), die ein Client an den Server sendet, nicht verschlüsselt ist.
- Zahlreiche Mechanismen wurden deaktiviert: Aushandlung, generische Datenkompression, [Digital Signature Algorithm](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm) (DSA)-Zertifikate, statischer RSA-Schlüsselaustausch und Schlüsselaustausch mit benutzerdefinierten Diffie-Hellman (DH)-Gruppen.

Implementierungen der Entwurfsversionen von TLS 1.3 sind verfügbar. TLS 1.3 ist in einigen Browsern aktiviert, einschließlich des 0-RTT-Modus. Webserver, die TLS 1.3 aktivieren, müssen möglicherweise die Konfiguration anpassen, um das erfolgreiche Funktionieren von TLS 1.3 zu ermöglichen.

TLS 1.3 fügt einen signifikanten neuen Anwendungsfall hinzu. Der 0-RTT-Handshake kann erhebliche Leistungsgewinne für latenzempfindliche Anwendungen ermöglichen, wie das Web. Die Aktivierung von 0-RTT erfordert zusätzliche Schritte, sowohl um die erfolgreiche Bereitstellung sicherzustellen als auch um die Risiken von Replay-Angriffen zu managen.

Die Entfernung der Aushandlung in TLS 1.3 könnte sich auf einige Webserver auswirken, die sich auf die Client-Authentifizierung durch Zertifikate verlassen. Einige Webserver verwenden die Aushandlung, um entweder sicherzustellen, dass Client-Zertifikate verschlüsselt sind, oder um Client-Zertifikate nur anzufordern, wenn bestimmte Ressourcen angefordert werden. Für die Privatsphäre von Client-Zertifikaten stellt die Verschlüsselung des TLS 1.3-Handshakes sicher, dass Client-Zertifikate verschlüsselt sind; dies könnte jedoch einige Softwareänderungen erfordern. Reaktive Client-Authentifizierung mit Zertifikaten wird von TLS 1.3 unterstützt, ist jedoch nicht weit verbreitet implementiert. Alternative Mechanismen sind in der Entwicklung, die auch HTTP/2 unterstützen werden.

## Zurückziehen alter TLS-Versionen

Um zu einer moderneren, sichereren Weblandschaft beizutragen, begannen alle großen Browser Anfang 2020 damit, den Support für TLS 1.0 und 1.1 zu entfernen. Sie müssen sicherstellen, dass Ihr Webserver zukünftig TLS 1.2 oder 1.3 unterstützt.

Ab Version 74 gibt Firefox einen [Fehler bei gesicherter Verbindung](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) zurück, wenn eine Verbindung zu Servern mit den älteren TLS-Versionen hergestellt wird ([Firefox Bug 1606734](https://bugzil.la/1606734)).

## TLS-Handshake-Timeout-Werte

Wenn der TLS-Handshake aus irgendeinem Grund langsam oder nicht ansprechend zu werden beginnt, kann die Benutzererfahrung erheblich beeinträchtigt werden. Um dieses Problem zu mildern, haben moderne Browser Handshake-Timeouts implementiert:

- Seit Version 58 implementiert Firefox einen TLS-Handshake-Timeout mit einem Standardwert von 30 Sekunden. Der Timeout-Wert kann durch Bearbeiten des `network.http.tls-handshake-timeout` Prefs in about:config variiert werden.

## Siehe auch

- Der [Mozilla SSL Configuration Generator](https://ssl-config.mozilla.org/) und [Cipherlist.eu](https://cipherlist.eu/) können Ihnen helfen, Konfigurationsdateien für Ihren Server zu erstellen, um Ihre Seite zu sichern.
- Das Mozilla Operations Security (OpSec) Team pflegt eine Wikiseite mit [Referenz-TLS-Konfigurationen](https://wiki.mozilla.org/Security/Server_Side_TLS).
- Verwenden Sie [HTTP Observatory](/en-US/observatory) und [SSL Labs](https://www.ssllabs.com/ssltest/), um zu testen, wie sicher die HTTP/TLS-Konfiguration einer Webseite ist.
- [Secure Contexts](/de/docs/Web/Security/Secure_Contexts)
- [Strict-Transport-Security](/de/docs/Web/HTTP/Headers/Strict-Transport-Security) HTTP-Header
