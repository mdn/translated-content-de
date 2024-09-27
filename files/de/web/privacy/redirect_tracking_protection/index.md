---
title: Schutz vor Redirect-Tracking
slug: Web/Privacy/Redirect_tracking_protection
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

Seit Version 79 schützt Firefox Benutzer vor **Redirect-Tracking**, indem regelmäßig Cookies und Website-Daten von bekannten Trackern gelöscht werden. Diese Daten werden nur aus dem Speicher gelöscht, wenn der Benutzer [Tracking-Cookies blockiert](/de/docs/Web/Privacy/Storage_Access_Policy) (d.h. die `network.cookie.cookieBehavior` Voreinstellung ist auf `4` gesetzt).

Die Unterstützung für andere Cookie-Richtlinien wird von [Bug 1643045](https://bugzil.la/1643045) verfolgt.

## Definition von Redirect-Tracking

Redirect-Tracking ist ein Missbrauch der Cross-Site-Navigation, bei dem ein Tracker den Benutzer vorübergehend auf seine Website umleitet, um den Erstspeicher zu verwenden, um den Benutzer über verschiedene Websites hinweg zu verfolgen.

Cross-Site-Navigationen sind ein zentrales Merkmal des Webs; eine Person könnte beispielsweise nach „besten Laufschuhen“ in einer Suchmaschine suchen, ein Suchergebnis anklicken, um Bewertungen zu lesen, und schließlich einen Link anklicken, um ein Paar Schuhe in einem Online-Shop zu kaufen. In der Vergangenheit konnten diese Websites Ressourcen vom selben Tracker einbetten, und der Tracker konnte seine Cookies verwenden, um all diese Seitenbesuche derselben Person zuzuordnen. Um die Privatsphäre ihrer Nutzer zu schützen, blockieren Browser Tracker daran, Cookies zu verwenden, wenn sie in einem Drittanbieter-Kontext eingebettet sind (siehe zum Beispiel Firefox' [Verbesserter Schutz vor Aktivitätenverfolgung](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) (ETP)), erlauben ihnen jedoch dennoch, Cookies als Erstanbieter zu verwenden, da das Blockieren von Erstanbieter-Cookies Websites stören kann. Redirect-Tracking nutzt dies aus, um die Blockierung von Drittanbieter-Cookies zu umgehen.

Redirect-Tracker arbeiten, indem sie Ihnen eine unmerkliche und kurzzeitige Zwischenstation auf ihrer Website als Teil dieser Reise aufzwingen. Anstatt also direkt von der Bewertungsseite zum Einzelhändler zu navigieren, landen Sie erst beim Redirect-Tracker und erst danach beim Einzelhändler. Dies bedeutet, dass der Tracker als Erstanbieter geladen wird. Der Redirect-Tracker verknüpft Tracking-Daten mit den Identifikatoren, die sie in ihren Erstanbieter-Cookies gespeichert haben, und leitet Sie dann an den Einzelhändler weiter.

## Welche Ursprünge werden gelöscht?

Ein Ursprung wird gelöscht, wenn er die folgenden Bedingungen erfüllt:

1. Er hat innerhalb der letzten 72 Stunden Cookies gespeichert oder auf anderen Website-Speicher zugegriffen (z.B. [localStorage](/de/docs/Web/API/Web_Storage_API), [IndexedDB](/de/docs/Web/API/IndexedDB_API) oder die [Cache API](/de/docs/Web/API/CacheStorage)). Da Cookies pro Host gespeichert werden, löschen wir sowohl die `http` als auch die `https` Varianten eines Cookie-Hosts.
2. Der Ursprung ist auf unserer Tracking-Schutzliste [als Tracker klassifiziert](/de/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained).
3. Kein Ursprung mit derselben Basis-Domain ([eTLD+1](/de/docs/Glossary/eTLD)) hat eine Benutzerinteraktions-Erlaubnis.

   - Diese Erlaubnis wird einem Ursprung für 45 Tage erteilt, sobald ein Benutzer mit einem Top-Level-Dokument von diesem Ursprung interagiert. „Interagieren“ umfasst Scrollen.
   - Obwohl diese Erlaubnis auf Ebene der Ursprünge gespeichert wird, überprüfen wir, ob irgendein Ursprung mit derselben Basis-Domain sie hat, um zu vermeiden, dass Websites mit Subdomains und einer entsprechenden Cookie-Konfiguration unterbrochen werden.

## Welche Daten werden gelöscht?

Firefox löscht die [folgenden Daten](https://searchfox.org/mozilla-central/rev/622dbd3409610ad3f71b56c9a6a92da905dab0aa/toolkit/components/antitracking/PurgeTrackerService.jsm#209-225):

- Netzwerk-Cache und Bild-Cache
- Cookies
- AppCache
- DOM-Quota-Speicher (localStorage, IndexedDB, ServiceWorkers, DOM-Cache usw.)
- DOM-Push-Benachrichtigungen
- Berichte der Reporting API
- Sicherheitseinstellungen (z.B. HSTS)
- EME-Media-Plugin-Daten
- Plugin-Daten (z.B. Flash)
- Mediageräte
- Speicherausgangsberechtigungen, die dem Ursprung gewährt wurden
- HTTP-Authentifizierungstoken
- HTTP-Authentifizierungs-Cache

> [!NOTE]
> Obwohl wir all diese Daten löschen, markieren wir derzeit nur Ursprünge zur Löschung, wenn sie Cookies oder anderen Website-Speicher verwenden.

Die Speicherlöschung ignoriert Herkunftsattribute. Das bedeutet, dass der Speicher über [Container](https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers) und isolierten Speicher (z.B. von [First-Party Isolation](/de/docs/Mozilla/Add-ons/WebExtensions/API/cookies#first-party_isolation)) hinweg gelöscht wird.

## Wie häufig werden Daten gelöscht?

Firefox löscht Speicher basierend auf dem Auslösen eines internen Ereignisses namens `idle-daily`, das durch die folgenden Bedingungen definiert ist:

- Es wird frühestens 24 Stunden nach dem letzten `idle-daily`-Ereignis ausgelöst.
- Es wird nur ausgelöst, wenn der Benutzer mindestens 3 Minuten (für 24-48 Stunden nach dem letzten `idle-daily`) oder 1 Minute (für mehr als 48 Stunden nach dem letzten `idle-daily`) untätig war.

Das bedeutet, dass mindestens 24 Stunden zwischen jeder Speicherlöschung liegen und der Speicher nur gelöscht wird, wenn der Browser im Leerlauf ist. Beim Löschen von Cookies sortieren wir Cookies nach Erstellungsdatum und teilen sie aus Leistungsgründen in Sätze von 100 auf (gesteuert durch die Voreinstellung `privacy.purge_trackers.max_purge_count`).

## Debugging

Der Schutz vor Redirect-Tracking kann aktiviert oder deaktiviert werden, indem die Voreinstellung `privacy.purge_trackers.enabled` in `about:config` umgeschaltet wird. Außerdem wird er nur ausgeführt, wenn die `network.cookie.cookieBehavior` Voreinstellung auf `4` oder `5` in Firefox 79+ und höher (`1`, `3`, `4` oder `5` ab Firefox 80) gesetzt ist.

Verschiedene Protokollierungsebenen können über die Voreinstellung `privacy.purge_trackers.logging.level` festgelegt werden.

Zu Debugging-Zwecken ist es am einfachsten, die Speicherlöschung auszulösen, indem der Dienst direkt über die [Befehlszeile der Browser-Konsole](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html#browser-console-command-line) ausgelöst wird. Beachten Sie, dass dies anders ist als die normale [Webkonsole](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html), die Sie möglicherweise zur Debugging einer Website verwenden, und es erfordert, dass die Voreinstellung `devtools.chrome.enabled` auf `true` gesetzt ist, um sie interaktiv zu verwenden. Sobald Sie die Browser-Konsole aktiviert haben, können Sie die Speicherlöschung durch Ausführen des folgenden Befehls auslösen:

```js
await Components.classes["@mozilla.org/purge-tracker-service;1"]
  .getService(Components.interfaces.nsIPurgeTrackerService)
  .purgeTrackingCookieJars();
```

Die Zeit bis zum Ablauf der Benutzerinteraktionsberechtigungen kann mit der Voreinstellung `privacy.userInteraction.expiration` auf eine geringere Menge festgelegt werden. Beachten Sie, dass Sie diese Voreinstellung setzen müssen, bevor Sie die Websites besuchen, die Sie testen möchten — sie wird nicht rückwirkend angewendet.

## Andere Implementierungen

WebKit hat erstmals die Schutzfunktion gegen Redirect-Tracking in [ITP 2.0](https://webkit.org/blog/8311/intelligent-tracking-prevention-2-0/) eingeführt (sie bezeichnen denselben Angriff als Bounce-Tracking). Stand Juli 2020 gibt es mehrere signifikante Unterschiede zwischen der Implementierung von WebKit und der von Firefox:

- Die Liste der zu löschenden Ursprünge in Firefox basiert auf unserer [Tracking-Schutzliste](/de/docs/Web/Privacy/Storage_Access_Policy#tracking_protection_explained); WebKit verlässt sich auf die Klassifizierung von ITP.
- Die Definition von „Interaktion“ bei Firefox schließt Benutzerscrollen beim Besuch des Ursprungs als Erstanbieter ein; die von WebKit nicht.
- Firefox wird keine Daten für einen Ursprung löschen, wenn dieser in den letzten 45 Kalendertagen als Erstanbieter interagiert wurde; das Interaktionsfenster von WebKit beträgt 30 Tage Browser-Nutzung (z.B. Tage, an denen der Benutzer mindestens eine Interaktion mit Safari hatte).

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
