---
title: Bauen Sie Ihre eigene Funktion
slug: Learn/JavaScript/Building_blocks/Build_your_own_function
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}

Nachdem im vorherigen Artikel die wesentliche Theorie behandelt wurde, bietet dieser Artikel praktische Erfahrung. Hier erhalten Sie etwas Übung im Aufbau Ihrer eigenen benutzerdefinierten Funktion. Zudem erklären wir einige nützliche Details im Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >erste Schritte in JavaScript</a
        >. Außerdem <a href="/de/docs/Learn/JavaScript/Building_blocks/Functions"
          >Funktionen — wiederverwendbare Codeblöcke</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Ihnen einige Übungen zum Erstellen einer benutzerdefinierten Funktion bereitzustellen und einige weitere nützliche damit verbundene Details zu erklären.
      </td>
    </tr>
  </tbody>
</table>

## Aktives Lernen: Bauen wir eine Funktion

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie wird eine benutzerdefinierte Nachrichtenbox auf einer Webseite anzeigen und als angepasster Ersatz für die im Browser integrierte [alert()](/de/docs/Web/API/Window/alert)-Funktion dienen. Wir haben dies bereits gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers auf beliebiger Seite ein:

```js
alert("This is a message");
```

Die `alert`-Funktion nimmt ein einziges Argument — den String, der im Warnhinweisfeld angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber nicht einfach andere Sachen wie die Farbe, das Icon oder anderes variieren. Wir werden eine entwickeln, die mehr Spaß machen wird.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern einwandfrei funktionieren, aber das Styling könnte in etwas älteren Browsern etwas seltsam aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Zunächst einmal fügen wir eine grundlegende Funktion zusammen.

> [!NOTE]
> Bei der Namenskonvention von Funktionen sollten Sie denselben Regeln folgen wie bei den [Namenskonventionen für Variablen](/de/docs/Learn/JavaScript/First_steps/Variables#an_aside_on_variable_naming_rules). Dies ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern danach, während Variablen dies nicht tun.

1. Beginnen Sie, indem Sie die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) aufrufen und eine lokale Kopie davon erstellen. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur einen einzigen Button. Wir haben auch etwas grundlegendes CSS bereitgestellt, um die benutzerdefinierte Nachrichtenbox zu stylen, sowie ein leeres {{htmlelement("script")}}-Element, in das wir unser JavaScript einfügen.
2. Fügen Sie als Nächstes Folgendes innerhalb des `<script>`-Elements hinzu:

   ```js-nolint
   function displayMessage() {
     ...
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Satz von Klammern und ein Satz von geschweiften Klammern. Alle Parameter, die wir unserer Funktion geben möchten, kommen in die Klammern, und der Code, der beim Aufrufen der Funktion ausgeführt wird, kommt in die geschweiften Klammern.

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

Das ist eine Menge Code, aber wir werden ihn Schritt für Schritt durchgehen.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem sie die [DOM-API](/de/docs/Web/API/Document_Object_Model) verwendet, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten, und weist diese einer Konstante namens `body` zu, damit wir später damit arbeiten können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens {{domxref("document.createElement()")}}, um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unserer Nachrichtenbox sein.

Wir verwenden dann eine weitere DOM-API-Funktion namens {{domxref("Element.setAttribute()")}}, um ein `class`-Attribut an unserem Panel mit einem Wert von `msgBox` zu setzen. Dies erleichtert das Stylen des Elements — wenn Sie sich das CSS auf der Seite ansehen, sehen Sie, dass wir einen `.msgBox`-Klassenselektor verwenden, um die Nachrichtenbox und deren Inhalte zu stylen.

Schließlich rufen wir eine DOM-Funktion namens {{domxref("Node.appendChild()")}} für die zuvor gespeicherte `body`-Konstante auf, die ein Element als Kind eines anderen innerhalb davon verschachtelt. Wir geben das Panel-`<div>` als das Kind an, das wir innerhalb des `<body>`-Elements anhängen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach so auf der Seite erscheint — wir müssen angeben, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte nutzen dieselben `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des Panel-`<div>` auf der Seite zu platzieren. Wir verwenden deren {{domxref("Node.textContent")}}-Eigenschaft — die den Textinhalt eines Elements darstellt —, um eine Nachricht innerhalb des Paragraphen einzufügen und ein "x" innerhalb des Buttons. Dieser Button wird beim Schließen der Nachrichtenbox durch den Benutzer gedrückt/aktiviert werden müssen.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir {{domxref("EventTarget/addEventListener", "addEventListener()")}} auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "close"-Button anklickt. Der Code wird das gesamte Panel von der Seite löschen — um die Nachrichtenbox zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird von dem Button (oder eigentlich jedem Element auf der Seite) bereitgestellt, dem eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer den Button klickt. Sie werden viel mehr über Ereignisse in unserem [Ereignisse-Artikel](/de/docs/Learn/JavaScript/Building_blocks/Events) lernen. Die Zeile innerhalb der Funktion verwendet die {{domxref("Node.removeChild()")}} DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das Panel-`<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Grundsätzlich generiert dieser ganze Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code zum Durcharbeiten — machen Sie sich keine Sorgen, wenn Sie sich nicht sofort merken können, wie jedes Detail funktioniert! Der Hauptteil, auf den wir hier eingehen möchten, ist die Struktur und Nutzung der Funktion, aber wir wollten für dieses Beispiel etwas Interessantes zeigen.

## Aufrufen der Funktion

Sie haben nun Ihre Funktionsdefinition in Ihrem `<script>`-Element geschrieben, aber sie wird nicht ausgeführt, wie sie für sich allein steht.

1. Versuchen Sie, die folgende Zeile unterhalb Ihrer Funktion hinzuzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und lässt sie sofort ausführen. Wenn Sie Ihren Code speichern und ihn im Browser neu laden, sehen Sie, dass die kleine Nachrichten-Box sofort nur einmal erscheint. Wir rufen sie schließlich nur einmal auf.

2. Öffnen Sie nun Ihre Entwickler-Tools im Browser auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, Sie werden sehen, dass sie erneut erscheint! Das ist also lustig — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

   Aber höchstwahrscheinlich soll sie auf Benutzer- und Systemaktionen erscheinen. In einer realen Anwendung würde eine solche Nachrichtenbox wahrscheinlich in Reaktion auf neue verfügbare Daten aufgerufen werden, oder ein Fehler wäre aufgetreten, oder der Benutzer versucht, sein Profil zu löschen ("Sind Sie sich sicher?"), oder der Benutzer fügt einen neuen Kontakt hinzu und die Operation wird erfolgreich abgeschlossen, usw.

   In diesem Demo werden wir die Nachrichtenbox erscheinen lassen, wenn der Benutzer den Button klickt.

3. Löschen Sie die vorher hinzugefügte Zeile.
4. Als Nächstes wählen wir den Button aus und speichern eine Referenz zu ihm in einer Konstante. Fügen Sie folgende Zeile Ihrem Code über der Funktionsdefinition hinzu:

   ```js
   const btn = document.querySelector("button");
   ```

5. Fügen Sie schließlich die folgende Zeile unter der vorherigen hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Auf ähnliche Weise wie bei unserem closeBtn-Klick-Event-Handler rufen wir hier einigen Code auf, als Reaktion darauf, dass ein Button angeklickt wird. Aber in diesem Fall rufen wir anstelle einer anonymen Funktion, die etwas Code enthält, unsere `displayMessage()`-Funktion beim Namen auf.

6. Versuchen Sie, die Seite zu speichern und zu aktualisieren — jetzt sollten Sie sehen, dass die Nachrichtenbox erscheint, wenn Sie den Button klicken.

Vielleicht fragen Sie sich, warum wir die Klammern nicht nach dem Funktionsnamen eingefügt haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen wollen — nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in

```js
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass die Nachrichtenbox erscheint, ohne dass der Button geklickt wird! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufrufoperator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Umfang ausführen möchten. Im selben Sinne wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionsumfang befindet.

