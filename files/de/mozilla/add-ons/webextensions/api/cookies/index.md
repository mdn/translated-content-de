---
title: cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen das Abrufen und Setzen von Cookies sowie Benachrichtigungen, wenn diese geändert werden.

## Berechtigungen

Um diese API nutzen zu können, muss ein Add-on die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in seiner [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angeben, zusammen mit [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Seiten, auf die es Zugriff auf Cookies wünscht. Das Add-on kann alle Cookies lesen oder schreiben, die von einer URL gelesen oder geschrieben werden könnten, die den Hostberechtigungen entspricht. Zum Beispiel:

- `http://*.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein unsicheres Cookie für `www.example.com` lesen, mit beliebigem Pfad.
    - Ein sicheres oder unsicheres Cookie für `www.example.com` schreiben, mit beliebigem Pfad.

    Es kann _nicht_:

    - Ein sicheres Cookie für `www.example.com` lesen.

- `http://www.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein unsicheres Cookie für `www.example.com` lesen, mit beliebigem Pfad.
    - Ein unsicheres Cookie für `.example.com` lesen, mit beliebigem Pfad.
    - Ein sicheres oder unsicheres Cookie für `www.example.com` mit beliebigem Pfad schreiben.
    - Ein sicheres oder unsicheres Cookie für `.example.com` mit beliebigem Pfad schreiben.

    Es kann _nicht_:

    - Ein Cookie für `foo.example.com` lesen oder schreiben.
    - Ein Cookie für `foo.www.example.com` lesen oder schreiben.

- `*://*.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein sicheres oder unsicheres Cookie für `www.example.com` mit beliebigem Pfad lesen oder schreiben.

## Schutz vor Verfolgung

Tracker verwenden Cookies von Drittanbietern, das heißt, Cookies, die von einer anderen Website als der, auf der Sie sich befinden, gesetzt werden, um die von Ihnen besuchten Websites zu identifizieren. Zum Beispiel:

1. Sie besuchen `a-shopping-site.com`, die `ad-tracker.com` verwendet, um ihre Anzeigen im Web zu liefern. `ad-tracker.com` setzt ein Cookie, das der `ad-tracker.com` Domäne zugeordnet ist. Während Sie auf `a-shopping-site.com` sind, erhält `ad-tracker.com` Informationen über die von Ihnen durchstöberten Produkte.
2. Sie besuchen jetzt `a-news-site.com`, das `ad-tracker.com` verwendet, um Anzeigen zu liefern. `ad-tracker.com` liest sein Cookie und nutzt die von `a-shopping-site.com` gesammelten Informationen, um zu entscheiden, welche Anzeigen Ihnen angezeigt werden.

Firefox bietet Funktionen, um das Tracking zu verhindern. Diese Funktionen trennen Cookies, sodass Tracker keine Verbindung zwischen besuchten Websites herstellen können. In dem vorhergehenden Beispiel kann `ad-tracker.com` das auf `a-news-site.com` erstellte Cookie nicht sehen, wenn Sie `a-shopping-site.com` besuchen. Die erste Iteration dieses Schutzes war die First-Party-Isolation, die jetzt durch die [dynamische Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) ersetzt wird.

> [!NOTE]
> First-Party-Isolation und dynamische Partitionierung werden nicht gleichzeitig aktiv sein. Wenn der Nutzer oder eine Erweiterung die First-Party-Isolation aktiviert, hat diese Vorrang vor der dynamischen Partitionierung. Wenn jedoch das private Browsen die dynamische Partitionierung nutzt, kann es sein, dass das normale Browsen keine Cookies partitioniert. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox) für Details.

### Speicherpartitionierung

Bei der Nutzung von [dynamischer Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) partitioniert Firefox den Speicher, der JavaScript APIs zugänglich ist, nach der obersten Seite, während es angemessenen Zugriff auf nicht partitionierten Speicher gewährt, um übliche Anwendungsfälle zu ermöglichen. Diese Funktion wird schrittweise eingeführt. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox) für Details zur Implementierung.

Speicherpartitionen werden nach der `schemeful URL` der obersten [Webseite](/de/docs/Glossary/Site) erstellt, und wenn die dynamische Partitionierung aktiv ist, ist der Schlüsselwert über die `partitionKey.topLevelSite` Eigenschaft in der Cookies-API verfügbar, zum Beispiel `partitionKey: {topLevelSite: "http://site"}`.

Im Allgemeinen befinden sich Dokumente auf oberster Ebene in nicht partitioniertem Speicher, während Drittanbieter-Iframes in partitioniertem Speicher sind. Wenn ein Partitionsschlüssel nicht bestimmt werden kann, wird der Standard (nicht partitionierter Speicher) verwendet. Zum Beispiel können alle HTTP(S) Seiten als Partitionsschlüssel verwendet werden, `moz-extension:-` URLs jedoch nicht. Deshalb nutzen Iframes in den Erweiterungsdokumenten von Firefox keinen partitionierten Speicher.

Standardmäßig arbeiten {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} mit Cookies im nicht partitionierten Speicher. Um mit Cookies im partitionierten Speicher in diesen APIs zu arbeiten, muss `topLevelSite` in `partitionKey` gesetzt werden. Die Ausnahme ist `getAll`, bei dem das Setzen von `partitionKey` ohne `topLevelSite` Cookies im partitionierten und nicht partitionierten Speicher zurückgibt. {{WebExtAPIRef("cookies.onChanged")}} wird für alle Cookies ausgelöst, auf die die Erweiterung zugreifen kann, einschließlich Cookies im partitionierten Speicher. Um sicherzustellen, dass das richtige Cookie geändert wird, sollten Erweiterungen die `cookie.partitionKey` Eigenschaft vom Ereignis lesen und ihren Wert an {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} übergeben.

### First-Party-Isolation

Wenn die First-Party-Isolation aktiviert ist, werden Cookies durch die Domäne der ursprünglichen Seite, die der Nutzer besucht hat, qualifiziert (im Wesentlichen die Domäne, die dem Nutzer in der URL-Leiste angezeigt wird, auch bekannt als "First-Party-Domäne").

Die First-Party-Isolation kann vom Nutzer durch Ändern der Browserkonfiguration aktiviert werden und von Erweiterungen mittels der {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}} Einstellung in der {{WebExtAPIRef("privacy")}} API gesetzt werden. Beachten Sie, dass die First-Party-Isolation standardmäßig im [Tor Browser](https://www.torproject.org/) aktiviert ist.

In der `cookies` API wird die First-Party-Domäne mithilfe des Attributs `firstPartyDomain` dargestellt. Alle Cookies, die gesetzt werden, während die First-Party-Isolation aktiviert ist, haben dieses Attribut auf die Domäne der ursprünglichen Seite gesetzt. Im vorhergehenden Beispiel ist dies `a-shopping-site.com` für ein Cookie und `a-news-site.com` für das andere. Wenn die First-Party-Isolation deaktiviert ist, haben alle von Websites gesetzten Cookies diese Eigenschaft auf einen leeren String gesetzt.

Die {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} APIs akzeptieren alle eine `firstPartyDomain` Option.

Wenn die First-Party-Isolation aktiviert ist, müssen Sie diese Option angeben, oder der API-Aufruf wird fehlschlagen und ein abgelehntes Versprechen zurückgeben. Für `get()`, `set()` und `remove()` müssen Sie einen String-Wert übergeben. Für `getAll()` können Sie hier auch `null` übergeben, was alle Cookies zurückgibt, unabhängig davon, ob sie einen nicht leeren Wert für `firstPartyDomain` haben oder nicht.

Wenn die First-Party-Isolation deaktiviert ist, ist der `firstPartyDomain` Parameter optional und standardmäßig auf einen leeren String gesetzt. Ein nicht leerer String kann verwendet werden, um Cookies der First-Party-Isolation abzurufen oder zu ändern. Ebenso wird das Übergeben von `null` als `firstPartyDomain` an `getAll()` alle Cookies zurückgeben.

## Typen

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Repräsentiert Informationen über ein HTTP-Cookie.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Repräsentiert einen Cookie-Speicher im Browser.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Repräsentiert den Grund, warum sich ein Cookie geändert hat.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Repräsentiert den Same-Site-Status des Cookies.

## Methoden

- {{WebExtAPIRef("cookies.get()")}}
  - : Ruft Informationen über ein einzelnes Cookie ab.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Ruft alle Cookies ab, die einem bestimmten Satz von Filtern entsprechen.
- {{WebExtAPIRef("cookies.set()")}}
  - : Setzt ein Cookie mit den angegebenen Cookie-Daten; kann gleichwertige Cookies überschreiben, wenn sie existieren.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Löscht ein Cookie nach Namen.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Listet alle vorhandenen Cookie-Speicher auf.

## Ereignishandler

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Wird ausgelöst, wenn ein Cookie gesetzt oder entfernt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der Chromium API [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies). Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Verbreitung und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Redistributions des Quellcodes müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Redistributions in binärer Form müssen den obigen
// Urheberrechtshinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien, die
// mit der Verteilung einhergehen, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Beitragsleistenden dürfen verwendet werden, um Produkte, die aus dieser
// Software abgeleitet sind, ohne spezifische vorherige schriftliche Erlaubnis
// zu unterstützen oder zu bewerben.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND BEITRAGENDEN
// "WIE BESEHEN" UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE GARANTIEN, EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND
// EIGNUNG FÜR EINEN BESTIMMTEN ZWECK, ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// COPYRIGHT-INHABER ODER BEITRAGENDEN FÜR JEGLICHE DIREKTE, INDIREKTE,
// ZUFÄLLIGE, SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFÄLLE, DATEN ODER GEWINNE; ODER BETRIEBSUNTERBRECHUNGEN),
// UNABHÄNGIG VON DER VERURSACHTHEIT UND JEGLICHER THEORIE DER HAFTUNG, OB IN
// VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// NACHLÄSSIGKEIT ODER ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG
// DIESER SOFTWARE ENTSTEHEN, SELBST WENN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// INFORMIERT WURDE.
-->
