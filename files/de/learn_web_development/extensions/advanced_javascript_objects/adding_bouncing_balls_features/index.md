---
title: "Herausforderung: Hinzufügen von Funktionen zu unserem hüpfenden Ball-Demo"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In dieser Herausforderung sollen Sie das hüpfende Ball-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, erstellen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Feld hat, können Sie es in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie uns über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) kontaktieren.

## Hinweise und Tipps

Ein paar Hinweise, bevor Sie beginnen:

- Diese Herausforderung ist ziemlich schwierig. Lesen Sie alle Anweisungen, bevor Sie mit dem Codieren beginnen, und nehmen Sie sich jeden Schritt langsam und sorgfältig vor.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem Sie jede Stufe zum Laufen gebracht haben, damit Sie darauf zurückgreifen können, wenn Sie später in Schwierigkeiten geraten.

## Projektbeschreibung

Unser hüpfendes Ball-Demo macht Spaß, aber jetzt möchten wir es ein wenig interaktiver gestalten, indem wir einen vom Benutzer gesteuerten bösen Kreis hinzufügen, der die Bälle frisst, wenn er sie fängt. Außerdem möchten wir Ihre Fähigkeiten im Objektbau testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Bälle und der böse Kreis erben können. Schließlich möchten wir einen Punktezähler hinzufügen, um die Anzahl der noch zu fangenden Bälle zu verfolgen.

Das folgende Bildschirmfoto gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Bildschirmfoto der hüpfenden Ball-Demo-Seite. Ein weiß umrandeter Kreis ist neben den farbigen Bällen sichtbar und der Text "Ballanzahl: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen eine weitere Vorstellung zu geben, werfen Sie einen Blick auf das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) (kein Blick auf den Quellcode!)

## Schritte zum Abschluss

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Zuerst erstellen Sie eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf die gleiche Weise definieren, wie dies ursprünglich im `Ball()`-Konstruktor der Fall war, jedoch nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte so abgeleitet werden, dass sie von `Shape` mithilfe von `extends` erbt. Der Konstruktor für `Ball` sollte:

- dieselben Argumente wie zuvor annehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mithilfe von `super()` aufrufen und die `x`, `y`, `velX` und `velY`-Argumente übergeben
- seine eigenen `color`- und `size`-Eigenschaften aus den gegebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass Sie die `Shape`-Klasse oberhalb der vorhandenen `Ball`-Klasse erstellen, andernfalls erhalten Sie einen Fehler wie: "Uncaught ReferenceError: Cannot access 'Shape' before initialization"

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Bälle im Programm existieren (noch nicht vom bösen Kreis gefressen wurden). Dies sollte ein Boolean (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Ein Ball muss nur dann für die Kollisionsprüfung in Betracht gezogen werden, wenn die Eigenschaft `exists` `true` ist. Ersetzen Sie also den vorhandenen `collisionDetect()`-Code durch den folgenden Code:

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

Wie oben besprochen, ist die einzige Ergänzung die Überprüfung, ob der Ball existiert — durch Verwendung von `ball.exists` in der `if`-Bedingung.

Die `draw()`- und `update()`-Methodendefinitionen für den Ball sollten genauso bleiben können wie zuvor.

Laden Sie an diesem Punkt den Code erneut — er sollte genauso funktionieren wie zuvor, mit unseren neu gestalteten Objekten.

### Definition von EvilCircle

Jetzt ist es Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen einige Übung zu geben. Vielleicht möchten Sie später einen weiteren Kreis zur App hinzufügen, der von einem anderen Spieler gesteuert werden kann, oder mehrere computergesteuerte böse Kreise einsetzen. Sie werden die Welt wahrscheinlich nicht mit einem einzigen bösen Kreis erobern, aber für diese Herausforderung reicht es aus.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte von `Shape` mithilfe von `extends` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur `x`, `y`-Argumente entgegennehmen
- die `x`, `y`-Argumente zusammen mit den hartkodierten Werten für `velX` und `velY` von 20 an die `Shape`-Oberklasse übergeben. Sie sollten dies mit Code wie `super(x, y, 20, 20);` tun
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

Dies fügt dem `window`-Objekt einen `keydown`-Ereignislistener hinzu, so dass bei Drücken einer Taste die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts konsultiert wird, um zu sehen, welche Taste gedrückt wurde. Wenn es eine der vier angegebenen Tasten ist, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Methoden für EvilCircle definieren

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat denselben Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf der Leinwand. Die `draw()`-Methode für `EvilCircle` wird auf sehr ähnliche Weise funktionieren, sodass Sie die `draw()`-Methode für `Ball` als Ausgangspunkt verwenden können. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir möchten, dass der böse Kreis nicht ausgefüllt ist, sondern nur eine äußere Linie (Stroke) hat. Sie können dies erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) in [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) ändern.
- Wir möchten auch, dass die Linie etwas dicker ist, damit der böse Kreis leichter erkennbar ist. Dies kann erreicht werden, indem Sie einen Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) irgendwo nach dem Aufruf von [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) festlegen (3 ist ausreichend).

