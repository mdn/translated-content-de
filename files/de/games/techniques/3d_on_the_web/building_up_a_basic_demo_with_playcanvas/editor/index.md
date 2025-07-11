---
title: Erstellen einer einfachen Demo mit dem PlayCanvas-Editor
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Anstatt alles von Grund auf neu zu schreiben, können Sie auch den Online-**PlayCanvas-Editor** verwenden. Dies kann eine angenehmere Arbeitsumgebung sein, wenn Sie nicht jemand sind, der gerne programmiert.

## Erstellen eines Kontos

Der PlayCanvas-Editor ist kostenlos — alles, was Sie tun müssen, ist, [ein Konto zu erstellen](https://login.playcanvas.com/signup) und sich anzumelden:

![PlayCanvas Editor - Anmeldung](playcanvas-editor-login.png)

Wenn Sie sich zum ersten Mal anmelden, werden Sie direkt in den Editor geführt und erhalten ein einfaches Starter-Tutorial, das das Bearbeiten eines 3D-Rollenspiegelspiels beinhaltet. Sie können dies abschließen, bevor Sie mit unserem Tutorial fortfahren, wenn Sie möchten. Wenn Sie bereit sind, mit unserem Tutorial fortzufahren, gehen Sie zu Ihrer Canvas-Startseite — zum Beispiel ist meine `https://playcanvas.com/end3r`. So sieht die Seite aus — Sie können Projekte erstellen und verwalten, ihre Einstellungen ändern usw.

## Erstellen eines neuen Projekts

Starten Sie ein brandneues Projekt, indem Sie auf die Schaltfläche _Neu_ klicken:

![PlayCanvas Editor - Panel](playcanvas-editor-panel.png)

Im resultierenden Dialogfeld sehen Sie einige verschiedene Optionen. Es sind Starter-Kits verfügbar, aber wir möchten keine Modelle laden oder ein Plattformspiel starten.

1. Wir wollen klein anfangen, also verwenden wir das leere Projekt — klicken Sie auf die Option Blank Project und geben Sie einen Namen dafür ein (wir verwenden "MDN Games demo").
2. Geben Sie eine Beschreibung ein, wenn Sie möchten — es ist optional.
3. Klicken Sie auf _Erstellen_, um es zu erstellen.

![PlayCanvas Editor - Neues Projekt](playcanvas-editor-newproject.png)

Als nächstes sehen Sie die Seite Ihres Projekts — es gibt noch nicht viel. Wenn Sie auf die Schaltfläche _Editor_ klicken, öffnen wir den Online-PlayCanvas-Editor, in dem wir unsere Szene mit den Formen erstellen. Machen Sie das jetzt.

![PlayCanvas Editor - Projekt](playcanvas-editor-project.png)

## Erstellen der Szene

So sieht die Szene ursprünglich im Editor aus. Auch wenn es ein neues leeres Projekt ist, müssen wir nicht ganz von vorne anfangen — die Kamera und das Richtungslicht sind bereits vorbereitet, sodass Sie sich darum nicht kümmern müssen.

![PlayCanvas Editor - Szene](playcanvas-editor-scene.png)

Nun zum kreativen Teil. Um ein Entität zur Szene hinzuzufügen, müssen Sie auf die große Plus-Schaltfläche oben links im Editor klicken, neben dem Hierarchie-Text. Wenn Sie mit Ihrer Maus über diese Schaltfläche schweben, wird das Label 'Entität hinzufügen' angezeigt — genau das wollen wir tun. Eine Entität ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, ein Licht oder eine Tonquelle sein. Nach dem Klicken auf die Schaltfläche sehen Sie eine Dropdown-Liste mit vielen verschiedenen Entitäten zur Auswahl. Gehen Sie vor und klicken Sie auf _Box_ — sie wird in die Szene eingefügt.

![PlayCanvas Editor - Neue Box](playcanvas-editor-newbox.png)

Die Box wird mit den Standardwerten erstellt — Breite, Höhe und Tiefe sind auf 1 gesetzt, und sie ist in der Mitte der Szene platziert. Sie können sie verschieben oder neue Werte im rechten Panel anwenden.

![PlayCanvas Editor - Box](playcanvas-editor-box.png)

Um der Szene einige Farben hinzuzufügen, benötigen wir ein neues Material, das auf die neu erstellte Box angewendet wird. Klicken Sie auf die Plus-Schaltfläche im _Assets_-Tab und auf die Option _Material_ in der erscheinenden Dropdown-Liste, um ein neues Material zu erstellen.

![PlayCanvas Editor - Neues Material](playcanvas-editor-newmaterial.png)

Klicken Sie auf Ihr neues Material im Assets-Tab, und der Entitätsinspektor wird auf der rechten Seite des Displays angezeigt. Bearbeiten Sie nun das _Name_-Textfeld, um ihm einen eindeutigen Namen zu geben (wir haben _boxMaterial_ gewählt). Ein eindeutiger Name hilft uns, uns zu erinnern, wofür dieses Material gedacht ist — wir werden später mehr hinzufügen!

![PlayCanvas Editor - Box-Material](playcanvas-editor-boxmaterial.png)

Um die Farbe zu ändern, verwenden wir die _Diffuse_-Option im Entitätsinspektor. Klicken Sie auf _Diffuse_, und wählen Sie dann das farbige Kästchen neben dem „Farbe“-Label — es öffnet sich ein {{Glossary("color_wheel", "Farbkreis")}}. Von hier aus können Sie Ihre gewünschte Farbe anklicken oder sie im unteren Textfeld als Hex-Wert eingeben. Wir haben uns für einen blauen Farbton mit dem Hex-Wert `0095DD` entschieden — geben Sie diesen Code im Textfeld ein und drücken Sie die Eingabetaste, damit er akzeptiert wird.

> [!NOTE]
> Ja, Sie haben richtig gelesen — Sie müssen den Hex-Wert ohne das Hash/Pfund-Symbol eingeben.

![PlayCanvas Editor - Diffuse-Farbe](playcanvas-editor-diffusecolor.png)

Nun können wir das farbige Material auf die Form anwenden, indem wir das Symbol unten auf dem Bildschirm (der kleine Punkt links neben dem Materialnamen — es kann ein wenig kniffelig sein, es auszuwählen; einfach durchhalten) auf die Box in der Szene ziehen.

![PlayCanvas Editor - Box ablegen](playcanvas-editor-boxdrop.png)

Zu diesem Zeitpunkt haben wir eine blaue Box erstellt. Klicken Sie auf die Box, um die Entitätsseitenleiste anzuzeigen — hier sehen Sie Optionen zum Ändern ihrer Position, Drehung und Skalierung. Versuchen Sie, die Drehwerte X: 10 und Y: 20 anzuwenden.

![PlayCanvas Editor - Drehung](playcanvas-editor-rotate.png)

Klicken Sie nun auf den Abspielpfeil in der oberen rechten Ecke der Szene, um die Szene zu starten und darzustellen — sie wird in einem separaten Browsertab geöffnet.

![PlayCanvas Editor - Starten](playcanvas-editor-launch.png)

Das sieht großartig aus! Fügen wir der Szene noch mehr Formen hinzu, um sie interessanter zu gestalten.

![PlayCanvas Editor - Boxrender](playcanvas-editor-boxrender.png)

## Weitere Formen hinzufügen

Um Platz für weitere Formen zu schaffen, verschieben Sie die Box nach links, um Platz für die nächste Form zu machen. Sie können dies tun, indem Sie ihr einen X-Positionswert von -2 geben.

Das Hinzufügen anderer Formen ähnelt sehr dem Prozess des Hinzufügens der Box. Klicken Sie auf den Stammordner im Hierarchie-Panel (um sicherzustellen, dass die neue Form im Stammverzeichnis erscheint und nicht als Kind von der Box), dann klicken Sie auf die große _Add Entity_ (Plus)-Schaltfläche und wählen Sie Zylinder aus der Dropdown-Liste — es wird eine neue Zylinderform in die Szene hinzugefügt.

![PlayCanvas Editor - Zylinder](playcanvas-editor-cylinder.png)

Folgen Sie nun den gleichen Schritten wie zuvor beim Einfärben des Würfels:

- Erstellen Sie ein neues Material über die _Add Asset_ (Plus)-Schaltfläche.
- Stellen Sie sicher, dass das Neue Material im Assets-Panel ausgewählt ist, um den Entitätsinspektor anzuzeigen.
- Geben Sie dem Material einen neuen Namen, etwa `cylinderMaterial`.
- Klicken Sie auf diffuse, dann auf den Farbwähler — geben Sie ihm eine orange Farbe (wir haben FF9500 verwendet).
- Ziehen Sie das `cylinderMaterial`-Symbol auf das Zylinderobjekt auf dem Bildschirm, um diese Farbe anzuwenden.

![PlayCanvas Editor - Zylindermaterial](playcanvas-editor-cylindermaterial.png)

Führen Sie den gleichen Ansatz erneut aus, um einen Kegel zur Szene hinzuzufügen, indem Sie ihm eine graue Farbe geben (wir haben `#EAEFF2` verwendet). Sie sollten jetzt drei Formen auf Ihrer Szene haben, ähnlich wie im folgenden Screenshot.

![PlayCanvas Editor - Kegel](playcanvas-editor-cone.png)

## Unsere Szene animieren

Die Animation von 3D-Modellen könnte als [fortgeschrittenes](https://developer.playcanvas.com/en/tutorials/anim-blending/) Thema angesehen werden, aber wir möchten einfach nur einige Eigenschaften eines bestimmten Objekts steuern — dafür können wir eine Skriptkomponente verwenden. Klicken Sie auf die Plus-Schaltfläche im Assets-Panel, wählen Sie die Skriptoption und benennen Sie Ihre neue Skriptdatei `boxAnimation.js`.

![PlayCanvas Editor - Box-Animation](playcanvas-editor-boxanimation.png)

Wenn Sie darauf doppelklicken, gelangen Sie zu einem Code-Editor. Wie Sie sehen können, enthält die Datei bereits etwas Boilerplate-Code:

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

Der interessanteste Teil ist die `update()`-Funktion, in der wir jeglichen Code einfügen können, den wir bei jedem Frame wiederholt haben möchten. Fügen Sie die folgende Zeile in diese Funktion ein, um den Würfel bei jedem Frame zu drehen:

```js
this.entity.rotate(dt * 10, dt * 20, dt * 30);
```

In der obigen Zeile bezieht sich `this.entity` auf das Objekt, an das das Skript angehängt wird (die Box); mit der `dt`-Variablen, die die seit dem vorherigen Frame verstrichene Zeit enthält, können wir den Würfel um eine unterschiedliche Menge um alle drei Achsen drehen.

1. Speichern Sie die Änderungen mit der Schaltfläche Speichern oben rechts im Code-Editor, und kehren Sie dann zum Haupt-Editor-Tab zurück. Führen Sie hier die folgenden Schritte aus:
2. Stellen Sie sicher, dass die Box in der Szene ausgewählt ist.
3. Klicken Sie auf _Komponente hinzufügen_, dann auf _Skript_ im Entitätsinspektor.
4. Unten auf dem Bildschirm sehen Sie die Liste der verfügbaren Skripte — derzeit gibt es nur `boxAnimation.js` — durch Klicken darauf wird das Animationsskript zum Box-Objekt hinzugefügt.

![PlayCanvas Editor - Box-Skript](playcanvas-editor-boxscript.png)

### Der Zylinder

Jetzt führen wir die gleichen Schritte für den Zylinder aus. Zuerst:

1. Erstellen Sie ein neues Skript-Asset.
2. Nennen Sie es `cylinderAnimation.js`.
3. Doppelklicken Sie auf das Skript-Symbol, um den Code-Editor zu starten.

Diesmal werden wir anstelle der Drehung des Objekts versuchen, es zu skalieren. Dafür benötigen wir einen Timer, um die seit Beginn der Animation verstrichene Gesamtzeit zu speichern. Fügen Sie diesen Code in die `initialize()`-Funktion ein:

```js
this.timer = 0;
```

Und diese zwei Zeilen in die `update()`-Funktion:

```js
this.timer += dt;
this.entity.setLocalScale(1, Math.abs(Math.sin(this.timer)), 1);
```

Die Methode `setLocalScale()` wendet die gegebenen Werte auf die X-, Y- und Z-Achse des Objekts an. In unserem Fall modifizieren wir die Skalierung des Zylinders auf der Y-Achse, indem wir als Wert die `Math.sin()` des Timers angeben, mit `Math.abs()` auf das Ergebnis angewendet, um die Werte immer über Null zu halten (0-1; Sinuswerte liegen normalerweise zwischen -1 und 1). Dies verleiht uns als Ergebnis einen schönen Skalierungseffekt.

Denken Sie daran, die Datei `cylinderAnimation.js` dem Zylinderobjekt hinzuzufügen, um die angegebenen Animationen anzuwenden.

### Der Kegel

Zeit, mit dem letzten Objekt zu spielen — dem Kegel. Erstellen Sie eine Datei namens `coneAnimation.js` und doppelklicken Sie darauf, um sie im Editor zu öffnen.

Fügen Sie als Nächstes die folgende Zeile in die `initialize()`-Funktion ein:

```js
this.timer = 0;
```

Um den Kegel auf und ab zu bewegen, verwenden wir die Methode `setPosition()` — fügen Sie den unten stehenden Code in die `update()`-Funktion ein:

```js
this.timer += dt;
this.entity.setPosition(2, Math.sin(this.timer * 2), 0);
```

Die Position des Kegels wird in jedem Frame animiert, indem ihm der `Math.sin()`-Wert des `timers` an jedem Zeitpunkt übergeben wird — wir haben den `this.timer`-Wert verdoppelt, damit er höher bewegt.

Fügen Sie das `coneAnimation.js`-Skript wie zuvor dem Kegelobjekt hinzu.

## Testen Sie die Demo

Starten Sie die Demo, um die Effekte zu sehen — alle Formen sollten animiert werden. Herzlichen Glückwunsch, Sie haben das Tutorial abgeschlossen!

![PlayCanvas Editor - Formen](playcanvas-editor-shapes.png)

## Zusammenfassung

Nun können Sie den Artikel zum [PlayCanvas-Engine](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine) überprüfen, wenn Sie ihn noch nicht gesehen haben, zur Seite [Erstellen einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder zurück auf die Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) gehen.
