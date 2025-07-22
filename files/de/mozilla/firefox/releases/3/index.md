---
title: Firefox 3 für Entwickler
short-title: Firefox 3
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Wenn Sie ein Entwickler sind und sich mit den neuen Funktionen in Firefox 3 vertraut machen möchten, ist dies der perfekte Ausgangspunkt. Dieser Artikel bietet eine Liste der neuen Artikel zu den in Firefox 3 hinzugefügten Funktionen. Auch wenn nicht jede kleine Änderung abgedeckt wird, hilft er Ihnen, die wesentlichen Verbesserungen kennenzulernen.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisierung von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen über Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen in Firefox 3 nutzen zu können.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG-Online- und Offline-Ereignisse, die es Anwendungen und Erweiterungen ermöglichen, zu erkennen, ob eine aktive Internetverbindung besteht und wann die Verbindung unterbrochen oder wiederhergestellt wird.
- [Web-basierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können jetzt Webanwendungen als Protokollhandler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Text mit einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können jetzt Text in einem Canvas mit einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transform-Unterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvas.
- [Verwendung von Microformats](/de/docs/Web/HTML/Guides/Microformats)
  - : Firefox verfügt jetzt über APIs zur Arbeit mit Microformats.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an das Quellknoten für eine Ziehoperation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusmanagement im HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht jetzt Webanwendungen, dass Ressourcen zwischengespeichert werden können, damit die Anwendung offline genutzt werden kann.
- [CSS-Verbesserungen in Firefox 3](https://web.archive.org/web/20210224062716/https://developer.mozilla.org/de/docs/Mozilla/Firefox/releases/3/CSS_improvements)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in der CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich der Unterstützung mehrerer Internet Explorer-Erweiterungen für das DOM.
- [JavaScript 1.8-Unterstützung](https://web.archive.org/web/20210224081539/https://developer.mozilla.org/de/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/XML/EXSLT)
  - : Firefox 3 stellt Unterstützung für einen erheblichen Teil der [EXSLT](/de/docs/Web/XML/EXSLT)-Erweiterungen für [XSLT](/de/docs/Web/XML/XSLT) bereit.
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für mehr als zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie andere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG (APNG)-Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Bemerkenswerte Änderungen und Verbesserungen

- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den Maßnahmen, die Sie ergreifen müssen, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schieberegler, und Datums- und Zeitwähler sowie Drehtasten.
- [Vorlagen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Templates)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von benutzerdefinierten Abfrageprozessoren, sodass andere Datenquellen als RDF verwendet werden können.
- [Sicherung von Updates](https://web.archive.org/web/20201031093738/https://developer.mozilla.org/de/docs/Archive/Add-ons/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Aktualisierungspfad für Add-ons zu bieten, wird nun von Add-ons ein sicherer Aktualisierungsweg verlangt, bevor sie installiert werden können. Bei [AMO](https://addons.mozilla.org/) gehostete Add-ons bieten dieses automatisch. Alle installierten Add-ons, die keinen sicheren Update-Mechanismus bereitstellen, werden beim Upgrade auf Firefox 3 automatisch deaktiviert. Firefox wird jedoch weiterhin über den unsicheren Pfad nach Erweiterungs-Updates suchen und versuchen, angebotene Updates zu installieren (die Installation schlägt fehl, wenn auch das Update keinen sicheren Update-Mechanismus bietet).
- [Leitfaden zur Places-Migration](https://web.archive.org/web/20200621121524/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung aktualisiert werden kann, um die Places-API zu verwenden.
- [Verbesserungen des Download-Managers in Firefox 3](https://web.archive.org/web/20191009203342/https://developer.mozilla.org/de/docs/Archive/Mozilla/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager von Firefox 3 verfügt über neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittsüberwacher.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](https://web.archive.org/web/20190710111835/https://developer.mozilla.org/de/docs/Mozilla/Tech/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:` URL-Schema aus Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](https://web.archive.org/web/20210126131244/https://developer.mozilla.org/de/docs/Mozilla/Localization/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Dadurch sind die lokalisierten Details sowohl sofort nach dem Herunterladen des Add-ons verfügbar als auch, wenn das Add-on deaktiviert ist.
- [Lokalisierung und Plurals](https://web.archive.org/web/20210619213040/https://developer.mozilla.org/de/docs/Mozilla/Localization/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge bietet, um die korrekte Pluralisierung von Wörtern in mehreren Lokalisierungen zu unterstützen.
- [Themenänderungen in Firefox 3](https://web.archive.org/web/20210518052656/https://developer.mozilla.org/de/docs/Archive/Themes/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalitäten

- [FUEL-Bibliothek](https://web.archive.org/web/20210516092241/https://developer.mozilla.org/de/docs/Mozilla/Tech/Toolkit_API/FUEL)
  - : FUEL soll es für Erweiterungsentwickler einfacher machen, produktiv zu sein, indem es einige der Formalitäten von XPCOM minimiert und einige "moderne" JavaScript-Ideen hinzufügt.
- [Places](https://web.archive.org/web/20210620103113/https://developer.mozilla.org/de/docs/Mozilla/Tech/Places)
  - : Die Verlaufs- und Lesezeichen-APIs wurden vollständig durch die neue Places-API ersetzt.
- [Leerlaufdienst](https://web.archive.org/web/20210511041145/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht, zu bestimmen, wie lange es her ist, dass der Benutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP-Schreiber](https://web.archive.org/web/20210619003034/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollseiten-Zoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert das Benutzererlebnis durch das Angebot von Vollseiten-Zoom zusätzlich zum nur-Text-Zoom.
- [Schnittstelle zum XPCOM-Zyklus-Sammler](https://web.archive.org/web/20210620195127/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann jetzt den Zyklus-Sammler nutzen, der hilft sicherzustellen, dass nicht verwendeter Speicher freigegeben wird, anstatt verloren zu gehen.
- [Der Thread-Manager](https://web.archive.org/web/20210419232321/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](https://web.archive.org/web/20210531090101/https://developer.mozilla.org/de/docs/Mozilla/JavaScript_code_modules)
  - : Firefox 3 bietet jetzt einen neuen Mechanismus für gemeinsame Code-Module, mit dem Sie problemlos Module in JavaScript erstellen können, die von Erweiterungen und Anwendungen verwendet werden können, ähnlich wie gemeinsame Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](https://web.archive.org/web/20210514110540/https://developer.mozilla.org/de/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine leistungsstarke Kodierung und Dekodierung von {{Glossary("JSON", "JSON")}}-Strings bietet.
- Die `nsIParentalControlsService`-Schnittstelle
  - : Firefox 3 unterstützt jetzt das Microsoft Windows Vista-Funktyperenthagenkontrollen-Feature und ermöglicht es dem Code, mit ihm zu interagieren.
- [Verwendung von Inhaltspräferenzen](https://web.archive.org/web/20210314182749/https://developer.mozilla.org/de/docs/Archive/Misc_top_level/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst zum Abrufen und Setzen beliebiger websitespezifischer Präferenzen, die sowohl von Erweiterungen als auch von Kerncode verwendet werden können, um die Präferenzen ihrer Benutzer für einzelne Websites zu speichern.
- [Plug-in-Überwachung](https://web.archive.org/web/20160617124200/https://developer.mozilla.org/en-US/Add-ons/Plugins/Monitoring_plugins)
  - : Ein neuer Bestandteil des Pluginsystems ist jetzt verfügbar, um zu messen, wie lange Plugins (z. B. Macromedia Flash) benötigen, um ihre Aufrufe auszuführen.

#### Korrigierte Fehler

- [Bemerkenswerte Fehler, die in Firefox 3 behoben wurden](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen über Fehler, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erscheint jetzt, um Ihnen zu ermöglichen, Passwörter nach einer erfolgreichen Anmeldung zu speichern.
- **Vereinfachte Installation von Add-ons.** Sie können jetzt Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank der Entfernung der Whitelist für Add-on-Downloadseiten.
- **Neuer Download-Manager.** Der Download-Manager macht es einfacher, Ihre heruntergeladenen Dateien zu finden.
- **Fortsetzbare Downloads.** Sie können jetzt Downloads fortsetzen, nachdem Sie den Browser neu gestartet oder Ihre Netzwerkverbindung zurückgesetzt haben.
- **Vollseiten-Zoom.** Über das Menü "Ansicht" und mit Tastenkombinationen können Sie nun den Inhalt ganzer Seiten vergrößern und verkleinern – dies skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrolling und Schnellmenü.** Tabs sind mit den neuen Tab-Scrolling- und Tab-Schnellmenü-Funktionen leichter zu finden.
- **Speichern, was Sie tun.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes Verhalten von "In Tabs öffnen".** Das Öffnen eines Ordners mit Lesezeichen in Tabs hängt jetzt die neuen Tabs anstatt die bestehenden zu ersetzen.
- **Einfacheres Anpassen der Adress- und Suchleiste.** Sie können die Adress- und Suchleiste jetzt mit einem einfachen Ziehgriff zwischen ihnen leicht anpassen.
- **Verbesserungen bei der Textauswahl.** Sie können jetzt mehrere Textbereiche mit der Steuerungs-Taste (Befehl auf Macintosh) auswählen. Doppelklick und ziehen wählt jetzt im "Wort-für-Wort"-Modus aus. Dreifachklicks wählen einen gesamten Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plugin-Verwaltung.** Benutzer können nun einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden jetzt mit dem nativen Vista-Theme angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Button.** Der neue Stern-Button in der Adressleiste ermöglicht es Ihnen, schnell ein neues Lesezeichen mit einem einzigen Klick hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu speichern und zu taggen.
- **Tags.** Sie können jetzt Schlüsselwörter mit Ihren Lesezeichen verknüpfen, um sie einfach nach Themen zu sortieren.
- **Adressleiste und Auto-Vervollständigung.** Geben Sie den Titel oder das Tag einer Seite in die Adressleiste ein, um die gesuchte Seite schnell in Ihrer Chronik und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Intelligenter Lesezeichen-Ordner.** Firefox's neuer Intelligenter Lesezeichen-Ordner bietet schnellen Zugriff auf kürzlich gespeicherte und getaggte Orte sowie Seiten, die Sie häufig besuchen.
- **Lesezeichen- und Chronik-Organizer.** Der neue, vereinheitlichte Lesezeichen- und Chronik-Organizer ermöglicht es Ihnen, Ihre Chronik und Lesezeichen einfach mit mehreren Ansichten und intelligenten Ordnern für das Speichern Ihrer häufigen Suchanfragen zu durchsuchen.
- **Web-basierte Protokollhandler.** Webanwendungen wie Ihr favorisierter Web-E-Mail-Anbieter können jetzt anstelle von Desktop-Anwendungen zum Umgang mit `mailto:`-Links von anderen Websites verwendet werden. Ähnliche Unterstützung wird für andere Protokolle bereitgestellt. (Bitte beachten Sie, dass sich Webanwendungen mit Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfach zu verwendende Download-Aktionen.** Ein neues Anwendungen-Einstellungen-Panel bietet eine verbesserte Benutzeroberfläche zur Konfiguration von Handlern für verschiedene Dateitypen und Protokollschemata.
- **Verbessertes Aussehen und Verhalten.** Grafik- und Schriftbehandlungen wurden verbessert, um Websites auf Ihrem Bildschirm besser aussehen zu lassen, einschließlich schärferer Textwiedergabe und besserer Unterstützung für Schriften mit Ligaturen und komplexen Skripten. Außerdem finden Mac- und Linux (GNOME)-Benutzer, dass Firefox sich mehr denn je wie eine native Anwendung für ihre Plattform anfühlt, mit einem neuen, nativen Aussehen und Gefühl.
- **Farbmanagementunterstützung.** Indem Sie die `gfx.color_management.enabled`-Einstellung in `about:config` setzen, können Sie Firefox anweisen, die in Bildern eingebetteten Farbprofile zu verwenden, um die Farben an die Anzeige Ihres Computers anzupassen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um auch dann verwendet zu werden, wenn Sie keine Internetverbindung haben.

### Sicherheit und Privatsphäre

- **Ein-Klick-Website-Information.** Möchten Sie mehr über die Website wissen, die Sie besuchen? Klicken Sie auf das Symbol der Website in der Adressleiste, um zu sehen, wem sie gehört. Informationen zur Identifizierung werden prominent angezeigt und sind leichter denn je zu verstehen.
- **Malware-Schutz.** Firefox 3 warnt Sie, wenn Sie eine Website besuchen, die dafür bekannt ist, Viren, Spyware, Trojaner oder andere gefährliche Software (als Malware bekannt) zu installieren.
- **Verbesserter Schutz vor Webfälschungen.** Wenn Sie jetzt eine Seite besuchen, die als Fälschung verdächtigt wird, wird Ihnen eine spezielle Seite anstelle des Inhalts der Seite mit einer Warnung angezeigt.
- **Einfacher zu verstehende SSL-Fehler.** Die Fehler, die angezeigt werden, wenn ein ungültiges SSL-Zertifikat festgestellt wird, wurden geklärt, um das Verständnis des Problems zu erleichtern.
- **Schutz vor veralteten Add-ons.** Firefox 3 prüft automatisch die Versionen von Add-ons und Plugins und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit der Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Update-Mechanismus verwenden, nicht mehr zugelassen werden.
- **Antivirus-Integration.** Firefox 3 informiert nun die Antivirensoftware, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung für Windows Vista-Kindersicherungen.** Firefox 3 unterstützt die systemweiten Kindersicherungen von Vista zur Deaktivierung von Datei-Downloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert Lesezeichen, Chronik, Cookies und Einstellungen jetzt in einem transaktionssicheren Datenbankformat. Das bedeutet, dass Ihre Daten auch bei einem Systemabsturz vor Verlust geschützt sind.
- **Geschwindigkeit.** Firefox 3 hat durch die vollständige Ersetzung der Softwarekomponente, die die Zeichnung auf Ihrem Bildschirm und die Handhabung der Seitenlayoutarbeit behandelt, einen Leistungsschub erhalten.
- **Reduzierter Speicherverbrauch.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicher-"Leak"-Fehlern und neuen Funktionen, die helfen, automatisch verlorene Speicherblöcke zu lokalisieren und zu entsorgen.
