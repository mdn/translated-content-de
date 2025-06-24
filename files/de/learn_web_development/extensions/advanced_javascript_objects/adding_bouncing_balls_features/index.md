---
title: "Herausforderung: Neue Funktionen zu unserem Bouncing Balls Demo hinzufügen"
short-title: "Herausforderung: Bouncing Balls Funktionen"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In dieser Herausforderung sollen Sie das Bouncing Balls Demo aus dem vorherigen Artikel als Ausgangspunkt verwenden und einige neue und interessante Funktionen hinzufügen.

## Ausgangspunkt

Um mit dieser Herausforderung zu beginnen, erstellen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Sollte der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel haben, können Sie es in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich über einen unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Hinweise und Tipps

Ein paar Hinweise, bevor Sie beginnen.

- Diese Herausforderung ist ziemlich schwierig. Lesen Sie alle Anweisungen, bevor Sie anfangen zu programmieren, und gehen Sie jeden Schritt langsam und sorgfältig an.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem Sie jede Stufe funktionierend haben, sodass Sie darauf zurückgreifen können, wenn Sie später in Schwierigkeiten geraten.

## Projektbeschreibung

Unser Bouncy Balls Demo macht Spaß, aber jetzt möchten wir es ein wenig interaktiver gestalten, indem wir einen benutzerkontrollierten bösen Kreis hinzufügen, der die Bälle auffrisst, wenn er sie fängt. Außerdem möchten wir Ihre Objektaufbaufähigkeiten testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Bälle und der böse Kreis erben können. Schließlich möchten wir einen Zähler hinzufügen, um die Anzahl der verbleibenden Bälle zu verfolgen.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der Seite des Bouncing Balls Demo. Ein weiß umrandeter Kreis ist zusätzlich zu den farbigen Bällen sichtbar und der Text "Ball count: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen eine bessere Vorstellung zu geben, werfen Sie einen Blick auf das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) (nicht den Quellcode ansehen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Zuerst einmal erstellen Sie eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf dieselbe Weise definieren, wie es der `Ball()`-Konstruktor ursprünglich tat, jedoch nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte von `Shape` mit `extends` abgeleitet werden. Der Konstruktor für `Ball` sollte:

- dieselben Argumente wie zuvor übernehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die Argumente `x`, `y`, `velX` und `velY` übergeben
- seine eigenen `color` und `size` Eigenschaften aus den ihm gegebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass die `Shape`-Klasse oberhalb der bestehenden `Ball`-Klasse erstellt wird, ansonsten erhalten Sie möglicherweise einen Fehler wie: "Uncaught ReferenceError: Cannot access 'Shape' before initialization"

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Bälle im Programm existieren (nicht vom bösen Kreis gefressen wurden). Dies sollte ein boolescher Wert (`true`/`false`) sein, der im Konstruktor auf `true` gesetzt wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt eine kleine Aktualisierung. Ein Ball muss nur für die Kollisionsdetektion berücksichtigt werden, wenn die Eigenschaft `exists` `true` ist. Ersetzen Sie also den vorhandenen `collisionDetect()`-Code durch den folgenden Code:

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

Wie oben besprochen, ist die einzige Ergänzung, zu prüfen, ob der Ball existiert — indem `ball.exists` im `if` bedingten Ausdruck verwendet wird.

Die Definitionen der Methoden `draw()` und `update()` des Balls sollten genau so bleiben können, wie sie zuvor waren.

An diesem Punkt versuchen Sie, den Code erneut zu laden — er sollte genauso funktionieren wie zuvor, mit unseren überarbeiteten Objekten.

### Definition von EvilCircle

