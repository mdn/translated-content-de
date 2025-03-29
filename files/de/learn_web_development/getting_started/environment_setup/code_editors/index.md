---
title: Code-Editor
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Zuvor haben wir Ihnen gesagt, dass Sie einen Code-Editor installieren sollen, da Sie einen benötigen, um diesen Pfad zu durchlaufen. In diesem Artikel schauen wir uns Code-Editoren genauer an und geben Ihnen eine Vorstellung, was sie für Sie tun können.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende Vertrautheit mit Ihrem Computerbetriebssystem.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Welche Code-Editoren verfügbar sind und welcher für Ihre Zwecke geeignet ist.</li>
          <li>Was ein grundlegender Code-Editor kann.</li>
          <li>Was Code-Editor-Erweiterungen können und wie man eine installiert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Code-Editoren sind verfügbar?

Bevor Sie mit dem Codieren beginnen, haben Sie möglicherweise bereits einige Erfahrungen mit der Arbeit an Textdokumenten in einem Programm wie Microsoft Word gemacht. Sie fragen sich vielleicht auch, ob Sie mit Code in denselben Programmen arbeiten können. Leider lautet die Antwort "nicht wirklich":

- Programme wie Microsoft Word sind **binäre Datei**-Editoren; ihre Dateien enthalten ein Nicht-Text-Format, das nur von diesen Programmen verstanden werden kann. Quellcode von Websites wird hingegen als reiner Text gespeichert.
- Word _kann_ reine Textdateien öffnen und bearbeiten, aber es geht damit nicht sehr gut um. Es ist nicht mit einem Funktionsumfang ausgestattet, der für die Arbeit mit Code ausgelegt ist — es ist zum Schreiben von Dokumenten wie Briefen und Berichten gedacht. Sie benötigen ein Programm, das darauf ausgelegt ist, reinen Text sauber zu handhaben und auszugeben sowie mit Code zu arbeiten.

