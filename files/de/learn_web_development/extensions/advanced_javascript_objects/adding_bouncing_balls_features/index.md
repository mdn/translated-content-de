---
title: "Herausforderung: Hinzufügen von Funktionen zu unserem hüpfenden Kugel-Demo"
short-title: "Herausforderung: Funktionen für hüpfende Kugeln"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In dieser Herausforderung sollen Sie das hüpfende Kugel-Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, erstellen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel. Speichern Sie alles in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es inline in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über eines unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Hinweise und Tipps

Einige Hinweise, bevor Sie starten.

- Diese Herausforderung ist ziemlich schwierig. Lesen Sie alle Anweisungen, bevor Sie mit dem Codieren beginnen, und gehen Sie jeden Schritt langsam und sorgfältig an.
- Es könnte eine gute Idee sein, nach jedem funktionierenden Stadium eine separate Kopie des Demos zu speichern, damit Sie später darauf zurückgreifen können, falls Sie Probleme bekommen.

## Projektbeschreibung

Unser Demo mit hüpfenden Kugeln macht Spaß, aber jetzt möchten wir es ein wenig interaktiver gestalten, indem wir einen benutzerkontrollierten bösen Kreis hinzufügen, der die Kugeln frisst, wenn er sie erwischt. Wir möchten auch Ihre Fähigkeiten im Objekterstellen testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Kugeln und der böse Kreis erben können. Schließlich möchten wir einen Punktestand hinzufügen, um die Anzahl der verbleibenden Kugeln zu erfassen.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der Seite mit dem hüpfenden Kugel-Demo. Ein weiß umrandeter Kreis ist zusätzlich zu den farbigen Kugeln sichtbar, und der Text "Ball count: 23" ist unter der Überschrift zu sehen.](bouncing-evil-circle.png)

Um Ihnen eine bessere Vorstellung zu geben, schauen Sie sich das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) an (nicht den Quellcode ansehen!).

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Erstellen Sie zunächst eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf dieselbe Weise definieren wie der ursprüngliche `Ball()`-Konstruktor, jedoch nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse soll mit `extends` von `Shape` erben. Der Konstruktor für `Ball` sollte:

- dieselben Argumente wie zuvor nehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die Argumente `x`, `y`, `velX` und `velY` übergeben
- seine eigenen `color`- und `size`-Eigenschaften aus den ihm gegebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass Sie die `Shape`-Klasse oberhalb der bestehenden `Ball`-Klasse erstellen, sonst erhalten Sie eine Fehlermeldung wie: "Uncaught ReferenceError: Cannot access 'Shape' before initialization"

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Kugeln im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein Boolean (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die Methode `collisionDetect()` der `Ball`-Klasse benötigt eine kleine Aktualisierung. Eine Kugel sollte nur dann bei der Kollisionserkennung berücksichtigt werden, wenn die Eigenschaft `exists` auf `true` steht. Ersetzen Sie also den vorhandenen `collisionDetect()`-Code durch den folgenden Code:

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

Wie oben besprochen, ist die einzige Ergänzung die Überprüfung, ob die Kugel existiert — indem Sie `ball.exists` in der `if`-Bedingung verwenden.

Die Methodendefinitionen für `draw()` und `update()` der Kugel sollten genau so bleiben wie zuvor.

An diesem Punkt sollten Sie den Code neu laden können — er sollte genauso funktionieren wie zuvor, mit unseren neu gestalteten Objekten.

### Definieren des EvilCircle

Jetzt ist es Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis umfassen, aber wir definieren ihn dennoch mit einem Konstruktor, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Vielleicht möchten Sie später einen weiteren Kreis zur App hinzufügen, den ein anderer Spieler steuern kann, oder mehrere computergesteuerte Böse Kreise. Wahrscheinlich werden Sie die Welt mit einem einzigen bösen Kreis nicht erobern, aber für diese Herausforderung reicht es aus.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Diese sollte mit `extends` von `Shape` erben.

#### Konstruktor für EvilCircle

Der Konstruktor für `EvilCircle` sollte:

- nur `x`, `y` Argumente übergeben bekommen
- die `x`, `y` Argumente an die `Shape`-Superklasse zusammen mit hartkodierten Werten für `velX` und `velY` weitergeben, die auf 20 gesetzt sind. Sie sollten dies mit Code wie `super(x, y, 20, 20);` tun
- `color` auf `white` und `size` auf `10` setzen.

Schließlich sollte der Konstruktor den Code einrichten, der dem Benutzer ermöglicht, den bösen Kreis über den Bildschirm zu bewegen:

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

Dies fügt dem `window`-Objekt einen `keydown`-Eventlistener hinzu, sodass beim Drücken einer Taste die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts herangezogen wird, um zu sehen, welche Taste gedrückt wurde. Ist es eine der vier angegebenen Tasten, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Definieren von Methoden für EvilCircle

Die `EvilCircle`-Klasse sollte drei Methoden haben, die im Folgenden beschrieben werden.

#### draw()

Diese Methode hat denselben Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Instanz des Objekts auf die Leinwand. Die `draw()`-Methode für `EvilCircle` funktioniert auf sehr ähnliche Weise, sodass Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen können. Danach sollten folgende Änderungen vorgenommen werden:

- Wir wollen, dass der böse Kreis nicht gefüllt ist, sondern nur eine Außenlinie (Kontur) hat. Dies kann erreicht werden, indem [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) mit [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) ersetzt werden.
- Wir möchten die Kontur etwas dicker machen, sodass der böse Kreis etwas leichter zu sehen ist. Dies kann erreicht werden, indem nach dem Aufruf von [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) ein Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) festgelegt wird (3 sollte ausreichen).

