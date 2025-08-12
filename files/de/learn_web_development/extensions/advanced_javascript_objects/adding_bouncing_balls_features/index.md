---
title: "Herausforderung: Neue Funktionen für unser hüpfendes Bälle-Demo hinzufügen"
short-title: "Herausforderung: Funktionen für hüpfende Bälle"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In dieser Herausforderung sollen Sie das hüpfende Bälle-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, machen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in ein neues Verzeichnis auf Ihrem lokalen Computer.

Alternativ könnten Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es innerhalb eines `<script>`-Elements in der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Hinweise und Tipps

Einige Hinweise, bevor Sie beginnen.

- Diese Herausforderung ist ziemlich schwierig. Lesen Sie alle Anweisungen, bevor Sie mit dem Programmieren beginnen, und bearbeiten Sie jeden Schritt langsam und sorgfältig.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem Sie jede Stufe zum Laufen bekommen haben, damit Sie darauf zurückgreifen können, wenn Sie später in Schwierigkeiten geraten.

## Projektauftrag

Unser hüpfendes Bälle-Demo macht Spaß, aber jetzt wollen wir es ein bisschen interaktiver gestalten, indem wir einen benutzerkontrollierten bösen Kreis hinzufügen, der die Bälle frisst, wenn er sie fängt. Wir möchten auch Ihre Fähigkeiten im Objekterstellen testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Bälle und der böse Kreis erben können. Schließlich wollen wir einen Punktestand einfügen, um die Anzahl der noch zu fangenden Bälle zu verfolgen.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der hüpfenden Bälle-Demo-Seite. Ein weiß umrandeter Kreis ist neben den farbigen Bällen sichtbar, und der Text "Ballzahl: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen eine genauere Vorstellung zu geben, werfen Sie einen Blick auf das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) (nicht im Quellcode spicken!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen Sie eine Shape-Klasse

Erstellen Sie zunächst eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf die gleiche Weise definieren, wie es der `Ball()`-Konstruktor ursprünglich getan hat, jedoch ohne die Eigenschaften `color` und `size`.

Die `Ball`-Klasse soll von `Shape` mit `extends` ableiten. Der Konstruktor für `Ball` sollte:

- die gleichen Argumente wie zuvor akzeptieren: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die Argumente `x`, `y`, `velX` und `velY` übergeben
- seine eigenen `color`- und `size`-Eigenschaften aus den ihm übergebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass Sie die `Shape`-Klasse oberhalb der bestehenden `Ball`-Klasse erstellen, da Sie sonst auf einen Fehler wie "Uncaught ReferenceError: Cannot access 'Shape' before initialization" stoßen werden.

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Bälle im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein Boolean (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Ein Ball sollte nur dann für die Kollisionsprüfung berücksichtigt werden, wenn die `exists`-Eigenschaft `true` ist. Ersetzen Sie also den vorhandenen `collisionDetect()`-Code durch den folgenden Code:

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

Wie oben diskutiert, besteht die einzige Ergänzung darin, zu prüfen, ob der Ball existiert — indem `ball.exists` im `if`-Bedingungsausdruck verwendet wird.

Die Ball-Methoden `draw()` und `update()` sollten genauso bleiben können, wie sie zuvor waren.

Versuchen Sie an diesem Punkt, den Code neu zu laden — er sollte genauso funktionieren wie zuvor, mit unseren neu gestalteten Objekten.

### Definition von EvilCircle

Nun ist es an der Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Sie möchten vielleicht später einmal einen weiteren bösen Kreis zur App hinzufügen, der von einem anderen Spieler kontrolliert werden kann, oder mehrere von Computern gesteuerte böse Kreise. Sie werden wahrscheinlich nicht die Welt mit einem einzigen bösen Kreis erobern, aber für diese Herausforderung wird es ausreichen.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte von `Shape` mit `extends` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur die `x`, `y`-Argumente entgegennehmen
- die `x`, `y`-Argumente zusammen mit hartcodierten Werten für `velX` und `velY`, die auf 20 gesetzt sind, an die `Shape`-Oberklasse übergeben. Sie sollten dies mit Code wie `super(x, y, 20, 20);` tun
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

Dies fügt dem `window`-Objekt einen `keydown`-Ereignislistener hinzu, so dass, wenn eine Taste gedrückt wird, die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts abgefragt wird, um zu sehen, welche Taste gedrückt wurde. Wenn es eine der vier angegebenen Tasten ist, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Methoden für EvilCircle definieren

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat denselben Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf das Canvas. Die `draw()`-Methode für `EvilCircle` wird auf sehr ähnliche Weise funktionieren, so dass Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen können. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir wollen, dass der böse Kreis nicht gefüllt ist, sondern nur eine äußere Linie (Stich) hat. Sie können dies erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) in [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) ändern.
- Wir möchten auch den Strich etwas dicker machen, damit Sie den bösen Kreis etwas leichter sehen können. Dies kann erreicht werden, indem ein Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) gesetzt wird, irgendwo nach dem Aufruf von [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) (3 ist ausreichend).

