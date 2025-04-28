---
title: Code-Editoren
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Zuvor haben wir Ihnen gesagt, dass Sie einen Code-Editor installieren sollen, da Sie einen benötigen, um diesen Pfad zu durchlaufen. In diesem Artikel betrachten wir Code-Editoren detaillierter und geben Ihnen eine Vorstellung davon, was sie für Sie tun können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computer-Betriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Welche Code-Editoren verfügbar sind und welcher für Ihre Zwecke geeignet ist.</li>
          <li>Was ein grundlegender Code-Editor leisten kann.</li>
          <li>Was Code-Editor-Erweiterungen leisten können und wie man eine installiert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Code-Editoren sind verfügbar?

Bevor Sie mit dem Programmieren beginnen, haben Sie möglicherweise einige Erfahrungen mit dem Erstellen von Textdokumenten in einem Programm wie Microsoft Word gemacht. Sie fragen sich vielleicht auch, ob Sie auch in diesen Programmen mit Code arbeiten können. Leider ist die Antwort „nicht wirklich“:

- Programme wie Microsoft Word sind **Binärdatei**-Editoren; ihre Dateien enthalten ein Nicht-Text-Format, das nur von diesen Programmen verstanden werden kann. Quellcode von Webseiten hingegen wird als Klartext gespeichert.
- Word _kann_ Klartextdateien öffnen und bearbeiten, geht aber nicht gut damit um. Es hat keine Funktionen, die für die Arbeit mit Code gedacht sind – es ist zum Schreiben von Dokumenten wie Briefen und Berichten gedacht. Sie benötigen ein Programm, das darauf ausgelegt ist, Klartext sauber zu verarbeiten und auszugeben und mit Code zu arbeiten.

