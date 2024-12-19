---
title: Erstellen Sie Ihre eigene Funktion
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

Mit den meisten der wesentlichen Theorien, die im vorherigen Artikel behandelt wurden, bietet dieser Artikel praktische Erfahrung. Hier werden Sie etwas Übung darin erhalten, Ihre eigene, benutzerdefinierte Funktion zu erstellen. Dabei erklären wir auch einige nützliche Details zum Umgang mit Funktionen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>Ein Verständnis von <a href="/de/docs/Learn_web_development/Core/Structuring_content">HTML</a> und den <a href="/de/docs/Learn_web_development/Core/Styling_basics">Grundlagen von CSS</a>, sowie Vertrautheit mit den JavaScript-Funktionsgrundlagen, wie im vorherigen Abschnitt behandelt.</td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Erfahrung im Erstellen von benutzerdefinierten Funktionen.</li>
          <li>Parameter zu Ihren Funktionen hinzufügen.</li>
          <li>Ihre Funktion aufrufen.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Aktives Lernen: Bauen wir eine Funktion

Die benutzerdefinierte Funktion, die wir erstellen werden, heißt `displayMessage()`. Sie wird eine benutzerdefinierte Nachrichtenbox auf einer Webseite anzeigen und als angepasster Ersatz für die im Browser integrierte [`alert()`](/de/docs/Web/API/Window/alert)-Funktion dienen. Wir haben dies bereits gesehen, aber lassen Sie uns das Gedächtnis auffrischen. Geben Sie das Folgende in die JavaScript-Konsole Ihres Browsers ein, auf einer beliebigen Seite:

```js
alert("This is a message");
```

Die `alert()`-Funktion benötigt ein einziges Argument — den String, der im Alert-Fenster angezeigt wird. Versuchen Sie, den String zu variieren, um die Nachricht zu ändern.

Die `alert()`-Funktion ist begrenzt: Sie können die Nachricht ändern, aber Sie können nicht einfach etwas anderes variieren, wie etwa die Farbe, das Symbol oder etwas anderes. Wir werden eine erstellen, die mehr Spaß macht.

> [!NOTE]
> Dieses Beispiel sollte in allen modernen Browsern funktionieren, aber das Styling könnte in etwas älteren Browsern merkwürdig aussehen. Wir empfehlen Ihnen, diese Übung in einem modernen Browser wie Firefox, Opera oder Chrome zu machen.

## Die grundlegende Funktion

Zunächst wollen wir eine grundlegende Funktion zusammenstellen.

