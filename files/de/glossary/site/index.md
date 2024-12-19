---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GlossarySidebar}}

Informell ist eine _Site_ eine Website, die eine Sammlung von Webseiten umfasst, die von derselben Domain bereitgestellt und von einer einzigen Organisation verwaltet werden.

Browser müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Cookies nur an die gleiche Site senden, die sie gesetzt hat.

Für diese genauere Definition wird eine Site durch den _registrierbaren Domain_-Teil des Domainnamens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domainnamens, der direkt davor steht. Das bedeutet zum Beispiel, dass `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Nach dieser Definition sind `support.mozilla.org` und `developer.mozilla.org` Teil derselben Site, weil `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn Sites differenziert werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu unterschiedlichen Sites machen. Durch die Berücksichtigung des Schemas wird verhindert, dass eine unsichere (HTTP) Site als dieselbe Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für den Umgang mit [`SameSite`](/de/docs/Web/HTTP/Headers/Set-Cookie#samesitesamesite-value) Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Script zugreifen kann) basierend auf dem {{Glossary("Origin", "Ursprung")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site und umfasst das Schema, die gesamte Domain und den Port. Siehe auch [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Beispiele

Diese gehören zur selben Site, da die registrierbare Domain von `mozilla.org` dieselbe ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Diese gehören zur selben Site, da der Port nicht relevant ist:

- `https://example.com:8080`
- `https://example.com`

Diese gehören nicht zur selben Site, da sich die registrierbare Domain der beiden URLs unterscheidet:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Diese sind dieselbe Site oder unterschiedliche Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Ursprung")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
