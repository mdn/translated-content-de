---
title: Neuigkeiten in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedge/releases/](https://www.squarefree.com/burningedge/releases/) (danke an Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können nun fokussiert werden, obwohl sie nicht in der Tab-Reihenfolge sind.
- Object sollte übermitteln
  - : Gemäß der HTML4-Spezifikation können `<object>`-Elemente nun als Teil eines Formulars übermittelt werden.

#### CSS

- CSS2 Anführungszeichen-Nestung
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei das korrekte Anführungszeichen (abhängig von der Verschachtelungsebene) für open-quote und close-quote verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/:only-child)
  - : Dieser CSS3-Selektor ermöglicht das Auswählen eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspalten-Layouts](https://drafts.csswg.org/css-multicol/) Entwurfs. Dies ermöglicht es, einfach eine zeitungähnliche Mehrspalten-Darstellung zu erstellen.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung weitgehend unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen sein, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Weitere [Mauszeiger-Namen](/de/docs/Web/CSS/cursor) werden nun unterstützt.
- URI-Werte auf CSS `cursor`-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann nun ein beliebiges Bild als Mauszeiger verwendet werden, während ein bestimmter DOM-Knoten schwebend ist. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung des Features.
- `-moz-outline-radius`
  - : CSS-Konturen können nun abgerundete Ecken haben.
- CSS `outline`-Eigenschaft
  - : [CSS-Konturen](/de/docs/Web/CSS/outline) können nun verwendet werden. Diese unterscheiden sich von Rändern, da sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/CSS_lists) sind nun vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, jedoch dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften und so weiter über Stylesheets.

#### JavaScript und DOM

- Array-Extras
  - : Neue Methoden wurden zum Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit document.open("text/plain") erstellt wurden, wird nun als Text behandelt und nicht als HTML, sodass Zeilenumbrüche intakt bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine W3C-Spezifikation, um XML-Sprachen die Möglichkeit zu geben, deklarative Event-Listener und Event-Handler zu integrieren.
- Abbrechen von keydown
  - : Das Abbrechen des keydown-Ereignisses storniert nun ordnungsgemäß alle entsprechenden keyup/keypress-Ereignisse gemäß der DOM-Spezifikation.
- Zugänglichkeits-APIs für DHTML
  - : Mozilla erlaubt nun DHTML-Autoren, Rollen- und Statussemantiken zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK offenzulegen.
- DHTML-Leistungsverbesserungen
  - : Es wurden eine Reihe von Änderungen vorgenommen, um die Geschwindigkeit und Sanftheit von DHTML erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken zusammen mit einem DOM bereitstellt. Eine Technologie-Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit fehlt eine Funktionalität, darunter Filter, deklarative Animation und SVG-definierte Schriften.
- `<canvas>`-Unterstützung
  - : `<canvas>` ist eine skriptbare Zeichenfläche zur dynamischen Erstellung von Bitmap-Grafiken. Für eine weitere Einführung siehe [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial).

#### Verschiedenes

- Unterstützung für HTTP/1.1 408-antwortcode
  - : Eine persistente Verbindung wird nun korrekt geschlossen, wenn ein 408-antwortcode (Anfragezeitüberschreitung) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut gesendet.
