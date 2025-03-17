---
title: Schutz vor Weiterleitungsverfolgung
slug: Web/Privacy/Guides/Redirect_tracking_protection
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Seit Version 79 schützt Firefox Benutzer vor **Weiterleitungsverfolgung**, indem er regelmäßig Cookies und Website-Daten löscht, die von bekannten Trackern gesetzt wurden. Diese Daten werden nur dann aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) (d.h. die Voreinstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

Die Unterstützung für andere Cookie-Richtlinien wird durch [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Definition der Weiterleitungsverfolgung

Weiterleitungsverfolgung ist ein Missbrauch der navigation über Websites hinweg, bei dem ein Tracker den Benutzer kurzzeitig auf seine eigene Website umlenkt, um den Erstpartei-Speicher zu nutzen und den Benutzer über verschiedene Websites hinweg zu verfolgen.

Cross-Site-Navigationen sind ein Kernmerkmal des Webs; eine Person könnte nach "beste Laufschuhe" in einer Suchmaschine suchen, ein Suchergebnis anklicken, um Bewertungen zu lesen, und schließlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten diese Websites Ressourcen vom selben Tracker einbetten, und der Tracker konnte seine Cookies verwenden, um alle diese Seitenaufrufe mit derselben Person zu verknüpfen. Um die Privatsphäre ihrer Benutzer zu schützen, verhindern Browser, dass Tracker Cookies verwenden, wenn sie in einem Drittparteikontext eingebettet sind (siehe zum Beispiel Firefox' [Verbesserter Schutz vor Aktivitätsverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben ihnen aber weiterhin die Verwendung von Cookies als Erstpartei, da das Blockieren von Erstpartei-Cookies dazu führen könnte, dass Websites nicht mehr funktionieren. Die Weiterleitungsverfolgung nutzt dies aus, um das Blockieren von Drittpartei-Cookies zu umgehen.

Weiterleitungs-Tracker funktionieren, indem sie Sie zu einem kaum wahrnehmbaren und kurzen Zwischenhalt auf ihrer Website zwingen. Anstatt direkt von der Bewertungs-Website zum Einzelhändler zu navigieren, werden Sie zuerst zum Weiterleitungs-Tracker und dann zum Einzelhändler weitergeleitet. Das bedeutet, dass der Tracker als Erstpartei geladen wird. Der Weiterleitungs-Tracker verknüpft Verfolgungsdaten mit den Identifikatoren, die er in seinen Erstpartei-Cookies gespeichert hat, und leitet Sie anschließend an den Einzelhändler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Er hat innerhalb der letzten 72 Stunden Cookies gespeichert oder auf anderen Website-Speicher zugegriffen (z.B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)). Da Cookies hostabhängig sind, löschen wir sowohl die `http`- als auch die `https`-Ursprungsvarianten eines Cookie-Hosts.
2. Der Ursprung wird in unserer Tracking-Schutzliste [als Tracker klassifiziert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basis-Domain ({{Glossary("eTLD", "eTLD+1")}}) hat eine Benutzer-Interaktionsberechtigung.

   - Diese Berechtigung wird einem Ursprung für 45 Tage gewährt, sobald ein Benutzer mit einem top-level Dokument von diesem Ursprung interagiert. "Interagieren" umfasst auch das Scrollen.
   - Obwohl diese Berechtigung auf Ursprungs-Ebene gespeichert wird, überprüfen wir, ob ein Ursprung mit derselben Basis-Domain sie hat, um zu verhindern, dass Websites mit Subdomains und einer entsprechenden Cookie-Konfiguration nicht mehr funktionieren.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/mozilla-central/rev/622dbd3409610ad3f71b56c9a6a92da905dab0aa/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerkcache und Bildcache
- Cookies
- AppCache
- DOM-Quota-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache, etc.)
- DOM-Push-Benachrichtigungen
- Reporting API-Berichte
- Sicherheitseinstellungen (z.B. HSTS)
- EME-Mediaplugindaten
- Plugindaten (z.B. Flash)
- Mediengeräte
- Speicherzugriffsberechtigungen, die dem Ursprung gewährt wurden
- HTTP-Authentifikations-Tokens
- HTTP-Authentifikations-Cache

> [!NOTE]
> Obwohl all diese Daten gelöscht werden, markieren wir derzeit nur Ursprünge zur Löschung, wenn sie Cookies oder andere Website-Speicher verwenden.

Die Speicherlöschung ignoriert Ursprungsattribute. Dies bedeutet, dass der Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher (z.B. von [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) gelöscht wird.

## Wie oft werden Daten gelöscht?

Firefox löscht Speicherung basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, welches durch folgende Bedingungen definiert ist:

- Es wird frühestens 24 Stunden nach dem letzten Auslösen von `idle-daily` ausgeführt.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für >48 Stunden nach dem letzten `idle-daily`) untätig war.

Dies bedeutet, dass mindestens 24 Stunden zwischen jeder Speicherlöschung liegen, und der Speicher nur gelöscht wird, wenn der Browser untätig ist. Beim Löschen von Cookies sortieren wir sie nach dem Erstellungsdatum und teilen sie aus Leistungsgründen in Sätze von 100 (gesteuert durch die Voreinstellung `privacy.purge_trackers.max_purge_count`) ein.

## Debugging

Der Schutz vor Weiterleitungsverfolgung kann aktiviert oder deaktiviert werden, indem Sie die Einstellung `privacy.purge_trackers.enabled` in `about:config` umschalten. Außerdem wird er nur ausgeführt, wenn die `network.cookie.cookieBehavior`-Einstellung auf `4` oder `5` in Firefox 79+ und höher gesetzt ist (`1`, `3`, `4` oder `5` ab Firefox 80).

Verschiedene Protokollebene können über die `privacy.purge_trackers.logging.level`-Einstellung festgelegt werden.

Zu Debugzwecken ist es am einfachsten, die Speicherlöschung direkt über den [Browser-Konsolenbefehl](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies anders ist als die normale [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), die Sie möglicherweise zum Debuggen einer Website verwenden, und dass die Einstellung `devtools.chrome.enabled` auf `true` gesetzt sein muss, um sie interaktiv zu nutzen. Sobald Sie die Browser-Konsole aktiviert haben, können Sie die Speicherlöschung durch Ausführen des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit, bis die Benutzer-Interaktionsberechtigungen ablaufen, kann mit der Einstellung `privacy.userInteraction.expiration` auf einen niedrigeren Wert gesetzt werden. Beachten Sie, dass Sie diese Einstellung vor dem Besuch der Websites setzen müssen, die Sie testen möchten — sie wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit hat erstmals den Schutz vor Weiterleitungsverfolgung in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) (dort als Bounce-Tracking bezeichnet) implementiert. Ab Juli 2020 gibt es mehrere wesentliche Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der in Firefox zu löschenden Ursprünge basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- Die Definition von "Interaktion" bei Firefox umfasst das Benutzer-Scrolling beim Besuch des Ursprungs als Erstpartei; bei WebKit nicht.
- Firefox löscht Daten für einen Ursprung nicht, wenn er in den letzten 45 Kalendertagen als Erstpartei interagiert wurde; das Interaktionsfenster von WebKit beträgt 30 Tage Browser-Nutzung (z.B. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).