#### checkBounds()

Diese Methode wird dasselbe tun wie der erste Teil der `update()`-Methode für `Ball` — prüfen, ob der böse Kreis am Rand des Bildschirms verschwinden wird, und es verhindern. Auch hier können Sie größtenteils die `update()`-Methode für `Ball` kopieren, aber es gibt ein paar Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir möchten die Position des bösen Kreises nicht automatisch in jedem Frame aktualisieren, da wir ihn auf andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests wahr zurückgeben, möchten wir nicht `velX`/`velY` aktualisieren; stattdessen möchten wir den Wert von `x`/`y` so ändern, dass der böse Kreis leicht auf den Bildschirm zurückgespiegelt wird. Es würde Sinn machen, das `size`-Eigenschaft des bösen Kreises hinzuzufügen oder zu subtrahieren (je nach Bedarf).

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball`-Methoden funktionieren, so dass Sie eine Kopie davon als Grundlage für diese neue Methode verwenden können. Aber es gibt ein paar Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr überprüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Überprüfung vornimmt — weil es kein Ball mehr ist, sondern der böse Kreis! Stattdessen müssen Sie einen Test durchführen, um zu sehen, ob der Ball, der überprüft wird, existiert (mit welcher Eigenschaft könnten Sie das tun?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, so dass es keine Notwendigkeit gibt, ihn erneut zu überprüfen.
- In der inneren `if`-Anweisung möchten Sie nicht mehr, dass sich die Objekte verfärben, wenn eine Kollision erkannt wird — stattdessen möchten Sie alle Bälle, die mit dem bösen Kreis kollidieren, nicht mehr existieren lassen (wiederum, wie denken Sie, könnten Sie das tun?).

### Den bösen Kreis ins Programm bringen

Nun, da wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Um dies zu tun, müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Erstellen Sie zunächst eine neue Instanz des bösen Kreises (unter Angabe der erforderlichen Parameter). Sie müssen dies nur einmal tun, nicht bei jeder Iteration der Schleife.
- An dem Punkt, an dem Sie durch jeden Ball iterieren und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jeden aufrufen, stellen Sie sicher, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der bösen Kreisinstanz bei jeder Iteration der Schleife auf.

### Den Punktestand implementieren

Um den Punktestand zu implementieren, folgen Sie den folgenden Schritten:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unter dem {{HTMLElement("Heading_Elements", "h1")}}-Element mit dem Text "Ballzahl: " hinzu.
2. Fügen Sie in Ihrer CSS-Datei die folgende Regel am Ende hinzu:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaaaaa;
   }
   ```

3. Nehmen Sie in Ihrem JavaScript die folgenden Aktualisierungen vor:
   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Halten Sie die Anzahl der Bälle, die auf dem Bildschirm sind, auf irgendeine Weise fest.
   - Erhöhen Sie den Zähler und zeigen Sie die aktualisierte Anzahl der Bälle an, jedes Mal, wenn ein Ball zur Szene hinzugefügt wird.
   - Verringern Sie den Zähler und zeigen Sie die aktualisierte Anzahl der Bälle an, jedes Mal, wenn der böse Kreis einen Ball frisst (ihn nicht mehr existieren lässt).

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
