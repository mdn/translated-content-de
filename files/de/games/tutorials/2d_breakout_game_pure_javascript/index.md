---
title: 2D Breakout-Spiel mit purem JavaScript
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}

In diesem schrittweisen Tutorial erstellen wir ein **MDN Breakout**-Spiel, das vollständig in reinem JavaScript geschrieben und auf einem HTML-{{htmlelement("canvas")}} gerendert wird.

Jeder Schritt enthält bearbeitbare, interaktive Beispiele, mit denen Sie experimentieren können, um zu sehen, wie die Zwischenschritte aussehen sollten. Sie lernen die Grundlagen der Nutzung des {{htmlelement("canvas")}}-Elements, um grundlegende Spielmechaniken wie das Rendern und Bewegen von Bildern, die Kollisionserkennung, Steuermechanismen sowie Gewinn- und Verlustzustände umzusetzen.

Um das Beste aus dieser Artikelreihe herauszuholen, sollten Sie bereits über grundlegende bis mittlere [JavaScript](/de/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)-Kenntnisse verfügen. Nach der Bearbeitung dieses Tutorials sollten Sie in der Lage sein, Ihre eigenen Webspiele zu entwickeln.

![Spielbildschirm aus dem MDN Breakout-Spiel, bei dem Sie mit Ihrem Schläger den Ball abprallen lassen und das Ziegelstein-Feld zerstören können, während Sie Punktestand und Leben behalten.](mdn-breakout-gameplay.png)

## Lektion Details

Alle Lektionen — und die verschiedenen Versionen des [MDN Breakout-Spiels](https://breakout.enclavegames.com/lesson10.html), die wir zusammen erstellen — sind [auf GitHub verfügbar](https://github.com/end3r/Gamedev-Canvas-workshop):

1. [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it)
2. [Bewegen Sie den Ball](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball)
3. [Prallen Sie von den Wänden ab](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls)
4. [Schläger- und Tastatursteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Paddle_and_keyboard_controls)
5. [Spiel vorbei](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Game_over)
6. [Erstellen Sie das Ziegelstein-Feld](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Build_the_brick_field)
7. [Kollisionserkennung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection)
8. [Verfolgen Sie den Punktestand und gewinnen Sie](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Track_the_score_and_win)
9. [Maussteuerung](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Mouse_controls)
10. [Abschluss](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up)

Mit reinem JavaScript zu beginnen ist der beste Weg, um ein solides Wissen in der Webspiele-Entwicklung zu erlangen. Danach können Sie sich jedes Framework auswählen, das Sie mögen, und es für Ihre Projekte verwenden. Frameworks sind lediglich Werkzeuge, die mit der JavaScript-Sprache erstellt wurden; selbst wenn Sie mit ihnen arbeiten möchten, ist es gut, zunächst die Sprache selbst zu lernen, um zu wissen, was genau im Hintergrund abläuft. Frameworks beschleunigen die Entwicklungszeit und helfen, sich um langweilige Teile des Spiels zu kümmern, aber wenn etwas nicht wie erwartet funktioniert, können Sie immer versuchen, das zu debuggen oder einfach Ihre eigenen Lösungen in reinem JavaScript zu schreiben.

> [!NOTE]
> Diese Artikelserie kann als Material für praxisnahe Spieleentwicklungs-Workshops verwendet werden. Sie können auch das [Gamedev Canvas Content Kit](https://github.com/end3r/Gamedev-Canvas-Content-Kit) basierend auf diesem Tutorial nutzen, wenn Sie einen Vortrag über Spieleentwicklung im Allgemeinen halten möchten.
>
> Wenn Sie daran interessiert sind, eine Spielebibliothek zu verwenden, um mehr über die 2D-Webspieleentwicklung zu lernen, sehen Sie sich das Gegenstück dieser Serie, [2D Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser), an.

## Nächste Schritte

Ok, lassen Sie uns anfangen! Gehen Sie zum ersten Kapitel [Erstellen Sie das Canvas und zeichnen Sie darauf](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it).

{{Next("Games/Workflows/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it")}}
