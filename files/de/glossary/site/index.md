---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

Informell ist eine _Site_ eine Website, die aus einer Sammlung von Webseiten besteht, die von derselben Domain bereitgestellt und von einer einzigen Organisation gepflegt werden. Diese wird durch ihre {{Glossary("registrable_domain", "registrierbare Domain")}} definiert.

Browser müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Beispielsweise darf der Browser `SameSite`-Cookies nur an die gleiche Site senden, die sie gesetzt hat.

Für diese präzisere Definition wird eine Site durch den Teil des Domain-Namens bestimmt, der die _registrierbare Domain_ ist. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domain-Namens unmittelbar davor. Das bedeutet zum Beispiel, dass `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alles registrierbare Domains sind.

Laut dieser Definition sind `support.mozilla.org` und `developer.mozilla.org` Teil derselben Site, da `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn Sites unterschieden werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu verschiedenen Sites machen. Die Einbeziehung des Schemas verhindert, dass eine unsichere (HTTP) Site als dieselbe Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für die Handhabung von `SameSite`-Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Skript zugreifen kann) basierend auf dem {{Glossary("Origin", "Ursprung")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site, da es das Schema, die ganze Domain und den Port umfasst. Siehe auch [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy).

## Beispiele

Diese gehören zur gleichen Site, da die registrierbare Domain von `mozilla.org` die gleiche ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Diese werden als die gleiche Site angesehen, da die Portnummer ignoriert wird, wenn die Site bestimmt wird:

- `https://example.com:8080`
- `https://example.com`

Diese sind nicht die gleiche Site, da sich die registrierbare Domain der beiden URLs unterscheidet:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Diese sind die gleiche Site oder verschiedene Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Ursprung")}}
  - {{Glossary("Registrable_domain", "Registrierbare Domain")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy)
