---
title: Neuigkeiten in Deer Park Alpha
slug: Mozilla/Firefox/Releases/1.5/What_s_new_in_1.5_alpha
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{FirefoxSidebar}}

Diese Seite basiert größtenteils auf [https://www.squarefree.com/burningedg...eases/](https://www.squarefree.com/burningedge/releases/) (danke Jesse).

### Neue Funktionen für Webentwickler

#### HTML

- Elemente mit `tabindex="-1"` sollten fokussierbar sein
  - : Elemente mit einem negativen tabIndex-Attribut können nun fokussiert werden, auch wenn sie nicht in der Tab-Reihenfolge sind.
- Objekt sollte einreichen
  - : In Übereinstimmung mit der HTML4-Spezifikation können `<object>`-Elemente nun als Teil eines Formulars eingereicht werden.

#### CSS

- CSS2 Zitate-Verschachtelung
  - : Ab dieser Version wird die [`quotes`](/de/docs/Web/CSS/quotes) CSS2-Eigenschaft vollständig unterstützt, wobei das richtige Anführungszeichen (je nach Verschachtelungsebene) für open-quote und close-quote verwendet wird.
- CSS3 [`:only-child`](/de/docs/Web/CSS/:only-child)
  - : Dieser CSS3-Selektor ermöglicht das Auswählen eines Elements, das keine anderen Elemente als Geschwister im DOM hat.
- CSS3-Spalten
  - : Eine experimentelle Implementierung des vorgeschlagenen [CSS3 Mulitkolumnen-Layouts](https://drafts.csswg.org/css-multicol/) Entwurfs. Dies ermöglicht eine einfache Erstellung einer Zeitung-ähnlichen Mehrspaltenpräsentation.
- CSS3 `overflow-x` und `overflow-y` Eigenschaften
  - : Diese Eigenschaften können verwendet werden, um das Überlaufverhalten in horizontaler und vertikaler Richtung unabhängig zu steuern. Zum Beispiel könnte der Überlauf in horizontaler Richtung verborgen werden, während der Überlauf in vertikaler Richtung scrollbar ist.
- CSS3 Cursor
  - : Mehr [Namen für Mauszeiger](/de/docs/Web/CSS/cursor) werden jetzt unterstützt.
- URI-Werte auf CSS `cursor` Eigenschaften
  - : Auf Windows, OS/2 und Linux (Gtk+ 2.x) kann nun ein beliebiges Bild als Mauszeiger verwendet werden, während ein gegebenes DOM-Knotenpunkt schwebt. Jedes von Gecko unterstützte Bildformat kann für das Bild verwendet werden. (SVG, animierte GIFs und ANI Cursor werden nicht unterstützt.) Siehe {{CSSxRef("cursor")}} für eine Beschreibung der Funktion.
- `-moz-outline-radius`
  - : CSS-Konturen können jetzt abgerundete Ecken haben.
- CSS `outline` Eigenschaft
  - : [CSS-Konturen](/de/docs/Web/CSS/outline) können jetzt verwendet werden. Diese unterscheiden sich von Rahmen dadurch, dass sie das Seitenlayout nicht beeinflussen.
- Zähler in CSS-generierten Inhalten
  - : [CSS2 Zähler](/de/docs/Web/CSS/CSS_lists) werden jetzt vollständig unterstützt (die Implementierung entspricht nicht dem aktuellen CSS2.1-Entwurf, aber dem kommenden). Dies ermöglicht automatische Nummerierung von Abschnitten, Überschriften und so weiter über Stylesheets.

#### JavaScript und DOM

- Array-Zusätze
  - : Neue Methoden wurden dem Array-Objekt hinzugefügt, um häufige Aufgaben zu erleichtern. Siehe [JavaScript 1.5 Array-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `document.open("text/plain")`
  - : Text, der in neuen Dokumenten geschrieben wird, die mit document.open("text/plain") erstellt wurden, wird jetzt als Text behandelt, anstatt als HTML, sodass Zeilenumbrüche erhalten bleiben und Tags nicht geparst werden.
- XML-Ereignisse
  - : "XML-Ereignisse" ist eine W3C-Spezifikation, die XML-Sprachen die Möglichkeit bieten, deklarative Ereignislistener und -handler zu integrieren.
- Abbrechen des keydown
  - : Das Abbrechen des keydown-Ereignisses bricht nun ordnungsgemäß alle entsprechenden keyup/keypress-Ereignisse ab, gemäß der DOM-Spezifikation.
- Barrierefreiheits-APIs für DHTML
  - : Mozilla erlaubt jetzt DHTML-Autoren, Rolleninhalte und Zustandssemantik an benutzerdefinierte Elemente hinzuzufügen und diese Informationen über MSAA und ATK bereitzustellen.
- DHTML-Leistungsverbesserungen
  - : Eine Reihe von Änderungen wurden vorgenommen, um die Geschwindigkeit und Glätte von DHTML erheblich zu verbessern.

#### Grafiken

- SVG-Unterstützung
  - : SVG ist eine W3C-Spezifikation, die auflösungsunabhängige skalierbare Vektorgrafiken und ein DOM bereitstellt. Eine Technologie-Vorschau der nativen SVG-Unterstützung ist in dieser Version enthalten. Derzeit umfasst die SVG 1.1 Vollversion noch nicht alle Funktionen wie Filter, deklarative Animationen und SVG-definierte Schriftarten.
- `<canvas>` Unterstützung
  - : `<canvas>` ist eine skriptfähige Zeichenfläche zur dynamischen Erstellung von Bitmap-Grafiken. Für eine weiterführende Einführung siehe [Grafiken mit Canvas zeichnen](/en-US/Drawing_Graphics_with_Canvas).

#### Verschiedenes

- Unterstützung des HTTP/1.1 408-Statuscodes
  - : Eine beständige Verbindung wird nun korrekt geschlossen, wenn ein 408-Statuscode (Anforderungszeitüberschreitung) empfangen wird. Die Anforderung wird über eine neue Verbindung erneut versucht.
- URIs werden immer als UTF8 gesendet
  - : URIs werden nun immer als UTF8 an den Server gesendet, unabhängig von der Kodierung der verlinkten Seite. Dies behebt Probleme mit Bildern und Links auf Websites mit nicht-ASCII-Dateinamen.
- XForms-Unterstützung
  - : Die [XML-Formulare des W3C](https://www.w3.org/MarkUp/Forms/) ermöglichen das Schreiben komplexer Formulare in XML und umfassen Funktionen, die reguläre HTML-Formulare nicht haben, wie clientseitige Validierung gegen [XML Schema](https://www.w3.org/XML/Schema) und XML-Übermittlung/-Abruf. Die Unterstützung für XForms erfolgt als Erweiterung, siehe [Mozilla XForms Projektseite](/de/docs/Archive/Web/XForms).

### Neue Funktionen für Erweiterungsentwickler

- Versteckte Referrer-Spalte für den Verlauf

  - : Erweiterungen können nun auf die Referrer-Informationen für Seiten im Browser-Verlauf zugreifen. Diese Funktion kann verwendet werden, um alternative Verlaufsansichten und andere nützliche Funktionen bereitzustellen. [Firefox Bug 128398](https://bugzil.la/128398)

- API zur Priorisierung von HTTP-Verbindungen

  - : Die Mozilla-Netzwerkbibliothek unterstützt nun die Priorisierung von Verbindungen zu einem bestimmten Server mithilfe von `nsISupportsPriority`. [Firefox Bug 278531](https://bugzil.la/278531)

- API für die Verwaltung von Benutzer- und UA-Stylesheets

  - : Erweiterungen können nun Stylesheet-URIs als zusätzliche Benutzer- und UA-Stylesheets registrieren. Das bedeutet, dass Erweiterungen nicht mehr versuchen müssen, `userContent.css` zu bearbeiten, um Styling (zum Beispiel für die XBL-Bindungsanhängung) zu Webseiten hinzuzufügen. Siehe [Verwenden des Stylesheet-Service](/de/docs/Archive/Add-ons/Using_the_Stylesheet_Service).

- API zur Konfiguration von Proxys

  - : Es ist nun möglich, dass Erweiterungen die Proxy-Konfiguration einfach überschreiben, ohne die für den Nutzer sichtbaren Einstellungen zu beeinflussen. Siehe `nsIProtocolProxyService`, `nsIProtocolProxyFilter` und `nsIProtocolProxyCallback`. [Firefox Bug 282442](https://bugzil.la/282442)

- Dynamische Überlagerungen

  - : Das Laden von XUL-Überlagerungen nach der Anzeige des Dokuments wird jetzt unterstützt. Siehe `nsIDOMXULDocument`. [Firefox Bug 282103](https://bugzil.la/282103)

- ECMAScript für XML (E4X)

  - : Die Mozilla JavaScript-Engine unterstützt nun ECMAScript für XML (E4X), ein ECMA-Standard-Entwurf, der native XML-Datentypen zur Sprache hinzufügt und Operatoren für gängige XML-Operationen bereitstellt. Siehe [die ECMA-Spezifikation](https://ecma-international.org/publications-and-standards/standards/ecma-357/). [Firefox Bug 246441](https://bugzil.la/246441)

- Translucente Fenster (Windows/Linux)

  - : Auf Windows und Linux werden nun XUL-Fenster mit transparentem Hintergrund unterstützt. Dies ermöglicht, dass das, was sich unter dem Fenster befindet, durch den Fensterhintergrund hindurch scheint.

- Hinzufügen von Tokens zum User-Agent-String

  - : Es ist nun möglich, dass Anwendungen, Erweiterungen und Anbieter alle Tokens zum User-Agent-String hinzufügen können (mit Standardeinstellungen), ohne sich gegenseitig zu überschreiben.
    Siehe [Dokumentation](/de/docs/Web/HTTP/Reference/Headers/User-Agent). [Firefox Bug 274928](https://bugzil.la/274928)

- Toolkit-Chrome-Registrierung

  - : Die Chrome-Registrierung wurde erheblich verbessert, um einfache Klartext-Chrome-Registrierungs-Manifeste zu verwenden, und hält nicht mehr den Cache chrome.rdf/overlayinfo.
    Siehe [Chrome-Registrierung](/de/docs/Mozilla/Chrome_Registration).

- Erweiterungs-Manager

  - : Folgendes sind die neuen Funktionen:
    - Es ist jetzt möglich, Erweiterungen außerhalb des Profil- und Anwendungs-Erweiterungsverzeichnisses zu haben.
    - Installieren von Erweiterungen kann jetzt durch Einfügen einer XPI in das Profil- oder Anwendungs-Erweiterungsverzeichnis erfolgen.
    - Deinstallieren einer Erweiterung beinhaltet nun das Löschen ihres Ordners aus dem Profil- oder Anwendungs-Erweiterungsverzeichnis.

- Neue Präferenzbindungen

  - : Diese [neuen Bindungen](https://forums.mozillazine.org/viewtopic.php?t=263028) erleichtern das Erstellen von Präferenzfenstern für Erweiterungen. Die neuen Präferenzfenster unterstützen ein sofortiges Anwendungsverhalten, welches standardmäßig auf Mac und Linux aktiviert ist.

- API zur Implementierung neuer Befehlszeilen-Switches

  - : Eine API wurde eingeführt, damit Erweiterungen leicht komplexe Befehlszeilen-Flags behandeln können. Diese API wird stabil und für 1.1 eingefroren sein. Siehe die Schnittstellen `nsICommandLine` und `nsICommandLineHandler`.

- XTF-Unterstützung
  - : Das eXtensible Tag Framework ermöglicht das Hinzufügen von Unterstützung für neue Namensräume mit XPCOM-Komponenten zu Mozilla (geschrieben in JavaScript oder C++). Siehe [XTF-Startseite](https://web.archive.org/web/20070527160710/http://www.croczilla.com/xtf).

### Neue Browserfunktionen

#### Verbesserte Einstellungen

- Sofortiges Anwendungsverhalten auf Linux und Mac
  - : Änderungen, die im Einstellungsfenster vorgenommen werden, gelten nun sofort, im Einklang mit dem typischen Verhalten in anderen Mac OS X und GNOME-Anwendungen. Diese Änderung entspricht den Apple- und GNOME-Humaninterface-Guidelines.
- Durchsuchbarer Download-Aktionsmanager
  - : Es ist möglich, den Download-Aktionsmanager nach Dateierweiterung oder Beschreibung zu durchsuchen.
- Durchsuchbarer Cookie-Manager
  - : Cookies können nach Hostname/Domain und Cookiename durchsucht werden und sind nach Hostname in einer Baumstruktur statt in einer flachen Liste organisiert.

#### Bereitstellung

- Firefox MSI-Paket
  - : Das neue MSI-Installationspaket erleichtert die verteilte Installation und bietet mehr Flexibilität für Netzwerkadministratoren, die Firefox in einer Unternehmensumgebung bereitstellen möchten.
- Unterstützung für Profile-"Temp"-Verzeichnis im lokalen Dateisystem
  - : Es ist nun möglich, den Netzwerk-Cache (Kopien besuchter Webseiten) und den XUL-Fastload-Cache (vorkompilierter Benutzeroberfläche-Code) auf einer lokalen Festplatte zu speichern, während die restlichen Profildaten auf einem Netzlaufwerk verbleiben. Dies wird die Leistung erhöhen und den Netzwerkverkehr für Benutzer in einer Netzwerkumgebung reduzieren.

#### Sonstiges

- "Bereinigen"-Datenschutzfunktion
  - : Die "Bereinigen"-Funktion bietet eine einfache Möglichkeit, schnell den Browserverlauf, Cookies, Cache, gespeicherte Formulardaten und andere persönliche Daten zu entfernen. Die zu entfernenden Elemente können angepasst werden, und die Funktion kann entweder über eine Tastenkombination oder über ein Menüelement aktiviert werden.
- Bildminiaturen als Tab-Symbole
  - : Beim Betrachten von Bildern zeigen Tab-Symbole nun Miniaturen des angezeigten Bildes an.
- Schneller Rückwärts (und vorwärts)
  - : Diese sehr experimentelle Funktion ermöglicht eine viel schnellere Sitzungsverlauf-Navigation. Die Funktion ist standardmäßig deaktiviert, kann aber zu Testzwecken aktiviert werden, indem die Einstellung `browser.sessionhistory.max_viewers` auf eine von null verschiedene Zahl gesetzt wird.
- Verhalten beim Fehlschlagen der anonymen FTP-Anmeldung
  - : FTP-Benutzer werden nun aufgefordert, einen Namen und ein Passwort einzugeben, wenn der anonyme Zugriff fehlschlägt.
- CSS-At-Regel für das Matching von Seiten-/Dokumenten-URLs
  - : Die neue `@-moz-document`-Regel gibt Nutzern die Möglichkeit, Seitenobjekte per Site zu matchen, mithilfe von CSS. Dies ermöglicht es, sitespezifische Regeln in Benutzerstylesheets (userContent.css) einzubeziehen. [David Baron's Beitrag zu `www-style`](https://lists.w3.org/Archives/Public/www-style/2004Aug/0135.html) erklärt, wie die Regel verwendet werden kann.
