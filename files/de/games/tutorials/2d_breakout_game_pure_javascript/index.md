---
title: 2D Breakout-Spiel mit purem JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{GamesSidebar}}

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

In diesem Schritt-für-Schritt-Tutorial erstellen wir ein **MDN Breakout**-Spiel, das vollständig in reinem JavaScript geschrieben und auf einem HTML-{{htmlelement("canvas")}} gerendert wird.

Zu jedem Schritt gibt es editierbare, Live-Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenschritte aussehen sollten. Sie lernen die Grundlagen der Verwendung des {{htmlelement("canvas")}}-Elements, um grundlegende Spielmechaniken wie das Rendern und Bewegen von Bildern, die Kollisionserkennung, Steuerungsmechanismen sowie Gewinn- und Verlustzustände zu implementieren.

Um das Beste aus dieser Artikelserie herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse verfügen. Nachdem Sie dieses Tutorial durchgearbeitet haben, sollten Sie in der Lage sein, Ihre eigenen Webspiele zu erstellen.

![Gameplay-Bildschirm des Spiels MDN Breakout, bei dem Sie Ihren Schläger verwenden können, um den Ball abzuprallen und das Ziegelsteinfeld zu zerstören, während Sie den Punktestand und die Leben behalten.](mdn-breakout-gameplay.png)

## Lektionen-Details

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://breakout.enclavegames.com/lesson10.html), die wir gemeinsam erstellen — sind [verfügbar auf GitHub](https://github.com/end3r/Gamedev-Canvas-workshop):

1. [Das Canvas erstellen und darauf zeichnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [Den Ball bewegen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [Von den Wänden abprallen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [Schläger und Tastatursteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [Spielende](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [Das Ziegelsteinfeld erstellen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [Kollisionserkennung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [Den Punktestand verfolgen und gewinnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [Maussteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Abschließen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

Der Einstieg mit reinem JavaScript ist der beste Weg, um solide Kenntnisse in der Web-Entwicklung von Spielen zu erlangen. Danach können Sie jedes beliebige Framework auswählen und es für Ihre Projekte verwenden. Frameworks sind lediglich Werkzeuge, die mit der JavaScript-Sprache erstellt wurden. Selbst wenn Sie also planen, mit diesen zu arbeiten, ist es gut, zuerst die Sprache selbst zu lernen, um genau zu verstehen, was hinter den Kulissen passiert. Frameworks beschleunigen die Entwicklungszeit und helfen bei der Bewältigung der langweiligen Teile des Spiels, aber wenn etwas nicht wie erwartet funktioniert, können Sie immer versuchen, dies zu debuggen oder einfach Ihre eigenen Lösungen in reinem JavaScript zu schreiben.

> [!NOTE]
> Diese Artikelserie kann als Material für praxisnahe Workshops zur Spieleentwicklung genutzt werden. Sie können auch das [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) verwenden, das auf diesem Tutorial basiert, wenn Sie einen Vortrag über Spieleentwicklung im Allgemeinen halten möchten.
>
> Wenn Sie daran interessiert sind, eine Spielbibliothek zu verwenden, um etwas über die Entwicklung von 2D-Webspielen zu lernen, sehen Sie sich das Gegenstück dieser Serie, [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser), an.

## Nächste Schritte

Ok, lassen Sie uns beginnen! Gehen Sie zum ersten Kapitel [Das Canvas erstellen und darauf zeichnen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