#### checkBounds()

Diese Methode wird dieselbe Funktion wie der erste Teil der `update()`-Methode für `Ball` ausführen — überprüfen, ob der böse Kreis über den Rand des Bildschirms hinausgeht, und verhindern, dass er dies tut. Sie können erneut größtenteils die `update()`-Methode für `Ball` kopieren, aber es gibt einige Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir möchten die Position des bösen Kreises nicht in jedem Frame automatisch aktualisieren, da wir ihn auf andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests wahr zurückgeben, möchten wir nicht `velX`/`velY` aktualisieren; stattdessen möchten wir den Wert von `x`/`y` ändern, damit der böse Kreis leicht auf den Bildschirm zurückprallt. Es würde Sinn machen, die `size`-Eigenschaft des bösen Kreises zu addieren oder subtrahieren (je nach Bedarf).

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball` funktionieren, also können Sie eine Kopie davon als Basis für diese neue Methode verwenden. Es gibt jedoch ein paar Unterschiede:

- In der äußeren `if`-Bedingung müssen Sie nicht mehr überprüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Prüfung durchführt — weil es kein Ball mehr ist, sondern der böse Kreis! Stattdessen müssen Sie eine Überprüfung durchführen, um festzustellen, ob der überprüfte Ball existiert (mit welcher Eigenschaft könnten Sie das tun?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, daher ist keine weitere Prüfung erforderlich.
- In der inneren `if`-Bedingung möchten Sie nicht mehr, dass die Objekte die Farbe ändern, wenn eine Kollision erkannt wird — stattdessen möchten Sie, dass alle Bälle, die mit dem bösen Kreis kollidieren, nicht mehr existieren (wie meinen Sie, dass Sie das tun könnten?).

### Den bösen Kreis in das Programm einbringen

Jetzt, da wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Erstellen Sie zuerst eine neue Instanz des bösen Kreises (angabe der notwendigen Parameter). Sie müssen dies nur einmal tun, nicht in jeder Iteration der Schleife.
- An dem Punkt, an dem Sie jeden Ball durchlaufen und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jeden Ball aufrufen, stellen Sie sicher, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der bösen Kreisinstanz in jeder Iteration der Schleife auf.

### Den Punktezähler implementieren

Um den Punktezähler zu implementieren, führen Sie die folgenden Schritte aus:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unterhalb des {{HTMLElement("Heading_Elements", "h1")}}-Elements hinzu, das den Text "Ballanzahl: " enthält.
2. Fügen Sie in Ihrer CSS-Datei die folgende Regel am unteren Rand hinzu:

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
   - Halten Sie auf irgendeine Weise die Anzahl der Bälle auf dem Bildschirm fest.
   - Erhöhen Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal an, wenn ein Ball zur Szene hinzugefügt wird.
   - Verringern Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal an, wenn der böse Kreis einen Ball frisst (verursacht, dass er nicht mehr existiert).

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
