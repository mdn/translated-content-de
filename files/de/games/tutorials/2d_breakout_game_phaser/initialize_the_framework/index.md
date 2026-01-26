---
title: Initialisieren des Frameworks
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Scaling")}}

Dies ist das erste von 16 Tutorials, um zu lernen, wie man [Gamedev Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) verwendet. Bevor wir mit dem Schreiben der Spielfunktionalität beginnen können, müssen wir eine grundlegende Struktur erstellen, um das Spiel darin zu rendern. Dies kann mithilfe von HTML erfolgen – das Phaser-Framework wird das erforderliche {{htmlelement("canvas")}}-Element generieren.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht einfach, da das Spiel vollständig auf dem {{htmlelement("canvas")}}-Element gerendert wird, das vom Framework generiert wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code ein:

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

Erstellen Sie ein neues `js`-Verzeichnis an dem gleichen Ort wie Ihre `index.html`-Datei und erstellen Sie darin eine neue Datei namens `script.js`. Hier werden wir den JavaScript-Code schreiben, der das Spiel steuert. Anfangs sollte es Folgendes enthalten:

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

Als Nächstes müssen wir den Phaser-Quellcode herunterladen und in unser HTML-Dokument einbinden. Dieses Tutorial verwendet Phaser v3 (v3.90.0 zum Zeitpunkt des Schreibens, obwohl neuere Minor-Versionen genauso funktionieren sollten).

1. Gehen Sie zur [Phaser-Download-Seite](https://phaser.io/download/stable).
2. Wählen Sie eine für Sie passende Option – wir empfehlen die _phaser.min.js_-Option, da sie den Quellcode kleiner hält und es unwahrscheinlich ist, dass Sie den Quellcode durchgehen werden.
3. Speichern Sie den Phaser-Code im `js`-Verzeichnis. Wenn Sie einen anderen Dateinamen verwenden, stellen Sie sicher, dass Sie den `src`-Wert des ersten {{htmlelement("script")}}-Elements im HTML entsprechend aktualisieren.

## Durchgehen, was wir bisher haben

Zu diesem Zeitpunkt haben wir ein `charset` definiert, einen {{htmlelement("title")}} und ein einfaches CSS im Header, um den Standardabstand `margin` und `padding` zurückzusetzen. Wir haben auch ein {{htmlelement("script")}}-Element, um den Phaser-Quellcode auf die Seite anzuwenden. Der Body enthält ein zweites {{htmlelement("script")}}-Element, in dem wir den JavaScript-Code schreiben werden, um das Spiel zu rendern und zu steuern.

Das {{htmlelement("canvas")}}-Element wird automatisch vom Framework generiert. Wir initialisieren es, indem wir ein neues `Phaser.Game`-Objekt erstellen und es der `game`-Variable zuweisen. Die Parameter sind:

- Die Render-Methode. Die verfügbaren Optionen sind `AUTO`, `CANVAS`, `WEBGL`, `HEADLESS`. Wir können entweder `CANVAS` oder `WEBGL` explizit setzen oder `AUTO` verwenden, damit Phaser entscheidet, welche Option verwendet wird. Es verwendet normalerweise WebGL, wenn es im Browser verfügbar ist, und fällt auf Canvas 2D zurück, wenn nicht. Die letzte Option, `HEADLESS`, wird für serverseitiges Rendern oder Testen verwendet, was für dieses Tutorial nicht relevant ist.
- Die Breite und Höhe, um das {{htmlelement("canvas")}}-Element einzustellen.
- Die Szene, die dem Spiel hinzugefügt werden soll. In diesem Fall erstellen wir eine neue Klasse namens `ExampleScene`, die `Phaser.Scene` erweitert. Diese Klasse implementiert die Methoden, die Phaser in verschiedenen Phasen des Spielzyklus aufruft. Wir werden diese Methoden später ausfüllen:
  - `preload` kümmert sich um das Vorladen der Assets
  - `create` wird einmal ausgeführt, wenn alles geladen und bereit ist
  - `update` wird in jedem Frame ausgeführt.

## Ausführen der Anwendung

Um die App auszuführen, können Sie die `index.html`-Datei nicht direkt öffnen, da wir später externe Assets laden werden, die durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) des Browsers blockiert werden.

Um das Problem zu beheben, müssen Sie einen lokalen Webserver ausführen, um die HTML-Dateien und die Bilddateien bereitzustellen. [Wie das offizielle Dokument von Phaser vorschlägt](https://docs.phaser.io/phaser/getting-started/set-up-dev-environment#installing-a-web-server), haben wir viele Möglichkeiten, einen lokalen Webserver zu betreiben. Wir haben auch unsere eigenen [Tutorials zum Einrichten eines lokalen Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) – verwenden Sie jede Option, die Sie bevorzugen. Wenn Sie beispielsweise den Python HTTP-Server verwenden möchten, öffnen Sie ein Terminal, navigieren Sie zu dem Verzeichnis, in dem sich Ihre `index.html`-Datei befindet, und führen Sie den folgenden Befehl aus:

```bash
python3 -m http.server
```

Dies startet einen einfachen HTTP-Server auf Port 8000. Öffnen Sie dann Ihren Webbrowser und navigieren Sie zu `http://localhost:8000/index.html`.

## Vergleichen Sie Ihren Code

Hier ist, was Sie bisher haben sollten, live in Aktion. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche "Play".

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

Jetzt, da wir das grundlegende HTML eingerichtet und ein wenig über die Initialisierung von Phaser gelernt haben, fahren wir mit der zweiten Lektion fort und lernen etwas über [Skalierung](/de/docs/Games/Tutorials/2D_breakout_game_Phaser/Scaling).

{{PreviousNext("Games/Tutorials/2D_breakout_game_Phaser", "Games/Tutorials/2D_breakout_game_Phaser/Scaling")}}
