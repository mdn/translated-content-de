---
title: Schutz vor Redirect-Tracking
slug: Web/Privacy/Redirect_tracking_protection
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Seit Version 79 schützt Firefox Benutzer vor **Redirect-Tracking**, indem regelmäßig Cookies und Site-Daten bekannter Tracker gelöscht werden. Diese Daten werden nur dann aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Storage_Access_Policy) (d.h. die `network.cookie.cookieBehavior` Präferenz ist auf `4` gesetzt).

Die Unterstützung für andere Cookie-Richtlinien wird durch [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Definition von Redirect-Tracking

Redirect-Tracking ist ein Missbrauch der plattformübergreifenden Navigation, bei dem ein Tracker den Benutzer vorübergehend auf seine Website umleitet, um den Speicher als Erstanbieter zu nutzen und diesen Benutzer über Websites hinweg zu verfolgen.

Plattformübergreifende Navigationen sind ein Kernelement des Webs; eine Person könnte beispielsweise nach "beste Laufschuhe" auf einer Suchmaschine suchen, ein Suchergebnis anklicken, um Bewertungen zu lesen, und schließlich einen Link anklicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten all diese Websites Ressourcen von demselben Tracker einbetten, und der Tracker konnte seine Cookies nutzen, um alle diese Seitenbesuche der gleichen Person zuzuordnen. Um die Privatsphäre der Benutzer zu schützen, blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (siehe zum Beispiel Firefox's [Erweiterter Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben ihnen jedoch weiterhin, Cookies als Erstanbieter zu verwenden, da das Blockieren von Erstanbieter-Cookies Websites zum Ausfall bringen kann. Redirect-Tracking nutzt dies aus, um die Blockierung von Drittanbieter-Cookies zu umgehen.

Redirect-Tracker funktionieren, indem sie Sie zwingen, während dieser Reise einen nicht wahrnehmbaren und kurzen Zwischenstopp auf ihrer Website einzulegen. Anstatt also direkt von der Bewertungs-Website zum Einzelhändler zu navigieren, machen Sie zuerst einen Abstecher zum Redirect-Tracker, bevor Sie zum Einzelhändler gelangen. Das bedeutet, dass der Tracker als Erstanbieter geladen wird. Der Redirect-Tracker verbindet Tracking-Daten mit den Identifikatoren, die er in seinen Erstanbieter-Cookies gespeichert hat, und leitet Sie dann an den Einzelhändler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Er hat in den letzten 72 Stunden Cookies gespeichert oder auf andere Speichermethoden zugegriffen (z.B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)). Da Cookies pro Host sind, werden sowohl die `http` als auch die `https` Ursprungsvarianten eines Cookie-Hosts gelöscht.
2. Der Ursprung ist in unserer Liste zum Schutz vor Verfolgung [als Tracker klassifiziert](/de/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basis-Domain ({{Glossary("eTLD", "eTLD+1")}}) hat eine Benutzerinteraktionsberechtigung.

   - Diese Berechtigung wird einem Ursprung für 45 Tage gewährt, sobald ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. "Interaktion" schließt Scrollen ein.
   - Obwohl diese Berechtigung auf Ursprungsebene gespeichert wird, überprüfen wir, ob ein anderer Ursprung mit derselben Basis-Domain diese hat, um zu vermeiden, dass Websites mit Subdomains und einer entsprechenden Cookie-Einrichtung beschädigt werden.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/mozilla-central/rev/622dbd3409610ad3f71b56c9a6a92da905dab0aa/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quota-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache usw.)
- DOM-Push-Benachrichtigungen
- Meldungen der Reporting-API
- Sicherheitseinstellungen (z.B. HSTS)
- EME-Mediaplugindaten
- Plugindaten (z.B. Flash)
- Mediengeräte
- Speicherzugriffsberechtigungen, die dem Ursprung erteilt wurden
- HTTP-Authentifizierungstoken
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Obwohl all diese Daten gelöscht werden, markieren wir Ursprünge derzeit nur zum Löschen, wenn sie Cookies oder anderen Sitespeicher verwenden.

Das Löschen von Speicher ignoriert Ursprungsattribute. Das bedeutet, dass Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher (d.h. von [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) hinweg gelöscht wird.

## Wie häufig werden Daten gelöscht?

Firefox löscht Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert ist:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily` Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten untätig war (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für mehr als 48 Stunden nach dem letzten `idle-daily`).

Das bedeutet, dass zwischen jeder Speicherlöschung mindestens 24 Stunden liegen und der Speicher nur gelöscht wird, wenn der Browser inaktiv ist. Beim Löschen von Cookies sortieren wir Cookies nach Erstellungsdatum und packen sie aus Leistungsgründen in Sätze zu je 100 (gesteuert durch die Präferenz `privacy.purge_trackers.max_purge_count`).

## Fehlersuche

Der Redirect-Tracking-Schutz kann durch Umlegen der Präferenz `privacy.purge_trackers.enabled` in `about:config` aktiviert oder deaktiviert werden. Außerdem wird er nur ausgeführt, wenn die Präferenz `network.cookie.cookieBehavior` in Firefox ab Version 79+ auf `4` oder `5` gesetzt ist (`1`, `3`, `4` oder `5` ab Firefox 80).

Verschiedene Protokollierungsstufen können über die Präferenz `privacy.purge_trackers.logging.level` eingestellt werden.

Zu Debugging-Zwecken ist es am einfachsten, die Speicherlöschung direkt über die [Befehlszeile der Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) auszulösen. Beachten Sie, dass dies sich von der normalen [Web-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) unterscheidet, die Sie möglicherweise zur Fehlersuche auf einer Website verwenden, und erfordert, dass die Präferenz `devtools.chrome.enabled` auf `true` gesetzt ist, um sie interaktiv zu nutzen. Sobald Sie die Browser-Konsole aktiviert haben, können Sie die Speicherlöschung durch Ausführen des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit bis zum Ablauf der Benutzerinteraktionsberechtigungen kann mithilfe der Präferenz `privacy.userInteraction.expiration` auf einen niedrigeren Wert gesetzt werden. Beachten Sie, dass Sie diese Präferenz einstellen müssen, bevor Sie die Websites besuchen, die Sie testen möchten – sie wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit hat zuerst den Redirect-Tracking-Schutz in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt (sie beziehen sich auf den gleichen Angriff als Bounce-Tracking). Ab Juli 2020 gibt es mehrere wesentliche Unterschiede zwischen WebKits Implementierung und Firefox' Implementierung:

- Die Liste der in Firefox zu löschenden Ursprünge basiert auf unserer [Liste zum Schutz vor Verfolgung](/de/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- Firefox' Definition von "Interaktion" beinhaltet das Scrollen des Benutzers beim Besuch des Ursprungs als Erstanbieter; bei WebKit ist dies nicht der Fall.
- Firefox wird keine Daten für einen Ursprung löschen, wenn er in den letzten 45 Kalendertagen als Erstanbieter interagiert wurde; WebKits Interaktionsfenster beträgt 30 Tage der Browsernutzung (z.B. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
