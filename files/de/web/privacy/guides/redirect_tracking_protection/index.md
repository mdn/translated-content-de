---
title: Schutz vor Redirect-Tracking
slug: Web/Privacy/Guides/Redirect_tracking_protection
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

Seit Version 79 schützt Firefox Nutzer vor **Redirect-Tracking**, indem er Cookies und Site-Daten von bekannten Trackern regelmäßig löscht. Diese Daten werden nur aus dem Speicher gelöscht, wenn der Nutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) (d.h. die Voreinstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

> [!NOTE]
> Dieser Artikel bezieht sich auf den ursprünglichen Redirect/Bounce-Tracking-Mechanismus von Firefox, der mittlerweile durch [Bounce Tracking Milderungen](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations) ersetzt wurde.

Die Unterstützung für andere Cookie-Politiken wird durch [Fehler 1643045](https://bugzil.la/1643045) verfolgt.

## Definition von Redirect-Tracking

Redirect-Tracking ist ein Missbrauch von Cross-Site-Navigationen, bei dem ein Tracker den Nutzer vorübergehend auf seine Website umleitet, um den Erstanbieterspeicher zu nutzen, um den Nutzer über Websites hinweg zu verfolgen.

Cross-Site-Navigationen sind ein Kernelement des Webs; eine Person könnte nach "beste Laufschuhe" in einer Suchmaschine suchen, auf ein Suchergebnis klicken, um Bewertungen zu lesen, und schließlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten diese Websites Ressourcen von demselben Tracker einbetten, und der Tracker konnte seine Cookies verwenden, um alle diese Seitenbesuche mit derselben Person zu verknüpfen. Um die Privatsphäre ihrer Nutzer zu schützen, blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (siehe zum Beispiel Firefox' [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben ihnen aber dennoch, Cookies als Erstanbieter zu verwenden, da das Blockieren von Erstanbieter-Cookies Websites zum Absturz bringen würde. Redirect-Tracking nutzt dies aus, um die Blockierung von Drittanbieter-Cookies zu umgehen.

Redirect-Tracker funktionieren, indem sie Sie zwingen, einen unmerklichen und momentanen Zwischenstopp auf ihrer Website als Teil dieser Reise einzulegen. So navigieren Sie statt direkt von der Bewertungsseite zum Händler, erst zum Redirect-Tracker und dann zum Händler. Das bedeutet, dass der Tracker als Erstanbieter geladen wird. Der Redirect-Tracker verknüpft Tracking-Daten mit den Kennungen, die er in seinen Erstanbieter-Cookies gespeichert hat, und leitet Sie dann an den Händler weiter.

## Welche Herkunftsdaten werden gelöscht?

Eine Herkunft wird gelöscht, wenn sie die folgenden Bedingungen erfüllt:

1. Sie hat innerhalb der letzten 72 Stunden Cookies gespeichert oder auf anderen Speichern zugegriffen (z. B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)). Da Cookies pro Host gespeichert werden, löschen wir sowohl die `http` als auch die `https` Varianten eines Cookie-Hosts.
2. Die Herkunft ist in unserer Liste des Tracking-Schutzes als [Tracker klassifiziert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained).
3. Keine Herkunft mit derselben Basisdomäne ({{Glossary("eTLD", "eTLD+1")}}) hat eine Benutzer-Interaktionsberechtigung.
   - Diese Berechtigung wird einer Herkunft für 45 Tage erteilt, sobald ein Nutzer mit einem Top-Level-Dokument von dieser Herkunft interagiert. "Interagieren" umfasst das Scrollen.
   - Obwohl diese Berechtigung auf Basis der Herkunft gespeichert wird, überprüfen wir, ob eine Herkunft mit derselben Basisdomäne diese Berechtigung hat, um zu vermeiden, dass Websites mit Subdomains und entsprechender Cookie-Einrichtung beschädigt werden.

## Welche Daten werden gelöscht?

Firefox wird die [folgenden Daten](https://searchfox.org/firefox-main/rev/9767e215f62521af8168bfb6fb4275755868f0db/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225) löschen:

- Netzwerk-Cache und Bildcache
- Cookies
- AppCache
- DOM-Quota-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache usw.)
- DOM-Push-Benachrichtigungen
- Reporting-API-Berichte
- Sicherheitseinstellungen (z. B. HSTS)
- EME Media Plugin-Daten
- Plugin-Daten (z. B. Flash)
- Mediengeräte
- Speichergenehmigungen, die der Herkunft gewährt wurden
- HTTP-Authentifizierungstoken
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Obwohl wir all diese Daten löschen, markieren wir derzeit Ursprünge nur zur Löschung, wenn sie Cookies oder andere Speicherdaten verwenden.

Die Speicherlöschung ignoriert Herkunftsattributen. Dies bedeutet, dass der Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) hinweg und in isoliertem Speicher (d.h. von [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) gelöscht wird.

## Wie häufig werden Daten gelöscht?

Firefox löscht den Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert ist:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily`-Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Nutzer mindestens 3 Minuten (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (>48 Stunden nach dem letzten `idle-daily`) im Leerlauf war.

Dies bedeutet, dass mindestens 24 Stunden zwischen jeder Speicherlöschung liegen und der Speicher nur gelöscht wird, wenn der Browser im Leerlauf ist. Beim Löschen von Cookies sortieren wir Cookies nach Erstellungsdatum und teilen sie aus Leistungsgründen in Sätze von 100 (gesteuert durch die Voreinstellung `privacy.purge_trackers.max_purge_count`) auf.

## Debugging

Der Schutz vor Redirect-Tracking kann aktiviert oder deaktiviert werden, indem die Voreinstellung `privacy.purge_trackers.enabled` in `about:config` umgeschaltet wird. Außerdem wird der Schutz nur ausgeführt, wenn die Voreinstellung `network.cookie.cookieBehavior` auf `4` oder `5` in Firefox 79+ gesetzt ist (`1`, `3`, `4` oder `5` ab Firefox 80).

Verschiedene Protokollebeben können über die Voreinstellung `privacy.purge_trackers.logging.level` festgelegt werden.

Zu Debugging-Zwecken ist es am einfachsten, die Speicherlöschung direkt über die [Befehlszeile der Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies sich von der normalen [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) unterscheidet, die Sie möglicherweise zum Debuggen einer Website verwenden, und erfordert die Voreinstellung `devtools.chrome.enabled` auf `true` gesetzt, um sie interaktiv zu nutzen. Sobald Sie die Browser-Konsole aktiviert haben, können Sie die Speicherlöschung durch Ausführung des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit, bis Benutzerinteraktionsberechtigungen ablaufen, kann mit der Voreinstellung `privacy.userInteraction.expiration` auf einen niedrigeren Wert gesetzt werden. Beachten Sie, dass Sie diese Einstellung vor dem Besuch der Websites, die Sie testen möchten, setzen müssen – sie wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit hat erstmals Schutz vor Redirect-Tracking in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt (sie bezeichnen denselben Angriff als Bounce-Tracking). Stand Juli 2020 gibt es mehrere wesentliche Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der Ursprünge, die in Firefox gelöscht werden, basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- Die Definition von "Interaktion" in Firefox umfasst das Scrollen des Nutzers beim Besuch der Herkunft als Erstanbieter; die von WebKit nicht.
- Firefox wird keine Daten für eine Herkunft löschen, wenn diese in den letzten 45 Kalendertagen eine Interaktion als Erstanbieter erhalten hat; WebKits Interaktionsfenster beträgt 30 Tage Browsernutzung (z. B. Tage, an denen der Nutzer mindestens eine Interaktion mit Safari hatte).
