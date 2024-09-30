---
title: Framework initialisieren
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}

Dies ist das erste von 16 Tutorials, um zu lernen, wie man [Gamedev Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) verwendet. Nach Abschluss dieses Tutorials können Sie den Quellcode für diesen Abschnitt unter [Gamedev-Phaser-Content-Kit/demos/lesson01.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html) finden.

Bevor wir mit der Funktionalität des Spiels beginnen, müssen wir eine grundlegende Struktur erstellen, um das Spiel darin anzuzeigen. Dies kann mit HTML erfolgen — das Phaser-Framework wird das erforderliche {{htmlelement("canvas")}}-Element generieren.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist ziemlich einfach, da das Spiel vollständig auf dem vom Framework generierten {{htmlelement("canvas")}}-Element angezeigt wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem geeigneten Ort und fügen Sie folgenden Code hinzu:

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

Als nächstes müssen wir den Prozess des Herunterladens des Phaser-Quellcodes durchlaufen und ihn auf unser HTML-Dokument anwenden. Dieses Tutorial verwendet Phaser V2 — es funktioniert nicht mit der aktuellen Version von Phaser (V3). Die V2-Bibliothek ist weiterhin auf der Phaser-Download-Seite verfügbar, unterhalb der Links für den V3-Download.

1. Gehen Sie zur [Phaser-Download-Seite](https://phaser.io/download/stable).
2. Wählen Sie eine Option, die Ihnen am besten passt — wir empfehlen die _min.js_-Option, da sie den Quellcode kleiner hält und es unwahrscheinlich ist, dass Sie den Quellcode durchgehen. **Bitte stellen Sie sicher, dass Sie Phaser Version 2 verwenden, da dieses Tutorial dafür geschrieben wurde.**
3. Speichern Sie den Phaser-Code in einem `/js`-Verzeichnis am gleichen Ort wie Ihre `index.html`-Datei.
4. Aktualisieren Sie den `src`-Wert des ersten {{htmlelement("script")}}-Elements wie oben gezeigt.

## Durchgehen, was wir bisher haben

Zu diesem Zeitpunkt haben wir ein `charset` definiert, {{htmlelement("title")}} und einige grundlegende CSS im Header, um den Standard-`margin` und `padding` zurückzusetzen. Wir haben auch ein {{htmlelement("script")}}-Element, um den Phaser-Quellcode auf die Seite anzuwenden. Der Body enthält ein zweites {{htmlelement("script")}}-Element, in dem wir den JavaScript-Code schreiben, um das Spiel anzuzeigen und zu steuern.

Das {{htmlelement("canvas")}}-Element wird automatisch vom Framework generiert. Wir initialisieren es, indem wir ein neues `Phaser.Game`-Objekt erstellen und es der Spielvariablen zuweisen. Die Parameter sind:

- Die Breite und Höhe, um das {{htmlelement("canvas")}} einzustellen.
- Die Render-Methode. Die drei Optionen sind `AUTO`, `CANVAS` und `WEBGL`. Wir können eine der beiden letzteren explizit einstellen oder `AUTO` verwenden, damit Phaser entscheidet, welche zu verwenden ist. Normalerweise wird WebGL verwendet, wenn es im Browser verfügbar ist, und wechselt zu Canvas 2D, wenn nicht.
- Die `id` des {{htmlelement("canvas")}}, das zum Rendern verwendet werden soll, wenn bereits eines auf der Seite vorhanden ist (wir haben null angegeben, da wir möchten, dass Phaser sein eigenes erstellt).
- Die Namen, die für Phasers drei Schlüsselfunktionen verwendet werden, die das Spiel laden und starten und die Spielschleife bei jedem Frame aktualisieren; wir werden die gleichen Namen verwenden, um es sauber zu halten.

  - `preload` kümmert sich um das Vorladen der Assets
  - `create` wird einmal ausgeführt, wenn alles geladen und bereit ist
  - `update` wird bei jedem Frame ausgeführt.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, live ausgeführt in einem JSFiddle:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/h6cwzv2b/","","400")}}

## Nächste Schritte

Jetzt haben wir das grundlegende HTML eingerichtet und ein wenig über die Phaser-Initialisierung gelernt. Lassen Sie uns mit der zweiten Lektion fortfahren und etwas über das [Skalieren](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling) lernen.

{{PreviousNext("Games/Workflows/2D_Breakout_game_Phaser", "Games/Workflows/2D_Breakout_game_Phaser/Scaling")}}
