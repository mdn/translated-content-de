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
        Bevor Sie diese Bewertung versuchen, sollten Sie alle Artikel in diesem Modul durchgearbeitet haben.
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Das Verständnis von JavaScript-Objekten und objektorientierten Konstrukten testen
      </td>
    </tr>
  </tbody>
</table>

## Ausgangspunkt

Um mit dieser Bewertung zu beginnen, erstellen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Falls der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es auch inline in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Hinweise und Tipps

Ein paar Hinweise, bevor Sie beginnen.

- Diese Bewertung ist ziemlich herausfordernd. Lesen Sie die gesamte Bewertung, bevor Sie mit dem Codieren beginnen, und nehmen Sie sich für jeden Schritt Zeit.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem jeder Abschnitt funktioniert, damit Sie darauf zurückgreifen können, falls Sie später Probleme haben.

## Projektauftrag

Unser hüpfendes Bälle-Demo macht Spaß, aber jetzt wollen wir es etwas interaktiver machen, indem wir einen benutzerkontrollierten bösen Kreis hinzufügen, der die Bälle frisst, wenn er sie fängt. Außerdem wollen wir Ihre Objektbau-Fähigkeiten prüfen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Bälle und der böse Kreis erben können. Schließlich wollen wir einen Punktestand-Zähler hinzufügen, um die Anzahl der noch zu fangenden Bälle zu verfolgen.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der hüpfenden Bälle-Demoseite. Zusätzlich zu den farbigen Bällen ist ein weiß umrandeter Kreis sichtbar, und der Text „Ball count: 23“ ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen eine bessere Vorstellung zu geben, sehen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) an (nicht im Quellcode spicken!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Erstellen Sie zuerst eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf die gleiche Weise definieren wie das `Ball()` ursprünglich, jedoch nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte von `Shape` mit `extends` erben. Der Konstruktor für `Ball` sollte:

- die gleichen Argumente nehmen wie zuvor: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die Argumente `x`, `y`, `velX` und `velY` übergeben
- ihre eigenen `color` und `size` Eigenschaften von den übergebenen Parametern initialisieren.

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Bälle im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein boolescher Wert (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Ein Ball muss nur dann zur Kollisionsprüfung in Betracht gezogen werden, wenn die Eigenschaft `exists` `true` ist. Ersetzen Sie daher den vorhandenen `collisionDetect()`-Code durch den folgenden Code:

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

Wie oben besprochen, ist die einzige Ergänzung die Überprüfung, ob der Ball existiert — indem `ball.exists` in der `if`-Bedingung verwendet wird.

Die `draw()` und `update()` Methodendefinitionen des Balls sollten genau so bleiben können, wie sie vorher waren.

Versuchen Sie an diesem Punkt, den Code neu zu laden — er sollte genauso funktionieren wie zuvor, mit unseren überarbeiteten Objekten.

### Definition von EvilCircle

Nun ist es Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Vielleicht möchten Sie später einen weiteren Kreis zur App hinzufügen, der von einem anderen Spieler kontrolliert wird, oder mehrere computergesteuerte böse Kreise. Sie werden die Welt wahrscheinlich nicht mit einem einzigen bösen Kreis erobern, aber es wird für diese Bewertung ausreichen.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte mit `extends` von `Shape` erben.

#### EvilCircle Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur `x`, `y` Argumente empfangen
- die `x`, `y`-Argumente an die `Shape`-Superklasse übergeben, zusammen mit festkodierten Werten für `velX` und `velY` auf 20. Sie sollten dies mit einem Code wie `super(x, y, 20, 20);` tun.
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

Dies fügt dem `window`-Objekt einen `keydown`-Ereignislistener hinzu, so dass, wenn eine Taste gedrückt wird, die [`key`](/de/docs/Web/API/KeyboardEvent/key) Eigenschaft des Event-Objekts konsultiert wird, um zu sehen, welche Taste gedrückt wird. Wenn es eine der vier angegebenen Tasten ist, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Definition von Methoden für EvilCircle

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat den gleichen Zweck wie die `draw()`-Methode für `Ball`: sie zeichnet die Objektinstanz auf der Leinwand. Die `draw()`-Methode für `EvilCircle` funktioniert sehr ähnlich, also können Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir wollen, dass der böse Kreis nicht gefüllt ist, sondern nur eine Außenlinie (Stroke) hat. Sie können dies erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) durch [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) ersetzen.
- Wir wollen auch, dass der Strich etwas dicker ist, damit Sie den bösen Kreis etwas leichter sehen können. Dies kann erreicht werden, indem Sie irgendwo nach dem [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)-Aufruf einen Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) festlegen (3 reicht aus).

#### checkBounds()

Diese Methode wird dasselbe tun wie der erste Teil der `update()`-Methode für `Ball` — überprüfen, ob der böse Kreis am Rand des Bildschirms hinausgeht, und verhindern, dass dies geschieht. Auch hier können Sie die `update()`-Methode für `Ball` größtenteils kopieren, aber es gibt ein paar Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir wollen die Position des bösen Kreises nicht automatisch in jedem Frame aktualisieren, weil wir es auf eine andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests wahr zurückgeben, wollen wir nicht `velX`/`velY` aktualisieren; wir wollen stattdessen den Wert von `x`/`y` ändern, sodass der böse Kreis leicht auf den Bildschirm zurückprallt. Das Hinzufügen oder Subtrahieren (wie angebracht) der `size`-Eigenschaft des bösen Kreises wäre sinnvoll.

#### collisionDetect()

Diese Methode wird sehr ähnlich arbeiten wie die `collisionDetect()`-Methode für `Ball`, sodass Sie eine Kopie davon als Grundlage für diese neue Methode verwenden können. Aber es gibt ein paar Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr überprüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Prüfung durchführt — weil es sich nicht mehr um einen Ball handelt, sondern um den bösen Kreis! Stattdessen müssen Sie einen Test durchführen, um zu sehen, ob der zu prüfende Ball existiert (mit welcher Eigenschaft könnten Sie dies tun?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, sodass es nicht nötig ist, ihn erneut zu überprüfen.
- In der inneren `if`-Anweisung wollen Sie nicht mehr, dass die Objekte die Farbe ändern, wenn eine Kollision erkannt wird — stattdessen möchten Sie, dass alle Bälle, die mit dem bösen Kreis kollidieren, nicht mehr existieren (nochmals, wie könnten Sie das erreichen?).

### Den bösen Kreis ins Programm bringen

Nachdem wir nun den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen in der `loop()`-Funktion vornehmen.

- Zuallererst erstellen Sie eine neue Objektinstanz des bösen Kreises (die erforderlichen Parameter angeben). Sie müssen dies nur einmal tun, nicht bei jeder Iteration der Schleife.
- An dem Punkt, an dem Sie jeden Ball durchlaufen und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jeden aufrufen, stellen Sie sicher, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()` Methoden der bösen Kreis-Instanz bei jeder Iteration der Schleife auf.

### Implementierung des Punktestand-Zählers

Um den Punktestand-Zähler zu implementieren, folgen Sie den folgenden Schritten:

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

3. Machen Sie in Ihrem JavaScript die folgenden Aktualisierungen:

   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Behalten Sie in irgendeiner Weise die Anzahl der Bälle auf dem Bildschirm im Auge.
   - Erhöhen Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal an, wenn ein Ball zur Szene hinzugefügt wird.
   - Verringern Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal an, wenn der böse Kreis einen Ball frisst (verursacht, dass er nicht mehr existiert).

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_building_practice", "", "Learn/JavaScript/Objects")}}