Sie haben wahrscheinlich bereits einen reinen Texteditor auf Ihrem Computer. Standardmäßig enthält Windows [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad), und macOS kommt mit [TextEdit](https://en.wikipedia.org/wiki/TextEdit). Linux-Distributionen variieren; die Ubuntu 22.04 LTS-Version kommt standardmäßig mit dem [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor). Standard-OS-Texteditoren können in Ordnung sein, aber sie haben auch einen begrenzten Funktionsumfang.

Es ist besser, einen vollwertigen Code-Editor wie [Visual Studio Code](https://code.visualstudio.com/) (multiplattform, kostenlos), [Sublime Text](https://www.sublimetext.com/) (multiplattform, nicht kostenlos) oder [Notepad++](https://notepad-plus-plus.org/) (Windows, kostenlos) zu verwenden.

Wir empfehlen Visual Studio Code (VS Code), da wir diesen Editor hauptsächlich verwenden. Wenn Sie VS Code (oder einen anderen Code-Editor) noch nicht installiert haben, sollten Sie [es installieren, bevor Sie fortfahren.](https://code.visualstudio.com/).

> [!NOTE]
> Integrierte Entwicklungsumgebungen (IDEs) wie [NetBeans](https://netbeans.apache.org/front/main/index.html) (multiplattform, kostenlos) und [WebStorm](https://www.jetbrains.com/webstorm/) (multiplattform, nicht kostenlos) haben in der Regel mehr Funktionen als einfache Code-Editoren, neigen jedoch dazu, komplexer zu sein, als Sie es zu diesem Zeitpunkt Ihrer Lernreise benötigen.

## Grundlegende Funktionen eines Code-Editors

In diesem Abschnitt betrachten wir einige der wichtigsten Funktionen, die Sie in Code-Editoren finden werden, und beschreiben, wie sie Ihnen bei Ihrer Codierung helfen können.

> [!NOTE]
> Die folgenden Abschnitte kratzen nur an der Oberfläche dessen, was ein Code-Editor leisten kann. Für eine vollständigere Feature-Liste siehe die [Visual Studio Code-Dokumentation](https://code.visualstudio.com/docs) (oder suchen Sie im Internet nach der Dokumentation Ihres gewählten Code-Editors, wenn Sie etwas anderes verwenden).

> [!NOTE]
> Wenn Sie ein reiner Tastatur-Benutzer sind, beachten Sie, dass VS Code eine leistungsstarke Sammlung von Tastenkombinationen hat. Siehe das VS Code [Referenzdokument zu den Standard-Tastenkombinationen](https://code.visualstudio.com/docs/reference/default-keybindings).

### Öffnen und Bearbeiten von Dateien

Dies mag offensichtlich erscheinen, aber die Installation eines Code-Editors ist nützlich, da er Ihnen eine einzige App bietet, die alle Code-Dateien öffnen kann, die Sie möglicherweise während Ihrer Entwicklungsarbeit verwenden möchten. Es gibt nichts Ärgerlicheres, als eine Datei auf Ihrem Computer doppelt anzuklicken und sie in einer zufälligen, nicht zusammenhängenden App geöffnet zu bekommen oder dass Ihr Betriebssystem Ihnen mitteilt, dass es diese Datei nicht erkennt.

Dies sollte alles automatisch geschehen, wenn Sie VS Code installieren, aber wenn Sie immer noch Probleme mit bestimmten Dateitypen haben, können Sie manuell einstellen, dass sie über diese App geöffnet werden. Dies kann je nach Betriebssystem variieren. Um herauszufinden, wie das geht, gehen Sie zu Ihrer bevorzugten Suchmaschine und suchen Sie nach "Wählen Sie, welche Anwendung einen Dateityp öffnet &lt;OS-Name-und-Nummer>" — zum Beispiel "Wählen Sie, welche Anwendung einen Dateityp unter Windows 11 öffnet", wenn Sie Windows 11 verwenden.

Sie finden viel mehr Informationen über das Öffnen und Bearbeiten von Dateien und Ordnern in unserem nächsten Artikel.

### Syntaxhervorhebung

Code-Editoren wie VS Code bieten Syntaxhervorhebung — das bedeutet, erkannte Code-Features werden in verschiedenen Farben dargestellt. Dies macht den Code viel leichter lesbar, als wenn er in einer einzigen Farbe gefärbt wäre. Schauen wir uns die folgende JavaScript-Funktion als Beispiel an:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Sie müssen aktuell nicht verstehen, was dieser Code tut, aber Sie können bereits sehen, wie die Syntaxhervorhebung aussieht. Ja, auch auf MDN bieten wir Syntaxhervorhebung an!

Versuchen wir eine Übung in VS Code:

1. Kopieren Sie das obige Codebeispiel in Ihre Zwischenablage (MDN-Codeblöcke haben ein Kopiersymbol in der oberen rechten Ecke, das Sie drücken können, um dies zu tun).
2. Öffnen Sie VS Code und erstellen Sie eine neue Datei, indem Sie _Datei_ > _Neue Datei..._ wählen.
3. Klicken Sie in der neuen Datei auf den Text _Sprache auswählen_ und wählen Sie _JavaScript_ aus dem Dropdown-Menü, das sich öffnet.
4. Fügen Sie den Code in die neue Datei ein, um zu sehen, wie VS Code's JavaScript-Syntaxhervorhebung aussieht.

VS Code bietet auch andere Syntax-Features. Zum Beispiel:

- Sie werden eine dünne vertikale Linie sehen, die vom `function` Schlüsselwort bis zur abschließenden geschweiften Klammer (`}`) verläuft — diese Linien werden verwendet, um unterschiedliche [Einzugsstile](https://en.wikipedia.org/wiki/Indentation_style) im Code zu markieren, was es einfacher macht, zu erkennen, wo Blöcke beginnen und enden.
- Versuchen Sie auch, den blinkenden Textcursor über die öffnende oder schließende geschweifte Klammer (`{` oder `}`) zu bewegen — Sie werden sehen, dass beide hervorgehoben werden. Dies hilft auch, den Anfang und das Ende von Blöcken zu identifizieren und ist nützlich, wenn Sie versuchen herauszufinden, wo Ihnen ein Zeichen fehlt, wenn Sie eine kompliziertere Struktur mit vielen verschachtelten Blöcken haben. Diese Hervorhebung funktioniert auch mit anderen Begrenzerzeichen wie Klammern (`(` und `)`) und eckigen Klammern (`[` und `]`).

### Code-Vervollständigung/-Vorschläge

Wenn Sie Code in einen Code-Editor eingeben, kann dieser oft vorschlagen, was Sie als Nächstes eingeben sollten, und ein gewisses Standardgerüst für Sie ausfüllen (was bedeutet, standardmäßiger Code, der immer gleich sein wird).

Probieren Sie dies jetzt in VS Code aus:

1. Gehen Sie zurück zu der JavaScript-Datei, die Sie im vorherigen Abschnitt erstellt haben.
2. Gehen Sie an das Ende der Datei und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> ein paar Mal, um sicherzustellen, dass Sie sich in einer neuen Zeile befinden.
3. Beginnen Sie mit der Eingabe von "function" — eine Liste von Optionen sollte in einer Liste rechts neben Ihrem Text erscheinen.
4. Wählen Sie die _function_ Option mit _Function Statement_ rechts daneben aus. Es wird folgender Code für Sie ausgefüllt:

   ```js-nolint
   function name(params) {

   }
   ```

5. Klicken Sie innerhalb der Funktion auf die leere Zeile zwischen den beiden geschweiften Klammern. Beginnen Sie mit der Eingabe von "document" und Ihnen wird erneut eine Liste von Optionen angeboten. Wählen Sie die erste aus. Dies ist ein Verweis auf das [`Document`](/de/docs/Web/API/Document)-Objekt (machen Sie sich derzeit keine Gedanken darüber, was das bedeutet).
6. Tippen Sie direkt nach `document` einen Punkt (`.`) ein — Sie erhalten erneut eine Liste von Optionen, diesmal mit allen Eigenschaften und Methoden, die auf dem `document` Objekt verfügbar sind!

Das reicht für jetzt. Lassen Sie uns weitermachen.

### Debugging-Hilfe

Code-Editoren können nicht automatisch alle Ihre Code-Probleme beheben, aber sie können Ihnen sicherlich helfen, Tippfehler und andere einfache Fehler zu finden. Lassen Sie uns ein paar Beispiele anschauen.

1. Gehen Sie zurück zu Ihrer JavaScript-Datei und löschen Sie den gesamten Code, den Sie derzeit dort haben. Ersetzen Sie ihn durch den folgenden:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Das kleine Kreuzsymbol rechts neben dem obigen Codeaufzählungszeichen ist die Art von MDN, ein schlechtes Codebeispiel anzuzeigen und zwar zu Recht — es gibt drei Fehler im obigen Code! Schauen Sie sich VS Code's Hervorhebungen an, um zu sehen, ob Sie erkennen können, wie es die Fehler hervorgehoben hat, dann gehen wir sie gemeinsam durch und beheben sie.
3. Der erste Fehler ist, dass wir `name` in der ersten Zeile verwendet haben, aber `Name` in der zweiten Zeile, um auf dieselbe Variable zu verweisen. Dies ist ein Problem, weil JavaScript case-sensitive ist und daher dies als zwei verschiedene Namen behandelt. VS Code hat dies auf zwei verschiedene Arten hervorgehoben — indem es `name` dunkelgrau eingefärbt hat, um anzuzeigen, dass der Wert deklariert, aber nie verwendet wird (oft ein guter Hinweis darauf, dass Sie irgendwo einen Tippfehler gemacht haben), und indem es drei Punkte unter `Name` eingefügt hat, um anzuzeigen, dass es einen Vorschlag für Sie hat, wie Sie den Code verbessern können (in diesem Fall, ob Sie `name` meinen). Um diesen Fehler zu beheben, ändern Sie `Name` zu `name`.
   > [!NOTE]
   > Sie können mit dem Mauszeiger über jede der markierten Hervorhebungen fahren, um mehr Informationen zu erhalten.
4. Der zweite Fehler befindet sich in der sechsten Zeile, wo wir `"Chris` schreiben. In JavaScript muss ein Textabschnitt (bekannt als **String**) in zwei Anführungszeichen eingeschlossen sein, aber das zweite fehlt. VS Code hat dies hervorgehoben, indem es den Text an der Stelle, an der der Fehler zuerst erkannt wird (es muss nicht genau die Stelle sein, an der der Fehler tatsächlich ist), mit einer wellenförmigen roten Linie unterstrichen hat, ähnlich der in Microsoft Word verwendeten Linie, um Rechtschreibfehler hervorzuheben. Um dies zu beheben, aktualisieren Sie `"Chris` zu `"Chris"`.
5. In der letzten Zeile bleibt ein kleiner Teil des roten wellenförmigen Unterstrichs in der Nähe des Endes, auch nachdem wir den vorherigen Fehler behoben haben. Dies liegt am dritten Fehler — in JavaScript benötigt stets eine öffnende Klammer eine begleitende schließende Klammer. Beheben Sie dies, indem Sie `(helloChris` zu `(helloChris)` aktualisieren.

### Suchen und Ersetzen

Jeder wertvolle Code-Editor hat eine robuste Such- und Ersetzungsfunktion. Dies ist nützlich, wenn Sie zum Beispiel feststellen, dass ein Fehler in einer bestimmten Funktion auftritt und Sie ihn in Ihrem Code finden möchten, oder wenn Sie sich entscheiden, den Namen einer Variablen zu ändern und sicherstellen müssen, dass er an allen Stellen geändert wird, die darauf verweisen.

Das Konzept des Suchens und Ersetzens sollte Ihnen ziemlich vertraut sein, wenn Sie bereits zuvor einen Computer verwendet haben, aber lassen Sie es uns schnell zur Vollständigkeit erkunden:

1. Gehen Sie zu Ihrer JavaScript-Datei in VS Code und öffnen Sie das Such- und Ersetzungspanel im Suchmodus, indem Sie _Bearbeiten_ > _Suchen_ aus dem Menü wählen.
2. Geben Sie `createGreeting` in das _Suchen_-Feld ein — Sie werden sehen, dass beide Vorkommen hervorgehoben sind, und Sie können zwischen ihnen mit den Auf- und Ab-Pfeiltasten im Panel wechseln. Das aktuell aktiv hervorgehobene Vorkommen hat die hellere Hervorhebung.
3. Öffnen Sie jetzt das Such- und Ersetzungspanel im Ersetzungsmodus, indem Sie _Bearbeiten_ > _Ersetzen_ aus dem Menü wählen oder indem Sie auf den Pfeil links neben dem _Suchen_-Feld klicken.
4. Geben Sie `sayHello` in das _Erzetten_-Feld ein, das jetzt sichtbar sein sollte.
5. Sie können jetzt alle Vorkommen von `createGreeting` im Code mit `sayHello` ersetzen, indem Sie die beiden Schaltflächen rechts neben dem _Ersetzen_-Feld verwenden. Die linke Schaltfläche bewegt sich zum nächsten Vorkommen des Suchbegriffs mit einem Klick und ersetzt es mit einem zweiten Klick. Die rechte Schaltfläche ersetzt alle Vorkommen mit einem einzigen Klick.

VS Code verfügt über viele leistungsstarke Such- und Ersetzungsfunktionen — siehe [Suchen und Ersetzen](https://code.visualstudio.com/docs/editing/codebasics#_find-and-replace).

## Ihren Code-Editor mit Erweiterungen verbessern

Die meisten Code-Editoren verfügen über ein Erweiterungs- oder Pluginsystem, mit dem Sie dem Programm Funktionen hinzufügen können, die standardmäßig nicht verfügbar sind. Diese können eine Vielzahl von Aufgaben erfüllen, wie zum Beispiel:

- Ermöglichen Sie das Vervollständigen von Code, das Linting oder die Debugging-Funktionalität für nicht standardmäßig unterstützte Sprachen oder bieten Sie zusätzliche Funktionalität für die, die es sind.
- Erlauben Sie die Nutzung der Funktionalität anderer Tools direkt im Code-Editor, wie Versionskontroll-Tools oder lokale Testserver.
- Stellen Sie zusätzliche Oberflächen- oder Code-Hervorhebungsthemen/Farbschemata bereit.
- Schlagen Sie Code-Snippets zur Erfüllung von Anforderungen vor. Diese können aus statischen Vorlagen generiert werden oder über AI-Tools. Die Verwendung von AI zur Generierung von Code-Snippets hat viele der gleichen Vorteile und Einschränkungen wie die Nutzung zur Generierung von Suchergebnissen (siehe [Suchen nach Informationen > Verwendung von AI](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) für mehr Informationen).

VS Code-Erweiterungen werden über das Extensions Marketplace-Panel in VS Code verwaltet, das über das Menü _Ansicht_ > _Erweiterungen_ aufgerufen wird. Lassen Sie uns es jetzt erkunden.

1. Öffnen Sie das Extensions Marketplace-Panel.
2. Geben Sie im obersten _Suche..._-Feld "JavaScript" ein, um zu sehen, welche JavaScript-bezogenen Erweiterungen verfügbar sind. Versuchen Sie, auf einige der Suchergebnisse zu klicken, die erscheinen, um zu sehen, welche Arten von Funktionen sie bieten. Installieren Sie vorerst keine davon.
3. Lassen Sie uns stattdessen eine Erweiterung installieren, die leicht verständlich ist und für praktisch jede Code-Datei, an der Sie in diesem Satz von Modulen arbeiten, nützlich sein wird. Geben Sie "Prettier" in das _Suche..._-Feld ein und klicken Sie auf das _Prettier - Code formatter_-Ergebnis. Wenn die [Prettier](https://prettier.io/)-Erweiterung installiert ist, kann sie verwendet werden, um Ihren Code jedes Mal zu formatieren, wenn Sie eine Datei speichern, was Ihren Code deutlich lesbarer macht.
4. Klicken Sie auf die _Installieren_-Schaltfläche im _Erweiterung_-Tab. Schließen Sie das Tab, wenn die Installation abgeschlossen ist.
5. Um Prettier zur Funktion zu bringen, müssen Sie ein paar Einstellungen aktualisieren. Öffnen Sie das VS Code-Einstellungen-Tab (_Code_ > _Einstellungen..._ > _Einstellungen_ auf macOS, _Datei_ > _Voreinstellungen_ > _Einstellungen_ auf Windows).
6. Geben Sie im _Sucheinstellungen_-Feld oben "formatter" ein, um die Einstellungen zu filtern und nur die anzuzeigen, die "formatter" enthalten.
7. Finden Sie die _Editor: Standard Formatter_-Option und wählen Sie die _Prettier - Code formatter_-Option aus dem zugehörigen Dropdown-Menü.
8. Finden Sie die _Editor: Format bei Speicherung_-Option und aktivieren Sie sie durch Klicken auf das Kontrollkästchen.
9. Schließen Sie das _Einstellungen_-Tab.

Das ist die gesamte Einrichtung; sehen wir uns Prettier in Aktion an.

1. Gehen Sie zurück zum Tab Ihrer JavaScript-Datei und speichern Sie sie (_Datei_ > _Speichern_). Die Datei muss gespeichert werden, damit Prettier funktioniert. Nennen Sie sie `test.js`. Der Ort, an dem Sie sie speichern, ist nicht wirklich wichtig.
2. Ersetzen Sie den aktuellen Inhalt durch den folgenden Code:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Speichern Sie die Datei erneut; an diesem Punkt sollte Prettier den Code schön formatieren, wie folgt:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
