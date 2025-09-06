---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 1116fb43ddf8b79a63dbb876fe3e765b8284b16f
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Mit den meisten der wesentlichen Theorien, die im vorherigen Artikel behandelt wurden, bietet dieser Artikel praktische Erfahrung. Hier werden Sie etwas Übung im Erstellen Ihrer eigenen, benutzerdefinierten Funktion bekommen. Unterwegs erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den Grundlagen von JavaScript-Funktionen, wie im vorherigen Lernkapitel behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrungen im Erstellen von benutzerdefinierten Funktionen.</li>
          <li>Hinzufügen von Parametern zu Ihren Funktionen.</li>
          <li>Aufrufen Ihrer Funktion.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Lass uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie wird ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite anzeigen und als maßgeschneiderter Ersatz für die im Browser integrierte [`alert()`](/de/docs/Web/API/Window/alert)-Funktion dienen. Wir haben das schon einmal gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie das Folgende in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einzelnes Argument — die Zeichenkette, die im Warnfeld angezeigt wird. Versuchen Sie die Zeichenkette zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht einfach andere Dinge wie die Farbe oder das Symbol variieren. Wir werden eine Funktion erstellen, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern ein wenig seltsam aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Um zu beginnen, erstellen wir eine grundlegende Funktion.

> [!NOTE]
> Bei Konventionen zur Benennung von Funktionen sollten Sie die gleichen Regeln wie bei [Variablenbenennungskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern dahinter, Variablen nicht.

1. Beginnen Sie mit dem Zugriff auf die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) und erstellen Sie eine lokale Kopie. Sie werden sehen, dass das HTML einfach ist — der Körper enthält nur einen einzigen Button. Wir haben auch einige grundlegende CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu gestalten, sowie ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als nächstes Folgendes in das `<script>` Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Dies wird gefolgt vom Namen, den wir unserer Funktion geben möchten, einem Satz von Klammern und einem Satz geschweifter Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, geht in die geschweiften Klammern.

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

Das ist eine Menge Code, um ihn durchzugehen, also gehen wir ihn Schritt für Schritt durch.

Die erste Zeile wählt das {{htmlelement("body")}}-Element durch Verwendung der [DOM API](/de/docs/Web/API/Document_Object_Model), um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts abzurufen und sie einer Konstante namens `body` zuzuweisen, damit wir später damit arbeiten können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstante namens `panel` zu speichern. Dieses Element wird das äußere Container unseres Nachrichtenfeldes sein.

Wir verwenden dann eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut mit einem Wert von `msgBox` auf unserem Panel festzulegen. Dies erleichtert das Stylen des Elements — wenn Sie sich das CSS auf der Seite ansehen, sehen Sie, dass wir eine `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und seine Inhalte zu gestalten.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstanten auf, die ein Element in ein anderes als dessen Kind einfügt. Wir geben das Panel `<div>` als das Kind an, das wir in das `<body>`-Element einfügen möchten. Wir müssen dies tun, da das von uns erstellte Element nicht von alleine auf der Seite erscheint — wir müssen den Ort angeben, an dem wir es einfügen möchten.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden die gleichen `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des Panel-`<div>` in die Seite einzufügen. Wir verwenden die [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt —, um eine Nachricht in den Absatz und ein "x" in den Button einzufügen. Dieser Button wird das sein, was beim Klicken/Aktivieren durch den Benutzer benötigt wird, um das Nachrichtenfeld zu schließen.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer auf die Schaltfläche "Schließen" klickt. Der Code entfernt das gesamte Panel von der Seite — um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird von der Schaltfläche bereitgestellt (oder tatsächlich von jedem beliebigen Element auf der Seite), an die eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Name des Ereignisses "click", was bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer die Schaltfläche anklickt. Sie werden viel mehr über Ereignisse in unserem [Ereignis-Artikel](/de/docs/Learn_web_development/Core/Scripting/Events) erfahren. Die Zeile innerhalb der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)-DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements — in diesem Fall das Panel `<div>` — entfernen möchten.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Im Wesentlichen generiert dieser gesamte Codeblock einen HTML-Block, der folgendermaßen aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, um ihn durchzuarbeiten — machen Sie sich keine Sorgen, wenn Sie sich jetzt nicht genau merken, wie jedes Detail funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren wollen, ist die Struktur und Nutzung der Funktion, aber wir wollten etwas Interessantes für dieses Beispiel zeigen.

## Die Funktion aufrufen

Sie haben jetzt Ihre Funktionsdefinition in Ihrem `<script>`-Element geschrieben, aber so wie sie ist, wird sie nichts tun.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, sodass sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und im Browser neu laden, wird das kleine Nachrichtenfeld sofort und nur einmal angezeigt. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie jetzt die Entwicklerwerkzeuge Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, und Sie werden sehen, dass sie erneut erscheint! Das macht also Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

