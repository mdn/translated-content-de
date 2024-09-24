---
title: Fetch-Direktive
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**{{Glossary("CSP")}} Fetch-Direktiven** werden in einem {{HTTPHeader("Content-Security-Policy")}}-Header verwendet und kontrollieren, von welchen Standorten bestimmte Ressourcentypen geladen werden dürfen. Beispielsweise erlaubt {{CSP("script-src")}} Entwicklern, vertrauenswürdige Quellen von Skripten auf einer Seite auszuführen, während {{CSP("font-src")}} die Quellen von Web-Schriften kontrolliert.

Alle Fetch-Direktiven greifen auf {{CSP("default-src")}} zurück. Das bedeutet, wenn eine Fetch-Direktive im CSP-Header fehlt, sucht der Benutzeragent nach der `default-src`-Direktive.

Sehen Sie sich die [Fetch-Direktiven](/de/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives) für eine vollständige Liste an.

## Siehe auch

- Verwandte Begriffe im Glossar:
  - {{Glossary("CSP")}}
  - {{Glossary("Reporting directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}
- Referenz
  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
