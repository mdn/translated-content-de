---
title: Hinzufügen von Funktionen zu unserem hüpfenden Kugeln-Demo
slug: Learn/JavaScript/Objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 792424fa731eef9558b5e48c1239c7a76b143f81
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}

In dieser Bewertung wird erwartet, dass Sie das hüpfende Kugeln-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

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
        Verständnis von JavaScript-Objekten und objektorientierten Konstrukten testen
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, erstellen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es gerne inline in ein `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie stecken bleiben, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Hinweise und Tipps

Einige Hinweise, bevor Sie beginnen.

- Diese Bewertung ist recht anspruchsvoll. Lesen Sie die gesamte Bewertung, bevor Sie mit der Programmierung beginnen, und nehmen Sie sich für jeden Schritt Zeit und gehen Sie sorgfältig vor.
- Es könnte eine gute Idee sein, nach jedem erfolgreich abgeschlossenen Stadium eine separate Kopie des Demos zu speichern, damit Sie darauf zurückgreifen können, wenn Sie später in Schwierigkeiten geraten.

## Projektauftrag

Unser hüpfendes Kugeln-Demo macht Spaß, aber jetzt wollen wir es etwas interaktiver gestalten, indem wir einen vom Benutzer gesteuerten bösen Kreis hinzufügen, der die Kugeln frisst, wenn er sie fängt. Außerdem möchten wir Ihre Objektbau-Fähigkeiten testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Kugeln und der böse Kreis erben können. Schließlich wollen wir einen Zähler hinzufügen, um die Anzahl der verbleibenden Kugeln zu erfassen.

Das folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der hüpfenden Kugeln-Demo-Seite. Ein weiß umrandeter Kreis ist zusätzlich zu den farbigen Kugeln sichtbar, und der Text "Ball count: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen noch mehr von einer Vorstellung zu geben, schauen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) an (schauen Sie nicht im Quellcode nach!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Zunächst einmal erstellen Sie eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf die gleiche Weise definieren, wie es der `Ball()`-Konstruktor ursprünglich getan hat, jedoch nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte von `Shape` mit `extends` abgeleitet werden. Der Konstruktor für `Ball` sollte:

- die gleichen Argumente wie zuvor annehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen, wobei die Argumente `x`, `y`, `velX` und `velY` übergeben werden
- seine eigenen Eigenschaften `color` und `size` aus den gegebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass die `Shape`-Klasse oberhalb der bestehenden `Ball`-Klasse erstellt wird, sonst erhalten Sie einen Fehler wie: "Uncaught ReferenceError: Cannot access 'Shape' before initialization"

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Kugeln im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein boolean (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Eine Kugel muss nur für die Kollisionserkennung in Betracht gezogen werden, wenn die Eigenschaft `exists` `true` ist. Ersetzen Sie also den vorhandenen `collisionDetect()`-Code durch folgenden Code:

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

Wie oben besprochen, besteht die einzige Ergänzung darin, zu überprüfen, ob die Kugel existiert — indem `ball.exists` in der `if`-Bedingung verwendet wird.

Die Definitionen der Methoden `draw()` und `update()` der Kugel sollten genauso bleiben können, wie sie vorher waren.

An diesem Punkt sollten Sie den Code neu laden — er sollte genauso wie zuvor funktionieren, mit unseren neu gestalteten Objekten.

### Definieren von EvilCircle

Es ist jetzt an der Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Sie könnten später einen weiteren Kreis zur App hinzufügen, der von einem anderen Spieler gesteuert werden kann, oder mehrere computer-gesteuerte böse Kreise haben. Sie werden wahrscheinlich nicht die Welt mit einem einzelnen bösen Kreis beherrschen, aber für diese Bewertung reicht es.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte von `Shape` mit `extends` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur die Argumente `x`, `y` übergeben bekommen
- die Argumente `x`, `y` an die `Shape`-Superklasse zusammen mit Werten für `velX` und `velY`, die fest auf 20 gesetzt werden, übergeben. Sie sollten dies mit Code wie `super(x, y, 20, 20);` tun.
- `color` auf `white` und `size` auf `10` setzen.

Schließlich sollte der Konstruktor den Code einrichten, der es dem Benutzer ermöglicht, den bösen Kreis über den Bildschirm zu bewegen:

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

Dies fügt dem `window`-Objekt einen `keydown`-Event-Listener hinzu, sodass, wenn eine Taste gedrückt wird, die [`key`-Eigenschaft](/de/docs/Web/API/KeyboardEvent/key) des Event-Objekts konsultiert wird, um festzustellen, welche Taste gedrückt wurde. Wenn es eine der vier angegebenen Tasten ist, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Definieren von Methoden für EvilCircle

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat denselben Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf der Leinwand. Die `draw()`-Methode für `EvilCircle` wird auf sehr ähnliche Weise funktionieren, sodass Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen können. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir wollen, dass der böse Kreis nicht ausgefüllt ist, sondern nur eine äußere Linie (Strich) hat. Sie können dies erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) auf [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) aktualisieren.
- Wir wollen auch den Strich etwas dicker machen, sodass Sie den bösen Kreis etwas einfacher sehen können. Dies kann erreicht werden, indem ein Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) irgendwo nach dem Aufruf von [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) gesetzt wird (3 wäre ausreichend).

#### checkBounds()

Diese Methode soll dasselbe tun wie der erste Teil der `update()`-Methode für `Ball` — überprüfen, ob der böse Kreis vom Bildschirmrand abweichen wird, und ihn daran hindern. Auch hier können Sie größtenteils die `update()`-Methode für `Ball` kopieren, allerdings gibt es einige Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir wollen den Standort des bösen Kreises nicht bei jedem Frame automatisch aktualisieren, weil wir ihn auf andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests wahr zurückgeben, wollen wir `velX`/`velY` nicht aktualisieren; wir wollen stattdessen den Wert von `x`/`y` ändern, damit der böse Kreis leicht auf den Bildschirm zurückspringt. Es würde Sinn machen, die Größe des bösen Kreises zum Addieren oder Subtrahieren zu verwenden (je nach Situation).

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball` funktionieren, sodass Sie eine Kopie davon als Grundlage für diese neue Methode verwenden können. Aber es gibt ein paar Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr überprüfen, ob die aktuelle Kugel in der Iteration dieselbe ist wie die Kugel, die die Überprüfung durchführt — da es nicht mehr eine Kugel, sondern der böse Kreis ist! Stattdessen müssen Sie einen Test durchführen, um zu sehen, ob die zu überprüfende Kugel existiert (mit welcher Eigenschaft könnten Sie dies tun?). Wenn sie nicht existiert, wurde sie bereits vom bösen Kreis gefressen, sodass es nicht notwendig ist, sie erneut zu überprüfen.
- In der inneren `if`-Anweisung wollen Sie nicht mehr, dass die Objekte ihre Farbe ändern, wenn eine Kollision festgestellt wird — stattdessen möchten Sie festlegen, dass alle Kugeln, die mit dem bösen Kreis kollidieren, nicht mehr existent sind (wie würden Sie das wohl tun?).

