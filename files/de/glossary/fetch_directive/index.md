---
title: Fetch-Direktive
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**{{Glossary("CSP", "CSP")}} Fetch-Direktiven** werden in einem {{HTTPHeader("Content-Security-Policy")}} Header verwendet und steuern die Orte, von denen bestimmte Ressourcentypen geladen werden dürfen. Zum Beispiel ermöglicht {{CSP("script-src")}} Entwicklern, vertrauenswürdige Skriptquellen zuzulassen, die auf einer Seite ausgeführt werden dürfen, während {{CSP("font-src")}} die Quellen von Webfonts kontrolliert.

Alle Fetch-Direktiven fallen auf {{CSP("default-src")}} zurück. Das bedeutet, wenn eine Fetch-Direktive im CSP-Header fehlt, wird der User-Agent nach der `default-src`-Direktive suchen.

Siehe [Fetch-Direktiven](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#fetch_directives) für eine vollständige Liste.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CSP", "CSP")}}
  - {{Glossary("Reporting_directive", "Reporting-Direktive")}}
  - {{Glossary("Document_directive", "Document-Direktive")}}
  - {{Glossary("Navigation_directive", "Navigation-Direktive")}}
- Referenz
  - [Fetch-Direktiven](https://w3c.github.io/webappsec-csp/#directives-fetch) Spezifikation
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
