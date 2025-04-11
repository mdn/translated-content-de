---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Nachdem im vorherigen Artikel die wesentliche Theorie behandelt wurde, bietet dieser Artikel praktische Erfahrungen. Hier erhalten Sie einige Übungen zum Erstellen Ihrer eigenen benutzerdefinierten Funktion. Unterwegs werden wir auch einige nützliche Details zum Umgang mit Funktionen erklären.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, Vertrautheit mit JavaScript-Funktionsgrundlagen wie in der vorherigen Lektion behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrung im Erstellen eigener benutzerdefinierter Funktionen.</li>
          <li>Hinzufügen von Parametern zu Ihren Funktionen.</li>
          <li>Aufrufen Ihrer Funktion.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Aktives Lernen: Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, wird `displayMessage()` genannt. Sie zeigt ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite an und fungiert als personalisierter Ersatz für die in den Browser integrierte [`alert()`](/de/docs/Web/API/Window/alert)-Funktion. Das haben wir schon einmal gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers ein, auf einer beliebigen Seite:

```js
alert("This is a message");
```

Die `alert()`-Funktion nimmt ein einzelnes Argument - den String, der im Warnfeld angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht einfach etwas anderes wie Farbe, Icon oder anderes variieren. Wir werden eine erstellen, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern etwas seltsam aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Um zu beginnen, lassen Sie uns eine grundlegende Funktion zusammenstellen.

> [!NOTE]
> Für die Namenskonventionen von Funktionen sollten Sie die gleichen Regeln wie [Variablennamenskonventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) befolgen. Das ist in Ordnung, da Sie sie voneinander unterscheiden können - Funktionsnamen erscheinen mit Klammern dahinter, Variablen nicht.

1. Beginnen Sie mit dem Zugriff auf die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) und erstellen Sie eine lokale Kopie. Sie werden sehen, dass das HTML einfach ist - der Hauptteil enthält nur einen einzigen Button. Wir haben auch einige grundlegende CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript einzufügen.
2. Fügen Sie nun Folgendes in das `<script>`-Element ein:

   ```js
   function displayMessage() {
     // …
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Danach folgt der Name, den wir unserer Funktion geben möchten, ein Satz von Klammern und ein Satz geschweifter Klammern. Jegliche Parameter, die wir unserer Funktion geben möchten, gehen innerhalb der Klammern, und der Code, der beim Aufruf der Funktion ausgeführt wird, geht innerhalb der geschweiften Klammern.

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

Das ist eine Menge Code, den es zu durchgehen gilt, also werden wir es Ihnen Stück für Stück erklären.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem der [DOM API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten und diese einer Konstante namens `body` zuzuweisen, damit wir später Dinge damit machen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstante namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfelds sein.

Wir verwenden dann noch eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut an unserem `panel` mit einem Wert von `msgBox` zu setzen. Dies erleichtert das Styling des Elements - wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und seinen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstante auf, die ein Element als Kind in einem anderen Element verschachtelt. Wir spezifizieren das `panel`-`<div>` als das Kind, das wir innerhalb des `<body>`-Elements anfügen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach von alleine auf der Seite erscheint - wir müssen angeben, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte nutzen die bereits gesehenen `createElement()`- und `appendChild()`-Funktionen, um zwei neue Elemente zu erstellen - ein {{htmlelement("p")}} und ein {{htmlelement("button")}} - und sie als Kinder des `panel`-`<div>` in die Seite einzufügen. Wir verwenden ihre [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft - die den Textinhalt eines Elements darstellt - um eine Nachricht innerhalb des Absatzes und ein "x" innerhalb des Buttons einzufügen. Dieser Button muss vom Benutzer angeklickt/aktiviert werden, wenn er das Nachrichtenfeld schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code wird das gesamte Panel von der Seite löschen - um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird vom Button bereitgestellt (oder genauer gesagt, von jedem Element auf der Seite), dem eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass, wenn der Benutzer den Button klickt, die Funktion ausgeführt wird. Sie werden viel mehr über Ereignisse in unserem [Artikel über Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events) lernen. Die Zeile innerhalb der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild)-DOM-API-Funktion, um zu spezifizieren, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten - in diesem Fall das `panel`-`<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Im Grunde genommen generiert dieser gesamte Codeblock einen HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, um ihn durchzuarbeiten - keine Sorge, wenn Sie sich nicht genau daran erinnern, wie jedes Stück davon jetzt funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten etwas Interessantes für dieses Beispiel zeigen.

## Aufrufen der Funktion

Sie haben jetzt Ihre Funktionsdefinition in Ihrem `<script>`-Element gut geschrieben, aber sie wird nichts tun, so wie sie ist.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion hinzuzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, sodass sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und ihn im Browser neu laden, sehen Sie, dass das kleine Nachrichtenfeld sofort nur einmal erscheint. Wir rufen es ja nur einmal auf.

2. Öffnen Sie nun die Entwicklerwerkzeuge Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, und Sie werden sehen, dass es wieder erscheint! Das macht Spaß - wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

   Aber wahrscheinlich möchten wir, dass sie in Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde ein solches Nachrichtenfeld wahrscheinlich in Reaktion auf verfügbare neue Daten, ein aufgetretenes Fehlerereignis, den Versuch des Benutzers, sein Profil zu löschen („Sind Sie sich sicher?“) oder das erfolgreiche Hinzufügen eines neuen Kontakts und das erfolgreiche Abschließen der Operation aufgerufen werden, usw.

   In dieser Demo lassen wir das Nachrichtenfeld erscheinen, wenn der Benutzer den Button klickt.

