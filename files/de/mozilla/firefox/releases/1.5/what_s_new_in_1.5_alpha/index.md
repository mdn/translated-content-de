---
title: Neues in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: acb89828aff8c275143fb250351bb9a35e94cf10
---

{{FirefoxSidebar}}

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können nun den Fokus bekommen, auch wenn sie nicht in der Tabulatorreihenfolge sind.
- Objekt sollte absenden
  - : Gemäß der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars eingereicht werden.

#### CSS

- Verschachtelung von CSS2-Anführungszeichen
  - : Ab dieser Version wird die [`quotes` CSS2-Eigenschaft](https://www.w3.org/TR/CSS21/generate.html#quotes-specify) vollständig unterstützt, wobei das richtige Anführungszeichen (je nach Verschachtelungsebene) für open-quote und close-quote verwendet wird.
- CSS3 `:only-child`
  - : Dieser CSS3-Selektor ermöglicht das [Auswählen eines Elements](https://www.w3.org/TR/2001/CR-css3-selectors-20011113/#only-child-pseudo), das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspaltenlayouts](https://www.w3.org/TR/2001/WD-css3-multicol-20010118/)-Entwurfs. Dies ermöglicht eine Präsentation im Zeitungsstil mit mehreren Spalten.
- CSS3-Eigenschaften `overflow-x` und `overflow-y`
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung weitgehend unabhängig zu steuern. Beispielsweise könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Mehr [Maus-Cursor-Namen](https://www.w3.org/TR/css-ui-3/#cursor) werden jetzt unterstützt.
- URI-Werte für CSS-Cursor-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann jetzt ein beliebiges Bild als Mauszeiger verwendet werden, während ein bestimmter DOM-Knoten gehovered wird.
    Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden.
    (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.)
    Siehe {{CSSxRef("cursor")}} für eine Beschreibung des Features.
- `-moz-outline-radius`
  - : CSS-Ränder können nun abgerundete Ecken haben.
- CSS-Eigenschaft `outline`
  - : [CSS-Ränder](https://www.w3.org/TR/css-ui-3/#outline1) können nun verwendet werden. Diese unterscheiden sich von Rändern dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](https://www.w3.org/TR/CSS21/generate.html#counters) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Erweiterungen
  - : Neue Methoden wurden zum Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text behandelt, nicht als HTML, sodass Zeilenumbrüche erhalten bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit gibt, deklarative Ereignislistener und Ereignishandler zu integrieren.
- Abbrechen von keydown
  - : Das Abbrechen des keydown-Ereignisses bricht nun gemäß der DOM-Spezifikation ordnungsgemäß entsprechende keyup/keypress-Ereignisse ab.
- Barrierefreiheits-APIs für DHTML
  - : Mozilla ermöglicht es jetzt DHTML-Autoren, Rollen- und Zustandssemantiken zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK zu exponieren.
- DHTML-Performance-Verbesserungen
  - : Es wurden mehrere Änderungen vorgenommen, um die Geschwindigkeit und den Ablauf von DHTML erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken zusammen mit einem DOM bereitstellt. Eine technologische Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit fehlt ein Teil des SVG 1.1 Full, darunter Filter, deklarative Animationen und SVG-definierte Schriftarten.
- Unterstützung für `<canvas>`
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zur dynamischen Erstellung von Bitmap-Grafiken. Für eine weitere Einführung siehe [Zeichnen mit `canvas`](/en-US/Drawing_Graphics_with_Canvas).

#### Verschiedenes

- Unterstützung des HTTP/1.1 408-Antwortcodes
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Anfrage-Zeitüberschreitung) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut versucht.
- URIs werden immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Kodierung der verlinkten Seite. Dies behebt Probleme mit Bildern und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML-Formulare des W3C](https://www.w3.org/MarkUp/Forms/) ermöglichen das Schreiben komplexer Formulare in XML und bieten Funktionen, die reguläre HTML-Formulare nicht haben, wie z. B. clientseitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Einreichung/-Abruf. Die Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms-Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Erweiterungsentwickler

- Versteckte Referrer-Spalte für den Verlauf

  - : Erweiterungen können jetzt auf Referenzinformationen für im Browser-Verlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox-Bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen

  - : Die Mozilla-Netzwerkbibliothek unterstützt nun die Priorisierung von Verbindungen zu einem bestimmten Server mit `nsISupportsPriority`. [Firefox-Bug 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets

  - : Erweiterungen können nun Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (z. B. für XBL-Bindungsanbindung) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys

  - : Es ist jetzt möglich, dass Erweiterungen die Proxy-Konfiguration einfach überschreiben, ohne benutzer-sichtbare Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox-Bug 282442](https://bugzil.la/282442)

- Dynamische Overlays

  - : Das Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox-Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)

  - : Die Mozilla-JavaScript-Engine unterstützt nun ECMAScript für XML (E4X), einen ECMA-Entwurf, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für übliche XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox-Bug 246441](https://bugzil.la/246441)

- Durchscheinende Fenster (Windows/Linux)

  - : Unter Windows und Linux werden nun XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht es, dass das, was sich unterhalb des Fensters befindet, durch den Fensterhintergrund hindurchscheint.

- Hinzufügen von Tokens zum User-Agent-String

  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zum User-Agent-String hinzufügen (mithilfe von Standardeinstellungen), ohne sich gegenseitig zu überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Headers/User-Agent). [Firefox-Bug 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registrierung

  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifest-Dateien zu verwenden und nicht mehr den chrome.rdf/overlayinfo-Cache zu pflegen.
    Siehe [Chrome-Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungs-Manager

  - : Folgende neue Funktionen sind verfügbar:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Die Installation von Erweiterungen kann jetzt durch das Ablegen einer XPI in das Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Das Deinstallieren einer Erweiterung umfasst jetzt das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzen-Bindungen

  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern die Erstellung von Einstellungsfenstern für Erweiterungen. Die neuen Einstellungsfenster unterstützen ein Verhalten mit sofortiger Anwendung, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilen-Schalter

  - : Eine API wurde eingeführt, damit Erweiterungen komplexe Befehlszeilen-Flags leicht handhaben können. Diese API wird stabil und eingefroren für 1.1 sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namespaces mit XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browsereigenschaften

#### Verbesserte Einstellungen

- Verhalten mit sofortiger Anwendung unter Linux und Mac
  - : Änderungen im Einstellungsfenster werden nun sofort angewendet, im Einklang mit typischen Verhaltensweisen in anderen Mac OS X- und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Richtlinien für Benutzeroberfläche.
- Durchsuchbarer Download-Aktionen-Manager
  - : Es ist möglich, im Download-Aktionen-Manager nach Dateierweiterung oder Beschreibung zu suchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind nach Hostname im Baumformat anstatt in einer flachen Liste organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, mehr Flexibilität.
- Unterstützung für temporäres Profilverzeichnis im lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerkspeicher-Cache (Kopien besuchter Webseiten) und den XUL-Schnelllade-Cache (vorkompilierter Benutzeroberflächen-Code) auf einer lokalen Festplatte zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk bleibt. Dies verbessert die Leistung und reduziert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

#### Sonstiges

- Datenschutzfunktion "Sanitize"
  - : Die "Sanitize"-Funktion bietet eine einfache Möglichkeit, schnell den Browserverlauf, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bild-Thumbnail als Tab-Icons
  - : Beim Betrachten von Bildern zeigen Tab-Icons jetzt Thumbnails des angezeigten Bildes an.
- Schnelles Zurück- (und Weiterblättern)
  - : Dieses sehr experimentelle Feature ermöglicht eine wesentlich schnellere Navigation in der Sitzungsverlauf. Das Feature ist standardmäßig deaktiviert, kann aber für Testzwecke durch Setzen der `browser.sessionhistory.max_viewers`-Einstellung auf eine ungleich null Zahl aktiviert werden.
- Verhalten beim Scheitern der anonymen FTP-Anmeldung
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugang fehlschlägt.
- CSS-Anweisung für URL-Übereinstimmung bei Seiten-/Dokumenten-URLs
  - : Die neue `@-moz-document`-Regel gibt den Benutzern die Möglichkeit, Seitenobjekte pro Standort mithilfe von CSS abzugleichen. So können standortspezifische Regeln in Benutzerstylesheets (userContent.css) aufgenommen werden. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
