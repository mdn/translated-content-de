---
title: 2D-Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

In diesem Schritt-für-Schritt-Leitfaden erstellen wir ein einfaches mobiles **MDN Breakout**-Spiel, das in JavaScript geschrieben ist und das [Phaser](https://phaser.io/) Framework verwendet.

Jeder Schritt enthält editierbare, interaktive Beispiele, mit denen Sie sehen können, wie die Zwischenstufen aussehen sollten. Sie lernen die Grundlagen der Verwendung des Phaser-Frameworks kennen, um grundlegende Spielmechaniken wie das Rendern und Bewegen von Bildern, Kollisionserkennung, Steuerungsmechanismen, frameworkspezifische Hilfsfunktionen, Animationen und Tweens sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) Kenntnisse verfügen. Nachdem Sie dieses Tutorial durchgearbeitet haben, sollten Sie in der Lage sein, Ihre eigenen einfachen Webspiele mit Phaser zu erstellen.

![Gameplay-Bildschirm vom Spiel MDN Breakout, erstellt mit Phaser, wo Sie mit Ihrem Schläger den Ball abprallen lassen und das Ziegel-Feld zerstören können, während Sie die Punkte und Leben behalten.](mdn-breakout-phaser.png)

## Unterrichtsdetails

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html), die wir zusammen entwickeln — sind [auf GitHub verfügbar](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Initialisieren Sie das Framework](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Laden Sie die Assets und zeigen Sie sie auf dem Bildschirm an](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Bewegen Sie den Ball](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Spielerschläger und Steuerungen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Das Ziegel-Feld bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Kollisionserkennung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Das Spiel gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Zusätzliche Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Schaltflächen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Spielverlauf zufällig gestalten](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Ein Hinweis zu Lernpfaden — das Beginnen mit reinem JavaScript ist der beste Weg, um fundierte Kenntnisse in der Webspielentwicklung zu erlangen. Wenn Sie nicht bereits mit der Spielentwicklung mit reinem JavaScript vertraut sind, empfehlen wir Ihnen, zuerst das Gegenstück dieser Serie zu bearbeiten, [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript).

Danach können Sie jedes gewünschte Framework auswählen und es für Ihre Projekte verwenden; wir haben Phaser gewählt, da es ein solides Framework ist, mit guter Unterstützung und verfügbarer Community sowie einem guten Set von Plugins. Frameworks verkürzen die Entwicklungszeit und helfen, langweilige Teile zu übernehmen, sodass Sie sich auf die unterhaltsamen Dinge konzentrieren können. Allerdings sind Frameworks nicht immer perfekt, also wenn etwas Unerwartetes passiert oder Sie eine Funktionalität schreiben möchten, die das Framework nicht bietet, benötigen Sie Kenntnisse in reinem JavaScript.

> [!NOTE]
> Diese Artikelserie kann als Material für praktische Workshops zur Spieleentwicklung verwendet werden. Sie können auch das [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) basierend auf diesem Tutorial nutzen, wenn Sie einen Vortrag über Spieleentwicklung mit Phaser halten möchten.

## Nächste Schritte

Okay, lassen Sie uns anfangen! Gehen Sie zum ersten Teil der Serie — [Initialisieren Sie das Framework](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
