---
title: Fetch-Direktive
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**[CSP](/de/docs/Glossary/CSP) Fetch-Direktiven** werden in einem {{HTTPHeader("Content-Security-Policy")}} Header verwendet und kontrollieren, von welchen Standorten bestimmte Ressourcentypen geladen werden dürfen. Zum Beispiel erlaubt es {{CSP("script-src")}} Entwicklern, vertrauenswürdige Quellen von Skripten auf einer Seite auszuführen, während {{CSP("font-src")}} die Quellen von Webfonts kontrolliert.

Alle Fetch-Direktiven fallen auf {{CSP("default-src")}} zurück. Das bedeutet, dass, wenn eine Fetch-Direktive im CSP-Header fehlt, der Benutzeragent nach der `default-src` Direktive suchen wird.

Siehe [Fetch-Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) für eine vollständige Liste.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [CSP](/de/docs/Glossary/CSP)
  - [Reporting-Direktive](/de/docs/Glossary/Reporting_directive)
  - [Document-Direktive](/de/docs/Glossary/Document_directive)
  - [Navigation-Direktive](/de/docs/Glossary/Navigation_directive)
- Referenz
  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
