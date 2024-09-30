---
title: 2D Breakout-Spiel mit reinem JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 27a7cd721d227deb47b8b6837d8eba0a0ae06ffb
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein **MDN Breakout**-Spiel, das vollständig in reinem JavaScript geschrieben und auf einem HTML-{{htmlelement("canvas")}} gerendert wird.

Jeder Schritt enthält bearbeitbare, Live-Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenschritte aussehen sollten. Sie lernen die Grundlagen der Verwendung des {{htmlelement("canvas")}}-Elements, um grundlegende Spielmechaniken wie das Rendern und Bewegen von Bildern, Kollisionsdetektion, Steuermechanismen sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn/Getting_started_with_the_web/JavaScript_basics) Kenntnisse verfügen. Nach der Bearbeitung dieses Tutorials sollten Sie in der Lage sein, Ihre eigenen Web-Spiele zu entwickeln.

![Spielbildschirm aus dem Spiel MDN Breakout, bei dem Sie Ihr Paddle verwenden können, um den Ball abprallen zu lassen und das Ziegelspielfeld zu zerstören, wobei Sie die Punktzahl und Leben halten.](mdn-breakout-gameplay.png)

## Lektionen Details

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://breakout.enclavegames.com/lesson10.html), die wir gemeinsam erstellen — sind [auf GitHub verfügbar](https://github.com/end3r/Gamedev-Canvas-workshop):

1. [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [Bewegung des Balls](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [Abprallen an den Wänden](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [Schläger- und Tastatursteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [Spielende](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [Erstellen Sie das Ziegelspielfeld](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [Verfolgen Sie die Punktzahl und gewinnen Sie](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [Maussteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Abschluss](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

Mit reinem JavaScript anzufangen, ist der beste Weg, um eine solide Grundlage in der Web-Spieleentwicklung zu erlangen. Danach können Sie jedes gewünschte Framework auswählen und es für Ihre Projekte verwenden. Frameworks sind nur Werkzeuge, die mit der JavaScript-Sprache erstellt wurden; selbst wenn Sie planen, mit ihnen zu arbeiten, ist es gut, zunächst die Sprache selbst zu lernen, um zu wissen, was genau unter der Haube passiert. Frameworks beschleunigen die Entwicklungszeit und helfen, langweilige Teile des Spiels zu vereinfachen, aber wenn etwas nicht wie erwartet funktioniert, können Sie immer versuchen, das Problem zu debuggen oder eigene Lösungen in reinem JavaScript zu schreiben.

> [!NOTE]
> Diese Artikelserie kann als Material für praktische Spielentwicklungsworkshops verwendet werden. Sie können auch das auf diesem Tutorial basierende [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) nutzen, wenn Sie einen Vortrag über Spielentwicklung im Allgemeinen halten möchten.
>
> Wenn Sie daran interessiert sind, eine Spielebibliothek zum Lernen der 2D-Web-Spieleentwicklung zu verwenden, sehen Sie sich das Gegenstück dieser Serie an, [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser).

## Nächste Schritte

Ok, legen wir los! Gehen Sie zum ersten Kapitel [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
