---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn/JavaScript/Building_blocks/Build_your_own_function
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}

Nachdem im vorherigen Artikel die wesentliche Theorie behandelt wurde, bietet dieser Artikel praktische Erfahrung. Hier erhalten Sie Übung, Ihre eigene, benutzerdefinierte Funktion zu erstellen. Unterwegs erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript erste Schritte</a
        >. Außerdem <a href="/de/docs/Learn/JavaScript/Building_blocks/Functions"
          >Funktionen — wiederverwendbare Codeblöcke</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um etwas Übung im Erstellen einer benutzerdefinierten Funktion zu
        bieten und einige weitere nützliche zugehörige Details zu erklären.
      </td>
    </tr>
  </tbody>
</table>

## Aktives Lernen: Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, wird `displayMessage()` genannt. Sie wird ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite anzeigen und als maßgeschneiderter Ersatz für die eingebaute [alert()](/de/docs/Web/API/Window/alert)-Funktion eines Browsers dienen. Wir haben das schon einmal gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein:

```js
alert("This is a message");
```

Die `alert`-Funktion nimmt ein einziges Argument — den String, der im Benachrichtigungsfenster angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht so leicht etwas anderes variieren, wie Farbe, Symbol oder Anderes. Wir werden eine Funktion erstellen, die mehr Spaß machen wird.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern ein wenig merkwürdig aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die Basisfunktion

Fangen wir damit an, eine grundlegende Funktion zusammenzustellen.

