---
title: Sicherheit in Firefox 2
slug: Mozilla/Firefox/Releases/2/Security_changes
l10n:
  sourceCommit: 7f74644d98484c67817c1dd556a6e394f5a26a6f
---

{{FirefoxSidebar}}

Dieser Artikel beschreibt Änderungen, die die Sicherheit in Firefox 2 betreffen.

## Schwache Chiffren standardmäßig deaktiviert

[Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) deaktiviert standardmäßig SSLv2 und die schwachen "Export"-Chiffren (solche mit Schlüssellängen unter 64 Bit) zugunsten von SSLv3. Dies bietet verbesserte Sicherheit.

Die bevorzugten Verschlüsselungsmethoden sind `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Einige Server bezeichnen diese als `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

Falls die Unterstützung von SSLv2 aktiviert werden muss, kann dies durch Setzen der entsprechenden `security.ssl2.*` Benutzerpräferenzen auf `true` erfolgen.

## Neue Funktionen

- Firefox 2 unterstützt [Elliptische-Kurven-Kryptographie](https://en.wikipedia.org/wiki/Elliptic_curve_cryptography) in TLS. Die Unterstützung ist derzeit auf Kurven mit 256, 384 und 521 (ja, 521) Bit beschränkt.
- Firefox 2 unterstützt die TLS-Servernamenanzeigungsverlängerung, um sichere Verbindungen zu Servern zu erleichtern, die mehrere virtuelle Server auf einer einzelnen zugrunde liegenden Netzwerkadresse hosten, gemäß [RFC 3546](https://datatracker.ietf.org/doc/html/rfc3546).
- Wenn Firefox 2 eine [OCSP](https://en.wikipedia.org/wiki/Ocsp)-Anfrage zur Validierung eines Webserver-Zertifikats stellt, wird nun der Proxy verwendet, der für den normalen HTTP-Verkehr konfiguriert wurde.

## Bestimmen, welche Chiffren verfügbar sind

Wie immer können Sie herausfinden, welche Chiffren unterstützt werden — und welche aktiviert oder deaktiviert sind — indem Sie in about:config nach "ssl" oder "tls" suchen.

## Sicherheit für das jar:-Protokoll verbessert

Um ein potenzielles Sicherheitsproblem beim Verwenden des `jar:`-Protokolls zu beheben, ist es jetzt notwendig, JAR-Dateien mit dem MIME-Typ `application/java-archive` zu liefern. Weitere Einzelheiten finden Sie unter [Sicherheit und das jar-Protokoll](/de/docs/Security_and_the_jar_protocol).
