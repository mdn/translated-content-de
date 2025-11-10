---
title: Zertifizierungsstelle
slug: Glossary/Certificate_authority
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine **Zertifizierungsstelle** (Certificate Authority, CA) ist eine Organisation, die {{Glossary("Digital_certificate", "digitale Zertifikate")}} und die dazugehörigen {{Glossary("Key", "öffentlichen Schlüssel")}} {{Glossary("Signature/Security", "signiert")}} und damit bestätigt, dass die enthaltenen Informationen und Schlüssel korrekt sind.

Für ein Website-Zertifikat umfasst diese Informationen mindestens den Namen der Organisation, die das digitale Zertifikat beantragt hat (z. B. Mozilla Corporation), die Website, für die es ausgestellt wurde (z. B. mozilla.org), und die Zertifizierungsstelle.

Zertifizierungsstellen sind Teil der Internet-[Public-Key-Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure), die es Browsern ermöglicht, die Identität von Websites zu überprüfen und sicher über TLS (somit HTTPS) zu verbinden.

> [!NOTE]
> Webbrowser sind mit einer Liste von "Root-Zertifikaten" vorinstalliert. Der Browser kann diese verwenden, um zuverlässig zu prüfen, dass das Website-Zertifikat von einer Zertifizierungsstelle signiert wurde, die bis zum Root-Zertifikat zurückreicht (d.h. das vom Besitzer des Root-Zertifikats oder einer zwischengeschalteten CA vertrauenswürdig war). Letztendlich basiert dieser Prozess darauf, dass jede CA vor der Signierung eines Zertifikats angemessene Identitätsprüfungen durchführt!

## Siehe auch

- [Zertifizierungsstelle](https://en.wikipedia.org/wiki/Certificate_authority) auf Wikipedia
- [Public-Key-Infrastruktur](https://en.wikipedia.org/wiki/Public_key_infrastructure) auf Wikipedia
- [Mozilla Included CA Certificate List](https://wiki.mozilla.org/CA/Included_Certificates)
