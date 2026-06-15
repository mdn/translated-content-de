---
title: "Partitioniert: Alle Anfragen Dritter auf Speicherzugriff"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookiePartitionedForeign
l10n:
  sourceCommit: fc801f51100908ad3f4471918cc634d767898874
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde _partitioniert_, weil sie von einem Dritten (einem anderen Ursprung) kam und die [dynamische Zustands-Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning#dynamic_partitioning) aktiviert ist.

## Nachricht

Firefox:

```plain
CookiePartitionedForeign=Partitioned cookie
or storage access was provided to "<URL>" because it is loaded in the
third-party context and storage partitioning is enabled.
```

## Was getan werden kann

Mit aktivierter dynamischer Zustands-Partitionierung stellt Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede Website auf oberster Ebene zur Verfügung. Eingebettete Dritte können über die [Storage Access API](/de/docs/Web/Privacy/Guides/State_Partitioning#storage_access_api) Zugriff auf den obersten Speicherbereich anfordern. Sie können die dynamische Zustands-Partitionierung auch mit der Einstellung `network.cookie.cookieBehavior` [deaktivieren](/de/docs/Web/Privacy/Guides/State_Partitioning#disable_dynamic_state_partitioning).

## Siehe auch

- [Zustands-Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning)
