---
title: "Partitioniert: Alle Anfragen für den Drittanbieter-Speicherzugriff"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookiePartitionedForeign
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde _partitioniert_, weil sie von einem Drittanbieter (einem anderen Ursprung) stammte und [dynamische Zustands-Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning#dynamic_partitioning) aktiviert ist.

## Nachricht

Firefox:

```plain
CookiePartitionedForeign=Partitioned cookie
or storage access was provided to "<URL>" because it is loaded in the
third-party context and storage partitioning is enabled.
```

## Was getan werden kann

Mit aktivierter dynamischer Zustands-Partitionierung stellt Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede übergeordnete Website zur Verfügung. Eingebettete Drittanbieter können über die [Storage Access API](/de/docs/Web/Privacy/Guides/State_Partitioning#storage_access_api) den Zugriff auf den übergeordneten Speicherbereich anfordern. Sie können die [dynamische Zustands-Partitionierung auch deaktivieren](/de/docs/Web/Privacy/Guides/State_Partitioning#disable_dynamic_state_partitioning) mit der Voreinstellung `network.cookie.cookieBehavior`.

## Siehe auch

- [Zustands-Partitionierung](/de/docs/Web/Privacy/Guides/State_Partitioning)
