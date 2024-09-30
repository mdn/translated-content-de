---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn/JavaScript/Building_blocks/Build_your_own_function
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}

Mit der meisten grundlegenden Theorie, die im vorherigen Artikel behandelt wurde, bietet dieser Artikel praktische Erfahrung. Hier erhalten Sie etwas Übung beim Erstellen Ihrer eigenen, benutzerdefinierten Funktion. Unterwegs erklären wir auch einige nützliche Details im Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Ein grundlegendes Verständnis von HTML, CSS und
        <a href="/de/docs/Learn/JavaScript/First_steps"
          >JavaScript erste Schritte</a
        >. Außerdem
        <a href="/de/docs/Learn/JavaScript/Building_blocks/Functions"
          >Funktionen — wiederverwendbare Codeblöcke</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Etwas Praxis beim Erstellen einer benutzerdefinierten Funktion zu bieten und einige weitere nützliche damit verbundene Details zu erklären.
      </td>
    </tr>
  </tbody>
</table>

## Aktives Lernen: Lassen Sie uns eine Funktion erstellen

Die benutzerdefinierte Funktion, die wir erstellen werden, wird `displayMessage()` genannt. Sie wird ein benutzerdefiniertes Nachrichtenfeld auf einer Webseite anzeigen und als maßgeschneiderter Ersatz für die eingebaute [alert()](/de/docs/Web/API/Window/alert)-Funktion eines Browsers dienen. Das haben wir schon einmal gesehen, aber lassen Sie uns unser Gedächtnis auffrischen. Geben Sie Folgendes in die JavaScript-Konsole Ihres Browsers auf einer beliebigen Seite ein:

```js
alert("This is a message");
```

Die `alert`-Funktion nimmt ein einziges Argument — die Zeichenfolge, die im Benachrichtigungsfeld angezeigt wird. Versuchen Sie, die Zeichenfolge zu variieren, um die Nachricht zu ändern.

Die `alert`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht einfach etwas anderes variieren, wie die Farbe, das Symbol oder Ähnliches. Wir werden eine erstellen, die mehr Spaß machen wird.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern gut funktionieren, aber das Styling könnte in etwas älteren Browsern etwas seltsam aussehen. Wir empfehlen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome durchzuführen.

## Die grundlegende Funktion

Um zu beginnen, lassen Sie uns eine grundlegende Funktion zusammenstellen.

