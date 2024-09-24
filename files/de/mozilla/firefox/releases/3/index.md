---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{FirefoxSidebar}}

Wenn Sie ein Entwickler sind und sich einen Überblick über alle neuen Funktionen in Firefox 3 verschaffen möchten, ist dies der perfekte Ausgangspunkt. Dieser Artikel bietet eine Liste der neuen Artikel, die Funktionen abdecken, die zu Firefox 3 hinzugefügt wurden. Auch wenn er nicht unbedingt jede kleine Änderung behandelt, wird er Ihnen helfen, sich über die wichtigsten Verbesserungen zu informieren.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Webanwendungen für Firefox 3 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen zu Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen in Firefox 3 nutzen zu können.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG-Online- und Offline-Ereignisse, die es Anwendungen und Erweiterungen ermöglichen, festzustellen, ob eine aktive Internetverbindung besteht, sowie zu erkennen, wann die Verbindung auf- oder abgebaut wird.
- [Webbasierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können jetzt Webanwendungen als Protokollhandler mit der Methode `navigator.registerProtocolHandler()` registrieren.
- [Text in einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können jetzt Text in einem Canvas mit einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transform-Unterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvas.
- [Verwendung von Microformats](/de/docs/Web/HTML/microformats)
  - : Firefox verfügt nun über APIs zur Arbeit mit Microformats.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Quellknoten einer Ziehoperation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusverwaltung in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht es Webanwendungen jetzt, Ressourcen anzufordern, die im Cache gespeichert werden sollen, um die Anwendung auch offline nutzbar zu machen.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe von Verbesserungen bei der Unterstützung von CSS.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Features in der DOM-Implementierung, einschließlich der Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8 Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT Unterstützung](/de/docs/Web/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen wesentlichen Teil der [EXSLT](/de/docs/Web/EXSLT)-Erweiterungen von [XSLT](/de/docs/Web/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute und weiteren Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das APNG-Bildformat (Animated PNG).

### Für XUL- und Erweiterungsentwickler

#### Bemerkenswerte Änderungen und Verbesserungen

- [Erweiterungen für Firefox 3 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Ein Leitfaden zu den Schritten, die Sie unternehmen müssen, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schiebeskalen, Datums- und Zeitauswähler und Drehregler.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die Hauptverbesserung erlaubt die Verwendung benutzerdefinierter Anfrageprozessoren, um Datenquellen außer RDF zu verwenden.
- [Sichere Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Add-on-Upgradepfad für Benutzer bereitzustellen, müssen Add-ons nun eine sichere Methode zum Erhalt von Updates anbieten, bevor sie installiert werden können. Add-ons, die bei [AMO](https://addons.mozilla.org) gehostet werden, bieten dies automatisch. Jegliche Installationen von Add-ons, die bei einem Upgrade auf Firefox 3 keine sichere Update-Methode bieten, werden automatisch deaktiviert. Firefox überprüft jedoch weiterhin Updates für die Erweiterung über den unsicheren Pfad und versucht, ein angebotenes Update zu installieren (die Installation schlägt fehl, wenn das Update ebenfalls keine sichere Update-Methode bietet).
- [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie man eine bestehende Erweiterung aktualisiert, um die Places-API zu verwenden.
- [Verbesserungen des Download-Managers in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Firefox 3 Download-Manager bietet neue und verbesserte APIs, einschließlich der Unterstützung für mehrere Fortschrittsanzeiger.
- Verwendung des nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können nun das `data:` URL-Schema aus Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. So sind die lokalisierten Details sofort nach dem Herunterladen des Add-ons sowie beim Deaktivieren des Add-ons verfügbar.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge bereitstellt, um Wörter in mehreren Lokalisierungen korrekt zu pluralisieren.
- [Themenänderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Anmerkungen und Informationen für Personen, die Themen für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalitäten

- [FUEL Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL soll es Erweiterungsentwicklern erleichtern, produktiv zu sein, indem es einige der XPCOM-Formalitäten minimiert und einige "moderne" JavaScript-Ideen hinzufügt.
- [Places](/de/docs/Places)
  - : Die APIs für Verlauf und Lesezeichen wurden vollständig durch die neue [Places](/de/docs/Places) API ersetzt.
- [Leerlaufdienst](/de/docs/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, mit der Erweiterungen feststellen können, wie lange es her ist, seit der Benutzer das letzte Mal eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP-Writer](/de/docs/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollflächiges Zoomen](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert das Benutzererlebnis, indem es neben dem reinen Textzoom auch ein Vollflächiges Zoomen ermöglicht.
- [Interaktion mit dem XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann nun den Zyklus-Sammler verwenden, um sicherzustellen, dass nicht genutzter Speicher freigegeben wird, anstatt zu lecken.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet nun einen neuen Mechanismus für gemeinsam genutzte Codemodule, der es Ihnen ermöglicht, Module in JavaScript zu erstellen, die von Erweiterungen und Anwendungen wie geteilte Bibliotheken geladen werden können.
- [Die `nsIJSON` Schnittstelle](/de/docs/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine hochleistungsfähige Kodierung und Dekodierung von [JSON](/de/docs/Glossary/JSON)-Strings bereitstellt.
- Die `nsIParentalControlsService` Schnittstelle
  - : Firefox 3 unterstützt jetzt die Kindersicherung von Microsoft Windows Vista und ermöglicht es dem Code, damit zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst zum Abrufen und Setzen beliebiger sitespezifischer Präferenzen, die Erweiterungen sowie Kerncode verwenden können, um die Präferenzen ihrer Benutzer für einzelne Sites zu verfolgen.
- [Plug-in-Überwachung](/de/docs/Monitoring_plugins)
  - : Ein neuer Bestandteil des Pluginsystems ist jetzt verfügbar, um zu messen, wie lange Plugins (z.B. Macromedia Flash) benötigen, um ihre Aufrufe auszuführen.

#### Behobene Fehler

- [Bemerkenswerte Fehler, die in Firefox 3 behoben wurden](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen zu den Fehlern, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste am oberen Rand des Browserfensters erscheint jetzt, um Sie zu fragen, ob Sie Passwörter speichern möchten, nachdem Sie sich erfolgreich angemeldet haben.
- **Vereinfachte Add-on-Installation.** Sie können jetzt Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank der Entfernung der Whitelist für Add-on-Downloadseiten.
- **Neuer Download-Manager.** Der Download-Manager erleichtert die Lokalisierung Ihrer heruntergeladenen Dateien.
- **Fortsetzbare Downloads.** Sie können Downloads nun nach einem Neustart des Browsers oder einer Netzwerkrücksetzung fortsetzen.
- **Vollflächiges Zoomen.** Über das Ansicht-Menü und Tastenkombinationen können Sie nun den Inhalt ganzer Seiten vergrößern und verkleinern – das skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrollen und Schnellmenü.** Tabs sind durch die neuen Tab-Scrolling- und Tab-Schnellmenü-Funktionen leichter auffindbar.
- **Speichern, was Sie gerade tun.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes "In Tabs öffnen"-Verhalten.** Das Öffnen eines Lesezeichenordners in Tabs fügt jetzt die neuen Tabs anstatt der Ersetzung der vorhandenen hinzu.
- **Einfacher zur Größenänderung der Adress- und Suchleisten.** Sie können die Adress- und Suchleisten jetzt ganz einfach mit einem einfachen Größenänderungsgriff zwischen ihnen anpassen.
- **Verbesserungen bei der Textauswahl.** Sie können nun mehrere Textbereiche unter Verwendung der Steuerungstaste (Befehlstaste bei Macintosh) auswählen. Durch Doppelklicken und Ziehen wird jetzt im "Wort-für-Wort"-Modus ausgewählt. Dreifachklicken wählt einen ganzen Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plugin-Verwaltung.** Benutzer können jetzt einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Firefox-Menüs zeigen nun das native Vista-Design an.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Button.** Der neue Stern-Button in der Adressleiste ermöglicht es Ihnen, ein neues Lesezeichen schnell mit einem einzigen Klick hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu archivieren und zu taggen.
- **Tags.** Sie können jetzt Schlüsselwörter mit Ihren Lesezeichen assoziieren, um diese einfach nach Themen zu sortieren.
- **Adressleiste und Auto-Vervollständigung.** Tippen Sie den Titel oder Tag einer Seite in die Adressleiste ein, um schnell die von Ihnen gesuchte Seite in Ihrem Verlauf und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Smart Bookmarks Ordner.** Der neue Smart Bookmarks Ordner in Firefox bietet schnellen Zugriff auf Ihre kürzlich markierten und getaggten Orte sowie auf Seiten, die Sie häufig besuchen.
- **Lesezeichen- und Verlauf-Organizer.** Der neue einheitliche Lesezeichen- und Verlauf-Organizer ermöglicht es Ihnen, einfach in Ihrem Verlauf und Ihren Lesezeichen mit mehreren Ansichten und intelligenten Ordnern zu suchen, um Ihre häufigen Suchen zu speichern.
- **Webbasierte Protokollhandler.** Webanwendungen, wie Ihr bevorzugter Webmail-Anbieter, können jetzt statt Desktop-Anwendungen zum Umgang mit `mailto:`-Links von anderen Seiten verwendet werden. Ähnliche Unterstützung wird auch für andere Protokolle bereitgestellt. (Beachten Sie, dass sich Webanwendungen zuerst bei Firefox registrieren müssen, damit dies funktioniert.)
- **Einfach zu verwendende Download-Aktionen.** Ein neues Anwendungspräferenzenfeld bietet eine verbesserte Benutzeroberfläche zur Konfiguration von Handhabern für verschiedene Dateitypen und Protokollschemata.
- **Verbessertes Aussehen und Feeling.** Grafiken und Schriftverwaltung wurden verbessert, um Websites besser auf Ihrem Bildschirm aussehen zu lassen, einschließlich schärferer Textrendering und besserer Unterstützung für Schriften mit Ligaturen und komplexen Schriftzeichen. Darüber hinaus werden Mac- und Linux (Gnome)-Benutzer feststellen, dass sich Firefox mehr wie eine native Anwendung für ihre Plattform anfühlt, mit einem neuen, nativen Aussehen und Gefühl.
- **Unterstützung für Farbmanagement.** Durch Setzen der Einstellung `gfx.color_management.enabled` in `about:config` können Sie Firefox anweisen, die in Bilder eingebetteten Farbprofile zu verwenden, um die Farben an das Display Ihres Computers anzupassen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um auch ohne Internetverbindung genutzt zu werden.

### Sicherheit und Datenschutz

- **Ein-Klick-Site-Informationen.** Möchten Sie mehr über die Seite wissen, die Sie besuchen? Klicken Sie auf das Symbol der Seite in der Adressleiste, um zu sehen, wem sie gehört. Identitätsinformationen werden prominent angezeigt und sind leichter denn je zu verstehen.
- **Schutz vor Malware.** Firefox 3 warnt Sie, wenn Sie auf eine Website gelangen, die bekannt dafür ist, Viren, Spyware, Trojaner oder andere gefährliche Software (bekannt als Malware) zu installieren.
- **Erweiterter Schutz vor Webfälschungen.** Jetzt, wenn Sie eine Seite besuchen, die verdächtigt wird, eine Fälschung zu sein, wird eine spezielle Seite anstelle der Inhalte der Seite mit einer Warnung angezeigt.
- **Einfacher zu verstehende SSL-Fehler.** Die Fehler, die angezeigt werden, wenn ein ungültiges SSL-Zertifikat auftritt, wurden klargestellt, um es einfacher zu verstehen, was das Problem ist.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft nun automatisch Add-on- und Plugin-Versionen und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit der Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Update-Mechanismus verwenden, nicht mehr erlaubt sind.
- **Antivirus-Integration.** Firefox 3 informiert jetzt Antivirensoftware, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung der Windows Vista Kindersicherung.** Firefox 3 unterstützt die Vista-systemweite Kindersicherungseinstellung zum Deaktivieren von Datei-Downloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert nun Lesezeichen, Verlauf, Cookies und Präferenzen in einem transaktionssicheren Datenbankformat. Dies bedeutet, dass Ihre Daten auch bei einem Systemabsturz vor Verlust geschützt sind.
- **Geschwindigkeit.** Firefox 3 hat einen Leistungsschub erhalten, indem der Teil der Software, der das Rendern auf Ihrem Bildschirm handhabt, sowie die Behandlung der Seitenlayoutarbeit vollständig ersetzt wurden.
- **Verminderter Speicherbedarf.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicher-"Leck"-Bugs und neuen Funktionen, um automatisch undichte Speicherblöcke zu lokalisieren und zu entsorgen.

## Siehe auch

{{Firefox_for_developers}}
