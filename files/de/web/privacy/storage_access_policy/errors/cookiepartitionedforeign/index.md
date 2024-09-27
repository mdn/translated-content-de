---
title: "Partitioned: Alle Zugriffsanfragen auf Drittanbieter-Speicher"
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

Eine Anfrage auf Zugriff auf Cookies oder Speicher wurde _partitioniert_, da sie
von einem Drittanbieter (einem anderen Ursprung) kam und
[dynamische Status-Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) aktiviert ist.

Wenn die dynamische Status-Partitionierung aktiviert ist, bietet Firefox eingebetteten Ressourcen einen
separaten Speicherbereich für jede oberste Website. Eingebettete Drittanbieter können
über die [Storage Access API](/de/docs/Web/Privacy/State_Partitioning#storage_access_api) Zugriff auf den obersten Speicherbereich anfordern.
Sie können auch die [dynamische Status-Partitionierung deaktivieren](/de/docs/Web/Privacy/State_Partitioning#disable_dynamic_state_partitioning) mit der
`network.cookie.cookieBehavior` Einstellung.

## Siehe auch

- [Status-Partitionierung](/de/docs/Web/Privacy/State_Partitioning)
