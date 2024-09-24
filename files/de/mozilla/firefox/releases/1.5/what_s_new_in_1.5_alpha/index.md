---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: acb89828aff8c275143fb250351bb9a35e94cf10
---

{{FirefoxSidebar}}

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke an Jesse).

### Neue Webentwickler-Funktionen

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können nun den Fokus erhalten, obwohl sie nicht in der Tab-Reihenfolge sind.
- Object sollte submit
  - : In Übereinstimmung mit der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

#### CSS

- CSS2 Zitate-Verschachtelung
  - : Ab dieser Version wird die [`quotes`-CSS2-Eigenschaft](https://www.w3.org/TR/CSS21/generate.html#quotes-specify) vollständig unterstützt, wobei das korrekte Anführungszeichen (abhängig von der Verschachtelungsebene) für open-quote und close-quote verwendet wird.
- CSS3 `:only-child`
  - : Dieser CSS3-Selektor erlaubt [das Auswählen eines Elements](https://www.w3.org/TR/2001/CR-css3-selectors-20011113/#only-child-pseudo), das keine weiteren Elemente als Geschwister im DOM hat.
- CSS3 Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspaltenlayouts](https://www.w3.org/TR/2001/WD-css3-multicol-20010118/) Entwurfs. Dies ermöglicht eine einfache Darstellung im Zeitungsstil mit mehreren Spalten.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung unabhängig zu steuern. Beispielsweise könnte der Überlauf in horizontaler Richtung verborgen sein, während der Überlauf in vertikaler Richtung scrollbar bleibt.
- CSS3 Cursor
  - : Mehr [Maus-Cursor-Namen](https://www.w3.org/TR/css-ui-3/#cursor) werden jetzt unterstützt.
- URI-Werte bei CSS `cursor` Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann man nun ein beliebiges Bild als Mauszeiger verwenden, während ein bestimmter DOM-Knoten gehovt wird. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI-Cursors werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Konturen können jetzt abgerundete Ecken haben.
- CSS `outline` Eigenschaft
  - : [CSS-Konturen](https://www.w3.org/TR/css-ui-3/#outline1) können jetzt verwendet werden. Diese unterscheiden sich von Rändern, da sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](https://www.w3.org/TR/CSS21/generate.html#counters) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Erweiterungen
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Object](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : In neuen Dokumenten, die mit document.open("text/plain") erstellt wurden, wird der geschriebene Text jetzt als Text und nicht als HTML behandelt, sodass Zeilenumbrüche erhalten bleiben und Tags nicht geparst werden.
- XML Events
  - : "XML Events" ist eine W3C-Spezifikation, die es XML-Sprachen ermöglicht, deklarative Ereignis-Listener und Ereignis-Handler zu integrieren.
- Abbrechen von keydown
  - : Das Abbrechen des keydown-Ereignisses storniert jetzt ordnungsgemäß alle entsprechenden keyup/keypress-Ereignisse gemäß der DOM-Spezifikation.
- Zugänglichkeits-APIs für DHTML
  - : Mozilla ermöglicht es jetzt DHTML-Autoren, Rollensemantik und -zustände zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK bereitzustellen.
- DHTML-Leistungsverbesserungen
  - : Eine Reihe von Änderungen wurden vorgenommen, um die DHTML-Geschwindigkeit und -Flüssigkeit erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die eine auflösungsunabhängige skalierbare Vektorgrafik mit einem DOM bereitstellt. Eine Technologie-Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst der Funktionsumfang einen Teil von SVG 1.1 Full, ohne Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptbasierte Zeichenfläche zum dynamischen Erstellen von Bitmap-Grafiken. Für eine weitere Einführung siehe [Zeichnen von Grafiken mit Canvas](/en-US/Drawing_Graphics_with_Canvas).

#### Sonstiges

- Unterstützung des HTTP/1.1 408-Antwortcodes
  - : Eine persistente Verbindung wird nun korrekt geschlossen, wenn ein 408-Antwortcode (Request Timeout) empfangen wird. Die Anfrage wird in einer neuen Verbindung wiederholt.
- URIs immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Bilder und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML Forms des W3C](https://www.w3.org/MarkUp/Forms/) Sprache ermöglicht das Schreiben komplexer Formulare in XML und umfasst Funktionen, die reguläre HTML-Formulare nicht haben, wie z. B. die clientseitige Validierung gegen [XML Schema](https://www.w3.org/XML/Schema) und XML-Einreichung/Abruf. Die Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Erweiterungsentwickler

- Verborgene Referrer-Spalte für den Verlauf

  - : Erweiterungen können jetzt auf die Referer-Informationen für im Browser-Verlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Ansichten des Verlaufs und andere nützliche Funktionalitäten bereitzustellen. [Firefox bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen

  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server unter Verwendung von `nsISupportsPriority`. [Firefox bug 278531](https://bugzil.la/278531)

- API zum Verwalten von Benutzer- und UA-Stylesheets

  - : Erweiterungen können nun Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (z. B. für XBL-Bindung) auf Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys

  - : Es ist nun für Erweiterungen einfach möglich, die Proxy-Konfiguration zu überschreiben, ohne die für den Benutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox bug 282442](https://bugzil.la/282442)

- Dynamische Overlays

  - : Das Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)

  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), ein ECMA-Entwurf, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox bug 246441](https://bugzil.la/246441)

- Durchscheinende Fenster (Windows/Linux)

  - : Unter Windows und Linux werden jetzt XUL-Fenster mit transparentem Hintergrund unterstützt. Dadurch kann alles unterhalb des Fensters durch den Fensterhintergrund durchscheinen.

- Hinzufügen von Token zur User-Agent-Zeichenkette

  - : Es ist jetzt für Anwendungen, Erweiterungen und Anbieter möglich, alle Tokens zur User-Agent-Zeichenkette hinzuzufügen (unter Verwendung von Standardeinstellungen), ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Headers/User-Agent). [Firefox bug 274928](https://bugzil.la/274928)

- Toolkit-Chrom-Registry

  - : Die Registrierung von Chrome wurde erheblich verbessert, um einfache Text-Chrome-Registrierungs-Manifeste zu verwenden und den chrome.rdf/overlayinfo-Cache nicht mehr zu behalten. Siehe [Chrome Registration](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager

  - : Es gibt folgende neue Funktionen:
    - Es ist nun möglich, Erweiterungen außerdhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Die Installation von Erweiterungen kann jetzt durch das Ablegen einer XPI-Datei im Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Die Deinstallation einer Erweiterung beinhaltet jetzt das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Preferences-Bindungen

  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Präferenzfenstern für Erweiterungen. Die neuen Präferenzfenster unterstützen ein sofortiges Übernahmeverhalten, das auf Mac und Linux standardmäßig aktiviert ist.

- API zur Implementierung neuer Befehlszeilen-Schalter

  - : Es wurde eine API eingeführt, damit Erweiterungen komplexe Befehlszeilenflags einfach handhaben können. Diese API wird für 1.1 stabil und eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das erweiterbare Tag-Framework ermöglicht das Hinzufügen von Unterstützung für neue Namespaces unter Verwendung von XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF Homepage](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Einstellungen

- Sofortiges Übernahmeverhalten auf Linux und Mac
  - : Änderungen, die im Einstellungsfenster vorgenommen werden, gelten jetzt sofort, entsprechend dem typischen Verhalten in anderen Mac OS X und GNOME Anwendungen. Diese Änderung entspricht den Human Interface Guidelines von Apple und GNOME.
- Durchsuchbarer Download-Aktionen-Manager
  - : Es ist möglich, den Download-Aktionen-Manager nach Dateierweiterung oder Beschreibung zu durchsuchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind nach Hostname in einer Baumstruktur anstelle einer flachen Liste organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung einsetzen möchten, mehr Flexibilität.
- Unterstützung für temporäres Profilverzeichnis im lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Schnelllad-Cache (vorkompilierter Benutzeroberflächen-Code) auf einer lokalen Festplatte zu speichern, während die restlichen Profildaten auf einem Netzlaufwerk verbleiben. Dies wird die Leistung erhöhen und den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung reduzieren.

#### Sonstiges

- "Bereinigen" Datenschutz-Funktion
  - : Die "Bereinigen"-Funktion bietet eine einfache Möglichkeit, den Browserverlauf, Cookies, Cache, gespeicherte Formulareingaben und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder mit einer Tastenkombination oder über ein Menüelement aktiviert werden.
- Bildminiaturen als Tab-Icons
  - : Beim Anzeigen von Bildern zeigen Tab-Icons jetzt Miniaturen des angezeigten Bildes an.
- Schnelles Zurück (und Vor)
  - : Diese sehr experimentelle Funktion ermöglicht viel schnellere Sitzungsverlauf-Navigation. Die Funktion ist standardmäßig deaktiviert, kann aber zu Testzwecken durch Einstellen der `browser.sessionhistory.max_viewers`-Einstellung auf eine ungleich null Zahl aktiviert werden.
- Fehlverhalten beim anonymen FTP-Login
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS at-Regel für das Matching bei der Site/Dokument-URL
  - : Die neue `@-moz-document` Regel gibt Benutzern die Möglichkeit, Seitenobjekte seitenweise zuzuordnen, indem CSS verwendet wird. Dies ermöglicht das Einfügen site-spezifischer Regeln in Benutzer-Stylesheets (userContent.css). [David Barons Beitrag an `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
