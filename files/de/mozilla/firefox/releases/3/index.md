---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: f98675af9d0a80f33d7875c48cfdb41f71ed1de9
---

{{FirefoxSidebar}}

Wenn Sie ein Entwickler sind, der versucht, alle neuen Funktionen in Firefox 3 zu verstehen, ist dies der perfekte Ausgangspunkt. Dieser Artikel bietet eine Liste der neuen Artikel, die Funktionen abdecken, die zu Firefox 3 hinzugefügt wurden. Obwohl nicht unbedingt jede kleine Änderung abgedeckt wird, hilft er Ihnen, sich über die wesentlichen Verbesserungen zu informieren.

## Neue Entwicklerfunktionen in Firefox 3

### Für Web- und Anwendungsentwickler

- [Aktualisierung von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen über Änderungen, die Sie möglicherweise an Ihrer Website oder Webanwendung vornehmen müssen, um von den neuen Funktionen in Firefox 3 zu profitieren.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt WHATWG Online- und Offline-Ereignisse, die Anwendungen und Erweiterungen ermöglichen, festzustellen, ob eine aktive Internetverbindung besteht, sowie das Erkennen von Verbindungsänderungen.
- [Webbasierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können jetzt Webanwendungen als Protokollhandler registrieren, indem Sie die Methode `navigator.registerProtocolHandler()` verwenden.
- [Text mittels Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können jetzt Text in ein `canvas`-Element zeichnen, indem Sie eine nicht standardisierte API verwenden, die von Firefox 3 unterstützt wird.
- [Transform-Unterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` für `canvas`-Elemente.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/microformats)
  - : Firefox bietet jetzt APIs zur Arbeit mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die beim Beginn und Ende eines Drag-Vorgangs an das Ursprungs-Node gesendet werden.
- [Fokusverwaltung in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5 Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht es Webanwendungen nun, Ressourcen anzufordern, damit sie im Offline-Modus verwendet werden können.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in seiner CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8-Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen erheblichen Teil der [EXSLT](/de/docs/Web/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie weitere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das Animated PNG (APNG) Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Bedeutende Änderungen und Verbesserungen

- [Aktualisierung von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden für die Maßnahmen, die erforderlich sind, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, darunter neue Schieberegler, Datums- und Zeitauswähler sowie Drehregler.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung benutzerdefinierter Abfrageprozessoren, um andere Datenquellen als RDF zu verwenden.
- [Gesicherte Aktualisierungen](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Add-on-Upgrade-Pfad für Benutzer bereitzustellen, müssen Add-ons jetzt eine sichere Methode zum Anfordern von Updates bereitstellen, bevor sie installiert werden können. Add-ons, die auf [AMO](https://addons.mozilla.org) gehostet werden, bieten dies automatisch. Alle Add-ons, die keine sichere Aktualisierungsmethode bieten, werden automatisch deaktiviert, wenn der Benutzer auf Firefox 3 aktualisiert. Firefox wird jedoch weiterhin versuchen, Informationen über Updates der Erweiterung über den unsicheren Pfad zu erhalten und anzuwenden.
- [Leitfaden zur Places-Migration](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung aktualisiert wird, um die Places API zu verwenden.
- [Verbesserungen des Download-Managers in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Firefox 3 Download Manager bietet neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittslistener.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login Manager ersetzt.
- [Einbettung von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:`-URL-Schema aus der Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Dadurch können die lokalisierten Details sofort nach dem Herunterladen des Add-ons sowie wenn das Add-on deaktiviert ist angezeigt werden.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge bereitstellt, um bei der korrekten Pluralisierung von Wörtern in mehreren Lokalisierungen zu helfen.
- [Theme-Änderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionalität

- [FUEL-Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL erleichtert es, dass Erweiterungsentwickler produktiver sein können, indem einige der XPCOM-Formalitäten minimiert und einige "moderne" JavaScript-Ideen hinzugefügt werden.
- [Places](/de/docs/Places)
  - : Die Verlauf- und Lesezeichen-APIs wurden vollständig durch die neue [Places](/de/docs/Places) API ersetzt.
- [Leerlaufdienst](/de/docs/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht, festzustellen, wie lange es her ist, seit der Benutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP-Schreiber](/de/docs/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollseitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert das Benutzererlebnis, indem es neben dem nur-textbasierten Zoom auch einen Vollseitenzoom anbietet.
- [Schnittstelle zur Verbindung mit dem XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann jetzt den Zyklus-Sammler verwenden, der hilft, sicherzustellen, dass nicht verwendeter Speicher freigegeben wird, anstatt auszulecken.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet jetzt einen neuen Mechanismus für gemeinsam genutzte Code-Module, der es ermöglicht, Module in JavaScript einfach zu erstellen, die von Erweiterungen und Anwendungen verwendet werden können, ähnlich wie gemeinsam genutzte Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](/de/docs/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine leistungsstarke Kodierung und Dekodierung von {{Glossary("JSON", "JSON")}}-Zeichenfolgen bietet.
- Die `nsIParentalControlsService`-Schnittstelle
  - : Firefox 3 unterstützt jetzt das Microsoft Windows Vista Elternkontrollen-Feature und ermöglicht Code, damit zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 beinhaltet einen neuen Dienst zum Abrufen und Festlegen von beliebigen websitespezifischen Präferenzen, die sowohl Erweiterungen als auch interner Code verwenden können, um die Präferenzen ihrer Benutzer für einzelne Webseiten nachzuverfolgen.
- [Plugin-Überwachung](/de/docs/Monitoring_plugins)
  - : Ein neuer Bestandteil des Plugin-Systems ist jetzt verfügbar, um zu messen, wie lange Plugins (z.B. Macromedia Flash) für die Ausführung ihrer Aufrufe benötigen.

#### Behobene Fehler

- [Bedeutende behobene Fehler in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen über Fehler, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erlaubt es Ihnen jetzt, Passwörter nach einem erfolgreichen Login zu speichern.
- **Vereinfachte Add-on-Installation.** Sie können jetzt Erweiterungen von Drittanbieterseiten mit weniger Klicks installieren, dank der Entfernung der Whitelist für Add-on-Downloadsites.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Auffinden Ihrer heruntergeladenen Dateien.
- **Wiederaufnahme von Downloads.** Sie können nun Downloads fortsetzen, nachdem Sie den Browser neu gestartet oder die Netzwerkverbindung zurückgesetzt haben.
- **Vollseitenzoom.** Im Ansichtsmenü und mit Tastenkombinationen können Sie jetzt den Inhalt ganzer Seiten vergrößern und verkleinern — dies skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrollen und Schnellmenü.** Tabs sind leichter zu finden dank der neuen Funktionen zum Tab-Scrollen und Schnellmenü.
- **Fortschritte speichern.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes Öffnen in Tabs-Verhalten.** Öffnen eines Lesezeichenordners in Tabs fügt die neuen Tabs jetzt hinzu anstatt die aktuellen zu ersetzen.
- **Einfachere Größenanpassung von Adress- und Suchleiste.** Sie können jetzt einfach die Größe der Adress- und Suchleiste mit einem einfachen Größenänderungsgriff zwischen ihnen ändern.
- **Textauswahlverbesserungen.** Sie können jetzt mehrere Textbereiche auswählen, indem Sie die Steuerungstaste (Befehl auf einem Macintosh) verwenden. Doppelklicken und Ziehen wählt jetzt "wortweise" aus. Dreifachklicken wählt einen ganzen Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plugin-Management.** Benutzer können jetzt einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden jetzt im nativen Vista-Design angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Taste.** Die neue Stern-Taste in der Adressleiste ermöglicht es Ihnen, schnell ein neues Lesezeichen mit einem Klick hinzuzufügen. Ein zweiter Klick ermöglicht es, das neue Lesezeichen zu archivieren und zu taggen.
- **Tags.** Sie können Lesezeichen jetzt Schlagwörter zuweisen, um sie einfach nach Themen zu sortieren.
- **Adressleiste und Autovervollständigung.** Geben Sie den Titel oder das Tag einer Seite in die Adressleiste ein, um schnell die gesuchte Seite in Ihrem Verlauf und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Anzeigen helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Intelligenter Lesezeichenordner.** Firefox's neuer intelligenter Lesezeichenordner bietet schnellen Zugriff auf kürzlich gespeicherte und getaggte Orte sowie häufig besuchte Seiten.
- **Lesezeichen- und Verlauf-Organizer.** Der neue, einheitliche Lesezeichen- und Verlauf-Organizer ermöglicht es Ihnen, einfach in Ihrem Verlauf und Ihren Lesezeichen zu suchen, mit mehreren Ansichten und intelligenten Ordnern für das Speichern Ihrer häufigen Suchanfragen.
- **Webbasierte Protokollhandler.** Webanwendungen, wie Ihr bevorzugter Webmail-Anbieter, können nun anstelle von Desktopanwendungen zum Verarbeiten von `mailto:`-Links von anderen Seiten verwendet werden. Ähnliche Unterstützung wird auch für andere Protokolle bereitgestellt. (Bitte beachten Sie, dass sich Webanwendungen bei Firefox registrieren müssen, damit dies funktioniert.)
- **Einfache Verwendung von Download-Aktionen.** Ein neues Anwendungseinstellungen-Fenster bietet eine verbesserte Benutzeroberfläche zur Konfiguration von Handlern für verschiedene Dateitypen und Protokollschemen.
- **Verbesserter Look and Feel.** Die Darstellung von Grafiken und Schriften wurde verbessert, um Webseiten auf Ihrem Bildschirm besser aussehen zu lassen, einschließlich schärferer Textdarstellung und besserer Unterstützung für Schriften mit Ligaturen und komplexen Schriften. Mac- und Linux (Gnome)-Benutzer werden außerdem feststellen, dass sich Firefox mehr denn je wie eine native Anwendung für ihre Plattform anfühlt, mit einem neuen, nativen Look and Feel.
- **Farbmanagementunterstützung.** Indem Sie die Einstellung `gfx.color_management.enabled` in `about:config` festlegen, können Sie Firefox anweisen, die eingebetteten Farbprofile in Bildern zu verwenden, um die Farben anzupassen, damit sie zu Ihrem Computerbildschirm passen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um auch dann genutzt zu werden, wenn Sie keine Internetverbindung haben.

### Sicherheit und Datenschutz

- **Ein-Klick-Site-Informationen.** Möchten Sie mehr über die besuchte Seite erfahren? Klicken Sie auf das Symbol der Seite in der Adressleiste, um zu sehen, wem sie gehört. Identifizierungsinformationen werden prominent angezeigt und sind leichter zu verstehen als je zuvor.
- **Malware-Schutz.** Firefox 3 warnt Sie, wenn Sie auf einer Website landen, die bekannt dafür ist, Viren, Spyware, Trojaner oder andere gefährliche Software (bekannt als Malware) zu installieren.
- **Verbesserter Schutz vor Web-Fälschungen.** Wenn Sie jetzt eine Seite besuchen, die verdächtigt wird, eine Fälschung zu sein, wird Ihnen eine spezielle Seite angezeigt, statt die Inhalte der Seite mit einer Warnung.
- **Leichter verständliche SSL-Fehler.** Die bei Feststellung eines ungültigen SSL-Zertifikats angezeigten Fehler sind jetzt verständlicher gestaltet, um das Verständnis des Problems zu erleichtern.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft jetzt automatisch Add-on- und Plugin-Versionen und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit bei Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Update-Mechanismus verwenden, nicht mehr zugelassen werden.
- **Antiviren-Integration.** Firefox 3 informiert jetzt Antivirensoftware, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung für Windows Vista Elternkontrollen.** Firefox 3 unterstützt die systemweiten Elternkontroll-Einstellungen von Vista zum Deaktivieren von Dateidownloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert Lesezeichen, Verlauf, Cookies und Einstellungen jetzt in einem transaktionssicheren Datenbankformat. Dies bedeutet, dass Ihre Daten auch bei einem Systemabsturz gegen Verluste geschützt sind.
- **Geschwindigkeit.** Firefox 3 hat durch die komplette Ersetzung des Teils der Software, der die Darstellung auf Ihrem Bildschirm verarbeitet, sowie durch die Verbesserung der Seitenlayout-Verarbeitung einen Leistungsschub erhalten.
- **Speicherauslastung reduziert.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicher-"Leck"-Fehlern und neuen Funktionen, um automatisch Speicherlecks zu finden und zu entsorgen.

## Siehe auch

{{Firefox_for_developers}}
