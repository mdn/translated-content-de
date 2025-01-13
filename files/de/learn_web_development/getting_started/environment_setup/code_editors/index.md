---
title: Code-Editor
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: a53253307ade5c6e3eec896a5f2d799fdebe9ae8
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Zuvor sagten wir Ihnen, dass Sie einen Code-Editor installieren sollten, da Sie einen benötigen, um diesen Pfad zu durchlaufen. In diesem Artikel betrachten wir Code-Editoren genauer und geben Ihnen eine Vorstellung davon, was sie für Sie tun können.

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
          <li>Welche Code-Editoren verfügbar sind und was für Ihre Zwecke geeignet ist.</li>
          <li>Was ein grundlegender Code-Editor tun kann.</li>
          <li>Was Code-Editor-Erweiterungen tun können und wie man eine installiert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Code-Editoren sind verfügbar?

Bevor Sie mit dem Codieren beginnen, haben Sie möglicherweise bereits Erfahrung mit Textdokumenten in einem Programm wie Microsoft Word gesammelt. Sie fragen sich vielleicht auch, ob Sie mit Code in denselben Programmen arbeiten können. Leider lautet die Antwort "nicht wirklich":

- Programme wie Microsoft Word sind **Binärdatei**-Editoren; ihre Dateien enthalten ein Nicht-Text-Format, das nur von diesen Programmen verstanden werden kann. Der Quellcode von Websites wird hingegen als Nur-Text gespeichert.
- Word _kann_ Nur-Text-Dateien öffnen und bearbeiten, geht jedoch nicht gut damit um. Es bietet keine Funktionsausstattung, die für die Arbeit mit Code konzipiert ist — es ist zum Schreiben von Dokumenten wie Briefen und Berichten gedacht. Sie benötigen ein Programm, das darauf ausgelegt ist, Nur-Text klar zu handhaben und auszugeben und mit Code zu arbeiten.

