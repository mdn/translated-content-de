---
title: Transport Layer Security (TLS)
slug: Glossary/TLS
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

**Transport Layer Security (TLS)**, früher bekannt als [Secure Sockets Layer (SSL)](/de/docs/Glossary/SSL), ist ein [Protokoll](/de/docs/Glossary/protocol), das von Anwendungen verwendet wird, um sicher über ein Netzwerk zu kommunizieren und Manipulationen und Abhörversuche bei E-Mails, Web-Browsing, Messaging und anderen Protokollen zu verhindern. Sowohl TLS als auch SSL sind Client-/Server-Protokolle, die die Privatsphäre der Kommunikation durch die Verwendung kryptografischer Protokolle gewährleisten, um Sicherheit über ein Netzwerk bereitzustellen. Wenn ein Server und ein Client mithilfe von TLS kommunizieren, wird sichergestellt, dass keine dritte Partei Nachrichten abhören oder manipulieren kann.

Alle modernen Browser unterstützen das TLS-Protokoll und erfordern, dass der Server ein gültiges [digitales Zertifikat](/de/docs/Glossary/Digital_certificate) vorlegt, das seine Identität bestätigt, um eine sichere Verbindung herzustellen. Es ist möglich, dass sich sowohl der Client als auch der Server gegenseitig authentifizieren, wenn beide Parteien ihre eigenen individuellen digitalen Zertifikate bereitstellen.

> [!NOTE]
> Alle großen Browser begannen Anfang 2020, die Unterstützung für TLS 1.0 und 1.1 zu entfernen; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab Version 74 gibt Firefox einen [Secure Connection Failed](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) Fehler zurück, wenn eine Verbindung zu Servern mit den älteren TLS-Versionen hergestellt wird ([Firefox-Bug 1606734](https://bugzil.la/1606734)).

## Siehe auch

- [Transport Layer Security](https://de.wikipedia.org/wiki/Transport_Layer_Security) (Wikipedia)
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (Das Transport Layer Security-Protokoll, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (Das Transport Layer Security-Protokoll, Version 1.2)
- [Transport Layer Security](/de/docs/Web/Security/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) (OWASP)
- Verwandte Glossarbegriffe:
  - [HTTPS](/de/docs/Glossary/HTTPS)
  - [SSL](/de/docs/Glossary/SSL)