3. Löschen Sie die vorherige Zeile, die Sie hinzugefügt haben.
4. Wir werden nun den Button auswählen und eine Referenz darauf in einer Konstante speichern. Fügen Sie die folgende Zeile zu Ihrem Code hinzu, über der Funktionsdefinition:

   ```js
   const btn = document.querySelector("button");
   ```

5. Fügen Sie schließlich die folgende Zeile unter der vorherigen hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem Click-Event-Handler des `closeBtn` rufen wir hier Code in Reaktion auf einen Klick auf einen Button auf. Aber in diesem Fall rufen wir anstelle einer anonymen Funktion mit Code darin unsere `displayMessage()`-Funktion beim Namen auf.

6. Versuchen Sie, die Seite zu speichern und zu aktualisieren - nun sollten Sie sehen, dass das Nachrichtenfeld erscheint, wenn Sie den Button klicken.

Sie fragen sich vielleicht, warum wir die Klammern nach dem Funktionsnamen nicht eingeschlossen haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten - nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in

```js
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, sehen Sie, dass das Nachrichtenfeld ohne Klick auf den Button erscheint! Die Klammern in diesem Kontext werden manchmal der "Funktionsaufruf-Operator" genannt. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Geltungsbereich ausführen möchten. In gleicher Weise wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionsbereich befindet.

Wenn Sie das letzte Experiment ausprobiert haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie weitermachen.

## Verbesserung der Funktion mit Parametern

So wie sie jetzt ist, ist die Funktion immer noch nicht sehr nützlich - wir möchten nicht jedes Mal die gleiche Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, die es uns ermöglichen, sie mit unterschiedlichen Optionen aufzurufen.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu diesem:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt können wir, wenn wir die Funktion aufrufen, zwei Variablenwerte innerhalb der Klammern angeben, um die anzuzeigende Nachricht im Nachrichtenfeld und den Typ der Nachricht, die es ist, zu spezifizieren.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Last but not least, Sie müssen jetzt Ihren Funktionsaufruf aktualisieren, um einen aktuellen Nachrichtentext einzuschließen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   in diesen Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter innerhalb der Klammern für die Funktion angeben möchten, die wir aufrufen, können wir sie nicht direkt aufrufen - wir müssen sie in eine anonyme Funktion setzen, damit sie nicht im unmittelbaren Bereich liegt und daher nicht sofort aufgerufen wird. Jetzt wird sie nicht aufgerufen, bis der Button geklickt wird.

4. Laden Sie den Code erneut und versuchen Sie es, und Sie werden sehen, dass es immer noch einwandfrei funktioniert, außer dass Sie jetzt auch die Nachricht innerhalb des Parameters variieren können, um unterschiedliche Nachrichten in der Box anzuzeigen!

### Ein etwas komplexerer Parameter

Weiter zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern - wir werden ihn so einstellen, dass je nachdem, was im `msgType`-Parameter festgelegt ist, die Funktion ein anderes Icon und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zunächst die für diese Übung benötigten Icons herunter ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am gleichen Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Icons wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen - Danke! (Die tatsächlichen Seiten der Icons wurden seitdem verschoben oder entfernt.)

2. Finden Sie als nächstes das CSS in Ihrer HTML-Datei. Wir werden ein paar Änderungen vornehmen, um Platz für die Icons zu schaffen. Aktualisieren Sie zunächst die `.msgBox`-Breite von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als nächstes die folgenden Zeilen in die Regel `.msgBox p { }` ein:

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. Nun müssen wir unserem `displayMessage()`-Funktionscode hinzufügen, um das Anzeigen der Icons zu steuern. Fügen Sie den folgenden Block kurz vor der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier, wenn der `msgType`-Parameter als `'warning'` festgelegt ist, wird das Warn-Icon angezeigt und die Hintergrundfarbe des Panels wird auf Rot gesetzt. Wenn es als `'chat'` festgelegt ist, wird das Chat-Icon angezeigt und die Hintergrundfarbe des Panels wird auf Aquablau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht (oder auf etwas anderes) gesetzt ist, dann kommt der `else { }`-Teil des Codes zum Tragen und der Absatz erhält standardmäßiges Padding und kein Icon, wobei auch keine Hintergrundfarbe für das Panel gesetzt ist. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter bereitgestellt wird, was bedeutet, dass es sich um einen optionalen Parameter handelt!

5. Lassen Sie uns unsere aktualisierte Funktion testen, versuchen Sie, den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser zu ändern:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, können Sie gerne Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) vergleichen ([sehen Sie es auch live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)), oder uns um Hilfe bitten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen - siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions). Diese Tests erfordern Kenntnisse, die im nächsten Artikel behandelt werden, sodass Sie vielleicht erst diesen lesen möchten, bevor Sie den Test versuchen.

## Zusammenfassung

Herzlichen Glückwunsch zum Erreichen des Endes! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit etwas mehr Arbeit in ein reales Projekt implementiert werden könnte. Im nächsten Artikel werden wir Funktionen abschließend behandeln, indem wir ein weiteres wesentliches verwandtes Konzept erklären - Rückgabewerte.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
