---
title: "Herausforderung: Hinzufügen von Funktionen zu unserem hüpfenden Kugel-Demo"
short-title: "Herausforderung: Funktionen für hüpfende Kugeln"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In dieser Herausforderung sollen Sie das hüpfende Kugel-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

## Ausgangspunkt

Um diese Herausforderung zu starten, machen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie können das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Hinweise und Tipps

Ein paar Hinweise, bevor Sie beginnen.

- Diese Herausforderung ist ziemlich anspruchsvoll. Lesen Sie alle Anweisungen, bevor Sie mit dem Programmieren beginnen, und gehen Sie jeden Schritt langsam und sorgfältig durch.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem Sie jede Phase abgeschlossen haben, damit Sie darauf zurückgreifen können, falls Sie später auf Probleme stoßen.

## Projektauftrag

Unser Demo mit hüpfenden Kugeln macht Spaß, aber jetzt möchten wir es ein wenig interaktiver gestalten, indem wir einen vom Benutzer gesteuerten bösen Kreis hinzufügen, der die Kugeln frisst, wenn er sie fängt. Wir möchten auch Ihre Fähigkeiten im Erstellen von Objekten testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Kugeln und der böse Kreis erben können. Schließlich möchten wir einen Zähler hinzufügen, um die Anzahl der verbleibenden Kugeln zu erfassen, die gefangen werden können.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der hüpfenden Kugel-Demo-Seite. Zusätzlich zu den farbigen Kugeln ist ein weiß umrandeter Kreis sichtbar und der Text "Ball count: 23" ist unter der Überschrift zu sehen.](bouncing-evil-circle.png)

Um Ihnen einen besseren Eindruck zu geben, werfen Sie einen Blick auf das [endgültige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) (nicht in den Quellcode schauen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Eine Shape-Klasse erstellen

Erstellen Sie zuerst eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf die gleiche Weise definieren wie der ursprüngliche `Ball()`-Konstruktor, jedoch nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte so gestaltet werden, dass sie von `Shape` mit `extends` erbt. Der Konstruktor für `Ball` sollte:

- die gleichen Argumente wie bisher übernehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die Argumente `x`, `y`, `velX` und `velY` übergeben
- die eigenen `color`- und `size`-Eigenschaften aus den übergebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass Sie die `Shape`-Klasse über der bestehenden `Ball`-Klasse erstellen, da sonst ein Fehler wie: "Uncaught ReferenceError: Cannot access 'Shape' before initialization" auftreten kann.

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Kugeln im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein boolescher Wert (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Eine Kugel sollte nur dann für die Kollisionserkennung in Betracht gezogen werden, wenn die Eigenschaft `exists` den Wert `true` hat. Ersetzen Sie daher den bestehenden `collisionDetect()`-Code durch den folgenden Code:

```js
class Ball {
  // …
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
  // …
}
```

Wie oben diskutiert, besteht die einzige Ergänzung darin zu prüfen, ob die Kugel existiert — indem `ball.exists` in der `if`-Bedingung verwendet wird.

Die `draw()`- und `update()`-Methodendefinitionen der Kugel sollten genauso bleiben können wie zuvor.

Versuchen Sie an diesem Punkt, den Code neu zu laden — er sollte genauso funktionieren wie zuvor, mit unseren neu gestalteten Objekten.

### EvilCircle definieren

Jetzt ist es an der Zeit, den Bösewicht kennenzulernen — den `EvilCircle`! Unser Spiel wird nur einen bösen Kreis enthalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen ein wenig Übung zu geben. Vielleicht möchten Sie später einen weiteren Kreis zur App hinzufügen, der von einem anderen Spieler gesteuert werden kann, oder mehrere vom Computer gesteuerte böse Kreise hinzufügen. Sie werden die Welt wahrscheinlich nicht mit einem einzigen bösen Kreis erobern, aber er genügt für diese Herausforderung.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte von `Shape` mit `extends` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur die Argumente `x`, `y` annehmen
- die `x`, `y`-Argumente zusammen mit hartcodierten Werten für `velX` und `velY`, die auf 20 festgelegt sind, an die Überklasse `Shape` übergeben. Sie sollten dies mit einem Code wie `super(x, y, 20, 20);` tun
- `color` auf `white` und `size` auf `10` setzen.

Schließlich sollte der Konstruktor den Code einrichten, der den Benutzerkreis ermöglicht, den bösen Kreis über den Bildschirm zu bewegen:

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

Dies fügt ein `keydown`-Ereignislistener zum `window`-Objekt hinzu, sodass beim Drücken einer Taste die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts konsultiert wird, um zu sehen, welche Taste gedrückt wird. Wenn es eine der vier angegebenen Tasten ist, wird der böse Kreis nach links/rechts/oben/unten bewegt.

### Methoden für EvilCircle definieren

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat den gleichen Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf die Leinwand. Die `draw()`-Methode für `EvilCircle` funktioniert sehr ähnlich, Sie können also mit dem Kopieren der `draw()`-Methode für `Ball` beginnen. Sie sollten dann folgende Änderungen vornehmen:

- Wir möchten, dass der böse Kreis nicht ausgefüllt ist, sondern nur eine äußere Linie (Stroke) hat. Dies können Sie erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) in [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) aktualisieren.
- Wir möchten die Linie auch etwas dicker machen, sodass Sie den bösen Kreis etwas leichter erkennen können. Dies kann erreicht werden, indem ein Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) irgendwo nach dem Aufruf von [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) festgelegt wird (3 genügt).

