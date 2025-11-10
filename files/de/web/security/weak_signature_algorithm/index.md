---
title: Schwache Signaturalgorithmen
slug: Web/Security/Weak_Signature_Algorithm
l10n:
  sourceCommit: ade8d870ed7e18a71dc51fe25aa13d812fb82558
---

Die Stärke des Hash-Algorithmus, der beim {{Glossary("Signature/Security", "Signieren")}} eines {{Glossary("Digital_certificate", "digitalen Zertifikats")}} verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Dieser Artikel bietet einige Informationen über Signaturalgorithmen, die als schwach bekannt sind, damit Sie diese bei Bedarf vermeiden können.

Schwächen in Hash-Algorithmen können zu Situationen führen, in denen Angreifer gefälschte Zertifikate erstellen oder erhalten können. Da neue Angriffe entdeckt werden und technologische Verbesserungen Angriffe machbarer machen, wird die Verwendung älterer Algorithmen nicht mehr empfohlen und die Unterstützung für sie wird schließlich entfernt.

## SHA-1

SHA-1-Zertifikate werden ab 2017 von den großen Browserherstellern nicht mehr als sicher angesehen. Stattdessen sollten Zertifikate mit sichereren Hash-Algorithmen (wie SHA-256 oder SHA-512) verwendet werden.

## MD5

Die Unterstützung für auf MD5 basierende Signaturen wurde Anfang 2012 entfernt.

## Siehe auch

- [Mozilla Security Blogpost](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/) über die Ausphasierung von SHA-1-basierten Signaturalgorithmen
