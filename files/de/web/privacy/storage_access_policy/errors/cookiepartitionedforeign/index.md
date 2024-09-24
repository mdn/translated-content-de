---
title: "Partitioniert: Alle Anfragen für den Zugriff auf Drittanbieter-Speicher"
slug: Web/Privacy/Storage_Access_Policy/Errors/CookiePartitionedForeign
l10n:
  sourceCommit: 228e636705a4ee39da5711c434c5a88a2c4621a2
---

{{QuicklinksWithSubPages("Web/Privacy/Storage_Access_Policy/Errors")}}

## Nachricht

Firefox:

```plain
CookiePartitionedForeign=Partitioned cookie
or storage access was provided to "<URL>" because it is loaded in the
third-party context and storage partitioning is enabled.
```

## Was ist schiefgelaufen?

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde _partitioniert_, da sie
von einem Drittanbieter (einem anderen Ursprung) kam und
[dynamische Statuspartitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) aktiviert ist.

Mit aktivierter dynamischer Statuspartitionierung stellt Firefox eingebetteten Ressourcen einen
separaten Speicherbereich für jede übergeordnete Website bereit. Eingebettete Drittanbieter können
Zugriff auf den übergeordneten Speicherbereich über die [Storage Access API](/de/docs/Web/Privacy/State_Partitioning#storage_access_api) anfragen.
Sie können auch die [dynamische Statuspartitionierung deaktivieren](/de/docs/Web/Privacy/State_Partitioning#disable_dynamic_state_partitioning) mit der
`network.cookie.cookieBehavior` Voreinstellung.

## Siehe auch

- [Statuspartitionierung](/de/docs/Web/Privacy/State_Partitioning)
