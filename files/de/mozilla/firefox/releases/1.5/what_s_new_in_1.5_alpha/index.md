---
title: Neuigkeiten in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 1d3d0c10ebf5c8c55f75b9adce74d1e5001866c6
---

Diese Seite basiert weitgehend auf [https://www.squarefree.com/burningedge/releases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus erhalten, obwohl sie nicht in der Tab-Reihenfolge sind.
- Objekt sollte übermittelt werden
  - : Gemäß der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

#### CSS

- CSS2 Angebotsverschachtelung
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei das korrekte Anführungszeichen (abhängig von der Verschachtelungsebene) für open-quote und close-quote verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/:only-child)
  - : Dieser CSS3-Selektor ermöglicht die Auswahl eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3 Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspaltenlayouts](https://drafts.csswg.org/css-multicol/) Entwurfs. Dies ermöglicht eine einfache Umsetzung einer zeitungsmäßigen Mehrspaltenpräsentation.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3 Cursor
  - : Mehr [Mauszeiger-Namen](/de/docs/Web/CSS/cursor) werden jetzt unterstützt.
- URI-Werte auf CSS `cursor` Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann man jetzt ein beliebiges Bild als Mauszeiger verwenden, während ein bestimmter DOM-Knoten schwebt. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Konturen können jetzt abgerundete Ecken haben.
- CSS `outline` Eigenschaft
  - : [CSS-Konturen](/de/docs/Web/CSS/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rahmen dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/CSS_lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Extras
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um gängige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text behandelt statt als HTML, sodass Zeilenumbrüche intakt bleiben und Tags nicht geparst werden.
- XML Events
  - : "XML Events" ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit bietet, deklarative Ereignis-Listener und Ereignis-Handler zu integrieren.
- Abbruch des keydown-Events
  - : Das Abbrechen des keydown-Events hebt jetzt ordnungsgemäß alle entsprechenden keyup/keypress-Events auf, entsprechend der DOM-Spezifikation.
- Zugangs-APIs für DHTML
  - : Mozilla ermöglicht jetzt DHTML-Autoren, Rollen- und Zustandseigenschaften zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK offenzulegen.
- DHTML-Leistungsverbesserungen
  - : Zahlreiche Änderungen wurden vorgenommen, um die DHTML-Geschwindigkeit und -Flüssigkeit erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken zusammen mit einem DOM bereitstellt. Ein technischer Vorschau von nativer SVG-Unterstützung ist in dieser Version enthalten. Derzeit ist ein Subset von SVG 1.1 Full integriert, es fehlen Funktionen wie Filter, deklarative Animation und SVG-definierte Schriftarten.
- `<canvas>`-Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenoberfläche zur dynamischen Erstellung von Bitmapgrafiken. Für eine weitere Einführung siehe [Grafiken Zeichnen mit Canvas](/en-US/Drawing_Graphics_with_Canvas).

#### Sonstiges

- Unterstützung des HTTP/1.1 408-Antwortcodes
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Anfrage-Timeout) empfangen wird. Die Anfrage wird in einer neuen Verbindung wiederholt.
- URIs immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Kodierung der verlinkenden Seite. Dies behebt Bilder und Links auf Seiten mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [W3C XML-Formen](https://www.w3.org/MarkUp/Forms/) Sprache ermöglicht das Schreiben komplexer Formulare in XML und bietet Funktionen, die reguläre HTML-Formulare nicht haben, wie clientseitige Validierung gegen [XML Schema](https://www.w3.org/XML/Schema) und XML-Einreichung/-Abruf. Unterstützung für XForms wird als Erweiterung bereitgestellt, siehe [Mozilla XForms Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Erweiterungsentwickler

- Versteckte Referrer-Spalte für den Verlauf
  - : Erweiterungen können jetzt auf die Referrer-Informationen für im Verlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionalitäten bereitzustellen. [Firefox Bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server mithilfe von `nsISupportsPriority`. [Firefox Bug 278531](https://bugzil.la/278531)

- API für die Verwaltung von Benutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Dies bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (zum Beispiel für XBL-Bindungsanhänge) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Es ist jetzt möglich, dass Erweiterungen die Proxy-Konfiguration leicht überschreiben können, ohne die für den Benutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Bug 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Das Laden von XUL-Overlays nach der Anzeige des Dokuments wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der der Sprache native XML-Datentypen hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Bug 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)
  - : Unter Windows und Linux werden jetzt XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht es, dass das, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurchscheint.

- Hinzufügen von Tokens zur User-Agent-Zeichenkette
  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zur User-Agent-Zeichenkette hinzufügen (mithilfe von Standardeinstellungen), ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Bug 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registrierung
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache, Klartext-Chrome-Registrierungsmanifeste zu verwenden, und behält nicht mehr den chrome.rdf/overlayinfo-Cache bei. Siehe [Chrome-Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager
  - : Folgende neue Funktionen sind hinzugekommen:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Verzeichnisse zu haben.
    - Die Installation von Erweiterungen kann jetzt durch das Ablegen eines XPI im Profil- oder Anwendungs-Verzeichnis erfolgen.
    - Das Deinstallieren einer Erweiterung erfolgt jetzt durch Löschen ihres Ordners aus dem Profil- oder Anwendungs-Verzeichnis.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Einstellungenfenstern für Erweiterungen. Die neuen Einstellungenfenster unterstützten ein Instant-Apply-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilenoptionen
  - : Eine API wurde eingeführt, damit Erweiterungen komplexe Befehlszeilenflags einfach handhaben können. Diese API wird stabil sein und für 1.1 eingefroren. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namespaces mittels XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Einstellungen

- Instant Apply Verhalten auf Linux und Mac
  - : Änderungen im Einstellungsfenster werden jetzt sofort angewendet, im Einklang mit dem typischen Verhalten in anderen Mac OS X und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Richtlinien für Benutzeroberflächen.
- Suchbarer Download-Aktionen-Manager
  - : Es ist möglich, den Download-Aktionen-Manager nach Dateierweiterung oder Beschreibung zu durchsuchen.
- Suchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind in einem Baumformat anstatt einer flachen Liste nach Hostname organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, mehr Flexibilität.
- Unterstützung für das Profil-"temp"-Verzeichnis auf dem lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzerschnittstellencode) auf einer lokalen Festplatte zu speichern, während die restlichen Profildaten auf einem Netzlaufwerk verbleiben. Dies wird die Leistung steigern und den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung reduzieren.

#### Sonstiges

- "Sanitize"-Datenschutzfunktion
  - : Die "Sanitize"-Funktion bietet eine einfache Möglichkeit, den Browserverlauf, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über einen Menüpunkt aktiviert werden.
- Bild-Thumbnails als Tab-Icons
  - : Beim Betrachten von Bildern zeigen Tab-Icons jetzt Thumbnails des angezeigten Bildes an.
- Schneller Vor- und Zurückblättern
  - : Dieses sehr experimentelle Feature ermöglicht ein viel schnelleres Navigieren in der Sitzungsverlaufshistorie. Die Funktion ist standardmäßig deaktiviert, kann aber zu Testzwecken durch Setzen der `browser.sessionhistory.max_viewers`-Einstellung auf eine ungleich null Zahl aktiviert werden.
- Fehlverhalten beim anonymen FTP-Login
  - : FTP-Nutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-at-Regel für URL-Übereinstimmung auf Site/Dokument
  - : Die neue `@-moz-document`-Regel gibt Nutzern die Möglichkeit, Seitenobjekte pro Site mit CSS abzugleichen. Dies ermöglicht das Einfügen von site-spezifischen Regeln in benutzerdefinierte Style-Sheets (userContent.css). [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
