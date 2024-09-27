---
title: Schwache Signaturalgorithmen
slug: Web/Security/Weak_Signature_Algorithm
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Stärke des Hash-Algorithmus, der beim [Signieren](/de/docs/Glossary/Signature/Security) eines [digitalen Zertifikats](/de/docs/Glossary/Digital_certificate) verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Dieser Artikel bietet einige Informationen über Signaturalgorithmen, die als schwach bekannt sind, damit Sie diese, falls angemessen, vermeiden können.

Schwächen in Hash-Algorithmen können zu Situationen führen, in denen Angreifer gefälschte Zertifikate erstellen oder erhalten können. Da neue Angriffe entdeckt werden und Verbesserungen in der verfügbaren Technologie Angriffe machbarer machen, wird der Einsatz älterer Algorithmen abgeraten und deren Unterstützung schließlich entfernt.

## SHA-1

SHA-1 Zertifikate werden ab 2017 von den großen Browserherstellern nicht mehr als sicher behandelt. Zertifikate, die sicherere Hash-Algorithmen verwenden (wie SHA-256 oder SHA-512), sollten stattdessen eingesetzt werden.

## MD5

Die Unterstützung für MD5-basierte Signaturen wurde Anfang 2012 entfernt.

## Siehe auch

- [Mozilla Security Blogpost](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/) zur Abschaffung von SHA-1
