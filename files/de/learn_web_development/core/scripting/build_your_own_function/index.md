---
title: Eigenen Funktionsprozess erstellen
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Mit den meisten der wesentlichen Theorien, die im vorherigen Artikel behandelt wurden, bietet dieser Artikel praktische Erfahrungen. Hier werden Sie praktische Übungen zum Erstellen Ihrer eigenen, angepassten Funktion erhalten. Unterwegs erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit den JavaScript-Funktionsgrundlagen wie im vorherigen Kurs behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrungen mit dem Erstellen eigener benutzerdefinierter Funktionen.</li>
          <li>Parameter zu Ihren Funktionen hinzufügen.</li>
          <li>Ihre Funktion aufrufen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Aktives Lernen: Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie zeigt ein benutzerdefiniertes Nachrichtenfenster auf einer Webseite an und dient als angepasster Ersatz für die im Browser eingebaute [`alert()`](/de/docs/Web/API/Window/alert)-Funktion. Wir haben das schon einmal gesehen, aber lassen Sie uns das Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einziges Argument — den String, der im Alert-Fenster angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht leicht etwas anderes variieren, wie die Farbe, das Icon oder andere Dinge. Wir bauen eine, die mehr Spaß machen wird.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern problemlos funktionieren, aber das Styling könnte in etwas älteren Browsern etwas seltsam aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Zu Beginn setzen wir eine grundlegende Funktion zusammen.

