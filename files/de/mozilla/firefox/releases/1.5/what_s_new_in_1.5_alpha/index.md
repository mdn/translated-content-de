---
title: Neuerungen in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: f5ea8950d5cc7bc42691e0bb8a3e634160814bac
---

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke, Jesse).

## Neue Funktionen für Webentwickler

### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen `tabIndex`-Attribut können jetzt den Fokus erhalten, auch wenn sie nicht in der Tabulatorreihenfolge enthalten sind.
- Object sollte übermittelt werden
  - : Gemäß der HTML4-Spezifikation können `<object>`-Elemente jetzt als Teil eines Formulars übermittelt werden.

### CSS

- CSS2-Verschachtelung von Anführungszeichen
  - : Ab dieser Version wird die CSS2-Eigenschaft [`quotes`](/de/docs/Web/CSS/Reference/Properties/quotes) vollständig unterstützt, wobei für `open-quote` und `close-quote` das korrekte Anführungszeichen (abhängig von der Verschachtelungsebene) verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/Reference/Selectors/:only-child)
  - : Dieser CSS3-Selektor ermöglicht die Auswahl eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen Entwurfs für [CSS3-Multispaltenlayout](https://drafts.csswg.org/css-multicol/). Dies ermöglicht auf einfache Weise eine mehrspaltige Darstellung im Zeitungsstil.
- CSS3-Eigenschaften `overflow-x` und `overflow-y`
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung teilweise unabhängig voneinander zu steuern. Beispielsweise kann der Überlauf in horizontaler Richtung ausgeblendet werden, während in vertikaler Richtung gescrollt werden kann.
- CSS3-Cursor
  - : Weitere [Mauszeigernamen](/de/docs/Web/CSS/Reference/Properties/cursor) werden jetzt unterstützt.
- URI-Werte für CSS-Eigenschaften `cursor`
  - : Unter Windows, OS/2 und Linux (Gtk+ 2.x) kann jetzt ein beliebiges Bild als Mauszeiger verwendet werden, während ein bestimmter DOM-Knoten mit der Maus überfahren wird.
    Für das Bild kann jedes von Gecko unterstützte Bildformat verwendet werden.
    (SVG, animierte GIFs und ANI-Cursor werden nicht unterstützt.)
    Eine Beschreibung der Funktion finden Sie unter {{CSSxRef("cursor")}}.
- `-moz-outline-radius`
  - : CSS-Konturen können jetzt abgerundete Ecken haben.
- CSS-Eigenschaft `outline`
  - : [CSS-Konturen](/de/docs/Web/CSS/Reference/Properties/outline) können jetzt verwendet werden. Sie unterscheiden sich von Rahmen dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2-Zähler](/de/docs/Web/CSS/Guides/Lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, aber dem kommenden). Dies ermöglicht die automatische Nummerierung von Abschnitten, Überschriften usw. über Stylesheets.

### JavaScript und DOM

- Array-Erweiterungen
  - : Dem Array-Objekt wurden neue Methoden hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript-1.5-Array-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit `document.open("text/plain")` erstellt wurden, wird jetzt als Text statt als HTML behandelt. Dadurch bleiben Zeilenumbrüche erhalten und Tags werden nicht geparst.
- XML Events
  - : „XML Events“ ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit bietet, deklarative Event Listener und Event Handler zu integrieren.
- Abbrechen von `keydown`
  - : Das Abbrechen des `keydown`-Ereignisses bricht jetzt gemäß der DOM-Spezifikation auch alle entsprechenden `keyup`-/`keypress`-Ereignisse ordnungsgemäß ab.
- Barrierefreiheits-APIs für DHTML
  - : Mozilla ermöglicht DHTML-Autoren jetzt, benutzerdefinierten Elementen Rollen- und Zustandssemantik hinzuzufügen, und stellt diese Informationen über MSAA und ATK bereit.
- DHTML-Leistungsverbesserungen
  - : Es wurden mehrere Änderungen vorgenommen, um Geschwindigkeit und Flüssigkeit von DHTML erheblich zu verbessern.