#### checkBounds()

Diese Methode wird dasselbe tun wie der erste Teil der `update()`-Methode für `Ball` — überprüfen, ob der böse Kreis den Rand des Bildschirms verlassen wird, und verhindern, dass er dies tut. Wiederum können Sie die `update()`-Methode für `Ball` größtenteils kopieren, aber es gibt einige Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir möchten die Position des bösen Kreises nicht automatisch in jedem Frame aktualisieren, da wir ihn auf andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, falls die Prüfungen wahr zurückgeben, möchten wir nicht die `velX`/`velY` aktualisieren; stattdessen wollen wir den Wert von `x`/`y` ändern, damit der böse Kreis leicht auf den Bildschirm zurückprallt. Das Addieren oder Subtrahieren (je nachdem) der `size`-Eigenschaft des bösen Kreises würde Sinn machen.

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball` funktionieren, sodass Sie eine Kopie davon als Grundlage für diese neue Methode verwenden können. Aber es gibt ein paar Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr überprüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Überprüfung durchführt — denn es ist kein Ball mehr, es ist der böse Kreis! Stattdessen müssen Sie einen Test durchführen, um zu prüfen, ob der zu überprüfende Ball existiert (mit welcher Eigenschaft könnten Sie dies tun?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, sodass es nicht notwendig ist, ihn erneut zu überprüfen.
- In der inneren `if`-Anweisung möchten Sie nicht mehr, dass sich die Objekte bei der Erkennung einer Kollision ändern — sondern statt dessen möchten Sie alle Kugeln, die mit dem bösen Kreis kollidieren, auf nicht existierend setzen (wie denken Sie, könnten Sie das tun?).

### Den bösen Kreis ins Programm bringen

Nachdem wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Zuallererst erstellen Sie einmalig eine neue Instanz des bösen Kreis-Objekts (die notwendigen Parameter angeben). Sie müssen dies nicht bei jeder Iteration der Schleife tun.
- An dem Punkt, an dem Sie durch jede Kugel schleifen und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jede einzelne aufrufen, stellen Sie sicher, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der bösen Kreis-Instanz bei jeder Iteration der Schleife auf.

### Punktestand-Anzeige implementieren

Um die Punktestand-Anzeige zu implementieren, führen Sie die folgenden Schritte aus:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unter dem {{HTMLElement("Heading_Elements", "h1")}}-Element hinzu, das den Text "Ball count: " enthält.
2. Fügen Sie in Ihrer CSS-Datei die folgende Regel unten hinzu:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. Nehmen Sie folgende Änderungen in Ihrem JavaScript vor:
   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Behalten Sie die Anzahl der Kugeln auf dem Bildschirm in irgendeiner Weise im Auge.
   - Erhöhen Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Kugeln jedes Mal an, wenn eine Kugel zur Szene hinzugefügt wird.
   - Verringern Sie die Anzahl und zeigen Sie die aktualisierte Anzahl der Kugeln jedes Mal an, wenn der böse Kreis eine Kugel isst (die Kugel existiert nicht mehr).

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
