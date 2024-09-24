---
title: 2D-Breakout-Spiel mit reinem JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein **MDN Breakout**-Spiel, das vollständig in reinem JavaScript geschrieben und auf HTML {{htmlelement("canvas")}} gerendert wird.

Jeder Schritt enthält bearbeitbare, live Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenschritte aussehen sollten. Sie lernen die Grundlagen der Verwendung des {{htmlelement("canvas")}}-Elements zur Implementierung grundlegender Spielmechaniken wie Rendering und Bewegung von Bildern, Kollisionserkennung, Steuermechanismen und Gewinn- und Verlustzustände.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) Kenntnisse verfügen. Nach der Bearbeitung dieses Tutorials sollten Sie in der Lage sein, Ihre eigenen Webspiele zu entwickeln.

![Gameplay-Bildschirm des Spiels MDN Breakout, bei dem Sie mit Ihrem Schläger den Ball abprallen lassen und das Ziegelfeld zerstören können, während Sie die Punktzahl und das Leben behalten.](mdn-breakout-gameplay.png)

## Lektiondetails

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://breakout.enclavegames.com/lesson10.html), die wir gemeinsam entwickeln — sind [auf GitHub verfügbar](https://github.com/end3r/Gamedev-Canvas-workshop):

1. [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [Bewegen Sie den Ball](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [Abprallen von den Wänden](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [Schläger- und Tastaturkontrollen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [Spiel vorbei](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [Bauen Sie das Ziegelfeld auf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [Kollisionserkennung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [Punktestand verfolgen und gewinnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [Maussteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Abschließen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

Der Start mit reinem JavaScript ist der beste Weg, um ein solides Wissen über die Entwicklung von Webspielen zu erlangen. Danach können Sie jedes Framework Ihrer Wahl auswählen und für Ihre Projekte nutzen. Frameworks sind lediglich Werkzeuge, die mit der Sprache JavaScript erstellt wurden; daher ist es gut, zunächst über die Sprache selbst Bescheid zu wissen, um zu verstehen, was genau im Hintergrund passiert. Frameworks beschleunigen die Entwicklungszeit und helfen, langweilige Teile des Spiels zu erledigen, aber wenn etwas nicht wie erwartet funktioniert, können Sie immer versuchen, das Problem zu debuggen oder einfach Ihre eigenen Lösungen in reinem JavaScript zu schreiben.

> [!NOTE]
> Diese Artikelserie kann als Material für praktische Workshops zur Spieleentwicklung verwendet werden. Sie können auch das [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) basierend auf diesem Tutorial nutzen, wenn Sie generell über Spieleentwicklung reden möchten.
>
> Wenn Sie daran interessiert sind, eine Spielebibliothek zu verwenden, um mehr über die Entwicklung von 2D-Webspielen zu lernen, sehen Sie sich das Gegenstück dieser Serie an, [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser).

## Nächste Schritte

Gut, fangen wir an! Gehen Sie zum ersten Kapitel [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
