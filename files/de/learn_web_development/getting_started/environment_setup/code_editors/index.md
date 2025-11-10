---
title: Code-Editor
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Wir haben Ihnen bereits empfohlen, einen Code-Editor zu installieren, da Sie einen benötigen, um diesen Pfad zu durchlaufen. In diesem Artikel betrachten wir Code-Editoren genauer und geben Ihnen eine Vorstellung davon, was sie für Sie tun können.

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

Bevor Sie mit dem Programmieren beginnen, haben Sie möglicherweise bereits Erfahrung mit Textdokumenten in einem Programm wie Microsoft Word gemacht. Sie könnten sich auch fragen, ob Sie den Code in denselben Programmen bearbeiten können. Leider lautet die Antwort „nicht wirklich“:

- Programme wie Microsoft Word sind **Binary file**-Editoren; ihre Dateien enthalten ein Nicht-Text-Format, das nur von diesen Programmen verstanden werden kann. Der Quellcode einer Website hingegen wird als Klartext gespeichert.
- Word _kann_ Klartextdateien öffnen und bearbeiten, aber es kann sie nicht sehr gut verarbeiten. Es verfügt nicht über eine Funktionalität, die für die Arbeit mit Code ausgelegt ist – es dient dem Schreiben von Dokumenten wie Briefen und Berichten. Sie benötigen ein Programm, das sauber mit Klartext umgehen und Code verarbeiten kann.

