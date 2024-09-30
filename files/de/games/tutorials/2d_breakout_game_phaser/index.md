---
title: 2D Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

In diesem schrittweisen Tutorial erstellen wir ein einfaches mobiles **MDN Breakout**-Spiel, geschrieben in JavaScript, unter Verwendung des [Phaser](https://phaser.io/) Frameworks.

Jeder Schritt enthält bearbeitbare Live-Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenstufen aussehen sollten. Sie lernen die Grundlagen der Verwendung des Phaser Frameworks zur Implementierung grundlegender Spielmechaniken wie Rendern und Bewegen von Bildern, Kollisionsabfrage, Steuerungsmechanismen, framework-spezifische Hilfsfunktionen, Animationen und Tweens sowie Gewinn- und Verlustzustände.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits grundlegende bis mittlere Kenntnisse in [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) haben. Nachdem Sie dieses Tutorial durchgearbeitet haben, sollten Sie in der Lage sein, Ihre eigenen einfachen Webspiele mit Phaser zu erstellen.

![Spielbildschirm des Spiels MDN Breakout, erstellt mit Phaser, wo Sie Ihr Paddle verwenden können, um den Ball zu prallen und das Ziegelspielfeld zu zerstören, während Sie die Punkte und Leben behalten.](mdn-breakout-phaser.png)

## Lektionseinzelheiten

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html), die wir gemeinsam erstellen — sind [auf GitHub verfügbar](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Die Assets laden und auf dem Bildschirm anzeigen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Den Ball bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Spielerpaddle und Steuerungen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Das Ziegelspielfeld bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Kollisionsabfrage](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Das Spiel gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Extraleben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Buttons](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Das Gameplay randomisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Ein Hinweis zu Lernpfaden — mit reinem JavaScript zu beginnen, ist der beste Weg, um fundiertes Wissen über die Entwicklung von Webspielen zu erlangen. Wenn Sie die reine JavaScript-Spielentwicklung noch nicht kennen, empfehlen wir Ihnen zuerst, den Gegenpart dieser Serie, [2D Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript), durchzuarbeiten.

Danach können Sie jedes beliebige Framework auswählen und für Ihre Projekte nutzen; wir haben uns für Phaser entschieden, da es ein gutes, solides Framework ist, mit guter Unterstützung und Community sowie einem guten Satz an Plugins. Frameworks beschleunigen die Entwicklungszeit und kümmern sich um die langweiligen Teile, so dass Sie sich auf die spaßigen Sachen konzentrieren können. Allerdings sind Frameworks nicht immer perfekt, daher benötigen Sie bei unerwarteten Problemen oder wenn Sie Funktionalitäten implementieren möchten, die das Framework nicht bietet, einige Kenntnisse in reinem JavaScript.

> [!NOTE]
> Diese Artikelserie kann als Material für praxisorientierte Workshops zur Spielentwicklung verwendet werden. Sie können auch das [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) nutzen, das auf diesem Tutorial basiert, wenn Sie einen Vortrag über Spielentwicklung mit Phaser halten möchten.

## Nächste Schritte

Gut, lassen Sie uns beginnen! Gehen Sie zum ersten Teil der Serie — [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