Wenn Sie das letzte Experiment versucht haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie fortfahren.

## Verbesserung der Funktion mit Parametern

Wie es derzeit steht, ist die Funktion immer noch nicht sehr nützlich — wir möchten nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, die es uns ermöglichen, sie mit einigen unterschiedlichen Optionen aufzurufen.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu dieser:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Nun können wir beim Aufrufen der Funktion zwei Variablenwerte in den Klammern angeben, um die Nachricht, die in der Nachrichtenbox angezeigt werden soll, sowie die Art der Nachricht zu spezifizieren.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie jetzt den Funktionsaufruf aktualisieren, um einen aktualisierten Nachrichtentext zu enthalten. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir die Parameter innerhalb der Klammern für die aufgerufene Funktion angeben möchten, können wir sie nicht direkt aufrufen — wir müssen sie innerhalb einer anonymen Funktion setzen, damit sie nicht im unmittelbaren Bereich ist und deshalb nicht sofort aufgerufen wird. Nun wird sie erst aufgerufen, nachdem der Button geklickt wurde.

4. Laden Sie den Code erneut und probieren Sie ihn aus, und Sie werden sehen, dass er immer noch einwandfrei funktioniert, außer dass Sie jetzt auch die Nachricht innerhalb des Parameters variieren können, um unterschiedliche Nachrichten in der Box anzuzeigen!

### Ein komplexerer Parameter

Weiter zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so setzen, dass je nachdem, auf was der Parameter `msgType` gesetzt ist, die Funktion ein anderes Icon und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zunächst die für diese Übung benötigten Icons ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` an dem gleichen Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Icons wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Vielen Dank! (Die tatsächlichen Icon-Seiten wurden inzwischen verschoben oder entfernt.)

2. Suchen Sie als Nächstes das CSS in Ihrer HTML-Datei. Wir werden ein paar Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zuerst die Breite der `.msgBox` von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als Nächstes die folgenden Zeilen in die Regel `.msgBox p { }` ein:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Jetzt müssen wir Code zu unserer `displayMessage()`-Funktion hinzufügen, um das Anzeigen der Icons zu handhaben. Fügen Sie folgenden Block direkt oberhalb der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier wird, wenn der `msgType`-Parameter auf `'warning'` gesetzt ist, das Warn-Icon angezeigt und die Hintergrundfarbe des Panels auf Rot gestellt. Wenn es auf `'chat'` gesetzt ist, wird das Chat-Icon angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht gesetzt ist (oder auf etwas anderes), dann wird der `else { }`-Teil des Codes aktiv, und der Paragraph erhält eine Standardausstattung und kein Icon, wobei keine Hintergrundfarbe des Panels ebenfalls gesetzt wird. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter angegeben wird, was bedeutet, dass er ein optionaler Parameter ist!

5. Testen wir nun unsere aktualisierte Funktion. Versuchen Sie, den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser zu aktualisieren:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (nun nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, können Sie Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) ([sehen Sie es auch live laufend](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)) überprüfen oder uns um Hilfe bitten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die im nächsten Artikel behandelt werden, daher möchten Sie diesen eventuell zuerst lesen, bevor Sie den Test versuchen.

## Fazit

Glückwunsch zum Erreichen des Endes! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit etwas mehr Arbeit in ein echtes Projekt transplantiert werden könnte. Im nächsten Artikel werden wir Funktionen abschließend betrachten, indem wir ein weiteres essentielles damit verbundenes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}
