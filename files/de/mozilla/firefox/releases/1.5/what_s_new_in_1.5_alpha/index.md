---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

## Neue Funktionen für Webentwickler

### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus erhalten, auch wenn sie nicht in der Tabulatorfolge sind.
- Object sollte senden
  - : Gemäß der HTML4-Spezifikation können `<object>`-Elemente nun als Teil eines Formulars übermittelt werden.

### CSS

- CSS2 Zitate-Nestung
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/Reference/Properties/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei je nach Verschachtelungsebene das richtige Anführungszeichen für open-quote und close-quote verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/Reference/Selectors/:only-child)
  - : Dieser CSS3-Selektor ermöglicht das Auswählen eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3 Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3 Multicolumn Layout](https://drafts.csswg.org/css-multicol/)-Entwurfs. Dies ermöglicht eine einfache Präsentation im Zeitungsstil mit mehreren Spalten.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung weitgehend unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung scrollbar ist.
- CSS3 Cursor
  - : Weitere [Maus-Cursor-Namen](/de/docs/Web/CSS/Reference/Properties/cursor) werden nun unterstützt.
- URI-Werte auf CSS `cursor` Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann jetzt ein beliebiges Bild als Maus-Cursor verwendet werden, während sich der Mauszeiger über einem bestimmten DOM-Element befindet.
    Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden.
    (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.)
    Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Umrisse können jetzt abgerundete Ecken haben.
- CSS `outline` Eigenschaft
  - : [CSS-Umrisse](/de/docs/Web/CSS/Reference/Properties/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rändern dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/Guides/Lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften und so weiter über Stylesheets.

### JavaScript und DOM

- Array-Erweiterungen
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um gängige Aufgaben zu erleichtern. Weitere Informationen finden Sie im [JavaScript 1.5 Array Object](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text statt HTML behandelt, sodass Zeilenumbrüche intakt bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine W3C-Spezifikation, die XML-Sprachen die Fähigkeit gibt, deklarative Ereignislistener und Ereignis-Handler zu integrieren.
- Abbrechen von keydown
  - : Das Abbrechen des keydown-Ereignisses führt nun gemäß der DOM-Spezifikation dazu, dass alle entsprechenden keyup/keypress-Ereignisse ebenfalls ordnungsgemäß abgebrochen werden.
- Barrierefreiheits-APIs für DHTML
  - : Mozilla erlaubt es jetzt DHTML-Entwicklern, Rollen- und Zustandssemantik zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK bereitzustellen.
- DHTML-Leistungsverbesserungen
  - : Eine Reihe von Änderungen wurden vorgenommen, um die Geschwindigkeit und Glätte von DHTML erheblich zu verbessern.

### Grafiken

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken zusammen mit einem DOM bereitstellt. Ein Technologie-Vorschau auf die native SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst die Funktionalität nicht Filter, deklarative Animationen und SVG-definierte Schriften.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptbare Zeichenfläche zum dynamischen Erstellen von Bitmap-Grafiken. Für eine weitere Einführung siehe [Zeichnen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial).

### Verschiedenes

- Unterstützung für HTTP/1.1 408 Antwortcode
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Anfrage-Zeitüberschreitung) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut versucht.
- URIs immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Bilder und Links auf Webseiten mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML-Formulare des W3C](https://www.w3.org/MarkUp/Forms/) ermöglichen das Schreiben komplexer Formulare in XML und beinhalten Funktionen, die reguläre HTML-Formulare nicht haben, wie clientseitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Einreichung/-Abruf. XForms-Unterstützung kommt als Erweiterung, siehe [Mozilla XForms-Projektseite](https://www-archive.mozilla.org/projects/xforms/).

## Neue Funktionen für Erweiterungsentwickler

- Verborgene Referrer-Spalte für den Verlauf
  - : Erweiterungen können jetzt auf die Referrer-Informationen für Seiten im Browser-Verlauf zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsmöglichkeiten und andere nützliche Funktionen bereitzustellen. [Firefox Fehler 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server mithilfe von `nsISupportsPriority`. [Firefox Fehler 278531](https://bugzil.la/278531)

- API zur Verwaltung von Nutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Nutzer- und UA-Stylesheets registrieren. Dadurch müssen Erweiterungen nicht mehr versuchen, `userContent.css` zu bearbeiten, um Stile (zum Beispiel für die XBL-Bindungszuordnung) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Services](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Es ist jetzt möglich, dass Erweiterungen die Proxy-Konfiguration einfach überschreiben, ohne die für den Benutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Fehler 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Das Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Fehler 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), ein ECMA-Entwurfsstandard, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Fehler 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)
  - : Unter Windows und Linux werden XUL-Fenster mit transparentem Hintergrund jetzt unterstützt. Dies ermöglicht es, dass das, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurchschimmert.

- Hinzufügen von Tokens zur User-Agent-Zeichenkette
  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zur User-Agent-Zeichenkette hinzufügen können (mithilfe von Standardvoreinstellungen), ohne sich gegenseitig zu überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Fehler 274928](https://bugzil.la/274928)

- Toolkit Chrome-Registry
  - : Die Registrierung von Chrome wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifeste zu verwenden, und behält nicht mehr den chrome.rdf/overlayinfo-Cache.
    Siehe [Chrome Registrierung](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager
  - : Folgende neue Funktionen sind enthalten:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Die Installation von Erweiterungen kann nun durch das Ablegen einer XPI-Datei in das Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Das Deinstallieren einer Erweiterung erfordert nun das Löschen seines Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Präferenzfenstern für Erweiterungen. Die neuen Präferenzfenster unterstützen das Sofort-Anwenden-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeitschalter
  - : Eine API wurde eingeführt, sodass Erweiterungen komplexe Befehlszeilenflags einfach handhaben können. Diese API wird für 1.1 stabil und eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namensräume mithilfe von XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

## Neue Browser-Funktionen

### Verbesserte Präferenzen

- Sofort-Anwenden-Verhalten auf Linux und Mac
  - : Änderungen, die im Präferenzfenster vorgenommen werden, werden jetzt sofort angewendet, entsprechend dem typischen Verhalten in anderen Mac OS X und GNOME-Anwendungen. Diese Änderung entspricht den Apple und GNOME Human Interface Guidelines.
- Suchfähiger Download-Aktions-Manager
  - : Es ist möglich, den Download-Aktions-Manager nach Dateiendung oder Beschreibung zu durchsuchen.
- Suchfähiger Cookie-Manager
  - : Cookies können nach Hostname/Domain und Cookie-Name durchsucht werden und sind im Baumformat nach Hostname organisiert, anstatt in einer flachen Liste.

### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, größere Flexibilität.
- Unterstützung für "temp"-Profilverzeichnis im lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerkcache (Kopien der besuchten Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzerschnittstellencode) auf einem lokalen Laufwerk zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk verbleiben. Dies erhöht die Leistung und reduziert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

### Sonstiges

- "Sanitize"-Datenschutz-Funktion
  - : Die "Sanitize"-Funktion bietet eine einfache Möglichkeit, um schnell den Browserverlauf, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bild-Thumbnails als Tab-Icons
  - : Beim Anzeigen von Bildern zeigen Tab-Icons jetzt Thumbnails des angezeigten Bildes.
- Schnelles Zurück- (und Vor-)Navigieren
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Navigation in der Sitzungshistorie. Die Funktion ist standardmäßig deaktiviert, kann jedoch zu Testzwecken aktiviert werden, indem die `browser.sessionhistory.max_viewers`-Einstellung auf eine von null verschiedene Zahl gesetzt wird.
- Verhalten bei fehlgeschlagenem anonymen FTP-Login
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-At-Regel für das Matching der Site/Dokument-URL
  - : Die neue `@-moz-document`-Regel gibt Benutzern die Möglichkeit, Seitenobjekte pro Site mithilfe von CSS abzugleichen. Dies macht es möglich, Site-spezifische Regeln in Nutzer-Stylesheets (userContent.css) einzuschließen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
