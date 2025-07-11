---
title: Animationen und Tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **14. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson14.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson14.html).

Um das Spiel lebendiger und attraktiver zu machen, können wir Animationen und Tweens verwenden. Dies wird zu einem besseren, unterhaltsameren Erlebnis führen. Lassen Sie uns erkunden, wie wir Phaser-Animationen und Tweens in unser Spiel einbauen können.

## Animationen

In Phaser beinhalten Animationen die Verwendung eines Spritesheets aus einer externen Quelle und das sequentielle Anzeigen der Sprites. Als Beispiel lassen wir den Ball wackeln, wenn er etwas trifft.

Laden Sie zuerst das [Spritesheet von GitHub](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/wobble.png) herunter und speichern Sie es in Ihrem `/img` Verzeichnis.

Als nächstes werden wir das Spritesheet laden — fügen Sie die folgende Zeile am Ende Ihrer `preload()`-Funktion hinzu:

```js
game.load.spritesheet("ball", "img/wobble.png", 20, 20);
```

Anstatt ein einzelnes Bild des Balls zu laden, können wir das gesamte Spritesheet laden — eine Sammlung verschiedener Bilder. Wir zeigen die Sprites nacheinander an, um die Illusion einer Animation zu erzeugen. Die beiden zusätzlichen Parameter der `spritesheet()`-Methode bestimmen die Breite und Höhe jedes einzelnen Frames in der angegebenen Spritesheet-Datei und zeigen dem Programm an, wie es aufgeteilt werden soll, um die einzelnen Frames zu erhalten.

## Laden der Animation

Als nächstes gehen Sie in Ihre `create()`-Funktion, finden Sie die Zeile, die das Ball-Sprite lädt, und fügen Sie darunter den Aufruf zu `animations.add()` ein, wie unten gezeigt:

```js
ball = game.add.sprite(50, 250, "ball");
ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
```

Um ein Objekt mit einer Animation zu versehen, verwenden wir die Methode `animations.add()`, die folgende Parameter enthält:

- Der von uns gewählte Name für die Animation
- Ein Array, das die Reihenfolge definiert, in der die Frames während der Animation angezeigt werden sollen. Wenn Sie sich das Bild `wobble.png` nochmals ansehen, werden Sie feststellen, dass es drei Frames gibt. Phaser extrahiert diese und speichert Verweise darauf in einem Array — Positionen 0, 1 und 2. Das obige Array zeigt, dass wir Frame 0, dann 1, dann 0 usw. anzeigen.
- Die Bildfrequenz in fps. Da wir die Animation bei 24 fps ausführen und es 9 Frames gibt, wird die Animation knapp dreimal pro Sekunde angezeigt.

## Anwenden der Animation, wenn der Ball das Paddle trifft

Im Aufruf der Methode `arcade.collide()`, die die Kollision zwischen dem Ball und dem Paddle behandelt (die erste Zeile in `update()`, siehe unten), können wir einen zusätzlichen Parameter hinzufügen, der eine Funktion angibt, die jedes Mal ausgeführt werden soll, wenn die Kollision stattfindet, ähnlich wie die Funktion `ballHitBrick()`. Aktualisieren Sie die erste Zeile in `update()` wie unten gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

Dann können wir die `ballHitPaddle()` Funktion erstellen (mit `ball` und `paddle` als Standardparameter), welche die Wackelanimation abspielt, wenn sie aufgerufen wird. Fügen Sie die folgende Funktion direkt vor Ihrem schließenden `</script>`-Tag hinzu:

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
}
```

Die Animation wird jedes Mal abgespielt, wenn der Ball das Paddle trifft. Sie können den Aufruf von `animations.play()` auch in die `ballHitBrick()` Funktion einfügen, wenn Sie der Meinung sind, dass das Spiel dadurch besser aussieht.

## Tweens

Während Animationen externe Sprites sequentiell abspielen, animieren Tweens glatt die Eigenschaften eines Objekts in der Spielwelt, wie Breite oder Opazität.

Lassen Sie uns einen Tween zu unserem Spiel hinzufügen, um die Ziegel sanft verschwinden zu lassen, wenn sie vom Ball getroffen werden. Gehen Sie zu Ihrer `ballHitBrick()`-Funktion, finden Sie Ihre `brick.kill();`-Zeile, und ersetzen Sie sie durch Folgendes:

```js
const killTween = game.add.tween(brick.scale);
killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
killTween.onComplete.addOnce(() => {
  brick.kill();
}, this);
killTween.start();
```

Lassen Sie uns das durchgehen, damit Sie sehen können, was hier passiert:

1. Beim Definieren eines neuen Tweens müssen Sie angeben, welche Eigenschaft getweened wird — in unserem Fall, anstatt die Ziegel sofort zu verstecken, wenn sie vom Ball getroffen werden, skalieren wir ihre Breite und Höhe auf null, damit sie schön verschwinden. Dazu verwenden wir die Methode `add.tween()`, und geben `brick.scale` als Argument an, da dies das ist, was wir tweenen möchten.
2. Die Methode `to()` definiert den Zustand des Objekts am Ende des Tweens. Sie nimmt ein Objekt, das die gewünschten Endwerte des gewählten Parameters enthält (Skalierung nimmt einen Skalierungswert an, 1 ist 100% der Größe, 0 ist 0% der Größe, etc.), die Zeit des Tweens in Millisekunden und die Art des Easing, die für den Tween verwendet werden soll.
3. Wir werden auch den optionalen `onComplete` Event-Handler hinzufügen, der eine Funktion definiert, die ausgeführt wird, wenn der Tween endet.
4. Das letzte, was zu tun ist, ist den Tween direkt mit `start()` zu starten.

Das ist die erweiterte Version der Tween-Definition, aber wir können auch die Kurzschreibweise verwenden:

```js
game.add
  .tween(brick.scale)
  .to({ x: 2, y: 2 }, 500, Phaser.Easing.Elastic.Out, true, 100);
```

Dieser Tween wird die Skalierung des Ziegels in einer halben Sekunde mit elastischem Easing verdoppeln, wird automatisch starten und eine Verzögerung von 100 Millisekunden haben.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie es funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9o4pakrb/","","400")}}

## Nächste Schritte

Animationen und Tweens sehen sehr gut aus, aber wir können unserem Spiel noch mehr hinzufügen — im nächsten Abschnitt schauen wir uns an, wie wir [Knöpfeingaben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) handhaben können.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
