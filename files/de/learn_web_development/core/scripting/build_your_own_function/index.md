---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 8d244a3942f5546a10537885da013017f38a609d
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem im vorherigen Artikel die meisten grundlegenden Theorien behandelt wurden, bietet dieser Artikel praktische Erfahrungen. Hier erhalten Sie einige Übungen zum Erstellen Ihrer eigenen, benutzerdefinierten Funktion. Unterwegs erklären wir auch einige nützliche Details im Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Kenntnisse der JavaScript-Funktionsgrundlagen, wie im vorherigen Lernmodul behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrung mit der Erstellung Ihrer eigenen benutzerdefinierten Funktionen.</li>
          <li>Hinzufügen von Parametern zu Ihren Funktionen.</li>
          <li>Aufrufen Ihrer Funktion.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie wird ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite anzeigen und als angepasster Ersatz für die eingebaute [`alert()`](/de/docs/Web/API/Window/alert)-Funktion eines Browsers dienen. Wir haben das schon einmal gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie das Folgende in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einziges Argument an — den String, der im Alarmfeld angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht einfach etwas anderes variieren, wie die Farbe, das Icon oder etwas anderes. Wir werden eine erstellen, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern etwas seltsam aussehen. Wir empfehlen Ihnen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome zu machen.

## Die grundlegende Funktion

Beginnen wir mit dem Zusammenstellen einer grundlegenden Funktion.

