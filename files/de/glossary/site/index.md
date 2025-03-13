---
title: Seite
slug: Glossary/Site
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Informell ist eine _Seite_ eine Website, welche eine Sammlung von Webseiten ist, die von derselben Domain bereitgestellt und von einer einzigen Organisation verwaltet wird.

Browser müssen manchmal genau zwischen verschiedenen Seiten unterscheiden. Zum Beispiel darf der Browser nur [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookies an dieselbe Seite senden, die sie gesetzt hat.

Für diese genauere Definition wird eine Seite durch den _registrierbaren Domainteil_ des Domainnamens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domainnamens direkt davor. Dies bedeutet zum Beispiel, dass `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Gemäß dieser Definition sind `support.mozilla.org` und `developer.mozilla.org` Teil derselben Seite, weil `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema betrachtet, wenn Seiten unterschieden werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu unterschiedlichen Seiten machen. Die Einbeziehung des Schemas verhindert, dass eine unsichere (HTTP) Seite als gleichwertige Seite wie eine sichere (HTTPS) Seite behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schematische gleiche Seite_ bezeichnet. Diese strengere Definition wird in den Regeln für den Umgang mit [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Skript zugreifen darf) basierend auf dem {{Glossary("Origin", "Ursprung")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Seite und umfasst das Schema, die gesamte Domain und den Port. Siehe auch [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy).

## Beispiele

Diese sind dieselbe Seite, weil die registrierbare Domain `mozilla.org` dieselbe ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Diese sind dieselbe Seite, weil der Port nicht relevant ist:

- `https://example.com:8080`
- `https://example.com`

Diese sind nicht dieselbe Seite, da die registrierbare Domain der beiden URLs unterschiedlich ist:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Diese sind dieselbe Seite oder verschiedene Seiten, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [Was ist eine URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Ursprung")}}
- [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy)
