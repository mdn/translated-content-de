---
title: Schutz vor Umleitungsverfolgung
slug: Web/Privacy/Guides/Redirect_tracking_protection
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Seit Version 79 schützt Firefox Benutzer vor **Umleitungsverfolgung**, indem es periodisch Cookies und Webseitendaten leert, die von bekannten Trackern gesetzt wurden. Diese Daten werden nur aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) (d.h. die Einstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

Unterstützung für andere Cookie-Politiken wird unter [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Umleitungsverfolgung definiert

Umleitungsverfolgung ist ein Missbrauch der cross-site Navigation, bei dem ein Tracker den Benutzer kurzzeitig auf seine Webseite umleitet, um den Erstpartei-Speicher zu nutzen, um diesen Benutzer über verschiedene Webseiten hinweg zu verfolgen.

Cross-site Navigations sind ein Kernelement des Webs; jemand könnte nach "beste Laufschuhe" bei einer Suchmaschine suchen, ein Suchergebnis anklicken, um Rezensionen zu lesen, und schließlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten jede dieser Webseiten Ressourcen von demselben Tracker einbetten, und der Tracker konnte seine Cookies nutzen, um alle diese Seitenbesuche derselben Person zuzuordnen. Um die Privatsphäre ihrer Benutzer zu schützen, blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (siehe beispielsweise Firefox's [Verstärkter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben es ihnen aber weiterhin, Cookies als Erstpartei zu verwenden, da das Blockieren von Erstpartei-Cookies dazu führt, dass Webseiten nicht mehr richtig funktionieren. Umleitungsverfolgung nutzt dies aus, um das Blockieren von Drittanbieter-Cookies zu umgehen.

Redirect-Tracker funktionieren, indem Sie dazu gezwungen werden, einen nicht wahrnehmbaren und momentanen Zwischenstopp auf ihrer Webseite einzulegen als Teil dieser Reise. Anstatt also direkt von der Bewertungswebseite zum Einzelhändler zu navigieren, gelangen Sie zunächst zu dem Redirect-Tracker, bevor Sie zum Einzelhändler weitergeleitet werden. Dies bedeutet, dass der Tracker als Erstpartei geladen wird. Der Redirect-Tracker verknüpft Verfolgungsdaten mit den Identifikatoren, die sie in ihren Erstpartei-Cookies gespeichert haben, und leitet Sie dann weiter zum Einzelhändler.

## Welche Ursprünge werden geleert?

Ein Ursprung wird geleert, wenn er die folgenden Bedingungen erfüllt:

1. Er hat innerhalb der letzten 72 Stunden Cookies gespeichert oder auf anderen Webspeicher zugegriffen (z. B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API), oder die [Cache-API](/de/docs/Web/API/CacheStorage)). Da Cookies pro Host gespeichert werden, löschen wir sowohl die `http`- als auch die `https`-Ursprungsvarianten eines Cookie-Hosts.
2. Der Ursprung ist in unserer Tracking-Schutzliste [als Tracker klassifiziert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basisdomäne ({{Glossary("eTLD", "eTLD+1")}}) verfügt über eine Benutzerinteraktionsberechtigung.
   - Diese Berechtigung wird einem Ursprung für 45 Tage gewährt, sobald ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. "Interagieren" umfasst das Scrollen.
   - Obwohl diese Berechtigung auf Ursprungsbasis gespeichert wird, prüfen wir, ob irgendein Ursprung mit derselben Basisdomäne sie hat, um zu vermeiden, dass Webseiten mit Subdomains und einer entsprechenden Cookie-Konfiguration beeinträchtigt werden.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/mozilla-central/rev/622dbd3409610ad3f71b56c9a6a92da905dab0aa/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quote-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache, usw.)
- DOM-Push-Benachrichtigungen
- Reporting-API-Berichte
- Sicherheitseinstellungen (d.h. HSTS)
- EME-Mediaplugindaten
- Plugindaten (z. B. Flash)
- Mediengeräte
- Zugriffsberechtigungen für Speicher, die dem Ursprung gewährt wurden
- HTTP-Authentifizierungstoken
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Auch wenn wir all diese Daten löschen, kennzeichnen wir aktuell nur Ursprünge für die Löschung, wenn sie Cookies oder anderen Webspeicher verwenden.

Das Leeren des Speichers ignoriert Ursprungsattribute. Das bedeutet, dass der Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher (d.h. von [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) hinweg geleert wird.

## Wie häufig werden Daten geleert?

Firefox leert den Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert ist:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily`-Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für >48 Stunden nach dem letzten `idle-daily`) untätig war.

Das bedeutet, dass zwischen jeder Speicherbereinigung mindestens 24 Stunden liegen und der Speicher nur geleert wird, wenn der Browser untätig ist. Beim Leeren von Cookies sortieren wir Cookies nach Erstellungsdatum und unterteilen sie zur Leistungssteigerung in Sätze von 100 (gesteuert durch die Einstellung `privacy.purge_trackers.max_purge_count`).

## Debugging

Der Schutz vor Umleitungsverfolgung kann aktiviert oder deaktiviert werden, indem die Einstellung `privacy.purge_trackers.enabled` in `about:config` umgeschaltet wird. Außerdem wird er nur ausgeführt, wenn die `network.cookie.cookieBehavior`-Einstellung in Firefox 79+ auf `4` oder `5` (`1`, `3`, `4` oder `5` ab Firefox 80) gesetzt ist.

Verschiedene Protokollebenen können über die Einstellung `privacy.purge_trackers.logging.level` festgelegt werden.

Zu Debugging-Zwecken ist es am einfachsten, die Speicherbereinigung auszulösen, indem der Dienst direkt über die [Browser-Konsole-Befehlszeile](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) ausgelöst wird. Beachten Sie, dass dies sich von der normalen [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) unterscheidet, die Sie möglicherweise zur Fehlersuche auf einer Webseite verwenden, und dass die Einstellung `devtools.chrome.enabled` auf `true` gesetzt sein muss, um sie interaktiv zu verwenden. Sobald Sie die Browser-Konsole aktiviert haben, können Sie die Speicherbereinigung durch Ausführen des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit bis zum Ablauf der Benutzerinteraktionsberechtigungen kann auf einen niedrigeren Wert gesetzt werden, indem die Einstellung `privacy.userInteraction.expiration` angepasst wird. Beachten Sie, dass Sie diese Einstellung setzen müssen, bevor Sie die Webseiten besuchen, die Sie testen möchten — sie wird nicht rückwirkend angewendet.

## Weitere Implementierungen

WebKit führte den Schutz vor Umleitungsverfolgung erstmals in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) ein (sie bezeichnen denselben Angriff als "bounce tracking"). Ab Juli 2020 gibt es mehrere wesentliche Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der in Firefox zu löschenden Ursprünge basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- Die Definition von "Interaktion" in Firefox umfasst das Scrollen des Benutzers beim Besuch des Ursprungs als Erstpartei; WebKit tut dies nicht.
- Firefox wird keine Daten für einen Ursprung löschen, wenn er in den letzten 45 Kalendertagen als Erstpartei interagiert hat; das Interaktionsfenster von WebKit beträgt 30 Tage der Browsernutzung (d.h. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).