> [!NOTE]
> Für Funktionsbenennungskonventionen sollten Sie die gleichen Regeln wie bei [Variablenbenennungskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern danach und Variablen nicht.

1. Beginnen Sie damit, die [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html)-Datei zu öffnen und eine lokale Kopie zu erstellen. Sie sehen, dass das HTML einfach ist — der Body enthält nur einen einzigen Button. Wir haben auch einige grundlegende CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfenster zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript hinzuzufügen.
2. Fügen Sie als Nächstes das Folgende innerhalb des `<script>`-Elements hinzu:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Dies wird gefolgt von dem Namen, den wir unserer Funktion geben möchten, einem Satz Klammern und einem Satz geschweifter Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, geht in die geschweiften Klammern.

3. Fügen Sie schließlich den folgenden Code innerhalb der geschweiften Klammern hinzu:

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

Das ist eine Menge Code, um durchzugehen, also führen wir Sie Schritt für Schritt durch.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem die [DOM API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten, und weist dies einer Konstante namens `body` zu, damit wir später Aktionen darauf durchführen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und einen Verweis darauf in einer Konstante namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfensters sein.

Wir verwenden dann eine weitere DOM API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem Panel mit einem Wert von `msgBox` zu setzen. Dies soll es erleichtern, das Element zu stylen — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfenster und seinen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten Konstante `body` auf, welches ein Element in einem anderen als dessen Kind verschachtelt. Wir geben das `panel`-`<div>` als das Kind an, das wir innerhalb des `<body>`-Elements anhängen möchten. Wir müssen dies tun, da das von uns erstellte Element nicht einfach auf der Seite erscheinen wird — wir müssen angeben, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten zwei Abschnitte verwenden die gleichen `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie auf der Seite als Kinder des `panel`-`<div>` einzufügen. Wir verwenden deren [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt — um eine Nachricht in das Absatz-Element einzufügen und ein "x" in den Button. Dieser Button muss geklickt/aktiviert werden, wenn der Benutzer das Nachrichtenfenster schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code wird das gesamte Panel von der Seite löschen, um das Nachrichtenfenster zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird von dem Button (oder in der Tat einem beliebigen Element auf der Seite) bereitgestellt, dem eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass wenn der Benutzer den Button klickt, die Funktion ausgeführt wird. Sie werden in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) viel mehr über Ereignisse lernen. Die Zeile innerhalb der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)-DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das `panel`-`<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Grundsätzlich generiert dieser gesamte Codeblock einen HTML-Block, der etwa so aussieht und in die Seite eingefügt wird:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war viel Code, um ihn durchzugehen — machen Sie sich keine Sorgen, wenn Sie sich nicht genau erinnern, wie jeder Teil davon jetzt funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten etwas Interessantes für dieses Beispiel zeigen.

## Die Funktion aufrufen

Sie haben jetzt Ihre Funktionsdefinition in Ihr `<script>`-Element geschrieben, aber sie wird so wie sie ist nichts tun.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion hinzuzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, sodass sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und im Browser neu laden, sehen Sie, dass das kleine Nachrichtenfenster sofort erscheint, nur einmal. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie nun die Entwicklertools Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, Sie werden es erneut erscheinen sehen! Das macht also Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

   Aber wir möchten wahrscheinlich, dass es als Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde ein solches Nachrichtenfenster wahrscheinlich als Reaktion auf neue verfügbare Daten, oder bei Auftreten eines Fehlers, oder wenn der Benutzer versucht, sein Profil zu löschen ("sind Sie sicher?"), oder wenn der Benutzer einen neuen Kontakt hinzufügt und die Operation erfolgreich abgeschlossen wurde, aufgerufen.

   In dieser Demo werden wir das Nachrichtenfenster erscheinen lassen, wenn der Benutzer den Button klickt.

3. Löschen Sie die zuvor hinzugefügte Zeile.
4. Als nächstes werden wir den Button auswählen und eine Referenz darauf in einer Konstante speichern. Fügen Sie die folgende Zeile zu Ihrem Code hinzu, über der Funktionsdefinition:

   ```js
   const btn = document.querySelector("button");
   ```

5. Fügen Sie schließlich die folgende Zeile unter der vorherigen hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie beim Klick-Ereignishandler von unserem `closeBtn` rufen wir hier einen Code als Reaktion auf einen Klick auf einen Button auf. Aber in diesem Fall rufen wir anstelle einer anonymen Funktion, die Code enthält, unsere `displayMessage()`-Funktion nach Namen auf.

6. Versuchen Sie, die Seite zu speichern und zu aktualisieren — jetzt sollten Sie sehen, dass das Nachrichtenfenster erscheint, wenn Sie den Button klicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht eingefügt haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in

```js
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, sehen Sie, dass das Nachrichtenfenster erscheint, ohne dass der Button geklickt wurde! Klammern in diesem Kontext werden manchmal auch als "Funktionsaufrufoperator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Gültigkeitsbereich ausführen möchten. In gleicher Weise wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich innerhalb des Funktionsbereichs befindet.

Wenn Sie das letzte Experiment versucht haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie weitermachen.

## Verbesserung der Funktion mit Parametern

In seinem aktuellen Zustand ist die Funktion immer noch nicht sehr nützlich — wir möchten nicht jedes Mal die gleiche Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, mit denen wir sie mit einigen verschiedenen Optionen aufrufen können.

1. Zunächst einmal aktualisieren Sie die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt können wir beim Aufruf der Funktion zwei Variablenwerte innerhalb der Klammern angeben, um die Nachricht zu spezifizieren, die im Nachrichtenfenster angezeigt wird, und die Art der Nachricht, die es ist.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile in Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zuletzt aber nicht weniger wichtig müssen Sie jetzt Ihren Funktionsaufruf aktualisieren, um einen aktualisierten Nachrichtentext einzufügen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in Klammern für die Funktion, die wir aufrufen, angeben möchten, können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion setzen, sodass sie sich nicht im unmittelbaren Gültigkeitsbereich befindet und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button geklickt wurde.

4. Laden Sie den Code neu und versuchen Sie ihn aus, und Sie werden sehen, dass er immer noch einwandfrei funktioniert, aber jetzt können Sie auch die Nachricht innerhalb des Parameters variieren, um unterschiedliche Nachrichten im Fenster anzuzeigen!

### Ein komplexerer Parameter

Weiter zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden es so einstellen, dass je nachdem, was der `msgType`-Parameter eingestellt ist, die Funktion ein anderes Icon und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zunächst die benötigten Icons für diese Übung ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am gleichen Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Icons für Warning und Chat wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Vielen Dank! (Die tatsächlichen Icon-Seiten wurden seitdem verschoben oder entfernt.)

2. Suchen Sie als Nächstes das CSS innerhalb Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zunächst die Breite der `.msgBox` von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als Nächstes die folgenden Zeilen innerhalb der `.msgBox p { }`-Regel hinzu:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Jetzt müssen wir unserem `displayMessage()`-Funktion Code hinzufügen, um das Anzeigen der Icons zu ermöglichen. Fügen Sie den folgenden Block direkt über der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hierdurch wird, wenn der `msgType` Parameter auf `'warning'` gesetzt ist, das Warnungs-Icon angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Wenn es auf `'chat'` gesetzt ist, wird das Chat-Icon angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht (oder auf etwas anderes) gesetzt ist, dann tritt der `else { }`-Teil des Codes in Kraft, und dem Absatz wird standardmäßiges Padding zugewiesen und kein Icon, ohne dass eine Hintergrundfarbe für das Panel festgelegt wird. Dies stellt einen Standardzustand bereit, wenn kein `msgType`-Parameter bereitgestellt wird, was bedeutet, dass es sich um einen optionalen Parameter handelt!

5. Lassen Sie uns unsere aktualisierte Funktion testen, versuchen Sie, den `displayMessage()`-Aufruf von:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   in eine dieser Zeilen zu ändern:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Falls Sie Probleme haben, das Beispiel zum Laufen zu bringen, können Sie gern Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) vergleichen ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), oder uns um Hilfe bitten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die im nächsten Artikel behandelt werden, daher möchten Sie diesen vielleicht zuerst lesen, bevor Sie den Test versuchen.

## Zusammenfassung

Herzlichen Glückwunsch zum Erreichen des Endes! Dieser Artikel hat Sie durch den gesamten Prozess des Aufbauens einer praktischen benutzerdefinierten Funktion geführt, die mit ein bisschen mehr Arbeit in ein echtes Projekt transplantiert werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres wesentliches verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
