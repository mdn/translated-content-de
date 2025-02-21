---
title: Code-Editor
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: f12c4c8c5128f0e84d1167f8a6285fc68c1eb8e2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Zuvor haben wir Ihnen gesagt, dass Sie einen Code-Editor installieren sollen, da Sie einen benötigen, um diesen Pfad zu durchlaufen. In diesem Artikel betrachten wir Code-Editoren genauer und geben Ihnen eine Vorstellung davon, was sie für Sie tun können.

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
          <li>Welche Code-Editoren verfügbar sind und welche für Ihre Zwecke geeignet sind.</li>
          <li>Was ein einfacher Code-Editor leisten kann.</li>
          <li>Was Code-Editor-Erweiterungen leisten können und wie man eine installiert.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Welche Code-Editoren sind verfügbar?

Bevor Sie mit dem Codieren beginnen, haben Sie möglicherweise bereits einige Erfahrungen mit der Arbeit an Textdokumenten in einem Programm wie Microsoft Word gemacht. Sie fragen sich vielleicht auch, ob Sie mit Code in denselben Programmen arbeiten können. Leider lautet die Antwort "nicht wirklich":

- Programme wie Microsoft Word sind **Binärdatei**-Editoren; ihre Dateien enthalten ein nicht-textliches Format, das nur von diesen Programmen verstanden werden kann. Website-Quellcode hingegen wird als Klartext gespeichert.
- Word _kann_ Klartextdateien öffnen und bearbeiten, aber es geht nicht sehr gut damit um. Es verfügt nicht über eine Funktionsausstattung, die für die Arbeit mit Code ausgelegt ist – es ist zum Schreiben von Dokumenten wie Briefen und Berichten bestimmt. Sie benötigen ein Programm, das dafür ausgelegt ist, Klartext sauber zu bearbeiten und auszugeben und mit Code zu arbeiten.

