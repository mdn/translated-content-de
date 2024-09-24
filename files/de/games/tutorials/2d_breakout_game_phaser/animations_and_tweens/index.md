---
title: Animationen und Tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **14. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson14.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson14.html) finden.

Um das Spiel lebendiger und interessanter zu gestalten, können wir Animationen und Tweens verwenden. Dies führt zu einem besseren und unterhaltsameren Erlebnis. Lassen Sie uns erkunden, wie man Phaser-Animationen und -Tweens in unser Spiel implementiert.

## Animationen

In Phaser beinhalten Animationen das Verwenden eines Spritesheets aus einer externen Quelle und das sequentielle Anzeigen der Sprites. Als Beispiel werden wir den Ball wackeln lassen, wenn er etwas trifft.

Zuerst [laden Sie das Spritesheet von GitHub herunter](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/wobble.png) und speichern es in Ihrem `/img` Verzeichnis.

Als Nächstes laden wir das Spritesheet – fügen Sie die folgende Zeile am Ende Ihrer `preload()`-Funktion ein:

```js
game.load.spritesheet("ball", "img/wobble.png", 20, 20);
```

Anstatt ein einzelnes Bild des Balls zu laden, können wir das gesamte Spritesheet laden – eine Sammlung verschiedener Bilder. Wir zeigen die Sprites nacheinander an, um die Illusion einer Animation zu erzeugen. Die beiden zusätzlichen Parameter der `spritesheet()`-Methode bestimmen die Breite und Höhe jedes einzelnen Frames in der gegebenen Spritesheet-Datei und geben dem Programm Hinweise, wie es diese auftrennen soll, um die einzelnen Frames zu erhalten.

## Laden der Animation

Gehen Sie als Nächstes in Ihre `create()`-Funktion, finden Sie die Zeile, die den Ball-Sprite lädt, und fügen Sie darunter den Aufruf zu `animations.add()` ein, wie unten gezeigt:

```js
ball = game.add.sprite(50, 250, "ball");
ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
```

Um eine Animation zu einem Objekt hinzuzufügen, verwenden wir die `animations.add()`-Methode, die die folgenden Parameter enthält:

- Der von uns gewählte Name für die Animation
- Ein Array, das die Reihenfolge definiert, in der die Frames während der Animation angezeigt werden sollen. Wenn Sie sich das Bild `wobble.png` noch einmal ansehen, werden Sie sehen, dass es drei Frames gibt. Phaser extrahiert diese und speichert Referenzen auf sie in einem Array — Positionen 0, 1 und 2. Das obige Array besagt, dass wir Frame 0 anzeigen, dann 1, dann 0, usw.
- Die Bildrate, in fps. Da wir die Animation mit 24 fps ablaufen lassen und es 9 Frames gibt, wird die Animation knapp dreimal pro Sekunde angezeigt.

## Anwendung der Animation, wenn der Ball das Paddle trifft

Im Aufruf der Methode `arcade.collide()`, die die Kollision zwischen Ball und Paddle behandelt (die erste Zeile innerhalb von `update()`, siehe unten), können wir einen zusätzlichen Parameter hinzufügen, der eine Funktion angibt, die jedes Mal ausgeführt wird, wenn die Kollision auftritt, ähnlich wie die Funktion `ballHitBrick()`. Aktualisieren Sie die erste Zeile innerhalb von `update()` wie unten gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

Dann können wir die Funktion `ballHitPaddle()` erstellen (mit `ball` und `paddle` als Standardparameter), die die Wackel-Animation abspielt, wenn sie aufgerufen wird. Fügen Sie die folgende Funktion direkt vor Ihrem schließenden `</script>`-Tag hinzu:

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
}
```

Die Animation wird jedes Mal abgespielt, wenn der Ball das Paddle trifft. Sie können den Aufruf von `animations.play()` auch in die Funktion `ballHitBrick()` einfügen, wenn Sie denken, dass es das Spiel besser aussehen lässt.

## Tweens

Während Animationen externe Sprites nacheinander abspielen, animieren Tweens sanft Eigenschaften eines Objekts in der Spielwelt, wie etwa die Breite oder Opazität.

Lassen Sie uns einen Tween zu unserem Spiel hinzufügen, damit die Steine sanft verschwinden, wenn sie vom Ball getroffen werden. Gehen Sie zu Ihrer Funktion `ballHitBrick()`, finden Sie Ihre Zeile `brick.kill();` und ersetzen Sie sie durch Folgendes:

```js
const killTween = game.add.tween(brick.scale);
killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
killTween.onComplete.addOnce(() => {
  brick.kill();
}, this);
killTween.start();
```

Lassen Sie uns dies durchgehen, damit Sie sehen können, was hier passiert:

1. Wenn Sie einen neuen Tween definieren, müssen Sie angeben, welche Eigenschaft getweent werden soll — in unserem Fall werden wir, anstatt die Steine sofort auszublenden, wenn sie vom Ball getroffen werden, deren Breite und Höhe auf Null skalieren, damit sie schön verschwinden. Dazu verwenden wir die Methode `add.tween()`, wobei wir `brick.scale` als Argument angeben, da dies das ist, was wir tweaken möchten.
2. Die Methode `to()` definiert den Zustand des Objekts am Ende des Tweens. Sie nimmt ein Objekt, das die gewünschten Endwerte des gewählten Parameters enthält (die Skala nimmt einen Skalierungswert an, wobei 1 100% der Größe entspricht, 0 0% der Größe usw.), die Zeit des Tweens in Millisekunden und die Art der Ablaufsteuerung, die für den Tween verwendet wird.
3. Wir fügen auch den optionalen Event-Handler `onComplete` hinzu, der eine Funktion definiert, die ausgeführt wird, wenn der Tween endet.
4. Das Letzte, was zu tun bleibt, ist den Tween sofort mit `start()` zu starten.

Das ist die erweiterte Version der Tween-Definition, aber wir können auch die Kurzformsyntax verwenden:

```js
game.add
  .tween(brick.scale)
  .to({ x: 2, y: 2 }, 500, Phaser.Easing.Elastic.Out, true, 100);
```

Dieser Tween wird die Skala des Ziegels in einer halben Sekunde mit Elastic easing verdoppeln, automatisch starten und eine Verzögerung von 100 Millisekunden haben.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion in der Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9o4pakrb/","","400")}}

## Nächste Schritte

Animationen und Tweens sehen sehr gut aus, aber wir können unserem Spiel noch mehr hinzufügen — im nächsten Abschnitt werden wir uns mit der Verarbeitung von [Button](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)-Eingaben beschäftigen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
