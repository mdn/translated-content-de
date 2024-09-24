---
title: Schwache Signaturalgorithmen
slug: Web/Security/Weak_Signature_Algorithm
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/de/docs/Web/Security")}}

Die Stärke des Hash-Algorithmus, der beim {{Glossary("Signature/Security", "Signieren")}} eines {{Glossary("Digital certificate", "digitalen Zertifikats")}} verwendet wird, ist ein kritisches Element der Sicherheit des Zertifikats. Dieser Artikel liefert einige Informationen über Signaturalgorithmen, die als schwach bekannt sind, damit Sie diese nach Möglichkeit vermeiden können.

Schwächen in Hash-Algorithmen können zu Situationen führen, in denen Angreifer gefälschte Zertifikate erstellen oder erhalten können. Da neue Angriffe gefunden werden und Verbesserungen in der verfügbaren Technologie Angriffe machbarer machen, wird die Nutzung älterer Algorithmen entmutigt und der Support für sie schließlich eingestellt.

## SHA-1

SHA-1-Zertifikate werden ab 2017 von großen Browserherstellern nicht mehr als sicher angesehen. Stattdessen sollten Zertifikate verwendet werden, die sicherere Hash-Algorithmen (wie SHA-256 oder SHA-512) verwenden.

## MD5

Unterstützung für Signaturen auf Basis von MD5 wurde Anfang 2012 entfernt.

## Siehe auch

- [Mozilla Sicherheitsblogbeitrag](https://blog.mozilla.org/security/2014/09/23/phasing-out-certificates-with-sha-1-based-signature-algorithms/) zur Einstellung von SHA-1-basierten Signaturalgorithmen
