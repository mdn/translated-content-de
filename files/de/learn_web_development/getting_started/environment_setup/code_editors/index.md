---
title: Code-Editor
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: 0e5b7e1a0abdfb8119d63f11b533df4b9c2e9127
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Zuvor haben wir Ihnen empfohlen, einen Code-Editor zu installieren, da Sie diesen benötigen, um den Kurs erfolgreich zu absolvieren. In diesem Artikel betrachten wir Code-Editoren genauer und geben Ihnen eine Vorstellung davon, was sie für Sie leisten können.

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
          <li>Welche Code-Editoren verfügbar sind und welche für Ihre Zwecke geeignet sind.</li>
          <li>Was ein grundlegender Code-Editor leisten kann.</li>
          <li>Was Code-Editor-Erweiterungen leisten können und wie man eine installiert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Code-Editoren sind verfügbar?

Bevor Sie mit dem Programmieren beginnen, haben Sie möglicherweise Erfahrung mit Textdokumenten in einem Programm wie Microsoft Word gesammelt. Vielleicht fragen Sie sich, ob Sie auch Code in diesen Programmen bearbeiten können. Leider lautet die Antwort „nicht wirklich“:

- Programme wie Microsoft Word sind **Binärdatei**-Editoren; ihre Dateien enthalten ein Nicht-Text-Format, das nur von diesen Programmen verstanden werden kann. Quellcode für Webseiten wird hingegen als reiner Text gespeichert.
- Word _kann_ reine Textdateien öffnen und bearbeiten, aber es kann sie nicht gut verarbeiten. Es hat keine Funktionen, die für die Arbeit mit Code entwickelt wurden — es dient zum Schreiben von Dokumenten wie Briefen und Berichten. Sie benötigen ein Programm, das darauf ausgelegt ist, reinen Text sauber zu verarbeiten und zu generieren sowie mit Code zu arbeiten.

