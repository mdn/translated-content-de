---
title: Schwache Signaturalgorithmen
slug: Web/Security/Weak_Signature_Algorithm
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Stärke des in der [Signierung](/de/docs/Glossary/Signature/Security) eines [digitalen Zertifikats](/de/docs/Glossary/Digital_certificate) verwendeten Hash-Algorithmus ist ein entscheidendes Element für die Sicherheit des Zertifikats. Dieser Artikel liefert Informationen über Signaturalgorithmen, die als schwach bekannt sind, damit Sie diese in geeigneten Fällen vermeiden können.

Schwächen in Hash-Algorithmen können zu Situationen führen, in denen Angreifer gefälschte Zertifikate erstellen oder erlangen können. Da neue Angriffe entdeckt werden und Verbesserungen in der verfügbaren Technologie Angriffe machbarer machen, wird die Nutzung älterer Algorithmen entmutigt und deren Unterstützung schließlich entfernt.

## SHA-1

SHA-1-Zertifikate werden ab 2017 von großen Browserherstellern nicht mehr als sicher behandelt. Stattdessen sollten Zertifikate verwendet werden, die sicherere Hash-Algorithmen verwenden (wie SHA-256 oder SHA-512).

## MD5

Die Unterstützung für auf MD5 basierende Signaturen wurde Anfang 2012 entfernt.

## Siehe auch

- [Mozilla Security Blogpost](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/) über die Abkehr von SHA-1-basierten Signaturalgorithmen
