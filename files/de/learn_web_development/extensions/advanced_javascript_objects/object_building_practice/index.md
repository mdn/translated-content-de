---
title: Objektaufbauübung
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_building_practice
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}

In den vorherigen Artikeln haben wir alle wesentlichen Theorien und Syntaxdetails von JavaScript-Objekten betrachtet und Ihnen eine solide Basis geboten, von der aus Sie starten können. In diesem Artikel tauchen wir in eine praktische Übung ein, die Ihnen weitere Übung im Erstellen benutzerdefinierter JavaScript-Objekte bietet, mit einem lustigen und farbenfrohen Ergebnis.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Vertrautheit mit den Grundlagen von JavaScript
        (insbesondere
        <a href="/de/docs/Learn_web_development/Core/Scripting/Object_basics">Objektgrundlagen</a>) und objektorientierte JavaScript-Konzepte, die in den vorherigen Lektionen in diesem Modul behandelt wurden.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        Übung im Umgang mit Objekten und objektorientierten Techniken
        in einem realen Kontext.
      </td>
    </tr>
  </tbody>
</table>

## Lassen Sie uns einige Bälle hüpfen

In diesem Artikel schreiben wir ein klassisches "hüpfende Bälle"-Demo, um Ihnen zu zeigen, wie nützlich Objekte in JavaScript sein können. Unsere kleinen Bälle werden auf dem Bildschirm herumhüpfen und ihre Farbe ändern, wenn sie sich gegenseitig berühren. Das fertige Beispiel wird in etwa so aussehen:

![Screenshot einer Webseite mit dem Titel "Bouncing balls". 23 Bälle in verschiedenen Pastellfarben und Größen sind über einen schwarzen Bildschirm verteilt, mit langen Spuren hinter ihnen, die Bewegung anzeigen.](bouncing-balls.png)

Dieses Beispiel nutzt die [Canvas-API](/de/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics) zum Zeichnen der Bälle auf dem Bildschirm und die [`requestAnimationFrame`](/de/docs/Web/API/Window/requestAnimationFrame)-API, um die gesamte Anzeige zu animieren — Sie benötigen kein Vorwissen über diese APIs, und wir hoffen, dass Sie am Ende dieses Artikels Interesse daran haben, sie weiter zu erkunden. Auf dem Weg dorthin machen wir von einigen cleveren Objekten Gebrauch und zeigen Ihnen ein paar nette Techniken wie das Abprallen von Bällen von Wänden und das Überprüfen, ob sie sich gegenseitig getroffen haben (auch bekannt als _Kollisionsdetektion_).

## Erste Schritte

Zunächst erstellen Sie lokale Kopien unserer [`index.html`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/index.html), [`style.css`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/style.css) und [`main.js`](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main.js) Dateien. Diese enthalten jeweils Folgendes:

1. Ein sehr einfaches HTML-Dokument mit einem {{HTMLElement("Heading_Elements", "h1")}}-Element, einem {{HTMLElement("canvas")}}-Element, um unsere Bälle zu zeichnen, und Elemente, um unser CSS und JavaScript auf unser HTML anzuwenden.
2. Einige sehr einfache Styles, die hauptsächlich dazu dienen, das `<h1>` zu stylen und zu positionieren und jegliche Scrollbalken oder Ränder am Seitenrand zu entfernen (damit es schön und ordentlich aussieht).
3. Ein wenig JavaScript, das das `<canvas>`-Element einrichtet und eine allgemeine Funktion bereitstellt, die wir verwenden werden.

Der erste Teil des Skripts sieht folgendermaßen aus:

```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
```

Dieses Skript erhält eine Referenz zum `<canvas>`-Element und ruft dann die Methode [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) auf diesem auf, um uns einen Kontext zu geben, auf dem wir mit dem Zeichnen beginnen können. Die resultierende Konstante (`ctx`) ist das Objekt, das den Zeichenbereich der Leinwand direkt repräsentiert und es uns ermöglicht, 2D-Formen darauf zu zeichnen.