### Grafik

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation für auflösungsunabhängige skalierbare Vektorgrafiken einschließlich eines DOM. Diese Version enthält eine Technologie-Vorschau der nativen SVG-Unterstützung. Derzeit wird eine Teilmenge von SVG 1.1 Full unterstützt; fehlende Funktionen umfassen Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>`-Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zum dynamischen Erstellen von Bitmap-Grafiken. Eine weiterführende Einführung finden Sie unter [Grafiken mit Canvas zeichnen](/de/docs/Web/API/Canvas_API/Tutorial).

### Verschiedenes

- Unterstützung für HTTP/1.1-Antwortcode 408
  - : Eine persistente Verbindung wird jetzt korrekt geschlossen, wenn ein 408-Antwortcode (Request timeout) empfangen wird. Die Anfrage wird über eine neue Verbindung erneut versucht.
- URIs werden immer als UTF8 gesendet
  - : URIs werden jetzt unabhängig von der Kodierung der verlinkenden Seite immer als UTF8 an den Server gesendet. Dies behebt Bilder und Links auf Websites mit Nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die Sprache [XML Forms des W3C](https://www.w3.org/MarkUp/Forms/) ermöglicht das Schreiben komplexer Formulare in XML und umfasst Funktionen, die reguläre HTML-Formulare nicht besitzen, etwa clientseitige Validierung anhand von [XML Schema](https://www.w3.org/XML/Schema) sowie XML-Übermittlung und -Abruf. Die Unterstützung für XForms wird als Erweiterung bereitgestellt; siehe [Mozilla-XForms-Projektseite](https://www-archive.mozilla.org/projects/xforms/).

## Neue Funktionen für Erweiterungsentwickler

- Ausgeblendete Referrer-Spalte für den Verlauf
  - : Erweiterungen können jetzt auf die Referrer-Informationen für Seiten zugreifen, die im Browserverlauf gespeichert sind. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox-Bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen
  - : Die Mozilla-Netzwerkbibliothek unterstützt jetzt die Priorisierung von Verbindungen zu einem bestimmten Server mit `nsISupportsPriority`. [Firefox-Bug 278531](https://bugzil.la/278531)

- API zur Verwaltung von Benutzer- und UA-Stylesheets
  - : Erweiterungen können jetzt Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Webseiten Styling hinzuzufügen, beispielsweise für das Anhängen von XBL-Bindungen. Siehe [Using the Stylesheet Service](https://web.archive.org/web/20210413211020/https://developer.mozilla.org/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys
  - : Erweiterungen können jetzt die Proxy-Konfiguration einfach überschreiben, ohne sichtbare Benutzereinstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox-Bug 282442](https://bugzil.la/282442)

- Dynamische Overlays
  - : Das Laden von XUL-Overlays, nachdem das Dokument angezeigt wurde, wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox-Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)
  - : Die Mozilla-JavaScript-Engine unterstützt jetzt ECMAScript für XML (E4X), einen ECMA-Standardentwurf, der der Sprache native XML-Datentypen hinzufügt und Operatoren für häufige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox-Bug 246441](https://bugzil.la/246441)

- Durchscheinende Fenster (Windows/Linux)
  - : Unter Windows und Linux werden jetzt XUL-Fenster mit transparentem Hintergrund unterstützt. Dadurch kann alles, was sich hinter dem Fenster befindet, durch dessen Hintergrund hindurchscheinen.

- Tokens zur User-Agent-Zeichenfolge hinzufügen
  - : Anwendungen, Erweiterungen und Anbieter können jetzt alle Tokens zur User-Agent-Zeichenfolge hinzufügen (mithilfe von Standardeinstellungen), ohne sich gegenseitig zu überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox-Bug 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registrierung
  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungsmanifeste zu verwenden, und behält den Cache `chrome.rdf/overlayinfo` nicht mehr bei.
    Siehe [Chrome Registration](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/de/docs/Mozilla/Chrome_Registration).

- Extension Manager
  - : Folgende neue Funktionen stehen zur Verfügung:
    - Erweiterungen können jetzt außerhalb der Profil- und Anwendungs-Erweiterungsverzeichnisse liegen.
    - Erweiterungen können jetzt installiert werden, indem eine XPI-Datei in das Profil- oder Anwendungs-Erweiterungsverzeichnis abgelegt wird.
    - Die Deinstallation einer Erweiterung erfolgt jetzt durch Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Preferences-Bindungen
  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Einstellungsfenstern für Erweiterungen. Die neuen Einstellungsfenster unterstützen das Sofortübernahme-Verhalten, das auf Mac und Linux standardmäßig aktiviert ist.

- API zur Implementierung neuer Befehlszeilenoptionen
  - : Es wurde eine API eingeführt, mit der Erweiterungen komplexe Befehlszeilen-Flags einfach verarbeiten können. Diese API wird für 1.1 stabil und eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht es, Mozilla mithilfe von XPCOM-Komponenten (geschrieben in JavaScript oder C++) Unterstützung für neue Namespaces hinzuzufügen. Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

## Neue Browserfunktionen

### Verbesserte Einstellungen

- Sofortübernahme-Verhalten unter Linux und Mac
  - : Änderungen im Einstellungsfenster werden jetzt sofort angewendet, entsprechend dem typischen Verhalten anderer Mac-OS-X- und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Richtlinien für Benutzeroberflächen.
- Durchsuchbarer Download-Actions-Manager
  - : Der Download-Actions-Manager kann nach Dateierweiterung oder Beschreibung durchsucht werden.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domain und Cookie-Name durchsucht werden und werden nach Hostname in einer Baumstruktur statt in einer flachen Liste organisiert.

### Bereitstellung

- Firefox-MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten, größere Flexibilität.
- Unterstützung für das Profilverzeichnis „temp“ im lokalen Dateisystem
  - : Es ist jetzt möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzeroberflächencode) auf einem lokalen Laufwerk zu speichern, während die restlichen Profildaten auf einem Netzlaufwerk verbleiben. Dies erhöht die Leistung und reduziert den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung.

### Weitere

- Datenschutzfunktion „Sanitize“
  - : Die Funktion „Sanitize“ bietet eine einfache Möglichkeit, schnell den Browserverlauf, Cookies, Cache, gespeicherte Formularinformationen und andere persönliche Daten zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder einen Menüeintrag aktiviert werden.
- Bildminiaturen als Tab-Symbole
  - : Beim Anzeigen von Bildern zeigen Tab-Symbole jetzt Miniaturen des angezeigten Bildes.
- Schnelles Zurück- und Vorwärtsnavigieren
  - : Diese sehr experimentelle Funktion ermöglicht eine deutlich schnellere Navigation im Sitzungsverlauf. Die Funktion ist standardmäßig deaktiviert, kann jedoch zu Testzwecken aktiviert werden, indem die Einstellung `browser.sessionhistory.max_viewers` auf eine Zahl ungleich null gesetzt wird.
- Verhalten bei fehlgeschlagener anonymer FTP-Anmeldung
  - : FTP-Benutzer werden jetzt aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-At-Regel zum Abgleichen mit Website-/Dokument-URL
  - : Die neue Regel `@-moz-document` ermöglicht es Benutzern, Seitenobjekte mit CSS pro Website abzugleichen. Dadurch können websitespezifische Regeln in Benutzer-Stylesheets (`userContent.css`) aufgenommen werden. [David Barons Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erläutert, wie die Regel verwendet werden kann.
