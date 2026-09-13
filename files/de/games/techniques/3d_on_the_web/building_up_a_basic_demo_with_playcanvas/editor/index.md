---
title: Aufbau einer einfachen Demo mit dem PlayCanvas Editor
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: 815f1a18f44059500b337719295c6eda14b6228e
---

Anstatt alles von Grund auf selbst zu programmieren, können Sie auch den Online-**PlayCanvas-Editor** verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht gerne programmieren.

## Ein Konto erstellen

Der PlayCanvas Editor ist kostenlos — das Einzige, was Sie tun müssen, um zu beginnen, ist [Ihr Konto zu registrieren](https://login.playcanvas.com/signup) und sich einzuloggen:

![PlayCanvas Editor - Login](playcanvas-editor-login.png)

Beim ersten Anmelden werden Sie direkt in den Editor geleitet und erhalten ein einfaches Einsteiger-Tutorial, bei dem Sie ein 3D-Rollballspiel bearbeiten. Sie können dieses abschließen, bevor Sie mit unserem Tutorial fortfahren, wenn Sie möchten. Wenn Sie bereit sind, mit unserem Tutorial fortzufahren, gehen Sie zu Ihrer Canvas-Startseite — zum Beispiel meine ist `https://playcanvas.com/end3r`. So sieht die Seite aus — Sie können Projekte erstellen und verwalten, deren Einstellungen ändern etc.

## Ein neues Projekt erstellen

Starten Sie ein brandneues Projekt, indem Sie auf die Schaltfläche _Neu_ klicken:

![PlayCanvas Editor - Panel](playcanvas-editor-panel.png)

Das erscheinende Dialogfeld zeigt eine Reihe unterschiedlicher Optionen. Es gibt Starter-Kits, aber wir möchten keine Modelle laden oder ein Plattformspiel starten.

1. Wir wollen klein anfangen, daher verwenden wir das leere Projekt — klicken Sie auf die Option "Blank Project" und geben Sie einen Namen dafür ein (wir verwenden "MDN Games demo").
2. Geben Sie eine Beschreibung ein, wenn Sie möchten — es ist optional.
3. Klicken Sie auf _Erstellen_, um es zu erstellen.

![PlayCanvas Editor - Neues Projekt](playcanvas-editor-newproject.png)

Als Nächstes sehen Sie die Seite Ihres Projekts — es gibt noch nicht viel. Durch Klicken auf die Schaltfläche _Editor_ starten wir den Online-PlayCanvas-Editor, in dem wir unsere Szene mit den Formen erstellen werden. Machen Sie das jetzt.

![PlayCanvas Editor - Projekt](playcanvas-editor-project.png)

## Die Szene erstellen

So sieht die Szene initial im Editor aus. Auch wenn es ein leeres neues Projekt ist, müssen Sie nicht alles von Grund auf neu beginnen — die Kamera und das Richtungslicht sind bereits vorbereitet, sodass Sie sich nicht darum kümmern müssen.

![PlayCanvas Editor - Szene](playcanvas-editor-scene.png)

Jetzt zum kreativen Teil. Um ein Objekt zur Szene hinzuzufügen, müssen Sie auf die große Plus-Taste im oberen linken Bereich des Editors klicken, neben dem Text "Hierarchie". Wenn Sie mit der Maus über diese Schaltfläche fahren, wird das Label "Add Entity" angezeigt — genau das wollen wir tun. Ein Entität ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, Licht oder eine Tonquelle sein. Nach dem Klicken auf die Schaltfläche sehen Sie eine Dropdown-Liste mit einer Vielzahl verschiedener Entitäten. Klicken Sie auf _Box_ — sie wird der Szene hinzugefügt.

![PlayCanvas Editor - Neue Box](playcanvas-editor-newbox.png)

Die Box wird mit den Standardwerten erstellt — Breite, Höhe und Tiefe sind auf 1 gesetzt, und sie befindet sich in der Mitte der Szene. Sie können sie herumschieben oder neue Werte im rechten Panel anwenden.

![PlayCanvas Editor - Box](playcanvas-editor-box.png)

Um der Szene einige Farben hinzuzufügen, benötigen wir ein neues Material, das auf der neu erstellten Box verwendet wird. Klicken Sie auf die Plus-Taste im Tab _Assets_ und klicken Sie auf die Option _Material_ im erscheinenden Dropdown-Menü, um ein neues Material zu erstellen.

![PlayCanvas Editor - Neues Material](playcanvas-editor-newmaterial.png)

Klicken Sie auf Ihr neues Material im Asset-Tab und der Inspektor für die Entität erscheint rechts auf dem Bildschirm. Bearbeiten Sie jetzt das Textfeld _Name_, um ihm einen eindeutigen Namen zu geben (wir haben _boxMaterial_ gewählt). Ein eindeutiger Name wird Ihnen helfen, sich zu erinnern, wofür dieses Material gedacht ist — wir werden später noch mehr hinzufügen!

![PlayCanvas Editor - Box Material](playcanvas-editor-boxmaterial.png)

Um seine Farbe zu ändern, verwenden wir die _Diffuse_-Option im Entität-Inspektor. Klicken Sie auf _Diffuse_, dann wählen Sie das farbige Feld neben dem Farben-Label — es öffnet ein {{Glossary("color_wheel", "Farbrad")}}. Hier können Sie Ihre gewünschte Farbe auswählen oder sie im unteren Textfeld als Hex-Wert eingeben. Wir haben eine blaue Farbe mit dem Hex-Wert `0095DD` gewählt — geben Sie diesen Code im Textfeld ein und drücken Sie die Eingabetaste, damit er akzeptiert wird.

> [!NOTE]
> Ja, Sie haben es richtig gelesen — Sie müssen den Hex-Wert ohne das Hash/Grundzeichen eingeben.

![PlayCanvas Editor - Diffuse-Farbe](playcanvas-editor-diffusecolor.png)

Nun können wir das farbige Material auf die Form anwenden, indem wir sein Symbol vom unteren Teil des Bildschirms (der kleine Punkt links vom Namen des Materials — es kann ein wenig knifflig sein, es auszuwählen; einfach beharrlich bleiben) auf die Box in der Szene ziehen.

![PlayCanvas Editor - Box Ablegen](playcanvas-editor-boxdrop.png)

An diesem Punkt haben wir eine blaue Box erstellt. Klicken Sie auf die Box, um ihre Entität-Seitenleiste aufzurufen — Sie werden Optionen zum Ändern ihrer Position, Rotation und Skalierung sehen. Versuchen Sie, die Rotationswerte X: 10 und Y: 20 anzuwenden.

![PlayCanvas Editor - Rotation](playcanvas-editor-rotate.png)

Klicken Sie nun auf den Abspielpfeil in der oberen rechten Ecke der Szene, um die Szene zu starten und zu rendern — sie wird in einem separaten Browser-Tab geöffnet.

![PlayCanvas Editor - Start](playcanvas-editor-launch.png)

Das sieht großartig aus! Fügen wir der Szene weitere Formen hinzu, um sie interessanter aussehen zu lassen.

![PlayCanvas Editor - Box Rendern](playcanvas-editor-boxrender.png)

## Hinzufügen weiterer Formen

Um Platz für weitere Formen zu schaffen, bewegen Sie die Box nach links, um etwas Raum für die nächste Form zu schaffen. Sie können dies tun, indem Sie ihr einen X-Positionswert von -2 geben.

Das Hinzufügen anderer Formen erfolgt in einem sehr ähnlichen Prozess wie das Hinzufügen der Box. Klicken Sie im Hierarchie-Panel auf den Root-Ordner (um sicherzustellen, dass die neue Form im Root erscheint und nicht als Kind der Box) und klicken Sie dann auf die große _Add Entity_ (Plus)-Taste und wählen Sie Zylinder aus der Dropdown-Liste — es wird der Szene eine neue Zylinderform hinzugefügt.

![PlayCanvas Editor - Zylinder](playcanvas-editor-cylinder.png)

Folgen Sie nun denselben Schritten wie zuvor beim Färben des Würfels:

- Erstellen Sie ein neues Material mit der _Add Asset_ (Plus)-Taste.
- Stellen Sie sicher, dass das neue Material im Asset-Panel ausgewählt ist, um den Entität-Inspektor aufzurufen.
- Geben Sie dem Material einen neuen Namen, wie `cylinderMaterial`.
- Klicken Sie auf Diffuse, dann auf den Farbwähler — geben Sie ihm eine orange Farbe (wir haben FF9500 verwendet).
- Ziehen Sie das `cylinderMaterial`-Symbol auf das Zylinderobjekt auf dem Bildschirm, um diese Farbe anzuwenden.

![PlayCanvas Editor - Zylinder Material](playcanvas-editor-cylindermaterial.png)

Verwenden Sie denselben Ansatz erneut, um ein Kegel zur Szene hinzuzufügen, ihm eine grau-gelbliche Farbe zu geben (wir verwendeten `#EAEFF2`). Sie sollten nun drei Formen auf Ihrer Szene haben, ähnlich wie im folgenden Screenshot.

![PlayCanvas Editor - Kegel](playcanvas-editor-cone.png)

## Animieren unserer Szene

Das Animieren von 3D-Modellen könnte als eine [fortgeschrittene](https://developer.playcanvas.com/en/tutorials/anim-blending/) Aufgabe angesehen werden, aber alles, was wir tun wollen, ist ein paar Eigenschaften eines gegebenen Objekts zu steuern — wir können dafür eine Skriptkomponente verwenden. Klicken Sie auf die Plus-Taste im Asset-Panel, wählen Sie die Skriptoption aus und benennen Sie Ihre neue Skriptdatei `boxAnimation.js`.

![PlayCanvas Editor - Box Animation](playcanvas-editor-boxanimation.png)

Wenn Sie doppelt auf diese klicken, werden Sie in einen Code-Editor verschoben. Wie Sie sehen können, enthält die Datei bereits einige Vorlagen-Code:

```js
pc.script.create("boxAnimation", (app) => {
  class BoxAnimation {
    constructor(entity) {
      this.entity = entity;
    }

    // Called once after all resources are loaded and before the first update
    initialize() {}

    // Called every frame, dt is time in seconds since last update
    update(dt) {}
  }

  return BoxAnimation;
});
```

Der interessanteste Teil ist die `update()`-Funktion, in der wir jeden Code platzieren können, den wir in jedem Frame wiederholen lassen möchten. Fügen Sie die folgende Zeile in diese Funktion ein, um den Würfel in jedem Frame zu drehen:

```js
this.entity.rotate(dt * 10, dt * 20, dt * 30);
```

In der obigen Zeile bezieht sich `this.entity` auf das Objekt, an das das Skript angehängt wird (die Box); durch die Verwendung der Variablen `dt`, die die vergangene Zeit seit dem vorherigen Frame enthält, können wir die Box um verschiedene Werte um alle drei Achsen drehen.

1. Speichern Sie die Änderungen mit dem Speichern-Schaltfläche oben rechts im Code-Editor, dann kehren Sie zum Haupteditor-Tab zurück. Folgen Sie hier diesen Schritten:
2. Stellen Sie sicher, dass die Box in der Szene ausgewählt ist.
3. Klicken Sie auf _Komponente hinzufügen_, dann auf _Skript_ im Entität-Inspektor.
4. Am unteren Bildschirmrand sehen Sie die Liste der verfügbaren Skripte — aktuell gibt es nur `boxAnimation.js` — klicken Sie darauf, um das Animationsskript zum Box-Objekt hinzuzufügen.

![PlayCanvas Editor - Boxskript](playcanvas-editor-boxscript.png)

### Der Zylinder

Nun machen wir die gleichen Schritte für den Zylinder. Zuerst:

1. Erstellen Sie einen neuen Skript-Asset.
2. Nennen Sie es `cylinderAnimation.js`.
3. Doppelklicken Sie auf das Skript-Symbol, um den Code-Editor zu starten.

Dieses Mal werden wir anstatt das Objekt zu rotieren, versuchen, es zu skalieren. Dafür benötigen wir einen Timer, um die gesamte Zeit zu speichern, die seit dem Start der Animation vergangen ist. Fügen Sie diesen Code der `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Und diese zwei Zeilen zur `update()`-Funktion:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die `setLocalScale()`-Methode wendet die gegebenen Werte auf die X-, Y- und Z-Achsen des Objekts an. In unserem Fall modifizieren wir die Skalierung des Zylinders auf der Y-Achse und geben ihr als Wert den `Math.sin()` des Timers mit angewandetem `Math.abs()`, damit die Werte immer oberhalb der Null sind (0-1; Sinuswerte liegen normalerweise zwischen -1 und 1). Dies ergibt als Resultat einen schönen Skalierungseffekt.

Denken Sie daran, die `cylinderAnimation.js`-Datei dem Zylinderobjekt hinzuzufügen, um die angegebenen Animationen anzuwenden.

### Der Kegel

Zeit, mit dem letzten Objekt zu spielen — dem Kegel. Erstellen Sie eine `coneAnimation.js`-Datei und doppelklicken Sie darauf, um sie im Editor zu öffnen.

Fügen Sie als nächstes die folgende Zeile in die `initialize()`-Funktion ein:

```js
this.timer = 0;
```

Um den Kegel vertikal zu bewegen, verwenden wir die `setPosition()`-Methode — fügen Sie den folgenden Code zur `update()`-Funktion hinzu:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird in jedem Frame animiert, indem der `Math.sin()`-Wert des `timers` zu jedem Zeitpunkt übergeben wird — wir haben den `this.timer`-Wert verdoppelt, um es höher zu bewegen.

Fügen Sie das Skript `coneAnimation.js` dem Kegelobjekt wie zuvor hinzu.

## Test the demo out

Lassen Sie die Demo laufen, um die Effekte zu sehen — alle Formen sollten animiert werden. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas Editor - Shapes](playcanvas-editor-shapes.png)

## Zusammenfassung

Jetzt können Sie sich den [PlayCanvas Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) Artikel ansehen, wenn Sie ihn noch nicht gesehen haben, zurück zur Seite [Einfache Demo mit PlayCanvas erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) gehen.
