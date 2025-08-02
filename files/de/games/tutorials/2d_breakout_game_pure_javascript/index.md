---
title: 2D Breakout-Spiel mit reinem JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein **MDN Breakout**-Spiel, das vollständig in reinem JavaScript geschrieben und auf einem HTML {{htmlelement("canvas")}} gerendert wird.

Jeder Schritt bietet editierbare, interaktive Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenstufen aussehen sollten. Sie werden die Grundlagen der Verwendung des {{htmlelement("canvas")}}-Elements erlernen, um wesentliche Spielmechaniken wie das Rendern und Bewegen von Bildern, Kollisionsdetektion, Steuermechanismen sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse verfügen. Nachdem Sie dieses Tutorial durchgearbeitet haben, sollten Sie in der Lage sein, Ihre eigenen Web-Spiele zu entwickeln.

![Spielbildschirm vom Spiel MDN Breakout, wo Sie Ihr Paddel verwenden können, um den Ball abzuprallen und das Ziegel-Feld zu zerstören, wobei der Punktestand und die Leben gehalten werden.](mdn-breakout-gameplay.png)

## Lektiondetails

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://breakout.enclavegames.com/lesson10.html), die wir gemeinsam erstellen — sind [auf GitHub verfügbar](https://github.com/end3r/Gamedev-Canvas-workshop):

1. [Das Canvas erstellen und darauf zeichnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [Ball bewegen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [Paddel- und Tastatursteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [Spielende](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [Das Ziegel-Feld bauen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [Kollisionsdetektion](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [Punkte verfolgen und gewinnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [Maussteuerungen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Abschluss](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

Mit reinem JavaScript zu beginnen ist der beste Weg, um sich ein solides Wissen über die Entwicklung von Webspielen anzueignen. Danach können Sie ein Framework Ihrer Wahl auswählen und es für Ihre Projekte verwenden. Frameworks sind lediglich Werkzeuge, die mit der JavaScript-Sprache erstellt wurden; auch wenn Sie also planen, mit ihnen zu arbeiten, ist es gut, zuerst etwas über die Sprache selbst zu lernen, um genau zu wissen, was im Hintergrund vor sich geht. Frameworks beschleunigen die Entwicklungszeit und helfen, langweilige Teile des Spiels zu übernehmen, aber wenn etwas nicht wie erwartet funktioniert, können Sie immer versuchen, das zu debuggen oder einfach Ihre eigenen Lösungen in reinem JavaScript zu schreiben.

> [!NOTE]
> Diese Artikelserie kann als Material für praxisnahe Spielentwicklungs-Workshops verwendet werden. Sie können auch das [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) basierend auf diesem Tutorial nutzen, wenn Sie einen Vortrag über Spielentwicklung im Allgemeinen halten möchten.
>
> Wenn Sie daran interessiert sind, eine Spiele-Bibliothek zu verwenden, um mehr über die 2D-Webspielentwicklung zu lernen, sehen Sie sich das Gegenstück dieser Serie an, [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser).

## Nächste Schritte

Ok, lassen Sie uns anfangen! Gehen Sie zum ersten Kapitel [Das Canvas erstellen und darauf zeichnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
