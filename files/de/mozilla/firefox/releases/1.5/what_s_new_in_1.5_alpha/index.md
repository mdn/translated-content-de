---
title: Neuigkeiten in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

Diese Seite basiert weitgehend auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können nun fokussiert werden, auch wenn sie nicht in der Tab-Reihenfolge sind.
- Objekt sollte übermitteln
  - : Gemäß der HTML4-Spezifikation können `<object>`-Elemente nun als Teil eines Formulars übermittelt werden.

#### CSS

- Verschachtelung der CSS2-Anführungszeichen
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei das richtige Anführungszeichen (abhängig vom Verschachtelungsgrad) für open-quote und close-quote verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/:only-child)
  - : Dieser CSS3-Selektor ermöglicht das Auswählen eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3-Mehrspaltenlayouts](https://drafts.csswg.org/css-multicol/)-Entwurfs. Dies ermöglicht eine einfache Zeitungs-ähnliche Mehrspalten-Darstellung.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in den horizontalen und vertikalen Richtungen weitgehend unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung scrollbar ist.
- CSS3-Cursor
  - : Mehr [Mauscursor-Namen](/de/docs/Web/CSS/cursor) werden jetzt unterstützt.
- URI-Werte bei CSS-`cursor` Eigenschaften
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann man jetzt ein beliebiges Bild als Mauscursor verwenden, während ein bestimmter DOM-Knoten gehovt wird.
    Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden.
    (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.)
    Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Umrisse können jetzt abgerundete Ecken haben.
- CSS `outline` Eigenschaft
  - : [CSS-Umrisse](/de/docs/Web/CSS/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rändern, da sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generiertem Inhalt
  - : [CSS2-Zähler](/de/docs/Web/CSS/CSS_lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Erweiterungen
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array Object](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten erstellt wurde, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text behandelt und nicht als HTML, sodass Zeilenumbrüche intakt bleiben und Tags nicht geparst werden.
- XML-Events
  - : "XML Events" ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit bietet, deklarative Event-Listener und Event-Handler zu integrieren.
- Abbrechen von keydown
  - : Das Abbrechen des keydown-Events storniert jetzt korrekt alle entsprechenden keyup/keypress-Events gemäß der DOM-Spezifikation.
- Zugänglichkeits-APIs für DHTML
  - : Mozilla ermöglicht es jetzt DHTML-Autoren, Rollen- und Zustandssemantiken zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK bereitzustellen.
- DHTML-Leistungsverbesserungen
  - : Es wurden mehrere Änderungen vorgenommen, um die DHTML-Geschwindigkeit und -Gleichmäßigkeit erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken sowie ein DOM bereitstellt. Eine technologische Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst das fehlende Funktionalitäten wie Filter, deklarative Animation und SVG-definierte Schriften.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zum dynamischen Erstellen von Bitmap-Grafiken. Weitere Einführung siehe [Grafiken zeichnen mit Canvas](/de/docs/Web/API/Canvas_API/Tutorial).

#### Verschiedenes

- Unterstützung des HTTP/1.1 408 Antwortcodes
  - : Eine persistente Verbindung wird nun korrekt geschlossen, wenn ein 408 Antwortcode (Anfrage-Zeitüberschreitung) empfangen wird. Die Anfrage wird in einer neuen Verbindung erneut versucht.
- URIs immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Kodierung der verlinkenden Seite. Dies behebt Bilder und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [W3C XML Forms](https://www.w3.org/MarkUp/Forms/) Sprache ermöglicht das Schreiben komplexer Formulare in XML und beinhaltet Funktionen, die reguläre HTML-Formulare nicht haben, wie z. B. clientseitige Validierung gegen [XML Schema](https://www.w3.org/XML/Schema) und XML-Einreichung/-Abruf. Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Erweiterungsentwickler

- Verborgene Referrer-Spalte für den Verlauf
  - : Erweiterungen können jetzt auf die Referrer-Informationen für Seiten im Browser-Verlauf zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufansichten und andere nützliche Funktionen bereitzustellen. [Firefox Fehler 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt nun die Priorisierung von Verbindungen zu einem bestimmten Server mithilfe von `nsISupportsPriority`. [Firefox Fehler 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (zum Beispiel für die XBL-Bindungsanheftung) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet-Dienstes](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Es ist jetzt für Erweiterungen möglich, die Proxy-Konfiguration einfach zu überschreiben, ohne die für Benutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Fehler 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Laden von XUL-Overlays nachdem das Dokument bereits angezeigt wurde, wird nun unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Fehler 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), ein Entwurf der ECMA-Norm, die native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Fehler 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)
  - : Unter Windows und Linux werden nun XUL Fenster mit einem transparenten Hintergrund unterstützt. Dabei kann, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurchscheinen.

- Hinzufügen von Tokens zu dem User-Agent-String
  - : Es ist nun möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zum User-Agent-String hinzufügen (unter Verwendung der Standardeinstellungen), ohne dass sie sich gegenseitig überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Fehler 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registrierung
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Plaintext-Chrome-Registrierungsmanifeste zu verwenden, und behält nicht mehr den chrome.rdf/overlayinfo-Cache bei.
    Siehe [Chrome-Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager
  - : Folgende neue Funktionen sind hinzugekommen:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und Anwendungserweiterungsverzeichnisse zu haben.
    - Installationen von Erweiterungen können jetzt durch das Ablegen eines XPIs in das Profil- oder Anwendungs-Erweiterungsverzeichnis durchgeführt werden.
    - Die Deinstallation einer Erweiterung besteht nun darin, ihren Ordner aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis zu löschen.

- Neue Präferenzbindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Einstellungsfenstern für Erweiterungen. Die neuen Einstellungsfenster unterstützen das Instant-Anwenden-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilen-Schalter
  - : Eine API wurde eingeführt, damit Erweiterungen komplexe Befehlszeilen-Flags einfach verwalten können. Diese API wird für 1.1 stabil und eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework erlaubt es, Unterstützung für neue Namensräume unter Verwendung von XPCOM-Komponenten zu Mozilla hinzuzufügen (in JavaScript oder C++ geschrieben). Siehe [XTF Homepage](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Einstellungen

- Sofortiges Anwenden-Verhalten auf Linux und Mac
  - : Änderungen im Einstellungsfenster werden jetzt sofort angewendet, in Übereinstimmung mit dem typischen Verhalten in anderen Mac OS X- und GNOME-Anwendungen. Diese Änderung entspricht den Apple und GNOME Human Interface Guidelines.
- Suchbarer Download-Aktionsmanager
  - : Es ist möglich, den Download-Aktionsmanager nach Dateiendung oder Beschreibung zu durchsuchen.
- Suchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domain und Cookie-Namen durchsucht werden und sind in einem Baumformat nach Hostname organisiert, statt in einer flachen Liste.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, größere Flexibilität.
- Unterstützung für Profil-verzeichnisse "temp" auf lokales Dateisystem
  - : Es ist jetzt möglich, den Netzwerkcache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzerschnittstellencode) auf einer lokalen Festplatte zu speichern, während der Rest der Profildaten auf einem Netzlaufwerk bleibt. Dies wird die Leistung erhöhen und den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung reduzieren.

#### Sonstiges

- "Bereinigen"-Datenschutzfunktion
  - : Die "Bereinigen"-Funktion bietet eine einfache Möglichkeit, den Browserverlauf, Cookies, den Cache, gespeicherte Formularinformationen und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bild-Miniaturen als Tab-Symbole
  - : Beim Anzeigen von Bildern zeigen Tab-Symbole jetzt Miniaturen des angezeigten Bildes an.
- Schnelles Vor- und Zurückblättern
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Sitzungshistorie-Navigation. Die Funktion ist standardmäßig deaktiviert, kann jedoch zu Testzwecken aktiviert werden, indem die Präferenz `browser.sessionhistory.max_viewers` auf eine von Null abweichende Zahl gesetzt wird.
- Anonymes FTP-Login-Fehlverhalten
  - : FTP-Benutzer werden nun aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS At-Regel zum Abgleichen von Seiten-/Dokument-URLs
  - : Die neue `@-moz-document` Regel gibt Benutzern die Möglichkeit, Seitenobjekte pro Website mithilfe von CSS abzugleichen. Dadurch wird es möglich, websitespezifische Regeln in Benutzer-Stylesheets (userContent.css) einzufügen. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