- URIs immer als UTF8 gesendet
  - : URIs werden nun immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verknüpfenden Seite. Dies behebt Bilder und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML-Formularsprache des W3C](https://www.w3.org/MarkUp/Forms/) ermöglicht die Erstellung komplexer Formulare in XML und umfasst Funktionen, die reguläre HTML-Formulare nicht haben, wie z.B. Client-seitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Übermittlung/-Abruf. Die Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms-Projektseite](https://www-archive.mozilla.org/projects/xforms/).

### Neue Funktionen für Erweiterungsentwickler

- Versteckte Referrer-Spalte in der Chronik
  - : Erweiterungen können nun auf die Referrer-Informationen für Seiten in der Browser-Chronik zugreifen. Diese Funktion kann verwendet werden, um alternative Chronikansichten und andere nützliche Funktionen bereitzustellen. [Firefox Fehler 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server mit `nsISupportsPriority`. [Firefox Fehler 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets
  - : Erweiterungen können nun Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (z.B. für XBL-Bindungszuordnung) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Es ist nun möglich, dass Erweiterungen die Proxy-Konfiguration leicht überschreiben können, ohne die für den Benutzer sichtbaren Einstellungen zu beeinträchtigen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Fehler 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Das Laden von XUL-Overlays nach der Anzeige des Dokuments wird nun unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Fehler 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für häufige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Fehler 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)
  - : Unter Windows und Linux werden nun XUL-Fenster mit transparentem Hintergrund unterstützt. Dadurch kann das, was unter dem Fenster ist, durch den Fensterhintergrund durchscheinen.

- Hinzufügen von Tokens zum User-Agent-String
  - : Es ist nun möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zum User-Agent-String hinzufügen können (unter Verwendung von Standardeinstellungen) ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Fehler 274928](https://bugzil.la/274928)

- Toolkit Chrome Registry
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifeste zu verwenden und den Chrome.rdf/overlayinfo-Cache nicht mehr beizubehalten. Siehe [Chrome-Registrierung](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager
  - : Folgende neue Funktionen:
    - Es ist nun möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Die Installation von Erweiterungen kann nun durch das Ablegen eines XPI in das Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Das Deinstallieren einer Erweiterung beinhaltet nun das Löschen ihres Ordners aus dem Profil- oder Anwendungserweiterungsverzeichnis.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Einstellungsfenstern für Erweiterungen. Die neuen Einstellungsfenster unterstützen das sofortige Anwendungs-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilen-Schalter
  - : Eine API wurde eingeführt, damit Erweiterungen komplexe Befehlszeilen-Flags einfach handhaben können. Diese API wird stabil und eingefroren für 1.1 sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das Extensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namensräume über XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Einstellungen

- Sofortige Anwendung auf Linux und Mac
  - : Änderungen, die im Einstellungsfenster vorgenommen werden, werden nun sofort angewendet, im Einklang mit dem typischen Verhalten in anderen Mac OS X und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Human Interface Guidelines.
- Durchsuchbares Download-Aktions-Manager
  - : Es ist möglich, den Download-Aktions-Manager nach Dateierweiterung oder Beschreibung zu durchsuchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domain und Cookie-Name durchsucht werden und sind anstelle einer flachen Liste nach Hostname in einem Baumformat organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, mehr Flexibilität.
- Unterstützung für Profil-"temp"-Verzeichnis auf dem lokalen Dateisystem
  - : Es ist nun möglich, den Netzcache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzeroberflächen-Code) auf einem lokalen Datenträger zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk verbleibt. Dies wird die Leistung erhöhen und den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung verringern.

#### Andere

- "Säubern"-Datenschutzfunktion
  - : Die "Säubern"-Funktion bietet eine einfache Möglichkeit, um Browser-Chronik, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder mit einem Tastaturkürzel oder über ein Menüelement aktiviert werden.
- Bildminiaturen als Tab-Symbole
  - : Beim Anzeigen von Bildern zeigen die Tab-Symbole nun Miniaturen des angezeigten Bildes.
- Schnelles Zurück (und Vorwärts)
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Navigation in der Sitzungshistorie. Die Funktion ist standardmäßig deaktiviert, kann jedoch zu Testzwecken aktiviert werden, indem die `browser.sessionhistory.max_viewers`-Präferenz auf eine von Null verschiedene Zahl gesetzt wird.
- Anonymes FTP-Login-Fehlerverhalten
  - : FTP-Benutzer werden nun aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS @-Regel für Matching auf Standort-/Dokument-URL
  - : Die neue `@-moz-document`-Regel gibt Benutzern die Möglichkeit, Seitenobjekte pro Standort mit CSS abzugleichen. Dies ermöglicht es, standortspezifische Regeln in Benutzerstyle-Sheets (userContent.css) einzuschließen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
