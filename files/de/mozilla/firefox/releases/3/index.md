---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{FirefoxSidebar}}

Wenn Sie ein Entwickler sind, der sich mit den neuen Funktionen von Firefox 3 vertraut machen möchte, ist dies der perfekte Ausgangspunkt. Dieser Artikel bietet eine Liste der neuen Artikel, die Funktionen abdecken, die zu Firefox 3 hinzugefügt wurden. Er behandelt zwar nicht unbedingt jede kleine Änderung, hilft Ihnen jedoch dabei, sich über die wichtigsten Verbesserungen zu informieren.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisierungen von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen über Änderungen, die Sie möglicherweise an Ihrer Website oder Webanwendung vornehmen müssen, um neue Funktionen von Firefox 3 zu nutzen.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG Online- und Offline-Ereignisse, mit denen Apps und Erweiterungen erkennen können, ob eine aktive Internetverbindung besteht und wann die Verbindung hergestellt oder unterbrochen wird.
- [Webbasierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können nun Webanwendungen als Protokollhandler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Text mit einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können nun Text in einem `canvas` mithilfe einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transformationsunterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvas.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/microformats)
  - : Firefox verfügt nun über APIs zur Arbeit mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Quellknoten für eine Drag-Operation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusmanagement in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht jetzt Webanwendungen, Ressourcen zwischenspeichern zu lassen, um die Anwendung im Offline-Modus zu nutzen.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in der Unterstützung von CSS.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich der Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8-Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen wesentlichen Teil der [EXSLT](/de/docs/Web/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie weitere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG-Format (APNG).

### Für XUL- und Erweiterungsentwickler

#### Bedeutende Änderungen und Verbesserungen

- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den Dingen, die Sie tun müssen, um Ihre Erweiterung an Firefox 3 anzupassen.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, darunter neue Schieberegler, eine Datums- und Zeitauswahl sowie Drehregler.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die Schlüsselerweiterung ermöglicht die Verwendung benutzerdefinierter Abfrageprozessoren, um andere Datenquellen als RDF zu verwenden.
- [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Upgrade-Pfad für Nutzer zu bieten, müssen Add-ons nun eine sichere Methode zum Erhalt von Updates bereitstellen, bevor sie installiert werden können. Add-ons, die bei [AMO](https://addons.mozilla.org) gehostet werden, bieten dies automatisch. Jegliche Add-ons, die keine sichere Update-Methode bereitstellen, werden bei der Aktualisierung auf Firefox 3 automatisch deaktiviert. Firefox wird jedoch weiterhin nach Updates für die Erweiterung über den unsicheren Pfad suchen und versuchen, jegliche angebotenen Updates zu installieren (die Installation schlägt fehl, wenn das Update ebenfalls keine sichere Methode bietet).
- [Leitfaden zur Places-Migration](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine vorhandene Erweiterung aktualisiert wird, um die Places-API zu nutzen.
- [Download-Manager Verbesserungen in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Firefox 3 Download-Manager bietet neue und verbesserte APIs, inklusive Unterstützung für mehrere Fortschrittsbeobachter.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:`-URL-Schema aus dem Chrom-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-On-Metadaten. Dadurch sind die lokalisierten Details verfügbar, sobald das Add-On heruntergeladen wurde, sowie wenn das Add-On deaktiviert ist.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge zur Unterstützung der korrekten Pluralisierung von Wörtern in mehreren Lokalisierungen bereitstellt.
- [Theme-Änderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalitäten

- [FUEL-Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL soll es Erweiterungsentwicklern erleichtern, produktiv zu sein, indem einige Formalitäten von XPCOM minimiert und einige "moderne" JavaScript-Ideen hinzugefügt werden.
- [Places](/de/docs/Places)
  - : Die History- und Lesezeichen-APIs wurden vollständig durch die neue [Places](/de/docs/Places) API ersetzt.
- [Idle-Dienst](/de/docs/nsIIdleService)
  - : Firefox 3 bietet das neue `nsIIdleService`-Interface, das Erweiterungen ermöglicht festzustellen, wie lange es her ist, dass der Nutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP-Schreiber](/de/docs/nsIZipWriter)
  - : Das neue `nsIZipWriter`-Interface ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Seiten-Weitzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert das Benutzererlebnis durch das Angebot von Seiten-Weitzoom zusätzlich zum nur-Text-Zoom.
- [Schnittstelle zum XPCOM-Zyklussammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann nun den Zyklussammler nutzen, der hilft sicherzustellen, dass ungenutzter Speicher freigegeben wird, anstatt verloren zu gehen.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet das neue `nsIThreadManager`-Interface sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine komfortable Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet nun einen neuen Mechanismus für freigegebene Code-Module, der es ermöglicht, Module in JavaScript zu erstellen, die von Erweiterungen und Anwendungen zur Verwendung geladen werden können, ähnlich wie freigegebene Bibliotheken.
- [Das `nsIJSON`-Interface](/de/docs/nsIJSON)
  - : Firefox 3 bietet das neue `nsIJSON`-Interface, welches eine leistungsstarke Kodierung und Dekodierung von [JSON](/de/docs/Glossary/JSON)-Strings bietet.
- Das `nsIParentalControlsService`-Interface
  - : Firefox 3 unterstützt das Parental Control-Feature von Microsoft Windows Vista und ermöglicht es dem Code, damit zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 umfasst einen neuen Dienst zum Abrufen und Festlegen beliebiger, sitespezifischer Präferenzen, die sowohl von Erweiterungen als auch vom Kerncode zur Verwaltung der Nutzerpräferenzen für einzelne Seiten genutzt werden können.
- [Plug-in-Überwachung](/de/docs/Monitoring_plugins)
  - : Eine neue Komponente des Plug-in-Systems ist jetzt verfügbar, um zu messen, wie lange Plug-ins (z. B. Macromedia Flash) zur Ausführung ihrer Aufrufe benötigen.

#### Behobene Fehler

- [Bemerkenswerte in Firefox 3 behobene Fehler](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen über in Firefox 3 behobene Fehler.

## Neue Funktionen für Endbenutzer

### Benutzererlebnis

- **Einfacher Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erscheint nun, um Ihnen das Speichern von Passwörtern nach einer erfolgreichen Anmeldung zu ermöglichen.
- **Vereinfachte Installation von Add-Ons.** Sie können nun Erweiterungen von Websites von Drittanbietern mit weniger Klicks installieren, dank der Entfernung der Whitelist für Add-On-Download-Sites.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Auffinden Ihrer heruntergeladenen Dateien.
- **Fortsetzbare Downloads.** Sie können jetzt Downloads nach einem Neustart des Browsers oder dem Zurücksetzen Ihrer Netzwerkverbindung fortsetzen.
- **Seiten-Weitzoom.** Über das Ansichtsmenü und mittels Tastenkombinationen können Sie jetzt den Inhalt ganzer Seiten vergrößern und verkleinern – dies skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrolling und Schnellmenü.** Tabs sind einfacher zu finden mit den neuen Tab-Scrolling- und Tab-Schnellmenü-Funktionen.
- **Speichern, was Sie gemacht haben.** Firefox 3 fragt, ob Sie beim Beenden von Firefox Ihre aktuellen Tabs speichern möchten.
- **Optimiertes Öffnen in Tabs-Verhalten.** Beim Öffnen eines Lesezeichen-Ordners in Tabs werden die neuen Tabs nun angefügt, anstatt die bestehenden zu ersetzen.
- **Einfacher das Größenverändern von Adress- und Suchleiste.** Sie können die Adress- und Suchleiste jetzt einfach mittels eines einfachen Griffes zwischen ihnen verändern.
- **Textauswahl-Verbesserungen.** Sie können nun mehrere Bereiche Text mit Hilfe der Strg-Taste (Befehlstaste auf Macintosh) markieren. Doppelklicken und ziehen wählt nun im „Wort-für-Wort“-Modus. Dreifachklicken wählt einen ganzen Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plug-in-Management.** Nutzer können jetzt einzelne Plug-ins im Add-On-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden jetzt mit dem nativen Design von Vista angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Button.** Der neue Stern-Button in der Adressleiste ermöglicht es Ihnen, schnell ein neues Lesezeichen mit einem einzigen Klick hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu archivieren und zu markieren.
- **Tags.** Sie können Ihren Lesezeichen jetzt Schlüsselwörter zuordnen, um sie einfach nach Thema zu sortieren.
- **Adressleiste und Autovervollständigung.** Geben Sie den Titel oder das Tag einer Seite in die Adressleiste ein, um schnell die Seite in Ihrem Verlauf und Lesezeichen zu finden, die Sie suchen. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen dabei zu sehen, woher die Ergebnisse stammen.
- **Ordner für intelligente Lesezeichen.** Firefoxs neuer Ordner für intelligente Lesezeichen bietet schnellen Zugriff auf Ihre kürzlich gespeicherten und markierten Orte sowie auf Seiten, die Sie häufig besuchen.
- **Organizer für Lesezeichen und Historie.** Der neue einheitliche Organizer für Lesezeichen und Historie ermöglicht es Ihnen, Ihre Historie und Lesezeichen einfach mit mehreren Ansichten und intelligenten Ordnern zu durchsuchen, um Ihre häufigen Suchen zu speichern.
- **Webbasierte Protokollhandler.** Webanwendungen, wie Ihr bevorzugter Webmail-Anbieter, können jetzt anstelle von Desktop-Anwendungen verwendet werden, um `mailto:`-Links von anderen Seiten zu behandeln. Ähnliche Unterstützung wird auch für andere Protokolle geboten. (Beachten Sie, dass sich Webanwendungen bei Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfach zu verwendende Download-Aktionen.** Ein neues Anwendungseinstellungs-Panel bietet eine verbesserte Benutzeroberfläche zur Konfiguration von Handlern für verschiedene Dateitypen und Protokollschemata.
- **Verbessertes Aussehen und Gefühl.** Grafik- und Schriftenverarbeitung wurden verbessert, um Websites besser auf Ihrem Bildschirm aussehen zu lassen, einschließlich schärferer Textdarstellung und besserer Unterstützung für Schriften mit Ligaturen und komplexen Skripten. Darüber hinaus werden Mac- und Linux (Gnome)-Nutzer feststellen, dass sich Firefox nun mehr wie eine native Anwendung für ihre Plattform anfühlt als je zuvor, mit einem neuen, nativen Look und Feel.
- **Farbmanagement-Unterstützung.** Durch Einstellung der `gfx.color_management.enabled` Präferenz in `about:config` können Sie Firefox bitten, die in Bildern eingebetteten Farbprofile zu verwenden, um die Farben so anzupassen, dass sie mit dem Display Ihres Computers übereinstimmen.
- **Offlinesupport.** Webanwendungen können neue Funktionen nutzen, um auch dann verwendet zu werden, wenn Sie keine Internetverbindung haben.

### Sicherheit und Datenschutz

- **Ein-Klick-Website-Informationen.** Möchten Sie mehr über die Website erfahren, die Sie besuchen? Klicken Sie auf das Symbol der Seite in der Adressleiste, um zu sehen, wem sie gehört. Informationen zur Identifizierung werden prominent angezeigt und sind einfacher denn je zu verstehen.
- **Schutz vor Malware.** Firefox 3 warnt Sie, wenn Sie eine Website besuchen, von der bekannt ist, dass sie Viren, Spyware, Trojaner oder andere gefährliche Software (bekannt als Malware) installiert.
- **Verbesserter Schutz vor Webbetrug.** Jetzt werden Sie, wenn Sie eine Seite besuchen, die als Fälschung verdächtigt wird, auf eine spezielle Seite anstatt auf den Inhalt der Seite mit einer Warnung geleitet.
- **Einfacher verständliche SSL-Fehler.** Die Fehler, die beim Auftreten eines ungültigen SSL-Zertifikats angezeigt werden, wurden klargestellt, um das Verständnis des Problems zu erleichtern.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft jetzt automatisch Add-on- und Plugin-Versionen und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit bei Add-on-Updates wurde verbessert, indem Add-ons, die eine unsichere Update-Methode verwenden, nicht mehr zugelassen werden.
- **Antiviren-Integration.** Firefox 3 informiert jetzt Antivirensoftware, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung von Windows Vista Elternkontrollen.** Firefox 3 unterstützt das systemweite Elternkontrollen-Feature von Vista zum Deaktivieren von Dateidownloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert jetzt Lesezeichen, Historie, Cookies und Präferenzen in einem transaktionssicheren Datenbankformat. Dies bedeutet, dass Ihre Daten auch im Falle eines Systemabsturzes geschützt sind.
- **Geschwindigkeit.** Firefox 3 hat einen Leistungsanstieg erhalten, indem der Teil der Software, der für die Darstellung auf Ihrem Bildschirm verantwortlich ist, sowie die Art und Weise, wie Seitenlayouts ausgeführt werden, vollständig ersetzt wurden.
- **Speichernutzung reduziert.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicher-"Leck"-Fehlern und neuen Funktionen, die helfen, verlorene Speicherblöcke automatisch aufzuspüren und zu entsorgen.

## Siehe auch

{{Firefox_for_developers}}
