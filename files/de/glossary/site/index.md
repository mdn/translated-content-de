---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Informell ist eine _Site_ eine Website, die eine Sammlung von Webseiten umfasst, die alle von derselben Domain bedient werden und von einer einzigen Organisation verwaltet werden.

Browser müssen manchmal präzise zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookies nur an die gleiche Site senden, die sie gesetzt hat.

Für diese genauere Definition wird eine Site durch den _registrierbaren Domain_-Teil des Domainnamens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domainnamens direkt davor. Dies bedeutet, dass zum Beispiel `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Nach dieser Definition gehören `support.mozilla.org` und `developer.mozilla.org` zur gleichen Site, da `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn zwischen Sites unterschieden wird. Dies würde `http://vpl.ca` und `https://vpl.ca` zu unterschiedlichen Sites machen. Die Berücksichtigung des Schemas verhindert, dass eine unsichere (HTTP) Site als dieselbe Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für den Umgang mit [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Skript zugreifen kann) basierend auf dem {{Glossary("Origin", "Origin")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site, das das Schema, die gesamte Domain und den Port umfasst. Siehe auch [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Beispiele

Diese sind dieselbe Site, da die registrierbare Domain von `mozilla.org` dieselbe ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Diese sind dieselbe Site, da der Port nicht relevant ist:

- `https://example.com:8080`
- `https://example.com`

Diese sind nicht dieselbe Site, da die registrierbare Domain der beiden URLs unterschiedlich ist:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Diese sind dieselbe Site, oder unterschiedliche Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Origin")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
