---
title: Schutz vor Umleitungs-Tracking
slug: Web/Privacy/Guides/Redirect_tracking_protection
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

Seit Version 79 schützt Firefox Benutzer vor **Umleitungs-Tracking**, indem er regelmäßig Cookies und Website-Daten löscht, die von bekannten Trackern gesetzt wurden. Diese Daten werden nur aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) (d.h. die Einstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

> [!NOTE]
> Dieser Artikel bezieht sich auf den ursprünglichen Umleitungs-/Bounce-Tracking-Mechanismus von Firefox, der inzwischen durch [Bounce-Tracking-Abschwächungen](/de/docs/Web/Privacy/Guides/Bounce_tracking_mitigations) ersetzt wurde.

Die Unterstützung für andere Cookie-Richtlinien wird durch [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Definition von Umleitungs-Tracking

Umleitungs-Tracking ist ein Missbrauch der seitenübergreifenden Navigation, bei dem ein Tracker den Benutzer kurzzeitig auf seine Website umleitet, um den Erstparteien-Speicher zu nutzen, um diesen Benutzer über mehrere Websites hinweg zu verfolgen.

Seitenübergreifende Navigationen sind ein Kernmerkmal des Webs; eine Person könnte nach "beste Laufschuhe" in einer Suchmaschine suchen, auf ein Suchergebnis klicken, um Bewertungen zu lesen, und schließlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten diese Websites Ressourcen des gleichen Trackers einbetten, und der Tracker konnte seine Cookies verwenden, um all diese Seitenbesuche derselben Person zuzuordnen. Um die Privatsphäre ihrer Benutzer zu schützen, blockieren Browser Tracker daran, Cookies zu nutzen, wenn sie in einem Drittanbieterkontext eingebettet sind (siehe zum Beispiel Firefox' [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben es aber dennoch, Cookies als Erstpartei zu verwenden, weil das Blockieren von Erstparteien-Cookies dazu führen würde, dass Websites nicht mehr richtig funktionieren. Umleitungs-Tracking nutzt dies aus, um die Blockierung von Drittanbietern-Cookies zu umgehen.

Umleitungs-Tracker funktionieren, indem Sie dazu gezwungen werden, als Teil dieser Reise eine unmerkliche und momentane Zwischenstation auf deren Website zu machen. Anstatt also direkt von der Bewertungs-Website zum Händler zu navigieren, gelangen Sie zuerst zum Umleitungs-Tracker und erst dann weiter zum Händler. Das bedeutet, dass der Tracker als Erstpartei geladen wird. Der Umleitungs-Tracker verknüpft Tracking-Daten mit den Kennungen, die in seinen Erstparteien-Cookies gespeichert sind, und leitet Sie dann zum Händler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Er hat in den letzten 72 Stunden Cookies gespeichert oder auf andere Website-Speicher zugegriffen (z. B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)). Da Cookies pro Host gespeichert werden, löschen wir sowohl die `http`- als auch die `https`-Origin-Varianten eines Cookie-Hosts.
2. Der Ursprung ist in unserer Tracking-Schutzliste [als Tracker eingestuft](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben {{Glossary("registrable_domain", "registrierbaren Domain")}} hat eine Benutzerinteraktionsberechtigung.
   - Diese Berechtigung wird einem Ursprung für 45 Tage gewährt, wenn ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. "Interagieren" schließt Scrollen ein.
   - Obwohl diese Berechtigung auf der Ursprungsebene gespeichert wird, prüfen wir, ob irgendein Ursprung mit derselben Basisdomain sie hat, um zu vermeiden, dass Websites mit Subdomains und einem entsprechenden Cookie-Setup beeinträchtigt werden.

## Welche Daten werden gelöscht?

Firefox wird die [folgenden Daten löschen](https://searchfox.org/firefox-main/rev/9767e215f62521af8168bfb6fb4275755868f0db/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quote-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache usw.)
- DOM-Push-Benachrichtigungen
- Berichte von Reporting-API
- Sicherheitseinstellungen (z. B. HSTS)
- EME-Mediaplug-In-Daten
- Plug-In-Daten (z. B. Flash)
- Mediengeräte
- Zugriffsberechtigungen auf Speicher, die dem Ursprung gewährt wurden
- HTTP-Authentifizierungs-Token
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Obwohl wir all diese Daten löschen, markieren wir derzeit nur Ursprünge zur Löschung, wenn sie Cookies oder andere Website-Speicher verwenden.

Die Löschung von Speicher ignoriert Ursprungsattribute. Das bedeutet, dass Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher hinweg gelöscht wird (d.h. von [First-Party-Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)).

## Wie häufig werden Daten gelöscht?

Firefox löscht Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert ist:

- Es wird frühestens 24 Stunden nach dem letzten Auslösen des `idle-daily` Ereignisses ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten inaktiv war (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für >48 Stunden nach dem letzten `idle-daily`).

Dies bedeutet, dass zwischen jedem Speicherlöschvorgang mindestens 24 Stunden liegen, und Speicher wird nur gelöscht, wenn der Browser inaktiv ist. Beim Löschen von Cookies sortieren wir diese nach Erstellungsdatum und bündeln sie aus Leistungsgründen in Gruppen von 100 (gesteuert durch die Einstellung `privacy.purge_trackers.max_purge_count`).

## Debugging

Der Schutz vor Umleitungs-Tracking kann aktiviert oder deaktiviert werden, indem die Einstellung `privacy.purge_trackers.enabled` in `about:config` umgeschaltet wird. Außerdem wird er nur ausgeführt, wenn die Einstellung `network.cookie.cookieBehavior` auf `4` oder `5` in Firefox 79+ gesetzt ist (`1`, `3`, `4`, oder `5` ab Firefox 80).

Verschiedene Protokollebene können über die Einstellung `privacy.purge_trackers.logging.level` festgelegt werden.

Für Debugging-Zwecke ist es am einfachsten, die Speicherlöschung direkt über die [Browser-Konsole Befehlszeile](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies sich von der normalen [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) unterscheidet, die Sie möglicherweise verwenden, um eine Website zu debuggen, und dass die Einstellung `devtools.chrome.enabled` auf `true` gesetzt sein muss, um sie interaktiv zu nutzen. Sobald Sie die Browser-Konsole aktiviert haben, können Sie die Speicherlöschung durch Ausführen des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit bis zum Ablauf der Benutzerinteraktionsberechtigungen kann mit der Einstellung `privacy.userInteraction.expiration` auf einen geringeren Betrag gesetzt werden. Beachten Sie, dass Sie diese Einstellung vor dem Besuch der Websites, die Sie testen möchten, setzen müssen — sie wirkt nicht rückwirkend.

## Andere Implementierungen

WebKit hat erstmals Schutzmaßnahmen gegen Umleitungs-Tracking in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt (sie beziehen sich auf den gleichen Angriff als Bounce-Tracking). Stand Juli 2020 gibt es einige wesentliche Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der in Firefox zu löschenden Ursprünge basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- Firefox' Definition von "Interaktion" umfasst das Scrollen der Benutzer, wenn der Ursprung als Erstpartei besucht wird; WebKit's Definition umfasst dies nicht.
- Firefox wird keine Daten für einen Ursprung löschen, wenn er als Erstpartei innerhalb der letzten 45 Kalendertage eine Interaktion erhalten hat; das Interaktionsfenster von WebKit beträgt 30 Tage Browsernutzung (z. B. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).
