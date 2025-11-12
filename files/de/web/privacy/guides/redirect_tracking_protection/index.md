---
title: Schutz vor Redirect-Tracking
slug: Web/Privacy/Guides/Redirect_tracking_protection
l10n:
  sourceCommit: 6317c2391f3a94e8c4fba467a1d5bebc46417385
---

Seit Version 79 schützt Firefox Benutzer vor **Redirect-Tracking**, indem er regelmäßig Cookies und Website-Daten löscht, die von bekannten Trackern gesetzt wurden. Diese Daten werden nur dann aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) (d.h. die Voreinstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

> [!NOTE]
> Dieser Artikel bezieht sich auf Firefox' ursprünglichen Mechanismus des Redirect/Bounce-Trackings, der inzwischen durch [Bounce-Tracking-Minderungen](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations) ersetzt wurde.

Unterstützung für andere Cookie-Richtlinien wird durch [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Redirect-Tracking definiert

Redirect-Tracking ist ein Missbrauch der plattformübergreifenden Navigation, bei dem ein Tracker den Benutzer kurzzeitig auf seine Website umleitet, um den lokalen Speicher zu nutzen und so den Benutzer über verschiedene Websites hinweg zu verfolgen.

Plattformübergreifende Navigationen sind eine Kernfunktion des Webs; eine Person könnte zum Beispiel nach "besten Laufschuhen" in einer Suchmaschine suchen, auf ein Suchergebnis klicken, um Bewertungen zu lesen, und schließlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten all diese Websites Ressourcen von demselben Tracker einbetten, und der Tracker konnte seine Cookies verwenden, um alle diese Seitenbesuche derselben Person zuzuordnen. Um die Privatsphäre des Benutzers zu schützen, blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (siehe beispielsweise Firefox' [Verbesserter Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/de/kb/verbesserteschutz-vorabfolgung-protektion)), aber erlauben ihnen immer noch, Cookies als erster Anbieter zu nutzen, da das Blockieren von Erstanbieter-Cookies dazu führt, dass Websites nicht mehr funktionieren. Redirect-Tracking nutzt dies aus, um das Blockieren von Drittanbieter-Cookies zu umgehen.

Redirect-Tracker funktionieren, indem sie den Benutzer dazu zwingen, als Teil dieser Reise einen nicht wahrnehmbaren und momentanen Zwischenstopp auf ihrer Website einzulegen. Anstatt also direkt von der Bewertungs-Website zum Einzelhändler zu navigieren, wird der Benutzer zuerst zum Redirect-Tracker und dann weitergeleitet zum Einzelhändler, was bedeutet, dass der Tracker als Erstanbieter geladen wird. Der Redirect-Tracker verknüpft Tracking-Daten mit den Identifikatoren, die er in seinen Erstanbieter-Cookies gespeichert hat, und leitet den Benutzer dann zum Einzelhändler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Er hat innerhalb der letzten 72 Stunden Cookies gespeichert oder auf anderen Website-Speicher zugegriffen (z.B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache-API](/de/docs/Web/API/CacheStorage)). Da Cookies pro Host gelten, löschen wir sowohl die `http`- als auch die `https`-Ursprungsvarianten eines Cookie-Hosts.
2. Der Ursprung ist in unserer Tracking-Schutzliste [als Tracker klassifiziert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basis-Domain ({{Glossary("eTLD", "eTLD+1")}}) hat eine Benutzerinteraktionsberechtigung.
   - Diese Berechtigung wird einem Ursprung für 45 Tage erteilt, nachdem ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. "Interaktion" umfasst das Scrollen.
   - Obwohl diese Berechtigung auf Ursprungsebene gespeichert wird, prüfen wir, ob einer der Ursprünge mit derselben Basis-Domain sie hat, um zu vermeiden, dass Seiten mit Subdomains und einer entsprechenden Cookie-Konfiguration gestört werden.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/firefox-main/rev/9767e215f62521af8168bfb6fb4275755868f0db/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quota-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache usw.)
- DOM-Push-Benachrichtigungen
- Reporting-API-Berichte
- Sicherheitseinstellungen (d.h. HSTS)
- EME-Mediaplugindaten
- Plugindaten (z.B. Flash)
- Mediengeräte
- Speicherzugangsberechtigungen, die dem Ursprung gewährt wurden
- HTTP-Authentifizierungstoken
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Auch wenn all diese Daten gelöscht werden, markieren wir derzeit nur Ursprünge zur Löschung, wenn sie Cookies oder anderen Website-Speicher verwenden.

Das Löschen des Speichers ignoriert Ursprungsattribute. Dies bedeutet, dass der Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher (d.h. von [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) hinweg gelöscht wird.

## Wie häufig werden Daten gelöscht?

Firefox löscht den Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert wird:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily`-Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten inaktiv war (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für >48 Stunden nach dem letzten `idle-daily`).

Dies bedeutet, dass zwischen jeder Speicherräumung mindestens 24 Stunden liegen und der Speicher nur gelöscht wird, wenn der Browser inaktiv ist. Beim Löschen von Cookies sortieren wir Cookies nach Erstellungsdatum und gruppieren sie aus Leistungsgründen in Sätze von 100 (gesteuert durch die Voreinstellung `privacy.purge_trackers.max_purge_count`).

## Debugging

Der Schutz vor Redirect-Tracking kann aktiviert oder deaktiviert werden, indem die Einstellung `privacy.purge_trackers.enabled` in `about:config` geändert wird. Außerdem wird er nur ausgeführt, wenn die Einstellung `network.cookie.cookieBehavior` auf `4` oder `5` in Firefox ab Version 79+ (jeweils `1`, `3`, `4` oder `5` ab Firefox 80) gesetzt ist.

Verschiedene Protokollebene können über die Voreinstellung `privacy.purge_trackers.logging.level` gesetzt werden.

Zu Debugging-Zwecken ist es am einfachsten, die Speicherräumung direkt über die [Befehlszeile der Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies sich von der normalen [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) unterscheidet, die Sie möglicherweise zum Debuggen einer Website verwenden, und dass die Voreinstellung `devtools.chrome.enabled` auf `true` gesetzt sein muss, um sie interaktiv zu nutzen. Nachdem Sie die Browser-Konsole aktiviert haben, können Sie die Speicherräumung durch Ausführen des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit bis zum Ablauf der Benutzerinteraktionsberechtigungen kann durch die Einstellung `privacy.userInteraction.expiration` auf einen niedrigeren Wert gesetzt werden. Beachten Sie, dass Sie diese Einstellung vor dem Besuch der Websites, die Sie testen möchten, setzen müssen – sie wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit führte erstmals einen Schutz gegen Redirect-Tracking in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) ein (sie bezeichnen denselben Angriff als Bounce-Tracking). Ab Juli 2020 gibt es mehrere bedeutende Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der Ursprünge, die in Firefox gelöscht werden sollen, basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained); WebKit stützt sich auf die Klassifizierung von ITP.
- Die Definition von "Interaktion" in Firefox umfasst das Scrollen des Benutzers, wenn er den Ursprung als Erstanbieter besucht; bei WebKit ist dies nicht der Fall.
- Firefox wird keine Daten für einen Ursprung löschen, wenn er als Erstanbieter in den letzten 45 Tagen Kalenderzeit Interaktion erhalten hat; das Interaktionsfenster von WebKit beträgt 30 Tage Browsernutzung (z.B. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).
