---
title: Transport Layer Security (TLS)
slug: Glossary/TLS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

**Transport Layer Security (TLS)**, früher bekannt als {{Glossary("SSL", "Secure Sockets Layer (SSL)")}}, ist ein {{Glossary("protocol", "Protokoll")}}, das von Anwendungen genutzt wird, um sicher über ein Netzwerk zu kommunizieren und Manipulationen sowie Abhören von E-Mail, Web-Browsing, Messaging und anderen Protokollen zu verhindern. Sowohl TLS als auch SSL sind Client- / Server-Protokolle, die Kommunikationsprivatsphäre sicherstellen, indem sie kryptografische Protokolle verwenden, um Sicherheit über ein Netzwerk zu bieten. Wenn ein Server und ein Client mit TLS kommunizieren, wird sichergestellt, dass keine dritte Partei Nachrichten abhören oder manipulieren kann.

Alle modernen Browser unterstützen das TLS-Protokoll und erfordern, dass der Server ein gültiges {{Glossary("Digital_certificate", "digitales Zertifikat")}} bereitstellt, das seine Identität bestätigt, um eine sichere Verbindung herzustellen. Es ist möglich, dass sich sowohl der Client als auch der Server gegenseitig authentifizieren, wenn beide Parteien eigene individuelle digitale Zertifikate bereitstellen.

> [!NOTE]
> Alle großen Browser begannen Anfang 2020 damit, die Unterstützung für TLS 1.0 und 1.1 zu entfernen; Sie müssen sicherstellen, dass Ihr Webserver TLS 1.2 oder 1.3 unterstützt. Ab Version 74 wird Firefox einen [Fehler bei sicherer Verbindung](https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect) zurückgeben, wenn er sich mit Servern mit älteren TLS-Versionen verbindet ([Firefox Bug 1606734](https://bugzil.la/1606734)).

## Siehe auch

- [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security) (Wikipedia)
- [RFC 8446](https://datatracker.ietf.org/doc/html/rfc8446) (The Transport Layer Security Protocol, Version 1.3)
- [RFC 5246](https://datatracker.ietf.org/doc/html/rfc5246) (The Transport Layer Security Protocol, Version 1.2)
- [Transport Layer Security](/de/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Transport Layer Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html) (OWASP)
- Verwandte Glossarbegriffe:
  - {{Glossary("HTTPS", "HTTPS")}}
  - {{Glossary("SSL", "SSL")}}