Sie haben wahrscheinlich bereits einen Klartexteditor auf Ihrem Computer. Standardmäßig enthält Windows [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) und macOS kommt mit [TextEdit](https://en.wikipedia.org/wiki/TextEdit). Bei Linux-Distributionen variiert es; die Ubuntu 22.04 LTS-Version enthält standardmäßig den [GNOME Text Editor](https://en.wikipedia.org/wiki/GNOME_Text_Editor). Standardmäßige Betriebssystem-Klartexteditoren können in Ordnung sein, haben aber auch einen begrenzten Funktionsumfang.

Sie sind besser mit einem vollwertigen Code-Editor wie [Visual Studio Code](https://code.visualstudio.com/) (multiplattform, kostenlos), [Sublime Text](https://www.sublimetext.com/) (multiplattform, nicht kostenlos) oder [Notepad++](https://notepad-plus-plus.org/) (Windows, kostenlos) aufgehoben.

Wir würden Visual Studio Code (VS Code) empfehlen, da es der Editor ist, den wir hauptsächlich verwenden. Wenn Sie VS Code (oder einen anderen Code-Editor) noch nicht installiert haben, sollten Sie [es installieren, bevor Sie fortfahren](https://code.visualstudio.com/).

> [!NOTE]
> Integrierte Entwicklungsumgebungen (IDEs) wie [NetBeans](https://netbeans.apache.org/front/main/index.html) (multiplattform, kostenlos) und [WebStorm](https://www.jetbrains.com/webstorm/) (multiplattform, nicht kostenlos) haben mehr Funktionen als einfache Code-Editoren, sind aber in der Regel komplexer, als Sie es in diesem Stadium Ihres Lernweges benötigen.

## Grundlegende Funktionen eines Code-Editors

In diesem Abschnitt werfen wir einen Blick auf einige der wichtigsten Funktionen, die Sie in Code-Editoren finden, und beschreiben, wie sie Ihnen bei Ihrer Codierungsarbeit helfen können.

> [!NOTE]
> Die folgenden Abschnitte kratzen nur an der Oberfläche dessen, was ein Code-Editor leisten kann. Für eine umfassendere Feature-Liste lesen Sie die [Visual Studio Code-Dokumentation](https://code.visualstudio.com/docs) (oder suchen Sie im Internet nach der Dokumentation Ihres ausgewählten Code-Editors, wenn Sie etwas anderes verwenden).

> [!NOTE]
> Wenn Sie ein reiner Tastaturbenutzer sind, sollten Sie wissen, dass VS Code eine leistungsstarke Reihe von Tastenkombinationen besitzt. Siehe die VS Code [Standard-Tastenkombinationen-Referenz](https://code.visualstudio.com/docs/reference/default-keybindings).

### Öffnen und Bearbeiten von Dateien

Dies mag offensichtlich erscheinen, aber die Installation eines Code-Editors ist nützlich, da Sie eine einzige App erhalten, die alle Code-Dateien öffnet, die Sie während Ihrer Entwicklung verwenden möchten. Es gibt nichts Ärgerlicheres, als auf eine Datei auf Ihrem Computer zu doppelklicken und sie in einer zufälligen, nicht verwandten App öffnen zu lassen oder Ihr Betriebssystem Ihnen mitzuteilen, dass es die Datei nicht erkennt.

Dies sollte alles automatisch beim Installieren von VS Code geschehen, aber wenn Sie immer noch Probleme mit bestimmten Dateitypen haben, können Sie diese manuell so einstellen, dass sie mit dieser App geöffnet werden. Dies kann je nach Betriebssystem variieren. Um dies herauszufinden, gehen Sie zu Ihrer bevorzugten Suchmaschine und suchen Sie nach „wählen Sie, welche Anwendung einen Dateityp öffnet &lt;OS-Name-und-Nummer>“ – zum Beispiel „wählen Sie, welche Anwendung einen Dateityp Windows 11 öffnet“, wenn Sie Windows 11 verwenden.

Sie können in unserem nächsten Artikel viel mehr Informationen über das Öffnen und Bearbeiten von Dateien und Ordnern finden.

### Syntax-Hervorhebung

Code-Editoren wie VS Code bieten Syntax-Hervorhebung – das heißt, erkannte Code-Merkmale werden in verschiedenen Farben dargestellt. Dies macht den Code viel einfacher zu lesen, als ihn vollständig in einer Farbe zu färben. Verwenden wir die folgende JavaScript-Funktion als Beispiel:

```js
function createGreeting(name) {
  const greeting = `Hello, ${name}!`;
  return greeting;
}
```

Sie müssen momentan nicht verstehen, was dieser Code macht, aber Sie können bereits sehen, wie die Syntax-Hervorhebung oben aussieht. Ja, wir bieten auch Syntax-Hervorhebung auf MDN an!

Lassen Sie uns eine Übung in VS Code versuchen:

1. Kopieren Sie das obige Code-Beispiel in Ihre Zwischenablage (MDN-Code-Blöcke haben ein Kopiersymbol in der oberen rechten Ecke, auf das Sie klicken können, um dies zu tun).
2. Öffnen Sie VS Code und erstellen Sie eine neue Datei, indem Sie _Datei_ > _Neue Datei..._ wählen.
3. Klicken Sie in der neuen Datei auf den Text _Sprache auswählen_ und wählen Sie _JavaScript_ aus dem sich öffnenden Drop-down-Menü.
4. Fügen Sie den Code in die neue Datei ein, um zu sehen, wie die JavaScript-Syntax-Hervorhebung von VS Code aussieht.

VS Code bietet auch andere Syntax-Funktionen. Zum Beispiel:

- Sie sehen eine dünne vertikale Linie, die sich vom `function`-Schlüsselwort bis zur schließenden geschweiften Klammer (`}`) erstreckt – diese Linien markieren verschiedene [Einrückungsstile](https://en.wikipedia.org/wiki/Indentation_style) in Code, wodurch es einfacher wird, zu erkennen, wo Blöcke beginnen und enden.
- Versuchen Sie auch, den blinkenden Text-Cursor über die öffnende oder schließende geschweifte Klammer (`{` oder `}`) zu bewegen – Sie werden beide hervorgehoben sehen. Dies hilft auch, den Anfang und das Ende von Blöcken zu identifizieren und ist nützlich, wenn Sie versuchen, herauszufinden, wo Sie ein Zeichen wie in einer komplizierteren Struktur mit vielen verschachtelten Blöcken vermissen. Diese Hervorhebung funktioniert auch mit anderen Trennzeichen wie runden Klammern (`(` und `)`) und eckigen Klammern (`[` und `]`).

### Code-Vervollständigung/Vorschlag

Wenn Sie Code in einen Code-Editor eingeben, kann er oft vorschlagen, was Sie als Nächstes eintippen sollten, und einige Vorlagen für Sie ausfüllen (dies bedeutet Standardcode, der immer gleich sein wird).

Probieren Sie dies jetzt in VS Code:

1. Gehen Sie zurück zu der JavaScript-Datei, die Sie im vorherigen Abschnitt erstellt haben.
2. Gehen Sie unten in der Datei ein paar Mal auf <kbd>Eingabe</kbd>/<kbd>Return</kbd>, um sicherzustellen, dass Sie sich in einer neuen Zeile befinden.
3. Beginnen Sie, „function“ einzutippen – eine Liste von Optionen sollte rechts neben Ihrem Text erscheinen.
4. Wählen Sie die _function_-Option mit dem _Function Statement_ auf ihrer rechten Seite geschrieben. Es wird den folgenden Code für Sie ausfüllen:

   ```js-nolint
   function name(params) {

   }
   ```

5. Klicken Sie in die Funktion auf die leere Zeile zwischen den zwei geschweiften Klammern. Beginnen Sie, „document“ einzutippen, und Sie werden wieder eine Liste von Optionen erhalten. Wählen Sie die erste aus. Dies ist ein Verweis auf das [`Document`](/de/docs/Web/API/Document)-Objekt (wiederum, machen Sie sich jetzt keine Sorgen darüber, was das bedeutet).
6. Geben Sie sofort nach `document` einen Punkt (`.`) ein – Sie erhalten erneut eine Liste von Optionen, diesmal mit allen Eigenschaften und Methoden, die das `document`-Objekt bietet!

Das reicht fürs Erste. Lassen Sie uns weitermachen.

### Debugging-Hilfe

Code-Editoren können nicht automatisch alle Ihre Code-Probleme beheben, aber sie können Ihnen sicherlich helfen, Tippfehler und andere einfache Fehler zu finden. Lassen Sie uns ein paar Beispiele ansehen.

1. Kehren Sie zu Ihrer JavaScript-Datei zurück und löschen Sie den gesamten Code, den Sie derzeit dort haben. Ersetzen Sie ihn durch Folgendes:

   ```js-nolint example-bad
   function createGreeting(name) {
     const greeting = `Hello, ${Name}!`;
     return greeting;
   }

   const helloChris = createGreeting("Chris);

   console.log(helloChris;
   ```

2. Das kleine Kreuzsymbol rechts neben der obigen Code-Liste ist die Art von MDN, ein schlechtes Code-Beispiel anzuzeigen, und sehr richtig – es gibt drei Fehler im obigen Code! Schauen Sie sich die Hervorhebung von VS Code an, um zu sehen, ob Sie erkennen können, wie es die Fehler hervorgehoben hat. Dann werden wir diese gemeinsam durchgehen und beheben.
3. Der erste Fehler besteht darin, dass wir im ersten Zeilencode `name` verwendet haben, aber `Name` in der zweiten Zeile, um auf dieselbe Variable zu verweisen. Das ist ein Problem, weil JavaScript case-sensitiv ist und daher diese als zwei unterschiedliche Namen behandelt. VS Code hat dies auf zwei verschiedene Arten hervorgehoben – indem es `name` dunkelgrau färbt, um anzuzeigen, dass der Wert deklariert, aber nie verwendet wird (oft ein guter Hinweis darauf, dass Sie irgendwo einen Tippfehler gemacht haben), und indem es drei Punkte unter `Name` setzt, um anzuzeigen, dass es einen Vorschlag zur Verbesserung des Codes hat (in diesem Fall um zu fragen, ob Sie `name` schreiben wollten). Um diesen Fehler zu beheben, ändern Sie `Name` zu `name`.
   > [!NOTE]
   > Sie können über die hervorgehobenen Abschnitte mit dem Mauszeiger fahren, um mehr Informationen zu erhalten.
4. Der zweite Fehler befindet sich in der sechsten Zeile, wo wir `"Chris` schreiben. In JavaScript muss ein Textstück (als **string** bekannt) in zwei Anführungszeichen eingeschlossen sein, aber das zweite fehlt. VS Code hat dies durch eine Unterstreichung des Textes markiert, wo der Fehler zuerst bemerkt wird (es könnte nicht der genaue Ort sein, an dem der Fehler tatsächlich liegt), mit einer wellenförmigen roten Linie, ähnlich der, die in Microsoft Word zur Hervorhebung von Rechtschreibfehlern verwendet wird. Um dies zu beheben, aktualisieren Sie `"Chris` zu `"Chris"`.
5. In der letzten Zeile bleibt ein kleines bisschen roter wellenförmiger Unterstreichung in der Nähe des Endes, selbst nachdem wir den vorherigen Fehler behoben haben. Dies liegt am dritten Fehler – in JavaScript benötigt eine öffnende Klammer immer eine dazugehörige schließende Klammer. Beheben Sie dies, indem Sie `(helloChris` zu `(helloChris)` aktualisieren.

### Suchen und Ersetzen

Jeder lohnenswerte Code-Editor hat eine robuste Suche- und Ersetzen-Funktion. Dies ist nützlich, beispielsweise wenn Sie herausfinden, dass ein Fehler in einer bestimmten Funktion auftritt und Sie möchten ihn in Ihrem Code finden, oder wenn Sie sich entscheiden, den Namen einer Variablen zu ändern und sicherstellen müssen, dass sie an allen Stellen geändert wird, die auf sie verweisen.

Das Konzept der Suche und des Ersetzens dürfte Ihnen einigermaßen vertraut sein, wenn Sie zuvor einen Computer benutzt haben, aber lassen Sie es uns schnell der Vollständigkeit halber erkunden:

1. Gehen Sie zurück zu Ihrer JavaScript-Datei in VS Code und öffnen Sie das Such- und Ersetzen-Panel im Suchmodus, indem Sie _Bearbeiten_ > _Suchen_ aus dem Menü wählen.
2. Geben Sie `createGreeting` in das _Finden_-Feld ein – Sie werden sehen, dass beide Vorkommen hervorgehoben sind, und Sie können zwischen ihnen mit den Aufwärts- und Abwärtspfeilen im Panel bewegen. Das derzeit aktiv hervorgehobene Vorkommen hat die hellere Hervorhebung.
3. Öffnen Sie nun das Such- und Ersetzen-Panel im Ersetzmodus, indem Sie _Bearbeiten_ > _Ersetzen_ aus dem Menü wählen oder auf den Pfeil links neben dem _Finden_-Feld klicken.
4. Geben Sie `sayHello` in das jetzt sichtbare _Ersetzen_-Feld ein.
5. Sie können nun alle Vorkommen von `createGreeting` im Code durch `sayHello` ersetzen, indem Sie die zwei Schaltflächen rechts vom _Ersetzen_-Feld verwenden. Die linke Schaltfläche bewegt sich mit einem Klick zur nächsten Instanz des Suchstrings und ersetzt es mit einem zweiten Klick. Die rechte Schaltfläche ersetzt alle Instanzen mit einem einzigen Klick.

VS Code hat viele leistungsstarke Such- und Ersetzen-Funktionen – siehe [Suchen und Ersetzen](https://code.visualstudio.com/docs/editing/codebasics#_find-and-replace).

## Ihren Code-Editor mit Erweiterungen verbessern

Die meisten Code-Editoren haben ein Erweiterungs- oder Plug-in-System, das es Ihnen ermöglicht, dem Programm Funktionalität hinzuzufügen, die nicht standardmäßig verfügbar ist. Diese können eine Vielzahl von Aufgaben erledigen, wie zum Beispiel:

- Aktivieren von Code-Vervollständigungs-, Linting- oder Debugging-Funktionen für Sprachen, die standardmäßig nicht unterstützt werden, oder zusätzliche Funktionen für solche, die sind.
- Ermöglichen, die Funktionalität anderer Tools direkt im Code-Editor zu nutzen, wie Versionskontroll-Tools oder lokale Test-Server.
- Zusätzliches Benutzeroberflächen- oder Code-Hervorhebungs-Themen/Farbsceme bereitstellen.
- Vorschlagen von Codeschnipseln zur Erfüllung von Anforderungen. Diese können aus statischen Vorlagen oder durch KI-Tools generiert werden. Die Verwendung von KI zur Erstellung von Codeschnipseln hat viele der gleichen Vorteile und Vorbehalte wie die Verwendung zur Erstellung von Suchergebnissen (siehe [Suche nach Informationen > KI verwenden](/de/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai) für weitere Informationen).

### Erforschen von VS Code-Erweiterungen

VS Code-Erweiterungen werden über das Erweiterungsmarkt-Panel in VS Code verwaltet, das über das _Ansicht_ > _Erweiterungen_-Menü aufgerufen wird. Lassen Sie es uns nun erkunden.

1. Öffnen Sie das Erweiterungsmarkt-Panel.
2. Geben Sie im _Suchen..._-Feld oben im Panel „JavaScript“ ein, um zu sehen, welche JavaScript-bezogenen Erweiterungen verfügbar sind. Versuchen Sie, auf einige der Suchergebnisse zu klicken, die erscheinen, um zu sehen, welche Art von Dingen sie tun. Installieren Sie vorerst keine von ihnen.
3. Stattdessen lassen Sie uns eine Erweiterung installieren, die leicht zu verstehen ist und für so ziemlich jede Code-Datei, an der Sie in diesem Satz von Modulen arbeiten, nützlich sein wird. Geben Sie „Prettier“ in das _Suchen..._-Feld ein und klicken Sie auf das _Prettier - code formatter_-Ergebnis. Wenn die [Prettier](https://prettier.io/)-Erweiterung installiert ist, kann sie verwendet werden, um Ihren Code jedes Mal zu formatieren, wenn Sie eine Datei speichern, wodurch Ihr Code deutlich leichter lesbar wird.
4. Klicken Sie im _Erweiterung_-Reiter auf die Schaltfläche _Installieren_. Schließen Sie den Reiter, wenn die Installation abgeschlossen ist.
5. Um Prettier zum Laufen zu bringen, müssen Sie ein paar Einstellungen aktualisieren. Öffnen Sie den Einstellungen-Reiter von VS Code (_Code_ > _Einstellungen..._ > _Einstellungen_ auf macOS, _Datei_ > _Einstellungen_ > _Einstellungen_ auf Windows).
6. Geben Sie in das _Einstellungen durchsuchen_-Feld oben „formatter“ ein, um die Einstellungs-Liste zu filtern und nur die anzuzeigen, die „formatter“ enthalten.
7. Finden Sie die Option _Editor: Default Formatter_ und wählen Sie die Option _Prettier - Code Formatter_ aus dem zugehörigen Drop-down-Menü.
8. Finden Sie die Option _Editor: Beim Speichern formatieren_ und aktivieren Sie sie, indem Sie das Kontrollkästchen anklicken.
9. Schließen Sie den _Einstellungen_-Reiter.

Das war alles für die Einrichtung; lassen Sie uns Prettier in Aktion sehen.

1. Gehen Sie zurück zum Reiter Ihrer JavaScript-Datei und speichern Sie sie (_Datei_ > _Speichern_). Die Datei muss gespeichert werden, damit Prettier funktioniert. Nennen Sie sie `test.js`. Der Speicherort spielt keine wirkliche Rolle.
2. Ersetzen Sie den aktuellen Inhalt durch den folgenden Code:

   ```js-nolint example-bad
   function sayHello(name){const greeting = `Hello, ${name}!`;
   return greeting;}
   ```

3. Speichern Sie die Datei erneut; zu diesem Zeitpunkt sollte Prettier den Code schön neu formatieren, so:

   ```js
   function sayHello(name) {
     const greeting = `Hello, ${name}!`;
     return greeting;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
