---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 4f8c4b31478742a2a39fdb03993d08fc1c90bbea
---

Diese Seite basiert weitgehend auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus erhalten, obwohl sie nicht in der Tab-Reihenfolge sind.
- Objekt sollte übermittelt werden
  - : Entsprechend der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

#### CSS

- CSS2 Anführungszeichen-Verschachtelung
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei das korrekte Anführungszeichen (abhängig von der Verschachtelungsebene) für open-quote und close-quote verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/:only-child)
  - : Dieser CSS3-Selektor ermöglicht es, ein Element auszuwählen, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3 Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspaltenlayouts](https://drafts.csswg.org/css-multicol/) Entwurfs. Dies ermöglicht die einfache Erstellung einer zeitungähnlichen Mehrspalten-Darstellung.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung unabhängig voneinander zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen sein, während der vertikale Überlauf scrollbar ist.
- CSS3 Cursor
  - : Mehr [Mauszeiger-Namen](/de/docs/Web/CSS/cursor) werden jetzt unterstützt.
- URI-Werte in CSS `cursor`-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann man jetzt ein beliebiges Bild als Mauszeiger verwenden, während ein bestimmter DOM-Knoten gehovt wird. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG-, animierte GIF- und ANI-Zeiger werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Umrisse können jetzt abgerundete Ecken haben.
- CSS `outline`-Eigenschaft
  - : [CSS-Umrisse](/de/docs/Web/CSS/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rändern, da sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/CSS_lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Extras
  - : Dem Array-Objekt wurden neue Methoden hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Object](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : In neuen Dokumenten, die mit document.open("text/plain") erstellt wurden, wird der Text jetzt als Text behandelt, anstatt als HTML, sodass Zeilenumbrüche erhalten bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine W3C-Spezifikation, die es XML-Sprachen ermöglicht, deklarative Ereignislistener und Ereignis-Handler zu integrieren.
- Abbrechen von keydown
  - : Das Abbrechen des keydown-Ereignisses führt jetzt gemäß der DOM-Spezifikation zum ordnungsgemäßen Abbrechen der entsprechenden keyup/keypress-Ereignisse.
- Zugriffs-APIs für DHTML
  - : Mozilla ermöglicht es jetzt DHTML-Autoren, Rollen- und Status-Semantik zu benutzerdefinierten Elementen hinzuzufügen, und stellt diese Informationen über MSAA und ATK bereit.
- DHTML-Performance-Verbesserungen
  - : Eine Vielzahl von Änderungen wurde vorgenommen, um die Geschwindigkeit und Geschmeidigkeit von DHTML erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken zusammen mit einem DOM bereitstellt. Eine Technologie-Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst der unterstützte Funktionsumfang nicht Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>`-Unterstützung
  - : `<canvas>` ist eine skriptgesteuerte Zeichenfläche zur dynamischen Erstellung von Bitmap-Grafiken. Eine weitere Einführung finden Sie unter [Zeichnen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial).

#### Verschiedenes

- Unterstützung für HTTP/1.1 408 Antwortcode
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Zeitüberschreitung der Anforderung) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut gesendet.
- URIs werden immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Bilder und Links auf Seiten mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [W3C XML Forms](https://www.w3.org/MarkUp/Forms/) Sprache ermöglicht das Schreiben komplexer Formulare in XML und enthält Funktionen, die reguläre HTML-Formulare nicht bieten, wie z.B. clientseitige Validierung gegen [XML Schema](https://www.w3.org/XML/Schema) und XML-Übermittlung/-Abruf. Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](https://www-archive.mozilla.org/projects/xforms/).

### Neue Funktionen für Erweiterungsentwickler

- Verborgene Referrer-Spalte für den Verlauf
  - : Erweiterungen können jetzt auf die Referrer-Informationen für im Browserverlauf gespeicherte Seiten zugreifen. Diese Funktion kann genutzt werden, um alternative verlaufshaftungsansichten und andere nützliche Funktionalitäten bereitzustellen. [Firefox Fehler 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server unter Verwendung von `nsISupportsPriority`. [Firefox Fehler 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (z.B. für XBL-Bindungen) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Es ist jetzt möglich, dass Erweiterungen die Proxy-Konfiguration einfach außer Kraft setzen können, ohne die für den Benutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter`, und `nsIProtocolProxyCallback`. [Firefox Fehler 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird nun unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Fehler 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Fehler 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)
  - : Unter Windows und Linux werden jetzt XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht es, dass das, was sich unterhalb des Fensters befindet, durch den Hintergrund hindurchscheint.

- Hinzufügen von Tokens zum User-Agent-String
  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zum User-Agent-String hinzufügen (mit Standard-Einstellungen), ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Fehler 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registry
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifeste zu verwenden, und hält den Cache chrome.rdf/overlayinfo nicht mehr. Siehe [Chrome-Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungs-Manager
  - : Die neuen Funktionen sind:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Die Installation von Erweiterungen kann jetzt durch das Ablegen eines XPI in das Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Das Deinstallieren einer Erweiterung beinhaltet jetzt das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern die Erstellung von Präferenzfenstern für Erweiterungen. Die neuen Präferenzfenster unterstützen ein "Sofort-anwenden"-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilenschalter
  - : Eine API wurde eingeführt, damit Erweiterungen einfach mit komplexen Befehlszeilenflags umgehen können. Diese API wird stabil und für Version 1.1 eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Der eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namespaces unter Verwendung von XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Voreinstellungen

- Sofort-anwenden-Verhalten unter Linux und Mac
  - : Änderungen im Voreinstellungsfenster werden jetzt sofort angewendet, im Einklang mit dem typischen Verhalten in anderen Mac OS X- und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Human-Interface-Richtlinien.
- Durchsuchbarer Download-Aktions-Manager
  - : Es ist möglich, im Download-Aktions-Manager nach Dateierweiterung oder Beschreibung zu suchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Name durchsucht werden und sind nach Hostname in einer Baumstruktur anstelle einer flachen Liste organisiert.

#### Bereitstellung

- Firefox-MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, mehr Flexibilität.
- Unterstützung für "temp"-Profilverzeichnis auf lokalem Dateisystem
  - : Es ist jetzt möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierten Benutzeroberflächen-Code) auf einer lokalen Festplatte zu speichern, während die restlichen Profildaten auf einem Netzlaufwerk bleiben. Dies erhöht die Leistung und reduziert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

#### Weitere

- Datenschutzeinstellung "Bereinigen"
  - : Die "Bereinigen"-Funktion bietet eine einfache Möglichkeit, den Browserverlauf, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bild-Thumbnails als Tab-Icons
  - : Beim Anzeigen von Bildern zeigen die Tab-Icons jetzt Thumbnails des angezeigten Bildes.
- Schnelles Vor- und Zurückblättern
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Navigation in der Verlaufsleiste. Die Funktion ist standardmäßig deaktiviert, kann aber zu Testzwecken durch Setzen der Voreinstellung `browser.sessionhistory.max_viewers` auf eine ungleich null Zahl aktiviert werden.
- Verhalten beim Anmeldefehler bei anonymem FTP
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS at-Regel für Übereinstimmungen auf Site-/Dokument-URL
  - : Die neue `@-moz-document`-Regel gibt Benutzern die Möglichkeit, Seitenobjekte pro Sitzung mit CSS abzugleichen. Dies macht es möglich, sitespezifische Regeln in Benutzer-Stylesheets (userContent.css) aufzunehmen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