> [!NOTE]
> Bei Funktionsnamen-Konventionen sollten Sie dieselben Regeln wie bei [Variablennamen-Konventionen](/de/docs/Learn_web_development/Core/Scripting/Variables#an_aside_on_variable_naming_rules) beachten. Dies ist in Ordnung, da Sie sie auseinanderhalten können — Funktionsnamen erscheinen mit Klammern danach, und Variablen nicht.

1. Beginnen Sie, indem Sie die Datei [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) öffnen und lokal kopieren. Sie werden sehen, dass das HTML einfach ist — der Body enthält nur einen einzigen Button. Wir haben auch etwas grundlegendes CSS bereitgestellt, um die benutzerdefinierte Nachrichtenbox zu stylen, und ein leeres {{htmlelement("script")}}-Element, in das wir unser JavaScript einfügen können.
2. Fügen Sie als nächstes Folgendes innerhalb des `<script>`-Elements hinzu:

   ```js-nolint
   function displayMessage() {
     ...
   }
   ```

   Wir beginnen mit dem Schlüsselwort `function`, das bedeutet, dass wir eine Funktion definieren. Dies wird gefolgt von dem Namen, den wir unserer Funktion geben möchten, einem Satz von Klammern und einem Satz von geschweiften Klammern. Alle Parameter, die wir unserer Funktion geben möchten, kommen in die Klammern, und der Code, der ausgeführt wird, wenn wir die Funktion aufrufen, kommt in die geschweiften Klammern.

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

Es ist ziemlich viel Code, den wir durchgehen müssen, also werden wir ihn Schritt für Schritt erklären.

Die erste Zeile wählt das {{htmlelement("body")}}-Element aus, indem sie die [DOM API](/de/docs/Web/API/Document_Object_Model) nutzt, um die [`body`](/de/docs/Web/API/Document/body)-Eigenschaft des globalen [`document`](/de/docs/Web/API/Document/body)-Objekts zu erhalten, und weist dies einer Konstanten namens `body` zu, damit wir später damit arbeiten können:

```js
const body = document.body;
```

Der nächste Abschnitt verwendet eine DOM API-Funktion namens [`document.createElement()`](/de/docs/Web/API/Document/createElement), um ein {{htmlelement("div")}}-Element zu erstellen und eine Referenz darauf in einer Konstanten namens `panel` zu speichern. Dieses Element wird das äußere Container unserer Nachrichtenbox sein.

Wir verwenden dann eine weitere DOM API-Funktion namens [`Element.setAttribute()`](/de/docs/Web/API/Element/setAttribute), um ein `class`-Attribut mit dem Wert `msgBox` für unser Panel festzulegen. Dies erleichtert das Styling des Elements — wenn Sie sich das CSS auf der Seite ansehen, werden Sie sehen, dass wir einen `.msgBox`-Klassenselektor verwenden, um die Nachrichtenbox und deren Inhalt zu stylen.

Schließlich rufen wir eine DOM-Funktion namens [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) auf der zuvor gespeicherten Konstante `body` auf, die ein Element als Kind eines anderen einfügt. Wir spezifizieren das Panel-`<div>` als das Kind, das wir innerhalb des `<body>`-Elements einfügen möchten. Wir müssen dies tun, da das erstellte Element nicht einfach von selbst auf der Seite erscheint — wir müssen angeben, wo es eingefügt werden soll.

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

Die nächsten beiden Abschnitte verwenden dieselben `createElement()` und `appendChild()`-Funktionen, die wir bereits gesehen haben, um zwei neue Elemente zu erstellen — ein {{htmlelement("p")}} und ein {{htmlelement("button")}} — und sie als Kinder des Panels `<div>` auf der Seite einzufügen. Wir verwenden ihre [`Node.textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft — die den Textinhalt eines Elements darstellt — um eine Nachricht in den Absatz und ein "x" in den Button einzufügen. Dieser Button muss angeklickt/aktiviert werden, wenn der Benutzer die Nachrichtenbox schließen möchte.

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

Schließlich rufen wir [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) auf, um eine Funktion hinzuzufügen, die aufgerufen wird, wenn der Benutzer auf den "Schließen"-Button klickt. Der Code wird das gesamte Panel von der Seite löschen — um die Nachrichtenbox zu schließen.

Kurz gesagt, die `addEventListener()`-Methode wird vom Button bereitgestellt (oder tatsächlich jedem Element auf der Seite), dem eine Funktion und der Name eines Ereignisses übergeben werden kann. In diesem Fall ist der Name des Ereignisses 'click', was bedeutet, dass die Funktion ausgeführt wird, wenn der Benutzer auf den Button klickt. Sie werden viel mehr über Ereignisse in unserem [Ereignisse-Artikel](/de/docs/Learn_web_development/Core/Scripting/Events) lernen. Die Zeile innerhalb der Funktion verwendet die [`Node.removeChild()`](/de/docs/Web/API/Node/removeChild) DOM API-Funktion, um anzugeben, dass wir ein bestimmtes Kindelement des HTML-Elements entfernen möchten — in diesem Fall das Panel `<div>`.

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

Im Wesentlichen generiert dieser ganze Codeblock ein HTML-Block, der so aussieht, und fügt ihn in die Seite ein:

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

Das war eine Menge Code, den wir durchgehen mussten — machen Sie sich keine Sorgen, wenn Sie sich nicht sofort daran erinnern, wie jeder Teil davon funktioniert! Der Hauptteil, auf den wir uns hier konzentrieren möchten, ist die Struktur und Verwendung der Funktion, aber wir wollten etwas Interessantes für dieses Beispiel zeigen.

## Die Funktion aufrufen

Sie haben nun Ihre Funktionsdefinition in Ihr `<script>`-Element geschrieben, aber es wird in seinem jetzigen Zustand nichts tun.

1. Versuchen Sie, die folgende Zeile unter Ihrer Funktion einzufügen, um sie aufzurufen:

   ```js
   displayMessage();
   ```

   Diese Zeile ruft die Funktion auf und lässt sie sofort ausführen. Wenn Sie Ihren Code speichern und im Browser neu laden, sehen Sie, dass die kleine Nachrichtenbox sofort erscheint, und das auch nur einmal. Wir rufen sie schließlich nur einmal auf.

2. Öffnen Sie jetzt die Entwicklertools Ihres Browsers auf der Beispielseite, gehen Sie zur JavaScript-Konsole und geben Sie die Zeile dort erneut ein, und Sie werden sehen, dass sie erneut erscheint! Das macht Spaß — wir haben jetzt eine wiederverwendbare Funktion, die wir immer wieder aufrufen können, wann immer wir wollen.

   Aber wahrscheinlich möchten wir, dass sie als Reaktion auf Benutzer- und Systemaktionen erscheint. In einer echten Anwendung würde eine solche Nachrichtenbox wahrscheinlich als Reaktion auf neue Daten, die verfügbar sind, oder einen aufgetretenen Fehler, oder wenn der Benutzer versucht, sein Profil zu löschen ("Sind Sie sicher?"), oder wenn der Benutzer einen neuen Kontakt hinzufügt und der Vorgang erfolgreich abgeschlossen wird, usw. aufgerufen werden.

   In diesem Demo werden wir die Nachrichtenbox erscheinen lassen, wenn der Benutzer auf den Button klickt.

3. Löschen Sie die zuvor hinzugefügte Zeile.
4. Als nächstes wählen wir den Button aus und speichern eine Referenz darauf in einer Konstante. Fügen Sie die folgende Zeile zu Ihrem Code hinzu, oberhalb der Funktionsdefinition:

   ```js
   const btn = document.querySelector("button");
   ```

5. Schließlich fügen Sie die folgende Zeile unterhalb der vorherigen hinzu:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   Ähnlich wie bei unserem Klick-Ereignishandler von `closeBtn`, rufen wir hier etwas Code als Reaktion auf den Klick auf einen Button auf. Aber in diesem Fall rufen wir anstelle einer anonymen Funktion, die Code enthält, unsere `displayMessage()`-Funktion mit ihrem Namen auf.

6. Versuchen Sie, die Seite zu speichern und neu zu laden — jetzt sollten Sie sehen, dass die Nachrichtenbox erscheint, wenn Sie auf den Button klicken.

Sie fragen sich vielleicht, warum wir keine Klammern nach dem Funktionsnamen eingefügt haben. Das liegt daran, dass wir die Funktion nicht sofort aufrufen möchten — sondern erst, nachdem der Button geklickt wurde. Wenn Sie versuchen, die Zeile zu ändern in

```js
btn.addEventListener("click", displayMessage());
```

und speichern und neu laden, werden Sie sehen, dass die Nachrichtenbox ohne Klicken des Buttons erscheint! Die Klammern in diesem Kontext werden manchmal als "Funktionsaufruf-Operator" bezeichnet. Sie verwenden sie nur, wenn Sie die Funktion sofort im aktuellen Bereich ausführen möchten. In gleicher Weise wird der Code innerhalb der anonymen Funktion nicht sofort ausgeführt, da er sich innerhalb des Funktionsbereichs befindet.

Wenn Sie das letzte Experiment ausprobiert haben, stellen Sie sicher, dass Sie die letzte Änderung rückgängig machen, bevor Sie weitermachen.

## Die Funktion mit Parametern verbessern

Im jetzigen Zustand ist die Funktion noch nicht sehr nützlich — wir möchten nicht jedes Mal dieselbe Standardnachricht anzeigen. Lassen Sie uns unsere Funktion verbessern, indem wir einige Parameter hinzufügen, damit wir sie mit verschiedenen Optionen aufrufen können.

1. Aktualisieren Sie zunächst die erste Zeile der Funktion von:

   ```js
   function displayMessage() {
   ```

   zu diesem:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   Nun, wenn wir die Funktion aufrufen, können wir zwei Variablenwerte in den Klammern bereitstellen, um die Nachricht anzugeben, die in der Nachrichtenbox angezeigt werden soll, und die Art der Nachricht, die es ist.

2. Um den ersten Parameter zu nutzen, aktualisieren Sie die folgende Zeile in Ihrer Funktion:

   ```js
   msg.textContent = "This is a message box";
   ```

   zu

   ```js
   msg.textContent = msgText;
   ```

3. Zuletzt müssen Sie jetzt Ihren Funktionsaufruf aktualisieren, um einige aktualisierte Nachrichtentexte einzufügen. Ändern Sie die folgende Zeile:

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   zu diesem Block:

   ```js
   btn.addEventListener("click", () =>
     displayMessage("Woo, this is a different message!"),
   );
   ```

   Wenn wir Parameter in Klammern für die aufgerufene Funktion angeben möchten, können wir sie nicht direkt aufrufen — wir müssen sie in eine anonyme Funktion einfügen, damit sie sich nicht im unmittelbaren Bereich befindet und daher nicht sofort aufgerufen wird. Jetzt wird sie erst aufgerufen, wenn der Button geklickt wird.

4. Laden Sie die Seite neu und versuchen Sie den Code erneut. Sie werden sehen, dass er immer noch einwandfrei funktioniert, außer dass Sie jetzt die Nachricht im Parameter variieren können, um unterschiedliche Nachrichten in der Box anzuzeigen!

### Ein komplexerer Parameter

Kommen wir zum nächsten Parameter. Dieser wird etwas mehr Arbeit erfordern — wir werden ihn so festlegen, dass die Funktion je nach dem, auf was der `msgType`-Parameter gesetzt ist, ein anderes Symbol und eine andere Hintergrundfarbe anzeigt.

1. Zunächst laden Sie die für diese Übung benötigten Symbole ([warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) und [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)) von GitHub herunter. Speichern Sie sie in einem neuen Ordner namens `icons` am selben Ort wie Ihre HTML-Datei.

   > [!NOTE]
   > Die Warn- und Chat-Symbole wurden ursprünglich auf [iconfinder.com](https://www.iconfinder.com/) gefunden und von [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) gestaltet — Danke! (Die tatsächlichen Icon-Seiten wurden seitdem verschoben oder entfernt.)

2. Finden Sie als nächstes das CSS in Ihrer HTML-Datei. Wir werden einige Änderungen vornehmen, um Platz für die Symbole zu schaffen. Zuerst aktualisieren Sie die `.msgBox`-Breite von:

   ```css
   width: 200px;
   ```

   zu

   ```css
   width: 242px;
   ```

3. Fügen Sie als nächstes die folgenden Zeilen in die `.msgBox p { }`-Regel ein:

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

   Hier, wenn der `msgType`-Parameter auf `'warning'` gesetzt ist, wird das Warnsymbol angezeigt und die Hintergrundfarbe des Panels auf Rot gesetzt. Wenn er auf `'chat'` gesetzt ist, wird das Chatsymbol angezeigt und die Hintergrundfarbe des Panels auf Aqua-Blau gesetzt. Wenn der `msgType`-Parameter überhaupt nicht gesetzt ist (oder auf etwas anderes), greift der `else { }`-Teil des Codes, und dem Absatz wird eine Standardauspolsterung gegeben, ohne Symbol und ohne Hintergrundpanel-Farbe. Dies bietet einen Standardzustand, wenn kein `msgType`-Parameter bereitgestellt wird, was bedeutet, dass es sich um einen optionalen Parameter handelt!

5. Testen Sie unsere aktualisierte Funktion, indem Sie den `displayMessage()`-Aufruf von diesem aktualisieren:

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   auf eines dieser:

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   Sie können sehen, wie nützlich unsere (jetzt nicht mehr so) kleine Funktion wird.

> [!NOTE]
> Wenn Sie Probleme haben, das Beispiel zum Laufen zu bringen, zögern Sie nicht, Ihren Code mit der [fertigen Version auf GitHub](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html) ([sehen Sie es live laufen](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html) ebenfalls) zu vergleichen, oder fragen Sie uns um Hilfe.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie weitermachen — sehen Sie [Testen Sie Ihre Fähigkeiten: Funktionen](/de/docs/Learn_web_development/Core/Scripting/Building_blocks/Test_your_skills:_Functions). Diese Tests erfordern Fähigkeiten, die im nächsten Artikel behandelt werden, daher möchten Sie diesen vielleicht zuerst lesen, bevor Sie den Test versuchen.

## Zusammenfassung

Herzlichen Glückwunsch, dass Sie das Ende erreicht haben! Dieser Artikel führte Sie durch den gesamten Prozess des Aufbaus einer praktischen benutzerdefinierten Funktion, die mit etwas mehr Arbeit in ein echtes Projekt übertragen werden könnte. Im nächsten Artikel werden wir die Funktionen abschließen, indem wir ein weiteres wesentliches verwandtes Konzept — Rückgabewerte — erklären.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
