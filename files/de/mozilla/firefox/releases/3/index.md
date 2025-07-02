---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Wenn Sie ein Entwickler sind und versuchen, alle neuen Funktionen in Firefox 3 zu verstehen, ist dies der perfekte Ausgangspunkt. Dieser Artikel liefert eine Liste neuer Artikel, die die in Firefox 3 hinzugefügten Funktionen abdecken. Obwohl nicht jede kleine Änderung behandelt wird, hilft es Ihnen, die wichtigsten Verbesserungen kennenzulernen.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisierung von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen über Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen in Firefox 3 nutzen zu können.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG-Online- und Offline-Ereignisse, die es Anwendungen und Erweiterungen ermöglichen, zu erkennen, ob eine aktive Internetverbindung besteht und wann die Verbindung hergestellt oder unterbrochen wird.
- [Webbasierte Protokoll-Handler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können jetzt Webanwendungen als Protokoll-Handler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Text in einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können nun Text in einem Canvas zeichnen, indem Sie eine nicht standardisierte API verwenden, die von Firefox 3 unterstützt wird.
- [Transformationsunterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvas.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/Guides/Microformats)
  - : Firefox bietet jetzt APIs zum Arbeiten mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Ursprungs-Knoten gesendet werden, wenn ein Ziehvorgang beginnt und endet.
- [Fokusmanagement in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox lässt jetzt zu, dass Webanwendungen Ressourcen zwischenspeichern, damit die Anwendung offline genutzt werden kann.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in der CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung, einschließlich Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8-Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/XML/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen wesentlichen Teil der [EXSLT](/de/docs/Web/XML/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XML/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie andere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG (APNG)-Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Bedeutende Änderungen und Verbesserungen

- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den erforderlichen Änderungen, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schieberegler, Datum- und Zeitauswahl sowie Drehknöpfe.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von benutzerdefinierten Abfrageprozessoren, sodass andere Datenquellen als RDF verwendet werden können.
- [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Add-on-Upgrade-Pfad für Benutzer bereitzustellen, müssen Add-ons jetzt eine sichere Methode zur Beschaffung von Updates anbieten, bevor sie installiert werden können. Add-ons, die bei [AMO](https://addons.mozilla.org/) gehostet werden, bieten dies automatisch an. Alle Add-ons, die keine sichere Update-Methode bieten, werden automatisch deaktiviert, wenn der Benutzer auf Firefox 3 aktualisiert. Firefox wird dennoch weiterhin nach Updates für die Erweiterung über den unsicheren Pfad suchen und versuchen, jedes angebotene Update zu installieren (die Installation schlägt fehl, wenn das Update ebenfalls keine sichere Update-Methode bereitstellt).
- [Orte Migrationsleitfaden](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie man eine bestehende Erweiterung aktualisiert, um die Orte-API zu verwenden.
- [Verbesserungen im Download-Manager in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager von Firefox 3 bietet neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittsüberwacher.
- Verwendung des `nsILoginManager`
  - : Der Passwortmanager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:` URL-Schema aus chromatischem Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Dadurch stehen die lokalisierten Details sofort zur Verfügung, sobald das Add-on heruntergeladen wurde, sowie wenn das Add-on deaktiviert ist.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge zur Unterstützung der korrekten Pluralisierung von Wörtern in mehreren Lokalisierungen bietet.
- [Thema-Änderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionen

- [FUEL-Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL soll es Erweiterungsentwicklern erleichtern, produktiv zu sein, indem es einige der Formalien von XPCOM minimiert und einige "moderne" JavaScript-Ideen hinzufügt.
- [Orte](/de/docs/Places)
  - : Die APIs für Verlauf und Lesezeichen wurden vollständig durch die neue [Orte](/de/docs/Places)-API ersetzt.
- [Leerlaufdienst](/de/docs/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht, festzustellen, wie lange es her ist, dass der Benutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP-Schreiber](/de/docs/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Seitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert das Benutzererlebnis, indem es einen Seitenzoom zusätzlich zum nur-Text-Zoom bietet.
- [Interaktion mit dem XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann jetzt den Zyklus-Sammler nutzen, der hilft, sicherzustellen, dass ungenutzter Speicher freigegeben wird, anstatt verloren zu gehen.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet jetzt einen neuen Mechanismus für gemeinsame Code-Module, der es Ihnen ermöglicht, leicht Module in JavaScript zu erstellen, die von Erweiterungen und Anwendungen verwendet werden können, ähnlich wie gemeinsam genutzte Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](/de/docs/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine hochperformante Kodierung und Dekodierung von {{Glossary("JSON", "JSON")}}-Zeichenfolgen bietet.
- Die `nsIParentalControlsService`-Schnittstelle
  - : Firefox 3 unterstützt jetzt die Kinderschutzfunktion von Microsoft Windows Vista und ermöglicht es Code, damit zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst zum Abrufen und Setzen beliebiger seitenbezogener Präferenzen, den sowohl Erweiterungen als auch der Kerncode verwenden können, um die Präferenzen ihrer Benutzer für einzelne Seiten zu verfolgen.
- [Überwachung von Plug-ins](/de/docs/Monitoring_plugins)
  - : Ein neuer Bestandteil des Pluginsystems ist jetzt verfügbar, um zu messen, wie lange Plugins (z. B. Macromedia Flash) benötigen, um ihre Aufrufe auszuführen.

#### Behobene Fehler

- [Bemerkenswerte in Firefox 3 behobene Fehler](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel liefert Informationen über Fehler, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererlebnis

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erscheint jetzt, um Ihnen das Speichern von Passwörtern nach einem erfolgreichen Login zu ermöglichen.
- **Vereinfachte Add-on-Installation.** Sie können jetzt Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank des Entfernens der Add-on-Download-Seiten-Whitelist.
- **Neuer Download-Manager.** Der Download-Manager erleichtert es Ihnen, Ihre heruntergeladenen Dateien zu finden.
- **Wiederaufnehmbare Downloads.** Sie können jetzt Downloads nach einem Browser-Neustart oder einer Rücksetzung Ihrer Netzwerkverbindung fortsetzen.
- **Seitenzoom.** Über das Ansicht-Menü und Tastenkürzel können Sie nun den Inhalt ganzer Seiten ein- und auszoomen – nicht nur der Text, sondern auch das Layout und die Bilder werden skaliert.
- **Tab-Scrollen und Schnellmenü.** Mit den neuen Funktionen Tab-Scrollen und Tab-Schnellmenü sind Tabs leichter zu finden.
- **Speichern, was Sie getan haben.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes "In Tabs öffnen"-Verhalten.** Das Öffnen eines Ordners mit Lesezeichen in Tabs fügt jetzt die neuen Tabs hinzu, anstatt die vorhandenen zu ersetzen.
- **Einfacheres Anpassen der Adress- und Suchleiste.** Sie können die Adress- und Suchleiste jetzt einfach mit einem einfachen Ziehgriff dazwischen anpassen.
- **Textauswahl-Verbesserungen.** Sie können nun mehrere Textbereiche mit der Steuerungstaste (auf Macintosh-Befehlstaste) auswählen. Doppelklicken und Ziehen wählt nun im Wort-für-Wort-Modus aus. Dreifachklicken wählt einen gesamten Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plugin-Verwaltung.** Benutzer können jetzt einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden jetzt im nativen Thema von Vista angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Taste.** Die neue Stern-Taste in der Adressleiste ermöglicht es Ihnen, schnell ein neues Lesezeichen mit einem Klick hinzuzufügen. Ein zweiter Klick lässt Sie Ihr neues Lesezeichen ablegen und taggen.
- **Tags.** Sie können Ihren Lesezeichen jetzt Schlüsselwörter zuweisen, um sie einfach nach Themen zu sortieren.
- **Adressleisten- und Auto-Complete.** Geben Sie den Titel oder Tag einer Seite in die Adressleiste ein, um schnell die gesuchte Seite in Ihrem Verlauf und Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Smarte Lesezeichen-Ordner.** Der neue Smarte Lesezeichen-Ordner von Firefox bietet schnellen Zugriff auf kürzlich markierte und getaggte Orte sowie auf Seiten, die Sie häufig besuchen.
- **Lesezeichen- und Verlauf-Organizer.** Der neue, einheitliche Lesezeichen- und Verlauf-Organizer ermöglicht es Ihnen, Ihren Verlauf und Ihre Lesezeichen mit mehreren Ansichten und intelligenten Ordnern für das Speichern Ihrer häufigen Suchen leicht zu durchsuchen.
- **Webbasierte Protokoll-Handler.** Webanwendungen, wie z. B. Ihr bevorzugter Webmail-Anbieter, können jetzt anstelle von Desktop-Anwendungen zum Verarbeiten von `mailto:`-Links von anderen Sites verwendet werden. Ähnliche Unterstützung wird auch für andere Protokolle geboten. (Beachten Sie, dass sich Webanwendungen bei Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfach zu verwendende Download-Aktionen.** Ein neues Anwendungseinstellungsfenster bietet eine verbesserte Benutzeroberfläche zur Konfiguration von Handlers für verschiedene Dateitypen und Protokollschemata.
- **Verbessertes Aussehen und Verhalten.** Grafik- und Schrifthandling wurden verbessert, um Websites auf Ihrem Bildschirm besser aussehen zu lassen, einschließlich schärferem Textrendering und besserer Unterstützung für Schriftarten mit Ligaturen und komplexen Skripts. Zusätzlich werden Mac- und Linux (GNOME)-Benutzer feststellen, dass sich Firefox mehr denn je wie eine native Anwendung für ihre Plattform anfühlt, mit einem neuen, nativen Aussehen und Verhalten.
- **Farbmanagement-Unterstützung.** Durch Setzen der `gfx.color_management.enabled`-Einstellung in `about:config` können Sie Firefox bitten, die in Bildern eingebetteten Farbprofile zu verwenden, um die Farben an die Anzeige Ihres Computers anzupassen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um auch dann verwendet werden zu können, wenn Sie keine Internetverbindung haben.

### Sicherheit und Privatsphäre

- **Ein-Klick-Site-Informationen.** Möchten Sie mehr über die Website erfahren, die Sie besuchen? Klicken Sie auf das Icon in der Adressleiste, um zu sehen, wem sie gehört. Identifikationsinformationen werden deutlich angezeigt und sind einfacher denn je zu verstehen.
- **Malware-Schutz.** Firefox 3 warnt Sie, wenn Sie auf eine Website gelangen, die bekannt dafür ist, Viren, Spyware, Trojaner oder andere gefährliche Software (bekannt als Malware) zu installieren.
- **Verbesserter Schutz vor Webfälschungen.** Wenn Sie eine Seite besuchen, die verdächtigt wird, eine Fälschung zu sein, wird nun eine spezielle Seite angezeigt, anstatt des Inhalts der Seite mit einer Warnung.
- **Einfacher verständliche SSL-Fehler.** Die bei einem ungültigen SSL-Zertifikat angezeigten Fehler wurden klarer formuliert, um das Verständnis des Problems zu erleichtern.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft jetzt automatisch die Versionen von Add-ons und Plugins und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit von Add-on-Updates wurde verbessert, indem Add-ons mit einem unsicheren Update-Mechanismus abgelehnt werden.
- **Antivirus-Integration.** Firefox 3 informiert jetzt Antivirus-Software, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung von Windows Vista Jugendschutz.** Firefox 3 unterstützt die systemweite Jugendschutz-Einstellung von Vista zum Deaktivieren von Dateidownloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert Lesezeichen, Verlauf, Cookies und Präferenzen jetzt in einem transaktionssicheren Datenbankformat. Das bedeutet, dass Ihre Daten auch bei einem Systemausfall gegen Verlust geschützt sind.
- **Geschwindigkeit.** Firefox 3 hat einen Leistungsschub erhalten, indem der Teil der Software, der für das Zeichnen auf Ihrem Bildschirm zuständig ist, sowie die Handhabung der Seitenlayoutverarbeitung vollständig ersetzt wurde.
- **Reduzierter Speicherverbrauch.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicherleckfehlern und neuen Funktionen zum automatischen Auffinden und Beseitigen von geleakten Speicherblöcken.

## Siehe auch

{{Firefox_for_developers}}
