---
title: "Herausforderung: Funktionen zu unserem hüpfenden Ball-Demo hinzufügen"
short-title: "Herausforderung: Features von hüpfenden Bällen"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In dieser Herausforderung sollen Sie das hüpfende Ball-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, machen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es innerhalb eines `<script>`-Elements in die HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Tipps und Hinweise

Ein paar Hinweise, bevor Sie beginnen.

- Diese Aufgabe ist recht schwierig. Lesen Sie alle Anweisungen, bevor Sie mit dem Codieren beginnen und gehen Sie Schritt für Schritt vorsichtig vor.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem Sie jede Stufe erfolgreich abgeschlossen haben, damit Sie darauf zurückgreifen können, wenn Sie später in Schwierigkeiten geraten.

## Projektbeschreibung

Unser hüpfendes Ball-Demo macht Spaß, aber jetzt wollen wir es ein bisschen interaktiver gestalten, indem wir einen benutzergesteuerten bösen Kreis hinzufügen, der die Bälle frisst, wenn er sie erwischt. Wir möchten auch Ihre Fähigkeiten im Objektaufbau testen, indem wir ein generisches `Shape()` Objekt erstellen, von dem unsere Bälle und der böse Kreis erben können. Schließlich wollen wir einen Punktezähler hinzufügen, um die Anzahl der verbleibenden Bälle zu verfolgen, die eingefangen werden können.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen soll:

