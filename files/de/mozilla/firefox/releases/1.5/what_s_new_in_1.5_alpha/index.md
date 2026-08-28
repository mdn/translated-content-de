---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: d19dec85109590176f946fcceef48c787d578b1e
---

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

## Neue Webentwickler-Funktionen

### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus erhalten, obwohl sie nicht in der Tab-Reihenfolge sind.
- `Object` sollte senden
  - : In Übereinstimmung mit der HTML4-Spezifikation können `<object>`-Elemente nun als Teil eines Formulars gesendet werden.

### CSS

- Verschachtelung von CSS2-Zitaten
  - : Ab dieser Version wird die CSS2-Eigenschaft [`quotes`](/de/docs/Web/CSS/Reference/Properties/quotes) vollständig unterstützt, wobei das korrekte Anführungszeichen (je nach Verschachtelungsgrad) für open-quote und close-quote verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/Reference/Selectors/:only-child)
  - : Mit diesem CSS3-Selektor kann ein Element ausgewählt werden, das im DOM keine anderen Elemente als Geschwister hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Multicolumn-Layout](https://drafts.csswg.org/css-multicol/)-Entwurfs. Dies ermöglicht eine einfache Erstellung von Layouts im Zeitungsstil mit mehreren Spalten.
- CSS3 `overflow-x`- und `overflow-y`-Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung einigermaßen unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Es werden jetzt mehr [Mauszeiger-Namen](/de/docs/Web/CSS/Reference/Properties/cursor) unterstützt.
- URI-Werte für CSS `cursor`-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann man nun ein beliebiges Bild als Mauszeiger verwenden, während ein bestimmter DOM-Knoten fokussiert ist. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Ränder können jetzt abgerundete Ecken haben.
- CSS `outline`-Eigenschaft
  - : [CSS-Ränder](/de/docs/Web/CSS/Reference/Properties/outline) können jetzt verwendet werden. Diese unterscheiden sich von `borders` dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generiertem Inhalt
  - : [CSS2 Zähler](/de/docs/Web/CSS/Guides/Lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem bevorstehenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

### JavaScript und DOM

- Array-Extras
  - : Dem Array-Objekt wurden neue Methoden hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Texte, die in neuen Dokumenten geschrieben werden, die mit `document.open("text/plain")` erstellt wurden, werden nun als Text anstatt als HTML behandelt, sodass Zeilenumbrüche intakt bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit bietet, deklarative Ereignislistener und Ereignis-Handler zu integrieren.
- Abbrechen von `keydown`
  - : Das Abbrechen des `keydown`-Ereignisses führt nun gemäß der DOM-Spezifikation dazu, dass alle entsprechenden `keyup`/`keypress`-Ereignisse ordnungsgemäß abgebrochen werden.
- Barrierefreiheits-APIs für DHTML
  - : Mozilla ermöglicht es nun DHTML-Autoren, Rollenzuordnungen und Zustandssemantik zu benutzerdefinierten Elementen hinzuzufügen, und stellt diese Informationen über MSAA und ATK bereit.
- DHTML-Leistungsverbesserungen
  - : Eine Reihe von Änderungen wurde vorgenommen, um die Geschwindigkeit und Geschmeidigkeit von DHTML erheblich zu verbessern.

### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken sowie ein DOM bereitstellt. Eine Technologievorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit fehlt ein Teil der SVG 1.1-Vollversion, darunter Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zur dynamischen Erstellung von Bitmap-Grafiken. Weitere Informationen finden Sie in [Zeichnen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial).

### Verschiedenes

- Unterstützung des HTTP/1.1 408-Antwortcodes
  - : Eine beständige Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Request timeout) empfangen wird. Die Anfrage wird in einer neuen Verbindung wiederholt.
- URIs immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Probleme mit Bildern und Links auf Websites mit Nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die Sprache [XML Forms des W3C](https://www.w3.org/MarkUp/Forms/) ermöglicht das Schreiben komplexer Formulare in XML und enthält Funktionen, die reguläre HTML-Formulare nicht haben, wie clientseitige Validierung gegen [XML Schema](https://www.w3.org/XML/Schema) und XML-Übertragung/-Abruf. Die Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](https://www-archive.mozilla.org/projects/xforms/).

## Neue Erweiterungsentwickler-Funktionen

- Versteckte Referrer-Spalte für den Verlauf
  - : Erweiterungen können jetzt auf die Referrer-Informationen für im Browserverlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server unter Verwendung von `nsISupportsPriority`. [Firefox bug 278531](https://bugzil.la/278531)

- API zum Verwalten von Benutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (zum Beispiel für die Anbindung von XBL) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Proxy-Konfiguration
  - : Es ist nun möglich, dass Erweiterungen die Proxy-Konfiguration leicht überschreiben können, ohne die für den Benutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter`, und `nsIProtocolProxyCallback`. [Firefox bug 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Das Laden von XUL-Overlays nach der Anzeige des Dokuments wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox bug 246441](https://bugzil.la/246441)

- Durchscheinende Fenster (Windows/Linux)
  - : Unter Windows und Linux werden nun XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht es, dass alles, was unterhalb des Fensters liegt, durch den Fensterhintergrund hindurch scheint.

- Hinzufügen von Tokens zur User-Agent-Zeichenkette
  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zur User-Agent-Zeichenkette hinzufügen können (mithilfe von Standardeinstellungen), ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox bug 274928](https://bugzil.la/274928)

- Toolkit Chrome-Registrierung
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Text-Chrome-Registrierungsmanifeste zu verwenden, und verzichtet nun auf den chrome.rdf/overlayinfo-Cache. Siehe [Chrome-Registrierung](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration).

- Erweiterungs-Manager
  - : Folgende neue Funktionen sind enthalten:
    - Es ist nun möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Installationen von Erweiterungen können nun durch das Ablegen einer XPI-Datei im Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Die Deinstallation einer Erweiterung erfolgt nun durch das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern die Erstellung von Einstellungsfenstern für Erweiterungen. Die neuen Einstellungsfenster unterstützen das Sofort-Anwenden-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilen-Schalter
  - : Eine API wurde eingeführt, damit Erweiterungen leicht komplexe Befehlszeilen-Flags handhaben können. Diese API wird stabil und für Version 1.1 eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht die Unterstützung neuer Namespaces durch XPCOM-Komponenten in Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

## Neue Browser-Funktionen

### Verbesserte Einstellungen

- Sofort-Anwenden-Verhalten auf Linux und Mac
  - : Änderungen im Einstellungsfenster werden jetzt sofort angewendet, in Übereinstimmung mit dem typischen Verhalten in anderen Mac OS X- und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Menüoberflächen-Richtlinien.
- Durchsuchbarer Download-Aktions-Manager
  - : Es ist möglich, im Download-Aktions-Manager nach Dateiendung oder Beschreibung zu suchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domain und Cookie-Namen durchsucht werden und sind nach Hostname in einer Baumstruktur anstelle einer flachen Liste organisiert.

### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, mehr Flexibilität.
- Unterstützung für das Profil-„Temp“-Verzeichnis auf dem lokalen Dateisystem
  - : Es ist nun möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Schnelllade-Cache (vorkompilierter Benutzerschnittstellencode) auf einer lokalen Festplatte zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk bleibt. Dies erhöht die Leistung und verringert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

### Weiteres

- „Sanitize“-Datenschutzfunktion
  - : Die „Sanitize“-Funktion bietet eine einfache Möglichkeit, um schnell den Browserverlauf, Cookies, Cache, gespeicherte Formulardaten und andere persönliche Daten zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bild-Thumbnails als Tab-Symbole
  - : Beim Anzeigen von Bildern zeigen Tab-Symbole jetzt Thumbnails des angezeigten Bildes an.
- Schneller zurück (und vorwärts)
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Navigation in der Sitzungsverlauf. Die Funktion ist standardmäßig deaktiviert, kann aber zu Testzwecken aktiviert werden, indem die Einstellung `browser.sessionhistory.max_viewers` auf eine ungleich Null gestellt wird.
- Verhalten bei anonymer FTP-Anmeldefehler
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-At-Regel für die Übereinstimmung auf der Site/Dokument-URL
  - : Die neue `@-moz-document`-Regel gibt den Benutzern die Möglichkeit, Seitenobjekte nach Site zuzuordnen, mithilfe von CSS. Dies ermöglicht das Einfügen von site-spezifischen Regeln in Benutzer-Stylesheets (userContent.css). [David Barons Beitrag an `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
