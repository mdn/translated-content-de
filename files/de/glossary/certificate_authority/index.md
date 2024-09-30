---
title: Certificate authority
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine **Zertifizierungsstelle** (CA) ist eine Organisation, die [digitale Zertifikate](/de/docs/Glossary/Digital_certificate) und deren zugehörige [öffentliche Schlüssel](/de/docs/Glossary/Key) [signiert](/de/docs/Glossary/Signature/Security) und somit bestätigt, dass die enthaltenen Informationen und Schlüssel korrekt sind.

Für ein digitales Website-Zertifikat beinhaltet diese Information mindestens den Namen der Organisation, die das digitale Zertifikat angefordert hat (z. B. Mozilla Corporation), die Seite, für die es gilt (z. B. mozilla.org), und die Zertifizierungsstelle.

Zertifizierungsstellen sind Teil der Internet-[Public-Key-Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure), die es Browsern ermöglicht, die Identität von Websites zu überprüfen und sicher über TLS (und somit HTTPS) zu verbinden.

> [!NOTE]
> Webbrowser werden mit einer Liste von "Stammzertifikaten" vorinstalliert. Der Browser kann diese verwenden, um zuverlässig zu prüfen, dass das Website-Zertifikat von einer Zertifizierungsstelle signiert wurde, die auf das Stammzertifikat „zurückführt“ (d. h. sie wurde vom Inhaber des Stammzertifikats oder einer Zwischen-CA vertraut). Letztlich beruht dieser Prozess darauf, dass jede CA vor der Signierung eines Zertifikats angemessene Identitätsprüfungen durchführt!

## Siehe auch

- [Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) auf Wikipedia
- [Public-Key-Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure) auf Wikipedia
- [Mozilla Included CA Certificate List](https://wiki.mozilla.org/CA/Included_Certificates)
