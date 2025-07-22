---
title: Sicherheit in Firefox 2
slug: Mozilla/Firefox/Releases/2/Security_changes
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Dieser Artikel beschreibt Änderungen, die die Sicherheit in Firefox 2 betreffen.

## Schwache Verschlüsselungen standardmäßig deaktiviert

[Firefox 2](/de/docs/Mozilla/Firefox/Releases/2) deaktiviert standardmäßig SSLv2 und die schwachen „Export“-Verschlüsselungssuiten (jene mit Schlüssellängen unter 64 Bit) zugunsten von SSLv3. Dies bietet verbesserte Sicherheit.

Die bevorzugten Verschlüsselungsmethoden sind `TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `TLS_RSA_WITH_3DES_EDE_CBC_SHA`. Einige Server beziehen sich auf diese als `SSL_DHE_DSS_WITH_3DES_EDE_CBC_SHA` und `SSL_RSA_WITH_3DES_EDE_CBC_SHA`.

Falls SSLv2-Unterstützung aktiviert werden muss, kann dies durch das Setzen der entsprechenden `security.ssl2.*` Benutzerpräferenzen auf `true` erfolgen.

## Neue Funktionen

- Firefox 2 unterstützt [Elliptic Curve Cryptography](https://en.wikipedia.org/wiki/Elliptic_curve_cryptography) in TLS. Derzeit ist die Unterstützung auf Kurven von 256, 384 und 521 (ja, 521) Bits beschränkt.
- Firefox 2 unterstützt die TLS-Erweiterung zur Server-Namensanzeige, um sichere Verbindungen zu Servern zu erleichtern, die mehrere virtuelle Server auf einer einzigen zugrunde liegenden Netzwerkadresse hosten, gemäß [RFC 3546](https://datatracker.ietf.org/doc/html/rfc3546).
- Wenn Firefox 2 eine [OCSP](https://en.wikipedia.org/wiki/Ocsp)-Anfrage stellt, um das Zertifikat eines Webservers zu validieren, verwendet es nun den Proxy, der für normalen HTTP-Verkehr konfiguriert ist.

## Bestimmen, welche Verschlüsselungen verfügbar sind

Wie immer können Sie herausfinden, welche Verschlüsselungen unterstützt werden — und welche aktiviert oder deaktiviert sind — indem Sie in about:config gehen und nach „ssl“ oder „tls“ suchen.

## Sicherheit für das jar:-Protokoll verbessert

Um ein potenzielles Sicherheitsproblem bei der Verwendung des `jar:`-Protokolls zu beheben, ist es jetzt notwendig, JAR-Dateien mit dem MIME-Typ `application/java-archive` bereitzustellen. Weitere Details finden Sie unter [Security and the jar protocol](https://web.archive.org/web/20180706040540/https://developer.mozilla.org/de/docs/Mozilla/Security/Security_and_the_jar_protocol).
