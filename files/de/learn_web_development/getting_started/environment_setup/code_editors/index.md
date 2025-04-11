---
title: Code-Editor
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Zuvor haben wir Ihnen empfohlen, einen Code-Editor zu installieren, da Sie einen benötigen, um diesen Pfad zu durchlaufen. In diesem Artikel betrachten wir Code-Editoren genauer und geben Ihnen eine Vorstellung davon, was sie für Sie tun können.

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

Bevor Sie mit dem Programmieren beginnen, haben Sie möglicherweise schon einmal mit Textdokumenten in einem Programm wie Microsoft Word gearbeitet. Sie fragen sich vielleicht auch, ob Sie in diesen Programmen mit Code arbeiten können. Leider lautet die Antwort „nicht wirklich“:

- Programme wie Microsoft Word sind **Binärdatei**-Editoren; ihre Dateien enthalten ein nicht-textuelles Format, das nur von diesen Programmen verstanden werden kann. Quellcode von Websites hingegen wird als einfacher Text gespeichert.
- Word _kann_ einfache Textdateien öffnen und bearbeiten, aber es geht nicht besonders gut damit um. Es verfügt nicht über einen Funktionsumfang, der für die Arbeit mit Code konzipiert ist – es ist für das Verfassen von Dokumenten wie Briefen und Berichten gedacht. Sie benötigen ein Programm, das darauf ausgelegt ist, einfachen Text sauber zu verarbeiten und auszugeben und mit Code zu arbeiten.

