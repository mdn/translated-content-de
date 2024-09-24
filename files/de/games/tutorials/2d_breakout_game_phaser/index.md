---
title: 2D-Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

In diesem schrittweisen Tutorial erstellen wir ein einfaches mobiles **MDN Breakout**-Spiel in JavaScript, mithilfe des [Phaser](https://phaser.io/)-Frameworks.

Jeder Schritt enthält bearbeitbare, live Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenstufen aussehen sollten. Sie lernen die Grundlagen der Nutzung des Phaser-Frameworks zur Implementierung grundlegender Spielmechaniken wie das Rendern und Bewegen von Bildern, Kollisionserkennung, Steuermechanismen, frameworkspezifische Hilfsfunktionen, Animationen und Tweens sowie Gewinn- und Verlustzustände.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis fortgeschrittene Kenntnisse in [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) verfügen. Nachdem Sie dieses Tutorial durchgearbeitet haben, sollten Sie in der Lage sein, eigene einfache Webspiele mit Phaser zu erstellen.

![Spielbildschirm vom MDN Breakout-Spiel, erstellt mit Phaser, bei dem Sie Ihr Paddle nutzen können, um den Ball zu hüpfen und das Ziegelspielfeld zu zerstören, während Sie Punkte und Leben behalten.](mdn-breakout-phaser.png)

## Lektionendetails

Alle Lektionen – und die verschiedenen Versionen des [MDN Breakout-Spiels](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html), die wir zusammen erstellen – sind [auf GitHub verfügbar](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Laden Sie die Assets und zeigen Sie sie auf dem Bildschirm an](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Bewegen Sie den Ball](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Spielerpaddle und Steuerungen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Das Ziegelspielfeld bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Kollisionserkennung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Gewinnen Sie das Spiel](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Extraleben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Schaltflächen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Spielablauf randomisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Ein Hinweis zu den Lernpfaden – mit reinem JavaScript zu beginnen, ist der beste Weg, um solides Wissen in der Webspielentwicklung zu erlangen. Falls Sie mit der Entwicklung von JavaScript-Spielen noch nicht vertraut sind, empfehlen wir Ihnen, zunächst das Pendant dieser Serie durchzuarbeiten, [2D Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript).

Danach können Sie jedes beliebige Framework auswählen, das Ihnen gefällt, und es für Ihre Projekte verwenden. Wir haben uns für Phaser entschieden, da es ein gutes, solides Framework mit guter Unterstützung und community sowie einem guten Set an Plugins ist. Frameworks verkürzen die Entwicklungszeit und helfen dabei, sich um die langweiligen Teile zu kümmern, sodass Sie sich auf die lustigen Dinge konzentrieren können. Frameworks sind jedoch nicht immer perfekt, daher benötigen Sie einige Kenntnisse in reinem JavaScript, falls etwas Unerwartetes passiert oder Sie eine Funktionalität schreiben möchten, die das Framework nicht bietet.

> [!NOTE]
> Diese Artikelserie kann als Material für praktische Workshops zur Spieleentwicklung verwendet werden. Sie können auch das auf diesem Tutorial basierende [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) nutzen, wenn Sie einen Vortrag über Spieleentwicklung mit Phaser halten möchten.

## Nächste Schritte

Okay, lassen Sie uns loslegen! Gehen Sie zum ersten Teil der Serie — [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