Als nächstes setzen wir Konstanten namens `width` und `height`, sowie die Breite und Höhe des Canvas-Elements (vertreten durch die Eigenschaften `canvas.width` und `canvas.height`) auf die Breite und Höhe des Browser-Viewports (der Bereich, in dem die Webseite erscheint — dies kann von den Eigenschaften [`Window.innerWidth`](/de/docs/Web/API/Window/innerWidth) und [`Window.innerHeight`](/de/docs/Web/API/Window/innerHeight) erhalten werden).

Beachten Sie, dass wir mehrere Zuweisungen miteinander verketten, um die Variablen schneller einzurichten — das ist völlig in Ordnung.

Dann haben wir zwei Hilfsfunktionen:

```js
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
```

Die `random()` Funktion nimmt zwei Zahlen als Argumente und gibt eine Zufallszahl im Bereich dazwischen zurück. Die `randomRGB()` Funktion generiert eine zufällige Farbe, die als {{cssxref("color_value/rgb")}}-String dargestellt wird.

## Modellierung eines Balls in unserem Programm

Unser Programm wird viele Bälle auf dem Bildschirm hüpfen lassen. Da sich diese Bälle alle auf die gleiche Weise verhalten, macht es Sinn, sie mit einem Objekt darzustellen. Beginnen wir damit, die folgende Klassendefinition am Ende unseres Codes hinzuzufügen.

```js
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
}
```

Diese Klasse enthält bisher nur einen Konstruktor, in dem wir die Eigenschaften jedes Balls initialisieren können, die er benötigt, um in unserem Programm zu funktionieren:

- `x` und `y` Koordinaten — die horizontalen und vertikalen Koordinaten, an denen der Ball auf dem Bildschirm startet. Diese können zwischen 0 (oben links) und der Breite und Höhe des Browser-Viewports (unten rechts) liegen.
- horizontale und vertikale Geschwindigkeit (`velX` und `velY`) — jedem Ball wird eine horizontale und vertikale Geschwindigkeit zugewiesen; in realen Begriffen werden diese Werte regelmäßig zu den `x`/`y`-Koordinatenwerten hinzugefügt, wenn wir die Bälle animieren, um sie bei jedem Frame um diesen Betrag zu bewegen.
- `color` — jeder Ball erhält eine Farbe.
- `size` — jeder Ball erhält eine Größe — dies ist sein Radius in Pixeln.

Dies behandelt die Eigenschaften, aber was ist mit den Methoden? Wir wollen, dass unsere Bälle tatsächlich etwas in unserem Programm tun.

### Den Ball zeichnen

Fügen Sie zuerst die folgende Methode `draw()` zur `Ball`-Klasse hinzu:

