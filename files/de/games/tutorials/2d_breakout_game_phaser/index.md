---
title: 2D Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein einfaches mobiles **MDN Breakout**-Spiel, das in JavaScript geschrieben ist und das [Phaser](https://phaser.io/)-Framework verwendet.

Jeder Schritt hat bearbeitbare, Live-Beispiele zum Ausprobieren, sodass Sie sehen können, wie die Zwischenstufen aussehen sollten. Sie lernen die Grundlagen der Verwendung des Phaser-Frameworks zur Implementierung grundlegender Spielmechaniken wie das Rendern und Bewegen von Bildern, Kollisionserkennung, Steuerungsmechanismen, framework-spezifische Hilfsfunktionen, Animationen und Tweening sowie Gewinn- und Verlustzustände.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse verfügen. Nach der Durcharbeitung dieses Tutorials sollten Sie in der Lage sein, eigene einfache Web-Spiele mit Phaser zu erstellen.

![Spielbildschirm des Spiels MDN Breakout, das mit Phaser erstellt wurde, wo Sie Ihr Paddle verwenden können, um den Ball zu schlagen und das Ziegel-Feld zu zerstören, wobei die Punkte und Leben erhalten bleiben.](mdn-breakout-phaser.png)

## Unterrichtsdetails

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/lesson16.html), die wir gemeinsam erstellen — sind [auf GitHub verfügbar](https://end3r.github.io/Gamedev-Phaser-Content-Kit/demos/):

1. [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling)
3. [Laden Sie die Assets und drucken Sie sie auf dem Bildschirm aus](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Load_the_assets_and_print_them_on_screen)
4. [Bewegen Sie den Ball](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
5. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
6. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
7. [Spieler-Paddle und Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
8. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
9. [Das Ziegel-Feld erstellen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
10. [Kollisionserkennung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Collision_detection)
11. [Der Punktestand](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/The_score)
12. [Spiel gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Win_the_game)
13. [Extraleben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
14. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
15. [Schaltflächen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
16. [Spielweise randomisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

Ein Hinweis zu Lernpfaden — der Einstieg mit reinem JavaScript ist der beste Weg, um ein solides Wissen in der Webspiel-Entwicklung zu erlangen. Wenn Sie sich mit der reinen JavaScript-Spielentwicklung noch nicht auskennen, empfehlen wir Ihnen, zunächst die Gegenstück-Serie [2D Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) durchzuarbeiten.

Danach können Sie jedes beliebige Framework auswählen und es für Ihre Projekte verwenden; wir haben uns für Phaser entschieden, da es ein solides Framework mit guter Unterstützung und Community sowie einem guten Satz von Plugins ist. Frameworks beschleunigen die Entwicklungszeit und helfen, sich um die langweiligen Teile zu kümmern, sodass Sie sich auf die spaßigen Sachen konzentrieren können. Allerdings sind Frameworks nicht immer perfekt. Wenn etwas Unerwartetes passiert oder wenn Sie eine Funktionalität schreiben möchten, die das Framework nicht bietet, benötigen Sie einige Kenntnisse in reinem JavaScript.

> [!NOTE]
> Diese Artikelserie kann als Material für praktische Workshops zur Spielentwicklung verwendet werden. Sie können auch das auf diesem Tutorial basierende [Gamedev Phaser Content Kit](https://github.com/end3r/Gamedev-Phaser-Content-Kit) verwenden, wenn Sie einen Vortrag über Spielentwicklung mit Phaser halten möchten.

## Nächste Schritte

Ok, lassen Sie uns beginnen! Gehen Sie zum ersten Teil der Serie — [Das Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Workflows/2D_Breakout_game_Phaser/Initialize_the_framework")}}
