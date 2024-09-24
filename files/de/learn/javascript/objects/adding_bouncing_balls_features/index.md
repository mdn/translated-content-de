---
title: Hinzufügen von Funktionen zu unserem hüpfenden Bälle-Demo
slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: bc0d0d1ef796435e969f6d65c7e5d3c08f4023aa
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}

In dieser Bewertung wird erwartet, dass Sie das hüpfende Bälle-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Bevor Sie diese Bewertung versuchen, sollten Sie bereits alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von JavaScript-Objekten und objektorientierten Konstrukten zu testen.
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, erstellen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es gerne inline in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Hinweise und Tipps

Ein paar Hinweise, bevor Sie beginnen.

- Diese Bewertung ist ziemlich herausfordernd. Lesen Sie die gesamte Bewertung, bevor Sie mit dem Codieren beginnen, und nehmen Sie sich jeden Schritt langsam und sorgfältig vor.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem Sie jede Etappe erfolgreich erreicht haben, damit Sie darauf zurückgreifen können, falls Sie später in Schwierigkeiten geraten.

## Projektbrief

Unser hüpfendes Bälle-Demo macht Spaß, aber jetzt möchten wir es ein bisschen interaktiver machen, indem wir einen benutzergesteuerten bösen Kreis hinzufügen, der die Bälle frisst, wenn er sie fängt. Außerdem möchten wir Ihre Fähigkeiten im Objektaufbau testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Bälle und der böse Kreis erben können. Schließlich möchten wir einen Punktzähler hinzufügen, um die Anzahl der noch einzufangenden Bälle zu verfolgen.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der hüpfenden Bälle-Demoseite. Ein weiß umrandeter Kreis ist neben den farbigen Bällen sichtbar, und der Text "Ball count: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen einen besseren Einblick zu geben, sehen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) an (keine Einsicht in den Quellcode!).

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Erstellen Sie zunächst eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf dieselbe Weise definieren, wie es der `Ball()`-Konstruktor ursprünglich tat, jedoch nicht die `color`- und `size`-Eigenschaften.

Die `Ball`-Klasse sollte von `Shape` mit `extends` abgeleitet werden. Der Konstruktor für `Ball` sollte:

- dieselben Argumente wie zuvor entgegennehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die `x`, `y`, `velX` und `velY` Argumente übergeben
- seine eigenen `color`- und `size`-Eigenschaften aus den gegebenen Parametern initialisieren.

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Bälle im Programm existieren (nicht vom bösen Kreis gefressen wurden). Diese sollte ein Boolean (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Ein Ball sollte nur dann für die Kollisionsdetektion in Betracht gezogen werden, wenn die `exists`-Eigenschaft `true` ist. Ersetzen Sie daher den vorhandenen `collisionDetect()`-Code durch den folgenden Code:

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

Wie oben besprochen, ist die einzige Ergänzung, zu prüfen, ob der Ball existiert — indem `ball.exists` im `if`-Bedingungsblock verwendet wird.

Die `draw()`- und `update()`-Methodendefinitionen des Balls sollten genauso bleiben können wie zuvor.

Versuchen Sie an diesem Punkt, den Code neu zu laden — er sollte genauso funktionieren wie zuvor, mit unseren neu gestalteten Objekten.

### Definition von EvilCircle

Jetzt ist es Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Vielleicht möchten Sie später einen weiteren Kreis zur App hinzufügen, der von einem anderen Spieler gesteuert werden kann, oder mehrere computergesteuerte böse Kreise. Sie werden wahrscheinlich nicht die Welt mit einem einzelnen bösen Kreis erobern, aber es wird für diese Bewertung genügen.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte von `Shape` mit `extends` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur die Argumente `x`, `y` erhalten
- die `x`, `y`-Argumente zur `Shape`-Superklasse hochleiten sowie die Werte für `velX` und `velY`, die auf 20 festgelegt sind. Dies sollten Sie mit einem Code wie `super(x, y, 20, 20);` tun.
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

Dies fügt dem `window`-Objekt einen `keydown`-Ereignislistener hinzu, sodass beim Drücken einer Taste die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts überprüft wird, um zu sehen, welche Taste gedrückt wurde. Wenn es sich um eine der vier angegebenen Tasten handelt, dann bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Definition von Methoden für EvilCircle

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat den gleichen Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf die Leinwand. Die `draw()`-Methode für `EvilCircle` funktioniert auf sehr ähnliche Weise, sodass Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen können. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir möchten, dass der böse Kreis nicht ausgefüllt ist, sondern nur eine äußere Linie (Stroke) hat. Sie können dies erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) zu [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) ändern.
- Wir möchten auch, dass der Stroke etwas dicker ist, damit Sie den bösen Kreis leichter sehen können. Dies kann erreicht werden, indem ein Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) irgendwo nach dem [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)-Aufruf gesetzt wird (3 genügt).

#### checkBounds()

Diese Methode wird das gleiche tun wie der erste Teil der `update()`-Methode für `Ball` — prüfen, ob der böse Kreis vom Bildschirmrand gehen wird, und ihn davon abhalten. Auch hier können Sie größtenteils die `update()`-Methode für `Ball` kopieren, aber es gibt einige Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir wollen die Position des bösen Kreises nicht automatisch bei jedem Frame aktualisieren, weil wir ihn auf eine andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests wahr sind, wollen wir nicht `velX`/`velY` aktualisieren; wir wollen stattdessen den Wert von `x`/`y` ändern, damit der böse Kreis leicht zurück auf den Bildschirm prallt. Hinzufügen oder Subtrahieren (je nach Bedarf) der `size`-Eigenschaft des bösen Kreises wäre sinnvoll.

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball` funktionieren, sodass Sie eine Kopie davon als Grundlage für diese neue Methode verwenden können. Aber es gibt einige Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr prüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Überprüfung durchführt — weil es kein Ball mehr ist, es ist der böse Kreis! Stattdessen müssen Sie einen Test durchführen, um zu sehen, ob der überprüfte Ball existiert (mit welcher Eigenschaft könnten Sie das tun?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, sodass keine Notwendigkeit besteht, ihn erneut zu überprüfen.
- In der inneren `if`-Anweisung möchten Sie nicht mehr, dass sich die Objekte bei einer Kollision verfärben — stattdessen möchten Sie, dass alle Bälle, die mit dem bösen Kreis kollidieren, nicht mehr existieren (wiederum, wie würden Sie das tun?).

### Einfügen des bösen Kreises in das Programm

Jetzt, da wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Erstellen Sie zunächst ein neues Objektinstanz des bösen Kreises (unter Angabe der erforderlichen Parameter). Sie müssen dies nur einmal tun, nicht bei jeder Iteration der Schleife.
- An der Stelle, an der Sie durch jeden Ball schleifen und die Funktionen `draw()`, `update()` und `collisionDetect()` für jeden aufrufen, sorgen Sie dafür, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der Instanz des bösen Kreises bei jeder Iteration der Schleife auf.

### Implementieren des Punktzählers

Um den Punktzähler zu implementieren, befolgen Sie die folgenden Schritte:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unter dem {{HTMLElement("Heading_Elements", "h1")}}-Element mit dem Text "Ball count: " hinzu.
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

3. Machen Sie in Ihrem JavaScript die folgenden Updates:

   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Halten Sie auf irgendeine Weise die Anzahl der Bälle auf dem Bildschirm nach.
   - Erhöhen Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal, wenn ein Ball zur Szene hinzugefügt wird.
   - Verringern Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal, wenn der böse Kreis einen Ball frisst (dafür sorgt, dass er nicht mehr existiert).

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}