Wir wollen jedoch wahrscheinlich, dass das Nachrichtenfeld in Reaktion auf Benutzer- und Systemaktionen erscheint. In einer realen Anwendung würde ein solches Nachrichtenfeld wahrscheinlich in Reaktion auf neue verfügbare Daten, einen aufgetretenen Fehler, den Versuch des Benutzers, sein Profil zu löschen ("Sind Sie sicher?"), oder den Abschluss einer erfolgreichen Operation beim Hinzufügen eines neuen Kontakts aufgerufen werden.

In diesem Demo werden wir das Nachrichtenfeld erscheinen lassen, wenn der Benutzer die Schaltfläche anklickt.
Folgen Sie diesen Schritten, um es zum Laufen zu bringen:

1. Löschen Sie die zuvor hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element aus und speichern Sie eine Referenz darauf in einer Konstanten. Fügen Sie die folgende Zeile zu Ihrem Code über die Funktionsdefinition hinzu:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Ereignis-Listener für Klicks auf den Button, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der `const btn =`-Zeile hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem click-Ereignis-Handler von closeBtn rufen wir hier einen Code in Reaktion auf einen Klick des Benutzers auf einen Button auf. Aber in diesem Fall rufen wir nicht eine anonyme Funktion mit ein bisschen Code auf, sondern unsere `displayMessage()`-Funktion mit ihrem Namen.

4. Speichern und aktualisieren Sie abschließend die Seite — jetzt sollte das Nachrichtenfeld erscheinen, wenn Sie die Schaltfläche anklicken.

Sie fragen sich vielleicht, warum wir die Klammern nicht nach dem Funktionsnamen eingeschlossen haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen wollen — nur nach dem Klicken auf den Button. Wenn Sie versuchen, die Zeile zu ändern in

```js example-bad
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass das Nachrichtenfeld erscheint, ohne dass der Button geklickt wurde! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. In gleicher Weise wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich innerhalb des Bereichs der Funktion befindet.

Wenn Sie das letzte Experiment versucht haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie fortfahren.

## Verbesserung der Funktion mit Parametern

So wie es jetzt ist, ist die Funktion immer noch nicht sehr nützlich — wir möchten nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, sodass wir sie mit einigen unterschiedlichen Optionen aufrufen können.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu dieser:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt, wenn wir die Funktion aufrufen, können wir zwei Variable Werte in die Klammern setzen, um die anzuzeigende Nachricht im Nachrichtenfeld anzugeben und den Typ der Nachricht zu bestimmen.

2. Um den ersten Parameter zu verwenden, aktualisieren Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie jetzt Ihren Funktionsaufruf aktualisieren, um einen aktualisierten Nachrichtentext zu enthalten. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in Klammern für die Funktion angeben möchten, die wir aufrufen, dann können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion einfügen, damit sie nicht im unmittelbaren Bereich liegt und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button angeklickt wird.

4. Laden Sie die Seite neu und probieren Sie den Code erneut aus. Sie werden sehen, dass er immer noch gut funktioniert, aber jetzt können Sie auch die Nachricht im Parameter variieren, um verschiedene Nachrichten in dem Feld anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einrichten, dass je nachdem, was der `msgType`-Parameter ist, die Funktion ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zunächst die für diese Übung benötigten Symbole ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am gleichen Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Symbole wurden ursprünglich von [iconfinder.com](https://www.iconfinder.com/) übernommen und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Danke! (Die tatsächlichen Icon-Seiten wurden inzwischen verschoben oder entfernt.)

2. Suchen Sie als nächstes das CSS innerhalb Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Symbole zu schaffen. Aktualisieren Sie zuerst die `.msgBox`-Breite von:

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

4. Nun müssen wir unserem `displayMessage()`-Funktion Code hinzufügen, um das Anzeigen der Symbole zu steuern. Fügen Sie den folgenden Block direkt über die schließende geschweifte Klammer (`}`) Ihrer Funktion hinzu:

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = 'url("icons/warning.png")';
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = 'url("icons/chat.png")';
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   Hier, wenn der `msgType`-Parameter auf `"warning"` gesetzt ist, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gestellt. Wenn es auf `"chat"` gesetzt ist, wird das Chatsymbol angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht gesetzt wird (oder auf etwas anderes), dann kommt der `else { }`-Teil des Codes ins Spiel, und der Absatz erhält standardmäßiges Padding und kein Symbol, ohne dass auch eine Hintergrundfarbe des Panels gesetzt ist. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter angegeben wird, was bedeutet, dass es ein optionaler Parameter ist!

5. Testen wir unsere aktualisierte Funktion, versuchen Sie, den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem von diesen zu aktualisieren:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr ganz so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Arbeiten zu bringen, zögern Sie nicht, Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) zu überprüfen ([sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html) auch), oder uns um Hilfe zu bitten.

## Zusammenfassung

Herzlichen Glückwunsch, dass Sie es bis zum Ende geschafft haben! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit ein wenig mehr Arbeit in ein echtes Projekt übernommen werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres wichtiges verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
