---
title: Animationen und Tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **14. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, so wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson14.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson14.html).

Um das Spiel lebendiger und ansprechender zu gestalten, können wir Animationen und Tweens verwenden. Dies führt zu einem besseren, unterhaltsameren Erlebnis. Lassen Sie uns untersuchen, wie Phaser-Animationen und -Tweens in unser Spiel implementiert werden.

## Animationen

In Phaser beinhalten Animationen das Verwenden eines Spritesheets aus einer externen Quelle und das sequenzielle Anzeigen der Sprites. Als Beispiel werden wir den Ball wackeln lassen, wenn er etwas trifft.

Laden Sie zunächst das [Spritesheet von GitHub herunter](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/wobble.png) und speichern Sie es in Ihrem `/img` Verzeichnis.

Als nächstes laden wir das Spritesheet — setzen Sie die folgende Zeile am Ende Ihrer `preload()` Funktion:

```js
game.load.spritesheet("ball", "img/wobble.png", 20, 20);
```

Anstatt ein einzelnes Bild des Balls zu laden, können wir das gesamte Spritesheet laden — eine Sammlung verschiedener Bilder. Wir zeigen die Sprites der Reihe nach, um die Illusion einer Animation zu erzeugen. Die beiden zusätzlichen Parameter der `spritesheet()`-Methode bestimmen die Breite und Höhe jedes einzelnen Frames in der gegebenen Spritesheet-Datei, was dem Programm mitteilt, wie es die einzelnen Frames herausschneiden soll.

## Die Animation laden

Gehen Sie in Ihre `create()` Funktion, finden Sie die Zeile, die das Ball-Sprite lädt, und fügen Sie darunter den Aufruf zu `animations.add()` hinzu, wie unten zu sehen ist:

```js
ball = game.add.sprite(50, 250, "ball");
ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
```

Um ein Objekt zu animieren, verwenden wir die `animations.add()` Methode, die folgende Parameter enthält:

- Der Name, den wir für die Animation gewählt haben
- Ein Array, das die Reihenfolge definiert, in der die Frames während der Animation angezeigt werden sollen. Wenn Sie sich das `wobble.png` Bild noch einmal ansehen, sehen Sie, dass es drei Frames gibt. Phaser extrahiert diese und speichert Referenzen zu ihnen in einem Array – Positionen 0, 1 und 2. Das obige Array besagt, dass wir Frame 0, dann 1, dann erneut 0 usw. anzeigen.
- Die Bildfrequenz, in fps. Da wir die Animation mit 24fps ablaufen lassen und es 9 Frames gibt, wird die Animation knapp dreimal pro Sekunde angezeigt.

## Die Animation anwenden, wenn der Ball das Paddle trifft

Im `arcade.collide()`-Aufruf, der die Kollision zwischen dem Ball und dem Paddle behandelt (die erste Zeile innerhalb von `update()`, siehe unten), können wir einen zusätzlichen Parameter hinzufügen, der eine Funktion spezifiziert, die bei jeder Kollision ausgeführt werden soll, ähnlich wie die `ballHitBrick()` Funktion. Aktualisieren Sie die erste Zeile innerhalb von `update()`, wie unten gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

Dann können wir die `ballHitPaddle()` Funktion erstellen (mit `ball` und `paddle` als Standardparameter), die die Wackelanimation abspielt, wenn sie aufgerufen wird. Fügen Sie die folgende Funktion kurz vor Ihrem schließenden `</script>` Tag hinzu:

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
}
```

Die Animation wird jedes Mal abgespielt, wenn der Ball das Paddle trifft. Sie können den `animations.play()` Aufruf auch innerhalb der `ballHitBrick()` Funktion hinzufügen, wenn Sie der Meinung sind, dass das Spiel dadurch besser aussieht.

## Tweens

Während Animationen externe Sprites sequenziell abspielen, animieren Tweens sanft die Eigenschaften eines Objekts in der Spielwelt, wie z.B. die Breite oder die Deckkraft.

Lassen Sie uns einen Tween zu unserem Spiel hinzufügen, um die Ziegel glatt verschwinden zu lassen, wenn sie vom Ball getroffen werden. Gehen Sie zu Ihrer `ballHitBrick()` Funktion, finden Sie Ihre `brick.kill();` Zeile und ersetzen Sie sie durch Folgendes:

```js
const killTween = game.add.tween(brick.scale);
killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
killTween.onComplete.addOnce(() => {
  brick.kill();
}, this);
killTween.start();
```

Lassen Sie uns dies durchgehen, damit Sie sehen, was hier passiert:

1. Beim Definieren eines neuen Tweens müssen Sie angeben, welche Eigenschaft getweent werden soll — in unserem Fall lassen wir anstatt die Ziegel sofort zu verbergen, deren Breite und Höhe auf null skalieren, sodass sie schön verschwinden. Dafür verwenden wir die `add.tween()` Methode und geben `brick.scale` als Argument an, da dies ist, was wir tweenn wollen.
2. Die `to()` Methode definiert den Zustand des Objekts am Ende des Tweens. Sie nimmt ein Objekt mit den gewünschten Endwerten des gewählten Parameters (Skalierung nimmt einen Skalierungswert, 1 bedeutet 100 % der Größe, 0 bedeutet 0 % der Größe usw.), die Zeit des Tweens in Millisekunden und die Art der Abklingung für den Tween.
3. Wir fügen auch den optionalen `onComplete` Ereignishandler hinzu, der eine Funktion definiert, die ausgeführt wird, wenn der Tween beendet ist.
4. Das Letzte, was zu tun ist, ist, den Tween sofort mit `start()` zu starten.

Das ist die erweiterte Version der Tween-Definition, aber wir können auch die Kurzschreibweise verwenden:

```js
game.add
  .tween(brick.scale)
  .to({ x: 2, y: 2 }, 500, Phaser.Easing.Elastic.Out, true, 100);
```

Dieser Tween wird die Skala des Ziegels in einer halben Sekunde mit elastischer Abklingung verdoppeln, automatisch starten und eine Verzögerung von 100 Millisekunden haben.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9o4pakrb/","","400")}}

## Nächste Schritte

Animationen und Tweens sehen sehr schön aus, aber wir können unser Spiel noch weiter verbessern — im nächsten Abschnitt werden wir uns mit der Handhabung von [Schaltflächeneingaben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) befassen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
