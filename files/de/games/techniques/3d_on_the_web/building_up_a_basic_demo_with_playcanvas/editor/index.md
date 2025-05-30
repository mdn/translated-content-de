---
title: Erstellen einer grundlegenden Demo mit dem PlayCanvas-Editor
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

Anstatt alles von Grund auf zu programmieren, können Sie auch den Online-**PlayCanvas-Editor** verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht jemand sind, der gerne programmiert.

## Erstellen eines Kontos

Der PlayCanvas-Editor ist kostenlos — alles, was Sie tun müssen, ist, sich [zu registrieren](https://login.playcanvas.com/signup) und sich anzumelden:

![PlayCanvas Editor - Anmeldung](playcanvas-editor-login.png)

Wenn Sie sich erstmals registrieren, werden Sie direkt in den Editor geführt und erhalten ein einfaches Starter-Tutorial, bei dem es darum geht, ein 3D-Rollball-Spiel zu bearbeiten. Sie können dies abschließen, bevor Sie mit unserem Tutorial fortfahren, wenn Sie möchten. Wenn Sie bereit sind, unser Tutorial fortzusetzen, gehen Sie zu Ihrer Canvas-Startseite — zum Beispiel ist meine `https://playcanvas.com/end3r`. So sieht die Seite aus — Sie können Projekte erstellen und verwalten, deren Einstellungen ändern usw.

## Erstellen eines neuen Projekts

Starten Sie ein brandneues Projekt, indem Sie auf die Schaltfläche _New_ klicken:

![PlayCanvas Editor - Panel](playcanvas-editor-panel.png)

Das resultierende Dialogfeld zeigt einige verschiedene Optionen. Es gibt Starter-Kits, aber wir möchten keine Modelle laden oder ein Plattformspiel starten.

1. Wir wollen klein anfangen, also verwenden wir das leere Projekt — klicken Sie auf die Option Blank Project und geben Sie einen Namen dafür ein (wir verwenden "MDN Games demo").
2. Geben Sie eine Beschreibung ein, wenn Sie möchten — dies ist optional.
3. Klicken Sie auf _Create_, um es zu erstellen.

![PlayCanvas Editor - Neues Projekt](playcanvas-editor-newproject.png)

Als Nächstes sehen Sie die Seite Ihres Projekts — bisher gibt es nicht viel. Indem Sie auf die Schaltfläche _Editor_ klicken, starten wir den Online-PlayCanvas-Editor, in dem wir unsere Szene mit den Formen erstellen. Tun Sie dies jetzt.

![PlayCanvas Editor - Projekt](playcanvas-editor-project.png)

## Erstellen der Szene

So sieht die Szene zu Beginn im Editor aus. Obwohl es sich um ein neues, leeres Projekt handelt, müssen wir nicht ganz von vorne anfangen — die Kamera und das Richtungslicht sind bereits vorbereitet, sodass Sie sich darüber keine Gedanken machen müssen.

![PlayCanvas Editor - Szene](playcanvas-editor-scene.png)

Nun zum kreativen Teil. Um ein Entität zur Szene hinzuzufügen, müssen Sie auf die große Plus-Schaltfläche im oberen linken Bereich des Editors klicken, neben dem Text Hierarchie. Wenn Sie mit der Maus über diese Schaltfläche fahren, wird die Beschriftung 'Add Entity' angezeigt — genau das wollen wir tun. Eine Entität ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, ein Licht oder eine Tonquelle sein. Nachdem Sie auf die Schaltfläche geklickt haben, sehen Sie eine Dropdown-Liste mit vielen verschiedenen Entitäten zur Auswahl. Klicken Sie auf _Box_ — sie wird der Szene hinzugefügt.

![PlayCanvas Editor - Neue Box](playcanvas-editor-newbox.png)

Die Box wird mit den Standardwerten erstellt — Breite, Höhe und Tiefe sind auf 1 gesetzt und sie ist in der Mitte der Szene platziert. Sie können sie herumziehen oder im rechten Bereich neue Werte anwenden.

![PlayCanvas Editor - Box](playcanvas-editor-box.png)

Um etwas Farbe in die Szene zu bringen, benötigen wir ein neues Material, das auf die neu erstellte Box aufgebracht wird. Klicken Sie auf die Plus-Schaltfläche im Tab _Assets_ und dann in der Dropdown-Liste auf die Option _Material_, die erscheint, um ein neues Material zu erstellen.

![PlayCanvas Editor - Neues Material](playcanvas-editor-newmaterial.png)

Klicken Sie auf Ihr neues Material im Tab Assets und der Entitätsinspektor erscheint auf der rechten Seite des Displays. Bearbeiten Sie jetzt das Textfeld _Name_, um ihm einen eindeutigen Namen zu geben (wir haben _boxMaterial_ gewählt). Ein eindeutiger Name hilft uns daran zu erinnern, wofür dieses Material ist — wir werden später noch mehr hinzufügen!

![PlayCanvas Editor - Box-Material](playcanvas-editor-boxmaterial.png)

Um die Farbe zu ändern, verwenden wir die Option _Diffuse_ im Entitätsinspektor. Klicken Sie auf _Diffuse_ und wählen Sie dann das farbige Kästchen neben dem Label Color aus — es öffnet sich ein {{Glossary("color_wheel", "Farbkreis")}}. Von hier aus können Sie Ihre gewünschte Farbe anklicken oder im unteren Textfeld als Hex-Wert eingeben. Wir haben eine blaue Farbe mit einem Hex-Wert von `0095DD` gewählt — geben Sie diesen Code im Textfeld ein und drücken Sie die Eingabetaste, damit er akzeptiert wird.

> [!NOTE]
> Ja, Sie haben richtig gelesen — Sie müssen den Hex-Wert ohne das Raute-Symbol eingeben.

![PlayCanvas Editor - Diffuse Farbe](playcanvas-editor-diffusecolor.png)

Nun können wir das farbige Material auf die Form anwenden, indem wir das Symbol von der unteren Seite des Bildschirms (den kleinen Punkt auf der linken Seite des Materialnamens — es kann ein wenig knifflig sein, ihn auszuwählen; einfach nicht aufgeben) auf die Box in der Szene ziehen.

![PlayCanvas Editor - Box ablegen](playcanvas-editor-boxdrop.png)

Jetzt haben wir also eine blaue Box erstellt. Klicken Sie auf die Box, um ihre Entitäts-Seitenleiste anzuzeigen — dort sehen Sie Optionen zum Ändern ihrer Position, Rotation und des Maßstabs. Versuchen Sie, die Rotationswerte X: 10 und Y: 20 anzuwenden.

![PlayCanvas Editor - Rotieren](playcanvas-editor-rotate.png)

Klicken Sie nun auf den Play-Pfeil oben rechts in der Szene, um sie zu starten und zu rendern — sie wird in einem separaten Browser-Tab geöffnet.

![PlayCanvas Editor - Starten](playcanvas-editor-launch.png)

Das sieht großartig aus! Lassen Sie uns mehr Formen zur Szene hinzufügen, um es interessanter zu gestalten.

![PlayCanvas Editor - Box rendern](playcanvas-editor-boxrender.png)

## Hinzufügen weiterer Formen

Um Platz für weitere Formen zu schaffen, verschieben Sie die Box nach links, um Platz für die nächste Form zu machen. Sie können dies tun, indem Sie ihr einen X-Positionswert von -2 geben.

Das Hinzufügen anderer Formen ähnelt sehr dem Hinzufügen der Box. Klicken Sie im Hierarchie-Panel auf den Stammordner (um sicherzustellen, dass die neue Form im Stamm erscheint und nicht als Kind der Box) und klicken Sie dann auf die große _Add Entity_ (Plus)-Schaltfläche und wählen Sie Zylinder aus der Dropdown-Liste — es wird eine neue Zylinderform zur Szene hinzugefügt.

![PlayCanvas Editor - Zylinder](playcanvas-editor-cylinder.png)

Folgen Sie nun denselben Schritten wie zuvor, um den Würfel zu färben:

- Erstellen Sie ein neues Material mit der Schaltfläche _Add Asset_ (Plus).
- Stellen Sie sicher, dass das Neue Material im Assets-Panel ausgewählt ist, um den Entitätsinspektor anzuzeigen.
- Geben Sie dem Material einen neuen Namen, etwa `cylinderMaterial`.
- Klicken Sie auf Diffuse und dann auf den Farbwähler — geben Sie ihm eine orange Farbe (wir verwendeten FF9500).
- Ziehen Sie das `cylinderMaterial`-Symbol auf das Zylinderobjekt auf dem Bildschirm, um diese Farbe anzuwenden.

![PlayCanvas Editor - Zylinder Material](playcanvas-editor-cylindermaterial.png)

Verwenden Sie denselben Ansatz, um einen Kegel zur Szene hinzuzufügen und ihm eine graue Farbe zu geben (wir verwendeten `#EAEFF2`). Sie sollten jetzt drei Formen in Ihrer Szene haben, ähnlich wie auf dem Screenshot unten.

![PlayCanvas Editor - Kegel](playcanvas-editor-cone.png)

## Animieren unserer Szene

Das Animieren von 3D-Modellen könnte als [fortgeschritten](https://developer.playcanvas.com/en/tutorials/anim-blending/) angesehen werden, aber alles, was wir tun wollen, ist, einige Eigenschaften eines bestimmten Objekts zu steuern — wir können dafür eine Skriptkomponente verwenden. Klicken Sie auf die Plus-Schaltfläche im Assets-Panel, wählen Sie die Option Script und benennen Sie Ihre neue Skriptdatei `boxAnimation.js`.

![PlayCanvas Editor - Box Animation](playcanvas-editor-boxanimation.png)

Wenn Sie darauf doppelklicken, gelangen Sie in einen Code-Editor. Wie Sie sehen können, enthält die Datei bereits einige Grundcode:

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

Der interessanteste Teil ist die `update()`-Funktion, in der wir jeden Code platzieren können, den wir bei jedem Frame wiederholt haben möchten. Fügen Sie die folgende Zeile in diese Funktion ein, um den Würfel bei jedem Frame zu drehen:

```js
this.entity.rotate(dt * 10, dt * 20, dt * 30);
```

In der obigen Zeile bezieht sich `this.entity` auf das Objekt, an das das Skript angehängt wird (die Box); durch die Verwendung der `dt`-Variable, die die Delta-Zeit seit dem vorherigen Frame enthält, können wir die Box um eine unterschiedliche Menge um alle drei Achsen drehen.

1. Speichern Sie die Änderungen mit der Schaltfläche Speichern oben rechts im Code-Editor und kehren Sie dann zum Haupteditor-Tab zurück. Führen Sie hier die folgenden Schritte aus:
2. Stellen Sie sicher, dass Sie die Box in der Szene ausgewählt haben.
3. Klicken Sie im Entitätsinspektor auf _Add component_ und dann auf _Script_.
4. Am unteren Bildschirmrand sehen Sie die Liste der verfügbaren Skripte — derzeit gibt es nur `boxAnimation.js` — wenn Sie darauf klicken, wird das Animationsskript dem Box-Objekt hinzugefügt.

![PlayCanvas Editor - Box Skript](playcanvas-editor-boxscript.png)

### Der Zylinder

Nun führen wir dieselben Schritte für den Zylinder durch. Zuerst:

1. Erstellen Sie ein neues Skript-Asset.
2. Nennen Sie es `cylinderAnimation.js`.
3. Doppelklicken Sie auf das Skript-Symbol, um den Code-Editor zu starten.

Dieses Mal werden wir statt das Objekt zu drehen versuchen, es zu skalieren. Dafür benötigen wir einen Timer, um die gesamte Zeitspanne zu speichern, die seit dem Start der Animation vergangen ist. Fügen Sie diesen Code zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Und diese zwei Zeilen zur `update()`-Funktion:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die Methode `setLocalScale()` wendet die gegebenen Werte auf die X-, Y- und Z-Achsen des Objekts an. In unserem Fall modifizieren wir die Skala des Zylinders auf der Y-Achse, indem wir als Wert das `Math.sin()` des Timers mit `Math.abs()` auf das Ergebnis davon anwenden, um die Werte immer über Null zu halten (0-1; die Sinuswerte liegen normalerweise zwischen -1 und 1). Das ergibt einen schönen Skalierungseffekt als Ergebnis.

Denken Sie daran, die Datei `cylinderAnimation.js` dem Zylinderobjekt hinzuzufügen, um die gegebenen Animationen anzuwenden.

### Der Kegel

Zeit, mit dem letzten Objekt, dem Kegel, zu spielen. Erstellen Sie eine `coneAnimation.js`-Datei und doppelklicken Sie darauf, um sie im Editor zu öffnen.

Fügen Sie als Nächstes die folgende Zeile zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Um den Kegel auf und ab zu bewegen, verwenden wir die Methode `setPosition()` — fügen Sie den folgenden Code zur `update()`-Funktion hinzu:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird in jedem Frame animiert, indem der `Math.sin()`-Wert des `timers` zu jedem Zeitpunkt übergeben wird — wir haben den `this.timer`-Wert verdoppelt, um ihn höher zu bewegen.

Fügen Sie wie zuvor das `coneAnimation.js`-Skript dem Kegelobjekt hinzu.

## Testen Sie die Demo

Starten Sie die Demo, um die Effekte zu sehen — alle Formen sollten animiert werden. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas Editor - Shapes](playcanvas-editor-shapes.png)

## Zusammenfassung

Nun können Sie den Artikel über die [PlayCanvas-Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) lesen, wenn Sie ihn noch nicht gesehen haben, zurück zur Seite [Erstellen einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) gehen oder auf die Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
