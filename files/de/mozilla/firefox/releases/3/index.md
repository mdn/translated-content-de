---
title: Firefox 3 für Entwickler
slug: Mozilla/Firefox/Releases/3
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{FirefoxSidebar}}

Wenn Sie als Entwickler versuchen, alle neuen Features in Firefox 3 zu verstehen, ist dies der perfekte Ort, um zu beginnen. Dieser Artikel bietet eine Liste der neuen Artikel, die sich mit den in Firefox 3 hinzugefügten Funktionen befassen. Obwohl er möglicherweise nicht jede kleine Änderung abdeckt, wird er Ihnen helfen, die wichtigsten Verbesserungen kennenzulernen.

## Neue Entwicklerfunktionen in Firefox 3

### Für Website- und Anwendungsentwickler

- [Webanwendungen für Firefox 3 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3/Updating_web_applications)
  - : Bietet Informationen zu Änderungen, die Sie an Ihrer Website oder Webanwendung vornehmen müssen, um neue Funktionen in Firefox 3 zu nutzen.
- [Online- und Offline-Ereignisse](/de/docs/Web/API/Navigator/onLine)
  - : Firefox 3 unterstützt die WHATWG-Online- und Offline-Ereignisse, mit denen Anwendungen und Erweiterungen erkennen können, ob eine aktive Internetverbindung besteht und wann die Verbindung hergestellt oder getrennt wird.
- [Webbasierte Protokoll-Handler](/de/docs/Web/API/Navigator/registerProtocolHandler)
  - : Sie können jetzt Webanwendungen als Protokoll-Handler mit der Methode `navigator.registerProtocolHandler()` registrieren.