#### checkBounds()

Diese Methode wird das gleiche tun wie der erste Teil der `update()`-Methode für `Ball` — prüfen, ob der böse Kreis den Bildschirmrand verlassen wird, und ihn davon abhalten. Auch hier können Sie größtenteils die `update()`-Methode für `Ball` kopieren, aber es gibt einige Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir möchten den bösen Kreis nicht automatisch in jedem Frame aktualisieren, da wir ihn auf andere Weise bewegen werden, wie Sie unten sehen werden.
- In den `if ()`-Anweisungen, wenn die Tests wahr zurückgeben, möchten wir nicht `velX`/`velY` aktualisieren; wir möchten stattdessen den Wert von `x`/`y` ändern, sodass der böse Kreis leicht zurück auf den Bildschirm zurückgeworfen wird. Das Hinzufügen oder Abziehen (entsprechend) der `size`-Eigenschaft des bösen Kreises wäre sinnvoll.

#### collisionDetect()

Diese Methode wird in sehr ähnlicher Weise wie die `collisionDetect()`-Methode für `Ball` funktionieren, daher können Sie eine Kopie dieser Methode als Grundlage für diese neue Methode verwenden. Aber es gibt einige Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr prüfen, ob die aktuelle Kugel in der Iteration die gleiche ist wie die Kugel, die die Prüfung durchführt — da es sich nicht mehr um eine Kugel handelt, sondern um den bösen Kreis! Stattdessen müssen Sie einen Test durchführen, um zu sehen, ob die geprüfte Kugel existiert (mit welcher Eigenschaft könnten Sie das tun?). Wenn sie nicht existiert, wurde sie bereits vom bösen Kreis gefressen, sodass es keinen Grund gibt, sie erneut zu prüfen.
- In der inneren `if`-Anweisung möchten Sie nicht mehr, dass sich die Objekte bei Kollision farblich ändern — stattdessen möchten Sie alle Kugeln, die mit dem bösen Kreis kollidieren, so festlegen, dass sie nicht mehr existieren (wie denken Sie, könnten Sie das tun?).

### Den bösen Kreis in das Programm einbringen

Nachdem wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Erstellen Sie zuerst eine neue Instanz des bösen Kreises (unter Angabe der erforderlichen Parameter). Sie müssen dies nur einmal tun, nicht bei jeder Iteration der Schleife.
- An dem Punkt, an dem Sie durch jede Kugel schleifen und die Funktionen `draw()`, `update()` und `collisionDetect()` für jede aufrufen, stellen Sie sicher, dass diese Funktionen nur aufgerufen werden, wenn die aktuelle Kugel existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der Instanz des bösen Kreises bei jeder Iteration der Schleife auf.

### Den Punkte-Zähler implementieren

Um den Punkte-Zähler zu implementieren, führen Sie die folgenden Schritte aus:

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

3. Nehmen Sie in Ihrem JavaScript die folgenden Aktualisierungen vor:

   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Behalten Sie auf irgendeine Weise die Anzahl der Kugeln auf dem Bildschirm im Auge.
   - Erhöhen Sie die Zählung und zeigen Sie die aktualisierte Anzahl von Kugeln jedes Mal an, wenn eine Kugel zur Szene hinzugefügt wird.
   - Verringern Sie die Zählung und zeigen Sie die aktualisierte Anzahl von Kugeln jedes Mal an, wenn der böse Kreis eine Kugel frisst (sie nicht mehr existiert).

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
