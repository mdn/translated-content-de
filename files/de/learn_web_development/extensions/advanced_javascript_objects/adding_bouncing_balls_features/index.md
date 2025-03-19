---
title: "Herausforderung: Erweiterung unseres hüpfenden Bälle-Demos"
short-title: "Herausforderung: Funktionen für hüpfende Bälle"
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

Bei dieser Herausforderung sollen Sie das hüpfende Bälle-Demo aus dem vorherigen Artikel als Ausgangspunkt nutzen und einige neue und interessante Funktionen hinzufügen.

## Ausgangspunkt

Um diese Herausforderung zu beginnen, machen Sie eine lokale Kopie von [index-finished.html](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index-finished.html), [style.css](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [main-finished.js](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) aus unserem letzten Artikel in einem neuen Verzeichnis auf Ihrem lokalen Computer.

Alternativ können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Sie könnten das HTML, CSS und JavaScript in einen dieser Online-Editoren einfügen. Wenn der von Ihnen verwendete Online-Editor kein separates JavaScript-Panel hat, können Sie es gerne inline in einem `<script>`-Element innerhalb der HTML-Seite einfügen.

> [!NOTE]
> Wenn Sie nicht weiterkommen, können Sie sich in einem unserer [Kommunikationskanäle](/de/docs/MDN/Community/Communication_channels) an uns wenden.

## Hinweise und Tipps

Ein paar Hinweise, bevor Sie anfangen.

- Diese Herausforderung ist ziemlich schwierig. Lesen Sie alle Anweisungen, bevor Sie mit dem Programmieren beginnen, und gehen Sie Schritt für Schritt und sorgfältig vor.
- Es könnte eine gute Idee sein, eine separate Kopie des Demos zu speichern, nachdem Sie jede Phase bearbeitet haben, damit Sie darauf zurückgreifen können, falls Sie später in Schwierigkeiten geraten.

## Projektbeschreibung

Unser hüpfendes Bälle-Demo macht Spaß, aber jetzt möchten wir es etwas interaktiver gestalten, indem wir einen benutzerkontrollierten bösen Kreis hinzufügen, der die Bälle frisst, wenn er sie erwischt. Wir möchten auch Ihre Fähigkeiten im Objektbau testen, indem wir ein generisches `Shape()`-Objekt erstellen, von dem unsere Bälle und der böse Kreis erben können. Schließlich möchten wir einen Punktestandzähler hinzufügen, um die Anzahl der noch zu fangenden Bälle zu verfolgen.

Der folgende Screenshot gibt Ihnen eine Vorstellung davon, wie das fertige Programm aussehen sollte:

![Screenshot der hüpfenden Bälle-Demo-Seite. Ein weiß umrandeter Kreis ist zusätzlich zu den farbigen Bällen sichtbar, und der Text "Ball count: 23" ist unter der Überschrift sichtbar.](bouncing-evil-circle.png)

Um Ihnen eine bessere Vorstellung zu geben, werfen Sie einen Blick auf das [fertige Beispiel](https://mdn.github.io/learning-area/javascript/oojs/assessment/) (nicht in den Quellcode schauen!)

## Schritte zur Fertigstellung

Die folgenden Abschnitte beschreiben, was Sie tun müssen.

### Erstellen einer Shape-Klasse

Erstellen Sie zunächst eine neue `Shape`-Klasse. Diese hat nur einen Konstruktor. Der `Shape`-Konstruktor sollte die Eigenschaften `x`, `y`, `velX` und `velY` auf die gleiche Weise definieren wie der `Ball()`-Konstruktor ursprünglich, aber nicht die Eigenschaften `color` und `size`.

Die `Ball`-Klasse sollte so erstellt werden, dass sie von `Shape` mit `extends` erbt. Der Konstruktor für `Ball` sollte:

- die gleichen Argumente wie zuvor nehmen: `x`, `y`, `velX`, `velY`, `size` und `color`
- den `Shape`-Konstruktor mit `super()` aufrufen und die Argumente `x`, `y`, `velX` und `velY` übergeben
- die eigenen `color`- und `size`-Eigenschaften aus den übergebenen Parametern initialisieren.

> [!NOTE]
> Stellen Sie sicher, dass Sie die `Shape`-Klasse über der vorhandenen `Ball`-Klasse erstellen, sonst erhalten Sie einen Fehler wie: "Uncaught ReferenceError: Cannot access 'Shape' before initialization"

Der `Ball`-Konstruktor sollte eine neue Eigenschaft namens `exists` definieren, die verwendet wird, um zu verfolgen, ob die Bälle im Programm existieren (nicht vom bösen Kreis gefressen wurden). Diese sollte ein Boolean (`true`/`false`) sein, der im Konstruktor auf `true` initialisiert wird.

Die `collisionDetect()`-Methode der `Ball`-Klasse benötigt ein kleines Update. Ein Ball sollte nur dann für die Kollisionserkennung betrachtet werden, wenn die Eigenschaft `exists` `true` ist. Ersetzen Sie also den vorhandenen `collisionDetect()`-Code durch den folgenden Code:

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

Wie oben besprochen, besteht die einzige Ergänzung darin zu überprüfen, ob der Ball existiert — indem `ball.exists` in der `if`-Bedingung verwendet wird.

Die Definitionen der Methoden `draw()` und `update()` für den Ball sollten genauso bleiben können, wie sie vorher waren.

An diesem Punkt sollten Sie den Code neu laden und es sollte genauso funktionieren wie vorher, mit unseren neu gestalteten Objekten.

### Definition von EvilCircle

Jetzt ist es Zeit, den Bösewicht kennenzulernen — den `EvilCircle()`! Unser Spiel wird nur einen bösen Kreis beinhalten, aber wir werden ihn trotzdem mit einem Konstruktor definieren, der von `Shape()` erbt, um Ihnen etwas Übung zu geben. Vielleicht möchten Sie später einen weiteren Kreis hinzufügen, der von einem anderen Spieler gesteuert wird, oder mehrere vom Computer gesteuerte böse Kreise haben. Mit einem einzigen bösen Kreis werden Sie wahrscheinlich nicht die Welt erobern, aber er reicht für diese Herausforderung.

Erstellen Sie eine Definition für eine `EvilCircle`-Klasse. Sie sollte von `Shape` mit `extends` erben.

#### EvilCircle-Konstruktor

Der Konstruktor für `EvilCircle` sollte:

- nur `x`, `y`-Argumente übergeben werden
- die `x`, `y`-Argumente an die `Shape`-Superklasse zusammen mit Werten für `velX` und `velY`, die fest auf 20 eingestellt sind, weitergeben. Sie sollten dies mit einem Code wie `super(x, y, 20, 20);` tun
- die `color` auf `white` und `size` auf `10` setzen.

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

Dieser fügt dem `window`-Objekt einen `keydown`-Event-Listener hinzu, sodass beim Drücken einer Taste die `key`-Eigenschaft des Ereignisobjekts konsultiert wird, um zu sehen, welche Taste gedrückt wurde. Wenn es eine der vier angegebenen Tasten ist, bewegt sich der böse Kreis nach links/rechts/oben/unten.

### Definition von Methoden für EvilCircle

Die `EvilCircle`-Klasse sollte drei Methoden haben, wie unten beschrieben.

#### draw()

Diese Methode hat denselben Zweck wie die `draw()`-Methode für `Ball`: Sie zeichnet die Objektinstanz auf der Leinwand. Die `draw()`-Methode für `EvilCircle` wird auf sehr ähnliche Weise funktionieren, sodass Sie mit dem Kopieren der `draw()`-Methode für `Ball` beginnen können. Sie sollten dann die folgenden Änderungen vornehmen:

- Wir wollen, dass der böse Kreis nicht ausgefüllt ist, sondern lediglich eine äußere Linie (Stroke) hat. Dies können Sie erreichen, indem Sie `fillStyle` und `fill()` zu `strokeStyle` und `stroke()` entsprechend aktualisieren.
- Wir möchten auch den Strich etwas dicker machen, damit Sie den bösen Kreis etwas leichter sehen. Dies kann erreicht werden, indem Sie einen Wert für `lineWidth` irgendwo nach dem `beginPath()`-Aufruf (3 reicht aus) einstellen.

#### checkBounds()

Diese Methode wird dasselbe tun wie der erste Teil der `update()`-Methode für `Ball` — überprüfen, ob der böse Kreis den Rand des Bildschirms verlässt, und verhindern, dass er dies tut. Auch hier können Sie die `update()`-Methode für `Ball` größtenteils kopieren, aber es gibt ein paar Änderungen, die Sie vornehmen sollten:

- Entfernen Sie die letzten beiden Zeilen — wir möchten die Position des bösen Kreises nicht automatisch auf jedem Frame aktualisieren, da wir ihn auf eine andere Weise bewegen werden, wie Sie unten sehen werden.
- Innerhalb der `if ()`-Anweisungen, wenn die Tests wahr ergeben, möchten wir nicht `velX`/`velY` aktualisieren; wir möchten stattdessen den Wert von `x`/`y` ändern, sodass der böse Kreis leicht zurück auf den Bildschirm springt. Das Hinzufügen oder Subtrahieren (je nach Bedarf) der `size`-Eigenschaft des bösen Kreises wäre sinnvoll.

#### collisionDetect()

Diese Methode wird auf sehr ähnliche Weise wie die `collisionDetect()`-Methode für `Ball` funktionieren, sodass Sie eine Kopie davon als Basis für diese neue Methode verwenden können. Aber es gibt ein paar Unterschiede:

- In der äußeren `if`-Anweisung müssen Sie nicht mehr überprüfen, ob der aktuelle Ball in der Iteration derselbe ist wie der Ball, der die Prüfung durchführt — weil er jetzt kein Ball mehr ist, es ist der böse Kreis! Stattdessen müssen Sie einen Test machen, um zu sehen, ob der Ball, der überprüft wird, existiert (mit welcher Eigenschaft könnten Sie dies tun?). Wenn er nicht existiert, wurde er bereits vom bösen Kreis gefressen, sodass es nicht notwendig ist, ihn erneut zu überprüfen.
- In der inneren `if`-Anweisung möchten Sie nicht mehr, dass die Objekte ihre Farbe ändern, wenn eine Kollision erkannt wird — stattdessen möchten Sie festlegen, dass alle Bälle, die mit dem bösen Kreis kollidieren, nicht mehr existieren (wiederum, wie könnten Sie das machen?).

### Den bösen Kreis ins Programm bringen

Nachdem wir nun den bösen Kreis definiert haben, müssen wir ihn tatsächlich in unserer Szene erscheinen lassen. Dazu müssen Sie einige Änderungen an der `loop()`-Funktion vornehmen.

- Erstellen Sie zunächst eine neue Instanz des bösen Kreises (unter Angabe der notwendigen Parameter). Sie müssen dies nur einmal tun, nicht bei jeder Iteration der Schleife.
- In dem Teil, in dem Sie durch jeden Ball iterieren und die `draw()`, `update()` und `collisionDetect()`-Funktionen für jeden aufrufen, sorgen Sie dafür, dass diese Funktionen nur aufgerufen werden, wenn der aktuelle Ball existiert.
- Rufen Sie die `draw()`, `checkBounds()` und `collisionDetect()`-Methoden der bösen Kreisinstanz bei jeder Iteration der Schleife auf.

### Implementierung des Punktestandszählers

Um den Punktestandzähler zu implementieren, führen Sie die folgenden Schritte aus:

1. Fügen Sie in Ihrer HTML-Datei ein {{HTMLElement("p")}}-Element direkt unterhalb des {{HTMLElement("Heading_Elements", "h1")}}-Elements hinzu, das den Text "Ball count: " enthält.
2. Fügen Sie Ihrer CSS-Datei die folgende Regel am Ende hinzu:

   ```css
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaa;
   }
   ```

3. Nehmen Sie folgende Aktualisierungen in Ihrem JavaScript vor:

   - Erstellen Sie eine Variable, die auf den Paragraphen verweist.
   - Halten Sie auf irgendeine Weise die Anzahl der Bälle auf dem Bildschirm fest.
   - Erhöhen Sie den Zähler und zeigen Sie die aktualisierte Anzahl von Bällen jedes Mal an, wenn ein Ball der Szene hinzugefügt wird.
   - Verringern Sie den Zähler und zeigen Sie die aktualisierte Anzahl der Bälle jedes Mal an, wenn der böse Kreis einen Ball frisst (dafür sorgt, dass er nicht mehr existiert).

{{PreviousMenu("Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
