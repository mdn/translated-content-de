---
title: Hinzufügen von Funktionen zu unserem hüpfenden Kugeln-Demo
slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}

Bei dieser Bewertung sollen Sie das hüpfende Kugeln-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung angehen, sollten Sie alle Artikel in diesem Modul
        durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von JavaScript-Objekten und objektorientierten Konstrukten
        zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, erstellen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css), und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der Online-Editor, den Sie verwenden, kein separates JavaScript-Panel hat, können Sie es gerne innerhalb eines `<script>`-Elements auf der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Tipps und Hinweise

Ein paar Hinweise, bevor Sie beginnen.

- Diese Bewertung ist ziemlich anspruchsvoll. Lesen Sie die gesamte Bewertung, bevor Sie mit dem Codieren beginnen, und nehmen Sie sich für jeden Schritt langsam und sorgfältig Zeit.
- Es könnte eine gute Idee sein, nach jeder erfolgreichen Stufe eine separate Kopie des Demos zu speichern, damit Sie darauf zurückgreifen können, wenn Sie später in Schwierigkeiten geraten.

## Projektbeschreibung

Unser hüpfendes Kugel-Demo macht Spaß, aber jetzt möchten wir es etwas interaktiver gestalten, indem wir einen benutzerkontrollierten bösen Kreis hinzufügen, der die Kugeln frisst, wenn er sie fängt. Wir möchten auch Ihre Objektbau-Fähigkeiten testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Kugeln und der böse Kreis erben können. Schließlich möchten wir einen Punktezähler hinzufügen, um die Anzahl der Kugeln zu verfolgen, die noch erfasst werden müssen.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der hüpfenden Kugeln-Demo-Seite. Ein weiß umrandeter Kreis ist zusätzlich zu den farbigen Kugeln sichtbar, und der Text "Ball count: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen eine genauere Vorstellung zu geben, werfen Sie einen Blick auf das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) (ohne in den Quellcode zu spähen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Zuerst erstellen Sie eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf die gleiche Weise definieren, wie es der `Ball()`-Konstruktor ursprünglich tat, jedoch nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte durch `extends` von `Shape` abgeleitet werden. Der Konstruktor für `Ball` sollte:

- die gleichen Argumente wie zuvor annehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor unter Verwendung von `super()` aufrufen und ihm die Argumente `x`, `y`, `velX` und `velY` übergeben
- seine eigenen `color`- und `size`-Eigenschaften aus den übergebenen Parametern initialisieren.

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Kugeln im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein boolescher Wert (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Eine Kugel muss nur dann für die Kollisionsdetektion in Betracht gezogen werden, wenn die Eigenschaft `exists` den Wert `true` hat. Ersetzen Sie daher den vorhandenen `collisionDetect()`-Code durch den folgenden:

```js
collisionDetect() {
  for (const ball of balls) {
    if (!(this === ball) && ball.exists) {
      const dx = this.x - ball.x;
      const dy = this.y - ball.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ball.size) {
        ball.color = this.color = randomRGB();
      }
    }
  }
}
```

Wie oben erwähnt, ist die einzige Ergänzung, dass überprüft wird, ob die Kugel existiert — indem `ball.exists` in der `if`-Bedingung verwendet wird.

Die Methoden `draw()` und `update()` der Kugel sollten genauso bleiben können, wie sie zuvor waren.

Versuchen Sie zu diesem Zeitpunkt, den Code neu zu laden — er sollte genauso funktionieren wie zuvor, mit unseren neu gestalteten Objekten.

### Definition des EvilCircle

Nun ist es an der Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Vielleicht möchten Sie später einen weiteren Kreis zur App hinzufügen, der von einem anderen Spieler gesteuert werden kann, oder mehrere computergesteuerte böse Kreise haben. Sie werden die Welt wahrscheinlich nicht mit einem einzigen bösen Kreis erobern, aber er wird für diese Bewertung genügen.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte per `extends` von `Shape` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur die Argumente `x`, `y` übergeben bekommen
- die Argumente `x`, `y` an die `Shape`-Superklasse zusammen mit Werten für `velX` und `velY`, die fest auf 20 gesetzt sind, weitergeben. Sie sollten dies mit einem Code wie `super(x, y, 20, 20);` tun.
- `color` auf `white` und `size` auf `10` setzen.

Schließlich sollte der Konstruktor den Code einrichten, der es dem Benutzer ermöglicht, den bösen Kreis auf dem Bildschirm zu bewegen:

```js
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      this.x -= this.velX;
      break;
    case "d":
      this.x += this.velX;
      break;
    case "w":
      this.y -= this.velY;
      break;
    case "s":
      this.y += this.velY;
      break;
  }
});
```

Dies fügt dem `window`-Objekt einen `keydown`-Event-Listener hinzu, sodass bei einem Tastendruck die [`key`](https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts abgefragt wird, um zu sehen, welche Taste gedrückt wurde. Wenn es eine der vier angegebenen Tasten ist, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Definition der Methoden für EvilCircle

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat denselben Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf der Leinwand. Die `draw()`-Methode für `EvilCircle` wird auf sehr ähnliche Weise arbeiten, sodass Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen können. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir möchten, dass der böse Kreis nicht gefüllt ist, sondern nur eine Außenlinie (Umriss) hat. Dies können Sie erreichen, indem Sie [`fillStyle`](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D/fill) durch [`strokeStyle`](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D/stroke) ersetzen.
- Wir möchten auch den Umriss etwas dicker machen, damit Sie den bösen Kreis etwas leichter sehen können. Dies kann erreicht werden, indem ein Wert für [`lineWidth`](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) irgendwo nach dem Aufruf von [`beginPath()`](https://developer.mozilla.org/de/docs/Web/API/CanvasRenderingContext2D/beginPath) gesetzt wird (3 reicht aus).

#### checkBounds()

Diese Methode wird dasselbe tun wie der erste Teil der `update()`-Methode für `Ball` — prüfen, ob der böse Kreis vom Rand des Bildschirms verschwinden wird, und ihn daran hindern. Auch hier können Sie größtenteils die `update()`-Methode für `Ball` kopieren, aber es gibt einige Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir möchten die Position des bösen Kreises nicht automatisch bei jedem Frame aktualisieren, weil wir ihn auf andere Weise bewegen werden, wie Sie unten sehen werden.
- In den `if ()`-Anweisungen, wenn die Tests "wahr" zurückgeben, möchten wir `velX`/`velY` nicht aktualisieren; wir möchten stattdessen den Wert von `x`/`y` ändern, sodass der böse Kreis leicht wieder auf den Bildschirm zurückspringt. Das Hinzufügen oder Subtrahieren (je nach Fall) der `size`-Eigenschaft des bösen Kreises wäre sinnvoll.

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball` arbeiten, sodass Sie eine Kopie davon als Grundlage für diese neue Methode verwenden können. Aber es gibt ein paar Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr prüfen, ob die aktuelle Kugel in der Iteration die gleiche ist wie die Kugel, die die Prüfung durchführt — denn es ist keine Kugel mehr, es ist der böse Kreis! Stattdessen müssen Sie einen Test durchführen, um zu sehen, ob die Kugel, die geprüft wird, existiert (mit welcher Eigenschaft könnten Sie dies tun?). Wenn sie nicht existiert, wurde sie bereits vom bösen Kreis gefressen, sodass es keinen Grund mehr gibt, sie erneut zu prüfen.
- In der inneren `if`-Anweisung möchten Sie nicht mehr, dass sich die Objekte bei einer Kollision verfärben — stattdessen möchten Sie alle Kugeln, die mit dem bösen Kreis kollidieren, so setzen, dass sie nicht mehr existieren (wieder einmal, wie denken Sie, würden Sie das tun?).

### Einbringen des bösen Kreises in das Programm

Jetzt, da wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Erstellen Sie zunächst eine neue Objektinstanz des bösen Kreises (spezifizieren Sie die erforderlichen Parameter). Sie müssen dies nur einmal tun, nicht bei jeder Iteration der Schleife.
- An der Stelle, an der Sie durch jede Kugel iterieren und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jede aufrufen, stellen Sie sicher, dass diese Funktionen nur aufgerufen werden, wenn die aktuelle Kugel existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der bösen Kreisinstanz bei jeder Iteration der Schleife auf.

### Implementierung des Punktezählers

Um den Punktezähler zu implementieren, führen Sie die folgenden Schritte aus:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unter dem {{HTMLElement("Heading_Elements", "h1")}}-Element hinzu, das den Text "Ball count: " enthält.
2. Fügen Sie in Ihrer CSS-Datei die folgende Regel am Ende hinzu:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. In Ihrem JavaScript nehmen Sie die folgenden Aktualisierungen vor:

   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Halten Sie irgendwie die Anzahl der Kugeln auf dem Bildschirm fest.
   - Erhöhen Sie die Zählung und zeigen Sie die aktualisierte Anzahl der Kugeln jedes Mal an, wenn eine Kugel zur Szene hinzugefügt wird.
   - Verringern Sie die Zählung und zeigen Sie die aktualisierte Anzahl der Kugeln jedes Mal an, wenn der böse Kreis eine Kugel frisst (sie verursacht, dass sie nicht mehr existiert).

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}