![Screenshot der hüpfenden Bälle-Demo-Seite. Ein weiß umrissener Kreis ist neben den farbigen Bällen sichtbar, und der Text "Ballzählung: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen mehr von einer Vorstellung zu geben, schauen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) an (schauen Sie nicht in den Quellcode!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen Sie eine Shape-Klasse

Zuerst einmal erstellen Sie eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` in gleicher Weise wie der `Ball()`-Konstruktor ursprünglich definieren, aber nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte von `Shape` mit `extends` abgeleitet werden. Der Konstruktor für `Ball` sollte:

- die gleichen Argumente wie zuvor annehmen: `x`, `y`, `velX`, `velY`, `size`, und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die Argumente `x`, `y`, `velX` und `velY` übergeben
- seine eigenen `color`- und `size`-Eigenschaften aus den übergebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass Sie die `Shape`-Klasse über der bestehenden `Ball`-Klasse erstellen, sonst erhalten Sie einen Fehler wie: "Uncaught ReferenceError: Cannot access 'Shape' before initialization"

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Bälle im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein boolescher Wert (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Ein Ball muss nur dann für die Kollisionserkennung betrachtet werden, wenn die `exists`-Eigenschaft `true` ist. Ersetzen Sie also den existierenden `collisionDetect()`-Code durch den folgenden Code:

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

Wie bereits besprochen, ist die einzige Ergänzung, zu überprüfen, ob der Ball existiert — indem in der `if`-Bedingung `ball.exists` verwendet wird.

Die Ball-Methodendefinitionen `draw()` und `update()` sollten genauso bleiben können wie zuvor.

Zu diesem Zeitpunkt ist Ihr Code neu zu laden — er sollte genauso funktionieren wie vorher, mit unseren neu gestalteten Objekten.

### Definition des bösen Kreises

Jetzt ist es an der Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Sie möchten vielleicht später einen weiteren Kreis zur App hinzufügen, der von einem anderen Spieler kontrolliert werden kann, oder mehrere computer-gesteuerte böse Kreise haben. Sie werden die Welt wahrscheinlich nicht mit einem einzigen bösen Kreis erobern, aber es wird für diese Herausforderung ausreichen.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte mit `extends` von `Shape` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur die Argumente `x`, `y` übergeben
- die `x`, `y` Argumente an die Oberklasse `Shape` zusammen mit hartcodierten Werten für `velX` und `velY`, die auf 20 gesetzt sind, übergeben. Sie sollten dies mit einem Code wie `super(x, y, 20, 20);` tun
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

Dies fügt dem `window`-Objekt einen `keydown`-Ereignis-Listener hinzu, sodass bei Tastendruck die Eigenschaft [`key`](/de/docs/Web/API/KeyboardEvent/key) des Ereignisobjekts abgerufen wird, um zu sehen, welche Taste gedrückt wurde. Wenn es sich um eine der vier angegebenen Tasten handelt, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Methoden für EvilCircle definieren

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat denselben Zweck wie die `draw()`-Methode für `Ball`: sie zeichnet die Objektinstanz auf die Leinwand. Die `draw()`-Methode für `EvilCircle` funktioniert in sehr ähnlicher Weise, daher können Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir möchten, dass der böse Kreis nicht gefüllt ist, sondern nur eine äußere Linie (Stroke) hat. Sie können dies erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) auf [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) aktualisieren.
- Wir möchten auch, dass der Strich etwas dicker ist, damit man den bösen Kreis besser sehen kann. Dies kann erreicht werden, indem Sie einen Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) irgendwo nach dem [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) Aufruf setzen (3 wird ausreichen).

#### checkBounds()

Diese Methode wird dasselbe tun wie der erste Teil der `update()`-Methode für `Ball` — nachsehen, ob der böse Kreis dabei ist, den Rand des Bildschirms zu verlassen, und ihn davon abhalten. Auch hier können Sie hauptsächlich die `update()`-Methode für `Ball` kopieren, aber es gibt ein paar Änderungen, die Sie machen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir wollen die Position des bösen Kreises nicht automatisch bei jedem Frame aktualisieren, da wir ihn auf eine andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests wahr sind, wollen wir `velX`/`velY` nicht aktualisieren; wir wollen stattdessen den Wert von `x`/`y` ändern, damit der böse Kreis leicht auf den Bildschirm zurückgeworfen wird. Das Hinzufügen oder Subtrahieren (je nach Fall) der `size`-Eigenschaft des bösen Kreises würde Sinn machen.

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball`-Methoden agieren, sodass Sie eine Kopie davon als Basis für diese neue Methode verwenden können. Aber es gibt ein paar Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr überprüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Überprüfung durchführt — denn es ist kein Ball mehr, es ist der böse Kreis! Stattdessen sollten Sie einen Test durchführen, um zu sehen, ob der zu überprüfende Ball existiert (mit welcher Eigenschaft könnten Sie das machen?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, und es besteht keine Notwendigkeit, ihn erneut zu überprüfen.
- In der inneren `if`-Anweisung wollen Sie nicht mehr, dass sich die Objekte bei einer Kollision ändern — stattdessen soll jeder Ball, der mit dem bösen Kreis kollidiert, nicht mehr existieren (nochmals, wie glauben Sie, könnten Sie das tun?).

### Den bösen Kreis ins Programm bringen

Jetzt, da wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen in der `loop()`-Funktion vornehmen.

- Zuerst erstellen Sie eine neue Instanz des bösen Kreis-Objekts (indem Sie die notwendigen Parameter angeben). Das müssen Sie nur einmal tun, nicht bei jeder Iteration der Schleife.
- An dem Punkt, an dem Sie durch jeden Ball iterieren und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jeden aufrufen, stellen Sie sicher, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der bösen Kreis-Instanz bei jeder Iteration der Schleife auf.

### Implementierung des Punktezählers

Um den Punktezähler zu implementieren, befolgen Sie die folgenden Schritte:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unter dem {{HTMLElement("Heading_Elements", "h1")}}-Element hinzu, das den Text "Ballzählung: " enthält.
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
   - Halten Sie die Anzahl der Bälle auf dem Bildschirm auf eine Art und Weise fest.
   - Erhöhen Sie die Zählung und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal an, wenn ein Ball zur Szene hinzugefügt wird.
   - Verringern Sie die Zählung und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal an, wenn der böse Kreis einen Ball frisst (verursacht, dass er nicht mehr existiert).

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
