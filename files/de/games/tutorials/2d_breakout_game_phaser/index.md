---
title: 2D-Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein einfaches mobiles **MDN Breakout**-Spiel, das in JavaScript geschrieben wird, unter Verwendung des [Phaser](https://phaser.io/) Frameworks.

Jeder Schritt enthält editierbare, live Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenstufen aussehen sollten. Sie lernen die Grundlagen der Verwendung des Phaser-Frameworks, um grundlegende Spielmechaniken wie Rendern und Bewegen von Bildern, Kollisionsdetektion, Steuerungsmechanismen, Framework-spezifische Hilfsfunktionen, Animationen und Tweens sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics)-Kenntnisse verfügen. Nach der Bearbeitung dieses Tutorials sollten Sie in der Lage sein, Ihre eigenen einfachen Webspiele mit Phaser zu entwickeln.

![Gameplay-Bildschirm des Spiels MDN Breakout, das mit Phaser erstellt wurde. Sie können Ihren Schläger verwenden, um den Ball abzuprallen und das Ziegelfeld zu zerstören, während Sie die Punkte und Leben behalten.](mdn-breakout-phaser.png)

## Lektion Details

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html), die wir gemeinsam entwickeln — sind [auf GitHub verfügbar](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Laden Sie die Assets und drucken Sie sie auf dem Bildschirm](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Bewegen Sie den Ball](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Spieler-Schläger und Steuerungen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Bauen Sie das Ziegelfeld](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Gewinnen Sie das Spiel](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Zusätzliche Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Buttons](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Das Gameplay randomisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Ein Hinweis zu Lernpfaden — der Einstieg mit reinem JavaScript ist der beste Weg, um ein fundiertes Wissen über die Entwicklung von Webspielen zu erhalten. Wenn Sie mit der Entwicklung von Spielen mit reinem JavaScript nicht bereits vertraut sind, empfehlen wir Ihnen, zunächst den Gegenpart dieser Serie, [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript), durchzuarbeiten.

Danach können Sie jedes beliebige Framework auswählen und es für Ihre Projekte verwenden. Wir haben uns für Phaser entschieden, da es ein solides Framework mit guter Unterstützung und verfügbarer Community sowie einem guten Satz von Plugins ist. Frameworks verkürzen die Entwicklungszeit und helfen, die langweiligen Teile zu übernehmen, sodass Sie sich auf die unterhaltsamen Dinge konzentrieren können. Allerdings sind Frameworks nicht immer perfekt, daher benötigen Sie etwas Wissen in reinem JavaScript, falls etwas Unerwartetes passiert oder Sie eine Funktionalität schreiben möchten, die das Framework nicht bietet.

> [!NOTE]
> Diese Artikelserie kann als Material für praktische Workshops zur Spieleentwicklung verwendet werden. Sie können auch das auf diesem Tutorial basierende [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) nutzen, wenn Sie einen Vortrag über Spieleentwicklung mit Phaser halten möchten.

## Nächste Schritte

Gut, lassen Sie uns anfangen! Gehen Sie zum ersten Teil der Serie — [Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
