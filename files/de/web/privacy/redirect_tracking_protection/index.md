---
title: Redirect Tracking Protection
slug: Web/Privacy/Redirect_tracking_protection
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Seit Version 79 schützt Firefox Benutzer vor **Redirect-Tracking**, indem regelmäßig Cookies und Website-Daten von bekannten Trackern gelöscht werden. Diese Daten werden nur dann aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Storage_Access_Policy) (d.h. die Einstellung `network.cookie.cookieBehavior` ist auf `4` gesetzt).

Die Unterstützung für andere Cookie-Richtlinien wird durch [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Definition von Redirect-Tracking

Redirect-Tracking ist ein Missbrauch der plattformübergreifenden Navigation, bei dem ein Tracker den Benutzer vorübergehend zu seiner Website umleitet, um First-Party-Speicher zu nutzen, um diesen Benutzer über Websites hinweg zu verfolgen.

Plattformübergreifende Navigationen sind ein Kernmerkmal des Webs; jemand könnte zum Beispiel nach "beste Laufschuhe" in einer Suchmaschine suchen, ein Suchergebnis anklicken, um Bewertungen zu lesen, und letztendlich auf einen Link klicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. Früher konnten jede dieser Websites Ressourcen desselben Trackers einbetten, und der Tracker konnte seine Cookies nutzen, um alle diese Seitenbesuche derselben Person zuzuordnen. Um die Privatsphäre ihrer Benutzer zu schützen, blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (siehe zum Beispiel Firefoxs [Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben jedoch weiterhin die Verwendung von Cookies als First-Party, da das Blockieren von First-Party-Cookies Websites zum Absturz bringen könnte. Redirect-Tracking nutzt dies aus, um die Blockierung von Drittanbieter-Cookies zu umgehen.

Redirect-Tracker funktionieren, indem sie einen unmerklichen und kurzen Zwischenstopp auf ihrer Website als Teil dieser Reise erzwingen. Anstatt also direkt von der Bewertungswebsite zum Einzelhändler zu navigieren, gelangen Sie zuerst über den Redirect-Tracker zum Einzelhändler. Das bedeutet, dass der Tracker als First-Party geladen wird. Der Redirect-Tracker verknüpft Tracking-Daten mit den Kennungen, die er in seinen First-Party-Cookies gespeichert hat, und leitet Sie dann zum Einzelhändler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Er hat innerhalb der letzten 72 Stunden Cookies gespeichert oder auf anderen Website-Speicher (z.B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)) zugegriffen. Da Cookies pro Host sind, löschen wir sowohl die `http`- als auch die `https`-Ursprung-Varianten eines Cookie-Hosts.
2. Der Ursprung ist in unserer Tracking-Schutzliste als [Tracker klassifiziert](/de/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basisdomain ({{Glossary("eTLD", "eTLD+1")}}) hat eine Benutzerinteraktions-Erlaubnis.

   - Diese Erlaubnis wird einem Ursprung für 45 Tage gewährt, sobald ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. "Interagieren" umfasst das Scrollen.
   - Obwohl diese Erlaubnis auf einer per-Ursprung-Basis gespeichert wird, prüfen wir, ob ein beliebiger Ursprung mit derselben Basisdomain sie hat, um zu vermeiden, dass Sites mit Subdomains und entsprechender Cookie-Einstellung beschädigt werden.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/mozilla-central/rev/622dbd3409610ad3f71b56c9a6a92da905dab0aa/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quota-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache, etc.)
- DOM-Push-Benachrichtigungen
- Reporting API-Berichte
- Sicherheitseinstellungen (d.h. HSTS)
- EME-Media-Plugin-Daten
- Plug-in-Daten (z.B. Flash)
- Media-Geräte
- Speicherzugriffsberechtigungen, die dem Ursprung erteilt wurden
- HTTP-Authentifizierungs-Token
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Obwohl wir all diese Daten löschen, kennzeichnen wir derzeit nur Ursprünge zur Löschung, wenn sie Cookies oder anderen Site-Speicher verwenden.

Die Speicherlöschung ignoriert Ursprungsattribute. Das bedeutet, dass der Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierte Speicher (d.h. aus [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) hinweg gelöscht wird.

## Wie häufig werden Daten gelöscht?

Firefox löscht den Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert ist:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily`-Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für >48 Stunden nach dem letzten `idle-daily`) inaktiv war.

Dies bedeutet, dass mindestens 24 Stunden zwischen jeder Speicherlöschung liegen und der Speicher nur gelöscht wird, wenn der Browser inaktiv ist. Beim Löschen von Cookies sortieren wir Cookies nach dem Erstellungsdatum und teilen sie aus Leistungsgründen in Sätze von 100 (gesteuert durch die Pref `privacy.purge_trackers.max_purge_count`).

## Fehlerbehebung

Redirect-Tracking-Schutz kann aktiviert oder deaktiviert werden, indem Sie die Einstellung `privacy.purge_trackers.enabled` in `about:config` umschalten. Außerdem wird er nur ausgeführt, wenn die Pref `network.cookie.cookieBehavior` in Firefox 79+ auf `4` oder `5` gesetzt ist (`1`, `3`, `4` oder `5` ab Firefox 80).

Unterschiedliche Protokollebene können über die Pref `privacy.purge_trackers.logging.level` festgelegt werden.

Zu Debugging-Zwecken ist es am einfachsten, die Speicherlöschung direkt über die [Browserkonsole-Befehlszeile](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies sich von der regulären [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) unterscheidet, die Sie möglicherweise zur Fehlerbehebung einer Website verwenden, und erfordert, dass die Pref `devtools.chrome.enabled` auf `true` gesetzt ist, um sie interaktiv zu verwenden. Sobald Sie die Browserkonsole aktiviert haben, können Sie die Speicherlöschung durch Ausführen des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit bis zum Ablauf der Benutzerinteraktionsberechtigungen kann mit der Pref `privacy.userInteraction.expiration` auf einen niedrigeren Wert gesetzt werden. Beachten Sie, dass Sie diese Pref festlegen müssen, bevor Sie die Websites besuchen, die Sie testen möchten — es wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit hat den Redirect-Tracking-Schutz erstmals in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt (sie beziehen sich auf denselben Angriff als Bounce-Tracking). Ab Juli 2020 gibt es mehrere wesentliche Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der in Firefox zu löschenden Ursprünge basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- In Firefox umfasst die Definition von "Interaktion" das Scrollen des Benutzers beim Besuch des Ursprungs als First-Party; bei WebKit ist dies nicht der Fall.
- Firefox wird Daten für einen Ursprung nicht löschen, wenn er innerhalb der letzten 45 Kalendertage als First-Party eine Interaktion erhalten hat; das Interaktionsfenster von WebKit beträgt 30 Tage der Browsernutzung (z.B. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