> [!NOTE]
> Für Benennungsregeln von Funktionen sollten Sie dieselben Regeln wie für [Benennungsregeln von Variablen](/de/docs/Learn/JavaScript/First_steps/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie unterscheiden können — Funktionsnamen erscheinen mit Klammern nach sich, Variablen nicht.

1. Beginnen Sie damit, die [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html)-Datei aufzurufen und eine lokale Kopie zu erstellen. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur eine einzige Schaltfläche. Wir haben auch einige grundlegende CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als nächstes Folgendes in das `<script>`-Element ein:

   ```js-nolint
   function displayMessage() {
     ...
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Satz von Klammern und ein Satz von geschweiften Klammern. Alle Parameter, die wir unserer Funktion geben möchten, stehen in den Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, steht in den geschweiften Klammern.

3. Fügen Sie schließlich den folgenden Code in die geschweiften Klammern ein:

   ```js
   const body = document.body;

   const panel = document.createElement("div");
   panel.setAttribute("class", "msgBox");
   body.appendChild(panel);

   const msg = document.createElement("p");
   msg.textContent = "This is a message box";
   panel.appendChild(msg);

   const closeBtn = document.createElement("button");
   closeBtn.textContent = "x";
   panel.appendChild(closeBtn);

   closeBtn.addEventListener("click", () =>
     panel.parentNode.removeChild(panel),
   );
   ```

Das ist eine Menge Code, den wir durchgehen müssen, also gehen wir Stück für Stück durch.

Die erste Zeile wählt das {{htmlelement("body")}}-Element, indem sie die [DOM API](/de/docs/Web/API/Document_Object_Model) verwendet, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten und dies einer Konstanten namens `body` zuzuweisen, damit wir später Dinge damit machen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfeldes sein.

Dann verwenden wir eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem Panel mit einem Wert von `msgBox` zu setzen. Dies soll es einfacher machen, das Element zu stylen — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und seinen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten Konstante `body` auf, die ein Element als Kind eines anderen einnistet. Wir geben das Panel-`<div>` als das Kind an, das wir in das `<body>`-Element einfügen möchten. Wir müssen das tun, da das erstellte Element nicht alleine auf der Seite erscheint — wir müssen angeben, wo wir es platzieren möchten.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten zwei Abschnitte verwenden die bereits bekannten Funktionen `createElement()` und `appendChild()`, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}}- und ein {{htmlelement("button")}}-Element — und sie als Kinder des Panel-`<div>` in der Seite einzufügen. Wir verwenden ihre [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt —, um eine Nachricht in den Absatz einzufügen und ein "x" in die Schaltfläche. Diese Schaltfläche muss angeklickt/aktiviert werden, wenn der Benutzer das Nachrichtenfeld schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer die "Schließen"-Schaltfläche klickt. Der Code wird das gesamte Panel von der Seite löschen - um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird von der Schaltfläche bereitgestellt (oder in der Tat jedem Element auf der Seite), die eine Funktion und den Namen eines Ereignisses annehmen kann. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass wenn der Benutzer die Schaltfläche klickt, die Funktion ausgeführt wird. Sie werden viel mehr über Ereignisse in unserem [Ereignisartikel](/de/docs/Learn/JavaScript/Building_blocks/Events) erfahren. Die Zeile in der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild) DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das Panel-`<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Grundsätzlich generiert dieser ganze Codeblock einen Block von HTML, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, den wir durchgearbeitet haben — machen Sie sich keine Sorgen, wenn Sie sich nicht genau erinnern, wie jeder Teil davon funktioniert! Der Hauptteil, auf den wir hier den Fokus setzen möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten für dieses Beispiel etwas Interessantes zeigen.

## Die Funktion aufrufen

Sie haben jetzt die Funktionsdefinition in Ihr `<script>`-Element eingefügt, aber sie wird so, wie sie ist, nichts tun.

1. Versuchen Sie, die folgende Zeile unterhalb Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, wodurch sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und ihn im Browser neu laden, sehen Sie das kleine Nachrichtenfeld sofort erscheinen, aber nur einmal. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie nun die Entwicklerwerkzeuge Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, und Sie werden sehen, dass sie noch einmal erscheint! Das macht Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

   Aber höchstwahrscheinlich möchten wir, dass sie als Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde ein solches Nachrichtenfeld wahrscheinlich als Antwort auf neue verfügbare Daten, oder einen aufgetretenen Fehler angezeigt oder wenn der Benutzer versucht, sein Profil zu löschen ("Sind Sie sicher?"), oder wenn der Benutzer einen neuen Kontakt hinzufügt und der Vorgang erfolgreich abgeschlossen wurde usw.

   In diesem Demo werden wir das Nachrichtenfeld erscheinen lassen, wenn der Benutzer die Schaltfläche klickt.

3. Löschen Sie die zuvor hinzugefügte Zeile.
4. Als nächstes wählen wir die Schaltfläche aus und speichern eine Referenz darauf in einer Konstante. Fügen Sie die folgende Zeile über der Funktionsdefinition zu Ihrem Code hinzu:

   ```js
   const btn = document.querySelector("button");
   ```

5. Fügen Sie schließlich die folgende Zeile unter der vorherigen hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem Klick-Ereignis-Handler für `closeBtn` rufen wir hier Code als Reaktion auf einen Klick der Schaltfläche auf. Aber in diesem Fall rufen wir nicht eine anonyme Funktion mit einigem Code auf, sondern wir rufen unsere `displayMessage()`-Funktion namentlich auf.

6. Versuchen Sie, die Seite zu speichern und zu aktualisieren — jetzt sollten Sie sehen, dass das Nachrichtenfeld erscheint, wenn Sie die Schaltfläche klicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht hinzugefügt haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — nur nachdem die Schaltfläche geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern zu

```js
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass das Nachrichtenfeld erscheint, ohne dass die Schaltfläche geklickt wird! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufrufoperator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. Der Code innerhalb der anonymen Funktion wird ebenso nicht sofort ausgeführt, da er sich innerhalb des Funktionsbereichs befindet.

Wenn Sie das letzte Experiment ausprobiert haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie fortfahren.

## Verbesserung der Funktion mit Parametern

So wie sie aussieht, ist die Funktion immer noch nicht sehr nützlich — wir wollen nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, die es uns ermöglichen, sie mit verschiedenen Optionen aufzurufen.

1. Aktualisieren Sie zuerst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu diesem:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt, wenn wir die Funktion aufrufen, können wir zwei Variable Werte innerhalb der Klammern angeben, die die Nachricht festlegen, die im Nachrichtenfeld angezeigt wird, und den Typ der Nachricht.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie nun Ihren Funktionsaufruf aktualisieren, um einige aktualisierte Nachrichtentexte einzuschließen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in Klammern für die Funktion, die wir aufrufen, angeben möchten, können wir sie nicht direkt aufrufen — wir müssen sie innerhalb einer anonymen Funktion eingeben, damit sie nicht im unmittelbaren Bereich steht und deshalb nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn die Schaltfläche geklickt wird.

4. Laden Sie den Code erneut und versuchen Sie es noch einmal, und Sie werden sehen, dass er immer noch gut funktioniert, außer dass Sie jetzt auch die Nachricht innerhalb des Parameters ändern können, um unterschiedliche Nachrichten im Feld anzuzeigen!

### Ein komplexerer Parameter

Zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einstellen, dass je nachdem, was der `msgType`-Parameter gesetzt ist, die Funktion ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zuerst die für diese Übung benötigten Symbole ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chatsymbole wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Danke! (Die tatsächlichen Symbolseiten wurden seitdem verschoben oder entfernt.)

2. Finden Sie als nächstes das CSS in Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Symbole zu machen. Aktualisieren Sie zuerst die `.msgBox`-Breite von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als nächstes die folgenden Zeilen innerhalb der `.msgBox p { }`-Regel hinzu:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Nun müssen wir Code zu unserer `displayMessage()`-Funktion hinzufügen, um die Symbole anzuzeigen. Fügen Sie den folgenden Block direkt über der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = "url(icons/warning.png)";
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = "url(icons/chat.png)";
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Hier, wenn der `msgType`-Parameter als `'warning'` gesetzt ist, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels wird auf Rot gesetzt. Wenn es auf `'chat'` gesetzt ist, wird das Chatsymbol angezeigt und das Panel-Hintergrundfarbe wird auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht gesetzt ist (oder auf etwas anderes), dann kommt der `else { }` Teil des Codes zum Einsatz, und der Absatz erhält standardmäßige Polsterung und kein Symbol, mit keiner Hintergrundfarbe des Panels gesetzt. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter angegeben ist, was bedeutet, dass es ein optionaler Parameter ist!

5. Lassen Sie uns unsere aktualisierte Funktion testen, versuchen Sie den `displayMessage()`-Aufruf von diesem zu aktualisieren:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, können Sie Ihren Code gerne mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) ([sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html) ebenfalls) vergleichen, oder uns um Hilfe bitten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen beibehalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die im nächsten Artikel behandelt werden, also möchten Sie vielleicht zuerst diesen lesen, bevor Sie den Test versuchen.

## Fazit

Glückwunsch zum Erreichen des Endes! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit ein wenig mehr Arbeit in ein reales Projekt übertragen werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres wesentliches verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}
