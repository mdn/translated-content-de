---
title: Kollisionserkennung
slug: Games/Tutorials/2D_breakout_game_Phaser/Collision_detection
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}

Dies ist der **10. Schritt** von 16 des [Gamedev Phaser Tutorials](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Phaser-Content-Kit/demos/lesson10.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson10.html).

Nun zur nächsten Herausforderung — der Kollisionserkennung zwischen dem Ball und den Ziegeln. Glücklicherweise können wir die Physik-Engine verwenden, um Kollisionen nicht nur zwischen einzelnen Objekten (wie dem Ball und dem Paddel), sondern auch zwischen einem Objekt und der Gruppe zu überprüfen.

## Kollisionserkennung Ziegel/Ball

Die Physik-Engine macht alles wesentlich einfacher — wir müssen lediglich zwei einfache Codezeilen hinzufügen. Fügen Sie zunächst eine neue Zeile in Ihrer `update()`-Funktion hinzu, die die Kollisionserkennung zwischen Ball und Ziegeln überprüft, wie unten gezeigt:

```js
function update() {
  game.physics.arcade.collide(ball, paddle);
  game.physics.arcade.collide(ball, bricks, ballHitBrick);
  paddle.x = game.input.x || game.world.width * 0.5;
}
```

Die Position des Balls wird gegen die Positionen aller Ziegel in der Gruppe berechnet. Der dritte optionale Parameter ist die Funktion, die bei einer Kollision ausgeführt wird — `ballHitBrick()`. Erstellen Sie diese neue Funktion am Ende Ihres Codes, unmittelbar vor dem schließenden `</script>` Tag, wie folgt:

```js
function ballHitBrick(ball, brick) {
  brick.kill();
}
```

Und das war's! Laden Sie Ihren Code neu, und Sie sollten sehen, dass die neue Kollisionserkennung wie gewünscht funktioniert.

Dank Phaser gibt es zwei Parameter, die an die Funktion übergeben werden — der erste ist der Ball, den wir explizit in der Kollisionsmethode definiert haben, und der zweite ist der einzelne Ziegel aus der Ziegelgruppe, mit dem der Ball kollidiert. Innerhalb der Funktion entfernen wir den betreffenden Ziegel vom Bildschirm, indem wir die `kill()`-Methode darauf anwenden.

Man würde erwarten, dass man viel mehr Berechnungen selbst schreiben muss, um Kollisionserkennung mit [rein JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection) zu implementieren. Das ist das Schöne daran, das Framework zu verwenden — Sie können viel von dem langweiligen Code Phaser überlassen und sich auf die lustigsten und interessantesten Teile der Spieleentwicklung konzentrieren.

## Vergleichen Sie Ihren Code

Sie können den fertigen Code für diese Lektion im Live-Demo unten überprüfen und damit herumspielen, um besser zu verstehen, wie er funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/wwneakwf/","","400")}}

## Nächste Schritte

Wir können die Ziegel treffen und entfernen, was schon eine nette Erweiterung des Gameplays ist. Es wäre sogar noch besser, die zerstörten Ziegel zu zählen und [die Punkte](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score) entsprechend zu erhöhen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser/Build_the_brick_field", "Games/Workflows/2D_Breakout_game_Phaser/The_score")}}