Sie haben wahrscheinlich bereits einen einfachen Texteditor auf Ihrem Computer. Standardmäßig enthält Windows [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) und macOS wird mit [TextEdit](https://en.wikipedia.org/wiki/TextEdit) geliefert. Linux-Distributionen variieren; die Ubuntu 22.04 LTS-Version wird standardmäßig mit [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor) ausgeliefert. Standard-OS-Texteditoren können in Ordnung sein, haben jedoch auch einen begrenzten Funktionsumfang.

Sie sind besser mit einem vollwertigen Code-Editor wie [Visual Studio Code](https://code.visualstudio.com/) (plattformübergreifend, kostenlos), [Sublime Text](https://www.sublimetext.com/) (plattformübergreifend, nicht kostenlos) oder [Notepad++](https://notepad-plus-plus.org/) (Windows, kostenlos) bedient.

Wir würden Visual Studio Code (VS Code) empfehlen, da es der Editor ist, den wir hauptsächlich verwenden. Wenn Sie VS Code (oder einen anderen Code-Editor) noch nicht installiert haben, sollten Sie [ihn installieren, bevor Sie fortfahren](https://code.visualstudio.com/).

> [!NOTE]
> Integrierte Entwicklungsumgebungen (IDEs) wie [NetBeans](https://netbeans.apache.org/front/main/index.html) (plattformübergreifend, kostenlos) und [WebStorm](https://www.jetbrains.com/webstorm/) (plattformübergreifend, nicht kostenlos) haben tendenziell mehr Funktionen als einfache Code-Editoren, sind jedoch tendenziell komplexer als das, was Sie zu diesem Zeitpunkt in Ihrer Lernreise benötigen.

## Grundlegende Funktionen eines Code-Editors

In diesem Abschnitt werfen wir einen Blick auf einige der wichtigsten Funktionen, die Sie in Code-Editoren finden werden, und beschreiben, wie sie Ihnen bei Ihrer Codierungsarbeit helfen können.

> [!NOTE]
> Die folgenden Abschnitte kratzen nur an der Oberfläche dessen, was ein Code-Editor leisten kann. Für eine vollständigere Liste der Funktionen siehe die [Visual Studio Code-Dokumentation](https://code.visualstudio.com/docs) (oder suchen Sie im Web nach der Dokumentation Ihres gewählten Code-Editors, wenn Sie etwas anderes verwenden).

> [!NOTE]
> Wenn Sie ein Benutzer sind, der nur die Tastatur verwendet, sollten Sie wissen, dass VS Code über einen leistungsstarken Satz von Tastenkombinationen verfügt. Siehe die VS Code-Referenz [Standard-Tastenkombinationen](https://code.visualstudio.com/docs/reference/default-keybindings).

### Dateien öffnen und bearbeiten

Dies mag offensichtlich erscheinen, aber die Installation eines Code-Editors ist nützlich, da er Ihnen eine einzige App bietet, die alle Code-Dateien öffnet, die Sie während Ihrer Entwicklungsarbeit verwenden möchten. Es gibt nichts Ärgerlicheres, als eine Datei auf Ihrem Computer doppelt anzuklicken und sie in einer zufälligen, nicht verwandten App zu öffnen, oder dass Ihr Betriebssystem Ihnen mitteilt, dass es diese Datei nicht erkennt.

Dies sollte alles automatisch geschehen, wenn Sie VS Code installieren, aber wenn Sie dennoch Probleme mit bestimmten Dateitypen haben, können Sie diese manuell so einstellen, dass sie über diese App geöffnet werden. Dies kann je nach Betriebssystem variieren. Um dies herauszufinden, gehen Sie zu Ihrer bevorzugten Suchmaschine und suchen Sie nach „Anwendung auswählen, die einen Dateityp öffnet &lt;OS-Name-und-Nummer>“ — zum Beispiel „Anwendung auswählen, die einen Dateityp Windows 11 öffnet“, wenn Sie Windows 11 verwenden.

In unserem nächsten Artikel finden Sie viele weitere Informationen zum Öffnen und Bearbeiten von Dateien und Ordnern.

### Syntax-Highlighting

Code-Editoren wie VS Code bieten Syntax-Highlighting — das heißt, erkannte Code-Features werden in unterschiedlichen Farben dargestellt. Dadurch wird der Code viel einfacher zu lesen, als wenn alles in einer Farbe dargestellt wird. Lassen Sie uns die folgende JavaScript-Funktion als Beispiel verwenden:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Sie müssen nicht verstehen, was dieser Code derzeit tut, aber Sie können bereits sehen, wie das Syntax-Highlighting oben aussieht. Ja, auf MDN bieten wir auch Syntax-Highlighting!

Versuchen Sie es als Übung in VS Code:

1. Kopieren Sie das obige Code-Beispiel in Ihre Zwischenablage (MDN-Codeblöcke haben ein Kopiersymbol in der oberen rechten Ecke, das Sie drücken können, um dies zu tun).
2. Öffnen Sie VS Code und erstellen Sie eine neue Datei, indem Sie _Datei_ > _Neue Datei..._ auswählen.
3. Klicken Sie in der neuen Datei auf den Text _Sprache auswählen_ und wählen Sie _JavaScript_ aus dem Dropdown-Menü, das sich öffnet.
4. Fügen Sie den Code in die neue Datei ein, um zu sehen, wie das JavaScript-Syntax-Highlighting von VS Code aussieht.

VS Code bietet auch andere Syntaxfunktionen. Zum Beispiel:

- Sie sehen eine dünne vertikale Linie, die sich von dem `function`-Schlüsselwort bis zur schließenden geschweiften Klammer (`}`) erstreckt — diese Linien werden verwendet, um unterschiedliche [Einrückungsstile](https://en.wikipedia.org/wiki/Indentation_style) im Code zu kennzeichnen, was es einfacher macht, zu erkennen, wo Blöcke beginnen und enden.
- Versuchen Sie auch, den blinkenden Textcursor über die öffnende oder schließende geschweifte Klammer (`{` oder `}`) zu bewegen — beide werden hervorgehoben. Dies hilft auch, den Anfang und das Ende von Blöcken zu identifizieren, und ist nützlich, wenn Sie versuchen, herauszufinden, wo Ihnen ein Zeichen fehlt, wenn Sie eine kompliziertere Struktur mit vielen verschachtelten Blöcken haben. Diese Hervorhebung funktioniert auch mit anderen Begrenzerzeichen wie Klammern (`(` und `)`) und eckigen Klammern (`[` und `]`).

### Code-Vervollständigung/Vorschläge

Wenn Sie Code in einen Code-Editor eingeben, kann dieser oft vorschlagen, was Sie als Nächstes eingeben sollten, und einige Boilerplate-Code für Sie einfüllen (was bedeutet, dass standardmäßiger Code, der immer gleich sein wird, eingefügt wird).

Probieren Sie dies jetzt in VS Code aus:

1. Gehen Sie zurück zu der JavaScript-Datei, die Sie im vorherigen Abschnitt erstellt haben.
2. Gehen Sie zum Ende der Datei und drücken Sie ein paar Mal <kbd>Enter</kbd>/<kbd>Return</kbd>, um sicherzustellen, dass Sie sich in einer neuen Zeile befinden.
3. Beginnen Sie damit, "function" einzugeben — eine Liste von Optionen sollte rechts von Ihrem Text erscheinen.
4. Wählen Sie die _function_ Option mit _Function Statement_ rechts davon. Es wird der folgende Code für Sie eingefügt:

   ```js-nolint
   function name(params) {

   }
   ```

5. Klicken Sie in die Funktion auf die leere Zeile zwischen den beiden geschweiften Klammern. Beginnen Sie, "document" zu tippen, und Sie erhalten erneut eine Liste von Optionen. Wählen Sie die erste aus. Dies ist ein Verweis auf das [`Document`](/de/docs/Web/API/Document)-Objekt (wieder, machen Sie sich jetzt keine Gedanken darüber, was das bedeutet).
6. Geben Sie direkt nach `document` einen Punkt (`.`) ein — Sie erhalten erneut eine Liste von Optionen, die diesmal alle Eigenschaften und Methoden enthalten, die auf dem `document`-Objekt verfügbar sind!

Das ist genug für jetzt. Lassen Sie uns weitermachen.

### Debugging-Hilfe

Code-Editoren können nicht automatisch alle Ihre Codeprobleme beheben, aber sie können Ihnen sicherlich dabei helfen, Tippfehler und andere einfache Fehler zu finden. Lassen Sie uns ein paar Beispiele ansehen.

1. Gehen Sie zurück zu Ihrer JavaScript-Datei und löschen Sie den gesamten Code, den Sie derzeit dort haben. Ersetzen Sie ihn durch den folgenden:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Das kleine Kreuzsymbol rechts neben dem obigen Codebeispiel ist MDNs Möglichkeit, ein schlechtes Codebeispiel zu kennzeichnen, und das zu Recht — es gibt drei Fehler im obigen Code! Sehen Sie sich das Highlighting von VS Code an, um zu sehen, ob Sie erkennen können, wie es die Fehler hervorgehoben hat, dann gehen wir die Schritte gemeinsam durch und beheben sie.
3. Der erste Fehler besteht darin, dass wir `name` in der ersten Zeile verwendet haben, aber `Name` in der zweiten Zeile, um auf dieselbe Variable zu verweisen. Dies ist ein Problem, weil JavaScript groß- und kleinschreibungssensitiv ist und diese daher als zwei verschiedene Namen betrachtet. VS Code hat dies auf zwei verschiedene Arten hervorgehoben — indem es `name` dunkelgrau färbt, um anzuzeigen, dass der Wert deklariert, aber nicht verwendet wird (oft ein guter Hinweis darauf, dass Sie irgendwo einen Tippfehler gemacht haben), und indem es drei Punkte unter `Name` setzt, um anzuzeigen, dass es einen Vorschlag hat, wie Sie den Code verbessern können (in diesem Fall, indem gefragt wird, ob Sie `name` meinten). Um diesen Fehler zu beheben, ändern Sie `Name` in `name`.
   > [!NOTE]
   > Sie können über jeden der hervorgehobenen Bereiche mit dem Mauszeiger fahren, um weitere Informationen zu erhalten.
4. Der zweite Fehler befindet sich in der sechsten Zeile, wo wir `"Chris` schreiben. In JavaScript muss ein Textstück (bekannt als **String**) in zwei Anführungszeichen eingewickelt sein, aber das zweite fehlt. VS Code hat dies hervorgehoben, indem es den Text unterstrichen hat, an dem der Fehler zuerst bemerkt wird (es könnte nicht der genaue Ort sein, an dem der Fehler tatsächlich ist) mit einer gewellten roten Linie, ähnlich der, die in Microsoft Word verwendet wird, um Rechtschreibfehler zu markieren. Um dies zu beheben, aktualisieren Sie `"Chris` zu `"Chris"`.
5. In der letzten Zeile bleibt ein kleines Stückchen rote gewellte Unterstreichung in der Nähe des Endes, selbst nachdem wir den vorherigen Fehler behoben haben. Dies liegt am dritten Fehler — in JavaScript benötigt ein öffnender Klammer immer eine passende schließende Klammer. Beheben Sie dies, indem Sie `(helloChris` zu `(helloChris)` aktualisieren.

### Suchen und Ersetzen

Jeder lohnenswerte Code-Editor verfügt über eine robuste Such- und Ersetzungsfunktion. Dies ist nützlich, wenn Sie beispielsweise feststellen, dass ein Fehler in einer bestimmten Funktion auftritt und Sie diese in Ihrem Code suchen möchten, oder wenn Sie beschließen, den Namen einer Variablen zu ändern und sicherstellen müssen, dass dies in allen Verweisen geändert wird.

Das Konzept des Suchens und Ersetzens sollte Ihnen ziemlich vertraut sein, wenn Sie zuvor einen Computer verwendet haben, aber lassen Sie uns es der Vollständigkeit halber schnell erkunden:

1. Gehen Sie zurück zu Ihrer JavaScript-Datei in VS Code und öffnen Sie das Such- und Ersetzungspanel im Suchmodus, indem Sie im Menü _Bearbeiten_ > _Suchen_ auswählen.
2. Geben Sie `createGreeting` in das _Suchen_-Feld ein — Sie werden sehen, dass beide Instanzen hervorgehoben sind, und Sie können mit den Pfeilen nach oben und unten im Panel zwischen ihnen wechseln. Die aktuell aktiv hervorgehobene Instanz hat die hellere Hervorhebung.
3. Öffnen Sie nun das Such- und Ersetzungspanel im Ersetzungsmodus, indem Sie im Menü _Bearbeiten_ > _Ersetzen_ auswählen oder auf den Pfeil links neben dem _Suchen_-Feld klicken.
4. Geben Sie `sayHello` in das _Ersetzen_-Feld ein, das nun sichtbar sein sollte.
5. Sie können nun alle Instanzen von `createGreeting` im Code mit `sayHello` ersetzen, indem Sie die beiden Schaltflächen rechts neben dem _Ersetzen_-Feld verwenden. Die linke Schaltfläche wechselt mit einem Klick zur nächsten Instanz des Suchstrings und ersetzt sie mit einem zweiten Klick. Die rechte Schaltfläche ersetzt alle Instanzen mit einem einzigen Klick.

VS Code verfügt über viele leistungsstarke Such- und Ersetzungsfunktionen — siehe [Suchen und Ersetzen](https://code.visualstudio.com/docs/editing/codebasics#_find-and-replace).

## Ihren Code-Editor mit Erweiterungen verbessern

Die meisten Code-Editoren haben ein Erweiterungs- oder Plugin-System, das es Ihnen ermöglicht, Funktionalitäten hinzuzufügen, die standardmäßig nicht verfügbar sind. Diese können verschiedene Aufgaben erfüllen, wie zum Beispiel:

- Code-Vervollständigungs-, Linting- oder Debugging-Funktionalität für Sprachen aktivieren, die standardmäßig nicht unterstützt werden, oder zusätzliche Funktionalität für unterstützte Sprachen bereitstellen.
- Ihnen ermöglichen, die Funktionalität anderer Tools direkt im Code-Editor zu verwenden, wie z. B. Versionskontrolltools oder lokale Testserver.
- Zusätzliche Benutzeroberflächen- oder Code-Highlighting-Themen/Farbschemata bereitstellen.
- Code-Snippets vorschlagen, um Anforderungen zu erfüllen. Diese können aus statischen Vorlagen oder über AI-Tools generiert werden. Die Verwendung von AI zur Generierung von Code-Snippets hat viele der gleichen Vorteile und Tücken wie die Verwendung zur Generierung von Suchergebnissen (siehe [Informationen suchen > Verwendung von AI](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) für weitere Informationen).

VS Code-Erweiterungen werden über das Marketplace-Panel für Erweiterungen in VS Code verwaltet, das über das Menü _Ansicht_ > _Erweiterungen_ zugänglich ist. Lassen Sie uns es jetzt erkunden.

1. Öffnen Sie das Marketplace-Panel für Erweiterungen.
2. Geben Sie in das _Suche..._-Feld oben im Panel "JavaScript" ein, um zu sehen, welche JavaScript-bezogenen Erweiterungen verfügbar sind. Versuchen Sie, auf einige der Suchergebnisse zu klicken, die erscheinen, um zu sehen, welche Art von Funktionen sie haben. Installieren Sie vorerst keine davon.
3. Lassen Sie uns stattdessen eine Erweiterung installieren, die leicht zu verstehen ist und bei so ziemlich jeder Code-Datei, an der Sie in diesem Modul-Arbeitssatz arbeiten, nützlich sein wird. Geben Sie "Prettier" in das _Suche..._-Feld ein und klicken Sie auf das Ergebnis _Prettier - code formatter_. Wenn die [Prettier](https://prettier.io/)-Erweiterung installiert ist, kann sie verwendet werden, um Ihren Code jedes Mal zu formatieren, wenn Sie eine Datei speichern, was Ihren Code viel besser lesbar macht.
4. Klicken Sie auf die _Installieren_-Schaltfläche auf der _Erweiterung_-Registerkarte. Schließen Sie die Registerkarte, wenn die Installation abgeschlossen ist.
5. Damit Prettier funktioniert, müssen Sie ein paar Einstellungen aktualisieren. Öffnen Sie die VS Code-Einstellungsregisterkarte (_Code_ > _Einstellungen..._ > _Einstellungen_ auf macOS, _Datei_ > _Voreinstellungen_ > _Einstellungen_ auf Windows).
6. Geben Sie im _Filtereinstellungen_-Feld oben "formatter" ein, um die Liste der Einstellungen zu filtern und nur diejenigen anzuzeigen, die "formatter" enthalten.
7. Finden Sie die _Editor: Default Formatter_-Option und wählen Sie die _Prettier - Code formatter_-Option aus dem zugehörigen Dropdown-Menü.
8. Finden Sie die _Editor: Format On Save_-Option und aktivieren Sie sie, indem Sie das Kontrollkästchen anklicken.
9. Schließen Sie die _Einstellungen_-Registerkarte.

Das ist die ganze Einrichtung; lassen Sie uns Prettier in Aktion sehen.

1. Gehen Sie zurück zu Ihrer Registerkarte mit der JavaScript-Datei und speichern Sie sie (_Datei_ > _Speichern_). Die Datei muss gespeichert werden, damit Prettier funktioniert. Nennen Sie sie `test.js`. Der Speicherort spielt dabei keine Rolle.
2. Ersetzen Sie den aktuellen Inhalt durch den folgenden Code:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Speichern Sie die Datei erneut; zu diesem Zeitpunkt sollte Prettier den Code schön neu formatieren, wie folgt:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