- [Text mit einem Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
  - : Sie können jetzt Text in einem Canvas mit einer nicht standardisierten API zeichnen, die von Firefox 3 unterstützt wird.
- [Transformation bei Canvas](/de/docs/Web/API/Canvas_API/Tutorial/Transformations#transforms)
  - : Firefox unterstützt jetzt die Methoden `transform()` und `setTransform()` auf Canvas.
- [Verwendung von Mikroformaten](/de/docs/Web/HTML/microformats)
  - : Firefox bietet jetzt APIs zur Arbeit mit Mikroformaten.
- [Drag-and-Drop-Ereignisse](/de/docs/Web/API/HTML_Drag_and_Drop_API)
  - : Firefox 3 unterstützt neue Ereignisse, die an das Ursprungsnode für einen Ziehvorgang gesendet werden, wenn das Ziehen beginnt und endet.
- [Fokusverwaltung in HTML](/de/docs/Web/API/Document/hasFocus)
  - : Die neuen HTML 5-Attribute `activeElement` und `hasFocus` werden unterstützt.
- Offline-Ressourcen in Firefox
  - : Firefox ermöglicht es jetzt, dass Webanwendungen Ressourcen zwischenspeichern, damit die Anwendung offline genutzt werden kann.
- [CSS-Verbesserungen in Firefox 3](/de/docs/CSS_improvements_in_Firefox_3)
  - : Firefox 3 verfügt über zahlreiche Verbesserungen in der CSS-Unterstützung.
- [DOM-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/DOM_improvements)
  - : Firefox 3 bietet eine Reihe neuer Funktionen in der DOM-Implementierung von Firefox, einschließlich Unterstützung für mehrere Internet Explorer-Erweiterungen des DOM.
- [Unterstützung von JavaScript 1.8](/de/docs/New_in_JavaScript_1.8)
  - : Firefox 3 bietet JavaScript 1.8.
- [EXSLT-Unterstützung](/de/docs/Web/XML/EXSLT)
  - : Firefox 3 bietet Unterstützung für einen beträchtlichen Teil der [EXSLT](/de/docs/Web/XML/EXSLT)-Erweiterungen zu [XSLT](/de/docs/Web/XML/XSLT).
- [SVG-Verbesserungen in Firefox 3](/de/docs/Mozilla/Firefox/Releases/3/SVG_improvements)
  - : Die SVG-Unterstützung in Firefox 3 wurde erheblich verbessert, mit Unterstützung für über zwei Dutzend neue Filter, mehrere neue Elemente und Attribute sowie weitere Verbesserungen.
- [Animierte PNG-Grafiken](/de/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics)
  - : Firefox 3 unterstützt das animierte PNG (APNG)-Bildformat.

### Für XUL- und Erweiterungsentwickler

#### Bemerkenswerte Änderungen und Verbesserungen

- [Erweiterungen für Firefox 3 aktualisieren](/de/docs/Mozilla/Firefox/Releases/3/Updating_extensions)
  - : Bietet einen Leitfaden zu den Dingen, die Sie tun müssen, um Ihre Erweiterung für die Arbeit mit Firefox 3 zu aktualisieren.
- [XUL-Verbesserungen in Firefox 3](/de/docs/XUL_improvements_in_Firefox_3)
  - : Firefox 3 bietet eine Reihe neuer XUL-Elemente, einschließlich neuer Schieberegler, Datums- und Uhrzeitwähler sowie Drehknöpfe.
- [Vorlagen in Firefox 3](/de/docs/Templates_in_Firefox_3)
  - : Vorlagen wurden in Firefox 3 erheblich verbessert. Die wichtigste Verbesserung ermöglicht die Verwendung benutzerdefinierter Abfrageprozessoren, um andere Datenquellen als RDF zu verwenden.
- [Updates sichern](/de/docs/Extension_Versioning,_Update_and_Compatibility#securing_updates)
  - : Um einen sichereren Aktualisierungspfad für Benutzer bereitzustellen, müssen Erweiterungen jetzt eine sichere Methode zum Abrufen von Updates bereitstellen, bevor sie installiert werden können. Erweiterungen, die bei [AMO](https://addons.mozilla.org/) gehostet werden, stellen dies automatisch bereit. Alle installierten Erweiterungen, die keine sichere Aktualisierungsmethode bieten, werden automatisch deaktiviert, wenn der Benutzer ein Upgrade auf Firefox 3 durchführt. Firefox wird jedoch weiterhin nach Updates für die Erweiterung über den unsicheren Pfad suchen und versuchen, angebotene Updates zu installieren (die Installation schlägt fehl, wenn die Aktualisierung ebenfalls keine sichere Methode bietet).
- [Leitfaden zur Places-Migration](/de/docs/Places_Developer_Guide)
  - : Ein Artikel darüber, wie eine bestehende Erweiterung aktualisiert werden kann, um die Places-API zu verwenden.
- [Verbesserungen des Download-Managers in Firefox 3](/de/docs/Download_Manager_improvements_in_Firefox_3)
  - : Der Download-Manager in Firefox 3 bietet neue und verbesserte APIs, einschließlich Unterstützung für mehrere Fortschrittslistener.
- Verwendung von nsILoginManager
  - : Der Passwort-Manager wurde durch den neuen Login-Manager ersetzt.
- [Einbetten von XBL-Bindungen](/de/docs/XBL/XBL_1.0_Reference/Elements#binding)
  - : Sie können jetzt das `data:`-URL-Schema aus Chrome-Code verwenden, um XBL-Bindungen direkt einzubetten, anstatt sie in separaten XML-Dateien zu speichern.
- [Lokalisierung von Erweiterungsbeschreibungen](/de/docs/Localizing_extension_descriptions)
  - : Firefox 3 bietet eine neue Methode zum Lokalisieren von Add-on-Metadaten. Dies ermöglicht, dass die lokalisierten Details sofort verfügbar sind, sobald das Add-on heruntergeladen wurde, sowie wenn das Add-on deaktiviert ist.
- [Lokalisierung und Plurale](/de/docs/Localization_and_Plurals)
  - : Firefox 3 fügt das neue PluralForm-Modul hinzu, das Werkzeuge zur Unterstützung der korrekten Pluralisierung von Wörtern in mehreren Lokalisationen bietet.
- [Themenänderungen in Firefox 3](/de/docs/Theme_changes_in_Firefox_3)
  - : Hinweise und Informationen für Personen, die Themes für Firefox 3 erstellen möchten.

#### Neue Komponenten und Funktionen

- [FUEL Library](/de/docs/Toolkit_API/FUEL)
  - : FUEL hat das Ziel, die Produktivität von Erweiterungsentwicklern zu steigern, indem einige der Formalitäten von XPCOM minimiert und einige "moderne" JavaScript-Ideen hinzugefügt werden.
- [Places](/de/docs/Places)
  - : Die APIs für Verlauf und Lesezeichen wurden vollständig durch die neue [Places](/de/docs/Places)-API ersetzt.
- [Idle-Dienst](/de/docs/nsIIdleService)
  - : Firefox 3 bietet das neue `nsIIdleService`-Interface, das Erweiterungen ermöglicht festzustellen, wie lange es her ist, seit der Benutzer zuletzt eine Taste gedrückt oder die Maus bewegt hat.
- [ZIP Writer](/de/docs/nsIZipWriter)
  - : Das neue `nsIZipWriter`-Interface ermöglicht es Erweiterungen, ZIP-Archive zu erstellen.
- [Vollständiger Seitenzoom](/de/docs/Mozilla/Firefox/Releases/3/Full_page_zoom)
  - : Firefox 3 verbessert die Benutzererfahrung, indem vollständiger Seitenzoom zusätzlich zum Text-Only-Zoom angeboten wird.
- [Schnittstelle zur XPCOM-Zyklus-Sammler](/de/docs/Interfacing_with_the_XPCOM_cycle_collector)
  - : XPCOM-Code kann jetzt den Zyklus-Sammler nutzen, der hilft sicherzustellen, dass ungenutzter Speicher freigegeben wird und nicht verloren geht.
- [Der Thread-Manager](/de/docs/The_Thread_Manager)
  - : Firefox 3 bietet das neue `nsIThreadManager`-Interface sowie neue Schnittstellen für Threads und Thread-Ereignisse, die eine bequeme Möglichkeit bieten, Threads in Ihrem Code zu erstellen und zu verwalten.
- [JavaScript-Module](/de/docs/Web/JavaScript/Guide/Modules)
  - : Firefox 3 bietet jetzt einen neuen Mechanismus für gemeinsame Code-Module, der es Ihnen ermöglicht, Module in JavaScript zu erstellen, die von Erweiterungen und Anwendungen wie Bibliotheken geladen werden können.
- [Das `nsIJSON`-Interface](/de/docs/nsIJSON)
  - : Firefox 3 bietet das neue `nsIJSON`-Interface, das eine leistungsstarke Kodierung und Dekodierung von {{Glossary("JSON", "JSON")}}-Zeichenfolgen bietet.
- Das `nsIParentalControlsService`-Interface
  - : Firefox 3 unterstützt die elterlichen Kontrolle von Microsoft Windows Vista und ermöglicht es, dass Code mit dieser Funktion interagiert.
- [Verwendung von Inhaltspräferenzen](/de/docs/Using_content_preferences)
  - : Firefox 3 beinhaltet einen neuen Dienst zum Abrufen und Einstellen beliebiger seitenbezogener Präferenzen, die Erweiterungen sowie der Kerncode verwenden können, um die Präferenzen ihrer Benutzer für einzelne Seiten zu verfolgen.
- [Plug-in-Monitoring](/de/docs/Monitoring_plugins)
  - : Ein neuer Bestandteil des Plug-in-Systems ist jetzt verfügbar, um zu messen, wie lange Plug-ins (z.B. Macromedia Flash) benötigen, um ihre Aufrufe auszuführen.

#### Behobene Fehler

- [Bemerkenswerte Fehler, die in Firefox 3 behoben wurden](/de/docs/Mozilla/Firefox/Releases/3/Notable_bugs_fixed)
  - : Dieser Artikel bietet Informationen über Fehler, die in Firefox 3 behoben wurden.

## Neue Funktionen für Endbenutzer

### Benutzererfahrung

- **Einfachere Passwortverwaltung.** Eine Informationsleiste oben im Browserfenster erscheint jetzt, um Ihnen die Möglichkeit zu bieten, Passwörter nach erfolgreichem Login zu speichern.
- **Vereinfachte Installation von Add-ons.** Sie können jetzt Erweiterungen von Drittanbieter-Downloadseiten mit weniger Klicks installieren, dank der Entfernung der Whitelist für Add-on-Downloadseiten.
- **Neuer Download-Manager.** Der Download-Manager erleichtert das Auffinden Ihrer heruntergeladenen Dateien.
- **Wiederaufnehmbare Downloads.** Sie können jetzt Downloads nach dem Neustart des Browsers oder dem Zurücksetzen Ihrer Netzwerkverbindung fortsetzen.
- **Vollständiger Seitenzoom.** Vom Menü "Ansicht" aus und mit Tastenkombinationen können Sie jetzt den Inhalt ganzer Seiten ein- und auszoomen - das skaliert nicht nur den Text, sondern auch das Layout und die Bilder.
- **Tab-Scrolling und Schnellmenü.** Tabs sind mit den neuen Tab-Scrolling- und Tab-Schnellmenüfunktionen einfacher zu finden.
- **Speichern, was Sie gerade gemacht haben.** Firefox 3 fragt Sie, ob Sie Ihre aktuellen Tabs speichern möchten, wenn Sie Firefox beenden.
- **Optimiertes Öffnen in Tabs-Verhalten.** Das Öffnen eines Lesezeichenordners in Tabs fügt jetzt die neuen Tabs hinzu, anstatt die vorhandenen zu ersetzen.
- **Einfachere Größenanpassung von Adress- und Suchleiste.** Sie können jetzt die Adress- und Suchleiste einfach mit einem einfachen Größenanpassungsgriff zwischen ihnen anpassen.
- **Verbesserungen der Textauswahl.** Sie können jetzt mehrere Textbereiche mit der Steuerungstaste (Cmd auf dem Macintosh) auswählen. Doppelklicken und Ziehen wählt jetzt im "wortweise" Modus aus. Dreifachklick wählt einen ganzen Absatz.
- **Finden-Werkzeugleiste.** Die Finden-Werkzeugleiste öffnet sich jetzt mit der aktuellen Auswahl.
- **Plugin-Verwaltung.** Benutzer können jetzt einzelne Plugins im Add-on-Manager deaktivieren.
- **Integration mit Windows Vista.** Die Menüs von Firefox werden jetzt mit dem nativen Vista-Thema angezeigt.
- **Integration mit Mac OS X.** Firefox unterstützt jetzt [Growl](https://growl.github.io/growl/) für Benachrichtigungen über abgeschlossene Downloads und verfügbare Updates.
- **Stern-Taste.** Die neue Stern-Taste in der Adressleiste ermöglicht es Ihnen, ein neues Lesezeichen mit einem Klick schnell hinzuzufügen. Ein zweiter Klick ermöglicht es Ihnen, Ihr neues Lesezeichen zu speichern und zu markieren.
- **Tags.** Sie können jetzt Schlüsselwörter mit Ihren Lesezeichen verknüpfen, um sie einfach nach Thema zu sortieren.
- **Adressleiste und Auto-Vervollständigung.** Geben Sie den Titel oder das Tag einer Seite in die Adressleiste ein, um schnell die von Ihnen gesuchte Site in Ihrem Verlauf und Ihren Lesezeichen zu finden. Favicons, Lesezeichen und Tag-Indikatoren helfen Ihnen, die Quelle der Ergebnisse zu sehen.
- **Intelligente Lesezeichen-Ordner.** Der neue intelligente Lesezeichen-Ordner von Firefox bietet schnellen Zugriff auf Ihre kürzlich markierten und getaggten Orte sowie auf häufig besuchte Seiten.
- **Organisator für Lesezeichen und Verlauf.** Der neue einheitliche Organisator für Lesezeichen und Verlauf ermöglicht es Ihnen, Ihren Verlauf und Ihre Lesezeichen mit mehreren Ansichten und intelligenten Ordnern zur Speicherung Ihrer häufigen Suchvorgänge einfach zu durchsuchen.
- **Webbasierte Protokoll-Handler.** Webanwendungen, wie Ihr bevorzugter Webmail-Anbieter, können jetzt anstelle von Desktop-Anwendungen zur Handhabung von `mailto:`-Links von anderen Sites verwendet werden. Ähnliche Unterstützung wird auch für andere Protokolle bereitgestellt. (Beach-ten Sie, dass Webanwendungen sich bei Firefox registrieren müssen, bevor dies funktioniert.)
- **Einfache Nutzung von Download-Aktionen.** Ein neues Anwendungspräferenzfenster bietet eine verbesserte Benutzeroberfläche zur Konfiguration von Handhabern für verschiedene Dateitypen und Protokollschemata.
- **Verbessertes Aussehen und Verhalten.** Die Grafik- und Schriftbehandlung wurde verbessert, um Websites besser auf Ihrem Bildschirm darzustellen, einschließlich schärferer Textrendering und besserer Unterstützung für Schriften mit Ligaturen und komplexen Skripten. Außerdem werden Mac- und Linux (GNOME)-Benutzer feststellen, dass sich Firefox mehr denn je als native Anwendung für ihre Plattform anfühlt, mit einem neuen, nativen, Look and Feel.
- **Farbverwaltungsunterstützung.** Durch das Setzen der Präferenz `gfx.color_management.enabled` in `about:config` können Sie Firefox anweisen, die in Bildern eingebetteten Farbprofile zu verwenden, um die Farben an die Anzeige Ihres Computers anzupassen.
- **Offline-Unterstützung.** Webanwendungen können neue Funktionen nutzen, um auch dann verwendet werden zu können, wenn Sie keine Internetverbindung haben.

### Sicherheit und Privatsphäre

- **Ein-Klick-Informationen zur Website.** Möchten Sie mehr über die von Ihnen besuchte Website wissen? Klicken Sie auf das Symbol der Website in der Adressleiste, um zu sehen, wem sie gehört. Identifikationsinformationen werden deutlich angezeigt und sind einfacher als je zuvor zu verstehen.
- **Malwareschutz.** Firefox 3 warnt Sie, wenn Sie auf einer Website ankommen, die bekannt dafür ist, Viren, Spyware, Trojaner oder andere gefährliche Software zu installieren (bekannt als Malware).
- **Verstärkter Schutz vor Webseitenfälschungen.** Jetzt wird Ihnen eine spezielle Seite angezeigt, anstatt den Inhalt der Seite mit einer Warnung, wenn Sie eine Seite besuchen, die verdächtigt wird, gefälscht zu sein.
- **Einfacher verständliche SSL-Fehler.** Die Fehler, die angezeigt werden, wenn ein ungültiges SSL-Zertifikat gefunden wird, wurden vereinfacht, um leichter verständlich zu machen, was das Problem ist.
- **Schutz vor veralteten Add-ons.** Firefox 3 überprüft jetzt automatisch Add-on- und Plugin-Versionen und deaktiviert ältere, unsichere Versionen.
- **Sichere Add-on-Updates.** Die Sicherheit von Add-on-Updates wurde verbessert, indem Add-ons, die einen unsicheren Aktualisierungsmechanismus verwenden, nicht mehr zugelassen werden.
- **Antiviren-Integration.** Firefox 3 informiert jetzt Antivirensoftware, wenn ausführbare Dateien heruntergeladen werden.
- **Unterstützung elterlicher Kontrollen in Windows Vista.** Firefox 3 unterstützt die systemweiten elterlichen Kontrolleinstellungen von Vista für das Deaktivieren von Datei-Downloads.

### Leistung

- **Zuverlässigkeit.** Firefox 3 speichert jetzt Lesezeichen, Verlauf, Cookies und Präferenzen in einem transaktionssicheren Datenbankformat. Das bedeutet, dass Ihre Daten vor Verlust geschützt sind, selbst wenn Ihr System abstürzt.
- **Geschwindigkeit.** Firefox 3 hat einen Leistungsschub erhalten, indem der Teil der Software, der für die Anzeige auf Ihrem Bildschirm verantwortlich ist, vollständig ersetzt wurde, sowie die Bearbeitung der Seitenlayout-Arbeit.
- **Reduzierter Speicherverbrauch.** Firefox 3 ist speichereffizienter denn je, mit über 300 behobenen Speicher-"Leak"-Bugs und neuen Funktionen, die helfen, automatisch geleakten Speicher zu lokalisieren und zu entsorgen.

## Siehe auch

{{Firefox_for_developers}}