> [!NOTE]
> Bei den Konventionen zur Funktionsbenennung sollten Sie denselben Regeln wie bei den [Variablenbenennungskonventionen](/de/docs/Learn/JavaScript/First_steps/Variables#an_aside_on_variable_naming_rules) folgen. Das ist in Ordnung, da Sie sie unterscheiden können — Funktionsnamen erscheinen mit Klammern dahinter und Variablen nicht.

1. Beginnen Sie, indem Sie auf die [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) Datei zugreifen und eine lokale Kopie erstellen. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur einen einzigen Button. Wir haben auch einige grundlegende CSS bereitgestellt, um das benutzerdefinierte Nachrichtenfeld zu stylen, und ein leeres {{htmlelement("script")}}-Element, um unser JavaScript hineinzufügen.
2. Fügen Sie als Nächstes Folgendes innerhalb des `<script>`-Elements hinzu:

   ```js-nolint
   function displayMessage() {
     ...
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, was bedeutet, dass wir eine Funktion definieren. Dies wird gefolgt vom Namen, den wir unserer Funktion geben möchten, einem Satz von Klammern und einem Satz von geschweiften Klammern. Alle Parameter, die wir unserer Funktion geben möchten, gehen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, geht in die geschweiften Klammern.

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

Das ist ziemlich viel Code, den wir durchgehen müssen, also führen wir Sie Schritt für Schritt durch.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem die [DOM-API](/de/docs/Web/API/Document_Object_Model) verwendet wird, um die [`body`](/de/docs/Web/API/Document/body) Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body) Objekts zu erhalten und dies einer Konstanten namens `body` zuzuweisen, damit wir später Dinge damit machen können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM-API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird der äußere Container unseres Nachrichtenfeldes sein.

Wir verwenden dann eine weitere DOM-API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut auf unserem Panel mit einem Wert von `msgBox` zu setzen. Dies erleichtert das Stylen des Elements — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um das Nachrichtenfeld und seinen Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten `body`-Konstante auf, was ein Element in das andere als Kind desselben einfügt. Wir geben das Panel-`<div>` als das Kind an, das wir innerhalb des `<body>`-Elements anfügen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach so auf der Seite erscheint — wir müssen angeben, wo es platziert werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden dieselben `createElement()`- und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des Panel-`<div>` in die Seite einzufügen. Wir verwenden ihre [`Node.textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft — die den Textinhalt eines Elements darstellt — um eine Nachricht in den Absatz und ein "x" in das Button einzufügen. Dieses Button muss geklickt/aktiviert werden, wenn der Benutzer das Nachrichtenfeld schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer den "Schließen"-Button klickt. Der Code wird das gesamte Panel von der Seite löschen — um das Nachrichtenfeld zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird von dem Button bereitgestellt (oder in der Tat von jedem Element auf der Seite), dem eine Funktion und der Name eines Ereignisses übergeben werden können. In diesem Fall ist der Ereignisname 'click', was bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer den Button klickt. Sie werden viel mehr über Ereignisse in unserem [Ereignis-Artikel](/de/docs/Learn/JavaScript/Building_blocks/Events) lernen. Die Zeile innerhalb der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild) DOM-API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das Panel-`<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Im Grunde generiert dieser gesamte Codeblock einen HTML-Block, der so aussieht und in die Seite eingefügt wird:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code zum Durcharbeiten — keine Sorge, wenn Sie sich nicht alles genau merken, wie alles gerade funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten für dieses Beispiel etwas Interessantes zeigen.

## Aufrufen der Funktion

Sie haben jetzt Ihre Funktionsdefinition in Ihr `<script>`-Element geschrieben, aber sie wird im aktuellen Zustand nichts tun.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion hinzuzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf, wodurch sie sofort ausgeführt wird. Wenn Sie Ihren Code speichern und ihn im Browser neu laden, sehen Sie das kleine Nachrichtenfeld sofort erscheinen, aber nur einmal. Schließlich rufen wir es nur einmal auf.

2. Öffnen Sie jetzt die Entwicklertools Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort wieder ein. Sie werden sehen, dass es erneut erscheint! Das macht Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir jederzeit aufrufen können.

   Aber wahrscheinlich möchten wir, dass sie als Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde ein solches Nachrichtenfeld wahrscheinlich als Reaktion auf neue verfügbare Daten aufgerufen werden, bei einem aufgetretenen Fehler oder wenn der Benutzer versucht, sein Profil zu löschen ("Sind Sie sicher?"), oder wenn der Benutzer einen neuen Kontakt hinzufügt und die Operation erfolgreich abgeschlossen wurde, usw.

   In dieser Demo werden wir das Nachrichtenfeld erscheinen lassen, wenn der Benutzer den Button klickt.

3. Löschen Sie die vorherige Zeile, die Sie hinzugefügt haben.
4. Als Nächstes wählen wir den Button aus und speichern eine Referenz darauf in einer Konstanten. Fügen Sie die folgende Zeile zu Ihrem Code über der Funktionsdefinition hinzu:

   ```js
   const btn = document.querySelector("button");
   ```

5. Fügen Sie schließlich die folgende Zeile unter der vorhergehenden hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   In ähnlicher Weise wie beim Klick-Ereignishandler von `closeBtn` rufen wir hier Code als Reaktion auf das Klicken eines Buttons auf. Aber in diesem Fall, anstatt eine anonyme Funktion zu verwenden, die Code enthält, rufen wir unsere `displayMessage()`-Funktion beim Namen auf.

6. Versuchen Sie, die Seite zu speichern und zu aktualisieren — jetzt sollten Sie das Nachrichtenfeld sehen, wenn Sie den Button klicken.

Möglicherweise fragen Sie sich, warum wir die Klammern nicht hinter dem Funktionsnamen einfügen. Dies liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — nur nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile in

```js
btn.addEventListener("click", displayMessage());
```

zu ändern und speichern und neu laden, sehen Sie, dass das Nachrichtenfeld erscheint, ohne dass der Button geklickt wird! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. In gleicher Weise wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich im Funktionsbereich befindet.

Wenn Sie das letzte Experiment ausprobiert haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie fortfahren.

## Verbesserung der Funktion mit Parametern

Im derzeitigen Zustand ist die Funktion immer noch nicht sehr nützlich — wir möchten nicht immer dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion durch Hinzufügen einiger Parameter verbessern, sodass wir sie mit einigen verschiedenen Optionen aufrufen können.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion:

   ```js
   function displayMessage() {
   ```

   zu diesem:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Jetzt, wenn wir die Funktion aufrufen, können wir zwei Variablenwerte innerhalb der Klammern bereitstellen, um die Nachricht anzugeben, die im Nachrichtenfeld angezeigt wird, und die Art der Nachricht.

2. Um den ersten Parameter zu verwenden, aktualisieren Sie die folgende Zeile innerhalb Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zuletzt, aber nicht weniger wichtig, müssen Sie jetzt Ihren Funktionsaufruf aktualisieren, um aktualisierten Nachrichtentext zu enthalten. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   in diesen Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter innerhalb von Klammern für die aufgerufene Funktion angeben möchten, können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion einfügen, sodass sie nicht im unmittelbaren Bereich ist und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button geklickt wird.

4. Laden Sie den Code erneut und probieren Sie ihn aus. Sie werden feststellen, dass er immer noch einwandfrei funktioniert, außer dass Sie jetzt auch die Nachricht im Parameter ändern können, um verschiedene Nachrichten im Feld anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so einstellen, dass je nachdem, auf welchen Wert der `msgType`-Parameter gesetzt ist, die Funktion ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Laden Sie zunächst die für diese Übung benötigten Symbole herunter ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub. Speichern Sie sie in einem neuen Ordner namens `icons` an demselben Standort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Symbole wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) entworfen — Vielen Dank! (Die tatsächlichen Icon-Seiten wurden seitdem verschoben oder entfernt.)

2. Suchen Sie als Nächstes das CSS in Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Symbole zu schaffen. Aktualisieren Sie zuerst die `.msgBox`-Breite von:

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

4. Jetzt müssen wir unserem `displayMessage()`-Funktion Code hinzufügen, um die Symbole anzuzeigen. Fügen Sie den folgenden Block direkt über der schließenden geschweiften Klammer (`}`) Ihrer Funktion hinzu:

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

   Hier, wenn der `msgType`-Parameter als `'warning'` gesetzt ist, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Wenn es als `'chat'` gesetzt ist, wird das Chatsymbol angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht (oder auf etwas anderes) gesetzt ist, wird der `else { }`-Teil des Codes ausgeführt und dem Absatz wird eine Standard-Padding und kein Symbol gegeben, mit keiner Hintergrundfarbe des Panels, die ebenfalls eingestellt ist. Dies bietet einen Standardzustand, falls kein `msgType`-Parameter angegeben wird, was bedeutet, dass es sich um einen optionalen Parameter handelt!

5. Lassen Sie uns unsere aktualisierte Funktion testen, versuchen Sie, den `displayMessage()`-Aufruf von diesem:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   zu einem dieser zu ändern:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (nun nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, das Beispiel zum Laufen zu bringen, können Sie Ihren Code gerne mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) ([siehe es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html) ebenfalls) vergleichen oder uns um Hilfe bitten.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich noch an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die im nächsten Artikel behandelt werden, daher möchten Sie möglicherweise zuerst den nächsten Artikel lesen, bevor Sie den Test versuchen.

## Fazit

Herzlichen Glückwunsch zum Erreichen des Endes! Dieser Artikel hat Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion geführt, die mit etwas mehr Arbeit in ein echtes Projekt überführt werden könnte. Im nächsten Artikel werden wir Funktionen abschließen, indem wir ein weiteres wesentliches verwandtes Konzept erklären — Rückgabewerte.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}
