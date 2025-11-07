---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 4cb9d89a204a9532370693b982e8a3b274a874b1
---

Diese Seite basiert weitgehend auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Webentwickler-Features

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können nun den Fokus erhalten, auch wenn sie nicht in der Tabulatorreihenfolge enthalten sind.
- Objekt sollte übermittelt werden
  - : In Übereinstimmung mit der HTML4-Spezifikation können `<object>`-Elemente nun als Teil eines Formulars übermittelt werden.

#### CSS

- Verschachtelung von Anführungszeichen in CSS2
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/Reference/Properties/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei die richtigen Anführungszeichen (abhängig von der Verschachtelungsebene) für open-quote und close-quote verwendet werden.
- CSS3 [`:only-child`](/de/docs/Web/CSS/Reference/Selectors/:only-child)
  - : Dieser CSS3-Selektor ermöglicht die Auswahl eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Multikolumnen-Layouts](https://drafts.csswg.org/css-multicol/) Entwurfs. Dies ermöglicht eine einfachere Erstellung von Zeitung-ähnlichen Mehrspalten-Darstellungen.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können genutzt werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung einigermaßen unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Es werden nun mehr [Mauszeigernamen](/de/docs/Web/CSS/Reference/Properties/cursor) unterstützt.
- URI-Werte bei CSS-`cursor`-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann man nun ein beliebiges Bild als Mauszeiger verwenden, während ein bestimmtes DOM-Knotenfeld überflogen wird. Jedes Bildformat, das von Gecko unterstützt wird, kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung des Features.
- `-moz-outline-radius`
  - : CSS-Outlines können nun abgerundete Ecken haben.
- CSS-`outline`-Eigenschaft
  - : [CSS-Outlines](/de/docs/Web/CSS/Reference/Properties/outline) können nun verwendet werden. Diese unterscheiden sich von Rändern dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/CSS_lists) werden nun vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Extras
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Object](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wurde, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text behandelt, nicht als HTML, sodass Zeilenumbrüche intakt bleiben und Tags nicht analysiert werden.
- XML-Events
  - : "XML Events" ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit bietet, deklarative Ereignislistener und Ereignishandler zu integrieren.
- Abbrechen von `keydown`
  - : Das Abbrechen des `keydown`-Events beendet nun gemäß der DOM-Spezifikation ordnungsgemäß alle entsprechenden `keyup`/`keypress`-Events.
- Zugänglichkeits-APIs für DHTML
  - : Mozilla ermöglicht nun DHTML-Autoren, benutzerdefinierten Elementen Rollen- und Statussemantiken hinzuzufügen und diese Informationen über MSAA und ATK bereitzustellen.
- Leistungsverbesserungen für DHTML
  - : Es wurden mehrere Änderungen vorgenommen, um die Geschwindigkeit und Geschmeidigkeit von DHTML erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die skalierbare Vektorgrafiken mit Auflösungsunabhängigkeit zusammen mit einem DOM bereitstellt. Eine technische Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst das Subset von SVG 1.1 Full keine Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>`-Unterstützung
  - : `<canvas>` ist eine skriptbare Zeichenfläche zur dynamischen Erstellung von Bitmap-Grafiken. Für eine weitere Einführung siehe [Zeichen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial).

#### Verschiedenes

- Unterstützung für HTTP/1.1 408-Antwortcodes
  - : Eine persistente Verbindung wird nun korrekt geschlossen, wenn ein 408-Antwortcode (Request timeout) empfangen wird. Die Anfrage wird in einer neuen Verbindung wiederholt.
- URIs werden immer als UTF8 gesendet
  - : URIs werden nun immer als UTF8 zum Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Bilder und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML-Formulare des W3C](https://www.w3.org/MarkUp/Forms/) ermöglichen das Schreiben komplexer Formulare in XML und enthalten Funktionen, die reguläre HTML-Formulare nicht haben, wie z.B. clientseitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Übermittlung/Abfrage. Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](https://www-archive.mozilla.org/projects/xforms/).

### Neue Erweiterungsentwickler-Features

- Versteckte Verweiser-Spalte für Verlauf
  - : Erweiterungen können nun auf die Verweiser-Informationen für Seiten im Browser-Verlauf zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufansichten und andere nützliche Funktionen zu bieten. [Firefox Fehler 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt nun die Priorisierung von Verbindungen zu einem bestimmten Server mithilfe von `nsISupportsPriority`. [Firefox Fehler 278531](https://bugzil.la/278531)

- API zur Verwaltung von Nutzer- und UA-Stylesheets
  - : Erweiterungen können nun Stylesheet-URIs als zusätzliche Nutzer- und UA-Stylesheets registrieren. Dies bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Stiländerungen (zum Beispiel für XBL-Bindungsanfügungen) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheets Dienstes](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Es ist nun möglich, dass Erweiterungen die Proxy-Konfiguration einfach überschreiben, ohne die für den Nutzer sichtbaren Präferenzen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Fehler 282442](https://bugzil.la/282442)

- Dynamische Überlagerungen
  - : Das Laden von XUL-Überlagerungen, nachdem das Dokument angezeigt wurde, wird nun unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Fehler 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla JavaScript-Engine unterstützt nun ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Fehler 246441](https://bugzil.la/246441)

- Transparente Fenster (Windows/Linux)
  - : Unter Windows und Linux werden XUL-Fenster mit einem transparenten Hintergrund nun unterstützt. Dadurch kann alles unterhalb des Fensters durch den Fensterhintergrund sichtbar gemacht werden.

- Hinzufügen von Tokens zur User-Agent-Zeichenkette
  - : Es ist nun möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zur User-Agent-Zeichenkette hinzufügen (mithilfe von Standardpräferenzen), ohne sich gegenseitig zu überschreiben. Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Fehler 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registrierung
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifestdateien zu verwenden und keinen chrome.rdf/overlayinfo-Cache mehr zu führen. Siehe [Chrome Registration](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration).

- Erweiterungs-Manager
  - : Folgende neue Funktionen sind verfügbar:
    - Es ist nun möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu speichern.
    - Installationen von Erweiterungen können nun durch Ablegen einer XPI-Datei im Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Die Deinstallation einer Erweiterung erfolgt nun durch das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern die Erstellung von Präferenzfenstern für Erweiterungen. Die neuen Präferenzfenster unterstützen ein Verhaltens-Sofortanwendung, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Kommandozeilen-Schalter
  - : Eine API wurde eingeführt, sodass Erweiterungen komplexe Kommandozeilen-Flags einfach handhaben können. Diese API wird stabil und eingefroren für Version 1.1 sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namensräume mithilfe von XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Features

#### Verbesserte Präferenzen

- Sofortanwendungs-Verhalten auf Linux und Mac
  - : Änderungen am Präferenzfenster werden nun sofort angewendet, im Einklang mit dem typischen Verhalten in anderen Mac OS X- und GNOME-Anwendungen. Diese Änderungen entsprechen den Apple- und GNOME-Human-Interface-Richtlinien.
- Suchbarer Download-Aktionsmanager
  - : Es ist möglich, im Download-Aktionsmanager nach Dateiendung oder Beschreibung zu suchen.
- Suchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domain und Cookie-Name durchsucht werden und sind nach Hostname in einer Baumstruktur statt in einer flachen Liste organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, mehr Flexibilität.
- Unterstützung für Profil-"temp"-Verzeichnis auf lokalem Dateisystem
  - : Es ist nun möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzeroberflächen-Code) auf einer lokalen Festplatte zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk bleibt. Dies wird die Leistung steigern und den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung reduzieren.

#### Sonstiges

- "Sanitize"-Datenschutzfunktion
  - : Die "Sanitize"-Funktion bietet eine einfache Möglichkeit, den Browserverlauf, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden und die Funktion kann entweder über eine Tastenkombination oder ein Menüelement aktiviert werden.
- Bildminiaturen als Tabsymbole
  - : Beim Anzeigen von Bildern zeigen Tabsymbole nun Miniaturansichten des angezeigten Bildes.
- Schneller Vor- und Zurückblättern
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Navigation in der Verlaufssitzung. Die Funktion ist standardmäßig deaktiviert, kann jedoch für Testzwecke aktiviert werden, indem die Präferenz `browser.sessionhistory.max_viewers` auf eine von Null verschiedene Zahl gesetzt wird.
- Verhalten bei anonymer FTP-Anmeldefehlerschlägen
  - : FTP-Benutzer werden nun aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-Regel zur Übereinstimmung mit Website-/Dokument-URL
  - : Die neue `@-moz-document`-Regel gibt Benutzern die Möglichkeit, Seitenobjekte pro Site mit CSS abzugleichen. Dies ermöglicht es, sitespezifische Regeln in Benutzerstylesheets (userContent.css) einzuschließen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