### Einführen des bösen Kreises ins Programm

Nachdem wir nun den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dafür müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Erstellen Sie zuerst ein neues Objekt des bösen Kreises (mit den erforderlichen Parametern). Sie müssen dies nur einmal tun, nicht bei jeder Iteration der Schleife.
- An der Stelle, an der Sie durch jede Kugel iterieren und die Funktionen `draw()`, `update()` und `collisionDetect()` für jede aufrufen, sorgen Sie dafür, dass diese Funktionen nur aufgerufen werden, wenn die aktuelle Kugel existiert.
- Rufen Sie die Methoden `draw()`, `checkBounds()` und `collisionDetect()` der bösen Kreisinstanz bei jeder Iteration der Schleife auf.

### Implementieren des Punktzählers

Um den Punktzähler zu implementieren, gehen Sie wie folgt vor:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unter dem {{HTMLElement("Heading_Elements", "h1")}}-Element hinzu, das den Text "Ball count: " enthält.
2. Fügen Sie in Ihrer CSS-Datei folgende Regel am Ende hinzu:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. Machen Sie in Ihrem JavaScript folgende Aktualisierungen:

   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Halten Sie die Anzahl der Kugeln auf dem Bildschirm in irgendeiner Weise fest.
   - Erhöhen Sie die Zählung und zeigen Sie die aktualisierte Anzahl der Kugeln an, jedes Mal, wenn eine Kugel zur Szene hinzugefügt wird.
   - Verringern Sie die Zählung und zeigen Sie die aktualisierte Anzahl der Kugeln an, jedes Mal, wenn der böse Kreis eine Kugel frisst (verursacht, dass sie nicht mehr existiert).

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}