Wahrscheinlich haben Sie bereits einen Klartext-Editor auf Ihrem Computer. Standardmäßig enthält Windows [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) und macOS kommt mit [TextEdit](https://en.wikipedia.org/wiki/TextEdit). Linux-Distributionen variieren; die Ubuntu 22.04 LTS-Version kommt standardmäßig mit dem [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor). Standard-OS-Klartext-Editoren können in Ordnung sein, bieten jedoch eine begrenzte Funktionspalette.

Sie sind besser dran mit einem vollwertigen Code-Editor wie [Visual Studio Code](https://code.visualstudio.com/) (plattformübergreifend, kostenlos), [Sublime Text](https://www.sublimetext.com/) (plattformübergreifend, kostenpflichtig) oder [Notepad++](https://notepad-plus-plus.org/) (Windows, kostenlos).

Wir empfehlen Visual Studio Code (VS Code), da wir diesen Editor hauptsächlich verwenden. Wenn Sie VS Code (oder einen anderen Code-Editor) noch nicht installiert haben, sollten Sie [es vor dem Fortfahren installieren](https://code.visualstudio.com/).

> [!NOTE]
> Integrierte Entwicklungsumgebungen (IDEs) wie [NetBeans](https://netbeans.apache.org/front/main/index.html) (plattformübergreifend, kostenlos) und [WebStorm](https://www.jetbrains.com/webstorm/) (plattformübergreifend, kostenpflichtig) haben tendenziell mehr Funktionen als einfache Code-Editoren, sind jedoch tendenziell komplexer als das, was Sie zu diesem Zeitpunkt in Ihrem Lernpfad benötigen.

## Grundlegende Funktionalität von Code-Editoren

In diesem Abschnitt betrachten wir einige der wichtigsten Funktionen, die Sie in Code-Editoren finden, und beschreiben, wie sie Ihnen bei der Programmierarbeit helfen können.

> [!NOTE]
> Die folgenden Abschnitte kratzen nur an der Oberfläche dessen, was ein Code-Editor leisten kann. Eine vollständigere Funktionsliste finden Sie in der [Visual Studio Code-Dokumentation](https://code.visualstudio.com/docs) (oder suchen Sie im Internet nach der Dokumentation Ihres gewählten Code-Editors, wenn Sie einen anderen verwenden).

> [!NOTE]
> Wenn Sie ein reiner Tastaturnutzer sind, beachten Sie, dass VS Code über eine leistungsstarke Sammlung von Tastenkombinationen verfügt. Sehen Sie sich die VS Code [Standard-Tastenkombinationsreferenz](https://code.visualstudio.com/docs/reference/default-keybindings) an.

### Dateien öffnen und bearbeiten

Dies mag offensichtlich erscheinen, aber die Installation eines Code-Editors ist nützlich, da Sie eine einzige Anwendung erhalten, die alle Code-Dateien öffnet, die Sie in Ihrer Entwicklungsarbeit verwenden möchten. Es gibt nichts Ärgerlicheres, als auf eine Datei auf Ihrem Computer doppelt zu klicken und sie in einer zufälligen, nicht verwandten App zu öffnen, oder dass Ihr Betriebssystem Ihnen sagt, dass es diese Datei nicht erkennt.

Dies sollte alles automatisch geschehen, wenn Sie VS Code installieren, aber wenn Sie immer noch Probleme mit bestimmten Dateitypen haben, können Sie manuell einstellen, dass sie über diese App geöffnet werden. Dies kann je nach Betriebssystem variieren. Um dies herauszufinden, gehen Sie zu Ihrer bevorzugten Suchmaschine und suchen nach "choose what application opens a file type &lt;OS-name-and-number>" — zum Beispiel "choose what application opens a file type windows 11", wenn Sie auf Windows 11 sind.

In unserem nächsten Artikel finden Sie viele weitere Informationen über das Öffnen und Bearbeiten von Dateien und Ordnern.

### Syntaxhervorhebung

Code-Editoren wie VS Code bieten die Syntaxhervorhebung — das bedeutet, dass erkannte Code-Features in verschiedenen Farben angezeigt werden. Dies macht den Code viel lesbarer, als ihn in nur einer Farbe einzufärben. Lassen Sie uns die folgende JavaScript-Funktion als Beispiel verwenden:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Sie müssen jetzt nicht verstehen, was dieser Code tut, aber Sie können bereits sehen, wie die Syntaxhervorhebung oben aussieht. Ja, auch wir bieten Syntaxhervorhebung auf MDN!

Lassen Sie uns eine Übung in VS Code versuchen:

1. Kopieren Sie das obige Code-Beispiel in Ihre Zwischenablage (MDN-Codeblöcke haben ein Kopiersymbol in der oberen rechten Ecke, das Sie drücken können, um dies zu tun).
2. Öffnen Sie VS Code und erstellen Sie eine neue Datei, indem Sie _Datei_ > _Neue Datei..._ wählen.
3. Klicken Sie in der neuen Datei auf den Text _Sprache auswählen_ und wählen Sie _JavaScript_ aus dem Dropdown-Menü, das sich öffnet.
4. Fügen Sie den Code in die neue Datei ein, um zu sehen, wie die JavaScript-Syntaxhervorhebung von VS Code aussieht.

VS Code bietet auch andere Syntax-Features. Zum Beispiel:

- Sie sehen eine dünne vertikale Linie, die von dem `function`-Schlüsselwort zur schließenden geschweiften Klammer (`}`) verläuft – diese Linien werden verwendet, um verschiedene [Einrückungsstile](https://en.wikipedia.org/wiki/Indentation_style) im Code zu markieren, was es einfacher macht, zu erkennen, wo Blöcke beginnen und enden.
- Versuchen Sie auch, den blinkenden Textcursor über die öffnende oder schließende geschweifte Klammer (`{` oder `}`) zu bewegen – Sie werden sehen, dass beide hervorgehoben werden. Dies hilft auch, den Anfang und das Ende von Blöcken zu identifizieren und ist nützlich, wenn Sie versuchen, herauszufinden, wo Ihnen ein Zeichen fehlt, wenn Sie eine kompliziertere Struktur mit vielen verschachtelten Blöcken haben. Diese Hervorhebung funktioniert auch mit anderen Trennzeichen wie Klammern (`(` und `)`) und eckigen Klammern (`[` und `]`).

### Code-Vervollständigung/Vorschläge

Wenn Sie Code in einen Code-Editor eingeben, kann er oft vorschlagen, was Sie als Nächstes eingeben sollten, und einige Standardcodes für Sie ausfüllen (was bedeutet, dass immer derselbe Code verwendet wird).

Probieren Sie dies jetzt in VS Code aus:

1. Kehren Sie zu der JavaScript-Datei zurück, die Sie im vorherigen Abschnitt erstellt haben.
2. Gehen Sie zum Ende der Datei und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> ein paar Mal, um sicherzustellen, dass Sie eine neue Zeile beginnen.
3. Beginnen Sie, "function" einzugeben - eine Liste von Optionen sollte rechts von Ihrem Text in einer Liste erscheinen.
4. Wählen Sie die _function_ Option mit _Function Statement_ auf der rechten Seite aus. Es wird den folgenden Code für Sie ausfüllen:

   ```js-nolint
   function name(params) {

   }
   ```

5. Klicken Sie innerhalb der Funktion auf die leere Zeile zwischen den beiden geschweiften Klammern. Beginnen Sie, "document" einzugeben, und Sie erhalten erneut eine Liste von Optionen. Wählen Sie die erste Option aus. Dies ist ein Verweis auf das [`Document`](/de/docs/Web/API/Document)-Objekt (machen Sie sich derzeit keine Sorgen darüber, was das bedeutet).
6. Geben Sie direkt nach `document` einen Punkt (`.`) ein – Sie erhalten erneut eine Liste von Optionen, diesmal mit allen Eigenschaften und Methoden, die auf dem `document`-Objekt verfügbar sind!

Das reicht für jetzt. Lassen Sie uns fortfahren.

### Debug-Hilfe

Code-Editoren können nicht automatisch alle Ihre Codeprobleme beheben, aber sie können Ihnen sicherlich dabei helfen, Tippfehler und andere einfache Fehler zu finden. Schauen wir uns ein paar Beispiele an.

1. Gehen Sie zurück zu Ihrer JavaScript-Datei und löschen Sie den gesamten Code, den Sie derzeit dort haben. Ersetzen Sie ihn durch Folgendes:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Das kleine Kreuzsymbol rechts neben der obigen Codeauflistung ist MDNs Weg, ein schlechtes Codebeispiel anzuzeigen, und das zu Recht – im obigen Code gibt es drei Fehler! Schauen Sie sich die Hervorhebung von VS Code an, um zu sehen, ob Sie erkennen können, wie es die Fehler hervorgehoben hat, dann gehen wir sie gemeinsam durch und beheben sie.
3. Der erste Fehler ist, dass wir `name` auf der ersten Linie verwendet haben, aber `Name` auf der zweiten Linie, um sich auf dieselbe Variable zu beziehen. Dies ist ein Problem, da JavaScript zwischen Groß- und Kleinschreibung unterscheidet und daher davon ausgeht, dass es sich um zwei verschiedene Namen handelt. VS Code hat dies auf zwei verschiedene Arten hervorgehoben – indem es `name` dunkelgrau färbt, um anzuzeigen, dass der Wert deklariert, aber nie verwendet wird (oft ein guter Hinweis darauf, dass Sie irgendwo einen Tippfehler gemacht haben), und indem es drei Punkte unter `Name` setzt, um anzuzeigen, dass es einen Verbesserungsvorschlag für den Code hat (in diesem Fall, ob Sie möglicherweise `name` schreiben wollten). Um diesen Fehler zu beheben, ändern Sie `Name` in `name`.
   > [!NOTE]
   > Sie können mit dem Mauszeiger über jede der hervorgehobenen Stellen fahren, um weitere Informationen zu erhalten.
4. Der zweite Fehler befindet sich in der sechsten Zeile, in der wir `"Chris` schreiben. In JavaScript muss ein Textstück (bekannt als **String**) in zwei Anführungszeichen eingeschlossen sein, aber das zweite fehlt. VS Code hat dies hervorgehoben, indem es den Text an der Stelle unterstrichen hat, an der der Fehler zuerst bemerkt wurde (dies ist möglicherweise nicht der exakte Ort, an dem der Fehler tatsächlich ist) mit einer wellenförmigen roten Linie, ähnlich der, die in Microsoft Word verwendet wird, um Rechtschreibfehler hervorzuheben. Um dies zu beheben, aktualisieren Sie `"Chris` in `"Chris"`.
5. Auf der letzten Zeile bleibt ein kleines Stück rote wellenförmige Unterstreichung in der Nähe des Endes, selbst nachdem wir den vorherigen Fehler behoben haben. Dies liegt an dem dritten Fehler – in JavaScript benötigt eine öffnende Klammer immer eine dazugehörige schließende Klammer. Beheben Sie dies, indem Sie `(helloChris` in `(helloChris)`aktualisieren.

### Suchen und ersetzen

Jeder lohnenswerte Code-Editor verfügt über eine robuste Such- und Ersetzen-Funktion. Dies ist nützlich, wenn Sie beispielsweise feststellen, dass ein Fehler in einer bestimmten Funktion auftritt und Sie ihn in Ihrem Code finden möchten, oder wenn Sie den Namen einer Variablen ändern möchten und sicherstellen müssen, dass er in allen Referenzen geändert wird.

Das Konzept von Suchen und Ersetzen sollte Ihnen ziemlich vertraut sein, wenn Sie zuvor einen Computer verwendet haben, aber lassen Sie es uns aus Gründen der Vollständigkeit schnell erkunden:

1. Gehen Sie in Ihrer JavaScript-Datei in VS Code und öffnen Sie das Suchen- und Ersetzen-Panel im Suchmodus, indem Sie _Bearbeiten_ > _Suchen_ aus dem Menü wählen.
2. Geben Sie `createGreeting` in das _Suchen_ Feld ein — Sie werden sehen, dass beide Instanzen hervorgehoben sind, und Sie können mit den Auf- und Abwärtspfeilen im Panel zwischen ihnen navigieren. Die aktuell aktiv hervorgehobene Instanz hat die hellere Hervorhebung.
3. Öffnen Sie nun das Suchen- und Ersetzen-Panel im Ersetzen-Modus, indem Sie _Bearbeiten_ > _Ersetzen_ aus dem Menü wählen, oder klicken Sie auf den Pfeil links vom _Suchen_ Feld.
4. Geben Sie `sayHello` in das _Ersetzen_ Feld ein, das nun sichtbar sein sollte.
5. Sie können jetzt alle Instanzen von `createGreeting` im Code mit `sayHello` ersetzen, indem Sie die beiden Schaltflächen rechts vom _Ersetzen_ Feld verwenden. Der linke Knopf bewegt sich mit einem Klick zur nächsten Instanz der Suchzeichenfolge und ersetzt sie mit einem zweiten Klick. Der rechte Knopf ersetzt alle Instanzen mit einem einzigen Klick.

VS Code verfügt über viele leistungsstarke Such- und Ersetzen-Funktionen — siehe [Suchen und Ersetzen](https://code.visualstudio.com/docs/editing/codebasics#_find-and-replace).

## Erweiterung Ihres Code-Editors mit Erweiterungen

Die meisten Code-Editoren verfügen über ein Erweiterungs- oder Plugin-System, das es Ihnen ermöglicht, dem Programm Funktionen hinzuzufügen, die standardmäßig nicht verfügbar sind. Diese können verschiedene Aufgaben erfüllen, wie zum Beispiel:

- Code-Vervollständigungs-, Linting- oder Debugging-Funktionalität für Sprachen aktivieren, die standardmäßig nicht unterstützt werden, oder zusätzliche Funktionalität für diejenigen bereitstellen, die es sind.
- Ihnen die Nutzung der Funktionalität anderer Werkzeuge direkt im Code-Editor ermöglichen, wie etwa Versionskontrollwerkzeuge oder lokale Testserver.
- Zusätzliche Benutzeroberflächen- oder Code-Hervorhebungs-Themes/Farbschemata bereitstellen.
- Code-Snippets vorschlagen, um Anforderungen zu erfüllen. Diese können von statischen Vorlagen oder über KI-Tools generiert werden. Die Verwendung von KI zur Generierung von Code-Snippets hat viele der gleichen Vorteile und Vorbehalte wie die Verwendung von KI zur Generierung von Suchergebnissen (siehe [Informationen suchen > Verwendung von KI](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) für weitere Informationen).

Die VS Code-Erweiterungen werden über das Extensions Marketplace-Panel in VS Code verwaltet, das über das Menü _Ansicht_ > _Erweiterungen_ aufgerufen wird. Lassen Sie uns es jetzt erkunden.

1. Öffnen Sie das Extensions Marketplace-Panel.
2. Geben Sie in das _Suche..._ Feld oben im Panel "JavaScript" ein, um zu sehen, welche JavaScript-bezogenen Erweiterungen verfügbar sind. Versuchen Sie, auf einige der Suchergebnisse zu klicken, die erscheinen, um zu sehen, welche Arten von Funktionen sie bereitstellen. Installieren Sie jetzt keine von ihnen.
3. Lassen Sie uns stattdessen eine Erweiterung installieren, die leicht zu verstehen ist und für praktisch jede Code-Datei, die Sie in diesem Modulsatz bearbeiten, nützlich sein wird. Geben Sie "Prettier" in das _Suche..._ Feld ein und klicken Sie auf das Ergebnis _Prettier - code formatter_. Wenn die [Prettier](https://prettier.io/) Erweiterung installiert ist, kann sie verwendet werden, um Ihren Code jedes Mal, wenn Sie eine Datei speichern, zu formatieren, dadurch wird Ihr Code viel lesbarer.
4. Klicken Sie auf die Schaltfläche _Installieren_ auf dem _Erweiterungstab_. Schließen Sie den Tab, wenn die Installation abgeschlossen ist.
5. Damit Prettier funktioniert, müssen Sie ein paar Einstellungen aktualisieren. Öffnen Sie den VS Code Einstellungs-Tab (_Code_ > _Einstellungen..._ > _Einstellungen_ auf macOS, _Datei_ > _Einstellungen_ > _Einstellungen_ auf Windows).
6. Geben Sie im _Einstellungen durchsuchen_ Feld oben "formatter" ein, um die Einstellungen-Liste herauszufiltern und nur die anzuzeigen, die "formatter" enthalten.
7. Finden Sie die _Editor: Standard-Formatter_ Option und wählen Sie die _Prettier - Code formatter_ Option aus dem zugehörigen Dropdown-Menü.
8. Finden Sie die _Editor: Formatierung beim Speichern_ Option und aktivieren Sie sie durch Klicken auf das Kontrollkästchen.
9. Schließen Sie den _Einstellungen_ Tab.

Das ist die gesamte Einrichtung; lassen Sie uns Prettier in Aktion sehen.

1. Gehen Sie zurück zur Tab der JavaScript-Datei und speichern Sie sie (_Datei_ > _Speichern_). Die Datei muss gespeichert sein, damit Prettier funktioniert. Nennen Sie sie `test.js`. Der Speicherort spielt keine Rolle.
2. Ersetzen Sie den aktuellen Inhalt durch den folgenden Code:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Speichern Sie die Datei erneut; an diesem Punkt sollte Prettier den Code schön neu formatieren, so:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
