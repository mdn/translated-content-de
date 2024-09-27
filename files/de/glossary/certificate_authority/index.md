---
title: Certificate authority
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: 9409e72722add6d1c4baeaf7b262c9b0985c0bcf
---

{{GlossarySidebar}}

Eine **Certificate Authority** (CA) ist eine Organisation, die [digitale Zertifikate](/de/docs/Glossary/Digital_certificate) und deren zugehörige [öffentliche Schlüssel](/de/docs/Glossary/Key) [signiert](/de/docs/Glossary/Signature/Security) und damit bestätigt, dass die enthaltenen Informationen und Schlüssel korrekt sind.

Bei einem digitalen Zertifikat für eine Website umfasst diese Information mindestens den Namen der Organisation, die das digitale Zertifikat beantragt hat (z.B. Mozilla Corporation), die Website, für die es ausgestellt wurde (z.B. mozilla.org), und die Zertifizierungsstelle.

Zertifizierungsstellen sind ein Teil der öffentlichen Schlüssel-Infrastruktur des Internets, die es Browsern ermöglicht, die Identität von Websites zu überprüfen und sich sicher über TLS (also HTTPS) zu verbinden.

> [!NOTE]
> Webbrowser sind mit einer Liste von "Stammzertifikaten" vorinstalliert. Der Browser kann diese nutzen, um zuverlässig zu prüfen, ob das Webseitenzertifikat von einer Zertifizierungsstelle signiert wurde, die "zurück zu" dem Stammzertifikat Kette" (d.h. vom Besitzer des Stammzertifikats oder einer untergeordneten CA vertrauenswürdig ist). Letztendlich basiert dieser Prozess darauf, dass jede CA angemessene Identitätsprüfungen durchführt, bevor sie ein Zertifikat signiert!

## Siehe auch

- [Certificate authority](https://en.wikipedia.org/wiki/Certificate_authority) auf Wikipedia
- [Public key infrastructure](https://en.wikipedia.org/wiki/Public_key_infrastructure) auf Wikipedia
- [Mozilla Included CA Certificate List](https://wiki.mozilla.org/CA/Included_Certificates)
