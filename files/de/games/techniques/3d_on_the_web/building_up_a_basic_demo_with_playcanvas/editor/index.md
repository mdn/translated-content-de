---
title: Aufbau einer grundlegenden Demo mit dem PlayCanvas-Editor
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{GamesSidebar}}

Anstatt alles von Grund auf zu programmieren, können Sie auch den Online-**PlayCanvas-Editor** verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht gerne programmieren.

## Ein Konto erstellen

Der PlayCanvas-Editor ist kostenlos – alles, was Sie tun müssen, um zu beginnen, ist, Ihr Konto [zu registrieren](https://login.playcanvas.com/signup) und sich anzumelden:

![PlayCanvas Editor - Anmeldung](playcanvas-editor-login.png)

Wenn Sie sich zum ersten Mal anmelden, werden Sie direkt in den Editor geführt und erhalten ein einfaches Einstiegstutorial, das die Bearbeitung eines 3D-Rollballspiels beinhaltet. Sie können dies abschließen, bevor Sie mit unserem Tutorial fortfahren, wenn Sie möchten. Wenn Sie bereit sind, mit unserem Tutorial fortzufahren, gehen Sie zu Ihrer Canvas-Startseite — zum Beispiel ist meine `https://playcanvas.com/end3r`. So sieht die Seite aus — Sie können Projekte erstellen und verwalten, deren Einstellungen ändern usw.

## Ein neues Projekt erstellen

Starten Sie ein brandneues Projekt, indem Sie auf die Schaltfläche _Neu_ klicken:

![PlayCanvas Editor - Panel](playcanvas-editor-panel.png)

Das daraufhin angezeigte Dialogfeld zeigt einige verschiedene Optionen. Es gibt Starter-Kits, aber wir wollen keine Modelle laden oder ein Plattformspiel starten.

1. Wir wollen klein anfangen, also verwenden wir das leere Projekt — klicken Sie auf die Option Blank Project und geben Sie einen Namen dafür ein (wir verwenden "MDN Games Demo".)
2. Geben Sie eine Beschreibung ein, wenn Sie möchten — dies ist optional.
3. Klicken Sie auf _Erstellen_, um es zu erstellen.

![PlayCanvas Editor - Neues Projekt](playcanvas-editor-newproject.png)

Als nächstes sehen Sie die Seite Ihres Projekts — es ist noch nicht viel vorhanden. Wenn Sie auf die Schaltfläche _Editor_ klicken, wird der Online-PlayCanvas-Editor gestartet, in dem wir unsere Szene mit den Formen erstellen. Machen Sie das jetzt.

![PlayCanvas Editor - Projekt](playcanvas-editor-project.png)

## Die Szene erstellen

So sieht die Szene zu Beginn im Editor aus. Auch wenn es sich um ein leeres neues Projekt handelt, müssen wir nicht komplett bei Null anfangen — die Kamera und das Richtunglicht sind bereits vorbereitet, sodass Sie sich keine Sorgen um sie machen müssen.

![PlayCanvas Editor - Szene](playcanvas-editor-scene.png)

Nun zum kreativen Teil. Um der Szene ein Objekt hinzuzufügen, müssen Sie auf die große Schaltfläche Plus klicken, die sich oben links im Editor neben dem Text Hierarchie befindet. Wenn Sie mit der Maus über diese Schaltfläche fahren, wird das Etikett „Entität hinzufügen“ angezeigt — genau das möchten wir tun. Eine Entität ist jedes Objekt, das in der Szene verwendet wird — es kann sich um ein Objekt wie eine Box, einen Zylinder oder einen Kegel handeln, aber auch um eine Kamera, eine Licht- oder Geräuschquelle. Nachdem Sie die Schaltfläche geklickt haben, sehen Sie eine Dropdown-Liste mit vielen verschiedenen Entitäten zur Auswahl. Gehen Sie voran und klicken Sie auf _Box_ — sie wird der Szene hinzugefügt.

![PlayCanvas Editor - Neue Box](playcanvas-editor-newbox.png)

Die Box wird mit den Standardwerten erstellt — Breite, Höhe und Tiefe sind auf 1 gesetzt und sie befindet sich in der Mitte der Szene. Sie können sie herumziehen oder im rechten Bereich neue Werte anwenden.

![PlayCanvas Editor - Box](playcanvas-editor-box.png)

Um der Szene einige Farben hinzuzufügen, benötigen wir ein neues Material, das auf der neu erstellten Box verwendet wird. Klicken Sie auf die Plus-Schaltfläche im _Assets_-Tab und klicken Sie auf die Option _Material_ in der Dropdown-Liste, die erscheint, um ein neues Material zu erstellen.

![PlayCanvas Editor - Neues Material](playcanvas-editor-newmaterial.png)

Klicken Sie auf Ihr neues Material im Assets-Tab und der Inspektor für Entitäten wird auf der rechten Seite der Anzeige angezeigt. Bearbeiten Sie nun das Textfeld _Name_, um ihm einen eindeutigen Namen zu geben (wir haben _boxMaterial_ gewählt). Ein eindeutiger Name wird uns helfen, uns daran zu erinnern, wofür dieses Material gedacht ist — wir werden später weitere hinzufügen!

![PlayCanvas Editor - Box Material](playcanvas-editor-boxmaterial.png)

Um seine Farbe zu ändern, verwenden wir die Option _Diffuse_ im Inspektor für Entitäten. Klicken Sie auf _Diffuse_ und dann auf das farbige Kästchen neben dem Etikett „Color“ — es öffnet sich ein {{glossary("Farbkreis")}}. Von hier aus können Sie Ihre gewünschte Farbe anklicken oder sie im unteren Textfeld als Hex-Wert eingeben. Wir haben eine blaue Farbe mit dem Hex-Wert `0095DD` gewählt — geben Sie diesen Code in das Textfeld ein und drücken Sie die Eingabetaste, damit er akzeptiert wird.

> [!NOTE]
> Ja, Sie haben richtig gelesen — Sie müssen den Hex-Wert ohne das Hash/Pfund-Symbol eingeben.

![PlayCanvas Editor - Diffuse Farbe](playcanvas-editor-diffusecolor.png)

Jetzt können wir das farbige Material auf die Form anwenden, indem wir sein Symbol aus dem unteren Teil des Bildschirms (der kleine Punkt links vom Namen des Materials — es kann etwas knifflig sein, ihn auszuwählen; nur durchhalten) auf die Box auf der Szene ziehen.

![PlayCanvas Editor - Box ziehen](playcanvas-editor-boxdrop.png)

Also, zu diesem Zeitpunkt haben wir eine blaue Box erstellt. Klicken Sie auf die Box, um ihre Seitenleiste für Entitäten aufzurufen — Sie sehen Optionen zum Ändern ihrer Position, Rotation und Skalierung. Versuchen Sie, die Rotationswerte X: 10 und Y: 20 anzuwenden.

![PlayCanvas Editor - Drehen](playcanvas-editor-rotate.png)

Klicken Sie nun auf den Wiedergabepfeil in der oberen rechten Ecke der Szene, um die Szene zu starten und zu rendern — sie wird in einer separaten Browser-Registerkarte geöffnet.

![PlayCanvas Editor - Starten](playcanvas-editor-launch.png)

Das sieht großartig aus! Lassen Sie uns mehr Formen zur Szene hinzufügen, damit sie interessanter aussieht.

![PlayCanvas Editor - Boxrender](playcanvas-editor-boxrender.png)

## Weitere Formen hinzufügen

Um Platz für weitere Formen zu schaffen, verschieben Sie die Box nach links, um Platz für die nächste Form zu schaffen. Sie können dies tun, indem Sie ihr einen X-Positionswert von -2 geben.

Das Hinzufügen anderer Formen beinhaltet einen sehr ähnlichen Prozess wie das Hinzufügen der Box. Klicken Sie auf den Ordner Root im Hierarchie-Panel (um sicherzustellen, dass die neue Form im Root erscheint und nicht als Kind der Box) und klicken Sie dann auf die große Schaltfläche _Entität hinzufügen_ (Plus) und wählen Sie Zylinder aus der Dropdown-Liste aus — es wird eine neue Zylinderform zur Szene hinzugefügt.

![PlayCanvas Editor - Zylinder](playcanvas-editor-cylinder.png)

Folgen Sie nun den gleichen Schritten, die wir zuvor beim Einfärben des Würfels gemacht haben:

- Erstellen Sie ein neues Material mit dem _Add Asset_ (Plus) Button.
- Stellen Sie sicher, dass im Assets-Panel das Neue Material ausgewählt ist, um den Inspektor für Entitäten aufzurufen.
- Geben Sie dem Material einen neuen Namen, etwa `ZylinderMaterial`.
- Klicken Sie auf diffuse, dann auf den Farbwähler — geben Sie ihm eine orange Farbe (wir haben FF9500 verwendet.)
- Ziehen und lassen Sie das `ZylinderMaterial`-Symbol auf das Zylinderobjekt auf dem Bildschirm fallen, um diese Farbe anzuwenden.

![PlayCanvas Editor - Zylinder Material](playcanvas-editor-cylindermaterial.png)

Verwenden Sie erneut denselben Ansatz, um einen Kegel zur Szene hinzuzufügen und ihm eine graue Farbe zu geben (wir haben EAEFF2 verwendet.) Sie sollten nun drei Formen auf Ihrer Szene haben, ähnlich wie im folgenden Screenshot.

![PlayCanvas Editor - Kegel](playcanvas-editor-cone.png)

## Unsere Szene animieren

Das animieren von 3D-Modellen könnte als [fortgeschrittene](https://developer.playcanvas.com/en/tutorials/anim-blending/) Aktivität angesehen werden. Aber wir möchten nur ein paar Eigenschaften eines bestimmten Objekts steuern — wir können dafür eine Skriptkomponente verwenden. Klicken Sie auf die Plus-Schaltfläche im Asset-Panel, wählen Sie die Option Script und benennen Sie Ihre neue Skriptdatei `boxAnimation.js`.

![PlayCanvas Editor - Boxanimation](playcanvas-editor-boxanimation.png)

Wenn Sie darauf doppelklicken, gelangen Sie zu einem Code-Editor. Wie Sie sehen können, enthält die Datei bereits etwas Boilerplate-Code:

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

Der interessanteste Teil ist die Funktion `update()`, in die wir jeden Code einfügen können, den wir in jedem Frame wiederholen möchten. Fügen Sie die folgende Zeile in diese Funktion ein, um den Würfel in jedem Frame zu drehen:

```js
this.entity.rotate(dt * 10, dt * 20, dt * 30);
```

In der obigen Zeile bezieht sich `this.entity` auf das Objekt, dem das Skript angehängt wird (die Box); indem wir die `dt`-Variable verwenden, die die Zeitdifferenz zum vorherigen Frame enthält, können wir die Box um einen unterschiedlichen Betrag um alle drei Achsen drehen.

1. Speichern Sie die Änderungen mit der Schaltfläche Speichern in der oberen rechten Ecke des Code-Editors und kehren Sie dann zur Haupt-Editor-Registerkarte zurück. Hier führen Sie die folgenden Schritte aus:
2. Stellen Sie sicher, dass Sie die Box in der Szene ausgewählt haben.
3. Klicken Sie im Entitäten-Inspektor auf _Komponente hinzufügen_ und dann auf _Script_.
4. Am unteren Bildschirmrand sehen Sie die Liste der verfügbaren Skripte — derzeit gibt es nur `boxAnimation.js` — durch Anklicken wird das Animationsskript dem Box-Objekt hinzugefügt.

![PlayCanvas Editor - Boxskript](playcanvas-editor-boxscript.png)

### Der Zylinder

Nun werden wir die gleichen Schritte für den Zylinder durchführen. Zuerst:

1. Erstellen Sie ein neues Script-Asset.
2. Benennen Sie es `cylinderAnimation.js`.
3. Doppelklicken Sie auf das Skript-Symbol, um den Code-Editor zu starten.

Dieses Mal werden wir anstelle der Rotation des Objekts versuchen, es zu skalieren. Dafür benötigen wir einen Timer, um die insgesamt verstrichene Zeit seit dem Start der Animation zu speichern. Fügen Sie diesen Code der `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Und diese beiden Zeilen zur `update()`-Funktion:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die Methode `setLocalScale()` wendet die gegebenen Werte auf die X-, Y- und Z-Achsen des Objekts an. In unserem Fall modifizieren wir die Skalierung des Zylinders auf der Y-Achse, indem wir ihm als Wert das `Math.sin()` des Timers geben, wobei `Math.abs()` auf das Ergebnis angewendet wird, um die Werte immer oberhalb von null zu haben (0-1; Sinuswerte liegen normalerweise zwischen -1 und 1). Dies ergibt einen schönen Skalierungseffekt als Ergebnis.

Denken Sie daran, die `cylinderAnimation.js`-Datei zum Zylinderobjekt hinzuzufügen, um die angegebenen Animationen anzuwenden.

### Der Kegel

Zeit, mit dem letzten Objekt zu spielen — dem Kegel. Erstellen Sie eine `coneAnimation.js`-Datei und doppelklicken Sie, um sie im Editor zu öffnen.

Fügen Sie als nächstes die folgende Zeile zur `initialize()`-Funktion hinzu:

```js
this.timer = 0;
```

Um den Kegel auf und ab zu bewegen, verwenden wir die `setPosition()`-Methode — fügen Sie den folgenden Code in die `update()`-Funktion ein:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird in jedem Frame animiert, indem der `Math.sin()`-Wert des Timers zu jedem Zeitpunkt übergeben wird — wir haben den Wert von `this.timer` verdoppelt, um ihn höher zu bewegen.

Fügen Sie das `coneAnimation.js`-Skript wie zuvor dem Kegelobjekt hinzu.

## Testen Sie die Demo

Starten Sie die Demo, um die Effekte zu sehen — alle Formen sollten animiert werden. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas Editor - Formen](playcanvas-editor-shapes.png)

## Zusammenfassung

Jetzt können Sie den Artikel zum [PlayCanvas-Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) lesen, wenn Sie ihn noch nicht gesehen haben, zur Seite [Aufbau einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
