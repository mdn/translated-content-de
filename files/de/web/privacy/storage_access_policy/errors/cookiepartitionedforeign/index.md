---
title: "Partitioned: Alle Anfragen für Drittanbieter-Speicherzugriff"
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

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde _unterteilt_, weil sie von einem Drittanbieter (einem anderen Ursprung) kam und [dynamische Zustandsaufteilung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) aktiviert ist.

Mit aktivierter dynamischer Zustandsaufteilung bietet Firefox eingebetteten Ressourcen einen separaten Speicherbereich für jede Top-Level-Website. Eingebettete Drittanbieter können über die [Storage Access API](/de/docs/Web/Privacy/State_Partitioning#storage_access_api) Zugriff auf den Top-Level-Speicherbereich anfordern. Sie können die dynamische Zustandsaufteilung auch mit der `network.cookie.cookieBehavior`-Einstellung [deaktivieren](/de/docs/Web/Privacy/State_Partitioning#disable_dynamic_state_partitioning).

## Siehe auch

- [Zustandsaufteilung](/de/docs/Web/Privacy/State_Partitioning)
