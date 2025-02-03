---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{FirefoxSidebar}}

Wenn Sie ein Entwickler sind und versuchen, sich mit all den neuen Funktionen in Firefox 3 vertraut zu machen, ist dies der perfekte Ausgangspunkt. Dieser Artikel bietet eine Liste der neuen Artikel, die die in Firefox 3 hinzugefügten Funktionen abdecken. Während er nicht unbedingt jede kleine Änderung abdeckt, wird er Ihnen helfen, die wichtigsten Verbesserungen zu verstehen.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisierung von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen zu den Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen von Firefox 3 nutzen zu können.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt die WHATWG-Online- und Offline-Ereignisse, die es Anwendungen und Erweiterungen ermöglichen, zu erkennen, ob es eine aktive Internetverbindung gibt und wann die Verbindung unterbrochen oder wiederhergestellt wird.
- [Webbasierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können nun Webanwendungen als Protokollhandler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Text mit einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können nun Text in einem Canvas mit einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transformationsunterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt nun die Methoden `transform()` und `setTransform()` auf Canvases.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/microformats)
  - : Firefox verfügt nun über APIs zur Arbeit mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Ausgangsknoten einer Ziehoperation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusmanagement in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML-5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht es Webanwendungen nun, Ressourcen zum Cachen anzufordern, um die Anwendung offline zu nutzen.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in seiner CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8-Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen beträchtlichen Teil der [EXSLT](/de/docs/Web/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie andere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das APNG-Bildformat (Animated PNG).

### Für XUL- und Erweiterungsentwickler

#### Bedeutende Änderungen und Verbesserungen

- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den Dingen, die Sie tun müssen, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schieberegler, Datum- und Zeitauswahl sowie Spin-Buttons.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung benutzerdefinierter Abfrageprozessoren, um andere Datenquellen als RDF zu verwenden.
- [Sicherung von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Upgrade-Pfad für Benutzer zu bieten, müssen Add-ons nun eine sichere Methode zum Abrufen von Updates bereitstellen, bevor sie installiert werden können. Add-ons, die bei [AMO](https://addons.mozilla.org) gehostet werden, bieten dies automatisch. Alle Add-ons, die keine sichere Aktualisierungsmethode bieten, werden automatisch deaktiviert, wenn der Benutzer zu Firefox 3 wechselt. Firefox wird jedoch weiterhin versuchen, Updates zu installieren, die über den unsicheren Pfad angeboten werden (die Installation schlägt fehl, wenn das Update ebenfalls keine sichere Aktualisierungsmethode bietet).
- [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung aktualisiert werden kann, um die Places-API zu verwenden.
- [Download-Manager-Verbesserungen in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager in Firefox 3 bietet neue und verbesserte APIs, einschließlich der Unterstützung für mehrere Fortschritts-Listener.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können nun das `data:`-URL-Schema aus dem Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Dadurch sind die lokalisierten Details verfügbar, sobald das Add-on heruntergeladen wurde, sowie wenn das Add-on deaktiviert ist.
- [Lokalisierung und Pluralformen](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Tools zur korrekten Pluralisierung von Wörtern in mehreren Lokalisierungen bereitstellt.
- [Themenänderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalitäten

- [FUEL-Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL erleichtert es Erweiterungsentwicklern, produktiv zu sein, indem es einige der XPCOM-Formalitäten minimiert und einige "moderne" JavaScript-Ideen hinzufügt.
- [Places](/de/docs/Places)
  - : Die APIs für Historie und Lesezeichen wurden vollständig durch die neue [Places](/de/docs/Places)-API ersetzt.
- [Idle Service](/de/docs/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht, festzustellen, wie lange es her ist, seit der Benutzer zuletzt eine Taste gedrückt oder seine Maus bewegt hat.
- [ZIP-Writer](/de/docs/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollseitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert die Benutzererfahrung, indem es neben dem nur-Text-Zoom auch einen Vollseitenzoom bietet.
- [Schnittstelle mit dem XPCOM-Zykluskollektor](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann nun den Zykluskollektor nutzen, der hilft, sicherzustellen, dass ungenutzter Speicher freigegeben und nicht verloren geht.
- [The Thread Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle, zusammen mit neuen Schnittstellen für Threads und Thread-Ereignisse, um auf bequeme Weise Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet nun einen neuen Mechanismus für freigegebene Code-Module, der es Ihnen erlaubt, leicht Module in JavaScript zu erstellen, die von Erweiterungen und Anwendungen genutzt werden können, ähnlich wie gemeinsame Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](/de/docs/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die hochleistungsfähige Kodierung und Dekodierung von {{Glossary("JSON", "JSON")}}-Strings ermöglicht.
- Die `nsIParentalControlsService`-Schnittstelle
  - : Firefox 3 unterstützt nun das Microsoft Windows Vista Elternkontrollfeature und ermöglicht es Code, damit zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst zum Abrufen und Setzen von beliebigen seitenbezogenen Präferenzen, den Erweiterungen und auch der Kerncode verwenden können, um die Vorlieben ihrer Benutzer für einzelne Seiten zu verfolgen.
- [Plug-in-Monitoring](/de/docs/Monitoring_plugins)
  - : Ein neuer Bestandteil des Plugin-Systems ist nun verfügbar, um zu messen, wie lange Plugins (z. B. Macromedia Flash) benötigen, um ihre Aufrufe auszuführen.

#### Behobene Bugs

- [Bedeutende in Firefox 3 behobene Bugs](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen zu den Bugs, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfacheres Passwortmanagement.** Eine Informationsleiste am oberen Rand des Browserfensters erscheint nun, um Ihnen das Speichern von Passwörtern nach einem erfolgreichen Login zu ermöglichen.
- **Vereinfachte Add-on-Installation.** Sie können nun Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank der Entfernung der Add-on-Downloadseiten-Whitelist.
- **Neuer Download-Manager.** Der Download-Manager macht es einfacher, Ihre heruntergeladenen Dateien zu finden.
- **Fortsetzbare Downloads.** Sie können Downloads nun fortsetzen, nachdem Sie den Browser neu gestartet oder Ihre Netzwerkverbindung zurückgesetzt haben.
- **Vollseitenzoom.** Über das Ansichtsmenü und Tastenkombinationen können Sie nun die Inhalte ganzer Seiten zoomen — nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrollen und Schnellmenü.** Tabs sind einfacher zu finden mit den neuen Tab-Scroll- und Schnellmenüfunktionen.
- **Speichern, was Sie gemacht haben.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes Verhalten beim Öffnen in Tabs.** Das Öffnen eines Lesezeichenordners in Tabs fügt nun die neuen Tabs hinzu, anstatt die vorhandenen zu ersetzen.
- **Einfacheres Anpassen der Adress- und Suchleisten.** Sie können nun einfach die Adress- und Suchleisten mit einem einfachen Griff dazwischen anpassen.
- **Verbesserte Textauswahl.** Sie können nun mehrere Textbereiche auswählen, indem Sie die Strg-Taste (Befehl auf Macintosh) verwenden. Doppelklicken und Ziehen wählt nun im "wortweise" Modus aus. Dreifachklicken wählt einen gesamten Absatz aus.
- **Suchwerkzeugleiste.** Die Suchwerkzeugleiste öffnet sich nun mit der aktuellen Auswahl.
- **Plugin-Management.** Benutzer können nun einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Firefox-Menüs werden nun mit Vistas nativem Thema angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt nun [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Schaltfläche.** Die neue Stern-Schaltfläche in der Adressleiste ermöglicht es Ihnen, mit einem Klick ein neues Lesezeichen hinzuzufügen. Ein zweiter Klick ermöglicht es, Ihr neues Lesezeichen abzulegen und zu taggen.
- **Tags.** Sie können nun Schlüsselwörter mit Ihren Lesezeichen verknüpfen, um sie einfach nach Themen zu sortieren.
- **Adressleiste und Auto-Vervollständigung.** Geben Sie den Titel oder das Tag einer Seite in die Adressleiste ein, um die gesuchte Website schnell in Ihrem Verlauf und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Anzeigen helfen Ihnen zu erkennen, woher die Ergebnisse stammen.
- **Smart-Lesezeichen-Ordner.** Der neue Smart-Lesezeichen-Ordner von Firefox bietet schnellen Zugriff auf Ihre zuletzt hinzugefügten und getaggten Orte sowie auf Seiten, die Sie häufig besuchen.
- **Lesezeichen- und Verlaufs-Organizer.** Der neue einheitliche Lesezeichen- und Verlaufs-Organizer ermöglicht es Ihnen, Ihren Verlauf und Ihre Lesezeichen einfach mit mehreren Ansichten und intelligenten Ordnern für das Speichern Ihrer häufigen Suchen zu durchsuchen.
- **Webbasierte Protokoll-Handler.** Webanwendungen, wie Ihr bevorzugter Webmail-Anbieter, können nun anstelle von Desktop-Anwendungen zur Behandlung von `mailto:` Links von anderen Seiten verwendet werden. Ähnliche Unterstützung wird auch für andere Protokolle bereitgestellt. (Beachten Sie, dass Webanwendungen sich bei Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfach zu verwendende Download-Aktionen.** Ein neues Einstellungsfeld für Anwendungen bietet eine verbesserte Benutzeroberfläche für die Konfiguration von Handlern für verschiedene Dateitypen und Protokolllayer.
- **Verbesserte Optik.** Grafiken und Schriftsätze wurden verbessert, um Websites auf Ihrem Bildschirm besser aussehen zu lassen, einschließlich schärferer Textdarstellung und besserer Unterstützung für Schriften mit Ligaturen und komplexen Skripten. Darüber hinaus werden Mac- und Linux (GNOME)-Benutzer feststellen, dass Firefox sich mehr wie eine native Anwendung für ihre Plattform anfühlt als je zuvor, mit einem neuen, nativen, Look and Feel.
- **Unterstützung für Farbmanagement.** Durch das Setzen der `gfx.color_management.enabled` Präferenz in `about:config` können Sie Firefox anweisen, die in Bildern eingebetteten Farbprofile zu verwenden, um die Farben an die Anzeige Ihres Computers anzupassen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um auch dann verwendet zu werden, wenn Sie keine Internetverbindung haben.

### Sicherheit und Datenschutz

- **Ein-Klick-Site-Informationen.** Möchten Sie mehr über die Seite wissen, die Sie besuchen? Klicken Sie auf das Symbol der Seite in der Adressleiste, um zu sehen, wem sie gehört. Die Identitätsinformationen werden prominent angezeigt und sind einfacher denn je zu verstehen.
- **Schutz vor Malware.** Firefox 3 warnt Sie, wenn Sie auf eine Website stoßen, die dafür bekannt ist, Viren, Spyware, Trojaner oder andere gefährliche Software (bekannt als Malware) zu installieren.
- **Verstärkter Schutz vor Webfälschungen.** Wenn Sie eine Seite besuchen, die als Fälschung verdächtigt wird, wird Ihnen nun eine spezielle Seite anstelle des Inhalts der Seite mit einer Warnung angezeigt.
- **Einfacher zu verstehende SSL-Fehler.** Die Fehler, die auftreten, wenn ein ungültiges SSL-Zertifikat festgestellt wird, wurden klarer gestaltet, um das Verständnis des Problems zu erleichtern.
- **Schutz vor veralteten Add-ons.** Firefox 3 prüft nun automatisch die Versionen von Add-ons und Plugins und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit der Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Update-Mechanismus verwenden, nicht mehr zugelassen werden.
- **Antivirus-Integration.** Firefox 3 informiert nun Antivirus-Software, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung für Windows Vista Elternkontrollen.** Firefox 3 unterstützt die systemweite Elternkontrollfunktion von Vista zum Deaktivieren von Datei-Downloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert nun Lesezeichen, Verlauf, Cookies und Einstellungen in einem transaktionssicheren Datenbankformat. Das bedeutet, dass Ihre Daten selbst bei einem Systemabsturz vor Verlust geschützt sind.
- **Geschwindigkeit.** Firefox 3 hat durch den vollständigen Ersatz der Komponente, die für das Zeichnen auf Ihrem Bildschirm zuständig ist, sowie durch die Bewältigung der Seitengestaltung einen Leistungsschub erhalten.
- **Reduzierter Speicherverbrauch.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicher "Leak"-Bugs und neuen Funktionen, die automatisch gespeicherte Speicherblöcke lokalisieren und beseitigen.

## Siehe auch

{{Firefox_for_developers}}