Jetzt ist es Zeit, den Bösewicht kennenzulernen — das `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis enthalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Vielleicht möchten Sie später noch einen weiteren Kreis zur App hinzufügen, der von einem weiteren Spieler kontrolliert werden kann, oder mehrere computerkontrollierte böse Kreise haben. Sie werden die Welt wahrscheinlich nicht mit einem einzelnen bösen Kreis erobern, aber für diese Herausforderung reicht es.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte von `Shape` mit `extends` erben.

#### EvilCircle Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur `x`, `y`-Argumente erhalten
- die `x`, `y`-Argumente an die `Shape`-Superclass weitergeben, zusammen mit Werten für `velX` und `velY`, die fest auf 20 gesetzt sind. Dies sollten Sie mit Code wie `super(x, y, 20, 20);` tun
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

Dies fügt dem `window`-Objekt einen `keydown`-Ereignislistener hinzu, sodass bei jedem Drücken einer Taste die [`key`](/de/docs/Web/API/KeyboardEvent/key)-Eigenschaft des Ereignisobjekts konsultiert wird, um zu sehen, welche Taste gedrückt wurde. Wenn es eine der vier angegebenen Tasten ist, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Definition von Methoden für EvilCircle

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat den gleichen Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf der Leinwand. Die `draw()`-Methode für `EvilCircle` funktioniert sehr ähnlich, daher können Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir möchten, dass der böse Kreis nicht ausgefüllt ist, sondern nur eine äußere Linie (Stroke) hat. Sie können dies erreichen, indem Sie [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) und [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) in [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) aktualisieren.
- Wir möchten auch, dass die Linie ein wenig dicker ist, damit Sie den bösen Kreis etwas leichter sehen können. Dies kann erreicht werden, indem Sie einen Wert für [`lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth) irgendwo nach dem [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath)-Aufruf setzen (3 wäre in Ordnung).

#### checkBounds()

Diese Methode wird das Gleiche tun wie der erste Teil der `update()`-Methode für `Ball` — schauen Sie, ob der böse Kreis den Bildschirmrand verlässt, und verhindern Sie, dass er dies tut. Auch hier können Sie größtenteils die `update()`-Methode für `Ball` kopieren, aber es gibt ein paar Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir möchten die Position des bösen Kreises nicht in jedem Frame automatisch aktualisieren, da wir ihn auf eine andere Weise bewegen, wie Sie weiter unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests `true` zurückgeben, möchten wir `velX`/`velY` nicht aktualisieren; stattdessen möchten wir den Wert von `x`/`y` ändern, sodass der böse Kreis nur geringfügig auf den Bildschirm zurückprallt. Das Hinzufügen oder Subtrahieren (je nachdem) der `size`-Eigenschaft des bösen Kreises würde Sinn machen.

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball`-Methoden funktionieren, sodass Sie eine Kopie davon als Grundlage für diese neue Methode verwenden können. Es gibt jedoch einige Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr überprüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Überprüfung durchführt — denn es ist kein Ball mehr, es ist der böse Kreis! Stattdessen müssen Sie eine Prüfung durchführen, um zu sehen, ob der Ball, der überprüft wird, existiert (mit welcher Eigenschaft könnten Sie das tun?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, sodass es keinen Bedarf gibt, ihn erneut zu überprüfen.
- In der inneren `if`-Anweisung möchten Sie nicht mehr, dass die Objekte ihre Farbe ändern, wenn eine Kollision erkannt wird — stattdessen sollen Sie alle Bälle, die mit dem bösen Kreis kollidieren, dazu bringen, nicht mehr zu existieren (wie denken Sie, würden Sie das tun?).

### Den bösen Kreis ins Programm bringen

Jetzt, da wir den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Zuerst erstellen Sie eine neue Objektinstanz des bösen Kreises (Angabe der notwendigen Parameter). Dies müssen Sie nur einmal tun, nicht bei jeder Iteration der Schleife.
- An dem Punkt, an dem Sie durch jeden Ball schleifen und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jeden aufrufen, sorgen Sie dafür, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie bei jeder Iteration der Schleife die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der bösen Kreis-Instanz auf.

### Den Zähler implementieren

Um den Zähler zu implementieren, führen Sie die folgenden Schritte aus:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unter dem {{HTMLElement("Heading_Elements", "h1")}}-Element hinzu, das den Text "Ball count: " enthält.
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

3. In Ihrem JavaScript machen Sie die folgenden Aktualisierungen:
   - Erstellen Sie eine Variable, die eine Referenz auf den Absatz speichert.
   - Halten Sie in irgendeiner Weise die Anzahl der Bälle auf dem Bildschirm fest.
   - Erhöhen Sie die Zählung und zeigen Sie die aktualisierte Anzahl an Bällen jedes Mal an, wenn ein Ball zur Szene hinzugefügt wird.
   - Verringern Sie die Zählung und zeigen Sie die aktualisierte Anzahl an Bällen jedes Mal an, wenn der böse Kreis einen Ball auffrisst (ihn dazu bringt, nicht mehr zu existieren).

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