```js
class Ball {
  // …
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

Mit dieser Funktion können wir dem Ball sagen, dass er sich selbst auf dem Bildschirm zeichnen soll, indem wir eine Reihe von Mitgliedern des zuvor definierten 2D-Leinwand-Kontexts (`ctx`) aufrufen. Der Kontext ist wie das Papier, und jetzt wollen wir unserem Stift befehlen, etwas darauf zu zeichnen:

- Zuerst verwenden wir [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath), um anzugeben, dass wir eine Form auf das Papier zeichnen möchten.
- Als nächstes verwenden wir [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle), um zu definieren, welche Farbe wir für die Form haben möchten — wir setzen sie auf die `color`-Eigenschaft unseres Balls.
- Danach verwenden wir die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um eine Bogenform auf das Papier zu zeichnen. Ihre Parameter sind:
  - Die `x`- und `y`-Position des Mittelpunkts des Bogens — wir geben die `x`- und `y`-Eigenschaften des Balls an.
  - Der Radius des Bogens — in diesem Fall die `size`-Eigenschaft des Balls.
  - Die letzten beiden Parameter geben die Anfangs- und Endzahlen von Graden um den Kreis an, zwischen denen der Bogen gezeichnet wird. Hier geben wir 0 Grad und `2 * PI` an, was 360 Grad im Bogenmaß entspricht (ärgerlicherweise muss dies im Bogenmaß angegeben werden). Das gibt uns einen vollständigen Kreis. Hätten Sie nur `1 * PI` angegeben, würden Sie einen Halbkreis (180 Grad) erhalten.

- Zuletzt verwenden wir die Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill), die im Wesentlichen angibt: "Fertigstellen des Pfades, den wir mit `beginPath()` begonnen haben, und das Gebiet, das er einnimmt, mit der zuvor in `fillStyle` festgelegten Farbe füllen."

Sie können Ihr Objekt bereits testen.

1. Speichern Sie den bisherigen Code und laden Sie die HTML-Datei in einem Browser.
2. Öffnen Sie die JavaScript-Konsole des Browsers und aktualisieren Sie dann die Seite, damit die Canvas-Größe auf den kleineren sichtbaren Viewport geändert wird, der bleibt, wenn die Konsole geöffnet ist.
3. Geben Sie Folgendes ein, um eine neue Ballinstanz zu erstellen:

   ```js
   const testBall = new Ball(50, 100, 4, 4, "blue", 10);
   ```

4. Versuchen Sie, seine Mitglieder aufzurufen:

   ```js
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
   ```

5. Wenn Sie die letzte Zeile eingeben, sollte sich der Ball irgendwo auf der Leinwand zeichnen.

### Aktualisieren der Balldaten

Wir können den Ball an Ort und Stelle zeichnen, aber um den Ball tatsächlich zu bewegen, benötigen wir eine Aktualisierungsfunktion irgendeiner Art. Fügen Sie den folgenden Code innerhalb der Klassendefinition für `Ball` hinzu:

```js
class Ball {
  // …
  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}
