---
title: Das Framework initialisieren
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}

Dies ist der **1. von 12 Schritten** des [Tutorials zum Erstellen eines Breakout-Spiels mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser). Bevor wir die Spielfunktionen programmieren, müssen wir eine grundlegende Struktur erstellen, um das Spiel darzustellen. Dazu initialisieren wir das Phaser-Framework in einem einfachen HTML-Dokument. Phaser erzeugt dann das benötigte {{htmlelement("canvas")}}-Element.

## Das HTML des Spiels

Das Spiel wird vollständig auf dem vom Framework erzeugten {{htmlelement("canvas")}}-Element dargestellt. Erstellen Sie mit einem Texteditor Ihrer Wahl ein neues HTML-Dokument, speichern Sie es an einem geeigneten Ort als `index.html` und fügen Sie den folgenden Code ein:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Breakout game</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/phaser.min.js"></script>
    <script src="js/script.js" defer></script>
  </head>
  <body></body>
</html>
```

Erstellen Sie anschließend am selben Ort wie die Datei `index.html` ein neues Verzeichnis namens `js` und darin eine Datei namens `script.js`. In diese Datei schreiben wir den JavaScript-Code, der das Spiel steuert. Zunächst sollte sie Folgendes enthalten:

```js
class ExampleScene extends Phaser.Scene {
  preload() {}
  create() {}
  update() {}
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
};

const game = new Phaser.Game(config);
```

## Phaser-Code herunterladen

Als Nächstes müssen wir den Phaser-Quellcode herunterladen und in unser HTML-Dokument einbinden. Dieses Tutorial verwendet Phaser v3 (zum Zeitpunkt der Erstellung v3.90.0; neuere Minor-Versionen sollten genauso funktionieren).

1. Rufen Sie die [Phaser-Downloadseite](https://phaser.io/download/stable) auf.
2. Wählen Sie eine passende Option. Wir empfehlen _phaser.min.js_, da diese Datei kleiner ist und Sie den Quellcode wahrscheinlich ohnehin nicht durchsehen werden.
3. Speichern Sie den Phaser-Code im Verzeichnis `js`. Wenn Sie einen anderen Dateinamen verwenden, passen Sie den `src`-Wert des ersten {{htmlelement("script")}}-Elements im HTML entsprechend an.

## Was wir bisher erstellt haben

Im Head unseres Dokuments befinden sich ein `charset`, ein {{htmlelement("title")}}, etwas grundlegendes CSS zum Zurücksetzen der Standardwerte für `margin` und `padding` sowie zwei {{htmlelement("script")}}-Elemente. Das eine bindet den Phaser-Quellcode in die Seite ein; das andere verweist auf den JavaScript-Code, den wir schreiben werden, um das Spiel darzustellen und zu steuern.

Das {{htmlelement("canvas")}}-Element wird automatisch vom Framework erzeugt. Wir initialisieren es, indem wir ein neues `Phaser.Game`-Objekt erstellen und der Variablen `game` zuweisen. Die Parameter sind:

- Die Rendering-Methode. Verfügbar sind `AUTO`, `CANVAS`, `WEBGL` und `HEADLESS`. Wir können `CANVAS` oder `WEBGL` ausdrücklich festlegen oder mit `AUTO` Phaser die Wahl überlassen. Phaser verwendet normalerweise WebGL, wenn es im Browser verfügbar ist, und greift andernfalls auf Canvas 2D zurück. Die letzte Option, `HEADLESS`, wird für serverseitiges Rendering oder Tests verwendet und ist für dieses Tutorial nicht relevant.
- Die Breite und Höhe des {{htmlelement("canvas")}}-Elements.
- Die Scene, die dem Spiel hinzugefügt werden soll. Hier erstellen wir eine neue Klasse namens `ExampleScene`, die `Phaser.Scene` erweitert. Diese Klasse implementiert die Methoden, die Phaser in verschiedenen Phasen des Spiellebenszyklus aufruft. Diese Methoden werden wir später ausfüllen:
  - `preload` übernimmt das Vorladen der Assets.
  - `create` wird einmal ausgeführt, wenn alles geladen und bereit ist.
  - `update` wird bei jedem Frame ausgeführt.
- Die Skalierung des Spiel-Canvas. Hier skaliert `mode: Phaser.Scale.FIT` den Canvas so, dass er in den verfügbaren Platz passt, ohne das Seitenverhältnis zu verändern. Je nach Seitenverhältnis füllt er den Platz möglicherweise nicht vollständig aus. Die andere Eigenschaft, `autoCenter`, richtet das Canvas-Element horizontal und vertikal aus, sodass es unabhängig von seiner Größe immer auf dem Bildschirm zentriert ist.
- Die Hintergrundfarbe: ein helles Grau statt des standardmäßigen Schwarz.

## Anwendung ausführen

Sie können die Anwendung nicht ausführen, indem Sie die Datei `index.html` direkt öffnen. Später werden wir externe Assets laden, was durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) des Browsers blockiert würde.

Um das Problem zu lösen, müssen Sie einen lokalen Webserver starten, der die HTML- und Bilddateien bereitstellt. [Wie die offizielle Phaser-Dokumentation erläutert](https://docs.phaser.io/phaser/getting-started/set-up-dev-environment#installing-a-web-server), gibt es dafür viele Möglichkeiten. Wir haben außerdem eigene [Tutorials zum Einrichten eines lokalen Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server). Wählen Sie die Option, die Ihnen am besten passt. Wenn Sie beispielsweise den Python-HTTP-Server verwenden möchten, öffnen Sie ein Terminal, wechseln Sie in das Verzeichnis mit Ihrer Datei `index.html` und führen Sie den folgenden Befehl aus:

```bash
python3 -m http.server
```

Dadurch wird ein einfacher HTTP-Server auf Port 8000 gestartet. Öffnen Sie dann Ihren Webbrowser und rufen Sie `http://localhost:8000/index.html` auf.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Stand aussehen, hier als Live-Beispiel. Klicken Sie auf die Schaltfläche „Play“, um den Quellcode anzuzeigen.

Außer dem hellgrauen Canvas-Hintergrund ist hier noch nichts zu sehen.

```html hidden
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser/3.90.0/phaser.js"></script>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}
```

```js hidden
class ExampleScene extends Phaser.Scene {
  preload() {}
  create() {}
  update() {}
}

const config = {
  type: Phaser.CANVAS,
  width: 480,
  height: 320,
  scene: ExampleScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  backgroundColor: "#eeeeee",
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Nachdem wir das grundlegende HTML eingerichtet und etwas über die Initialisierung von Phaser gelernt haben, fahren wir mit der zweiten Lektion fort und sehen uns an, wie Sie [einen Ball darstellen und bewegen](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Move_the_ball")}}
