---
title: 2D Breakout-Spiel mit reinem JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein **MDN Breakout**-Spiel, das vollständig in reinem JavaScript geschrieben und auf einem HTML-{{htmlelement("canvas")}} gerendert wird.

Jeder Schritt enthält editierbare, live-Samples, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenstufen aussehen sollten. Sie lernen die Grundlagen der Verwendung des {{htmlelement("canvas")}}-Elements kennen, um grundlegende Spielmechaniken wie Rendern und Bewegen von Bildern, Kollisionserkennung, Steuermechanismen sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelreihe herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](https://wiki.selfhtml.org/wiki/JavaScript/Tutorials/Grundlagen)-Kenntnisse verfügen. Nach der Bearbeitung dieses Tutorials sollten Sie in der Lage sein, Ihre eigenen Webspiele zu entwickeln.

![Spielbildschirm aus dem Spiel MDN Breakout, bei dem Sie Ihren Schläger verwenden können, um den Ball abprallen zu lassen und das Ziegelsteinfeld zu zerstören, während der Punktestand und die Leben erhalten bleiben.](mdn-breakout-gameplay.png)

## Lektion Details

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://breakout.enclavegames.com/lesson10.html), die wir zusammen erstellen — sind [auf GitHub verfügbar](https://github.com/end3r/Gamedev-Canvas-workshop):

1. [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [Bewegen Sie den Ball](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [Abprallen von den Wänden](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [Schläger und Tastatursteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [Game Over](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [Bauen Sie das Ziegelsteinfeld](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [Kollisionserkennung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [Verfolgen Sie den Punktestand und gewinnen Sie](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [Maussteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Abschluss](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

Mit reinem JavaScript zu beginnen, ist der beste Weg, um fundierte Kenntnisse in der Entwicklung von Webspielen zu erlangen. Danach können Sie jedes beliebige Framework auswählen, das Sie möchten, und es für Ihre Projekte verwenden. Frameworks sind lediglich Werkzeuge, die mit der JavaScript-Sprache erstellt wurden; selbst wenn Sie planen, mit ihnen zu arbeiten, ist es gut, sich zunächst über die Sprache selbst zu informieren, um zu wissen, was genau unter der Haube passiert. Frameworks beschleunigen die Entwicklungszeit und helfen dabei, langweilige Teile des Spiels zu erledigen, aber wenn etwas nicht wie erwartet funktioniert, können Sie versuchen, das zu debuggen oder einfach Ihre eigenen Lösungen in reinem JavaScript zu schreiben.

> [!NOTE]
> Diese Artikelreihe kann als Material für praktische Workshops zur Spieleentwicklung verwendet werden. Sie können auch das [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) basierend auf diesem Tutorial nutzen, wenn Sie einen Vortrag über Spieleentwicklung im Allgemeinen halten möchten.
>
> Wenn Sie daran interessiert sind, eine Spielbibliothek zu verwenden, um mehr über die Entwicklung von 2D-Webspielen zu erfahren, sehen Sie sich das Gegenstück dieser Serie an, [2D breakout game using Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser).

## Nächste Schritte

Okay, fangen wir an! Gehen Sie zum ersten Kapitel [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
