---
title: Framework initialisieren
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}

Dies ist das erste von 16 Tutorials, um zu lernen, wie man [Gamedev Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) verwendet. Nach Abschluss dieses Tutorials finden Sie den Quellcode für diesen Abschnitt unter [Gamedev-Phaser-Content-Kit/demos/lesson01.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html).

Bevor wir mit der Programmierung der Spielfunktionalität beginnen können, müssen wir eine grundlegende Struktur erstellen, in der das Spiel gerendert werden soll. Dies kann mit HTML erfolgen — das Phaser-Framework wird das benötigte {{htmlelement("canvas")}}-Element erzeugen.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht einfach, da das Spiel vollständig auf dem vom Framework generierten {{htmlelement("canvas")}}-Element gerendert wird. Verwenden Sie Ihren bevorzugten Texteditor, erstellen Sie ein neues HTML-Dokument, speichern Sie es unter `index.html` an einem geeigneten Ort und fügen Sie den folgenden Code hinzu:

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

Als Nächstes müssen wir den Prozess des Herunterladens des Phaser-Quellcodes durchlaufen und ihn auf unser HTML-Dokument anwenden. Dieses Tutorial verwendet Phaser V2 — es funktioniert nicht mit der aktuellen Version von Phaser (V3). Die V2-Bibliothek ist weiterhin auf der Phaser-Download-Seite verfügbar, unterhalb der Links für den V3-Download.

1. Gehen Sie zur [Phaser-Download-Seite](https://phaser.io/download/stable).
2. Wählen Sie eine für Sie passende Option — wir empfehlen die _min.js_-Option, da sie den Quellcode kleiner hält und Sie den Quellcode wahrscheinlich ohnehin nicht durchgehen werden. **Bitte stellen Sie sicher, dass Sie Phaser Version 2 verwenden, da dieses Tutorial dafür geschrieben wurde.**
3. Speichern Sie den Phaser-Code in einem `/js`-Verzeichnis am selben Ort wie Ihre `index.html`-Datei.
4. Aktualisieren Sie den `src`-Wert des ersten {{htmlelement("script")}}-Elements wie oben gezeigt.

## Durchgang durch unsere bisherigen Fortschritte

An diesem Punkt haben wir ein `charset` definiert, ein {{htmlelement("title")}} und einige grundlegende CSS im Header, um den Standard-`margin` und `padding` zu resetten. Wir haben auch ein {{htmlelement("script")}}-Element, um den Phaser-Quellcode auf die Seite anzuwenden. Der Body enthält ein zweites {{htmlelement("script")}}-Element, in dem wir den JavaScript-Code schreiben werden, um das Spiel zu rendern und zu steuern.

Das {{htmlelement("canvas")}}-Element wird vom Framework automatisch generiert. Wir initialisieren es, indem wir ein neues `Phaser.Game`-Objekt erstellen und es der game-Variable zuweisen. Die Parameter sind:

- Die Breite und Höhe, um das {{htmlelement("canvas")}} darauf einzustellen.
- Die Rendermethode. Die drei Optionen sind `AUTO`, `CANVAS` und `WEBGL`. Wir können eine der letzten beiden explizit festlegen oder `AUTO` verwenden, damit Phaser entscheidet, welche zu verwenden ist. Normalerweise wird WebGL verwendet, wenn es im Browser verfügbar ist, und es fällt auf Canvas 2D zurück, wenn nicht.
- Die `id` des {{htmlelement("canvas")}}, das zum Rendern verwendet werden soll, falls bereits eines auf der Seite existiert (wir haben null angegeben, weil wir möchten, dass Phaser sein eigenes erstellt).
- Die Namen, die für Phasers drei Schlüsselfunktionen verwendet werden, die das Spiel laden und starten und die Spielschleife in jedem Frame aktualisieren; wir verwenden die gleichen Namen, um es sauber zu halten.
  - `preload` kümmert sich um das Vorladen der Ressourcen
  - `create` wird einmal ausgeführt, wenn alles geladen und bereit ist
  - `update` wird in jedem Frame ausgeführt.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, live in einem JSFiddle:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/h6cwzv2b/","","400")}}

## Nächste Schritte

Jetzt haben wir das grundlegende HTML eingerichtet und ein wenig über die Phaser-Initialisierung gelernt. Lassen Sie uns mit der zweiten Lektion fortfahren und mehr über das [Scalieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling) lernen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}
