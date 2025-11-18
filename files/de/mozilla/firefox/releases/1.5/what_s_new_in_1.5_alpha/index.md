---
title: Neuigkeiten in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können jetzt den Fokus erhalten, auch wenn sie nicht in der Tab-Reihenfolge sind.
- Object sollte übermittelt werden
  - : Entsprechend der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

#### CSS

- CSS2-Nestung von Anführungszeichen
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/Reference/Properties/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei das korrekte Anführungszeichen (abhängig von der Verschachtelungsebene) für öffnende und schließende Anführungszeichen verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/Reference/Selectors/:only-child)
  - : Dieser CSS3-Selektor ermöglicht die Auswahl eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspaltenlayouts](https://drafts.csswg.org/css-multicol/)-Entwurfs. Dies ermöglicht es, problemlos eine zeitungähnliche Mehrspaltenpräsentation zu erstellen.
- CSS3-`overflow-x` und `overflow-y`-Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung weitgehend unabhängig zu steuern. Beispielsweise könnte der Überlauf in horizontaler Richtung verborgen sein, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Mehr [Mauscursor-Namen](/de/docs/Web/CSS/Reference/Properties/cursor) werden jetzt unterstützt.
- URI-Werte bei CSS-Cursor-Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann man jetzt ein beliebiges Bild als Mauszeiger verwenden, während ein DOM-Knoten schwebt. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIF- und ANI-Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Umrisse können jetzt abgerundete Ecken haben.
- CSS-`outline`-Eigenschaft
  - : [CSS-Umrisse](/de/docs/Web/CSS/Reference/Properties/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rändern dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/Guides/Lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, aber dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften und dergleichen über Stylesheets.

#### JavaScript und DOM

- Array-Erweiterungen
  - : Dem Array-Objekt wurden neue Methoden hinzugefügt, um gängige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Object](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text und nicht als HTML behandelt, sodass Zeilenumbrüche intakt bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML Events" ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit bietet, deklarative Ereignis-Listener und -Handler zu integrieren.
- Abbrechen von keydown
  - : Das Abbrechen des keydown-Ereignisses bricht jetzt ordnungsgemäß alle entsprechenden keyup/keypress-Ereignisse ab, gemäß der DOM-Spezifikation.
- Barrierefreiheits-APIs für DHTML
  - : Mozilla ermöglicht jetzt DHTML-Autoren, Rollen und Zustandssemantik zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK weiterzugeben.
- Leistungsverbesserungen für DHTML
  - : Es wurden eine Reihe von Änderungen vorgenommen, um die Geschwindigkeit und Geschmeidigkeit von DHTML erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungunabhängige skalierbare Vektorgrafiken sowie ein DOM bereitstellt. Ein Technologie-Vorschau von nativer SVG-Unterstützung ist in dieser Version enthalten. Derzeit fehlt ein Subset von SVG 1.1 Full, darunter Filter, deklarative Animationen und SVG-definierte Schriften.
- `<canvas>`-Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenoberfläche zur dynamischen Erstellung von Bitmap-Grafiken. Für eine weiterführende Einführung siehe [Zeichnen von Grafiken mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial).

#### Verschiedenes

- Unterstützung für den HTTP/1.1 408-Antwortcode
  - : Eine bestehende Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Anforderung abgelaufen) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut gesendet.
- URIs werden immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Codierung der verlinkenden Seite. Dies behebt Bilder und Links auf Seiten mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [W3C's XML Forms](https://www.w3.org/MarkUp/Forms/)-Sprache ermöglicht das Schreiben komplexer Formulare in XML und enthält Funktionen, die reguläre HTML-Formulare nicht haben, wie z. B. clientseitige Validierung gegen [XML-Schema](https://www.w3.org/XML/Schema) und XML-Übermittlung/-Abruf. Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms-Projektseite](https://www-archive.mozilla.org/projects/xforms/).

### Neue Funktionen für Erweiterungsentwickler

- Versteckte Referrer-Spalte für Verlauf
  - : Erweiterungen können jetzt die Referrer-Informationen für im Browserverlauf gespeicherte Seiten abrufen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox Fehler 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server mithilfe von `nsISupportsPriority`. [Firefox Fehler 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (z. B. für XBL-Bindungsanhänge) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Service](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Proxy-Konfiguration
  - : Es ist jetzt möglich, dass Erweiterungen die Proxy-Konfiguration einfach überschreiben, ohne die für Benutzer sichtbaren Präferenzen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Fehler 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Das Laden von XUL-Overlays nach der Anzeige des Dokuments wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Fehler 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen Entwurf des ECMA-Standards, der der Sprache native XML-Datentypen hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Fehler 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)
  - : Unter Windows und Linux werden jetzt XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht, dass alles unterhalb des Fensters durch den Fensterhintergrund hindurch sichtbar ist.

- Hinzufügen von Token zur User-Agent-Zeichenfolge
  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Token zur User-Agent-Zeichenfolge hinzufügen (mithilfe von Standardpräferenzen), ohne sich gegenseitig zu überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Fehler 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registry
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifeste zu verwenden und keinen chrome.rdf/overlayinfo-Cache mehr zu pflegen.
    Siehe [Chrome-Registrierung](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration).

- Erweiterungs-Manager
  - : Die neuen Funktionen sind:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Die Installation von Erweiterungen kann jetzt durch das Ablegen einer XPI im Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Die Deinstallation einer Erweiterung erfolgt jetzt durch Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzenbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) machen es einfacher, Präferenzfenster für Erweiterungen zu erstellen. Die neuen Präferenzfenster unterstützen das Sofortübernahmeverhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Kommandozeilen-Schalter
  - : Eine API wurde eingeführt, damit Erweiterungen komplexe Kommandozeilen-Flags einfach bearbeiten können. Diese API wird stabil und eingefroren für 1.1 sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht, mithilfe von XPCOM-Komponenten (in JavaScript oder C++ geschrieben) Unterstützung für neue Namespaces in Mozilla hinzuzufügen. Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Präferenzen

- Sofortübernahmeverhalten auf Linux und Mac
  - : Änderungen im Präferenzfenster werden jetzt sofort angewendet, im Einklang mit dem typischen Verhalten anderer Mac OS X- und GNOME-Anwendungen. Diese Änderung steht im Einklang mit den Apple und GNOME Human Interface Guidelines.
- Suchbarer Download-Aktionsmanager
  - : Es ist möglich, den Download-Aktionsmanager nach Dateierweiterung oder Beschreibung zu durchsuchen.
- Suchbarer Cookies-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind nach Hostname in einem Baumformat anstelle einer flachen Liste organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Administratoren größere Flexibilität bei der Bereitstellung von Firefox in einer Unternehmensumgebung.
- Unterstützung für "temp"-Verzeichnis des Profils im lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerkcache (Kopien von besuchten Webseiten) und den XUL-Fastload-Cache (vorkompilierter UI-Code) auf einem lokalen Laufwerk zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk verbleibt. Dies erhöht die Leistung und reduziert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

#### Sonstiges

- "Bereinigen" Datenschutz-Funktion
  - : Die "Bereinigen"-Funktion bietet eine einfache Möglichkeit, den Verlauf, Cookies, Cache, gespeicherte Formulardaten und andere persönliche Daten schnell zu entfernen. Zu entfernende Elemente können angepasst werden, und die Funktion kann durch eine Tastenkombination oder einen Menüeintrag aktiviert werden.
- Bild-Thumbnails als Tab-Symbole
  - : Beim Betrachten von Bildern zeigen Tab-Symbole jetzt Thumbnails des angezeigten Bildes.
- Schnelles Zurück- und Vorwärtsspringen
  - : Diese sehr experimentelle Funktion ermöglicht viel schnellere Navigation in der Sitzungshistorie. Die Funktion ist standardmäßig deaktiviert, kann aber zu Testzwecken aktiviert werden, indem die Präferenz `browser.sessionhistory.max_viewers` auf eine ungleich null Zahl gesetzt wird.
- Verhalten bei anonymem FTP-Anmeldeversagen
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-At-Regel zum Abgleichen auf Standort/Dokument-URL
  - : Die neue `@-moz-document`-Regel gibt den Benutzern die Möglichkeit, Seitenobjekte pro Standort mit CSS abzugleichen. Dies ermöglicht es, spezifische Regeln für Sites in Benutzer-Stylesheets (userContent.css) einzubinden. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