> [!NOTE]
> Für Funktionsbenennungskonventionen sollten Sie die gleichen Regeln wie bei [Variablenbenennungskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie unterscheiden können — Funktionsnamen erscheinen mit Klammern danach, und Variablen tun das nicht.

1. Beginnen Sie damit, die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) zu öffnen und eine lokale Kopie zu erstellen. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur einen einzigen Button. Wir haben auch ein einfaches CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie als Nächstes Folgendes in das `<script>`-Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Darauf folgt der Name, den wir unserer Funktion geben möchten, ein Klammernpaar und ein Satz geschweifter Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der beim Aufruf der Funktion ausgeführt wird, geht in die geschweiften Klammern.

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

   closeBtn.addEventListener("click", () => body.removeChild(panel));
   ```

Dies ist eine Menge Code, daher werden wir Sie Schritt für Schritt durchgehen.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem die [DOM API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten und diese einer Konstanten namens `body` zuzuweisen, damit wir später Dinge damit machen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unserer Nachrichtenbox sein.

Wir verwenden dann noch eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem `panel` mit einem Wert von `msgBox` zu setzen. Dies erleichtert das Stylen des Elements — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und dessen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstanten auf, die ein anderes Element darin als Kind davon verschachtelt. Wir spezifizieren das `panel`-`<div>` als das Kind, das wir innerhalb des `<body>`-Elements einfügen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach von allein auf der Seite erscheint — wir müssen angeben, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden dieselben `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des `panel`-`<div>` in die Seite einzufügen. Wir verwenden deren [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt —, um eine Nachricht in den Absatz einzufügen und ein "x" in den Button. Dieser Button wird geklickt/aktiviert, wenn der Benutzer die Nachrichtenbox schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code wird das gesamte `panel` von der Seite löschen — um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode kann auf jedem Element auf der Seite aufgerufen werden und wird typischerweise mit zwei Argumenten übergeben: dem Namen eines Ereignisses und einer Funktion, die ausgeführt werden soll, wenn das Ereignis eintritt. In diesem Fall ist der Veranstaltungsname `click`, was bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer den Button klickt. Sie werden in unserem [Event-Artikel](/de/docs/Learn_web_development/Core/Scripting/Events) noch viel mehr über Events lernen. Die Zeile innerhalb der Funktion verwendet die [`removeChild()`](/de/docs/Web/API/Node/removeChild)-Methode, um anzugeben, dass wir ein bestimmtes Kindelement des `<body>`-Elements entfernen möchten: in diesem Fall das `panel`-`<div>`.

```js
closeBtn.addEventListener("click", () => body.removeChild(panel));
```

Im Wesentlichen erzeugt dieser gesamte Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code zum Durcharbeiten — keine Sorge, wenn Sie jetzt nicht genau wissen, wie jeder Teil davon funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten etwas Interessantes für dieses Beispiel zeigen.

## Die Funktion aufrufen

Sie haben jetzt Ihre Funktionsdefinition in Ihr `<script>`-Element geschrieben, aber sie wird so, wie sie steht, nichts tun.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und lässt sie sofort laufen. Wenn Sie Ihren Code speichern und im Browser neu laden, sehen Sie, dass das kleine Nachrichtenfeld sofort erscheint, aber nur einmal. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie jetzt die Entwicklerwerkzeuge Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, und Sie werden sehen, dass es wieder erscheint! Das macht Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir aufrufen können, wann immer wir möchten.

Allerdings möchten wir wahrscheinlich, dass das Nachrichtenfeld in Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde ein solches Nachrichtenfeld wahrscheinlich in Reaktion auf neue Daten, die verfügbar sind, oder aufgetretene Fehler, oder wenn der Benutzer versucht, sein Profil zu löschen ("Sind Sie sicher?") oder wenn der Benutzer einen neuen Kontakt hinzufügt und die Operation erfolgreich abgeschlossen wurde, usw.

In diesem Demo werden wir das Nachrichtenfeld so erscheinen lassen, wenn der Benutzer den Button klickt.
Hier sind die Schritte, die Sie ausführen sollten, um das funktionierend zu machen:

1. Löschen Sie die zuvor hinzugefügte Zeile (`displayMessage();`).
2. Wählen Sie das `<button>`-Element und speichern Sie eine Referenz darauf in einer Konstanten. Fügen Sie die folgende Zeile zu Ihrem Code hinzu, oberhalb der Funktionsdefinition:

   ```js
   const btn = document.querySelector("button");
   ```

3. Erstellen Sie einen Event-Listener für Klicks auf den Button, der unsere Funktion aufruft. Fügen Sie die folgende Zeile nach der `const btn =`-Zeile hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem `closeBtn`-Klick-Ereignishandler rufen wir hier einen Code in Reaktion auf das Klicken auf den Button auf. Aber in diesem Fall rufen wir anstelle einer anonymen Funktion, die Code enthält, unsere `displayMessage()`-Funktion nach ihrem Namen auf.

4. Speichern und aktualisieren Sie die Seite — jetzt sollte das Nachrichtenfeld erscheinen, wenn Sie den Button klicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht hinzugefügt haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — sondern erst, nachdem der Button geklickt wurde. Wenn Sie die Zeile ändern zu

```js example-bad
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass das Nachrichtenfeld erscheint, ohne dass der Button geklickt wurde! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. Ebenso wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionsbereich befindet.

Wenn Sie das letzte Experiment ausprobiert haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig gemacht haben, bevor Sie weitermachen.

## Verbesserung der Funktion mit Parametern

Wie sie jetzt ist, ist die Funktion noch nicht sehr nützlich — wir möchten nicht nur jedes Mal die gleiche Standardnachricht anzeigen. Wir verbessern unsere Funktion, indem wir einige Parameter hinzufügen, sodass wir sie mit einigen verschiedenen Optionen aufrufen können.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Nun, wenn wir die Funktion aufrufen, können wir zwei variable Werte in den Klammern bereitstellen, um die Nachricht zur Anzeige im Nachrichtenfeld und die Art der Nachricht anzugeben.

2. Um den ersten Parameter zu verwenden, aktualisieren Sie die folgende Zeile in Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zu guter Letzt müssen Sie jetzt Ihren Funktionsaufruf aktualisieren, um einen aktualisierten Nachrichtentext einzuschließen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   in diesen Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in den Klammern für die Funktion, die wir aufrufen, angeben möchten, dann können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion einschließen, sodass sie sich nicht im unmittelbaren Bereich befindet und daher nicht sofort aufgerufen wird. Jetzt wird sie nicht aufgerufen, bis der Button geklickt wird.

4. Laden Sie den Code erneut und Sie werden sehen, dass er immer noch einwandfrei funktioniert, es sei denn, dass Sie nun auch die Nachricht im Parameter variieren können, um unterschiedliche Nachrichten in der Box anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir setzen ihn so, dass je nachdem, wie der `msgType`-Parameter gesetzt ist, die Funktion ein anderes Icon und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zunächst die für diese Übung benötigten Icons herunter ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub. Speichern Sie sie in einem neuen Ordner namens `icons` an derselben Stelle wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Icons wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Vielen Dank! (Die tatsächlichen Icon-Seiten wurden seitdem verschoben oder entfernt.)

2. Finden Sie als nächstes das CSS in Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zuerst die Breite der `.msgBox` von:

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

4. Jetzt müssen wir Code in unsere `displayMessage()`-Funktion einfügen, um die Anzeige der Icons zu handhaben. Fügen Sie den folgenden Block direkt über der abschließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier, wenn der `msgType`-Parameter auf `"warning"` gesetzt ist, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf rot gesetzt. Wenn es auf `"chat"` eingestellt ist, wird das Chatsymbol angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht gesetzt ist (oder auf etwas anderes), dann greift der `else { }`-Teil des Codes, und der Absatz erhält Standard-Padding und kein Icon, mit keiner Hintergrundfarbe des Panels, das überhaupt gesetzt wird. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter angegeben ist, was bedeutet, dass es sich um einen optionalen Parameter handelt!

5. Testen Sie unsere aktualisierte Funktion, indem Sie den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   in einen dieser ändern:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (nun nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, zögern Sie nicht, Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) ([sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)) zu vergleichen, oder fragen Sie uns um Hilfe.

## Zusammenfassung

Glückwunsch zum Erreichen des Endes! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit ein wenig mehr Arbeit in ein reales Projekt eingebaut werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres wesentliches verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
