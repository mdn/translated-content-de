---
title: Initialisieren des Frameworks
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Scaling")}}

Dies ist das erste von 16 Tutorials, um zu lernen, wie man [Gamedev Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) verwendet. Bevor wir mit dem Schreiben der Spielfunktionalität beginnen können, müssen wir eine grundlegende Struktur schaffen, um das Spiel darin darzustellen. Dies kann mit HTML geschehen - das Phaser-Framework wird das benötigte {{htmlelement("canvas")}}-Element generieren.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht einfach, da das gesamte Spiel auf dem vom Framework generierten {{htmlelement("canvas")}}-Element dargestellt wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem geeigneten Ort und fügen Sie den folgenden Code hinzu:

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
    <script src="js/script.js" defer></script>
  </head>
  <body></body>
</html>
```

Und erstellen Sie ein neues `js`-Verzeichnis am selben Ort wie Ihre `index.html`-Datei und erstellen Sie darin eine neue Datei namens `script.js`. Hier werden wir den JavaScript-Code schreiben, der das Spiel steuert. Zunächst sollte es Folgendes enthalten:

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
};

const game = new Phaser.Game(config);
```

## Herunterladen des Phaser-Codes

Als Nächstes müssen wir den Phaser-Quellcode herunterladen und in unser HTML-Dokument einbinden. Dieses Tutorial verwendet Phaser v3 (v3.90.0 zum Zeitpunkt des Schreibens, obwohl neuere Minor-Versionen gleich funktionieren sollten).

1. Gehen Sie zur [Phaser-Download-Seite](https://phaser.io/download/stable).
2. Wählen Sie eine Option, die Ihnen am besten passt – wir empfehlen die _phaser.min.js_ Option, da sie den Quellcode kleiner hält und Sie den Quellcode wahrscheinlich sowieso nicht durchgehen werden.
3. Speichern Sie den Phaser-Code im `js`-Verzeichnis. Wenn Sie einen anderen Dateinamen verwenden, stellen Sie sicher, dass Sie den `src`-Wert des ersten {{htmlelement("script")}}-Elements im HTML entsprechend aktualisieren.

## Durchgehen, was wir bisher haben

An diesem Punkt haben wir ein `charset`-Attribut definiert, einen {{htmlelement("title")}}, und einige grundlegende CSS im Header, um den Standard-`margin` und `padding` zurückzusetzen. Wir haben auch ein {{htmlelement("script")}}-Element, um den Phaser-Quellcode auf die Seite anzuwenden. Der Body enthält ein zweites {{htmlelement("script")}}-Element, in dem wir den JavaScript-Code schreiben werden, um das Spiel darzustellen und zu steuern.

Das {{htmlelement("canvas")}}-Element wird automatisch vom Framework generiert. Wir initialisieren es, indem wir ein neues `Phaser.Game`-Objekt erstellen und es der `game`-Variable zuweisen. Die Parameter sind:

- Die Darstellungsmethode. Die verfügbaren Optionen sind `AUTO`, `CANVAS`, `WEBGL`, `HEADLESS`. Wir können entweder `CANVAS` oder `WEBGL` explizit setzen oder `AUTO` verwenden, um Phaser entscheiden zu lassen, welche verwendet wird. Normalerweise wird WebGL verwendet, wenn es im Browser verfügbar ist, und auf Canvas 2D zurückgegriffen, falls nicht. Die letzte Option, `HEADLESS`, wird für serverseitiges Rendering oder Tests verwendet, was für dieses Tutorial nicht relevant ist.
- Die Breite und Höhe, um das {{htmlelement("canvas")}} zu setzen.
- Die Szene, die dem Spiel hinzugefügt werden soll. In diesem Fall erstellen wir eine neue Klasse namens `ExampleScene`, die von `Phaser.Scene` erbt. Diese Klasse implementiert die Methoden, die Phaser in den verschiedenen Phasen des Spielzyklus aufruft. Wir werden diese Methoden später ausfüllen:
  - `preload` übernimmt das Vorladen der Assets
  - `create` wird einmal ausgeführt, wenn alles geladen und bereit ist
  - `update` wird bei jedem Frame ausgeführt.

## Ausführung der Anwendung

Um die App auszuführen, können Sie die `index.html`-Datei nicht direkt öffnen, da wir später externe Assets laden werden, die durch die [Same-Origin-Policy](/de/docs/Web/Security/Same-origin_policy) des Browsers blockiert werden.

Um das Problem zu beheben, müssen Sie einen lokalen Webserver betreiben, um die HTML-Dateien und die Bilddateien bereitzustellen. [Wie das offizielle Dokument von Phaser vorschlägt](https://docs.phaser.io/phaser/getting-started/set-up-dev-environment#installing-a-web-server), haben wir viele Optionen, um einen lokalen Webserver zu betreiben. Wir haben auch unsere eigenen [Tutorials zur Einrichtung eines lokalen Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) - verwenden Sie jede beliebige Option, die Sie bevorzugen. Wenn Sie beispielsweise den Python-HTTP-Server verwenden möchten, dann öffnen Sie ein Terminal, navigieren Sie zu dem Verzeichnis, in dem sich Ihre `index.html`-Datei befindet, und führen Sie den folgenden Befehl aus:

```bash
python3 -m http.server
```

Dies startet einen einfachen HTTP-Server auf Port 8000. Öffnen Sie dann Ihren Webbrowser und navigieren Sie zu `http://localhost:8000/index.html`.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live laufend. Um sich den Quellcode anzusehen, klicken Sie auf die Schaltfläche "Play".

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
};

const game = new Phaser.Game(config);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Nun haben wir das grundlegende HTML eingerichtet und ein wenig über die Initialisierung von Phaser gelernt, lassen Sie uns zur zweiten Lektion übergehen und etwas über [Scaling](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling) lernen.

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Scaling")}}
