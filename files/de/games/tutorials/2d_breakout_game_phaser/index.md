---
title: 2D Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein einfaches mobiles **MDN Breakout**-Spiel in JavaScript, unter Verwendung des [Phaser](https://phaser.io/) Frameworks.

Jeder Schritt bietet editierbare, Live-Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenschritte aussehen sollten. Sie lernen die Grundlagen der Verwendung des Phaser-Frameworks, um grundlegende Spielmechaniken wie das Rendern und Bewegen von Bildern, Kollisionsdetektion, Steuerungsmechanismen, Framework-spezifische Hilfsfunktionen, Animationen und Tweens sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits grundlegende bis mittlere [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) Kenntnisse haben. Nachdem Sie dieses Tutorial durchgearbeitet haben, sollten Sie in der Lage sein, Ihre eigenen einfachen Webspiele mit Phaser zu erstellen.

![Spielbildschirm vom Spiel MDN Breakout, erstellt mit Phaser, wo Sie Ihr Paddle nutzen können, um den Ball abzuprallen und das Ziegel-Feld zu zerstören, während Punkte und Leben beibehalten werden.](mdn-breakout-phaser.png)

## Lektionen

Alle Lektionen — und die verschiedenen Versionen des von uns gemeinsam erstellten [MDN Breakout-Spiels](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html) — sind [auf GitHub verfügbar](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Die Assets laden und auf dem Bildschirm anzeigen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Den Ball bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Spieler-Paddle und Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Das Ziegelfeld bauen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Das Spiel gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Extra Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Schaltflächen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Das Gameplay randomisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Ein Hinweis zu Lernpfaden — mit reinem JavaScript zu beginnen, ist der beste Weg, um ein solides Wissen in der Web-Spielentwicklung zu erlangen. Wenn Sie mit der Entwicklung von JavaScript-Spielen noch nicht vertraut sind, empfehlen wir Ihnen, erst den Gegenpart dieser Serie durchzuarbeiten, [2D Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript).

Danach können Sie jedes beliebige Framework wählen und für Ihre Projekte nutzen; wir haben uns für Phaser entschieden, da es ein solides Framework mit guter Unterstützung und Community sowie einem guten Satz an Plugins ist. Frameworks beschleunigen die Entwicklungszeit und kümmern sich um die langweiligen Teile, sodass Sie sich auf die spaßigen Aspekte konzentrieren können. Allerdings sind Frameworks nicht immer perfekt. Wenn etwas Unerwartetes passiert oder Sie eine Funktionalität schreiben möchten, die das Framework nicht bereitstellt, benötigen Sie Kenntnisse in reinem JavaScript.

> [!NOTE]
> Diese Artikelserie kann als Material für praktische Workshops zur Spielentwicklung genutzt werden. Sie können auch das auf diesem Tutorial basierende [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) verwenden, wenn Sie einen Vortrag über Spielentwicklung mit Phaser halten möchten.

## Nächste Schritte

Ok, fangen wir an! Gehen Sie zum ersten Teil der Serie — [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
