---
title: 2D-Breakout-Spiel mit Phaser
slug: Games/Tutorials/2D_breakout_game_Phaser
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{Next("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir mit dem Framework [Phaser](https://phaser.io/) ein einfaches, in JavaScript geschriebenes **MDN-Breakout-Spiel** für Mobilgeräte.

Zu jedem Schritt gibt es bearbeitbare, interaktive Beispiele, mit denen Sie experimentieren können. So sehen Sie, wie die Zwischenstände aussehen sollten. Sie lernen die Grundlagen des Phaser-Frameworks kennen, um grundlegende Spielmechaniken umzusetzen: das Darstellen und Bewegen von Bildern, die Kollisionserkennung, Steuerungsmöglichkeiten, frameworkspezifische Hilfsfunktionen, Animationen und Tweens sowie Gewinn- und Verlustzustände.

Um möglichst viel aus dieser Artikelreihe mitzunehmen, sollten Sie bereits über grundlegende bis fortgeschrittene [JavaScript-Kenntnisse](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) verfügen. Nach Abschluss dieses Tutorials sollten Sie eigene einfache Webspiele mit Phaser entwickeln können.

![Spielansicht von MDN Breakout, erstellt mit Phaser: Mit dem Schläger lassen Sie den Ball abprallen und zerstören die Ziegelsteine; dabei werden Punkte und Leben angezeigt.](mdn-breakout-phaser.png)

> [!NOTE]
> Zu diesem Leitfaden gibt es einen ergänzenden Leitfaden: [2D-Breakout-Spiel mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Beide folgen im Wesentlichen denselben Schritten und führen zu optisch identischen Ergebnissen.

Wir haben Phaser für dieses Projekt gewählt, weil es von Browsern gut unterstützt wird, eine aktive Community hat und eine gute Auswahl an Plugins bietet. Frameworks beschleunigen die Entwicklung und übernehmen lästige Aufgaben, sodass Sie sich auf die interessanten Teile konzentrieren können. Allerdings sind Frameworks nicht immer perfekt. Wenn etwas Unerwartetes passiert oder Sie eine Funktionalität schreiben möchten, die das Framework nicht bereitstellt, benötigen Sie daher Kenntnisse in reinem JavaScript.

## Lektionen im Überblick

1. [Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework)
2. [Ball bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball)
3. [Physik](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Physics)
4. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Bounce_off_the_walls)
5. [Spielerschläger und Steuerung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Player_paddle_and_controls)
6. [Spielende](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Game_over)
7. [Ziegelsteinfeld erstellen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Build_the_brick_field)
8. [Punktestand erfassen und gewinnen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Track_the_score_and_win)
9. [Zusätzliche Leben](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Extra_lives)
10. [Animationen und Tweens](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Animations_and_tweens)
11. [Buttons](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Buttons)
12. [Spielablauf zufällig gestalten](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Randomizing_gameplay)

## Nächste Schritte

Fangen wir an! Beginnen Sie mit dem ersten Teil der Reihe: [Framework initialisieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework).

{{Next("Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework")}}