Sie haben wahrscheinlich bereits einen einfachen Texteditor auf Ihrem Computer. Standardmäßig enthält Windows [Notepad](<https://de.wikipedia.org/wiki/Editor_(Windows)>) und macOS wird mit [TextEdit](https://de.wikipedia.org/wiki/TextEdit) geliefert. Linux-Distributionen variieren; die Ubuntu 22.04 LTS-Version wird standardmäßig mit dem [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor) geliefert. Standard-OS-Texteditoren können in Ordnung sein, aber sie haben auch einen eingeschränkten Funktionsumfang.

Sie sind besser mit einem vollwertigen Code-Editor wie [Visual Studio Code](https://code.visualstudio.com/) (multiplattform, kostenlos), [Sublime Text](https://www.sublimetext.com/) (multiplattform, nicht kostenlos) oder [Notepad++](https://notepad-plus-plus.org/) (Windows, kostenlos) aufgehoben.

Wir empfehlen Visual Studio Code (VS Code), da er der Editor ist, den wir hauptsächlich verwenden. Falls Sie VS Code (oder einen anderen Code-Editor) noch nicht installiert haben, sollten Sie ihn [vor dem Fortfahren installieren](https://code.visualstudio.com/).

> [!NOTE]
> Integrierte Entwicklungsumgebungen (IDEs) wie [NetBeans](https://netbeans.apache.org/front/main/index.html) (multiplattform, kostenlos) und [WebStorm](https://www.jetbrains.com/webstorm/) (multiplattform, nicht kostenlos) haben tendenziell mehr Funktionen als einfache Code-Editoren, sind jedoch komplizierter, als Sie in diesem Stadium Ihres Lernwegs benötigen.

## Grundlegende Funktionen eines Code-Editors

In diesem Abschnitt werden wir einige der bedeutendsten Funktionen betrachten, die Sie in Code-Editoren finden, und beschreiben, wie sie Ihnen bei Ihrer Kodierungsarbeit helfen können.

> [!NOTE]
> Die folgenden Abschnitte kratzen nur an der Oberfläche dessen, was ein Code-Editor leisten kann. Für eine umfassendere Funktionsliste siehe die [Visual Studio Code-Dokumentation](https://code.visualstudio.com/docs) (oder suchen Sie im Web nach der Dokumentation Ihres gewählten Code-Editors, falls Sie einen anderen verwenden).

> [!NOTE]
> Wenn Sie nur die Tastatur verwenden, beachten Sie, dass VS Code eine leistungsstarke Sammlung von Tastenkombinationen hat. Siehe VS Code [Tastenkombinationen-Referenz](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference).

### Dateien öffnen und bearbeiten

Dies mag ein offensichtlicher Punkt sein, aber die Installation eines Code-Editors ist nützlich, weil er Ihnen eine einzige Anwendung bietet, die alle Code-Dateien öffnet, die Sie vielleicht während Ihrer Entwicklungsarbeit verwenden möchten. Es gibt nichts Ärgerlicheres, als auf eine Datei auf Ihrem Computer zu doppelklicken und diese öffnet sich in einer zufälligen, nicht zusammenhängenden Anwendung oder Ihr Betriebssystem sagt Ihnen, es erkennt diese Datei nicht.

Dies sollte alles automatisch geschehen, wenn Sie VS Code installieren, aber wenn Sie weiterhin Probleme mit bestimmten Dateitypen haben, können Sie diese manuell so einstellen, dass sie über diese Anwendung geöffnet werden. Dies kann je nach Ihrem Betriebssystem variieren. Um dies herauszufinden, gehen Sie zu Ihrer bevorzugten Suchmaschine und suchen Sie nach „Wählen, welche Anwendung einen Dateityp öffnet &lt;OS-Name-und-Nummer>“ — beispielsweise „Wählen, welche Anwendung einen Dateityp öffnet Windows 11“, wenn Sie Windows 11 verwenden.

In unserem nächsten Artikel finden Sie viele weitere Informationen zum Öffnen und Bearbeiten von Dateien und Ordnern.

### Syntaxhervorhebung

Code-Editoren wie VS Code bieten eine Syntaxhervorhebung — das bedeutet, erkannte Code-Elemente werden in unterschiedlichen Farben angezeigt. Dies macht es viel einfacher, den Code zu lesen, als wenn er nur in einer Farbe dargestellt wird. Lassen Sie uns die folgende JavaScript-Funktion als Beispiel verwenden:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Es ist nicht notwendig, dass Sie jetzt verstehen, was dieser Code genau macht, aber Sie sehen bereits, wie die Syntaxhervorhebung aussieht. Ja, wir bieten auch auf MDN Syntaxhervorhebung!

Probieren Sie eine Übung in VS Code:

1. Kopieren Sie das obige Code-Beispiel in Ihre Zwischenablage (MDN-Codeblöcke haben ein Kopiersymbol oben rechts, das Sie drücken können).
2. Öffnen Sie VS Code und erstellen Sie eine neue Datei, indem Sie _Datei_ > _Neue Datei..._ auswählen.
3. Klicken Sie in der neuen Datei auf den Text _Sprache auswählen_ und wählen Sie _JavaScript_ aus dem Dropdown-Menü, das sich öffnet.
4. Fügen Sie den Code in die neue Datei ein, um zu sehen, wie die JavaScript-Syntaxhervorhebung in VS Code aussieht.

VS Code bietet auch andere Syntaxfunktionen. Beispielsweise:

- Sie werden eine dünne vertikale Linie sehen, die von dem `function`-Schlüsselwort bis zur schließenden geschweiften Klammer (`}`) verläuft — diese Linien markieren unterschiedliche [Einrückungs](https://de.wikipedia.org/wiki/Einr%C3%BCckungsstil)-Niveaus im Code, was es einfacher macht, zu erkennen, wo Blöcke beginnen und enden.
- Versuchen Sie auch, den blinkenden Textcursor über die öffnende oder schließende geschweifte Klammer (`{` oder `}`) zu bewegen — Sie werden beide Klammern hervorgehoben sehen. Dies hilft auch, den Anfang und das Ende von Blöcken zu identifizieren und ist nützlich, wenn Sie versuchen, die Stelle zu finden, an der ein Zeichen fehlt, besonders wenn Sie eine komplizierte Struktur mit vielen verschachtelten Blöcken haben. Diese Hervorhebung funktioniert auch mit anderen Begrenzern wie runden Klammern (`(` und `)`) und eckigen Klammern (`[` und `]`).

### Codevervollständigung/Vorschläge

Wenn Sie Code in einen Code-Editor eingeben, kann er oft vorschlagen, was Sie als Nächstes eingeben sollten, und ein paar Standardvorlagen für Sie bereitstellen.

Versuchen Sie dies jetzt in VS Code:

1. Gehen Sie zurück zur JavaScript-Datei, die Sie im vorherigen Abschnitt erstellt haben.
2. Gehen Sie an das Ende der Datei und drücken Sie ein paar Mal <kbd>Enter</kbd>/<kbd>Return</kbd>, um sicherzustellen, dass Sie sich in einer neuen Zeile befinden.
3. Beginnen Sie, „function“ einzugeben — es sollte eine Liste mit Optionen auf der rechten Seite Ihres Textes erscheinen.
4. Wählen Sie die Option _function_ mit _Function Statement_ rechts daneben aus. Sie wird den folgenden Code für Sie einfüllen:

   ```js-nolint
   function name(params) {

   }
   ```

5. Klicken Sie innerhalb der Funktion auf die leere Zeile zwischen den beiden geschweiften Klammern. Beginnen Sie mit „document“, und Sie werden erneut eine Liste mit Optionen erhalten. Wählen Sie die erste aus. Dies ist ein Verweis auf das [`Document`](/de/docs/Web/API/Document)-Objekt (keine Sorge, was das bedeutet, schauen wir uns später an).
6. Tippen Sie direkt nach `document` einen Punkt (`.`) ein — Sie erhalten erneut eine Liste von Optionen, diesmal mit allen Eigenschaften und Methoden, die dem `document`-Objekt zur Verfügung stehen!

Das reicht erstmal. Lassen Sie uns zum nächsten Punkt übergehen.

### Hilfe beim Debuggen

Code-Editoren können nicht automatisch alle Ihre Codeprobleme beheben, aber sie können Ihnen sicherlich helfen, Tippfehler und andere einfache Fehler zu finden. Lassen Sie uns ein paar Beispiele betrachten.

1. Gehen Sie zurück zu Ihrer JavaScript-Datei und löschen Sie den gesamten aktuellen Code. Ersetzen Sie ihn durch den folgenden:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Das kleine Kreuzsymbol rechts oben im Codebeispiel ist MDNs Art, auf ein schlechtes Codebeispiel hinzuweisen, und zu Recht — es gibt drei Fehler im obigen Code! Schauen Sie sich die Hervorhebung in VS Code an, um zu sehen, wie sie die Fehler markiert hat, und lassen Sie uns diese dann gemeinsam durchgehen und beheben.
3. Der erste Fehler ist, dass wir `name` in der ersten Zeile verwenden, aber `Name` in der zweiten Zeile verwenden, um auf dieselbe Variable zu verweisen. Das ist ein Problem, weil JavaScript zwischen Groß- und Kleinschreibung unterscheidet und deshalb beide als zwei unterschiedliche Namen betrachtet. VS Code hat dies auf zwei verschiedene Arten hervorgehoben — indem `name` dunkelgrau eingefärbt wird, um anzuzeigen, dass der Wert deklariert, aber nie verwendet wird (oft ein guter Hinweis darauf, dass irgendwo ein Tippfehler gemacht wurde), und indem unter `Name` drei Punkte gesetzt werden, die darauf hinweisen, dass es einen Verbesserungsvorschlag gibt (in diesem Fall, ob `name` gemeint war). Um diesen Fehler zu beheben, ändern Sie `Name` in `name`.
   > [!NOTE]
   > Sie können mit dem Mauszeiger über jede der markierten Hervorhebungen fahren, um mehr Informationen zu erhalten.
4. Der zweite Fehler befindet sich in der sechsten Zeile, wo wir `"Chris` schreiben. In JavaScript muss ein Textstück (bekannt als **String**) in zwei Anführungszeichen eingeschlossen sein, aber das zweite fehlt. VS Code hat dies hervorgehoben, indem der Text an der Stelle, wo der Fehler erstmals bemerkt wird (möglicherweise nicht der genaue Ort, an dem der Fehler tatsächlich ist), mit einer gewellten roten Linie unterstrichen wird, ähnlich wie in Microsoft Word, wenn Rechtschreibfehler markiert werden. Um dies zu beheben, ändern Sie `"Chris` in `"Chris"`.
5. In der letzten Zeile bleibt ein kleiner roter gewellter Unterstrich nahe dem Ende bestehen, auch nachdem wir den vorherigen Fehler behoben haben. Dies liegt am dritten Fehler — in JavaScript benötigt eine öffnende Klammer immer eine begleitende schließende Klammer. Beheben Sie dies, indem Sie `(helloChris` in `(helloChris)` ändern.

### Suchen und Ersetzen

Jeder lohnenswerte Code-Editor hat eine robuste Such- und Ersetzen-Funktion. Dies ist nützlich, wenn Sie beispielsweise feststellen, dass ein Fehler in einer bestimmten Funktion auftritt und Sie ihn im Code finden wollen, oder wenn Sie den Namen einer Variable ändern möchten und sicherstellen müssen, dass dies an allen Stellen geschieht, die darauf verwiesen.

Das Konzept von Suchen und Ersetzen sollte Ihnen ziemlich vertraut sein, wenn Sie bereits einen Computer verwendet haben, aber lassen Sie uns es zur Vollständigkeit kurz erkunden:

1. Kehren Sie zu Ihrer JavaScript-Datei in VS Code zurück und öffnen Sie das Suchen-und-Ersetzen-Panel im Suchmodus, indem Sie _Bearbeiten_ > _Suchen_ aus dem Menü auswählen.
2. Geben Sie `createGreeting` in das Feld _Suchen_ ein — Sie werden sehen, dass beide Instanzen hervorgehoben werden, und Sie können mit den Auf- und Abwärtspfeilen im Panel zwischen ihnen wechseln. Die aktuell aktiv hervorgehobene Instanz hat die hellere Markierung.
3. Öffnen Sie jetzt das Suchen-und-Ersetzen-Panel im Ersetzmodus, indem Sie _Bearbeiten_ > _Ersetzen_ aus dem Menü auswählen oder auf den Pfeil links neben dem _Suchen_-Feld klicken.
4. Geben Sie `sayHello` in das Ersetzfeld ein, das jetzt sichtbar sein sollte.
5. Sie können jetzt alle Instanzen von `createGreeting` im Code durch `sayHello` ersetzen, indem Sie die beiden Schaltflächen rechts vom Ersetzfeld verwenden. Die linke Schaltfläche wechselt zur nächsten Instanz des Suchbegriffs mit einem Klick und ersetzt ihn mit einem zweiten Klick. Die rechte Schaltfläche ersetzt alle Instanzen mit einem einzigen Klick.

VS Code hat viele leistungsstarke Suchen-und-Ersetzen-Funktionen — siehe [Suchen und Ersetzen](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace).

## Ihren Code-Editor mit Erweiterungen verbessern

Die meisten Code-Editoren verfügen über ein Erweiterungs- oder Plugin-System, mit dem Sie Funktionen zum Programm hinzufügen können, die standardmäßig nicht verfügbar sind. Diese können eine Vielzahl von Aufgaben erfüllen, wie z.B.:

- Aktivieren Sie die Code-Vervollständigung, das Linting oder die Debugging-Funktionalität für Sprachen, die nicht standardmäßig unterstützt werden, oder bieten Sie zusätzliche Funktionalität für die, die es sind.
- Erlauben Sie Ihnen, die Funktionen anderer Werkzeuge direkt im Code-Editor zu nutzen, wie z.B. Versionskontrollwerkzeuge oder lokale Testserver.
- Bieten Sie zusätzliche Benutzeroberflächen oder Code-Hervorhebungs-Themen/Farbschemata.
- Schlagen Sie Code-Snippets zur Erfüllung von Anforderungen vor. Diese können aus statischen Vorlagen generiert werden oder über KI-Tools. Die Verwendung von KI zum Generieren von Code-Snippets hat viele der gleichen Vorteile und Vorbehalte wie die Verwendung, um Suchergebnisse zu generieren (siehe [Suchen nach Informationen > Verwendung von KI](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) für weitere Informationen).

VS Code-Erweiterungen werden über das Erweiterungs-Marktplatz-Panel in VS Code verwaltet, das über das Menü _Ansicht_ > _Erweiterungen_ aufgerufen wird. Lassen Sie uns es jetzt erkunden.

1. Öffnen Sie das Erweiterungs-Marktplatz-Panel.
2. Geben Sie im _Suchen..._-Feld oben im Panel „JavaScript“ ein, um zu sehen, welche JavaScript-bezogenen Erweiterungen verfügbar sind. Versuchen Sie, auf einige der Suchergebnisse zu klicken, um zu sehen, welche Art von Dingen sie bewirken. Installieren Sie vorerst keine.
3. Stattdessen installieren wir eine Erweiterung, die leicht zu verstehen ist und nützlich für so ziemlich jede Code-Datei, an der Sie in diesem Modul arbeiten, sein wird. Geben Sie „Prettier“ in das _Suchen..._-Feld ein und klicken Sie auf das Ergebnis _Prettier - code formatter_. Wenn die [Prettier](https://prettier.io/) Erweiterung installiert ist, kann sie Ihr Code jedes Mal formatieren, wenn Sie eine Datei speichern, was Ihren Code viel einfacher lesbar macht.
4. Klicken Sie auf die Schaltfläche _Installieren_ auf der _Erweiterungen_-Registerkarte. Schließen Sie die Registerkarte, wenn die Installation abgeschlossen ist.
5. Um Prettier zum Laufen zu bringen, müssen Sie ein paar Einstellungen ändern. Öffnen Sie die VS Code-Registerkarte Einstellungen (_Code_ > _Einstellungen..._ > _Einstellungen_ auf macOS, _Datei_ > _Voreinstellungen_ > _Einstellungen_ auf Windows).
6. Geben Sie im Feld _Einstellungen durchsuchen_ oben „formatter“ ein, um die Liste der Einstellungen zu filtern und nur die anzuzeigen, die „formatter“ enthalten.
7. Finden Sie die Option _Editor: Standard-Formatter_ und wählen Sie die Option _Prettier - Code formatter_ aus dem zugehörigen Dropdown-Menü.
8. Finden Sie die Option _Editor: Beim Speichern formatieren_ und aktivieren Sie sie, indem Sie ihr Kontrollkästchen anklicken.
9. Schließen Sie die Registerkarte _Einstellungen_.

Das ist alles, was Sie einrichten müssen; lassen Sie uns Prettier in Aktion sehen.

1. Gehen Sie zurück zur Registerkarte Ihrer JavaScript-Datei und speichern Sie sie (_Datei_ > _Speichern_). Die Datei muss gespeichert werden, damit Prettier funktioniert. Nennen Sie sie `test.js`. Der Speicherort spielt keine wirkliche Rolle.
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
