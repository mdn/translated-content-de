---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Webentwicklerfunktionen

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus erhalten, auch wenn sie nicht in der Tab-Reihenfolge sind.
- Object sollte absenden
  - : Entsprechend der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

#### CSS

- CSS2-Verschachtelung von Anführungszeichen
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/Reference/Properties/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei abhängig von der Verschachtelungsebene das korrekte Anführungszeichen für offene und geschlossene Anführungszeichen verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/Reference/Selectors/:only-child)
  - : Dieser CSS3-Selektor ermöglicht das Auswählen eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Multikolumnen-Layouts](https://drafts.csswg.org/css-multicol/). Dies ermöglicht eine einfache Zeitung-ähnliche Präsentation in mehreren Spalten.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung unabhängig voneinander zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung versteckt werden, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Mehr [Mauszeigernamen](/de/docs/Web/CSS/Reference/Properties/cursor) werden jetzt unterstützt.
- URI-Werte bei CSS-`cursor`-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann jetzt ein beliebiges Bild als Mauszeiger verwendet werden, während ein bestimmter DOM-Knoten gehobert wird. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Konturen können jetzt abgerundete Ecken haben.
- CSS-`outline`-Eigenschaft
  - : [CSS-Konturen](/de/docs/Web/CSS/Reference/Properties/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rändern dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/CSS_lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, entspricht aber dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Extras
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um gängige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten mit document.open("text/plain") geschrieben wird, wird jetzt als Text behandelt, anstatt als HTML, sodass Zeilenumbrüche erhalten bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine Spezifikation des W3C, die es XML-Sprachen ermöglicht, deklarative Ereignis-Listener und Ereignis-Handler zu integrieren.
- Abbrechen des keydown-Events
  - : Das Abbrechen des keydown-Events bricht jetzt gemäß der DOM-Spezifikation ordnungsgemäß alle entsprechenden keyup/keypress-Events ab.
- Zugänglichkeits-APIs für DHTML
  - : Mozilla ermöglicht es nun DHTML-Autoren, benutzerdefinierten Elementen Rollen- und Zustands-Semantik hinzuzufügen und diese Informationen über MSAA und ATK offenzulegen.
- DHTML-Leistungsverbesserungen
  - : Es wurden zahlreiche Änderungen vorgenommen, um die DHTML-Geschwindigkeit und -Flüssigkeit erheblich zu verbessern.

#### Grafik

- SVG Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken zusammen mit einem DOM bereitstellt. Eine technische Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst der Funktionsumfang ein Teilset von SVG 1.1 Vollversion, ohne Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenoberfläche zur dynamischen Erstellung von Bitmap-Grafiken. Für eine weitere Einführung siehe [Zeichnen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial).

#### Verschiedenes

- Unterstützung für den HTTP/1.1 408-Antwortcode
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Code (Anfrage-Zeitüberschreitung) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut versucht.
- URIs immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Bilder und Links auf Seiten mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [W3C XML-Formulare](https://www.w3.org/MarkUp/Forms/) Sprache ermöglicht das Schreiben komplexer Formulare in XML und enthält Funktionen, die reguläre HTML-Formulare nicht haben, wie z.B. clientseitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Einreichung/-Abruf. Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](https://www-archive.mozilla.org/projects/xforms/).

### Neue Erweiterungsentwicklerfunktionen

- Verborgene Referrer-Spalte für den Verlauf
  - : Erweiterungen können jetzt auf die Referer-Informationen für im Verlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox Bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem spezifischen Server mithilfe von `nsISupportsPriority`. [Firefox Bug 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (zum Beispiel für die Bindung an XBL) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Service](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Es ist jetzt möglich, dass Erweiterungen die Proxykonfiguration einfach überschreiben, ohne benutzerseitige Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter`, und `nsIProtocolProxyCallback`. [Firefox Bug 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Das Laden von XUL-Overlays nach der Anzeige des Dokuments wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der native XML-Datentypen hinzufügt und Operationen für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Bug 246441](https://bugzil.la/246441)

- Durchscheinende Fenster (Windows/Linux)
  - : Unter Windows und Linux werden jetzt XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht es, dass alles, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurch sichtbar ist.

- Hinzufügen von Tokens zur User-Agent-Zeichenkette
  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zur User-Agent-Zeichenkette hinzufügen (mithilfe der Standardpräferenzen), ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Bug 274928](https://bugzil.la/274928)

- Toolkit Chrome Registry
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Text-Chrome-Registrierungsmanifeste zu verwenden und den Cache von chrome.rdf/overlayinfo nicht mehr beizubehalten. Siehe [Chrome Registrierung](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager
  - : Folgende neue Funktionen sind verfügbar:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Extensionsverzeichnisse zu haben.
    - Die Installation von Erweiterungen kann jetzt durch Ablegen einer XPI-Datei in das Profil- oder Anwendungs-Extensionsverzeichnisse erfolgen.
    - Das Deinstallieren einer Erweiterung beinhaltet jetzt das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Extensionsverzeichnisse.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Präferenzfenstern für Erweiterungen. Die neuen Präferenzfenster unterstützen Instant-Apply-Verhalten, das standardmäßig unter Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilenschalter
  - : Eine API wurde eingeführt, damit Erweiterungen komplexe Befehlszeilenflags einfach handhaben können. Diese API wird stabil und eingefroren für Version 1.1 sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namensräume mithilfe von XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Einstellungen

- Instant-Apply-Verhalten unter Linux und Mac
  - : Änderungen, die im Einstellungsfenster vorgenommen werden, gelten jetzt sofort, in Übereinstimmung mit dem typischen Verhalten in anderen Mac OS X und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Richtlinien für Benutzerschnittstellen.
- Durchsuchbarer Download-Aktionsmanager
  - : Es ist möglich, den Download-Aktionsmanager nach Dateierweiterung oder Beschreibung zu durchsuchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind nach Hostnamen in einer Baumstruktur statt einer flachen Liste organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren mehr Flexibilität bei der Bereitstellung von Firefox in einer Unternehmensumgebung.
- Unterstützung für das Profil-"Temp"-Verzeichnis im lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzeroberflächen-Code) auf einer lokalen Festplatte zu speichern, während der Rest der Profildaten auf einem Netzwerklaufwerk gespeichert wird. Dies erhöht die Leistung und reduziert den Netzwerkverkehr für Benutzer in einem Netzwerkumfeld.

#### Sonstiges

- "Sanitize"-Datenschutzfunktion
  - : Die "Sanitize"-Funktion bietet eine einfache Möglichkeit, den Browserverlauf, Cookies, den Cache, gespeicherte Formularinformationen und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über einen Menüpunkt aktiviert werden.
- Bildminiaturen als Tab-Icons
  - : Beim Anzeigen von Bildern zeigen Tab-Icons jetzt Miniaturen des angezeigten Bildes an.
- Schnelleres Zurück- (und Vorwärts-)navigieren
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Navigation in der Sitzungshistorie. Die Funktion ist standardmäßig deaktiviert, kann jedoch zu Testzwecken aktiviert werden, indem die Präferenz `browser.sessionhistory.max_viewers` auf eine ungleich null gesetzte Zahl gesetzt wird.
- Fehlverhalten bei anonymen FTP-Anmeldungen
  - : FTP-Benutzer werden nun aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-At-Regel zum Abgleich von Site-/Dokument-URL
  - : Die neue Regel `@-moz-document` gibt Benutzern die Möglichkeit, Seitenobjekte pro Site mit CSS abzugleichen. Dies ermöglicht es, sitespezifische Regeln in Benutzerstylesheets (userContent.css) aufzunehmen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
