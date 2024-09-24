---
title: Cookies
slug: Mozilla/Add-ons/WebExtensions/API/cookies
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen das Abrufen und Setzen von Cookies und benachrichtigt, wenn sie sich ändern.

## Berechtigungen

Um diese API zu verwenden, muss ein Add-on die "cookies" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) in seiner [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei angeben, zusammen mit [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für alle Websites, für die es auf Cookies zugreifen möchte. Das Add-on kann alle Cookies lesen oder schreiben, die von einer URL gelesen oder geschrieben werden könnten, die den Host-Berechtigungen entspricht. Zum Beispiel:

- `http://*.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad schreiben.

    Es darf _nicht_:

    - Ein sicheres Cookie für `www.example.com` lesen.

- `http://www.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen.
    - Ein nicht-sicheres Cookie für `.example.com` mit jedem Pfad lesen.
    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad schreiben.
    - Ein sicheres oder nicht-sicheres Cookie für `.example.com` mit jedem Pfad schreiben.

    Es darf _nicht_:

    - Ein Cookie für `foo.example.com` lesen oder schreiben.
    - Ein Cookie für `foo.www.example.com` lesen oder schreiben.

- `*://*.example.com/`

  - : Ein Add-on mit dieser Host-Berechtigung kann:

    - Ein sicheres oder nicht-sicheres Cookie für `www.example.com` mit jedem Pfad lesen oder schreiben.

## Tracking-Schutz

Tracker verwenden Drittanbieter-Cookies, also Cookies, die von einer anderen Website als der aktuellen gesetzt werden, um die von Ihnen besuchten Websites zu identifizieren. Zum Beispiel:

1. Sie besuchen `a-shopping-site.com`, das `ad-tracker.com` verwendet, um Werbung im Web auszuliefern. `ad-tracker.com` setzt ein Cookie, das mit der Domäne `ad-tracker.com` assoziiert ist. Während Sie `a-shopping-site.com` besuchen, erhält `ad-tracker.com` Informationen über die Produkte, die Sie durchsuchen.
2. Sie besuchen nun `a-news-site.com`, das `ad-tracker.com` verwendet, um Werbung auszuliefern. `ad-tracker.com` liest sein Cookie und verwendet die von `a-shopping-site.com` gesammelten Informationen, um zu entscheiden, welche Werbung Ihnen angezeigt wird.

Firefox enthält Funktionen, um das Tracking zu verhindern. Diese Funktionen trennen Cookies, sodass Tracker keine Verbindung zwischen besuchten Websites herstellen können. Im obigen Beispiel kann `ad-tracker.com` das auf `a-news-site.com` erstellte Cookie nicht sehen, wenn `a-shopping-site.com` besucht wird. Die erste Iteration dieses Schutzes war die First-Party-Isolation, die nun durch [dynamische Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) ersetzt wird.

> [!NOTE]
> First-Party-Isolation und dynamische Partitionierung sind nicht gleichzeitig aktiv. Wenn der Benutzer oder eine Erweiterung die First-Party-Isolation aktiviert, hat sie Vorrang vor der dynamischen Partitionierung. Bei privatem Surfen, das dynamische Partitionierung verwendet, kann das normale Surfen Cookies möglicherweise nicht partitionieren. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox) für Details.

### Speicherpartitionierung

Bei Verwendung der [dynamischen Partitionierung](/de/docs/Web/Privacy/State_Partitioning#dynamic_partitioning) partitioniert Firefox den für JavaScript-APIs zugänglichen Speicher nach oberster Website und ermöglicht dabei geeigneten Zugriff auf nicht partitionierten Speicher für gängige Anwendungsfälle. Diese Funktion wird schrittweise eingeführt. Siehe [Status der Partitionierung in Firefox](/de/docs/Web/Privacy/State_Partitioning#status_of_partitioning_in_firefox) für Implementierungsdetails.

Speicherpartitionen werden durch die schemenhafte URL der obersten {{glossary("Site","Website")}} und, wenn die dynamische Partitionierung aktiv ist, durch den Wert des Schlüssels `partitionKey.topLevelSite` in der Cookies-API gekennzeichnet, zum Beispiel `partitionKey: {topLevelSite: "http://site"}`.

Im Allgemeinen befinden sich Dokumente der obersten Ebene in nicht partitioniertem Speicher, während Drittanbieter-Iframes in partitioniertem Speicher sind. Wenn ein Partitionierungsschlüssel nicht bestimmt werden kann, wird der Standardwert (nicht partitionierter Speicher) verwendet. Zum Beispiel können alle HTTP(S)-Sites als Partitionierungsschlüssel verwendet werden, `moz-extension:-` URLs jedoch nicht. Daher verwenden Iframes in Firefox-Erweiterungsdokumenten keinen partitionierten Speicher.

Standardmäßig arbeiten {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} mit Cookies in nicht partitioniertem Speicher. Um mit Cookies in partitioniertem Speicher in diesen APIs zu arbeiten, muss `topLevelSite` in `partitionKey` gesetzt werden. Die Ausnahme ist `getAll`, bei dem das Setzen von `partitionKey` ohne `topLevelSite` Cookies in partitioniertem und nicht partitioniertem Speicher zurückgibt. {{WebExtAPIRef("cookies.onChanged")}} wird für jedes Cookie ausgelöst, auf das die Erweiterung zugreifen kann, einschließlich Cookies in partitioniertem Speicher. Um sicherzustellen, dass das richtige Cookie geändert wird, sollten Erweiterungen die Eigenschaft `cookie.partitionKey` aus dem Ereignis lesen und ihren Wert an {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} übergeben.

### First-Party-Isolation

Wenn die First-Party-Isolation aktiviert ist, werden Cookies durch die Domäne der ursprünglichen Seite, die der Benutzer besucht hat, qualifiziert (im Wesentlichen die dem Benutzer in der URL-Leiste angezeigte Domäne, auch bekannt als "First-Party-Domain").

Die First-Party-Isolation kann vom Benutzer durch Anpassung der Browsereinstellungen aktiviert und von Erweiterungen durch die {{WebExtAPIRef("privacy.websites","firstPartyIsolate")}}-Einstellung in der {{WebExtAPIRef("privacy")}} API gesetzt werden. Beachten Sie, dass die First-Party-Isolation standardmäßig im [Tor Browser](https://www.torproject.org/) aktiviert ist.

In der `cookies`-API wird die First-Party-Domain durch das Attribut `firstPartyDomain` dargestellt. Alle Cookies, die bei aktivierter First-Party-Isolation gesetzt werden, haben dieses Attribut auf die Domäne der ursprünglichen Seite gesetzt. Im obigen Beispiel ist dies `a-shopping-site.com` für ein Cookie und `a-news-site.com` für das andere. Wenn die First-Party-Isolation deaktiviert ist, haben alle von Websites gesetzten Cookies diese Eigenschaft auf einen leeren String gesetzt.

Die {{WebExtAPIRef("cookies.get()")}}, {{WebExtAPIRef("cookies.getAll()")}}, {{WebExtAPIRef("cookies.set()")}} und {{WebExtAPIRef("cookies.remove()")}} APIs akzeptieren alle eine `firstPartyDomain`-Option.

Wenn die First-Party-Isolation aktiviert ist, müssen Sie diese Option bereitstellen, andernfalls schlägt der API-Aufruf fehl und gibt ein abgelehntes Versprechen zurück. Für `get()`, `set()`, und `remove()` müssen Sie einen Zeichenkettenwert übergeben. Bei `getAll()` können Sie hier auch `null` übergeben, wodurch alle Cookies abgerufen werden, unabhängig davon, ob sie einen nicht leeren Wert für `firstPartyDomain` haben.

Wenn die First-Party-Isolation deaktiviert ist, ist der Parameter `firstPartyDomain` optional und standardmäßig ein leerer String. Ein nicht-leerer String kann verwendet werden, um First-Party-Isolations-Cookies abzurufen oder zu ändern. Ebenso wird durch Übergeben von `null` als `firstPartyDomain` an `getAll()` alle Cookies zurückgegeben.

## Typen

- {{WebExtAPIRef("cookies.Cookie")}}
  - : Repräsentiert Informationen über ein HTTP-Cookie.
- {{WebExtAPIRef("cookies.CookieStore")}}
  - : Repräsentiert einen Cookie-Speicher im Browser.
- {{WebExtAPIRef("cookies.OnChangedCause")}}
  - : Repräsentiert den Grund für die Änderung eines Cookies.
- {{WebExtAPIRef("cookies.SameSiteStatus")}}
  - : Repräsentiert den Same-Site-Status des Cookies.

## Methoden

- {{WebExtAPIRef("cookies.get()")}}
  - : Ruft Informationen über ein einzelnes Cookie ab.
- {{WebExtAPIRef("cookies.getAll()")}}
  - : Ruft alle Cookies ab, die einem gegebenen Filtersatz entsprechen.
- {{WebExtAPIRef("cookies.set()")}}
  - : Setzt ein Cookie mit den gegebenen Cookie-Daten; kann bestehende äquivalente Cookies überschreiben, wenn sie vorhanden sind.
- {{WebExtAPIRef("cookies.remove()")}}
  - : Löscht ein Cookie anhand des Namens.
- {{WebExtAPIRef("cookies.getAllCookieStores()")}}
  - : Listet alle vorhandenen Cookie-Speicher auf.

## Ereignishandler

- {{WebExtAPIRef("cookies.onChanged")}}
  - : Wird ausgelöst, wenn ein Cookie gesetzt oder entfernt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.cookies`](https://developer.chrome.com/docs/extensions/reference/api/cookies) API von Chromium. Diese Dokumentation ist abgeleitet von [`cookies.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/cookies.json) im Chromium-Code.