```

Die ersten vier Teile der Funktion prüfen, ob der Ball den Rand der Leinwand erreicht hat. Wenn er das hat, kehren wir die Polarität der entsprechenden Geschwindigkeit um, damit der Ball in die entgegengesetzte Richtung fährt. Wenn der Ball beispielsweise nach oben fährt (negative `velY`), wird die vertikale Geschwindigkeit geändert, sodass er stattdessen nach unten fährt (positive `velY`).

In den vier Fällen prüfen wir:

- ob die `x`-Koordinate größer ist als die Breite der Leinwand (der Ball geht über den rechten Rand hinaus).
- ob die `x`-Koordinate kleiner als 0 ist (der Ball geht über den linken Rand hinaus).
- ob die `y`-Koordinate größer ist als die Höhe der Leinwand (der Ball geht über den unteren Rand hinaus).
- ob die `y`-Koordinate kleiner als 0 ist (der Ball geht über den oberen Rand hinaus).

In jedem Fall beziehen wir die `size` des Balls in die Berechnung ein, da die `x`-/`y`-Koordinaten im Mittelpunkt des Balls sind, aber wir wollen, dass der Rand des Balls vom Umfang abprallt — wir wollen nicht, dass der Ball zur Hälfte vom Bildschirm verschwindet, bevor er zurückprallt.

Die letzten beiden Zeilen addieren den `velX`-Wert zur `x`-Koordinate und den `velY`-Wert zur `y`-Koordinate — der Ball wird in der Tat jedes Mal bewegt, wenn diese Methode aufgerufen wird.

Das reicht für den Moment; lassen Sie uns mit etwas Animation weitermachen!

## Den Ball animieren

Jetzt machen wir es lustig. Wir werden nun beginnen, Bälle zur Leinwand hinzuzufügen und sie zu animieren.

Zuerst müssen wir einen Ort erstellen, um alle unsere Bälle zu speichern, und dann mit ihnen füllen. Das folgende wird diesen Job machen — fügen Sie es jetzt am Ende Ihres Codes hinzu:

```js
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}
```

Die `while`-Schleife erstellt eine neue Instanz unseres `Ball()` mit zufälligen Werten, die mit unseren `random()` und `randomRGB()` Funktionen generiert werden, und `push()` es an das Ende unseres Bälle-Arrays, aber nur solange die Anzahl der Bälle im Array kleiner als 25 ist. Wenn wir also 25 Bälle im Array haben, werden keine weiteren Bälle hinzugefügt. Sie können versuchen, die Zahl in `balls.length < 25` zu variieren, um mehr oder weniger Bälle im Array zu erhalten. Je nachdem, wie viel Rechenleistung Ihr Computer/Browser hat, könnte das Festlegen von mehreren Tausend Bällen die Animation ziemlich verlangsamen!

Fügen Sie als nächstes Folgendes am Ende Ihres Codes hinzu:

```js
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  requestAnimationFrame(loop);
}
```

Alle Programme, die Dinge animieren, beinhalten im Allgemeinen eine Animationsschleife, die dazu dient, die Informationen im Programm zu aktualisieren und dann die resultierende Ansicht bei jedem Frame der Animation zu rendern; dies ist die Grundlage für die meisten Spiele und andere derartige Programme. Unsere `loop()`-Funktion macht Folgendes:

- Legt die Füllfarbe der Leinwand auf halbtransparentes Schwarz fest und zeichnet dann ein Rechteck dieser Farbe über die gesamte Breite und Höhe der Leinwand mit `fillRect()` (die vier Parameter geben eine Startkoordinate sowie eine Breite und Höhe für das gezeichnete Rechteck an). Dies dient dazu, die Zeichnung des vorherigen Frames zu überdecken, bevor die nächste gezeichnet wird. Wenn Sie dies nicht tun, sehen Sie nur lange Schlangen, die sich über die Leinwand schlängeln, anstatt bewegende Bälle! Die Füllfarbe wird auf halbtransparentes `rgb(0 0 0 / 25%)` gesetzt, um die vorherigen paar Frames leicht durchscheinen zu lassen und die kleinen Spuren hinter den Bällen zu erzeugen, während sie sich bewegen. Wenn Sie 0.25 auf 1 ändern, sehen Sie sie überhaupt nicht mehr. Versuchen Sie, diese Zahl zu variieren, um den Effekt zu sehen.
- Durchläuft alle Bälle im `balls`-Array und führt die `draw()`- und `update()`-Funktion jedes Balls aus, um jeden einzelnen auf dem Bildschirm zu zeichnen und dann die erforderlichen Aktualisierungen der Position und Geschwindigkeit für den nächsten Frame vorzunehmen.
- Führt die Funktion erneut über die `requestAnimationFrame()`-Methode aus – wenn diese Methode wiederholt aufgerufen und derselbe Funktionsname übergeben wird, führt sie diese Funktion eine bestimmte Anzahl von Malen pro Sekunde aus, um eine flüssige Animation zu erstellen. Dies wird im Allgemeinen rekursiv durchgeführt — das bedeutet, dass die Funktion sich selbst bei jedem Aufruf aufruft, sodass sie immer wieder läuft.

Fügen Sie schließlich die folgende Zeile am Ende Ihres Codes hinzu — wir müssen die Funktion einmal aufrufen, um die Animation zu starten.

```js
loop();
```

Das war's für die Grundlagen — versuchen Sie, zu speichern und zu aktualisieren, um Ihre hüpfenden Bälle zu testen!

## Hinzufügen von Kollisionsdetektion

Jetzt für ein wenig Spaß, fügen wir unserer Programmkollisionsdetektion hinzu, sodass unsere Bälle wissen, wann sie einen anderen Ball getroffen haben.

Fügen Sie zuerst die folgende Methodendefinition zu Ihrer `Ball`-Klasse hinzu.

```js
class Ball {
  // …
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
```

Diese Methode ist ein wenig komplex, also machen Sie sich keine Sorgen, wenn Sie nicht genau verstehen, wie sie funktioniert. Eine Erklärung folgt:

- Für jeden Ball müssen wir jeden anderen Ball überprüfen, um zu sehen, ob er mit dem aktuellen Ball kollidiert ist. Dazu starten wir eine weitere `for...of`-Schleife, um alle Bälle im `balls[]`-Array zu durchlaufen.
- Direkt innerhalb der Schleife verwenden wir eine `if`-Anweisung, um zu überprüfen, ob der aktuelle Ball, der durchlaufen wird, derselbe Ball ist wie der, den wir gerade überprüfen. Wir möchten nicht prüfen, ob ein Ball mit sich selbst kollidiert! Dazu überprüfen wir, ob der aktuelle Ball (d.h. der Ball, dessen collisionDetect-Methode aufgerufen wird) derselbe ist wie der Schleifenball (d.h. der Ball, auf den in der aktuellen Iteration der for-Schleife in der collisionDetect-Methode verwiesen wird). Wir verwenden dann `!`, um die Überprüfung zu negieren, sodass der Code innerhalb der `if`-Anweisung nur ausgeführt wird, wenn sie **nicht** gleich sind.
- Dann verwenden wir einen gängigen Algorithmus, um die Kollision zweier Kreise zu überprüfen. Wir überprüfen im Wesentlichen, ob sich die Bereiche der beiden Kreise überlappen. Dies wird weiter erläutert in [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection).
- Wenn eine Kollision erkannt wird, wird der Code innerhalb der inneren `if`-Anweisung ausgeführt. In diesem Fall setzen wir nur die `color`-Eigenschaft beider Kreise auf eine neue zufällige Farbe. Wir hätten etwas viel Komplexeres tun können, wie zum Beispiel die Bälle realistisch abprallen zu lassen, aber das wäre viel komplizierter zu implementieren gewesen. Für solche Physiksimulationen neigen Entwickler dazu, Spiele- oder Physikbibliotheken wie [PhysicsJS](https://wellcaffeinated.net/PhysicsJS/), [matter.js](https://brm.io/matter-js/), [Phaser](https://phaser.io/) usw. zu verwenden.

Sie müssen diese Methode auch in jedem Frame der Animation aufrufen. Aktualisieren Sie Ihre `loop()`-Funktion, um `ball.collisionDetect()` nach `ball.update()` aufzurufen:

```js
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}
```

Speichern und aktualisieren Sie die Demo erneut, und Sie werden sehen, wie Ihre Bälle die Farbe ändern, wenn sie kollidieren!

> [!NOTE]
> Wenn Sie Schwierigkeiten haben, dieses Beispiel zum Laufen zu bringen, versuchen Sie, Ihren JavaScript-Code mit unserer [fertigen Version](https://github.com/mdn/learning-area/blob/main/javascript/oojs/bouncing-balls/main-finished.js) zu vergleichen (sehen Sie es sich auch [live in Aktion](https://mdn.github.io/learning-area/javascript/oojs/bouncing-balls/index-finished.html) an).

## Zusammenfassung

Wir hoffen, Sie hatten Spaß daran, Ihr eigenes Beispiel für zufällig hüpfende Bälle zu schreiben, unter Verwendung verschiedener Objekt- und objektorientierter Techniken aus dem gesamten Modul! Dies sollte Ihnen einige nützliche Übungen im Umgang mit Objekten gegeben haben und guten realen Kontext bieten.

Das war's für die Objektlektionen — das Einzige, was jetzt noch bleibt, ist, dass Sie Ihre Fähigkeiten in der Modul-Herausforderung testen.

## Siehe auch

- [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial) — ein Anfänger-Tutorial zu 2D-Canvas.
- [requestAnimationFrame()](/de/docs/Web/API/Window/requestAnimationFrame)
- [2D-Kollisionsdetektion](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsdetektion](/de/docs/Games/Techniques/3D_collision_detection)
- [2D-Breakout-Spiel nur mit JavaScript](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) — ein großartiges Anfänger-Tutorial, das zeigt, wie man ein 2D-Spiel erstellt.
- [2D-Breakout-Spiel mit Phaser](/de/docs/Games/Tutorials/2D_breakout_game_Phaser) — erklärt die Grundlagen des Erstellens eines 2D-Spiels mit einer JavaScript-Spielbibliothek.

{{PreviousMenuNext("Learn_web_development/Extensions/Advanced_JavaScript_objects/Test_your_skills/Object-oriented_JavaScript", "Learn_web_development/Extensions/Advanced_JavaScript_objects/Adding_bouncing_balls_features", "Learn_web_development/Extensions/Advanced_JavaScript_objects")}}
