---
title: Site
slug: Glossary/Site
l10n:
  sourceCommit: 2a86df044ab3e81ebfbce1c7df3d13a77d3be1ad
---

Informell ist eine _Site_ eine Website, die eine Sammlung von Webseiten darstellt, die von derselben Domain bereitgestellt und von einer einzelnen Organisation verwaltet werden.

Browser müssen manchmal genau zwischen verschiedenen Sites unterscheiden. Zum Beispiel darf der Browser nur [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookies an die gleiche Site senden, die sie gesetzt hat.

Für diese präzisere Definition wird eine Site durch den _registrierbaren Domain_-Teil des Domain-Namens bestimmt. Die registrierbare Domain besteht aus einem Eintrag in der [Public Suffix List](https://publicsuffix.org/list/) plus dem Teil des Domain-Namens direkt davor. Dies bedeutet, dass zum Beispiel `theguardian.co.uk`, `sussex.ac.uk` und `bookshop.org` alle registrierbare Domains sind.

Laut dieser Definition sind `support.mozilla.org` und `developer.mozilla.org` Teil derselben Site, weil `mozilla.org` eine registrierbare Domain ist.

In einigen Kontexten wird auch das Schema berücksichtigt, wenn Sites unterschieden werden. Dies würde `http://vpl.ca` und `https://vpl.ca` zu unterschiedlichen Sites machen. Das Einbeziehen des Schemas verhindert, dass eine unsichere (HTTP) Site als die gleiche Site wie eine sichere (HTTPS) Site behandelt wird. Eine Definition, die das Schema berücksichtigt, wird manchmal als _schemeful same-site_ bezeichnet. Diese strengere Definition wird in den Regeln für die Handhabung von [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)-Cookies angewendet.

> [!NOTE]
> Browser treffen manchmal Sicherheitsentscheidungen (zum Beispiel, welche Ressourcen ein Skript zugreifen kann) basierend auf dem {{Glossary("Origin", "Origin")}} einer Ressource. Dies ist ein restriktiveres Konzept als die Site und umfasst das Schema, die gesamte Domain und den Port. Siehe auch [same-origin policy](/de/docs/Web/Security/Same-origin_policy).

## Beispiele

Diese gehören zur gleichen Site, weil die registrierbare Domain von `mozilla.org` gleich ist:

- `https://developer.mozilla.org/de/docs/`
- `https://support.mozilla.org/en-US/`

Diese werden als die gleiche Site betrachtet, weil die Portnummer ignoriert wird, wenn die Site bestimmt wird:

- `https://example.com:8080`
- `https://example.com`

Diese sind nicht die gleiche Site, weil sich die registrierbare Domain der beiden URLs unterscheidet:

- `https://developer.mozilla.org/de/docs/`
- `https://example.com`

Diese sind dieselbe Site oder unterschiedliche Sites, wenn das Schema berücksichtigt wird:

- `http://example.com`
- `https://example.com`

## Siehe auch

- [What is a URL](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)
- Verwandte Glossarbegriffe:
  - {{Glossary("Origin", "Origin")}}
- [Same-origin policy](/de/docs/Web/Security/Same-origin_policy)
