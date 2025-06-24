---
title: Initialisieren des Frameworks
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}

Dies ist das erste von 16 Tutorials, um zu lernen, wie man [Gamedev Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) verwendet. Nach Abschluss dieses Tutorials können Sie den Quellcode für diesen Abschnitt unter [Gamedev-Phaser-Content-Kit/demos/lesson01.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html) finden.

Bevor wir mit der Implementierung der Spielfunktionalitäten beginnen können, müssen wir eine grundlegende Struktur schaffen, um das Spiel darin darzustellen. Dies kann mit HTML getan werden – das Phaser-Framework wird das erforderliche {{htmlelement("canvas")}}-Element generieren.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht einfach, da das Spiel vollständig auf dem vom Framework generierten {{htmlelement("canvas")}}-Element gerendert wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code hinzu:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Phaser Workshop - lesson 01: Initialize the framework</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/phaser.min.js"></script>
  </head>
  <body>
    <script>
      const game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
        preload,
        create,
        update,
      });
      function preload() {}
      function create() {}
      function update() {}
    </script>
  </body>
</html>
```

## Herunterladen des Phaser-Codes

Als Nächstes müssen wir den Phaser-Quellcode herunterladen und in unser HTML-Dokument einfügen. Dieses Tutorial verwendet Phaser V2 – es funktioniert nicht mit der aktuellen Version von Phaser (V3). Die V2-Bibliothek ist auf der Phaser-Download-Seite, unterhalb der Links für den V3-Download, weiterhin verfügbar.

1. Gehen Sie zur [Phaser-Download-Seite](https://phaser.io/download/stable).
2. Wählen Sie eine Option, die am besten zu Ihnen passt – wir empfehlen die _min.js_-Option, da sie den Quellcode kleiner hält und es unwahrscheinlich ist, dass Sie den Quellcode durchgehen werden. **Bitte stellen Sie sicher, dass Sie Phaser Version 2 verwenden, da dieses Tutorial dafür geschrieben wurde.**
3. Speichern Sie den Phaser-Code in einem `/js` Verzeichnis am gleichen Ort wie Ihre `index.html` Datei.
4. Aktualisieren Sie den `src`-Wert des ersten {{htmlelement("script")}} Elements wie oben gezeigt.

## Durchgehen dessen, was wir bisher haben

An diesem Punkt haben wir ein definiertes `charset`, {{htmlelement("title")}} und einige grundlegende CSS im Header, um den Standard-`margin` und `padding` zurückzusetzen. Wir haben auch ein {{htmlelement("script")}} Element, um den Phaser-Quellcode auf die Seite anzuwenden. Der Body enthält ein zweites {{htmlelement("script")}} Element, in dem wir den JavaScript-Code schreiben werden, um das Spiel zu rendern und zu steuern.

Das {{htmlelement("canvas")}} Element wird automatisch vom Framework generiert. Wir initialisieren es, indem wir ein neues `Phaser.Game` Objekt erstellen und es der Variablen game zuweisen. Die Parameter sind:

- Die Breite und Höhe, um das {{htmlelement("canvas")}} einzustellen.
- Die Render-Methode. Die drei Optionen sind `AUTO`, `CANVAS` und `WEBGL`. Wir können eine der beiden letzteren explizit einstellen oder `AUTO` verwenden, um Phaser entscheiden zu lassen, welche verwendet werden soll. In der Regel wird WebGL verwendet, wenn es im Browser verfügbar ist, und auf Canvas 2D zurückgegriffen, wenn nicht.
- Die `id` des {{htmlelement("canvas")}}, das für das Rendering verwendet werden soll, falls bereits eines auf der Seite existiert (wir haben null angegeben, weil wir möchten, dass Phaser sein eigenes erstellt).
- Die Namen, die für Phasers drei Schlüsselfunktionen zum Laden und Starten des Spiels sowie zum Aktualisieren der Spielschleife in jedem Frame verwendet werden; wir werden die gleichen Namen verwenden, um es sauber zu halten.
  - `preload` kümmert sich um das Vorladen der Assets
  - `create` wird einmal ausgeführt, wenn alles geladen und bereit ist
  - `update` wird in jedem Frame ausgeführt.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, live in einem JSFiddle ausgeführt:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/h6cwzv2b/","","400")}}

## Nächste Schritte

Nun, da wir das grundlegende HTML eingerichtet und ein wenig über die Initialisierung von Phaser gelernt haben, lassen Sie uns zur zweiten Lektion übergehen und mehr über das [Skalieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling) erfahren.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}