Sie haben wahrscheinlich bereits einen Klartext-Editor auf Ihrem Computer. Standardmäßig enthält Windows [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) und macOS kommt mit [TextEdit](https://en.wikipedia.org/wiki/TextEdit). Linux-Distributionen variieren; Die Ubuntu 22.04 LTS-Version kommt standardmäßig mit dem [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor). Standard-Betriebssystem-Klartext-Editoren können in Ordnung sein, aber sie haben auch eine begrenzte Funktionsausstattung.

Sie sind besser mit einem vollwertigen Code-Editor wie [Visual Studio Code](https://code.visualstudio.com/) (multiplattform, kostenlos), [Sublime Text](https://www.sublimetext.com/) (multiplattform, nicht kostenlos) oder [Notepad++](https://notepad-plus-plus.org/) (Windows, kostenlos) bedient.

Wir empfehlen Visual Studio Code (VS Code), da es der Editor ist, den wir hauptsächlich verwenden. Wenn Sie VS Code (oder einen anderen Code-Editor) noch nicht installiert haben, sollten Sie [es installieren, bevor Sie fortfahren](https://code.visualstudio.com/).

> [!NOTE]
> Integrierte Entwicklungsumgebungen (IDEs) wie [NetBeans](https://netbeans.apache.org/front/main/index.html) (multiplattform, kostenlos) und [WebStorm](https://www.jetbrains.com/webstorm/) (multiplattform, nicht kostenlos) verfügen tendenziell über mehr Funktionen als einfache Code-Editoren, sind jedoch in der Regel komplexer, als Sie es zu diesem Zeitpunkt in Ihrem Lernprozess benötigen.

## Basisfunktionen eines Code-Editors

In diesem Abschnitt betrachten wir einige der wichtigsten Funktionen, die Sie in Code-Editoren finden, und beschreiben, wie sie Ihnen bei Ihrer Programmierarbeit helfen können.

> [!NOTE]
> Die Abschnitte unten geben nur einen kurzen Überblick über das, was ein Code-Editor leisten kann. Für eine vollständigere Funktionsliste siehe die [Visual Studio Code-Dokumentation](https://code.visualstudio.com/docs) (oder suchen Sie im Web nach der Dokumentation Ihres gewählten Code-Editors, wenn Sie etwas anderes verwenden).

> [!NOTE]
> Wenn Sie ausschließlich mit der Tastatur arbeiten, beachten Sie, dass VS Code eine leistungsstarke Sammlung von Tastaturkürzeln hat. Siehe die VS Code [Standard-Tastaturkürzel-Referenz](https://code.visualstudio.com/docs/reference/default-keybindings).

### Öffnen und Bearbeiten von Dateien

Dies mag selbstverständlich erscheinen, aber die Installation eines Code-Editors ist nützlich, da er Ihnen eine einzige App bietet, die alle Code-Dateien öffnet, die Sie möglicherweise in Ihrer Entwicklungsarbeit verwenden möchten. Es gibt nichts Ärgerlicheres, als eine Datei auf Ihrem Computer doppelt zu klicken und sie öffnet sich in einer zufälligen, nicht verwandten App oder Ihr Betriebssystem sagt Ihnen, dass es diese Datei nicht erkennt.

Dies sollte alles automatisch erfolgen, wenn VS Code installiert wird. Sollten Sie jedoch weiterhin Probleme mit bestimmten Dateitypen haben, können Sie diese manuell so einstellen, dass sie über diese App geöffnet werden. Dies kann je nach Betriebssystem unterschiedlich sein. Um dies herauszufinden, gehen Sie zu Ihrer bevorzugten Suchmaschine und suchen Sie nach "wählen Sie aus, welches Programm einen Dateityp öffnet &lt;OS-Name-und-Nummer>" — zum Beispiel "wählen Sie aus, welches Programm einen Dateityp in Windows 11 öffnet", wenn Sie Windows 11 verwenden.

Sie finden viele weitere Informationen zum Öffnen und Bearbeiten von Dateien und Ordnern in unserem nächsten Artikel.

### Syntax-Highlighting

Code-Editoren wie VS Code bieten Syntax-Highlighting — das bedeutet, anerkannte Code-Features werden in unterschiedlichen Farben angezeigt. Dies macht den Code viel einfacher zu lesen, als wenn er alles in einer Farbe wäre. Lassen Sie uns die folgende JavaScript-Funktion als Beispiel verwenden:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Sie müssen jetzt noch nicht verstehen, was dieser Code macht, aber Sie können bereits sehen, wie Syntax-Highlighting aussieht. Ja, auch wir bieten Syntax-Highlighting auf MDN!

Versuchen wir eine Übung in VS Code:

1. Kopieren Sie das obige Codebeispiel in Ihre Zwischenablage (MDN-Codeblöcke haben in der oberen rechten Ecke ein Kopiersymbol, das Sie dazu drücken können).
2. Öffnen Sie VS Code und erstellen Sie eine neue Datei, indem Sie _Datei_ > _Neue Datei..._ wählen.
3. Klicken Sie in der neuen Datei auf den Text _Sprache auswählen_ und wählen Sie _JavaScript_ aus dem Dropdown-Menü, das sich öffnet.
4. Fügen Sie den Code in die neue Datei ein, um zu sehen, wie das JavaScript-Syntax-Highlighting von VS Code aussieht.

VS Code bietet auch andere Syntax-Funktionen. Zum Beispiel:

- Sie sehen eine dünne vertikale Linie, die sich von dem `function`-Schlüsselwort bis zur schließenden geschweiften Klammer (`}`) zieht — diese Linien markieren unterschiedliche [Einrückungs](https://en.wikipedia.org/wiki/Indentation_style)-Ebnen im Code und erleichtern das Erkennen, wo Blöcke beginnen und enden.
- Versuchen Sie auch, den blinkenden Textcursor über die öffnende oder schließende geschweifte Klammer (`{` oder `}`) zu bewegen — Sie sehen beide hervorgehoben. Dies hilft auch dabei, den Anfang und das Ende von Blöcken zu identifizieren und ist nützlich, wenn Sie versuchen zu finden, wo ein Zeichen bei einer komplexeren Struktur mit vielen geschachtelten Blöcken fehlt. Diese Hervorhebung funktioniert auch mit anderen Trennzeichen wie Klammern (`(` und `)`) und eckigen Klammern (`[` und `]`).

### Code-Vervollständigung/Vorschlag

Wenn Sie Code in einen Code-Editor eingeben, kann er oft vorschlagen, was Sie als nächstes eingeben sollten, und einige Boilerplate für Sie ausfüllen (was bedeutet, dass Standardcode, der immer gleich sein wird, eingefügt wird).

Probieren Sie dies jetzt in VS Code aus:

1. Gehen Sie zurück zu der JavaScript-Datei, die Sie im vorherigen Abschnitt erstellt haben.
2. Gehen Sie zum Ende der Datei und drücken Sie ein paar Mal <kbd>Enter</kbd>/<kbd>Return</kbd>, um sicherzustellen, dass Sie sich auf einer neuen Zeile befinden.
3. Beginnen Sie mit der Eingabe von "function" — eine Liste von Optionen sollte in einer Liste rechts neben Ihrem Text erscheinen.
4. Wählen Sie die Option _function_ mit _Function Statement_ rechts daneben. Dadurch wird der folgende Code für Sie ausgefüllt:

   ```js-nolint
   function name(params) {

   }
   ```

5. Klicken Sie in die Funktion auf die leere Zeile zwischen den beiden geschweiften Klammern. Beginnen Sie mit der Eingabe von "document" und Ihnen wird erneut eine Liste von Optionen angezeigt. Wählen Sie die erste. Dies ist ein Verweis auf das [`Document`](/de/docs/Web/API/Document)-Objekt (überlegen Sie nicht, was das jetzt bedeutet).
6. Geben Sie direkt nach `document` einen Punkt (`.`) ein — Sie erhalten erneut eine Liste von Optionen, diesmal mit allen Eigenschaften und Methoden, die dem `document`-Objekt zur Verfügung stehen!

Das reicht jetzt. Lassen Sie uns fortfahren.

### Debugging-Hilfe

Code-Editoren können nicht automatisch alle Ihre Code-Probleme beheben, aber sie können Ihnen sicherlich helfen, Tippfehler und andere einfache Fehler zu finden. Werfen wir einen Blick auf ein paar Beispiele.

1. Gehen Sie zurück zu Ihrer JavaScript-Datei und löschen Sie den gesamten derzeitigen Code darin. Ersetzen Sie ihn durch den folgenden:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Das kleine Kreuz-Symbol rechts vom obigen Code-Listing ist MDNs Art, auf ein schlechtes Codebeispiel hinzuweisen, und das zu recht — im obigen Code gibt es drei Fehler! Sehen Sie sich die Hervorhebung von VS Code an, um zu erkennen, wie es die Fehler hervorgehoben hat, dann gehen wir sie gemeinsam durch und beheben sie.
3. Der erste Fehler ist, dass wir `name` in der ersten Zeile und `Name` in der zweiten Zeile verwendet haben, um auf dieselbe Variable zu verweisen. Das ist ein Problem, weil JavaScript Groß- und Kleinschreibung unterscheidet und daher diese als zwei unterschiedliche Namen betrachtet. VS Code hat dies auf zwei verschiedene Arten hervorgehoben – indem es `name` dunkelgrau gefärbt hat, um anzuzeigen, dass der Wert deklariert, aber nie verwendet wird (oft ein gutes Anzeichen dafür, dass Sie irgendwo einen Tippfehler gemacht haben), und indem es drei Punkte unter `Name` gesetzt hat, um anzuzeigen, dass es einen Vorschlag für Sie hat, wie Sie den Code verbessern können (in diesem Fall durch die Frage, ob Sie `name` schreiben wollten). Um diesen Fehler zu beheben, ändern Sie `Name` zu `name`.
   > [!NOTE]
   > Sie können mit dem Mauszeiger über jeden der hervorgehobenen Punkte fahren, um mehr Informationen zu erhalten.
4. Der zweite Fehler ist in der sechsten Zeile, wo wir `"Chris` schreiben. In JavaScript muss ein Stück Text (bekannt als **String**) in zwei Anführungszeichen eingeschlossen sein, aber das zweite fehlt. VS Code hat dies dadurch hervorgehoben, dass der Text, an dem der Fehler zuerst bemerkt wird (dies ist möglicherweise nicht der genaue Ort, an dem der Fehler tatsächlich ist), mit einer gewellten roten Linie unterstrichen wird, ähnlich wie in Microsoft Word bei der Hervorhebung von Rechtschreibfehlern. Um dies zu beheben, aktualisieren Sie `"Chris` zu `"Chris"`.
5. In der letzten Zeile bleibt ein kleines Stück roten gewellten Unterstrichs nahe dem Ende, selbst nachdem wir den vorherigen Fehler behoben haben. Dies liegt am dritten Fehler — in JavaScript benötigt eine öffnende Klammer immer eine begleitende schließende Klammer. Beheben Sie dies durch Aktualisierung von `(helloChris` zu `(helloChris)`.

### Suchen und Ersetzen

Jeder lohnenswerte Code-Editor verfügt über eine robuste Suchen-und-Ersetzen-Funktion. Dies ist nützlich, wenn zum Beispiel ein Fehler in einer bestimmten Funktion auftritt und Sie diese im Code finden möchten, oder wenn Sie den Namen einer Variablen ändern und sicherstellen müssen, dass sie in allen Verweisen geändert wird.

Das Konzept von Suchen und Ersetzen sollte Ihnen recht vertraut sein, wenn Sie zuvor am Computer gearbeitet haben, aber lassen Sie uns aus Gründen der Vollständigkeit schnell darauf eingehen:

1. Gehen Sie zurück zu Ihrer JavaScript-Datei in VS Code und öffnen Sie das Suchen-und-Ersetzen-Panel im Suchmodus, indem Sie im Menü _Bearbeiten_ > _Suchen_ auswählen.
2. Geben Sie `createGreeting` in das _Suchen_-Feld ein – Sie sehen, dass beide Vorkommen hervorgehoben sind und Sie können mit den Pfeilen auf und ab im Panel zwischen ihnen wechseln. Die derzeit aktiv hervorgehobene Instanz hat die hellere Hervorhebung.
3. Öffnen Sie jetzt das Suchen-und-Ersetzen-Panel im Ersetzen-Modus, indem Sie im Menü _Bearbeiten_ > _Ersetzen_ auswählen oder auf den Pfeil links vom _Suchen_-Feld klicken.
4. Geben Sie `sayHello` in das _Ersetzen_-Feld ein, das jetzt sichtbar sein sollte.
5. Sie können nun alle Instanzen von `createGreeting` im Code mit `sayHello` durch die beiden Schaltflächen rechts vom _Ersetzen_-Feld ersetzen. Die linke Schaltfläche springt mit einem Klick zur nächsten Instanz des Suchstrings und ersetzt sie mit einem zweiten Klick. Die rechte Schaltfläche ersetzt alle Instanzen mit einem einzigen Klick.

VS Code verfügt über viele leistungsstarke Such- und Ersetzungs-Funktionen — siehe [Suchen und Ersetzen](https://code.visualstudio.com/docs/editor/codebasics#_find-and-replace).

## Ihren Code-Editor mit Erweiterungen aufwerten

Die meisten Code-Editoren verfügen über ein Erweiterungs- oder Plugin-System, das es Ihnen ermöglicht, dem Programm Funktionen hinzuzufügen, die standardmäßig nicht verfügbar sind. Diese können eine Vielzahl von Aufgaben erfüllen, wie zum Beispiel:

- Aktivieren von Code-Vervollständigung, Linting oder Debug-Funktionen für nicht standardmäßig unterstützte Sprachen oder zusätzliche Funktionen für die standardmäßig unterstützten.
- Ermöglichen der Nutzung von Funktionalitäten anderer Tools direkt im Code-Editor, wie Versionskontroll-Tools oder lokale Testserver.
- Bereitstellung zusätzlicher Benutzeroberflächen- oder Code-Highlighting-Themes/Farbschemata.
- Vorschlag von Code-Snippets zur Erfüllung von Anforderungen. Diese können aus statischen Vorlagen oder über KI-Tools generiert werden. Der Einsatz von KI zur Generierung von Code-Snippets hat viele der gleichen Vorteile und Vorbehalte wie die Verwendung für die Generierung von Suchergebnissen (siehe [Nach Informationen suchen > Einsatz von KI](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) für weitere Informationen).

VS Code-Erweiterungen werden über das Erweiterungs-Marktplatz-Panel in VS Code verwaltet, auf das Sie über das Menü _Ansicht_ > _Erweiterungen_ zugreifen können. Erkunden wir es jetzt.

1. Öffnen Sie das Erweiterungs-Marktplatz-Panel.
2. Geben Sie in das Suchfeld "JavaScript" am oberen Ende des Panels ein, um zu sehen, welche JavaScript-bezogenen Erweiterungen verfügbar sind. Versuchen Sie, auf einige der Suchergebnisse zu klicken, die erscheinen, um zu sehen, welche Arten von Dingen sie tun. Installieren Sie vorerst keine davon.
3. Stattdessen installieren wir eine Erweiterung, die leicht zu verstehen ist und für fast jede Code-Datei, an der Sie in diesem Modul arbeiten, nützlich sein wird. Geben Sie "Prettier" in das Suchfeld ein und klicken Sie auf das Ergebnis _Prettier - Code Formatter_. Wenn die [Prettier](https://prettier.io/)-Erweiterung installiert ist, kann sie verwendet werden, um Ihren Code jedes Mal zu formatieren, wenn Sie eine Datei speichern, wodurch Ihr Code viel einfacher zu lesen ist.
4. Klicken Sie auf die Schaltfläche _Installieren_ auf der _Erweiterung_-Registerkarte. Schließen Sie die Registerkarte, wenn die Installation abgeschlossen ist.
5. Um Prettier zum Arbeiten zu bringen, müssen Sie ein paar Einstellungen aktualisieren. Öffnen Sie die VS Code Einstellungen (_Code_ > _Einstellungen..._ > _Einstellungen_ auf macOS, _Datei_ > _Voreinstellungen_ > _Einstellungen_ auf Windows).
6. Geben Sie im _Einstellungen suchen_-Feld oben "formatter" ein, um die Einstellungsliste zu filtern und nur die anzuzeigen, die "formatter" enthalten.
7. Finden Sie die Option _Editor: Default Formatter_ und wählen Sie die Option _Prettier - Code formatter_ aus dem zugehörigen Dropdown-Menü aus.
8. Finden Sie die Option _Editor: Format On Save_ und aktivieren Sie sie, indem Sie das Kontrollkästchen anklicken.
9. Schließen Sie die _Einstellungen_-Registerkarte.

Das war's mit der Einrichtung; sehen wir uns Prettier in Aktion an.

1. Kehren Sie zur Registerkarte Ihrer JavaScript-Datei zurück und speichern Sie sie (_Datei_ > _Speichern_). Die Datei muss gespeichert sein, damit Prettier funktioniert. Nennen Sie sie `test.js`. Der Speicherort spielt keine große Rolle.
2. Ersetzen Sie den aktuellen Inhalt durch den folgenden Code:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Speichern Sie die Datei erneut; an diesem Punkt sollte Prettier den Code schön formatieren, so:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
