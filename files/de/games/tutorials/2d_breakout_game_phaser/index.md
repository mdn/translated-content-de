---
title: 2D-Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{Next("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein einfaches mobiles **MDN-Breakout**-Spiel, das in JavaScript geschrieben ist und das [Phaser](https://phaser.io/)-Framework verwendet.

Jeder Schritt enthält bearbeitbare, interaktive Beispiele, mit denen Sie sehen können, wie die Zwischenschritte aussehen sollten. Sie lernen die Grundlagen der Verwendung des Phaser-Frameworks, um grundlegende Spielmechaniken wie das Rendern und Bewegen von Bildern, Kollisionsdetektion, Steuermechanismen, framework-spezifische Hilfsfunktionen, Animationen und Tweens sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelreihe herauszuholen, sollten Sie bereits über grundlegende bis mittlere Kenntnisse in [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) verfügen. Nachdem Sie dieses Tutorial durchgearbeitet haben, sollten Sie in der Lage sein, Ihre eigenen einfachen Webspiele mit Phaser zu erstellen.

![Spielbildschirm des Spiels MDN Breakout, das mit Phaser erstellt wurde, wo Sie Ihr Paddle verwenden können, um den Ball abzuprallen und das Ziegelspielfeld zu zerstören, wobei Punkte und Leben berücksichtigt werden.](mdn-breakout-phaser.png)

## Unterrichtsdetails

Alle Lektionen—und die verschiedenen Versionen des [MDN-Breakout-Spiels](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html), die wir zusammen erstellen—sind [auf GitHub verfügbar](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Die Assets laden und auf dem Bildschirm anzeigen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Den Ball bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Spielerpaddle und Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Das Ziegelspielfeld bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Die Punktzahl](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Das Spiel gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Zusätzliche Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Buttons](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Spielablauf randomisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Hinweis zu Lernpfaden: Wenn Sie mit reinem JavaScript beginnen, erhalten Sie das beste Wissen über die Webspiele-Entwicklung. Falls Sie mit der reinen JavaScript-Spielentwicklung nicht vertraut sind, empfehlen wir Ihnen zunächst, das Gegenstück dieser Serie durchzuarbeiten: [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript).

Danach können Sie jedes beliebige Framework wählen und für Ihre Projekte verwenden. Wir haben uns für Phaser entschieden, da es eine gute Browserkompatibilität, eine aktive Community und eine gute Auswahl an Plugins bietet. Frameworks beschleunigen die Entwicklungszeit und kümmern sich um die langweiligen Teile, sodass Sie sich auf die unterhaltsamen Sachen konzentrieren können. Frameworks sind jedoch nicht immer perfekt, daher benötigen Sie etwas reines JavaScript-Wissen, falls etwas Unerwartetes geschieht oder Sie eine Funktionalität schreiben möchten, die das Framework nicht bietet.

## Nächste Schritte

Okay, lassen Sie uns beginnen! Gehen Sie zum ersten Teil der Serie—[Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework")}}
