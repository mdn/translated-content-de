---
title: Erstellen einer einfachen Demo mit dem PlayCanvas-Editor
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{GamesSidebar}}

Anstatt alles von Grund auf neu zu programmieren, können Sie auch den Online-**PlayCanvas-Editor** verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht gerne programmieren.

## Erstellen eines Kontos

Der PlayCanvas-Editor ist kostenlos — alles, was Sie tun müssen, um zu beginnen, ist, sich [anzumelden](https://login.playcanvas.com/signup) und einzuloggen:

![PlayCanvas Editor - Login](playcanvas-editor-login.png)

Wenn Sie sich das erste Mal anmelden, werden Sie direkt in den Editor geführt und erhalten ein einfaches Einsteiger-Tutorial, das das Bearbeiten eines 3D-Rollenspiele-Demospiels beinhaltet. Sie können dies abschließen, bevor Sie mit unserem Tutorial fortfahren, wenn Sie möchten. Wenn Sie bereit sind, mit unserem Tutorial fortzufahren, gehen Sie zu Ihrer Canvas-Startseite — zum Beispiel meine ist `https://playcanvas.com/end3r`. So sieht die Seite aus — Sie können Projekte erstellen und verwalten, ihre Einstellungen ändern usw.

## Erstellen eines neuen Projekts

Starten Sie ein brandneues Projekt, indem Sie auf die Schaltfläche _New_ klicken:

![PlayCanvas Editor - Panel](playcanvas-editor-panel.png)

Das resultierende Dialogfenster zeigt einige verschiedene Optionen. Es gibt Starter-Kits, aber wir möchten keine Modelle laden oder ein Plattformspiel starten.

1. Wir möchten klein anfangen, also werden wir das leere Projekt verwenden — klicken Sie auf die Option Blank Project und geben Sie einen Namen dafür ein (wir verwenden "MDN Games demo").
2. Geben Sie eine Beschreibung ein, wenn Sie möchten — es ist optional.
3. Klicken Sie auf _Create_, um es zu erstellen.

![PlayCanvas Editor - New project](playcanvas-editor-newproject.png)

Als Nächstes sehen Sie die Seite Ihres Projekts — noch gibt es nicht viel zu sehen. Durch Klicken auf die Schaltfläche _Editor_ starten wir den Online-PlayCanvas-Editor, in dem wir unsere Szene mit den Formen erstellen. Tun Sie das jetzt.

![PlayCanvas Editor - Project](playcanvas-editor-project.png)

## Erstellen der Szene

So sieht die Szene zu Beginn im Editor aus. Auch wenn es ein leeres neues Projekt ist, müssen wir nicht vollständig von vorne anfangen — die Kamera und das Richtungslicht sind bereits vorbereitet, sodass Sie sich darüber keine Sorgen machen müssen.

![PlayCanvas Editor - Scene](playcanvas-editor-scene.png)

Jetzt zum kreativen Teil. Um eine Entität zur Szene hinzuzufügen, müssen Sie auf die große Plus-Schaltfläche oben links im Editor klicken, neben dem Text Hierarchy. Wenn Sie mit der Maus über diese Schaltfläche fahren, wird das Label 'Add Entity' angezeigt — genau das wollen wir tun. Eine Entität ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie ein Kasten, Zylinder oder Kegel sein, aber es kann auch eine Kamera, Licht- oder Tonquelle sein. Nach dem Klicken auf die Schaltfläche wird eine Dropdown-Liste mit verschiedenen Entitäten angezeigt. Klicken Sie auf _Box_ — es wird zur Szene hinzugefügt.

![PlayCanvas Editor - New box](playcanvas-editor-newbox.png)

Die Box wird mit den Standardwerten erstellt — die Breite, Höhe und Tiefe sind auf 1 gesetzt, und sie wird in der Mitte der Szene platziert. Sie können sie herumschieben oder neue Werte im rechten Panel anwenden.

![PlayCanvas Editor - Box](playcanvas-editor-box.png)

Um der Szene einige Farben hinzuzufügen, benötigen wir ein neues Material, das auf der neu erstellten Box verwendet wird. Klicken Sie auf die Plus-Schaltfläche im _Assets_-Tab, und klicken Sie auf die Option _Material_ in der Dropdown-Liste, die erscheint, um ein neues Material zu erstellen.

![PlayCanvas Editor - New material](playcanvas-editor-newmaterial.png)

Klicken Sie auf Ihr neues Material im Assets-Tab und sein Entitätsinspektor wird auf der rechten Bildschirmseite angezeigt. Bearbeiten Sie nun das Textfeld _Name_, um ihm einen eindeutigen Namen zu geben (wir haben _boxMaterial_ gewählt). Ein eindeutiger Name hilft uns, uns zu merken, für was dieses Material gedacht ist — wir werden später noch mehr hinzufügen!

![PlayCanvas Editor - Box material](playcanvas-editor-boxmaterial.png)

Um seine Farbe zu ändern, verwenden wir die _Diffuse_-Option im Entitätsinspektor. Klicken Sie auf _Diffuse_, dann wählen Sie das farbige Feld neben dem Farblabel — es wird ein {{Glossary("color_wheel", "Farbrad")}} geöffnet. Von hier aus können Sie Ihre gewünschte Farbe auswählen oder sie im unteren Textfeld als Hex-Wert eingeben. Wir haben eine blaue Farbe mit dem Hex-Wert `0095DD` gewählt — geben Sie diesen Code im Textfeld ein und drücken Sie die Eingabetaste, damit er akzeptiert wird.

> [!NOTE]
> Ja, Sie haben richtig gelesen — Sie müssen den Hex-Wert ohne das Hash-/Pfund-Symbol eingeben.

![PlayCanvas Editor - Diffuse color](playcanvas-editor-diffusecolor.png)

Jetzt können wir das kolorierte Material auf die Form anwenden, indem wir sein Symbol aus dem unteren Teil des Bildschirms (der kleine Punkt links vom Materialnamen — es kann etwas knifflig sein, ihn auszuwählen; einfach weiter versuchen) auf die Box in der Szene ziehen.

![PlayCanvas Editor - Box drop](playcanvas-editor-boxdrop.png)

Zu diesem Zeitpunkt haben wir eine blaue Box erstellt. Klicken Sie auf die Box, um ihr Entitätsseitenleiste aufzurufen — Sie sehen Optionen zum Ändern ihrer Position, Rotation und Skalierung. Versuchen Sie, die Rotationswerte X: 10 und Y: 20 anzuwenden.

![PlayCanvas Editor - Rotate](playcanvas-editor-rotate.png)

Klicken Sie nun auf den Pfeil oben rechts in der Szene, um die Szene zu starten und zu rendern — sie wird in einem separaten Browser-Tab geöffnet.

![PlayCanvas Editor - Launch](playcanvas-editor-launch.png)

Das sieht großartig aus! Lassen Sie uns weitere Formen zur Szene hinzufügen, um sie interessanter zu gestalten.

![PlayCanvas Editor - Boxrender](playcanvas-editor-boxrender.png)

## Hinzufügen weiterer Formen

Um Platz für weitere Formen zu machen, verschieben Sie die Box nach links, um Platz für die nächste Form zu schaffen. Dies können Sie tun, indem Sie ihr einen X-Position-Wert von -2 geben.

Das Hinzufügen anderer Formen ähnelt stark dem Hinzufügen der Box. Klicken Sie auf den Root-Ordner im Hierarchie-Panel (um sicherzustellen, dass die neue Form im Root erscheint und nicht als Kind der Box) und klicken Sie dann auf die große _Add Entity_ (Plus)-Schaltfläche und wählen Sie Zylinder aus der Dropdown-Liste — es wird eine neue Zylinderform zur Szene hinzugefügt.

![PlayCanvas Editor - Cylinder](playcanvas-editor-cylinder.png)

Befolgen Sie nun die gleichen Schritte wie zuvor beim Kolorieren des Würfels:

- Erstellen Sie ein neues Material mit der _Add Asset_ (Plus)-Schaltfläche.
- Stellen Sie sicher, dass das neue Material im Assets-Panel ausgewählt ist, um den Entitätsinspektor aufzurufen.
- Geben Sie dem Material einen neuen Namen, ähnlich wie `cylinderMaterial`.
- Klicken Sie auf Diffuse, dann auf den Farbwähler — geben Sie ihm eine orange Farbe (wir haben FF9500 verwendet).
- Ziehen Sie das `cylinderMaterial`-Symbol auf das Zylinderobjekt auf dem Bildschirm, um diese Farbe anzuwenden.

![PlayCanvas Editor - Cylinder material](playcanvas-editor-cylindermaterial.png)

Befolgen Sie erneut den gleichen Ansatz, um einen Kegel zur Szene hinzuzufügen, und geben Sie ihm eine graue Farbe (wir haben EAEFF2 verwendet). Sie sollten jetzt drei Formen auf Ihrer Szene haben, ähnlich wie im folgenden Screenshot.

![PlayCanvas Editor - Cone](playcanvas-editor-cone.png)

## Animation unserer Szene

Das Animieren von 3D-Modellen könnte als [fortgeschrittene](https://developer.playcanvas.com/en/tutorials/anim-blending/) Aufgabe betrachtet werden, aber alles, was wir tun möchten, ist, einige Eigenschaften eines bestimmten Objekts zu steuern — wir können dazu eine Skriptkomponente verwenden. Klicken Sie im Assets-Panel auf die Plus-Schaltfläche, wählen Sie die Skriptoption, und benennen Sie Ihre neue Skriptdatei `boxAnimation.js`.

![PlayCanvas Editor - Box animation](playcanvas-editor-boxanimation.png)

Wenn Sie darauf doppelklicken, gelangen Sie in einen Code-Editor. Wie Sie sehen können, enthält die Datei bereits einige Boilerplate-Code:

```js
pc.script.create("boxAnimation", function (app) {
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

Der interessanteste Teil ist die `update()`-Funktion, in der wir jeglichen Code platzieren können, den wir in jedem Frame wiederholen möchten. Fügen Sie diese Zeile innerhalb dieser Funktion hinzu, um den Würfel in jedem Frame zu drehen:

```js
this.entity.rotate(dt * 10, dt * 20, dt * 30);
```

In der obigen Zeile bezieht sich `this.entity` auf das Objekt, dem das Skript angehängt wird (der Würfel); mit der `dt`-Variable, die die seit dem vorherigen Frame verstrichene Zeit enthält, können wir den Würfel um eine unterschiedliche Menge um alle drei Achsen drehen.

1. Speichern Sie die Änderungen mit der Speichern-Schaltfläche oben rechts im Code-Editor und kehren Sie dann zum Haupterstellungsreiter zurück. Befolgen Sie hier diese Schritte:
2. Stellen Sie sicher, dass Sie den Würfel in der Szene ausgewählt haben.
3. Klicken Sie auf _Add component_, dann auf _Script_ im Entitätsinspektor.
4. Unten auf dem Bildschirm sehen Sie die Liste der verfügbaren Skripte — derzeit gibt es nur `boxAnimation.js` — durch Klicken darauf wird das Animationsskript dem Würfelobjekt hinzugefügt.

![PlayCanvas Editor - Box script](playcanvas-editor-boxscript.png)

### Der Zylinder

Nun werden wir die gleichen Schritte für den Zylinder durchführen. Zuerst:

1. Erstellen Sie ein neues Skriptasset.
2. Benennen Sie es `cylinderAnimation.js`.
3. Doppelklicken Sie auf das Skriptsymbol, um den Code-Editor zu starten.

Diesmal anstatt das Objekt zu drehen, versuchen wir, es zu skalieren. Dazu benötigen wir einen Timer, um die seit Beginn der Animation vergangene Zeit zu speichern. Fügen Sie diesen Code zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Und diese zwei Zeilen zur `update()`-Funktion:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die `setLocalScale()`-Methode wendet die gegebenen Werte auf die X-, Y- und Z-Achse des Objekts an. In unserem Fall ändern wir die Skalierung des Zylinders auf der Y-Achse, indem wir ihr den `Math.sin()`-Wert des Timers als Wert geben, wobei `Math.abs()` auf das Ergebnis angewendet wird, um die Werte immer über Null zu haben (0-1; sin-Werte liegen normalerweise zwischen -1 und 1). Dies ergibt einen schönen Skalierungseffekt als Ergebnis.

Denken Sie daran, die `cylinderAnimation.js`-Datei auf das Zylinderobjekt anzuwenden, um die gegebenen Animationen anzuwenden.

### Der Kegel

Nun zum letzten Objekt — dem Kegel. Erstellen Sie eine `coneAnimation.js`-Datei und doppelklicken Sie darauf, um sie im Editor zu öffnen.

Fügen Sie dann die folgende Zeile zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Um den Kegel auf und ab zu bewegen, verwenden wir die `setPosition()`-Methode — fügen Sie den untenstehenden Code zur `update()`-Funktion hinzu:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird bei jedem Frame animiert, indem der `Math.sin()`-Wert des `timer` zu jedem Zeitpunkt übergeben wird — wir haben den `this.timer`-Wert verdoppelt, um ihn höher bewegen zu lassen.

Fügen Sie das `coneAnimation.js`-Skript dem Kegelobjekt hinzu, wie zuvor.

## Testen Sie die Demo

Starten Sie die Demo, um die Effekte zu sehen — alle Formen sollten animiert sein. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas Editor - Shapes](playcanvas-editor-shapes.png)

## Zusammenfassung

Nun können Sie den [PlayCanvas-Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine)-Artikel ansehen, wenn Sie ihn noch nicht gesehen haben, zur Seite [Erstellen einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückgehen.
