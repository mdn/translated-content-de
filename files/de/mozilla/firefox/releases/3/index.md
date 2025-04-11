---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{FirefoxSidebar}}

Wenn Sie ein Entwickler sind und alle neuen Funktionen in Firefox 3 verstehen wollen, sind Sie hier genau richtig. Dieser Artikel bietet eine Liste der neuen Artikel, die Funktionen abdecken, die in Firefox 3 hinzugefügt wurden. Während er möglicherweise nicht jede kleine Änderung abdeckt, hilft er Ihnen, die wesentlichen Verbesserungen kennenzulernen.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Aktualisieren von Webanwendungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen zu Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um die neuen Funktionen in Firefox 3 zu nutzen.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt die WHATWG-Online- und Offline-Ereignisse, die es Anwendungen und Erweiterungen ermöglichen, zu erkennen, ob eine aktive Internetverbindung besteht und wann die Verbindung auf- oder abgebaut wird.
- [Webbasierte Protokollhandler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können nun Webanwendungen als Protokollhandler mit der Methode `navigator.registerProtocolHandler()` registrieren.
- [Text zeichnen mithilfe eines Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können jetzt Text in einem Canvas mithilfe einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transform-Unterstützung für Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvases.
- [Verwendung von Microformats](/de/docs/Web/HTML/Guides/Microformats)
  - : Firefox bietet nun APIs zur Arbeit mit Microformats.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an den Ursprungknoten für eine Ziehoperation gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusmanagement in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox erlaubt es Webanwendungen nun, zu verlangen, dass Ressourcen zwischengespeichert werden, damit die Anwendung auch offline genutzt werden kann.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe von Verbesserungen in der CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox 3, einschließlich Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [JavaScript 1.8-Unterstützung](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/XML/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen erheblichen Teil der [EXSLT](/de/docs/Web/XML/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XML/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie weiteren Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG (APNG)-Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Bemerkenswerte Änderungen und Verbesserungen

- [Aktualisieren von Erweiterungen für Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den Schritten, die Sie unternehmen müssen, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schiebeskalen, Datums- und Zeitauswahl und Drehknöpfen.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung von benutzerdefinierten Abfrageprozessoren, um andere Datenquellen als RDF zu verwenden.
- [Sichern von Updates](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Upgrade-Pfad für Add-ons zu bieten, müssen Add-ons nun eine sichere Methode für das Abrufen von Updates bereitstellen, bevor sie installiert werden können. Add-ons, die auf [AMO](https://addons.mozilla.org/) gehostet werden, bieten dies automatisch. Jegliche Add-ons, die installiert sind und keine sichere Methode für Updates bieten, werden automatisch deaktiviert, wenn der Benutzer auf Firefox 3 aktualisiert. Firefox wird jedoch weiterhin versuchen, Updates für die Erweiterung über den unsicheren Pfad zu prüfen und zu installieren (die Installation schlägt fehl, wenn das Update ebenfalls keine sichere Methode bietet).
- [Places-Migrationsleitfaden](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung aktualisiert werden kann, um die Places-API zu verwenden.
- [Verbesserungen beim Download-Manager in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager von Firefox 3 bietet neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittsbeobachter.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [XBL-Bindungen einbetten](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können nun das `data:`-URL-Schema aus dem Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu haben.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zur Lokalisierung von Add-on-Metadaten. Dadurch sind die lokalisierten Details sofort verfügbar, sobald das Add-on heruntergeladen wurde, sowie wenn das Add-on deaktiviert ist.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge bietet, um Wörter in mehreren Lokalisierungen korrekt zu pluralisieren.
- [Änderungen am Theme in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Notizen und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionen

- [FUEL-Bibliothek](/de/docs/Toolkit_API/FUEL)
  - : FUEL soll es Erweiterungsentwicklern erleichtern, produktiv zu sein, indem es einige der XPCOM-Formalitäten minimiert und einige "moderne" JavaScript-Ideen hinzufügt.
- [Places](/de/docs/Places)
  - : Die APIs für Verlauf und Lesezeichen wurden vollständig durch die neue [Places](/de/docs/Places)-API ersetzt.
- [Idle-Dienst](/de/docs/nsIIdleService)
  - : Firefox 3 bietet die neue `nsIIdleService`-Schnittstelle, die es Erweiterungen ermöglicht festzustellen, wie lange der letzte Tastendruck oder die letzte Mausbewegung des Benutzers her ist.
- [ZIP-Schreiber](/de/docs/nsIZipWriter)
  - : Die neue `nsIZipWriter`-Schnittstelle ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollständiger Seitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert die Benutzererfahrung, indem es einen vollständigen Seitenzoom zusätzlich zum reinen Textzoom anbietet.
- [Interagieren mit dem XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann nun den Zyklus-Sammler nutzen, der hilft, sicherzustellen, dass nicht genutzter Speicher freigegeben wird, anstatt zu lecken.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet die neue `nsIThreadManager`-Schnittstelle, zusammen mit neuen Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet nun einen neuen gemeinsamen Code-Modul-Mechanismus, der es Ihnen ermöglicht, leicht Module in JavaScript zu erstellen, die von Erweiterungen und Anwendungen genutzt werden können, ähnlich wie gemeinsame Bibliotheken.
- [Die `nsIJSON`-Schnittstelle](/de/docs/nsIJSON)
  - : Firefox 3 bietet die neue `nsIJSON`-Schnittstelle, die eine leistungsstarke Codierung und Decodierung von {{Glossary("JSON", "JSON")}}-Strings bietet.
- Die `nsIParentalControlsService` Schnittstelle
  - : Firefox 3 unterstützt nun die Funktion der elterlichen Kontrolle von Microsoft Windows Vista und ermöglicht den Code, mit ihr zu interagieren.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 enthält einen neuen Dienst zum Abrufen und Setzen beliebiger, auf die Website bezogener Präferenzen, die Erweiterungen und der Kerncode nutzen können, um die Präferenzen ihrer Benutzer für einzelne Websites im Auge zu behalten.
- [Plugin-Überwachung](/de/docs/Monitoring_plugins)
  - : Eine neue Komponente des Plugin-Systems ist jetzt verfügbar, um zu messen, wie lange Plugins (z. B. Macromedia Flash) benötigen, um ihre Aufrufe auszuführen.

#### Behobene Fehler

- [Bemerkenswerte Fehler, die in Firefox 3 behoben wurden](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen über Fehler, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erscheint jetzt, um Ihnen die Möglichkeit zu geben, Passwörter nach einem erfolgreichen Login zu speichern.
- **Vereinfachte Installation von Add-ons.** Sie können jetzt Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank der Entfernung der Add-on-Downloadseiten-Whitelist.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Auffinden Ihrer heruntergeladenen Dateien.
- **Wiederaufnehmbare Downloads.** Sie können jetzt Downloads nach dem Neustart des Browsers oder dem Zurücksetzen Ihrer Netzwerkverbindung wieder aufnehmen.
- **Vollständiger Seitenzoom.** Über das Menü Ansicht und mit Tastenkombinationen können Sie jetzt den Inhalt ganzer Seiten vergrößern und verkleinern – dies skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrollen und Schnellmenü.** Tabs sind leichter auffindbar mit den neuen Tab-Scroll- und Tab-Schnellmenü-Funktionen.
- **Speichern, was Sie gerade tun.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes Verhalten der Öffnung in Tabs.** Wenn Sie einen Ordner von Lesezeichen in Tabs öffnen, werden die neuen Tabs nun hinzugefügt, anstatt die vorhandenen zu ersetzen.
- **Einfacher, Adress- und Suchleisten zu vergrößern.** Sie können die Adress- und Suchleisten nun einfach mit einem einfachen Ziehgriff zwischen ihnen anpassen.
- **Verbesserungen bei der Textauswahl.** Sie können jetzt mehrere Textbereiche mit der Steuerungstaste (Befehlstaste auf Mac) auswählen. Doppelklicken und Ziehen wählt jetzt im „Wort-für-Wort“-Modus aus. Dreifachklicken wählt einen ganzen Absatz aus.
- **Suchleiste.** Die Suchleiste öffnet jetzt mit der aktuellen Auswahl.
- **Plugin-Management.** Benutzer können jetzt einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden jetzt im nativen Thema von Vista dargestellt.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Schaltfläche.** Die neue Stern-Schaltfläche in der Adressleiste ermöglicht es Ihnen, mit einem einzigen Klick schnell ein neues Lesezeichen hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu speichern und zu taggen.
- **Tags.** Sie können jetzt Schlüsselwörter mit Ihren Lesezeichen assoziieren, um sie einfach nach Thema zu sortieren.
- **Adressleiste und Auto-Vervollständigung.** Geben Sie den Titel oder Tag einer Seite in der Adressleiste ein, um schnell die von Ihnen gesuchte Seite in Ihrem Verlauf und Ihren Lesezeichen zu finden. Favicons, Lesezeichen- und Tag-Indikatoren helfen Ihnen zu sehen, woher die Ergebnisse stammen.
- **Intelligenter Lesezeichen-Ordner.** Der neue intelligente Lesezeichen-Ordner von Firefox bietet schnellen Zugriff auf Ihre kürzlich markierten und getaggten Orte sowie auf häufig besuchte Seiten.
- **Lesezeichen- und Verlauf-Organisator.** Der neue einheitliche Lesezeichen- und Verlauf-Organisator ermöglicht es Ihnen, Ihren Verlauf und Ihre Lesezeichen mit mehreren Ansichten und intelligenten Ordnern zu durchsuchen und häufige Suchvorgänge zu speichern.
- **Webbasierte Protokollhandler.** Webanwendungen, wie Ihr bevorzugter Webmail-Provider, können nun anstelle von Desktop-Anwendungen verwendet werden, um `mailto:`-Links von anderen Seiten zu bearbeiten. Ähnliche Unterstützung wird auch für andere Protokolle angeboten. (Beachten Sie, dass Webanwendungen sich selbst bei Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfach zu verwendende Download-Aktionen.** Ein neuer Anwendungs-Einstellungen-Pane bietet eine verbesserte Benutzeroberfläche zum Konfigurieren von Handlern für verschiedene Dateitypen und Protokollschemata.
- **Verbesserte Optik und Bedienbarkeit.** Grafik- und Schriftbehandlung wurden verbessert, um Websites auf Ihrem Bildschirm besser aussehen zu lassen, einschließlich schärferer Textrendering und besserer Unterstützung für Schriften mit Ligaturen und komplexen Schriftarten. Darüber hinaus werden Mac- und Linux (GNOME)-Nutzer feststellen, dass sich Firefox mehr wie eine native Anwendung für ihre Plattform anfühlt als je zuvor, mit einem neuen, nativen, Look and Feel.
- **Unterstützung für Farbmanagement.** Durch Einstellen der `gfx.color_management.enabled`-Einstellung in `about:config` können Sie Firefox bitten, die eingebetteten Farbprofile in Bildern zu verwenden, um die Farben an Ihr Computerdarstellung anzupassen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um auch dann verwendet zu werden, wenn Sie keine Internetverbindung haben.

### Sicherheit und Datenschutz

- **Ein-Klick-Seiteninformationen.** Möchten Sie mehr über die Seite erfahren, die Sie besuchen? Klicken Sie auf das Symbol der Seite in der Adressleiste, um zu sehen, wem sie gehört. Inhaberinformationen werden deutlich und einfacher als je zuvor dargestellt.
- **Malware-Schutz.** Firefox 3 warnt Sie, wenn Sie eine Website erreichen, die bekanntermaßen Viren, Spyware, Trojaner oder andere gefährliche Software (bekannt als Malware) installiert.
- **Erweiterter Schutz vor Webseitenfälschungen.** Wenn Sie nun eine Seite besuchen, die verdächtigt wird, eine Fälschung zu sein, wird eine spezielle Seite angezeigt, anstatt des Inhalts der Seite mit einer Warnung.
- **Leichter verständliche SSL-Fehler.** Die bei ungültigen SSL-Zertifikaten angezeigten Fehler wurden klarer gemacht, um das Verständnis des Problems zu erleichtern.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft jetzt automatisch Versionen von Add-ons und Plugins und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit der Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Aktualisierungsmechanismus verwenden, nicht mehr erlaubt werden.
- **Integration von Antivirus.** Firefox 3 informiert nun Antivirus-Software, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung von Windows Vista elterliche Kontrolle.** Firefox 3 unterstützt die systemweite elterliche Kontrolle von Vista für das Deaktivieren von Dateidownloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert nun Lesezeichen, Verlauf, Cookies und Präferenzen in einem transaktionssicheren Datenbankformat. Das bedeutet, Ihre Daten sind gegen Verlust geschützt, selbst wenn Ihr System abstürzt.
- **Geschwindigkeit.** Firefox 3 hat einen Leistungsschub erhalten, indem der Teil der Software, der fürs Zeichnen auf Ihrem Bildschirm zuständig ist, vollständig ersetzt wurde, ebenso wie die Handhabung der Seitenlayoutarbeiten.
- **Verringerter Speicherverbrauch.** Firefox 3 ist speichereffizienter als je zuvor, mit über 300 behobenen Speicher-„Leck“-Bugs und neuen Funktionen, die helfen, automatisch nicht genutzte Speicherblöcke zu finden und freizugeben.

## Siehe auch

{{Firefox_for_developers}}
