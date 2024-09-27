---
title: Ein einfaches Demo mit dem PlayCanvas-Editor erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{GamesSidebar}}

Statt alles von Grund auf zu programmieren, können Sie auch den Online-**PlayCanvas-Editor** verwenden. Dies kann ein angenehmeres Arbeitsumfeld sein, wenn Sie nicht jemand sind, der gerne programmiert.

## Ein Konto erstellen

Der PlayCanvas-Editor ist kostenlos — alles, was Sie tun müssen, um zu beginnen, ist, [ein Konto zu registrieren](https://login.playcanvas.com/signup) und sich anzumelden:

![PlayCanvas Editor - Login](playcanvas-editor-login.png)

Wenn Sie sich das erste Mal anmelden, werden Sie direkt in den Editor weitergeleitet und erhalten ein einfaches Einstiegstutorial, das die Bearbeitung eines 3D-Rollballspiels beinhaltet. Sie können dies abschließen, bevor Sie mit unserem Tutorial fortfahren, wenn Sie möchten. Wenn Sie bereit sind, mit unserem Tutorial fortzufahren, gehen Sie zu Ihrer Canvas-Startseite — zum Beispiel ist meine `https://playcanvas.com/end3r`. So sieht die Seite aus — Sie können Projekte erstellen und verwalten, ihre Einstellungen ändern usw.

## Ein neues Projekt erstellen

Starten Sie ein brandneues Projekt, indem Sie auf die Schaltfläche _New_ klicken:

![PlayCanvas Editor - Panel](playcanvas-editor-panel.png)

Das resultierende Dialogfeld zeigt einige verschiedene Optionen. Es gibt Starter-Kits, aber wir möchten keine Modelle laden oder ein Plattformspiel starten.

1. Wir möchten klein anfangen, also verwenden wir das leere Projekt — klicken Sie auf die Option Blank Project und geben Sie einen Namen dafür ein (wir verwenden "MDN Games demo").
2. Geben Sie eine Beschreibung ein, wenn Sie möchten — es ist optional.
3. Klicken Sie auf _Create_, um es zu erstellen.

![PlayCanvas Editor - New project](playcanvas-editor-newproject.png)

Als Nächstes sehen Sie die Seite Ihres Projekts — es ist noch nicht viel vorhanden. Durch Klicken auf die _Editor_-Schaltfläche starten wir den Online-PlayCanvas-Editor, in dem wir unsere Szene mit den Formen erstellen. Machen Sie dies jetzt.

![PlayCanvas Editor - Project](playcanvas-editor-project.png)

## Die Szene erstellen

So sieht die Szene anfangs im Editor aus. Auch wenn es ein leeres neues Projekt ist, müssen Sie nicht ganz von vorne anfangen — die Kamera und das Richtungslicht sind bereits vorbereitet, sodass Sie sich keine Sorgen um sie machen müssen.

![PlayCanvas Editor - Scene](playcanvas-editor-scene.png)

Nun zum kreativen Teil. Um ein Objekt zur Szene hinzuzufügen, müssen Sie auf die große Plus-Schaltfläche oben links im Bereich des Editors klicken, neben dem Text Hierarchy. Wenn Sie mit Ihrer Maus über diese Schaltfläche fahren, erscheint das Etikett 'Add Entity' — genau das wollen wir tun. Ein Entity ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie ein Kasten, Zylinder oder Kegel sein, es kann aber auch eine Kamera, eine Licht- oder Geräuschquelle sein. Nach dem Klicken auf die Schaltfläche sehen Sie eine Dropdown-Liste mit vielen verschiedenen Entities zur Auswahl. Gehen Sie vor und klicken Sie auf _Box_ — es wird zur Szene hinzugefügt.

![PlayCanvas Editor - New box](playcanvas-editor-newbox.png)

Die Box wird mit den Standardwerten erstellt — Breite, Höhe und Tiefe sind auf 1 gesetzt, und sie befindet sich in der Mitte der Szene. Sie können sie herumziehen oder neue Werte im rechten Panel anwenden.

![PlayCanvas Editor - Box](playcanvas-editor-box.png)

Um der Szene einige Farben hinzuzufügen, benötigen wir ein neues Material, das auf der neu erstellten Box verwendet wird. Klicken Sie auf die Plus-Schaltfläche im _Assets_-Tab und klicken Sie in der erscheinenden Dropdown-Liste auf die Option _Material_, um ein neues Material zu erstellen.

![PlayCanvas Editor - New material](playcanvas-editor-newmaterial.png)

Klicken Sie auf Ihr neues Material im Assets-Tab und sein Entitäts-Inspektor erscheint auf der rechten Seite des Displays. Bearbeiten Sie nun das _Name_-Textfeld, um ihm einen eindeutigen Namen zu geben (wir haben _boxMaterial_ ausgewählt). Ein eindeutiger Name hilft uns zu erinnern, für was dieses Material ist — wir werden später mehr hinzufügen!

![PlayCanvas Editor - Box material](playcanvas-editor-boxmaterial.png)

Um seine Farbe zu ändern, verwenden wir die _Diffuse_-Option im Entitäts-Inspektor. Klicken Sie auf _Diffuse_, dann wählen Sie das farbige Kästchen neben dem Color-Label — es öffnet sich ein [Farbrad](/de/docs/Glossary/color_wheel). Von hier aus können Sie Ihre gewünschte Farbe anklicken oder sie im unteren Textfeld als Hex-Wert eingeben. Wir haben eine blaue Farbe mit einem Hex-Wert von `0095DD` ausgewählt — geben Sie diesen Code im Textfeld ein und drücken Sie die Eingabetaste, damit er akzeptiert wird.

> [!NOTE]
> Ja, Sie haben richtig gelesen — Sie müssen den Hex-Wert ohne das Hash/Pound-Symbol eingeben.

![PlayCanvas Editor - Diffuse color](playcanvas-editor-diffusecolor.png)

Nun können wir das farbige Material auf die Form anwenden, indem wir sein Symbol vom unteren Teil des Bildschirms (der kleine Punkt auf der linken Seite des Materialnamens — es kann etwas knifflig sein, ihn auszuwählen; versuchen Sie es einfach weiter) auf die Box in der Szene ziehen.

![PlayCanvas Editor - Box drop](playcanvas-editor-boxdrop.png)

Also haben wir an diesem Punkt eine blaue Box erstellt. Klicken Sie auf die Box, um ihre Entitäts-Sidebar aufzurufen — Sie sehen Optionen zum Ändern ihrer Position, Rotation und Skalierung. Versuchen Sie, die Rotationswerte X: 10 und Y: 20 anzuwenden.

![PlayCanvas Editor - Rotate](playcanvas-editor-rotate.png)

Klicken Sie nun auf den Wiedergabepfeil oben rechts in der Szene, um die Szene zu starten und zu rendern — sie wird in einem separaten Browser-Tab geöffnet.

![PlayCanvas Editor - Launch](playcanvas-editor-launch.png)

Das sieht großartig aus! Lassen Sie uns mehr Formen zur Szene hinzufügen, um sie interessanter aussehen zu lassen.

![PlayCanvas Editor - Boxrender](playcanvas-editor-boxrender.png)

## Weitere Formen hinzufügen

Um Platz für weitere Formen zu schaffen, verschieben Sie die Box nach links, um Platz für die nächste Form zu schaffen. Sie können dies tun, indem Sie ihr einen X-Positionswert von -2 geben.

Das Hinzufügen anderer Formen verläuft sehr ähnlich wie das Hinzufügen der Box. Klicken Sie im Hierarchiefeld auf den Ordner Root (um sicherzustellen, dass die neue Form im Root erscheint und nicht als untergeordnetes Element der Box) und klicken Sie dann auf die große Schaltfläche _Add Entity_ (Plus) und wählen Sie Zylinder aus der Dropdown-Liste — es wird eine neue Zylinderform zur Szene hinzugefügt.

![PlayCanvas Editor - Cylinder](playcanvas-editor-cylinder.png)

Folgen Sie nun den gleichen Schritten wie zuvor beim Färben des Würfels:

- Erstellen Sie ein neues Material mit der _Add Asset_ (Plus)-Schaltfläche.
- Stellen Sie sicher, dass das neue Material im Assets-Panel ausgewählt ist, um den Entitäts-Inspektor aufzurufen.
- Geben Sie dem Material einen neuen Namen, etwa `cylinderMaterial`.
- Klicken Sie auf Diffuse, dann auf den Farbwähler — geben Sie ihm eine orangene Farbe (wir haben FF9500 verwendet).
- Ziehen Sie das `cylinderMaterial`-Symbol auf das Zylinderobjekt auf dem Bildschirm, um diese Farbe anzuwenden.

![PlayCanvas Editor - Cylinder material](playcanvas-editor-cylindermaterial.png)

Verfolgen Sie denselben Ansatz erneut, um einen Kegel zur Szene hinzuzufügen und ihm eine graue Farbe zu geben (wir haben EAEFF2 verwendet). Sie sollten nun drei Formen auf Ihrer Szene haben, etwa wie auf dem untenstehenden Screenshot.

![PlayCanvas Editor - Cone](playcanvas-editor-cone.png)

## Unsere Szene animieren

Das Animieren von 3D-Modellen mag als etwas [Fortgeschrittenes](https://developer.playcanvas.com/en/tutorials/anim-blending/) angesehen werden, aber alles, was wir tun wollen, ist es, einige Eigenschaften eines bestimmten Objekts zu steuern — wir können dafür eine Skriptkomponente verwenden. Klicken Sie auf die Plus-Schaltfläche im Assets-Panel, wählen Sie die Option Script und benennen Sie Ihre neue Skriptdatei `boxAnimation.js`.

![PlayCanvas Editor - Box animation](playcanvas-editor-boxanimation.png)

Wenn Sie darauf doppelklicken, werden Sie zu einem Code-Editor weitergeleitet. Wie Sie sehen können, enthält die Datei bereits einige Boilerplate-Codes:

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

Der interessanteste Teil ist die `update()`-Funktion, in die wir Code einfügen können, den wir in jedem Frame wiederholt haben möchten. Fügen Sie die folgende Zeile in diese Funktion ein, um den Würfel in jedem Frame zu drehen:

```js
this.entity.rotate(dt * 10, dt * 20, dt * 30);
```

In der obigen Zeile bezieht sich `this.entity` auf das Objekt, dem das Skript angehängt wird (die Box); mit der Verwendung der `dt`-Variable, die die seit dem vorherigen Frame vergangene delta-Zeit enthält, können wir die Box um einen differenzierten Betrag um alle drei Achsen drehen.

1. Speichern Sie die Änderungen mit der Schaltfläche Speichern oben rechts im Code-Editor und kehren Sie dann zum Haupteditor-Tab zurück. Befolgen Sie hier diese Schritte:
2. Stellen Sie sicher, dass Sie die Box in der Szene ausgewählt haben.
3. Klicken Sie auf _Add component_, dann _Script_ im Entitäts-Inspektor.
4. Am unteren Bildschirmrand können Sie die Liste der verfügbaren Skripte sehen — im Moment gibt es nur `boxAnimation.js` — mit einem Klick darauf wird das Animationsskript dem Box-Objekt hinzugefügt.

![PlayCanvas Editor - Box script](playcanvas-editor-boxscript.png)

### Der Zylinder

Nun führen wir die gleichen Schritte für den Zylinder aus. Zuerst:

1. Erstellen Sie ein neues Skript-Asset.
2. Benennen Sie es `cylinderAnimation.js`.
3. Doppelklicken Sie auf das Skript-Symbol, um den Code-Editor zu öffnen.

Diesmal werden wir das Objekt nicht rotieren, sondern versuchen, es zu skalieren. Dafür benötigen wir einen Timer, um die Gesamtzeit zu speichern, die seit Beginn der Animation vergangen ist. Fügen Sie diesen Code der `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Und diese beiden Zeilen der `update()`-Funktion:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die Methode `setLocalScale()` wendet die gegebenen Werte auf die X-, Y- und Z-Achsen des Objekts an. In unserem Fall modifizieren wir die Skalierung des Zylinders auf der Y-Achse, indem wir den `Math.sin()` des Timers als Wert verwenden, mit `Math.abs()` auf das Ergebnis angewendet, um die Werte immer über Null zu haben (0-1; Sin-Werte liegen normalerweise zwischen -1 und 1). Dies ergibt einen schönen Skalierungseffekt als Resultat.

Denken Sie daran, die `cylinderAnimation.js`-Datei zum Zylinderobjekt hinzuzufügen, um die gegebenen Animationen anzuwenden.

### Der Kegel

Zeit, mit dem letzten Objekt zu spielen — dem Kegel. Erstellen Sie eine `coneAnimation.js`-Datei und doppelklicken Sie darauf, um sie im Editor zu öffnen.

Fügen Sie als nächstes die folgende Zeile zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Um den Kegel auf und ab zu bewegen, verwenden wir die Methode `setPosition()` — fügen Sie den untenstehenden Code zur `update()`-Funktion hinzu:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird bei jedem Frame animiert, indem der `Math.sin()`-Wert des `timer` zu jedem Zeitpunkt übergeben wird — wir haben den Wert von `this.timer` verdoppelt, um ihn höher zu bewegen.

Fügen Sie das `coneAnimation.js`-Skript wie zuvor zum Kegelobjekt hinzu.

## Testen Sie das Demo

Starten Sie das Demo, um die Effekte zu sehen — alle Formen sollten animiert sein. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas Editor - Shapes](playcanvas-editor-shapes.png)

## Zusammenfassung

Nun können Sie den [PlayCanvas-Engine-Artikel](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) ansehen, wenn Sie ihn noch nicht gesehen haben, zur [Erstellen eines einfachen Demos mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)-Seite zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) gehen.
