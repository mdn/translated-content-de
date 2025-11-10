---
title: Schutz vor Weiterleitungstracking
slug: Web/Privacy/Guides/Redirect_tracking_protection
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

Seit Version 79 schützt Firefox Benutzer vor **Weiterleitungstracking**, indem er regelmäßig Cookies und Site-Daten von bekannten Trackern löscht. Diese Daten werden nur aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy) (d.h. die Voreinstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

Die Unterstützung für andere Cookie-Richtlinien wird durch [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Definition von Weiterleitungstracking

Weiterleitungstracking ist ein Missbrauch der websiteübergreifenden Navigation, bei dem ein Tracker den Benutzer vorübergehend auf seine Website umleitet, um den Speicher der Erstanbieter zu verwenden, um diesen Benutzer über Websites hinweg zu verfolgen.

Websiteübegreifende Navigation ist eine Kernfunktion des Internets; eine Person könnte nach "beste Laufschuhe" in einer Suchmaschine suchen, auf ein Suchergebnis klicken, um Rezensionen zu lesen, und schließlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten diese Websites Ressourcen von demselben Tracker einbetten, und der Tracker konnte seine Cookies verwenden, um alle diese Seitenbesuche mit derselben Person zu verknüpfen. Um die Privatsphäre ihrer Benutzer zu schützen, blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (siehe z. B. Firefox's [Erweiterter Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben ihnen jedoch weiterhin die Verwendung von Cookies als Erstanbieter, da das Blockieren von Erstanbieter-Cookies dazu führen kann, dass Websites nicht mehr funktionieren. Weiterleitungstracking nutzt dies aus, um die Blockierung von Drittanbieter-Cookies zu umgehen.

Weiterleitungstracker funktionieren, indem sie Sie dazu zwingen, im Rahmen dieser Reise einen kaum wahrnehmbaren und momentanen Zwischenstopp auf ihrer Website einzulegen. Anstatt also direkt von der Bewertungsseite zum Einzelhändler zu navigieren, werden Sie zunächst zum Weiterleitungstracker weitergeleitet und dann zum Einzelhändler. Das bedeutet, dass der Tracker als Erstanbieter geladen wird. Der Weiterleitungstracker verbindet Tracking-Daten mit den Kennungen, die sie in ihren Erstanbieter-Cookies gespeichert haben, und leitet Sie dann zum Einzelhändler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Er hat Cookies gespeichert oder auf andere Webseite-Speicher (z.B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)) in den letzten 72 Stunden zugegriffen. Da Cookies pro Host sind, löschen wir sowohl die `http`- als auch die `https`-Ursprungsvarianten eines Cookie-Hosts.
2. Der Ursprung ist in unserer Tracking-Schutzliste als [Tracker klassifiziert](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basisdomain ({{Glossary("eTLD", "eTLD+1")}}) hat eine Benutzerinteraktionsberechtigung.
   - Diese Berechtigung wird einem Ursprung für 45 Tage gewährt, sobald ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. "Interaktion" umfasst das Scrollen.
   - Obwohl diese Berechtigung auf Ebene des Ursprungs gespeichert wird, überprüfen wir, ob irgendein Ursprung mit derselben Basisdomain sie hat, um zu vermeiden, dass Sites mit Subdomains und einem entsprechenden Cookie-Setup nicht mehr funktionieren.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/firefox-main/rev/9767e215f62521af8168bfb6fb4275755868f0db/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quota-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache, etc.)
- DOM-Push-Benachrichtigungen
- Reporting-API-Berichte
- Sicherheitseinstellungen (d.h. HSTS)
- EME-Media-Plugin-Daten
- Plugin-Daten (z.B. Flash)
- Mediengeräte
- Speicherzugriffsberechtigungen, die dem Ursprung gewährt wurden
- HTTP-Authentifizierungstokens
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Auch wenn wir all diese Daten löschen, markieren wir derzeit nur Ursprünge zur Löschung, wenn sie Cookies oder anderen Webseite-Speicher verwenden.

Das Löschen des Speichers ignoriert Attributen von Ursprüngen. Das bedeutet, dass Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher (d.h. aus der [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) gelöscht wird.

## Wie häufig werden Daten gelöscht?

Firefox löscht Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert wird:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily`-Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für >48 Stunden nach dem letzten `idle-daily`) inaktiv gewesen ist.

Das bedeutet, dass zwischen jedem Speicherlöschvorgang mindestens 24 Stunden liegen, und der Speicher wird nur gelöscht, wenn der Browser im Leerlauf ist. Beim Löschen von Cookies sortieren wir die Cookies nach dem Erstellungsdatum und gruppieren sie aus Leistungsgründen in Sätzen zu 100 (gesteuert durch die Voreinstellung `privacy.purge_trackers.max_purge_count`).

## Debugging

Der Schutz vor Weiterleitungstracking kann aktiviert oder deaktiviert werden, indem die Voreinstellung `privacy.purge_trackers.enabled` in `about:config` geändert wird. Außerdem wird es nur ausgeführt, wenn die `network.cookie.cookieBehavior`-Voreinstellung auf `4` oder `5` in Firefox 79+ gesetzt ist (`1`, `3`, `4` oder `5`, wie in Firefox 80).

Verschiedene Protokollierungsstufen können über die Voreinstellung `privacy.purge_trackers.logging.level` eingestellt werden.

Zu Debugging-Zwecken ist es am einfachsten, das Löschen des Speichers direkt über die [Browser-Konsole-Befehlszeile](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies von der normalen [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) abweicht, die Sie möglicherweise zum Debuggen einer Website verwenden, und die `devtools.chrome.enabled`-Voreinstellung auf `true` gesetzt sein muss, um sie interaktiv zu verwenden. Sobald Sie die Browser-Konsole aktiviert haben, können Sie das Löschen des Speichers auslösen, indem Sie den folgenden Befehl ausführen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit, bis Benutzerinteraktionsberechtigungen ablaufen, kann auf einen niedrigeren Wert gesetzt werden, indem die Voreinstellung `privacy.userInteraction.expiration` verwendet wird. Beachten Sie, dass Sie diese Voreinstellung vor dem Besuch der Websites, die Sie testen möchten, festlegen müssen – sie wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit führte zuerst den Schutz vor Weiterleitungstracking in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) ein (sie beziehen sich auf denselben Angriff als Bounce-Tracking). Stand Juli 2020 gibt es mehrere signifikante Unterschiede zwischen der Implementierung von WebKit und der Implementierung von Firefox:

- Die Liste der zu löschenden Ursprünge in Firefox basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Guides/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- Die Definition von "Interaktion" in Firefox umfasst das Scrollen des Benutzers beim Besuch des Ursprungs als Erstanbieter; die von WebKit nicht.
- Firefox wird keine Daten für einen Ursprung löschen, wenn er in den letzten 45 Kalendertagen als Erstanbieter eine Interaktion erhalten hat; das Interaktionsfenster von WebKit beträgt 30 Tage Browsernutzung (z.B. Tage, an denen der Benutzer mindestens einmal mit Safari interagiert hat).
