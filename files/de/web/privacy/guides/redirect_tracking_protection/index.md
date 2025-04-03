---
title: Schutz vor Redirect-Tracking
slug: Web/Privacy/Guides/Redirect_tracking_protection
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

Seit Version 79 schützt Firefox Benutzer vor **Redirect-Tracking**, indem periodisch Cookies und Site-Daten bekannter Tracker gelöscht werden. Diese Daten werden nur dann aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) (d.h. die Einstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

Unterstützung für andere Cookie-Richtlinien wird durch [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Definition von Redirect-Tracking

Redirect-Tracking ist ein Missbrauch der websiteübergreifenden Navigation, bei dem ein Tracker den Benutzer kurzzeitig auf seine Website umleitet, um den First-Party-Speicher zu verwenden, um diesen Benutzer über Websites hinweg zu verfolgen.

Websiteübergreifende Navigationen sind eine Kernfunktion des Webs; eine Person könnte beispielsweise nach "die besten Laufschuhe" in einer Suchmaschine suchen, ein Suchergebnis auswählen, um Bewertungen zu lesen, und schließlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnte jede dieser Websites Ressourcen vom gleichen Tracker einbetten, und der Tracker konnte seine Cookies verwenden, um all diese Seitenbesuche derselben Person zuzuordnen. Zum Schutz der Privatsphäre ihrer Benutzer blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (weitere Informationen finden Sie in Firefox' [Erweitertem Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben ihnen aber dennoch, Cookies als Erstanbieter zu verwenden, da das Blockieren von Erstanbieter-Cookies dazu führen würde, dass Websites nicht mehr funktionieren. Redirect-Tracking nutzt dies aus, um das Blockieren von Drittanbieter-Cookies zu umgehen.

Redirect-Tracker arbeiten, indem sie Sie zu einem unmerklichen und momentanen Zwischenstopp auf ihrer Website zwingen, der Teil dieser Reise ist. Statt direkt von der Bewertungsseite zum Einzelhändler zu navigieren, werden Sie zuerst zum Redirect-Tracker und dann erst zum Einzelhändler weitergeleitet. Dies bedeutet, dass der Tracker als Erstanbieter geladen wird. Der Redirect-Tracker verknüpft Tracking-Daten mit den Identifikatoren, die er in seinen Erstanbieter-Cookies gespeichert hat, und leitet Sie dann zum Einzelhändler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Es wurden Cookies gespeichert oder es wurde auf anderen Webspeicher zugegriffen (z.B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)) innerhalb der letzten 72 Stunden. Da Cookies pro Host vorhanden sind, löschen wir sowohl die `http`- als auch die `https`-Ursprungsvarianten eines Cookie-Hosts.
2. Der Ursprung ist in unserer Tracking-Schutzliste [als Tracker klassifiziert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basisdomäne ({{Glossary("eTLD", "eTLD+1")}}) hat eine Benutzerinteraktionsberechtigung.

   - Diese Berechtigung wird einem Ursprung für 45 Tage gewährt, sobald ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. "Interagieren" schließt Scrollen ein.
   - Obwohl diese Berechtigung auf Ursprungsebene gespeichert wird, überprüfen wir, ob irgendein Ursprung mit derselben Basisdomäne sie besitzt, um zu vermeiden, dass Websites mit Subdomains und einer entsprechenden Cookie-Einrichtung gestört werden.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/mozilla-central/rev/622dbd3409610ad3f71b56c9a6a92da905dab0aa/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quote-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache usw.)
- DOM-Push-Benachrichtigungen
- Reporting-API-Berichte
- Sicherheitseinstellungen (d.h. HSTS)
- EME-Media-Plugin-Daten
- Plug-in-Daten (z.B. Flash)
- Mediengeräte
- Speicherzugriffserlaubnisse für den Ursprung
- HTTP-Authentifiziertokens
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Auch wenn wir alle diese Daten löschen, markieren wir derzeit nur Ursprünge zur Löschung, wenn sie Cookies oder anderen Webspeicher verwenden.

Die Speicherlöschung ignoriert Ursprungsattribute. Dies bedeutet, dass Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher (d.h. durch [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) hinweg gelöscht wird.

## Wie oft werden Daten gelöscht?

Firefox löscht Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert wird:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily`-Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für >48 Stunden nach dem letzten `idle-daily`) inaktiv war.

Dies bedeutet, dass mindestens 24 Stunden zwischen jeder Speicherlöschung liegen, und der Speicher wird nur gelöscht, wenn der Browser inaktiv ist. Beim Löschen von Cookies sortieren wir Cookies nach Erstellungsdatum und teilen sie aus Leistungsgründen in Sätze von 100 (gesteuert durch die Einstellung `privacy.purge_trackers.max_purge_count`) auf.

## Debugging

Der Schutz vor Redirect-Tracking kann aktiviert oder deaktiviert werden, indem die Einstellung `privacy.purge_trackers.enabled` in `about:config` umgeschaltet wird. Außerdem wird er nur ausgeführt, wenn die Einstellung `network.cookie.cookieBehavior` auf `4` oder `5` in Firefox 79+ (auf `1`, `3`, `4` oder `5` ab Firefox 80) gesetzt ist.

Verschiedene Protokollierungsstufen können über die Einstellung `privacy.purge_trackers.logging.level` eingestellt werden.

Zum Debuggen ist es am einfachsten, die Speicherlöschung direkt über die [Browser Console command line](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies sich von der normalen [Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) unterscheidet, die Sie möglicherweise zur Fehlerbehebung einer Website verwenden. Dafür muss die Einstellung `devtools.chrome.enabled` auf `true` gesetzt werden, um sie interaktiv zu nutzen. Sobald Sie die Browser Console aktiviert haben, können Sie die Speicherlöschung auslösen, indem Sie den folgenden Befehl ausführen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit bis zum Ablauf der Benutzerinteraktionsberechtigungen kann mit der Einstellung `privacy.userInteraction.expiration` auf einen geringeren Wert gesetzt werden. Beachten Sie, dass Sie diese Einstellung vor dem Besuch der Websites, die Sie testen möchten, setzen müssen — sie wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit hat erstmals Schutz vor Redirect-Tracking in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt (sie bezeichnen den gleichen Angriff als Bounce-Tracking). Stand Juli 2020 gibt es mehrere signifikante Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der zu löschenden Ursprünge in Firefox basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained); WebKit stützt sich auf die ITP-Klassifizierung.
- Firefox' Definition von "Interaktion" schließt Scrollen durch den Benutzer ein, wenn er den Ursprung als Erstanbieter besucht; bei WebKit ist dies nicht der Fall.
- Firefox löscht keine Daten für einen Ursprung, wenn er in den letzten 45 Kalendertagen als Erstanbieter eine Interaktion erhalten hat; bei WebKit beträgt das Interaktionsfenster 30 Tage tatsächlicher Browsernutzung (z.B. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).
