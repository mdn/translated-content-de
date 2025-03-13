---
title: Neuigkeiten in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{FirefoxSidebar}}

Diese Seite basiert hauptsächlich auf [https://www.squarefree.com/burningedge/releases/](https://www.squarefree.com/burningedge/releases/) (Danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus erhalten, obwohl sie nicht in der Tab-Reihenfolge sind.
- Objekt sollte gesendet werden
  - : Gemäß der HTML4-Spezifikation können `<object>`-Elemente nun als Teil eines Formulars übermittelt werden.

#### CSS

- Verschachtelung von Anführungszeichen in CSS2
  - : Ab dieser Version wird die [`quotes` CSS2-Eigenschaft](https://www.w3.org/TR/CSS21/generate.html#quotes-specify) vollständig unterstützt, wobei die korrekten Anführungszeichen (abhängig von der Verschachtelungsebene) für open-quote und close-quote verwendet werden.
- CSS3 `:only-child`
  - : Dieser CSS3-Selektor ermöglicht [die Auswahl eines Elements](https://www.w3.org/TR/2001/CR-css3-selectors-20011113/#only-child-pseudo), das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspalten-Layouts](https://www.w3.org/TR/2001/WD-css3-multicol-20010118/) Entwurfs. Dies ermöglicht eine einfache Erstellung von zeitungsgleichen Mehrspalten-Darstellungen.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Mehr [Maus-Cursor-Namen](https://www.w3.org/TR/css-ui-3/#cursor) werden jetzt unterstützt.
- URI-Werte auf CSS `cursor` Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann nun ein beliebiges Bild als Mauszeiger verwendet werden, während ein bestimmter DOM-Knoten gehovert wird. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Umrisse können nun abgerundete Ecken haben.
- CSS `outline` Eigenschaft
  - : [CSS-Umrisse](https://www.w3.org/TR/css-ui-3/#outline1) können jetzt verwendet werden. Sie unterscheiden sich von Rahmen dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](https://www.w3.org/TR/CSS21/generate.html#counters) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Erweiterungen
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text behandelt, nicht als HTML, sodass Zeilenumbrüche intakt bleiben und Tags nicht analysiert werden.
- XML-Ereignisse
  - : "XML-Ereignisse" ist eine W3C-Spezifikation, die es XML-Sprachen ermöglicht, deklarative Ereignislistener und Ereignishandler zu integrieren.
- Abbruch von keydown
  - : Das Abbrechen des keydown-Ereignisses bricht jetzt ordnungsgemäß die entsprechenden keyup/keypress-Ereignisse ab, gemäß der DOM-Spezifikation.
- Barrierefreie APIs für DHTML
  - : Mozilla erlaubt jetzt DHTML-Autoren, Rollen- und Zustandssemantiken zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK verfügbar zu machen.
- DHTML-Leistungsverbesserungen
  - : Es wurden eine Reihe von Änderungen vorgenommen, um die DHTML-Geschwindigkeit und -Flüssigkeit erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken sowie ein DOM bereitstellt. Eine Technologievorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst der unterstützte Subset von SVG 1.1 Full, fehlende Funktionalitäten umfassen Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zum dynamischen Erstellen von Bitmap-Grafiken. Für eine weiterführende Einführung siehe [Grafiken mit Canvas zeichnen](/en-US/Drawing_Graphics_with_Canvas).

#### Sonstiges

- Unterstützung des HTTP/1.1 408-Antwortcodes
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Anforderungs-Timeout) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut gesendet.
- URIs werden immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verknüpften Seite. Dies behebt Bilder und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML-Formulare des W3C](https://www.w3.org/MarkUp/Forms/) ermöglichen das Schreiben komplexer Formulare in XML und umfassen Funktionen, die reguläre HTML-Formulare nicht haben, wie z. B. clientseitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Übertragung/Abruf. Die Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Erweiterungsentwickler

- Versteckte Referrer-Spalte für Verlauf

  - : Erweiterungen können jetzt auf die Referer-Informationen für im Browser-Verlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox-Bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen

  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server mit `nsISupportsPriority`. [Firefox-Bug 278531](https://bugzil.la/278531)

- API zum Verwalten von Benutzer- und UA-Stylesheets

  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Dadurch müssen Erweiterungen `userContent.css` nicht mehr versuchen zu bearbeiten, um Styling (z. B. für XBL-Bindungsanhängung) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys

  - : Es ist jetzt möglich, dass Erweiterungen die Proxy-Konfiguration einfach überschreiben können, ohne Benutzereinstellungen sichtbar zu ändern. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox-Bug 282442](https://bugzil.la/282442)

- Dynamische Overlays

  - : Das Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox-Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)

  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), ein Entwurf des ECMA-Standards, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox-Bug 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)

  - : Unter Windows und Linux werden jetzt XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht, dass alles, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurchscheint.

- Hinzufügen von Tokens zur User-Agent-Zeichenfolge

  - : Es ist jetzt für Anwendungen, Erweiterungen und Anbieter möglich, Tokens zur User-Agent-Zeichenfolge hinzuzufügen (unter Verwendung der Standardpräferenzen), ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox-Bug 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registry

  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifeste zu verwenden, und behält nicht mehr den chrome.rdf/overlayinfo-Cache. Siehe [Chrome-Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager

  - : Folgende neue Funktionen sind verfügbar:
    - Es ist nun möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Das Installieren von Erweiterungen kann jetzt durch Ablegen einer XPI in das Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Das Deinstallieren einer Erweiterung umfasst jetzt das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenz-Bindungen

  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern die Erstellung von Präferenzfenstern für Erweiterungen. Die neuen Präferenzfenster unterstützen das Verhalten der Sofortanwendung, das standardmäßig auf Mac und Linux aktiviert ist.

- API zum Implementieren neuer Befehlszeilenschalter

  - : Es wurde eine API eingeführt, damit Erweiterungen komplexe Befehlszeilenflags problemlos handhaben können. Diese API wird stabil und für 1.1 eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das erweiterbare Tag-Framework ermöglicht es, Unterstützung für neue Namensräume mithilfe von XPCOM-Komponenten zu Mozilla hinzuzufügen (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Präferenzen

- Sofortanwendung auf Linux und Mac
  - : Änderungen im Präferenzfenster werden jetzt sofort angewendet, im Einklang mit dem typischen Verhalten anderer Mac OS X- und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Richtlinien für Benutzeroberflächen.
- Suchbare Download-Aktionsmanager
  - : Es ist möglich, den Download-Aktionsmanager nach Dateierweiterung oder Beschreibung zu durchsuchen.
- Suchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind nach Hostname in einem Baumformat anstatt einer flachen Liste organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, größere Flexibilität.
- Unterstützung für das Profil-"Temp"-Verzeichnis auf dem lokalen Dateisystem
  - : Es ist nun möglich, den Netzwerkkachelspeicher (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzeroberflächencode) auf einer lokalen Festplatte zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk bleibt. Dies wird die Leistung erhöhen und den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung reduzieren.

#### Sonstiges

- "Sanitize"-Datenschutzfunktion
  - : Die "Sanitize"-Funktion bietet eine einfache Möglichkeit, schnell den Browserverlauf, Cookies, Cache, gespeicherte Formulardaten und andere persönliche Daten zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bild-Thumbnails als Tab-Icons
  - : Beim Betrachten von Bildern zeigen Tab-Icons jetzt Thumbnails des angezeigten Bildes an.
- Schnelles Vor- und Zurückspringen
  - : Diese sehr experimentelle Funktion ermöglicht wesentlich schnellere Navigations in der Sitzungsverlauf. Die Funktion ist standardmäßig deaktiviert, kann jedoch für Testzwecke aktiviert werden, indem die `browser.sessionhistory.max_viewers`-Präferenz auf eine nicht null Zahl gesetzt wird.
- Verhalten bei anonymem FTP-Anmeldefehler
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugang fehlschlägt.
- CSS at-rule für Matching auf Site/Dokument-URL
  - : Die neue `@-moz-document` Regel gibt Benutzern die Möglichkeit, Seitenobjekte pro Site mit CSS zuzuordnen. Dies ermöglicht es, sitespezifische Regeln in Benutzerstylesheets (userContent.css) einzuschließen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
