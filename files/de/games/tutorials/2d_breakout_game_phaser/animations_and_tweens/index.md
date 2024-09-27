---
title: Animationen und Tweens
slug: Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}

Dies ist der **14. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Phaser-Content-Kit/demos/lesson14.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson14.html).

Um das Spiel lebendiger und attraktiver zu gestalten, können wir Animationen und Tweens verwenden. Dies führt zu einem besseren, unterhaltsameren Erlebnis. Lassen Sie uns erkunden, wie wir Phaser-Animationen und Tweens in unser Spiel integrieren können.

## Animationen

In Phaser beinhalten Animationen das Verwenden eines Spritesheets aus einer externen Quelle, um die Sprites nacheinander anzuzeigen. Beispielsweise werden wir den Ball wackeln lassen, wenn er etwas trifft.

Laden Sie zuerst [das Spritesheet von GitHub herunter](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/img/wobble.png) und speichern Sie es in Ihrem `/img` Verzeichnis.

Als Nächstes laden wir das Spritesheet — fügen Sie die folgende Zeile am Ende Ihrer `preload()` Funktion hinzu:

```js
game.load.spritesheet("ball", "img/wobble.png", 20, 20);
```

Anstatt ein einzelnes Bild des Balls zu laden, können wir das gesamte Spritesheet laden — eine Sammlung von verschiedenen Bildern. Wir werden die Sprites nacheinander anzeigen, um die Illusion von Animation zu erzeugen. Die zwei zusätzlichen Parameter der `spritesheet()` Methode bestimmen die Breite und Höhe jedes einzelnen Frames in der gegebenen Spritesheet-Datei und sagen dem Programm, wie es sie aufteilen soll, um die einzelnen Frames zu erhalten.

## Laden der Animation

Gehen Sie als Nächstes in Ihre `create()` Funktion, finden Sie die Zeile, die den Ball-Sprite lädt, und fügen Sie darunter den Aufruf zu `animations.add()` wie unten gezeigt ein:

```js
ball = game.add.sprite(50, 250, "ball");
ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
```

Um eine Animation zu einem Objekt hinzuzufügen, verwenden wir die `animations.add()` Methode, die die folgenden Parameter enthält:

- Den Namen, den wir der Animation gegeben haben
- Ein Array, das die Reihenfolge definiert, in der die Frames während der Animation angezeigt werden. Wenn Sie sich das `wobble.png` Bild nochmals ansehen, werden Sie sehen, dass es drei Frames gibt. Phaser extrahiert diese und speichert Verweise darauf in einem Array — Positionen 0, 1 und 2. Das obige Array besagt, dass wir Frame 0, dann 1, dann 0, etc. anzeigen.
- Die Bildfrequenz, in fps. Da wir die Animation mit 24 fps laufen lassen und es 9 Frames gibt, wird die Animation gerade unter dreimal pro Sekunde angezeigt.

## Anwenden der Animation, wenn der Ball den Schläger trifft

Im Aufruf der `arcade.collide()` Methode, die die Kollision zwischen dem Ball und dem Schläger behandelt (die erste Zeile innerhalb von `update()`, siehe unten), können wir einen zusätzlichen Parameter hinzufügen, der eine Funktion spezifiziert, die jedes Mal ausgeführt wird, wenn die Kollision passiert, ähnlich wie die `ballHitBrick()` Funktion. Aktualisieren Sie die erste Zeile innerhalb von `update()` wie unten gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle, ballHitPaddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

Dann können wir die `ballHitPaddle()` Funktion erstellen (die `ball` und `paddle` als Standardparameter hat), die die Wackel-Animation abspielt, wenn sie aufgerufen wird. Fügen Sie die folgende Funktion direkt vor Ihrem abschließenden `</script>` Tag hinzu:

```js
function ballHitPaddle(ball, paddle) {
  ball.animations.play("wobble");
}
```

Die Animation wird jedes Mal abgespielt, wenn der Ball den Schläger trifft. Sie können den `animations.play()` Aufruf auch innerhalb der `ballHitBrick()` Funktion hinzufügen, wenn Sie denken, dass es das Spiel besser aussehen lässt.

## Tweens

Während Animationen externe Sprites nacheinander abspielen, animieren Tweens reibungslos Eigenschaften eines Objekts in der Spielwelt, wie Breite oder Deckkraft.

Lassen Sie uns unserem Spiel einen Tween hinzufügen, um die Ziegel sanft verschwinden zu lassen, wenn sie vom Ball getroffen werden. Gehen Sie zu Ihrer `ballHitBrick()` Funktion, finden Sie Ihre `brick.kill();` Zeile und ersetzen Sie sie durch Folgendes:

```js
const killTween = game.add.tween(brick.scale);
killTween.to({ x: 0, y: 0 }, 200, Phaser.Easing.Linear.None);
killTween.onComplete.addOnce(() => {
  brick.kill();
}, this);
killTween.start();
```

Lassen Sie uns dies durchgehen, damit Sie sehen können, was hier passiert:

1. Beim Definieren eines neuen Tweens müssen Sie angeben, welche Eigenschaft getweent wird — in unserem Fall, anstatt die Ziegel sofort zu verstecken, wenn sie vom Ball getroffen werden, werden wir ihre Breite und Höhe auf Null skalieren, sodass sie sanft verschwinden. Dazu verwenden wir die `add.tween()` Methode, wobei `brick.scale` als Argument angegeben wird, da dies das ist, was wir tweenen möchten.
2. Die `to()` Methode definiert den Zustand des Objekts am Ende des Tweens. Sie nimmt ein Objekt, das die gewünschten Endwerte der ausgewählten Parameter enthält (Skalierung nimmt einen Skalierungswert an, 1 ist 100% der Größe, 0 ist 0% der Größe, etc.), die Zeit des Tweens in Millisekunden und die Art der Dämpfung, die für den Tween verwendet werden soll.
3. Wir fügen auch den optionalen `onComplete`-Ereignis-Handler hinzu, der eine Funktion definiert, die ausgeführt wird, wenn der Tween endet.
4. Das letzte, was zu tun ist, ist den Tween sofort mit `start()` zu starten.

Das ist die erweiterte Version der Tween-Definition, aber wir können auch die Kurznotation verwenden:

```js
game.add
  .tween(brick.scale)
  .to({ x: 2, y: 2 }, 500, Phaser.Easing.Elastic.Out, true, 100);
```

Dieser Tween wird die Skalierung des Ziegels in einer halben Sekunde mit elastischer Dämpfung verdoppeln, automatisch starten und eine Verzögerung von 100 Millisekunden haben.

## Vergleich Ihres Codes

Sie können den fertigen Code für diese Lektion in der Live-Demo unten überprüfen und damit spielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9o4pakrb/","","400")}}

## Nächste Schritte

Animationen und Tweens sehen sehr schön aus, aber wir können unserem Spiel noch mehr hinzufügen — im nächsten Abschnitt werden wir uns mit der Behandlung von [Schaltflächen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons) Eingaben befassen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Extra_lives", "Games/Workflows/2D_Breakout_game_Phaser/Buttons")}}
