---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: acb89828aff8c275143fb250351bb9a35e94cf10
---

{{FirefoxSidebar}}

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedge/releases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus haben, obwohl sie nicht in der Tab-Reihenfolge sind.
- Objekt sollte übermittelt werden
  - : In Übereinstimmung mit der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

#### CSS

- CSS2 Zitat-Nestung
  - : Ab dieser Version wird die vollständige Unterstützung für die [`quotes` CSS2-Eigenschaft](https://www.w3.org/TR/CSS21/generate.html#quotes-specify) bereitgestellt, wobei das korrekte Zitat (abhängig von der Verschachtelungsebene) für open-quote und close-quote verwendet wird.
- CSS3 `:only-child`
  - : Dieser CSS3-Selektor ermöglicht das [Auswählen eines Elements](https://www.w3.org/TR/2001/CR-css3-selectors-20011113/#only-child-pseudo), das keine anderen Elemente als Geschwister im DOM hat.
- CSS3 Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspalten-Layouts](https://www.w3.org/TR/2001/WD-css3-multicol-20010118/) Entwurfs. Dies ermöglicht es, leicht eine Zeitung-ähnliche Mehrspaltenpräsentation zu erstellen.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung einigermaßen unabhängig zu steuern. Beispielsweise könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung scrollt werden kann.
- CSS3 Cursor
  - : Mehr [Mauszeigernamen](https://www.w3.org/TR/css-ui-3/#cursor) werden nun unterstützt.
- URI-Werte für CSS `cursor`-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann jetzt ein beliebiges Bild als Mauscursor verwendet werden, während ein bestimmter DOM-Knoten angezeigt wird.
    Alle von Gecko unterstützten Bildformate können für das Bild verwendet werden.
    (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.)
    Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Rahmen können jetzt abgerundete Ecken haben.
- CSS `outline` Eigenschaft
  - : [CSS-Rahmen](https://www.w3.org/TR/css-ui-3/#outline1) können jetzt verwendet werden. Diese unterscheiden sich von Rahmen darin, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](https://www.w3.org/TR/CSS21/generate.html#counters) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Extras
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Object](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wurde, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text behandelt und nicht als HTML, sodass Zeilenumbrüche erhalten bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine W3C-Spezifikation, die es XML-Sprachen ermöglicht, deklarative Ereignis-Listener und Ereignis-Handler zu integrieren.
- Keydown-Ereignis abbrechen
  - : Das Abbrechen des Keydown-Ereignisses hebt jetzt ordnungsgemäß die entsprechenden Keyup/Keypress-Ereignisse auf, gemäß der DOM-Spezifikation.
- Barrierefreiheits-APIs für DHTML
  - : Mozilla erlaubt es nun DHTML-Autoren, Rollens- und Zustandssemantik zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK verfügbar zu machen.
- Leistungsverbesserungen für DHTML
  - : Eine Reihe von Änderungen wurden vorgenommen, um die Geschwindigkeit und Sanftheit von DHTML erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungunabhängige skalierbare Vektorgrafiken zusammen mit einem DOM bereitstellt. Ein Technologie-Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit ein Teilmenge von SVG 1.1 Full, fehlt Funktionalitäten umfassen Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>`-Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zum dynamischen Erstellen von Bitmap-Grafiken. Für eine weitere Einführung siehe [Zeichnen mit Canvas](/en-US/Drawing_Graphics_with_Canvas).

#### Verschiedenes

- Unterstützung für HTTP/1.1 408-Antwortcode
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Anfrage-Timeout) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut gestellt.
- URIs werden immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Bilder und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [W3C XML-Formulare](https://www.w3.org/MarkUp/Forms/)-Sprache ermöglicht das Schreiben komplexer Formulare in XML und umfasst Funktionen, die reguläre HTML-Formulare nicht haben, wie clientseitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Übermittlung/-Abruf. Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Extension-Entwickler

- Verborgene Referrer-Spalte für den Verlauf

  - : Erweiterungen können jetzt auf die Referrer-Informationen für im Browser-Verlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionalitäten bereitzustellen. [Firefox-Bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen

  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server unter Verwendung von `nsISupportsPriority`. [Firefox-Bug 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets

  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (z. B. für die XBL-Bindungsanbringung) auf Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Proxy-Konfiguration

  - : Es ist jetzt möglich, dass Erweiterungen die Proxy-Konfiguration einfach außer Kraft setzen, ohne die für den Benutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox-Bug 282442](https://bugzil.la/282442)

- Dynamische Overlays

  - : Das Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox-Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)

  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für häufige XML-Operationen bietet. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox-Bug 246441](https://bugzil.la/246441)

- Transparente Fenster (Windows/Linux)

  - : Unter Windows und Linux werden XUL-Fenster mit einem transparenten Hintergrund jetzt unterstützt. Dies ermöglicht, dass das, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurchscheint.

- Hinzufügen von Tokens zur User-Agent-Zeichenkette

  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zur User-Agent-Zeichenkette hinzufügen (unter Verwendung von Vorgabeeinstellungen), ohne sich gegenseitig zu überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Headers/User-Agent). [Firefox-Bug 274928](https://bugzil.la/274928)

- Toolkit Chrome-Registrierung

  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Text-Chrome-Registrierungsmanifeste zu verwenden und den chrome.rdf/overlayinfo-Cache nicht mehr zu behalten.
    Siehe [Chrome Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager

  - : Folgende sind die neuen Funktionen:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Erweiterungen können jetzt installiert werden, indem eine XPI in das Profil- oder Anwendungs-Erweiterungsverzeichnis abgelegt wird.
    - Das Deinstallieren einer Erweiterung beinhaltet jetzt das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzbindungen

  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Einstellungsfenstern für Erweiterungen. Die neuen Einstellungsfenster unterstützen Instant-Apply-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilen-Schalter

  - : Eine API wurde eingeführt, damit Erweiterungen leicht komplexe Befehlszeilen-Flags verarbeiten können. Diese API wird stabil und eingefroren für 1.1 sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namespaces mit XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF Home Page](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Einstellungen

- Sofort-Anwenden-Verhalten auf Linux und Mac
  - : Änderungen, die im Einstellungsfenster vorgenommen werden, gelten jetzt sofort, entsprechend dem typischen Verhalten in anderen Mac OS X und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Human-Interface-Richtlinien.
- Durchsuchbarer Download-Aktionsmanager
  - : Es ist möglich, den Download-Aktionsmanager nach Dateityp oder Beschreibung zu durchsuchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind nach Hostname in einem Baumformat organisiert, anstatt in einer flachen Liste.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, mehr Flexibilität.
- Unterstützung für Profil-"Temp"-Verzeichnis auf dem lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vormompilierter Benutzeroberflächen-Code) auf einer lokalen Festplatte zu speichern, während der Rest der Profildaten auf einem Netzwerk-Laufwerk verbleibt. Dies erhöht die Leistung und reduziert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

#### Sonstiges

- "Bereinigen"-Datenschutzfunktion
  - : Die "Bereinigen"-Funktion bietet eine einfache Möglichkeit, schnell den Browserverlauf, Cookies, Cache, gespeicherte Formulardaten und andere persönliche Daten zu entfernen. Die zu entfernenden Elemente können angepasst werden und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bild-Thumbnails als Tab-Icons
  - : Beim Anzeigen von Bildern zeigen die Tab-Icons jetzt Thumbnails des angezeigten Bildes an.
- Schnellzurück (und vorwärts)
  - : Diese sehr experimentelle Funktion ermöglicht eine deutlich schnellere Sitzungsverlauf-Navigation. Die Funktion ist standardmäßig deaktiviert, kann jedoch zu Testzwecken aktiviert werden, indem die `browser.sessionhistory.max_viewers`-Einstellung auf eine von null abweichende Zahl gesetzt wird.
- Verhalten bei anonymem FTP-Login-Fehler
  - : FTP-Benutzer werden jetzt zur Eingabe eines Namens und Passworts aufgefordert, wenn der anonyme Zugang fehlschlägt.
- CSS-At-Regel zum Abgleichen auf Website/Dokument-URL
  - : Die neue `@-moz-document` Regel gibt Benutzern die Möglichkeit, Seitenobjekte pro Seite mithilfe von CSS abzugleichen. Dies macht es möglich, seitenbezogene Regeln in Benutzer-Stylesheets (userContent.css) einzuschließen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
