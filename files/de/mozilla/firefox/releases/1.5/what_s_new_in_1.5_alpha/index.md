---
title: Was ist neu in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: cac79d099b0a4e48456cb53eb2435f6acf03e188
---

{{FirefoxSidebar}}

Diese Seite basiert weitgehend auf [https://www.squarefree.com/burningedge/releases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen `tabIndex`-Attribut können jetzt den Fokus haben, auch wenn sie nicht in der Tab-Reihenfolge sind.
- `<object>`-Elemente sollten gesendet werden
  - : Entsprechend der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

#### CSS

- Verschachtelung von Anführungszeichen in CSS2
  - : Ab dieser Version wird die CSS2-Eigenschaft [`quotes`](/de/docs/Web/CSS/quotes) vollständig unterstützt, wobei das richtige Anführungszeichen (abhängig vom Verschachtelungsgrad) für `open-quote` und `close-quote` verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/:only-child)
  - : Dieser CSS3-Selektor ermöglicht es, ein Element auszuwählen, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3 Mehrspalten-Layouts](https://drafts.csswg.org/css-multicol/) ist vorhanden. Dies ermöglicht eine einfache Darstellung im Zeitungsstil mit mehreren Spalten.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung weitgehend unabhängig zu steuern. Beispielsweise könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Mehr [Mauszeigernamen](/de/docs/Web/CSS/cursor) werden jetzt unterstützt.
- URI-Werte für CSS-`cursor`-Eigenschaften
  - : Auf Windows, OS/2 und Linux (Gtk+ 2.x) kann nun ein beliebiges Bild als Mauszeiger verwendet werden, wenn ein bestimmter DOM-Knoten überfahren wird.
    Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden.
    (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.)
    Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Umrisse können jetzt abgerundete Ecken haben.
- CSS `outline`-Eigenschaft
  - : [CSS-Umrisse](/de/docs/Web/CSS/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rändern dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2 Zähler](/de/docs/Web/CSS/CSS_lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, sondern dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

#### JavaScript und DOM

- Array-Erweiterungen
  - : Neue Methoden wurden zum Array-Objekt hinzugefügt, um gängige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit `document.open("text/plain")` erstellt wurden, wird jetzt als Text behandelt und nicht als HTML, sodass Zeilenumbrüche erhalten bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : „XML Events“ ist eine W3C-Spezifikation, die es XML-Sprachen ermöglicht, deklarative Ereignislistener und -handler zu integrieren.
- Abbrechen von `keydown`
  - : Das Abbrechen des `keydown`-Ereignisses wird jetzt korrekt durchgeführt und entsprechende `keyup`/`keypress`-Ereignisse werden gemäß der DOM-Spezifikation abgebrochen.
- Zugänglichkeits-APIs für DHTML
  - : Mozilla ermöglicht es jetzt DHTML-Autoren, Rollen- und Zustandssemantik zu benutzerdefinierten Elementen hinzuzufügen und diese Informationen über MSAA und ATK bereitzustellen.
- Leistungsverbesserungen bei DHTML
  - : Eine Reihe von Änderungen wurden vorgenommen, um die Geschwindigkeit und Geschmeidigkeit von DHTML erheblich zu verbessern.

#### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die skalierbare Vektorgrafiken mit unabhängiger Auflösung sowie ein DOM bietet. Eine Technologie-Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst das Paket eine Teilmenge von SVG 1.1 Full, es fehlen dabei Funktionen wie Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zum dynamischen Erstellen von Bitmap-Grafiken. Für eine weitere Einführung siehe [Grafiken zeichnen mit Canvas](/en-US/Drawing_Graphics_with_Canvas).

#### Sonstiges

- Unterstützung für HTTP/1.1 408 Antwortcode
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Request timeout) empfangen wird. Die Anfrage wird in einer neuen Verbindung wiederholt.
- URIs werden immer als UTF8 gesendet
  - : URIs werden jetzt immer als UTF8 an den Server gesendet, unabhängig von der Kodierung der verlinkenden Seite. Dies behebt Bilder und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML-Formulare](https://www.w3.org/MarkUp/Forms/) des W3C ermöglichen das Schreiben komplexer Formulare in XML und enthalten Funktionen, die reguläre HTML-Formulare nicht haben, wie z. B. clientseitige Validierung gegen [XML Schema](https://www.w3.org/XML/Schema) und XML-Einreichung/Retrieval. Unterstützung für XForms kommt als Erweiterung, siehe [Mozilla XForms Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Erweiterungsentwickler

- Versteckte Referrer-Spalte für Verlauf

  - : Erweiterungen können nun auf die Verweisinformationen für im Browserverlauf gespeicherte Seiten zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox Bug 128398](https://bugzil.la/128398)

- API für die Priorisierung von HTTP-Verbindungen

  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server durch `nsISupportsPriority`. [Firefox Bug 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets

  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (z.B. für XBL-Bindungsanlagen) zu Webseiten hinzuzufügen. Siehe [Verwendung des Stylesheet Service](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys

  - : Es ist jetzt möglich, dass Erweiterungen die Proxykonfiguration einfach außer Kraft setzen, ohne sichtbare Benutzerpräferenzen zu beeinträchtigen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Bug 282442](https://bugzil.la/282442)

- Dynamische Overlays

  - : Das Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)

  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen ECMA-Entwurfstandard, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Bug 246441](https://bugzil.la/246441)

- Durchsichtige Fenster (Windows/Linux)

  - : Auf Windows und Linux werden nun XUL-Fenster mit einem transparenten Hintergrund unterstützt. Dies ermöglicht, dass alles, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurch scheint.

- Hinzufügen von Tokens zum User-Agent-String

  - : Es ist jetzt möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zum User-Agent-String hinzufügen (mithilfe von Standardpräferenzen), ohne sich gegenseitig zu überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Bug 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registrierung

  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifeste zu verwenden und den Cache chrome.rdf/overlayinfo nicht länger beizubehalten.
    Siehe [Chrome-Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungsmanager

  - : Folgende neue Funktionen:
    - Es ist jetzt möglich, Erweiterungen außerhalb der Profil- und der Anwendungs-Erweiterungsverzeichnisse zu haben.
    - Installieren von Erweiterungen kann jetzt erfolgen, indem eine XPI in das Profil- oder Anwendungs-Erweiterungsverzeichnis gezogen wird.
    - Das Deinstallieren einer Erweiterung erfolgt nun durch Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzbindungen

  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern es, Einstellungsfenster für Erweiterungen zu erstellen. Die neuen Einstellungsfenster unterstützen das Instant-Apply-Verhalten, das standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilenschalter

  - : Eine API wurde eingeführt, damit Erweiterungen komplexe Befehlszeilenflags einfach handhaben können. Diese API wird für Version 1.1 stabil sein und eingefroren. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht es, neue Namensräume mit XPCOM-Komponenten (geschrieben in JavaScript oder C++) in Mozilla zu unterstützen. Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browser-Funktionen

#### Verbesserte Einstellungen

- Sofortige Anwendungsakion auf Linux und Mac
  - : Änderungen im Einstellungsfenster werden jetzt sofort angewendet, entsprechend dem typischen Verhalten in anderen Mac OS X- und GNOME-Anwendungen. Diese Änderung stimmt mit den Apple- und GNOME-Schnittstollenrichtlinien überein.
- Suchmanager für Download-Aktionen
  - : Es ist möglich, im Download-Aktionsmanager nach Dateierweiterung oder Beschreibung zu suchen.
- Suchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domäne und Cookie-Namen durchsucht werden und sind anstelle einer flachen Liste in einem Baumformat nach Hostnamen organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet mehr Flexibilität für Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten.
- Unterstützung für Profil-"Temp"-Verzeichnis im lokalen Dateisystem
  - : Es ist nun möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Schnellladungscache (vorkompilierter Benutzerschnittstellencode) auf einer lokalen Festplatte zu speichern, während die restlichen Profildaten auf einem Netzlaufwerk verbleiben. Dies erhöht die Leistung und reduziert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

#### Sonstiges

- „Sanitize“-Datenschutzfeature
  - : Die „Sanitize“-Funktion bietet eine einfache Möglichkeit, den Browserverlauf, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten schnell zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bildminiaturen als Tab-Icons
  - : Beim Betrachten von Bildern zeigen Tab-Icons nun Miniaturen des angezeigten Bildes an.
- Schnelles Zurück- und Vorwärtsblättern
  - : Diese sehr experimentelle Funktion ermöglicht eine wesentlich schnellere Navigation in der Sitzungs-Historie. Die Funktion ist standardmäßig deaktiviert, kann jedoch zu Testzwecken aktiviert werden, indem die `browser.sessionhistory.max_viewers`-Einstellung auf eine Zahl ungleich null gesetzt wird.
- Verhalten bei anonymem FTP-Login-Fehler
  - : FTP-Benutzer werden nun aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS `@-moz-document` Regel zur URL-Musterübereinstimmung
  - : Die neue `@-moz-document`-Regel gibt den Benutzern die Möglichkeit, Seitenobjekte pro Site mithilfe von CSS abzugleichen. Dies macht es möglich, sitespezifische Regeln in Benutzerstylesheets (userContent.css) aufzunehmen. [Erläuterung von David Baron in `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