Sie haben wahrscheinlich bereits einen Nur-Text-Editor auf Ihrem Computer. Standardmäßig enthält Windows [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) und macOS wird mit [TextEdit](https://en.wikipedia.org/wiki/TextEdit) geliefert. Linux-Distributionen unterscheiden sich; die Ubuntu 22.04 LTS-Version wird standardmäßig mit dem [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor) geliefert. Standardmäßige OS-Nur-Text-Editoren können in Ordnung sein, haben jedoch eine eingeschränkte Funktionspalette.

Sie sind besser dran mit einem vollwertigen Code-Editor wie [Visual Studio Code](https://code.visualstudio.com/) (plattformentsprechend, kostenlos), [Sublime Text](https://www.sublimetext.com/) (plattformentsprechend, nicht kostenlos) oder [Notepad++](https://notepad-plus-plus.org/) (Windows, kostenlos).

Wir empfehlen Visual Studio Code (VS Code), da es der Editor ist, den wir hauptsächlich verwenden. Falls Sie noch kein VS Code (oder einen anderen Code-Editor) installiert haben, sollten Sie [es vor dem Weitermachen installieren](https://code.visualstudio.com/).

> [!NOTE]
> Integrierte Entwicklungsumgebungen (IDEs) wie [NetBeans](https://netbeans.apache.org/front/main/index.html) (plattformentsprechend, kostenlos) und [WebStorm](https://www.jetbrains.com/webstorm/) (plattformentsprechend, nicht kostenlos) bieten tendenziell mehr Funktionen als einfache Code-Editoren, sind jedoch in der Regel komplexer als das, was Sie zu diesem Zeitpunkt in Ihrer Lernreise benötigen.

## Grundlegende Funktionen eines Code-Editors

In diesem Abschnitt betrachten wir einige der wichtigsten Funktionen, die Sie in Code-Editoren finden werden, und beschreiben, wie sie Ihnen bei Ihrer Code-Arbeit helfen können.

> [!NOTE]
> Die untenstehenden Abschnitte gehen nur an die Oberfläche dessen, was ein Code-Editor leisten kann. Für eine vollständigere Funktionsliste siehe die [Visual Studio Code-Dokumentation](https://code.visualstudio.com/docs) (oder suchen Sie im Internet nach der Dokumentation Ihres gewählten Code-Editors, wenn Sie etwas anderes verwenden).

> [!NOTE]
> Wenn Sie ein reiner Tastaturanwender sind, sollten Sie wissen, dass VS Code eine leistungsstarke Sammlung von Tastaturkürzeln besitzt. Siehe die VS Code [Tastaturkürzel-Referenz](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference).

### Öffnen und Bearbeiten von Dateien

Dies mag offensichtlich erscheinen, aber die Installation eines Code-Editors ist nützlich, weil er Ihnen eine einzelne App bietet, die alle Code-Dateien öffnet, die Sie in Ihrer Entwicklungsarbeit verwenden möchten. Es gibt nichts Ärgerlicheres, als auf eine Datei auf Ihrem Computer zu doppelklicken und sie in einer zufälligen, nicht verwandten App zu öffnen oder dass Ihr Betriebssystem Ihnen mitteilt, dass es diese Datei nicht erkennt.

Dies sollte nach der Installation von VS Code automatisch geschehen, aber wenn Sie trotzdem Probleme mit bestimmten Dateitypen haben, können Sie diese manuell so einstellen, dass sie über diese App geöffnet werden. Dies kann je nach Betriebssystem unterschiedlich sein, daher gehen Sie zu Ihrer bevorzugten Suchmaschine und suchen Sie nach "choose what application opens a file type &lt;OS-name-and-number>" – zum Beispiel "choose what application opens a file type windows 11", wenn Sie Windows 11 verwenden.

Sie können viel mehr Informationen über das Öffnen und Bearbeiten von Dateien und Ordnern in unserem nächsten Artikel finden.

### Syntax-Hervorhebung

Code-Editoren wie VS Code bieten eine Syntax-Hervorhebung, das heißt, erkannte Code-Features werden in verschiedenen Farben angezeigt. Dies macht den Code viel einfacher zu lesen, als ihn in einer einzigen Farbe zu kolorieren. Lassen Sie uns die folgende JavaScript-Funktion als Beispiel verwenden:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Sie müssen jetzt noch nicht verstehen, was dieser Code tut, aber Sie können bereits sehen, wie die Syntax-Hervorhebung oben aussieht. Ja, wir bieten auch eine Syntax-Hervorhebung auf MDN!

Probieren Sie jetzt eine Übung in VS Code:

1. Kopieren Sie das obige Code-Beispiel in Ihre Zwischenablage (MDN-Code-Blöcke haben ein Kopiersymbol in der oberen rechten Ecke, auf das Sie drücken können, um dies zu tun).
2. Öffnen Sie VS Code und erstellen Sie eine neue Datei, indem Sie _Datei_ > _Neue Datei..._ wählen.
3. Klicken Sie in der neuen Datei auf den Text _Sprache auswählen_, und wählen Sie _JavaScript_ aus dem Dropdown-Menü, das sich öffnet.
4. Fügen Sie den Code in die neue Datei ein, um zu sehen, wie die JavaScript-Syntax-Hervorhebung von VS Code aussieht.

VS Code bietet auch andere Syntax-Features. Zum Beispiel:

- Sie werden eine dünne vertikale Linie sehen, die von dem `function`-Schlüsselwort bis zur schließenden geschweiften Klammer (`}`) verläuft – diese Linien markieren verschiedene [Einrückungs](https://en.wikipedia.org/wiki/Indentation_style)-Niveaus im Code, was es einfacher macht, zu erkennen, wo Blöcke beginnen und enden.
- Versuchen Sie auch, den blinkenden Textcursor über die öffnende oder schließende geschweifte Klammer (`{` oder `}`) zu bewegen – Sie werden sehen, dass beide hervorgehoben werden. Dies hilft auch, den Anfang und das Ende von Blöcken zu erkennen und ist nützlich, wenn Sie versuchen, herauszufinden, wo Ihnen ein Zeichen fehlt, wenn Sie eine kompliziertere Struktur mit vielen verschachtelten Blöcken haben. Diese Hervorhebung funktioniert auch mit anderen Begrenzungen wie Klammern (`(` und `)`) und eckigen Klammern (`[` und `]`).

### Code-Vervollständigung/Vorschläge

Wenn Sie Code in einen Code-Editor eingeben, kann dieser oft vorschlagen, was Sie als nächstes eintippen sollten, und einige Standardcodes für Sie ausfüllen (was bedeutet, dass der Code immer gleich sein wird).

Probieren Sie dies jetzt in VS Code aus:

1. Gehen Sie zurück zur JavaScript-Datei, die Sie im vorherigen Abschnitt erstellt haben.
2. Gehen Sie zum Ende der Datei und drücken Sie <kbd>Enter</kbd>/<kbd>Return</kbd> ein paar Mal, um sicherzustellen, dass Sie sich auf einer neuen Zeile befinden.
3. Beginnen Sie, "function" einzutippen – eine Liste von Optionen sollte rechts von Ihrem Text in einer Liste erscheinen.
4. Wählen Sie die _function_-Option mit dem _Function Statement_ rechts davon aus. Es wird folgender Code für Sie ausgefüllt:

   ```js-nolint
   function name(params) {

   }
   ```

5. Klicken Sie innerhalb der Funktion auf die leere Zeile zwischen den beiden geschweiften Klammern. Beginnen Sie, "document" einzugeben und Sie werden erneut eine Liste von Optionen erhalten. Wählen Sie die erste aus. Dies ist ein Verweis auf das [`Document`](/de/docs/Web/API/Document)-Objekt (keine Sorge, was dies jetzt bedeutet).
6. Direkt nach `document`, tippen Sie einen Punkt (`.`) ein – Sie werden wieder eine Liste von Optionen erhalten, diesmal enthalten sie alle Eigenschaften und Methoden, die dem `document`-Objekt zur Verfügung stehen!

Das ist vorerst genug. Lassen Sie uns weitermachen.

### Hilfe beim Debuggen

Code-Editoren können nicht automatisch alle Ihre Code-Probleme beheben, aber sie können definitiv helfen, Tippfehler und andere einfache Fehler zu finden. Lassen Sie uns ein paar Beispiele betrachten.

1. Gehen Sie zurück zu Ihrer JavaScript-Datei und löschen Sie den gesamten Code, den Sie aktuell dort haben. Ersetzen Sie ihn durch den folgenden:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Das kleine Kreuzen-Symbol rechts vom obigen Code-Listing ist die Art von MDN, ein schlechtes Code-Beispiel zu kennzeichnen, und zu Recht – es gibt drei Fehler im obigen Code! Schauen Sie sich die Hervorhebung in VS Code an, um zu sehen, ob Sie erkennen können, wie es die Fehler hervorgehoben hat, dann werden wir sie gemeinsam besprechen.
3. Der erste Fehler besteht darin, dass wir auf der ersten Zeile `name` verwendet haben, aber `Name` auf der zweiten Zeile, um auf dieselbe Variable zu verweisen. Das ist ein Problem, weil JavaScript zwischen Groß- und Kleinschreibung unterscheidet und daher diese als zwei verschiedene Namen ansieht. VS Code hat dies auf zwei verschiedene Arten hervorgehoben — durch das Färben von `name` dunkelgrau, um anzuzeigen, dass der Wert deklariert, aber nie verwendet wird (oft ein guter Hinweis darauf, dass Sie irgendwo einen Tippfehler gemacht haben), und indem es drei Punkte unter `Name` platziert, um anzuzeigen, dass es eine Verbesserung für den Code vorschlägt (in diesem Fall durch die Frage, ob Sie `name` schreiben wollten). Um diesen Fehler zu beheben, ändern Sie `Name` zu `name`.
   > [!NOTE]
   > Sie können mit dem Mauszeiger über jedes der markierten Highlights fahren, um mehr Informationen zu erhalten.
4. Der zweite Fehler befindet sich in der sechsten Zeile, wo wir `"Chris` schreiben. In JavaScript muss ein Textstück (**String** genannt) in zwei Anführungszeichen eingeschlossen sein, aber das zweite fehlt. VS Code hat dies unterstrichen, indem es den Text, wo der Fehler zuerst bemerkt wird (es könnte nicht der genaue Ort sein, wo der Fehler tatsächlich ist), mit einer welligen roten Linie unterstrichen hat, ähnlich derjenigen, die in Microsoft Word benutzt wird, um Rechtschreibfehler hervorzuheben. Um dies zu beheben, aktualisieren Sie `"Chris` zu `"Chris"`.
5. Auf der letzten Zeile bleibt ein kleines wenig rote wellige Unterstreichung in der Nähe des Endes, selbst nachdem wir den vorherigen Fehler behoben haben. Dies liegt am dritten Fehler – in JavaScript benötigt eine öffnende Klammer immer eine dazugehörige schließende Klammer. Beheben Sie dies, indem Sie `(helloChris` zu `(helloChris)` aktualisieren.

### Suchen und Ersetzen

Jeder wertvolle Code-Editor hat eine robuste Such- und Ersetzungsfunktion. Dies ist nützlich, wenn Sie beispielsweise herausfinden, dass ein Fehler in einer bestimmten Funktion auftritt und Sie diese in Ihrem Code finden möchten, oder wenn Sie sich entscheiden, den Namen einer Variable zu ändern und sicherstellen müssen, dass sie an allen Stellen, die darauf verweisen, geändert wird.

Das Konzept von Suchen und Ersetzen sollte Ihnen vertraut sein, wenn Sie zuvor einen Computer benutzt haben, aber lassen Sie uns es schnell der Vollständigkeit halber erkunden:

1. Gehen Sie zurück zu Ihrer JavaScript-Datei in VS Code und öffnen Sie das Such- und Ersetzen-Panel im Suchmodus, indem Sie _Bearbeiten_ > _Suchen_ aus dem Menü wählen.
2. Geben Sie `createGreeting` in das _Such_-Feld ein – Sie werden sehen, dass beide Instanzen hervorgehoben sind, und Sie können mit den Auf- und Abwärtspfeilen im Panel zwischen ihnen wechseln. Die gerade aktiv hervorgehobene Instanz hat die hellere Hervorhebung.
3. Öffnen Sie jetzt das Such- und Ersetzungs-Panel im Ersetzen-Modus, indem Sie _Bearbeiten_ > _Ersetzen_ aus dem Menü wählen oder auf den Pfeil links neben dem _Such_-Feld klicken.
4. Geben Sie `sayHello` in das _Ersetzen_-Feld ein, das jetzt sichtbar sein sollte.
5. Sie können jetzt alle Instanzen von `createGreeting` im Code durch `sayHello` ersetzen, indem Sie die beiden Schaltflächen rechts neben dem _Ersetzen_-Feld verwenden. Die linke Schaltfläche bewegt sich mit einem Klick zur nächsten Instanz des Suchstrings und ersetzt sie mit einem zweiten Klick. Die rechte Schaltfläche ersetzt alle Instanzen mit einem einzigen Klick.

VS Code hat viele leistungsstarke Suchen-und-Ersetzen-Funktionen – siehe [Suchen und Ersetzen](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace).

## Ihren Code-Editor mit Erweiterungen verbessern

Die meisten Code-Editoren verfügen über ein Erweiterungs- oder Plugin-System, mit dem Sie dem Programm Funktionen hinzufügen können, die ihm standardmäßig nicht zur Verfügung stehen. Diese können eine Vielzahl von Aufgaben erledigen, wie zum Beispiel:

- Aktivierung von Code-Vervollständigungs-, Linting- oder Debugging-Funktionalität für Sprachen, die standardmäßig nicht unterstützt werden, oder Bereitstellung zusätzlicher Funktionalität für diejenigen, die unterstützt werden.
- Ihnen ermöglichen, Funktionalitäten anderer Tools direkt im Code-Editor zu nutzen, wie Versionskontrolltools oder lokale Testserver.
- Bereitstellung zusätzlicher Benutzeroberflächen- oder Code-Hervorhebungsthemen/Farbschemata.
- Vorschläge für Code-Snippets, um Anforderungen zu erfüllen. Diese können aus statischen Vorlagen oder über KI-Tools generiert werden. Die Verwendung von KI zur Generierung von Code-Snippets hat viele der gleichen Vorteile und Vorbehalte wie die Verwendung zur Generierung von Suchergebnissen (siehe [Nach Informationen suchen > Verwendung von KI](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) für weitere Informationen).

VS Code-Erweiterungen werden über das Erweiterungs-Marktplatz-Panel in VS Code verwaltet, auf das Sie über das Menü _Anzeigen_ > _Erweiterungen_ zugreifen. Lassen Sie uns dies jetzt erkunden.

1. Öffnen Sie das Erweiterungs-Marktplatz-Panel.
2. Geben Sie "JavaScript" in das _Suchen..._-Feld oben im Panel ein, um zu sehen, welche JavaScript-bezogenen Erweiterungen verfügbar sind. Versuchen Sie, auf einige der Suchergebnisse zu klicken, die angezeigt werden, um zu sehen, was sie tun. Installieren Sie momentan keine davon.
3. Stattdessen installieren wir eine Erweiterung, die leicht zu verstehen ist und bei nahezu jeder Code-Datei nützlich ist, an der Sie in diesem Modul arbeiten. Geben Sie "Prettier" in das _Suchen..._-Feld ein und klicken Sie auf das Ergebnis _Prettier - Code formatter_. Wenn die [Prettier](https://prettier.io/)-Erweiterung installiert ist, kann sie verwendet werden, um Ihren Code jedes Mal beim Speichern einer Datei zu formatieren, was Ihren Code viel einfacher zu lesen macht.
4. Klicken Sie auf die Schaltfläche _Installieren_ auf der _Erweiterungs_-Registerkarte. Schließen Sie die Registerkarte, wenn die Installation abgeschlossen ist.
5. Um Prettier zum Laufen zu bringen, müssen Sie ein paar Einstellungen aktualisieren. Öffnen Sie die Registerkarte VS Code-Einstellungen (_Code_ > _Einstellungen..._ > _Einstellungen_ auf macOS, _Datei_ > _Voreinstellungen_ > _Einstellungen_ auf Windows).
6. Geben Sie "formatter" in das _Einstellungen durchsuchen_-Feld oben ein, um die Einstellliste zu filtern und nur die anzuzeigen, die "formatter" enthalten.
7. Finden Sie die Option _Editor: Standard-Formatter_ und wählen Sie die Option _Prettier - Code Formatter_ aus dem zugehörigen Dropdown-Menü.
8. Finden Sie die Option _Editor: Format On Save_ und aktivieren Sie es, indem Sie das Kontrollkästchen anklicken.
9. Schließen Sie die _Einstellungen_-Registerkarte.

Das ist die gesamte Einrichtung; lassen Sie uns Prettier in Aktion sehen.

1. Gehen Sie zurück zur Registerkarte Ihrer JavaScript-Datei und speichern Sie sie (_Datei_ > _Speichern_). Die Datei muss gespeichert werden, damit Prettier funktioniert. Nennen Sie es `test.js`. Der Ort, an dem Sie es speichern, spielt keine wirkliche Rolle.
2. Ersetzen Sie den aktuellen Inhalt durch den folgenden Code:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Speichern Sie die Datei erneut; Zu diesem Zeitpunkt sollte Prettier den Code schön formatieren, so wie hier:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
